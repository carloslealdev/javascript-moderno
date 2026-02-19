import html from "./app.html?raw";
import todoStore, { filters } from "../store/todo.store";
import { renderPendings, renderTodos } from "./usecases";

const ElementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompleted: ".clear-completed",
  TodoFilters: ".filtro",
  PendingCount: "#pending-count",
};
/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    updatePendinCount();
    // console.log(todos);
  };

  const updatePendinCount = () => {
    renderPendings(ElementIDs.PendingCount);
  };

  //Cuando la función App se llama
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    todoStore.loadStore();
    displayTodos();
  })();

  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const clearCompletedButton = document.querySelector(
    ElementIDs.ClearCompleted,
  );
  const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

  //Liesteners
  newDescriptionInput.addEventListener("keyup", (event) => {
    //Si la tecla no es 'Enter' entonces return
    if (event.keyCode != 13) return;

    if (event.target.value.trim().length === 0) return;

    //Añado el todo
    todoStore.addTodo(event.target.value);

    //Llamo displayTodos() para mostrar los todos actualizados
    displayTodos();

    //Dejo la caja de texto vacía para evitar multiples submits con mis validaciones
    event.target.value = "";
  });

  todoListUL.addEventListener("click", (event) => {
    //Busco el elemento padre más cercano que posea el atributo 'data-id'
    const element = event.target.closest("[data-id]");

    todoStore.toggleTodo(element.getAttribute("data-id"));

    displayTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    if (event.target.className != "destroy") return;
    //Busco el elemento padre más cercano que posea el atributo 'data-id'
    const element = event.target.closest("[data-id]");

    todoStore.deleteTodo(element.getAttribute("data-id"));

    displayTodos();
  });

  clearCompletedButton.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener("click", (element) => {
      filtersLIs.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");

      switch (element.target.text) {
        case "Todos":
          todoStore.setFilter(filters.All);
          break;

        case "Completados":
          todoStore.setFilter(filters.Completed);
          break;

        case "Pendientes":
          todoStore.setFilter(filters.Pending);
          break;
      }

      displayTodos();
    });
  });
};
