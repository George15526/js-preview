function countdown(n){
  let arr = []
  if (n >= 1) {
    for (let i = n; i >= 1; i--) {
      arr.push(i);
    }
  } else {
    return [];
  }
  return arr;
}
let arr = countdown(10);
console.log(arr);