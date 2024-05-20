"use strict";
//24More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array test 
//test for equality and ineqauality
let laptop = "laptop";
let fruit = "APPLE";
let two = 2;
let five = 5;
let color = ["red , black , pink"];
console.log(" is laptop is equal to laptop");
console.log(laptop == "laptop");
console.log(" is laptop is not equal to laptop");
console.log(laptop != "laptop");
//test using lowercase function
console.log(" fruit in lower case is apple");
console.log(fruit.toLocaleLowerCase() == "apple");
console.log(" fruit in lower case is not  apple");
console.log(fruit.toLocaleLowerCase() != "apple");
//Numerical tests involving 
//equality inequality
console.log("is two is not equal to five  ");
console.log(two != five);
//inequality
console.log("is five is equal to two");
console.log(five == two);
//greater than
console.log("is five greater than two");
console.log(five > 2);
//less than
console.log("is five less than ten ");
console.log(five < 10);
//greater than or equal 
console.log("is five greater then equals to two");
console.log(five >= 2);
//less than or equals 
console.log("is two less then or equals to five");
console.log(two <= 5);
//• Tests using "and"  operators
console.log("five is not equal to two && five is greater than two ");
console.log(five != 2 && five > 2);
console.log("five is not equal to two && five is greater than two ");
console.log(five != 2 && five > 10);
//Tests using "or" operators
console.log("two is greater than 10 OR two is equal to two");
console.log(two > 10 || two == 2);
console.log("two is greater than 10 OR two is not equal to two");
console.log(two > 10 || two != 2);
//• Test whether an item is in a array
console.log(" is pink color include in my array");
console.log(color.includes("pink"));
console.log(" is pink color not include in my array");
console.log(!color.includes("pink"));
