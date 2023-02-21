/* eslint-disable no-console */
import './style.css';
import { pageContainer } from './pl-pageContainer';
import { header } from './pl-header';
import { footer } from './pl-footer';
import { nav } from './pl-nav';
import { main } from './pl-main';
import { mainContainer } from './pl-mainContainer';
import { headerCont } from './pl-header-cont';

const body = document.querySelector('body');

body.appendChild(pageContainer);
pageContainer.appendChild(header);
header.appendChild(headerCont);
pageContainer.appendChild(mainContainer);
mainContainer.appendChild(nav);
mainContainer.appendChild(main);
pageContainer.appendChild(footer);
