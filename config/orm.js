var connection = require('connection');
 
// Connect to the database and display list of products
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
  }
  // console.log('connected as id ' + connection.threadId);
});

var orm = {
	var selectAll = function() {
		connection.query('SELECT item_id, product_name, price FROM products', function (error, results, fields) {
  		// error will be an Error if one occurred during the query
  		// results will contain the results of the query
  		// fields will contain information about the returned results fields (if any)
  		if(error) throw error;
  		return results;
	};

	var insertOne = function() {

	};

	var updateOne = function() {

	};
};

module.exports = orm;