
const productExceptSelf = (nums) => {
    const n = nums.length;
    const res = new Array(n).fill(1);
  
    let left = 1, right = 1;
    for (let i = 0; i < n; i++) {
      res[i] *= left;
      left *= nums[i];
    }
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= right;
      right *= nums[i];
    }
  
    return res;
  };
  

  const nums2 = [1, 2, 3, 4];
  console.log(productExceptSelf(nums2)); 

  