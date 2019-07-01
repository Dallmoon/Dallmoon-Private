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

// ======================================

// function isHarshad(n) {
//   const x = [...n.toString()].reduce((pre, cur) => pre * 1 + cur * 1);
//   return Number.isInteger(n / x);
// }

// console.log(isHarshad(10)); // true
// console.log(isHarshad(12)); // true
// console.log(isHarshad(18)); // true
// console.log(isHarshad(11)); // false
// console.log(isHarshad(13)); // false

// ============================================

// function generateRange(from, to) {
//   const res = [];
//   for (let i = from; i <= to; i++) {
//     res.push(i);
//   }
//   return res;
// }

// console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]

// ======================================================

// ㅠㅠ

// function adder(x, y) {
// let res = [];
// const k = Math.abs(x - y); // 범위 설정
// for(let i = 0; i <= k; i++) {

// }
//   return Array.from({ length: Math.abs(x - y) + 1 }, (v, i) => i + (x > y ? y : x))
//     .reduce((pre, cur) => pre + cur);
// }


// console.log(adder(5, 5)); // 12

// ===================================

// function adjacentElementsProduct(arr) {
//   const foo = [];
//   arr.reduce((pre, cur) => {
//     foo.push(pre * cur);
//     return cur;
//   });

//   return Math.max(...foo);
// }

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21

// ==========================

// function getArray(arr) {
//   let foo = [];
//   foo = arr.filter(elem => !(elem % 2) && elem > 3);

//   return foo;
// }

// console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]

// ===========================================

// function average(array) {
//   let foo = [];
//   return array.reduce((pre, cur) => pre + cur) / array.length;
// }

// console.log(average([5, 3, 4])); // 4

// =======================================

// function findMinDistance(array) {
//   const firstElem = array[0];
//   const lastElem = array[array.length - 1];
//   let Min = lastElem - firstElem;

//   let foo = [];
//   array.reduce((pre, cur) => {
//     if (cur - pre < Min) {
//       foo = [];
//       Min = cur - pre;
//       foo.push([pre, cur]);
//     } else if (cur - pre === Min) {
//       foo.push([pre, cur]);
//     }
//     return cur;
//   });
//   return foo;
// }

// // 1차원 점의 배열
// var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
// console.log(findMinDistance(array)); // [[3, 4], [23, 24]]

// =============================

// function specialSort(array) {
//   const positive = [];
//   const negative = [];

//   array.forEach(elem => (elem < 0 ? negative.push(elem) : positive.push(elem)));
//   positive.sort();
//   negative.sort((a, b) => a <= b);

//   // console.log(positive, negative);
//   return [...negative, ...positive];
// }

// const testArray = [-1, 1, 3, -2, 2, 0];

// console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
// console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]

// function getDayName(a, b){

// }

// console.log(getDayName(5, 24)); // TUE
