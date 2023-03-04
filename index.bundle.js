"use strict";
(self["webpackChunktodo_bravo"] = self["webpackChunktodo_bravo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Bold.ttf */ "./src/fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.ttf */ "./src/fonts/Pacifico-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t/* from coolors */\n\t--lapis-lazuli: hsla(210, 50%, 40%, 1);\n\t--carolina-blue: hsla(201, 51%, 69%, 1);\n\t--charcoal: hsla(203, 30%, 26%, 1);\n\t--light-green: hsla(112, 60%, 74%, 1);\n\t--nyanza: hsla(124, 64%, 91%, 1);\n\n\t/* fonts  */\n\t--title-font: 'roboto-bold', cursive;\n\t--style-font: 'pacifico', cursive;\n\n\t/* color assignments */\n\t--lightest-background: var(--nyanza);\n\t--light-background: var(--carolina-blue);\n\t--title-selected: var(--light-green);\n\t--dark-background: var(--charcoal);\n\t--alt-background: var(--lapis-lazuli);\n\n\t/* opacity  */\n\t--opacity: 0.7;\n\n\t/* shadows */\n\t--standard-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n\t--title-shadow-standard: 2px 2px 2px rgba(0, 0, 0, 0.3);\n\t--title-shadow-emphasis: 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n\tfont-family: 'roboto-bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tformat: ('ttf');\n}\n@font-face {\n\tfont-family: 'pacifico';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tformat: ('ttf');\n}\n\nbody {\n\tfont-family: helvetica;\n\tcolor: white;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100svh;\n}\n\n.main,\n.footer,\n.nav,\n.pageContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.pageContainer {\n\twidth: 100%;\n\theight: 100dvh;\n}\n/* container */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tbackground-color: var(--alt-background);\n\tgap: 2rem;\n}\n/* app name */\nheader > h1 {\n\tcolor: var(--title-selected);\n\tfont-family: var(--title-font);\n\tfont-size: 3rem;\n\topacity: var(--opacity);\n\ttext-shadow: var(--title-shadow-standard);\n}\n\nheader > img {\n\tdisplay: flex;\n\theight: 55px;\n\tmargin-left: 2rem;\n}\n/* quote */\nh2.header {\n\tdisplay: flex;\n\topacity: 0.9;\n\tfont-family: var(--style-font);\n\ttext-shadow: var(--title-shadow-emphasis);\n}\n\n.footer {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 5%;\n\tbackground-color: var(--alt-background);\n\talign-self: flex-end;\n\tposition: relative;\n}\n\n.footer-tag {\n\tfont-size: 0.7rem;\n\tcolor: var(--title-selected);\n\topacity: var(--opacity);\n}\n\n.clear-local-storage {\n\tappearance: none;\n\tborder: none;\n\tbackground-color: transparent;\n}\n\n.clear-local-storage,\n.clear-local-storage > img {\n\theight: 30px;\n\tposition: absolute;\n\tright: 1%;\n\tbottom: 6%;\n}\n\n.clear-local-storage > img:hover,\n.clear-local-storage > img:focus {\n\tbackground-color: red;\n}\n\n.clear-local-storage:hover::before {\n\tcontent: 'This will clear ALL app data in local storage. No recovery possible.';\n\tdisplay: inline-block;\n\tbackground-color: black;\n\tcolor: var(--light-green);\n\tpadding: 0.5em;\n\tborder-radius: 0.25em;\n\tfont-size: 1rem;\n\twhite-space: break-spaces;\n\tz-index: 1;\n\ttransform: translatey(-125%);\n\tbox-shadow: none !important;\n\topacity: var(--opacity);\n}\n/* holds nav and main */\n.mainContainer {\n\tdisplay: flex;\n\twidth: 100svw;\n\theight: 90%;\n}\n/* container */\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\tbackground-color: var(--dark-background);\n}\n\n/* this is the project label at the top of the page */\n.main-header {\n\tmargin: 1.5rem;\n\tpadding: 1rem 2rem 1rem 2rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n/* task container 'container' */\ndiv.mainContainer > section > section {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 95%;\n\tmargin-left: 1.5rem;\n}\n\n/* column labels  */\nbody > div > div.mainContainer > section > header:nth-child(2) {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 1rem;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n\nheader > th {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n}\n\nheader > th:first-child {\n\tflex-basis: 10%;\n}\n\nheader > th:nth-child(2) {\n\tflex-basis: 40%;\n\tflex-grow: 1;\n}\n\nheader > th:nth-child(3) {\n\tmargin-left: auto;\n}\n\nheader > th:last-child {\n\tmargin-right: 12%;\n}\n\nsection.todo-container-holder {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: space-between;\n\tmargin: 1rem;\n}\narticle.todo-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-wrap: nowrap;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n\topacity: var(--opacity);\n\tbackground-color: hsla(112, 60%, 74%, 0.1);\n\tborder-radius: 0.5rem;\n}\n\narticle.todo-container:hover,\narticle.todo-container:focus {\n\tbackground-color: hsla(112, 60%, 74%, 0.2);\n\ttransition: background-color 350ms ease-in-out;\n\topacity: 1;\n}\n\n/* flexbox the display of the todo-containers */\n\n.todo-title {\n\ttext-overflow: ellipsis;\n\tflex-basis: 10%;\n}\n\n.todo-description {\n\tflex-basis: 40%;\n\ttext-overflow: ellipsis;\n}\n\n.todo-dueDate {\n\tflex-basis: 6%;\n}\n\n.todo-priority {\n\tflex-basis: 4%;\n}\n\n.todo-status {\n\tflex-basis: 6%;\n}\n\n.todo-edit {\n\tflex-basis: 4;\n}\n\n.todo-remove {\n\tflex-basis: 4%;\n}\n\n/* hides project from display in the table */\n.todo-project {\n\tdisplay: none;\n}\n\n/* nav section  */\n\n.nav {\n\twidth: 20%;\n\theight: 100%;\n\tbackground-color: var(--lightest-background);\n\tcolor: black;\n}\n\ntitle.nav-title {\n\tgap: 1rem;\n}\n\n.nav > title {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: var(--title-font);\n\tfont-size: 1.5rem;\n\tmargin: 0.75rem;\n\topacity: 0.7;\n}\n\ndiv.nav > button {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tborder: none;\n\tmargin: 1.3rem;\n\topacity: var(--opacity);\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: var(--title-font);\n\tbox-shadow: var(--standard-shadow);\n}\n\nbody > div > div.mainContainer > div.nav > title > ul {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\tpadding: 0.5rem;\n\tmargin: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\tbox-shadow: var(--title-shadow-standard);\n}\n\na.nav-project-item {\n\ttext-decoration: none;\n\tcolor: black;\n\tflex-grow: 1;\n}\n\nul.nav-project-list > li {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n}\n\n.todo-edit,\n.todo-remove {\n\tmargin: 0.25rem;\n}\n\n.todo-edit,\n.todo-remove,\nul.nav-project-list > li :hover,\nul.nav-project-list > li :focus {\n\tbackground-color: var(--title-selected);\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\ttransition: background-color 350ms ease-in-out;\n}\n\nimg,\nbutton,\nul,\ntitle,\nheader,\ni {\n\tdisplay: flex;\n\tborder: none;\n}\n\n/* dialogs  */\ndialog {\n\talign-items: center;\n\theight: 20vh;\n\twidth: 20vw;\n\tborder: none;\n\tbackground-color: var(--lightest-background);\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ndialog.taskModal,\ndialog.editTaskModal {\n\theight: 70dvh;\n\twidth: 30rem;\n}\n\ndialog::backdrop {\n\tbackground: hsla(112, 60%, 74%, 0.3);\n\topacity: 0.9;\n}\n\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tjustify-content: space-evenly;\n\theight: 100%;\n}\n\nform > title {\n\tfont-family: var(--title-font);\n\talign-self: center;\n\tfont-size: 1.5rem;\n\topacity: var(--opacity);\n}\n\nform > div > button {\n\tdisplay: flex;\n\tgap: 0.1rem;\n\tpadding: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--alt-background);\n\tcolor: white;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\topacity: var(--opacity);\n\tbox-shadow: var(--standard-shadow);\n}\n\nlabel {\n\tdisplay: flex;\n\twidth: 50%;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\topacity: var(--opacity);\n}\n\ninput,\ntextarea {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.5rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ntextarea {\n\theight: 5rem;\n}\n\nselect {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.8rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\tposition: relative;\n}\n\ninput[type='date'] {\n\ttext-align: left;\n\tposition: relative;\n}\ninput[type='date']::-webkit-calendar-picker-indicator {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 5%;\n\ttransform: translateY(-50%);\n}\n\ninput,\nselect,\ntextarea {\n\ttext-align: left;\n\tline-height: 0.75rem;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tpadding: 0.25rem;\n}\n\nform > .form-div {\n\tdisplay: flex;\n\twidth: 80%;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n}\n\n.cancel-button {\n\tmargin-left: auto;\n}\n\n.submit-button {\n\tmargin-left: 1.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\t/* from coolors */\n\t--lapis-lazuli: hsla(210, 50%, 40%, 1);\n\t--carolina-blue: hsla(201, 51%, 69%, 1);\n\t--charcoal: hsla(203, 30%, 26%, 1);\n\t--light-green: hsla(112, 60%, 74%, 1);\n\t--nyanza: hsla(124, 64%, 91%, 1);\n\n\t/* fonts  */\n\t--title-font: 'roboto-bold', cursive;\n\t--style-font: 'pacifico', cursive;\n\n\t/* color assignments */\n\t--lightest-background: var(--nyanza);\n\t--light-background: var(--carolina-blue);\n\t--title-selected: var(--light-green);\n\t--dark-background: var(--charcoal);\n\t--alt-background: var(--lapis-lazuli);\n\n\t/* opacity  */\n\t--opacity: 0.7;\n\n\t/* shadows */\n\t--standard-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n\t--title-shadow-standard: 2px 2px 2px rgba(0, 0, 0, 0.3);\n\t--title-shadow-emphasis: 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n\tfont-family: 'roboto-bold';\n\tsrc: url(./fonts/Roboto-Bold.ttf);\n\tformat: ('ttf');\n}\n@font-face {\n\tfont-family: 'pacifico';\n\tsrc: url(./fonts/Pacifico-Regular.ttf);\n\tformat: ('ttf');\n}\n\nbody {\n\tfont-family: helvetica;\n\tcolor: white;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100svh;\n}\n\n.main,\n.footer,\n.nav,\n.pageContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.pageContainer {\n\twidth: 100%;\n\theight: 100dvh;\n}\n/* container */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tbackground-color: var(--alt-background);\n\tgap: 2rem;\n}\n/* app name */\nheader > h1 {\n\tcolor: var(--title-selected);\n\tfont-family: var(--title-font);\n\tfont-size: 3rem;\n\topacity: var(--opacity);\n\ttext-shadow: var(--title-shadow-standard);\n}\n\nheader > img {\n\tdisplay: flex;\n\theight: 55px;\n\tmargin-left: 2rem;\n}\n/* quote */\nh2.header {\n\tdisplay: flex;\n\topacity: 0.9;\n\tfont-family: var(--style-font);\n\ttext-shadow: var(--title-shadow-emphasis);\n}\n\n.footer {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 5%;\n\tbackground-color: var(--alt-background);\n\talign-self: flex-end;\n\tposition: relative;\n}\n\n.footer-tag {\n\tfont-size: 0.7rem;\n\tcolor: var(--title-selected);\n\topacity: var(--opacity);\n}\n\n.clear-local-storage {\n\tappearance: none;\n\tborder: none;\n\tbackground-color: transparent;\n}\n\n.clear-local-storage,\n.clear-local-storage > img {\n\theight: 30px;\n\tposition: absolute;\n\tright: 1%;\n\tbottom: 6%;\n}\n\n.clear-local-storage > img:hover,\n.clear-local-storage > img:focus {\n\tbackground-color: red;\n}\n\n.clear-local-storage:hover::before {\n\tcontent: 'This will clear ALL app data in local storage. No recovery possible.';\n\tdisplay: inline-block;\n\tbackground-color: black;\n\tcolor: var(--light-green);\n\tpadding: 0.5em;\n\tborder-radius: 0.25em;\n\tfont-size: 1rem;\n\twhite-space: break-spaces;\n\tz-index: 1;\n\ttransform: translatey(-125%);\n\tbox-shadow: none !important;\n\topacity: var(--opacity);\n}\n/* holds nav and main */\n.mainContainer {\n\tdisplay: flex;\n\twidth: 100svw;\n\theight: 90%;\n}\n/* container */\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\tbackground-color: var(--dark-background);\n}\n\n/* this is the project label at the top of the page */\n.main-header {\n\tmargin: 1.5rem;\n\tpadding: 1rem 2rem 1rem 2rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n/* task container 'container' */\ndiv.mainContainer > section > section {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 95%;\n\tmargin-left: 1.5rem;\n}\n\n/* column labels  */\nbody > div > div.mainContainer > section > header:nth-child(2) {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 1rem;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n\nheader > th {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n}\n\nheader > th:first-child {\n\tflex-basis: 10%;\n}\n\nheader > th:nth-child(2) {\n\tflex-basis: 40%;\n\tflex-grow: 1;\n}\n\nheader > th:nth-child(3) {\n\tmargin-left: auto;\n}\n\nheader > th:last-child {\n\tmargin-right: 12%;\n}\n\nsection.todo-container-holder {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: space-between;\n\tmargin: 1rem;\n}\narticle.todo-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-wrap: nowrap;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n\topacity: var(--opacity);\n\tbackground-color: hsla(112, 60%, 74%, 0.1);\n\tborder-radius: 0.5rem;\n}\n\narticle.todo-container:hover,\narticle.todo-container:focus {\n\tbackground-color: hsla(112, 60%, 74%, 0.2);\n\ttransition: background-color 350ms ease-in-out;\n\topacity: 1;\n}\n\n/* flexbox the display of the todo-containers */\n\n.todo-title {\n\ttext-overflow: ellipsis;\n\tflex-basis: 10%;\n}\n\n.todo-description {\n\tflex-basis: 40%;\n\ttext-overflow: ellipsis;\n}\n\n.todo-dueDate {\n\tflex-basis: 6%;\n}\n\n.todo-priority {\n\tflex-basis: 4%;\n}\n\n.todo-status {\n\tflex-basis: 6%;\n}\n\n.todo-edit {\n\tflex-basis: 4;\n}\n\n.todo-remove {\n\tflex-basis: 4%;\n}\n\n/* hides project from display in the table */\n.todo-project {\n\tdisplay: none;\n}\n\n/* nav section  */\n\n.nav {\n\twidth: 20%;\n\theight: 100%;\n\tbackground-color: var(--lightest-background);\n\tcolor: black;\n}\n\ntitle.nav-title {\n\tgap: 1rem;\n}\n\n.nav > title {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: var(--title-font);\n\tfont-size: 1.5rem;\n\tmargin: 0.75rem;\n\topacity: 0.7;\n}\n\ndiv.nav > button {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tborder: none;\n\tmargin: 1.3rem;\n\topacity: var(--opacity);\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: var(--title-font);\n\tbox-shadow: var(--standard-shadow);\n}\n\nbody > div > div.mainContainer > div.nav > title > ul {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\tpadding: 0.5rem;\n\tmargin: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\tbox-shadow: var(--title-shadow-standard);\n}\n\na.nav-project-item {\n\ttext-decoration: none;\n\tcolor: black;\n\tflex-grow: 1;\n}\n\nul.nav-project-list > li {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n}\n\n.todo-edit,\n.todo-remove {\n\tmargin: 0.25rem;\n}\n\n.todo-edit,\n.todo-remove,\nul.nav-project-list > li :hover,\nul.nav-project-list > li :focus {\n\tbackground-color: var(--title-selected);\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\ttransition: background-color 350ms ease-in-out;\n}\n\nimg,\nbutton,\nul,\ntitle,\nheader,\ni {\n\tdisplay: flex;\n\tborder: none;\n}\n\n/* dialogs  */\ndialog {\n\talign-items: center;\n\theight: 20vh;\n\twidth: 20vw;\n\tborder: none;\n\tbackground-color: var(--lightest-background);\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ndialog.taskModal,\ndialog.editTaskModal {\n\theight: 70dvh;\n\twidth: 30rem;\n}\n\ndialog::backdrop {\n\tbackground: hsla(112, 60%, 74%, 0.3);\n\topacity: 0.9;\n}\n\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tjustify-content: space-evenly;\n\theight: 100%;\n}\n\nform > title {\n\tfont-family: var(--title-font);\n\talign-self: center;\n\tfont-size: 1.5rem;\n\topacity: var(--opacity);\n}\n\nform > div > button {\n\tdisplay: flex;\n\tgap: 0.1rem;\n\tpadding: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--alt-background);\n\tcolor: white;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\topacity: var(--opacity);\n\tbox-shadow: var(--standard-shadow);\n}\n\nlabel {\n\tdisplay: flex;\n\twidth: 50%;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\topacity: var(--opacity);\n}\n\ninput,\ntextarea {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.5rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ntextarea {\n\theight: 5rem;\n}\n\nselect {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.8rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\tposition: relative;\n}\n\ninput[type='date'] {\n\ttext-align: left;\n\tposition: relative;\n}\ninput[type='date']::-webkit-calendar-picker-indicator {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 5%;\n\ttransform: translateY(-50%);\n}\n\ninput,\nselect,\ntextarea {\n\ttext-align: left;\n\tline-height: 0.75rem;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tpadding: 0.25rem;\n}\n\nform > .form-div {\n\tdisplay: flex;\n\twidth: 80%;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n}\n\n.cancel-button {\n\tmargin-left: auto;\n}\n\n.submit-button {\n\tmargin-left: 1.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/dataStores/priorityList.js":
/*!****************************************!*\
  !*** ./src/dataStores/priorityList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const priorityList = ['None', 'Low', 'Medium', 'High', 'Urgent'];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priorityList);


/***/ }),

/***/ "./src/dataStores/projectList.js":
/*!***************************************!*\
  !*** ./src/dataStores/projectList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// need to be in sync with the project list in local storage

const localStorageState = JSON.parse(
	localStorage.getItem('projectList')
);

const projectList = [];

// trying to manage the default project showing up more than once in the project list due to local storage adding to the array
if (!projectList.includes('All Tasks')) {
	projectList.push('All Tasks');
}

if (!projectList.includes('Default')) {
	projectList.push('Default');
}

if (localStorageState) {
	localStorageState.forEach((project) => {
		const projectExists = projectList.includes(project);
		if (!projectExists) {
			projectList.push(project);
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);


/***/ }),

/***/ "./src/dataStores/statusList.js":
/*!**************************************!*\
  !*** ./src/dataStores/statusList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const statusList = [
	'Not Started',
	'In Progress',
	'Completed',
	'On Hold',
	'Cancelled',
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusList);


/***/ }),

/***/ "./src/dataStores/todoObjects.js":
/*!***************************************!*\
  !*** ./src/dataStores/todoObjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoObjects);


/***/ }),

/***/ "./src/dialogs/editTaskDialog.js":
/*!***************************************!*\
  !*** ./src/dialogs/editTaskDialog.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "editTaskHandler": () => (/* binding */ editTaskHandler),
/* harmony export */   "populateFormWithTodoData": () => (/* binding */ populateFormWithTodoData)
/* harmony export */ });
/* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/projectList */ "./src/dataStores/projectList.js");
/* harmony import */ var _dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataStores/statusList */ "./src/dataStores/statusList.js");
/* harmony import */ var _dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataStores/priorityList */ "./src/dataStores/priorityList.js");
/* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js");
/* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/localStorage */ "./src/helpers/localStorage.js");







// this is the form that will be displayed in the modal, to create a new task

const container = document.querySelector('body');

const editTaskDialog = document.createElement('dialog');
editTaskDialog.className = 'editTaskModal';

container.appendChild(editTaskDialog);

const parent = document.querySelector('.editTaskModal');

const form = document.createElement('form');
form.className = 'edit-todo-form';
form.method = 'dialog';
parent.appendChild(form);

const formTitle = document.createElement('title');
formTitle.textContent = 'Edit Task';
form.appendChild(formTitle);

const titleDiv = document.createElement('div');
titleDiv.className = 'form-div';
form.appendChild(titleDiv);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
titleDiv.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleDiv.appendChild(titleInput);

const descriptionDiv = document.createElement('div');
descriptionDiv.className = 'form-div';
form.appendChild(descriptionDiv);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
descriptionDiv.appendChild(descriptionLabel);

const descriptionInput = document.createElement('textarea');
descriptionInput.name = 'description';
descriptionDiv.appendChild(descriptionInput);

const dueDateDiv = document.createElement('div');
dueDateDiv.className = 'form-div';
form.appendChild(dueDateDiv);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
dueDateDiv.appendChild(dueDateLabel);

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.name = 'dueDate';
dueDateDiv.appendChild(dueDateInput);

const priorityDiv = document.createElement('div');
priorityDiv.className = 'form-div';
form.appendChild(priorityDiv);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
priorityDiv.appendChild(priorityLabel);

const priorityInput = document.createElement('select');
priorityInput.name = 'priority';
priorityInput.textContent = 'priority';
_dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((priority) => {
	const option = document.createElement('option');
	option.textContent = priority;
	priorityInput.appendChild(option);
});
priorityDiv.appendChild(priorityInput);

// project dropdown menu

const projectDiv = document.createElement('div');
projectDiv.className = 'form-div';
form.appendChild(projectDiv);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
projectDiv.appendChild(projectLabel);

const projectInput = document.createElement('select');
projectInput.name = 'project';

_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((project) => {
	const option = document.createElement('option');
	option.textContent = project;
	projectInput.appendChild(option);
});
projectDiv.appendChild(projectInput);

// end project dropdown menu

const statusDiv = document.createElement('div');
statusDiv.className = 'form-div';
form.appendChild(statusDiv);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
statusDiv.appendChild(statusLabel);

const statusInput = document.createElement('select');
statusInput.textContent = 'Status';
statusInput.name = 'status';
_dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((status) => {
	const option = document.createElement('option');
	option.textContent = status;
	statusInput.appendChild(option);
});
statusDiv.appendChild(statusInput);

const buttonDiv = document.createElement('div');
buttonDiv.className = 'form-div';
form.appendChild(buttonDiv);

// edit / cancel buttons with event listeners

const editTask = document.createElement('button');
editTask.textContent = 'Update';
editTask.className = 'submit-button';
editTask.type = 'button';
editTask.name = 'edit';
buttonDiv.appendChild(editTask);

function editTaskHandler(id) {
	const handler = () => {
		console.log(`editTaskHandler -  ${id}`);
		const currTodo = _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_3__["default"].find((todo) => todo.id === id);
		currTodo.setTitle(form.elements.title.value);
		currTodo.setDescription(form.elements.description.value);
		currTodo.setDueDate(form.elements.dueDate.value);
		currTodo.setPriority(form.elements.priority.value);
		currTodo.setProject(form.elements.project.value);
		currTodo.setStatus(form.elements.status.value);
		(0,_helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_4__["default"])();
		(0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
		form.reset();
		editTaskDialog.close();
	};

	editTask.addEventListener('click', handler, { once: true });

	const closeDialogEventHandler = () => {
		editTask.removeEventListener('click', handler);
		editTaskDialog.removeEventListener(
			'close',
			closeDialogEventHandler
		);
	};

	editTaskDialog.addEventListener('close', closeDialogEventHandler);
}

function populateFormWithTodoData(id) {
	console.log(`populateForm -  ${id}`);
	const currTodo = _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_3__["default"].find((todo) => todo.getId() === id);
	form.elements.title.value = currTodo.getTitle();
	form.elements.description.value = currTodo.getDescription();
	form.elements.dueDate.value = currTodo.getDueDate();
	form.elements.priority.value = currTodo.getPriority();
	form.elements.project.value = currTodo.getProject();
	form.elements.status.value = currTodo.getStatus();
}

const cancelEdit = document.createElement('button');
cancelEdit.textContent = 'Cancel';
cancelEdit.className = 'cancel-button';
cancelEdit.type = 'cancel';
cancelEdit.name = 'cancel';
buttonDiv.appendChild(cancelEdit);

cancelEdit.addEventListener('click', () => {
	editTaskDialog.close();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTaskDialog);


/***/ }),

/***/ "./src/dialogs/newProjectDialog.js":
/*!*****************************************!*\
  !*** ./src/dialogs/newProjectDialog.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/projectList */ "./src/dataStores/projectList.js");
/* harmony import */ var _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/drawNavProjectList */ "./src/helpers/drawNavProjectList.js");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/localStorage */ "./src/helpers/localStorage.js");




// this is the form that will be displayed in the modal, to create a new project

const container = document.querySelector('body');

const projectDialog = document.createElement('dialog');
projectDialog.className = 'modal';

container.appendChild(projectDialog);

const parent = document.querySelector('.modal');

const form = document.createElement('form');
form.className = 'todo-form';
form.method = 'dialog';
parent.appendChild(form);

const title = document.createElement('title');
title.textContent = 'New Project';
form.appendChild(title);

const titleDiv = document.createElement('div');
titleDiv.className = 'form-div';
form.appendChild(titleDiv);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
titleDiv.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleDiv.appendChild(titleInput);

const buttonDiv = document.createElement('div');
buttonDiv.className = 'form-div';
form.appendChild(buttonDiv);

const submitNewProject = document.createElement('button');
submitNewProject.textContent = 'Submit';
submitNewProject.className = 'submit-button';
submitNewProject.type = 'submit';
submitNewProject.name = 'submit';
buttonDiv.appendChild(submitNewProject);

const cancelNewProject = document.createElement('button');
cancelNewProject.textContent = 'Cancel';
cancelNewProject.className = 'cancel-button';
cancelNewProject.type = 'cancel';
cancelNewProject.name = 'cancel';
buttonDiv.appendChild(cancelNewProject);

submitNewProject.addEventListener('click', (e) => {
	e.preventDefault();
	_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].push(titleInput.value);
	(0,_helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_1__.updateNavProjectList)();
	form.reset();
	projectDialog.close();
	(0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
});

cancelNewProject.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
	projectDialog.close();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectDialog);


/***/ }),

/***/ "./src/dialogs/newTaskDialog.js":
/*!**************************************!*\
  !*** ./src/dialogs/newTaskDialog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/projectList */ "./src/dataStores/projectList.js");
/* harmony import */ var _dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataStores/statusList */ "./src/dataStores/statusList.js");
/* harmony import */ var _dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataStores/priorityList */ "./src/dataStores/priorityList.js");
/* harmony import */ var _helpers_todoFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todoFactory */ "./src/helpers/todoFactory.js");
/* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js");
/* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/localStorage */ "./src/helpers/localStorage.js");







// this is the form that will be displayed in the modal, to create a new task

const container = document.querySelector('body');

const taskDialog = document.createElement('dialog');
taskDialog.className = 'taskModal';

container.appendChild(taskDialog);

const parent = document.querySelector('.taskModal');

const form = document.createElement('form');
form.className = 'todo-form';
form.method = 'dialog';
parent.appendChild(form);

const title = document.createElement('title');
title.textContent = 'New Task';
form.appendChild(title);

const titleDiv = document.createElement('div');
titleDiv.className = 'form-div';
form.appendChild(titleDiv);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
titleDiv.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleDiv.appendChild(titleInput);

const descriptionDiv = document.createElement('div');
descriptionDiv.className = 'form-div';
form.appendChild(descriptionDiv);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
descriptionDiv.appendChild(descriptionLabel);

const descriptionInput = document.createElement('textarea');
descriptionInput.name = 'description';
descriptionDiv.appendChild(descriptionInput);

const dueDateDiv = document.createElement('div');
dueDateDiv.className = 'form-div';
form.appendChild(dueDateDiv);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
dueDateDiv.appendChild(dueDateLabel);

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.name = 'dueDate';
dueDateDiv.appendChild(dueDateInput);

const priorityDiv = document.createElement('div');
priorityDiv.className = 'form-div';
form.appendChild(priorityDiv);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
priorityDiv.appendChild(priorityLabel);

const priorityInput = document.createElement('select');
priorityInput.textContent = 'priority';
_dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((priority) => {
	const option = document.createElement('option');
	option.textContent = priority;
	priorityInput.appendChild(option);
});
priorityDiv.appendChild(priorityInput);

// project dropdown menu

const projectDiv = document.createElement('div');
projectDiv.className = 'form-div';
form.appendChild(projectDiv);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
projectDiv.appendChild(projectLabel);

const projectInput = document.createElement('select');
projectInput.name = 'project';
_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((project) => {
	const option = document.createElement('option');
	option.textContent = project;
	projectInput.appendChild(option);
});
projectDiv.appendChild(projectInput);

// end project dropdown menu

const statusDiv = document.createElement('div');
statusDiv.className = 'form-div';
form.appendChild(statusDiv);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
statusDiv.appendChild(statusLabel);

const statusInput = document.createElement('select');
statusInput.textContent = 'Status';
_dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((status) => {
	const option = document.createElement('option');
	option.textContent = status;
	statusInput.appendChild(option);
});
statusDiv.appendChild(statusInput);

// submit / cancel buttons with event listeners

const buttonDiv = document.createElement('div');
buttonDiv.className = 'form-div';
form.appendChild(buttonDiv);

const submitNewTask = document.createElement('button');
submitNewTask.textContent = 'Submit';
submitNewTask.className = 'submit-button';
submitNewTask.type = 'submit';
submitNewTask.name = 'submit';
buttonDiv.appendChild(submitNewTask);

const cancelNewTask = document.createElement('button');
cancelNewTask.textContent = 'Cancel';
cancelNewTask.className = 'cancel-button';
cancelNewTask.type = 'cancel';
cancelNewTask.name = 'cancel';
buttonDiv.appendChild(cancelNewTask);

submitNewTask.addEventListener('click', (e) => {
	e.preventDefault();
	const newTodo = (0,_helpers_todoFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(
		titleInput.value,
		descriptionInput.value,
		dueDateInput.value,
		priorityInput.value,
		projectInput.value,
		statusInput.value
	);
	_dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_4__["default"].push(newTodo);
	(0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__.updateLocalStorage)();
	console.log({ todoObjects: _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_4__["default"] });

	form.reset();
	taskDialog.close();
	(0,_helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

cancelNewTask.addEventListener('click', (e) => {
	e.preventDefault();
	form.reset();
	taskDialog.close();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDialog);


/***/ }),

/***/ "./src/helpers/drawNavProjectList.js":
/*!*******************************************!*\
  !*** ./src/helpers/drawNavProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateNavProjectList": () => (/* binding */ updateNavProjectList)
/* harmony export */ });
/* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/projectList */ "./src/dataStores/projectList.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/helpers/localStorage.js");
/* harmony import */ var _refreshProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshProjectList */ "./src/helpers/refreshProjectList.js");
/* harmony import */ var _redrawTaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redrawTaskList */ "./src/helpers/redrawTaskList.js");





function domLoaded(callback) {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => {
			callback();
		});
	} else {
		callback();
	}
}

function updateNavProjectList() {
	domLoaded(() => {
		const listParent = document.querySelectorAll(
			'.nav-project-list'
		)[0];

		while (listParent.firstChild) {
			listParent.removeChild(listParent.firstChild);
		}

		_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((project) => {
			const listItem = document.createElement('li');
			const link = document.createElement('a');
			link.textContent = project;
			link.classList.add('nav-project-item');
			listParent.appendChild(listItem);
			listItem.appendChild(link);
			if (project !== 'All Tasks' && project !== 'Default') {
				const deleteButton = document.createElement('button');
				deleteButton.textContent = 'X';
				deleteButton.classList.add('delete-project-button');
				deleteButton.style.borderRadius = '50%';
				deleteButton.style.backgroundColor = 'var(--title-selected)';
				deleteButton.style.padding = '0.2rem';

				listItem.appendChild(deleteButton);
			}
		});
	});
}

function handleNavPaneClicks() {
	domLoaded(() => document.querySelectorAll('.nav-project-list')[0]);
	const parentElement = document.querySelector('.nav-project-list');
	(0,_refreshProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])();
	parentElement.addEventListener(
		'click',
		(e) => {
			e.stopImmediatePropagation();
			const clickedProject = e.target.textContent;
			if (_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].includes(clickedProject)) {
				console.log(`${clickedProject} - project exists`);
				(0,_redrawTaskList__WEBPACK_IMPORTED_MODULE_3__["default"])(clickedProject);
			}
			if (e.target.classList.contains('delete-project-button')) {
				const parentTextContent = e.target.parentNode.textContent
					.trim()
					.replace(e.target.textContent.trim(), '');
				console.log(parentTextContent);
				(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.removeProjectFromLocalStorage)(parentTextContent);
				(0,_refreshProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])();
				window.location.reload();
			}
			return clickedProject;
		},
		{ capture: true }
	);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleNavPaneClicks);


/***/ }),

/***/ "./src/helpers/elementMaker.js":
/*!*************************************!*\
  !*** ./src/helpers/elementMaker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(elem, textCont, attributes) {
	const element = document.createElement(elem);
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
	element.textContent = textCont;
	return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/helpers/filterTasks.js":
/*!************************************!*\
  !*** ./src/helpers/filterTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js");


function filterTasks(project) {
	const filteredTasks = _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__["default"].filter(
		(todo) => todo.project === project
	);
	if (project === 'All Tasks') {
		return _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__["default"];
	}

	return filteredTasks;
}

function displayFilteredTasks(project = 'All Tasks') {
	const filteredTasks = filterTasks(project);
	return filteredTasks;
}

/* const activeTasks = displayFilteredTasks(
	clickedProject || 'All Tasks'
); */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFilteredTasks);


/***/ }),

/***/ "./src/helpers/localStorage.js":
/*!*************************************!*\
  !*** ./src/helpers/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLocalStorage": () => (/* binding */ checkLocalStorage),
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "getDataFromLocalStorage": () => (/* binding */ getDataFromLocalStorage),
/* harmony export */   "removeItemFromLocalStorage": () => (/* binding */ removeItemFromLocalStorage),
/* harmony export */   "removeProjectFromLocalStorage": () => (/* binding */ removeProjectFromLocalStorage),
/* harmony export */   "removeTaskFromLocalStorage": () => (/* binding */ removeTaskFromLocalStorage),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/projectList */ "./src/dataStores/projectList.js");
/* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js");



function updateLocalStorage() {
	localStorage.setItem('projectList', JSON.stringify(_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"]));
	localStorage.setItem('todoObjects', JSON.stringify(_dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

function getDataFromLocalStorage() {
	JSON.parse(localStorage.getItem('projectList'));
	JSON.parse(localStorage.getItem('todoObjects'));
}

function removeItemFromLocalStorage(item) {
	localStorage.removeItem(item);
	getDataFromLocalStorage();
	console.log(`localStorage item removed: ${item}`);
}

// wire to clearLocalStorageBtn
function clearLocalStorage() {
	localStorage.clear();
	console.log('localStorage cleared');
}

// run once at page load in index.js
function checkLocalStorage() {
	if (localStorage.length > 0) {
		console.log(`there is data in localStorage`);
		getDataFromLocalStorage();
	} else {
		console.log('localStorage is empty');
	}
}

function removeTaskFromLocalStorage(id) {
	const items = JSON.parse(localStorage.getItem('todoObjects')) || [];
	console.log(items);
	const index = items.findIndex((item) => item.id === id);
	console.log(index);
	items.splice(index, 1);
	localStorage.setItem('todoObjects', JSON.stringify(items));
}

function removeProjectFromLocalStorage(project) {
	// remove from projectList
	const items = JSON.parse(localStorage.getItem('projectList')) || [];
	console.log(items);
	const index = items.findIndex((item) => item === project);
	console.log(index);
	items.splice(index, 1);
	localStorage.setItem('projectList', JSON.stringify(items));

	// Remove the objects that have that project name from todoObjects array.
	const todoItems =
		JSON.parse(localStorage.getItem('todoObjects')) || [];
	console.log(todoItems);

	let todoIndex = 0;
	while (todoIndex !== -1) {
		todoIndex = todoItems.findIndex(
			(item) => item.project === project
		);
		todoItems.splice(todoIndex, 1);
	}
	console.log(todoIndex);
	localStorage.setItem('todoObjects', JSON.stringify(todoItems));
}


/***/ }),

/***/ "./src/helpers/redrawTaskList.js":
/*!***************************************!*\
  !*** ./src/helpers/redrawTaskList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_taskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/taskView */ "./src/view/taskView.js");
/* harmony import */ var _filterTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterTasks */ "./src/helpers/filterTasks.js");



function redrawTodoList(filter) {
	const todoContainer = document.querySelector(
		'section.todo-container-holder'
	);

	const todoContainerTitle = document.querySelector(
		'header.main-header'
	);

	todoContainerTitle.textContent = `Project: ${
		filter || 'All Tasks'
	}`;

	while (todoContainer.firstChild) {
		todoContainer.removeChild(todoContainer.firstChild);
	}
	// how do I get the project name  from the variable 'clickedProject'?
	const filteredTasks = (0,_filterTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(filter || 'All Tasks');

	filteredTasks.forEach((todo) => {
		(0,_view_taskView__WEBPACK_IMPORTED_MODULE_0__["default"])(
			'section.todo-container-holder',
			'article',
			todo.id,
			todo.title,
			todo.description,
			todo.dueDate,
			todo.priority,
			todo.project,
			todo.status,
			todo.edit,
			todo.remove
		);
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redrawTodoList);


/***/ }),

/***/ "./src/helpers/refreshProjectList.js":
/*!*******************************************!*\
  !*** ./src/helpers/refreshProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/projectList */ "./src/dataStores/projectList.js");
/* eslint-disable no-debugger */


// for the new task dialog

function refreshProjectList() {
	const projectListParent = document.querySelector(
		'select[name=project]'
	);

	while (projectListParent.firstChild) {
		projectListParent.removeChild(projectListParent.firstChild);
	}
	_dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((project) => {
		const option = document.createElement('option');
		option.textContent = project;
		projectListParent.appendChild(option);
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshProjectList);


/***/ }),

/***/ "./src/helpers/removeTask.js":
/*!***********************************!*\
  !*** ./src/helpers/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js");
/* harmony import */ var _redrawTaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redrawTaskList */ "./src/helpers/redrawTaskList.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/helpers/localStorage.js");




function removeTheTask(id) {
	const index = _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__["default"].findIndex((todo) => todo.id === id);
	_dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__["default"].splice(index, 1);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.removeTaskFromLocalStorage)(id);
	(0,_redrawTaskList__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTheTask);


/***/ }),

/***/ "./src/helpers/todoFactory.js":
/*!************************************!*\
  !*** ./src/helpers/todoFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


function createTodoObject(
	title,
	description,
	dueDate,
	priority,
	project,
	status
) {
	const todoObject = {
		title,
		description,
		dueDate,
		priority,
		project,
		status,
		id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoObject);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/pl-pageContainer */ "./src/view/pl-pageContainer.js");
/* harmony import */ var _view_pl_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/pl-header */ "./src/view/pl-header.js");
/* harmony import */ var _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/pl-footer */ "./src/view/pl-footer.js");
/* harmony import */ var _view_pl_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/pl-main */ "./src/view/pl-main.js");
/* harmony import */ var _view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/pl-mainContainer */ "./src/view/pl-mainContainer.js");
/* harmony import */ var _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/drawNavProjectList */ "./src/helpers/drawNavProjectList.js");
/* harmony import */ var _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/pl-nav */ "./src/view/pl-nav.js");
/* harmony import */ var _helpers_filterTasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/filterTasks */ "./src/helpers/filterTasks.js");
/* harmony import */ var _view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/pl-header-cont */ "./src/view/pl-header-cont.js");
/* harmony import */ var _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/refreshProjectList */ "./src/helpers/refreshProjectList.js");
/* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/localStorage */ "./src/helpers/localStorage.js");
/* eslint-disable no-console */









// eslint-disable-next-line no-unused-vars







const body = document.querySelector('body');

body.appendChild(_view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__["default"]);
_view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(_view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
_view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(_view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__.headerIcon);
_view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(_view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__.headerCont);
_view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(_view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__.headerTag);

_view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(_view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__["default"]);

_view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__["default"].appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav);

_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navTitle);
_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addProjectButton);
_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addProjectButton.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addProjectButtonImg);
_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addTaskButton);
_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addTaskButton.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addTaskButtonImg);

_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navTitle.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navProjectList);
_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navProjectList.appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navProjectItem);

_view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__["default"].appendChild(_view_pl_main__WEBPACK_IMPORTED_MODULE_4__.main);

_view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__["default"].appendChild(_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footer);
_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footer.appendChild(_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footerTag);
_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footer.appendChild(_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.clearLocalStorageBtn);
_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.clearLocalStorageBtn.appendChild(_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.clearBtnIcon);

(0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_12__.checkLocalStorage)();

(0,_helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__.updateNavProjectList)();

(0,_helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_10__["default"])();

(0,_helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_11__["default"])();

(0,_helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__["default"])();


/***/ }),

/***/ "./src/view/pl-footer.js":
/*!*******************************!*\
  !*** ./src/view/pl-footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBtnIcon": () => (/* binding */ clearBtnIcon),
/* harmony export */   "clearLocalStorageBtn": () => (/* binding */ clearLocalStorageBtn),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "footerTag": () => (/* binding */ footerTag)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/localStorage */ "./src/helpers/localStorage.js");




const myIcon = new Image();
myIcon.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__;

const footerTag = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
	'p',
	'© 2023, by JustWaveThings',
	{ class: 'footer-tag' }
);

const footer = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', {
	class: 'footer',
});

const clearLocalStorageBtn = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('button', '', {
	class: 'clear-local-storage',
	type: 'button',
});

const clearBtnIcon = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', {
	class: 'clearBtnIcon',
	src: _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__,
});

clearLocalStorageBtn.addEventListener('click', () => {
	(0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__.clearLocalStorage)();
	window.location.reload();
});


/***/ }),

/***/ "./src/view/pl-header-cont.js":
/*!************************************!*\
  !*** ./src/view/pl-header-cont.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerCont": () => (/* binding */ headerCont),
/* harmony export */   "headerIcon": () => (/* binding */ headerIcon),
/* harmony export */   "headerTag": () => (/* binding */ headerTag)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");
/* harmony import */ var _icons_todoAppIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/todoAppIcon.svg */ "./src/icons/todoAppIcon.svg");



const myIcon = new Image();

myIcon.src = _icons_todoAppIcon_svg__WEBPACK_IMPORTED_MODULE_1__;

const headerCont = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Your Todo List!', {
	class: 'title',
});

const headerIcon = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', {
	src: _icons_todoAppIcon_svg__WEBPACK_IMPORTED_MODULE_1__,
});

const headerTag = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
	'h2',
	' - Make It a Good Day to be Great!',
	{ class: 'header' }
);


/***/ }),

/***/ "./src/view/pl-header.js":
/*!*******************************!*\
  !*** ./src/view/pl-header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");


const header = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('header', '', {
	class: 'header',
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/view/pl-main.js":
/*!*****************************!*\
  !*** ./src/view/pl-main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "mainHeader": () => (/* binding */ mainHeader)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");
/* harmony import */ var _helpers_removeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/removeTask */ "./src/helpers/removeTask.js");
/* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js");
/* harmony import */ var _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/refreshProjectList */ "./src/helpers/refreshProjectList.js");
/* harmony import */ var _dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/editTaskDialog */ "./src/dialogs/editTaskDialog.js");






const main = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('section', '', {
	class: 'main',
});

const mainHeader = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
	'Header',
	'Project: Default',
	{ class: 'main-header' }
);
main.appendChild(mainHeader);

const tableHeader = document.createElement('header');

const headerCell1 = document.createElement('th');
headerCell1.textContent = 'Title';
const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Description';

const headerCell3 = document.createElement('th');
headerCell3.textContent = 'Due Date';

const headerCell4 = document.createElement('th');
headerCell4.textContent = 'Priority';

const headerCell5 = document.createElement('th');
headerCell5.textContent = 'Status';

const headerCell6 = document.createElement('th');

const headerCell7 = document.createElement('th');

tableHeader.appendChild(headerCell1);
tableHeader.appendChild(headerCell2);
tableHeader.appendChild(headerCell3);
tableHeader.appendChild(headerCell4);
tableHeader.appendChild(headerCell5);
tableHeader.appendChild(headerCell6);
tableHeader.appendChild(headerCell7);

main.appendChild(tableHeader);

// tableHeader.appendChild(thead);
const bodySection = document.createElement('section');
bodySection.className = 'todo-container-holder';

main.appendChild(bodySection);

// event listener / event delegation for task view
bodySection.addEventListener('click', (e) => {
	if (e.target.classList.contains('todo-remove')) {
		const id = e.target.getAttribute('data-id');
		(0,_helpers_removeTask__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
	}
	if (e.target.classList.contains('todo-edit')) {
		const id = e.target.getAttribute('data-id');
		// in case user added a new project and wants to assign it to the task
		(0,_helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_3__["default"])();
		_dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__["default"].showModal();
		(0,_dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__.populateFormWithTodoData)(id);
		(0,_dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__.editTaskHandler)(id);
		(0,_helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_2__["default"])();
	}
});


/***/ }),

/***/ "./src/view/pl-mainContainer.js":
/*!**************************************!*\
  !*** ./src/view/pl-mainContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");


const mainContainer = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', {
	class: 'mainContainer',
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContainer);


/***/ }),

/***/ "./src/view/pl-nav.js":
/*!****************************!*\
  !*** ./src/view/pl-nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectButton": () => (/* binding */ addProjectButton),
/* harmony export */   "addProjectButtonImg": () => (/* binding */ addProjectButtonImg),
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton),
/* harmony export */   "addTaskButtonImg": () => (/* binding */ addTaskButtonImg),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "navProjectItem": () => (/* binding */ navProjectItem),
/* harmony export */   "navProjectList": () => (/* binding */ navProjectList),
/* harmony export */   "navTitle": () => (/* binding */ navTitle)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");
/* harmony import */ var _icons_add_project_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/add_project.svg */ "./src/icons/add_project.svg");
/* harmony import */ var _icons_add_todo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/add_todo.svg */ "./src/icons/add_todo.svg");
/* harmony import */ var _dialogs_newProjectDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/newProjectDialog */ "./src/dialogs/newProjectDialog.js");
/* harmony import */ var _dialogs_newTaskDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/newTaskDialog */ "./src/dialogs/newTaskDialog.js");
/* harmony import */ var _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/refreshProjectList */ "./src/helpers/refreshProjectList.js");
/* harmony import */ var _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/drawNavProjectList */ "./src/helpers/drawNavProjectList.js");








const addProjectButtonIcon = new Image();
addProjectButtonIcon.src = _icons_add_project_svg__WEBPACK_IMPORTED_MODULE_1__;

const addTaskButtonIcon = new Image();
addTaskButtonIcon.src = _icons_add_todo_svg__WEBPACK_IMPORTED_MODULE_2__;

const nav = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', {
	class: 'nav',
});

const navTitle = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('title', 'Projects', {
	class: 'nav-title',
});

const addProjectButton = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
	'button',
	'New Project',
	{
		class: 'add-project-button',
	}
);

addProjectButton.addEventListener('click', () => {
	(0,_helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__.updateNavProjectList)();
	_dialogs_newProjectDialog__WEBPACK_IMPORTED_MODULE_3__["default"].showModal();
});

const addProjectButtonImg = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', {
	src: _icons_add_project_svg__WEBPACK_IMPORTED_MODULE_1__,
	class: 'button-img',
});

const navProjectList = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', {
	class: 'nav-project-list',
});

const navProjectItem = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', {
	class: 'nav-project-item',
});

const addTaskButton = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'New Task', {
	class: 'add-project-button',
});

addTaskButton.addEventListener('click', () => {
	(0,_helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_5__["default"])();
	_dialogs_newTaskDialog__WEBPACK_IMPORTED_MODULE_4__["default"].showModal();
});

const addTaskButtonImg = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', {
	src: _icons_add_todo_svg__WEBPACK_IMPORTED_MODULE_2__,
	class: 'button-img',
});


/***/ }),

/***/ "./src/view/pl-pageContainer.js":
/*!**************************************!*\
  !*** ./src/view/pl-pageContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js");


const pageContainer = (0,_helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', {
	class: 'pageContainer',
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageContainer);


/***/ }),

/***/ "./src/view/taskView.js":
/*!******************************!*\
  !*** ./src/view/taskView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function taskView(
	appendTo,
	elem,
	id,
	title = 'default title',
	description = 'default description',
	dueDate = 'default due date',
	priority = 'default priority',
	project = 'default project',
	status = 'default status',
	edit = 'edit',
	remove = 'remove'
) {
	const toAppendTo = document.querySelector(`${appendTo}`);
	const container = document.createElement(elem);
	container.className = 'todo-container';

	const props = {
		title: {
			type: 'div',
			className: 'todo-title',
			textContent: title,
		},
		description: {
			type: 'div',
			className: 'todo-description',
			textContent: description,
		},
		dueDate: {
			type: 'div',
			className: 'todo-dueDate',
			textContent: dueDate,
		},
		priority: {
			type: 'div',
			className: 'todo-priority',
			textContent: priority,
		},
		project: {
			type: 'div',
			className: 'todo-project',
			textContent: project,
		},
		status: {
			type: 'div',
			className: 'todo-status',
			textContent: status,
		},
		edit: {
			type: 'button',
			className: 'todo-edit',
			textContent: edit,
			dataAttribute: id,
		},
		remove: {
			type: 'button',
			className: 'todo-remove',
			textContent: remove,
			dataAttribute: id,
		},
	};

	Object.keys(props).forEach((key) => {
		const elementType = document.createElement(
			props[key].type || elem
		);
		elementType.className = props[key].className;
		elementType.textContent = props[key].textContent;
		if (props[key].dataAttribute) {
			elementType.setAttribute('data-id', props[key].dataAttribute);
		}
		container.appendChild(elementType);
	});
	toAppendTo.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskView);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/fonts/Pacifico-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Pacifico-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0d735fc04154e03a691.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Roboto-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/icons/add_project.svg":
/*!***********************************!*\
  !*** ./src/icons/add_project.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5d231678fba4afa0fe3.svg";

/***/ }),

/***/ "./src/icons/add_todo.svg":
/*!********************************!*\
  !*** ./src/icons/add_todo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ec040adcb86d2caddd8.svg";

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52f245056cd878c7e411.svg";

/***/ }),

/***/ "./src/icons/todoAppIcon.svg":
/*!***********************************!*\
  !*** ./src/icons/todoAppIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51093c97f08d9958e0c7.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCxpRUFBaUUsNENBQTRDLHVDQUF1QywwQ0FBMEMscUNBQXFDLDJEQUEyRCxzQ0FBc0Msc0VBQXNFLDZDQUE2Qyx5Q0FBeUMsdUNBQXVDLDBDQUEwQyx1Q0FBdUMsc0VBQXNFLDREQUE0RCw0REFBNEQsR0FBRyxnQkFBZ0IsK0JBQStCLHlEQUF5RCxvQkFBb0IsR0FBRyxjQUFjLDRCQUE0Qix5REFBeUQsb0JBQW9CLEdBQUcsVUFBVSwyQkFBMkIsaUJBQWlCLG9CQUFvQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsY0FBYyxlQUFlLG1CQUFtQixHQUFHLDZDQUE2QyxrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLGdCQUFnQixtQkFBbUIsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsZ0NBQWdDLDRDQUE0QyxjQUFjLEdBQUcsK0JBQStCLGlDQUFpQyxtQ0FBbUMsb0JBQW9CLDRCQUE0Qiw4Q0FBOEMsR0FBRyxrQkFBa0Isa0JBQWtCLGlCQUFpQixzQkFBc0IsR0FBRywwQkFBMEIsa0JBQWtCLGlCQUFpQixtQ0FBbUMsOENBQThDLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsZUFBZSw0Q0FBNEMseUJBQXlCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsaUNBQWlDLDRCQUE0QixHQUFHLDBCQUEwQixxQkFBcUIsaUJBQWlCLGtDQUFrQyxHQUFHLHVEQUF1RCxpQkFBaUIsdUJBQXVCLGNBQWMsZUFBZSxHQUFHLHlFQUF5RSwwQkFBMEIsR0FBRyx3Q0FBd0Msb0ZBQW9GLDBCQUEwQiw0QkFBNEIsOEJBQThCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDhCQUE4QixlQUFlLGlDQUFpQyxnQ0FBZ0MsNEJBQTRCLEdBQUcsNENBQTRDLGtCQUFrQixrQkFBa0IsZ0JBQWdCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGdDQUFnQyw0QkFBNEIsaUJBQWlCLG1CQUFtQiw2Q0FBNkMsR0FBRywwRUFBMEUsbUJBQW1CLGlDQUFpQywwQkFBMEIsdUNBQXVDLDRCQUE0QixHQUFHLDJFQUEyRSxrQkFBa0IsMkJBQTJCLGVBQWUsd0JBQXdCLEdBQUcsMEZBQTBGLHdCQUF3QixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsdUNBQXVDLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsbUJBQW1CLG9CQUFvQixHQUFHLDZCQUE2QixvQkFBb0IsR0FBRyw4QkFBOEIsb0JBQW9CLGlCQUFpQixHQUFHLDhCQUE4QixzQkFBc0IsR0FBRyw0QkFBNEIsc0JBQXNCLEdBQUcsbUNBQW1DLHdCQUF3QixrQkFBa0IsMkJBQTJCLG1DQUFtQywrQkFBK0IsaUJBQWlCLEdBQUcsMEJBQTBCLGtCQUFrQix3QkFBd0Isd0JBQXdCLG1DQUFtQyxzQkFBc0IsbUJBQW1CLG9CQUFvQiw0QkFBNEIsK0NBQStDLDBCQUEwQixHQUFHLGlFQUFpRSwrQ0FBK0MsbURBQW1ELGVBQWUsR0FBRyxxRUFBcUUsNEJBQTRCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsNEJBQTRCLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxrRUFBa0Usa0JBQWtCLEdBQUcsZ0NBQWdDLGVBQWUsaUJBQWlCLGlEQUFpRCxpQkFBaUIsR0FBRyxxQkFBcUIsY0FBYyxHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxzQkFBc0Isb0JBQW9CLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4Qix3QkFBd0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsMEJBQTBCLDhDQUE4QyxpQkFBaUIsb0JBQW9CLG1DQUFtQyx1Q0FBdUMsR0FBRywyREFBMkQsa0JBQWtCLDJCQUEyQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixpQkFBaUIsMEJBQTBCLDhDQUE4QyxpQkFBaUIsb0JBQW9CLDJCQUEyQixzQkFBc0IscUJBQXFCLDZDQUE2QyxHQUFHLHdCQUF3QiwwQkFBMEIsaUJBQWlCLGlCQUFpQixHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0Isb0JBQW9CLDBCQUEwQixHQUFHLCtCQUErQixvQkFBb0IsR0FBRyxtR0FBbUcsNENBQTRDLG9CQUFvQiwwQkFBMEIsbURBQW1ELEdBQUcsNENBQTRDLGtCQUFrQixpQkFBaUIsR0FBRyw0QkFBNEIsd0JBQXdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGlEQUFpRCwwQkFBMEIsdUNBQXVDLEdBQUcsNkNBQTZDLGtCQUFrQixpQkFBaUIsR0FBRyxzQkFBc0IseUNBQXlDLGlCQUFpQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0QixrQ0FBa0MsaUJBQWlCLEdBQUcsa0JBQWtCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLDRCQUE0QixHQUFHLHlCQUF5QixrQkFBa0IsZ0JBQWdCLG9CQUFvQixpQkFBaUIsMEJBQTBCLDRDQUE0QyxpQkFBaUIsb0JBQW9CLDJCQUEyQixzQkFBc0IscUJBQXFCLDRCQUE0Qix1Q0FBdUMsR0FBRyxXQUFXLGtCQUFrQixlQUFlLDJCQUEyQix3QkFBd0IsNEJBQTRCLDRCQUE0QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdCQUFnQiwwQkFBMEIsbUJBQW1CLHdCQUF3Qix1Q0FBdUMsR0FBRyxjQUFjLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQkFBZ0IsMEJBQTBCLG1CQUFtQix3QkFBd0IsdUNBQXVDLHVCQUF1QixHQUFHLHdCQUF3QixxQkFBcUIsdUJBQXVCLEdBQUcseURBQXlELHVCQUF1QixhQUFhLGNBQWMsZ0NBQWdDLEdBQUcsK0JBQStCLHFCQUFxQix5QkFBeUIsOENBQThDLHFCQUFxQixHQUFHLHNCQUFzQixrQkFBa0IsZUFBZSx3QkFBd0IsZ0NBQWdDLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxTQUFTLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakV5QjtBQUNGO0FBQ0k7QUFDRjtBQUNHO0FBQ007O0FBRTdEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVFQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG9DQUFvQyxHQUFHO0FBQ3ZDLG1CQUFtQixvRUFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBYztBQUNoQixFQUFFLHlFQUFrQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFlBQVk7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCxnQ0FBZ0MsR0FBRztBQUNuQyxrQkFBa0Isb0VBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMc0I7QUFDaUI7QUFDUjs7QUFFN0Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxvRUFBZ0I7QUFDakIsQ0FBQyxpRkFBb0I7QUFDckI7QUFDQTtBQUNBLENBQUMseUVBQWtCO0FBQ25CLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFdUI7QUFDRjtBQUNJO0FBQ0E7QUFDRjtBQUNHO0FBQ007QUFDN0Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUVBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0VBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvRUFBZ0I7QUFDakIsQ0FBQyx5RUFBa0I7QUFDbkIsZUFBZSxXQUFXLG1FQUFFOztBQUU1QjtBQUNBO0FBQ0EsQ0FBQyxtRUFBYztBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySzBCO0FBQ1c7QUFDVDtBQUNSOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsdUVBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsK0RBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdFQUFvQjtBQUMzQixtQkFBbUIsZ0JBQWdCO0FBQ25DLElBQUksMkRBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RUFBNkI7QUFDakMsSUFBSSwrREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUk7QUFDSjtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdUI7O0FBRXBEO0FBQ0EsdUJBQXVCLHNFQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxTQUFTLCtEQUFXO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUgsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJnQjtBQUNBOztBQUU3QztBQUNQLG9EQUFvRCwrREFBVztBQUMvRCxvREFBb0QsK0RBQVc7QUFDL0Q7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLEtBQUs7QUFDaEQ7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV3QztBQUNTOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQW9COztBQUUzQztBQUNBLEVBQUUsMERBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkM5QjtBQUNvRDs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1RUFBbUI7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmtCO0FBQ047QUFDYzs7QUFFNUQ7QUFDQSxlQUFlLHlFQUFxQjtBQUNwQyxDQUFDLHNFQUFrQjtBQUNuQixDQUFDLHlFQUEwQjtBQUMzQixDQUFDLDJEQUFjO0FBQ2Y7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWTzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBTTs7QUFFWjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWhDO0FBQ3FCO0FBQytCO0FBQ2Q7QUFNWjtBQUNZO0FBQ2M7QUFHZDtBQVVmOztBQUV2QjtBQUN5RDs7QUFNMUI7QUFDK0I7QUFDUjtBQUNLOztBQUUzRDs7QUFFQSxpQkFBaUIsOERBQWE7QUFDOUIsMEVBQXlCLENBQUMsdURBQU07QUFDaEMsbUVBQWtCLENBQUMsNERBQVU7QUFDN0IsbUVBQWtCLENBQUMsNERBQVU7QUFDN0IsbUVBQWtCLENBQUMsMkRBQVM7O0FBRTVCLDBFQUF5QixDQUFDLDhEQUFhOztBQUV2QywwRUFBeUIsQ0FBQyw2Q0FBRzs7QUFFN0IseURBQWUsQ0FBQyxrREFBUTtBQUN4Qix5REFBZSxDQUFDLDBEQUFnQjtBQUNoQyxzRUFBNEIsQ0FBQyw2REFBbUI7QUFDaEQseURBQWUsQ0FBQyx1REFBYTtBQUM3QixtRUFBeUIsQ0FBQywwREFBZ0I7O0FBRTFDLDhEQUFvQixDQUFDLHdEQUFjO0FBQ25DLG9FQUEwQixDQUFDLHdEQUFjOztBQUV6QywwRUFBeUIsQ0FBQywrQ0FBSTs7QUFFOUIsMEVBQXlCLENBQUMsbURBQU07QUFDaEMsK0RBQWtCLENBQUMsc0RBQVM7QUFDNUIsK0RBQWtCLENBQUMsaUVBQW9CO0FBQ3ZDLDZFQUFnQyxDQUFDLHlEQUFZOztBQUU3Qyx5RUFBaUI7O0FBRWpCLGlGQUFvQjs7QUFFcEIsd0VBQWtCOztBQUVsQixvRUFBYzs7QUFFZCx1RUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFaUM7QUFDYjtBQUNxQjs7QUFFNUQ7QUFDQSxhQUFhLDhDQUFJOztBQUVWLGtCQUFrQixpRUFBYTtBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPLGVBQWUsaUVBQWE7QUFDbkM7QUFDQSxDQUFDOztBQUVNLDZCQUE2QixpRUFBYTtBQUNqRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTSxxQkFBcUIsaUVBQWE7QUFDekM7QUFDQSxNQUFNLDhDQUFJO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBLENBQUMsd0VBQWlCO0FBQ2xCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCbUQ7QUFDUjs7QUFFNUM7O0FBRUEsYUFBYSxtREFBSTs7QUFFVixtQkFBbUIsaUVBQWE7QUFDdkM7QUFDQSxDQUFDOztBQUVNLG1CQUFtQixpRUFBYTtBQUN2QyxNQUFNLG1EQUFJO0FBQ1YsQ0FBQzs7QUFFTSxrQkFBa0IsaUVBQWE7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cb0Q7O0FBRXBELGVBQWUsaUVBQWE7QUFDNUI7QUFDQSxDQUFDOztBQUVELGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0Y7QUFDSztBQUNRO0FBSTVCOztBQUU1QixhQUFhLGlFQUFhO0FBQ2pDO0FBQ0EsQ0FBQzs7QUFFTSxtQkFBbUIsaUVBQWE7QUFDdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUVBQWtCO0FBQ3BCLEVBQUUseUVBQXdCO0FBQzFCLEVBQUUsaUZBQXdCO0FBQzFCLEVBQUUsd0VBQWU7QUFDakIsRUFBRSxtRUFBYztBQUNoQjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RW1EOztBQUVwRCxzQkFBc0IsaUVBQWE7QUFDbkM7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUI7QUFDQztBQUNMO0FBQ1E7QUFDTjtBQUNhO0FBQ007O0FBRXJFO0FBQ0EsMkJBQTJCLG1EQUFhOztBQUV4QztBQUNBLHdCQUF3QixnREFBVzs7QUFFNUIsWUFBWSxpRUFBYTtBQUNoQztBQUNBLENBQUM7O0FBRU0saUJBQWlCLGlFQUFhO0FBQ3JDO0FBQ0EsQ0FBQzs7QUFFTSx5QkFBeUIsaUVBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxpRkFBb0I7QUFDckIsQ0FBQywyRUFBdUI7QUFDeEIsQ0FBQzs7QUFFTSw0QkFBNEIsaUVBQWE7QUFDaEQsTUFBTSxtREFBYTtBQUNuQjtBQUNBLENBQUM7O0FBRU0sdUJBQXVCLGlFQUFhO0FBQzNDO0FBQ0EsQ0FBQzs7QUFFTSx1QkFBdUIsaUVBQWE7QUFDM0M7QUFDQSxDQUFDOztBQUVNLHNCQUFzQixpRUFBYTtBQUMxQztBQUNBLENBQUM7O0FBRUQ7QUFDQSxDQUFDLHVFQUFrQjtBQUNuQixDQUFDLHdFQUFvQjtBQUNyQixDQUFDOztBQUVNLHlCQUF5QixpRUFBYTtBQUM3QyxNQUFNLGdEQUFXO0FBQ2pCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEbUQ7O0FBRXBELHNCQUFzQixpRUFBYTtBQUNuQztBQUNBLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNON0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFeEIsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2RhdGFTdG9yZXMvcHJpb3JpdHlMaXN0LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvZGF0YVN0b3Jlcy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2RhdGFTdG9yZXMvc3RhdHVzTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2RhdGFTdG9yZXMvdG9kb09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9kaWFsb2dzL2VkaXRUYXNrRGlhbG9nLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvZGlhbG9ncy9uZXdQcm9qZWN0RGlhbG9nLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvZGlhbG9ncy9uZXdUYXNrRGlhbG9nLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvaGVscGVycy9kcmF3TmF2UHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9oZWxwZXJzL2VsZW1lbnRNYWtlci5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvZmlsdGVyVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9oZWxwZXJzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvcmVkcmF3VGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9oZWxwZXJzL3JlZnJlc2hQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL3ZpZXcvcGwtZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvdmlldy9wbC1oZWFkZXItY29udC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL3ZpZXcvcGwtaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvdmlldy9wbC1tYWluLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvdmlldy9wbC1tYWluQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvdmlldy9wbC1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy92aWV3L3BsLXBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy92aWV3L3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QYWNpZmljby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0LyogZnJvbSBjb29sb3JzICovXFxuXFx0LS1sYXBpcy1sYXp1bGk6IGhzbGEoMjEwLCA1MCUsIDQwJSwgMSk7XFxuXFx0LS1jYXJvbGluYS1ibHVlOiBoc2xhKDIwMSwgNTElLCA2OSUsIDEpO1xcblxcdC0tY2hhcmNvYWw6IGhzbGEoMjAzLCAzMCUsIDI2JSwgMSk7XFxuXFx0LS1saWdodC1ncmVlbjogaHNsYSgxMTIsIDYwJSwgNzQlLCAxKTtcXG5cXHQtLW55YW56YTogaHNsYSgxMjQsIDY0JSwgOTElLCAxKTtcXG5cXG5cXHQvKiBmb250cyAgKi9cXG5cXHQtLXRpdGxlLWZvbnQ6ICdyb2JvdG8tYm9sZCcsIGN1cnNpdmU7XFxuXFx0LS1zdHlsZS1mb250OiAncGFjaWZpY28nLCBjdXJzaXZlO1xcblxcblxcdC8qIGNvbG9yIGFzc2lnbm1lbnRzICovXFxuXFx0LS1saWdodGVzdC1iYWNrZ3JvdW5kOiB2YXIoLS1ueWFuemEpO1xcblxcdC0tbGlnaHQtYmFja2dyb3VuZDogdmFyKC0tY2Fyb2xpbmEtYmx1ZSk7XFxuXFx0LS10aXRsZS1zZWxlY3RlZDogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcblxcdC0tZGFyay1iYWNrZ3JvdW5kOiB2YXIoLS1jaGFyY29hbCk7XFxuXFx0LS1hbHQtYmFja2dyb3VuZDogdmFyKC0tbGFwaXMtbGF6dWxpKTtcXG5cXG5cXHQvKiBvcGFjaXR5ICAqL1xcblxcdC0tb3BhY2l0eTogMC43O1xcblxcblxcdC8qIHNoYWRvd3MgKi9cXG5cXHQtLXN0YW5kYXJkLXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcdC0tdGl0bGUtc2hhZG93LXN0YW5kYXJkOiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0LS10aXRsZS1zaGFkb3ctZW1waGFzaXM6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcblxcdGZvcm1hdDogKCd0dGYnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdwYWNpZmljbyc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcblxcdGZvcm1hdDogKCd0dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6IGhlbHZldGljYTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGhlaWdodDogMTAwc3ZoO1xcbn1cXG5cXG4ubWFpbixcXG4uZm9vdGVyLFxcbi5uYXYsXFxuLnBhZ2VDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwZHZoO1xcbn1cXG4vKiBjb250YWluZXIgKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFja2dyb3VuZCk7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG4vKiBhcHAgbmFtZSAqL1xcbmhlYWRlciA+IGgxIHtcXG5cXHRjb2xvcjogdmFyKC0tdGl0bGUtc2VsZWN0ZWQpO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxuXFx0dGV4dC1zaGFkb3c6IHZhcigtLXRpdGxlLXNoYWRvdy1zdGFuZGFyZCk7XFxufVxcblxcbmhlYWRlciA+IGltZyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDU1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi8qIHF1b3RlICovXFxuaDIuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG9wYWNpdHk6IDAuOTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tc3R5bGUtZm9udCk7XFxuXFx0dGV4dC1zaGFkb3c6IHZhcigtLXRpdGxlLXNoYWRvdy1lbXBoYXNpcyk7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mb290ZXItdGFnIHtcXG5cXHRmb250LXNpemU6IDAuN3JlbTtcXG5cXHRjb2xvcjogdmFyKC0tdGl0bGUtc2VsZWN0ZWQpO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG5cXG4uY2xlYXItbG9jYWwtc3RvcmFnZSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlLFxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nIHtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAxJTtcXG5cXHRib3R0b206IDYlO1xcbn1cXG5cXG4uY2xlYXItbG9jYWwtc3RvcmFnZSA+IGltZzpob3ZlcixcXG4uY2xlYXItbG9jYWwtc3RvcmFnZSA+IGltZzpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2xlYXItbG9jYWwtc3RvcmFnZTpob3Zlcjo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnVGhpcyB3aWxsIGNsZWFyIEFMTCBhcHAgZGF0YSBpbiBsb2NhbCBzdG9yYWdlLiBObyByZWNvdmVyeSBwb3NzaWJsZS4nO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0d2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXG5cXHR6LWluZGV4OiAxO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMTI1JSk7XFxuXFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG4vKiBob2xkcyBuYXYgYW5kIG1haW4gKi9cXG4ubWFpbkNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMTAwc3Z3O1xcblxcdGhlaWdodDogOTAlO1xcbn1cXG4vKiBjb250YWluZXIgKi9cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZCk7XFxufVxcblxcbi8qIHRoaXMgaXMgdGhlIHByb2plY3QgbGFiZWwgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAqL1xcbi5tYWluLWhlYWRlciB7XFxuXFx0bWFyZ2luOiAxLjVyZW07XFxuXFx0cGFkZGluZzogMXJlbSAycmVtIDFyZW0gMnJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtc2hhZG93KTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG59XFxuLyogdGFzayBjb250YWluZXIgJ2NvbnRhaW5lcicgKi9cXG5kaXYubWFpbkNvbnRhaW5lciA+IHNlY3Rpb24gPiBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6IDk1JTtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cXG4vKiBjb2x1bW4gbGFiZWxzICAqL1xcbmJvZHkgPiBkaXYgPiBkaXYubWFpbkNvbnRhaW5lciA+IHNlY3Rpb24gPiBoZWFkZXI6bnRoLWNoaWxkKDIpIHtcXG5cXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDFyZW07XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG5cXG5oZWFkZXIgPiB0aCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbjogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuaGVhZGVyID4gdGg6Zmlyc3QtY2hpbGQge1xcblxcdGZsZXgtYmFzaXM6IDEwJTtcXG59XFxuXFxuaGVhZGVyID4gdGg6bnRoLWNoaWxkKDIpIHtcXG5cXHRmbGV4LWJhc2lzOiA0MCU7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG5oZWFkZXIgPiB0aDpudGgtY2hpbGQoMykge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgPiB0aDpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEyJTtcXG59XFxuXFxuc2VjdGlvbi50b2RvLWNvbnRhaW5lci1ob2xkZXIge1xcblxcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDFyZW07XFxufVxcbmFydGljbGUudG9kby1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LXdyYXA6IG5vd3JhcDtcXG5cXHRtYXJnaW46IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgxMTIsIDYwJSwgNzQlLCAwLjEpO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuYXJ0aWNsZS50b2RvLWNvbnRhaW5lcjpob3ZlcixcXG5hcnRpY2xlLnRvZG8tY29udGFpbmVyOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDExMiwgNjAlLCA3NCUsIDAuMik7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzNTBtcyBlYXNlLWluLW91dDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBmbGV4Ym94IHRoZSBkaXNwbGF5IG9mIHRoZSB0b2RvLWNvbnRhaW5lcnMgKi9cXG5cXG4udG9kby10aXRsZSB7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0ZmxleC1iYXNpczogMTAlO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuXFx0ZmxleC1iYXNpczogNDAlO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udG9kby1kdWVEYXRlIHtcXG5cXHRmbGV4LWJhc2lzOiA2JTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcblxcdGZsZXgtYmFzaXM6IDQlO1xcbn1cXG5cXG4udG9kby1zdGF0dXMge1xcblxcdGZsZXgtYmFzaXM6IDYlO1xcbn1cXG5cXG4udG9kby1lZGl0IHtcXG5cXHRmbGV4LWJhc2lzOiA0O1xcbn1cXG5cXG4udG9kby1yZW1vdmUge1xcblxcdGZsZXgtYmFzaXM6IDQlO1xcbn1cXG5cXG4vKiBoaWRlcyBwcm9qZWN0IGZyb20gZGlzcGxheSBpbiB0aGUgdGFibGUgKi9cXG4udG9kby1wcm9qZWN0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBuYXYgc2VjdGlvbiAgKi9cXG5cXG4ubmF2IHtcXG5cXHR3aWR0aDogMjAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbnRpdGxlLm5hdi10aXRsZSB7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubmF2ID4gdGl0bGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwLjc1cmVtO1xcblxcdG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZGl2Lm5hdiA+IGJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW46IDEuM3JlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtc2hhZG93KTtcXG59XFxuXFxuYm9keSA+IGRpdiA+IGRpdi5tYWluQ29udGFpbmVyID4gZGl2Lm5hdiA+IHRpdGxlID4gdWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10aXRsZS1zaGFkb3ctc3RhbmRhcmQpO1xcbn1cXG5cXG5hLm5hdi1wcm9qZWN0LWl0ZW0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG51bC5uYXYtcHJvamVjdC1saXN0ID4gbGkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLXJlbW92ZSB7XFxuXFx0bWFyZ2luOiAwLjI1cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLXJlbW92ZSxcXG51bC5uYXYtcHJvamVjdC1saXN0ID4gbGkgOmhvdmVyLFxcbnVsLm5hdi1wcm9qZWN0LWxpc3QgPiBsaSA6Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLXNlbGVjdGVkKTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmltZyxcXG5idXR0b24sXFxudWwsXFxudGl0bGUsXFxuaGVhZGVyLFxcbmkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBkaWFsb2dzICAqL1xcbmRpYWxvZyB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDIwdmg7XFxuXFx0d2lkdGg6IDIwdnc7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWJhY2tncm91bmQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5kaWFsb2cudGFza01vZGFsLFxcbmRpYWxvZy5lZGl0VGFza01vZGFsIHtcXG5cXHRoZWlnaHQ6IDcwZHZoO1xcblxcdHdpZHRoOiAzMHJlbTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZDogaHNsYSgxMTIsIDYwJSwgNzQlLCAwLjMpO1xcblxcdG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuZGlhbG9nID4gZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuZm9ybSA+IHRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG5cXG5mb3JtID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMC4xcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5sYWJlbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAxLjhyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRyaWdodDogNSU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuZm9ybSA+IC5mb3JtLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogODAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLHNDQUFzQztDQUN0Qyx1Q0FBdUM7Q0FDdkMsa0NBQWtDO0NBQ2xDLHFDQUFxQztDQUNyQyxnQ0FBZ0M7O0NBRWhDLFdBQVc7Q0FDWCxvQ0FBb0M7Q0FDcEMsaUNBQWlDOztDQUVqQyxzQkFBc0I7Q0FDdEIsb0NBQW9DO0NBQ3BDLHdDQUF3QztDQUN4QyxvQ0FBb0M7Q0FDcEMsa0NBQWtDO0NBQ2xDLHFDQUFxQzs7Q0FFckMsYUFBYTtDQUNiLGNBQWM7O0NBRWQsWUFBWTtDQUNaLDhDQUE4QztDQUM5Qyx1REFBdUQ7Q0FDdkQsdURBQXVEO0FBQ3hEOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDRDQUFpQztDQUNqQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsNENBQXNDO0NBQ3RDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGVBQWU7Q0FDZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Ozs7Q0FJQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7QUFDZjtBQUNBLGNBQWM7QUFDZDtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQix1Q0FBdUM7Q0FDdkMsU0FBUztBQUNWO0FBQ0EsYUFBYTtBQUNiO0NBQ0MsNEJBQTRCO0NBQzVCLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCO0FBQ0EsVUFBVTtBQUNWO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFVBQVU7Q0FDVix1Q0FBdUM7Q0FDdkMsb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiw0QkFBNEI7Q0FDNUIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWiw2QkFBNkI7QUFDOUI7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBOztDQUVDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLCtFQUErRTtDQUMvRSxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsVUFBVTtDQUNWLDRCQUE0QjtDQUM1QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0FBQ3hCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixXQUFXO0FBQ1o7QUFDQSxjQUFjO0FBQ2Q7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsd0NBQXdDO0FBQ3pDOztBQUVBLHFEQUFxRDtBQUNyRDtDQUNDLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLGtDQUFrQztDQUNsQyx1QkFBdUI7QUFDeEI7QUFDQSwrQkFBK0I7QUFDL0I7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixtQkFBbUI7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixrQ0FBa0M7Q0FDbEMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QiwwQ0FBMEM7Q0FDMUMscUJBQXFCO0FBQ3RCOztBQUVBOztDQUVDLDBDQUEwQztDQUMxQyw4Q0FBOEM7Q0FDOUMsVUFBVTtBQUNYOztBQUVBLCtDQUErQzs7QUFFL0M7Q0FDQyx1QkFBdUI7Q0FDdkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEsNENBQTRDO0FBQzVDO0NBQ0MsYUFBYTtBQUNkOztBQUVBLGlCQUFpQjs7QUFFakI7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLDRDQUE0QztDQUM1QyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osY0FBYztDQUNkLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIseUNBQXlDO0NBQ3pDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLGVBQWU7Q0FDZixjQUFjO0NBQ2QsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQix5Q0FBeUM7Q0FDekMsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YscUJBQXFCO0FBQ3RCOztBQUVBOztDQUVDLGVBQWU7QUFDaEI7O0FBRUE7Ozs7Q0FJQyx1Q0FBdUM7Q0FDdkMsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQiw4Q0FBOEM7QUFDL0M7O0FBRUE7Ozs7OztDQU1DLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUEsYUFBYTtBQUNiO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLDRDQUE0QztDQUM1QyxxQkFBcUI7Q0FDckIsa0NBQWtDO0FBQ25DOztBQUVBOztDQUVDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsZUFBZTtDQUNmLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsdUNBQXVDO0NBQ3ZDLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBOztDQUVDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGtDQUFrQztDQUNsQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCwyQkFBMkI7QUFDNUI7O0FBRUE7OztDQUdDLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIseUNBQXlDO0NBQ3pDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0LyogZnJvbSBjb29sb3JzICovXFxuXFx0LS1sYXBpcy1sYXp1bGk6IGhzbGEoMjEwLCA1MCUsIDQwJSwgMSk7XFxuXFx0LS1jYXJvbGluYS1ibHVlOiBoc2xhKDIwMSwgNTElLCA2OSUsIDEpO1xcblxcdC0tY2hhcmNvYWw6IGhzbGEoMjAzLCAzMCUsIDI2JSwgMSk7XFxuXFx0LS1saWdodC1ncmVlbjogaHNsYSgxMTIsIDYwJSwgNzQlLCAxKTtcXG5cXHQtLW55YW56YTogaHNsYSgxMjQsIDY0JSwgOTElLCAxKTtcXG5cXG5cXHQvKiBmb250cyAgKi9cXG5cXHQtLXRpdGxlLWZvbnQ6ICdyb2JvdG8tYm9sZCcsIGN1cnNpdmU7XFxuXFx0LS1zdHlsZS1mb250OiAncGFjaWZpY28nLCBjdXJzaXZlO1xcblxcblxcdC8qIGNvbG9yIGFzc2lnbm1lbnRzICovXFxuXFx0LS1saWdodGVzdC1iYWNrZ3JvdW5kOiB2YXIoLS1ueWFuemEpO1xcblxcdC0tbGlnaHQtYmFja2dyb3VuZDogdmFyKC0tY2Fyb2xpbmEtYmx1ZSk7XFxuXFx0LS10aXRsZS1zZWxlY3RlZDogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcblxcdC0tZGFyay1iYWNrZ3JvdW5kOiB2YXIoLS1jaGFyY29hbCk7XFxuXFx0LS1hbHQtYmFja2dyb3VuZDogdmFyKC0tbGFwaXMtbGF6dWxpKTtcXG5cXG5cXHQvKiBvcGFjaXR5ICAqL1xcblxcdC0tb3BhY2l0eTogMC43O1xcblxcblxcdC8qIHNoYWRvd3MgKi9cXG5cXHQtLXN0YW5kYXJkLXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcdC0tdGl0bGUtc2hhZG93LXN0YW5kYXJkOiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0LS10aXRsZS1zaGFkb3ctZW1waGFzaXM6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy9Sb2JvdG8tQm9sZC50dGYpO1xcblxcdGZvcm1hdDogKCd0dGYnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdwYWNpZmljbyc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy9QYWNpZmljby1SZWd1bGFyLnR0Zik7XFxuXFx0Zm9ybWF0OiAoJ3R0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDBzdmg7XFxufVxcblxcbi5tYWluLFxcbi5mb290ZXIsXFxuLm5hdixcXG4ucGFnZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDBkdmg7XFxufVxcbi8qIGNvbnRhaW5lciAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRnYXA6IDJyZW07XFxufVxcbi8qIGFwcCBuYW1lICovXFxuaGVhZGVyID4gaDEge1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZS1zZWxlY3RlZCk7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHR0ZXh0LXNoYWRvdzogdmFyKC0tdGl0bGUtc2hhZG93LXN0YW5kYXJkKTtcXG59XFxuXFxuaGVhZGVyID4gaW1nIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNTVweDtcXG5cXHRtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLyogcXVvdGUgKi9cXG5oMi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3BhY2l0eTogMC45O1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1zdHlsZS1mb250KTtcXG5cXHR0ZXh0LXNoYWRvdzogdmFyKC0tdGl0bGUtc2hhZG93LWVtcGhhc2lzKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhY2tncm91bmQpO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3Rlci10YWcge1xcblxcdGZvbnQtc2l6ZTogMC43cmVtO1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZS1zZWxlY3RlZCk7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNsZWFyLWxvY2FsLXN0b3JhZ2UsXFxuLmNsZWFyLWxvY2FsLXN0b3JhZ2UgPiBpbWcge1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDElO1xcblxcdGJvdHRvbTogNiU7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nOmhvdmVyLFxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlOmhvdmVyOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdUaGlzIHdpbGwgY2xlYXIgQUxMIGFwcCBkYXRhIGluIGxvY2FsIHN0b3JhZ2UuIE5vIHJlY292ZXJ5IHBvc3NpYmxlLic7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuXFx0cGFkZGluZzogMC41ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNWVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0xMjUlKTtcXG5cXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcbi8qIGhvbGRzIG5hdiBhbmQgbWFpbiAqL1xcbi5tYWluQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiAxMDBzdnc7XFxuXFx0aGVpZ2h0OiA5MCU7XFxufVxcbi8qIGNvbnRhaW5lciAqL1xcbi5tYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLyogdGhpcyBpcyB0aGUgcHJvamVjdCBsYWJlbCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlICovXFxuLm1haW4taGVhZGVyIHtcXG5cXHRtYXJnaW46IDEuNXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAycmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG4vKiB0YXNrIGNvbnRhaW5lciAnY29udGFpbmVyJyAqL1xcbmRpdi5tYWluQ29udGFpbmVyID4gc2VjdGlvbiA+IHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogOTUlO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi8qIGNvbHVtbiBsYWJlbHMgICovXFxuYm9keSA+IGRpdiA+IGRpdi5tYWluQ29udGFpbmVyID4gc2VjdGlvbiA+IGhlYWRlcjpudGgtY2hpbGQoMikge1xcblxcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdG1hcmdpbjogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcblxcbmhlYWRlciA+IHRoIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5oZWFkZXIgPiB0aDpmaXJzdC1jaGlsZCB7XFxuXFx0ZmxleC1iYXNpczogMTAlO1xcbn1cXG5cXG5oZWFkZXIgPiB0aDpudGgtY2hpbGQoMikge1xcblxcdGZsZXgtYmFzaXM6IDQwJTtcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbmhlYWRlciA+IHRoOm50aC1jaGlsZCgzKSB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmhlYWRlciA+IHRoOmxhc3QtY2hpbGQge1xcblxcdG1hcmdpbi1yaWdodDogMTIlO1xcbn1cXG5cXG5zZWN0aW9uLnRvZG8tY29udGFpbmVyLWhvbGRlciB7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMXJlbTtcXG59XFxuYXJ0aWNsZS50b2RvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtd3JhcDogbm93cmFwO1xcblxcdG1hcmdpbjogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDExMiwgNjAlLCA3NCUsIDAuMSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG5hcnRpY2xlLnRvZG8tY29udGFpbmVyOmhvdmVyLFxcbmFydGljbGUudG9kby1jb250YWluZXI6Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTEyLCA2MCUsIDc0JSwgMC4yKTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDM1MG1zIGVhc2UtaW4tb3V0O1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIGZsZXhib3ggdGhlIGRpc3BsYXkgb2YgdGhlIHRvZG8tY29udGFpbmVycyAqL1xcblxcbi50b2RvLXRpdGxlIHtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRmbGV4LWJhc2lzOiAxMCU7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG5cXHRmbGV4LWJhc2lzOiA0MCU7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50b2RvLWR1ZURhdGUge1xcblxcdGZsZXgtYmFzaXM6IDYlO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuXFx0ZmxleC1iYXNpczogNCU7XFxufVxcblxcbi50b2RvLXN0YXR1cyB7XFxuXFx0ZmxleC1iYXNpczogNiU7XFxufVxcblxcbi50b2RvLWVkaXQge1xcblxcdGZsZXgtYmFzaXM6IDQ7XFxufVxcblxcbi50b2RvLXJlbW92ZSB7XFxuXFx0ZmxleC1iYXNpczogNCU7XFxufVxcblxcbi8qIGhpZGVzIHByb2plY3QgZnJvbSBkaXNwbGF5IGluIHRoZSB0YWJsZSAqL1xcbi50b2RvLXByb2plY3Qge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIG5hdiBzZWN0aW9uICAqL1xcblxcbi5uYXYge1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWJhY2tncm91bmQpO1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuXFxudGl0bGUubmF2LXRpdGxlIHtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5uYXYgPiB0aXRsZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDAuNzVyZW07XFxuXFx0b3BhY2l0eTogMC43O1xcbn1cXG5cXG5kaXYubmF2ID4gYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbjogMS4zcmVtO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5ib2R5ID4gZGl2ID4gZGl2Lm1haW5Db250YWluZXIgPiBkaXYubmF2ID4gdGl0bGUgPiB1bCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRtYXJnaW46IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IGhlbHZldGljYTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXRpdGxlLXNoYWRvdy1zdGFuZGFyZCk7XFxufVxcblxcbmEubmF2LXByb2plY3QtaXRlbSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbnVsLm5hdi1wcm9qZWN0LWxpc3QgPiBsaSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tcmVtb3ZlIHtcXG5cXHRtYXJnaW46IDAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tcmVtb3ZlLFxcbnVsLm5hdi1wcm9qZWN0LWxpc3QgPiBsaSA6aG92ZXIsXFxudWwubmF2LXByb2plY3QtbGlzdCA+IGxpIDpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtc2VsZWN0ZWQpO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaW1nLFxcbmJ1dHRvbixcXG51bCxcXG50aXRsZSxcXG5oZWFkZXIsXFxuaSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIGRpYWxvZ3MgICovXFxuZGlhbG9nIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMjB2aDtcXG5cXHR3aWR0aDogMjB2dztcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtYmFja2dyb3VuZCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxufVxcblxcbmRpYWxvZy50YXNrTW9kYWwsXFxuZGlhbG9nLmVkaXRUYXNrTW9kYWwge1xcblxcdGhlaWdodDogNzBkdmg7XFxuXFx0d2lkdGg6IDMwcmVtO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZ3JvdW5kOiBoc2xhKDExMiwgNjAlLCA3NCUsIDAuMyk7XFxuXFx0b3BhY2l0eTogMC45O1xcbn1cXG5cXG5kaWFsb2cgPiBmb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5mb3JtID4gdGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcblxcbmZvcm0gPiBkaXYgPiBidXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAwLjFyZW07XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhY2tncm91bmQpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IGhlbHZldGljYTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxufVxcblxcbmxhYmVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxufVxcblxcbnRleHRhcmVhIHtcXG5cXHRoZWlnaHQ6IDVyZW07XFxufVxcblxcbnNlbGVjdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDEuOHJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdkYXRlJ10ge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNTAlO1xcblxcdHJpZ2h0OiA1JTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRsaW5lLWhlaWdodDogMC43NXJlbTtcXG5cXHRmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG5mb3JtID4gLmZvcm0tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJjb25zdCBwcmlvcml0eUxpc3QgPSBbJ05vbmUnLCAnTG93JywgJ01lZGl1bScsICdIaWdoJywgJ1VyZ2VudCddO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlvcml0eUxpc3Q7XG4iLCIvLyBuZWVkIHRvIGJlIGluIHN5bmMgd2l0aCB0aGUgcHJvamVjdCBsaXN0IGluIGxvY2FsIHN0b3JhZ2VcblxuY29uc3QgbG9jYWxTdG9yYWdlU3RhdGUgPSBKU09OLnBhcnNlKFxuXHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKVxuKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuLy8gdHJ5aW5nIHRvIG1hbmFnZSB0aGUgZGVmYXVsdCBwcm9qZWN0IHNob3dpbmcgdXAgbW9yZSB0aGFuIG9uY2UgaW4gdGhlIHByb2plY3QgbGlzdCBkdWUgdG8gbG9jYWwgc3RvcmFnZSBhZGRpbmcgdG8gdGhlIGFycmF5XG5pZiAoIXByb2plY3RMaXN0LmluY2x1ZGVzKCdBbGwgVGFza3MnKSkge1xuXHRwcm9qZWN0TGlzdC5wdXNoKCdBbGwgVGFza3MnKTtcbn1cblxuaWYgKCFwcm9qZWN0TGlzdC5pbmNsdWRlcygnRGVmYXVsdCcpKSB7XG5cdHByb2plY3RMaXN0LnB1c2goJ0RlZmF1bHQnKTtcbn1cblxuaWYgKGxvY2FsU3RvcmFnZVN0YXRlKSB7XG5cdGxvY2FsU3RvcmFnZVN0YXRlLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRjb25zdCBwcm9qZWN0RXhpc3RzID0gcHJvamVjdExpc3QuaW5jbHVkZXMocHJvamVjdCk7XG5cdFx0aWYgKCFwcm9qZWN0RXhpc3RzKSB7XG5cdFx0XHRwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuXHRcdH1cblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RMaXN0O1xuIiwiY29uc3Qgc3RhdHVzTGlzdCA9IFtcblx0J05vdCBTdGFydGVkJyxcblx0J0luIFByb2dyZXNzJyxcblx0J0NvbXBsZXRlZCcsXG5cdCdPbiBIb2xkJyxcblx0J0NhbmNlbGxlZCcsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXNMaXN0O1xuIiwiY29uc3QgbG9jYWxTdG9yYWdlU3RhdGUgPSBKU09OLnBhcnNlKFxuXHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb09iamVjdHMnKVxuKTtcblxuY29uc3QgdG9kb09iamVjdHMgPSBbXTtcblxuaWYgKGxvY2FsU3RvcmFnZVN0YXRlKSB7XG5cdGxvY2FsU3RvcmFnZVN0YXRlLmZvckVhY2goKHRvZG8pID0+IHtcblx0XHRPYmplY3QuYXNzaWduKHRvZG8sIHtcblx0XHRcdGdldFRpdGxlKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0XHRcdH0sXG5cblx0XHRcdGdldERlc2NyaXB0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0XHRcdH0sXG5cblx0XHRcdGdldER1ZURhdGUoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRQcmlvcml0eSgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJpb3JpdHk7XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRQcm9qZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9qZWN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdGF0dXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRJZCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRUaXRsZSh0aXRsZTEpIHtcblx0XHRcdFx0dGhpcy50aXRsZSA9IHRpdGxlMTtcblx0XHRcdH0sXG5cblx0XHRcdHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uMSkge1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24xO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0RHVlRGF0ZShkdWVEYXRlMSkge1xuXHRcdFx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlMTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFByaW9yaXR5KHByaW9yaXR5MSkge1xuXHRcdFx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkxO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0UHJvamVjdChwcm9qZWN0MSkge1xuXHRcdFx0XHR0aGlzLnByb2plY3QgPSBwcm9qZWN0MTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFN0YXR1cyhzdGF0dXMxKSB7XG5cdFx0XHRcdHRoaXMuc3RhdHVzID0gc3RhdHVzMTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHR0b2RvT2JqZWN0cy5wdXNoKHRvZG8pO1xuXHR9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHRvZG9PYmplY3RzO1xuIiwiaW1wb3J0IHByb2plY3RMaXN0IGZyb20gJy4uL2RhdGFTdG9yZXMvcHJvamVjdExpc3QnO1xuaW1wb3J0IHN0YXR1c0xpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9zdGF0dXNMaXN0JztcbmltcG9ydCBwcmlvcml0eUxpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9wcmlvcml0eUxpc3QnO1xuaW1wb3J0IHRvZG9PYmplY3RzIGZyb20gJy4uL2RhdGFTdG9yZXMvdG9kb09iamVjdHMnO1xuaW1wb3J0IHJlZHJhd1RvZG9MaXN0IGZyb20gJy4uL2hlbHBlcnMvcmVkcmF3VGFza0xpc3QnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycy9sb2NhbFN0b3JhZ2UnO1xuXG4vLyB0aGlzIGlzIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1vZGFsLCB0byBjcmVhdGUgYSBuZXcgdGFza1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5lZGl0VGFza0RpYWxvZy5jbGFzc05hbWUgPSAnZWRpdFRhc2tNb2RhbCc7XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGFza0RpYWxvZyk7XG5cbmNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGFza01vZGFsJyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmNsYXNzTmFtZSA9ICdlZGl0LXRvZG8tZm9ybSc7XG5mb3JtLm1ldGhvZCA9ICdkaWFsb2cnO1xucGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG5jb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xuZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG5mb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbmNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50aXRsZURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbmNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xudGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG50aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG50aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG50aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xudGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbmNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbmNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5kZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5kZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbmNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmR1ZURhdGVEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuXG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5kdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcbmR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaW9yaXR5RGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG5mb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5wcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5wcmlvcml0eUlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xucHJpb3JpdHlJbnB1dC50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG5wcmlvcml0eUxpc3QuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXHRwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59KTtcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4vLyBwcm9qZWN0IGRyb3Bkb3duIG1lbnVcblxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdERpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbnByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5wcm9qZWN0SW5wdXQubmFtZSA9ICdwcm9qZWN0JztcblxucHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0b3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcblx0cHJvamVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59KTtcbnByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuLy8gZW5kIHByb2plY3QgZHJvcGRvd24gbWVudVxuXG5jb25zdCBzdGF0dXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN0YXR1c0Rpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChzdGF0dXNEaXYpO1xuXG5jb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5zdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdTdGF0dXMnO1xuc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0xhYmVsKTtcblxuY29uc3Qgc3RhdHVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbnN0YXR1c0lucHV0LnRleHRDb250ZW50ID0gJ1N0YXR1cyc7XG5zdGF0dXNJbnB1dC5uYW1lID0gJ3N0YXR1cyc7XG5zdGF0dXNMaXN0LmZvckVhY2goKHN0YXR1cykgPT4ge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0b3B0aW9uLnRleHRDb250ZW50ID0gc3RhdHVzO1xuXHRzdGF0dXNJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xufSk7XG5zdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzSW5wdXQpO1xuXG5jb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuXG4vLyBlZGl0IC8gY2FuY2VsIGJ1dHRvbnMgd2l0aCBldmVudCBsaXN0ZW5lcnNcblxuY29uc3QgZWRpdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmVkaXRUYXNrLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5lZGl0VGFzay5jbGFzc05hbWUgPSAnc3VibWl0LWJ1dHRvbic7XG5lZGl0VGFzay50eXBlID0gJ2J1dHRvbic7XG5lZGl0VGFzay5uYW1lID0gJ2VkaXQnO1xuYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrSGFuZGxlcihpZCkge1xuXHRjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGBlZGl0VGFza0hhbmRsZXIgLSAgJHtpZH1gKTtcblx0XHRjb25zdCBjdXJyVG9kbyA9IHRvZG9PYmplY3RzLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcblx0XHRjdXJyVG9kby5zZXRUaXRsZShmb3JtLmVsZW1lbnRzLnRpdGxlLnZhbHVlKTtcblx0XHRjdXJyVG9kby5zZXREZXNjcmlwdGlvbihmb3JtLmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlKTtcblx0XHRjdXJyVG9kby5zZXREdWVEYXRlKGZvcm0uZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSk7XG5cdFx0Y3VyclRvZG8uc2V0UHJpb3JpdHkoZm9ybS5lbGVtZW50cy5wcmlvcml0eS52YWx1ZSk7XG5cdFx0Y3VyclRvZG8uc2V0UHJvamVjdChmb3JtLmVsZW1lbnRzLnByb2plY3QudmFsdWUpO1xuXHRcdGN1cnJUb2RvLnNldFN0YXR1cyhmb3JtLmVsZW1lbnRzLnN0YXR1cy52YWx1ZSk7XG5cdFx0cmVkcmF3VG9kb0xpc3QoKTtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblx0XHRmb3JtLnJlc2V0KCk7XG5cdFx0ZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcblx0fTtcblxuXHRlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcblxuXHRjb25zdCBjbG9zZURpYWxvZ0V2ZW50SGFuZGxlciA9ICgpID0+IHtcblx0XHRlZGl0VGFzay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpO1xuXHRcdGVkaXRUYXNrRGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xvc2UnLFxuXHRcdFx0Y2xvc2VEaWFsb2dFdmVudEhhbmRsZXJcblx0XHQpO1xuXHR9O1xuXG5cdGVkaXRUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgY2xvc2VEaWFsb2dFdmVudEhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVGb3JtV2l0aFRvZG9EYXRhKGlkKSB7XG5cdGNvbnNvbGUubG9nKGBwb3B1bGF0ZUZvcm0gLSAgJHtpZH1gKTtcblx0Y29uc3QgY3VyclRvZG8gPSB0b2RvT2JqZWN0cy5maW5kKCh0b2RvKSA9PiB0b2RvLmdldElkKCkgPT09IGlkKTtcblx0Zm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSA9IGN1cnJUb2RvLmdldFRpdGxlKCk7XG5cdGZvcm0uZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWUgPSBjdXJyVG9kby5nZXREZXNjcmlwdGlvbigpO1xuXHRmb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWUgPSBjdXJyVG9kby5nZXREdWVEYXRlKCk7XG5cdGZvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWUgPSBjdXJyVG9kby5nZXRQcmlvcml0eSgpO1xuXHRmb3JtLmVsZW1lbnRzLnByb2plY3QudmFsdWUgPSBjdXJyVG9kby5nZXRQcm9qZWN0KCk7XG5cdGZvcm0uZWxlbWVudHMuc3RhdHVzLnZhbHVlID0gY3VyclRvZG8uZ2V0U3RhdHVzKCk7XG59XG5cbmNvbnN0IGNhbmNlbEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNhbmNlbEVkaXQudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbmNhbmNlbEVkaXQuY2xhc3NOYW1lID0gJ2NhbmNlbC1idXR0b24nO1xuY2FuY2VsRWRpdC50eXBlID0gJ2NhbmNlbCc7XG5jYW5jZWxFZGl0Lm5hbWUgPSAnY2FuY2VsJztcbmJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5jZWxFZGl0KTtcblxuY2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0ZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBlZGl0VGFza0RpYWxvZztcbiIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcbmltcG9ydCB7IHVwZGF0ZU5hdlByb2plY3RMaXN0IH0gZnJvbSAnLi4vaGVscGVycy9kcmF3TmF2UHJvamVjdExpc3QnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycy9sb2NhbFN0b3JhZ2UnO1xuXG4vLyB0aGlzIGlzIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1vZGFsLCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbnByb2plY3REaWFsb2cuY2xhc3NOYW1lID0gJ21vZGFsJztcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaWFsb2cpO1xuXG5jb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uY2xhc3NOYW1lID0gJ3RvZG8tZm9ybSc7XG5mb3JtLm1ldGhvZCA9ICdkaWFsb2cnO1xucGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpdGxlJyk7XG50aXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG5mb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRpdGxlRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG5mb3JtLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG50aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbnRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbnRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG50aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0TmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuc3VibWl0TmV3UHJvamVjdC5jbGFzc05hbWUgPSAnc3VibWl0LWJ1dHRvbic7XG5zdWJtaXROZXdQcm9qZWN0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdE5ld1Byb2plY3QubmFtZSA9ICdzdWJtaXQnO1xuYnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdE5ld1Byb2plY3QpO1xuXG5jb25zdCBjYW5jZWxOZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jYW5jZWxOZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5jYW5jZWxOZXdQcm9qZWN0LmNsYXNzTmFtZSA9ICdjYW5jZWwtYnV0dG9uJztcbmNhbmNlbE5ld1Byb2plY3QudHlwZSA9ICdjYW5jZWwnO1xuY2FuY2VsTmV3UHJvamVjdC5uYW1lID0gJ2NhbmNlbCc7XG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsTmV3UHJvamVjdCk7XG5cbnN1Ym1pdE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdHByb2plY3RMaXN0LnB1c2godGl0bGVJbnB1dC52YWx1ZSk7XG5cdHVwZGF0ZU5hdlByb2plY3RMaXN0KCk7XG5cdGZvcm0ucmVzZXQoKTtcblx0cHJvamVjdERpYWxvZy5jbG9zZSgpO1xuXHR1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn0pO1xuXG5jYW5jZWxOZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRmb3JtLnJlc2V0KCk7XG5cdHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RGlhbG9nO1xuIiwiaW1wb3J0IHByb2plY3RMaXN0IGZyb20gJy4uL2RhdGFTdG9yZXMvcHJvamVjdExpc3QnO1xuaW1wb3J0IHN0YXR1c0xpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9zdGF0dXNMaXN0JztcbmltcG9ydCBwcmlvcml0eUxpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9wcmlvcml0eUxpc3QnO1xuaW1wb3J0IGNyZWF0ZVRvZG9PYmplY3QgZnJvbSAnLi4vaGVscGVycy90b2RvRmFjdG9yeSc7XG5pbXBvcnQgdG9kb09iamVjdHMgZnJvbSAnLi4vZGF0YVN0b3Jlcy90b2RvT2JqZWN0cyc7XG5pbXBvcnQgcmVkcmF3VG9kb0xpc3QgZnJvbSAnLi4vaGVscGVycy9yZWRyYXdUYXNrTGlzdCc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9oZWxwZXJzL2xvY2FsU3RvcmFnZSc7XG4vLyB0aGlzIGlzIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1vZGFsLCB0byBjcmVhdGUgYSBuZXcgdGFza1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbnRhc2tEaWFsb2cuY2xhc3NOYW1lID0gJ3Rhc2tNb2RhbCc7XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGlhbG9nKTtcblxuY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tNb2RhbCcpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5jbGFzc05hbWUgPSAndG9kby1mb3JtJztcbmZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG5wYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbnRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbmZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5jb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGl0bGVEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG5jb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xudGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xudGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbnRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5jb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVzY3JpcHRpb25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG5jb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbmRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG5jb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kdWVEYXRlRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG5mb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbmR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcblxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XG5kdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbmNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmlvcml0eURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbmNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xucHJpb3JpdHlJbnB1dC50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG5wcmlvcml0eUxpc3QuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXHRwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59KTtcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4vLyBwcm9qZWN0IGRyb3Bkb3duIG1lbnVcblxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdERpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbnByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5wcm9qZWN0SW5wdXQubmFtZSA9ICdwcm9qZWN0JztcbnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xufSk7XG5wcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbi8vIGVuZCBwcm9qZWN0IGRyb3Bkb3duIG1lbnVcblxuY29uc3Qgc3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdGF0dXNEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoc3RhdHVzRGl2KTtcblxuY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzJztcbnN0YXR1c0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG5cbmNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5zdGF0dXNJbnB1dC50ZXh0Q29udGVudCA9ICdTdGF0dXMnO1xuc3RhdHVzTGlzdC5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHN0YXR1cztcblx0c3RhdHVzSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn0pO1xuc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0lucHV0KTtcblxuLy8gc3VibWl0IC8gY2FuY2VsIGJ1dHRvbnMgd2l0aCBldmVudCBsaXN0ZW5lcnNcblxuY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuY29uc3Qgc3VibWl0TmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0TmV3VGFzay50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuc3VibWl0TmV3VGFzay5jbGFzc05hbWUgPSAnc3VibWl0LWJ1dHRvbic7XG5zdWJtaXROZXdUYXNrLnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdE5ld1Rhc2submFtZSA9ICdzdWJtaXQnO1xuYnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdE5ld1Rhc2spO1xuXG5jb25zdCBjYW5jZWxOZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jYW5jZWxOZXdUYXNrLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5jYW5jZWxOZXdUYXNrLmNsYXNzTmFtZSA9ICdjYW5jZWwtYnV0dG9uJztcbmNhbmNlbE5ld1Rhc2sudHlwZSA9ICdjYW5jZWwnO1xuY2FuY2VsTmV3VGFzay5uYW1lID0gJ2NhbmNlbCc7XG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsTmV3VGFzayk7XG5cbnN1Ym1pdE5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvT2JqZWN0KFxuXHRcdHRpdGxlSW5wdXQudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcblx0XHRkdWVEYXRlSW5wdXQudmFsdWUsXG5cdFx0cHJpb3JpdHlJbnB1dC52YWx1ZSxcblx0XHRwcm9qZWN0SW5wdXQudmFsdWUsXG5cdFx0c3RhdHVzSW5wdXQudmFsdWVcblx0KTtcblx0dG9kb09iamVjdHMucHVzaChuZXdUb2RvKTtcblx0dXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdGNvbnNvbGUubG9nKHsgdG9kb09iamVjdHMgfSk7XG5cblx0Zm9ybS5yZXNldCgpO1xuXHR0YXNrRGlhbG9nLmNsb3NlKCk7XG5cdHJlZHJhd1RvZG9MaXN0KCk7XG59KTtcblxuY2FuY2VsTmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Zm9ybS5yZXNldCgpO1xuXHR0YXNrRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0RpYWxvZztcbiIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcbmltcG9ydCB7IHJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHJlZnJlc2hQcm9qZWN0TGlzdCBmcm9tICcuL3JlZnJlc2hQcm9qZWN0TGlzdCc7XG5pbXBvcnQgcmVkcmF3VG9kb0xpc3QgZnJvbSAnLi9yZWRyYXdUYXNrTGlzdCc7XG5cbmZ1bmN0aW9uIGRvbUxvYWRlZChjYWxsYmFjaykge1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTmF2UHJvamVjdExpc3QoKSB7XG5cdGRvbUxvYWRlZCgoKSA9PiB7XG5cdFx0Y29uc3QgbGlzdFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLm5hdi1wcm9qZWN0LWxpc3QnXG5cdFx0KVswXTtcblxuXHRcdHdoaWxlIChsaXN0UGFyZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdGxpc3RQYXJlbnQucmVtb3ZlQ2hpbGQobGlzdFBhcmVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0bGluay50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1wcm9qZWN0LWl0ZW0nKTtcblx0XHRcdGxpc3RQYXJlbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRcdFx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0XHRpZiAocHJvamVjdCAhPT0gJ0FsbCBUYXNrcycgJiYgcHJvamVjdCAhPT0gJ0RlZmF1bHQnKSB7XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcblx0XHRcdFx0ZGVsZXRlQnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuXHRcdFx0XHRkZWxldGVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXRpdGxlLXNlbGVjdGVkKSc7XG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzAuMnJlbSc7XG5cblx0XHRcdFx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5hdlBhbmVDbGlja3MoKSB7XG5cdGRvbUxvYWRlZCgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LXByb2plY3QtbGlzdCcpWzBdKTtcblx0Y29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtcHJvamVjdC1saXN0Jyk7XG5cdHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuXHRwYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHQoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG5cdFx0XHRpZiAocHJvamVjdExpc3QuaW5jbHVkZXMoY2xpY2tlZFByb2plY3QpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGAke2NsaWNrZWRQcm9qZWN0fSAtIHByb2plY3QgZXhpc3RzYCk7XG5cdFx0XHRcdHJlZHJhd1RvZG9MaXN0KGNsaWNrZWRQcm9qZWN0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpKSB7XG5cdFx0XHRcdGNvbnN0IHBhcmVudFRleHRDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS50ZXh0Q29udGVudFxuXHRcdFx0XHRcdC50cmltKClcblx0XHRcdFx0XHQucmVwbGFjZShlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCksICcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGFyZW50VGV4dENvbnRlbnQpO1xuXHRcdFx0XHRyZW1vdmVQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZShwYXJlbnRUZXh0Q29udGVudCk7XG5cdFx0XHRcdHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2xpY2tlZFByb2plY3Q7XG5cdFx0fSxcblx0XHR7IGNhcHR1cmU6IHRydWUgfVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVOYXZQYW5lQ2xpY2tzO1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtLCB0ZXh0Q29udCwgYXR0cmlidXRlcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcblx0T2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdH0pO1xuXHRlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IHRvZG9PYmplY3RzIGZyb20gJy4uL2RhdGFTdG9yZXMvdG9kb09iamVjdHMnO1xuXG5mdW5jdGlvbiBmaWx0ZXJUYXNrcyhwcm9qZWN0KSB7XG5cdGNvbnN0IGZpbHRlcmVkVGFza3MgPSB0b2RvT2JqZWN0cy5maWx0ZXIoXG5cdFx0KHRvZG8pID0+IHRvZG8ucHJvamVjdCA9PT0gcHJvamVjdFxuXHQpO1xuXHRpZiAocHJvamVjdCA9PT0gJ0FsbCBUYXNrcycpIHtcblx0XHRyZXR1cm4gdG9kb09iamVjdHM7XG5cdH1cblxuXHRyZXR1cm4gZmlsdGVyZWRUYXNrcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZpbHRlcmVkVGFza3MocHJvamVjdCA9ICdBbGwgVGFza3MnKSB7XG5cdGNvbnN0IGZpbHRlcmVkVGFza3MgPSBmaWx0ZXJUYXNrcyhwcm9qZWN0KTtcblx0cmV0dXJuIGZpbHRlcmVkVGFza3M7XG59XG5cbi8qIGNvbnN0IGFjdGl2ZVRhc2tzID0gZGlzcGxheUZpbHRlcmVkVGFza3MoXG5cdGNsaWNrZWRQcm9qZWN0IHx8ICdBbGwgVGFza3MnXG4pOyAqL1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5RmlsdGVyZWRUYXNrcztcbiIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcbmltcG9ydCB0b2RvT2JqZWN0cyBmcm9tICcuLi9kYXRhU3RvcmVzL3RvZG9PYmplY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9PYmplY3RzJywgSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCkge1xuXHRKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcblx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb09iamVjdHMnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtKSB7XG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0pO1xuXHRnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuXHRjb25zb2xlLmxvZyhgbG9jYWxTdG9yYWdlIGl0ZW0gcmVtb3ZlZDogJHtpdGVtfWApO1xufVxuXG4vLyB3aXJlIHRvIGNsZWFyTG9jYWxTdG9yYWdlQnRuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGNsZWFyZWQnKTtcbn1cblxuLy8gcnVuIG9uY2UgYXQgcGFnZSBsb2FkIGluIGluZGV4LmpzXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG5cdGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuXHRcdGNvbnNvbGUubG9nKGB0aGVyZSBpcyBkYXRhIGluIGxvY2FsU3RvcmFnZWApO1xuXHRcdGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBpcyBlbXB0eScpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUxvY2FsU3RvcmFnZShpZCkge1xuXHRjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9PYmplY3RzJykpIHx8IFtdO1xuXHRjb25zb2xlLmxvZyhpdGVtcyk7XG5cdGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cdGNvbnNvbGUubG9nKGluZGV4KTtcblx0aXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9PYmplY3RzJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKHByb2plY3QpIHtcblx0Ly8gcmVtb3ZlIGZyb20gcHJvamVjdExpc3Rcblx0Y29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKSB8fCBbXTtcblx0Y29uc29sZS5sb2coaXRlbXMpO1xuXHRjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gcHJvamVjdCk7XG5cdGNvbnNvbGUubG9nKGluZGV4KTtcblx0aXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcblxuXHQvLyBSZW1vdmUgdGhlIG9iamVjdHMgdGhhdCBoYXZlIHRoYXQgcHJvamVjdCBuYW1lIGZyb20gdG9kb09iamVjdHMgYXJyYXkuXG5cdGNvbnN0IHRvZG9JdGVtcyA9XG5cdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb09iamVjdHMnKSkgfHwgW107XG5cdGNvbnNvbGUubG9nKHRvZG9JdGVtcyk7XG5cblx0bGV0IHRvZG9JbmRleCA9IDA7XG5cdHdoaWxlICh0b2RvSW5kZXggIT09IC0xKSB7XG5cdFx0dG9kb0luZGV4ID0gdG9kb0l0ZW1zLmZpbmRJbmRleChcblx0XHRcdChpdGVtKSA9PiBpdGVtLnByb2plY3QgPT09IHByb2plY3Rcblx0XHQpO1xuXHRcdHRvZG9JdGVtcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcblx0fVxuXHRjb25zb2xlLmxvZyh0b2RvSW5kZXgpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb09iamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbXMpKTtcbn1cbiIsImltcG9ydCB0YXNrVmlldyBmcm9tICcuLi92aWV3L3Rhc2tWaWV3JztcbmltcG9ydCBkaXNwbGF5RmlsdGVyZWRUYXNrcyBmcm9tICcuL2ZpbHRlclRhc2tzJztcblxuZnVuY3Rpb24gcmVkcmF3VG9kb0xpc3QoZmlsdGVyKSB7XG5cdGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdzZWN0aW9uLnRvZG8tY29udGFpbmVyLWhvbGRlcidcblx0KTtcblxuXHRjb25zdCB0b2RvQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdoZWFkZXIubWFpbi1oZWFkZXInXG5cdCk7XG5cblx0dG9kb0NvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7XG5cdFx0ZmlsdGVyIHx8ICdBbGwgVGFza3MnXG5cdH1gO1xuXG5cdHdoaWxlICh0b2RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcblx0XHR0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIuZmlyc3RDaGlsZCk7XG5cdH1cblx0Ly8gaG93IGRvIEkgZ2V0IHRoZSBwcm9qZWN0IG5hbWUgIGZyb20gdGhlIHZhcmlhYmxlICdjbGlja2VkUHJvamVjdCc/XG5cdGNvbnN0IGZpbHRlcmVkVGFza3MgPSBkaXNwbGF5RmlsdGVyZWRUYXNrcyhmaWx0ZXIgfHwgJ0FsbCBUYXNrcycpO1xuXG5cdGZpbHRlcmVkVGFza3MuZm9yRWFjaCgodG9kbykgPT4ge1xuXHRcdHRhc2tWaWV3KFxuXHRcdFx0J3NlY3Rpb24udG9kby1jb250YWluZXItaG9sZGVyJyxcblx0XHRcdCdhcnRpY2xlJyxcblx0XHRcdHRvZG8uaWQsXG5cdFx0XHR0b2RvLnRpdGxlLFxuXHRcdFx0dG9kby5kZXNjcmlwdGlvbixcblx0XHRcdHRvZG8uZHVlRGF0ZSxcblx0XHRcdHRvZG8ucHJpb3JpdHksXG5cdFx0XHR0b2RvLnByb2plY3QsXG5cdFx0XHR0b2RvLnN0YXR1cyxcblx0XHRcdHRvZG8uZWRpdCxcblx0XHRcdHRvZG8ucmVtb3ZlXG5cdFx0KTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHJhd1RvZG9MaXN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcblxuLy8gZm9yIHRoZSBuZXcgdGFzayBkaWFsb2dcblxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RMaXN0KCkge1xuXHRjb25zdCBwcm9qZWN0TGlzdFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0J3NlbGVjdFtuYW1lPXByb2plY3RdJ1xuXHQpO1xuXG5cdHdoaWxlIChwcm9qZWN0TGlzdFBhcmVudC5maXJzdENoaWxkKSB7XG5cdFx0cHJvamVjdExpc3RQYXJlbnQucmVtb3ZlQ2hpbGQocHJvamVjdExpc3RQYXJlbnQuZmlyc3RDaGlsZCk7XG5cdH1cblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdFx0cHJvamVjdExpc3RQYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZnJlc2hQcm9qZWN0TGlzdDtcbiIsImltcG9ydCB0b2RvT2JqZWN0cyBmcm9tICcuLi9kYXRhU3RvcmVzL3RvZG9PYmplY3RzJztcbmltcG9ydCByZWRyYXdUb2RvTGlzdCBmcm9tICcuL3JlZHJhd1Rhc2tMaXN0JztcbmltcG9ydCB7IHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5mdW5jdGlvbiByZW1vdmVUaGVUYXNrKGlkKSB7XG5cdGNvbnN0IGluZGV4ID0gdG9kb09iamVjdHMuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG5cdHRvZG9PYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKGlkKTtcblx0cmVkcmF3VG9kb0xpc3QoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVRoZVRhc2s7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZnVuY3Rpb24gY3JlYXRlVG9kb09iamVjdChcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0cHJvamVjdCxcblx0c3RhdHVzXG4pIHtcblx0Y29uc3QgdG9kb09iamVjdCA9IHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdHByb2plY3QsXG5cdFx0c3RhdHVzLFxuXHRcdGlkOiB1dWlkdjQoKSxcblxuXHRcdGdldFRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdFx0fSxcblxuXHRcdGdldERlc2NyaXB0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdFx0fSxcblxuXHRcdGdldER1ZURhdGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHRcdH0sXG5cblx0XHRnZXRQcmlvcml0eSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHRcdH0sXG5cblx0XHRnZXRQcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvamVjdDtcblx0XHR9LFxuXG5cdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdHVzO1xuXHRcdH0sXG5cblx0XHRnZXRJZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkO1xuXHRcdH0sXG5cblx0XHRzZXRUaXRsZSh0aXRsZTEpIHtcblx0XHRcdHRoaXMudGl0bGUgPSB0aXRsZTE7XG5cdFx0fSxcblxuXHRcdHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uMSkge1xuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uMTtcblx0XHR9LFxuXG5cdFx0c2V0RHVlRGF0ZShkdWVEYXRlMSkge1xuXHRcdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTE7XG5cdFx0fSxcblxuXHRcdHNldFByaW9yaXR5KHByaW9yaXR5MSkge1xuXHRcdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5MTtcblx0XHR9LFxuXG5cdFx0c2V0UHJvamVjdChwcm9qZWN0MSkge1xuXHRcdFx0dGhpcy5wcm9qZWN0ID0gcHJvamVjdDE7XG5cdFx0fSxcblxuXHRcdHNldFN0YXR1cyhzdGF0dXMxKSB7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1czE7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gdG9kb09iamVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb09iamVjdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHBhZ2VDb250YWluZXIgZnJvbSAnLi92aWV3L3BsLXBhZ2VDb250YWluZXInO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL3ZpZXcvcGwtaGVhZGVyJztcbmltcG9ydCB7XG5cdGZvb3RlclRhZyxcblx0Zm9vdGVyLFxuXHRjbGVhckxvY2FsU3RvcmFnZUJ0bixcblx0Y2xlYXJCdG5JY29uLFxufSBmcm9tICcuL3ZpZXcvcGwtZm9vdGVyJztcbmltcG9ydCB7IG1haW4gfSBmcm9tICcuL3ZpZXcvcGwtbWFpbic7XG5pbXBvcnQgbWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvcGwtbWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgaGFuZGxlTmF2UGFuZUNsaWNrcywge1xuXHR1cGRhdGVOYXZQcm9qZWN0TGlzdCxcbn0gZnJvbSAnLi9oZWxwZXJzL2RyYXdOYXZQcm9qZWN0TGlzdCc7XG5pbXBvcnQge1xuXHRuYXYsXG5cdG5hdlRpdGxlLFxuXHRhZGRQcm9qZWN0QnV0dG9uLFxuXHRhZGRQcm9qZWN0QnV0dG9uSW1nLFxuXHRuYXZQcm9qZWN0TGlzdCxcblx0bmF2UHJvamVjdEl0ZW0sXG5cdGFkZFRhc2tCdXR0b24sXG5cdGFkZFRhc2tCdXR0b25JbWcsXG59IGZyb20gJy4vdmlldy9wbC1uYXYnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBkaXNwbGF5RmlsdGVyZWRUYXNrcyBmcm9tICcuL2hlbHBlcnMvZmlsdGVyVGFza3MnO1xuXG5pbXBvcnQge1xuXHRoZWFkZXJDb250LFxuXHRoZWFkZXJJY29uLFxuXHRoZWFkZXJUYWcsXG59IGZyb20gJy4vdmlldy9wbC1oZWFkZXItY29udCc7XG5pbXBvcnQgcmVmcmVzaFByb2plY3RMaXN0IGZyb20gJy4vaGVscGVycy9yZWZyZXNoUHJvamVjdExpc3QnO1xuaW1wb3J0IHJlZHJhd1RvZG9MaXN0IGZyb20gJy4vaGVscGVycy9yZWRyYXdUYXNrTGlzdCc7XG5pbXBvcnQgeyBjaGVja0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vaGVscGVycy9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xucGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckljb24pO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnQpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRhZyk7XG5cbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxubmF2LmFwcGVuZENoaWxkKG5hdlRpdGxlKTtcbm5hdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbmFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbkltZyk7XG5uYXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5hZGRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25JbWcpO1xuXG5uYXZUaXRsZS5hcHBlbmRDaGlsZChuYXZQcm9qZWN0TGlzdCk7XG5uYXZQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuYXZQcm9qZWN0SXRlbSk7XG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUYWcpO1xuZm9vdGVyLmFwcGVuZENoaWxkKGNsZWFyTG9jYWxTdG9yYWdlQnRuKTtcbmNsZWFyTG9jYWxTdG9yYWdlQnRuLmFwcGVuZENoaWxkKGNsZWFyQnRuSWNvbik7XG5cbmNoZWNrTG9jYWxTdG9yYWdlKCk7XG5cbnVwZGF0ZU5hdlByb2plY3RMaXN0KCk7XG5cbnJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuXG5yZWRyYXdUb2RvTGlzdCgpO1xuXG5oYW5kbGVOYXZQYW5lQ2xpY2tzKCk7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRNYWtlcic7XG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pY29ucy9kZWxldGUuc3ZnJztcbmltcG9ydCB7IGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycy9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbm15SWNvbi5zcmMgPSBpY29uO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyVGFnID0gY3JlYXRlRWxlbWVudChcblx0J3AnLFxuXHQnwqkgMjAyMywgYnkgSnVzdFdhdmVUaGluZ3MnLFxuXHR7IGNsYXNzOiAnZm9vdGVyLXRhZycgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCB7XG5cdGNsYXNzOiAnZm9vdGVyJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJMb2NhbFN0b3JhZ2VCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnJywge1xuXHRjbGFzczogJ2NsZWFyLWxvY2FsLXN0b3JhZ2UnLFxuXHR0eXBlOiAnYnV0dG9uJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJCdG5JY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHtcblx0Y2xhc3M6ICdjbGVhckJ0bkljb24nLFxuXHRzcmM6IGljb24sXG59KTtcblxuY2xlYXJMb2NhbFN0b3JhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNsZWFyTG9jYWxTdG9yYWdlKCk7XG5cdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9lbGVtZW50TWFrZXInO1xuaW1wb3J0IGljb24gZnJvbSAnLi4vaWNvbnMvdG9kb0FwcEljb24uc3ZnJztcblxuY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG5cbm15SWNvbi5zcmMgPSBpY29uO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ1lvdXIgVG9kbyBMaXN0IScsIHtcblx0Y2xhc3M6ICd0aXRsZScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywge1xuXHRzcmM6IGljb24sXG59KTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlclRhZyA9IGNyZWF0ZUVsZW1lbnQoXG5cdCdoMicsXG5cdCcgLSBNYWtlIEl0IGEgR29vZCBEYXkgdG8gYmUgR3JlYXQhJyxcblx0eyBjbGFzczogJ2hlYWRlcicgfVxuKTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudE1ha2VyJztcblxuY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgJycsIHtcblx0Y2xhc3M6ICdoZWFkZXInLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudE1ha2VyJztcbmltcG9ydCByZW1vdmVUaGVUYXNrIGZyb20gJy4uL2hlbHBlcnMvcmVtb3ZlVGFzayc7XG5pbXBvcnQgcmVkcmF3VG9kb0xpc3QgZnJvbSAnLi4vaGVscGVycy9yZWRyYXdUYXNrTGlzdCc7XG5pbXBvcnQgcmVmcmVzaFByb2plY3RMaXN0IGZyb20gJy4uL2hlbHBlcnMvcmVmcmVzaFByb2plY3RMaXN0JztcbmltcG9ydCBlZGl0VGFza0RpYWxvZywge1xuXHRlZGl0VGFza0hhbmRsZXIsXG5cdHBvcHVsYXRlRm9ybVdpdGhUb2RvRGF0YSxcbn0gZnJvbSAnLi4vZGlhbG9ncy9lZGl0VGFza0RpYWxvZyc7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICcnLCB7XG5cdGNsYXNzOiAnbWFpbicsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1haW5IZWFkZXIgPSBjcmVhdGVFbGVtZW50KFxuXHQnSGVhZGVyJyxcblx0J1Byb2plY3Q6IERlZmF1bHQnLFxuXHR7IGNsYXNzOiAnbWFpbi1oZWFkZXInIH1cbik7XG5tYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG5jb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG5jb25zdCBoZWFkZXJDZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXJDZWxsMS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG5jb25zdCBoZWFkZXJDZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXJDZWxsMi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbmNvbnN0IGhlYWRlckNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbmhlYWRlckNlbGwzLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcblxuY29uc3QgaGVhZGVyQ2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuaGVhZGVyQ2VsbDQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuXG5jb25zdCBoZWFkZXJDZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXJDZWxsNS50ZXh0Q29udGVudCA9ICdTdGF0dXMnO1xuXG5jb25zdCBoZWFkZXJDZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5cbmNvbnN0IGhlYWRlckNlbGw3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcblxudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDEpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDIpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDMpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDQpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDUpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDYpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDcpO1xuXG5tYWluLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuLy8gdGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQodGhlYWQpO1xuY29uc3QgYm9keVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5ib2R5U2VjdGlvbi5jbGFzc05hbWUgPSAndG9kby1jb250YWluZXItaG9sZGVyJztcblxubWFpbi5hcHBlbmRDaGlsZChib2R5U2VjdGlvbik7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIC8gZXZlbnQgZGVsZWdhdGlvbiBmb3IgdGFzayB2aWV3XG5ib2R5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tcmVtb3ZlJykpIHtcblx0XHRjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXHRcdHJlbW92ZVRoZVRhc2soaWQpO1xuXHR9XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tZWRpdCcpKSB7XG5cdFx0Y29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblx0XHQvLyBpbiBjYXNlIHVzZXIgYWRkZWQgYSBuZXcgcHJvamVjdCBhbmQgd2FudHMgdG8gYXNzaWduIGl0IHRvIHRoZSB0YXNrXG5cdFx0cmVmcmVzaFByb2plY3RMaXN0KCk7XG5cdFx0ZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG5cdFx0cG9wdWxhdGVGb3JtV2l0aFRvZG9EYXRhKGlkKTtcblx0XHRlZGl0VGFza0hhbmRsZXIoaWQpO1xuXHRcdHJlZHJhd1RvZG9MaXN0KCk7XG5cdH1cbn0pO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9lbGVtZW50TWFrZXInO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHtcblx0Y2xhc3M6ICdtYWluQ29udGFpbmVyJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGFpbmVyO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9lbGVtZW50TWFrZXInO1xuaW1wb3J0IGFkZEJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvYWRkX3Byb2plY3Quc3ZnJztcbmltcG9ydCBhZGRUYXNrSWNvbiBmcm9tICcuLi9pY29ucy9hZGRfdG9kby5zdmcnO1xuaW1wb3J0IHByb2plY3REaWFsb2cgZnJvbSAnLi4vZGlhbG9ncy9uZXdQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB0YXNrRGlhbG9nIGZyb20gJy4uL2RpYWxvZ3MvbmV3VGFza0RpYWxvZyc7XG5pbXBvcnQgcmVmcmVzaFByb2plY3RMaXN0IGZyb20gJy4uL2hlbHBlcnMvcmVmcmVzaFByb2plY3RMaXN0JztcbmltcG9ydCB7IHVwZGF0ZU5hdlByb2plY3RMaXN0IH0gZnJvbSAnLi4vaGVscGVycy9kcmF3TmF2UHJvamVjdExpc3QnO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuYWRkUHJvamVjdEJ1dHRvbkljb24uc3JjID0gYWRkQnV0dG9uSWNvbjtcblxuY29uc3QgYWRkVGFza0J1dHRvbkljb24gPSBuZXcgSW1hZ2UoKTtcbmFkZFRhc2tCdXR0b25JY29uLnNyYyA9IGFkZFRhc2tJY29uO1xuXG5leHBvcnQgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHtcblx0Y2xhc3M6ICduYXYnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBuYXZUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ3RpdGxlJywgJ1Byb2plY3RzJywge1xuXHRjbGFzczogJ25hdi10aXRsZScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KFxuXHQnYnV0dG9uJyxcblx0J05ldyBQcm9qZWN0Jyxcblx0e1xuXHRcdGNsYXNzOiAnYWRkLXByb2plY3QtYnV0dG9uJyxcblx0fVxuKTtcblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0dXBkYXRlTmF2UHJvamVjdExpc3QoKTtcblx0cHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCB7XG5cdHNyYzogYWRkQnV0dG9uSWNvbixcblx0Y2xhc3M6ICdidXR0b24taW1nJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbmF2UHJvamVjdExpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCB7XG5cdGNsYXNzOiAnbmF2LXByb2plY3QtbGlzdCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IG5hdlByb2plY3RJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywge1xuXHRjbGFzczogJ25hdi1wcm9qZWN0LWl0ZW0nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ05ldyBUYXNrJywge1xuXHRjbGFzczogJ2FkZC1wcm9qZWN0LWJ1dHRvbicsXG59KTtcblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0cmVmcmVzaFByb2plY3RMaXN0KCk7XG5cdHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdXR0b25JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywge1xuXHRzcmM6IGFkZFRhc2tJY29uLFxuXHRjbGFzczogJ2J1dHRvbi1pbWcnLFxufSk7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRNYWtlcic7XG5cbmNvbnN0IHBhZ2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywge1xuXHRjbGFzczogJ3BhZ2VDb250YWluZXInLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VDb250YWluZXI7XG4iLCJmdW5jdGlvbiB0YXNrVmlldyhcblx0YXBwZW5kVG8sXG5cdGVsZW0sXG5cdGlkLFxuXHR0aXRsZSA9ICdkZWZhdWx0IHRpdGxlJyxcblx0ZGVzY3JpcHRpb24gPSAnZGVmYXVsdCBkZXNjcmlwdGlvbicsXG5cdGR1ZURhdGUgPSAnZGVmYXVsdCBkdWUgZGF0ZScsXG5cdHByaW9yaXR5ID0gJ2RlZmF1bHQgcHJpb3JpdHknLFxuXHRwcm9qZWN0ID0gJ2RlZmF1bHQgcHJvamVjdCcsXG5cdHN0YXR1cyA9ICdkZWZhdWx0IHN0YXR1cycsXG5cdGVkaXQgPSAnZWRpdCcsXG5cdHJlbW92ZSA9ICdyZW1vdmUnXG4pIHtcblx0Y29uc3QgdG9BcHBlbmRUbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7YXBwZW5kVG99YCk7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAndG9kby1jb250YWluZXInO1xuXG5cdGNvbnN0IHByb3BzID0ge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdGNsYXNzTmFtZTogJ3RvZG8tdGl0bGUnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHRpdGxlLFxuXHRcdH0sXG5cdFx0ZGVzY3JpcHRpb246IHtcblx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1kZXNjcmlwdGlvbicsXG5cdFx0XHR0ZXh0Q29udGVudDogZGVzY3JpcHRpb24sXG5cdFx0fSxcblx0XHRkdWVEYXRlOiB7XG5cdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdGNsYXNzTmFtZTogJ3RvZG8tZHVlRGF0ZScsXG5cdFx0XHR0ZXh0Q29udGVudDogZHVlRGF0ZSxcblx0XHR9LFxuXHRcdHByaW9yaXR5OiB7XG5cdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdGNsYXNzTmFtZTogJ3RvZG8tcHJpb3JpdHknLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHByaW9yaXR5LFxuXHRcdH0sXG5cdFx0cHJvamVjdDoge1xuXHRcdFx0dHlwZTogJ2RpdicsXG5cdFx0XHRjbGFzc05hbWU6ICd0b2RvLXByb2plY3QnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHByb2plY3QsXG5cdFx0fSxcblx0XHRzdGF0dXM6IHtcblx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1zdGF0dXMnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHN0YXR1cyxcblx0XHR9LFxuXHRcdGVkaXQ6IHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1lZGl0Jyxcblx0XHRcdHRleHRDb250ZW50OiBlZGl0LFxuXHRcdFx0ZGF0YUF0dHJpYnV0ZTogaWQsXG5cdFx0fSxcblx0XHRyZW1vdmU6IHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1yZW1vdmUnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHJlbW92ZSxcblx0XHRcdGRhdGFBdHRyaWJ1dGU6IGlkLFxuXHRcdH0sXG5cdH07XG5cblx0T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdHByb3BzW2tleV0udHlwZSB8fCBlbGVtXG5cdFx0KTtcblx0XHRlbGVtZW50VHlwZS5jbGFzc05hbWUgPSBwcm9wc1trZXldLmNsYXNzTmFtZTtcblx0XHRlbGVtZW50VHlwZS50ZXh0Q29udGVudCA9IHByb3BzW2tleV0udGV4dENvbnRlbnQ7XG5cdFx0aWYgKHByb3BzW2tleV0uZGF0YUF0dHJpYnV0ZSkge1xuXHRcdFx0ZWxlbWVudFR5cGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvcHNba2V5XS5kYXRhQXR0cmlidXRlKTtcblx0XHR9XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRUeXBlKTtcblx0fSk7XG5cdHRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza1ZpZXc7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=