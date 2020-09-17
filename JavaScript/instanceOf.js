/* instanceof 用于检测构造函数prototype是否存在于某个实例对象的原型链上 */
// object instanceof constructor

// object 实例对象
// constructor 构造函数

function Car() {
  this.name = '张三'
}

let car = new Car()

console.log(car instanceof Object)
// 实例对象的__proto__==构造函数的原型

/* 手动实现instanceof */
function _instanceof(obj, constr) {
  // 获取构造函数的原型
  constr = constr.prototype
  // 获取实例的原型链
  let proto = obj.__proto__
  // 一直查找，直到null或者找到，跳出while循环
  while (true) {
    if (proto === null) {
      return false
    } else if (proto === constr) {
      return true
    }
    proto = proto.__proto__
  }
}

/* 优化 */

function _instanceof2(obj, constr) {
  // 构造函数的原型
  constr = constr.prototype
  // 获取实例的原型 Object.getPrototypeOf() 方法返回指定对象的原型 包括proto属性
  let proto = Object.getPrototypeOf(obj)
  while (true) {
    if (proto === null) {
      return false
    } else if (proto === constr) {
      return true
    }
    proto = Object.getPrototypeOf(proto) //沿着原型链往上查找
  }
}

console.log(_instanceof(car, Car))

/* 手动实现Object.create() */
/* 为什么这个要跟instanceof在一起讲，因为这里我们用到了Obejct.getPropertyOf()这个方法是来返回实例的原型 */
/* 而Object.create(prototype) 传入一个原型，返回的对象就是这个实例对象 */

// 也就是说：
let prototype = {}
let obj = Object.create(prototype)
console.log(Object.getPrototypeOf(obj) === prototype) // true
console.log(obj.__proto__ === prototype) // true

/* 所以、我们手动实现Object.create() 的方式就很简单了 */
function create(prototype) {
  // 边界条件
  if (prototype === null || typeof prototype !== 'object') {
    throw new TypeError(`Object prototype may only be an Object:${prototype}`)
  }
  function temp() {}
  temp.prototype = prototype
  return new temp()
}

let obj2 = create(prototype)
console.log(Object.getPrototypeOf(obj2) === prototype)
let obj3 = create(null)

/* 学习来源：https://juejin.im/post/6870319532955828231 */
