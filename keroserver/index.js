
const express = require('express');
const PDFGenerator = require('pdfkit')
const fs = require('fs')


server = express();
const port = 5500;


server.get('/', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Keroxxxxx' + req.ip + '  สวัสดีครับทุกคนsss');

});

server.get('/k', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Keroxxxxx' + req.ip + 'KOB');
});
server.use(function (req, res, next) {
    next();
})

server.listen(port, () => {
    console.log(` OK: http://localhost:${port}`);
});