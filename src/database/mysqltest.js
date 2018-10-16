var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qweQWE123!@#',
  database : 'mysql'
});
 
connection.connect();
 
var sql= "SELECT letter,frequency FROM testtable1" 
connection.query(sql, function (error, results) {
  if (error) throw error;
  console.log(results);
  console.log(JSON.stringify(results));
  console.log(JSON.parse(JSON.stringify(results)));
});

connection.end;
