import { Todo } from "../models/todo.model";
import { createTodoHtml } from "./createTodoHtml";

//Declaramos el elemento afuera de la función render para tener la referencia
// y no barrer el DOM en cada render de la app
let element;

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  //Limpoamos el elemento en cada render para que no se apilen los todos
  element.innerHTML = "";

  todos.forEach((todo) => {
    element.append(createTodoHtml(todo));
  });
};
