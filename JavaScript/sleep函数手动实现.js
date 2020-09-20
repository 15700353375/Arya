
/* sleep函数表示等待指定时间执行函数 */
function sleep(wait){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },wait)
  })
}

let sayHello = (name) => console.log(`hello ${name}`);

// async函数是异步的
async function fun(){ 
  await sleep(5000)  //等待5s后执行函数
  // 遇到await会被阻塞
  sayHello('111111111')
}

fun()



