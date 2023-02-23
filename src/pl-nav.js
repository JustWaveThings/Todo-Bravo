import createElement from './elementMaker';
import addButtonIcon from './icons/add_project.svg';
import projectDialog from './newProjectDialog';

const addProjectButtonIcon = new Image();
addProjectButtonIcon.src = addButtonIcon;

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

export const navProjectDelete = createElement('button', '-', {
	class: 'nav-project-delete',
});
