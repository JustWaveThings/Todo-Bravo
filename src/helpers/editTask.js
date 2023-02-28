import todoObjects from '../dataStores/todoObjects';
import editTaskDialog from '../dialogs/editTaskDialog';

// just trying to make title update first....

function editTheTask(id) {
	const index = todoObjects.findIndex((todo) => todo.id === id);

	const todo = todoObjects[index];

	editTaskDialog.showModal();

	const form = document.querySelector('.edit-todo-form');

	// checking to see if todo is an object with the methods on it.  and it does now they do..
	console.log(todo);

	// this gets the title from the actual todo
	form.title.value = todo.getTitle();

	// testing that - it works.

	console.log(form.title.value);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		todo.setTitle(form.title.value);
		console.log({ todoObjects });
		editTaskDialog.close();
	});
}

export default editTheTask;
