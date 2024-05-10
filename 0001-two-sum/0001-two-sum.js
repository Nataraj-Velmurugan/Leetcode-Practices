/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let numMap = {};

   for(let i=0; i<nums.length; i++){
    let diff  = target - nums[i];
        if(diff in numMap) return [numMap[diff], i]
        numMap[nums[i]] = i
   }

   return null
   
};