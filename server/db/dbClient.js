const { MongoClient } = require("mongodb");
/*
  A DBClient is used to communicate with the database 
  for database related operations like querying and loading.
  It hides away the dbms, as well as the actual syntax used
  to query the db that it relies on.
*/
class DBClient {
  constructor() {
    this.uri =
      "mongodb+srv://dfanelli326:7ilG5JPYBgcDovTT@cluster0.admee.mongodb.net/congresssearch?retryWrites=true&w=majority";
    this.client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
      keepAlive: 1
    });
    this.db = this.client.db("congresssearch");
    this.updateTable = this.updateTable.bind(this);
    this.prepareProjection = this.prepareProjection.bind(this);
    this.query = this.query.bind(this);
  }

  async updateTable(recordsToMerge, tableName, idFieldName) {
    console.log("updating " + tableName);
    const client = this.client;
    const db = this.db;
    await client
      .connect()
      .then(async () => {
        const collection = db.collection(tableName);
        for (var record of recordsToMerge) {
          var id = record[idFieldName];
          await collection
            .updateOne(
              { [idFieldName]: id },
              { $set: record },
              { upsert: true }
            )
            .catch((error) => error);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((results) => {
        console.log("finished");
      });
  }

  prepareProjection(projectionArray) {
    var projObject = {};
    projectionArray.forEach((projection) => {
      projObject[projection] = 1;
    });
    return projObject;
  }
  async query(searchTopic, paramsObject, projectionArray = []) {
    const client = this.client;
    const db = this.db;
    const collection = db.collection(searchTopic);
    const projection = this.prepareProjection(projectionArray);
    var { limit, skip, ...fieldFilters } = paramsObject;
    limit = !limit ? 0 : parseInt(limit, 10);
    skip = !skip ? 0 : parseInt(skip, 10);
    var res = null;
    await client.connect().then(async () => {
      res = await collection
        .find(fieldFilters, projection)
        .skip(skip)
        .limit(limit)
        .toArray();
    });
    return res;
  }
}
const dbClient = new DBClient();
module.exports = { dbClient };
