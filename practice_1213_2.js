// Math.floor(a) a無條件捨去至個位數
// Math.ceill(a) a無條件進位至個位數
// Math.round(a) a四捨五入至個位數
// a.toFixed(n) 四捨五入至小數點後第n位
// Example1: 1.23.toFixed(2) => 1.23
// Example2: 1.234.toFixed(2) => 1.23
// Example2: 1.235.toFixed(2) => 1.24

function randomWholeNum() {
    return Math.floor(Math.random() * 10 + 1);
  }
  console.log(randomWholeNum());