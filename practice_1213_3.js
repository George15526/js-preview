// Array.pop() 彈出最後一位(後進先出)
// Array.shift() 移除第一位
// Array.unshift(n) 新增n至第一項
// Array.push(n) 新增n至最後一項

function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
}