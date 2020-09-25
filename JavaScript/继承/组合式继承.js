function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

let obj = Object.create(Parent.prototype)
console.log(obj.__proto__ === Parent.prototype)

let obj2 = new Parent()
console.log(obj2.__proto__ === Parent.prototype)

console.log(obj, obj2)
console.log(Parent.prototype.constructor === Parent)

Parent.prototype.getName = function() {
  return this.name
}

function Child(name, age) {
  // 把parent中的this指向child
  Parent.call(this, name)
  this.age = age
}

/* 寄生组合式继承 */
Child.prototype = Object.create(Parent.prototype)
console.log(Child.prototype.__proto__ === Parent.prototype)
// 这不是一个构造函数吗  构造函数的原型的constructor === 构造函数本身
Child.prototype.constructor = Child

Child.prototype.getAge = function() {
  return this.age
}

let girl = new Child('Lisa', 20)
console.log(girl.getName())
console.log(girl)
