// aabb
// a ab aab aabb b bb

// function sonOfstr(str) {
//   const son = new Set();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       son.add(str.slice(i, j + 1));
//     }
//   }

//   return Array.from(son).sort();
// }

// console.log(sonOfstr("leetcode"));

// let s = ['a', 'aa', 'b'];
// s.sort((x, y) => x-y)
// console.log(s);

// const f = arr => (
//     arr.split("").reduce((prev, next) => [
//         ...prev, ...prev.map(item => [next, ...item])
//     ], [[]])
// )

// console.log(f('aabb'));

console.log(new Date().getTime());
