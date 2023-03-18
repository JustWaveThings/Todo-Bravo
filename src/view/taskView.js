function taskView(
  appendTo,
  elem,
  id,
  title = "default title",
  description = "default description",
  dueDate = "default due date",
  priority = "default priority",
  project = "default project",
  status = "default status",
  edit = "edit",
  remove = "remove"
) {
  const toAppendTo = document.querySelector(`${appendTo}`);
  const container = document.createElement(elem);
  container.className = "todo-container";

  const props = {
    title: {
      type: "div",
      className: "todo-title",
      textContent: title,
    },
    description: {
      type: "div",
      className: "todo-description",
      textContent: description,
    },
    dueDate: {
      type: "div",
      className: "todo-dueDate",
      textContent: dueDate,
    },
    priority: {
      type: "div",
      className: "todo-priority",
      textContent: priority,
    },
    project: {
      type: "div",
      className: "todo-project",
      textContent: project,
    },
    status: {
      type: "div",
      className: "todo-status",
      textContent: status,
    },
    edit: {
      type: "button",
      className: "todo-edit",
      textContent: edit,
      dataAttribute: id,
    },
    remove: {
      type: "button",
      className: "todo-remove",
      textContent: remove,
      dataAttribute: id,
    },
  };

  Object.keys(props).forEach((key) => {
    const elementType = document.createElement(props[key].type || elem);
    elementType.className = props[key].className;
    elementType.textContent = props[key].textContent;
    if (props[key].dataAttribute) {
      elementType.setAttribute("data-id", props[key].dataAttribute);
    }
    container.appendChild(elementType);
  });
  toAppendTo.appendChild(container);
}

export default taskView;
