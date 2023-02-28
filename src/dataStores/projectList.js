// need to be in sync with the project list in local storage

const localStorageState = JSON.parse(
	localStorage.getItem('projectList')
);

const projectList = [];

// trying to manage the default project showing up more than once in the project list due to local storage adding to the array

if (!projectList.includes('Default')) {
	projectList.push('Default');
}

if (localStorageState) {
	localStorageState.forEach((project) => {
		const projectExists = projectList.includes(project);
		if (!projectExists) {
			projectList.push(project);
		}
	});
}

export default projectList;
