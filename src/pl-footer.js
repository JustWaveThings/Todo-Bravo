import createElement from './elementMaker';

export const footer = createElement('div', '', {
	class: 'footer',
});

export const footerTag = createElement(
	'p',
	'© 2023, by JustWaveThings',
	{ class: 'footer-tag' }
);
