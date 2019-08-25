var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    // 设置一下html头部。不设置的话br不能换行
    res.setHeader('Content-type', "text/html;charset=utf-8")
    if (req.url === '/') {
        res.end('index')
    } else if (req.url === '/music.html') {
        res.end('music chanel')
    } else if (req.url === '/news.html') {
        res.end('news chanel')
    } else if (/\/student\/[\d]{6}/.test(req.url)) {
        var reg = /\/student\/([\d]{6})/
        var id = reg.exec(req.url)[1]
        fs.readFile('router.json',function (err, data) {
            if (err) {
                console.log('there is something error')
                return
            }
            var dataObj = JSON.parse(data.toString())// 这边输出的data其实是从缓存读取的，是buffer类型，所以要现转换成对象的格式
            if (!dataObj.hasOwnProperty(id)) { // 判断对象本身是否存在某个属性，省略这一步，路由输入一个不存在的id就会报错
                res.end('the studentId is not exit')
                return
            }
            res.write('student information is' + dataObj[id]["name"] + '<br/>')
            res.write('student information is' + dataObj[id]["sex"])
            res.end('') //  必须有一个end，也必须执行一次end，否则将回报错，end后面不能write
        })
    } else {
        res.end('there is no such chanel!')
    }
}).listen(8888)
console.log('server is running at 8888 port')