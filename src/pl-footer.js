import createElement from './elementMaker';

export const footerTag = createElement(
	'p',
	'© 2023, by JustWaveThings',
	{ class: 'footer-tag' }
);

export const footer = createElement('div', '', {
	class: 'footer',
});
