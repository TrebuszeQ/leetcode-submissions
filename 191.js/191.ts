/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
The input must be a binary string of length 32.
*/

/* 
Runtime: 73 ms, faster than 92.44% of TypeScript online submissions for Number of 1 Bits.
Memory Usage: 45 MB, less than 30.92% of TypeScript online submissions for Number of 1 Bits.
*/

function hammingWeight(n: number): number 
{
    const nString = (n >>> 0).toString(2);
    let count = 0;
    for(let element of nString) 
    {
        if(element == '1')
        {
            count++;
        }
    }
    return count;
};
const n = 11;
hammingWeight(n);

/* 
sloooow
function hammingWeight(n: number): number 
{
    const nString = (n >>> 0).toString(2);
    const nArray = Array.of(...nString);
    let count = 0;
    const filtered = nArray.filter( x => {if(x == '1'){ count++; return x}})
    console.log(count);
    return count;
};
*/


/*
Runtime: 84 ms, faster than 77.82% of TypeScript online submissions for Number of 1 Bits.
Memory Usage: 44.5 MB, less than 78.99% of TypeScript online submissions for Number of 1 Bits.

function hammingWeight(n: number): number 
{
    const nString = (n >>> 0).toString(2);
    let y = 0;
    for(let i = 0; i < nString.length; i++)
    {
        if(nString[i] == '1')
        {
            y++;
        }
    }
    return y;
};

const n = -3;
hammingWeight(n);
*/