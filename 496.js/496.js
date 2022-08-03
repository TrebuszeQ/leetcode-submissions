/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) 
 {
     let x;
     let ans = [];
     for(let i = 0; i < nums1.length; i++)
     {
         console.log('Round: ' + i)
         x = nums2.findIndex(value =>
             {
                 return value === nums1[i]; 
             })
         
         if(x != -1)
         {
             checkNextNums2(x, i, ans);
         }
         else
         {
             ans[ans.length] = -1;
         }
     }
     console.log(`ans: ` + ans);
     return ans; 
 };
 
 function checkNextNums2(x, i, ans)
 {
     for(let j = x; j < nums2.length; j++)
     {
         console.log(`j: ${j}; x: ${x}`)
         if(nums2[j + 1] > nums1[i])
         {
             console.warn(`${nums2[j + 1]} added to ans[]`)
             return ans[ans.length] = nums2[j + 1];
         }
         else if(nums2[j + 1] === undefined)
         {
             return ans[ans.length] = -1;
         }
     }
     return -1;
 }
 
 //const nums1 = [4,1,2], nums2 = [1,3,4,2];
 //const nums1 = [2,4], nums2 = [1,2,3,4];

 nextGreaterElement(nums1, nums2);