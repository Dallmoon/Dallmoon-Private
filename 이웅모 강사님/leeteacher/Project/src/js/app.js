// status

let todos = [];
let id = 0;
let status = 'all';

// DOMs

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

// render

function generateId(content) {
  id = content.length ? Math.max(...content.map(todo => todo.id)) + 1 : 1;
}

function render(content) {
  let html = '';
  let activeTodo = [];
  // console.log(content);

  // if (status === 'active') {
  //   activeTodo = content.filter(todo => (!todo.completed ? todo : ''));
  // } else if (status === 'completed') {
  //   activeTodo = content.filter(todo => (todo.completed ? todo : ''));
  // } else {
  //   status = 'all';
  //   activeTodo = content;
  // }

  activeTodo = content.filter(todo => {
    if (status === 'active') return !todo.completed;
    if (status === 'completed') return todo.completed;
    return true;
  });

  activeTodo.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.innerHTML = [...content.filter(todo => todo.completed)].length;
  $activeTodos.innerHTML = [...content.filter(todo => !todo.completed)].length;
  // console.log();
  generateId(content);
}

// Ajax

function getTodos(item) {
  todos = item;
  render(todos);
}

fetch('todos/', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(getTodos)
  .catch(console.log);

window.onload = render(todos);

function AjaxPOST(num, str) {
  fetch('todos/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: num, content: str, completed: false })
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}

function AjaxPUT(num, obj) {
  fetch(`todos/${num}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}

function AjaxDELETE(num) {
  fetch(`todos/${num}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}


// function AjaxGET() {
//   fetch('todos/', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   })
//     .then(res => res.json())
//     .then(render)
//     .catch(console.log);
// }

// function AjaxPATCH(num, str, boolean) {
//   fetch(`todos/${num}`, {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id: num, content: str, completed: boolean })
//   })
//     .then(res => res.json())
//     .then(render)
//     .catch(console.log);
// }

// EventHandler

function removeItem(e) {
  if (!e.target.classList.contains('remove-todo')) return;
  AjaxDELETE(e.target.parentNode.id);
}

function checkItem(e) {
  AjaxPUT(e.target.parentNode.id, { completed: e.target.checked });
  // console.log(e.target);
  console.log(typeof e.target.parentNode.id);
}

function addItem(e) {
  if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;
  // todos = [{ id: generateId(), content: $inputTodo.value, completed: false }, ...todos];
  AjaxPOST(id, $inputTodo.value, false);
  $inputTodo.value = '';
}

function completeAll(e) {
  if (e.target.checked) {
    fetch('todos/', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  } else {
    fetch('todos/', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: false })
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  }
}

function clearAll() {
  fetch('todos/completed', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
  $completeAll.firstElementChild.checked = false;
}

function clickNav(e) {
  if (e.target.nodeName !== 'LI') return;
  [...$nav.children].forEach($navItem => $navItem.classList.remove('active'));

  e.target.classList = 'active';
  status = e.target.id;
  render(todos);
  // AjaxGET();
}

// EventListener

$inputTodo.addEventListener('keyup', addItem);

$todos.addEventListener('click', removeItem);

$todos.addEventListener('change', checkItem);

$completeAll.addEventListener('change', completeAll);

$clearCompleted.addEventListener('click', clearAll);

$nav.addEventListener('click', clickNav);
