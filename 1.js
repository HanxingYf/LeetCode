function twoSum(numbers, target) {
  // write code here
  let map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    if(map.has(target-numbers[i])){
      return [map.get(target-numbers[i]) , i+1]
    }else{
      map.set(numbers[i], i+1)
    }
  }
}

nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target));