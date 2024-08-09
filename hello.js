var myFirstName = "Meherun"; //variable Naming convention
console.log(myFirstName);

var promise = "I promise I will world hard to be a programmer";
console.log(promise.toLowerCase()); // lower case variable using function
console.log(promise.toUpperCase()); // upper case variable using function
console.log(promise.indexOf("will")); // find the index or the position of 'will'
console.log(promise.split(" ")); // split the string by there "space"

var number1 = 12;
var number2 = "15.5"; // declaring number2 as string
number2 = parseFloat(number2); // converting the double string to float number
console.log(number1 + number2);
number2 = parseInt(number2); // converting the double string to Int number
console.log(number1 + number2);
number2 = +number2; // converting the double string to Int number
console.log(number1 + number2);
number1 = "" + number1; // convert the int to string type
console.log(typeof number1);

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
console.log(total); //0.30000000000000004
total = total.toFixed(3); //fix the decemal value to 3;
console.log(total);
