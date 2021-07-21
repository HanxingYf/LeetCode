class Solution {
  public:
      void backtrack(vector<vector<int>>& res, vector<int>& output, int first, int len){
          // 所有数都填完了
          if (first == len) {
              res.emplace_back(output);
              return;
          }
          for (int i = first; i < len; ++i) {
              // 动态维护数组
              swap(output[i], output[first]);
              // 继续递归填下一个数
              backtrack(res, output, first + 1, len);
              // 撤销操作
              swap(output[i], output[first]);
          }
      }
      vector<vector<int>> permute(vector<int>& nums) {
          vector<vector<int> > res;
          backtrack(res, nums, 0, (int)nums.size());
          return res;
      }
  };
  
// let a1 = [1,2]
// let a2 = [3,4]
// function swap(a1,a2){
//   let t = a1
//   a1 = a2
//   a2 = t
// }
// function swap1(a1){
//   let t = a1[0]
//   a1[0] = a1[1]
//   a1[1] = t
// }
// // swap(a1,a2)
// swap1(a1)
// console.log(a1,a2);