import todoObjects from '../dataStores/todoObjects';

function filterTasks(project) {
	const filteredTasks = todoObjects.filter(
		(todo) => todo.project === project
	);
	if (project === 'All Tasks') {
		return todoObjects;
	}

	return filteredTasks;
}

function displayFilteredTasks(project = 'All Tasks') {
	const filteredTasks = filterTasks(project);
	console.log(`filteredTasks: ${JSON.stringify(filteredTasks)}`);
	return filteredTasks;
}

export default displayFilteredTasks;
