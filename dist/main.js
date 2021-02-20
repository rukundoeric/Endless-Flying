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

/***/ "./src/helpers/element.js":
/*!********************************!*\
  !*** ./src/helpers/element.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Element),\n/* harmony export */   \"welcome_content\": () => (/* binding */ welcome_content),\n/* harmony export */   \"game_container\": () => (/* binding */ game_container),\n/* harmony export */   \"username_div\": () => (/* binding */ username_div),\n/* harmony export */   \"option_btns\": () => (/* binding */ option_btns),\n/* harmony export */   \"leaderboard\": () => (/* binding */ leaderboard),\n/* harmony export */   \"username_form\": () => (/* binding */ username_form),\n/* harmony export */   \"start_btn\": () => (/* binding */ start_btn),\n/* harmony export */   \"leaderboard_btn\": () => (/* binding */ leaderboard_btn),\n/* harmony export */   \"l_back_btn\": () => (/* binding */ l_back_btn),\n/* harmony export */   \"play_btn\": () => (/* binding */ play_btn),\n/* harmony export */   \"pause_btn\": () => (/* binding */ pause_btn),\n/* harmony export */   \"menu_btn\": () => (/* binding */ menu_btn)\n/* harmony export */ });\n/* eslint-disable camelcase */\nclass Element {\n  find(value) {\n    this.elm = document.querySelector(value);\n    return this;\n  }\n\n  get() {\n    return this.elm;\n  }\n\n  setText(text) {\n    this.elm.innerHTML = text;\n    return this;\n  }\n\n  hide() {\n    this.elm.style.display = 'none';\n    return this;\n  }\n\n  show(d) {\n    this.elm.style.display = d;\n    return this;\n  }\n\n}\nconst welcome_content = new Element().find('#welcome-content');\nconst game_container = new Element().find('#game-container');\nconst username_div = new Element().find('#username-div');\nconst option_btns = new Element().find('#option-btns');\nconst leaderboard = new Element().find('#leaderboard');\nconst username_form = new Element().find('#username-form');\nconst start_btn = new Element().find('#start-btn');\nconst leaderboard_btn = new Element().find('#leaderboard-btn');\nconst l_back_btn = new Element().find('#l-back-btn');\nconst play_btn = new Element().find('#play-btn');\nconst pause_btn = new Element().find('#pause-btn');\nconst menu_btn = new Element().find('#menu-btn');\n\n//# sourceURL=webpack://endless-flying/./src/helpers/element.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui_control */ \"./src/modules/ui_control.js\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/events */ \"./src/modules/events.js\");\n\n\n\n(0,_modules_ui_control__WEBPACK_IMPORTED_MODULE_0__.Start)();\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n\n//# sourceURL=webpack://endless-flying/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveUser\": () => (/* binding */ saveUser),\n/* harmony export */   \"getCurrentUser\": () => (/* binding */ getCurrentUser),\n/* harmony export */   \"loadLeaderboard\": () => (/* binding */ loadLeaderboard),\n/* harmony export */   \"saveScorer\": () => (/* binding */ saveScorer)\n/* harmony export */ });\n/* harmony import */ var _ui_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_control */ \"./src/modules/ui_control.js\");\n/* eslint-disable import/no-cycle */\n\nconst saveUser = e => {\n  e.preventDefault();\n  localStorage.setItem('endless_frying_current_user', new FormData(e.target).get('username'));\n  (0,_ui_control__WEBPACK_IMPORTED_MODULE_0__.switchComponents)('options');\n  return true;\n};\nconst getCurrentUser = () => localStorage.getItem('endless_frying_current_user');\nconst loadLeaderboard = () => {};\nconst saveScorer = () => {};\n\n//# sourceURL=webpack://endless-flying/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameConfig\": () => (/* binding */ gameConfig),\n/* harmony export */   \"gameConfig1\": () => (/* binding */ gameConfig1)\n/* harmony export */ });\n/* eslint-disable no-undef */\nconst gameConfig = {\n  type: Phaser.AUTO,\n  width: 1000,\n  height: 500,\n  parent: 'game-content'\n};\nconst gameConfig1 = {\n  type: Phaser.AUTO,\n  width: 1334,\n  height: 750\n};\n\n//# sourceURL=webpack://endless-flying/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/element */ \"./src/helpers/element.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/modules/app.js\");\n/* harmony import */ var _ui_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_control */ \"./src/modules/ui_control.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/modules/game.js\");\n/* eslint-disable camelcase */\n\n\n\n\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.username_form.get().addEventListener('submit', _app__WEBPACK_IMPORTED_MODULE_1__.saveUser);\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.leaderboard_btn.get().addEventListener('click', () => {\n  (0,_ui_control__WEBPACK_IMPORTED_MODULE_2__.switchComponents)('leaderboard');\n});\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.l_back_btn.get().addEventListener('click', () => {\n  (0,_ui_control__WEBPACK_IMPORTED_MODULE_2__.switchComponents)('options');\n});\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.start_btn.get().addEventListener('click', () => {\n  (0,_ui_control__WEBPACK_IMPORTED_MODULE_2__.switchSections)('game-s');\n});\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.play_btn.get().addEventListener('click', () => {\n  (0,_game__WEBPACK_IMPORTED_MODULE_3__.play)();\n});\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.pause_btn.get().addEventListener('click', () => {\n  (0,_game__WEBPACK_IMPORTED_MODULE_3__.pause)();\n});\n_helpers_element__WEBPACK_IMPORTED_MODULE_0__.menu_btn.get().addEventListener('click', () => {\n  (0,_ui_control__WEBPACK_IMPORTED_MODULE_2__.switchSections)('welcome-s');\n});\n\n//# sourceURL=webpack://endless-flying/./src/modules/events.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startGame\": () => (/* binding */ startGame),\n/* harmony export */   \"pause\": () => (/* binding */ pause),\n/* harmony export */   \"play\": () => (/* binding */ play)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n/* eslint-disable import/prefer-default-export */\n\n/* eslint-disable no-undef */\n\nconst game = new Phaser.Game(_config__WEBPACK_IMPORTED_MODULE_0__.gameConfig);\nlet score = 0;\nconst startScene = {\n  preload() {\n    game.load.image('background', '../assets/images/start_bg.png');\n  },\n\n  create() {\n    game.add.tileSprite(0, 0, 1000, 600, 'background');\n  }\n\n};\nconst playingScene = {\n  preload() {\n    game.load.image('plane', '../assets/images/plane.png');\n    game.load.image('pipe', '../assets/images/pipe.png');\n    game.load.image('background', '../assets/images/background.png');\n  },\n\n  create() {\n    game.add.tileSprite(0, 0, 1000, 600, 'background');\n    game.physics.startSystem(Phaser.Physics.ARCADE);\n    this.plane = game.add.sprite(100, 245, 'plane');\n    game.physics.arcade.enable(this.plane);\n    this.plane.body.gravity.y = 1000;\n    const spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);\n    spaceKey.onDown.add(this.jump, this);\n    const pKey = game.input.keyboard.addKey(Phaser.Keyboard.P);\n    pKey.onDown.add(this.pause, this);\n    this.pipes = game.add.group();\n    this.timer = game.time.events.loop(2000, this.addRowOfPipes, this);\n    score = 0;\n    this.labelScore = game.add.text(20, 20, '0', {\n      font: '30px Arial',\n      fill: '#fff'\n    });\n    this.plane.width = 68;\n    this.plane.height = 55;\n  },\n\n  pause() {\n    if (game.paused) {\n      game.paused = false;\n    } else {\n      game.paused = true;\n    }\n  },\n\n  update() {\n    if (this.plane.y < 0 || this.plane.y > 520) {\n      this.gameOver();\n    }\n\n    game.physics.arcade.overlap(this.plane, this.pipes, this.gameOver, null, this);\n  },\n\n  jump() {\n    this.plane.body.velocity.y = -350;\n  },\n\n  restartGame() {\n    game.state.start('playingScene');\n  },\n\n  addOnePipe(x, y) {\n    const pipe = game.add.sprite(x, y, 'pipe');\n    this.pipes.add(pipe);\n    game.physics.arcade.enable(pipe);\n    pipe.body.velocity.x = -200;\n    pipe.checkWorldBounds = true;\n    pipe.outOfBoundsKill = true;\n  },\n\n  addRowOfPipes() {\n    const hole = Math.floor(Math.random() * 2) + 1;\n\n    for (let i = 0; i < 10; i += 1) {\n      if (i !== hole && i !== hole + 1) {\n        this.addOnePipe(1000, i * 100 + 10);\n      }\n    }\n\n    score += 100;\n    this.labelScore.text = score;\n  },\n\n  gameOver() {\n    game.state.start('gameOverScene');\n  }\n\n};\nconst gameOverScene = {\n  preload() {\n    game.load.image('gameover', '../assets/images/gameover.png');\n  },\n\n  create() {\n    game.stage.backgroundColor = '#CCFF66';\n    this.gameover = game.add.sprite(game.world.centerX - 280, 150, 'gameover');\n    this.labelScore = game.add.text(game.world.centerX - 70, 250, `${score}`, {\n      font: '80px Bauhaus',\n      fontWeight: 800,\n      fill: '#59CB42'\n    });\n  }\n\n};\ngame.state.add('startScene', startScene);\ngame.state.add('playingScene', playingScene);\ngame.state.add('gameOverScene', gameOverScene);\nconst startGame = () => {\n  game.state.start('startScene');\n};\nconst pause = () => {\n  if (!game.paused) {\n    game.paused = true;\n  }\n};\nconst play = () => {\n  if (game.paused) {\n    game.paused = false;\n  } else {\n    game.state.start('playingScene');\n  }\n};\n\n//# sourceURL=webpack://endless-flying/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/ui_control.js":
/*!***********************************!*\
  !*** ./src/modules/ui_control.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchComponents\": () => (/* binding */ switchComponents),\n/* harmony export */   \"switchSections\": () => (/* binding */ switchSections),\n/* harmony export */   \"Start\": () => (/* binding */ Start)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/modules/app.js\");\n/* harmony import */ var _helpers_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/element */ \"./src/helpers/element.js\");\n/* eslint-disable import/no-cycle */\n\n/* eslint-disable import/prefer-default-export */\n\n/* eslint-disable camelcase */\n\n\nconst switchComponents = value => {\n  switch (value) {\n    case 'options':\n      {\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.option_btns.show('flex');\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.username_div.hide();\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.leaderboard.hide();\n        break;\n      }\n\n    case 'username-c':\n      {\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.username_div.show('flex');\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.option_btns.hide();\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.leaderboard.hide();\n        break;\n      }\n\n    case 'leaderboard':\n      {\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.leaderboard.show('block');\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.option_btns.hide();\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.username_div.hide();\n        break;\n      }\n\n    default:\n      break;\n  }\n};\nconst switchSections = value => {\n  switch (value) {\n    case 'welcome-s':\n      {\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.welcome_content.show('block');\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.game_container.hide();\n        break;\n      }\n\n    case 'game-s':\n      {\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.welcome_content.hide();\n        _helpers_element__WEBPACK_IMPORTED_MODULE_1__.game_container.show('block');\n        break;\n      }\n\n    default:\n      break;\n  }\n};\nconst Start = () => {\n  if (!(0,_app__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) {\n    switchComponents('username-c');\n  } else {\n    switchComponents('options');\n  }\n};\n\n//# sourceURL=webpack://endless-flying/./src/modules/ui_control.js?");

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