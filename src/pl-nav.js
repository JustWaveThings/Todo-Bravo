import createElement from './elementMaker';
import addButtonIcon from './icons/add_project.svg';
import addTaskIcon from './icons/add_todo.svg';
import projectDialog from './newProjectDialog';

const addProjectButtonIcon = new Image();
addProjectButtonIcon.src = addButtonIcon;

const addTaskButtonIcon = new Image();
addTaskButtonIcon.src = addTaskIcon;

export const nav = createElement('div', '', {
	class: 'nav',
});

export const navTitle = createElement('title', 'Projects', {
	class: 'nav-title',
});

export const addProjectButton = createElement(
	'button',
	'New Project',
	{
		class: 'add-project-button',
	}
);

addProjectButton.addEventListener('click', () => {
	projectDialog.showModal();
});

export const addProjectButtonImg = createElement('img', '', {
	src: addButtonIcon,
	class: 'button-img',
});

export const navProjectList = createElement('ul', '', {
	class: 'nav-project-list',
});

export const navProjectItem = createElement('li', 'Default Project', {
	class: 'nav-project-item',
});

export const addTaskButton = createElement('button', 'New Task', {
	class: 'add-project-button',
});

addTaskButton.addEventListener('click', () => {
	// TODO - add task dialog to be called here
	console.log('add task button clicked');
});

export const addTaskButtonImg = createElement('img', '', {
	src: addTaskIcon,
	class: 'button-img',
});
