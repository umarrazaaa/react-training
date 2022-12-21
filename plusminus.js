function plusMinus(arr)
{
     let positive_count = 0 ;
     let negative_count = 0 ;
     let zero_count = 0 ;

     for(let i = 0; i < arr.length; i++)
     {
          if(arr[i]>0)
          {
               positive_count++;
          }
          else if(arr[i]<0)
          {
               negative_count++;
          }
          else
          {
               zero_count++;
          }
     }

     let positive = (positive_count/arr.length).toFixed(6);
     let negative = (negative_count/arr.length).toFixed(6);
     let xero = (zero_count/arr.length).toFixed(6);

     console.log((positive + "\n" + negative + "\n" + xero));

}

plusMinus([-4,3,-9,0,4,1]);