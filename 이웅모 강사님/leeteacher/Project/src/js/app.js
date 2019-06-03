// let todos = [];

// function getTodos(item) {
//   todos = item;
// }
// fetch('http://localhost:9000/todos/', {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' }
// })
//   .then(res => res.json())
//   .then(getTodos)
//   .catch(console.log);

// console.log(todos);
let status = 'all';
// DOMs

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

function render(todos) {
  let html = '';
  let activeTodo = [...todos];

  if (status === 'active') {
    activeTodo = todos.filter(function (todo) {
      return !todo.completed ? todo : '';
    });
  } else if (status === 'completed') {
    activeTodo = todos.filter(function (todo) {
      return todo.completed ? todo : '';
    });
  } else {
    status = 'all';
  }


  activeTodo.forEach(function (todo) {
    html += `<li id="${todo.id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.innerHTML = [...todos.filter(todo => todo.completed)].length;
  $activeTodos.innerHTML = [...todos.filter(todo => !todo.completed)].length;
  // console.log();
}

function AjaxGET() {
  fetch('http://localhost:9000/todos/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}

function AjaxPOST(num, str, boolean) {
  fetch('http://localhost:9000/todos/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: num, content: str, completed: boolean })
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}

// function AjaxPATCH(num, str, boolean) {
//   fetch(`http://localhost:9000/todos/${num}`, {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id: num, content: str, completed: boolean })
//   })
//     .then(res => res.json())
//     .then(render)
//     .catch(console.log);
// }

function AjaxPUT(num, obj) {
  fetch(`http://localhost:9000/todos/${num}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}

function AjaxDELETE(num) {
  fetch(`http://localhost:9000/todos/${num}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}


function removeItem(e) {
  if (!e.target.classList.contains('remove-todo')) return;
  AjaxDELETE(e.target.parentNode.id);
}

function checkItem(e) {
  AjaxPUT(e.target.parentNode.id, { completed: !e.target.checked });
  // console.log(e.target);
  // console.log(e.target.parentNode.id);
}

function generateId() {
  // return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  let id = 0;
  fetch('http://localhost:9000/todos/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then((content) => {
      // console.log(content.length);
      // console.log(Math.max(...content.map(todo => console.log(todo.id)) + 1));
      console.log([...content].map(todo => todo.id));
      id = content.length ? Math.max(...content.map(todo => todo.id)) + 1 : 1;

      // console.log(id);
    })
    .catch(console.log);
  return id;
}

function addItem(e) {
  if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;
  // todos = [{ id: generateId(), content: $inputTodo.value, completed: false }, ...todos];
  AjaxPOST(generateId(), $inputTodo.value, false);
  $inputTodo.value = '';
}

function completeAll(e) {
  if (e.target.checked) {
    fetch('http://localhost:9000/todos/', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  } else {
    fetch('http://localhost:9000/todos/', {
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
  fetch('http://localhost:9000/todos/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true })
  })
    .then(res => res.json())
    .then(render)
    .catch(console.log);
}

function clickNav(e) {
  if (e.target.nodeName !== 'LI') return;
  [...$nav.children].forEach(function ($navItem) {
    $navItem.classList.remove('active');
  });

  e.target.classList = 'active';
  status = e.target.id;
  AjaxGET();
}


$inputTodo.addEventListener('keyup', addItem);

$todos.addEventListener('click', removeItem);

$todos.addEventListener('change', checkItem);

$completeAll.addEventListener('change', completeAll);

$clearCompleted.addEventListener('click', clearAll);

$nav.addEventListener('click', clickNav);

window.onload = AjaxGET();
