var fs = require("fs"); // 异步函数

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log('非阻塞执行完毕')