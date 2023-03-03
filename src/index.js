/* eslint-disable no-console */
import './style.css';
import pageContainer from './view/pl-pageContainer';
import header from './view/pl-header';
import {
	footerTag,
	footer,
	clearLocalStorageBtn,
	clearBtnIcon,
} from './view/pl-footer';
import { main } from './view/pl-main';
import mainContainer from './view/pl-mainContainer';
import {
	updateNavProjectList,
	removeProject,
} from './helpers/drawNavProjectList';
import {
	nav,
	navTitle,
	addProjectButton,
	addProjectButtonImg,
	navProjectList,
	navProjectItem,
	addTaskButton,
	addTaskButtonImg,
} from './view/pl-nav';

// eslint-disable-next-line no-unused-vars
import displayFilteredTasks from './helpers/filterTasks';

import {
	headerCont,
	headerIcon,
	headerTag,
} from './view/pl-header-cont';
import refreshProjectList from './helpers/refreshProjectList';
import redrawTodoList from './helpers/redrawTaskList';
import { checkLocalStorage } from './helpers/localStorage';

const body = document.querySelector('body');

body.appendChild(pageContainer);
pageContainer.appendChild(header);
header.appendChild(headerIcon);
header.appendChild(headerCont);
header.appendChild(headerTag);

pageContainer.appendChild(mainContainer);

mainContainer.appendChild(nav);

nav.appendChild(navTitle);
nav.appendChild(addProjectButton);
addProjectButton.appendChild(addProjectButtonImg);
nav.appendChild(addTaskButton);
addTaskButton.appendChild(addTaskButtonImg);

navTitle.appendChild(navProjectList);
navProjectList.appendChild(navProjectItem);

mainContainer.appendChild(main);

pageContainer.appendChild(footer);
footer.appendChild(footerTag);
footer.appendChild(clearLocalStorageBtn);
clearLocalStorageBtn.appendChild(clearBtnIcon);

checkLocalStorage();

updateNavProjectList();

refreshProjectList();

redrawTodoList();

removeProject();
