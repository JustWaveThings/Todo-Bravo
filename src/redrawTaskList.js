import taskView from './taskView';
import todoObjects from './todoObjects';

function redrawTodoList() {
	const todoContainer = document.querySelector(
		'section.todo-container'
	);
	console.log(todoContainer); // to prove it exists in the DOM, and it does.

	while (todoContainer.firstChild) {
		todoContainer.removeChild(todoContainer.firstChild);
	}

	todoObjects.forEach((todo) => {
		taskView(
			'section.todo-container',
			'article',
			todo.getTitle(),
			todo.getDescription(),
			todo.getDueDate(),
			todo.getPriority(),
			todo.getProject(),
			todo.getStatus()
		);
	});
}

export default redrawTodoList;
