/* 

Psuedo Code -  Local Storage

1. Create a function that will update the local storage with the current state of each of the 3 arrays (projectList, taskList, and todoList)  using JSON.stringify(). Good news is that all the data is already in the correct format.

  Are we looking at a find and replace for local storage, or an entire rewrite of the local storage?

2. Create a function that will retrieve the data from local storage and update the 3 arrays (projectList, taskList, and todoList) with the data from local storage using JSON.parse().

3. Create a function that will clear the local storage.

4 Create a function that will check if there is data in local storage. If there is data in local storage, then call the function that will retrieve the data from local storage and update the 3 arrays (projectList, taskList, and todoList) with the data from local storage using JSON.parse(). If there is no data in local storage, then do nothing. This needs to be called when the page loads.

5. Call the function that will check if there is data in local storage.

6. Deterimine when to call the function that will update the local storage with the current state of each of the 3 arrays (projectList, taskList, and todoList)  using JSON.stringify().

*/

import projectList from '../dataStores/projectList';
import todoObjects from '../todoObjects';

export function updateLocalStorage() {
	localStorage.setItem('projectList', JSON.stringify(projectList));
	localStorage.setItem('taskList', JSON.stringify(todoObjects));
}

// TODO - figure out how to pass just the element to be deleted, not the whole array
export function removeItemFromLocalStorage() {
	localStorage.removeItem('projectList');
	localStorage.removeItem('taskList');
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

// wire to clearLocalStorageBtn
export function clearLocalStorage() {
	localStorage.clear();
}

// run once at page load
export function checkLocalStorage() {
	if (localStorage.length > 0) {
		getDataFromLocalStorage();
	}
}
