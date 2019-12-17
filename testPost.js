var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// 创建 application/x-www-form-urlencoded 编码解析
let urlencoded = bodyParser.urlencoded({express: false})
app.get('/testPost.html', function (req, res) {
    res.sendFile(__dirname + '/' + '/testPost.html')
})
app.post('/process_post', urlencoded, function (req, res) {
    var object = {
        firstName: req.body.first_name, // 获取请求体中的参数
        lastName: req.body.last_name
    }
    res.end(JSON.stringify(object))
})
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host, port)
})