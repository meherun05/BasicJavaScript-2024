// for (let i = 0; i <= 15; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

//continue --> skip rest of the code for this iteration
// break --> i am done with this loop. loop end
