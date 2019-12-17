var events = require('events')
var eventsEmitter = new events.EventEmitter()
var connectHandle = function connected() {
    console.log('连接成功')
    eventsEmitter.emit('data_received')
}
eventsEmitter.on('data_received', function () {
    console.log('数据接收成功')
})
eventsEmitter.on('connection', connectHandle)
eventsEmitter.emit('connection')
