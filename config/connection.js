// Import the required packages
var mysql = require('mysql');
var connection; 
// Create database connection parameters
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'data1sK1ng$10',
	  database : 'burgers_db',
	  multipleStatements: true
});
}; 
// Connect to the database and display list of products
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
  }
  // console.log('connected as id ' + connection.threadId);
});
 
module.exports = connection;