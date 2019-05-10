// let num = 0;

// function increase() {
//   num += 1;
//   return num;
// }

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());

const Counter = (function foo() {
  let num = 0;
  return {
    increase() {
      num += 1;
      return num;
    },
    decrease() {
      num -= 1;
      return num;
    }
  };
}());

console.log(Counter.increase());
console.log(typeof Counter);
