var http = require('http')
var url = require('url')
var util = require('util')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain;charset=utf-8'})
    res.end(util.inspect(url.parse(req.url, true)))
}).listen(8888)
console.log('程序运行')