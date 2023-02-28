import todoObjects from '../dataStores/todoObjects';
import editTaskDialog from '../dialogs/editTaskDialog';

function editTheTask(id) {
	const index = todoObjects.findIndex((todo) => todo.id === id);
	const todo = todoObjects[index];
	editTaskDialog.showModal();
	const form = document.querySelector('.edit-todo-form');
	form.title.value = todo.title;
	form.description.value = todo.description;
	form.dueDate.value = todo.dueDate;
	form.priority.value = todo.priority;
	form.project.value = todo.project;
	form.status.value = todo.status;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		todo.title = form.title.value;
		todo.description = form.description.value;
		todo.dueDate = form.dueDate.value;
		todo.priority = form.priority.value;
		todo.project = form.project.value;
		todo.status = form.status.value;
		console.log(todo);
		editTaskDialog.close();
	});
}
export default editTheTask;
