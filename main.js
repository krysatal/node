var fs = require('fs')
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log('阻塞执行完毕')
