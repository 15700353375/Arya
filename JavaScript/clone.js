// 先写一个方法来判断数据类型
function isNormalType(data) {
  let type = Object.prototype.toString.call(data)
  if (type == '[object Object]') {
    return 'object'
  } else if (type == '[object Array]') {
    return 'array'
  } else {
    return false
  }
}
/* 浅clone */
// 只拷贝数组第一层的内容
function shallClone(data) {
  let type = isNormalType(data)
  if (!type) return data
  let cloneTarget = type == 'array' ? [] : {}
  for (let val in data) {
    if (data.hasOwnProperty(val)) {
      //自身可枚举属性，不考虑继承属性和原型对象
      cloneTarget[val] = data[val]
    }
  }
  return cloneTarget
}

let newObj = {
  name: '张三',
  age: 20,
  say: function() {
    console.log(this.name)
  },
  job: {
    type: 1
  },
  children: [
    {
      name: '张潇潇',
      age: 1
    }
  ]
}
let cloneObj = shallClone(newObj)

cloneObj.job.type = 2
console.log(newObj, cloneObj)

/* 深clone */
function deepClone(data) {
  let type = isNormalType(data)
  if (!type) return data
  let cloneTarget = type == 'array' ? [] : {}
  for (let i in data) {
    if (isNormalType(data[i])) {
      cloneTarget[i] = deepClone(data[i])
    } else {
      cloneTarget[i] = data[i]
    }
  }
  return cloneTarget
}
let cloneObj2 = deepClone(newObj)
cloneObj2.job.type = 3
console.log(newObj)
console.log(cloneObj2)
