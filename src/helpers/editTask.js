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


		editTodo(id, newValue) {
			if (newValue.title !== undefined) {
				this.setTitle(newValue.title);
			}
			if (newValue.description !== undefined) {
				this.setDescription(newValue.description);
			}
			if (newValue.dueDate !== undefined) {
				this.setDueDate(newValue.dueDate);
			}
			if (newValue.priority !== undefined) {
				this.setPriority(newValue.priority);
			}
			if (newValue.project !== undefined) {
				this.setProject(newValue.project);
			}
			if (newValue.status !== undefined) {
				this.setStatus(newValue.status);
			}
		},