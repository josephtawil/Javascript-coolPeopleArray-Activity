var superArray = ["Joseph","cake","student", 1,2,3,true];

var counter = 0;

for(var index = 0; index < superArray.length;index++)
{
    console.log(superArray[index]);
    //there should be a conditional
    //conditional checks if item is a string
    //add one to counter if the item is a string
    //else nothing happens
    if(typeof superArray[index]== "string")
    {
    counter++;
    }
    else
    {}
}

console.log("There are "+counter+" strings.");

// //this is an infinite loop because counter2 will always be less than 10 so it will always print.
// var counter2 = 0;

// while(counter2 < 10)
// {
//     console.log("ERROR");
// }

var loud = "AKAKAKKASKEFKSKGFKSDKGKSDGKSDG";

console.log(loud.toLowerCase());
console.log(loud.toUpperCase());