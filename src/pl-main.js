import createElement from './elementMaker';

export const main = createElement('section', '', {
	class: 'main',
});

export const mainHeader = createElement(
	'Header',
	'Project: Default',
	{ class: 'main-header' }
);
main.appendChild(mainHeader);
const tableHeader = document.createElement('header');

const headerCell1 = document.createElement('th');
headerCell1.textContent = 'Title';
const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Description';

const headerCell3 = document.createElement('th');
headerCell3.textContent = 'Due Date';

const headerCell4 = document.createElement('th');
headerCell4.textContent = 'Priority';

const headerCell5 = document.createElement('th');
headerCell5.textContent = 'Status';

/* const headerCell6 = document.createElement('th');
headerCell6.textContent = 'Edit';

const headerCell7 = document.createElement('th');
headerCell7.textContent = 'Delete'; */

tableHeader.appendChild(headerCell1);
tableHeader.appendChild(headerCell2);
tableHeader.appendChild(headerCell3);
tableHeader.appendChild(headerCell4);
tableHeader.appendChild(headerCell5);
/* tableHeader.appendChild(headerCell6);
tableHeader.appendChild(headerCell7); */

main.appendChild(tableHeader);

// tableHeader.appendChild(thead);
const bodySection = document.createElement('section');
bodySection.className = 'todo-container';

main.appendChild(bodySection);
