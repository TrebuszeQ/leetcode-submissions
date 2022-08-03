/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
*/


function canMakeArithmeticProgression(arr: number[]): boolean 
{
    let result = true;

    arr.sort( (a, b) => 
    {
        return a - b; 
    });

    for(let i = 0, temp = arr[i + 1] - arr[i]; i < arr.length - 1; i++)
    { 
        if(temp != arr[i + 1] - arr[i])
        {
            result = false;   
            temp = 0;
        }
        temp = 0;
        temp = arr[i + 1] - arr[i];
    }
    return result;
};

const arr = [3, 5, 9, 2];
canMakeArithmeticProgression(arr);

/*
low performance

function canMakeArithmeticProgression(arr: number[]): boolean 
{
    let result = true;

    const sorted = arr.sort( (a, b) => 
    {
        return a - b; 
    });
    console.log(sorted);
    for(let i = 0, temp = sorted[i + 1] - sorted[i]; i < sorted.length - 1; i++)
    { 
        console.log(temp);
        console.log(`a: ${sorted[i + 1]}, b: ${sorted[i]}`)
        if(temp != sorted[i + 1] - sorted[i])
        {
            result = false;   
            temp = 0;
        }
        temp = 0;
        temp = sorted[i + 1] - sorted[i];
    }
    console.log(result);
    return result;
};

const arr = [3,77];
canMakeArithmeticProgression(arr);
*/