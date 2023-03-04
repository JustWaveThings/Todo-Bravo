import todoObjects from '../dataStores/todoObjects';
import handleNavPaneClicks, {
	clickedProject,
} from './drawNavProjectList';

// handleNavPaneClicks();

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

const activeTasks = displayFilteredTasks(
	clickedProject || 'All Tasks'
);

export default activeTasks;
