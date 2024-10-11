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

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://practice-work-1_advanced/./src/style/styles.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/styles.scss */ \"./src/style/styles.scss\");\n\r\n\r\nconst posts = document.querySelector(\"#posts\");\r\n\r\nposts.addEventListener(\"click\", (e) => {\r\n  fetch(\"https://jsonplaceholder.typicode.com/posts\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const rightSection = document.querySelector(\".section-right\");\r\n      rightSection.innerHTML = \"\";\r\n\r\n      const template = document.createElement(\"template\");\r\n      rightSection.append(template);\r\n\r\n      data.forEach((post) => {\r\n        const postElement = document.createElement(\"div\");\r\n\r\n        postElement.style.border = \"2px solid #D97EB0\";\r\n\r\n        postElement.className = \"post\";\r\n        postElement.innerHTML = `\r\n                  <h2>${post.title}</h2>\r\n                    <p>${post.body}</p>\r\n                    <button\r\n          class=\"btn-favorite-heart\"\r\n          data-id=\"${post.id}\"\r\n          style=\"\r\n           background-size: cover;\r\n           border: none;\r\n           cursor: pointer;\r\n           visibility: visible;\r\n           font-size:50px;\r\n          \"\r\n        >❤\r\n        </button>\r\n                `;\r\n        template.content.appendChild(postElement);\r\n      });\r\n\r\n      const clone = document.importNode(template.content, true);\r\n\r\n      rightSection.appendChild(clone);\r\n\r\n      const favoriteHeartButtons = document.querySelectorAll(\r\n        \".btn-favorite-heart\"\r\n      );\r\n\r\n      favoriteHeartButtons.forEach((button) => {\r\n        button.addEventListener(\"click\", (event) => {\r\n          const postId = button.getAttribute(\"data-id\");\r\n          const postTitle = button\r\n            .closest(\".post\")\r\n            .querySelector(\"h2\").textContent;\r\n          const postBody = button\r\n            .closest(\".post\")\r\n            .querySelector(\"p\").textContent;\r\n\r\n          let favoritePosts =\r\n            JSON.parse(localStorage.getItem(\"favoritePosts\")) || [];\r\n\r\n          if (button.classList.contains(\"added-to-favorite\")) {\r\n            button.style.color = \"white\";\r\n            button.classList.remove(\"added-to-favorite\");\r\n\r\n            favoritePosts = favoritePosts.filter((post) => post.id !== postId);\r\n\r\n            localStorage.setItem(\r\n              \"favoritePosts\",\r\n              JSON.stringify(favoritePosts)\r\n            );\r\n            const postDeleteElement = button.closest(\".post\");\r\n            postDeleteElement.remove();\r\n\r\n            console.log(`Post with ID ${postId} removed from favorites`);\r\n          } else {\r\n            button.style.color = \"red\";\r\n            button.style.fontSize = \"70px\";\r\n            button.classList.add(\"added-to-favorite\");\r\n\r\n            const postDetails = {\r\n              id: postId,\r\n              title: postTitle,\r\n              body: postBody,\r\n            };\r\n\r\n            favoritePosts.push(postDetails);\r\n\r\n            console.log(`Post with ID ${postId} added to favorites`);\r\n          }\r\n          localStorage.setItem(\"favoritePosts\", JSON.stringify(favoritePosts));\r\n        });\r\n      });\r\n      const favoriteButton = document.querySelector(\"#favorite-btn\");\r\n\r\n      favoriteButton.addEventListener(\"click\", (event) => {\r\n        const rightSection = document.querySelector(\".section-right\");\r\n        rightSection.innerHTML = \"\";\r\n\r\n        const favoritePosts =\r\n          JSON.parse(localStorage.getItem(\"favoritePosts\")) || [];\r\n\r\n        if (favoritePosts.length === 0) {\r\n          rightSection.innerHTML = \"<p>You don't have any favorite posts</p>\";\r\n        } else {\r\n          favoritePosts.forEach((post) => {\r\n            const postElement = document.createElement(\"div\");\r\n            postElement.innerHTML = `\r\n        <p>Post with ID: ${post.id}</p>\r\n        <h2>${post.title}</h2>\r\n        <p>${post.body}</p>\r\n      `;\r\n            rightSection.append(postElement);\r\n          });\r\n        }\r\n      });\r\n    })\r\n\r\n    .catch((error) => console.error(\"Error\", error));\r\n});\r\n\n\n//# sourceURL=webpack://practice-work-1_advanced/./src/js/index.js?");

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