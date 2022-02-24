const fetch = require("node-fetch-npm");

/*
  A base class for objects that query propublica's api to extend.
  It hides logic and values used to fetch from their api. The children
  are used by ./dbScripts/loader.js
*/

class APIBaseClass {
  constructor() {
    this.headers = {
      headers: {
        "x-api-key": "OFMk7shQ9qgh8BVkHiRZ1FeLnNBwdPEsrVG5ukBe"
      }
    };
    this.urlCommonPrefix = "https://api.propublica.org/congress/v1";
    this.fetchFromAPI = this.fetchFromAPI.bind(this);
  }

  fetchFromAPI(url) {
    return fetch(url, this.headers)
      .then((data) => data.json())
      .then((json) => json.results[0])
      .catch((error) => {
        throw Error(error);
      });
  }
}

module.exports = { APIBaseClass };
