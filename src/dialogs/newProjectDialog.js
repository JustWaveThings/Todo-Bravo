import projectList from '../dataStores/projectList';
import { updateNavProjectList } from '../helpers/drawNavProjectList';
import { updateLocalStorage } from '../helpers/localStorage';

// this is the form that will be displayed in the modal, to create a new project

const container = document.querySelector('body');

const projectDialog = document.createElement('dialog');
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

const buttonDiv = document.createElement('div');
buttonDiv.className = 'form-div';
form.appendChild(buttonDiv);

const submitNewProject = document.createElement('button');
submitNewProject.textContent = 'Submit';
submitNewProject.className = 'submit-button';
submitNewProject.type = 'submit';
submitNewProject.name = 'submit';
buttonDiv.appendChild(submitNewProject);

const cancelNewProject = document.createElement('button');
cancelNewProject.textContent = 'Cancel';
cancelNewProject.className = 'cancel-button';
cancelNewProject.type = 'cancel';
cancelNewProject.name = 'cancel';
buttonDiv.appendChild(cancelNewProject);

submitNewProject.addEventListener('click', (e) => {
	e.preventDefault();
	projectList.push(titleInput.value);
	updateNavProjectList();
	form.reset();
	projectDialog.close();
	updateLocalStorage();
	window.location.reload();
});

cancelNewProject.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
	projectDialog.close();
});

export default projectDialog;
