/*You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.*/

const salary: number[] = [8000,9000,2000,3000,6000,1000]

function average(salary: number[])
{
    const max: number = Math.max(...salary);
    const min: number = Math.min(...salary);
    let count = 0;
    let sum = 0;
    salary.reduce( (b, a: number) => 
    {
        if(a == max || a == min)
        {
            console.log(b);
            return 0;
        }
        else
        {
            count++;
            console.log('a = ' + a)
            sum = sum + a;
            return sum; 
        }
    });
    if(salary[0] != max && salary[0] != min)
    {
        sum = sum + salary[0];
        count++;
    }
    console.log(sum);
    return sum / count;
}

average(salary);