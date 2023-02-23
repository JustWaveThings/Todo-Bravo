// import projectList from './projectList';
import statusList from './statusList';
import priorityList from './priorityList';
// this is the form that will be displayed in the modal, to create a new task

const container = document.querySelector('body');

const taskDialog = document.createElement('dialog');
taskDialog.className = 'taskModal';

container.appendChild(taskDialog);

const parent = document.querySelector('.taskModal');

const form = document.createElement('form');
form.className = 'todo-form';
form.method = 'dialog';
parent.appendChild(form);

const title = document.createElement('title');
title.textContent = 'New Task';
form.appendChild(title);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
form.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
form.appendChild(titleInput);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
form.appendChild(descriptionLabel);

const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.name = 'description';
form.appendChild(descriptionInput);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
form.appendChild(dueDateLabel);

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.name = 'dueDate';
form.appendChild(dueDateInput);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
form.appendChild(priorityLabel);

const priorityInput = document.createElement('select');
priorityInput.textContent = 'priority';
priorityList.forEach((priority) => {
	const option = document.createElement('option');
	option.textContent = priority;
	priorityInput.appendChild(option);
});
form.appendChild(priorityInput);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
form.appendChild(projectLabel);

const projectInput = document.createElement('input');
projectInput.type = 'text';
projectInput.name = 'project';
form.appendChild(projectInput);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
form.appendChild(statusLabel);

const statusInput = document.createElement('select');
statusInput.textContent = 'Status';
statusList.forEach((status) => {
	const option = document.createElement('option');
	option.textContent = status;
	statusInput.appendChild(option);
});
form.appendChild(statusInput);

// submit / cancel buttons with event listeners
const submitNewTask = document.createElement('button');
submitNewTask.textContent = 'Submit';
submitNewTask.className = 'submit-button';
submitNewTask.type = 'submit';
submitNewTask.name = 'submit';
form.appendChild(submitNewTask);

const cancelNewTask = document.createElement('button');
cancelNewTask.textContent = 'Cancel';
cancelNewTask.className = 'cancel-button';
cancelNewTask.type = 'cancel';
cancelNewTask.name = 'cancel';
form.appendChild(cancelNewTask);

submitNewTask.addEventListener('click', (e) => {
	e.preventDefault();
	// TODO: create a new todo object instance
	form.reset();
	taskDialog.close();
});

cancelNewTask.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
	taskDialog.close();
});

export default taskDialog;
