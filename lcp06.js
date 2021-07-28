var minCount = function (coins) {
  let res = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] % 2 === 0) {
      res += coins[i] / 2;
    } else {
      res += Math.floor(coins[i] / 2) + 1;
    }
  }

  return res;
};

let coins = [2, 3, 10];
console.log(minCount(coins));
