const localStorageState = JSON.parse(
	localStorage.getItem('todoObjects')
);

const todoObjects = [];

if (localStorageState) {
	localStorageState.forEach((todo) => {
		todoObjects.push(todo);
	});
}
export default todoObjects;
