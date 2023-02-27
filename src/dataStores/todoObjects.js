const localStorageState = JSON.parse(
	localStorage.getItem('todoObjects')
);

const todoObjects = [];
console.log(todoObjects.length);

if (localStorageState) {
	localStorageState.forEach((todo) => {
		todoObjects.push(todo);
	});
}
export default todoObjects;
