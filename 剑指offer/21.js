var exchange = function (nums) {
  let j = [], o = [];
  for (let num of nums) {
    if (num % 2 == 0) {
      o.push(num)
    } else {
      j.push(num);
    }
  }
  return [...j, ...o]
};