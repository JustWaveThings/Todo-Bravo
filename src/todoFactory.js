import { v4 as uuidv4 } from 'uuid';

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
	};

	return todoObject;
}

export default createTodoObject;
