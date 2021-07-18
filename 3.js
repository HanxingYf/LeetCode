var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length
  }
  let l = 0, r = 0;
  let window = new Set()
  let res = 0
  while (r < s.length) {
    if(!window.has(s[r])){
      res = Math.max(res, r-l+1)
      window.add(s[r])
      r++
    }
    else{
      window.delete(s[l])
      l++
    }
  }
  return res
};

s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));