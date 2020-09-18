/* 利用对象键值对的方式去重 */
function unique(arr) {
  let obj = {}
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true
      newArr.push(arr[i])
    }
  }
  return newArr
}
let arr = [12, 23, 12, 15, 25, 23, 16, 25, 16]

// console.log(unique(arr))

/* 排序后去重 */
function unique2(arr) {
  arr = arr.sort((a, b) => a - b)
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(unique2(arr))

/* 循环外层数组去重 */
function unique3(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) < 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(unique2(arr))
