let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// es5写法
Array.prototype._flat = function() {
  let _this = this // 保存 this：arr
  let newArr = []
  function loopArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (Array.isArray(item)) {
        loopArray(item)
      } else {
        newArr.push(item)
      }
    }
  }
  loopArray(_this)
  return newArr
}
// arr = arr._flat()
// console.log(arr._flat())

function myFlat(arr) {
  let newArr = []
  function loopArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (Array.isArray(item)) {
        loopArray(item)
      } else {
        newArr.push(item)
      }
    }
  }
  loopArray(arr)
  return newArr
}
// console.log(myFlat(arr))

// let sum = arr.reduce((pre, cur) => {
//   return pre + cur
// }, 0)

// console.log(sum)

/* 利用累加器reduce实现数组扁平化 */
function _myFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? _myFlat(cur) : cur)
  }, [])
}

console.log(_myFlat(arr))
