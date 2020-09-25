/* 基于promise封装ajax */
/* 
思路：
1、要返回一个新的promise实例
2、创建XMLHttpRequest异步对象
3、调用open方法，打开url，与服务器简历链接（发送前的一些处理）
4、监听Ajax状态信息
5、如果xhr.readyState == 4 表示服务器响应完成，可以获取使用服务器的响应了。
xhr.status == 200 返回resolve状态
xhr.status == 404 返回reject状态
6、send发送请求
*/

function Ajax(url, method) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(url, method, true)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else if (xhr.status === 404) {
          reject(new Error('404'))
        }
      } else {
        reject('请求失败')
      }
    }
    // 发送请求,post请求下，要传递的参数放这
    xhr.send(null)
  })
}

/* promise有三种状态 pengdding（进行中） fulfilled(已成功) rejected(已失败)*/
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(0)
  }, 3000)
})

promise1.then(res => {
  console.log(res)
})

// Promise.prototype.all = function(promise) {
//   let result = []
//   let i =0
//   return new Promise((resolve, reject) => {
//     for (let index in promise) {
//       i++
//       promose.then(res=>{
//         result.push(res)
//         if(i === promose.length-1) resolve(result)
//       },err=>{
//         reject(err)
//         break
//       })
//     }
//   })
// }
// Promise.all = function(promises) {
Promise.myAll = function (promise) {
  debugger

    var result = [];
    var i = 0;
    // 用一个新的promise来作为传入promise的返回值
    return new Promise((resolve,reject) => {
        for(var index in promise) {
            i++;
            // 传入的promise依次执行
            promise.then((res) => {
                result.push(res);
                if (i===(promise.length-1)) resolve(result);
            },(err)=>{
                reject(err);
                break;
            })
        }
    })
}


let p1= new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 3000)
})


let p2= new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 3000)
})


Promise.myAll([p1,p2]).then(res=>{
  console.log(res)
})