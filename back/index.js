// import
const express = require('express')
const app = express()
const port = 5000
const Discogs = require('disconnect').Client
const bodyParser = require('body-parser')
const cors = require('cors')

//Variables
let items = []
let yearsRelease = []
let yearsAdded = []
let genres = []
let styles = []
let parsedYears = []
let ls = require('local-storage')
let firstYear = ''

//AccessData
let accessData = {
  method: 'oauth',
  level: 2,
  consumerKey: 'IlatcCHyzkBKGDnipIlm',
  consumerSecret: 'XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl',
  token: 'YvMTutJDePEOXVvNFKEUNFSXOAAxdDdJruvgGhGH',
  tokenSecret: 'NalHndvwXMixAIfTBPDJbZhItCcaELUiLCrAUSEo'
}

//Middlewares
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(cors())
app.use(express.static('img'))

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
app.get('/authorize', function (req, res) {
  var oAuth = new Discogs().oauth()
  oAuth.getRequestToken(
    'IlatcCHyzkBKGDnipIlm',
    'XEyfrfnqnVzbmpHKTxQTrBVPLeZxANtl',
    'http://localhost:5000/callback',
    function (err, requestData) {
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      ls.set('requestData', requestData)
      res.redirect(requestData.authorizeUrl)
    }
  )
})

app.get('/callback', function (req, res) {
  const requestData = ls.get('requestData')
  var oAuth = new Discogs(requestData).oauth()
  oAuth.getAccessToken(
    req.query.oauth_verifier, // Verification code sent back by Discogs
    function (err, accessData) {
      ls.set('accessData', accessData)
      // Persist "accessData" here for following OAuth calls
      res.send('Received access token!')
    }
  )
})

app.get('/identity', function (req, res) {
  var dis = new Discogs(accessData)
  dis.getIdentity(function (err, data) {
    res.send(data)
  })
})

//Récupération collection
const col = new Discogs(accessData).user().collection()
col.getReleases('iktor', 0, { page: 1, per_page: 10000 }, function (err, data) {
  if (err) {
    console.log(err)
    res.status(500).send('Error 500')
  } else {
    const collection = data.releases
    console.log(collection[1])
    for (let i = 0; i < collection.length; i++) {
      //recupération items
      items.push(collection[i].basic_information)
      //récupération années de sortie
      yearsRelease.push(collection[i].basic_information.year)
      //récupération années d'ajout
      yearsAdded.push(collection[i].date_added)
      //récupération des genres
      genres.push(collection[i].basic_information.genres)
      //récupération des styles
      styles.push(collection[i].basic_information.styles)
    }

    //tri des années de sortie
    firstYear = Math.min(...yearsRelease.filter(i => i > 0))

    yearsRelease.forEach(i => {
      if (i in parsedYears) parsedYears[i] += 1
      else parsedYears[i] = 1
    })
  }
})

//Route permettant de récupérer l'ensemble des items de la collection
app.get('/api/collection', items, (req, res) => {
  res.json(items)
})

//Route permettant de récupérer les années de sortie triées
app.get('/api/years', parsedYears, (req, res) => {
  res.json(parsedYears)
})

//Route permettant de récupérer la 1e année de sortie
app.get('/api/firstYear', (req, res) => {
  res.send(firstYear)
})


//Route permettant de récupérer les dates d'ajout
app.get('/api/yearsAdded', yearsAdded, (req, res) => {
  res.json(yearsAdded)
})

//Route permettant de récupérer les styles
app.get('/api/styles', styles, (req, res) => {
  res.json(styles)
})

//Route permettant de récupérer les genres
app.get('/api/genres', genres, (req, res) => {
  res.json(genres)
})

//LISTEN
app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...')
  }
  console.log(`Server is listening on ${port}`)
})
