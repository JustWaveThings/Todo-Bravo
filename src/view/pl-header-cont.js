import createElement from '../helpers/elementMaker';
import icon from '../icons/todoAppIcon.svg';

const myIcon = new Image();

myIcon.src = icon;

export const headerCont = createElement('h1', 'Your Todo List!', {
	class: 'title',
});

export const headerIcon = createElement('img', '', {
	src: icon,
});

export const headerTag = createElement(
	'h2',
	' - Make It a Great Day to be Great!',
	{ class: 'header' }
);
