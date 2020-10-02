// 功能一
// 印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15
for (var n = 3; n <= 15; n++) {
  for (var j = 1; j <= 15; j++) {
    var str = n + 'x' + j + ' = ' + n * j
    console.log(str);
  }
}
