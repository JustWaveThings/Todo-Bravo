/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export default function createElement(tag, attributes, ...children) {
	const element = document.createElement(tag);
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
	children.forEach((child) => {
		if (typeof child === 'string') {
			element.appendChild(document.createTextNode(child));
		}
		element.appendChild(child);
	});
	return element;
}
