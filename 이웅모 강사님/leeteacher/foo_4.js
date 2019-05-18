// 원의 넓이 계산법

// function circleArea(num) {
//   const pi = Math.PI;
//   return (num ** 2) * pi;
// }

// console.log(circleArea(10));

// min 이상 max 미만의 임의의 정수를 반환하기

// function minTomax(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(minTomax(2, 7));

// 정수 입력, 5단위 올림

// function ceilBy5(num) {
//   let int = num;
//   while (int % 5 !== 0) {
//     int += 1;
//   }
//   return int;
// }

// console.log(ceilBy5(29));

// 임의의 HTML색상 코드를 반환하는 함수 작성

// function htmlHexCode() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// console.log(htmlHexCode());

// rgb 색상코드 랜덤 반환

// function randomRgbCode() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   return `rgb (${red}, ${green}, ${blue})`;
// }

// console.log(randomRgbCode());

// 소수와 자릿수를 받아서 소수를 자리 수만큼만 자른 뒤 반환

// function fixFloat(int, digit) {
//   const sol = int.toExponential(digit + 1);
//   return (sol * 1).toString(10);
// }

// console.log(fixFloat(10.12345, 2).toString(10));

// 카멜케이스의 문자열을 입력받아 snake케이스로 바꾸기
