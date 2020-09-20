/* reduce接收四个参数 prev,next,currentIndex,array */

Array.prototype._reduce = function(fn,prev){
  for(let i=0;i<this.length;i++){
    /* 无初始值 */
    if(typeof prev === 'undefined'){
      prev = fn(this[i],this[i+1],i+1,this)
      ++i
    }else{
      prev = fn(prev,this[i],i,this)
    }
  }
  return prev
}


let arr = [1,2,3,4,5]
let sum = arr._reduce((prev,next)=>{
  return prev+next
},0)

console.log(sum)