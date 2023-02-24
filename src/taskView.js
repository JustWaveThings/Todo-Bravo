function taskView(
	appendTo,
	elem,
	title = 'default title',
	description = 'default description',
	dueDate = 'default due date',
	priority = 'default priority',
	project = 'default project',
	status = 'default status',
	// eslint-disable-next-line no-unused-vars
	id = 'default id'
) {
	const toAppendTo = document.querySelector(`${appendTo}`);
	const container = document.createElement(elem);
	container.className = 'todo-container';

	const props = {
		title: {
			className: 'todo-title',
			textContent: title,
		},
		description: {
			className: 'todo-description',
			textContent: description,
		},
		dueDate: { className: 'todo-dueDate', textContent: dueDate },
		priority: { className: 'todo-priority', textContent: priority },
		project: { className: 'todo-project', textContent: project },
		status: { className: 'todo-status', textContent: status },
	};

	Object.keys(props).forEach((key) => {
		const elementType = document.createElement(elem);
		elementType.className = props[key].className;
		elementType.textContent = props[key].textContent;
		container.appendChild(elementType);
	});
	console.log(appendTo);
	toAppendTo.appendChild(container);
}

export default taskView;
