// function evenOrOdd(num) {
//   if (num % 2 !== 0) {
//     return 'Odd';
//   }
//   return 'Even';
// }

// function evenOrOdd(num) {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// }
// console.log(evenOrOdd(11));

// function getCount8() {
//   let count = 0;
//   for (let i = 1; i <= 10000; i++) {
//     switch (true) {
//       case i[1] === 8: case i[2] === 8: case i[3] === 8: case i[4] === 8:
//         count += 1;
//         break;
//     }
//   }
//   return count;
// }

// console.log(getCount8());

// function getCount8() {
//   let str = '';
//   let sum = 0;
//   for (let i = 1; i < 10001; i++) {
//     str += i;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '8') {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// console.log(getCount8());

function alphaString46(str) {
  if (str.length > 3 && str.length < 7) {
    return Number.isInteger(str * 1);
  }
  return false;
}

console.log(alphaString46('1234'));
