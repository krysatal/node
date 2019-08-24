#####node.js的回调函数
#####例如我们可以一边读取文件，一遍进行其他操作，在文件读取完毕之后，我们将文件内容作为回调参数返回，这样代码就不会阻塞。

#####创建input.txt
#####创建main.js（阻塞状态）

<img src="img/zs.png"></img>

#####创建mainCorrect.js(非阻塞状态)
<img src="img/fzs.png"></img>

#####node事件循环
#####node是单线程单进程的，引入v8引擎的异步执行回调接口，所以可以处理大量的并发。
<img src="img/event_loop.jpg"></img>
#####node使用事件驱动程序，当web server接收到事件请求，就把它关闭然后进行处理，然后去服务下一个web请求。当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
#####在这个过程中，web server一直接受请求而不等待任何读写操作。
#####创建mainWhile.js(1.引入模块 2.绑定事件处理机制 3.触发指定的事件)
<img src="img/mainWhile.png"></img>

#####EventEmitter类，events模块只提供了一个对象(events.EventEmitter)，EventEmitter 的核心就是事件触发与事件监听器功能的封装。
#####EventEmitter属性介绍: {
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
#####创建connection.js(方法测试)
<img src="img/connect.png"></img>


