export default function createElement(tag, props, ...children) {
	const element = document.createElement(tag);
	Object.keys(props).forEach((key) => (element[key] = props[key]));
	children.forEach((child) => {
		if (typeof child === 'string') {
			child = document.createTextNode(child);
		}
		element.appendChild(child);
	});
	return element;
}

export function createFactory(tag) {
	return function (props, ...children) {
		return createElement(tag, props, ...children);
	};
}
