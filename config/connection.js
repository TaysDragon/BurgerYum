// Set up MySQL connection.
var mysql = require("mysql");

// for home
// var connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// });



//for heroku
var connection = mysql.createConnection({
    port: 3306,
    host: "hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ug7r6ubsj0buncox",
    password: "nt688ulmxb4q2qkd",
    database: "sb1h23jua2ftbcuo"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
