var events = require('events')
var eventEmitter = new events.EventEmitter() // 创建实例
var listen1 = function () {
    console.log('添加监听器1')
}
var listen2 = function () {
    console.log('添加监听器2')
}
eventEmitter.addListener ('connection', listen1) // 添加监听器1
eventEmitter.on('connection', listen2) // 注册监听器2
var eventListenerCount = eventEmitter.listenerCount('connection')
console.log('connection事件有' + eventListenerCount + '个监听器')
eventEmitter.emit('connection')
eventEmitter.removeListener('connection', listen1) // 移除监听器1
var removeListenerCount = eventEmitter.listenerCount('connection')
console.log('移除后connection事件有' + removeListenerCount + '个监听器')
eventEmitter.emit('connection')
console.log('程序执行完毕')
