/* 防抖函数 也就是指定时间内不再次触发就执行*/
// function debounce(fn, wait) {
//   let timer = null
//   return function() {
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//     }, wait)
//   }
// }

/* 立即执行的防抖函数 */
function debounce(fn, wait, immediate) {
  let timer = null
  return function() {
    if (timer) clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      // wait 期间，timer 是一个 ID 数字，
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) {
        fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
  }
}

/* 节流函数  也就是在指定时间内只执行一次 */
// function throttle(fn, wait) {
//   let timer = null
//   return function() {
//     if (!timer) {
//       timer = setTimeout(() => {
//         timer = null
//         fn.apply(this, arguments)
//       }, wait)
//     }
//   }
// }

function throttle(fn, wait) {
  let timer = null
  let previous = 0
  return function() {
    let now = new Date()
    if (!previous) previous = now
    // 目前间隔的时间
    let time = wait - (now - previous)
    if (timer) clearTimeout(timer)
    if (!timer || time > wait) {
      fn.apply(this, arguments)
      previous = now
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        previous = now
      }, time)
    }
  }
}
