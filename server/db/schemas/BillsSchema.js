const billSchema = {
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
  house_passage: "Boolean",
  senate_passage: "Boolean",
  enacted: "Boolean",
  vetoed: "Boolean",
  cosponsors: "Integer",
  committees: "String",
  committee_codes: "Array",
  subcommittee_codes: "Array",
  primary_subject: "String",
  summary_short: "String",
  latest_major_action_date: "Date",
  latest_major_action: "String."
};

module.exports = {
  billSchema
};
