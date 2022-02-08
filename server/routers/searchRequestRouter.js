const express = require("express");
const router = express.Router();
const regexStringConverter = require("../middleware/convertRegexStrings.js")
  .convertRegexStrings;
const fetchCongressMembers = require("../data/CongressMember.js")
  .fetchCongressMembers;
const fetchBills = require("../data/Bill.js").fetchBills;
const fetchVotes = require("../data/Vote.js").fetchVotes;

router.use(regexStringConverter);

router.get("/:searchTopic", async (req, res, next) => {
  const searchTopic = req.params.searchTopic;
  var results = [];
  if (searchTopic === "congressmembers") {
    results = await fetchCongressMembers(req.query);
  } else if (searchTopic === "bills") {
    results = await fetchBills(req.query);
  } else if (searchTopic === "votes") {
    results = await fetchVotes(req.query);
  } else {
    throw Error("Search topic not valid");
  }
  res.json(results);
});
module.exports = { router };
