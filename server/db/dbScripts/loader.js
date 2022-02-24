/*
  This is a script for fetching data from a third party api, and preparing
  that data to be inserted into the database. It makes usage of various
  objects that hide the structure of the data's db fields/tables as well as
  the table names. The "xAPIClient" objects fetch the data. The data fetched
  from the API gets inserted "as is" (save for the votes data) as this is a 
  toy demo.
*/

//This object talks to the database and is used here to feed it data
const dbClient = require("../dbClient.js").dbClient;
const membersAPIClient = require("../../APIClients/APIClientCongressMembers.js")
  .membersAPIClient;
const billsAPIClient = require("../../APIClients/APIClientBills.js")
  .billsAPIClient;
const votesAPIClient = require("../../APIClients/APIClientVotes.js")
  .votesAPIClient;
const membersMetaData = require("../metaData/CongressMembersMetaData.js")
  .membersMetaData;
const billsMetaData = require("../metaData/BillsMetaData.js").billsMetaData;
const votesMetaData = require("../metaData/VotesMetaData.js").votesMetaData;

//yes congress number 117 is hardcoded bc this is 'just a demo'
const updateDB = async () => {
  var congressMembers = await membersAPIClient.getAllCongressMembersByCongress(
    117
  );
  var bills = await billsAPIClient.getBillsFromMembers(congressMembers);
  var votes = await votesAPIClient
    .getVotesFromMembers(congressMembers)
    .then((voteData) =>
      voteData.map((vote) => {
        const { yes, no, present, not_voting } = vote.total;
        const { bill_id, title, ...rest } = vote.bill;
        vote = { ...vote, bill_id, title, yes, no, present, not_voting };
        //deletes unwanted fields, ugly but a "for now" hack
        delete vote.bill;
        delete vote.total;
        delete vote.nomination;
        delete vote.amendment;
        return vote;
      })
    );
  /*
    load the tables with data
  */
  dbClient.updateTable(
    congressMembers,
    membersMetaData.name,
    membersMetaData.idField
  );
  dbClient.updateTable(bills, billsMetaData.name, billsMetaData.idField);
  dbClient.updateTable(votes, votesMetaData.name, votesMetaData.idField);
};

module.exports = {
  updateDB
};
