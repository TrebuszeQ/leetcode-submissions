/*
You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
*/
function nearestValidPoint(x: number, y: number, points: number[][]): number 
{
    let temp = 1000000000000000;
    let distance = 0;
    
    const filtered = points.filter(value => 
    { 
        distance = Math.sqrt((Math.pow((value[0] - x), 2)) + (Math.pow((value[1] - y), 2)));
        if((value[0] == x || value[1] == y) && distance < temp)
        {
            console.log(distance);
            temp = distance;
            return value[0]; 
        }

        else
        {
            return;
        }
    });
    console.log(filtered);
    filtered.sort( (a, b) => { return a[0] - b[0]; });
    if(filtered.length > 0)
    {
        console.log(points.indexOf(filtered[0]));
        return points.indexOf(filtered[0]);
    }
    
    else
    {
        return -1;
    }
    
};
nearestValidPoint( 5, 1, [[1,1],[6,2],[1,5],[3,1]]);