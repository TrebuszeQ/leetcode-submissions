import javax.lang.model.util.ElementScanner6;

public class Solution 
{
    public static void main(String[] args) 
    {
        countOdds(0, 3);
    }
    public static int countOdds(int low, int high) 
    {
        if(low % 2 == 1)
        {
            return (high - low ) / 2;
        }
        else if(low == high && low % 2 == 0)
        {
            return 0;
        }
        else
        {
            low = low + 1;
            return (high - low ) / 2;
        }
    }
}
