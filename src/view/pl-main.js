import createElement from '../helpers/elementMaker';
import removeTheTask from '../helpers/removeTask';
// import redrawTodoList from '../helpers/redrawTaskList';
import refreshProjectList from '../helpers/refreshProjectList';
import editTaskDialog, {
	editTaskHandler,
	populateFormWithTodoData,
} from '../dialogs/editTaskDialog';

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

const headerCell6 = document.createElement('th');

const headerCell7 = document.createElement('th');

tableHeader.appendChild(headerCell1);
tableHeader.appendChild(headerCell2);
tableHeader.appendChild(headerCell3);
tableHeader.appendChild(headerCell4);
tableHeader.appendChild(headerCell5);
tableHeader.appendChild(headerCell6);
tableHeader.appendChild(headerCell7);

main.appendChild(tableHeader);

// tableHeader.appendChild(thead);
const bodySection = document.createElement('section');
bodySection.className = 'todo-container';

main.appendChild(bodySection);

// event listener / event delegation for task view
bodySection.addEventListener('click', (e) => {
	if (e.target.classList.contains('todo-remove')) {
		const id = e.target.getAttribute('data-id');
		removeTheTask(id);
	}
	if (e.target.classList.contains('todo-edit')) {
		const id = e.target.getAttribute('data-id');
		// in case user added a new project and wants to assign it to the task
		refreshProjectList();
		editTaskDialog.showModal();
		populateFormWithTodoData(id);
		editTaskHandler(id);
	}
});
