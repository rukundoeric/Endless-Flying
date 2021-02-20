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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://endless-flying/./src/index.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameConfig\": () => (/* binding */ gameConfig),\n/* harmony export */   \"gameConfig1\": () => (/* binding */ gameConfig1)\n/* harmony export */ });\n/* eslint-disable no-undef */\nconst gameConfig = {\n  type: Phaser.AUTO,\n  width: 800,\n  height: 600,\n  parent: 'game-content'\n};\nconst gameConfig1 = {\n  type: Phaser.AUTO,\n  width: 1334,\n  height: 750\n};\n\n//# sourceURL=webpack://endless-flying/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n/* eslint-disable no-undef */\n\nconst game = new Phaser.Game(_config__WEBPACK_IMPORTED_MODULE_0__.gameConfig);\nconst mainState = {\n  preload() {\n    game.load.image('plane', '../assets/images/plane.png');\n    game.load.image('pipe', '../assets/images/pipe.png');\n    game.load.image('background', '../assets/images/background.png');\n  },\n\n  create() {\n    game.add.tileSprite(0, 0, 1000, 600, 'background'); // game.stage.backgroundColor = '#71c5cf';\n    // start physics\n\n    game.physics.startSystem(Phaser.Physics.ARCADE);\n    this.plane = game.add.sprite(100, 245, 'plane'); // appyphyisics to plane\n\n    game.physics.arcade.enable(this.plane);\n    this.plane.body.gravity.y = 1000; // jump\n\n    const spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);\n    spaceKey.onDown.add(this.jump, this); // Pause\n\n    const pKey = game.input.keyboard.addKey(Phaser.Keyboard.P);\n    pKey.onDown.add(this.pause, this);\n    this.pipes = game.add.group();\n    this.timer = game.time.events.loop(2000, this.addRowOfPipes, this);\n    this.score = 0;\n    this.labelScore = game.add.text(20, 20, '0', {\n      font: '30px Arial',\n      fill: '#fff'\n    });\n    this.plane.width = 68;\n    this.plane.height = 55;\n  },\n\n  pause() {\n    if (game.paused) {\n      game.paused = false;\n    } else {\n      game.paused = true;\n    }\n  },\n\n  update() {\n    // restart game if plane goes above or blow screen\n    if (this.plane.y < 0 || this.plane.y > 600) {\n      this.restartGame();\n    }\n\n    game.physics.arcade.overlap(this.plane, this.pipes, this.restartGame, null, this);\n  },\n\n  jump() {\n    this.plane.body.velocity.y = -350;\n  },\n\n  restartGame() {\n    game.state.start('main');\n  },\n\n  addOnePipe(x, y) {\n    const pipe = game.add.sprite(x, y, 'pipe');\n    this.pipes.add(pipe);\n    game.physics.arcade.enable(pipe);\n    pipe.body.velocity.x = -200;\n    pipe.checkWorldBounds = true;\n    pipe.outOfBoundsKill = true;\n  },\n\n  addRowOfPipes() {\n    const hole = Math.floor(Math.random() * 4) + 1;\n\n    for (let i = 0; i < 10; i += 1) {\n      if (i !== hole && i !== hole + 1) {\n        this.addOnePipe(700, i * 100 + 10);\n      }\n    }\n\n    this.score += 100;\n    this.labelScore.text = this.score;\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  game.state.add('main', mainState);\n  game.state.start('main');\n});\n\n//# sourceURL=webpack://endless-flying/./src/modules/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;