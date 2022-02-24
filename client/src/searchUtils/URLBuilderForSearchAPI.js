import { APIURLHeader } from "../env.js";
/*
  This abstracts URL structure from UI components in case
  they need to fetch data from a backend. It takes in 
  items essential to a search query aka search parameters,
  the search topic, page skips
*/
class URLBuilderForSearchAPI {
  constructor() {
    this.header = APIURLHeader;
    this.skipLabel = "skip=";
    this.limitLabel = "limit=";
    this.delimeter = "&";
    this.buildAPIURL = this.buildAPIURL.bind(this);
  }
  buildAPIURL(urlComponents) {
    if (!urlComponents.searchTopic) {
      throw Error("missing search topic");
    }
    const searchTopic = urlComponents.searchTopic;
    const fieldParams = urlComponents.fieldParams || "";
    const skip = urlComponents.skip || 0;
    //limit is the "page size"
    const limit = urlComponents.limit || 1;
    const options =
      this.skipLabel + skip + this.delimeter + this.limitLabel + limit;
    const queryString = fieldParams + (fieldParams ? "&" : "") + options;
    return (
      this.header +
      searchTopic +
      (queryString.startsWith("?") ? queryString : "?" + queryString)
    );
  }
}
const apiURLBuilder = new URLBuilderForSearchAPI();
export { apiURLBuilder };
