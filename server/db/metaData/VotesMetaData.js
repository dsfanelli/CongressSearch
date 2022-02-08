const MetaData = require("./MetaData.js");
class VotesMetaData extends MetaData {
  constructor() {
    super(name, idField, fields);
  }
}
const name = "votes";
const idField = "vote_id";
const fields = {
  vote_id: "String",
  member_id: "String",
  chamber: "String",
  congress: "String",
  session: "Integer",
  roll_call: "Integer",
  vote_uri: "String",
  bill_id: "String",
  title: "String",
  description: "String",
  question: "String",
  result: "String",
  date: "Date",
  time: "String",
  yes: "Integer",
  no: "Integer",
  present: "Integer",
  not_voting: "Integer",
  position: "String"
};

const votesMetaData = new VotesMetaData(name, idField, fields);
module.exports = {
  votesMetaData
};
