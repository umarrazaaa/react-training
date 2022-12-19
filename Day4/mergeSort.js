
// function mergeSort(arr)
//  {
//     if (arr.length < 2) {
//       return arr;
// }
    
//     let midpoint = Math.floor(arr.length / 2);
//     let leftHalf = arr.slice(0, midpoint); 
//     let rightHalf = arr.slice(midpoint);
//     //recurse into each half until arrays are 1 item each
//     //then merge() the sorted arrays on each layer of the stack
//     return merge(mergeSort(leftHalf), mergeSort(rightHalf));
//   }
  
//   //first time this merge() gets called, the arr's are both 1 element long
//   //on each layer of the stack the arrs will be doubled and always be sorted
//   function merge(arrA, arrB) {
//     let a = 0;
//     let b = 0;
//     let result = [];
    
//     while (a < arrA.length && b < arrB.length) {
//       if (arrA[a] < arrB[b]) {
//         result.push(arrA[a]);
//         a++;
//       } else {
//         result.push(arrB[b]);
//         b++;
//       }
//     }
  
//     //using slice to concat remaining items left in either arrA or arrB
//     return result.concat(arrA.slice(a)).concat(arrB.slice(b)); 
//   }
  
//   //usage:
//   mergeSort([4,2,8,3,6,9,1]); //=> [1,2,3,4,6,8,9]




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