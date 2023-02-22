document.addEventListener('DOMContentLoaded', () => {
	const listParent = document.querySelectorAll(
		'.nav-project-list'
	)[0];
	return listParent;
});

export default function updateNavProjectList(listParent) {
	projectList.forEach((project) => {
		const listItem = document.createElement('li');
		listItem.className = 'nav-project-item';
		listItem.textContent = project;
		listParent.appendChild(listItem);
	});
}
