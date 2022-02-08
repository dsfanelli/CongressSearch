const express = require("express");
const app = express();
const cors = require("cors");
const updateDB = require("./db/dbScripts/loader.js").updateDB;
const searchRequestRouter = require("./routers/searchRequestRouter.js").router;

app.use(cors());

app.use("/congresssearch/search", searchRequestRouter);

app.listen(3000, () => {
  console.log("listening");

  //updateDB();
});
