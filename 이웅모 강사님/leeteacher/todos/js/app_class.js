class TodoList {
  constructor(todo) {
    this.todos = todo;
    const $todos = document.querySelector('.todos');
    const $inputTodo = document.querySelector('.input-todo');
    const $completeAll = document.querySelector('.complete-all');
    const $completedTodos = document.querySelector('.completed-todos');
    const $activeTodos = document.querySelector('.active-todos');
    const $clearCompleted = document.querySelector('.clear-completed');

    this.$todos = $todos;
    this.$inputTodo = $inputTodo;
    this.$completeAll = $completeAll;
    this.$completedTodos = $completedTodos;
    this.$activeTodos = $activeTodos;
    this.$clearCompleted = $clearCompleted;

    $todos.addEventListener('click', this.removeItem.bind(this));
    $todos.addEventListener('change', this.checkItem.bind(this));
    $inputTodo.addEventListener('keyup', this.addItem.bind(this));
    $completeAll.addEventListener('change', this.completeAll.bind(this));
    $clearCompleted.addEventListener('click', this.clearAll.bind(this));

    this.render();
  }


  countCompleted() {
    this.$activeTodos.textContent = this.todos.filter(todo => todo.completed).length;
    this.$completedTodos.textContent = this.todos.filter(todo => todo.completed).length;
  }

  render() {
    let html = '';
    this.todos.forEach(function (todo) {
      html += `<li id="${todo.id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    });
    this.$todos.innerHTML = html;
    this.countCompleted();
  }

  removeItem(e) {
    if (!e.target.classList.contains('remove-todo')) return;
    this.todos = this.todos.filter(function (todo) {
      return todo.id !== +e.target.parentNode.id;
    });
    this.render();
  }

  checkItem(e) {
    console.log(this.todos);
    this.todos = this.todos.map(function (todo) {
      return todo.id === +e.target.parentNode.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    this.render();
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addItem(e) {
    if (e.keyCode !== 13 || this.$inputTodo.value.trim() === '') return;
    this.todos = [{ id: this.generateId(), content: this.$inputTodo.value, completed: false }, ...this.todos];
    this.$inputTodo.value = '';
    this.render();
  }

  completeAll(e) {
    if (e.target.checked) {
      this.todos = this.todos.map(function (todo) {
        return Object.assign({}, todo, { completed: true });
      });
    } else {
      this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: false }));
    }
    // console.log(e.target.checked);
    this.render();
  }

  clearAll() {
    this.todos = this.todos.filter(todo => { return todo.completed ? '' : todo; });
    this.render();
  }
}

const foo = new TodoList([{ id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
  { id: 4, content: 'CSS', completed: true }]);

const bar = new TodoList([{ id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
  { id: 4, content: 'Javascript', completed: false }]);
// foo.$todos.addEventListener('click', foo.removeItem.bind(foo));
// foo.$todos.addEventListener('change', foo.checkItem.bind(foo));
// foo.$inputTodo.addEventListener('keyup', foo.addItem.bind(foo));
// foo.$completeAll.addEventListener('change', foo.completeAll.bind(foo));
// foo.$clearCompleted.addEventListener('click', foo.clearAll.bind(foo));
