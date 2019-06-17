// function checkPalindrom(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // true

// ================================================

// function uniq(array) {
//   const copied = [];

//   array.forEach(element => (copied.includes(element) ? '' : copied.push(element)));

//   return copied;
// }
// console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// ===================================================


// function isNotOverlapArray(array) {
//   let base = 0;
//   const n = Math.max(...array);

//   base = (1 + n) * n / 2;

//   return base === array.reduce((a, b) => a + b) ? 'true' : 'false';
// }

// console.log(isNotOverlapArray([4, 1, 3, 2])); // true
// console.log(isNotOverlapArray([4, 1, 3])); // false

// =-================================================

// function findDuplicated(array) {
// // 인수로 전달된 배열의 요소 중에서 중복된 요소만으로 구성된 배열을 반환하는 함수를 작성하라. for 문은 사용하지 않도록 하자.
//   return array.filter((v, i, self) => self.indexOf(v) !== i);
// // ㅠㅠ
// }
// console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3, 3, 7])); // [ 1, 2, 3 ]

// ==========================================

// function sumDivisor(num) {
//   const numList = [];
//   for (let i = 1; i <= num; i++) {
//     num % i === 0 ? numList.push(i) : '';
//   }

//   return numList.reduce((pre, cur) => pre + cur);
// }

// console.log(sumDivisor(12)); // 28

// =========================================================

// function numberOfPrime(n) {
//   let nList = [];
//   const primeList = [];
//   if (n < 2) return;
//   for (let i = 2; i <= n; i++) {
//     nList = [...nList, i];
//   }
//   console.log(nList);
//   nList.forEach((num) => {
//     for (let i = 1; i <= n; i++) {
//       num % n ===
//     }
//   })

// }
// console.log(numberOfPrime(10)); // 4

// ==================================================

// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8

// =====================================================

// function digitSum(n) {
//   // console.log([...n.toString()]);
//   if (n < 0 || n > 100000000) return false;
//   return [...n.toString()].reduce((pre, cur) => pre * 1 + cur * 1);
// }

// console.log(digitSum(123)); // 6
// console.log(digitSum(987)); // 24
// console.log(digitSum(100000001)); // false
