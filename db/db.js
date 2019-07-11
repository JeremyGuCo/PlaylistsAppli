const  mysql = require('mysql');
const  db = mysql.createConnection({
host :  'localhost',
user :  'root',
password :  'Password8!', 
database :  'playlist', 
});
module.exports = db;