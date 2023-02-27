import todoObjects from '../dataStores/todoObjects';
import redrawTodoList from './redrawTaskList';
import { removeTaskFromLocalStorage } from './localStorage';

function removeTask(id) {
	const index = todoObjects.findIndex((todo) => todo.id === id);
	todoObjects.splice(index, 1);
	removeTaskFromLocalStorage(id);
	redrawTodoList();
}

export default removeTask;
