node.js的回调函数
例如我们可以一边读取文件，一遍进行其他操作，在文件读取完毕之后，我们将文件内容作为回调参数返回，这样代码就不会阻塞。

创建input.txt
创建main.js（阻塞状态

<img src="img/zs.png"></img>

创建mainCorrect.js(非阻塞状态)
<img src="img/fzs.png"></img>

node事件循环
node是单线程单进程的，引入v8引擎的异步执行回调接口，所以可以处理大量的并发。
<img src="img/event_loop.jpg"></img>
node使用事件驱动程序，当web server接收到事件请求，就把它关闭然后进行处理，然后去服务下一个web请求。当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
在这个过程中，web server一直接受请求而不等待任何读写操作。
创建mainWhile.js(1.引入模块 2.绑定事件处理机制 3.触发指定的事件)
<img src="img/mainWhile.png"></img>

EventEmitter类，events模块只提供了一个对象(events.EventEmitter)，EventEmitter 的核心就是事件触发与事件监听器功能的封装。
EventEmitter属性介绍: {
       方法: {
               1.addListener(event, listener)    // 为指定事件添加一个监听器到监听器数组的尾部。
               2.on(event, listener) // 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
               3.once(event, listener) // 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
               4.removeListener(event, listener) // 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。
               5.removeAllListeners([event]) // 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
               6.setMaxListeners(n) // 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
               7.listeners(event) // 返回指定事件的监听器数组。
               8.emit(event, [arg1], [arg2], [...]) // 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
       }
       类方法: {
              1.listenerCount(emitter, event) // 返回指定事件的监听器数量。
              使用方法: events.emitter.listenerCount(eventName) //推荐
       }
       事件： {
              1.newListener(event, listener) // 该事件在添加新监听器时被触发。
              2.removeListener(emitter, event) // 从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
       }
}
创建connection.js(方法测试)
<img src="img/connect.png"></img>

当必须使用到二进制数据的时候，node定义了Buffer类，该类用来创建一个专门存放二进制数据的缓存区

Stream是一个抽象接口，发送http请求的request对象即是。有四种流类型：{
       1.Readable // 可读操作
       2.Writable // 可写操作。
       3.Duplex // 可读可写操作.
       4.Transform // 操作被写入数据，然后读出结果。
}

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：{
       1.data - 当有数据可读时触发。
       2.end - 没有更多的数据可读时触发。
       3.error - 在接收和写入过程中发生错误时触发。
       4.finish - 所有数据已被写入到底层系统时触发。
}


从流中读取数据
创建readData.txt和创建readData.js
<img src="img/readData.png"></img>

写入流到outputData.txt
创建writeData.js
执行后会在目录生成outputData.txt，内容则是在writeData.js中定义要写入的内容
<img src="img/writeData.png"></img>

管道流，读取source的文件流入到dest中
创建pipe.js,这边以readData.txt作为source，以pipeData.txt作为des
执行后会把readData.txt的内容写到pipeData.txt中

链式流，通过连接输出流到另外一个流。一般用于管道操作
创建compress.js(压缩文件)
执行完compress.js之后会在目录中生成compress.txt和compress.txt.gz
创建decompress.js(解压文件)
目录中的decompress.txt.gz解压生成一个新的名为decompress.txt的文件

node中的模块系统,module.export

node路由（与apache不同的是没有真实的物理映射关系，这叫做顶层路由设计，能够制作顶层的路由设计的语言比较流行的只有node.js和python）
创建router.js和router.json

node全局对象
Node.js中的全局对象是global，所有全局变量（除了global本身以外）都是 global 对象的属性。在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
     1。在最外层定义的变量
     2。全局对象的属性
     3。隐式定义的变量（未定义直接赋值的变量）
 __filename ：表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
 __dirname： 表示当前执行脚本所在的目录
 setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值
 clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
 setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
 console 略
 process 略
 
 node常用工具util(用来弥补js功能的缺失)
 util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数
 创建inherits.js
 
 util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出,至少接受一个对象
 创建inspect.js
 
 util.isArray(object) 如果给定的参数 "object" 是一个数组返回true，否则返回false。
 util.isRegExp(object) 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
 util.isDate(object) 如果给定的参数 "object" 是一个日期返回true，否则返回false。
 util.isError(object) 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
 
 node文件系统
 同步与异步： 例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()
 
 node.js的get和post请求
 get:由于get请求是直接镶嵌在url路径里面的，可以使用node.js的url模块的parse函数
 创建get.js
 post: POST 请求的内容全部的都在请求体中，等待请求体传输可能是一件耗时的工作，node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做
 创建post.js
 注：设置响应头的两种方式
 response.writeHead(200,{'Content-type': 'text/html;charset=utf-8''})
 response.setHeader('Content-type', 'text/html;charset=utf-8')
 
 node.js的express框架(快速搭建一个具有完整功能的网站,Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。)
 安装：npm install express --save
 以下几个重要的模块是需要与 express 框架一起安装的:
 1.body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。(cnpm install body-parser --save)
 2.cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。(cnpm install cookie-parser --save)
 3.multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
 
 request 和 response 对象的具体介绍：
 
 Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：
 
 req.app：当callback为外部文件时，用req.app访问express的实例
 req.baseUrl：获取路由当前安装的URL路径
 req.body / req.cookies：获得「请求主体」/ Cookies
 req.fresh / req.stale：判断请求是否还「新鲜」
 req.hostname / req.ip：获取主机名和IP地址
 req.originalUrl：获取原始请求URL
 req.params：获取路由的parameters
 req.path：获取请求路径
 req.protocol：获取协议类型
 req.query：获取URL的查询参数串
 req.route：获取当前匹配的路由
 req.subdomains：获取子域名
 req.accepts()：检查可接受的请求的文档类型
 req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
 req.get()：获取指定的HTTP请求头
 req.is()：判断请求头Content-Type的MIME类型
 Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：
 
 res.app：同req.app一样
 res.append()：追加指定HTTP头
 res.set()在res.append()后将重置之前设置的头
 res.cookie(name，value [，option])：设置Cookie
 opition: domain / expires / httpOnly / maxAge / path / secure / signed
 res.clearCookie()：清除Cookie
 res.download()：传送指定路径的文件
 res.get()：返回指定的HTTP头
 res.json()：传送JSON响应
 res.jsonp()：传送JSONP响应
 res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
 res.redirect()：设置响应的Location HTTP头，并且设置状态码302
 res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
 res.send()：传送HTTP响应
 res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
 res.set()：设置HTTP头，传入object可以一次设置多个头
 res.status()：设置HTTP状态码
 res.type()：设置Content-Type的MIME类型
 
 node.js RESTful api
 1.rest: 即表述性状态传递（一组架构约束条件和原则），满足这些约束条件和原则的应用程序或设计就是RESTful
 2.rest基本架构的四个方法： get,put,delete,post
 