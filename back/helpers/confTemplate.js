const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'xxx',
  password : 'xxx',
  database : 'discogs'
});
module.exports  =  connection;