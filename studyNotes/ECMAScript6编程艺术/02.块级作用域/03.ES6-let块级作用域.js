var str = "Hello World!"

for(let i = 0; i < str.length; i++){
  console.log(str[i])
}

// console.log(i)    // ReferenceError: i is not defined

console.log("ES5")

function fun1(){
  var num1 = 100
  if(true){
    var num1 = 200
    console.log(num1)    // 200
  }
  console.log(num1)    // 200
}

fun1()

console.log("ES6")

function fun2(){
  var num2 = 100
  if(true){
    let num2 = 200
    console.log(num2)    // 200
  }
  console.log(num2)    // 100
}

fun2()