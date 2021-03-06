// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const res = [], path = []
  let used = new Array(nums.length).fill(false)
  const dfs = () => {
    if(path.length === nums.length) {
        res.push(path.slice())
        return
    }
    for(let i = 0;i<nums.length; i++){
        if(!used[i]) {
            used[i] = true
            path.push(nums[i])
            dfs(path)
            path.pop()
            used[i] = false
        }
    }
  }
  dfs()
  return res
};

let nums = [1, 2, 3]
console.log(permute(nums));
