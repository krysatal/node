var fs = require('fs')
var data = '张健你这个biss'
var writeSteam = fs.createWriteStream('input.txt')
writeSteam.write(data, 'utf8')
writeSteam.end()
writeSteam.on('finish', function () {
    console.log('写入完成')
})
writeSteam.on('error', function (err) {
    console.log(err.stack)
})
console.log('程序执行完毕')

