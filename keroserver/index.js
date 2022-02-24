const express = require('express');
server = express();
const port = 5500;
server.get('/', function (req, res) {
    console.log('welcome :' + req.ip);
    res.send('Kero' + req.ip + '  สวัสดีครับทุกคนsss');

});
server.use(function (req, res, next) {
    next();
})

server.listen(port, () => {
    console.log(` OK: http://localhost:${port}`);
});