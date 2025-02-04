import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/TODO.js";
import FormValidator from "../components/FormValidator.js";
import TodoCounter from "../components/TodoCounter.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

// import

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
//const todoTemplate = document.querySelector("#todo-template"); -> remove
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputvalues) => {
    // TODO - MOVE CODE FROM existing submission handler to here, code is below uncommented
    // const name = evt.target.name.value;
    //const dateInput = evt.target.date.value;
    //const date = new Date(dateInput);
    //date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    //const id = uuidv4();
    //const values = { name, date, id };
    //const todo = generateTodo(values);
    //todosList.append(todo); // use addItem method instead
    //addTodoPopup.close();
    //});
  },
});
addTodoPopup.setEventListeners();

const section = new Section({
  items: [], // pass initial todos-8
  renderer: () => {
    // generate todo item -8
    // add it to the todo list -8
    // (Refer to the forEach loop in this file)-8
  },
  containerSelector: "todos__list",
});

// call section instance's renderItems method-8

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

//addTodoForm.addEventListener("submit", (evt) => {
//evt.preventDefault();
// const name = evt.target.name.value;
//const dateInput = evt.target.date.value;

//const date = new Date(dateInput);
//date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//const id = uuidv4();
//const values = { name, date, id };
//const todo = generateTodo(values);

//todosList.append(todo); // use addItem method instead

//addTodoPopup.close();
//});

// initialTodos.forEach((item) => {
// const todo = generateTodo(item);
// todosList.append(todo); Use addItem method from section.js
// }); from here to line 50 is old code from previous sprint

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
