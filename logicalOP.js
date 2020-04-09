//this is the logical operator for "and" => &&
//this is the logical operator for "or" => ||

var fName = "Joseph";
var isSleepy = true;
//this checks if either fName is Joseph or either isSleepy is true then you can print 
if(fName === "Bob" || isSleepy === true)
{
    console.log("Get some coffee " + fName);
}

console.log(isSleepy===true);

//this checks if both fName is Joseph and isSleepy is true, then it will print.
if(fName === "Joseph" && isSleepy === true)
{
    console.log("Get some coffee " + fName);
}
