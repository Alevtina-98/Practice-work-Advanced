/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/styles.scss":
/*!*******************************!*\
  !*** ./src/style/styles.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   container: () => (/* binding */ _1),\n/* harmony export */   \"favorite-btn\": () => (/* binding */ _2),\n/* harmony export */   posts: () => (/* binding */ _3),\n/* harmony export */   \"section-left\": () => (/* binding */ _4),\n/* harmony export */   \"section-right\": () => (/* binding */ _5)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\nvar _1 = \"DYKuMrVwYcyZTTQnkswg\";\nvar _2 = \"q07cWTLSo1LwJREmNAed\";\nvar _3 = \"t8zy2hBml5LtoAA2ibRZ\";\nvar _4 = \"YbWO7hbk2P_7DHYGKQhs\";\nvar _5 = \"xoeHLHgfUiZsbULw0nMI\";\n\n\n\n//# sourceURL=webpack://practice-work-1_advanced/./src/style/styles.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/styles.scss */ \"./src/style/styles.scss\");\n\r\n\r\nconst posts = document.querySelector(\"#posts\");\r\n\r\nposts.addEventListener(\"click\", (e) => {\r\n  fetch(\"https://jsonplaceholder.typicode.com/posts\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const rightSection = document.querySelector(\".section-right\");\r\n      rightSection.innerHTML = \"\";\r\n\r\n      data.forEach((post) => {\r\n        const postElement = document.createElement(\"div\");\r\n\r\n        postElement.className = \"post\";\r\n        postElement.innerHTML = `\r\n                  <h2>${post.title}</h2>\r\n                    <p>${post.body}</p>\r\n                    <button\r\n          class=\"btn-favorite-heart\"\r\n          data-id=\"${post.id}\"\r\n          style=\"background-image: url(./assets/img/heart-svgrepo-com.svg);\r\n           background-size: cover;\r\n           border: none;\r\n           cursor: pointer;\r\n           height: 30px;\r\n           width: 30px;\r\n           visibility: visible;\r\n          \"\r\n        ></button>\r\n                `;\r\n        rightSection.append(postElement);\r\n      });\r\n    })\r\n\r\n    .catch((error) => console.error(\"Error\", error));\r\n});\r\n\n\n//# sourceURL=webpack://practice-work-1_advanced/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;