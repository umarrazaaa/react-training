console.log("Maker");
function prom()
{
    return new Promise(function(resolve,reject)
    {
        console.log("Have some patiencd we are loading data from the server");
        console.log("Expected Wait Time 3 Seconds");

        setTimeout(()=>
        {
           $.get("https://jsonplaceholder.typicode.com/users",function(data)
           {
            resolve(data);
           }).fail(err =>{
            reject("failed to load json")
           }) 
        },3000)

    });
}


prom().then((result) =>
{
    console.log(result);
} ).catch((error) =>
{
    console.log(error);
})