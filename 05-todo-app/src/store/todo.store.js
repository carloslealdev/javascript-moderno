import { Todo } from "../todos/models/todo.model";

const filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Primera tarea"),
    new Todo("Segunda tarea"),
    new Todo("Tercera tarea"),
  ],

  filter: filters.All,
};

const initStore = () => {
  console.log(state);
};

export default { initStore };
