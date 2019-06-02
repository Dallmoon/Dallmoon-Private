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
// 미완성
//   const copied = [];

//   array.forEach(element => (copied.includes(element) ? '' : copied.push(element)));
//   copied.forEach(element => {
//     console.log(element);
//     array.includes(element) ? array.shift(element) : ''});
//   return array;

// return array.filter((v, i, self) => self.indexOf(v) !== i);
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

function numberOfPrime(n) {
  const nList = [];
  const primeList = [];

  for (let i = 1; i <= n; i++) {
    nList.push(i);
  }

  nList.filter(item => console.log(item));
}
console.log(numberOfPrime(10)); // 4
