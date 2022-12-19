



function mergeSort(array)
{
    if(array.length<2){
        return array;
    }

    let midpoint = Math.floor(array.length/2);

    // console.log(midpoint);


    let leftHalf = array.slice(0,midpoint);

    // console.log(leftHalf);

    let rightHalf = array.slice(midpoint);

    // console.log(rightHalf);


    return merge(mergeSort(leftHalf),mergeSort(rightHalf));

}

function merge(array1 , array2)
{
    let a = 0;
    let b = 0;

    let result = [];


    while(a < array1.length && b < array2.length)
    {
       if(array1[a] < array2[b])
       {
        result.push(array1[a]);
        a++;
       }else{
            result.push(array2[b]);
            b++;
       }
    }

    return result.concat(array1.slice(a)).concat(array2.slice(b)); 
}


var output  =mergeSort([4,2,8,3,6,9,1]);


console.log(output);