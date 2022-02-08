const MetaData = require("./MetaData.js");
class BillsMetaData extends MetaData {
  constructor() {
    super(name, idField, fields);
  }
}

const name = "bills";
const idField = "bill_id";
const fields = {
  bill_id: "String",
  bill_type: "String",
  number: "String",
  bill_uri: "String",
  title: "String",
  sponsor_title: "String",
  sponsor_id: "String",
  sponsor_name: "String",
  sponsor_state: "String",
  sponsor_party: "String",
  introduced_date: "Date",
  active: "Boolean",
  house_passage: "Date",
  senate_passage: "Date",
  enacted: "Date",
  vetoed: "Date",
  cosponsors: "Integer",
  committees: "String",
  committee_codes: "Array",
  subcommittee_codes: "Array",
  primary_subject: "String",
  summary_short: "String",
  latest_major_action_date: "Date",
  latest_major_action: "String"
};

const billsMetaData = new BillsMetaData(name, idField, fields);
module.exports = {
  billsMetaData
};
