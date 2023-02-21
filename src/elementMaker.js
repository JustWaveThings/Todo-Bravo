export function createElement(elem, textCont, attributes) {
	const element = document.createElement(elem);
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
	element.textContent = textCont;
	return element;
}
