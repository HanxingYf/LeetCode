const quickSort = (nums) => {
  if (nums.length < 2) return nums;
  let privot = nums.length / 2;
  let base = nums.splice(privot, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < base) {
      left.push(nums[i]);
    }else{
			right.push(nums[i])
		}
  }
  return quickSort(left).concat([base], quickSort(right));
};

let nums = [1, 4, 2, 7, 54, 3, 5];
console.log(quickSort(nums));
