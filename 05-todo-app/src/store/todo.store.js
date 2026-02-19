import { Todo } from "../todos/models/todo.model";

export const filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Primera tarea"),
    new Todo("Segunda tarea"),
    new Todo("Tercera tarea"),
    new Todo("Cuarta tarea"),
    new Todo("Quinta tarea"),
  ],

  filter: filters.All,
};

const initStore = () => {
  loadStore();
};

const loadStore = () => {
  if (!localStorage.getItem("state")) return;
  const { todos = [], filter = filters.All } = JSON.parse(
    localStorage.getItem("state"),
  );

  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = () => {
  localStorage.setItem("state", JSON.stringify(state));
};

const getTodos = (filter = filters.All) => {
  switch (filter) {
    case filters.All:
      return [...state.todos];

    case filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Filter ${filter} is not valid`);
  }
};

const addTodo = (description) => {
  if (!description) throw new Error("Description is required");

  state.todos.push(new Todo(description));
  saveStateToLocalStorage();
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  saveStateToLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id != todoId);
  saveStateToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

const setFilter = (newFilter = filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  initStore,
  loadStore,
  saveStateToLocalStorage,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,
};
