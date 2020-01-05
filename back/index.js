// index.js

const express = require("express");
const app = express();
const port = 5000;
// const connection = require("./helpers/conf");
var Discogs = require("disconnect").Client;
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


var dis = new Discogs({
  userToken: "ihaxeiWwNjRMXvAwufCvUNIqvFCRUQWDQGrtUdhU"
});

var col = new Discogs().user().collection();
col.getReleases("iktor", 0, { page: 1, per_page: 75 }, function(err, data) {
  console.log(data);
});



app.get("/", (request, response) => {
    response.send("Bienvenue sur Express");
  });
  
  app.listen(port, err => {
    if (err) {
      throw new Error("Something bad happened...");
    }
  
    console.log(`Server is listening on ${port}`);
  });
  