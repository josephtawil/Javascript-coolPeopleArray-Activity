//typeof is a function used to get the datatype from the object.
console.log(typeof "Hello World");
//typeof is not too specific. It wouldn't say that this is a float.
console.log(typeof 5.5);

var name = "Joseph";
var number = 5;
//can make a string all upper case
console.log(name.toUpperCase());
//can make a string all lower case
console.log(name.toLowerCase());
//name.length gets the length of the object
console.log(name.length);
//name.length can be used in arrays
var arr1 = ["Joseph","Farid","Tawil"];
console.log(arr1.length);
//this will get the first element in the array
console.log(arr1[0]);
console.log(arr1[2]);
//you can also get elements in a string. You will be grabbing the character in a string
console.log(name[0]);
//charAt will also locate the character in a string.
console.log(name.charAt(3));
//console.log(number.charAt(0)); 
//This is an error because you can't charAt a number because it doesn't have any characters.
