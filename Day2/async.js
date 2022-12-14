console.log("Learning async await and promises");
console.log("A sync function always return a promise");
console.log("Promise is resolve or reject , on that basis we cal different functions");
console.log("async function act like a promise , either it is resolve or it will reject");

console.log("When there is already a promis is present ");
console.log("Then why we need to make the function async ?");
console.log("To remove complications when we call resolve and reject methods , async functions are made");
console.log("async function is easy to make and easy to read");
console.log("");
console.log("");

// let test = async function ()
// {
//     return "HelloWeen";
// }


// test().then((data)=>{
//     console.log(data);
// })


// let test = async () => "umar";

// test().then((data)=>{
//     console.log(data);
// });


// async function test()
// {
//    await console.log("2 : Message");
//   console.log("3 : Message");
//     console.log("4 : Message");
// }


// console.log("1 : Message");

// test();
// console.log("5 : Message");

async function test()
{
   
    try
    {
        const data = await fetch("users.json");
        const recieve = await data.json();
        return recieve;
        // return ( await fetch("users.json")).json();
    }catch(error)
    {
        console.log(error)
    }
}

// test().then((data)=>{
//     console.log(data);
// });

test().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
