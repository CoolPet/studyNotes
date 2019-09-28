
function BB(name){
  this.name = name
}
let bb = new BB("Jack")
console.log(bb)   // BB { name: 'Jack' }

class AA{
  constructor(name){
    this.name = name
  }
}
let aa = new AA("Tom")
console.log(aa)   // AA { name: 'Tom' }

// 采用 class 表达式让类直接执行
// class 类函数不能当普通函数执行,但是可以当做构造函数进行执行
let a1 = new class{
  constructor(name){
    console.log(name)   // Rose
  }
}("Rose")
