import todoObjects from '../dataStores/todoObjects';

export function filterTasks(project) {
	const filteredTasks = todoObjects.filter(
		(todo) => todo.project === project
	);
	if (project === 'All Tasks') {
		return todoObjects;
	}
	console.log(filteredTasks.length);
	return filteredTasks;
}

function displayFilteredTasks(project = 'All Tasks') {
	const filteredTasks = filterTasks(project);
	return filteredTasks;
}

export const activeFilter = displayFilteredTasks();

export default displayFilteredTasks;
