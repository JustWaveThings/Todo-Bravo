/* eslint-disable no-console */
import './style.css';
import container from './spaLayout';
// import createElementFactory from './createElement';
import { createElement, createFactory } from './elementFactory';

const h1 = createFactory('h1');
const span = createFactory('span');

const myHeading = h1(
	{},
	'Ember',
	span({}, ' is the best'),
	span({}, 'winston')
);

container.appendChild(myHeading);
