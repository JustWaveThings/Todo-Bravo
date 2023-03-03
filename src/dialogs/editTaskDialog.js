import projectList from '../dataStores/projectList';
import statusList from '../dataStores/statusList';
import priorityList from '../dataStores/priorityList';
import todoObjects from '../dataStores/todoObjects';
import redrawTodoList from '../helpers/redrawTaskList';
import { updateLocalStorage } from '../helpers/localStorage';

// this is the form that will be displayed in the modal, to create a new task

const container = document.querySelector('body');

const editTaskDialog = document.createElement('dialog');
editTaskDialog.className = 'editTaskModal';

container.appendChild(editTaskDialog);

const parent = document.querySelector('.editTaskModal');

const form = document.createElement('form');
form.className = 'edit-todo-form';
form.method = 'dialog';
parent.appendChild(form);

const formTitle = document.createElement('title');
formTitle.textContent = 'Edit Task';
form.appendChild(formTitle);

const titleDiv = document.createElement('div');
titleDiv.className = 'form-div';
form.appendChild(titleDiv);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
titleDiv.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleDiv.appendChild(titleInput);

const descriptionDiv = document.createElement('div');
descriptionDiv.className = 'form-div';
form.appendChild(descriptionDiv);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
descriptionDiv.appendChild(descriptionLabel);

const descriptionInput = document.createElement('textarea');
descriptionInput.name = 'description';
descriptionDiv.appendChild(descriptionInput);

const dueDateDiv = document.createElement('div');
dueDateDiv.className = 'form-div';
form.appendChild(dueDateDiv);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
dueDateDiv.appendChild(dueDateLabel);

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.name = 'dueDate';
dueDateDiv.appendChild(dueDateInput);

const priorityDiv = document.createElement('div');
priorityDiv.className = 'form-div';
form.appendChild(priorityDiv);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
priorityDiv.appendChild(priorityLabel);

const priorityInput = document.createElement('select');
priorityInput.name = 'priority';
priorityInput.textContent = 'priority';
priorityList.forEach((priority) => {
	const option = document.createElement('option');
	option.textContent = priority;
	priorityInput.appendChild(option);
});
priorityDiv.appendChild(priorityInput);

// project dropdown menu

const projectDiv = document.createElement('div');
projectDiv.className = 'form-div';
form.appendChild(projectDiv);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
projectDiv.appendChild(projectLabel);

const projectInput = document.createElement('select');
projectInput.name = 'project';

projectList.forEach((project) => {
	const option = document.createElement('option');
	option.textContent = project;
	projectInput.appendChild(option);
});
projectDiv.appendChild(projectInput);

// end project dropdown menu

const statusDiv = document.createElement('div');
statusDiv.className = 'form-div';
form.appendChild(statusDiv);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
statusDiv.appendChild(statusLabel);

const statusInput = document.createElement('select');
statusInput.textContent = 'Status';
statusInput.name = 'status';
statusList.forEach((status) => {
	const option = document.createElement('option');
	option.textContent = status;
	statusInput.appendChild(option);
});
statusDiv.appendChild(statusInput);

const buttonDiv = document.createElement('div');
buttonDiv.className = 'form-div';
form.appendChild(buttonDiv);

// edit / cancel buttons with event listeners

const editTask = document.createElement('button');
editTask.textContent = 'Update';
editTask.className = 'submit-button';
editTask.type = 'button';
editTask.name = 'edit';
buttonDiv.appendChild(editTask);

/* function editTaskHandler(id) {
	const handler = () => {
		console.log(`editTaskHandler -  ${id}`);
		const currTodo = todoObjects.find((todo) => todo.id === id);
		currTodo.setTitle(form.elements.title.value);
		currTodo.setDescription(form.elements.description.value);
		currTodo.setDueDate(form.elements.dueDate.value);
		currTodo.setPriority(form.elements.priority.value);
		currTodo.setProject(form.elements.project.value);
		currTodo.setStatus(form.elements.status.value);
		form.reset();
		editTaskDialog.close();
		updateLocalStorage();
		redrawTodoList();
	};
} */

export function editTaskHandler(id) {
	const handler = () => {
		console.log(`editTaskHandler -  ${id}`);
		const currTodo = todoObjects.find((todo) => todo.id === id);
		currTodo.setTitle(form.elements.title.value);
		currTodo.setDescription(form.elements.description.value);
		currTodo.setDueDate(form.elements.dueDate.value);
		currTodo.setPriority(form.elements.priority.value);
		currTodo.setProject(form.elements.project.value);
		currTodo.setStatus(form.elements.status.value);
		redrawTodoList();
		updateLocalStorage();
		form.reset();
		editTaskDialog.close();
	};

	editTask.addEventListener('click', handler, { once: true });

	return handler;
}

// To remove the event listener later:

/* export function editTheTask(id) {
	console.log('editTheTask EventListener added');
	editTask.addEventListener('click', editTaskHandler(id), {
		once: true,
	});
	console.log(`editTheTask -  ${id}`);
} */

export function populateFormWithTodoData(id) {
	console.log(`populateForm -  ${id}`);
	const currTodo = todoObjects.find((todo) => todo.getId() === id);
	form.elements.title.value = currTodo.getTitle();
	form.elements.description.value = currTodo.getDescription();
	form.elements.dueDate.value = currTodo.getDueDate();
	form.elements.priority.value = currTodo.getPriority();
	form.elements.project.value = currTodo.getProject();
	form.elements.status.value = currTodo.getStatus();
}

const cancelEdit = document.createElement('button');
cancelEdit.textContent = 'Cancel';
cancelEdit.className = 'cancel-button';
cancelEdit.type = 'cancel';
cancelEdit.name = 'cancel';
buttonDiv.appendChild(cancelEdit);

cancelEdit.addEventListener('click', (e) => {
	const id = e.target.getAttribute('data-id');
	e.preventDefault();
	form.reset();
	editTaskDialog.close();
	const handler = editTaskHandler(id);
	editTask.removeEventListener('click', handler);
});

export default editTaskDialog;
