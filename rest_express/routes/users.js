var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'backend'
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query('SELECT * FROM user WHERE name = ? AND password = ? ',[username, password], function(err,row, fields){
    if(err) console.log(err);
    if(row.length > 0){
      // console.log(".......",row[0]);
      res.send({'success' : true, 'message': row[0]});
    }else{
      res.send({'success': false, 'message': 'User not found please tray again'});
    }
  })
});

router.post('/new', function(req, res, next) {
  var post = {
    name : req.body.name,
    password : req.body.password,
    age : req.body.age,
    home : req.body.home
  }
  // var sql = 'INSERT INTO user (name, password, age, home) VALUES ? ';
  var sql = 'INSERT INTO user SET ? ';
  connection.query( sql , post, function(err,result){
    if(err) console.log(err);
    if(result.affectedRows > 0){
      res.send({'success' : true, 'message': 'Sinup Success'});
    }else{
      res.send({'success': false, 'message': 'Sinup Faild please tray again'});
    }
  })
});

router.get('/list', function(req, res, next) {
  connection.query('SELECT * FROM user' , function(err,row, fields){
    if(err) console.log(err);
    if(row.length > 0){
      res.send({'success' : true, 'message': row});
    }else{
      res.send({'success': false, 'message': 'User not found please tray again'});
    }
  })
});

module.exports = router;
