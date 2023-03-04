import createElement from '../helpers/elementMaker';
import addButtonIcon from '../icons/add_project.svg';
import addTaskIcon from '../icons/add_todo.svg';
import projectDialog from '../dialogs/newProjectDialog';
import taskDialog from '../dialogs/newTaskDialog';
import refreshProjectList from '../helpers/refreshProjectList';

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
	refreshProjectList();
});

export const addProjectButtonImg = createElement('img', '', {
	src: addButtonIcon,
	class: 'button-img',
});

export const navProjectList = createElement('ul', '', {
	class: 'nav-project-list',
});

export const navProjectItem = createElement('li', '', {
	class: 'nav-project-item',
});

export const addTaskButton = createElement('button', 'New Task', {
	class: 'add-project-button',
});

addTaskButton.addEventListener('click', () => {
	refreshProjectList();
	taskDialog.showModal();
});

export const addTaskButtonImg = createElement('img', '', {
	src: addTaskIcon,
	class: 'button-img',
});
