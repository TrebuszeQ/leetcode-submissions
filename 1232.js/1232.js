/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
*/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

let checkStraightLine = function(cords) 
{
    const directionial = ((cords[0][1] - cords[1][1]) / (cords[0][0] - cords[1][0])); 
    if(directionial === -Infinity || directionial === Infinity)
    {
        let validatorX = true;
        let validatorY = true;
        for(let i = 0; i < cords.length; i++)
        {
            if(cords[i][0] != cords[0][0])
            {
                validatorX = false;
            }
            if(cords[i][1] != cords[0][1])
            {
                validatorY = false;
            }
        }
        if(validatorX === false && validatorY === false)
        {
            return false;
        }
        return true;      
    }
    else
    {
        for(let i = 0; i < cords.length - 1; i++)
        {
            let a = ((cords[i][1] - cords[i + 1][1]) / (cords[i][0] - cords[i + 1][0]));
            if(a !== directionial)
            {
                return false;
            }
        }
        return true;
    }
}   

/* works but not so fast
function checkStraightLine(cords) 
{
    const temp = (cords[1][1] - cords[0][1]) / (cords[1][0] - cords[0][0]);
    for(let i = 0; i < cords.length - 1; i++)
    {
        const j = i + 1;
        const a = (cords[j][1] - cords[i][1]) / (cords[j][0] - cords[i][0]);
        if(a === Infinity || a === -Infinity)
        {
            const validator = infinite(cords);
            if(validator === true)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else if(a !== temp)
        {
            return false;
        }
        const b = (-1 * a) * cords[i][0] + cords[i][1];
        const formula = a * cords[i][0] + b - cords[i][1];
    }
    return true;
}

function infinite(cords)
{
    let validator = true;
    for(let i = 0; i < cords.length; i++)
    {
        if(cords[i][0] != cords[0][0])
        {
            validator = false;
        }
        else if(cords[i][1] != cords[0][1])
        {
            validator = false;
        }
        else
        {
            validator = true;
        }
    }
    if(validator === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}
*/

//const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
//true

//const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[7,7]];
//false

const coordinates = [[0,0],[0,1],[0,-1]];
//true

//const coordinates = [[2,1],[4,2],[6,3]];
//true

//const coordinates = [[2,4],[2,5],[2,8]];
//true 

//const coordinates = [[0,0],[0,5],[5,5],[5,0]];
//false 

//const coordinates = [[1,1],[2,2],[2,0]];
//false
checkStraightLine(coordinates);