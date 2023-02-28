import projectList from '../dataStores/projectList';
import statusList from '../dataStores/statusList';
import priorityList from '../dataStores/priorityList';
import createTodoObject from '../helpers/todoFactory';
import todoObjects from '../dataStores/todoObjects';
import redrawTodoList from '../helpers/redrawTaskList';
import { updateLocalStorage } from '../helpers/localStorage';
// this is the form that will be displayed in the modal, to create a new task

const container = document.querySelector('body');

const editTaskDialog = document.createElement('dialog');
editTaskDialog.className = 'editTaskModal';

container.appendChild(editTaskDialog);

const parent = document.querySelector('.editTaskModal');

const form = document.createElement('form');
form.className = 'edit-todo-form';
form.method = 'dialog';
parent.appendChild(form);

const title = document.createElement('title');
title.textContent = 'Edit Task';
form.appendChild(title);

const titleDiv = document.createElement('div');
titleDiv.className = 'form-div';
form.appendChild(titleDiv);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
titleDiv.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleDiv.appendChild(titleInput);

const descriptionDiv = document.createElement('div');
descriptionDiv.className = 'form-div';
form.appendChild(descriptionDiv);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
descriptionDiv.appendChild(descriptionLabel);

const descriptionInput = document.createElement('textarea');
descriptionInput.name = 'description';
descriptionDiv.appendChild(descriptionInput);

const dueDateDiv = document.createElement('div');
dueDateDiv.className = 'form-div';
form.appendChild(dueDateDiv);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
dueDateDiv.appendChild(dueDateLabel);

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.name = 'dueDate';
dueDateDiv.appendChild(dueDateInput);

const priorityDiv = document.createElement('div');
priorityDiv.className = 'form-div';
form.appendChild(priorityDiv);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
priorityDiv.appendChild(priorityLabel);

const priorityInput = document.createElement('select');
priorityInput.textContent = 'priority';
priorityList.forEach((priority) => {
	const option = document.createElement('option');
	option.textContent = priority;
	priorityInput.appendChild(option);
});
priorityDiv.appendChild(priorityInput);

// project dropdown menu

const projectDiv = document.createElement('div');
projectDiv.className = 'form-div';
form.appendChild(projectDiv);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
projectDiv.appendChild(projectLabel);

const projectInput = document.createElement('select');
projectInput.name = 'project';

projectList.forEach((project) => {
	const option = document.createElement('option');
	option.textContent = project;
	projectInput.appendChild(option);
});
projectDiv.appendChild(projectInput);

// end project dropdown menu

const statusDiv = document.createElement('div');
statusDiv.className = 'form-div';
form.appendChild(statusDiv);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
statusDiv.appendChild(statusLabel);

const statusInput = document.createElement('select');
statusInput.textContent = 'Status';
statusList.forEach((status) => {
	const option = document.createElement('option');
	option.textContent = status;
	statusInput.appendChild(option);
});
statusDiv.appendChild(statusInput);

// submit / cancel buttons with event listeners

const buttonDiv = document.createElement('div');
buttonDiv.className = 'form-div';
form.appendChild(buttonDiv);

const submitNewTask = document.createElement('button');
submitNewTask.textContent = 'Submit';
submitNewTask.className = 'submit-button';
submitNewTask.type = 'submit';
submitNewTask.name = 'submit';
buttonDiv.appendChild(submitNewTask);

const cancelNewTask = document.createElement('button');
cancelNewTask.textContent = 'Cancel';
cancelNewTask.className = 'cancel-button';
cancelNewTask.type = 'cancel';
cancelNewTask.name = 'cancel';
buttonDiv.appendChild(cancelNewTask);

submitNewTask.addEventListener('click', (e) => {
	e.preventDefault();
	const newTodo = createTodoObject(
		titleInput.value,
		descriptionInput.value,
		dueDateInput.value,
		priorityInput.value,
		projectInput.value,
		statusInput.value
	);
	todoObjects.push(newTodo);
	updateLocalStorage();
	console.log({ todoObjects });
	form.reset();
	editTaskDialog.close();
	redrawTodoList();
});

cancelNewTask.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
	editTaskDialog.close();
});

export default editTaskDialog;
