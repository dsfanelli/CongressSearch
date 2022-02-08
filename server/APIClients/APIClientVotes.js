const APIBaseClass = require("./APIBaseClass.js").APIBaseClass;
class APIClientVotes extends APIBaseClass {
  constructor() {
    super();
    this.votesPrefix = this.urlCommonPrefix + "/members/";
    this.getVotesFromMembers = this.getVotesFromMembers.bind(this);
    this.getVotesByCongressMember = this.getVotesByCongressMember.bind(this);
    this.assignUniqueIDsPerVote = this.assignUniqueIDsPerVote.bind(this);
  }
  async getVotesFromMembers(members) {
    var votePromises = members.map((member) =>
      this.getVotesByCongressMember(member.id)
    );

    var votes = await Promise.allSettled(votePromises).then((votePromises) => {
      return votePromises
        .filter((votePromise) => votePromise.status === "fulfilled")
        .map((votePromise) => votePromise.value.votes)
        .flat();
    });
    this.assignUniqueIDsPerVote(votes);
    return votes;
  }
  getVotesByCongressMember(memberID) {
    const url = this.votesPrefix + memberID + "/votes.json";
    return this.fetchFromAPI(url);
  }
  assignUniqueIDsPerVote(votes) {
    for (var x = 0; x < votes.length; x++) {
      votes[x].vote_id = votes[x].member_id + ":" + x;
    }
    return votes;
  }
}
const votesAPIClient = new APIClientVotes();
module.exports = {
  votesAPIClient
};
