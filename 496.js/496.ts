
function nextGreaterElement(nums1: number[], nums2: number[]): number[]
{
    let x = 0;
    let ans: number[] = [];
    for(let i = 0; i < nums1.length; i++)
    {
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
    console.log(`ans: [${ans}]`);
    return ans; 
};

function checkNextNums2(x: number, i: number, ans: number[]): number
{
    for(let j = x; j < nums2.length; j++)
    {
        if(nums2[j + 1] > nums1[i])
        {
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
const nums1 = [2,4], nums2 = [1,2,3,4];
nextGreaterElement(nums1, nums2);