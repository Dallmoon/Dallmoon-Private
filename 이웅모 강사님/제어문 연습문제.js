// 문제 1
// let x = 15;
// if (10<x && 20>x){
//   console.log(x);
// }

//문제 2
// for(let i = 0; i<10 ; i++ ){
//   if( i%2 === 0){
//     console.log(i);
//   }
// }

// 문제 3
// let str = ''
// for (let i = 0; i < 10; i++ ){
//   if(i%2 === 0){
//     str = str + i;
//   }
// }
// console.log(str);
 
//문제 4
// for(let i = 0; i < 10; i++){
//   if(i%2 !== 0){
//     console.log(10 - i);
//   }
// }

//문제 5
// let x = 0;
// while(x < 10){
//   if(x%2 === 0){
//     console.log(x);
//     x = x + 2;
//   }
// }

//문제 6
// let x = 0;
// while(x<10){
//   if(x%2 !== 0){
//     console.log(10-x);
//   }
//   x = x + 1;
// }

//문제 7
// let sum = 0;
// for(let i = 0; i < 10; i++){
//   sum = sum + i;
// }
// console.log(sum);

//문제 8

// let sum = 0;
// for (let i = 0; i < 20; i++){
//   if(i % 2 !== 0 && i % 3 !== 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);


//문제 9
// let sum = 0;
// for (let i = 0; i < 20; i++){
//   if(i % 2 === 0 || i % 3 === 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);

//문제 10

// let li = [];
// for (let i = 1; i < 6; i++){
//   for (let j = 1; j < 6; j++){
//     if (i + j === 6){
//       li = [i,j];
//       console.log(li);
//     }
//   }
// }

//삼각형 pattern 1
// let str = '';
// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= 5; j++){
//     if(i >= j){
//       str = str + '*';
//     }
//   }
//   str = str + '\n';
// }
// console.log(str)

//삼각형 패턴 2

// let str ='';
// for(let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 5; j++){
//     if (j < i){
//        str = str + ' ';
//     }
//     else{
//       str = str +'*';
//     }
//   }
//   str = str + '\n';
// }
// console.log(str);

//삼각형 pattern 3
// let str ='';
// for(let i = 1; i <= 5; i++){
//   for (let j = 5; j >= 1; j --){
//     if (i <= j){
//       str = str + '*';
//     }
//   }
//   str = str + '\n';
// }
// console.log(str);

//삼각형 pattern 4

// let str ='';
// for(let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 5; j++){
//     if (j < 6-i){
//        str = str + ' ';
//     }
//     else{
//       str = str +'*';
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)

//정삼각형 

// let str =''
// for(let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 5; j++){
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

// let str =''
// for(let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 5; j++){
//     if (j < i){
//        str = str + ' '
//     }
//     else if(j == 5){
//       str = str + '*'
//     }
//     else{
//       str = str + '*'+'*'
//     }
//   }
//   str = str + '\n'
// }
// console.log(str)
