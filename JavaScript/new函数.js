/* 手写new函数 */
// 1、实例对象的__proto__指向构造函数的prototype
// 2、改变this指向，this指向实例对象
// 3、分析函数返回值

// 既然如此简单，那我们直接来写一个 Func代表构造函数
function _new(Func, ...args) {
  // 先定义一个对象，它就是原来的实例对象
  let obj = {}

  // 实例对象的__proto__指向构造函数的prototype
  obj.__proto__ = Func.prototype

  // 改变this指向
  let result = Func.call(obj, ...args)

  // 分析幻术返回值
  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result
  }

  return obj
}

// but __proto__在IE中不支持
// 可以使用Object.create(prototype)创建出来的实例的__proto__指向prototype

// 我们要实现 obj.__proto__ = Func.prototype  也就是 Object.create(Func.prototype)
