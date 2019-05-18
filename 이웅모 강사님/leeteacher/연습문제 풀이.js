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

// function alphaString46(str) {
//   if (!str) return false;
//   if (str.length > 3 && str.length < 7) {
//     return Number.isInteger(str * 1);
//   }
//   return false;
// }

// console.log(alphaString46(null));

// function getMaxValueFromArray(array) {
//   return Math.max.apply(null, array);
// }
// console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3]));

// function getMinValueFromArray(array) {
//   return Math.min.apply(null, array);
// }
// console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3]));

// function numPY(s) {
// s에 존재하는 p의 개수와 y의 개수를 비교해서 같으면 true 다르면 false p,y둘 다 없으면 true s는 인수로 문자열을 전달 받는다.
//   let p = 0;
//   let y = 0;
//   if (!s) return true;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'p') {
//       p += 1;
//     } else if (s[i] === 'y') {
//       y += 1;
//     }
//   }
//   return p === y ? 'true' : 'false';
// }

// console.log(numPY('oppyy'));

// function numPY(s) {
//   // if (!s) return
//   const str = s ? s.toUpperCase() : '';
//   let cntP = 0;
//   let cntY = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'P') cntP += 1;
//     if (str[i] === 'Y') cntY += 1;
//   }
//   return cntP === cntY;
// }
// console.log(numPY('PyyP'));

// function toWeirdCase(s) {
//   // 문자열을 인수로 전달받음, 각 단어의 짝수번째 인덱스의 글자는 대문자, 홀수번째 인덱스의 글자는 소문자로 리턴함.  --- 단어를 기준으로 짝 홀수 인덱스를 판단.

//   const str = s.split('');
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       i += 1;
//       newStr += ' ';
//     }
//     if (i % 2 === 0) newStr += str[i].toUpperCase();
//     if (i % 2 !== 0) newStr += str[i].toLowerCase();
//   }
//   return newStr;
// }

// console.log(toWeirdCase('hello world'));

// function toWeirdCase(s) {
//   const wordArr = s.split(' ');

//   function toUpperLower(str) {
//     let res = '';
//     for (let i = 0; i < str.length; i++) {
//       res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
//     }
//     return res;
//   }
//   for (let i = 0; i < wordArr.length; i++) {
//     wordArr[i] = toUpperLower(wordArr[i]);
//     // console.log(toUpperLower(wordArr[i]));
//   }
//   return wordArr.join(' ');
// }
// console.log(toWeirdCase('hello world'));

// function strToInt(str) {
//   // return Number.parseInt(str, 10);
//   // return +str;
//   // return str * 1;
// }

// console.log(strToInt('-1234'));

// function waterMelon(n) {
//   // 인수를 정수로 받음 수박수박수.....
//   let str = '';
//   for (let i = 0; i < n; i++) {
//     i % 2 === 0 ? str += '수' : str += '박';
//   }
//   return str;
// }
// console.log(waterMelon(5));

// function nextSqaure(n) {
//   // 루트 / 정수 / pow
//   return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : 'no';
// }

// console.log(nextSqaure());    // no
// console.log(nextSqaure(0));   // 1
// console.log(nextSqaure(1));   // 4
// console.log(nextSqaure(2));   // no
// console.log(nextSqaure(3));   // no
// console.log(nextSqaure(121)); // 144
// console.log(nextSqaure(165)); // no
// console.log(nextSqaure(400)); // 441
