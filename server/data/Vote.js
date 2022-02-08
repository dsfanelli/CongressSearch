const VotesMetaData = require("../db/metaData/VotesMetaData.js").votesMetaData;
const db = require("../db/dbClient.js").dbClient;
const fieldNames = Object.keys(VotesMetaData.fields);
const defaultVoteObject = fieldNames.reduce((object, fieldName) => {
  const fieldType = VotesMetaData.fields[fieldName];
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

const buildVoteObject = (voteData = {}) => {
  var voteObject = { ...defaultVoteObject };
  fieldNames.forEach((fieldName) => {
    voteObject[fieldName] = voteData[fieldName] || defaultVoteObject[fieldName];
  });
  return voteObject;
};
const fetchVotes = async (params) => {
  const tableName = VotesMetaData.name;
  const votes = await db
    .query(tableName, params)
    .then((votes) => votes.map((vote) => buildVoteObject(vote)));
  return votes;
};
const fetchVotesByMember = async (member_id) => {
  return await fetchVotes({ member_id });
};

module.exports = { fetchVotes, fetchVotesByMember };
