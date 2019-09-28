function Fn() { 
  this.f = "fff"
}
Fn.prototype.getF = function(){}
let F = new Fn
for(let key in F){
  console.log(key)
  /**
   * f
   * getF
   */
}

// 通过 class 写在原型上的方法都是不可枚举的
class fn{
  constructor(){
    this.ff = "ff"
  }
  getF(){}
}
let f = new fn
for(let key in f){
  console.log(key)    // ff
}
console.log(Object.getOwnPropertyDescriptor(fn.prototype, "getF"))
/**
 * { value: [Function: getF],
 * writable: true,
 * enumerable: false,   // 不可枚举
 * configurable: true }
 */
