import { projectList } from './newProjectDialog';
import { navProjectList } from './pl-nav';

document.addEventListener('DOMContentLoaded', function () {
	const listParent = document.querySelector('.nav-project-list');
	console.log(listParent);
});

export function updateNavProjectList() {
	projectList.forEach((project) => {
		const listItem = document.createElement('li');
		listItem.className = 'nav-project-item';
		listItem.textContent = project;
		listParent.appendChild(listItem);
	});
}
