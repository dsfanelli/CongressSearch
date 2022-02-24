const express = require("express");
const app = express();
const cors = require("cors");
const updateDB = require("./db/dbScripts/loader.js").updateDB;
const searchRequestRouter = require("./routers/searchRequestRouter.js").router;

app.use(cors());

app.use("/congresssearch/search", searchRequestRouter);

app.listen(3000, () => {
  console.log("listening");
  /*
    call is commented out, but this script should be a batch 
    job to be called maybe daily, this is just a demo
  */
  //updateDB();
});
