/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");


 // Create new element for the task list

function createTheElement(taskText, element, elementClass) {
  const newListElement = document.createElement(element);
  newListElement.classList.add(elementClass);
  newListElement.innerHTML = `
    <div class="main__item-done">
        <div class="main__item-ico">
            <img src="assets/images/ok-img.svg" alt="trash icon">
        </div>
        <span>This task is done</span>
    </div>
    <span class="main__item-span">${taskText}</span>
    <button class="main__item-btn">Done</button>
    <div class="main__item-del">
        <img src="assets/images/iwwa_trash.svg" alt="trash icon">
    </div>
`;
  return newListElement;
} // functions for shifting classes


function removingClass(item, elementClass) {
  item.classList.remove(elementClass);
}

function addingClass(item, elementClass) {
  item.classList.add(elementClass);
}

function shiftingClass(item, elementClass) {
  if (item.classList.contains(elementClass)) {
    removingClass(item, elementClass);
  } else {
    addingClass(item, elementClass);
  }
} // function to adde an element into the task list


function addElementToList(parent, element) {
  let mainParent = document.querySelector(parent);
  let newElement = element;

  if (newElement.classList.contains('done')) {
    mainParent.append(newElement);
  } else {
    mainParent.prepend(newElement);
  }
} // function for changing text content in an element


function changeTaskCongition(buttons, actionClass, mainText, changedText) {
  let button = document.querySelectorAll(buttons);
  button.forEach(item => {
    if (item.parentElement.classList.contains(actionClass)) {
      item.textContent = changedText;
      return item;
    } else {
      item.textContent = mainText;
      return item;
    }
  });
} // function for deleting an element


function deleteListItem(element, questionText) {
  const confirmMessage = confirm(questionText);

  if (confirmMessage) {
    element.parentElement.remove();
  }

  return;
} // function for working with listener


document.addEventListener('click', event => {
  event.preventDefault();
  let clickedElement = event.target;

  if (clickedElement && clickedElement.parentElement.classList.contains('main__item-del')) {
    deleteListItem(clickedElement.parentElement, 'Do you really want to delete this task?');
  }

  if (clickedElement && clickedElement.classList.contains('main__item-btn')) {
    shiftingClass(clickedElement.parentElement, 'done');
    changeTaskCongition('.main__item-btn', 'done', 'Done', 'Undone');
    addElementToList('.main__list', clickedElement.parentElement);
  }

  if (clickedElement && clickedElement.classList.contains('main__create-task')) {
    let taskValue = document.querySelector('.main__task-input'),
        form = document.querySelector('.main__form form');

    if (taskValue.value && taskValue.value.length >= 5) {
      addElementToList('.main__list', createTheElement(taskValue.value, 'li', 'main__item'));
    }

    form.reset();
  }
}); // creating preloader

let preloader = document.querySelector('.preloader');
addingClass(preloader, 'active'); // geting all tasks from the server and putting it into to do list

let tasksData = fetch('https://jsonplaceholder.typicode.com/todos');
tasksData.then(resolve => resolve.json()).then(resolve => {
  removingClass(preloader, 'active');
  let newDb = resolve.filter(item => {
    return item.userId === 1;
  });
  newDb.forEach(el => {
    let newListItem = createTheElement(el.title, 'li', 'main__item');

    if (el.completed === true) {
      addingClass(newListItem, 'done');
    }

    addElementToList('.main__list', newListItem);
    changeTaskCongition('.main__item-btn', 'done', 'Done', 'Undone');
  });
}).catch(error => console.log(error));

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map