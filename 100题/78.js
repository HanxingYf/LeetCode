var subsets = function (nums) {
  let res = []
  let path = []
  let start = 0
  dfs(start, path)

  function dfs(start, path) {
    res.push(path.slice())
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      console.log(i);
      dfs(i+1,path)
      console.log(i,'++');
      path.pop()
    }
  }
  return res
};

let nums = [1, 2, 3]
console.log(subsets(nums));