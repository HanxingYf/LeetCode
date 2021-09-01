// 给你一个字符串 s，找到 s 中最长的回文子串。

//

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function isHui(test) {
    return test.split("").reverse().join("") === test;
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isHui(s.substring(i, j + 1))) {
        if (j - i > res.length) {
          res = s.substring(i, j + 1);
        }
      }
    }
  }

  return res;
};

let s = "babad";


console.log(longestPalindrome(s));
