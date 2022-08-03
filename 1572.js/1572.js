/**
 * 1572. Matrix Diagonal Sum
 * Given a square matrix mat, return the sum of the matrix diagonals.
 * Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
 function diagonalSum(mat) 
 {
     let sum = 0;
     for(let i = 0; i < mat.length; i++)
     {
         if(i === mat.length / 2 - 0.5)
         {
             sum = sum + mat[i][mat[i].length / 2 - 0.5];
             console.log(`1: ${sum}`);
         }
         else if((i < mat.length / 2 - 0.5))
         {
             sum = sum + mat[i][i] + mat[i][mat.length - 1 - i];
             console.log(`2: ${sum}`);
         }
         else
         {
             sum = sum + mat[i][mat.length - i - 1] + mat[i][i];
             console.log(`i: ${i}; 3: ${sum}`);
         }
     }
     console.log('*************');
     return sum;
 };
 const mat = [[1,2,3],[4,5,6],[7,8,9]];
 //25
 //const mat = [[1,2,3,8],[4,5,6,2],[7,8,9,3],[3,4,6,9]];
 //49
 //const mat = [[1,2,3,8,9],[4,5,6,2,8],[7,8,9,3,4],[3,4,6,9,1],[1,2,3,4,5]];
 //45
 //const mat = [[3,4],[1,2]];
 //10
 diagonalSum(mat);