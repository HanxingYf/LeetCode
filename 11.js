var maxArea = function (height) {
  let l = 0, r = height.length - 1
  let res = 0
  while (l <= r) {
    let temp = Math.min(height[l], height[r])
    res = Math.max(res, temp * (r-l))
    if (height[l] <= height[r]) {
      l++
    } else {
      r--
    }
  }
  return res
};

let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));