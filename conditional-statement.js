// if statements

let a ;


function result(a)
{

    if(a>10)
    {
        console.log("greater than 10");
    }
    else if(a<10)
    {
        console.log("less than 10");

    }
    else{
        console.log("equals to 10");

    }
}
result(10);


// switch statements

var d = new Date();
	
switch(d.getDay()) {
    case 0:
        document.write("Today is Sunday.");
        break;
    case 1:
        document.write("Today is Monday.");
        break;
    case 2:
        document.write("Today is Tuesday.");
        break;
    case 3:
        document.write("Today is Wednesday.");
        break;
    case 4:
        document.write("Today is Thursday.");
        break;
    case 5:
        document.write("Today is Friday.");
        break;
    case 6:
        document.write("Today is Saturday.");
        break;   
    default:
        document.write("No information available for that day.");
        break;
}


