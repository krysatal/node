var express = require('express')
var app = express()
var fs = require('fs')

var bodyParser = require('body-parser') // 用来处理json，row等数据编码
var multer = require('multer') // 用于处理 enctype="multipart/form-data"
app.use('/img', express.static('img'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
app.get('/testUpload.html', function (req, res) {
    res.sendFile(__dirname + '/' + '/testUpload.html') // 传送指定路径的文件
})
app.post('/file_upload', function (req, res) {
    console.log(req.files[0])
    // res.end(JSON.stringify(req.files)) // 将buffer类型转换成对象类型的
    /**{ fieldname: 'image',
        originalname: 'big39006.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: '/tmp/',
        filename: 'ac5b22d0e0e434dd71a2edd396ddacce',
        path: '/tmp/ac5b22d0e0e434dd71a2edd396ddacce',
        size: 458203
    } **/
    var des_file = __dirname + '/' + req.files[0].originalname // 写入路径
    fs.readFile(req.files[0].path, function (err, data) { // req.files[0].path读取路径
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err)
            } else {
                var object = {
                    message: 'successful',
                    filename: req.files[0].originalname
                }
            }
            console.log(object)
            res.end(JSON.stringify(object))
        })
    })

})
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host, port)
})
