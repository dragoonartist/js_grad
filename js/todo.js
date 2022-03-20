const todoContainer = document.querySelector(".todo");
const todoForm = todoContainer.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

const todoList = todoContainer.querySelector("#todo-list");
const TODO_KEY = "todos";

let todos = [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function onClickDeleteBtn(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != li.id);
  saveTodo();
  li.remove();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const btn = document.createElement("button");
  btn.classList.add("delete-btn");
  btn.innerText = "🏴‍☠️";
  btn.addEventListener("click", onClickDeleteBtn);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function onSubmitTodo(event) {
  event.preventDefault();
  const newTodoObj = {
    text: todoInput.value,
    id: Date.now(),
  };
  todoInput.value = "";
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", onSubmitTodo);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  todos.forEach(paintTodo);
}
