/* eslint-disable no-debugger */
import projectList from '../dataStores/projectList';

// for the new task dialog

function refreshProjectList() {
	const projectListParent = document.querySelector(
		'select[name=project]'
	);

	while (projectListParent.firstChild) {
		projectListParent.removeChild(projectListParent.firstChild);
	}
	projectList.forEach((project) => {
		const option = document.createElement('option');
		option.textContent = project;
		projectListParent.appendChild(option);
	});
}

export default refreshProjectList;
