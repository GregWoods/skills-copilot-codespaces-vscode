//create web server
var express = require('express');
var router = express.Router();

//create a connection to the database
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'test'
});

//connect to the database
connection.connect();

//define the route for the comments
router.get('/', function(req, res, next) {
  //query the database
  connection.query('SELECT * FROM comments', function(err, rows, fields) {
    if (err) throw err;
    //render the comments view
    res.render('comments', { title: 'Comments', comments: rows });
  });
});

//export the router
module.exports = router;