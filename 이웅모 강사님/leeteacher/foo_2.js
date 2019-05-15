// 생성자 함수
// function Circle(radius) {
//   this.radius = radius; // this는 나중에 생성할 객체에 radius를 추가하기 위함.
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }
// // 인스턴스의 생성
// const circle1 = new Circle(5); // 반지름이 5인 circle 객체를 생성
// const circle2 = new Circle(10); // 반지름이 10인 circle객체를 생성

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());

// const arr = [1, 2, 3, 4, 5];
// const filtered = arr.filter(item => item !== 2);
// console.log(filtered);


// obj.a = 1;
// obj.b = 10;
// 의미 없음

var value = 1;
// const 키워드로 선언한 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ",  this);  // obj {value: 100, foo: ƒ}
    console.log("foo's this.value: ",  this.value); // 100

    // 메소드의 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  }
};

obj.foo();