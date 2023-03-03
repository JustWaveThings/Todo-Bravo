import taskView from '../view/taskView';
import todoObjects from '../dataStores/todoObjects';

function redrawTodoList() {
	const todoContainer = document.querySelector(
		'section.todo-container-holder'
	);

	while (todoContainer.firstChild) {
		todoContainer.removeChild(todoContainer.firstChild);
	}

	todoObjects.forEach((todo) => {
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
