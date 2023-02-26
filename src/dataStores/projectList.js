// need to be in sync with the project list in local storage

const localStorageState = JSON.parse(
	localStorage.getItem('projectList')
);

const projectList = ['Default'];

if (localStorageState) {
	localStorageState.forEach((project) => {
		projectList.push(project);
	});
}

export default projectList;
