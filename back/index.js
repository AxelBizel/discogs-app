// import
const express = require("express");
const app = express();
const port = 5000;
// const connection = require("./helpers/conf");
const Discogs = require("disconnect").Client;
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const items = [];

//middleware bodyparser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use("/img", express.static(__dirname + "/img"));

//middleware discogs
const dis = new Discogs("MyUserAgent/1.0", {
  userToken: "ihaxeiWwNjRMXvAwufCvUNIqvFCRUQWDQGrtUdhU"
});

//Récupération collection

const col = new Discogs().user().collection();
col.getReleases("iktor", 0, { page: 1, per_page: 10000 }, function(err, data) {
  // if (err) {
  //   console.log(err);
  //   res.status(500).send("Error 500");
  // } else {
    const collection = data.releases;
    for (let i = 0; i < collection.length; i++) {
      items.push(collection[i].basic_information);
    }
  
  console.log(items.length);
});

//Récupération images

// var db = new Discogs(accessData).database();
// db.getRelease(176126, function(err, data){
// 	var url = data.images[0].resource_url;
// 	db.getImage(url, function(err, data, rateLimit){
// 		// Data contains the raw binary image data
// 		require('fs').writeFile('/tmp/image.jpg', data, 'binary', function(err){
// 			console.log('Image saved!');
// 		});
// 	});
// });

//Exemple route
app.get("/api/collection", items, (req, res) => {
  
        res.json(items);
     
});

//server
app.get("/", (request, response) => {
  response.send("Bienvenue sur Express");
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
