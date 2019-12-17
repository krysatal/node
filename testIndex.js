var express = require('express')
var app = express()
app.use('/img', express.static('img'));
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" ); // 传送指定路径的文件 -会自动根据文件extension设定Content-Type
})
app.get('/process_get', function (req, res) {
    var object = {
        firstName: req.query.first_name,
        latName: req.query.last_name
    }
    res.end(JSON.stringify(object));
})
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host, port)
})