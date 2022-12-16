// This is umar raza 

var d = 4;
var array = [1,2,3,4,5];

function rotateLeft()
{
  for(let i =0; i < d; i++)
  {
    array.push(array.shift());
  }
  return array;
}

console.log(rotateLeft());



