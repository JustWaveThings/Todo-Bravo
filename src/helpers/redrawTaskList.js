import taskView from "../view/taskView";
import displayFilteredTasks from "./filterTasks";

function redrawTodoList(filter) {
  const todoContainer = document.querySelector("section.todo-container-holder");

  const todoContainerTitle = document.querySelector("header.main-header");

  todoContainerTitle.textContent = `Project: ${filter || "All Tasks"}`;

  while (todoContainer.firstChild) {
    todoContainer.removeChild(todoContainer.firstChild);
  }
  // how do I get the project name  from the variable 'clickedProject'?
  const filteredTasks = displayFilteredTasks(filter || "All Tasks");

  filteredTasks.forEach((todo) => {
    taskView(
      "section.todo-container-holder",
      "article",
      todo.id,
      todo.title,
      todo.description,
      todo.dueDate,
      todo.priority,
      todo.project,
      todo.status,
      todo.edit,
      todo.remove
    );
  });
}

export default redrawTodoList;
