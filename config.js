const mysql = require('mysql')
module.exports.pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Acaspera@123",
    database : "users"
})