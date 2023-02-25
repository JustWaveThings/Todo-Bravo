import createElement from './helpers/elementMaker';
import icon from './icons/delete.svg';

const myIcon = new Image();
myIcon.src = icon;

export const footerTag = createElement(
	'p',
	'© 2023, by JustWaveThings',
	{ class: 'footer-tag' }
);

export const footer = createElement('div', '', {
	class: 'footer',
});

export const clearLocalStorageBtn = createElement('button', '', {
	class: 'clear-local-storage',
	type: 'button',
});

export const clearBtnIcon = createElement('img', '', {
	class: 'clearBtnIcon',
	src: icon,
});
