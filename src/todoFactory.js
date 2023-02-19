/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
function createTodoObject(
	title,
	description,
	dueDate,
	priority,
	project,
	status
) {
	const todoObject = {
		title: title || 'default title',
		description: description || 'default description',
		dueDate: dueDate || 'default due date',
		priority: priority || 'default priority',
		project: project || 'default project',
		status: status || 'default status',
		// eslint-disable-next-line no-undef
		id: uuidv4(),

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

		setTitle(title) {
			this.title = title;
		},

		setDescription(description) {
			this.description = description;
		},

		setDueDate(dueDate) {
			this.dueDate = dueDate;
		},

		setPriority(priority) {
			this.priority = priority;
		},

		setProject(project) {
			this.project = project;
		},

		setStatus(status) {
			this.status = status;
		},
	};

	return todoObject;
}
