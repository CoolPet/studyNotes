// function 会有变量提升
console.log(FF("Tom"))    // Tom
console.log(new FF("Jack"))   // FF { name: 'Jack' }
function FF(name){
  this.name = name
  return name
}

// ES6 中的 class 跟 let/const 一样没有变量提升
// new GG()    // GG is not defined
class GG{
  constructor(){
    this.gg = "gg"
  }
}
