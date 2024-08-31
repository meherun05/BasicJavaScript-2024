// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
for (let i = 1; i <= 60; i++) {
  console.log(
    " I will Invest at least 6 hrs every single day for next 60 days!"
  );
}

// Subtask-1:
// Find all the odd numbers from 61 to 100.
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Subtask-2:
// Find all the even numbers from 78 to 98.
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Subtask-3:
// Display sum of all the odd numbers from 91 to 129.
let totalOdd = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    totalOdd = totalOdd + i;
    console.log(i);
  }
}
console.log("totalOdd sum of odd number from 91 to 129 are ", totalOdd);

// Subtask-2:
// Display sum of all the even numbers from 51 to 85.
let totalEven = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    totalEven = totalEven + i;
  }
}
console.log("total even number between 51 to 85 is ", totalEven);

// Generate a multiplication table for number 9
let n = 9;
for (let i = 1; i <= 10; i++) {
  let result = n * i;
  console.log(n, " * ", i + " = ", result);
}

//Implement a countdown timer that counts down from 81 to 65.
for (let i = 85; i >= 65; i--) {
  console.log(i);
}
