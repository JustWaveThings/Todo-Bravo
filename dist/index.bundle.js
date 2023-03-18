"use strict";
(self["webpackChunktodo_bravo"] = self["webpackChunktodo_bravo"] || []).push([
  ["index"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/Roboto-Bold.ttf */ "./src/fonts/Roboto-Bold.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/Pacifico-Regular.ttf */ "./src/fonts/Pacifico-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ":root {\n\t/* from coolors */\n\t--lapis-lazuli: hsla(210, 50%, 40%, 1);\n\t--carolina-blue: hsla(201, 51%, 69%, 1);\n\t--charcoal: hsla(203, 30%, 26%, 1);\n\t--light-green: hsla(112, 60%, 74%, 1);\n\t--nyanza: hsla(124, 64%, 91%, 1);\n\n\t/* fonts  */\n\t--title-font: 'roboto-bold', cursive;\n\t--style-font: 'pacifico', cursive;\n\n\t/* color assignments */\n\t--lightest-background: var(--nyanza);\n\t--light-background: var(--carolina-blue);\n\t--title-selected: var(--light-green);\n\t--dark-background: var(--charcoal);\n\t--alt-background: var(--lapis-lazuli);\n\n\t/* opacity  */\n\t--opacity: 0.7;\n\n\t/* shadows */\n\t--standard-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n\t--title-shadow-standard: 2px 2px 2px rgba(0, 0, 0, 0.3);\n\t--title-shadow-emphasis: 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n\tfont-family: 'roboto-bold';\n\tsrc: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ");\n\tformat: ('ttf');\n}\n@font-face {\n\tfont-family: 'pacifico';\n\tsrc: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_1___ +
            ");\n\tformat: ('ttf');\n}\n\nbody {\n\tfont-family: helvetica;\n\tcolor: white;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100svh;\n}\n\n.main,\n.footer,\n.nav,\n.pageContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.pageContainer {\n\twidth: 100%;\n\theight: 100dvh;\n}\n/* container */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tbackground-color: var(--alt-background);\n\tgap: 2rem;\n}\n/* app name */\nheader > h1 {\n\tcolor: var(--title-selected);\n\tfont-family: var(--title-font);\n\tfont-size: 3rem;\n\topacity: var(--opacity);\n\ttext-shadow: var(--title-shadow-standard);\n}\n\nheader > img {\n\tdisplay: flex;\n\theight: 55px;\n\tmargin-left: 2rem;\n}\n/* quote */\nh2.header {\n\tdisplay: flex;\n\topacity: 0.9;\n\tfont-family: var(--style-font);\n\ttext-shadow: var(--title-shadow-emphasis);\n}\n\n.footer {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 5%;\n\tbackground-color: var(--alt-background);\n\talign-self: flex-end;\n\tposition: relative;\n}\n\n.footer-tag {\n\tfont-size: 0.7rem;\n\tcolor: var(--title-selected);\n\topacity: var(--opacity);\n}\n\n.clear-local-storage {\n\tappearance: none;\n\tborder: none;\n\tbackground-color: transparent;\n}\n\n.clear-local-storage,\n.clear-local-storage > img {\n\theight: 30px;\n\tposition: absolute;\n\tright: 1%;\n\tbottom: 6%;\n}\n\n.clear-local-storage > img:hover,\n.clear-local-storage > img:focus {\n\tbackground-color: red;\n}\n\n.clear-local-storage:hover::before {\n\tcontent: 'This will clear ALL app data in local storage. No recovery possible.';\n\tdisplay: inline-block;\n\tbackground-color: black;\n\tcolor: var(--light-green);\n\tpadding: 0.5em;\n\tborder-radius: 0.25em;\n\tfont-size: 1rem;\n\twhite-space: break-spaces;\n\tz-index: 1;\n\ttransform: translatey(-125%);\n\tbox-shadow: none !important;\n\topacity: var(--opacity);\n}\n/* holds nav and main */\n.mainContainer {\n\tdisplay: flex;\n\tjustify-content: stretch;\n\theight: 90%;\n}\n/* container */\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tflex-grow: 1;\n\tbackground-color: var(--dark-background);\n}\n\n/* this is the project label at the top of the page */\n.main-header {\n\tmargin: 1.5rem;\n\tpadding: 1rem 2rem 1rem 2rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n/* task container 'container' */\ndiv.mainContainer > section > section {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 95%;\n\tmargin-left: 1.5rem;\n}\n\n/* column labels  */\nbody > div > div.mainContainer > section > header:nth-child(2) {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 1rem;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n\nheader > th {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n}\n\nheader > th:first-child {\n\tflex-basis: 10%;\n}\n\nheader > th:nth-child(2) {\n\tflex-basis: 40%;\n\tflex-grow: 1;\n}\n\nheader > th:nth-child(3) {\n\tmargin-left: auto;\n}\n\nheader > th:last-child {\n\tmargin-right: 12%;\n}\n\nsection.todo-container-holder {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: space-between;\n\tmargin: 1rem;\n}\narticle.todo-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-wrap: nowrap;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n\topacity: var(--opacity);\n\tbackground-color: hsla(112, 60%, 74%, 0.1);\n\tborder-radius: 0.5rem;\n}\n\narticle.todo-container:hover,\narticle.todo-container:focus {\n\tbackground-color: hsla(112, 60%, 74%, 0.2);\n\ttransition: background-color 350ms ease-in-out;\n\topacity: 1;\n}\n\n/* flexbox the display of the todo-containers */\n\n.todo-title {\n\ttext-overflow: ellipsis;\n\tflex-basis: 10%;\n}\n\n.todo-description {\n\tflex-basis: 40%;\n\ttext-overflow: ellipsis;\n}\n\n.todo-dueDate {\n\tflex-basis: 6%;\n}\n\n.todo-priority {\n\tflex-basis: 4%;\n}\n\n.todo-status {\n\tflex-basis: 6%;\n}\n\n.todo-edit {\n\tflex-basis: 4;\n}\n\n.todo-remove {\n\tflex-basis: 4%;\n}\n\n/* hides project from display in the table */\n.todo-project {\n\tdisplay: none;\n}\n\n/* nav section  */\n\n.nav {\n\twidth: 250px;\n\theight: 100%;\n\tbackground-color: var(--lightest-background);\n\tcolor: black;\n}\n\ntitle.nav-title {\n\tgap: 1rem;\n}\n\n.nav > title {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: var(--title-font);\n\tfont-size: 1.5rem;\n\tmargin: 0.75rem;\n\topacity: 0.7;\n}\n\ndiv.nav > button {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tborder: none;\n\tmargin: 1.3rem;\n\topacity: var(--opacity);\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: var(--title-font);\n\tbox-shadow: var(--standard-shadow);\n}\n\nbody > div > div.mainContainer > div.nav > title > ul {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\tpadding: 0.5rem;\n\tmargin: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\tbox-shadow: var(--title-shadow-standard);\n}\n\na.nav-project-item {\n\ttext-decoration: none;\n\tcolor: black;\n\tflex-grow: 1;\n}\n\nul.nav-project-list > li {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n}\n\n.todo-edit,\n.todo-remove {\n\tmargin: 0.25rem;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n}\n\n.todo-edit,\n.todo-remove,\nul.nav-project-list > li:hover {\n\tbackground-color: var(--title-selected);\n\ttransition: background-color 350ms ease-in-out;\n}\n\nimg,\nbutton,\nul,\ntitle,\nheader,\ni {\n\tdisplay: flex;\n\tborder: none;\n}\n\n/* dialogs  */\ndialog {\n\talign-items: center;\n\theight: 20vh;\n\twidth: 20vw;\n\tborder: none;\n\tbackground-color: var(--lightest-background);\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ndialog.taskModal,\ndialog.editTaskModal {\n\theight: 70dvh;\n\twidth: 30rem;\n}\n\ndialog::backdrop {\n\tbackground: hsla(112, 60%, 74%, 0.3);\n\topacity: 0.9;\n}\n\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tjustify-content: space-evenly;\n\theight: 100%;\n}\n\nform > title {\n\tfont-family: var(--title-font);\n\talign-self: center;\n\tfont-size: 1.5rem;\n\topacity: var(--opacity);\n}\n\nform > div > button {\n\tdisplay: flex;\n\tgap: 0.1rem;\n\tpadding: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--alt-background);\n\tcolor: white;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\topacity: var(--opacity);\n\tbox-shadow: var(--standard-shadow);\n}\n\nlabel {\n\tdisplay: flex;\n\twidth: 50%;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\topacity: var(--opacity);\n}\n\ninput,\ntextarea {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.5rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ntextarea {\n\theight: 5rem;\n}\n\nselect {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.8rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\tposition: relative;\n}\n\ninput[type='date'] {\n\ttext-align: left;\n\tposition: relative;\n}\ninput[type='date']::-webkit-calendar-picker-indicator {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 5%;\n\ttransform: translateY(-50%);\n}\n\ninput,\nselect,\ntextarea {\n\ttext-align: left;\n\tline-height: 0.75rem;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tpadding: 0.25rem;\n}\n\nform > .form-div {\n\tdisplay: flex;\n\twidth: 80%;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n}\n\n.cancel-button {\n\tmargin-left: auto;\n}\n\n.submit-button {\n\tmargin-left: 1.5rem;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              ":root {\n\t/* from coolors */\n\t--lapis-lazuli: hsla(210, 50%, 40%, 1);\n\t--carolina-blue: hsla(201, 51%, 69%, 1);\n\t--charcoal: hsla(203, 30%, 26%, 1);\n\t--light-green: hsla(112, 60%, 74%, 1);\n\t--nyanza: hsla(124, 64%, 91%, 1);\n\n\t/* fonts  */\n\t--title-font: 'roboto-bold', cursive;\n\t--style-font: 'pacifico', cursive;\n\n\t/* color assignments */\n\t--lightest-background: var(--nyanza);\n\t--light-background: var(--carolina-blue);\n\t--title-selected: var(--light-green);\n\t--dark-background: var(--charcoal);\n\t--alt-background: var(--lapis-lazuli);\n\n\t/* opacity  */\n\t--opacity: 0.7;\n\n\t/* shadows */\n\t--standard-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n\t--title-shadow-standard: 2px 2px 2px rgba(0, 0, 0, 0.3);\n\t--title-shadow-emphasis: 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n\tfont-family: 'roboto-bold';\n\tsrc: url(./fonts/Roboto-Bold.ttf);\n\tformat: ('ttf');\n}\n@font-face {\n\tfont-family: 'pacifico';\n\tsrc: url(./fonts/Pacifico-Regular.ttf);\n\tformat: ('ttf');\n}\n\nbody {\n\tfont-family: helvetica;\n\tcolor: white;\n\tfont-size: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100svh;\n}\n\n.main,\n.footer,\n.nav,\n.pageContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.pageContainer {\n\twidth: 100%;\n\theight: 100dvh;\n}\n/* container */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tbackground-color: var(--alt-background);\n\tgap: 2rem;\n}\n/* app name */\nheader > h1 {\n\tcolor: var(--title-selected);\n\tfont-family: var(--title-font);\n\tfont-size: 3rem;\n\topacity: var(--opacity);\n\ttext-shadow: var(--title-shadow-standard);\n}\n\nheader > img {\n\tdisplay: flex;\n\theight: 55px;\n\tmargin-left: 2rem;\n}\n/* quote */\nh2.header {\n\tdisplay: flex;\n\topacity: 0.9;\n\tfont-family: var(--style-font);\n\ttext-shadow: var(--title-shadow-emphasis);\n}\n\n.footer {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 5%;\n\tbackground-color: var(--alt-background);\n\talign-self: flex-end;\n\tposition: relative;\n}\n\n.footer-tag {\n\tfont-size: 0.7rem;\n\tcolor: var(--title-selected);\n\topacity: var(--opacity);\n}\n\n.clear-local-storage {\n\tappearance: none;\n\tborder: none;\n\tbackground-color: transparent;\n}\n\n.clear-local-storage,\n.clear-local-storage > img {\n\theight: 30px;\n\tposition: absolute;\n\tright: 1%;\n\tbottom: 6%;\n}\n\n.clear-local-storage > img:hover,\n.clear-local-storage > img:focus {\n\tbackground-color: red;\n}\n\n.clear-local-storage:hover::before {\n\tcontent: 'This will clear ALL app data in local storage. No recovery possible.';\n\tdisplay: inline-block;\n\tbackground-color: black;\n\tcolor: var(--light-green);\n\tpadding: 0.5em;\n\tborder-radius: 0.25em;\n\tfont-size: 1rem;\n\twhite-space: break-spaces;\n\tz-index: 1;\n\ttransform: translatey(-125%);\n\tbox-shadow: none !important;\n\topacity: var(--opacity);\n}\n/* holds nav and main */\n.mainContainer {\n\tdisplay: flex;\n\tjustify-content: stretch;\n\theight: 90%;\n}\n/* container */\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tflex-grow: 1;\n\tbackground-color: var(--dark-background);\n}\n\n/* this is the project label at the top of the page */\n.main-header {\n\tmargin: 1.5rem;\n\tpadding: 1rem 2rem 1rem 2rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n/* task container 'container' */\ndiv.mainContainer > section > section {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 95%;\n\tmargin-left: 1.5rem;\n}\n\n/* column labels  */\nbody > div > div.mainContainer > section > header:nth-child(2) {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 1rem;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\topacity: var(--opacity);\n}\n\nheader > th {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n}\n\nheader > th:first-child {\n\tflex-basis: 10%;\n}\n\nheader > th:nth-child(2) {\n\tflex-basis: 40%;\n\tflex-grow: 1;\n}\n\nheader > th:nth-child(3) {\n\tmargin-left: auto;\n}\n\nheader > th:last-child {\n\tmargin-right: 12%;\n}\n\nsection.todo-container-holder {\n\talign-self: stretch;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: space-between;\n\tmargin: 1rem;\n}\narticle.todo-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-wrap: nowrap;\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n\topacity: var(--opacity);\n\tbackground-color: hsla(112, 60%, 74%, 0.1);\n\tborder-radius: 0.5rem;\n}\n\narticle.todo-container:hover,\narticle.todo-container:focus {\n\tbackground-color: hsla(112, 60%, 74%, 0.2);\n\ttransition: background-color 350ms ease-in-out;\n\topacity: 1;\n}\n\n/* flexbox the display of the todo-containers */\n\n.todo-title {\n\ttext-overflow: ellipsis;\n\tflex-basis: 10%;\n}\n\n.todo-description {\n\tflex-basis: 40%;\n\ttext-overflow: ellipsis;\n}\n\n.todo-dueDate {\n\tflex-basis: 6%;\n}\n\n.todo-priority {\n\tflex-basis: 4%;\n}\n\n.todo-status {\n\tflex-basis: 6%;\n}\n\n.todo-edit {\n\tflex-basis: 4;\n}\n\n.todo-remove {\n\tflex-basis: 4%;\n}\n\n/* hides project from display in the table */\n.todo-project {\n\tdisplay: none;\n}\n\n/* nav section  */\n\n.nav {\n\twidth: 250px;\n\theight: 100%;\n\tbackground-color: var(--lightest-background);\n\tcolor: black;\n}\n\ntitle.nav-title {\n\tgap: 1rem;\n}\n\n.nav > title {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: var(--title-font);\n\tfont-size: 1.5rem;\n\tmargin: 0.75rem;\n\topacity: 0.7;\n}\n\ndiv.nav > button {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tborder: none;\n\tmargin: 1.3rem;\n\topacity: var(--opacity);\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: var(--title-font);\n\tbox-shadow: var(--standard-shadow);\n}\n\nbody > div > div.mainContainer > div.nav > title > ul {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\tpadding: 0.5rem;\n\tmargin: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--light-background);\n\tcolor: black;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\tbox-shadow: var(--title-shadow-standard);\n}\n\na.nav-project-item {\n\ttext-decoration: none;\n\tcolor: black;\n\tflex-grow: 1;\n}\n\nul.nav-project-list > li {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n}\n\n.todo-edit,\n.todo-remove {\n\tmargin: 0.25rem;\n\tpadding: 0.5rem;\n\tborder-radius: 0.5rem;\n}\n\n.todo-edit,\n.todo-remove,\nul.nav-project-list > li:hover {\n\tbackground-color: var(--title-selected);\n\ttransition: background-color 350ms ease-in-out;\n}\n\nimg,\nbutton,\nul,\ntitle,\nheader,\ni {\n\tdisplay: flex;\n\tborder: none;\n}\n\n/* dialogs  */\ndialog {\n\talign-items: center;\n\theight: 20vh;\n\twidth: 20vw;\n\tborder: none;\n\tbackground-color: var(--lightest-background);\n\tborder-radius: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ndialog.taskModal,\ndialog.editTaskModal {\n\theight: 70dvh;\n\twidth: 30rem;\n}\n\ndialog::backdrop {\n\tbackground: hsla(112, 60%, 74%, 0.3);\n\topacity: 0.9;\n}\n\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tjustify-content: space-evenly;\n\theight: 100%;\n}\n\nform > title {\n\tfont-family: var(--title-font);\n\talign-self: center;\n\tfont-size: 1.5rem;\n\topacity: var(--opacity);\n}\n\nform > div > button {\n\tdisplay: flex;\n\tgap: 0.1rem;\n\tpadding: 0.5rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tbackground-color: var(--alt-background);\n\tcolor: white;\n\tfont-size: 1rem;\n\tfont-family: helvetica;\n\tfont-weight: bold;\n\tlist-style: none;\n\topacity: var(--opacity);\n\tbox-shadow: var(--standard-shadow);\n}\n\nlabel {\n\tdisplay: flex;\n\twidth: 50%;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\topacity: var(--opacity);\n}\n\ninput,\ntextarea {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.5rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n}\n\ntextarea {\n\theight: 5rem;\n}\n\nselect {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tborder-radius: 0.5rem;\n\theight: 1.8rem;\n\tmargin-left: 0.5rem;\n\tbox-shadow: var(--standard-shadow);\n\tposition: relative;\n}\n\ninput[type='date'] {\n\ttext-align: left;\n\tposition: relative;\n}\ninput[type='date']::-webkit-calendar-picker-indicator {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 5%;\n\ttransform: translateY(-50%);\n}\n\ninput,\nselect,\ntextarea {\n\ttext-align: left;\n\tline-height: 0.75rem;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tpadding: 0.25rem;\n}\n\nform > .form-div {\n\tdisplay: flex;\n\twidth: 80%;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n}\n\n.cancel-button {\n\tmargin-left: auto;\n}\n\n.submit-button {\n\tmargin-left: 1.5rem;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/native.js":
      /*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const randomUUID =
          typeof crypto !== "undefined" &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          randomUUID,
        };

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/regex.js":
      /*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/rng.js":
      /*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ rng,
          /* harmony export */
        });
        // Unique ID creation requires a high quality random # generator. In the browser we therefore
        // require the crypto API and do not support built-in fallback to lower quality random number
        // generators (like Math.random()).
        let getRandomValues;
        const rnds8 = new Uint8Array(16);
        function rng() {
          // lazy load so that environments that need to polyfill have a chance to do so
          if (!getRandomValues) {
            // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
            getRandomValues =
              typeof crypto !== "undefined" &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto);

            if (!getRandomValues) {
              throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
              );
            }
          }

          return getRandomValues(rnds8);
        }

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
      /*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ unsafeStringify: () =>
            /* binding */ unsafeStringify,
          /* harmony export */
        });
        /* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js"
          );

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
          return (
            byteToHex[arr[offset + 0]] +
            byteToHex[arr[offset + 1]] +
            byteToHex[arr[offset + 2]] +
            byteToHex[arr[offset + 3]] +
            "-" +
            byteToHex[arr[offset + 4]] +
            byteToHex[arr[offset + 5]] +
            "-" +
            byteToHex[arr[offset + 6]] +
            byteToHex[arr[offset + 7]] +
            "-" +
            byteToHex[arr[offset + 8]] +
            byteToHex[arr[offset + 9]] +
            "-" +
            byteToHex[arr[offset + 10]] +
            byteToHex[arr[offset + 11]] +
            byteToHex[arr[offset + 12]] +
            byteToHex[arr[offset + 13]] +
            byteToHex[arr[offset + 14]] +
            byteToHex[arr[offset + 15]]
          ).toLowerCase();
        }

        function stringify(arr, offset = 0) {
          const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
          // of the following:
          // - One or more input array values don't map to a hex octet (leading to
          // "undefined" in the uuid)
          // - Invalid input values for the RFC `version` or `variant` fields

          if (
            !(0, _validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)
          ) {
            throw TypeError("Stringified UUID is invalid");
          }

          return uuid;
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          stringify;

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/v4.js":
      /*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js"
          );
        /* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js"
          );
        /* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js"
          );

        function v4(options, buf, offset) {
          if (
            _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID &&
            !buf &&
            !options
          ) {
            return _native_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].randomUUID();
          }

          options = options || {};
          const rnds =
            options.random ||
            (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

          rnds[6] = (rnds[6] & 0x0f) | 0x40;
          rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided

          if (buf) {
            offset = offset || 0;

            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = rnds[i];
            }

            return buf;
          }

          return (0,
          _stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = v4;

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/validate.js":
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js"
          );

        function validate(uuid) {
          return (
            typeof uuid === "string" &&
            _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid)
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          validate;

        /***/
      },

    /***/ "./src/dataStores/priorityList.js":
      /*!****************************************!*\
  !*** ./src/dataStores/priorityList.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const priorityList = ["None", "Low", "Medium", "High", "Urgent"];

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          priorityList;

        /***/
      },

    /***/ "./src/dataStores/projectList.js":
      /*!***************************************!*\
  !*** ./src/dataStores/projectList.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        // need to be in sync with the project list in local storage

        const localStorageState = JSON.parse(
          localStorage.getItem("projectList")
        );

        const projectList = [];

        // trying to manage the default project showing up more than once in the project list due to local storage adding to the array
        if (!projectList.includes("All Tasks")) {
          projectList.push("All Tasks");
        }

        if (!projectList.includes("Default")) {
          projectList.push("Default");
        }

        if (localStorageState) {
          localStorageState.forEach((project) => {
            const projectExists = projectList.includes(project);
            if (!projectExists) {
              projectList.push(project);
            }
          });
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          projectList;

        /***/
      },

    /***/ "./src/dataStores/statusList.js":
      /*!**************************************!*\
  !*** ./src/dataStores/statusList.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const statusList = [
          "Not Started",
          "In Progress",
          "Completed",
          "On Hold",
          "Cancelled",
        ];

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          statusList;

        /***/
      },

    /***/ "./src/dataStores/todoObjects.js":
      /*!***************************************!*\
  !*** ./src/dataStores/todoObjects.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const localStorageState = JSON.parse(
          localStorage.getItem("todoObjects")
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
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          todoObjects;

        /***/
      },

    /***/ "./src/dialogs/editTaskDialog.js":
      /*!***************************************!*\
  !*** ./src/dialogs/editTaskDialog.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ editTaskHandler: () =>
            /* binding */ editTaskHandler,
          /* harmony export */ populateFormWithTodoData: () =>
            /* binding */ populateFormWithTodoData,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/projectList */ "./src/dataStores/projectList.js"
          );
        /* harmony import */ var _dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../dataStores/statusList */ "./src/dataStores/statusList.js"
          );
        /* harmony import */ var _dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../dataStores/priorityList */ "./src/dataStores/priorityList.js"
          );
        /* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js"
          );
        /* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js"
          );
        /* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../helpers/localStorage */ "./src/helpers/localStorage.js"
          );

        // this is the form that will be displayed in the modal, to create a new task

        const container = document.querySelector("body");

        const editTaskDialog = document.createElement("dialog");
        editTaskDialog.className = "editTaskModal";

        container.appendChild(editTaskDialog);

        const parent = document.querySelector(".editTaskModal");

        const form = document.createElement("form");
        form.className = "edit-todo-form";
        form.method = "dialog";
        parent.appendChild(form);

        const formTitle = document.createElement("title");
        formTitle.textContent = "Edit Task";
        form.appendChild(formTitle);

        const titleDiv = document.createElement("div");
        titleDiv.className = "form-div";
        form.appendChild(titleDiv);

        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleDiv.appendChild(titleLabel);

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.name = "title";
        titleDiv.appendChild(titleInput);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "form-div";
        form.appendChild(descriptionDiv);

        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";
        descriptionDiv.appendChild(descriptionLabel);

        const descriptionInput = document.createElement("textarea");
        descriptionInput.name = "description";
        descriptionDiv.appendChild(descriptionInput);

        const dueDateDiv = document.createElement("div");
        dueDateDiv.className = "form-div";
        form.appendChild(dueDateDiv);

        const dueDateLabel = document.createElement("label");
        dueDateLabel.textContent = "Due Date";
        dueDateDiv.appendChild(dueDateLabel);

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.name = "dueDate";
        dueDateDiv.appendChild(dueDateInput);

        const priorityDiv = document.createElement("div");
        priorityDiv.className = "form-div";
        form.appendChild(priorityDiv);

        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";
        priorityDiv.appendChild(priorityLabel);

        const priorityInput = document.createElement("select");
        priorityInput.name = "priority";
        priorityInput.textContent = "priority";
        _dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__[
          "default"
        ].forEach((priority) => {
          const option = document.createElement("option");
          option.textContent = priority;
          priorityInput.appendChild(option);
        });
        priorityDiv.appendChild(priorityInput);

        // project dropdown menu

        const projectDiv = document.createElement("div");
        projectDiv.className = "form-div";
        form.appendChild(projectDiv);

        const projectLabel = document.createElement("label");
        projectLabel.textContent = "Project";
        projectDiv.appendChild(projectLabel);

        const projectInput = document.createElement("select");
        projectInput.name = "project";

        _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(
          (project) => {
            const option = document.createElement("option");
            option.textContent = project;
            projectInput.appendChild(option);
          }
        );
        projectDiv.appendChild(projectInput);

        // end project dropdown menu

        const statusDiv = document.createElement("div");
        statusDiv.className = "form-div";
        form.appendChild(statusDiv);

        const statusLabel = document.createElement("label");
        statusLabel.textContent = "Status";
        statusDiv.appendChild(statusLabel);

        const statusInput = document.createElement("select");
        statusInput.textContent = "Status";
        statusInput.name = "status";
        _dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(
          (status) => {
            const option = document.createElement("option");
            option.textContent = status;
            statusInput.appendChild(option);
          }
        );
        statusDiv.appendChild(statusInput);

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "form-div";
        form.appendChild(buttonDiv);

        // edit / cancel buttons with event listeners

        const editTask = document.createElement("button");
        editTask.textContent = "Update";
        editTask.className = "submit-button";
        editTask.type = "button";
        editTask.name = "edit";
        buttonDiv.appendChild(editTask);

        function editTaskHandler(id) {
          const handler = () => {
            console.log(`editTaskHandler -  ${id}`);
            const currTodo =
              _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ].find((todo) => todo.id === id);
            currTodo.setTitle(form.elements.title.value);
            currTodo.setDescription(form.elements.description.value);
            currTodo.setDueDate(form.elements.dueDate.value);
            currTodo.setPriority(form.elements.priority.value);
            currTodo.setProject(form.elements.project.value);
            currTodo.setStatus(form.elements.status.value);
            (0,
            _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_4__["default"])();
            (0,
            _helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
            form.reset();
            editTaskDialog.close();
          };

          editTask.addEventListener("click", handler, { once: true });

          const closeDialogEventHandler = () => {
            editTask.removeEventListener("click", handler);
            editTaskDialog.removeEventListener(
              "close",
              closeDialogEventHandler
            );
          };

          editTaskDialog.addEventListener("close", closeDialogEventHandler);
        }

        function populateFormWithTodoData(id) {
          console.log(`populateForm -  ${id}`);
          const currTodo = _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ].find((todo) => todo.getId() === id);
          form.elements.title.value = currTodo.getTitle();
          form.elements.description.value = currTodo.getDescription();
          form.elements.dueDate.value = currTodo.getDueDate();
          form.elements.priority.value = currTodo.getPriority();
          form.elements.project.value = currTodo.getProject();
          form.elements.status.value = currTodo.getStatus();
        }

        const cancelEdit = document.createElement("button");
        cancelEdit.textContent = "Cancel";
        cancelEdit.className = "cancel-button";
        cancelEdit.type = "cancel";
        cancelEdit.name = "cancel";
        buttonDiv.appendChild(cancelEdit);

        cancelEdit.addEventListener("click", () => {
          editTaskDialog.close();
        });

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          editTaskDialog;

        /***/
      },

    /***/ "./src/dialogs/newProjectDialog.js":
      /*!*****************************************!*\
  !*** ./src/dialogs/newProjectDialog.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/projectList */ "./src/dataStores/projectList.js"
          );
        /* harmony import */ var _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../helpers/drawNavProjectList */ "./src/helpers/drawNavProjectList.js"
          );
        /* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../helpers/localStorage */ "./src/helpers/localStorage.js"
          );

        // this is the form that will be displayed in the modal, to create a new project

        const container = document.querySelector("body");

        const projectDialog = document.createElement("dialog");
        projectDialog.className = "modal";

        container.appendChild(projectDialog);

        const parent = document.querySelector(".modal");

        const form = document.createElement("form");
        form.className = "todo-form";
        form.method = "dialog";
        parent.appendChild(form);

        const title = document.createElement("title");
        title.textContent = "New Project";
        form.appendChild(title);

        const titleDiv = document.createElement("div");
        titleDiv.className = "form-div";
        form.appendChild(titleDiv);

        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleDiv.appendChild(titleLabel);

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.name = "title";
        titleDiv.appendChild(titleInput);

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "form-div";
        form.appendChild(buttonDiv);

        const submitNewProject = document.createElement("button");
        submitNewProject.textContent = "Submit";
        submitNewProject.className = "submit-button";
        submitNewProject.type = "submit";
        submitNewProject.name = "submit";
        buttonDiv.appendChild(submitNewProject);

        const cancelNewProject = document.createElement("button");
        cancelNewProject.textContent = "Cancel";
        cancelNewProject.className = "cancel-button";
        cancelNewProject.type = "cancel";
        cancelNewProject.name = "cancel";
        buttonDiv.appendChild(cancelNewProject);

        submitNewProject.addEventListener("click", (e) => {
          e.preventDefault();
          _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].push(
            titleInput.value
          );
          (0,
          _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_1__.updateNavProjectList)();
          form.reset();
          projectDialog.close();
          (0,
          _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
          window.location.reload();
        });

        cancelNewProject.addEventListener("click", (e) => {
          e.preventDefault();
          form.reset();
          projectDialog.close();
        });

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          projectDialog;

        /***/
      },

    /***/ "./src/dialogs/newTaskDialog.js":
      /*!**************************************!*\
  !*** ./src/dialogs/newTaskDialog.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/projectList */ "./src/dataStores/projectList.js"
          );
        /* harmony import */ var _dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../dataStores/statusList */ "./src/dataStores/statusList.js"
          );
        /* harmony import */ var _dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../dataStores/priorityList */ "./src/dataStores/priorityList.js"
          );
        /* harmony import */ var _helpers_todoFactory__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../helpers/todoFactory */ "./src/helpers/todoFactory.js"
          );
        /* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js"
          );
        /* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js"
          );
        /* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../helpers/localStorage */ "./src/helpers/localStorage.js"
          );

        // this is the form that will be displayed in the modal, to create a new task

        const container = document.querySelector("body");

        const taskDialog = document.createElement("dialog");
        taskDialog.className = "taskModal";

        container.appendChild(taskDialog);

        const parent = document.querySelector(".taskModal");

        const form = document.createElement("form");
        form.className = "todo-form";
        form.method = "dialog";
        parent.appendChild(form);

        const title = document.createElement("title");
        title.textContent = "New Task";
        form.appendChild(title);

        const titleDiv = document.createElement("div");
        titleDiv.className = "form-div";
        form.appendChild(titleDiv);

        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleDiv.appendChild(titleLabel);

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.name = "title";
        titleDiv.appendChild(titleInput);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "form-div";
        form.appendChild(descriptionDiv);

        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";
        descriptionDiv.appendChild(descriptionLabel);

        const descriptionInput = document.createElement("textarea");
        descriptionInput.name = "description";
        descriptionDiv.appendChild(descriptionInput);

        const dueDateDiv = document.createElement("div");
        dueDateDiv.className = "form-div";
        form.appendChild(dueDateDiv);

        const dueDateLabel = document.createElement("label");
        dueDateLabel.textContent = "Due Date";
        dueDateDiv.appendChild(dueDateLabel);

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.name = "dueDate";
        dueDateDiv.appendChild(dueDateInput);

        const priorityDiv = document.createElement("div");
        priorityDiv.className = "form-div";
        form.appendChild(priorityDiv);

        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";
        priorityDiv.appendChild(priorityLabel);

        const priorityInput = document.createElement("select");
        priorityInput.textContent = "priority";
        _dataStores_priorityList__WEBPACK_IMPORTED_MODULE_2__[
          "default"
        ].forEach((priority) => {
          const option = document.createElement("option");
          option.textContent = priority;
          priorityInput.appendChild(option);
        });
        priorityDiv.appendChild(priorityInput);

        // project dropdown menu

        const projectDiv = document.createElement("div");
        projectDiv.className = "form-div";
        form.appendChild(projectDiv);

        const projectLabel = document.createElement("label");
        projectLabel.textContent = "Project";
        projectDiv.appendChild(projectLabel);

        const projectInput = document.createElement("select");
        projectInput.name = "project";
        _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(
          (project) => {
            const option = document.createElement("option");
            option.textContent = project;
            projectInput.appendChild(option);
          }
        );
        projectDiv.appendChild(projectInput);

        // end project dropdown menu

        const statusDiv = document.createElement("div");
        statusDiv.className = "form-div";
        form.appendChild(statusDiv);

        const statusLabel = document.createElement("label");
        statusLabel.textContent = "Status";
        statusDiv.appendChild(statusLabel);

        const statusInput = document.createElement("select");
        statusInput.textContent = "Status";
        _dataStores_statusList__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(
          (status) => {
            const option = document.createElement("option");
            option.textContent = status;
            statusInput.appendChild(option);
          }
        );
        statusDiv.appendChild(statusInput);

        // submit / cancel buttons with event listeners

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "form-div";
        form.appendChild(buttonDiv);

        const submitNewTask = document.createElement("button");
        submitNewTask.textContent = "Submit";
        submitNewTask.className = "submit-button";
        submitNewTask.type = "submit";
        submitNewTask.name = "submit";
        buttonDiv.appendChild(submitNewTask);

        const cancelNewTask = document.createElement("button");
        cancelNewTask.textContent = "Cancel";
        cancelNewTask.className = "cancel-button";
        cancelNewTask.type = "cancel";
        cancelNewTask.name = "cancel";
        buttonDiv.appendChild(cancelNewTask);

        submitNewTask.addEventListener("click", (e) => {
          e.preventDefault();
          const newTodo = (0,
          _helpers_todoFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            priorityInput.value,
            projectInput.value,
            statusInput.value
          );
          _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_4__["default"].push(
            newTodo
          );
          (0,
          _helpers_localStorage__WEBPACK_IMPORTED_MODULE_6__.updateLocalStorage)();
          console.log({
            todoObjects:
              _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_4__["default"],
          });

          form.reset();
          taskDialog.close();
          (0,
          _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_5__["default"])();
        });

        cancelNewTask.addEventListener("click", (e) => {
          e.preventDefault();
          form.reset();
          taskDialog.close();
        });

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          taskDialog;

        /***/
      },

    /***/ "./src/helpers/drawNavProjectList.js":
      /*!*******************************************!*\
  !*** ./src/helpers/drawNavProjectList.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ updateNavProjectList: () =>
            /* binding */ updateNavProjectList,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/projectList */ "./src/dataStores/projectList.js"
          );
        /* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./localStorage */ "./src/helpers/localStorage.js"
          );
        /* harmony import */ var _refreshProjectList__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./refreshProjectList */ "./src/helpers/refreshProjectList.js"
          );
        /* harmony import */ var _redrawTaskList__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./redrawTaskList */ "./src/helpers/redrawTaskList.js"
          );

        function domLoaded(callback) {
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
              callback();
            });
          } else {
            callback();
          }
        }

        function updateNavProjectList() {
          domLoaded(() => {
            const listParent =
              document.querySelectorAll(".nav-project-list")[0];

            while (listParent.firstChild) {
              listParent.removeChild(listParent.firstChild);
            }

            _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].forEach((project) => {
              const listItem = document.createElement("li");
              const link = document.createElement("a");
              link.textContent = project;
              link.classList.add("nav-project-item");
              listParent.appendChild(listItem);
              listItem.appendChild(link);
              if (project !== "All Tasks" && project !== "Default") {
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.classList.add("delete-project-button");
                deleteButton.style.borderRadius = "50%";
                deleteButton.style.backgroundColor = "var(--title-selected)";
                deleteButton.style.padding = "0.2rem";

                listItem.appendChild(deleteButton);
              }
            });
          });
        }

        function handleNavPaneClicks() {
          domLoaded(() => document.querySelectorAll(".nav-project-list")[0]);
          const parentElement = document.querySelector(".nav-project-list");
          (0, _refreshProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])();
          parentElement.addEventListener(
            "click",
            (e) => {
              e.stopImmediatePropagation();
              const clickedProject = e.target.textContent;
              if (
                _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ].includes(clickedProject)
              ) {
                console.log(`${clickedProject} - project exists`);
                (0, _redrawTaskList__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  clickedProject
                );
              }
              if (e.target.classList.contains("delete-project-button")) {
                const parentTextContent = e.target.parentNode.textContent
                  .trim()
                  .replace(e.target.textContent.trim(), "");
                console.log(parentTextContent);
                (0,
                _localStorage__WEBPACK_IMPORTED_MODULE_1__.removeProjectFromLocalStorage)(
                  parentTextContent
                );
                (0,
                _refreshProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])();
                window.location.reload();
              }
              return clickedProject;
            },
            { capture: true }
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          handleNavPaneClicks;

        /***/
      },

    /***/ "./src/helpers/elementMaker.js":
      /*!*************************************!*\
  !*** ./src/helpers/elementMaker.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        function createElement(elem, textCont, attributes) {
          const element = document.createElement(elem);
          Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
          });
          element.textContent = textCont;
          return element;
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          createElement;

        /***/
      },

    /***/ "./src/helpers/filterTasks.js":
      /*!************************************!*\
  !*** ./src/helpers/filterTasks.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js"
          );

        function filterTasks(project) {
          const filteredTasks =
            _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].filter((todo) => todo.project === project);
          if (project === "All Tasks") {
            return _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ];
          }

          return filteredTasks;
        }

        function displayFilteredTasks(project = "All Tasks") {
          const filteredTasks = filterTasks(project);
          return filteredTasks;
        }

        /* const activeTasks = displayFilteredTasks(
	clickedProject || 'All Tasks'
); */

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          displayFilteredTasks;

        /***/
      },

    /***/ "./src/helpers/localStorage.js":
      /*!*************************************!*\
  !*** ./src/helpers/localStorage.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ checkLocalStorage: () =>
            /* binding */ checkLocalStorage,
          /* harmony export */ clearLocalStorage: () =>
            /* binding */ clearLocalStorage,
          /* harmony export */ getDataFromLocalStorage: () =>
            /* binding */ getDataFromLocalStorage,
          /* harmony export */ removeItemFromLocalStorage: () =>
            /* binding */ removeItemFromLocalStorage,
          /* harmony export */ removeProjectFromLocalStorage: () =>
            /* binding */ removeProjectFromLocalStorage,
          /* harmony export */ removeTaskFromLocalStorage: () =>
            /* binding */ removeTaskFromLocalStorage,
          /* harmony export */ updateLocalStorage: () =>
            /* binding */ updateLocalStorage,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/projectList */ "./src/dataStores/projectList.js"
          );
        /* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js"
          );

        function updateLocalStorage() {
          localStorage.setItem(
            "projectList",
            JSON.stringify(
              _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__["default"]
            )
          );
          localStorage.setItem(
            "todoObjects",
            JSON.stringify(
              _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_1__["default"]
            )
          );
        }

        function getDataFromLocalStorage() {
          JSON.parse(localStorage.getItem("projectList"));
          JSON.parse(localStorage.getItem("todoObjects"));
        }

        function removeItemFromLocalStorage(item) {
          localStorage.removeItem(item);
          getDataFromLocalStorage();
          console.log(`localStorage item removed: ${item}`);
        }

        // wire to clearLocalStorageBtn
        function clearLocalStorage() {
          localStorage.clear();
          console.log("localStorage cleared");
        }

        // run once at page load in index.js
        function checkLocalStorage() {
          if (localStorage.length > 0) {
            console.log(`there is data in localStorage`);
            getDataFromLocalStorage();
          } else {
            console.log("localStorage is empty");
          }
        }

        function removeTaskFromLocalStorage(id) {
          const items = JSON.parse(localStorage.getItem("todoObjects")) || [];
          console.log(items);
          const index = items.findIndex((item) => item.id === id);
          console.log(index);
          items.splice(index, 1);
          localStorage.setItem("todoObjects", JSON.stringify(items));
        }

        function removeProjectFromLocalStorage(project) {
          // remove from projectList
          const items = JSON.parse(localStorage.getItem("projectList")) || [];
          console.log(items);
          const index = items.findIndex((item) => item === project);
          console.log(index);
          items.splice(index, 1);
          localStorage.setItem("projectList", JSON.stringify(items));

          // Remove the objects that have that project name from todoObjects array.
          const todoItems =
            JSON.parse(localStorage.getItem("todoObjects")) || [];
          console.log(todoItems);

          let todoIndex = 0;
          while (todoIndex !== -1) {
            todoIndex = todoItems.findIndex((item) => item.project === project);
            todoItems.splice(todoIndex, 1);
          }
          console.log(todoIndex);
          localStorage.setItem("todoObjects", JSON.stringify(todoItems));
        }

        /***/
      },

    /***/ "./src/helpers/redrawTaskList.js":
      /*!***************************************!*\
  !*** ./src/helpers/redrawTaskList.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _view_taskView__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../view/taskView */ "./src/view/taskView.js");
        /* harmony import */ var _filterTasks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./filterTasks */ "./src/helpers/filterTasks.js"
          );

        function redrawTodoList(filter) {
          const todoContainer = document.querySelector(
            "section.todo-container-holder"
          );

          const todoContainerTitle =
            document.querySelector("header.main-header");

          todoContainerTitle.textContent = `Project: ${filter || "All Tasks"}`;

          while (todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild);
          }
          // how do I get the project name  from the variable 'clickedProject'?
          const filteredTasks = (0,
          _filterTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(
            filter || "All Tasks"
          );

          filteredTasks.forEach((todo) => {
            (0, _view_taskView__WEBPACK_IMPORTED_MODULE_0__["default"])(
              "section.todo-container-holder",
              "article",
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

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          redrawTodoList;

        /***/
      },

    /***/ "./src/helpers/refreshProjectList.js":
      /*!*******************************************!*\
  !*** ./src/helpers/refreshProjectList.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/projectList */ "./src/dataStores/projectList.js"
          );
        /* eslint-disable no-debugger */

        // for the new task dialog

        function refreshProjectList() {
          const projectListParent = document.querySelector(
            "select[name=project]"
          );

          while (projectListParent.firstChild) {
            projectListParent.removeChild(projectListParent.firstChild);
          }
          _dataStores_projectList__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].forEach((project) => {
            const option = document.createElement("option");
            option.textContent = project;
            projectListParent.appendChild(option);
          });
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          refreshProjectList;

        /***/
      },

    /***/ "./src/helpers/removeTask.js":
      /*!***********************************!*\
  !*** ./src/helpers/removeTask.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../dataStores/todoObjects */ "./src/dataStores/todoObjects.js"
          );
        /* harmony import */ var _redrawTaskList__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./redrawTaskList */ "./src/helpers/redrawTaskList.js"
          );
        /* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./localStorage */ "./src/helpers/localStorage.js"
          );

        function removeTheTask(id) {
          const index = _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].findIndex((todo) => todo.id === id);
          _dataStores_todoObjects__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].splice(index, 1);
          (0,
          _localStorage__WEBPACK_IMPORTED_MODULE_2__.removeTaskFromLocalStorage)(
            id
          );
          (0, _redrawTaskList__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          removeTheTask;

        /***/
      },

    /***/ "./src/helpers/todoFactory.js":
      /*!************************************!*\
  !*** ./src/helpers/todoFactory.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js"
          );

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
            id: (0, uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),

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

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          createTodoObject;

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");
        /* harmony import */ var _view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./view/pl-pageContainer */ "./src/view/pl-pageContainer.js"
          );
        /* harmony import */ var _view_pl_header__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./view/pl-header */ "./src/view/pl-header.js"
          );
        /* harmony import */ var _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./view/pl-footer */ "./src/view/pl-footer.js"
          );
        /* harmony import */ var _view_pl_main__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./view/pl-main */ "./src/view/pl-main.js");
        /* harmony import */ var _view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./view/pl-mainContainer */ "./src/view/pl-mainContainer.js"
          );
        /* harmony import */ var _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./helpers/drawNavProjectList */ "./src/helpers/drawNavProjectList.js"
          );
        /* harmony import */ var _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./view/pl-nav */ "./src/view/pl-nav.js");
        /* harmony import */ var _helpers_filterTasks__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./helpers/filterTasks */ "./src/helpers/filterTasks.js"
          );
        /* harmony import */ var _view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./view/pl-header-cont */ "./src/view/pl-header-cont.js"
          );
        /* harmony import */ var _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./helpers/refreshProjectList */ "./src/helpers/refreshProjectList.js"
          );
        /* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js"
          );
        /* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./helpers/localStorage */ "./src/helpers/localStorage.js"
          );
        /* eslint-disable no-console */

        // eslint-disable-next-line no-unused-vars

        const body = document.querySelector("body");

        body.appendChild(
          _view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__["default"]
        );
        _view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__[
          "default"
        ].appendChild(_view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
        _view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(
          _view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__.headerIcon
        );
        _view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(
          _view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__.headerCont
        );
        _view_pl_header__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(
          _view_pl_header_cont__WEBPACK_IMPORTED_MODULE_9__.headerTag
        );

        _view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__[
          "default"
        ].appendChild(
          _view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
        );

        _view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__[
          "default"
        ].appendChild(_view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav);

        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navTitle
        );
        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addProjectButton
        );
        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addProjectButton.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addProjectButtonImg
        );
        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.nav.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addTaskButton
        );
        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addTaskButton.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.addTaskButtonImg
        );

        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navTitle.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navProjectList
        );
        _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navProjectList.appendChild(
          _view_pl_nav__WEBPACK_IMPORTED_MODULE_7__.navProjectItem
        );

        _view_pl_mainContainer__WEBPACK_IMPORTED_MODULE_5__[
          "default"
        ].appendChild(_view_pl_main__WEBPACK_IMPORTED_MODULE_4__.main);

        _view_pl_pageContainer__WEBPACK_IMPORTED_MODULE_1__[
          "default"
        ].appendChild(_view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footer);
        _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footer.appendChild(
          _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footerTag
        );
        _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.footer.appendChild(
          _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.clearLocalStorageBtn
        );
        _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.clearLocalStorageBtn.appendChild(
          _view_pl_footer__WEBPACK_IMPORTED_MODULE_3__.clearBtnIcon
        );

        (0,
        _helpers_localStorage__WEBPACK_IMPORTED_MODULE_12__.checkLocalStorage)();

        (0,
        _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__.updateNavProjectList)();

        (0,
        _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_10__["default"])();

        (0, _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_11__["default"])();

        (0,
        _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__["default"])();

        /***/
      },

    /***/ "./src/view/pl-footer.js":
      /*!*******************************!*\
  !*** ./src/view/pl-footer.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ clearBtnIcon: () => /* binding */ clearBtnIcon,
          /* harmony export */ clearLocalStorageBtn: () =>
            /* binding */ clearLocalStorageBtn,
          /* harmony export */ footer: () => /* binding */ footer,
          /* harmony export */ footerTag: () => /* binding */ footerTag,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );
        /* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../icons/delete.svg */ "./src/icons/delete.svg"
          );
        /* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../helpers/localStorage */ "./src/helpers/localStorage.js"
          );

        const myIcon = new Image();
        myIcon.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__;

        const footerTag = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "p",
          "© 2023, by JustWaveThings",
          { class: "footer-tag" }
        );

        const footer = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "div",
          "",
          {
            class: "footer",
          }
        );

        const clearLocalStorageBtn = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "button",
          "",
          {
            class: "clear-local-storage",
            type: "button",
          }
        );

        const clearBtnIcon = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "img",
          "",
          {
            class: "clearBtnIcon",
            src: _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__,
          }
        );

        clearLocalStorageBtn.addEventListener("click", () => {
          (0,
          _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__.clearLocalStorage)();
          window.location.reload();
        });

        /***/
      },

    /***/ "./src/view/pl-header-cont.js":
      /*!************************************!*\
  !*** ./src/view/pl-header-cont.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ headerCont: () => /* binding */ headerCont,
          /* harmony export */ headerIcon: () => /* binding */ headerIcon,
          /* harmony export */ headerTag: () => /* binding */ headerTag,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );
        /* harmony import */ var _icons_todoAppIcon_svg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../icons/todoAppIcon.svg */ "./src/icons/todoAppIcon.svg"
          );

        const myIcon = new Image();

        myIcon.src = _icons_todoAppIcon_svg__WEBPACK_IMPORTED_MODULE_1__;

        const headerCont = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "h1",
          "Your Todo List!",
          {
            class: "title",
          }
        );

        const headerIcon = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "img",
          "",
          {
            src: _icons_todoAppIcon_svg__WEBPACK_IMPORTED_MODULE_1__,
          }
        );

        const headerTag = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "h2",
          " - Make It a Good Day to be Great!",
          { class: "header" }
        );

        /***/
      },

    /***/ "./src/view/pl-header.js":
      /*!*******************************!*\
  !*** ./src/view/pl-header.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );

        const header = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "header",
          "",
          {
            class: "header",
          }
        );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = header;

        /***/
      },

    /***/ "./src/view/pl-main.js":
      /*!*****************************!*\
  !*** ./src/view/pl-main.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ main: () => /* binding */ main,
          /* harmony export */ mainHeader: () => /* binding */ mainHeader,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );
        /* harmony import */ var _helpers_removeTask__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../helpers/removeTask */ "./src/helpers/removeTask.js"
          );
        /* harmony import */ var _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../helpers/redrawTaskList */ "./src/helpers/redrawTaskList.js"
          );
        /* harmony import */ var _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../helpers/refreshProjectList */ "./src/helpers/refreshProjectList.js"
          );
        /* harmony import */ var _dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../dialogs/editTaskDialog */ "./src/dialogs/editTaskDialog.js"
          );

        const main = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "section",
          "",
          {
            class: "main",
          }
        );

        const mainHeader = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "Header",
          "Project: Default",
          { class: "main-header" }
        );
        main.appendChild(mainHeader);

        const tableHeader = document.createElement("header");

        const headerCell1 = document.createElement("th");
        headerCell1.textContent = "Title";
        const headerCell2 = document.createElement("th");
        headerCell2.textContent = "Description";

        const headerCell3 = document.createElement("th");
        headerCell3.textContent = "Due Date";

        const headerCell4 = document.createElement("th");
        headerCell4.textContent = "Priority";

        const headerCell5 = document.createElement("th");
        headerCell5.textContent = "Status";

        const headerCell6 = document.createElement("th");

        const headerCell7 = document.createElement("th");

        tableHeader.appendChild(headerCell1);
        tableHeader.appendChild(headerCell2);
        tableHeader.appendChild(headerCell3);
        tableHeader.appendChild(headerCell4);
        tableHeader.appendChild(headerCell5);
        tableHeader.appendChild(headerCell6);
        tableHeader.appendChild(headerCell7);

        main.appendChild(tableHeader);

        // tableHeader.appendChild(thead);
        const bodySection = document.createElement("section");
        bodySection.className = "todo-container-holder";

        main.appendChild(bodySection);

        // event listener / event delegation for task view
        bodySection.addEventListener("click", (e) => {
          if (e.target.classList.contains("todo-remove")) {
            const id = e.target.getAttribute("data-id");
            (0, _helpers_removeTask__WEBPACK_IMPORTED_MODULE_1__["default"])(
              id
            );
          }
          if (e.target.classList.contains("todo-edit")) {
            const id = e.target.getAttribute("data-id");
            // in case user added a new project and wants to assign it to the task
            (0,
            _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])();
            _dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ].showModal();
            (0,
            _dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__.populateFormWithTodoData)(
              id
            );
            (0,
            _dialogs_editTaskDialog__WEBPACK_IMPORTED_MODULE_4__.editTaskHandler)(
              id
            );
            (0,
            _helpers_redrawTaskList__WEBPACK_IMPORTED_MODULE_2__["default"])();
          }
        });

        /***/
      },

    /***/ "./src/view/pl-mainContainer.js":
      /*!**************************************!*\
  !*** ./src/view/pl-mainContainer.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );

        const mainContainer = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "div",
          "",
          {
            class: "mainContainer",
          }
        );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          mainContainer;

        /***/
      },

    /***/ "./src/view/pl-nav.js":
      /*!****************************!*\
  !*** ./src/view/pl-nav.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addProjectButton: () =>
            /* binding */ addProjectButton,
          /* harmony export */ addProjectButtonImg: () =>
            /* binding */ addProjectButtonImg,
          /* harmony export */ addTaskButton: () => /* binding */ addTaskButton,
          /* harmony export */ addTaskButtonImg: () =>
            /* binding */ addTaskButtonImg,
          /* harmony export */ nav: () => /* binding */ nav,
          /* harmony export */ navProjectItem: () =>
            /* binding */ navProjectItem,
          /* harmony export */ navProjectList: () =>
            /* binding */ navProjectList,
          /* harmony export */ navTitle: () => /* binding */ navTitle,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );
        /* harmony import */ var _icons_add_project_svg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../icons/add_project.svg */ "./src/icons/add_project.svg"
          );
        /* harmony import */ var _icons_add_todo_svg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../icons/add_todo.svg */ "./src/icons/add_todo.svg"
          );
        /* harmony import */ var _dialogs_newProjectDialog__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../dialogs/newProjectDialog */ "./src/dialogs/newProjectDialog.js"
          );
        /* harmony import */ var _dialogs_newTaskDialog__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../dialogs/newTaskDialog */ "./src/dialogs/newTaskDialog.js"
          );
        /* harmony import */ var _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../helpers/refreshProjectList */ "./src/helpers/refreshProjectList.js"
          );
        /* harmony import */ var _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../helpers/drawNavProjectList */ "./src/helpers/drawNavProjectList.js"
          );

        const addProjectButtonIcon = new Image();
        addProjectButtonIcon.src =
          _icons_add_project_svg__WEBPACK_IMPORTED_MODULE_1__;

        const addTaskButtonIcon = new Image();
        addTaskButtonIcon.src =
          _icons_add_todo_svg__WEBPACK_IMPORTED_MODULE_2__;

        const nav = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "div",
          "",
          {
            class: "nav",
          }
        );

        const navTitle = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "title",
          "Projects",
          {
            class: "nav-title",
          }
        );

        const addProjectButton = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "button",
          "New Project",
          {
            class: "add-project-button",
          }
        );

        addProjectButton.addEventListener("click", () => {
          (0,
          _helpers_drawNavProjectList__WEBPACK_IMPORTED_MODULE_6__.updateNavProjectList)();
          _dialogs_newProjectDialog__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ].showModal();
        });

        const addProjectButtonImg = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "img",
          "",
          {
            src: _icons_add_project_svg__WEBPACK_IMPORTED_MODULE_1__,
            class: "button-img",
          }
        );

        const navProjectList = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "ul",
          "",
          {
            class: "nav-project-list",
          }
        );

        const navProjectItem = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "li",
          "",
          {
            class: "nav-project-item",
          }
        );

        const addTaskButton = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "button",
          "New Task",
          {
            class: "add-project-button",
          }
        );

        addTaskButton.addEventListener("click", () => {
          (0,
          _helpers_refreshProjectList__WEBPACK_IMPORTED_MODULE_5__[
            "default"
          ])();
          _dialogs_newTaskDialog__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ].showModal();
        });

        const addTaskButtonImg = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "img",
          "",
          {
            src: _icons_add_todo_svg__WEBPACK_IMPORTED_MODULE_2__,
            class: "button-img",
          }
        );

        /***/
      },

    /***/ "./src/view/pl-pageContainer.js":
      /*!**************************************!*\
  !*** ./src/view/pl-pageContainer.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../helpers/elementMaker */ "./src/helpers/elementMaker.js"
          );

        const pageContainer = (0,
        _helpers_elementMaker__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "div",
          "",
          {
            class: "pageContainer",
          }
        );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          pageContainer;

        /***/
      },

    /***/ "./src/view/taskView.js":
      /*!******************************!*\
  !*** ./src/view/taskView.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        function taskView(
          appendTo,
          elem,
          id,
          title = "default title",
          description = "default description",
          dueDate = "default due date",
          priority = "default priority",
          project = "default project",
          status = "default status",
          edit = "edit",
          remove = "remove"
        ) {
          const toAppendTo = document.querySelector(`${appendTo}`);
          const container = document.createElement(elem);
          container.className = "todo-container";

          const props = {
            title: {
              type: "div",
              className: "todo-title",
              textContent: title,
            },
            description: {
              type: "div",
              className: "todo-description",
              textContent: description,
            },
            dueDate: {
              type: "div",
              className: "todo-dueDate",
              textContent: dueDate,
            },
            priority: {
              type: "div",
              className: "todo-priority",
              textContent: priority,
            },
            project: {
              type: "div",
              className: "todo-project",
              textContent: project,
            },
            status: {
              type: "div",
              className: "todo-status",
              textContent: status,
            },
            edit: {
              type: "button",
              className: "todo-edit",
              textContent: edit,
              dataAttribute: id,
            },
            remove: {
              type: "button",
              className: "todo-remove",
              textContent: remove,
              dataAttribute: id,
            },
          };

          Object.keys(props).forEach((key) => {
            const elementType = document.createElement(props[key].type || elem);
            elementType.className = props[key].className;
            elementType.textContent = props[key].textContent;
            if (props[key].dataAttribute) {
              elementType.setAttribute("data-id", props[key].dataAttribute);
            }
            container.appendChild(elementType);
          });
          toAppendTo.appendChild(container);
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          taskView;

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./src/fonts/Pacifico-Regular.ttf":
      /*!****************************************!*\
  !*** ./src/fonts/Pacifico-Regular.ttf ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "c0d735fc04154e03a691.ttf";

        /***/
      },

    /***/ "./src/fonts/Roboto-Bold.ttf":
      /*!***********************************!*\
  !*** ./src/fonts/Roboto-Bold.ttf ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

        /***/
      },

    /***/ "./src/icons/add_project.svg":
      /*!***********************************!*\
  !*** ./src/icons/add_project.svg ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "f5d231678fba4afa0fe3.svg";

        /***/
      },

    /***/ "./src/icons/add_todo.svg":
      /*!********************************!*\
  !*** ./src/icons/add_todo.svg ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "3ec040adcb86d2caddd8.svg";

        /***/
      },

    /***/ "./src/icons/delete.svg":
      /*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "52f245056cd878c7e411.svg";

        /***/
      },

    /***/ "./src/icons/todoAppIcon.svg":
      /*!***********************************!*\
  !*** ./src/icons/todoAppIcon.svg ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "51093c97f08d9958e0c7.svg";

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/index.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCxpRUFBaUUsNENBQTRDLHVDQUF1QywwQ0FBMEMscUNBQXFDLDJEQUEyRCxzQ0FBc0Msc0VBQXNFLDZDQUE2Qyx5Q0FBeUMsdUNBQXVDLDBDQUEwQyx1Q0FBdUMsc0VBQXNFLDREQUE0RCw0REFBNEQsR0FBRyxnQkFBZ0IsK0JBQStCLHlEQUF5RCxvQkFBb0IsR0FBRyxjQUFjLDRCQUE0Qix5REFBeUQsb0JBQW9CLEdBQUcsVUFBVSwyQkFBMkIsaUJBQWlCLG9CQUFvQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsY0FBYyxlQUFlLG1CQUFtQixHQUFHLDZDQUE2QyxrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLGdCQUFnQixtQkFBbUIsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsZ0NBQWdDLDRDQUE0QyxjQUFjLEdBQUcsK0JBQStCLGlDQUFpQyxtQ0FBbUMsb0JBQW9CLDRCQUE0Qiw4Q0FBOEMsR0FBRyxrQkFBa0Isa0JBQWtCLGlCQUFpQixzQkFBc0IsR0FBRywwQkFBMEIsa0JBQWtCLGlCQUFpQixtQ0FBbUMsOENBQThDLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsZUFBZSw0Q0FBNEMseUJBQXlCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsaUNBQWlDLDRCQUE0QixHQUFHLDBCQUEwQixxQkFBcUIsaUJBQWlCLGtDQUFrQyxHQUFHLHVEQUF1RCxpQkFBaUIsdUJBQXVCLGNBQWMsZUFBZSxHQUFHLHlFQUF5RSwwQkFBMEIsR0FBRyx3Q0FBd0Msb0ZBQW9GLDBCQUEwQiw0QkFBNEIsOEJBQThCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDhCQUE4QixlQUFlLGlDQUFpQyxnQ0FBZ0MsNEJBQTRCLEdBQUcsNENBQTRDLGtCQUFrQiw2QkFBNkIsZ0JBQWdCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGdDQUFnQyw0QkFBNEIsaUJBQWlCLDZDQUE2QyxHQUFHLDBFQUEwRSxtQkFBbUIsaUNBQWlDLDBCQUEwQix1Q0FBdUMsNEJBQTRCLEdBQUcsMkVBQTJFLGtCQUFrQiwyQkFBMkIsZUFBZSx3QkFBd0IsR0FBRywwRkFBMEYsd0JBQXdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixpQkFBaUIsb0JBQW9CLDBCQUEwQix1Q0FBdUMsNEJBQTRCLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixtQkFBbUIsb0JBQW9CLEdBQUcsNkJBQTZCLG9CQUFvQixHQUFHLDhCQUE4QixvQkFBb0IsaUJBQWlCLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyxtQ0FBbUMsd0JBQXdCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLCtCQUErQixpQkFBaUIsR0FBRywwQkFBMEIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLHNCQUFzQixtQkFBbUIsb0JBQW9CLDRCQUE0QiwrQ0FBK0MsMEJBQTBCLEdBQUcsaUVBQWlFLCtDQUErQyxtREFBbUQsZUFBZSxHQUFHLHFFQUFxRSw0QkFBNEIsb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQiw0QkFBNEIsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLGtFQUFrRSxrQkFBa0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLGlCQUFpQixpREFBaUQsaUJBQWlCLEdBQUcscUJBQXFCLGNBQWMsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsc0JBQXNCLG9CQUFvQixpQkFBaUIsR0FBRyxzQkFBc0Isa0JBQWtCLGdDQUFnQyw4QkFBOEIsd0JBQXdCLGlCQUFpQixtQkFBbUIsNEJBQTRCLDBCQUEwQiw4Q0FBOEMsaUJBQWlCLG9CQUFvQixtQ0FBbUMsdUNBQXVDLEdBQUcsMkRBQTJELGtCQUFrQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsaUJBQWlCLDBCQUEwQiw4Q0FBOEMsaUJBQWlCLG9CQUFvQiwyQkFBMkIsc0JBQXNCLHFCQUFxQiw2Q0FBNkMsR0FBRyx3QkFBd0IsMEJBQTBCLGlCQUFpQixpQkFBaUIsR0FBRyw4QkFBOEIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLG9CQUFvQiwwQkFBMEIsR0FBRywrQkFBK0Isb0JBQW9CLG9CQUFvQiwwQkFBMEIsR0FBRyxnRUFBZ0UsNENBQTRDLG1EQUFtRCxHQUFHLDRDQUE0QyxrQkFBa0IsaUJBQWlCLEdBQUcsNEJBQTRCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLGlCQUFpQixpREFBaUQsMEJBQTBCLHVDQUF1QyxHQUFHLDZDQUE2QyxrQkFBa0IsaUJBQWlCLEdBQUcsc0JBQXNCLHlDQUF5QyxpQkFBaUIsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsa0NBQWtDLGlCQUFpQixHQUFHLGtCQUFrQixtQ0FBbUMsdUJBQXVCLHNCQUFzQiw0QkFBNEIsR0FBRyx5QkFBeUIsa0JBQWtCLGdCQUFnQixvQkFBb0IsaUJBQWlCLDBCQUEwQiw0Q0FBNEMsaUJBQWlCLG9CQUFvQiwyQkFBMkIsc0JBQXNCLHFCQUFxQiw0QkFBNEIsdUNBQXVDLEdBQUcsV0FBVyxrQkFBa0IsZUFBZSwyQkFBMkIsd0JBQXdCLDRCQUE0Qiw0QkFBNEIsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsMEJBQTBCLG1CQUFtQix3QkFBd0IsdUNBQXVDLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLDBCQUEwQixtQkFBbUIsd0JBQXdCLHVDQUF1Qyx1QkFBdUIsR0FBRyx3QkFBd0IscUJBQXFCLHVCQUF1QixHQUFHLHlEQUF5RCx1QkFBdUIsYUFBYSxjQUFjLGdDQUFnQyxHQUFHLCtCQUErQixxQkFBcUIseUJBQXlCLDhDQUE4QyxxQkFBcUIsR0FBRyxzQkFBc0Isa0JBQWtCLGVBQWUsd0JBQXdCLGdDQUFnQyxHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxVQUFVLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksaUNBQWlDLGlFQUFpRSw0Q0FBNEMsdUNBQXVDLDBDQUEwQyxxQ0FBcUMsMkRBQTJELHNDQUFzQyxzRUFBc0UsNkNBQTZDLHlDQUF5Qyx1Q0FBdUMsMENBQTBDLHVDQUF1QyxzRUFBc0UsNERBQTRELDREQUE0RCxHQUFHLGdCQUFnQiwrQkFBK0Isc0NBQXNDLG9CQUFvQixHQUFHLGNBQWMsNEJBQTRCLDJDQUEyQyxvQkFBb0IsR0FBRyxVQUFVLDJCQUEyQixpQkFBaUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLGVBQWUsbUJBQW1CLEdBQUcsNkNBQTZDLGtCQUFrQiwyQkFBMkIsR0FBRyxvQkFBb0IsZ0JBQWdCLG1CQUFtQixHQUFHLDJCQUEyQixrQkFBa0Isd0JBQXdCLHdCQUF3QixnQ0FBZ0MsNENBQTRDLGNBQWMsR0FBRywrQkFBK0IsaUNBQWlDLG1DQUFtQyxvQkFBb0IsNEJBQTRCLDhDQUE4QyxHQUFHLGtCQUFrQixrQkFBa0IsaUJBQWlCLHNCQUFzQixHQUFHLDBCQUEwQixrQkFBa0IsaUJBQWlCLG1DQUFtQyw4Q0FBOEMsR0FBRyxhQUFhLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixlQUFlLDRDQUE0Qyx5QkFBeUIsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQixpQ0FBaUMsNEJBQTRCLEdBQUcsMEJBQTBCLHFCQUFxQixpQkFBaUIsa0NBQWtDLEdBQUcsdURBQXVELGlCQUFpQix1QkFBdUIsY0FBYyxlQUFlLEdBQUcseUVBQXlFLDBCQUEwQixHQUFHLHdDQUF3QyxvRkFBb0YsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsbUJBQW1CLDBCQUEwQixvQkFBb0IsOEJBQThCLGVBQWUsaUNBQWlDLGdDQUFnQyw0QkFBNEIsR0FBRyw0Q0FBNEMsa0JBQWtCLDZCQUE2QixnQkFBZ0IsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQixpQkFBaUIsZ0NBQWdDLDRCQUE0QixpQkFBaUIsNkNBQTZDLEdBQUcsMEVBQTBFLG1CQUFtQixpQ0FBaUMsMEJBQTBCLHVDQUF1Qyw0QkFBNEIsR0FBRywyRUFBMkUsa0JBQWtCLDJCQUEyQixlQUFlLHdCQUF3QixHQUFHLDBGQUEwRix3QkFBd0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLGlCQUFpQixvQkFBb0IsMEJBQTBCLHVDQUF1Qyw0QkFBNEIsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLG1CQUFtQixvQkFBb0IsR0FBRyw2QkFBNkIsb0JBQW9CLEdBQUcsOEJBQThCLG9CQUFvQixpQkFBaUIsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLG1DQUFtQyx3QkFBd0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsK0JBQStCLGlCQUFpQixHQUFHLDBCQUEwQixrQkFBa0Isd0JBQXdCLHdCQUF3QixtQ0FBbUMsc0JBQXNCLG1CQUFtQixvQkFBb0IsNEJBQTRCLCtDQUErQywwQkFBMEIsR0FBRyxpRUFBaUUsK0NBQStDLG1EQUFtRCxlQUFlLEdBQUcscUVBQXFFLDRCQUE0QixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLDRCQUE0QixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcsa0VBQWtFLGtCQUFrQixHQUFHLGdDQUFnQyxpQkFBaUIsaUJBQWlCLGlEQUFpRCxpQkFBaUIsR0FBRyxxQkFBcUIsY0FBYyxHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxzQkFBc0Isb0JBQW9CLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4Qix3QkFBd0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsMEJBQTBCLDhDQUE4QyxpQkFBaUIsb0JBQW9CLG1DQUFtQyx1Q0FBdUMsR0FBRywyREFBMkQsa0JBQWtCLDJCQUEyQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixpQkFBaUIsMEJBQTBCLDhDQUE4QyxpQkFBaUIsb0JBQW9CLDJCQUEyQixzQkFBc0IscUJBQXFCLDZDQUE2QyxHQUFHLHdCQUF3QiwwQkFBMEIsaUJBQWlCLGlCQUFpQixHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0Isb0JBQW9CLDBCQUEwQixHQUFHLCtCQUErQixvQkFBb0Isb0JBQW9CLDBCQUEwQixHQUFHLGdFQUFnRSw0Q0FBNEMsbURBQW1ELEdBQUcsNENBQTRDLGtCQUFrQixpQkFBaUIsR0FBRyw0QkFBNEIsd0JBQXdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGlEQUFpRCwwQkFBMEIsdUNBQXVDLEdBQUcsNkNBQTZDLGtCQUFrQixpQkFBaUIsR0FBRyxzQkFBc0IseUNBQXlDLGlCQUFpQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0QixrQ0FBa0MsaUJBQWlCLEdBQUcsa0JBQWtCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLDRCQUE0QixHQUFHLHlCQUF5QixrQkFBa0IsZ0JBQWdCLG9CQUFvQixpQkFBaUIsMEJBQTBCLDRDQUE0QyxpQkFBaUIsb0JBQW9CLDJCQUEyQixzQkFBc0IscUJBQXFCLDRCQUE0Qix1Q0FBdUMsR0FBRyxXQUFXLGtCQUFrQixlQUFlLDJCQUEyQix3QkFBd0IsNEJBQTRCLDRCQUE0QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdCQUFnQiwwQkFBMEIsbUJBQW1CLHdCQUF3Qix1Q0FBdUMsR0FBRyxjQUFjLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQkFBZ0IsMEJBQTBCLG1CQUFtQix3QkFBd0IsdUNBQXVDLHVCQUF1QixHQUFHLHdCQUF3QixxQkFBcUIsdUJBQXVCLEdBQUcseURBQXlELHVCQUF1QixhQUFhLGNBQWMsZ0NBQWdDLEdBQUcsK0JBQStCLHFCQUFxQix5QkFBeUIsOENBQThDLHFCQUFxQixHQUFHLHNCQUFzQixrQkFBa0IsZUFBZSx3QkFBd0IsZ0NBQWdDLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUI7QUFDMTR0QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQSxpRUFBZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNIRCxpRUFBZSxjQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUcseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0FwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx3REFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDUztBQUNOO0FBQ3NCOztBQUVqRDtBQUNBLE1BQU0sNkRBQWlCO0FBQ3ZCLFdBQVcsNkRBQWlCO0FBQzVCOztBQUVBO0FBQ0EsaURBQWlELCtDQUFHLEtBQUs7O0FBRXpEO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLDhEQUFlO0FBQ3hCOztBQUVBLGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQzVCYzs7QUFFL0I7QUFDQSxxQ0FBcUMsc0RBQVU7QUFDL0M7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNOdkI7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNGNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUjFCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakV5QjtBQUNGO0FBQ0k7QUFDRjtBQUNHO0FBQ007O0FBRTdEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVFQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFF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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0V4QixNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvZGF0YVN0b3Jlcy9wcmlvcml0eUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9kYXRhU3RvcmVzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvZGF0YVN0b3Jlcy9zdGF0dXNMaXN0LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvZGF0YVN0b3Jlcy90b2RvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2RpYWxvZ3MvZWRpdFRhc2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9kaWFsb2dzL25ld1Byb2plY3REaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9kaWFsb2dzL25ld1Rhc2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9oZWxwZXJzL2RyYXdOYXZQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvZWxlbWVudE1ha2VyLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvaGVscGVycy9maWx0ZXJUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvaGVscGVycy9yZWRyYXdUYXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2hlbHBlcnMvcmVmcmVzaFByb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvaGVscGVycy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvaGVscGVycy90b2RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvdmlldy9wbC1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy92aWV3L3BsLWhlYWRlci1jb250LmpzIiwid2VicGFjazovL3RvZG9fYnJhdm8vLi9zcmMvdmlldy9wbC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy92aWV3L3BsLW1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy92aWV3L3BsLW1haW5Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy92aWV3L3BsLW5hdi5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL3ZpZXcvcGwtcGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvX2JyYXZvLy4vc3JjL3ZpZXcvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb19icmF2by8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXHQvKiBmcm9tIGNvb2xvcnMgKi9cXG5cXHQtLWxhcGlzLWxhenVsaTogaHNsYSgyMTAsIDUwJSwgNDAlLCAxKTtcXG5cXHQtLWNhcm9saW5hLWJsdWU6IGhzbGEoMjAxLCA1MSUsIDY5JSwgMSk7XFxuXFx0LS1jaGFyY29hbDogaHNsYSgyMDMsIDMwJSwgMjYlLCAxKTtcXG5cXHQtLWxpZ2h0LWdyZWVuOiBoc2xhKDExMiwgNjAlLCA3NCUsIDEpO1xcblxcdC0tbnlhbnphOiBoc2xhKDEyNCwgNjQlLCA5MSUsIDEpO1xcblxcblxcdC8qIGZvbnRzICAqL1xcblxcdC0tdGl0bGUtZm9udDogJ3JvYm90by1ib2xkJywgY3Vyc2l2ZTtcXG5cXHQtLXN0eWxlLWZvbnQ6ICdwYWNpZmljbycsIGN1cnNpdmU7XFxuXFxuXFx0LyogY29sb3IgYXNzaWdubWVudHMgKi9cXG5cXHQtLWxpZ2h0ZXN0LWJhY2tncm91bmQ6IHZhcigtLW55YW56YSk7XFxuXFx0LS1saWdodC1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJvbGluYS1ibHVlKTtcXG5cXHQtLXRpdGxlLXNlbGVjdGVkOiB2YXIoLS1saWdodC1ncmVlbik7XFxuXFx0LS1kYXJrLWJhY2tncm91bmQ6IHZhcigtLWNoYXJjb2FsKTtcXG5cXHQtLWFsdC1iYWNrZ3JvdW5kOiB2YXIoLS1sYXBpcy1sYXp1bGkpO1xcblxcblxcdC8qIG9wYWNpdHkgICovXFxuXFx0LS1vcGFjaXR5OiAwLjc7XFxuXFxuXFx0Lyogc2hhZG93cyAqL1xcblxcdC0tc3RhbmRhcmQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0LS10aXRsZS1zaGFkb3ctc3RhbmRhcmQ6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXHQtLXRpdGxlLXNoYWRvdy1lbXBoYXNpczogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ3JvYm90by1ib2xkJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuXFx0Zm9ybWF0OiAoJ3R0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ3BhY2lmaWNvJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFx0Zm9ybWF0OiAoJ3R0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDBzdmg7XFxufVxcblxcbi5tYWluLFxcbi5mb290ZXIsXFxuLm5hdixcXG4ucGFnZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDBkdmg7XFxufVxcbi8qIGNvbnRhaW5lciAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRnYXA6IDJyZW07XFxufVxcbi8qIGFwcCBuYW1lICovXFxuaGVhZGVyID4gaDEge1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZS1zZWxlY3RlZCk7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHR0ZXh0LXNoYWRvdzogdmFyKC0tdGl0bGUtc2hhZG93LXN0YW5kYXJkKTtcXG59XFxuXFxuaGVhZGVyID4gaW1nIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNTVweDtcXG5cXHRtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLyogcXVvdGUgKi9cXG5oMi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3BhY2l0eTogMC45O1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1zdHlsZS1mb250KTtcXG5cXHR0ZXh0LXNoYWRvdzogdmFyKC0tdGl0bGUtc2hhZG93LWVtcGhhc2lzKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhY2tncm91bmQpO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3Rlci10YWcge1xcblxcdGZvbnQtc2l6ZTogMC43cmVtO1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZS1zZWxlY3RlZCk7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNsZWFyLWxvY2FsLXN0b3JhZ2UsXFxuLmNsZWFyLWxvY2FsLXN0b3JhZ2UgPiBpbWcge1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDElO1xcblxcdGJvdHRvbTogNiU7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nOmhvdmVyLFxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlOmhvdmVyOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdUaGlzIHdpbGwgY2xlYXIgQUxMIGFwcCBkYXRhIGluIGxvY2FsIHN0b3JhZ2UuIE5vIHJlY292ZXJ5IHBvc3NpYmxlLic7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuXFx0cGFkZGluZzogMC41ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNWVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0xMjUlKTtcXG5cXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcbi8qIGhvbGRzIG5hdiBhbmQgbWFpbiAqL1xcbi5tYWluQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG5cXHRoZWlnaHQ6IDkwJTtcXG59XFxuLyogY29udGFpbmVyICovXFxuLm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcbn1cXG5cXG4vKiB0aGlzIGlzIHRoZSBwcm9qZWN0IGxhYmVsIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cXG4ubWFpbi1oZWFkZXIge1xcblxcdG1hcmdpbjogMS41cmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDJyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcbi8qIHRhc2sgY29udGFpbmVyICdjb250YWluZXInICovXFxuZGl2Lm1haW5Db250YWluZXIgPiBzZWN0aW9uID4gc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuLyogY29sdW1uIGxhYmVscyAgKi9cXG5ib2R5ID4gZGl2ID4gZGl2Lm1haW5Db250YWluZXIgPiBzZWN0aW9uID4gaGVhZGVyOm50aC1jaGlsZCgyKSB7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtc2hhZG93KTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG59XFxuXFxuaGVhZGVyID4gdGgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmhlYWRlciA+IHRoOmZpcnN0LWNoaWxkIHtcXG5cXHRmbGV4LWJhc2lzOiAxMCU7XFxufVxcblxcbmhlYWRlciA+IHRoOm50aC1jaGlsZCgyKSB7XFxuXFx0ZmxleC1iYXNpczogNDAlO1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuaGVhZGVyID4gdGg6bnRoLWNoaWxkKDMpIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuaGVhZGVyID4gdGg6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMiU7XFxufVxcblxcbnNlY3Rpb24udG9kby1jb250YWluZXItaG9sZGVyIHtcXG5cXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5hcnRpY2xlLnRvZG8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC13cmFwOiBub3dyYXA7XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTEyLCA2MCUsIDc0JSwgMC4xKTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbmFydGljbGUudG9kby1jb250YWluZXI6aG92ZXIsXFxuYXJ0aWNsZS50b2RvLWNvbnRhaW5lcjpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgxMTIsIDYwJSwgNzQlLCAwLjIpO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzUwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLyogZmxleGJveCB0aGUgZGlzcGxheSBvZiB0aGUgdG9kby1jb250YWluZXJzICovXFxuXFxuLnRvZG8tdGl0bGUge1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdGZsZXgtYmFzaXM6IDEwJTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcblxcdGZsZXgtYmFzaXM6IDQwJTtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRvZG8tZHVlRGF0ZSB7XFxuXFx0ZmxleC1iYXNpczogNiU7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG5cXHRmbGV4LWJhc2lzOiA0JTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzIHtcXG5cXHRmbGV4LWJhc2lzOiA2JTtcXG59XFxuXFxuLnRvZG8tZWRpdCB7XFxuXFx0ZmxleC1iYXNpczogNDtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG5cXHRmbGV4LWJhc2lzOiA0JTtcXG59XFxuXFxuLyogaGlkZXMgcHJvamVjdCBmcm9tIGRpc3BsYXkgaW4gdGhlIHRhYmxlICovXFxuLnRvZG8tcHJvamVjdCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbmF2IHNlY3Rpb24gICovXFxuXFxuLm5hdiB7XFxuXFx0d2lkdGg6IDI1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbnRpdGxlLm5hdi10aXRsZSB7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubmF2ID4gdGl0bGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwLjc1cmVtO1xcblxcdG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZGl2Lm5hdiA+IGJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW46IDEuM3JlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtc2hhZG93KTtcXG59XFxuXFxuYm9keSA+IGRpdiA+IGRpdi5tYWluQ29udGFpbmVyID4gZGl2Lm5hdiA+IHRpdGxlID4gdWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10aXRsZS1zaGFkb3ctc3RhbmRhcmQpO1xcbn1cXG5cXG5hLm5hdi1wcm9qZWN0LWl0ZW0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG51bC5uYXYtcHJvamVjdC1saXN0ID4gbGkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLXJlbW92ZSB7XFxuXFx0bWFyZ2luOiAwLjI1cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tcmVtb3ZlLFxcbnVsLm5hdi1wcm9qZWN0LWxpc3QgPiBsaTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtc2VsZWN0ZWQpO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmltZyxcXG5idXR0b24sXFxudWwsXFxudGl0bGUsXFxuaGVhZGVyLFxcbmkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBkaWFsb2dzICAqL1xcbmRpYWxvZyB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDIwdmg7XFxuXFx0d2lkdGg6IDIwdnc7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWJhY2tncm91bmQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5kaWFsb2cudGFza01vZGFsLFxcbmRpYWxvZy5lZGl0VGFza01vZGFsIHtcXG5cXHRoZWlnaHQ6IDcwZHZoO1xcblxcdHdpZHRoOiAzMHJlbTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZDogaHNsYSgxMTIsIDYwJSwgNzQlLCAwLjMpO1xcblxcdG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuZGlhbG9nID4gZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuZm9ybSA+IHRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG5cXG5mb3JtID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMC4xcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5sYWJlbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAxLjhyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRyaWdodDogNSU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuZm9ybSA+IC5mb3JtLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogODAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLHNDQUFzQztDQUN0Qyx1Q0FBdUM7Q0FDdkMsa0NBQWtDO0NBQ2xDLHFDQUFxQztDQUNyQyxnQ0FBZ0M7O0NBRWhDLFdB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Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBOztDQUVDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGtDQUFrQztDQUNsQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCwyQkFBMkI7QUFDNUI7O0FBRUE7OztDQUdDLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIseUNBQXlDO0NBQ3pDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0LyogZnJvbSBjb29sb3JzICovXFxuXFx0LS1sYXBpcy1sYXp1bGk6IGhzbGEoMjEwLCA1MCUsIDQwJSwgMSk7XFxuXFx0LS1jYXJvbGluYS1ibHVlOiBoc2xhKDIwMSwgNTElLCA2OSUsIDEpO1xcblxcdC0tY2hhcmNvYWw6IGhzbGEoMjAzLCAzMCUsIDI2JSwgMSk7XFxuXFx0LS1saWdodC1ncmVlbjogaHNsYSgxMTIsIDYwJSwgNzQlLCAxKTtcXG5cXHQtLW55YW56YTogaHNsYSgxMjQsIDY0JSwgOTElLCAxKTtcXG5cXG5cXHQvKiBmb250cyAgKi9cXG5cXHQtLXRpdGxlLWZvbnQ6ICdyb2JvdG8tYm9sZCcsIGN1cnNpdmU7XFxuXFx0LS1zdHlsZS1mb250OiAncGFjaWZpY28nLCBjdXJzaXZlO1xcblxcblxcdC8qIGNvbG9yIGFzc2lnbm1lbnRzICovXFxuXFx0LS1saWdodGVzdC1iYWNrZ3JvdW5kOiB2YXIoLS1ueWFuemEpO1xcblxcdC0tbGlnaHQtYmFja2dyb3VuZDogdmFyKC0tY2Fyb2xpbmEtYmx1ZSk7XFxuXFx0LS10aXRsZS1zZWxlY3RlZDogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcblxcdC0tZGFyay1iYWNrZ3JvdW5kOiB2YXIoLS1jaGFyY29hbCk7XFxuXFx0LS1hbHQtYmFja2dyb3VuZDogdmFyKC0tbGFwaXMtbGF6dWxpKTtcXG5cXG5cXHQvKiBvcGFjaXR5ICAqL1xcblxcdC0tb3BhY2l0eTogMC43O1xcblxcblxcdC8qIHNoYWRvd3MgKi9cXG5cXHQtLXN0YW5kYXJkLXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcdC0tdGl0bGUtc2hhZG93LXN0YW5kYXJkOiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFx0LS10aXRsZS1zaGFkb3ctZW1waGFzaXM6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy9Sb2JvdG8tQm9sZC50dGYpO1xcblxcdGZvcm1hdDogKCd0dGYnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdwYWNpZmljbyc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy9QYWNpZmljby1SZWd1bGFyLnR0Zik7XFxuXFx0Zm9ybWF0OiAoJ3R0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDBzdmg7XFxufVxcblxcbi5tYWluLFxcbi5mb290ZXIsXFxuLm5hdixcXG4ucGFnZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDBkdmg7XFxufVxcbi8qIGNvbnRhaW5lciAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRnYXA6IDJyZW07XFxufVxcbi8qIGFwcCBuYW1lICovXFxuaGVhZGVyID4gaDEge1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZS1zZWxlY3RlZCk7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHR0ZXh0LXNoYWRvdzogdmFyKC0tdGl0bGUtc2hhZG93LXN0YW5kYXJkKTtcXG59XFxuXFxuaGVhZGVyID4gaW1nIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNTVweDtcXG5cXHRtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLyogcXVvdGUgKi9cXG5oMi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3BhY2l0eTogMC45O1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1zdHlsZS1mb250KTtcXG5cXHR0ZXh0LXNoYWRvdzogdmFyKC0tdGl0bGUtc2hhZG93LWVtcGhhc2lzKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhY2tncm91bmQpO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3Rlci10YWcge1xcblxcdGZvbnQtc2l6ZTogMC43cmVtO1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZS1zZWxlY3RlZCk7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNsZWFyLWxvY2FsLXN0b3JhZ2UsXFxuLmNsZWFyLWxvY2FsLXN0b3JhZ2UgPiBpbWcge1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDElO1xcblxcdGJvdHRvbTogNiU7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nOmhvdmVyLFxcbi5jbGVhci1sb2NhbC1zdG9yYWdlID4gaW1nOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jbGVhci1sb2NhbC1zdG9yYWdlOmhvdmVyOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdUaGlzIHdpbGwgY2xlYXIgQUxMIGFwcCBkYXRhIGluIGxvY2FsIHN0b3JhZ2UuIE5vIHJlY292ZXJ5IHBvc3NpYmxlLic7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuXFx0cGFkZGluZzogMC41ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNWVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0xMjUlKTtcXG5cXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcbi8qIGhvbGRzIG5hdiBhbmQgbWFpbiAqL1xcbi5tYWluQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG5cXHRoZWlnaHQ6IDkwJTtcXG59XFxuLyogY29udGFpbmVyICovXFxuLm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcbn1cXG5cXG4vKiB0aGlzIGlzIHRoZSBwcm9qZWN0IGxhYmVsIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cXG4ubWFpbi1oZWFkZXIge1xcblxcdG1hcmdpbjogMS41cmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDJyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLXNoYWRvdyk7XFxuXFx0b3BhY2l0eTogdmFyKC0tb3BhY2l0eSk7XFxufVxcbi8qIHRhc2sgY29udGFpbmVyICdjb250YWluZXInICovXFxuZGl2Lm1haW5Db250YWluZXIgPiBzZWN0aW9uID4gc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuLyogY29sdW1uIGxhYmVscyAgKi9cXG5ib2R5ID4gZGl2ID4gZGl2Lm1haW5Db250YWluZXIgPiBzZWN0aW9uID4gaGVhZGVyOm50aC1jaGlsZCgyKSB7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtc2hhZG93KTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG59XFxuXFxuaGVhZGVyID4gdGgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmhlYWRlciA+IHRoOmZpcnN0LWNoaWxkIHtcXG5cXHRmbGV4LWJhc2lzOiAxMCU7XFxufVxcblxcbmhlYWRlciA+IHRoOm50aC1jaGlsZCgyKSB7XFxuXFx0ZmxleC1iYXNpczogNDAlO1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuaGVhZGVyID4gdGg6bnRoLWNoaWxkKDMpIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuaGVhZGVyID4gdGg6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMiU7XFxufVxcblxcbnNlY3Rpb24udG9kby1jb250YWluZXItaG9sZGVyIHtcXG5cXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5hcnRpY2xlLnRvZG8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC13cmFwOiBub3dyYXA7XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTEyLCA2MCUsIDc0JSwgMC4xKTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbmFydGljbGUudG9kby1jb250YWluZXI6aG92ZXIsXFxuYXJ0aWNsZS50b2RvLWNvbnRhaW5lcjpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgxMTIsIDYwJSwgNzQlLCAwLjIpO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzUwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLyogZmxleGJveCB0aGUgZGlzcGxheSBvZiB0aGUgdG9kby1jb250YWluZXJzICovXFxuXFxuLnRvZG8tdGl0bGUge1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdGZsZXgtYmFzaXM6IDEwJTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcblxcdGZsZXgtYmFzaXM6IDQwJTtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRvZG8tZHVlRGF0ZSB7XFxuXFx0ZmxleC1iYXNpczogNiU7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG5cXHRmbGV4LWJhc2lzOiA0JTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzIHtcXG5cXHRmbGV4LWJhc2lzOiA2JTtcXG59XFxuXFxuLnRvZG8tZWRpdCB7XFxuXFx0ZmxleC1iYXNpczogNDtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG5cXHRmbGV4LWJhc2lzOiA0JTtcXG59XFxuXFxuLyogaGlkZXMgcHJvamVjdCBmcm9tIGRpc3BsYXkgaW4gdGhlIHRhYmxlICovXFxuLnRvZG8tcHJvamVjdCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbmF2IHNlY3Rpb24gICovXFxuXFxuLm5hdiB7XFxuXFx0d2lkdGg6IDI1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbnRpdGxlLm5hdi10aXRsZSB7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubmF2ID4gdGl0bGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwLjc1cmVtO1xcblxcdG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZGl2Lm5hdiA+IGJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW46IDEuM3JlbTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtc2hhZG93KTtcXG59XFxuXFxuYm9keSA+IGRpdiA+IGRpdi5tYWluQ29udGFpbmVyID4gZGl2Lm5hdiA+IHRpdGxlID4gdWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10aXRsZS1zaGFkb3ctc3RhbmRhcmQpO1xcbn1cXG5cXG5hLm5hdi1wcm9qZWN0LWl0ZW0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG51bC5uYXYtcHJvamVjdC1saXN0ID4gbGkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLXJlbW92ZSB7XFxuXFx0bWFyZ2luOiAwLjI1cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tcmVtb3ZlLFxcbnVsLm5hdi1wcm9qZWN0LWxpc3QgPiBsaTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtc2VsZWN0ZWQpO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmltZyxcXG5idXR0b24sXFxudWwsXFxudGl0bGUsXFxuaGVhZGVyLFxcbmkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBkaWFsb2dzICAqL1xcbmRpYWxvZyB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDIwdmg7XFxuXFx0d2lkdGg6IDIwdnc7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWJhY2tncm91bmQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5kaWFsb2cudGFza01vZGFsLFxcbmRpYWxvZy5lZGl0VGFza01vZGFsIHtcXG5cXHRoZWlnaHQ6IDcwZHZoO1xcblxcdHdpZHRoOiAzMHJlbTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZDogaHNsYSgxMTIsIDYwJSwgNzQlLCAwLjMpO1xcblxcdG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuZGlhbG9nID4gZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuZm9ybSA+IHRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG9wYWNpdHk6IHZhcigtLW9wYWNpdHkpO1xcbn1cXG5cXG5mb3JtID4gZGl2ID4gYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMC4xcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYWNrZ3JvdW5kKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG5sYWJlbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAxLjhyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1zaGFkb3cpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRyaWdodDogNSU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuZm9ybSA+IC5mb3JtLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogODAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiY29uc3QgcHJpb3JpdHlMaXN0ID0gWydOb25lJywgJ0xvdycsICdNZWRpdW0nLCAnSGlnaCcsICdVcmdlbnQnXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpb3JpdHlMaXN0O1xuIiwiLy8gbmVlZCB0byBiZSBpbiBzeW5jIHdpdGggdGhlIHByb2plY3QgbGlzdCBpbiBsb2NhbCBzdG9yYWdlXG5cbmNvbnN0IGxvY2FsU3RvcmFnZVN0YXRlID0gSlNPTi5wYXJzZShcblx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0Jylcbik7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbi8vIHRyeWluZyB0byBtYW5hZ2UgdGhlIGRlZmF1bHQgcHJvamVjdCBzaG93aW5nIHVwIG1vcmUgdGhhbiBvbmNlIGluIHRoZSBwcm9qZWN0IGxpc3QgZHVlIHRvIGxvY2FsIHN0b3JhZ2UgYWRkaW5nIHRvIHRoZSBhcnJheVxuaWYgKCFwcm9qZWN0TGlzdC5pbmNsdWRlcygnQWxsIFRhc2tzJykpIHtcblx0cHJvamVjdExpc3QucHVzaCgnQWxsIFRhc2tzJyk7XG59XG5cbmlmICghcHJvamVjdExpc3QuaW5jbHVkZXMoJ0RlZmF1bHQnKSkge1xuXHRwcm9qZWN0TGlzdC5wdXNoKCdEZWZhdWx0Jyk7XG59XG5cbmlmIChsb2NhbFN0b3JhZ2VTdGF0ZSkge1xuXHRsb2NhbFN0b3JhZ2VTdGF0ZS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdEV4aXN0cyA9IHByb2plY3RMaXN0LmluY2x1ZGVzKHByb2plY3QpO1xuXHRcdGlmICghcHJvamVjdEV4aXN0cykge1xuXHRcdFx0cHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcblx0XHR9XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TGlzdDtcbiIsImNvbnN0IHN0YXR1c0xpc3QgPSBbXG5cdCdOb3QgU3RhcnRlZCcsXG5cdCdJbiBQcm9ncmVzcycsXG5cdCdDb21wbGV0ZWQnLFxuXHQnT24gSG9sZCcsXG5cdCdDYW5jZWxsZWQnLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzTGlzdDtcbiIsImNvbnN0IGxvY2FsU3RvcmFnZVN0YXRlID0gSlNPTi5wYXJzZShcblx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9PYmplY3RzJylcbik7XG5cbmNvbnN0IHRvZG9PYmplY3RzID0gW107XG5cbmlmIChsb2NhbFN0b3JhZ2VTdGF0ZSkge1xuXHRsb2NhbFN0b3JhZ2VTdGF0ZS5mb3JFYWNoKCh0b2RvKSA9PiB7XG5cdFx0T2JqZWN0LmFzc2lnbih0b2RvLCB7XG5cdFx0XHRnZXRUaXRsZSgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXREZXNjcmlwdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXREdWVEYXRlKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0UHJpb3JpdHkoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0UHJvamVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvamVjdDtcblx0XHRcdH0sXG5cblx0XHRcdGdldFN0YXR1cygpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc3RhdHVzO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0SWQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmlkO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0VGl0bGUodGl0bGUxKSB7XG5cdFx0XHRcdHRoaXMudGl0bGUgPSB0aXRsZTE7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbjEpIHtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uMTtcblx0XHRcdH0sXG5cblx0XHRcdHNldER1ZURhdGUoZHVlRGF0ZTEpIHtcblx0XHRcdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTE7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRQcmlvcml0eShwcmlvcml0eTEpIHtcblx0XHRcdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5MTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFByb2plY3QocHJvamVjdDEpIHtcblx0XHRcdFx0dGhpcy5wcm9qZWN0ID0gcHJvamVjdDE7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRTdGF0dXMoc3RhdHVzMSkge1xuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1czE7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dG9kb09iamVjdHMucHVzaCh0b2RvKTtcblx0fSk7XG59XG5leHBvcnQgZGVmYXVsdCB0b2RvT2JqZWN0cztcbiIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcbmltcG9ydCBzdGF0dXNMaXN0IGZyb20gJy4uL2RhdGFTdG9yZXMvc3RhdHVzTGlzdCc7XG5pbXBvcnQgcHJpb3JpdHlMaXN0IGZyb20gJy4uL2RhdGFTdG9yZXMvcHJpb3JpdHlMaXN0JztcbmltcG9ydCB0b2RvT2JqZWN0cyBmcm9tICcuLi9kYXRhU3RvcmVzL3RvZG9PYmplY3RzJztcbmltcG9ydCByZWRyYXdUb2RvTGlzdCBmcm9tICcuLi9oZWxwZXJzL3JlZHJhd1Rhc2tMaXN0JztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2hlbHBlcnMvbG9jYWxTdG9yYWdlJztcblxuLy8gdGhpcyBpcyB0aGUgZm9ybSB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBtb2RhbCwgdG8gY3JlYXRlIGEgbmV3IHRhc2tcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuZWRpdFRhc2tEaWFsb2cuY2xhc3NOYW1lID0gJ2VkaXRUYXNrTW9kYWwnO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRhc2tEaWFsb2cpO1xuXG5jb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tNb2RhbCcpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5jbGFzc05hbWUgPSAnZWRpdC10b2RvLWZvcm0nO1xuZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcbnBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbmZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG5jb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGl0bGVEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG5jb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xudGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xudGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbnRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5jb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVzY3JpcHRpb25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG5jb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbmRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG5jb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kdWVEYXRlRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG5mb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbmR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcblxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XG5kdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbmNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmlvcml0eURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbmNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xucHJpb3JpdHlJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbnByaW9yaXR5SW5wdXQudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xucHJpb3JpdHlMaXN0LmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblx0cHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xufSk7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuLy8gcHJvamVjdCBkcm9wZG93biBtZW51XG5cbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3REaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbmNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5wcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG5wcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG5cbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xucHJvamVjdElucHV0Lm5hbWUgPSAncHJvamVjdCc7XG5cbnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xufSk7XG5wcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbi8vIGVuZCBwcm9qZWN0IGRyb3Bkb3duIG1lbnVcblxuY29uc3Qgc3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdGF0dXNEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoc3RhdHVzRGl2KTtcblxuY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzJztcbnN0YXR1c0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG5cbmNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5zdGF0dXNJbnB1dC50ZXh0Q29udGVudCA9ICdTdGF0dXMnO1xuc3RhdHVzSW5wdXQubmFtZSA9ICdzdGF0dXMnO1xuc3RhdHVzTGlzdC5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHN0YXR1cztcblx0c3RhdHVzSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn0pO1xuc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0lucHV0KTtcblxuY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuLy8gZWRpdCAvIGNhbmNlbCBidXR0b25zIHdpdGggZXZlbnQgbGlzdGVuZXJzXG5cbmNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5lZGl0VGFzay50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuZWRpdFRhc2suY2xhc3NOYW1lID0gJ3N1Ym1pdC1idXR0b24nO1xuZWRpdFRhc2sudHlwZSA9ICdidXR0b24nO1xuZWRpdFRhc2submFtZSA9ICdlZGl0JztcbmJ1dHRvbkRpdi5hcHBlbmRDaGlsZChlZGl0VGFzayk7XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza0hhbmRsZXIoaWQpIHtcblx0Y29uc3QgaGFuZGxlciA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgZWRpdFRhc2tIYW5kbGVyIC0gICR7aWR9YCk7XG5cdFx0Y29uc3QgY3VyclRvZG8gPSB0b2RvT2JqZWN0cy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG5cdFx0Y3VyclRvZG8uc2V0VGl0bGUoZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSk7XG5cdFx0Y3VyclRvZG8uc2V0RGVzY3JpcHRpb24oZm9ybS5lbGVtZW50cy5kZXNjcmlwdGlvbi52YWx1ZSk7XG5cdFx0Y3VyclRvZG8uc2V0RHVlRGF0ZShmb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWUpO1xuXHRcdGN1cnJUb2RvLnNldFByaW9yaXR5KGZvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWUpO1xuXHRcdGN1cnJUb2RvLnNldFByb2plY3QoZm9ybS5lbGVtZW50cy5wcm9qZWN0LnZhbHVlKTtcblx0XHRjdXJyVG9kby5zZXRTdGF0dXMoZm9ybS5lbGVtZW50cy5zdGF0dXMudmFsdWUpO1xuXHRcdHJlZHJhd1RvZG9MaXN0KCk7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdFx0Zm9ybS5yZXNldCgpO1xuXHRcdGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG5cdH07XG5cblx0ZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG5cblx0Y29uc3QgY2xvc2VEaWFsb2dFdmVudEhhbmRsZXIgPSAoKSA9PiB7XG5cdFx0ZWRpdFRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcblx0XHRlZGl0VGFza0RpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0J2Nsb3NlJyxcblx0XHRcdGNsb3NlRGlhbG9nRXZlbnRIYW5kbGVyXG5cdFx0KTtcblx0fTtcblxuXHRlZGl0VGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIGNsb3NlRGlhbG9nRXZlbnRIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRm9ybVdpdGhUb2RvRGF0YShpZCkge1xuXHRjb25zb2xlLmxvZyhgcG9wdWxhdGVGb3JtIC0gICR7aWR9YCk7XG5cdGNvbnN0IGN1cnJUb2RvID0gdG9kb09iamVjdHMuZmluZCgodG9kbykgPT4gdG9kby5nZXRJZCgpID09PSBpZCk7XG5cdGZvcm0uZWxlbWVudHMudGl0bGUudmFsdWUgPSBjdXJyVG9kby5nZXRUaXRsZSgpO1xuXHRmb3JtLmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlID0gY3VyclRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblx0Zm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlID0gY3VyclRvZG8uZ2V0RHVlRGF0ZSgpO1xuXHRmb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlID0gY3VyclRvZG8uZ2V0UHJpb3JpdHkoKTtcblx0Zm9ybS5lbGVtZW50cy5wcm9qZWN0LnZhbHVlID0gY3VyclRvZG8uZ2V0UHJvamVjdCgpO1xuXHRmb3JtLmVsZW1lbnRzLnN0YXR1cy52YWx1ZSA9IGN1cnJUb2RvLmdldFN0YXR1cygpO1xufVxuXG5jb25zdCBjYW5jZWxFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jYW5jZWxFZGl0LnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5jYW5jZWxFZGl0LmNsYXNzTmFtZSA9ICdjYW5jZWwtYnV0dG9uJztcbmNhbmNlbEVkaXQudHlwZSA9ICdjYW5jZWwnO1xuY2FuY2VsRWRpdC5uYW1lID0gJ2NhbmNlbCc7XG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsRWRpdCk7XG5cbmNhbmNlbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZWRpdFRhc2tEaWFsb2c7XG4iLCJpbXBvcnQgcHJvamVjdExpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9wcm9qZWN0TGlzdCc7XG5pbXBvcnQgeyB1cGRhdGVOYXZQcm9qZWN0TGlzdCB9IGZyb20gJy4uL2hlbHBlcnMvZHJhd05hdlByb2plY3RMaXN0JztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2hlbHBlcnMvbG9jYWxTdG9yYWdlJztcblxuLy8gdGhpcyBpcyB0aGUgZm9ybSB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBtb2RhbCwgdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5wcm9qZWN0RGlhbG9nLmNsYXNzTmFtZSA9ICdtb2RhbCc7XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGlhbG9nKTtcblxuY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmNsYXNzTmFtZSA9ICd0b2RvLWZvcm0nO1xuZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcbnBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aXRsZScpO1xudGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50aXRsZURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbmNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xudGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG50aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG50aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG50aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xudGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbmNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG5mb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnN1Ym1pdE5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbnN1Ym1pdE5ld1Byb2plY3QuY2xhc3NOYW1lID0gJ3N1Ym1pdC1idXR0b24nO1xuc3VibWl0TmV3UHJvamVjdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXROZXdQcm9qZWN0Lm5hbWUgPSAnc3VibWl0JztcbmJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzdWJtaXROZXdQcm9qZWN0KTtcblxuY29uc3QgY2FuY2VsTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY2FuY2VsTmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuY2FuY2VsTmV3UHJvamVjdC5jbGFzc05hbWUgPSAnY2FuY2VsLWJ1dHRvbic7XG5jYW5jZWxOZXdQcm9qZWN0LnR5cGUgPSAnY2FuY2VsJztcbmNhbmNlbE5ld1Byb2plY3QubmFtZSA9ICdjYW5jZWwnO1xuYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbE5ld1Byb2plY3QpO1xuXG5zdWJtaXROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRwcm9qZWN0TGlzdC5wdXNoKHRpdGxlSW5wdXQudmFsdWUpO1xuXHR1cGRhdGVOYXZQcm9qZWN0TGlzdCgpO1xuXHRmb3JtLnJlc2V0KCk7XG5cdHByb2plY3REaWFsb2cuY2xvc2UoKTtcblx0dXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5jYW5jZWxOZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRmb3JtLnJlc2V0KCk7XG5cdHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RGlhbG9nO1xuIiwiaW1wb3J0IHByb2plY3RMaXN0IGZyb20gJy4uL2RhdGFTdG9yZXMvcHJvamVjdExpc3QnO1xuaW1wb3J0IHN0YXR1c0xpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9zdGF0dXNMaXN0JztcbmltcG9ydCBwcmlvcml0eUxpc3QgZnJvbSAnLi4vZGF0YVN0b3Jlcy9wcmlvcml0eUxpc3QnO1xuaW1wb3J0IGNyZWF0ZVRvZG9PYmplY3QgZnJvbSAnLi4vaGVscGVycy90b2RvRmFjdG9yeSc7XG5pbXBvcnQgdG9kb09iamVjdHMgZnJvbSAnLi4vZGF0YVN0b3Jlcy90b2RvT2JqZWN0cyc7XG5pbXBvcnQgcmVkcmF3VG9kb0xpc3QgZnJvbSAnLi4vaGVscGVycy9yZWRyYXdUYXNrTGlzdCc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9oZWxwZXJzL2xvY2FsU3RvcmFnZSc7XG4vLyB0aGlzIGlzIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1vZGFsLCB0byBjcmVhdGUgYSBuZXcgdGFza1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbnRhc2tEaWFsb2cuY2xhc3NOYW1lID0gJ3Rhc2tNb2RhbCc7XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGlhbG9nKTtcblxuY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tNb2RhbCcpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5jbGFzc05hbWUgPSAndG9kby1mb3JtJztcbmZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG5wYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGl0bGUnKTtcbnRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbmZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5jb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGl0bGVEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG5jb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xudGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xudGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbnRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5jb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVzY3JpcHRpb25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG5jb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbmRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG5jb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kdWVEYXRlRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG5mb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbmR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcblxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XG5kdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbmNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmlvcml0eURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbmNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xucHJpb3JpdHlJbnB1dC50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG5wcmlvcml0eUxpc3QuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXHRwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59KTtcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4vLyBwcm9qZWN0IGRyb3Bkb3duIG1lbnVcblxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdERpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xuZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbnByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5wcm9qZWN0SW5wdXQubmFtZSA9ICdwcm9qZWN0JztcbnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xufSk7XG5wcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbi8vIGVuZCBwcm9qZWN0IGRyb3Bkb3duIG1lbnVcblxuY29uc3Qgc3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdGF0dXNEaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoc3RhdHVzRGl2KTtcblxuY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzJztcbnN0YXR1c0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG5cbmNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5zdGF0dXNJbnB1dC50ZXh0Q29udGVudCA9ICdTdGF0dXMnO1xuc3RhdHVzTGlzdC5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbi50ZXh0Q29udGVudCA9IHN0YXR1cztcblx0c3RhdHVzSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn0pO1xuc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0lucHV0KTtcblxuLy8gc3VibWl0IC8gY2FuY2VsIGJ1dHRvbnMgd2l0aCBldmVudCBsaXN0ZW5lcnNcblxuY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbmZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuY29uc3Qgc3VibWl0TmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0TmV3VGFzay50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuc3VibWl0TmV3VGFzay5jbGFzc05hbWUgPSAnc3VibWl0LWJ1dHRvbic7XG5zdWJtaXROZXdUYXNrLnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdE5ld1Rhc2submFtZSA9ICdzdWJtaXQnO1xuYnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdE5ld1Rhc2spO1xuXG5jb25zdCBjYW5jZWxOZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jYW5jZWxOZXdUYXNrLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5jYW5jZWxOZXdUYXNrLmNsYXNzTmFtZSA9ICdjYW5jZWwtYnV0dG9uJztcbmNhbmNlbE5ld1Rhc2sudHlwZSA9ICdjYW5jZWwnO1xuY2FuY2VsTmV3VGFzay5uYW1lID0gJ2NhbmNlbCc7XG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsTmV3VGFzayk7XG5cbnN1Ym1pdE5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvT2JqZWN0KFxuXHRcdHRpdGxlSW5wdXQudmFsdWUsXG5cdFx0ZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcblx0XHRkdWVEYXRlSW5wdXQudmFsdWUsXG5cdFx0cHJpb3JpdHlJbnB1dC52YWx1ZSxcblx0XHRwcm9qZWN0SW5wdXQudmFsdWUsXG5cdFx0c3RhdHVzSW5wdXQudmFsdWVcblx0KTtcblx0dG9kb09iamVjdHMucHVzaChuZXdUb2RvKTtcblx0dXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdGNvbnNvbGUubG9nKHsgdG9kb09iamVjdHMgfSk7XG5cblx0Zm9ybS5yZXNldCgpO1xuXHR0YXNrRGlhbG9nLmNsb3NlKCk7XG5cdHJlZHJhd1RvZG9MaXN0KCk7XG59KTtcblxuY2FuY2VsTmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Zm9ybS5yZXNldCgpO1xuXHR0YXNrRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0RpYWxvZztcbiIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcbmltcG9ydCB7IHJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHJlZnJlc2hQcm9qZWN0TGlzdCBmcm9tICcuL3JlZnJlc2hQcm9qZWN0TGlzdCc7XG5pbXBvcnQgcmVkcmF3VG9kb0xpc3QgZnJvbSAnLi9yZWRyYXdUYXNrTGlzdCc7XG5cbmZ1bmN0aW9uIGRvbUxvYWRlZChjYWxsYmFjaykge1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTmF2UHJvamVjdExpc3QoKSB7XG5cdGRvbUxvYWRlZCgoKSA9PiB7XG5cdFx0Y29uc3QgbGlzdFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLm5hdi1wcm9qZWN0LWxpc3QnXG5cdFx0KVswXTtcblxuXHRcdHdoaWxlIChsaXN0UGFyZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdGxpc3RQYXJlbnQucmVtb3ZlQ2hpbGQobGlzdFBhcmVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0bGluay50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1wcm9qZWN0LWl0ZW0nKTtcblx0XHRcdGxpc3RQYXJlbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRcdFx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0XHRpZiAocHJvamVjdCAhPT0gJ0FsbCBUYXNrcycgJiYgcHJvamVjdCAhPT0gJ0RlZmF1bHQnKSB7XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcblx0XHRcdFx0ZGVsZXRlQnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuXHRcdFx0XHRkZWxldGVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXRpdGxlLXNlbGVjdGVkKSc7XG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzAuMnJlbSc7XG5cblx0XHRcdFx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5hdlBhbmVDbGlja3MoKSB7XG5cdGRvbUxvYWRlZCgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LXByb2plY3QtbGlzdCcpWzBdKTtcblx0Y29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtcHJvamVjdC1saXN0Jyk7XG5cdHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuXHRwYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHQoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG5cdFx0XHRpZiAocHJvamVjdExpc3QuaW5jbHVkZXMoY2xpY2tlZFByb2plY3QpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGAke2NsaWNrZWRQcm9qZWN0fSAtIHByb2plY3QgZXhpc3RzYCk7XG5cdFx0XHRcdHJlZHJhd1RvZG9MaXN0KGNsaWNrZWRQcm9qZWN0KTtcblx0XHRcdH1cblx0XHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpKSB7XG5cdFx0XHRcdGNvbnN0IHBhcmVudFRleHRDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS50ZXh0Q29udGVudFxuXHRcdFx0XHRcdC50cmltKClcblx0XHRcdFx0XHQucmVwbGFjZShlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCksICcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGFyZW50VGV4dENvbnRlbnQpO1xuXHRcdFx0XHRyZW1vdmVQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZShwYXJlbnRUZXh0Q29udGVudCk7XG5cdFx0XHRcdHJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2xpY2tlZFByb2plY3Q7XG5cdFx0fSxcblx0XHR7IGNhcHR1cmU6IHRydWUgfVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVOYXZQYW5lQ2xpY2tzO1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtLCB0ZXh0Q29udCwgYXR0cmlidXRlcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcblx0T2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdH0pO1xuXHRlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IHRvZG9PYmplY3RzIGZyb20gJy4uL2RhdGFTdG9yZXMvdG9kb09iamVjdHMnO1xuXG5mdW5jdGlvbiBmaWx0ZXJUYXNrcyhwcm9qZWN0KSB7XG5cdGNvbnN0IGZpbHRlcmVkVGFza3MgPSB0b2RvT2JqZWN0cy5maWx0ZXIoXG5cdFx0KHRvZG8pID0+IHRvZG8ucHJvamVjdCA9PT0gcHJvamVjdFxuXHQpO1xuXHRpZiAocHJvamVjdCA9PT0gJ0FsbCBUYXNrcycpIHtcblx0XHRyZXR1cm4gdG9kb09iamVjdHM7XG5cdH1cblxuXHRyZXR1cm4gZmlsdGVyZWRUYXNrcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZpbHRlcmVkVGFza3MocHJvamVjdCA9ICdBbGwgVGFza3MnKSB7XG5cdGNvbnN0IGZpbHRlcmVkVGFza3MgPSBmaWx0ZXJUYXNrcyhwcm9qZWN0KTtcblx0cmV0dXJuIGZpbHRlcmVkVGFza3M7XG59XG5cbi8qIGNvbnN0IGFjdGl2ZVRhc2tzID0gZGlzcGxheUZpbHRlcmVkVGFza3MoXG5cdGNsaWNrZWRQcm9qZWN0IHx8ICdBbGwgVGFza3MnXG4pOyAqL1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5RmlsdGVyZWRUYXNrcztcbiIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcbmltcG9ydCB0b2RvT2JqZWN0cyBmcm9tICcuLi9kYXRhU3RvcmVzL3RvZG9PYmplY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9PYmplY3RzJywgSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCkge1xuXHRKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcblx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb09iamVjdHMnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtKSB7XG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0pO1xuXHRnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuXHRjb25zb2xlLmxvZyhgbG9jYWxTdG9yYWdlIGl0ZW0gcmVtb3ZlZDogJHtpdGVtfWApO1xufVxuXG4vLyB3aXJlIHRvIGNsZWFyTG9jYWxTdG9yYWdlQnRuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGNsZWFyZWQnKTtcbn1cblxuLy8gcnVuIG9uY2UgYXQgcGFnZSBsb2FkIGluIGluZGV4LmpzXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG5cdGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuXHRcdGNvbnNvbGUubG9nKGB0aGVyZSBpcyBkYXRhIGluIGxvY2FsU3RvcmFnZWApO1xuXHRcdGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBpcyBlbXB0eScpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUxvY2FsU3RvcmFnZShpZCkge1xuXHRjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9PYmplY3RzJykpIHx8IFtdO1xuXHRjb25zb2xlLmxvZyhpdGVtcyk7XG5cdGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cdGNvbnNvbGUubG9nKGluZGV4KTtcblx0aXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9PYmplY3RzJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKHByb2plY3QpIHtcblx0Ly8gcmVtb3ZlIGZyb20gcHJvamVjdExpc3Rcblx0Y29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKSB8fCBbXTtcblx0Y29uc29sZS5sb2coaXRlbXMpO1xuXHRjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gcHJvamVjdCk7XG5cdGNvbnNvbGUubG9nKGluZGV4KTtcblx0aXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcblxuXHQvLyBSZW1vdmUgdGhlIG9iamVjdHMgdGhhdCBoYXZlIHRoYXQgcHJvamVjdCBuYW1lIGZyb20gdG9kb09iamVjdHMgYXJyYXkuXG5cdGNvbnN0IHRvZG9JdGVtcyA9XG5cdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb09iamVjdHMnKSkgfHwgW107XG5cdGNvbnNvbGUubG9nKHRvZG9JdGVtcyk7XG5cblx0bGV0IHRvZG9JbmRleCA9IDA7XG5cdHdoaWxlICh0b2RvSW5kZXggIT09IC0xKSB7XG5cdFx0dG9kb0luZGV4ID0gdG9kb0l0ZW1zLmZpbmRJbmRleChcblx0XHRcdChpdGVtKSA9PiBpdGVtLnByb2plY3QgPT09IHByb2plY3Rcblx0XHQpO1xuXHRcdHRvZG9JdGVtcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcblx0fVxuXHRjb25zb2xlLmxvZyh0b2RvSW5kZXgpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb09iamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbXMpKTtcbn1cbiIsImltcG9ydCB0YXNrVmlldyBmcm9tICcuLi92aWV3L3Rhc2tWaWV3JztcbmltcG9ydCBkaXNwbGF5RmlsdGVyZWRUYXNrcyBmcm9tICcuL2ZpbHRlclRhc2tzJztcblxuZnVuY3Rpb24gcmVkcmF3VG9kb0xpc3QoZmlsdGVyKSB7XG5cdGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdzZWN0aW9uLnRvZG8tY29udGFpbmVyLWhvbGRlcidcblx0KTtcblxuXHRjb25zdCB0b2RvQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdoZWFkZXIubWFpbi1oZWFkZXInXG5cdCk7XG5cblx0dG9kb0NvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7XG5cdFx0ZmlsdGVyIHx8ICdBbGwgVGFza3MnXG5cdH1gO1xuXG5cdHdoaWxlICh0b2RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcblx0XHR0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIuZmlyc3RDaGlsZCk7XG5cdH1cblx0Ly8gaG93IGRvIEkgZ2V0IHRoZSBwcm9qZWN0IG5hbWUgIGZyb20gdGhlIHZhcmlhYmxlICdjbGlja2VkUHJvamVjdCc/XG5cdGNvbnN0IGZpbHRlcmVkVGFza3MgPSBkaXNwbGF5RmlsdGVyZWRUYXNrcyhmaWx0ZXIgfHwgJ0FsbCBUYXNrcycpO1xuXG5cdGZpbHRlcmVkVGFza3MuZm9yRWFjaCgodG9kbykgPT4ge1xuXHRcdHRhc2tWaWV3KFxuXHRcdFx0J3NlY3Rpb24udG9kby1jb250YWluZXItaG9sZGVyJyxcblx0XHRcdCdhcnRpY2xlJyxcblx0XHRcdHRvZG8uaWQsXG5cdFx0XHR0b2RvLnRpdGxlLFxuXHRcdFx0dG9kby5kZXNjcmlwdGlvbixcblx0XHRcdHRvZG8uZHVlRGF0ZSxcblx0XHRcdHRvZG8ucHJpb3JpdHksXG5cdFx0XHR0b2RvLnByb2plY3QsXG5cdFx0XHR0b2RvLnN0YXR1cyxcblx0XHRcdHRvZG8uZWRpdCxcblx0XHRcdHRvZG8ucmVtb3ZlXG5cdFx0KTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHJhd1RvZG9MaXN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuLi9kYXRhU3RvcmVzL3Byb2plY3RMaXN0JztcblxuLy8gZm9yIHRoZSBuZXcgdGFzayBkaWFsb2dcblxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RMaXN0KCkge1xuXHRjb25zdCBwcm9qZWN0TGlzdFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0J3NlbGVjdFtuYW1lPXByb2plY3RdJ1xuXHQpO1xuXG5cdHdoaWxlIChwcm9qZWN0TGlzdFBhcmVudC5maXJzdENoaWxkKSB7XG5cdFx0cHJvamVjdExpc3RQYXJlbnQucmVtb3ZlQ2hpbGQocHJvamVjdExpc3RQYXJlbnQuZmlyc3RDaGlsZCk7XG5cdH1cblx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cdFx0cHJvamVjdExpc3RQYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZnJlc2hQcm9qZWN0TGlzdDtcbiIsImltcG9ydCB0b2RvT2JqZWN0cyBmcm9tICcuLi9kYXRhU3RvcmVzL3RvZG9PYmplY3RzJztcbmltcG9ydCByZWRyYXdUb2RvTGlzdCBmcm9tICcuL3JlZHJhd1Rhc2tMaXN0JztcbmltcG9ydCB7IHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5mdW5jdGlvbiByZW1vdmVUaGVUYXNrKGlkKSB7XG5cdGNvbnN0IGluZGV4ID0gdG9kb09iamVjdHMuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG5cdHRvZG9PYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKGlkKTtcblx0cmVkcmF3VG9kb0xpc3QoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVRoZVRhc2s7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZnVuY3Rpb24gY3JlYXRlVG9kb09iamVjdChcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0cHJvamVjdCxcblx0c3RhdHVzXG4pIHtcblx0Y29uc3QgdG9kb09iamVjdCA9IHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdHByb2plY3QsXG5cdFx0c3RhdHVzLFxuXHRcdGlkOiB1dWlkdjQoKSxcblxuXHRcdGdldFRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdFx0fSxcblxuXHRcdGdldERlc2NyaXB0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdFx0fSxcblxuXHRcdGdldER1ZURhdGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHRcdH0sXG5cblx0XHRnZXRQcmlvcml0eSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHRcdH0sXG5cblx0XHRnZXRQcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvamVjdDtcblx0XHR9LFxuXG5cdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdHVzO1xuXHRcdH0sXG5cblx0XHRnZXRJZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkO1xuXHRcdH0sXG5cblx0XHRzZXRUaXRsZSh0aXRsZTEpIHtcblx0XHRcdHRoaXMudGl0bGUgPSB0aXRsZTE7XG5cdFx0fSxcblxuXHRcdHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uMSkge1xuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uMTtcblx0XHR9LFxuXG5cdFx0c2V0RHVlRGF0ZShkdWVEYXRlMSkge1xuXHRcdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTE7XG5cdFx0fSxcblxuXHRcdHNldFByaW9yaXR5KHByaW9yaXR5MSkge1xuXHRcdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5MTtcblx0XHR9LFxuXG5cdFx0c2V0UHJvamVjdChwcm9qZWN0MSkge1xuXHRcdFx0dGhpcy5wcm9qZWN0ID0gcHJvamVjdDE7XG5cdFx0fSxcblxuXHRcdHNldFN0YXR1cyhzdGF0dXMxKSB7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1czE7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gdG9kb09iamVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb09iamVjdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHBhZ2VDb250YWluZXIgZnJvbSAnLi92aWV3L3BsLXBhZ2VDb250YWluZXInO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL3ZpZXcvcGwtaGVhZGVyJztcbmltcG9ydCB7XG5cdGZvb3RlclRhZyxcblx0Zm9vdGVyLFxuXHRjbGVhckxvY2FsU3RvcmFnZUJ0bixcblx0Y2xlYXJCdG5JY29uLFxufSBmcm9tICcuL3ZpZXcvcGwtZm9vdGVyJztcbmltcG9ydCB7IG1haW4gfSBmcm9tICcuL3ZpZXcvcGwtbWFpbic7XG5pbXBvcnQgbWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvcGwtbWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgaGFuZGxlTmF2UGFuZUNsaWNrcywge1xuXHR1cGRhdGVOYXZQcm9qZWN0TGlzdCxcbn0gZnJvbSAnLi9oZWxwZXJzL2RyYXdOYXZQcm9qZWN0TGlzdCc7XG5pbXBvcnQge1xuXHRuYXYsXG5cdG5hdlRpdGxlLFxuXHRhZGRQcm9qZWN0QnV0dG9uLFxuXHRhZGRQcm9qZWN0QnV0dG9uSW1nLFxuXHRuYXZQcm9qZWN0TGlzdCxcblx0bmF2UHJvamVjdEl0ZW0sXG5cdGFkZFRhc2tCdXR0b24sXG5cdGFkZFRhc2tCdXR0b25JbWcsXG59IGZyb20gJy4vdmlldy9wbC1uYXYnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBkaXNwbGF5RmlsdGVyZWRUYXNrcyBmcm9tICcuL2hlbHBlcnMvZmlsdGVyVGFza3MnO1xuXG5pbXBvcnQge1xuXHRoZWFkZXJDb250LFxuXHRoZWFkZXJJY29uLFxuXHRoZWFkZXJUYWcsXG59IGZyb20gJy4vdmlldy9wbC1oZWFkZXItY29udCc7XG5pbXBvcnQgcmVmcmVzaFByb2plY3RMaXN0IGZyb20gJy4vaGVscGVycy9yZWZyZXNoUHJvamVjdExpc3QnO1xuaW1wb3J0IHJlZHJhd1RvZG9MaXN0IGZyb20gJy4vaGVscGVycy9yZWRyYXdUYXNrTGlzdCc7XG5pbXBvcnQgeyBjaGVja0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vaGVscGVycy9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xucGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckljb24pO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnQpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRhZyk7XG5cbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxubmF2LmFwcGVuZENoaWxkKG5hdlRpdGxlKTtcbm5hdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbmFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbkltZyk7XG5uYXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5hZGRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25JbWcpO1xuXG5uYXZUaXRsZS5hcHBlbmRDaGlsZChuYXZQcm9qZWN0TGlzdCk7XG5uYXZQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuYXZQcm9qZWN0SXRlbSk7XG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUYWcpO1xuZm9vdGVyLmFwcGVuZENoaWxkKGNsZWFyTG9jYWxTdG9yYWdlQnRuKTtcbmNsZWFyTG9jYWxTdG9yYWdlQnRuLmFwcGVuZENoaWxkKGNsZWFyQnRuSWNvbik7XG5cbmNoZWNrTG9jYWxTdG9yYWdlKCk7XG5cbnVwZGF0ZU5hdlByb2plY3RMaXN0KCk7XG5cbnJlZnJlc2hQcm9qZWN0TGlzdCgpO1xuXG5yZWRyYXdUb2RvTGlzdCgpO1xuXG5oYW5kbGVOYXZQYW5lQ2xpY2tzKCk7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRNYWtlcic7XG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pY29ucy9kZWxldGUuc3ZnJztcbmltcG9ydCB7IGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycy9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbm15SWNvbi5zcmMgPSBpY29uO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyVGFnID0gY3JlYXRlRWxlbWVudChcblx0J3AnLFxuXHQnwqkgMjAyMywgYnkgSnVzdFdhdmVUaGluZ3MnLFxuXHR7IGNsYXNzOiAnZm9vdGVyLXRhZycgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCB7XG5cdGNsYXNzOiAnZm9vdGVyJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJMb2NhbFN0b3JhZ2VCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnJywge1xuXHRjbGFzczogJ2NsZWFyLWxvY2FsLXN0b3JhZ2UnLFxuXHR0eXBlOiAnYnV0dG9uJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJCdG5JY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHtcblx0Y2xhc3M6ICdjbGVhckJ0bkljb24nLFxuXHRzcmM6IGljb24sXG59KTtcblxuY2xlYXJMb2NhbFN0b3JhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNsZWFyTG9jYWxTdG9yYWdlKCk7XG5cdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9lbGVtZW50TWFrZXInO1xuaW1wb3J0IGljb24gZnJvbSAnLi4vaWNvbnMvdG9kb0FwcEljb24uc3ZnJztcblxuY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG5cbm15SWNvbi5zcmMgPSBpY29uO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ1lvdXIgVG9kbyBMaXN0IScsIHtcblx0Y2xhc3M6ICd0aXRsZScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywge1xuXHRzcmM6IGljb24sXG59KTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlclRhZyA9IGNyZWF0ZUVsZW1lbnQoXG5cdCdoMicsXG5cdCcgLSBNYWtlIEl0IGEgR29vZCBEYXkgdG8gYmUgR3JlYXQhJyxcblx0eyBjbGFzczogJ2hlYWRlcicgfVxuKTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudE1ha2VyJztcblxuY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgJycsIHtcblx0Y2xhc3M6ICdoZWFkZXInLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudE1ha2VyJztcbmltcG9ydCByZW1vdmVUaGVUYXNrIGZyb20gJy4uL2hlbHBlcnMvcmVtb3ZlVGFzayc7XG5pbXBvcnQgcmVkcmF3VG9kb0xpc3QgZnJvbSAnLi4vaGVscGVycy9yZWRyYXdUYXNrTGlzdCc7XG5pbXBvcnQgcmVmcmVzaFByb2plY3RMaXN0IGZyb20gJy4uL2hlbHBlcnMvcmVmcmVzaFByb2plY3RMaXN0JztcbmltcG9ydCBlZGl0VGFza0RpYWxvZywge1xuXHRlZGl0VGFza0hhbmRsZXIsXG5cdHBvcHVsYXRlRm9ybVdpdGhUb2RvRGF0YSxcbn0gZnJvbSAnLi4vZGlhbG9ncy9lZGl0VGFza0RpYWxvZyc7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICcnLCB7XG5cdGNsYXNzOiAnbWFpbicsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1haW5IZWFkZXIgPSBjcmVhdGVFbGVtZW50KFxuXHQnSGVhZGVyJyxcblx0J1Byb2plY3Q6IERlZmF1bHQnLFxuXHR7IGNsYXNzOiAnbWFpbi1oZWFkZXInIH1cbik7XG5tYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG5jb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG5jb25zdCBoZWFkZXJDZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXJDZWxsMS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG5jb25zdCBoZWFkZXJDZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXJDZWxsMi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbmNvbnN0IGhlYWRlckNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbmhlYWRlckNlbGwzLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcblxuY29uc3QgaGVhZGVyQ2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuaGVhZGVyQ2VsbDQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuXG5jb25zdCBoZWFkZXJDZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXJDZWxsNS50ZXh0Q29udGVudCA9ICdTdGF0dXMnO1xuXG5jb25zdCBoZWFkZXJDZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5cbmNvbnN0IGhlYWRlckNlbGw3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcblxudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDEpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDIpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDMpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDQpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDUpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDYpO1xudGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbDcpO1xuXG5tYWluLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuLy8gdGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQodGhlYWQpO1xuY29uc3QgYm9keVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5ib2R5U2VjdGlvbi5jbGFzc05hbWUgPSAndG9kby1jb250YWluZXItaG9sZGVyJztcblxubWFpbi5hcHBlbmRDaGlsZChib2R5U2VjdGlvbik7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIC8gZXZlbnQgZGVsZWdhdGlvbiBmb3IgdGFzayB2aWV3XG5ib2R5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tcmVtb3ZlJykpIHtcblx0XHRjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXHRcdHJlbW92ZVRoZVRhc2soaWQpO1xuXHR9XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tZWRpdCcpKSB7XG5cdFx0Y29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblx0XHQvLyBpbiBjYXNlIHVzZXIgYWRkZWQgYSBuZXcgcHJvamVjdCBhbmQgd2FudHMgdG8gYXNzaWduIGl0IHRvIHRoZSB0YXNrXG5cdFx0cmVmcmVzaFByb2plY3RMaXN0KCk7XG5cdFx0ZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG5cdFx0cG9wdWxhdGVGb3JtV2l0aFRvZG9EYXRhKGlkKTtcblx0XHRlZGl0VGFza0hhbmRsZXIoaWQpO1xuXHRcdHJlZHJhd1RvZG9MaXN0KCk7XG5cdH1cbn0pO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9lbGVtZW50TWFrZXInO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHtcblx0Y2xhc3M6ICdtYWluQ29udGFpbmVyJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGFpbmVyO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9lbGVtZW50TWFrZXInO1xuaW1wb3J0IGFkZEJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvYWRkX3Byb2plY3Quc3ZnJztcbmltcG9ydCBhZGRUYXNrSWNvbiBmcm9tICcuLi9pY29ucy9hZGRfdG9kby5zdmcnO1xuaW1wb3J0IHByb2plY3REaWFsb2cgZnJvbSAnLi4vZGlhbG9ncy9uZXdQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB0YXNrRGlhbG9nIGZyb20gJy4uL2RpYWxvZ3MvbmV3VGFza0RpYWxvZyc7XG5pbXBvcnQgcmVmcmVzaFByb2plY3RMaXN0IGZyb20gJy4uL2hlbHBlcnMvcmVmcmVzaFByb2plY3RMaXN0JztcbmltcG9ydCB7IHVwZGF0ZU5hdlByb2plY3RMaXN0IH0gZnJvbSAnLi4vaGVscGVycy9kcmF3TmF2UHJvamVjdExpc3QnO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuYWRkUHJvamVjdEJ1dHRvbkljb24uc3JjID0gYWRkQnV0dG9uSWNvbjtcblxuY29uc3QgYWRkVGFza0J1dHRvbkljb24gPSBuZXcgSW1hZ2UoKTtcbmFkZFRhc2tCdXR0b25JY29uLnNyYyA9IGFkZFRhc2tJY29uO1xuXG5leHBvcnQgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHtcblx0Y2xhc3M6ICduYXYnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBuYXZUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ3RpdGxlJywgJ1Byb2plY3RzJywge1xuXHRjbGFzczogJ25hdi10aXRsZScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KFxuXHQnYnV0dG9uJyxcblx0J05ldyBQcm9qZWN0Jyxcblx0e1xuXHRcdGNsYXNzOiAnYWRkLXByb2plY3QtYnV0dG9uJyxcblx0fVxuKTtcblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0dXBkYXRlTmF2UHJvamVjdExpc3QoKTtcblx0cHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCB7XG5cdHNyYzogYWRkQnV0dG9uSWNvbixcblx0Y2xhc3M6ICdidXR0b24taW1nJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbmF2UHJvamVjdExpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCB7XG5cdGNsYXNzOiAnbmF2LXByb2plY3QtbGlzdCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IG5hdlByb2plY3RJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywge1xuXHRjbGFzczogJ25hdi1wcm9qZWN0LWl0ZW0nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ05ldyBUYXNrJywge1xuXHRjbGFzczogJ2FkZC1wcm9qZWN0LWJ1dHRvbicsXG59KTtcblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0cmVmcmVzaFByb2plY3RMaXN0KCk7XG5cdHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdXR0b25JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywge1xuXHRzcmM6IGFkZFRhc2tJY29uLFxuXHRjbGFzczogJ2J1dHRvbi1pbWcnLFxufSk7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRNYWtlcic7XG5cbmNvbnN0IHBhZ2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywge1xuXHRjbGFzczogJ3BhZ2VDb250YWluZXInLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VDb250YWluZXI7XG4iLCJmdW5jdGlvbiB0YXNrVmlldyhcblx0YXBwZW5kVG8sXG5cdGVsZW0sXG5cdGlkLFxuXHR0aXRsZSA9ICdkZWZhdWx0IHRpdGxlJyxcblx0ZGVzY3JpcHRpb24gPSAnZGVmYXVsdCBkZXNjcmlwdGlvbicsXG5cdGR1ZURhdGUgPSAnZGVmYXVsdCBkdWUgZGF0ZScsXG5cdHByaW9yaXR5ID0gJ2RlZmF1bHQgcHJpb3JpdHknLFxuXHRwcm9qZWN0ID0gJ2RlZmF1bHQgcHJvamVjdCcsXG5cdHN0YXR1cyA9ICdkZWZhdWx0IHN0YXR1cycsXG5cdGVkaXQgPSAnZWRpdCcsXG5cdHJlbW92ZSA9ICdyZW1vdmUnXG4pIHtcblx0Y29uc3QgdG9BcHBlbmRUbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7YXBwZW5kVG99YCk7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAndG9kby1jb250YWluZXInO1xuXG5cdGNvbnN0IHByb3BzID0ge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdGNsYXNzTmFtZTogJ3RvZG8tdGl0bGUnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHRpdGxlLFxuXHRcdH0sXG5cdFx0ZGVzY3JpcHRpb246IHtcblx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1kZXNjcmlwdGlvbicsXG5cdFx0XHR0ZXh0Q29udGVudDogZGVzY3JpcHRpb24sXG5cdFx0fSxcblx0XHRkdWVEYXRlOiB7XG5cdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdGNsYXNzTmFtZTogJ3RvZG8tZHVlRGF0ZScsXG5cdFx0XHR0ZXh0Q29udGVudDogZHVlRGF0ZSxcblx0XHR9LFxuXHRcdHByaW9yaXR5OiB7XG5cdFx0XHR0eXBlOiAnZGl2Jyxcblx0XHRcdGNsYXNzTmFtZTogJ3RvZG8tcHJpb3JpdHknLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHByaW9yaXR5LFxuXHRcdH0sXG5cdFx0cHJvamVjdDoge1xuXHRcdFx0dHlwZTogJ2RpdicsXG5cdFx0XHRjbGFzc05hbWU6ICd0b2RvLXByb2plY3QnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHByb2plY3QsXG5cdFx0fSxcblx0XHRzdGF0dXM6IHtcblx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1zdGF0dXMnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHN0YXR1cyxcblx0XHR9LFxuXHRcdGVkaXQ6IHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1lZGl0Jyxcblx0XHRcdHRleHRDb250ZW50OiBlZGl0LFxuXHRcdFx0ZGF0YUF0dHJpYnV0ZTogaWQsXG5cdFx0fSxcblx0XHRyZW1vdmU6IHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3NOYW1lOiAndG9kby1yZW1vdmUnLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHJlbW92ZSxcblx0XHRcdGRhdGFBdHRyaWJ1dGU6IGlkLFxuXHRcdH0sXG5cdH07XG5cblx0T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdHByb3BzW2tleV0udHlwZSB8fCBlbGVtXG5cdFx0KTtcblx0XHRlbGVtZW50VHlwZS5jbGFzc05hbWUgPSBwcm9wc1trZXldLmNsYXNzTmFtZTtcblx0XHRlbGVtZW50VHlwZS50ZXh0Q29udGVudCA9IHByb3BzW2tleV0udGV4dENvbnRlbnQ7XG5cdFx0aWYgKHByb3BzW2tleV0uZGF0YUF0dHJpYnV0ZSkge1xuXHRcdFx0ZWxlbWVudFR5cGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvcHNba2V5XS5kYXRhQXR0cmlidXRlKTtcblx0XHR9XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRUeXBlKTtcblx0fSk7XG5cdHRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza1ZpZXc7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
