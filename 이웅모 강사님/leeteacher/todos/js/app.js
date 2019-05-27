let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');

function countCompleted() {
  $activeTodos.textContent = todos.filter(todo => todo.completed).length;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
}

function render() {
  let html = '';
  todos.forEach(function (todo) {
    html += `<li id="${todo.id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
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
  todos = todos.filter(todo => { return todo.completed ? '' : todo; });
  render();
}


$todos.addEventListener('click', removeItem);
$todos.addEventListener('change', checkItem);
$inputTodo.addEventListener('keyup', addItem);
$completeAll.addEventListener('change', completeAll);
$clearCompleted.addEventListener('click', clearAll);

render();
