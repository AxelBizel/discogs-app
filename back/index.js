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
let items = [];
let userName = "";
let yearsRelease = [];
let parsedYears = [];
let yearsAdded = [];
let genres = [];
let parsedGenres = [];
let styles = [];
let firstYear = "";

// Fonction pour récupérer collection
function getCollection(userName) {
  console.log("INIT COLLECTION FUNCTION");
  const col = new Discogs(accessData).user().collection();
  return new Promise((resolve) => {
    try {
      col.getReleases(userName, 0, { page: 1, per_page: 50 }, function (
        err,
        data
      ) {
        if (err) {
          console.log(err);
        } else {
          let pages = data.pagination.pages;
          console.log("PAGES", pages);

          for (let i = 1; i <= pages; i++) {
            col.getReleases(
              userName,
              0,
              { page: `${i}`, per_page: 50 },
              function (err, data) {
                if (err) {
                  console.log(err);
                } else {
                  let dataReleases = data.releases;
                  Array.prototype.push.apply(collection, dataReleases);
                  console.log("COL FUNCTION LENGTH", collection.length);
                }
              }
            );
          }
        }
      });
      setTimeout(() => {
        resolve(collection);
      }, 8000);
    } catch (err) {
      console.log(err);
    }
  });
}

// const getCollection = new Promise((resolve, reject) => {

//   console.log("INIT COLLECTION FUNCTION");

//   const col = new Discogs(accessData).user().collection();
//     if (username != ""){
//   try {
//     col.getReleases(userName, 0, { page: 1, per_page: 50 }, async function (
//       err,
//       data
//     ) {
//       if (err) {
//         console.log(err);
//         // res.status(500).send("Error 500");
//       } else {
//         let pages = await data.pagination.pages;
//         console.log("PAGES", pages);

//         for (let i = 1; i <= pages; i++) {
//           col.getReleases(
//             userName,
//             0,
//             { page: `${i}`, per_page: 50 },
//             async function (err, data) {
//               if (err) {
//                 console.log(err);
//                 res.status(500).send("Error 500");
//               } else {
//                 let dataReleases = await data.releases;
//                 Array.prototype.push.apply(collection, dataReleases);
//                 console.log("COL FUNCTION LENGTH", collection.length);
//               }
//             }
//           );
//         }

//         resolve(collection);

//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }})

//Fonction pour récupérer l'ensemble des infos basiques pour les cards de la page collection
// async function getItems() {
//   console.log("INIT ITEMS FUNCTION");
//   const userCol = await getCollection(userName);
//   for (let i = 0; i < userCol.length; i++) {
//     items.push(userCol[i].basic_information);
//   }
//   console.log("RESULT ITEMS FUNCTION", items.length);
//   return items;
// }

//Récupération nom d'utilisateur
app.post("/api/login", async (req, res) => {
  userName = await req.body.userName;
  console.log("LOGIN", userName);
  res.status(200).send("Username OK");
  return userName;
});

//Logout
app.post("/api/logout", (req, res) => {
  collection = [];
  items = [];
  userName = "";
  yearsRelease = [];
  parsedYears = [];
  yearsAdded = [];
  genres = [];
  parsedGenres = [];
  styles = [];
  firstYear = "";
  console.log("Logout", userName);
  res.status(200).send("Logout OK");
});

//Route permettant de récupérer l'ensemble des items de la collection
app.get("/api/collection", async (req, res) => {
  console.log("GET RELEASES ACTION");
  if (collection.length === 0) {
    collection = await getCollection(userName);
  }
  if (items.length === 0) {
    for (let i = 0; i < collection.length; i++) {
      items.push(collection[i].basic_information);
    }
  }
  console.log("RESULT RELEASES ACTION", items.length);
  res.json(items);
});

// //Route permettant de récupérer les années de sortie triées
app.get("/api/years", collection, (req, res) => {
  console.log("GET YEARS");
  if (yearsRelease.length === 0) {
    for (let i = 0; i < collection.length; i++) {
      yearsRelease.push(collection[i].basic_information.year);
    }
  }
  if (parsedYears.length === 0) {
    yearsRelease.forEach((i) => {
      if (i in parsedYears) parsedYears[i] += 1;
      else parsedYears[i] = 1;
    });
  }
  res.json(parsedYears);
});

// //Route permettant de récupérer la 1e année de sortie
app.get("/api/firstYear", collection, (req, res) => {
  if (yearsRelease.length === 0) {
    for (let i = 0; i < collection.length; i++) {
      yearsRelease.push(collection[i].basic_information.year);
    }
  }
  firstYear = Math.min(...yearsRelease.filter((i) => i > 0));
  res.send(firstYear);
});

// //Route permettant de récupérer les dates d'ajout
app.get("/api/yearsAdded", collection, (req, res) => {
  if (yearsAdded.length === 0) {
    for (let i = 0; i < collection.length; i++) {
      yearsAdded.push(collection[i].date_added);
    }
  }
  res.json(yearsAdded);
});

// //Route permettant de récupérer les styles
app.get("/api/styles", collection, (req, res) => {
  if (styles.length === 0) {
    for (let i = 0; i < collection.length; i++) {
      styles.push(collection[i].basic_information.styles);
    }
  }
  res.json(styles);
});

// //Route permettant de récupérer les genres
app.get("/api/genres", parsedGenres, (req, res) => {
  if (genres.length === 0) {
    for (let i = 0; i < collection.length; i++) {
      genres.push(collection[i].basic_information.genres);
    }
  }
  genres.forEach((i) => {
    if (i in parsedGenres) parsedGenres[i] += 1;
    else parsedGenres[i] = 1;
  });
  res.json(genres);
});

//LISTEN
app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
