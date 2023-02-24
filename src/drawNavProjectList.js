import projectList from './projectList';

function domLoaded(callback) {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => {
			callback();
		});
	} else {
		callback();
	}
}

export default function updateNavProjectList() {
	domLoaded(() => {
		const listParent = document.querySelectorAll(
			'.nav-project-list'
		)[0];

		while (listParent.firstChild) {
			listParent.removeChild(listParent.firstChild);
		}

		projectList.forEach((project) => {
			const listItem = document.createElement('li');
			const link = document.createElement('a');
			link.textContent = project;
			link.classList.add('nav-project-item');
			link.href = `#${project}`;
			listParent.appendChild(listItem);
			listItem.appendChild(link);
		});
	});
}

export function deleteNavProjectItem() {
	// TODO - delete the project from the nav list
}
