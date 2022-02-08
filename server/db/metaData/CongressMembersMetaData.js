const MetaData = require("./MetaData.js");

class CongressMembersMetaData extends MetaData {
  constructor() {
    super(name, idField, fields);
  }
}

const name = "congressmembers";
const idField = "id";
const fields = {
  id: "String",
  title: "String",
  short_title: "String",
  first_name: "String",
  middle_name: "String",
  last_name: "String",
  suffix: "String",
  date_of_birth: "Date",
  gender: "String",
  party: "String",
  leadership_role: "String",
  in_office: "Boolean",
  cook_pvi: "Integer",
  dw_nominate: "Double",
  ideal_point: "Double",
  seniority: "Integer",
  next_election: "Integer",
  total_votes: "Integer",
  missed_votes: "Integer",
  total_present: "Integer",
  last_updated: "Timestamp",
  office: "String",
  phone: "String",
  fax: "String",
  state: "String",
  senate_class: "Integer",
  state_rank: "String",
  lis_id: "String",
  missed_votes_pct: "Double",
  votes_with_party_pct: "Double",
  votes_against_party_pct: "Double",
  billsSponsored: "Array"
};

const membersMetaData = new CongressMembersMetaData(name, idField, fields);
module.exports = {
  membersMetaData
};
