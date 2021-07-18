var maxProfit = function (prices) {
  let res = 0
  let l = 0, r = 1
  while (r < prices.length && l < r) {
    res = Math.max(res, prices[r]-prices[l])
    console.log(l,r);
    if(r-l == 1 || (prices[r+1]>prices[r] && prices[l+1]>prices[l])){
      r++
    }else{
      l++
    }
  }
  return res
};

let p = [2,1,4,5,2,9,7]
console.log(maxProfit(p))