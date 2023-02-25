import projectList from '../dataStores/projectList';
import todoObjects from '../dataStores/todoObjects';

export function updateLocalStorage() {
	localStorage.setItem('projectList', JSON.stringify(projectList));
	localStorage.setItem('todoObjects', JSON.stringify(todoObjects));
}

export function getDataFromLocalStorage() {
	const projectListGet = JSON.parse(
		localStorage.getItem('projectList')
	);
	const todoObjectsGet = JSON.parse(
		localStorage.getItem('todoObjects')
	);
	return [projectListGet, todoObjectsGet];
}

export function removeItemFromLocalStorage(item) {
	localStorage.removeItem(item);
	getDataFromLocalStorage();
	console.log(`localStorage item removed: ${item}`);
}

// wire to clearLocalStorageBtn
export function clearLocalStorage() {
	localStorage.clear();
	console.log('localStorage cleared');
}

// run once at page load in index.js
export function checkLocalStorage() {
	if (localStorage.length > 0) {
		console.log(`there is data in localStorage`);
		getDataFromLocalStorage();
	} else {
		console.log('localStorage is empty');
	}
}

export function removeTaskFromLocalStorage(id) {
	const items = JSON.parse(localStorage.getItem('todoObjects')) || [];
	console.log(items);
	const index = items.findIndex((item) => item.id === id);
	console.log(index);
	items.splice(index, 1);
	localStorage.setItem('todoObjects', JSON.stringify(items));
}

export function removeProjectFromLocalStorage(project) {
	// remove from projectList
	const items = JSON.parse(localStorage.getItem('projectList')) || [];
	console.log(items);
	const index = items.findIndex((item) => item === project);
	console.log(index);
	items.splice(index, 1);
	localStorage.setItem('projectList', JSON.stringify(items));

	// Remove the objects that have that project name from todoObjects array.
	const todoItems =
		JSON.parse(localStorage.getItem('todoObjects')) || [];
	console.log(todoItems);

	let todoIndex = 0;
	while (todoIndex !== -1) {
		todoIndex = todoItems.findIndex(
			(item) => item.project === project
		);
		todoItems.splice(todoIndex, 1);
	}
	console.log(todoIndex);
	localStorage.setItem('todoObjects', JSON.stringify(todoItems));
}

// removeProjectFromLocalStorage('test');
