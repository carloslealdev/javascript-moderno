import todoStore, { filters } from "../../store/todo.store";

let element;

/**
 *
 * @param {HTMLElement} elementId ID del elemento HTMK
 *
 */
export const renderPendings = (elementId) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = todoStore.getTodos(filters.Pending).length;
};
