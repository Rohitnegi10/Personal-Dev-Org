## Question 1:

**Write an Apex class to calculate the sum of all even numbers between 1 and a given integer N.**

```java
public with sharing class EvenNumberSumCalculator 
{
    public static Integer calculateEvenSum(Integer N)
    {
            Integer sum = 0;
            //Loop through numbers from 1 to N
            for(integer i=1 ; i <=n; i++)
            {
                
                if(i%2 == 0) 
                    sum +=i; //Add number when it is even
            }
            return sum;
    }
}
```
