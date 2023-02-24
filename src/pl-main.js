import createElement from './elementMaker';

export const main = createElement('section', '', {
	class: 'main',
});

export const mainHeader = createElement(
	'Header',
	'Project: Default',
	{ class: 'main-header' }
);

const table = document.createElement('table');
const thead = document.createElement('thead');

const headerRow = document.createElement('tr');

const headerCell1 = document.createElement('th');
headerCell1.textContent = 'Status';

const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Title';

const headerCell3 = document.createElement('th');
headerCell3.textContent = 'Description';

const headerCell4 = document.createElement('th');
headerCell4.textContent = 'Due Date';

const headerCell5 = document.createElement('th');
headerCell5.textContent = 'Priority';

const headerCell6 = document.createElement('th');
headerCell6.textContent = 'Edit';

const headerCell7 = document.createElement('th');
headerCell7.textContent = 'Delete';

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
headerRow.appendChild(headerCell4);
headerRow.appendChild(headerCell5);
headerRow.appendChild(headerCell6);
headerRow.appendChild(headerCell7);

thead.appendChild(headerRow);

table.appendChild(thead);

main.appendChild(table);

main.appendChild(mainHeader);
