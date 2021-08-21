// 给出一个字符串 s（仅含有小写英文字母和括号）。

// 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

// 注意，您的结果中 不应 包含任何括号。

//  

// 示例 1：

// 输入：s = "(abcd)"
// 输出："dcba"
// 示例 2：

// 输入：s = "(u(love)i)"
// 输出："iloveu"
// 解释：先反转子字符串 "love" ，然后反转整个字符串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
    const stk = []
    let str = ''
    for(const ch of s){
        if(ch === '(') {
            stk.push(str)
            str = ''
        }else if(ch === ')'){
            str = str.split("").reverse().join("")
            str = stk[stk.length - 1] + str
            stk.pop()
        }else {
            str += ch
        }
    }
    return str
};

let s = "ac(ed(et(oc)df)el)fg"
console.log(reverseParentheses(s));


