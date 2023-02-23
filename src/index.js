/* eslint-disable no-console */
import './style.css';
import pageContainer from './pl-pageContainer';
import header from './pl-header';
import footer from './pl-footer';
import main from './pl-main';
import mainContainer from './pl-mainContainer';
import updateNavProjectList from './drawNavProjectList';
import {
	nav,
	navTitle,
	addProjectButton,
	addProjectButtonImg,
	navProjectList,
	navProjectItem,
} from './pl-nav';

import { headerCont, headerIcon, headerTag } from './pl-header-cont';

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

navTitle.appendChild(navProjectList);
navProjectList.appendChild(navProjectItem);

mainContainer.appendChild(main);

pageContainer.appendChild(footer);

updateNavProjectList();
