// import
const express = require("express");
const app = express();
const port = 5000;
const Discogs = require("disconnect").Client;
const bodyParser = require("body-parser");
const cors = require("cors");
let items = [];
var ls = require("local-storage");
var accessData = {
  method: "oauth",
  level: 2,
  consumerKey: "IlatcCHyzkBKGDnipIlm",
  consumerSecret: "XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl",
  token: "YvMTutJDePEOXVvNFKEUNFSXOAAxdDdJruvgGhGH",
  tokenSecret: "NalHndvwXMixAIfTBPDJbZhItCcaELUiLCrAUSEo"
};

//middleware bodyparser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(express.static("img"));


//middleware discogs
// const dis = new Discogs("MyUserAgent/1.0", {
//   userToken: "ihaxeiWwNjRMXvAwufCvUNIqvFCRUQWDQGrtUdhU"
// });

// Authenticate by consumer key and secret
// var dis = new Discogs({
//   consumerKey: "IlatcCHyzkBKGDnipIlm",
//   consumerSecret: "XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl"
// });

//OAuth
app.get("/authorize", function(req, res) {
  var oAuth = new Discogs().oauth();
  oAuth.getRequestToken(
    "IlatcCHyzkBKGDnipIlm",
    "XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl",
    "http://localhost:5000/callback",
    function(err, requestData) {
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      ls.set("requestData", requestData);
      res.redirect(requestData.authorizeUrl);
    }
  );
});

app.get("/callback", function(req, res) {
  const requestData = ls.get("requestData");
  var oAuth = new Discogs(requestData).oauth();
  oAuth.getAccessToken(
    req.query.oauth_verifier, // Verification code sent back by Discogs
    function(err, accessData) {
      ls.set("accessData", accessData);
      // Persist "accessData" here for following OAuth calls
      res.send("Received access token!");
    }
  );
});

app.get("/identity", function(req, res) {
  var dis = new Discogs(accessData);
  dis.getIdentity(function(err, data) {
    res.send(data);
  });
});

//Récupération collection

const col = new Discogs(accessData).user().collection();
col.getReleases("iktor", 0, { page: 1, per_page: 10000 }, function(err, data) {
  if (err) {
    console.log(err);
    res.status(500).send("Error 500");
  } else {
    const collection = data.releases;
    for (let i = 0; i < collection.length; i++) {
      items.push(collection[i]);
    }
  }
});


//Route permettant de récupérer l'ensemble des items de la collection
app.get("/api/collection", items, (req, res) => {
  res.json(items);
});

//LISTEN
app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
