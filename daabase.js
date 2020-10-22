const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "Ramsankar",
    database : "mydatabase",
   insecureAuth : true,
    multipleStatements: true
});

module.exports = mysqlConnection