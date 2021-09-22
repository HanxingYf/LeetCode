// let arr = [1, 2, 3, 1];
let t =   [6, 4, 1, 0]  // 3


// console.log(arr.indexOf(-1));
let arr = [2, 3, 4, 2, 3]  // sum = 14
// let t =   [12, 9, 5, 3, 0] // 3

let sum = arr.reduce((a,b) => a+b)
let res = -1
for (let i = 0; i < arr.length; i++) {
  if(arr.indexOf(arr[i]) !== i) {
    console.log(i);
  }
}
