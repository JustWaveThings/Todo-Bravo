import createElement from './elementMaker';
import icon from './icons/icons8-todo-list-24.png';

const myIcon = new Image();

myIcon.src = icon;

export const headerCont = createElement('h1', 'Todo - list !', {
	class: 'title',
});

export const headerIcon = createElement('img', '', {
	src: icon,
});
