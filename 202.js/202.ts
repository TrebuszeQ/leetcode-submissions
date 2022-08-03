/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
*/

function isHappy(n: number): boolean 
{  
    let result = false;
    let sum = 0;
    let charNumber = 0
    let nString = String(n);
    let counter = 0;
    for(let i = 0; i < nString.length; i++)
    {
        charNumber = Number(nString[i]);
        charNumber = charNumber * charNumber;
        sum = sum + charNumber;

        if (counter == 50)
        {
            return false;
        }

        else if(sum != 1 && i + 1 >= nString.length)
        {
            console.log('sum: ' + sum); 
            nString = String(sum);
            console.log(counter);
            counter = counter + i;
        }

        else if(sum == 1 && i + 1 >= nString.length)
        {
            return true;
        }

        else
        {
            counter = counter + i;
        }
        
    }
    return result;
};

const n = 19;
isHappy(n);