// 功能一
// 印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15
for (var n = 3; n <= 15; n++) {
  for (var j = 1; j <= 15; j++) {
    var str = n + 'x' + j + ' = ' + n * j
    console.log(str);
  }
}

// 功能二
// 請建立一個 BMI 函式，裡頭有兩個參數(身高, 體重) ，執行時會印出對應 BMI，並取小數點後一位
function BMICalculator(height, weight) {
  var h = parseInt(height) / 100;
  var w = parseInt(weight);
  var bmi = (w / (h * h)).toFixed(1);
  console.log(bmi);
}

BMICalculator(178, 80);
