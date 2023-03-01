import todoObjects from '../dataStores/todoObjects';

// just trying to make title update first....

function editTheTask(id) {
	const index = todoObjects.findIndex((todo) => todo.id === id);
	const todo = todoObjects[index];
	console.log(todo);
}

export default editTheTask;
