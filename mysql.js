const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'director',
    password:'jmpadmin',
    database:'joseManuelPando'
});

conn.connect((e) => {
    if(e) throw e
    console.log('La conexion funciona')
});

conn.end();