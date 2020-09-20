/* 
JSONP跨域的原理： script标签的src属性不受同源策略的限制。
跨域的实现方式：
1、动态创建script标签
2、script标签的src属性以query方式传递参数，参数后面设置好回调函数，回调函数名称和后台约定好。
3、后台返回的数据去调用这个回调函数，res参数就是获取的数据
*/

let script = document.createElement('script')
script.src ='http://www.baidu.cn/login?username=JasonShu&callback=callback';
document.body.appendChild(script)

function callback(res){
  console.log(res)
}