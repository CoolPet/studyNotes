{
  var a = 100
  var a = 200
  console.log(a)    // 200
}
{
  let a = 300
  console.log(a)    // 300
}

// 模块内部不允许用 let 命令重复声明同一变量
// 模块之间不影响,可以重复声明同一变量