// below is the division calculation example

function prom(a,b)
{
    return new Promise(function(fullfiled , rejected)
    {
        // Pending state
        console.log("Wait we are Fetching Data is Pending");
        console.log("expected response time is 3 seconds");
        var  c = a / b ;
        // Using setTimeOutFunction with arrow function to testing pending
        setTimeout(()=>
            {
                if(a,b)
                {
                    fullfiled(`Calculated Values is: ${c}`);
                }
                else{
                    rejected("Failed to calculate");
                }
            },3000); // 3000 means 3 seconds 
    });
}



// Method Chaining and putting functions direct in the methods

prom(6,6).then((result)=>{
    console.log(result);
}
).catch((error)=>{
    console.log(error);
}
);

// below is the true false example

// function prom(complete)
// {
//     return new Promise(function(fullfiled , rejected)
//     {
//         // Pending state
//         console.log("Wait we are Fetching Data is Pending");
//         // Using setTimeOutFunction with arrow function to testing pending
//         setTimeout(()=>
//             {
//                 if(complete)
//                 {
//                     fullfiled("I am Passed");
//                 }
//                 else{
//                     rejected("I am Failed");
//                 }
//             },3000); // 3000 means 3 seconds 
//     });
// }



// // Method Chaining and putting functions direct in the methods

// prom(true).then((result)=>{
//     console.log(result);
// }
// ).catch((error)=>{
//     console.log(error);
// }
// );






// function prom(complete)
// {
//     return new Promise(function(fullfiled , rejected)
//     {
//         // Pending state
//         console.log("Wait we are Fetching Data is Pending");
//         // Using setTimeOutFunction with arrow function to testing pending
//         setTimeout(()=>
//             {
//                 if(complete)
//                 {
//                     fullfiled("I am Passed");
//                 }
//                 else{
//                     rejected("I am Failed");
//                 }
//             },3000); // 3000 means 3 seconds 
//     });
// }

// let pass = (result) => {
//     console.log(result);
// }

// let fail = (error) => {
//     console.log(error);
// }

// // Method Chaining

// prom(false).then(pass).catch(fail);




// let complete = true;

// let prom = new Promise(function(fullfilled , rejected)
// {
//     if(complete)
//     {
//         fullfilled("Test is passed");
//     }
//     else{
//         rejected("Test is failed");
//     }
// });

// console.log(prom);