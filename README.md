#####node是运行在服务器端的javascript，基于chrome的v8引擎（完全异步）
#####server.js创建一个node服务器

#####node采用非阻塞I/O机制
#####同步I/O：cpu对磁盘驱动发出I/O指令，磁盘去做相应的操作，如果磁盘没返回操作结果，那么cpu就会一直处于闲置的状态，会浪费很多的资源。因为cpu的执行效率是非常高的
#####异步I/O：在磁盘还没有返回操作结果的时候，cpu可以去做其他的计算，也就是说不会处于闲置的状态。大大提高了性能。

#####node的包管理npm是世界上最大的生态系统



######读取input.txt
main.js: require引入fs模块， 实例化的fs赋值给fs变量，readFileSync方法读取input.txt，读取完毕后执行
mainCorrent.js: require引入fs模块， 实例化的fs赋值给fs变量，readFile方法在读取文件的同时执行接下来的代码

######创建服务器(创建server.js)   
var http = require('http') require引入http模块，实例化后赋值给变量http
http.createServer(function(request, response) { createServer方法创建服务器，listen方法监听8888端口， request， response参数来接收和响应数据
    response.writeHead(200, {'content-Type': 'text/plain'}})  发送http头部，状态200， 内容类型 text/plain
    resonse.end('hello') 发送响应数据
}).listen(8888)
console.log('8888 start running')

######运行服务器
node server.js  终端显示8888 start running，打开浏览器localhost: 8888/展示hello
  

#####node自带交互式解释器REPL
可以调试js的代码，使用命令启动node 的终端

#####node.js事件循环（circulation.js）
<img src="/img/event_loop.jpg"/>  node.js使用事件驱动模型,当服务器接收到请求，就把它关闭然后进行处理，然后去服务下一个请求，当这个请求完成就把它放入处理队列，当达到队列开头的时候就吧结果返回给用户，在这个过程中，服务器一直接收请求还不等待
在事件驱动模型中，会生成祝循环来监听事件，当检测到事件时触发回调函数
var events = require('events')   引入events模块
var eventEmitter = new events.EventEmitter()  创建eventEmitter对象
eventEmitter.on('eventName', handleSubmit) 绑定函数名
eventEmitter.emit('eventName') 触发指定函数

#####node.js EventEmitter类
events模块只提供了一种对象实例(events.EventEmitter)，EventEmitter类是事件触发和事件监听器的功能的封装
EventEmitter 的属性介绍：     
addListener(event, listener)  为指定事件添加一个监听器
on(event, listener)  为指定事件注册一个监听器，接收一个事件名和一个回调函数
once(event, listener)   为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除这个监听器
removeListener(event, listener)  移除指定事件的某个监听器,监听器必须是该事件已经注册过的监听器，接收一个事件名和一个回调函数
removeAllListeners([event]) 移除所有事件的监听器，如果指定事件，则移除的是指定事件的所有监听器
setMaxListeners(n)  如果你添加的监听器超过10个就会发出警告信息
listeners(event) 返回指定的事件的监听器数组
emit(event, [arg1], [...])  按监听器的顺序执行每个监听器，如果事件有注册监听返回true，否则返回false

######node.js Buffer（缓冲区）
用来创建一个专门存放二进制数据的缓存区
创建Buffer对象:
const buf = Buffer.from('runoob', 'ascii) 
console.log(buf.toString('base64'))   node.js目前支持的的字符编码包括 ascli,utf8,utf16le,ucs2,base64,latin1,binary,hex
创建Buffer类：
Buffer.alloc(size, [, fill[, encoding]]) 返回一个指定大小的buffer实例，如果没有设置fill则默认0
Buffer.allocUnsafe(size)  返回一个指定大小的Buffer实例，但是他不会被初始化，所以他可能包含敏感数据
Buffer.allocUnsafeSlow(size)
Buffer.from(array)  返回一个被array的值初始化的新的Buffer实例（传入的array的元素只能是数字， 不然就会自动被0覆盖）
Buffer.from(arrayBuffer, [, byteOffset[, length]])  返回一个新建的与给定的ArrayBuffer共享统一内存的Buffer
Buffer.from(buffer) 复制传入的Buffer实例的数据，并返回一个新的Buffer
Buffer.from(string[, encoding]) 返回一个   被string的值初始化的新的Buffer实例
写入缓存区：
buf.write(string[, offset[, length]][, encoding])
string: 写入缓存区的字符串
offset: 缓存区开始写入的索引值，不设置的话默认为0
length： 写入字符串的字节数， 默认为buffer.length
encoding： 不设置默认使用的编码是utf8
从缓冲区读取数据
buf.toString([encoding, [, start[, end]]])
encoding: 不设置默认使用的编码是utf8
start: 指定开始读取的索引值，默认为0
end: 指定结束位置，默认为缓冲区的末尾
将Buffer转换为JSON对象
buf.toJSON()
缓冲区合并
Buffer.concat(list, [totalLength])
list: 用于合并的Buffer对象数组列表
totalLength： 用于指定合并后Buffer对象的总长度
缓存区比较（node v-0.12.2以后版本）
buf.compare(otherBuffer)
otherBuffer： 与buf对象比较的另外一个Buffer对象
返回一个数字，表示buf在otherBuffer之前或之后或相同
拷贝缓冲区
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
targetBuffer: 要拷贝的targetBuffer对象
targetStart： 从targetBuffer对象的某个索引开始拷贝
sourceStart： 从buf对象的某个索引开始
sourceEnd： 拷贝到buf对象的某个索引结束
缓冲区裁剪
buf.slice([start[, end]])
start: 开始裁剪的位置
end: 默认为buf.length
#####node.js stream(流)
Stream 是一个抽象接口,对http 服务器发起请求的request 对象就是一个 Stream
四种流类型：
readable: 可读操作
writable： 可写操作
duplex: 可读可写操作
transform: 操作被写入数据，然后读出结果
所有的Stream对象du事EventEmitter的实例。常用的事件有
data：当有数据可读时触发
end: 没有更多的数据可读时触发
error: 在接收和写入过程中发生错误时触发
finish: 所有数据已被写入到底层系统时触发
从流中读取数据
###### node.js模块系统
文件和模块是一一对应的。（一个node.js文件就是一个模块）
exports.world = function () {  exports是模块公开的接口
    console.log('hello world')
}
var hello = require('./hello')    引入当前目录下的hello.js文件
hello.world()   hello.js通过exports对象把world作为模块的访问接口
require方法中的文件查找策略：
从文件模块缓存中加载：优先从文件模块中加载已经存在的模块
从原生模块中加载： 优先级仅次于文件模块，require在解析完文件名之后，优先检查模块是否在原生模块列表中，优先从原生模块的缓存区加载，如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。
从文件加载： 当文件模块缓存中不存在，并且不是原生模块的时候，node.js会解析
require传入的参数，并从文件系统中加载实际的文件
##### node.js路由
createServerStart.js;createRoute;createIndexRoute.js
#####node.js全局对象
node.js的全局对象是global，所有全局变量都是global对象的属性
满足以下条件的变量是全局变量
1.在最外层定义的变量
2.全局对象的属性
3.未定义直接赋值的对象
当你定义一个全局变量时，这个变量也会成为全局对象的属性。但不能在最外层定义变量，因为所有的代码都是基于模块的，而模块不是最外层
#####node.js常用工具
util是node.js常用模块，提供所有函数的集合
util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数
js的面向对象是基于原型的而不是基于类的
createUtil.js中定义了一个基础对象Base以及继承自Base的Sub，Base有三个在构造函数内定义的属性以及一个在原型中定义的函数，通过util.inherits实现继承
注意：Sub仅仅继承了Base在原型中定义的函数或属性，Base在构造函数中定义的三个属性和sayHello没有被Sub继承
util.inspect(object, [showHidden], [depth], [colors]) 将一个任意对象转换成字符串的方法
object: 要转换的对象
showHidden: 可选参数，设置为true将输出更多的隐藏信息
depth: 表示最大递归层数，可以指定层数来控制输出信息的多少，默认递归两层，设置为null完成遍历对象
colors： 设置为true，输出颜色编码将会以ansi颜色编码，通常用于在终端显示更漂亮的效果
util.isArray(object)  如果给定的参数object是一个数组返回true,否则返回false
#####Node.js文件系统
同步： readFile
异步： readFileSync(, callback)
打开文件： fs.open(path, flags[, mode], callback)
-> path: 路径, flags: 打开行为- 设置文件权限， 回调函数参数err，fd
获取文件信息： fs.stat(path, callback)
-> 以stats实例的形式返回给回调函数，可用stats类中的方法判断该文件的相关属性
写入文件
fs.write(file, data[, options], callback)
-> file: 文件名， data： 写入文件的数据-options是对象，包含encoding, node, flag)
读取文件
fs.read(fd, buffer, offset, length, position, callback)
-> fd: 以fs.open()返回文件描述符， buffer： 数据写入缓存区， length： 从文件中读取的字节数， position: 文件读取的起始位置，callback参数有err, bytesRead, buffer
关闭文件
fs.close(fd, callback)
截取文件
fs.ftruncate(fd, length, callback)
->len： 文件截取的长度
删除文件
fs.unlink(path, callback)
创建路径
fs.mkdir(path, [options], callback)
->options: recursive以递归的方式创建，mode设置目录权限
读取路径
fs.readdir(path, callback)
->callback包含err, files人家数组列表
