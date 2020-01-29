// import
const express = require("express");
const app = express();
const port = 5000;
// const connection = require("./helpers/conf");
const Discogs = require("disconnect").Client;
const bodyParser = require("body-parser");

//middleware bodyparser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//middleware discogs
const dis = new Discogs("MyUserAgent/1.0", {
  userToken: "ihaxeiWwNjRMXvAwufCvUNIqvFCRUQWDQGrtUdhU"
});

const col = new Discogs().user().collection();
col.getReleases("iktor", 0, { page: 1, per_page: 5 }, function(err, data) {
  console.log(data);
});

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
