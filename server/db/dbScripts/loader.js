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
        delete vote.bill;
        delete vote.total;
        delete vote.nomination;
        delete vote.amendment;
        return vote;
      })
    );
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
