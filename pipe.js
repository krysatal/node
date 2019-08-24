var fs = require('fs')
// 创建一个可读流
var readStream = fs.createReadStream('readData.txt')
// 创建一个可写流
var writeStream = fs.createWriteStream('pipeData.txt')
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readStream.pipe(writeStream)
console.log('程序执行完毕')