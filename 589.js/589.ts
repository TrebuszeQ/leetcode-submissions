/*
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/


/**
 * Definition for node.
 * class Node 
 * {
 *     val: number;
 *     children: Node[];
 *     constructor(val?: number) 
 *      {
 *         this.val = (val === undefined ? 0 : val);
 *         this.children = [];
 *      }
 * }
 */

function preorder(root: (number | null)[]): number[]
{
    for(let i = 0; i < root.length; i++)
    {
        console.log(root[i]);
    }
    return [0];
};
const root = [1,null,3,2,4,null,5,6];
preorder(root);