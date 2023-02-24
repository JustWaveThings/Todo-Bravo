import taskView from './taskView';
import todoObjects from './todoObjects';

function redrawTodoList() {
	const todoContainer = document.querySelector('tbody');
	console.log(todoContainer); // to prove it exists in the DOM, and it does.

	while (todoContainer.firstChild) {
		todoContainer.removeChild(todoContainer.firstChild);
	}

	todoObjects.forEach((todo) => {
		taskView(
			'tbody',
			'td',
			todo.getTitle(),
			todo.getDescription(),
			todo.getDueDate(),
			todo.getPriority(),
			todo.getProject(),
			todo.getStatus(),
			todo.getId()
		);
	});
}

export default redrawTodoList;
