// 문제 1
// var x = 15;
// if (10<x && 20>x){
//   console.log(x);
// }

//문제 2
// for(var i = 0; i<10 ; i++ ){
//   if( i%2 === 0){
//     console.log(i);
//   }
// }

// 문제 3
// var str = ''
// for (var i = 0; i < 10; i++ ){
//   if(i%2 === 0){
//     str = str + i
//   }
// }
// console.log(str);
 
//문제 4
// for(var i = 0; i < 10; i++){
//   if(i%2 !== 0){
//     console.log(10 - i)
//   }
// }

//문제 5
// var x = 0;
// while(x < 10){
//   if(x%2 === 0){
//     console.log(x);
//     x = x + 2;
//   }
// }

//문제 6
// var x = 0;
// while(x<10){
//   if(x%2 !== 0){
//     console.log(10-x);
//   }
//   x = x + 1;
// }

//문제 7
// var sum = 0;
// for(var i = 0; i < 10; i++){
//   sum = sum + i;
// }
// console.log(sum);

//문제 8

// var sum = 0;
// for (var i = 0; i < 20; i++){
//   if(i % 2 !== 0 && i % 3 !== 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);


//문제 9
// var sum = 0;
// for (var i = 0; i < 20; i++){
//   if(i % 2 === 0 || i % 3 === 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);

//문제 10

// var li = [];
// for (var i = 1; i < 6; i++){
//   for (var j = 1; j < 6; j++){
//     if (i + j === 6){
//       li = [i,j];
//       console.log(li);
//     }
//   }
// }

//삼각형 pattern 1
// var str = ''
// for(var i = 1; i <= 5; i++){
//   for(var j = 1; j <= 5; j++){
//     if(i >= j){
//       str = str + '*'
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)

//삼각형 패턴 2

// var str =''
// for(var i = 1; i <= 5; i++){
//   for (var j = 1; j <= 5; j++){
//     if (j < i){
//        str = str + ' '
//     }
//     else{
//       str = str +'*'
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)

//삼각형 pattern 3
// var str =''
// for(var i = 1; i <= 5; i++){
//   for (var j = 5; j >= 1; j --){
//     if (i <= j){
//       str = str + '*'
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)

//삼각형 pattern 4

// var str =''
// for(var i = 1; i <= 5; i++){
//   for (var j = 1; j <= 5; j++){
//     if (j < 6-i){
//        str = str + ' '
//     }
//     else{
//       str = str +'*'
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)

//정삼각형 

// var str =''
// for(var i = 1; i <= 5; i++){
//   for (var j = 1; j <= 5; j++){
//     if (j < 6-i){
//        str = str + ' '
//     }
//     else if(j == 5){
//       str = str + '*'
//     }
//     else{
//       str = str +'*'+'*'
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)

//역정삼각형

var str =''
for(var i = 1; i <= 5; i++){
  for (var j = 1; j <= 5; j++){
    if (j < i){
       str = str + ' '
    }
    else if(j == 5){
      str = str + '*'
    }
    else{
      str = str + '*'+'*'
    }
  }
  str = str + '\n'
}
console.log(str)