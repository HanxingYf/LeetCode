const T = +readline();
for (let i = 0; i < T; i++) {
  const Max = Math.pow(10, 7);
  let pre = new Array(Max + 5);
  let cnt = new Array(Max + 5);
  let res = 0;
  for (let i = 1; i <= Max; i++) {
    pre[i] = i;
    cnt[i] = 1;
  }
  let n = +readline();
  // 找祖先
  function findF(x) {
    if (pre[x] != x) {
      return (pre[x] = findF(pre[x]));
    } else return x;
  }
  while (n--) {
    let D = readline() + "";
    let [x, y] = D.split(" ");
    let m = findF(x);
    let n = findF(y);
    if (m !== n) {
      pre[m] = n;
      cnt[n] += cnt[m];
      res = Math.max(res, cnt[n]);
    }
  }
  console.log(res);
}

console.log(Math.pow(10, 7));

// 2
// 4
// 1 2
// 3 4
// 5 6
// 1 6
// 4
// 1 2
// 3 4
// 5 6
// 7 8
