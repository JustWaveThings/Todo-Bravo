import projectList from '../dataStores/projectList';
import { removeProjectFromLocalStorage } from './localStorage';
import refreshProjectList from './refreshProjectList';

function domLoaded(callback) {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => {
			callback();
		});
	} else {
		callback();
	}
}

export function updateNavProjectList() {
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
			if (project !== 'Default') {
				const deleteButton = document.createElement('button');
				deleteButton.textContent = 'X';
				deleteButton.classList.add('delete-project-button');
				deleteButton.style.borderRadius = '50%';
				deleteButton.style.backgroundColor = 'var(--title-selected)';
				deleteButton.style.padding = '0.2rem';
				listItem.appendChild(deleteButton);
			}
		});
	});
}

export function removeProject() {
	const parentElement = document.querySelector('.nav-project-list');

	parentElement.addEventListener('click', (e) => {
		if (e.target.classList.contains('delete-project-button')) {
			const parentTextContent = e.target.parentNode.textContent
				.trim()
				.replace(e.target.textContent.trim(), '');
			console.log(parentTextContent);
			removeProjectFromLocalStorage(parentTextContent);
			refreshProjectList();
			window.location.reload();
		}
	});
}
