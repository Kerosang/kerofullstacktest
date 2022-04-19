
const express = require('express');
// const PDFGenerator = require('pdfkit')
const fs = require('fs')
var cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var server = express();
const bcrypt = require('bcrypt');
const saltRounds = 7;
var jwt = require('jsonwebtoken');
const secret = 'kerologin';
const port = 5500;
const mysql = require('mysql2');
let jsonmysql = require('./mysqlconnect.json')
const objmysql = JSON.stringify(jsonmysql);
const jsondataconnectmysql = JSON.parse(objmysql)

const connection = mysql.createConnection(jsondataconnectmysql);

server.use(cors());

server.get('/', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Keroxxxxx' + req.ip + '  สวัสดีครับทุกคนsss');
});
server.post('/register', jsonParser, function (req, res, next) {

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        connection.execute(
            'INSERT INTO user (email,password,fname,lname) VALUES (?,?,?,?)',
            [req.body.email, hash, req.body.fname, req.body.lname],
            function (err, results, fields) {
                if (err) {
                    res.json({ status: "error", message: err })
                    return;
                }
                else {
                    res.json({ status: "ok" })
                }
            }
        );
    });
});
server.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM user WHERE email=?',
        [req.body.email],
        function (err, user, fields) {
            if (err) {
                res.json({ status: 'error', message: err })
                return;
            }
            if (user.length == 0) {
                res.json({ status: 'error', message: 'No user found' })
                return
            }
            bcrypt.compare(req.body.password, user[0].password, function (err, islogin) {
                if (islogin) {
                    var token = jwt.sign({ email: user[0].email }, secret, { expiresIn: '1h' });
                    res.json({ status: 'ok', message: 'login success', token });
                }
                else {
                    res.json({ status: 'error', message: 'login failed' });
                }
            });
        });
});
server.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secret);
        res.json({ status: 'ok', decoded });
    } catch (err) {
        res.json({ status: 'error', message: err.message });
    }

});
server.get('/k', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Keroxxxxx' + req.ip + 'KOB');
});


server.listen(port, () => {
    console.log(` OK: http://localhost:${port}`);
});