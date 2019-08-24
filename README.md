#####node是运行在服务器端的javascript，基于chrome的v8引擎（完全异步）
#####server.js创建一个node服务器

#####node采用非阻塞I/O机制
#####同步I/O：cpu对磁盘驱动发出I/O指令，磁盘去做相应的操作，如果磁盘没返回操作结果，那么cpu就会一直处于闲置的状态，会浪费很多的资源。因为cpu的执行效率是非常高的
#####异步I/O：在磁盘还没有返回操作结果的时候，cpu可以去做其他的计算，也就是说不会处于闲置的状态。大大提高了性能。

#####node的包管理npm是世界上最大的生态系统


