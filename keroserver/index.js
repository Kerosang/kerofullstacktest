const express = require('express');
// const PDFGenerator = require('pdfkit')
// const fs = require('fs')
var cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var server = express();
const port = 5500;

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "drttech3005",
    database: 'drt'
});

server.use(cors());

server.get('/', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Keroxxxxx' + req.ip + '  สวัสดีครับทุกคนsss');
});
server.post('/register', jsonParser, function (req, res, next) {
    connection.execute(
        'INSERT INTO user (email,password,fname,lname) VALUES (?,?,?,?)',
        [req.body.email, req.body.password, req.body.fname, req.body.lname],
        function (err, results, fields) {
            if (err) {
                res.json({ status: "error", message: err })
                return
            }
            res.json({ status: "ok" })
        }
    );
});
server.get('/k', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Keroxxxxx' + req.ip + 'KOB');
});


server.listen(port, () => {
    console.log(` OK: http://localhost:${port}`);
});