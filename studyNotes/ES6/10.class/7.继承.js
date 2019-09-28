class A{
  constructor(x){
    this.x = x
  }
  get(){
    console.log(this.x)
  }
  static getY(){
    console.log(this) 
  }
}

A.getY()    // [Function: A]

// 子类 B 继承父类 A
class B extends A{
  constructor(x){
    // 必须要写 super()
    // 子类没有 this,this 为继承父类,super() 执行完成之后才会有 this
    // super() 就是父类 A 的 constructor
    // 不可以在 super() 执行之前使用 this
    super(x)
    this.y = 100
  }
  get(){
    // 这里的 super 是执行父类 A 的原型
    super.get()
  }
  // 父类的静态方法/私有方法也可以继承
  // 静态方法继承过来也是静态方法
  static getY(){
    // 这里的 super 是指的父类本身
    super.getY()
  }
}
let b = new B("Jack")
b.get()     // Jack
B.getY()    // [Function: B]
