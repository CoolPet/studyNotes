// class 类就相当于原型,写在原型上的方法都被实例继承了
// 如果想给当前类本身加一些方法,可以在方法前面加上一个关键字(static),不会被实例继承,只有类本身可以使用
// 例如 Array.of() 方法
class AA{
  constructor(){
    this.a = "aa"
  }
  getA(){
    return "哈哈哈"
  }
  static getB(){
    return "呵呵呵"
  }
}
let a = new AA
console.log(a)    // AA { a: 'aa' }
console.log(a.getA())   // "哈哈哈"
// console.log(a.getB())   // a.getB() is not a function
console.log(AA.getB())    // "呵呵呵"

// 静态方法可以被子类继承
// 在子类中使用 super 可以调用父类中的静态方法
class F{
  static getF(){
    console.log("我是 F 的 getF")
  }
}
class G extends F{
  static getG(){
    super.getF()
  }
}
G.getG()