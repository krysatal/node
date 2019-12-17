// 路由决定了由哪个指定脚本去相应客户端的请求
var express = require('express')
var app = express()
app.get('/', function (req, res) {
    console.log('主页get请求')
    res.send('主页get请求')
})
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})
app.get('/ab*cd', function (req, res) {
    console.log('这里是正则表达')
    res.send('正则匹配')
})
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host, port)
})