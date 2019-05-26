// 1번---------------------------------------------

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function render() {
//   let html = '';

//   todos.forEach(function (todo) {
//     html += `<li id="${todo.id}">
//     <label>
//     <input type="checkbox"${todo.completed === true ? 'checked' : ''}>
//     ${todo.content}</label></li>`;
//   });

//   return html;
// }

// console.log(render());
// /*
// <li id="3">
//   <label><input type="checkbox">HTML</label>
// </li>
// <li id="2">
//   <label><input type="checkbox" checked>CSS</label>
// </li>
// <li id="1">
//   <label><input type="checkbox">Javascript</label>
// </li>
// */

// 2번 ---------------------

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getValues(key) {
//   return todos.map(function(item) {
//     // console.log(item);
//     return item[key];
//   });
// }

// console.log(getValues('id')); // [3, 2, 1]
// console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
// console.log(getValues('completed')); // [ false, true, false ]

// 3번 ---------------------------

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function sortBy(key) {
//   const todo = todos.slice();
//   return todo.sort(function(a, b) {
//     return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
//   });
// }

// console.log(sortBy('id'));
// /*
// [
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false }
// ]
// */
// console.log(sortBy('content'));
// /*
// [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// console.log(sortBy('completed'));
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true }
// ]
// */

// 4번 ----------

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function addTodo(newTodo) {
//   todos.unshift(newTodo);
// }

// addTodo({ id: 4, content: 'Test', completed: false });

// console.log(todos);
// /*
// [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */

// 5번 ----------------------

// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function removeTodo(id) {
//   // todos[id] = todos 에 있는 객체 중에 인수로 주어진 id를 갖고있는 애를 반환
//   // todos.id = 인수와 상관없이 todos의 id를 반환해야하는데, id프로퍼티가 있는지 없는지 모름
//   todos.forEach(function(item) {
//     return item.id === id ? item = item[id] : '';
//   })
// }

// removeTodo(2);

// console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
