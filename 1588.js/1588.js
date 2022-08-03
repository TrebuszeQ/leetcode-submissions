///description
/*
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.
*/
let sumOddLengthSubarrays = function(array) 
{
    let odds = 0, end = 0, sum = 0, newEnd = 1;
    if(array.length % 2 === 1)
    {
        odds = ((array.length + 1) / 2)
    }
    else
    {
        odds = array.length / 2;
    }
    for(let j = 0; j < odds; j++)
    {
        let start2 = 0;
        for(let i = 0; end < array.length; i++)
        {   
            end++;
            for(let x = start2; x < end; x++)
            {
                sum = sum + array[x];
            }
            start2++
        }
        end = 0;
        if(newEnd % 2 === 1)
        {
            newEnd = newEnd + 1;
        }
        else if(newEnd % 2 === 0)
        {
            newEnd = newEnd + 2;
        }
        end = newEnd;
    }  
    return sum;     
};

/*
let sumOddLengthSubarrays = function(array) 
{
    let odds, end = 0, sum = 0, newEnd = 1;
    if(array.length % 2 === 1)
    {
        odds = ((array.length + 1) / 2)
    }
    else
    {
        odds = array.length / 2;
    }
    for(let j = 0; j < odds; j++)
    {
        let i = 0, start2 = 0;
        console.log(`Main round: ${j + 1}`);
        for(i; end < array.length; i++)
        {   
            end++;
            const sliced = array.slice(start2, end);
            console.log(`Secondary round: ${i + 1}`);
            sum = sum + sliced.reduce((a, b) => {return a + b});
            console.log(`start: ${start2}, end: ${end}; sliced: ${sliced}; sum : ${sum}`);
            start2++;
        }
        end = 0;
        if(newEnd % 2 === 1)
        {
            newEnd = newEnd + 1;
        }
        else if(newEnd % 2 === 0)
        {
            newEnd = newEnd + 2;
        }
        end = newEnd

    }  
    console.log(`odds: ${odds}`)
    console.log(`sum: ${sum}`);
    return sum;     
};
*/
//const arr = [1]; //1
//const arr = [1,4]; //5
//const arr = [1,4,2]; //14
//const arr = [1,4,2,5]; //30
//const arr = [1,4,2,5,3]; //58
//const arr = [1,4,2,5,3,2]; //86
//const arr = [1,4,2,5,3,2,7]; //148
const arr = [1,4,2,5,3,2,7,9]; //233
sumOddLengthSubarrays(arr);

