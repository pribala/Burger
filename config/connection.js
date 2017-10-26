// Import the required packages
var mysql      = require('mysql');
 
// Create database connection parameters
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'data1sK1ng$10',
  database : 'burgers_db',
  multipleStatements: true
});
 
module.exports = connection;