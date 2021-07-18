// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

//

// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subsets-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  let start = 0;
  let path = [];

  dfs(start, path);

  function dfs(start, path) {
    //   浅拷贝
    res.push(path.slice());
    for (let i = start; i < nums.length-1; i++) {
      // 剪枝
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      dfs(start + 1, path);
      //   回溯
      path.pop();
    }
  }
  return res;
};
