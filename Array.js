var ages = [15, 12, 14, 18];
console.log(ages);
console.log(ages[0]);

ages[2] = 31;
console.log(ages);

var position = ages.indexOf(31);
console.log(position);

ages.push(17); // add element to array
ages.push(19);
console.log(ages);
console.log(ages.length); // length of array elements

ages.pop(); // remove the last element from array
console.log(ages);

ages.unshift(71, 24); // add element to beginning
console.log(ages);

ages.shift(); // remove element to end
console.log(ages);

var names = ["Meherab", "Shahin", "Meherun"];
var part = names.slice(1);
console.log(part);
