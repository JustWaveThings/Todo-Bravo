import taskView from '../view/taskView';
import displayFilteredTasks from './filterTasks';

function redrawTodoList() {
	const todoContainer = document.querySelector(
		'section.todo-container-holder'
	);

	while (todoContainer.firstChild) {
		todoContainer.removeChild(todoContainer.firstChild);
	}

	const filteredTasks = displayFilteredTasks('All Tasks');
	// how do I fix this so that it works with the displayFilteredTasks function?
	filteredTasks.forEach((todo) => {
		taskView(
			'section.todo-container-holder',
			'article',
			todo.id,
			todo.title,
			todo.description,
			todo.dueDate,
			todo.priority,
			todo.project,
			todo.status,
			todo.edit,
			todo.remove
		);
	});
}

export default redrawTodoList;
