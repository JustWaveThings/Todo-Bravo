// import projectList from './projectList';

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
titleLabel.appendChild(titleInput);

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
