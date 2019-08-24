var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('decompress.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('decompress.txt'));
console.log('程序执行完毕')