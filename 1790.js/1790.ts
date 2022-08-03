/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
*/

/*
Runtime: 59 ms, faster than 100.00% of TypeScript online submissions for Check if One String Swap Can Make Strings Equal.
Memory Usage: 44.7 MB, less than 27.87% of TypeScript online submissions for Check if One String Swap Can Make Strings Equal.
*/

function areAlmostEqual(s1: string, s2: string): boolean 
{
    let changes = 0;
    let i = 0;
    let temp = [''];
    if(s1 == s2)
    {
        return true;
    }
    else
    {
        for(const char of s1)
        {
            console.log(i);
            if(char != s2[i] && changes == 0)
            {
                temp[0] = s2[i];
                temp[1] = char;
                console.log();
                changes++;
                console.log(`char: ${char}, s2[${i}]: ${s2[i]}, changes: ${changes}`);
            }
            else if(char != s2[i] && changes > 0 && changes < 2)
            {
                changes++;
                temp[temp.length] = s2[i];
                temp[temp.length] = char;
                console.log(temp);
                console.log(`char: ${char}, s2[${i}]: ${s2[i]}, changes: ${changes}`);
            }

            else if(char != s2[i] && changes >= 2)
            {
                console.log('false');
                return false;
            }
            i++;
        }
        console.log(temp);
        if(temp[0] == temp[3] && temp[1] == temp[2] && changes == 2)
        {
            console.log(true);      
            return true;
        }
    console.log('false');
    return false;
    }
}
//const s1 = "kelb", s2 = "kelb"
//true

const s1 = "qgqeg", s2 = "gqgeq";
//false

//const s1 = "acc", s2 = "aac";
//false

//const s1 = "bqzetqwrqegeupansshukcmnnezmooywwthvzkcciplknjfpzgpeybhuufoqnijzp", s2 = "gcsozkpencquoypwbhhzptnwerkqjmbmtzeokanefjifguniznwyuupqqhelzpscv";
//false

//const s1 = "siyolsdcjthwsiplccjbuceoxmpjgrauocx", s2 = "siyolsdcjthwsiplccpbuceoxmjjgrauocx";
// true

//const s1 = "abcd", s2 = "dcba";
// false

//const s1 = "bank", s2 = "kanb";
// true

areAlmostEqual(s1, s2);