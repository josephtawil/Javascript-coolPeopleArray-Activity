//Math.floor rounds down the number
//Math is a library and floor is a function in that library.
console.log(Math.floor(5.5));
//ceil is a function that rounds up the number.
console.log(Math.ceil(5.6));
//random returns a random number from 0 to 1.
console.log(Math.random());
//when you add the times 10, you are returning a random number between 0 and 10.
console.log(Math.random() * 10);
//we are rounding down the random number between 0 and 10.
console.log(Math.floor(Math.random() * 10));
//we are rounding down the random number between 1 and 10. The one is the minimum and 10 is the maximum.
console.log(Math.floor(Math.random() * 10)+1);
//we are rounding down the random number between 50 and 100. The 50 is the minimum and 100 is the maximum.
console.log(Math.floor(Math.random() * 100) + 50);