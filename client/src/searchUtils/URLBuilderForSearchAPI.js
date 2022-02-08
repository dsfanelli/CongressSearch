import { APIURLHeader } from "../env.js";

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
    const limit = urlComponents.limit || 0;
    const options =
      this.skipLabel + skip + this.delimeter + this.limitLabel + limit;

    const queryString = fieldParams + (fieldParams ? "&" : "") + options;
    return this.header + searchTopic + "?" + queryString;
  }
}
const apiURLBuilder = new URLBuilderForSearchAPI();
export { apiURLBuilder };
