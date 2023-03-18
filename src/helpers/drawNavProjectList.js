import projectList from "../dataStores/projectList";
import { removeProjectFromLocalStorage } from "./localStorage";
import refreshProjectList from "./refreshProjectList";
import redrawTodoList from "./redrawTaskList";

function domLoaded(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      callback();
    });
  } else {
    callback();
  }
}

export function updateNavProjectList() {
  domLoaded(() => {
    const listParent = document.querySelectorAll(".nav-project-list")[0];

    while (listParent.firstChild) {
      listParent.removeChild(listParent.firstChild);
    }

    projectList.forEach((project) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = project;
      link.classList.add("nav-project-item");
      listParent.appendChild(listItem);
      listItem.appendChild(link);
      if (project !== "All Tasks" && project !== "Default") {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-project-button");
        deleteButton.style.borderRadius = "50%";
        deleteButton.style.backgroundColor = "var(--title-selected)";
        deleteButton.style.padding = "0.2rem";

        listItem.appendChild(deleteButton);
      }
    });
  });
}

function handleNavPaneClicks() {
  domLoaded(() => document.querySelectorAll(".nav-project-list")[0]);
  const parentElement = document.querySelector(".nav-project-list");
  refreshProjectList();
  parentElement.addEventListener(
    "click",
    (e) => {
      e.stopImmediatePropagation();
      const clickedProject = e.target.textContent;
      if (projectList.includes(clickedProject)) {
        console.log(`${clickedProject} - project exists`);
        redrawTodoList(clickedProject);
      }
      if (e.target.classList.contains("delete-project-button")) {
        const parentTextContent = e.target.parentNode.textContent
          .trim()
          .replace(e.target.textContent.trim(), "");
        console.log(parentTextContent);
        removeProjectFromLocalStorage(parentTextContent);
        refreshProjectList();
        window.location.reload();
      }
      return clickedProject;
    },
    { capture: true }
  );
}

export default handleNavPaneClicks;
