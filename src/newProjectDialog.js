import { addProjectButton } from './pl-nav';

// not sure this goes here, but it will be here for now...
export const projectList = [
	'Default Project',
	'Work',
	'School',
	'Personal',
];

//this is the form that will be displayed in the modal, to create a new project

const container = document.querySelector('body');

export const projectDialog = document.createElement('dialog');
projectDialog.className = 'modal';

container.appendChild(projectDialog);

const parent = document.querySelector('.modal');

const form = document.createElement('form');
form.className = 'todo-form';
form.method = 'dialog';
parent.appendChild(form);

const title = document.createElement('title');
title.textContent = 'New Project';
form.appendChild(title);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
form.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleLabel.appendChild(titleInput);

const submitNewProject = document.createElement('button');
submitNewProject.textContent = 'Submit';
submitNewProject.className = 'submit-button';
submitNewProject.type = 'submit';
submitNewProject.name = 'submit';
form.appendChild(submitNewProject);

const cancelNewProject = document.createElement('button');
cancelNewProject.textContent = 'Cancel';
cancelNewProject.className = 'cancel-button';
cancelNewProject.type = 'cancel';
cancelNewProject.name = 'cancel';
form.appendChild(cancelNewProject);

submitNewProject.addEventListener('click', (e) => {
	e.preventDefault();
	projectList.push(titleInput.value);
	form.reset();
	console.log(projectList);
	projectDialog.close();
	addProjectButton.style.display = 'flex';
});

cancelNewProject.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
	projectDialog.close();
	addProjectButton.style.display = 'flex';
});
