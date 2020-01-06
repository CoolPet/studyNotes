{
  var a = 100
  var a = 200
}
{
  // SyntaxError: Identifier 'b' has already been declared
  var b = 100
  let b = 200
}
{
  // SyntaxError: Identifier 'c' has already been declared
  let c = 100
  var c = 200
}
{
  // SyntaxError: Identifier 'd' has already been declared
  let d = 100
  let d = 200
}