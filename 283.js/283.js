/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums)
{
    let counter = 0;
    let temp = 0;
    for(let i = nums.length - 1; i >= 0; i--)
    {
        if(nums[i] === 0)
        {
            counter++;
            for(let j = i; j < nums.length - counter; j++)
            {
                nums[j] = nums[j + 1];
                nums[j + 1] = 0;
                //console.log(nums[j]);
                //console.log(`1. nums: ${nums}`);
                //console.log(`i: ${i}; j:  ${nums[j]}`);
            }
        }
    }
    //console.log(nums);
};

//const nums = [0,1,0,3,12];
//const nums = [0,6,2,0,4];
const nums = [0,1,0,3,12,0];
moveZeroes(nums);