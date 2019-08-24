var events = require('events') // 引入模块
var eventEmitter = new events.EventEmitter() // 创建实例
var connectHandler = function connected () { // 创建事件处理机制
    console.log('连接成功')
    eventEmitter.emit('data_received') // 触发事件
}
eventEmitter.on('connection', connectHandler) // 绑定事件处理机制
eventEmitter.on('data_received', function () { // 绑定事件处理机制
    console.log('数据接收成功')
})
eventEmitter.emit('connection') // 触发指定的事件
console.log('程序执行完毕')