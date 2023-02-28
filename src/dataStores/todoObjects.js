const localStorageState = JSON.parse(
	localStorage.getItem('todoObjects')
);

const todoObjects = [];

if (localStorageState) {
	localStorageState.forEach((todo) => {
		Object.assign(todo, {
			getTitle() {
				return this.title;
			},

			getDescription() {
				return this.description;
			},

			getDueDate() {
				return this.dueDate;
			},

			getPriority() {
				return this.priority;
			},

			getProject() {
				return this.project;
			},

			getStatus() {
				return this.status;
			},

			getId() {
				return this.id;
			},

			setTitle(title1) {
				this.title = title1;
			},

			setDescription(description1) {
				this.description = description1;
			},

			setDueDate(dueDate1) {
				this.dueDate = dueDate1;
			},

			setPriority(priority1) {
				this.priority = priority1;
			},

			setProject(project1) {
				this.project = project1;
			},

			setStatus(status1) {
				this.status = status1;
			},
		});

		todoObjects.push(todo);
	});
}
export default todoObjects;
