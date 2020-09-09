// 单线程和事件循环
// 单线程：浏览器是进程多线程的，但是分配给js的只有线程的。一个任务必须等待前面的任务执行完成之后才能执行，
// 那如果遇到比较耗时的任务，需要等待大量时间。这样就不合理了，所以才有了异步和回调函数的存在。
// 就是说这个耗时的任务交给其它线程去处理，当任务执行完成之后，触发回调函数即可，这样就不阻碍同步js的执行。

// 那么这些回调函数的执行顺序是什么呢
// 浏览器维护了一个事件队列、当主线程执行完成之后，每隔相应时间就来事件队列查看是否有需要执行的任务。
// 而任务分为宏任务和微任务

/* 宏任务 微任务 */
// 宏任务：script整体代码、setTimeout、setInterval、ajax、I/O、setImmedidate
// 微任务：process.nextTick、MutationObserver、Promise.then catch finally
// 1、先执行一个宏任务
// 2、然后检查是否有微任务，全部执行。（包括微任务里面的微任务）。然后清空微任务队列
// 3、渲染-开启下一个宏任务
// set1
setTimeout(() => {
  console.log('time1')
  Promise.resolve().then(() => {
    console.log('promise1')
    Promise.resolve().then(() => {
      console.log('promise1.1')
    })
  })
}, 0)
// set2
setTimeout(() => {
  console.log('time2')
  Promise.resolve().then(() => {
    console.log('promise2')
  })

  // 简称set3
  setTimeout(() => {
    console.log('timer3')
  }, 0)
}, 0)

Promise.resolve().then(() => {
  console.log('promise3')
})

console.log('start')

// 解释一下：
// 首先开启script整体代码宏任务 执行start、然后微任务promise3
// 开启set1宏任务 执行time1、然后微任务 promise1、promise1.1
// 开启set2宏任务 执行time2、然后微任务promise2
// 开启set3宏任务 执行time3
