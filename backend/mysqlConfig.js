const mysql = require('mysql');
 const con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:"",
    insecureAuth : true,
    database:'mapmyskill'
 });
 module.exports = con;



