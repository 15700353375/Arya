/* 
函数柯里化：就是一个函数的参数传入不固定，而且可以分布传递参数  例如func(1,2,3)(4,5)(6)
*/
function add(a, b, c, d) {
  return a + b + c + d
}
function curry(fn, ...args) {
  // 一次性传入所有参数
  if (fn.length === args.length) {
    // 直到所有参数传入=》去执行函数
    return fn(...args)
  } else {
    // 分步传入
    return function(...newArgs) {
      let allArgs = [...args, ...newArgs]
      return curry(fn, ...allArgs)
    }
  }
}

let a = curry(add, 1, 2)(3)(4)
console.log(a)
