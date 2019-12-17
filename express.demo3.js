// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
var express = require('express')
var app = express()
app.use('/img', express.static('img'))
app.get('/',function (req, res) {
    console.log('主页get请求测试')
    res.send('主页get请求测试')
})
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host, port)
})
// 如果你将图片， CSS, JavaScript 文件放在 img 目录下，你可以这么写
// 浏览器请求url可以是localhost:8888/img/zs.png