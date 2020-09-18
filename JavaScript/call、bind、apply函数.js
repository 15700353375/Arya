// Function.prototype.myCall = function(thisArg, ...args) {
//   debugger
//   const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
//   thisArg = thisArg || window // 若没有传入this, 默认绑定window对象
//   thisArg[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
//   const result = thisArg[fn](...args) // 执行当前函数
//   delete thisArg[fn] // 删除我们声明的fn属性
//   return result // 返回函数执行结果
// }

// call和apply唯一的区别是传参方式 ...args为call的传参  args为apply的传参
Function.prototype._call = function(context, ...args) {
  // 不传context 就默认为window
  context = context || window

  //必须保证context是一个对象
  let contextType = typeof context
  if (!/^(object|function)$/.test(contextType)) {
    context = Object(context)
  }

  // 声明一个独有的symbol属性。不用fn是，防止fn覆盖已有属性
  const fn = Symbol('fn')

  // this指向传入的context对象
  context[fn] = this

  // 执行函数
  const result = context[fn](...args)

  // 删除fn
  delete context[fn]

  return result
}

let foo = {
  name: '小黑',
  say: function(age) {
    console.log(this.name + `年龄为：` + age)
  }
}
let obj = {
  name: '小常'
}
// foo.say(24)
//测试
// foo.say.myCall(obj, 25)
// foo.say

function fun(name) {
  this.name = name
  this.sayJob = function(job) {
    console.log(this.name + '的工作为：' + job)
  }
}

fun._call(obj, '小白')
obj.sayJob('工程师')

/* 手写bind */

Function.prototype._bind = function(context, ...params) {
  let _this = this
  return function(...args) {
    _this.call(context, ...params.concat(args))
  }
}

/* 
let fn = foo.say.bind(obj, '18')
fn()
*/

let fn = foo.say._bind(obj, '18')
fn()
