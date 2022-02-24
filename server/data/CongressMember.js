/*
  Handles data fetching and construction of congress member objects
*/
const membersMetaData = require("../db/metaData/CongressMembersMetaData.js")
  .membersMetaData;
const db = require("../db/dbClient.js").dbClient;
const fetchVotesByMember = require("./Vote.js").fetchVotesByMember;
const fieldNames = Object.keys(membersMetaData.fields);
const defaultMemberObject = fieldNames.reduce((object, fieldName) => {
  const fieldType = membersMetaData.fields[fieldName];
  if (fieldType === "String") {
    object[fieldName] = "";
  } else if (fieldType === "Integer") {
    object[fieldName] = 0;
  } else if (fieldType === "Double") {
    object[fieldName] = 0.0;
  } else if (fieldType === "Boolean") {
    object[fieldName] = false;
  } else if (fieldType === "Date") {
    const date = new Date();
    object[fieldName] =
      date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  } else if (fieldType === "Timestamp") {
    object[fieldName] = Date.now();
  } else if (fieldType === "Object") {
    object[fieldName] = {};
  } else if (fieldType === "Array") {
    object[fieldName] = [];
  }
  return object;
}, {});

const buildMemberObject = async (memberData = {}) => {
  var memberObject = { ...defaultMemberObject };
  fieldNames.forEach((fieldName) => {
    memberObject[fieldName] = memberData[fieldName];
    //|| defaultMemberObject[fieldName];
  });
  /*memberObject["billsSponsored"] = await fetchVotesByMember(
    memberObject[membersMetaData.idField]
  );*/
  return memberObject;
};
const fetchCongressMembers = async (params = {}) => {
  const tableName = membersMetaData.name;
  var members = await db
    .query(tableName, params)
    .then((members) => members.map((member) => buildMemberObject(member)));
  members = await Promise.allSettled(members)
    .then((members) =>
      members.filter((member) => member.status === "fulfilled")
    )
    .then((members) => members.map((member) => member.value));
  return members;
};
module.exports = { fetchCongressMembers };
