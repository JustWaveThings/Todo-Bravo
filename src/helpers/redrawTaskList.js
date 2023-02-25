import taskView from '../view/taskView';
import todoObjects from '../dataStores/todoObjects';

function redrawTodoList() {
	const todoContainer = document.querySelector(
		'section.todo-container'
	);

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
