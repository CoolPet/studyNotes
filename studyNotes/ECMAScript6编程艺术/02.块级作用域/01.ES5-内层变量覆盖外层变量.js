var time = new Date()

function fun(){
  console.log(time)
  if(false){
    var time = "Hello World!"
  }
}

fun()   // undefined