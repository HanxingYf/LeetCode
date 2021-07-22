// 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 

// 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

//  

// 示例 1：

// 输入: candidates = [2,3,6,7], target = 7
// 输出: [[7],[2,2,3]]
// 示例 2：

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
// 示例 3：

// 输入: candidates = [2], target = 1
// 输出: []
// 示例 4：

// 输入: candidates = [1], target = 1
// 输出: [[1]]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 回溯 
// dfs(idx, path, target) idx 当前坐标， path 当前路径， target目标值
// 1、跳过当前idx dfs(idx+1, path, target)
// 2、使用当前数    dfs(idx, path, target - candidates[idx])
var combinationSum = function(candidates, target) {
    let res = []
    function dfs(idx, path, target){
        // 取完最后一个
        if(idx === candidates.length)   return
        
        // 取到目标值
        if(target === 0){
            res.push(path)
            return
        }

        // 跳过
        dfs(idx+1, path, target)

        // 使用当前值
        if(target-candidates[idx] >=0){
            dfs(idx, [...path, candidates[idx]], target-candidates[idx])
        }
    }

    dfs(0, [], target)
    return res
};

candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target));