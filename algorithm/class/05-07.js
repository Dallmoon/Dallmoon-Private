function print(f) {
  var string = 'Hello';
  // 콜백 함수를 전달받는 함수가 콜백 함수의 호출 시기를 결정하고 호출
  return f(string);
}

var res1 = print(function (str) {return str.toUpperCase();});