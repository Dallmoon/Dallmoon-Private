// 문제 1
// (function foo() {
//   const x = 15;
//   if (x < 10 && x > 20) {
//     console.log(x);
//   }
// }());
// 문제 2
// (function foo() {
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }());
// 문제 3
// (function foo() {
//   let str = '';
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       str += i;
//     }
//   }
//   console.log(str);
// }());
// 문제 4
// (function foo() {
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//       console.log(10 - i);
//     }
//   }
// }());

// 문제 5
// (function foo() {
//   let x = 0;
//   while (x < 10) {
//     if (x % 2 === 0) {
//       console.log(x);
//       x += 2;
//     }
//   }
// }());
// 문제 6
// (function foo() {
//   let x = 0;
//   while (x < 10) {
//     if (x % 2 !== 0) {
//       console.log(10 - x);
//     }
//     x += 1;
//   }
// }());

// 문제 7

// (function foo() {
//   let sum = 0;
//   for (let i = 0; i < 10; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }());
// 문제 8

// (function foo() {
//   let sum = 0;
//   for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0 && i % 3 !== 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }());

// 문제 9
// (function foo() {
//   let sum = 0;
//   for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0 || i % 3 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }());

// 문제 10

// (function foo() {
//   let li = [];
//   for (let i = 1; i < 6; i++) {
//     for (let j = 1; j < 6; j++) {
//       if (i + j === 6) {
//         li = [i, j];
//         console.log(li);
//       }
//     }
//   }
// }());

// 삼각형 pattern 1

// (function foo() {
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (i >= j) {
//         str += '*';
//       }
//     }
//     str += '\n';
//   }
//   console.log(str);
// }());

// 삼각형 패턴 2

// (function foo() {
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (j < i) {
//         str += ' ';
//       } else {
//         str += '*';
//       }
//     }
//     str += '\n';
//   }
//   console.log(str);
// }());

// 삼각형 pattern 3

// (function foo() {
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= 1; j--) {
//       if (i <= j) {
//         str += '*';
//       }
//     }
//     str += '\n';
//   }
//   console.log(str);
// }());

// 삼각형 pattern 4

// (function foo() {
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (j < 6 - i) {
//         str += ' ';
//       } else {
//         str += '*';
//       }
//     }
//     str += '\n';
//   }
//   console.log(str);
// }());

// 정삼각형

// (function foo() {
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (j < 6 - i) {
//         str += ' ';
//       } else if (j === 5) {
//         str += '*';
//       } else {
//         str += '**';
//       }
//     }
//     str += '\n';
//   }
//   console.log(str);
// }());

// 역정삼각형

// (function foo() {
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (j < i) {
//         str += ' ';
//       } else if (j === 5) {
//         str += '*';
//       } else {
//         str += '**';
//       }
//     }
//     str += '\n';
//   }
//   console.log(str);
// }());
