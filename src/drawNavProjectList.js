import { projectList } from './newProjectDialog';
import { navProjectList } from './pl-nav';

document.addEventListener('DOMContentLoaded', function () {
	const listParent = document.querySelectorAll(
		'.nav-project-list'
	)[0];
	return listParent;
});

export function updateNavProjectList(listParent, projectList) {
	projectList.forEach((project) => {
		const listItem = document.createElement('li');
		listItem.className = 'nav-project-item';
		listItem.textContent = project;
		listParent.appendChild(listItem);
	});
}
