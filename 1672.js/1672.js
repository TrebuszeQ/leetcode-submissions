/**
 * 1672. Richest Customer Wealth
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
let maximumWealth = function(accounts) 
{
    let highest = 0;
    for(let i = 0; i < accounts.length; i++)
    {
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++)
        {
            sum = sum + accounts[i][j];
        }
        if(sum > highest)
        {
            highest = sum;
        }
    }
    console.log(highest);
    return highest
};

//const accounts = [[2,8,7],[7,1,3],[1,9,5]];
const accounts = [[1,2,3],[3,2,1]];
maximumWealth(accounts);