const APIBaseClass = require("./APIBaseClass.js").APIBaseClass;
class APIClientCongressMembers extends APIBaseClass {
  constructor() {
    super();
    this.membersPrefix = this.urlCommonPrefix;
    this.getAllCongressMembersByCongress = this.getAllCongressMembersByCongress.bind(
      this
    );
  }
  async getAllCongressMembersByCongress(congressNum) {
    const senateURL =
      this.membersPrefix + "/" + congressNum + "/senate/members.json";
    const houseURL =
      this.membersPrefix + "/" + congressNum + "/house/members.json";
    var senators = await this.fetchFromAPI(senateURL);
    var reps = await this.fetchFromAPI(houseURL);
    senators = senators.members;
    reps = reps.members;
    return senators.concat(reps);
  }
}
const membersAPIClient = new APIClientCongressMembers();
module.exports = {
  membersAPIClient
};
