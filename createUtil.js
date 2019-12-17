var util = require('util')
function Base() {
    this.name = 'base'
    this.base = '1991'
    this.sayHello = function () {
        console.log('hello' + this.name)
    }
}
Base.prototype.showName = function () {
    console.log('my name is' + this.name)
}
function Sub() {
    this.name = 'sub'
}
util.inherits(Base, Sub)
var baseObj = new Base()
baseObj.showName()
baseObj.sayHello()
console.log(baseObj)
var subObj = new Sub()
subObj.showName()
subObj.sayHello()
console.log(subObj)
