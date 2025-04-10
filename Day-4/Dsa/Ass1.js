const subarraySum = (nums, k) => {
    let map = { 0: 1 };
    let sum = 0, count = 0;
  
    for (let num of nums) {
      sum += num;
      if (map[sum - k]) count += map[sum - k];
      map[sum] = (map[sum] || 0) + 1;
    }
  
    return count;
  };
  
  const nums1 = [1, 2, 3];
  const k1 = 3;
  console.log(subarraySum(nums1, k1)); 
  