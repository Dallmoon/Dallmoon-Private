let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];
let status = 'all';
// DOMs

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

function countCompleted() {
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
}

function render() {
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


  activeTodo.forEach(function ({ id, content, completed }) {
    html += `<li id="${id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;

  countCompleted();
}

function removeItem(e) {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(function (todo) {
    return todo.id !== +e.target.parentNode.id;
  });
  render();
}

function checkItem(e) {
  todos = todos.map(function (todo) {
    return todo.id === +e.target.parentNode.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  render();
}

function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function addItem(e) {
  if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;
  todos = [{ id: generateId(), content: $inputTodo.value, completed: false }, ...todos];
  $inputTodo.value = '';
  render();
}

function completeAll(e) {
  if (e.target.checked) {
    todos = todos.map(function (todo) {
      return Object.assign({}, todo, { completed: true });
    });
  } else {
    todos = todos.map(todo => Object.assign({}, todo, { completed: false }));
  }
  // console.log(e.target.checked);
  render();
}

function clearAll() {
  todos = todos.filter(todo => (todo.completed ? '' : todo));
  render();
}

function clickNav(e) {
  if (e.target.nodeName !== 'LI') return;
  [...$nav.children].forEach(function ($navItem) {
    $navItem.classList.remove('active');
  });

  e.target.classList = 'active';
  status = e.target.id;
  render();
}


$inputTodo.addEventListener('keyup', addItem);

$todos.addEventListener('click', removeItem);

$todos.addEventListener('change', checkItem);

$completeAll.addEventListener('change', completeAll);

$clearCompleted.addEventListener('click', clearAll);

$nav.addEventListener('click', clickNav);

render();
