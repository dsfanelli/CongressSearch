const APIBaseClass = require("./APIBaseClass.js").APIBaseClass;
class APIClientBills extends APIBaseClass {
  constructor() {
    super();
    this.membersPrefix = this.uriCommonPrefix;
    this.getBillsByCongressMember = this.getBillsByCongressMember.bind(this);
    this.getBillsFromMembers = this.getBillsFromMembers.bind(this);
  }
  async getBillsFromMembers(members) {
    var billPromises = members
      .map((member) => this.getBillsByCongressMember(member.id))
      .flat();
    const bills = await Promise.allSettled(billPromises).then(
      (billPromises) => {
        return billPromises
          .filter((billPromise) => billPromise.status === "fulfilled")
          .map((billPromise) => billPromise.value.bills)
          .flat();
      }
    );
    return bills;
  }
  getBillsByCongressMember(memberID) {
    const billTypes = [
      "introduced",
      "updated",
      "active",
      "passed",
      "enacted",
      "vetoed"
    ];

    const urls = billTypes.map((type) => {
      const url =
        this.membersPrefix +
        "/members/" +
        memberID +
        "/bills/" +
        type +
        ".json";
      return url;
    });
    return urls.map((url) => this.fetchFromAPI(url));
  }
}
const billsAPIClient = new APIClientBills();
module.exports = {
  billsAPIClient
};
