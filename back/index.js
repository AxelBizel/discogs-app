// import
const express = require("express");
const app = express();
const port = 5000;
const Discogs = require("disconnect").Client;
const bodyParser = require("body-parser");
const cors = require("cors");
let ls = require("local-storage");
const axios = require("axios");
let db = new Discogs().database();

//AccessData
let accessData = {
  method: "oauth",
  level: 2,
  consumerKey: "IlatcCHyzkBKGDnipIlm",
  consumerSecret: "XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl",
  token: "YvMTutJDePEOXVvNFKEUNFSXOAAxdDdJruvgGhGH",
  tokenSecret: "NalHndvwXMixAIfTBPDJbZhItCcaELUiLCrAUSEo",
};

//Middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.static("img"));

//OAuth
app.get("/authorize", function (req, res) {
  var oAuth = new Discogs().oauth();
  oAuth.getRequestToken(
    "IlatcCHyzkBKGDnipIlm",
    "XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl",
    "http://localhost:5000/callback",
    function (err, requestData) {
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      ls.set("requestData", requestData);
      res.redirect(requestData.authorizeUrl);
    }
  );
});

app.get("/callback", function (req, res) {
  const requestData = ls.get("requestData");
  var oAuth = new Discogs(requestData).oauth();
  oAuth.getAccessToken(
    req.query.oauth_verifier, // Verification code sent back by Discogs
    function (err, accessData) {
      ls.set("accessData", accessData);
      // Persist "accessData" here for following OAuth calls
      res.send("Received access token!");
    }
  );
});

app.get("/identity", function (req, res) {
  var dis = new Discogs(accessData);
  dis.getIdentity(function (err, data) {
    res.send(data);
  });
});

//Variables
let collection = [];
// let items = [];
let userName = "";
let yearsRelease = [];
let parsedYears = [];
let yearsAdded = [];
let genres = [];
let parsedGenres = [];
let styles = [];
let firstYear = "";

//Fonction pour récupérer collection
function getCollection(userName) {
  const col = new Discogs(accessData).user().collection();
  col.getReleases(userName, 0, { page: 1, per_page: 50 }, async function (
    err,
    data
  ) {
    if (err) {
      console.log(err);
      res.status(500).send("Error 500");
    } else {
      let collection = await data;
      let pages = data.pagination.pages;
      console.log("PAGES", pages);

      for (let i = 1; i <= pages; i++) {
        col.getReleases(
          userName,
          0,
          { page: `${i}`, per_page: 50 },
          async function (err, data) {
            if (err) {
              console.log(err);
              res.status(500).send("Error 500");
            } else {
              await Array.prototype.push.apply(collection, data.releases);
            }
          }
        );
      }
    }
    console.log("COL ASYNC", collection.length);
    return collection;
  });
}

//Fonction pour récupérer l'ensemble des infos basiques pour les cards de la page collection
async function getItems(collection) {
  try {
    let items = [];
    let collection = await getCollection();
    if (collection) {
      for (let i = 0; i < collection.length; i++) {
        items.push(collection[i].basic_information);
      }
    }
    return items;
  } catch (e) {
    console.log("Error", e);
  }
}

//Récupération nom d'utilisateur
app.post("/api/login", async (req, res) => {
  userName = req.body.userName;
  console.log("LOGIN", userName);

  //Récupération collection
  // getCollection(userName);
  return userName;
});

//Récupération infos complémentaires
// for (let i = 0; i < items.length; i++) {
//   db.getRelease(items[i].id, function(err, data){
// 	console.log("DATA", data);
// })};

//Route permettant de récupérer l'ensemble des items de la collection
app.get("/api/collection", collection, async (req, res) => {
  getItems();
  res.json(items);
  console.log("COUCOU COLLEC", items.length);
});

// //Route permettant de récupérer les années de sortie triées
// app.get("/api/years", collection, (req, res) => {
//   if (yearsRelease.length === 0) {
//     for (let i = 0; i < collection.length; i++) {
//       yearsRelease.push(collection[i].basic_information.year);
//     }
//   }
//   if (parsedYears.length === 0) {
//     yearsRelease.forEach((i) => {
//       if (i in parsedYears) parsedYears[i] += 1;
//       else parsedYears[i] = 1;
//     });
//   }
//   res.json(parsedYears);
// });

// //Route permettant de récupérer la 1e année de sortie
// app.get("/api/firstYear", collection, (req, res) => {
//   if (yearsRelease.length === 0) {
//     for (let i = 0; i < collection.length; i++) {
//       yearsRelease.push(collection[i].basic_information.year);
//     }
//   }
//   firstYear = Math.min(...yearsRelease.filter((i) => i > 0));
//   res.send(firstYear);
// });

// //Route permettant de récupérer les dates d'ajout
// app.get("/api/yearsAdded", collection, (req, res) => {
//   if (yearsAdded.length === 0) {
//     for (let i = 0; i < collection.length; i++) {
//       yearsAdded.push(collection[i].date_added);
//     }
//   }
//   res.json(yearsAdded);
// });

// //Route permettant de récupérer les styles
// app.get("/api/styles", collection, (req, res) => {
//   if (styles.length === 0) {
//     for (let i = 0; i < collection.length; i++) {
//       styles.push(collection[i].basic_information.styles);
//     }
//   }
//   res.json(styles);
// });

// //Route permettant de récupérer les genres
// app.get("/api/genres", parsedGenres, (req, res) => {
//   if (genres.length === 0) {
//     for (let i = 0; i < collection.length; i++) {
//       genres.push(collection[i].basic_information.genres);
//     }
//   }
//   genres.forEach((i) => {
//     if (i in parsedGenres) parsedGenres[i] += 1;
//     else parsedGenres[i] = 1;
//   });
//   res.json(genres);
// });

//LISTEN
app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
