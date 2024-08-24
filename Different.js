// odd number
for (let i = 0; i < 20; i++) {
  if (i % 3 === 1) {
    console.log(i);
  }
}
console.log("------------------");
for (let i = 0; i <= 20; i++) {
  if (i !== 0) {
    console.log(i);
  }
}

console.log("----------------------");
let total = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    total = total + i;
  }
}
console.log("total of the numbers ", total);
