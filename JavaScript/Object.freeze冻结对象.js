/* 手动实现Object.freeze冻结一个对象  不能添加新属性，不能写 */
let obj = {
  name: '常慧'
}
// Object.freeze(obj)
freeze(obj)
obj.name = '小郑'
console.log(obj)
// 封闭对象、阻止添加新属性，并将现有属性标记为不可配置
// Object.seal(obj)

function freeze(obj) {
  // 判断是否是对象
  if (obj instanceof Object) {
    Object.seal(obj)
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          writable: false
        })
        // 如果属性值依然为对象，递归
        freeze(obj[key])
      }
    }
  }
}
