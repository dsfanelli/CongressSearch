/*
  Parent for MetaData objects which are used as a reference 
  for table structures so the user can read it to know what 
  fields are in a table as well as the name of that table
  stored in the db. They provide good abstraction of table
  schema in case it needs to change at some point. The fields "field"
  can also be used to construct data objects.
*/
class MetaData {
  constructor(name, idField, fields) {
    this.name = name;
    this.idField = idField;
    this.fields = fields;
  }
}
module.exports = MetaData;
