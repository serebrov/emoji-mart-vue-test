(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.vue":
/*!*****************!*\
  !*** ./app.vue ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_381730fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=381730fa&scoped=true& */ "./app.vue?vue&type=template&id=381730fa&scoped=true&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css& */ "./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_381730fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_381730fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "381730fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app.vue?vue&type=script&lang=js&":
/*!******************************************!*\
  !*** ./app.vue?vue&type=script&lang=js& ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css&":
/*!**************************************************************************!*\
  !*** ./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_381730fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app.vue?vue&type=template&id=381730fa&scoped=true&":
/*!************************************************************!*\
  !*** ./app.vue?vue&type=template&id=381730fa&scoped=true& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_381730fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=381730fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=template&id=381730fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_381730fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_381730fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./app.vue");


new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  render: h => h(_app__WEBPACK_IMPORTED_MODULE_1__["default"])
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emoji-mart-vue-fast/data/all.json */ "./node_modules/emoji-mart-vue-fast/data/all.json");
var emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! emoji-mart-vue-fast/data/all.json */ "./node_modules/emoji-mart-vue-fast/data/all.json", 1);
/* harmony import */ var emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emoji-mart-vue-fast */ "./node_modules/emoji-mart-vue-fast/dist/emoji-mart.js");
/* harmony import */ var emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emoji_mart_vue_fast_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emoji-mart-vue-fast/css/emoji-mart.css */ "./node_modules/emoji-mart-vue-fast/css/emoji-mart.css");
/* harmony import */ var emoji_mart_vue_fast_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_vue_fast_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const CUSTOM_EMOJIS = [{
  name: "Party Parrot",
  short_names: ["parrot"],
  keywords: ["party"],
  imageUrl: "./images/parrot.gif"
}, {
  name: "Octocat",
  short_names: ["octocat"],
  keywords: ["github"],
  imageUrl: "https://github.githubassets.com/images/icons/emoji/octocat.png"
}, {
  name: "Squirrel",
  short_names: ["shipit", "squirrel"],
  keywords: ["github"],
  imageUrl: "https://github.githubassets.com/images/icons/emoji/shipit.png"
}];
let index = new emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__["EmojiIndex"](emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_0__, {
  custom: CUSTOM_EMOJIS
});
let indexFiltered = new emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__["EmojiIndex"](emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_0__, {
  custom: CUSTOM_EMOJIS,
  emojisToShowFilter: emoji => {
    return emoji.short_names[0].match(/^flag.*/) !== null;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      index: index,
      indexFiltered: indexFiltered,
      activeSet: "native",
      emoji: "point_up",
      title: "Pick your emoji…",
      custom: CUSTOM_EMOJIS,
      isVisible: true
    };
  },

  computed: {
    native() {
      return this.activeSet == "native";
    },

    smile() {
      // Static emoji example
      let emoji = index.findEmoji(":smile:"); // Note, that position in the emoji sheet is calculated by
      // `emoji` object

      let style = `background-position: ${emoji.getPosition()}; background-image: url(https://unpkg.com/emoji-datasource-emojione@4.0.4/img/emojione/sheets-256/64.png); width: 24px; height: 24px; display: inline-block; background-size: 5200%`;
      return `<div class='emoji' style="${style}"></div>`;
    }

  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    }

  },
  components: {
    Picker: emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__["Picker"],
    NimblePicker: emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__["NimblePicker"],
    Emoji: emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__["Emoji"],
    NimbleEmoji: emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__["NimbleEmoji"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/emoji-mart-vue-fast/css/emoji-mart.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/emoji-mart-vue-fast/css/emoji-mart.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emoji-mart,\n.emoji-mart * {\n  box-sizing: border-box;\n  line-height: 1.15;\n}\n\n.emoji-mart {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  /* display: inline-block; */\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 420px;\n  color: #222427;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  background: #fff;\n}\n\n.emoji-mart .emoji-mart-emoji {\n  padding: 6px;\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.emoji-mart .emoji-mart-emoji span {\n  display: inline-block;\n}\n\n.emoji-mart .emoji-mart-preview-emoji .emoji-mart-emoji span {\n  width: 38px;\n  height: 38px;\n  font-size: 32px;\n}\n\n.emoji-mart .emoji-type-native {\n  font-family: \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Segoe UI\", \"Apple Color Emoji\", \"Twemoji Mozilla\", \"Noto Color Emoji\", \"EmojiOne Color\", \"Android Emoji\";\n  word-break: keep-all;\n}\n\n.emoji-mart .emoji-type-image {\n  background-size: 5200%;\n}\n.emoji-mart .emoji-type-image.emoji-set-emojione {\n  background-image: url(\"https://unpkg.com/emoji-datasource-emojione@4.0.4/img/emojione/sheets-256/64.png\");\n}\n.emoji-mart .emoji-type-image.emoji-set-messenger {\n  background-image: url(\"https://unpkg.com/emoji-datasource-messenger@4.0.4/img/messenger/sheets-256/64.png\");\n}\n.emoji-mart .emoji-type-image.emoji-set-apple {\n  background-image: url(\"https://unpkg.com/emoji-datasource-apple@4.0.4/img/apple/sheets-256/64.png\");\n}\n.emoji-mart .emoji-type-image.emoji-set-facebook {\n  background-image: url(\"https://unpkg.com/emoji-datasource-facebook@4.0.4/img/facebook/sheets-256/64.png\");\n}\n.emoji-mart .emoji-type-image.emoji-set-google {\n  background-image: url(\"https://unpkg.com/emoji-datasource-google@4.0.4/img/google/sheets-256/64.png\");\n}\n.emoji-mart .emoji-type-image.emoji-set-twitter {\n  background-image: url(\"https://unpkg.com/emoji-datasource-twitter@4.0.4/img/twitter/sheets-256/64.png\");\n}\n\n.emoji-mart-bar {\n  border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar:first-child {\n  border-bottom-width: 1px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.emoji-mart-bar:last-child {\n  border-top-width: 1px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.emoji-mart-anchors {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 0 6px;\n  color: #858585;\n  line-height: 0;\n}\n\n.emoji-mart-anchor {\n  position: relative;\n  display: block;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  text-align: center;\n  padding: 12px 4px;\n  overflow: hidden;\n  transition: color .1s ease-out;\n}\n.emoji-mart-anchor:hover,\n.emoji-mart-anchor-selected {\n  color: #464646;\n}\n\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n  bottom: 0;\n}\n\n.emoji-mart-anchor-bar {\n  position: absolute;\n  bottom: -3px; left: 0;\n  width: 100%; height: 3px;\n  background-color: #464646;\n}\n\n.emoji-mart-anchors i {\n  display: inline-block;\n  width: 100%;\n  max-width: 22px;\n}\n\n.emoji-mart-anchors svg {\n  fill: currentColor;\n  max-height: 18px;\n}\n\n.emoji-mart .scroller {\n  height: 250px;\n  position: relative;\n  -ms-flex: 1;\n      flex: 1;\n  padding: 0 6px 6px 6px;\n  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */\n  will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n  -webkit-overflow-scrolling: touch;\n}\n\n.emoji-mart-search {\n  margin-top: 6px;\n  padding: 0 6px;\n}\n.emoji-mart-search input {\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  padding: .2em .6em;\n  border-radius: 25px;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n}\n.emoji-mart-search-results {\n  height: 250px;\n  overflow-y: scroll;\n}\n\n.emoji-mart-category {\n  position: relative;\n}\n\n.emoji-mart-category .emoji-mart-emoji span {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before {\n  z-index: 0;\n  content: \"\";\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%; height: 100%;\n  background-color: #f4f4f4;\n  border-radius: 100%;\n  opacity: 0;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before {\n  opacity: 1;\n}\n\n.emoji-mart-category-label {\n  /* z-index: 2; */\n  /* position: relative; */\n  /* position: -webkit-sticky; */\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.emoji-mart-category-label span {\n  display: block;\n  width: 100%;\n  font-weight: 500;\n  padding: 5px 6px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, .95);\n}\n\n.emoji-mart-emoji {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.emoji-mart-no-results {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 70px;\n  color: #858585;\n}\n.emoji-mart-no-results .emoji-mart-category-label {\n  display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label {\n  margin-top: .2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji:hover:before {\n  content: none;\n}\n\n.emoji-mart-preview {\n  position: relative;\n  height: 70px;\n}\n\n.emoji-mart-preview-emoji,\n.emoji-mart-preview-data,\n.emoji-mart-preview-skins {\n  position: absolute;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n}\n\n.emoji-mart-preview-emoji {\n  left: 12px;\n}\n\n.emoji-mart-preview-data {\n  left: 68px; right: 12px;\n  word-break: break-all;\n}\n\n.emoji-mart-preview-skins {\n  right: 30px;\n  text-align: right;\n}\n\n.emoji-mart-preview-name {\n  font-size: 14px;\n}\n\n.emoji-mart-preview-shortname {\n  font-size: 12px;\n  color: #888;\n}\n.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,\n.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,\n.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {\n  margin-left: .5em;\n}\n\n.emoji-mart-preview-emoticon {\n  font-size: 11px;\n  color: #bbb;\n}\n\n.emoji-mart-title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.emoji-mart-title .emoji-mart-emoji {\n  padding: 0;\n}\n\n.emoji-mart-title-label {\n  color: #999A9C;\n  font-size: 21px;\n  font-weight: 300;\n}\n\n.emoji-mart-skin-swatches {\n  font-size: 0;\n  padding: 2px 0;\n  border: 1px solid #d9d9d9;\n  border-radius: 12px;\n  background-color: #fff;\n}\n\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch {\n  width: 16px;\n  padding: 0 2px;\n}\n\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch-selected:after {\n  opacity: .75;\n}\n\n.emoji-mart-skin-swatch {\n  display: inline-block;\n  width: 0;\n  vertical-align: middle;\n  transition-property: width, padding;\n  transition-duration: .125s;\n  transition-timing-function: ease-out;\n}\n\n.emoji-mart-skin-swatch:nth-child(1) { transition-delay: 0s }\n.emoji-mart-skin-swatch:nth-child(2) { transition-delay: .03s }\n.emoji-mart-skin-swatch:nth-child(3) { transition-delay: .06s }\n.emoji-mart-skin-swatch:nth-child(4) { transition-delay: .09s }\n.emoji-mart-skin-swatch:nth-child(5) { transition-delay: .12s }\n.emoji-mart-skin-swatch:nth-child(6) { transition-delay: .15s }\n\n.emoji-mart-skin-swatch-selected {\n  position: relative;\n  width: 16px;\n  padding: 0 2px;\n}\n.emoji-mart-skin-swatch-selected:after {\n  content: \"\";\n  position: absolute;\n  top: 50%; left: 50%;\n  width: 4px; height: 4px;\n  margin: -2px 0 0 -2px;\n  background-color: #fff;\n  border-radius: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity .2s ease-out;\n}\n\n.emoji-mart-skin {\n  display: inline-block;\n  width: 100%; padding-top: 100%;\n  max-width: 12px;\n  border-radius: 100%;\n}\n\n.emoji-mart-skin-tone-1 { background-color: #ffc93a }\n.emoji-mart-skin-tone-2 { background-color: #fadcbc }\n.emoji-mart-skin-tone-3 { background-color: #e0bb95 }\n.emoji-mart-skin-tone-4 { background-color: #bf8f68 }\n.emoji-mart-skin-tone-5 { background-color: #9b643d }\n.emoji-mart-skin-tone-6 { background-color: #594539 }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton + button[data-v-381730fa] {\n  margin-left: 0.5em;\n}\nbutton[data-v-381730fa] {\n  padding: 0.4em 0.6em;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n  outline: 0;\n  cursor: pointer;\n}\nbutton[disabled][data-v-381730fa] {\n  border-color: #ae65c5;\n  cursor: default;\n}\nh1[data-v-381730fa] {\n  font-family: Courier;\n}\n.row + .row[data-v-381730fa] {\n  margin-top: 2em;\n}\n.row-small[data-v-381730fa] {\n  margin-top: 1em;\n}\n.emoji-mart[data-v-381730fa] {\n  margin: 0 auto;\n  text-align: left;\n}\n.emoji-mart-title-label[data-v-381730fa] {\n  font-size: 21px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/emoji-mart-vue-fast/css/emoji-mart.css":
/*!*************************************************************!*\
  !*** ./node_modules/emoji-mart-vue-fast/css/emoji-mart.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!../../postcss-loader/src!./emoji-mart.css */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/emoji-mart-vue-fast/css/emoji-mart.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("510cdb62", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/emoji-mart-vue-fast/data/all.json":
/*!********************************************************!*\
  !*** ./node_modules/emoji-mart-vue-fast/data/all.json ***!
  \********************************************************/
/*! exports provided: compressed, categories, emojis, aliases, default */
/***/ (function(module) {

module.exports = {"compressed":true,"categories":[{"id":"people","name":"Smileys & People","emojis":["grinning","grin","joy","rolling_on_the_floor_laughing","smiley","smile","sweat_smile","laughing","wink","blush","yum","sunglasses","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","relaxed","slightly_smiling_face","hugging_face","star-struck","thinking_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","face_with_rolling_eyes","smirk","persevere","disappointed_relieved","open_mouth","zipper_mouth_face","hushed","sleepy","tired_face","sleeping","relieved","stuck_out_tongue","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","drooling_face","unamused","sweat","pensive","confused","upside_down_face","money_mouth_face","astonished","white_frowning_face","slightly_frowning_face","confounded","disappointed","worried","triumph","cry","sob","frowning","anguished","fearful","weary","exploding_head","grimacing","cold_sweat","scream","flushed","zany_face","dizzy_face","rage","angry","face_with_symbols_on_mouth","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","innocent","face_with_cowboy_hat","clown_face","lying_face","shushing_face","face_with_hand_over_mouth","face_with_monocle","nerd_face","smiling_imp","imp","japanese_ogre","japanese_goblin","skull","skull_and_crossbones","ghost","alien","space_invader","robot_face","hankey","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","baby","child","boy","girl","adult","man","woman","older_adult","older_man","older_woman","male-doctor","female-doctor","male-student","female-student","male-teacher","female-teacher","male-judge","female-judge","male-farmer","female-farmer","male-cook","female-cook","male-mechanic","female-mechanic","male-factory-worker","female-factory-worker","male-office-worker","female-office-worker","male-scientist","female-scientist","male-technologist","female-technologist","male-singer","female-singer","male-artist","female-artist","male-pilot","female-pilot","male-astronaut","female-astronaut","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","construction_worker","male-construction-worker","female-construction-worker","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","bearded_person","person_with_blond_hair","blond-haired-man","blond-haired-woman","man_in_tuxedo","bride_with_veil","pregnant_woman","breast-feeding","angel","santa","mrs_claus","mage","female_mage","male_mage","fairy","female_fairy","male_fairy","vampire","female_vampire","male_vampire","merperson","mermaid","merman","elf","female_elf","male_elf","genie","female_genie","male_genie","zombie","female_zombie","male_zombie","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","runner","man-running","woman-running","dancer","man_dancing","dancers","man-with-bunny-ears-partying","woman-with-bunny-ears-partying","person_in_steamy_room","woman_in_steamy_room","man_in_steamy_room","person_climbing","woman_climbing","man_climbing","person_in_lotus_position","woman_in_lotus_position","man_in_lotus_position","bath","sleeping_accommodation","man_in_business_suit_levitating","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","racing_car","racing_motorcycle","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","couple","two_men_holding_hands","two_women_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","selfie","muscle","point_left","point_right","point_up","point_up_2","middle_finger","point_down","v","crossed_fingers","spock-hand","the_horns","call_me_hand","raised_hand_with_fingers_splayed","hand","ok_hand","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","raised_back_of_hand","wave","i_love_you_hand_sign","writing_hand","clap","open_hands","raised_hands","palms_up_together","pray","handshake","nail_care","ear","nose","footprints","eyes","eye","eye-in-speech-bubble","brain","tongue","lips","kiss","cupid","heart","heartbeat","broken_heart","two_hearts","sparkling_heart","heartpulse","blue_heart","green_heart","yellow_heart","orange_heart","purple_heart","black_heart","gift_heart","revolving_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","love_letter","zzz","anger","bomb","boom","sweat_drops","dash","dizzy","speech_balloon","left_speech_bubble","right_anger_bubble","thought_balloon","hole","eyeglasses","dark_sunglasses","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","mans_shoe","athletic_shoe","high_heel","sandal","boot","crown","womans_hat","tophat","mortar_board","billed_cap","helmet_with_white_cross","prayer_beads","lipstick","ring","gem"]},{"id":"nature","name":"Animals & Nature","emojis":["monkey_face","monkey","gorilla","dog","dog2","poodle","wolf","fox_face","cat","cat2","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","giraffe_face","elephant","rhinoceros","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","hedgehog","bat","bear","koala","panda_face","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","owl","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","fish","tropical_fish","blowfish","shark","octopus","shell","crab","shrimp","squid","snail","butterfly","bug","ant","bee","beetle","cricket","spider","spider_web","scorpion","bouquet","cherry_blossom","white_flower","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{"id":"foods","name":"Food & Drink","emojis":["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","apple","green_apple","pear","peach","cherries","strawberry","kiwifruit","tomato","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","cucumber","broccoli","mushroom","peanuts","chestnut","bread","croissant","baguette_bread","pretzel","pancakes","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","stuffed_flatbread","egg","fried_egg","shallow_pan_of_food","stew","bowl_with_spoon","green_salad","popcorn","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","dango","dumpling","fortune_cookie","takeout_box","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","cup_with_straw","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","amphora"]},{"id":"activity","name":"Activities","emojis":["jack_o_lantern","christmas_tree","fireworks","sparkler","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","basketball","volleyball","football","rugby_football","tennis","8ball","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","dart","golf","ice_skate","fishing_pole_and_fish","running_shirt_with_sash","ski","sled","curling_stone","video_game","joystick","game_die","spades","hearts","diamonds","clubs","black_joker","mahjong","flower_playing_cards"]},{"id":"places","name":"Travel & Places","emojis":["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","house_buildings","cityscape","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","milky_way","carousel_horse","ferris_wheel","roller_coaster","barber","circus_tent","performing_arts","frame_with_picture","art","slot_machine","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","bike","scooter","motor_scooter","busstop","motorway","railway_track","fuelpump","rotating_light","traffic_light","vertical_traffic_light","construction","octagonal_sign","anchor","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","door","bed","couch_and_lamp","toilet","shower","bathtub","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","star","star2","stars","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{"id":"objects","name":"Objects","emojis":["mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","guitar","musical_keyboard","trumpet","violin","drum_with_drumsticks","iphone","calling","phone","telephone_receiver","pager","fax","battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","microscope","telescope","satellite_antenna","candle","bulb","flashlight","izakaya_lantern","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","yen","dollar","euro","pound","money_with_wings","credit_card","chart","currency_exchange","heavy_dollar_sign","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","bow_and_arrow","shield","wrench","nut_and_bolt","gear","compression","alembic","scales","link","chains","syringe","pill","smoking","coffin","funeral_urn","moyai","oil_drum","crystal_ball","shopping_trolley"]},{"id":"symbols","name":"Symbols","emojis":["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","female_sign","male_sign","medical_symbol","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","heavy_multiplication_x","x","negative_squared_cross_mark","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","100","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","black_small_square","white_small_square","white_medium_square","black_medium_square","white_medium_small_square","black_medium_small_square","black_large_square","white_large_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","black_square_button","white_square_button","white_circle","black_circle","red_circle","large_blue_circle"]},{"id":"flags","name":"Flags","emojis":["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","rainbow-flag","ru","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],"emojis":{"100":{"a":"Hundred Points Symbol","b":"1F4AF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["score","perfect","numbers","century","exam","quiz","test","pass","hundred"],"k":[25,26]},"1234":{"a":"Input Symbol for Numbers","b":"1F522","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["numbers","blue-square"],"k":[27,36]},"monkey_face":{"a":"Monkey Face","b":"1F435","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","circus"],"k":[13,31],"l":[":o)"]},"grinning":{"a":"Grinning Face","b":"1F600","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","smile","happy","joy",":D","grin"],"k":[30,24],"m":":D"},"earth_africa":{"a":"Earth Globe Europe-Africa","b":"1F30D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["globe","world","international"],"k":[6,5]},"checkered_flag":{"a":"Chequered Flag","b":"1F3C1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["contest","finishline","race","gokart"],"k":[9,27]},"mute":{"a":"Speaker with Cancellation Stroke","b":"1F507","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sound","volume","silence","quiet"],"k":[27,9]},"jack_o_lantern":{"a":"Jack-O-Lantern","b":"1F383","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["halloween","light","pumpkin","creepy","fall"],"k":[8,17]},"atm":{"a":"Automated Teller Machine","b":"1F3E7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","cash","blue-square","payment","bank"],"k":[12,4]},"grapes":{"a":"Grapes","b":"1F347","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","food","wine"],"k":[7,9]},"earth_americas":{"a":"Earth Globe Americas","b":"1F30E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["globe","world","USA","international"],"k":[6,6]},"grin":{"a":"Grinning Face with Smiling Eyes","b":"1F601","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","happy","smile","joy","kawaii"],"k":[30,25]},"melon":{"a":"Melon","b":"1F348","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","nature","food"],"k":[7,10]},"triangular_flag_on_post":{"a":"Triangular Flag on Post","b":"1F6A9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mark","milestone","place"],"k":[35,14]},"monkey":{"a":"Monkey","b":"1F412","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","banana","circus"],"k":[12,48]},"christmas_tree":{"a":"Christmas Tree","b":"1F384","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["festival","vacation","december","xmas","celebration"],"k":[8,18]},"put_litter_in_its_place":{"a":"Put Litter in Its Place Symbol","b":"1F6AE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","sign","human","info"],"k":[35,19]},"speaker":{"a":"Speaker","b":"1F508","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sound","volume","silence","broadcast"],"k":[27,10]},"earth_asia":{"a":"Earth Globe Asia-Australia","b":"1F30F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["globe","world","east","international"],"k":[6,7]},"crossed_flags":{"a":"Crossed Flags","b":"1F38C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","nation","country","border"],"k":[8,31]},"joy":{"a":"Face with Tears of Joy","b":"1F602","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","cry","tears","weep","happy","happytears","haha"],"k":[30,26]},"sound":{"a":"Speaker with One Sound Wave","b":"1F509","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["volume","speaker","broadcast"],"k":[27,11]},"watermelon":{"a":"Watermelon","b":"1F349","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","food","picnic","summer"],"k":[7,11]},"gorilla":{"a":"Gorilla","b":"1F98D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","circus"],"k":[42,37],"o":9},"fireworks":{"a":"Fireworks","b":"1F386","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","festival","carnival","congratulations"],"k":[8,25]},"potable_water":{"a":"Potable Water Symbol","b":"1F6B0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","liquid","restroom","cleaning","faucet"],"k":[35,21]},"wheelchair":{"a":"Wheelchair Symbol","b":"267F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","disabled","a11y","accessibility"],"k":[48,10],"o":4},"rolling_on_the_floor_laughing":{"a":"Rolling on the Floor Laughing","b":"1F923","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,26],"o":9},"loud_sound":{"a":"Speaker with Three Sound Waves","b":"1F50A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["volume","noise","noisy","speaker","broadcast"],"k":[27,12]},"waving_black_flag":{"a":"Waving Black Flag","b":"1F3F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[12,19],"o":7},"tangerine":{"a":"Tangerine","b":"1F34A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","fruit","nature","orange"],"k":[7,12]},"dog":{"a":"Dog Face","b":"1F436","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","friend","nature","woof","puppy","pet","faithful"],"k":[13,32]},"sparkler":{"a":"Firework Sparkler","b":"1F387","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stars","night","shine"],"k":[8,26]},"globe_with_meridians":{"a":"Globe with Meridians","b":"1F310","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["earth","international","world","internet","interweb","i18n"],"k":[6,8]},"smiley":{"a":"Smiling Face with Open Mouth","b":"1F603","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","happy","joy","haha",":D",":)","smile","funny"],"k":[30,27],"l":["=)","=-)"],"m":":)"},"loudspeaker":{"a":"Public Address Loudspeaker","b":"1F4E2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["volume","sound"],"k":[26,25]},"sparkles":{"a":"Sparkles","b":"2728","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stars","shine","shiny","cool","awesome","good","magic"],"k":[49,48]},"dog2":{"a":"Dog","b":"1F415","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","friend","doge","pet","faithful"],"k":[12,51]},"waving_white_flag":{"a":"Waving White Flag","b":"1F3F3-FE0F","c":"1F3F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[12,15],"o":7},"world_map":{"a":"World Map","b":"1F5FA-FE0F","c":"1F5FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["location","direction"],"k":[30,18],"o":7},"lemon":{"a":"Lemon","b":"1F34B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","nature"],"k":[7,13]},"mens":{"a":"Mens Symbol","b":"1F6B9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["toilet","restroom","wc","blue-square","gender","male"],"k":[36,29]},"womens":{"a":"Womens Symbol","b":"1F6BA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["purple-square","woman","female","toilet","loo","restroom","gender"],"k":[36,30]},"rainbow-flag":{"a":"Rainbow Flag","b":"1F3F3-FE0F-200D-1F308","c":"1F3F3-200D-1F308","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[12,14],"o":7},"smile":{"a":"Smiling Face with Open Mouth and Smiling Eyes","b":"1F604","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"k":[30,28],"l":["C:","c:",":D",":-D"],"m":":)"},"banana":{"a":"Banana","b":"1F34C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","food","monkey"],"k":[7,14]},"mega":{"a":"Cheering Megaphone","b":"1F4E3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sound","speaker","volume"],"k":[26,26]},"japan":{"a":"Silhouette of Japan","b":"1F5FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nation","country","japanese","asia"],"k":[30,22]},"poodle":{"a":"Poodle","b":"1F429","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dog","animal","101","nature","pet"],"k":[13,19]},"balloon":{"a":"Balloon","b":"1F388","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["party","celebration","birthday","circus"],"k":[8,27]},"flag-ac":{"a":"Ascension Island Flag","b":"1F1E6-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,31]},"sweat_smile":{"a":"Smiling Face with Open Mouth and Cold Sweat","b":"1F605","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","hot","happy","laugh","sweat","smile","relief"],"k":[30,29]},"pineapple":{"a":"Pineapple","b":"1F34D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","nature","food"],"k":[7,15]},"restroom":{"a":"Restroom","b":"1F6BB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","toilet","refresh","wc","gender"],"k":[36,31]},"postal_horn":{"a":"Postal Horn","b":"1F4EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["instrument","music"],"k":[26,38]},"wolf":{"a":"Wolf Face","b":"1F43A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","wild"],"k":[13,36]},"tada":{"a":"Party Popper","b":"1F389","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["party","congratulations","birthday","magic","circus","celebration"],"k":[8,28]},"snow_capped_mountain":{"a":"Snow Capped Mountain","b":"1F3D4-FE0F","c":"1F3D4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,37],"o":7},"laughing":{"a":"Smiling Face with Open Mouth and Tightly-Closed Eyes","b":"1F606","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"k":[30,30],"l":[":>",":->"],"n":["satisfied"]},"apple":{"a":"Red Apple","b":"1F34E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","mac","school"],"k":[7,16]},"flag-ad":{"a":"Andorra Flag","b":"1F1E6-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,32]},"fox_face":{"a":"Fox Face","b":"1F98A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","face"],"k":[42,34],"o":9},"confetti_ball":{"a":"Confetti Ball","b":"1F38A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["festival","party","birthday","circus"],"k":[8,29]},"bell":{"a":"Bell","b":"1F514","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sound","notification","christmas","xmas","chime"],"k":[27,22]},"mountain":{"a":"Mountain","b":"26F0-FE0F","c":"26F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","nature","environment"],"k":[48,38],"o":5},"baby_symbol":{"a":"Baby Symbol","b":"1F6BC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["orange-square","child"],"k":[36,32]},"wc":{"a":"Water Closet","b":"1F6BE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["toilet","restroom","blue-square"],"k":[36,34]},"wink":{"a":"Winking Face","b":"1F609","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","happy","mischievous","secret",";)","smile","eye"],"k":[30,33],"l":[";)",";-)"],"m":";)"},"no_bell":{"a":"Bell with Cancellation Stroke","b":"1F515","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sound","volume","mute","quiet","silent"],"k":[27,23]},"green_apple":{"a":"Green Apple","b":"1F34F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","nature"],"k":[7,17]},"tanabata_tree":{"a":"Tanabata Tree","b":"1F38B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","nature","branch","summer"],"k":[8,30]},"flag-ae":{"a":"United Arab Emirates Flag","b":"1F1E6-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,33]},"volcano":{"a":"Volcano","b":"1F30B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","nature","disaster"],"k":[6,3]},"cat":{"a":"Cat Face","b":"1F431","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","meow","nature","pet","kitten"],"k":[13,27]},"flag-af":{"a":"Afghanistan Flag","b":"1F1E6-1F1EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,34]},"musical_score":{"a":"Musical Score","b":"1F3BC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["treble","clef","compose"],"k":[9,22]},"blush":{"a":"Smiling Face with Smiling Eyes","b":"1F60A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"k":[30,34],"m":":)"},"pear":{"a":"Pear","b":"1F350","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","nature","food"],"k":[7,18]},"bamboo":{"a":"Pine Decoration","b":"1F38D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","nature","vegetable","panda","pine_decoration"],"k":[8,32]},"passport_control":{"a":"Passport Control","b":"1F6C2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["custom","blue-square"],"k":[36,43]},"mount_fuji":{"a":"Mount Fuji","b":"1F5FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","mountain","nature","japanese"],"k":[30,19]},"cat2":{"a":"Cat","b":"1F408","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","meow","pet","cats"],"k":[12,38]},"musical_note":{"a":"Musical Note","b":"1F3B5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["score","tone","sound"],"k":[9,15]},"dolls":{"a":"Japanese Dolls","b":"1F38E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","toy","kimono"],"k":[8,33]},"lion_face":{"a":"Lion Face","b":"1F981","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,25],"o":8},"camping":{"a":"Camping","b":"1F3D5-FE0F","c":"1F3D5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","outdoors","tent"],"k":[11,38],"o":7},"flag-ag":{"a":"Antigua & Barbuda Flag","b":"1F1E6-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,35]},"customs":{"a":"Customs","b":"1F6C3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["passport","border","blue-square"],"k":[36,44]},"yum":{"a":"Face Savouring Delicious Food","b":"1F60B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"k":[30,35]},"peach":{"a":"Peach","b":"1F351","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","nature","food"],"k":[7,19]},"tiger":{"a":"Tiger Face","b":"1F42F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cat","danger","wild","nature","roar"],"k":[13,25]},"notes":{"a":"Multiple Musical Notes","b":"1F3B6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["music","score"],"k":[9,16]},"flags":{"a":"Carp Streamer","b":"1F38F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fish","japanese","koinobori","carp","banner"],"k":[8,34]},"beach_with_umbrella":{"a":"Beach with Umbrella","b":"1F3D6-FE0F","c":"1F3D6","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,39],"o":7},"cherries":{"a":"Cherries","b":"1F352","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","fruit"],"k":[7,20]},"flag-ai":{"a":"Anguilla Flag","b":"1F1E6-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,36]},"baggage_claim":{"a":"Baggage Claim","b":"1F6C4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","airport","transport"],"k":[36,45]},"sunglasses":{"a":"Smiling Face with Sunglasses","b":"1F60E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","cool","smile","summer","beach","sunglass"],"k":[30,38],"l":["8)"]},"left_luggage":{"a":"Left Luggage","b":"1F6C5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","travel"],"k":[36,46]},"wind_chime":{"a":"Wind Chime","b":"1F390","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","ding","spring","bell"],"k":[8,35]},"strawberry":{"a":"Strawberry","b":"1F353","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","food","nature"],"k":[7,21]},"desert":{"a":"Desert","b":"1F3DC-FE0F","c":"1F3DC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","warm","saharah"],"k":[11,45],"o":7},"studio_microphone":{"a":"Studio Microphone","b":"1F399-FE0F","c":"1F399","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sing","recording","artist","talkshow"],"k":[8,41],"o":7},"flag-al":{"a":"Albania Flag","b":"1F1E6-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,37]},"tiger2":{"a":"Tiger","b":"1F405","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","roar"],"k":[12,35]},"heart_eyes":{"a":"Smiling Face with Heart-Shaped Eyes","b":"1F60D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","love","like","affection","valentines","infatuation","crush","heart"],"k":[30,37]},"desert_island":{"a":"Desert Island","b":"1F3DD-FE0F","c":"1F3DD","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","tropical","mojito"],"k":[11,46],"o":7},"kiwifruit":{"a":"Kiwifruit","b":"1F95D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,9],"o":9},"rice_scene":{"a":"Moon Viewing Ceremony","b":"1F391","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","japan","asia","tsukimi"],"k":[8,36]},"kissing_heart":{"a":"Face Throwing a Kiss","b":"1F618","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","love","like","affection","valentines","infatuation","kiss"],"k":[30,48],"l":[":*",":-*"]},"warning":{"a":"Warning Sign","b":"26A0-FE0F","c":"26A0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["exclamation","wip","alert","error","problem","issue"],"k":[48,20],"o":4},"flag-am":{"a":"Armenia Flag","b":"1F1E6-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,38]},"leopard":{"a":"Leopard","b":"1F406","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[12,36]},"level_slider":{"a":"Level Slider","b":"1F39A-FE0F","c":"1F39A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["scale"],"k":[8,42],"o":7},"horse":{"a":"Horse Face","b":"1F434","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","brown","nature"],"k":[13,30]},"children_crossing":{"a":"Children Crossing","b":"1F6B8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["school","warning","danger","sign","driving","yellow-diamond"],"k":[36,28]},"ribbon":{"a":"Ribbon","b":"1F380","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["decoration","pink","girl","bowtie"],"k":[8,14]},"national_park":{"a":"National Park","b":"1F3DE-FE0F","c":"1F3DE","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","environment","nature"],"k":[11,47],"o":7},"control_knobs":{"a":"Control Knobs","b":"1F39B-FE0F","c":"1F39B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["dial"],"k":[8,43],"o":7},"kissing":{"a":"Kissing Face","b":"1F617","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","face","3","valentines","infatuation","kiss"],"k":[30,47]},"tomato":{"a":"Tomato","b":"1F345","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fruit","vegetable","nature","food"],"k":[7,7]},"flag-ao":{"a":"Angola Flag","b":"1F1E6-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,39]},"stadium":{"a":"Stadium","b":"1F3DF-FE0F","c":"1F3DF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","place","sports","concert","venue"],"k":[11,48],"o":7},"flag-aq":{"a":"Antarctica Flag","b":"1F1E6-1F1F6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,40]},"gift":{"a":"Wrapped Present","b":"1F381","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["present","birthday","christmas","xmas"],"k":[8,15]},"no_entry":{"a":"No Entry","b":"26D4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["limit","security","privacy","bad","denied","stop","circle"],"k":[48,35],"o":5},"kissing_smiling_eyes":{"a":"Kissing Face with Smiling Eyes","b":"1F619","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","affection","valentines","infatuation","kiss"],"k":[30,49]},"coconut":{"a":"Coconut","b":"1F965","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["fruit","nature","food","palm"],"k":[42,17],"o":10},"racehorse":{"a":"Horse","b":"1F40E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","gamble","luck"],"k":[12,44]},"microphone":{"a":"Microphone","b":"1F3A4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sound","music","PA","sing","talkshow"],"k":[8,50]},"classical_building":{"a":"Classical Building","b":"1F3DB-FE0F","c":"1F3DB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["art","culture","history"],"k":[11,44],"o":7},"no_entry_sign":{"a":"No Entry Sign","b":"1F6AB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["forbid","stop","limit","denied","disallow","circle"],"k":[35,16]},"reminder_ribbon":{"a":"Reminder Ribbon","b":"1F397-FE0F","c":"1F397","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports","cause","support","awareness"],"k":[8,40],"o":7},"kissing_closed_eyes":{"a":"Kissing Face with Closed Eyes","b":"1F61A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","love","like","affection","valentines","infatuation","kiss"],"k":[30,50]},"unicorn_face":{"a":"Unicorn Face","b":"1F984","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,28],"o":8},"flag-ar":{"a":"Argentina Flag","b":"1F1E6-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,41]},"headphones":{"a":"Headphone","b":"1F3A7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["music","score","gadgets"],"k":[9,1]},"avocado":{"a":"Avocado","b":"1F951","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["fruit","food"],"k":[41,49],"o":9},"relaxed":{"a":"White Smiling Face","b":"263A-FE0F","c":"263A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","blush","massage","happiness"],"k":[47,41],"o":1},"zebra_face":{"a":"Zebra Face","b":"1F993","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,43],"o":10},"eggplant":{"a":"Aubergine","b":"1F346","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vegetable","nature","food","aubergine"],"k":[7,8]},"radio":{"a":"Radio","b":"1F4FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["communication","music","podcast","program"],"k":[26,50]},"building_construction":{"a":"Building Construction","b":"1F3D7-FE0F","c":"1F3D7","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["wip","working","progress"],"k":[11,40],"o":7},"flag-as":{"a":"American Samoa Flag","b":"1F1E6-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,42]},"admission_tickets":{"a":"Admission Tickets","b":"1F39F-FE0F","c":"1F39F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[8,45],"o":7},"no_bicycles":{"a":"No Bicycles","b":"1F6B3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cyclist","prohibited","circle"],"k":[35,24]},"no_smoking":{"a":"No Smoking Symbol","b":"1F6AD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cigarette","blue-square","smell","smoke"],"k":[35,18]},"slightly_smiling_face":{"a":"Slightly Smiling Face","b":"1F642","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","smile"],"k":[31,38],"l":[":)","(:",":-)"],"o":7},"flag-at":{"a":"Austria Flag","b":"1F1E6-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,43]},"ticket":{"a":"Ticket","b":"1F3AB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["event","concert","pass"],"k":[9,5]},"saxophone":{"a":"Saxophone","b":"1F3B7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["music","instrument","jazz","blues"],"k":[9,17]},"deer":{"a":"Deer","b":"1F98C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","horns","venison"],"k":[42,36],"o":9},"house_buildings":{"a":"House Buildings","b":"1F3D8-FE0F","c":"1F3D8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,41],"o":7},"potato":{"a":"Potato","b":"1F954","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","tuber","vegatable","starch"],"k":[42,0],"o":9},"guitar":{"a":"Guitar","b":"1F3B8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["music","instrument"],"k":[9,18]},"carrot":{"a":"Carrot","b":"1F955","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["vegetable","food","orange"],"k":[42,1],"o":9},"cityscape":{"a":"Cityscape","b":"1F3D9-FE0F","c":"1F3D9","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["photo","night life","urban"],"k":[11,42],"o":7},"flag-au":{"a":"Australia Flag","b":"1F1E6-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,44]},"do_not_litter":{"a":"Do Not Litter Symbol","b":"1F6AF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["trash","bin","garbage","circle"],"k":[35,20]},"hugging_face":{"a":"Hugging Face","b":"1F917","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,31],"o":8},"cow":{"a":"Cow Face","b":"1F42E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["beef","ox","animal","nature","moo","milk"],"k":[13,24]},"medal":{"a":"Medal","b":"1F396-FE0F","c":"1F396","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[8,39],"o":7},"musical_keyboard":{"a":"Musical Keyboard","b":"1F3B9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["piano","instrument","compose"],"k":[9,19]},"corn":{"a":"Ear of Maize","b":"1F33D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","vegetable","plant"],"k":[6,51]},"derelict_house_building":{"a":"Derelict House Building","b":"1F3DA-FE0F","c":"1F3DA","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,43],"o":7},"non-potable_water":{"a":"Non-Potable Water Symbol","b":"1F6B1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["drink","faucet","tap","circle"],"k":[35,22]},"trophy":{"a":"Trophy","b":"1F3C6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["win","award","contest","place","ftw","ceremony"],"k":[10,19]},"flag-aw":{"a":"Aruba Flag","b":"1F1E6-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,45]},"star-struck":{"a":"Grinning Face with Star Eyes","b":"1F929","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,49],"n":["grinning_face_with_star_eyes"],"o":10},"ox":{"a":"Ox","b":"1F402","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cow","beef"],"k":[12,32]},"trumpet":{"a":"Trumpet","b":"1F3BA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["music","brass"],"k":[9,20]},"hot_pepper":{"a":"Hot Pepper","b":"1F336-FE0F","c":"1F336","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","spicy","chilli","chili"],"k":[6,44],"o":7},"sports_medal":{"a":"Sports Medal","b":"1F3C5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[10,18],"o":7},"flag-ax":{"a":"Åland Islands Flag","b":"1F1E6-1F1FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,46]},"water_buffalo":{"a":"Water Buffalo","b":"1F403","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","ox","cow"],"k":[12,33]},"no_pedestrians":{"a":"No Pedestrians","b":"1F6B7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["rules","crossing","walking","circle"],"k":[36,27]},"thinking_face":{"a":"Thinking Face","b":"1F914","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,28],"o":8},"house":{"a":"House Building","b":"1F3E0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","home"],"k":[11,49]},"no_mobile_phones":{"a":"No Mobile Phones","b":"1F4F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["iphone","mute","circle"],"k":[26,44]},"flag-az":{"a":"Azerbaijan Flag","b":"1F1E6-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,47]},"first_place_medal":{"a":"First Place Medal","b":"1F947","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,42],"o":9},"house_with_garden":{"a":"House with Garden","b":"1F3E1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["home","plant","nature"],"k":[11,50]},"violin":{"a":"Violin","b":"1F3BB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["music","instrument","orchestra","symphony"],"k":[9,21]},"face_with_raised_eyebrow":{"a":"Face with One Eyebrow Raised","b":"1F928","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,48],"n":["face_with_one_eyebrow_raised"],"o":10},"cucumber":{"a":"Cucumber","b":"1F952","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["fruit","food","pickle"],"k":[41,50],"o":9},"cow2":{"a":"Cow","b":"1F404","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["beef","ox","animal","nature","moo","milk"],"k":[12,34]},"flag-ba":{"a":"Bosnia & Herzegovina Flag","b":"1F1E7-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[0,48]},"pig":{"a":"Pig Face","b":"1F437","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","oink","nature"],"k":[13,33]},"drum_with_drumsticks":{"a":"Drum with Drumsticks","b":"1F941","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,37],"o":9},"underage":{"a":"No One Under Eighteen Symbol","b":"1F51E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["18","drink","pub","night","minor","circle"],"k":[27,32]},"broccoli":{"a":"Broccoli","b":"1F966","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["fruit","food","vegetable"],"k":[42,18],"o":10},"office":{"a":"Office Building","b":"1F3E2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","bureau","work"],"k":[11,51]},"second_place_medal":{"a":"Second Place Medal","b":"1F948","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,43],"o":9},"neutral_face":{"a":"Neutral Face","b":"1F610","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["indifference","meh",":|","neutral"],"k":[30,40],"l":[":|",":-|"]},"third_place_medal":{"a":"Third Place Medal","b":"1F949","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,44],"o":9},"mushroom":{"a":"Mushroom","b":"1F344","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","vegetable"],"k":[7,6]},"flag-bb":{"a":"Barbados Flag","b":"1F1E7-1F1E7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,49]},"radioactive_sign":{"a":"Radioactive Sign","b":"2622-FE0F","c":"2622","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,33],"o":1},"pig2":{"a":"Pig","b":"1F416","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[13,0]},"expressionless":{"a":"Expressionless Face","b":"1F611","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","indifferent","-_-","meh","deadpan"],"k":[30,41]},"iphone":{"a":"Mobile Phone","b":"1F4F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","apple","gadgets","dial"],"k":[26,40]},"post_office":{"a":"Japanese Post Office","b":"1F3E3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","envelope","communication"],"k":[12,0]},"european_post_office":{"a":"European Post Office","b":"1F3E4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","email"],"k":[12,1]},"soccer":{"a":"Soccer Ball","b":"26BD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","football"],"k":[48,26],"o":5},"boar":{"a":"Boar","b":"1F417","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[13,1]},"peanuts":{"a":"Peanuts","b":"1F95C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","nut"],"k":[42,8],"o":9},"calling":{"a":"Mobile Phone with Rightwards Arrow at Left","b":"1F4F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["iphone","incoming"],"k":[26,41]},"biohazard_sign":{"a":"Biohazard Sign","b":"2623-FE0F","c":"2623","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,34],"o":1},"flag-bd":{"a":"Bangladesh Flag","b":"1F1E7-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,50]},"no_mouth":{"a":"Face Without Mouth","b":"1F636","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","hellokitty"],"k":[31,26]},"face_with_rolling_eyes":{"a":"Face with Rolling Eyes","b":"1F644","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[31,40],"o":8},"phone":{"a":"Black Telephone","b":"260E-FE0F","c":"260E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","communication","dial","telephone"],"k":[47,21],"n":["telephone"],"o":1},"pig_nose":{"a":"Pig Nose","b":"1F43D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","oink"],"k":[13,39]},"chestnut":{"a":"Chestnut","b":"1F330","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","squirrel"],"k":[6,38]},"arrow_up":{"a":"Upwards Black Arrow","b":"2B06-FE0F","c":"2B06","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","continue","top","direction"],"k":[50,18],"o":4},"hospital":{"a":"Hospital","b":"1F3E5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","health","surgery","doctor"],"k":[12,2]},"flag-be":{"a":"Belgium Flag","b":"1F1E7-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[0,51]},"baseball":{"a":"Baseball","b":"26BE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","balls"],"k":[48,27],"o":5},"smirk":{"a":"Smirking Face","b":"1F60F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","smile","mean","prank","smug","sarcasm"],"k":[30,39]},"arrow_upper_right":{"a":"North East Arrow","b":"2197-FE0F","c":"2197","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","point","direction","diagonal","northeast"],"k":[46,36],"o":1},"flag-bf":{"a":"Burkina Faso Flag","b":"1F1E7-1F1EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,0]},"basketball":{"a":"Basketball and Hoop","b":"1F3C0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","balls","NBA"],"k":[9,26]},"ram":{"a":"Ram","b":"1F40F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","sheep","nature"],"k":[12,45]},"bank":{"a":"Bank","b":"1F3E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","money","sales","cash","business","enterprise"],"k":[12,3]},"bread":{"a":"Bread","b":"1F35E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","wheat","breakfast","toast"],"k":[7,32]},"telephone_receiver":{"a":"Telephone Receiver","b":"1F4DE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","communication","dial"],"k":[26,21]},"croissant":{"a":"Croissant","b":"1F950","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","bread","french"],"k":[41,48],"o":9},"pager":{"a":"Pager","b":"1F4DF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bbcall","oldschool","90s"],"k":[26,22]},"sheep":{"a":"Sheep","b":"1F411","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","wool","shipit"],"k":[12,47]},"arrow_right":{"a":"Black Rightwards Arrow","b":"27A1-FE0F","c":"27A1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","next"],"k":[50,12],"o":1},"persevere":{"a":"Persevering Face","b":"1F623","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","sick","no","upset","oops"],"k":[31,7]},"flag-bg":{"a":"Bulgaria Flag","b":"1F1E7-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,1]},"volleyball":{"a":"Volleyball","b":"1F3D0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports","balls"],"k":[11,33],"o":8},"hotel":{"a":"Hotel","b":"1F3E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","accomodation","checkin"],"k":[12,5]},"arrow_lower_right":{"a":"South East Arrow","b":"2198-FE0F","c":"2198","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","diagonal","southeast"],"k":[46,37],"o":1},"goat":{"a":"Goat","b":"1F410","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[12,46]},"flag-bh":{"a":"Bahrain Flag","b":"1F1E7-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,2]},"love_hotel":{"a":"Love Hotel","b":"1F3E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["like","affection","dating"],"k":[12,6]},"disappointed_relieved":{"a":"Disappointed but Relieved Face","b":"1F625","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","phew","sweat","nervous"],"k":[31,9]},"baguette_bread":{"a":"Baguette Bread","b":"1F956","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","bread","french"],"k":[42,2],"o":9},"football":{"a":"American Football","b":"1F3C8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","balls","NFL"],"k":[10,26]},"fax":{"a":"Fax Machine","b":"1F4E0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["communication","technology"],"k":[26,23]},"convenience_store":{"a":"Convenience Store","b":"1F3EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","shopping","groceries"],"k":[12,7]},"dromedary_camel":{"a":"Dromedary Camel","b":"1F42A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","hot","desert","hump"],"k":[13,20]},"arrow_down":{"a":"Downwards Black Arrow","b":"2B07-FE0F","c":"2B07","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","bottom"],"k":[50,19],"o":4},"battery":{"a":"Battery","b":"1F50B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["power","energy","sustain"],"k":[27,13]},"rugby_football":{"a":"Rugby Football","b":"1F3C9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","team"],"k":[10,27]},"pretzel":{"a":"Pretzel","b":"1F968","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","bread","twisted"],"k":[42,20],"o":10},"open_mouth":{"a":"Face with Open Mouth","b":"1F62E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","surprise","impressed","wow","whoa",":O"],"k":[31,18],"l":[":o",":-o",":O",":-O"]},"flag-bi":{"a":"Burundi Flag","b":"1F1E7-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,3]},"flag-bj":{"a":"Benin Flag","b":"1F1E7-1F1EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,4]},"pancakes":{"a":"Pancakes","b":"1F95E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","breakfast","flapjacks","hotcakes"],"k":[42,10],"o":9},"school":{"a":"School","b":"1F3EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","student","education","learn","teach"],"k":[12,8]},"tennis":{"a":"Tennis Racquet and Ball","b":"1F3BE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","balls","green"],"k":[9,24]},"zipper_mouth_face":{"a":"Zipper-Mouth Face","b":"1F910","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","sealed","zipper","secret"],"k":[37,24],"o":8},"camel":{"a":"Bactrian Camel","b":"1F42B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","hot","desert","hump"],"k":[13,21]},"arrow_lower_left":{"a":"South West Arrow","b":"2199-FE0F","c":"2199","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","diagonal","southwest"],"k":[46,38],"o":1},"electric_plug":{"a":"Electric Plug","b":"1F50C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["charger","power"],"k":[27,14]},"cheese_wedge":{"a":"Cheese Wedge","b":"1F9C0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,48],"o":8},"hushed":{"a":"Hushed Face","b":"1F62F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","woo","shh"],"k":[31,19]},"computer":{"a":"Personal Computer","b":"1F4BB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","laptop","screen","display","monitor"],"k":[25,38]},"giraffe_face":{"a":"Giraffe Face","b":"1F992","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,42],"o":10},"8ball":{"a":"Billiards","b":"1F3B1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["pool","hobby","game","luck","magic"],"k":[9,11]},"flag-bl":{"a":"St. Barthélemy Flag","b":"1F1E7-1F1F1","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[1,5]},"arrow_left":{"a":"Leftwards Black Arrow","b":"2B05-FE0F","c":"2B05","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","previous","back"],"k":[50,17],"o":4},"department_store":{"a":"Department Store","b":"1F3EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","shopping","mall"],"k":[12,9]},"meat_on_bone":{"a":"Meat on Bone","b":"1F356","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["good","food","drumstick"],"k":[7,24]},"arrow_upper_left":{"a":"North West Arrow","b":"2196-FE0F","c":"2196","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","point","direction","diagonal","northwest"],"k":[46,35],"o":1},"flag-bm":{"a":"Bermuda Flag","b":"1F1E7-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,6]},"sleepy":{"a":"Sleepy Face","b":"1F62A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","tired","rest","nap"],"k":[31,14]},"bowling":{"a":"Bowling","b":"1F3B3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","fun","play"],"k":[9,13]},"factory":{"a":"Factory","b":"1F3ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","industry","pollution","smoke"],"k":[12,10]},"desktop_computer":{"a":"Desktop Computer","b":"1F5A5-FE0F","c":"1F5A5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["technology","computing","screen"],"k":[29,51],"o":7},"elephant":{"a":"Elephant","b":"1F418","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","nose","th","circus"],"k":[13,2]},"rhinoceros":{"a":"Rhinoceros","b":"1F98F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","horn"],"k":[42,39],"o":9},"arrow_up_down":{"a":"Up Down Arrow","b":"2195-FE0F","c":"2195","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","way","vertical"],"k":[46,34],"o":1},"cricket_bat_and_ball":{"a":"Cricket Bat and Ball","b":"1F3CF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,32],"o":8},"printer":{"a":"Printer","b":"1F5A8-FE0F","c":"1F5A8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["paper","ink"],"k":[30,0],"o":7},"poultry_leg":{"a":"Poultry Leg","b":"1F357","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","meat","drumstick","bird","chicken","turkey"],"k":[7,25]},"tired_face":{"a":"Tired Face","b":"1F62B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sick","whine","upset","frustrated"],"k":[31,15]},"japanese_castle":{"a":"Japanese Castle","b":"1F3EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","building"],"k":[12,12]},"flag-bn":{"a":"Brunei Flag","b":"1F1E7-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[1,7]},"field_hockey_stick_and_ball":{"a":"Field Hockey Stick and Ball","b":"1F3D1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,34],"o":8},"sleeping":{"a":"Sleeping Face","b":"1F634","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","tired","sleepy","night","zzz"],"k":[31,24]},"left_right_arrow":{"a":"Left Right Arrow","b":"2194-FE0F","c":"2194","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","direction","horizontal","sideways"],"k":[46,33],"o":1},"keyboard":{"a":"Keyboard","b":"2328-FE0F","c":"2328","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["technology","computer","type","input","text"],"k":[46,43],"o":1},"european_castle":{"a":"European Castle","b":"1F3F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","royalty","history"],"k":[12,13]},"mouse":{"a":"Mouse Face","b":"1F42D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","cheese_wedge","rodent"],"k":[13,23]},"flag-bo":{"a":"Bolivia Flag","b":"1F1E7-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,8]},"cut_of_meat":{"a":"Cut of Meat","b":"1F969","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,21],"o":10},"ice_hockey_stick_and_puck":{"a":"Ice Hockey Stick and Puck","b":"1F3D2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,35],"o":8},"mouse2":{"a":"Mouse","b":"1F401","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","rodent"],"k":[12,31]},"three_button_mouse":{"a":"Three Button Mouse","b":"1F5B1-FE0F","c":"1F5B1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,1],"o":7},"leftwards_arrow_with_hook":{"a":"Leftwards Arrow with Hook","b":"21A9-FE0F","c":"21A9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["back","return","blue-square","undo","enter"],"k":[46,39],"o":1},"bacon":{"a":"Bacon","b":"1F953","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","breakfast","pork","pig","meat"],"k":[41,51],"o":9},"relieved":{"a":"Relieved Face","b":"1F60C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","relaxed","phew","massage","happiness"],"k":[30,36]},"flag-bq":{"a":"Caribbean Netherlands Flag","b":"1F1E7-1F1F6","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[1,9]},"wedding":{"a":"Wedding","b":"1F492","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","couple","marriage","bride","groom"],"k":[24,44]},"tokyo_tower":{"a":"Tokyo Tower","b":"1F5FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","japanese"],"k":[30,20]},"arrow_right_hook":{"a":"Rightwards Arrow with Hook","b":"21AA-FE0F","c":"21AA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","return","rotate","direction"],"k":[46,40],"o":1},"hamburger":{"a":"Hamburger","b":"1F354","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["meat","fast food","beef","cheeseburger","mcdonalds","burger king"],"k":[7,22]},"stuck_out_tongue":{"a":"Face with Stuck-out Tongue","b":"1F61B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","prank","childish","playful","mischievous","smile","tongue"],"k":[30,51],"l":[":p",":-p",":P",":-P",":b",":-b"],"m":":p"},"trackball":{"a":"Trackball","b":"1F5B2-FE0F","c":"1F5B2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["technology","trackpad"],"k":[30,2],"o":7},"flag-br":{"a":"Brazil Flag","b":"1F1E7-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,10]},"rat":{"a":"Rat","b":"1F400","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","mouse","rodent"],"k":[12,30]},"table_tennis_paddle_and_ball":{"a":"Table Tennis Paddle and Ball","b":"1F3D3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,36],"o":8},"minidisc":{"a":"Minidisc","b":"1F4BD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","record","data","disk","90s"],"k":[25,40]},"stuck_out_tongue_winking_eye":{"a":"Face with Stuck-out Tongue and Winking Eye","b":"1F61C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"k":[31,0],"l":[";p",";-p",";b",";-b",";P",";-P"],"m":";p"},"fries":{"a":"French Fries","b":"1F35F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["chips","snack","fast food"],"k":[7,33]},"badminton_racquet_and_shuttlecock":{"a":"Badminton Racquet and Shuttlecock","b":"1F3F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[12,22],"o":8},"statue_of_liberty":{"a":"Statue of Liberty","b":"1F5FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["american","newyork"],"k":[30,21]},"flag-bs":{"a":"Bahamas Flag","b":"1F1E7-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,11]},"arrow_heading_up":{"a":"Arrow Pointing Rightwards Then Curving Upwards","b":"2934-FE0F","c":"2934","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","top"],"k":[50,15],"o":3},"hamster":{"a":"Hamster Face","b":"1F439","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[13,35]},"stuck_out_tongue_closed_eyes":{"a":"Face with Stuck-out Tongue and Tightly-Closed Eyes","b":"1F61D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","prank","playful","mischievous","smile","tongue"],"k":[31,1]},"pizza":{"a":"Slice of Pizza","b":"1F355","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","party"],"k":[7,23]},"boxing_glove":{"a":"Boxing Glove","b":"1F94A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports","fighting"],"k":[41,45],"o":9},"floppy_disk":{"a":"Floppy Disk","b":"1F4BE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["oldschool","technology","save","90s","80s"],"k":[25,41]},"arrow_heading_down":{"a":"Arrow Pointing Rightwards Then Curving Downwards","b":"2935-FE0F","c":"2935","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","bottom"],"k":[50,16],"o":3},"flag-bt":{"a":"Bhutan Flag","b":"1F1E7-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,12]},"rabbit":{"a":"Rabbit Face","b":"1F430","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","pet","spring","magic","bunny"],"k":[13,26]},"church":{"a":"Church","b":"26EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["building","religion","christ"],"k":[48,37],"o":5},"drooling_face":{"a":"Drooling Face","b":"1F924","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face"],"k":[38,27],"o":9},"flag-bv":{"a":"Bouvet Island Flag","b":"1F1E7-1F1FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,13]},"mosque":{"a":"Mosque","b":"1F54C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["islam","worship","minaret"],"k":[28,15],"o":8},"rabbit2":{"a":"Rabbit","b":"1F407","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","pet","magic","spring"],"k":[12,37]},"hotdog":{"a":"Hot Dog","b":"1F32D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","frankfurter"],"k":[6,35],"o":8},"martial_arts_uniform":{"a":"Martial Arts Uniform","b":"1F94B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["judo","karate","taekwondo"],"k":[41,46],"o":9},"arrows_clockwise":{"a":"Clockwise Downwards and Upwards Open Circle Arrows","b":"1F503","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sync","cycle","round","repeat"],"k":[27,5]},"cd":{"a":"Optical Disc","b":"1F4BF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","dvd","disk","disc","90s"],"k":[25,42]},"arrows_counterclockwise":{"a":"Anticlockwise Downwards and Upwards Open Circle Arrows","b":"1F504","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","sync","cycle"],"k":[27,6]},"sandwich":{"a":"Sandwich","b":"1F96A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","lunch","bread"],"k":[42,22],"o":10},"chipmunk":{"a":"Chipmunk","b":"1F43F-FE0F","c":"1F43F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","rodent","squirrel"],"k":[13,41],"o":7},"synagogue":{"a":"Synagogue","b":"1F54D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["judaism","worship","temple","jewish"],"k":[28,16],"o":8},"unamused":{"a":"Unamused Face","b":"1F612","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["indifference","bored","straight face","serious","sarcasm"],"k":[30,42],"m":":("},"goal_net":{"a":"Goal Net","b":"1F945","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports"],"k":[41,41],"o":9},"flag-bw":{"a":"Botswana Flag","b":"1F1E7-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,14]},"dvd":{"a":"Dvd","b":"1F4C0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cd","disk","disc"],"k":[25,43]},"hedgehog":{"a":"Hedgehog","b":"1F994","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","spiny"],"k":[42,44],"o":10},"dart":{"a":"Direct Hit","b":"1F3AF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["game","play","bar","target","bullseye"],"k":[9,9]},"taco":{"a":"Taco","b":"1F32E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","mexican"],"k":[6,36],"o":8},"back":{"a":"Back with Leftwards Arrow Above","b":"1F519","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["arrow","words","return"],"k":[27,27]},"flag-by":{"a":"Belarus Flag","b":"1F1E7-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,15]},"shinto_shrine":{"a":"Shinto Shrine","b":"26E9-FE0F","c":"26E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["temple","japan","kyoto"],"k":[48,36],"o":5},"movie_camera":{"a":"Movie Camera","b":"1F3A5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["film","record"],"k":[8,51]},"sweat":{"a":"Face with Cold Sweat","b":"1F613","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","hot","sad","tired","exercise"],"k":[30,43]},"burrito":{"a":"Burrito","b":"1F32F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","mexican"],"k":[6,37],"o":8},"flag-bz":{"a":"Belize Flag","b":"1F1E7-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,16]},"pensive":{"a":"Pensive Face","b":"1F614","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","sad","depressed","upset"],"k":[30,44]},"kaaba":{"a":"Kaaba","b":"1F54B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["mecca","mosque","islam"],"k":[28,14],"o":8},"film_frames":{"a":"Film Frames","b":"1F39E-FE0F","c":"1F39E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[8,44],"o":7},"bat":{"a":"Bat","b":"1F987","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","blind","vampire"],"k":[42,31],"o":9},"golf":{"a":"Flag in Hole","b":"26F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","business","flag","hole","summer"],"k":[48,41],"o":5},"end":{"a":"End with Leftwards Arrow Above","b":"1F51A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["words","arrow"],"k":[27,28]},"film_projector":{"a":"Film Projector","b":"1F4FD-FE0F","c":"1F4FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["video","tape","record","movie"],"k":[27,0],"o":7},"bear":{"a":"Bear Face","b":"1F43B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","wild"],"k":[13,37]},"ice_skate":{"a":"Ice Skate","b":"26F8-FE0F","c":"26F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports"],"k":[48,45],"o":5},"fountain":{"a":"Fountain","b":"26F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","summer","water","fresh"],"k":[48,40],"o":5},"confused":{"a":"Confused Face","b":"1F615","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","indifference","huh","weird","hmmm",":/"],"k":[30,45],"l":[":\\",":-\\",":/",":-/"]},"flag-ca":{"a":"Canada Flag","b":"1F1E8-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,17]},"on":{"a":"On with Exclamation Mark with Left Right Arrow Above","b":"1F51B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["arrow","words"],"k":[27,29]},"stuffed_flatbread":{"a":"Stuffed Flatbread","b":"1F959","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","flatbread","stuffed","gyro"],"k":[42,5],"o":9},"soon":{"a":"Soon with Rightwards Arrow Above","b":"1F51C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["arrow","words"],"k":[27,30]},"upside_down_face":{"a":"Upside-Down Face","b":"1F643","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","flipped","silly","smile"],"k":[31,39],"o":8},"fishing_pole_and_fish":{"a":"Fishing Pole and Fish","b":"1F3A3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","hobby","summer"],"k":[8,49]},"tent":{"a":"Tent","b":"26FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","camping","outdoors"],"k":[49,12],"o":5},"clapper":{"a":"Clapper Board","b":"1F3AC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["movie","film","record"],"k":[9,6]},"egg":{"a":"Egg","b":"1F95A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","chicken","breakfast"],"k":[42,6],"o":9},"flag-cc":{"a":"Cocos (keeling) Islands Flag","b":"1F1E8-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,18]},"koala":{"a":"Koala","b":"1F428","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[13,18]},"foggy":{"a":"Foggy","b":"1F301","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","mountain"],"k":[5,45]},"tv":{"a":"Television","b":"1F4FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["technology","program","oldschool","show","television"],"k":[26,49]},"panda_face":{"a":"Panda Face","b":"1F43C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","panda"],"k":[13,38]},"fried_egg":{"a":"Cooking","b":"1F373","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","breakfast","kitchen","egg"],"k":[8,1],"n":["cooking"]},"top":{"a":"Top with Upwards Arrow Above","b":"1F51D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["words","blue-square"],"k":[27,31]},"flag-cd":{"a":"Congo - Kinshasa Flag","b":"1F1E8-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,19]},"money_mouth_face":{"a":"Money-Mouth Face","b":"1F911","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","rich","dollar","money"],"k":[37,25],"o":8},"running_shirt_with_sash":{"a":"Running Shirt with Sash","b":"1F3BD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["play","pageant"],"k":[9,23]},"astonished":{"a":"Astonished Face","b":"1F632","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","xox","surprised","poisoned"],"k":[31,22]},"feet":{"a":"Paw Prints","b":"1F43E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[13,40],"n":["paw_prints"]},"camera":{"a":"Camera","b":"1F4F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["gadgets","photography"],"k":[26,46]},"flag-cf":{"a":"Central African Republic Flag","b":"1F1E8-1F1EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,20]},"place_of_worship":{"a":"Place of Worship","b":"1F6D0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["religion","church","temple","prayer"],"k":[37,5],"o":8},"night_with_stars":{"a":"Night with Stars","b":"1F303","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["evening","city","downtown"],"k":[5,47]},"ski":{"a":"Ski and Ski Boot","b":"1F3BF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","winter","cold","snow"],"k":[9,25]},"shallow_pan_of_food":{"a":"Shallow Pan of Food","b":"1F958","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","cooking","casserole","paella"],"k":[42,4],"o":9},"camera_with_flash":{"a":"Camera with Flash","b":"1F4F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[26,47],"o":7},"sunrise_over_mountains":{"a":"Sunrise over Mountains","b":"1F304","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["view","vacation","photo"],"k":[5,48]},"turkey":{"a":"Turkey","b":"1F983","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","bird"],"k":[42,27],"o":8},"white_frowning_face":{"a":"White Frowning Face","b":"2639-FE0F","c":"2639","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,40],"o":1},"flag-cg":{"a":"Congo - Brazzaville Flag","b":"1F1E8-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,21]},"stew":{"a":"Pot of Food","b":"1F372","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","meat","soup"],"k":[8,0]},"sled":{"a":"Sled","b":"1F6F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sleigh","luge","toboggan"],"k":[37,22],"o":10},"atom_symbol":{"a":"Atom Symbol","b":"269B-FE0F","c":"269B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["science","physics","chemistry"],"k":[48,18],"o":4},"curling_stone":{"a":"Curling Stone","b":"1F94C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports"],"k":[41,47],"o":10},"slightly_frowning_face":{"a":"Slightly Frowning Face","b":"1F641","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","frowning","disappointed","sad","upset"],"k":[31,37],"o":7},"sunrise":{"a":"Sunrise","b":"1F305","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["morning","view","vacation","photo"],"k":[5,49]},"om_symbol":{"a":"Om Symbol","b":"1F549-FE0F","c":"1F549","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[28,12],"o":7},"chicken":{"a":"Chicken","b":"1F414","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cluck","nature","bird"],"k":[12,50]},"bowl_with_spoon":{"a":"Bowl with Spoon","b":"1F963","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","breakfast","cereal","oatmeal","porridge"],"k":[42,15],"o":10},"flag-ch":{"a":"Switzerland Flag","b":"1F1E8-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,22]},"video_camera":{"a":"Video Camera","b":"1F4F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["film","record"],"k":[26,48]},"video_game":{"a":"Video Game","b":"1F3AE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["play","console","PS4","controller"],"k":[9,8]},"rooster":{"a":"Rooster","b":"1F413","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","chicken"],"k":[12,49]},"vhs":{"a":"Videocassette","b":"1F4FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["record","video","oldschool","90s","80s"],"k":[26,51]},"city_sunset":{"a":"Cityscape at Dusk","b":"1F306","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","evening","sky","buildings"],"k":[5,50]},"confounded":{"a":"Confounded Face","b":"1F616","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","confused","sick","unwell","oops",":S"],"k":[30,46]},"green_salad":{"a":"Green Salad","b":"1F957","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","healthy","lettuce"],"k":[42,3],"o":9},"star_of_david":{"a":"Star of David","b":"2721-FE0F","c":"2721","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["judaism"],"k":[49,47],"o":1},"flag-ci":{"a":"Côte D’ivoire Flag","b":"1F1E8-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,23]},"popcorn":{"a":"Popcorn","b":"1F37F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","movie theater","films","snack"],"k":[8,13],"o":8},"city_sunrise":{"a":"Sunset over Buildings","b":"1F307","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","good morning","dawn"],"k":[5,51]},"disappointed":{"a":"Disappointed Face","b":"1F61E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","sad","upset","depressed",":("],"k":[31,2],"l":["):",":(",":-("],"m":":("},"mag":{"a":"Left-Pointing Magnifying Glass","b":"1F50D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["search","zoom","find","detective"],"k":[27,15]},"hatching_chick":{"a":"Hatching Chick","b":"1F423","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","chicken","egg","born","baby","bird"],"k":[13,13]},"joystick":{"a":"Joystick","b":"1F579-FE0F","c":"1F579","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["game","play"],"k":[29,20],"o":7},"wheel_of_dharma":{"a":"Wheel of Dharma","b":"2638-FE0F","c":"2638","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["hinduism","buddhism","sikhism","jainism"],"k":[47,39],"o":1},"flag-ck":{"a":"Cook Islands Flag","b":"1F1E8-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,24]},"canned_food":{"a":"Canned Food","b":"1F96B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","soup"],"k":[42,23],"o":10},"worried":{"a":"Worried Face","b":"1F61F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","concern","nervous",":("],"k":[31,3]},"baby_chick":{"a":"Baby Chick","b":"1F424","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","chicken","bird"],"k":[13,14]},"flag-cl":{"a":"Chile Flag","b":"1F1E8-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,25]},"game_die":{"a":"Game Die","b":"1F3B2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dice","random","tabletop","play","luck"],"k":[9,12]},"mag_right":{"a":"Right-Pointing Magnifying Glass","b":"1F50E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["search","zoom","find","detective"],"k":[27,16]},"yin_yang":{"a":"Yin Yang","b":"262F-FE0F","c":"262F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["balance"],"k":[47,38],"o":1},"bridge_at_night":{"a":"Bridge at Night","b":"1F309","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","sanfrancisco"],"k":[6,1]},"spades":{"a":"Black Spade Suit","b":"2660-FE0F","c":"2660","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["poker","cards","suits","magic"],"k":[48,4],"o":1},"hatched_chick":{"a":"Front-Facing Baby Chick","b":"1F425","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","chicken","baby","bird"],"k":[13,15]},"flag-cm":{"a":"Cameroon Flag","b":"1F1E8-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,26]},"latin_cross":{"a":"Latin Cross","b":"271D-FE0F","c":"271D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["christianity"],"k":[49,46],"o":1},"triumph":{"a":"Face with Look of Triumph","b":"1F624","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","gas","phew","proud","pride"],"k":[31,8]},"hotsprings":{"a":"Hot Springs","b":"2668-FE0F","c":"2668","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bath","warm","relax"],"k":[48,8],"o":1},"bento":{"a":"Bento Box","b":"1F371","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","japanese","box"],"k":[7,51]},"microscope":{"a":"Microscope","b":"1F52C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["laboratory","experiment","zoomin","science","study"],"k":[27,46]},"cry":{"a":"Crying Face","b":"1F622","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","tears","sad","depressed","upset",":'("],"k":[31,6],"l":[":'("],"m":":'("},"bird":{"a":"Bird","b":"1F426","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","fly","tweet","spring"],"k":[13,16]},"cn":{"a":"China Flag","b":"1F1E8-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["china","chinese","prc","flag","country","nation","banner"],"k":[1,27],"n":["flag-cn"]},"telescope":{"a":"Telescope","b":"1F52D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stars","space","zoom","science","astronomy"],"k":[27,47]},"rice_cracker":{"a":"Rice Cracker","b":"1F358","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","japanese"],"k":[7,26]},"hearts":{"a":"Black Heart Suit","b":"2665-FE0F","c":"2665","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["poker","cards","magic","suits"],"k":[48,6],"o":1},"orthodox_cross":{"a":"Orthodox Cross","b":"2626-FE0F","c":"2626","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["suppedaneum","religion"],"k":[47,35],"o":1},"milky_way":{"a":"Milky Way","b":"1F30C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","space","stars"],"k":[6,4]},"rice_ball":{"a":"Rice Ball","b":"1F359","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","japanese"],"k":[7,27]},"satellite_antenna":{"a":"Satellite Antenna","b":"1F4E1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[26,24]},"flag-co":{"a":"Colombia Flag","b":"1F1E8-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,28]},"carousel_horse":{"a":"Carousel Horse","b":"1F3A0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","carnival"],"k":[8,46]},"sob":{"a":"Loudly Crying Face","b":"1F62D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","cry","tears","sad","upset","depressed"],"k":[31,17],"m":":'("},"diamonds":{"a":"Black Diamond Suit","b":"2666-FE0F","c":"2666","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["poker","cards","magic","suits"],"k":[48,7],"o":1},"star_and_crescent":{"a":"Star and Crescent","b":"262A-FE0F","c":"262A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["islam"],"k":[47,36],"o":1},"penguin":{"a":"Penguin","b":"1F427","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature"],"k":[13,17]},"dove_of_peace":{"a":"Dove of Peace","b":"1F54A-FE0F","c":"1F54A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[28,13],"o":7},"flag-cp":{"a":"Clipperton Island Flag","b":"1F1E8-1F1F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[1,29]},"ferris_wheel":{"a":"Ferris Wheel","b":"1F3A1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["photo","carnival","londoneye"],"k":[8,47]},"clubs":{"a":"Black Club Suit","b":"2663-FE0F","c":"2663","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["poker","cards","magic","suits"],"k":[48,5],"o":1},"peace_symbol":{"a":"Peace Symbol","b":"262E-FE0F","c":"262E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["hippie"],"k":[47,37],"o":1},"candle":{"a":"Candle","b":"1F56F-FE0F","c":"1F56F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["fire","wax"],"k":[28,42],"o":7},"frowning":{"a":"Frowning Face with Open Mouth","b":"1F626","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","aw","what"],"k":[31,10]},"rice":{"a":"Cooked Rice","b":"1F35A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","china","asian"],"k":[7,28]},"flag-cr":{"a":"Costa Rica Flag","b":"1F1E8-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,30]},"roller_coaster":{"a":"Roller Coaster","b":"1F3A2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["carnival","playground","photo","fun"],"k":[8,48]},"menorah_with_nine_branches":{"a":"Menorah with Nine Branches","b":"1F54E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[28,17],"o":8},"black_joker":{"a":"Playing Card Black Joker","b":"1F0CF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["poker","cards","game","play","magic"],"k":[0,15]},"eagle":{"a":"Eagle","b":"1F985","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","bird"],"k":[42,29],"o":9},"curry":{"a":"Curry and Rice","b":"1F35B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","spicy","hot","indian"],"k":[7,29]},"bulb":{"a":"Electric Light Bulb","b":"1F4A1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["light","electricity","idea"],"k":[25,7]},"anguished":{"a":"Anguished Face","b":"1F627","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","stunned","nervous"],"k":[31,11],"l":["D:"]},"flag-cu":{"a":"Cuba Flag","b":"1F1E8-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,31]},"barber":{"a":"Barber Pole","b":"1F488","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["hair","salon","style"],"k":[24,34]},"duck":{"a":"Duck","b":"1F986","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","bird","mallard"],"k":[42,30],"o":9},"six_pointed_star":{"a":"Six Pointed Star with Middle Dot","b":"1F52F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["purple-square","religion","jewish","hexagram"],"k":[27,49]},"ramen":{"a":"Steaming Bowl","b":"1F35C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","japanese","noodle","chopsticks"],"k":[7,30]},"flashlight":{"a":"Electric Torch","b":"1F526","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dark","camping","sight","night"],"k":[27,40]},"mahjong":{"a":"Mahjong Tile Red Dragon","b":"1F004","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["game","play","chinese","kanji"],"k":[0,14],"o":5},"fearful":{"a":"Fearful Face","b":"1F628","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","scared","terrified","nervous","oops","huh"],"k":[31,12]},"aries":{"a":"Aries","b":"2648","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","purple-square","zodiac","astrology"],"k":[47,44],"o":1},"spaghetti":{"a":"Spaghetti","b":"1F35D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","italian","noodle"],"k":[7,31]},"circus_tent":{"a":"Circus Tent","b":"1F3AA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["festival","carnival","party"],"k":[9,4]},"izakaya_lantern":{"a":"Izakaya Lantern","b":"1F3EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["light","paper","halloween","spooky"],"k":[12,11],"n":["lantern"]},"flag-cv":{"a":"Cape Verde Flag","b":"1F1E8-1F1FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,32]},"weary":{"a":"Weary Face","b":"1F629","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","tired","sleepy","sad","frustrated","upset"],"k":[31,13]},"flower_playing_cards":{"a":"Flower Playing Cards","b":"1F3B4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["game","sunset","red"],"k":[9,14]},"owl":{"a":"Owl","b":"1F989","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","bird","hoot"],"k":[42,33],"o":9},"performing_arts":{"a":"Performing Arts","b":"1F3AD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["acting","theater","drama"],"k":[9,7]},"frog":{"a":"Frog Face","b":"1F438","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","croak","toad"],"k":[13,34]},"flag-cw":{"a":"Curaçao Flag","b":"1F1E8-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,33]},"notebook_with_decorative_cover":{"a":"Notebook with Decorative Cover","b":"1F4D4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["classroom","notes","record","paper","study"],"k":[26,11]},"exploding_head":{"a":"Shocked Face with Exploding Head","b":"1F92F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","shocked","mind","blown"],"k":[39,3],"n":["shocked_face_with_exploding_head"],"o":10},"taurus":{"a":"Taurus","b":"2649","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["purple-square","sign","zodiac","astrology"],"k":[47,45],"o":1},"sweet_potato":{"a":"Roasted Sweet Potato","b":"1F360","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","nature"],"k":[7,34]},"closed_book":{"a":"Closed Book","b":"1F4D5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["read","library","knowledge","textbook","learn"],"k":[26,12]},"gemini":{"a":"Gemini","b":"264A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","zodiac","purple-square","astrology"],"k":[47,46],"o":1},"frame_with_picture":{"a":"Frame with Picture","b":"1F5BC-FE0F","c":"1F5BC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,3],"o":7},"flag-cx":{"a":"Christmas Island Flag","b":"1F1E8-1F1FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,34]},"grimacing":{"a":"Grimacing Face","b":"1F62C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","grimace","teeth"],"k":[31,16]},"crocodile":{"a":"Crocodile","b":"1F40A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","reptile","lizard","alligator"],"k":[12,40]},"oden":{"a":"Oden","b":"1F362","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","japanese"],"k":[7,36]},"flag-cy":{"a":"Cyprus Flag","b":"1F1E8-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,35]},"book":{"a":"Open Book","b":"1F4D6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[26,13],"n":["open_book"]},"turtle":{"a":"Turtle","b":"1F422","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","slow","nature","tortoise"],"k":[13,12]},"art":{"a":"Artist Palette","b":"1F3A8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["design","paint","draw","colors"],"k":[9,2]},"sushi":{"a":"Sushi","b":"1F363","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","fish","japanese","rice"],"k":[7,37]},"cold_sweat":{"a":"Face with Open Mouth and Cold Sweat","b":"1F630","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","nervous","sweat"],"k":[31,20]},"cancer":{"a":"Cancer","b":"264B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","zodiac","purple-square","astrology"],"k":[47,47],"o":1},"fried_shrimp":{"a":"Fried Shrimp","b":"1F364","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","animal","appetizer","summer"],"k":[7,38]},"slot_machine":{"a":"Slot Machine","b":"1F3B0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bet","gamble","vegas","fruit machine","luck","casino"],"k":[9,10]},"scream":{"a":"Face Screaming in Fear","b":"1F631","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","munch","scared","omg"],"k":[31,21]},"green_book":{"a":"Green Book","b":"1F4D7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["read","library","knowledge","study"],"k":[26,14]},"leo":{"a":"Leo","b":"264C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","purple-square","zodiac","astrology"],"k":[47,48],"o":1},"flag-cz":{"a":"Czechia Flag","b":"1F1E8-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,36]},"lizard":{"a":"Lizard","b":"1F98E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","reptile"],"k":[42,38],"o":9},"virgo":{"a":"Virgo","b":"264D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","zodiac","purple-square","astrology"],"k":[47,49],"o":1},"steam_locomotive":{"a":"Steam Locomotive","b":"1F682","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","train"],"k":[34,10]},"de":{"a":"Germany Flag","b":"1F1E9-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["german","nation","flag","country","banner"],"k":[1,37],"n":["flag-de"]},"flushed":{"a":"Flushed Face","b":"1F633","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","blush","shy","flattered"],"k":[31,23]},"blue_book":{"a":"Blue Book","b":"1F4D8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["read","library","knowledge","learn","study"],"k":[26,15]},"snake":{"a":"Snake","b":"1F40D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","evil","nature","hiss","python"],"k":[12,43]},"fish_cake":{"a":"Fish Cake with Swirl Design","b":"1F365","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],"k":[7,39]},"railway_car":{"a":"Railway Car","b":"1F683","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,11]},"dango":{"a":"Dango","b":"1F361","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","dessert","sweet","japanese","barbecue","meat"],"k":[7,35]},"orange_book":{"a":"Orange Book","b":"1F4D9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["read","library","knowledge","textbook","study"],"k":[26,16]},"libra":{"a":"Libra","b":"264E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","purple-square","zodiac","astrology"],"k":[47,50],"o":1},"dragon_face":{"a":"Dragon Face","b":"1F432","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","myth","nature","chinese","green"],"k":[13,28]},"flag-dg":{"a":"Diego Garcia Flag","b":"1F1E9-1F1EC","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[1,38]},"zany_face":{"a":"Grinning Face with One Large and One Small Eye","b":"1F92A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,50],"n":["grinning_face_with_one_large_and_one_small_eye"],"o":10},"books":{"a":"Books","b":"1F4DA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["literature","library","study"],"k":[26,17]},"dragon":{"a":"Dragon","b":"1F409","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","myth","nature","chinese","green"],"k":[12,39]},"flag-dj":{"a":"Djibouti Flag","b":"1F1E9-1F1EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,39]},"dumpling":{"a":"Dumpling","b":"1F95F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","empanada","pierogi","potsticker"],"k":[42,11],"o":10},"dizzy_face":{"a":"Dizzy Face","b":"1F635","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["spent","unconscious","xox","dizzy"],"k":[31,25]},"scorpius":{"a":"Scorpius","b":"264F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","zodiac","purple-square","astrology","scorpio"],"k":[47,51],"o":1},"bullettrain_side":{"a":"High-Speed Train","b":"1F684","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,12]},"bullettrain_front":{"a":"High-Speed Train with Bullet Nose","b":"1F685","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","speed","fast","public","travel"],"k":[34,13]},"notebook":{"a":"Notebook","b":"1F4D3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","record","notes","paper","study"],"k":[26,10]},"fortune_cookie":{"a":"Fortune Cookie","b":"1F960","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","prophecy"],"k":[42,12],"o":10},"sagittarius":{"a":"Sagittarius","b":"2650","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","zodiac","purple-square","astrology"],"k":[48,0],"o":1},"sauropod":{"a":"Sauropod","b":"1F995","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","dinosaur","brachiosaurus","brontosaurus","diplodocus","extinct"],"k":[42,45],"o":10},"flag-dk":{"a":"Denmark Flag","b":"1F1E9-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,40]},"rage":{"a":"Pouting Face","b":"1F621","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["angry","mad","hate","despise"],"k":[31,5]},"ledger":{"a":"Ledger","b":"1F4D2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["notes","paper"],"k":[26,9]},"angry":{"a":"Angry Face","b":"1F620","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mad","face","annoyed","frustrated"],"k":[31,4],"l":[">:(",">:-("]},"t-rex":{"a":"T-Rex","b":"1F996","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","dinosaur","tyrannosaurus","extinct"],"k":[42,46],"o":10},"capricorn":{"a":"Capricorn","b":"2651","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","zodiac","purple-square","astrology"],"k":[48,1],"o":1},"takeout_box":{"a":"Takeout Box","b":"1F961","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","leftovers"],"k":[42,13],"o":10},"flag-dm":{"a":"Dominica Flag","b":"1F1E9-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,41]},"train2":{"a":"Train","b":"1F686","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,14]},"page_with_curl":{"a":"Page with Curl","b":"1F4C3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["documents","office","paper"],"k":[25,46]},"whale":{"a":"Spouting Whale","b":"1F433","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","sea","ocean"],"k":[13,29]},"face_with_symbols_on_mouth":{"a":"Serious Face with Symbols Covering Mouth","b":"1F92C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[39,0],"n":["serious_face_with_symbols_covering_mouth"],"o":10},"flag-do":{"a":"Dominican Republic Flag","b":"1F1E9-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,42]},"metro":{"a":"Metro","b":"1F687","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","blue-square","mrt","underground","tube"],"k":[34,15]},"icecream":{"a":"Soft Ice Cream","b":"1F366","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","hot","dessert","summer"],"k":[7,40]},"aquarius":{"a":"Aquarius","b":"2652","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","purple-square","zodiac","astrology"],"k":[48,2],"o":1},"flag-dz":{"a":"Algeria Flag","b":"1F1E9-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,43]},"whale2":{"a":"Whale","b":"1F40B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","sea","ocean"],"k":[12,41]},"mask":{"a":"Face with Medical Mask","b":"1F637","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","sick","ill","disease"],"k":[31,27]},"scroll":{"a":"Scroll","b":"1F4DC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["documents","ancient","history","paper"],"k":[26,19]},"shaved_ice":{"a":"Shaved Ice","b":"1F367","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["hot","dessert","summer"],"k":[7,41]},"pisces":{"a":"Pisces","b":"2653","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["purple-square","sign","zodiac","astrology"],"k":[48,3],"o":1},"light_rail":{"a":"Light Rail","b":"1F688","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,16]},"dolphin":{"a":"Dolphin","b":"1F42C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","fish","sea","ocean","flipper","fins","beach"],"k":[13,22],"n":["flipper"]},"face_with_thermometer":{"a":"Face with Thermometer","b":"1F912","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sick","temperature","thermometer","cold","fever"],"k":[37,26],"o":8},"flag-ea":{"a":"Ceuta & Melilla Flag","b":"1F1EA-1F1E6","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[1,44]},"ophiuchus":{"a":"Ophiuchus","b":"26CE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sign","purple-square","constellation","astrology"],"k":[48,31]},"station":{"a":"Station","b":"1F689","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","public"],"k":[34,17]},"ice_cream":{"a":"Ice Cream","b":"1F368","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","hot","dessert"],"k":[7,42]},"page_facing_up":{"a":"Page Facing Up","b":"1F4C4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["documents","office","paper","information"],"k":[25,47]},"doughnut":{"a":"Doughnut","b":"1F369","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","dessert","snack","sweet","donut"],"k":[7,43]},"face_with_head_bandage":{"a":"Face with Head-Bandage","b":"1F915","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["injured","clumsy","bandage","hurt"],"k":[37,29],"o":8},"fish":{"a":"Fish","b":"1F41F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","food","nature"],"k":[13,9]},"newspaper":{"a":"Newspaper","b":"1F4F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["press","headline"],"k":[26,39]},"tram":{"a":"Tram","b":"1F68A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,18]},"flag-ec":{"a":"Ecuador Flag","b":"1F1EA-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,45]},"twisted_rightwards_arrows":{"a":"Twisted Rightwards Arrows","b":"1F500","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","shuffle","music","random"],"k":[27,2]},"flag-ee":{"a":"Estonia Flag","b":"1F1EA-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,46]},"cookie":{"a":"Cookie","b":"1F36A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","snack","oreo","chocolate","sweet","dessert"],"k":[7,44]},"monorail":{"a":"Monorail","b":"1F69D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,37]},"tropical_fish":{"a":"Tropical Fish","b":"1F420","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","swim","ocean","beach","nemo"],"k":[13,10]},"rolled_up_newspaper":{"a":"Rolled Up Newspaper","b":"1F5DE-FE0F","c":"1F5DE","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,12],"o":7},"nauseated_face":{"a":"Nauseated Face","b":"1F922","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","vomit","gross","green","sick","throw up","ill"],"k":[38,25],"o":9},"repeat":{"a":"Clockwise Rightwards and Leftwards Open Circle Arrows","b":"1F501","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["loop","record"],"k":[27,3]},"bookmark_tabs":{"a":"Bookmark Tabs","b":"1F4D1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["favorite","save","order","tidy"],"k":[26,8]},"repeat_one":{"a":"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay","b":"1F502","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","loop"],"k":[27,4]},"flag-eg":{"a":"Egypt Flag","b":"1F1EA-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,47]},"mountain_railway":{"a":"Mountain Railway","b":"1F69E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,38]},"birthday":{"a":"Birthday Cake","b":"1F382","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","dessert","cake"],"k":[8,16]},"blowfish":{"a":"Blowfish","b":"1F421","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","nature","food","sea","ocean"],"k":[13,11]},"face_vomiting":{"a":"Face with Open Mouth Vomiting","b":"1F92E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[39,2],"n":["face_with_open_mouth_vomiting"],"o":10},"arrow_forward":{"a":"Black Right-Pointing Triangle","b":"25B6-FE0F","c":"25B6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","right","direction","play"],"k":[47,10],"o":1},"bookmark":{"a":"Bookmark","b":"1F516","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["favorite","label","save"],"k":[27,24]},"flag-eh":{"a":"Western Sahara Flag","b":"1F1EA-1F1ED","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[1,48]},"shark":{"a":"Shark","b":"1F988","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","fish","sea","ocean","jaws","fins","beach"],"k":[42,32],"o":9},"train":{"a":"Tram Car","b":"1F68B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","carriage","public","travel"],"k":[34,19]},"sneezing_face":{"a":"Sneezing Face","b":"1F927","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","gesundheit","sneeze","sick","allergy"],"k":[38,47],"o":9},"cake":{"a":"Shortcake","b":"1F370","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","dessert"],"k":[7,50]},"bus":{"a":"Bus","b":"1F68C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["car","vehicle","transportation"],"k":[34,20]},"pie":{"a":"Pie","b":"1F967","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food","dessert","pastry"],"k":[42,19],"o":10},"innocent":{"a":"Smiling Face with Halo","b":"1F607","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","angel","heaven","halo"],"k":[30,31]},"fast_forward":{"a":"Black Right-Pointing Double Triangle","b":"23E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","play","speed","continue"],"k":[46,45]},"label":{"a":"Label","b":"1F3F7-FE0F","c":"1F3F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sale","tag"],"k":[12,21],"o":7},"octopus":{"a":"Octopus","b":"1F419","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","creature","ocean","sea","nature","beach"],"k":[13,3]},"flag-er":{"a":"Eritrea Flag","b":"1F1EA-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,49]},"black_right_pointing_double_triangle_with_vertical_bar":{"a":"Black Right Pointing Double Triangle with Vertical Bar","b":"23ED-FE0F","c":"23ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,49]},"chocolate_bar":{"a":"Chocolate Bar","b":"1F36B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","snack","dessert","sweet"],"k":[7,45]},"oncoming_bus":{"a":"Oncoming Bus","b":"1F68D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","transportation"],"k":[34,21]},"shell":{"a":"Spiral Shell","b":"1F41A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","sea","beach"],"k":[13,4]},"face_with_cowboy_hat":{"a":"Face with Cowboy Hat","b":"1F920","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,23],"o":9},"moneybag":{"a":"Money Bag","b":"1F4B0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dollar","payment","coins","sale"],"k":[25,27]},"es":{"a":"Spain Flag","b":"1F1EA-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["spain","flag","nation","country","banner"],"k":[1,50],"n":["flag-es"]},"crab":{"a":"Crab","b":"1F980","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","crustacean"],"k":[42,24],"o":8},"yen":{"a":"Banknote with Yen Sign","b":"1F4B4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","japanese","dollar","currency"],"k":[25,31]},"flag-et":{"a":"Ethiopia Flag","b":"1F1EA-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[1,51]},"clown_face":{"a":"Clown Face","b":"1F921","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face"],"k":[38,24],"o":9},"black_right_pointing_triangle_with_double_vertical_bar":{"a":"Black Right Pointing Triangle with Double Vertical Bar","b":"23EF-FE0F","c":"23EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,51]},"trolleybus":{"a":"Trolleybus","b":"1F68E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bart","transportation","vehicle"],"k":[34,22]},"candy":{"a":"Candy","b":"1F36C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["snack","dessert","sweet","lolly"],"k":[7,46]},"lying_face":{"a":"Lying Face","b":"1F925","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","lie","pinocchio"],"k":[38,28],"o":9},"arrow_backward":{"a":"Black Left-Pointing Triangle","b":"25C0-FE0F","c":"25C0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","left","direction"],"k":[47,11],"o":1},"dollar":{"a":"Banknote with Dollar Sign","b":"1F4B5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","bill","currency"],"k":[25,32]},"shrimp":{"a":"Shrimp","b":"1F990","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","ocean","nature","seafood"],"k":[42,40],"o":9},"minibus":{"a":"Minibus","b":"1F690","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","car","transportation"],"k":[34,24]},"flag-eu":{"a":"European Union Flag","b":"1F1EA-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,0]},"lollipop":{"a":"Lollipop","b":"1F36D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","snack","candy","sweet"],"k":[7,47]},"squid":{"a":"Squid","b":"1F991","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","nature","ocean","sea"],"k":[42,41],"o":9},"euro":{"a":"Banknote with Euro Sign","b":"1F4B6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","dollar","currency"],"k":[25,33]},"flag-fi":{"a":"Finland Flag","b":"1F1EB-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,1]},"ambulance":{"a":"Ambulance","b":"1F691","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["health","911","hospital"],"k":[34,25]},"custard":{"a":"Custard","b":"1F36E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dessert","food"],"k":[7,48]},"shushing_face":{"a":"Face with Finger Covering Closed Lips","b":"1F92B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,51],"n":["face_with_finger_covering_closed_lips"],"o":10},"rewind":{"a":"Black Left-Pointing Double Triangle","b":"23EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["play","blue-square"],"k":[46,46]},"black_left_pointing_double_triangle_with_vertical_bar":{"a":"Black Left Pointing Double Triangle with Vertical Bar","b":"23EE-FE0F","c":"23EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,50]},"face_with_hand_over_mouth":{"a":"Smiling Face with Smiling Eyes and Hand Covering Mouth","b":"1F92D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[39,1],"n":["smiling_face_with_smiling_eyes_and_hand_covering_mouth"],"o":10},"flag-fj":{"a":"Fiji Flag","b":"1F1EB-1F1EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,2]},"honey_pot":{"a":"Honey Pot","b":"1F36F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bees","sweet","kitchen"],"k":[7,49]},"snail":{"a":"Snail","b":"1F40C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["slow","animal","shell"],"k":[12,42]},"pound":{"a":"Banknote with Pound Sign","b":"1F4B7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["british","sterling","money","sales","bills","uk","england","currency"],"k":[25,34]},"fire_engine":{"a":"Fire Engine","b":"1F692","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","cars","vehicle"],"k":[34,26]},"baby_bottle":{"a":"Baby Bottle","b":"1F37C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["food","container","milk"],"k":[8,10]},"flag-fk":{"a":"Falkland Islands Flag","b":"1F1EB-1F1F0","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[2,3]},"butterfly":{"a":"Butterfly","b":"1F98B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","insect","nature","caterpillar"],"k":[42,35],"o":9},"money_with_wings":{"a":"Money with Wings","b":"1F4B8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dollar","bills","payment","sale"],"k":[25,35]},"face_with_monocle":{"a":"Face with Monocle","b":"1F9D0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,49],"o":10},"police_car":{"a":"Police Car","b":"1F693","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","cars","transportation","law","legal","enforcement"],"k":[34,27]},"arrow_up_small":{"a":"Up-Pointing Small Red Triangle","b":"1F53C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","triangle","direction","point","forward","top"],"k":[28,10]},"flag-fm":{"a":"Micronesia Flag","b":"1F1EB-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,4]},"glass_of_milk":{"a":"Glass of Milk","b":"1F95B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[42,7],"o":9},"credit_card":{"a":"Credit Card","b":"1F4B3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","dollar","bill","payment","shopping"],"k":[25,30]},"oncoming_police_car":{"a":"Oncoming Police Car","b":"1F694","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","law","legal","enforcement","911"],"k":[34,28]},"bug":{"a":"Bug","b":"1F41B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","insect","nature","worm"],"k":[13,5]},"nerd_face":{"a":"Nerd Face","b":"1F913","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","nerdy","geek","dork"],"k":[37,27],"o":8},"arrow_double_up":{"a":"Black Up-Pointing Double Triangle","b":"23EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","top"],"k":[46,47]},"chart":{"a":"Chart with Upwards Trend and Yen Sign","b":"1F4B9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["green-square","graph","presentation","stats"],"k":[25,36]},"flag-fo":{"a":"Faroe Islands Flag","b":"1F1EB-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,5]},"ant":{"a":"Ant","b":"1F41C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","insect","nature","bug"],"k":[13,6]},"arrow_down_small":{"a":"Down-Pointing Small Red Triangle","b":"1F53D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","bottom"],"k":[28,11]},"smiling_imp":{"a":"Smiling Face with Horns","b":"1F608","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["devil","horns"],"k":[30,32]},"taxi":{"a":"Taxi","b":"1F695","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["uber","vehicle","cars","transportation"],"k":[34,29]},"coffee":{"a":"Hot Beverage","b":"2615","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["beverage","caffeine","latte","espresso"],"k":[47,24],"o":4},"fr":{"a":"France Flag","b":"1F1EB-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["banner","flag","nation","france","french","country"],"k":[2,6],"n":["flag-fr"]},"oncoming_taxi":{"a":"Oncoming Taxi","b":"1F696","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","cars","uber"],"k":[34,30]},"arrow_double_down":{"a":"Black Down-Pointing Double Triangle","b":"23EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","direction","bottom"],"k":[46,48]},"imp":{"a":"Imp","b":"1F47F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["devil","angry","horns"],"k":[22,51]},"currency_exchange":{"a":"Currency Exchange","b":"1F4B1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","dollar","travel"],"k":[25,28]},"tea":{"a":"Teacup Without Handle","b":"1F375","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["drink","bowl","breakfast","green","british"],"k":[8,3]},"bee":{"a":"Honeybee","b":"1F41D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[13,7],"n":["honeybee"]},"heavy_dollar_sign":{"a":"Heavy Dollar Sign","b":"1F4B2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["money","sales","payment","currency","buck"],"k":[25,29]},"car":{"a":"Automobile","b":"1F697","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[34,31],"n":["red_car"]},"sake":{"a":"Sake Bottle and Cup","b":"1F376","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["wine","drink","drunk","beverage","japanese","alcohol","booze"],"k":[8,4]},"flag-ga":{"a":"Gabon Flag","b":"1F1EC-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,7]},"beetle":{"a":"Lady Beetle","b":"1F41E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","insect","nature","ladybug"],"k":[13,8]},"japanese_ogre":{"a":"Japanese Ogre","b":"1F479","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],"k":[22,40]},"double_vertical_bar":{"a":"Double Vertical Bar","b":"23F8-FE0F","c":"23F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,4],"o":7},"champagne":{"a":"Bottle with Popping Cork","b":"1F37E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["drink","wine","bottle","celebration"],"k":[8,12],"o":8},"japanese_goblin":{"a":"Japanese Goblin","b":"1F47A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["red","evil","mask","monster","scary","creepy","japanese","goblin"],"k":[22,41]},"black_square_for_stop":{"a":"Black Square for Stop","b":"23F9-FE0F","c":"23F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,5],"o":7},"oncoming_automobile":{"a":"Oncoming Automobile","b":"1F698","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["car","vehicle","transportation"],"k":[34,32]},"email":{"a":"Envelope","b":"2709-FE0F","c":"2709","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["letter","postal","inbox","communication"],"k":[49,17],"n":["envelope"],"o":1},"cricket":{"a":"Cricket","b":"1F997","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports"],"k":[42,47],"o":10},"gb":{"a":"United Kingdom Flag","b":"1F1EC-1F1E7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,8],"n":["uk","flag-gb"]},"black_circle_for_record":{"a":"Black Circle for Record","b":"23FA-FE0F","c":"23FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,6],"o":7},"flag-gd":{"a":"Grenada Flag","b":"1F1EC-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,9]},"spider":{"a":"Spider","b":"1F577-FE0F","c":"1F577","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","arachnid"],"k":[29,18],"o":7},"blue_car":{"a":"Recreational Vehicle","b":"1F699","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle"],"k":[34,33]},"skull":{"a":"Skull","b":"1F480","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dead","skeleton","creepy","death"],"k":[23,0]},"e-mail":{"a":"E-Mail Symbol","b":"1F4E7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["communication","inbox"],"k":[26,30]},"wine_glass":{"a":"Wine Glass","b":"1F377","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["drink","beverage","drunk","alcohol","booze"],"k":[8,5]},"spider_web":{"a":"Spider Web","b":"1F578-FE0F","c":"1F578","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","insect","arachnid","silk"],"k":[29,19],"o":7},"cocktail":{"a":"Cocktail Glass","b":"1F378","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["drink","drunk","alcohol","beverage","booze","mojito"],"k":[8,6]},"skull_and_crossbones":{"a":"Skull and Crossbones","b":"2620-FE0F","c":"2620","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["poison","danger","deadly","scary","death","pirate","evil"],"k":[47,32],"o":1},"flag-ge":{"a":"Georgia Flag","b":"1F1EC-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,10]},"eject":{"a":"Eject","b":"23CF-FE0F","c":"23CF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,44],"o":4},"truck":{"a":"Delivery Truck","b":"1F69A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cars","transportation"],"k":[34,34]},"incoming_envelope":{"a":"Incoming Envelope","b":"1F4E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","inbox"],"k":[26,31]},"tropical_drink":{"a":"Tropical Drink","b":"1F379","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["beverage","cocktail","summer","beach","alcohol","booze","mojito"],"k":[8,7]},"scorpion":{"a":"Scorpion","b":"1F982","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["animal","arachnid"],"k":[42,26],"o":8},"cinema":{"a":"Cinema","b":"1F3A6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","record","film","movie","curtain","stage","theater"],"k":[9,0]},"articulated_lorry":{"a":"Articulated Lorry","b":"1F69B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","cars","transportation","express"],"k":[34,35]},"envelope_with_arrow":{"a":"Envelope with Downwards Arrow Above","b":"1F4E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","communication"],"k":[26,32]},"ghost":{"a":"Ghost","b":"1F47B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["halloween","spooky","scary"],"k":[22,42]},"flag-gf":{"a":"French Guiana Flag","b":"1F1EC-1F1EB","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[2,11]},"bouquet":{"a":"Bouquet","b":"1F490","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["flowers","nature","spring"],"k":[24,42]},"tractor":{"a":"Tractor","b":"1F69C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","car","farming","agriculture"],"k":[34,36]},"beer":{"a":"Beer Mug","b":"1F37A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"k":[8,8]},"outbox_tray":{"a":"Outbox Tray","b":"1F4E4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["inbox","email"],"k":[26,27]},"low_brightness":{"a":"Low Brightness Symbol","b":"1F505","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sun","afternoon","warm","summer"],"k":[27,7]},"alien":{"a":"Extraterrestrial Alien","b":"1F47D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["UFO","paul","weird","outer_space"],"k":[22,49]},"flag-gg":{"a":"Guernsey Flag","b":"1F1EC-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,12]},"cherry_blossom":{"a":"Cherry Blossom","b":"1F338","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","plant","spring","flower"],"k":[6,46]},"inbox_tray":{"a":"Inbox Tray","b":"1F4E5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","documents"],"k":[26,28]},"flag-gh":{"a":"Ghana Flag","b":"1F1EC-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,13]},"bike":{"a":"Bicycle","b":"1F6B2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","bicycle","exercise","hipster"],"k":[35,23]},"space_invader":{"a":"Alien Monster","b":"1F47E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["game","arcade","play"],"k":[22,50]},"beers":{"a":"Clinking Beer Mugs","b":"1F37B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"k":[8,9]},"high_brightness":{"a":"High Brightness Symbol","b":"1F506","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sun","light"],"k":[27,8]},"package":{"a":"Package","b":"1F4E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mail","gift","cardboard","box","moving"],"k":[26,29]},"scooter":{"a":"Scooter","b":"1F6F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,19],"o":9},"white_flower":{"a":"White Flower","b":"1F4AE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","spring"],"k":[25,25]},"clinking_glasses":{"a":"Clinking Glasses","b":"1F942","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["beverage","drink","party","alcohol","celebrate","cheers"],"k":[41,38],"o":9},"robot_face":{"a":"Robot Face","b":"1F916","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,30],"o":8},"signal_strength":{"a":"Antenna with Bars","b":"1F4F6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],"k":[26,45]},"flag-gi":{"a":"Gibraltar Flag","b":"1F1EC-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,14]},"flag-gl":{"a":"Greenland Flag","b":"1F1EC-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,15]},"motor_scooter":{"a":"Motor Scooter","b":"1F6F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["vehicle","vespa","sasha"],"k":[37,20],"o":9},"mailbox":{"a":"Closed Mailbox with Raised Flag","b":"1F4EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","inbox","communication"],"k":[26,34]},"vibration_mode":{"a":"Vibration Mode","b":"1F4F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["orange-square","phone"],"k":[26,42]},"hankey":{"a":"Pile of Poo","b":"1F4A9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[25,15],"n":["poop","shit"]},"rosette":{"a":"Rosette","b":"1F3F5-FE0F","c":"1F3F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["flower","decoration","military"],"k":[12,20],"o":7},"tumbler_glass":{"a":"Tumbler Glass","b":"1F943","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],"k":[41,39],"o":9},"cup_with_straw":{"a":"Cup with Straw","b":"1F964","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["drink","soda"],"k":[42,16],"o":10},"flag-gm":{"a":"Gambia Flag","b":"1F1EC-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,16]},"mailbox_closed":{"a":"Closed Mailbox with Lowered Flag","b":"1F4EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","communication","inbox"],"k":[26,33]},"mobile_phone_off":{"a":"Mobile Phone off","b":"1F4F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mute","orange-square","silence","quiet"],"k":[26,43]},"busstop":{"a":"Bus Stop","b":"1F68F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","wait"],"k":[34,23]},"smiley_cat":{"a":"Smiling Cat Face with Open Mouth","b":"1F63A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats","happy","smile"],"k":[31,30]},"rose":{"a":"Rose","b":"1F339","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["flowers","valentines","love","spring"],"k":[6,47]},"motorway":{"a":"Motorway","b":"1F6E3-FE0F","c":"1F6E3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["road","cupertino","interstate","highway"],"k":[37,11],"o":7},"smile_cat":{"a":"Grinning Cat Face with Smiling Eyes","b":"1F638","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats","smile"],"k":[31,28]},"flag-gn":{"a":"Guinea Flag","b":"1F1EC-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,17]},"wilted_flower":{"a":"Wilted Flower","b":"1F940","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["plant","nature","flower"],"k":[41,36],"o":9},"mailbox_with_mail":{"a":"Open Mailbox with Raised Flag","b":"1F4EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","inbox","communication"],"k":[26,35]},"chopsticks":{"a":"Chopsticks","b":"1F962","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["food"],"k":[42,14],"o":10},"female_sign":{"a":"Female Sign","b":"2640-FE0F","c":"2640","d":false,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,42],"o":1},"mailbox_with_no_mail":{"a":"Open Mailbox with Lowered Flag","b":"1F4ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","inbox"],"k":[26,36]},"knife_fork_plate":{"a":"Knife Fork Plate","b":"1F37D-FE0F","c":"1F37D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[8,11],"o":7},"hibiscus":{"a":"Hibiscus","b":"1F33A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","vegetable","flowers","beach"],"k":[6,48]},"flag-gp":{"a":"Guadeloupe Flag","b":"1F1EC-1F1F5","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[2,18]},"railway_track":{"a":"Railway Track","b":"1F6E4-FE0F","c":"1F6E4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["train","transportation"],"k":[37,12],"o":7},"male_sign":{"a":"Male Sign","b":"2642-FE0F","c":"2642","d":false,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[47,43],"o":1},"joy_cat":{"a":"Cat Face with Tears of Joy","b":"1F639","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats","haha","happy","tears"],"k":[31,29]},"fuelpump":{"a":"Fuel Pump","b":"26FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["gas station","petroleum"],"k":[49,13],"o":5},"sunflower":{"a":"Sunflower","b":"1F33B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","plant","fall"],"k":[6,49]},"postbox":{"a":"Postbox","b":"1F4EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","letter","envelope"],"k":[26,37]},"flag-gq":{"a":"Equatorial Guinea Flag","b":"1F1EC-1F1F6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,19]},"heart_eyes_cat":{"a":"Smiling Cat Face with Heart-Shaped Eyes","b":"1F63B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","love","like","affection","cats","valentines","heart"],"k":[31,31]},"fork_and_knife":{"a":"Fork and Knife","b":"1F374","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cutlery","kitchen"],"k":[8,2]},"medical_symbol":{"a":"Medical Symbol","b":"2695-FE0F","c":"2695","d":false,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[48,14],"n":["staff_of_aesculapius"],"o":4},"recycle":{"a":"Black Universal Recycling Symbol","b":"267B-FE0F","c":"267B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["arrow","environment","garbage","trash"],"k":[48,9],"o":3},"spoon":{"a":"Spoon","b":"1F944","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["cutlery","kitchen","tableware"],"k":[41,40],"o":9},"blossom":{"a":"Blossom","b":"1F33C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","flowers","yellow"],"k":[6,50]},"rotating_light":{"a":"Police Cars Revolving Light","b":"1F6A8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["police","ambulance","911","emergency","alert","error","pinged","law","legal"],"k":[35,13]},"smirk_cat":{"a":"Cat Face with Wry Smile","b":"1F63C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats","smirk"],"k":[31,32]},"ballot_box_with_ballot":{"a":"Ballot Box with Ballot","b":"1F5F3-FE0F","c":"1F5F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,17],"o":7},"flag-gr":{"a":"Greece Flag","b":"1F1EC-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,20]},"kissing_cat":{"a":"Kissing Cat Face with Closed Eyes","b":"1F63D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats","kiss"],"k":[31,33]},"pencil2":{"a":"Pencil","b":"270F-FE0F","c":"270F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","write","paper","writing","school","study"],"k":[49,42],"o":1},"traffic_light":{"a":"Horizontal Traffic Light","b":"1F6A5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","signal"],"k":[35,10]},"fleur_de_lis":{"a":"Fleur De Lis","b":"269C-FE0F","c":"269C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["decorative","scout"],"k":[48,19],"o":4},"tulip":{"a":"Tulip","b":"1F337","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["flowers","plant","nature","summer","spring"],"k":[6,45]},"hocho":{"a":"Hocho","b":"1F52A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["knife","blade","cutlery","kitchen","weapon"],"k":[27,44],"n":["knife"]},"flag-gs":{"a":"South Georgia & South Sandwich Islands Flag","b":"1F1EC-1F1F8","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[2,21]},"seedling":{"a":"Seedling","b":"1F331","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","nature","grass","lawn","spring"],"k":[6,39]},"amphora":{"a":"Amphora","b":"1F3FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["vase","jar"],"k":[12,24],"o":8},"scream_cat":{"a":"Weary Cat Face","b":"1F640","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats","munch","scared","scream"],"k":[31,36]},"vertical_traffic_light":{"a":"Vertical Traffic Light","b":"1F6A6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","driving"],"k":[35,11]},"black_nib":{"a":"Black Nib","b":"2712-FE0F","c":"2712","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["pen","stationery","writing","write"],"k":[49,43],"o":1},"flag-gt":{"a":"Guatemala Flag","b":"1F1EC-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,22]},"trident":{"a":"Trident Emblem","b":"1F531","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["weapon","spear"],"k":[27,51]},"flag-gu":{"a":"Guam Flag","b":"1F1EC-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,23]},"name_badge":{"a":"Name Badge","b":"1F4DB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fire","forbid"],"k":[26,18]},"construction":{"a":"Construction Sign","b":"1F6A7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["wip","progress","caution","warning"],"k":[35,12]},"lower_left_fountain_pen":{"a":"Lower Left Fountain Pen","b":"1F58B-FE0F","c":"1F58B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,29],"o":7},"evergreen_tree":{"a":"Evergreen Tree","b":"1F332","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","nature"],"k":[6,40]},"crying_cat_face":{"a":"Crying Cat Face","b":"1F63F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","tears","weep","sad","cats","upset","cry"],"k":[31,35]},"flag-gw":{"a":"Guinea-Bissau Flag","b":"1F1EC-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,24]},"lower_left_ballpoint_pen":{"a":"Lower Left Ballpoint Pen","b":"1F58A-FE0F","c":"1F58A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,28],"o":7},"pouting_cat":{"a":"Pouting Cat Face","b":"1F63E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","cats"],"k":[31,34]},"deciduous_tree":{"a":"Deciduous Tree","b":"1F333","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","nature"],"k":[6,41]},"octagonal_sign":{"a":"Octagonal Sign","b":"1F6D1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,6],"o":9},"beginner":{"a":"Japanese Symbol for Beginner","b":"1F530","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["badge","shield"],"k":[27,50]},"flag-gy":{"a":"Guyana Flag","b":"1F1EC-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,25]},"lower_left_paintbrush":{"a":"Lower Left Paintbrush","b":"1F58C-FE0F","c":"1F58C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,30],"o":7},"o":{"a":"Heavy Large Circle","b":"2B55","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["circle","round"],"k":[50,23],"o":5},"palm_tree":{"a":"Palm Tree","b":"1F334","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["plant","vegetable","nature","summer","beach","mojito","tropical"],"k":[6,42]},"anchor":{"a":"Anchor","b":"2693","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["ship","ferry","sea","boat"],"k":[48,12],"o":4},"see_no_evil":{"a":"See-No-Evil Monkey","b":"1F648","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["monkey","animal","nature","haha"],"k":[32,43]},"boat":{"a":"Sailboat","b":"26F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[48,43],"n":["sailboat"],"o":5},"white_check_mark":{"a":"White Heavy Check Mark","b":"2705","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["green-square","ok","agree","vote","election","answer","tick"],"k":[49,15]},"flag-hk":{"a":"Hong Kong Sar China Flag","b":"1F1ED-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,26]},"lower_left_crayon":{"a":"Lower Left Crayon","b":"1F58D-FE0F","c":"1F58D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,31],"o":7},"hear_no_evil":{"a":"Hear-No-Evil Monkey","b":"1F649","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","monkey","nature"],"k":[32,44]},"cactus":{"a":"Cactus","b":"1F335","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vegetable","plant","nature"],"k":[6,43]},"ear_of_rice":{"a":"Ear of Rice","b":"1F33E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","plant"],"k":[7,0]},"speak_no_evil":{"a":"Speak-No-Evil Monkey","b":"1F64A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["monkey","animal","nature","omg"],"k":[32,45]},"flag-hm":{"a":"Heard & Mcdonald Islands Flag","b":"1F1ED-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,27]},"ballot_box_with_check":{"a":"Ballot Box with Check","b":"2611-FE0F","c":"2611","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["ok","agree","confirm","black-square","vote","election","yes","tick"],"k":[47,22],"o":1},"canoe":{"a":"Canoe","b":"1F6F6","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["boat","paddle","water","ship"],"k":[37,21],"o":9},"memo":{"a":"Memo","b":"1F4DD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"k":[26,20],"n":["pencil"]},"herb":{"a":"Herb","b":"1F33F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vegetable","plant","medicine","weed","grass","lawn"],"k":[7,1]},"flag-hn":{"a":"Honduras Flag","b":"1F1ED-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,28]},"heavy_check_mark":{"a":"Heavy Check Mark","b":"2714-FE0F","c":"2714","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["ok","nike","answer","yes","tick"],"k":[49,44],"o":1},"briefcase":{"a":"Briefcase","b":"1F4BC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["business","documents","work","law","legal","job","career"],"k":[25,39]},"speedboat":{"a":"Speedboat","b":"1F6A4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["ship","transportation","vehicle","summer"],"k":[35,9]},"baby":{"skin_variations":{"1F3FB":{"unified":"1F476-1F3FB","non_qualified":null,"image":"1f476-1f3fb.png","sheet_x":22,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F476-1F3FC","non_qualified":null,"image":"1f476-1f3fc.png","sheet_x":22,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F476-1F3FD","non_qualified":null,"image":"1f476-1f3fd.png","sheet_x":22,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F476-1F3FE","non_qualified":null,"image":"1f476-1f3fe.png","sheet_x":22,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F476-1F3FF","non_qualified":null,"image":"1f476-1f3ff.png","sheet_x":22,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Baby","b":"1F476","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["child","boy","girl","toddler"],"k":[22,10]},"heavy_multiplication_x":{"a":"Heavy Multiplication X","b":"2716-FE0F","c":"2716","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["math","calculation"],"k":[49,45],"o":1},"child":{"skin_variations":{"1F3FB":{"unified":"1F9D2-1F3FB","non_qualified":null,"image":"1f9d2-1f3fb.png","sheet_x":43,"sheet_y":5,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F9D2-1F3FC","non_qualified":null,"image":"1f9d2-1f3fc.png","sheet_x":43,"sheet_y":6,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F9D2-1F3FD","non_qualified":null,"image":"1f9d2-1f3fd.png","sheet_x":43,"sheet_y":7,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F9D2-1F3FE","non_qualified":null,"image":"1f9d2-1f3fe.png","sheet_x":43,"sheet_y":8,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F9D2-1F3FF","non_qualified":null,"image":"1f9d2-1f3ff.png","sheet_x":43,"sheet_y":9,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Child","b":"1F9D2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["gender-neutral","young"],"k":[43,4],"o":10},"shamrock":{"a":"Shamrock","b":"2618-FE0F","c":"2618","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["vegetable","plant","nature","irish","clover"],"k":[47,25],"o":4},"passenger_ship":{"a":"Passenger Ship","b":"1F6F3-FE0F","c":"1F6F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["yacht","cruise","ferry"],"k":[37,18],"o":7},"flag-hr":{"a":"Croatia Flag","b":"1F1ED-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,29]},"file_folder":{"a":"File Folder","b":"1F4C1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["documents","business","office"],"k":[25,44]},"x":{"a":"Cross Mark","b":"274C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["no","delete","remove","cancel"],"k":[50,1]},"four_leaf_clover":{"a":"Four Leaf Clover","b":"1F340","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vegetable","plant","nature","lucky","irish"],"k":[7,2]},"open_file_folder":{"a":"Open File Folder","b":"1F4C2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["documents","load"],"k":[25,45]},"boy":{"skin_variations":{"1F3FB":{"unified":"1F466-1F3FB","non_qualified":null,"image":"1f466-1f3fb.png","sheet_x":15,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F466-1F3FC","non_qualified":null,"image":"1f466-1f3fc.png","sheet_x":15,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F466-1F3FD","non_qualified":null,"image":"1f466-1f3fd.png","sheet_x":15,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F466-1F3FE","non_qualified":null,"image":"1f466-1f3fe.png","sheet_x":15,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F466-1F3FF","non_qualified":null,"image":"1f466-1f3ff.png","sheet_x":15,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Boy","b":"1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["man","male","guy","teenager"],"k":[15,42]},"ferry":{"a":"Ferry","b":"26F4-FE0F","c":"26F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["boat","ship","yacht"],"k":[48,42],"o":5},"flag-ht":{"a":"Haiti Flag","b":"1F1ED-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,30]},"girl":{"skin_variations":{"1F3FB":{"unified":"1F467-1F3FB","non_qualified":null,"image":"1f467-1f3fb.png","sheet_x":15,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F467-1F3FC","non_qualified":null,"image":"1f467-1f3fc.png","sheet_x":15,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F467-1F3FD","non_qualified":null,"image":"1f467-1f3fd.png","sheet_x":15,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F467-1F3FE","non_qualified":null,"image":"1f467-1f3fe.png","sheet_x":16,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F467-1F3FF","non_qualified":null,"image":"1f467-1f3ff.png","sheet_x":16,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Girl","b":"1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["female","woman","teenager"],"k":[15,48]},"negative_squared_cross_mark":{"a":"Negative Squared Cross Mark","b":"274E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["x","green-square","no","deny"],"k":[50,2]},"flag-hu":{"a":"Hungary Flag","b":"1F1ED-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,31]},"card_index_dividers":{"a":"Card Index Dividers","b":"1F5C2-FE0F","c":"1F5C2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["organizing","business","stationery"],"k":[30,4],"o":7},"maple_leaf":{"a":"Maple Leaf","b":"1F341","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","plant","vegetable","ca","fall"],"k":[7,3]},"motor_boat":{"a":"Motor Boat","b":"1F6E5-FE0F","c":"1F6E5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["ship"],"k":[37,13],"o":7},"flag-ic":{"a":"Canary Islands Flag","b":"1F1EE-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,32]},"fallen_leaf":{"a":"Fallen Leaf","b":"1F342","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","plant","vegetable","leaves"],"k":[7,4]},"adult":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fb.png","sheet_x":42,"sheet_y":51,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fc.png","sheet_x":43,"sheet_y":0,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fd.png","sheet_x":43,"sheet_y":1,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fe.png","sheet_x":43,"sheet_y":2,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3ff.png","sheet_x":43,"sheet_y":3,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Adult","b":"1F9D1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["gender-neutral","person"],"k":[42,50],"o":10},"ship":{"a":"Ship","b":"1F6A2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","titanic","deploy"],"k":[34,42]},"heavy_plus_sign":{"a":"Heavy Plus Sign","b":"2795","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["math","calculation","addition","more","increase"],"k":[50,9]},"date":{"a":"Calendar","b":"1F4C5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["calendar","schedule"],"k":[25,48]},"man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fb.png","sheet_x":18,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fc.png","sheet_x":18,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fd.png","sheet_x":18,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fe.png","sheet_x":18,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F468-1F3FF","non_qualified":null,"image":"1f468-1f3ff.png","sheet_x":18,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Man","b":"1F468","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mustache","father","dad","guy","classy","sir","moustache"],"k":[18,11]},"flag-id":{"a":"Indonesia Flag","b":"1F1EE-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,33]},"leaves":{"a":"Leaf Fluttering in Wind","b":"1F343","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","plant","tree","vegetable","grass","lawn","spring"],"k":[7,5]},"heavy_minus_sign":{"a":"Heavy Minus Sign","b":"2796","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["math","calculation","subtract","less"],"k":[50,10]},"calendar":{"a":"Tear-off Calendar","b":"1F4C6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["schedule","date","planning"],"k":[25,49]},"airplane":{"a":"Airplane","b":"2708-FE0F","c":"2708","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","transportation","flight","fly"],"k":[49,16],"o":1},"spiral_note_pad":{"a":"Spiral Note Pad","b":"1F5D2-FE0F","c":"1F5D2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,8],"o":7},"heavy_division_sign":{"a":"Heavy Division Sign","b":"2797","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["divide","math","calculation"],"k":[50,11]},"small_airplane":{"a":"Small Airplane","b":"1F6E9-FE0F","c":"1F6E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["flight","transportation","fly","vehicle"],"k":[37,14],"o":7},"woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fb.png","sheet_x":20,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fc.png","sheet_x":20,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fd.png","sheet_x":20,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fe.png","sheet_x":20,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F469-1F3FF","non_qualified":null,"image":"1f469-1f3ff.png","sheet_x":20,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Woman","b":"1F469","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["female","girls","lady"],"k":[20,23]},"flag-ie":{"a":"Ireland Flag","b":"1F1EE-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,34]},"curly_loop":{"a":"Curly Loop","b":"27B0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["scribble","draw","shape","squiggle"],"k":[50,13]},"flag-il":{"a":"Israel Flag","b":"1F1EE-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,35]},"airplane_departure":{"a":"Airplane Departure","b":"1F6EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,15],"o":7},"spiral_calendar_pad":{"a":"Spiral Calendar Pad","b":"1F5D3-FE0F","c":"1F5D3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,9],"o":7},"older_adult":{"skin_variations":{"1F3FB":{"unified":"1F9D3-1F3FB","non_qualified":null,"image":"1f9d3-1f3fb.png","sheet_x":43,"sheet_y":11,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F9D3-1F3FC","non_qualified":null,"image":"1f9d3-1f3fc.png","sheet_x":43,"sheet_y":12,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F9D3-1F3FD","non_qualified":null,"image":"1f9d3-1f3fd.png","sheet_x":43,"sheet_y":13,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F9D3-1F3FE","non_qualified":null,"image":"1f9d3-1f3fe.png","sheet_x":43,"sheet_y":14,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F9D3-1F3FF","non_qualified":null,"image":"1f9d3-1f3ff.png","sheet_x":43,"sheet_y":15,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Older Adult","b":"1F9D3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["human","elder","senior","gender-neutral"],"k":[43,10],"o":10},"airplane_arriving":{"a":"Airplane Arriving","b":"1F6EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,16],"o":7},"card_index":{"a":"Card Index","b":"1F4C7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["business","stationery"],"k":[25,50]},"loop":{"a":"Double Curly Loop","b":"27BF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["tape","cassette"],"k":[50,14]},"older_man":{"skin_variations":{"1F3FB":{"unified":"1F474-1F3FB","non_qualified":null,"image":"1f474-1f3fb.png","sheet_x":21,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F474-1F3FC","non_qualified":null,"image":"1f474-1f3fc.png","sheet_x":22,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F474-1F3FD","non_qualified":null,"image":"1f474-1f3fd.png","sheet_x":22,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F474-1F3FE","non_qualified":null,"image":"1f474-1f3fe.png","sheet_x":22,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F474-1F3FF","non_qualified":null,"image":"1f474-1f3ff.png","sheet_x":22,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Older Man","b":"1F474","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["human","male","men","old","elder","senior"],"k":[21,50]},"flag-im":{"a":"Isle of Man Flag","b":"1F1EE-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,36]},"flag-in":{"a":"India Flag","b":"1F1EE-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,37]},"chart_with_upwards_trend":{"a":"Chart with Upwards Trend","b":"1F4C8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["graph","presentation","stats","recovery","business","economics","money","sales","good","success"],"k":[25,51]},"part_alternation_mark":{"a":"Part Alternation Mark","b":"303D-FE0F","c":"303D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["graph","presentation","stats","business","economics","bad"],"k":[50,25],"o":3},"seat":{"a":"Seat","b":"1F4BA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sit","airplane","transport","bus","flight","fly"],"k":[25,37]},"older_woman":{"skin_variations":{"1F3FB":{"unified":"1F475-1F3FB","non_qualified":null,"image":"1f475-1f3fb.png","sheet_x":22,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F475-1F3FC","non_qualified":null,"image":"1f475-1f3fc.png","sheet_x":22,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F475-1F3FD","non_qualified":null,"image":"1f475-1f3fd.png","sheet_x":22,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F475-1F3FE","non_qualified":null,"image":"1f475-1f3fe.png","sheet_x":22,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F475-1F3FF","non_qualified":null,"image":"1f475-1f3ff.png","sheet_x":22,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Older Woman","b":"1F475","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["human","female","women","lady","old","elder","senior"],"k":[22,4]},"eight_spoked_asterisk":{"a":"Eight Spoked Asterisk","b":"2733-FE0F","c":"2733","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["star","sparkle","green-square"],"k":[49,49],"o":1},"chart_with_downwards_trend":{"a":"Chart with Downwards Trend","b":"1F4C9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],"k":[26,0]},"flag-io":{"a":"British Indian Ocean Territory Flag","b":"1F1EE-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,38]},"male-doctor":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2695-FE0F","non_qualified":"1F468-1F3FB-200D-2695","image":"1f468-1f3fb-200d-2695-fe0f.png","sheet_x":17,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-2695-FE0F","non_qualified":"1F468-1F3FC-200D-2695","image":"1f468-1f3fc-200d-2695-fe0f.png","sheet_x":17,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-2695-FE0F","non_qualified":"1F468-1F3FD-200D-2695","image":"1f468-1f3fd-200d-2695-fe0f.png","sheet_x":17,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-2695-FE0F","non_qualified":"1F468-1F3FE-200D-2695","image":"1f468-1f3fe-200d-2695-fe0f.png","sheet_x":17,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-2695-FE0F","non_qualified":"1F468-1F3FF-200D-2695","image":"1f468-1f3ff-200d-2695-fe0f.png","sheet_x":17,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Male Doctor","b":"1F468-200D-2695-FE0F","c":"1F468-200D-2695","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,43]},"helicopter":{"a":"Helicopter","b":"1F681","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","fly"],"k":[34,9]},"female-doctor":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2695-FE0F","non_qualified":"1F469-1F3FB-200D-2695","image":"1f469-1f3fb-200d-2695-fe0f.png","sheet_x":20,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-2695-FE0F","non_qualified":"1F469-1F3FC-200D-2695","image":"1f469-1f3fc-200d-2695-fe0f.png","sheet_x":20,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-2695-FE0F","non_qualified":"1F469-1F3FD-200D-2695","image":"1f469-1f3fd-200d-2695-fe0f.png","sheet_x":20,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-2695-FE0F","non_qualified":"1F469-1F3FE-200D-2695","image":"1f469-1f3fe-200d-2695-fe0f.png","sheet_x":20,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-2695-FE0F","non_qualified":"1F469-1F3FF-200D-2695","image":"1f469-1f3ff-200d-2695-fe0f.png","sheet_x":20,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Doctor","b":"1F469-200D-2695-FE0F","c":"1F469-200D-2695","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,1]},"suspension_railway":{"a":"Suspension Railway","b":"1F69F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["vehicle","transportation"],"k":[34,39]},"bar_chart":{"a":"Bar Chart","b":"1F4CA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["graph","presentation","stats"],"k":[26,1]},"flag-iq":{"a":"Iraq Flag","b":"1F1EE-1F1F6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,39]},"eight_pointed_black_star":{"a":"Eight Pointed Black Star","b":"2734-FE0F","c":"2734","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["orange-square","shape","polygon"],"k":[49,50],"o":1},"mountain_cableway":{"a":"Mountain Cableway","b":"1F6A0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","ski"],"k":[34,40]},"male-student":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F393","non_qualified":null,"image":"1f468-1f3fb-200d-1f393.png","sheet_x":16,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F393","non_qualified":null,"image":"1f468-1f3fc-200d-1f393.png","sheet_x":16,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F393","non_qualified":null,"image":"1f468-1f3fd-200d-1f393.png","sheet_x":16,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F393","non_qualified":null,"image":"1f468-1f3fe-200d-1f393.png","sheet_x":16,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F393","non_qualified":null,"image":"1f468-1f3ff-200d-1f393.png","sheet_x":16,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Student","b":"1F468-200D-1F393","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,14]},"clipboard":{"a":"Clipboard","b":"1F4CB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","documents"],"k":[26,2]},"flag-ir":{"a":"Iran Flag","b":"1F1EE-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,40]},"sparkle":{"a":"Sparkle","b":"2747-FE0F","c":"2747","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stars","green-square","awesome","good","fireworks"],"k":[50,0],"o":1},"female-student":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F393","non_qualified":null,"image":"1f469-1f3fb-200d-1f393.png","sheet_x":18,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F393","non_qualified":null,"image":"1f469-1f3fc-200d-1f393.png","sheet_x":18,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F393","non_qualified":null,"image":"1f469-1f3fd-200d-1f393.png","sheet_x":18,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F393","non_qualified":null,"image":"1f469-1f3fe-200d-1f393.png","sheet_x":18,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F393","non_qualified":null,"image":"1f469-1f3ff-200d-1f393.png","sheet_x":18,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Student","b":"1F469-200D-1F393","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,29]},"pushpin":{"a":"Pushpin","b":"1F4CC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","mark","here"],"k":[26,3]},"aerial_tramway":{"a":"Aerial Tramway","b":"1F6A1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["transportation","vehicle","ski"],"k":[34,41]},"flag-is":{"a":"Iceland Flag","b":"1F1EE-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,41]},"bangbang":{"a":"Double Exclamation Mark","b":"203C-FE0F","c":"203C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["exclamation","surprise"],"k":[46,29],"o":1},"interrobang":{"a":"Exclamation Question Mark","b":"2049-FE0F","c":"2049","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["wat","punctuation","surprise"],"k":[46,30],"o":3},"satellite":{"a":"Satellite","b":"1F6F0-FE0F","c":"1F6F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["communication","future","radio","space"],"k":[37,17],"o":7},"it":{"a":"Italy Flag","b":"1F1EE-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["italy","flag","nation","country","banner"],"k":[2,42],"n":["flag-it"]},"male-teacher":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fb-200d-1f3eb.png","sheet_x":16,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fc-200d-1f3eb.png","sheet_x":16,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fd-200d-1f3eb.png","sheet_x":16,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fe-200d-1f3eb.png","sheet_x":16,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f468-1f3ff-200d-1f3eb.png","sheet_x":16,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Teacher","b":"1F468-200D-1F3EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,32]},"round_pushpin":{"a":"Round Pushpin","b":"1F4CD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","location","map","here"],"k":[26,4]},"flag-je":{"a":"Jersey Flag","b":"1F1EF-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,43]},"question":{"a":"Black Question Mark Ornament","b":"2753","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["doubt","confused"],"k":[50,3]},"rocket":{"a":"Rocket","b":"1F680","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["launch","ship","staffmode","NASA","outer space","outer_space","fly"],"k":[34,8]},"female-teacher":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fb-200d-1f3eb.png","sheet_x":18,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fc-200d-1f3eb.png","sheet_x":18,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fd-200d-1f3eb.png","sheet_x":18,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fe-200d-1f3eb.png","sheet_x":18,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f469-1f3ff-200d-1f3eb.png","sheet_x":19,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Teacher","b":"1F469-200D-1F3EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,47]},"paperclip":{"a":"Paperclip","b":"1F4CE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["documents","stationery"],"k":[26,5]},"linked_paperclips":{"a":"Linked Paperclips","b":"1F587-FE0F","c":"1F587","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,27],"o":7},"flying_saucer":{"a":"Flying Saucer","b":"1F6F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["transportation","vehicle","ufo"],"k":[37,23],"o":10},"male-judge":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2696-FE0F","non_qualified":"1F468-1F3FB-200D-2696","image":"1f468-1f3fb-200d-2696-fe0f.png","sheet_x":17,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-2696-FE0F","non_qualified":"1F468-1F3FC-200D-2696","image":"1f468-1f3fc-200d-2696-fe0f.png","sheet_x":17,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-2696-FE0F","non_qualified":"1F468-1F3FD-200D-2696","image":"1f468-1f3fd-200d-2696-fe0f.png","sheet_x":18,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-2696-FE0F","non_qualified":"1F468-1F3FE-200D-2696","image":"1f468-1f3fe-200d-2696-fe0f.png","sheet_x":18,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-2696-FE0F","non_qualified":"1F468-1F3FF-200D-2696","image":"1f468-1f3ff-200d-2696-fe0f.png","sheet_x":18,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Male Judge","b":"1F468-200D-2696-FE0F","c":"1F468-200D-2696","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,49]},"grey_question":{"a":"White Question Mark Ornament","b":"2754","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["doubts","gray","huh","confused"],"k":[50,4]},"flag-jm":{"a":"Jamaica Flag","b":"1F1EF-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,44]},"bellhop_bell":{"a":"Bellhop Bell","b":"1F6CE-FE0F","c":"1F6CE","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["service"],"k":[37,3],"o":7},"straight_ruler":{"a":"Straight Ruler","b":"1F4CF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","calculate","length","math","school","drawing","architect","sketch"],"k":[26,6]},"flag-jo":{"a":"Jordan Flag","b":"1F1EF-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,45]},"female-judge":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2696-FE0F","non_qualified":"1F469-1F3FB-200D-2696","image":"1f469-1f3fb-200d-2696-fe0f.png","sheet_x":20,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-2696-FE0F","non_qualified":"1F469-1F3FC-200D-2696","image":"1f469-1f3fc-200d-2696-fe0f.png","sheet_x":20,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-2696-FE0F","non_qualified":"1F469-1F3FD-200D-2696","image":"1f469-1f3fd-200d-2696-fe0f.png","sheet_x":20,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-2696-FE0F","non_qualified":"1F469-1F3FE-200D-2696","image":"1f469-1f3fe-200d-2696-fe0f.png","sheet_x":20,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-2696-FE0F","non_qualified":"1F469-1F3FF-200D-2696","image":"1f469-1f3ff-200d-2696-fe0f.png","sheet_x":20,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Judge","b":"1F469-200D-2696-FE0F","c":"1F469-200D-2696","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,7]},"grey_exclamation":{"a":"White Exclamation Mark Ornament","b":"2755","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["surprise","punctuation","gray","wow","warning"],"k":[50,5]},"door":{"a":"Door","b":"1F6AA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["house","entry","exit"],"k":[35,15]},"male-farmer":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F33E","non_qualified":null,"image":"1f468-1f3fb-200d-1f33e.png","sheet_x":16,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F33E","non_qualified":null,"image":"1f468-1f3fc-200d-1f33e.png","sheet_x":16,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F33E","non_qualified":null,"image":"1f468-1f3fd-200d-1f33e.png","sheet_x":16,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F33E","non_qualified":null,"image":"1f468-1f3fe-200d-1f33e.png","sheet_x":16,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F33E","non_qualified":null,"image":"1f468-1f3ff-200d-1f33e.png","sheet_x":16,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Farmer","b":"1F468-200D-1F33E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,2]},"jp":{"a":"Japan Flag","b":"1F1EF-1F1F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","nation","flag","country","banner"],"k":[2,46],"n":["flag-jp"]},"triangular_ruler":{"a":"Triangular Ruler","b":"1F4D0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","math","architect","sketch"],"k":[26,7]},"exclamation":{"a":"Heavy Exclamation Mark Symbol","b":"2757","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],"k":[50,6],"n":["heavy_exclamation_mark"],"o":5},"bed":{"a":"Bed","b":"1F6CF-FE0F","c":"1F6CF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sleep","rest"],"k":[37,4],"o":7},"female-farmer":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F33E","non_qualified":null,"image":"1f469-1f3fb-200d-1f33e.png","sheet_x":18,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F33E","non_qualified":null,"image":"1f469-1f3fc-200d-1f33e.png","sheet_x":18,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F33E","non_qualified":null,"image":"1f469-1f3fd-200d-1f33e.png","sheet_x":18,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F33E","non_qualified":null,"image":"1f469-1f3fe-200d-1f33e.png","sheet_x":18,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F33E","non_qualified":null,"image":"1f469-1f3ff-200d-1f33e.png","sheet_x":18,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Farmer","b":"1F469-200D-1F33E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,17]},"scissors":{"a":"Black Scissors","b":"2702-FE0F","c":"2702","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["stationery","cut"],"k":[49,14],"o":1},"wavy_dash":{"a":"Wavy Dash","b":"3030-FE0F","c":"3030","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["draw","line","moustache","mustache","squiggle","scribble"],"k":[50,24],"o":1},"flag-ke":{"a":"Kenya Flag","b":"1F1F0-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,47]},"flag-kg":{"a":"Kyrgyzstan Flag","b":"1F1F0-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,48]},"couch_and_lamp":{"a":"Couch and Lamp","b":"1F6CB-FE0F","c":"1F6CB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["read","chill"],"k":[36,47],"o":7},"male-cook":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F373","non_qualified":null,"image":"1f468-1f3fb-200d-1f373.png","sheet_x":16,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F373","non_qualified":null,"image":"1f468-1f3fc-200d-1f373.png","sheet_x":16,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F373","non_qualified":null,"image":"1f468-1f3fd-200d-1f373.png","sheet_x":16,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F373","non_qualified":null,"image":"1f468-1f3fe-200d-1f373.png","sheet_x":16,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F373","non_qualified":null,"image":"1f468-1f3ff-200d-1f373.png","sheet_x":16,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Cook","b":"1F468-200D-1F373","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,8]},"card_file_box":{"a":"Card File Box","b":"1F5C3-FE0F","c":"1F5C3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["business","stationery"],"k":[30,5],"o":7},"copyright":{"a":"Copyright Sign","b":"00A9-FE0F","c":"00A9","d":true,"e":true,"f":false,"g":true,"h":false,"i":false,"j":["ip","license","circle","law","legal"],"k":[0,12],"o":1},"file_cabinet":{"a":"File Cabinet","b":"1F5C4-FE0F","c":"1F5C4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["filing","organizing"],"k":[30,6],"o":7},"registered":{"a":"Registered Sign","b":"00AE-FE0F","c":"00AE","d":true,"e":true,"f":false,"g":true,"h":false,"i":false,"j":["alphabet","circle"],"k":[0,13],"o":1},"flag-kh":{"a":"Cambodia Flag","b":"1F1F0-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,49]},"female-cook":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F373","non_qualified":null,"image":"1f469-1f3fb-200d-1f373.png","sheet_x":18,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F373","non_qualified":null,"image":"1f469-1f3fc-200d-1f373.png","sheet_x":18,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F373","non_qualified":null,"image":"1f469-1f3fd-200d-1f373.png","sheet_x":18,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F373","non_qualified":null,"image":"1f469-1f3fe-200d-1f373.png","sheet_x":18,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F373","non_qualified":null,"image":"1f469-1f3ff-200d-1f373.png","sheet_x":18,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Cook","b":"1F469-200D-1F373","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,23]},"toilet":{"a":"Toilet","b":"1F6BD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["restroom","wc","washroom","bathroom","potty"],"k":[36,33]},"wastebasket":{"a":"Wastebasket","b":"1F5D1-FE0F","c":"1F5D1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["bin","trash","rubbish","garbage","toss"],"k":[30,7],"o":7},"flag-ki":{"a":"Kiribati Flag","b":"1F1F0-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,50]},"shower":{"a":"Shower","b":"1F6BF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["clean","water","bathroom"],"k":[36,35]},"male-mechanic":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F527","non_qualified":null,"image":"1f468-1f3fb-200d-1f527.png","sheet_x":17,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F527","non_qualified":null,"image":"1f468-1f3fc-200d-1f527.png","sheet_x":17,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F527","non_qualified":null,"image":"1f468-1f3fd-200d-1f527.png","sheet_x":17,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F527","non_qualified":null,"image":"1f468-1f3fe-200d-1f527.png","sheet_x":17,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F527","non_qualified":null,"image":"1f468-1f3ff-200d-1f527.png","sheet_x":17,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Mechanic","b":"1F468-200D-1F527","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,19]},"tm":{"a":"Trade Mark Sign","b":"2122-FE0F","c":"2122","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["trademark","brand","law","legal"],"k":[46,31],"o":1},"hash":{"a":"Hash Key","b":"0023-FE0F-20E3","c":"0023-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["symbol","blue-square","twitter"],"k":[0,0],"o":3},"flag-km":{"a":"Comoros Flag","b":"1F1F0-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[2,51]},"bathtub":{"a":"Bathtub","b":"1F6C1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["clean","shower","bathroom"],"k":[36,42]},"female-mechanic":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F527","non_qualified":null,"image":"1f469-1f3fb-200d-1f527.png","sheet_x":19,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F527","non_qualified":null,"image":"1f469-1f3fc-200d-1f527.png","sheet_x":19,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F527","non_qualified":null,"image":"1f469-1f3fd-200d-1f527.png","sheet_x":19,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F527","non_qualified":null,"image":"1f469-1f3fe-200d-1f527.png","sheet_x":19,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F527","non_qualified":null,"image":"1f469-1f3ff-200d-1f527.png","sheet_x":19,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Mechanic","b":"1F469-200D-1F527","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,29]},"lock":{"a":"Lock","b":"1F512","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["security","password","padlock"],"k":[27,20]},"male-factory-worker":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fb-200d-1f3ed.png","sheet_x":16,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fc-200d-1f3ed.png","sheet_x":16,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fd-200d-1f3ed.png","sheet_x":16,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fe-200d-1f3ed.png","sheet_x":16,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f468-1f3ff-200d-1f3ed.png","sheet_x":16,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Factory Worker","b":"1F468-200D-1F3ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,38]},"flag-kn":{"a":"St. Kitts & Nevis Flag","b":"1F1F0-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,0]},"hourglass":{"a":"Hourglass","b":"231B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","clock","oldschool","limit","exam","quiz","test"],"k":[46,42],"o":1},"keycap_star":{"a":"Keycap Star","b":"002A-FE0F-20E3","c":"002A-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[0,1],"o":3},"unlock":{"a":"Open Lock","b":"1F513","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["privacy","security"],"k":[27,21]},"flag-kp":{"a":"North Korea Flag","b":"1F1F0-1F1F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,1]},"female-factory-worker":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fb-200d-1f3ed.png","sheet_x":19,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fc-200d-1f3ed.png","sheet_x":19,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fd-200d-1f3ed.png","sheet_x":19,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fe-200d-1f3ed.png","sheet_x":19,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f469-1f3ff-200d-1f3ed.png","sheet_x":19,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Factory Worker","b":"1F469-200D-1F3ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,1]},"zero":{"a":"Keycap 0","b":"0030-FE0F-20E3","c":"0030-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["0","numbers","blue-square","null"],"k":[0,2],"o":3},"lock_with_ink_pen":{"a":"Lock with Ink Pen","b":"1F50F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["security","secret"],"k":[27,17]},"hourglass_flowing_sand":{"a":"Hourglass with Flowing Sand","b":"23F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["oldschool","time","countdown"],"k":[47,3]},"one":{"a":"Keycap 1","b":"0031-FE0F-20E3","c":"0031-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["blue-square","numbers","1"],"k":[0,3],"o":3},"kr":{"a":"South Korea Flag","b":"1F1F0-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["south","korea","nation","flag","country","banner"],"k":[3,2],"n":["flag-kr"]},"watch":{"a":"Watch","b":"231A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","accessories"],"k":[46,41],"o":1},"male-office-worker":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fb-200d-1f4bc.png","sheet_x":17,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fc-200d-1f4bc.png","sheet_x":17,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fd-200d-1f4bc.png","sheet_x":17,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fe-200d-1f4bc.png","sheet_x":17,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f468-1f3ff-200d-1f4bc.png","sheet_x":17,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Office Worker","b":"1F468-200D-1F4BC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,13]},"closed_lock_with_key":{"a":"Closed Lock with Key","b":"1F510","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["security","privacy"],"k":[27,18]},"female-office-worker":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fb-200d-1f4bc.png","sheet_x":19,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fc-200d-1f4bc.png","sheet_x":19,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fd-200d-1f4bc.png","sheet_x":19,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fe-200d-1f4bc.png","sheet_x":19,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f469-1f3ff-200d-1f4bc.png","sheet_x":19,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Office Worker","b":"1F469-200D-1F4BC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,23]},"two":{"a":"Keycap 2","b":"0032-FE0F-20E3","c":"0032-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["numbers","2","prime","blue-square"],"k":[0,4],"o":3},"alarm_clock":{"a":"Alarm Clock","b":"23F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","wake"],"k":[47,0]},"key":{"a":"Key","b":"1F511","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["lock","door","password"],"k":[27,19]},"flag-kw":{"a":"Kuwait Flag","b":"1F1F0-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,3]},"stopwatch":{"a":"Stopwatch","b":"23F1-FE0F","c":"23F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["time","deadline"],"k":[47,1]},"male-scientist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F52C","non_qualified":null,"image":"1f468-1f3fb-200d-1f52c.png","sheet_x":17,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F52C","non_qualified":null,"image":"1f468-1f3fc-200d-1f52c.png","sheet_x":17,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F52C","non_qualified":null,"image":"1f468-1f3fd-200d-1f52c.png","sheet_x":17,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F52C","non_qualified":null,"image":"1f468-1f3fe-200d-1f52c.png","sheet_x":17,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F52C","non_qualified":null,"image":"1f468-1f3ff-200d-1f52c.png","sheet_x":17,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Scientist","b":"1F468-200D-1F52C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,25]},"three":{"a":"Keycap 3","b":"0033-FE0F-20E3","c":"0033-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["3","numbers","prime","blue-square"],"k":[0,5],"o":3},"flag-ky":{"a":"Cayman Islands Flag","b":"1F1F0-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,4]},"old_key":{"a":"Old Key","b":"1F5DD-FE0F","c":"1F5DD","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["lock","door","password"],"k":[30,11],"o":7},"flag-kz":{"a":"Kazakhstan Flag","b":"1F1F0-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,5]},"hammer":{"a":"Hammer","b":"1F528","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["tools","build","create"],"k":[27,42]},"female-scientist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F52C","non_qualified":null,"image":"1f469-1f3fb-200d-1f52c.png","sheet_x":19,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F52C","non_qualified":null,"image":"1f469-1f3fc-200d-1f52c.png","sheet_x":19,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F52C","non_qualified":null,"image":"1f469-1f3fd-200d-1f52c.png","sheet_x":19,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F52C","non_qualified":null,"image":"1f469-1f3fe-200d-1f52c.png","sheet_x":19,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F52C","non_qualified":null,"image":"1f469-1f3ff-200d-1f52c.png","sheet_x":19,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Scientist","b":"1F469-200D-1F52C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,35]},"timer_clock":{"a":"Timer Clock","b":"23F2-FE0F","c":"23F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["alarm"],"k":[47,2]},"four":{"a":"Keycap 4","b":"0034-FE0F-20E3","c":"0034-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["4","numbers","blue-square"],"k":[0,6],"o":3},"male-technologist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fb-200d-1f4bb.png","sheet_x":17,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fc-200d-1f4bb.png","sheet_x":17,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fd-200d-1f4bb.png","sheet_x":17,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fe-200d-1f4bb.png","sheet_x":17,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f468-1f3ff-200d-1f4bb.png","sheet_x":17,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Technologist","b":"1F468-200D-1F4BB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,7]},"mantelpiece_clock":{"a":"Mantelpiece Clock","b":"1F570-FE0F","c":"1F570","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["time"],"k":[28,43],"o":7},"five":{"a":"Keycap 5","b":"0035-FE0F-20E3","c":"0035-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["5","numbers","blue-square","prime"],"k":[0,7],"o":3},"flag-la":{"a":"Laos Flag","b":"1F1F1-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,6]},"pick":{"a":"Pick","b":"26CF-FE0F","c":"26CF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["tools","dig"],"k":[48,32],"o":5},"flag-lb":{"a":"Lebanon Flag","b":"1F1F1-1F1E7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,7]},"clock12":{"a":"Clock Face Twelve Oclock","b":"1F55B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","noon","midnight","midday","late","early","schedule"],"k":[28,29]},"hammer_and_pick":{"a":"Hammer and Pick","b":"2692-FE0F","c":"2692","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["tools","build","create"],"k":[48,11],"o":4},"six":{"a":"Keycap 6","b":"0036-FE0F-20E3","c":"0036-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["6","numbers","blue-square"],"k":[0,8],"o":3},"female-technologist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fb-200d-1f4bb.png","sheet_x":19,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fc-200d-1f4bb.png","sheet_x":19,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fd-200d-1f4bb.png","sheet_x":19,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fe-200d-1f4bb.png","sheet_x":19,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f469-1f3ff-200d-1f4bb.png","sheet_x":19,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Technologist","b":"1F469-200D-1F4BB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,17]},"hammer_and_wrench":{"a":"Hammer and Wrench","b":"1F6E0-FE0F","c":"1F6E0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["tools","build","create"],"k":[37,8],"o":7},"flag-lc":{"a":"St. Lucia Flag","b":"1F1F1-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,8]},"clock1230":{"a":"Clock Face Twelve-Thirty","b":"1F567","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,41]},"seven":{"a":"Keycap 7","b":"0037-FE0F-20E3","c":"0037-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["7","numbers","blue-square","prime"],"k":[0,9],"o":3},"male-singer":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fb-200d-1f3a4.png","sheet_x":16,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fc-200d-1f3a4.png","sheet_x":16,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fd-200d-1f3a4.png","sheet_x":16,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fe-200d-1f3a4.png","sheet_x":16,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f468-1f3ff-200d-1f3a4.png","sheet_x":16,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Singer","b":"1F468-200D-1F3A4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,20]},"eight":{"a":"Keycap 8","b":"0038-FE0F-20E3","c":"0038-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["8","blue-square","numbers"],"k":[0,10],"o":3},"flag-li":{"a":"Liechtenstein Flag","b":"1F1F1-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,9]},"dagger_knife":{"a":"Dagger Knife","b":"1F5E1-FE0F","c":"1F5E1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,13],"o":7},"clock1":{"a":"Clock Face One Oclock","b":"1F550","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,18]},"female-singer":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fb-200d-1f3a4.png","sheet_x":18,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fc-200d-1f3a4.png","sheet_x":18,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fd-200d-1f3a4.png","sheet_x":18,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fe-200d-1f3a4.png","sheet_x":18,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f469-1f3ff-200d-1f3a4.png","sheet_x":18,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Singer","b":"1F469-200D-1F3A4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,35]},"male-artist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fb-200d-1f3a8.png","sheet_x":16,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fc-200d-1f3a8.png","sheet_x":16,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fd-200d-1f3a8.png","sheet_x":16,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fe-200d-1f3a8.png","sheet_x":16,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f468-1f3ff-200d-1f3a8.png","sheet_x":16,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Artist","b":"1F468-200D-1F3A8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,26]},"crossed_swords":{"a":"Crossed Swords","b":"2694-FE0F","c":"2694","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["weapon"],"k":[48,13],"o":4},"nine":{"a":"Keycap 9","b":"0039-FE0F-20E3","c":"0039-20E3","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"j":["blue-square","numbers","9"],"k":[0,11],"o":3},"flag-lk":{"a":"Sri Lanka Flag","b":"1F1F1-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,10]},"clock130":{"a":"Clock Face One-Thirty","b":"1F55C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,30]},"clock2":{"a":"Clock Face Two Oclock","b":"1F551","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,19]},"gun":{"a":"Pistol","b":"1F52B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["violence","weapon","pistol","revolver"],"k":[27,45]},"keycap_ten":{"a":"Keycap Ten","b":"1F51F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["numbers","10","blue-square"],"k":[27,33]},"female-artist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fb-200d-1f3a8.png","sheet_x":18,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fc-200d-1f3a8.png","sheet_x":18,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fd-200d-1f3a8.png","sheet_x":18,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fe-200d-1f3a8.png","sheet_x":18,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f469-1f3ff-200d-1f3a8.png","sheet_x":18,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Artist","b":"1F469-200D-1F3A8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,41]},"flag-lr":{"a":"Liberia Flag","b":"1F1F1-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,11]},"clock230":{"a":"Clock Face Two-Thirty","b":"1F55D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,31]},"bow_and_arrow":{"a":"Bow and Arrow","b":"1F3F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports"],"k":[12,23],"o":8},"male-pilot":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2708-FE0F","non_qualified":"1F468-1F3FB-200D-2708","image":"1f468-1f3fb-200d-2708-fe0f.png","sheet_x":18,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-2708-FE0F","non_qualified":"1F468-1F3FC-200D-2708","image":"1f468-1f3fc-200d-2708-fe0f.png","sheet_x":18,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-2708-FE0F","non_qualified":"1F468-1F3FD-200D-2708","image":"1f468-1f3fd-200d-2708-fe0f.png","sheet_x":18,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-2708-FE0F","non_qualified":"1F468-1F3FE-200D-2708","image":"1f468-1f3fe-200d-2708-fe0f.png","sheet_x":18,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-2708-FE0F","non_qualified":"1F468-1F3FF-200D-2708","image":"1f468-1f3ff-200d-2708-fe0f.png","sheet_x":18,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Male Pilot","b":"1F468-200D-2708-FE0F","c":"1F468-200D-2708","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[18,3]},"flag-ls":{"a":"Lesotho Flag","b":"1F1F1-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,12]},"flag-lt":{"a":"Lithuania Flag","b":"1F1F1-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,13]},"capital_abcd":{"a":"Input Symbol for Latin Capital Letters","b":"1F520","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["alphabet","words","blue-square"],"k":[27,34]},"female-pilot":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2708-FE0F","non_qualified":"1F469-1F3FB-200D-2708","image":"1f469-1f3fb-200d-2708-fe0f.png","sheet_x":20,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-2708-FE0F","non_qualified":"1F469-1F3FC-200D-2708","image":"1f469-1f3fc-200d-2708-fe0f.png","sheet_x":20,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-2708-FE0F","non_qualified":"1F469-1F3FD-200D-2708","image":"1f469-1f3fd-200d-2708-fe0f.png","sheet_x":20,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-2708-FE0F","non_qualified":"1F469-1F3FE-200D-2708","image":"1f469-1f3fe-200d-2708-fe0f.png","sheet_x":20,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-2708-FE0F","non_qualified":"1F469-1F3FF-200D-2708","image":"1f469-1f3ff-200d-2708-fe0f.png","sheet_x":20,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Pilot","b":"1F469-200D-2708-FE0F","c":"1F469-200D-2708","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,13]},"clock3":{"a":"Clock Face Three Oclock","b":"1F552","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,20]},"shield":{"a":"Shield","b":"1F6E1-FE0F","c":"1F6E1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["protection","security"],"k":[37,9],"o":7},"male-astronaut":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F680","non_qualified":null,"image":"1f468-1f3fb-200d-1f680.png","sheet_x":17,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F680","non_qualified":null,"image":"1f468-1f3fc-200d-1f680.png","sheet_x":17,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F680","non_qualified":null,"image":"1f468-1f3fd-200d-1f680.png","sheet_x":17,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F680","non_qualified":null,"image":"1f468-1f3fe-200d-1f680.png","sheet_x":17,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F680","non_qualified":null,"image":"1f468-1f3ff-200d-1f680.png","sheet_x":17,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Astronaut","b":"1F468-200D-1F680","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,31]},"abcd":{"a":"Input Symbol for Latin Small Letters","b":"1F521","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","alphabet"],"k":[27,35]},"clock330":{"a":"Clock Face Three-Thirty","b":"1F55E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,32]},"flag-lu":{"a":"Luxembourg Flag","b":"1F1F1-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,14]},"wrench":{"a":"Wrench","b":"1F527","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["tools","diy","ikea","fix","maintainer"],"k":[27,41]},"nut_and_bolt":{"a":"Nut and Bolt","b":"1F529","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["handy","tools","fix"],"k":[27,43]},"clock4":{"a":"Clock Face Four Oclock","b":"1F553","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,21]},"female-astronaut":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F680","non_qualified":null,"image":"1f469-1f3fb-200d-1f680.png","sheet_x":19,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F680","non_qualified":null,"image":"1f469-1f3fc-200d-1f680.png","sheet_x":19,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F680","non_qualified":null,"image":"1f469-1f3fd-200d-1f680.png","sheet_x":19,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F680","non_qualified":null,"image":"1f469-1f3fe-200d-1f680.png","sheet_x":19,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F680","non_qualified":null,"image":"1f469-1f3ff-200d-1f680.png","sheet_x":19,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Astronaut","b":"1F469-200D-1F680","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,41]},"flag-lv":{"a":"Latvia Flag","b":"1F1F1-1F1FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,15]},"gear":{"a":"Gear","b":"2699-FE0F","c":"2699","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["cog"],"k":[48,17],"o":4},"male-firefighter":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F692","non_qualified":null,"image":"1f468-1f3fb-200d-1f692.png","sheet_x":17,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F468-1F3FC-200D-1F692","non_qualified":null,"image":"1f468-1f3fc-200d-1f692.png","sheet_x":17,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F468-1F3FD-200D-1F692","non_qualified":null,"image":"1f468-1f3fd-200d-1f692.png","sheet_x":17,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F468-1F3FE-200D-1F692","non_qualified":null,"image":"1f468-1f3fe-200d-1f692.png","sheet_x":17,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F468-1F3FF-200D-1F692","non_qualified":null,"image":"1f468-1f3ff-200d-1f692.png","sheet_x":17,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Male Firefighter","b":"1F468-200D-1F692","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[17,37]},"flag-ly":{"a":"Libya Flag","b":"1F1F1-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,16]},"symbols":{"a":"Input Symbol for Symbols","b":"1F523","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","music","note","ampersand","percent","glyphs","characters"],"k":[27,37]},"clock430":{"a":"Clock Face Four-Thirty","b":"1F55F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,33]},"flag-ma":{"a":"Morocco Flag","b":"1F1F2-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,17]},"compression":{"a":"Compression","b":"1F5DC-FE0F","c":"1F5DC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,10],"o":7},"female-firefighter":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F692","non_qualified":null,"image":"1f469-1f3fb-200d-1f692.png","sheet_x":19,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F469-1F3FC-200D-1F692","non_qualified":null,"image":"1f469-1f3fc-200d-1f692.png","sheet_x":19,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F469-1F3FD-200D-1F692","non_qualified":null,"image":"1f469-1f3fd-200d-1f692.png","sheet_x":19,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F469-1F3FE-200D-1F692","non_qualified":null,"image":"1f469-1f3fe-200d-1f692.png","sheet_x":19,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F469-1F3FF-200D-1F692","non_qualified":null,"image":"1f469-1f3ff-200d-1f692.png","sheet_x":20,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Female Firefighter","b":"1F469-200D-1F692","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,47]},"abc":{"a":"Input Symbol for Latin Letters","b":"1F524","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","alphabet"],"k":[27,38]},"clock5":{"a":"Clock Face Five Oclock","b":"1F554","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,22]},"clock530":{"a":"Clock Face Five-Thirty","b":"1F560","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,34]},"a":{"a":"Negative Squared Latin Capital Letter a","b":"1F170-FE0F","c":"1F170","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["red-square","alphabet","letter"],"k":[0,16]},"alembic":{"a":"Alembic","b":"2697-FE0F","c":"2697","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["distilling","science","experiment","chemistry"],"k":[48,16],"o":4},"flag-mc":{"a":"Monaco Flag","b":"1F1F2-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,18]},"cop":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB","non_qualified":null,"image":"1f46e-1f3fb.png","sheet_x":20,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F46E-1F3FC","non_qualified":null,"image":"1f46e-1f3fc.png","sheet_x":20,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F46E-1F3FD","non_qualified":null,"image":"1f46e-1f3fd.png","sheet_x":20,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F46E-1F3FE","non_qualified":null,"image":"1f46e-1f3fe.png","sheet_x":20,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F46E-1F3FF","non_qualified":null,"image":"1f46e-1f3ff.png","sheet_x":20,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F46E-200D-2642-FE0F","a":"Police Officer","b":"1F46E","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[20,45]},"scales":{"a":"Scales","b":"2696-FE0F","c":"2696","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[48,15],"o":4},"clock6":{"a":"Clock Face Six Oclock","b":"1F555","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule","dawn","dusk"],"k":[28,23]},"flag-md":{"a":"Moldova Flag","b":"1F1F2-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,19]},"ab":{"a":"Negative Squared Ab","b":"1F18E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["red-square","alphabet"],"k":[0,20]},"male-police-officer":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB-200D-2642-FE0F","non_qualified":"1F46E-1F3FB-200D-2642","image":"1f46e-1f3fb-200d-2642-fe0f.png","sheet_x":20,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F46E-1F3FC-200D-2642-FE0F","non_qualified":"1F46E-1F3FC-200D-2642","image":"1f46e-1f3fc-200d-2642-fe0f.png","sheet_x":20,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F46E-1F3FD-200D-2642-FE0F","non_qualified":"1F46E-1F3FD-200D-2642","image":"1f46e-1f3fd-200d-2642-fe0f.png","sheet_x":20,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F46E-1F3FE-200D-2642-FE0F","non_qualified":"1F46E-1F3FE-200D-2642","image":"1f46e-1f3fe-200d-2642-fe0f.png","sheet_x":20,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F46E-1F3FF-200D-2642-FE0F","non_qualified":"1F46E-1F3FF-200D-2642","image":"1f46e-1f3ff-200d-2642-fe0f.png","sheet_x":20,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F46E","a":"Male Police Officer","b":"1F46E-200D-2642-FE0F","c":"1F46E-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,39]},"link":{"a":"Link Symbol","b":"1F517","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["rings","url"],"k":[27,25]},"flag-me":{"a":"Montenegro Flag","b":"1F1F2-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,20]},"clock630":{"a":"Clock Face Six-Thirty","b":"1F561","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,35]},"b":{"a":"Negative Squared Latin Capital Letter B","b":"1F171-FE0F","c":"1F171","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["red-square","alphabet","letter"],"k":[0,17]},"female-police-officer":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB-200D-2640-FE0F","non_qualified":"1F46E-1F3FB-200D-2640","image":"1f46e-1f3fb-200d-2640-fe0f.png","sheet_x":20,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F46E-1F3FC-200D-2640-FE0F","non_qualified":"1F46E-1F3FC-200D-2640","image":"1f46e-1f3fc-200d-2640-fe0f.png","sheet_x":20,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F46E-1F3FD-200D-2640-FE0F","non_qualified":"1F46E-1F3FD-200D-2640","image":"1f46e-1f3fd-200d-2640-fe0f.png","sheet_x":20,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F46E-1F3FE-200D-2640-FE0F","non_qualified":"1F46E-1F3FE-200D-2640","image":"1f46e-1f3fe-200d-2640-fe0f.png","sheet_x":20,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F46E-1F3FF-200D-2640-FE0F","non_qualified":"1F46E-1F3FF-200D-2640","image":"1f46e-1f3ff-200d-2640-fe0f.png","sheet_x":20,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Police Officer","b":"1F46E-200D-2640-FE0F","c":"1F46E-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,33]},"clock7":{"a":"Clock Face Seven Oclock","b":"1F556","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,24]},"cl":{"a":"Squared Cl","b":"1F191","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["alphabet","words","red-square"],"k":[0,21]},"sleuth_or_spy":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB","non_qualified":null,"image":"1f575-1f3fb.png","sheet_x":29,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F575-1F3FC","non_qualified":null,"image":"1f575-1f3fc.png","sheet_x":29,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F575-1F3FD","non_qualified":null,"image":"1f575-1f3fd.png","sheet_x":29,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F575-1F3FE","non_qualified":null,"image":"1f575-1f3fe.png","sheet_x":29,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F575-1F3FF","non_qualified":null,"image":"1f575-1f3ff.png","sheet_x":29,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoleted_by":"1F575-FE0F-200D-2642-FE0F","a":"Sleuth or Spy","b":"1F575-FE0F","c":"1F575","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[29,11],"o":7},"flag-mf":{"a":"St. Martin Flag","b":"1F1F2-1F1EB","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[3,21]},"chains":{"a":"Chains","b":"26D3-FE0F","c":"26D3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["lock","arrest"],"k":[48,34],"o":5},"syringe":{"a":"Syringe","b":"1F489","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],"k":[24,35]},"male-detective":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB-200D-2642-FE0F","non_qualified":"1F575-1F3FB-200D-2642","image":"1f575-1f3fb-200d-2642-fe0f.png","sheet_x":29,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F575-1F3FC-200D-2642-FE0F","non_qualified":"1F575-1F3FC-200D-2642","image":"1f575-1f3fc-200d-2642-fe0f.png","sheet_x":29,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F575-1F3FD-200D-2642-FE0F","non_qualified":"1F575-1F3FD-200D-2642","image":"1f575-1f3fd-200d-2642-fe0f.png","sheet_x":29,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F575-1F3FE-200D-2642-FE0F","non_qualified":"1F575-1F3FE-200D-2642","image":"1f575-1f3fe-200d-2642-fe0f.png","sheet_x":29,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F575-1F3FF-200D-2642-FE0F","non_qualified":"1F575-1F3FF-200D-2642","image":"1f575-1f3ff-200d-2642-fe0f.png","sheet_x":29,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F575-FE0F","a":"Male Detective","b":"1F575-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[29,5],"o":7},"cool":{"a":"Squared Cool","b":"1F192","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["words","blue-square"],"k":[0,22]},"clock730":{"a":"Clock Face Seven-Thirty","b":"1F562","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,36]},"flag-mg":{"a":"Madagascar Flag","b":"1F1F2-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,22]},"free":{"a":"Squared Free","b":"1F193","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","words"],"k":[0,23]},"flag-mh":{"a":"Marshall Islands Flag","b":"1F1F2-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,23]},"clock8":{"a":"Clock Face Eight Oclock","b":"1F557","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,25]},"pill":{"a":"Pill","b":"1F48A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["health","medicine","doctor","pharmacy","drug"],"k":[24,36]},"female-detective":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB-200D-2640-FE0F","non_qualified":"1F575-1F3FB-200D-2640","image":"1f575-1f3fb-200d-2640-fe0f.png","sheet_x":29,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F575-1F3FC-200D-2640-FE0F","non_qualified":"1F575-1F3FC-200D-2640","image":"1f575-1f3fc-200d-2640-fe0f.png","sheet_x":29,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F575-1F3FD-200D-2640-FE0F","non_qualified":"1F575-1F3FD-200D-2640","image":"1f575-1f3fd-200d-2640-fe0f.png","sheet_x":29,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F575-1F3FE-200D-2640-FE0F","non_qualified":"1F575-1F3FE-200D-2640","image":"1f575-1f3fe-200d-2640-fe0f.png","sheet_x":29,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F575-1F3FF-200D-2640-FE0F","non_qualified":"1F575-1F3FF-200D-2640","image":"1f575-1f3ff-200d-2640-fe0f.png","sheet_x":29,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Detective","b":"1F575-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[28,51],"o":7},"clock830":{"a":"Clock Face Eight-Thirty","b":"1F563","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,37]},"guardsman":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB","non_qualified":null,"image":"1f482-1f3fb.png","sheet_x":23,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F482-1F3FC","non_qualified":null,"image":"1f482-1f3fc.png","sheet_x":23,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F482-1F3FD","non_qualified":null,"image":"1f482-1f3fd.png","sheet_x":23,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F482-1F3FE","non_qualified":null,"image":"1f482-1f3fe.png","sheet_x":23,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F482-1F3FF","non_qualified":null,"image":"1f482-1f3ff.png","sheet_x":23,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F482-200D-2642-FE0F","a":"Guardsman","b":"1F482","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"j":["uk","gb","british","male","guy","royal"],"k":[23,31]},"information_source":{"a":"Information Source","b":"2139-FE0F","c":"2139","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","alphabet","letter"],"k":[46,32],"o":3},"flag-mk":{"a":"Macedonia Flag","b":"1F1F2-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,24]},"smoking":{"a":"Smoking Symbol","b":"1F6AC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["kills","tobacco","cigarette","joint","smoke"],"k":[35,17]},"id":{"a":"Squared Id","b":"1F194","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["purple-square","words"],"k":[0,24]},"clock9":{"a":"Clock Face Nine Oclock","b":"1F558","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,26]},"flag-ml":{"a":"Mali Flag","b":"1F1F2-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,25]},"coffin":{"a":"Coffin","b":"26B0-FE0F","c":"26B0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],"k":[48,24],"o":4},"male-guard":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB-200D-2642-FE0F","non_qualified":"1F482-1F3FB-200D-2642","image":"1f482-1f3fb-200d-2642-fe0f.png","sheet_x":23,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F482-1F3FC-200D-2642-FE0F","non_qualified":"1F482-1F3FC-200D-2642","image":"1f482-1f3fc-200d-2642-fe0f.png","sheet_x":23,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F482-1F3FD-200D-2642-FE0F","non_qualified":"1F482-1F3FD-200D-2642","image":"1f482-1f3fd-200d-2642-fe0f.png","sheet_x":23,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F482-1F3FE-200D-2642-FE0F","non_qualified":"1F482-1F3FE-200D-2642","image":"1f482-1f3fe-200d-2642-fe0f.png","sheet_x":23,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F482-1F3FF-200D-2642-FE0F","non_qualified":"1F482-1F3FF-200D-2642","image":"1f482-1f3ff-200d-2642-fe0f.png","sheet_x":23,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F482","a":"Male Guard","b":"1F482-200D-2642-FE0F","c":"1F482-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[23,25]},"m":{"a":"Circled Latin Capital Letter M","b":"24C2-FE0F","c":"24C2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["alphabet","blue-circle","letter"],"k":[47,7],"o":1},"funeral_urn":{"a":"Funeral Urn","b":"26B1-FE0F","c":"26B1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["dead","die","death","rip","ashes"],"k":[48,25],"o":4},"female-guard":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB-200D-2640-FE0F","non_qualified":"1F482-1F3FB-200D-2640","image":"1f482-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F482-1F3FC-200D-2640-FE0F","non_qualified":"1F482-1F3FC-200D-2640","image":"1f482-1f3fc-200d-2640-fe0f.png","sheet_x":23,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F482-1F3FD-200D-2640-FE0F","non_qualified":"1F482-1F3FD-200D-2640","image":"1f482-1f3fd-200d-2640-fe0f.png","sheet_x":23,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F482-1F3FE-200D-2640-FE0F","non_qualified":"1F482-1F3FE-200D-2640","image":"1f482-1f3fe-200d-2640-fe0f.png","sheet_x":23,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F482-1F3FF-200D-2640-FE0F","non_qualified":"1F482-1F3FF-200D-2640","image":"1f482-1f3ff-200d-2640-fe0f.png","sheet_x":23,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Guard","b":"1F482-200D-2640-FE0F","c":"1F482-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[23,19]},"flag-mm":{"a":"Myanmar (burma) Flag","b":"1F1F2-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,26]},"clock930":{"a":"Clock Face Nine-Thirty","b":"1F564","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,38]},"moyai":{"a":"Moyai","b":"1F5FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["rock","easter island","moai"],"k":[30,23]},"new":{"a":"Squared New","b":"1F195","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","words","start"],"k":[0,25]},"flag-mn":{"a":"Mongolia Flag","b":"1F1F2-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,27]},"construction_worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB","non_qualified":null,"image":"1f477-1f3fb.png","sheet_x":22,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F477-1F3FC","non_qualified":null,"image":"1f477-1f3fc.png","sheet_x":22,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F477-1F3FD","non_qualified":null,"image":"1f477-1f3fd.png","sheet_x":22,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F477-1F3FE","non_qualified":null,"image":"1f477-1f3fe.png","sheet_x":22,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F477-1F3FF","non_qualified":null,"image":"1f477-1f3ff.png","sheet_x":22,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F477-200D-2642-FE0F","a":"Construction Worker","b":"1F477","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[22,28]},"clock10":{"a":"Clock Face Ten Oclock","b":"1F559","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,27]},"clock1030":{"a":"Clock Face Ten-Thirty","b":"1F565","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,39]},"ng":{"a":"Squared Ng","b":"1F196","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","words","shape","icon"],"k":[0,26]},"male-construction-worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB-200D-2642-FE0F","non_qualified":"1F477-1F3FB-200D-2642","image":"1f477-1f3fb-200d-2642-fe0f.png","sheet_x":22,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F477-1F3FC-200D-2642-FE0F","non_qualified":"1F477-1F3FC-200D-2642","image":"1f477-1f3fc-200d-2642-fe0f.png","sheet_x":22,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F477-1F3FD-200D-2642-FE0F","non_qualified":"1F477-1F3FD-200D-2642","image":"1f477-1f3fd-200d-2642-fe0f.png","sheet_x":22,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F477-1F3FE-200D-2642-FE0F","non_qualified":"1F477-1F3FE-200D-2642","image":"1f477-1f3fe-200d-2642-fe0f.png","sheet_x":22,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F477-1F3FF-200D-2642-FE0F","non_qualified":"1F477-1F3FF-200D-2642","image":"1f477-1f3ff-200d-2642-fe0f.png","sheet_x":22,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F477","a":"Male Construction Worker","b":"1F477-200D-2642-FE0F","c":"1F477-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[22,22]},"flag-mo":{"a":"Macau Sar China Flag","b":"1F1F2-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,28]},"oil_drum":{"a":"Oil Drum","b":"1F6E2-FE0F","c":"1F6E2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["barrell"],"k":[37,10],"o":7},"o2":{"a":"Negative Squared Latin Capital Letter O","b":"1F17E-FE0F","c":"1F17E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["alphabet","red-square","letter"],"k":[0,18]},"female-construction-worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB-200D-2640-FE0F","non_qualified":"1F477-1F3FB-200D-2640","image":"1f477-1f3fb-200d-2640-fe0f.png","sheet_x":22,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F477-1F3FC-200D-2640-FE0F","non_qualified":"1F477-1F3FC-200D-2640","image":"1f477-1f3fc-200d-2640-fe0f.png","sheet_x":22,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F477-1F3FD-200D-2640-FE0F","non_qualified":"1F477-1F3FD-200D-2640","image":"1f477-1f3fd-200d-2640-fe0f.png","sheet_x":22,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F477-1F3FE-200D-2640-FE0F","non_qualified":"1F477-1F3FE-200D-2640","image":"1f477-1f3fe-200d-2640-fe0f.png","sheet_x":22,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F477-1F3FF-200D-2640-FE0F","non_qualified":"1F477-1F3FF-200D-2640","image":"1f477-1f3ff-200d-2640-fe0f.png","sheet_x":22,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Construction Worker","b":"1F477-200D-2640-FE0F","c":"1F477-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[22,16]},"clock11":{"a":"Clock Face Eleven Oclock","b":"1F55A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,28]},"crystal_ball":{"a":"Crystal Ball","b":"1F52E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["disco","party","magic","circus","fortune_teller"],"k":[27,48]},"flag-mp":{"a":"Northern Mariana Islands Flag","b":"1F1F2-1F1F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,29]},"flag-mq":{"a":"Martinique Flag","b":"1F1F2-1F1F6","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[3,30]},"prince":{"skin_variations":{"1F3FB":{"unified":"1F934-1F3FB","non_qualified":null,"image":"1f934-1f3fb.png","sheet_x":39,"sheet_y":29,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F934-1F3FC","non_qualified":null,"image":"1f934-1f3fc.png","sheet_x":39,"sheet_y":30,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F934-1F3FD","non_qualified":null,"image":"1f934-1f3fd.png","sheet_x":39,"sheet_y":31,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F934-1F3FE","non_qualified":null,"image":"1f934-1f3fe.png","sheet_x":39,"sheet_y":32,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F934-1F3FF","non_qualified":null,"image":"1f934-1f3ff.png","sheet_x":39,"sheet_y":33,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Prince","b":"1F934","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["boy","man","male","crown","royal","king"],"k":[39,28],"o":9},"ok":{"a":"Squared Ok","b":"1F197","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["good","agree","yes","blue-square"],"k":[0,27]},"clock1130":{"a":"Clock Face Eleven-Thirty","b":"1F566","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["time","late","early","schedule"],"k":[28,40]},"shopping_trolley":{"a":"Shopping Trolley","b":"1F6D2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,7],"o":9},"flag-mr":{"a":"Mauritania Flag","b":"1F1F2-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,31]},"princess":{"skin_variations":{"1F3FB":{"unified":"1F478-1F3FB","non_qualified":null,"image":"1f478-1f3fb.png","sheet_x":22,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F478-1F3FC","non_qualified":null,"image":"1f478-1f3fc.png","sheet_x":22,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F478-1F3FD","non_qualified":null,"image":"1f478-1f3fd.png","sheet_x":22,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F478-1F3FE","non_qualified":null,"image":"1f478-1f3fe.png","sheet_x":22,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F478-1F3FF","non_qualified":null,"image":"1f478-1f3ff.png","sheet_x":22,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Princess","b":"1F478","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["girl","woman","female","blond","crown","royal","queen"],"k":[22,34]},"new_moon":{"a":"New Moon Symbol","b":"1F311","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,9]},"parking":{"a":"Negative Squared Latin Capital Letter P","b":"1F17F-FE0F","c":"1F17F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cars","blue-square","alphabet","letter"],"k":[0,19],"o":5},"sos":{"a":"Squared Sos","b":"1F198","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["help","red-square","words","emergency","911"],"k":[0,28]},"man_with_turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB","non_qualified":null,"image":"1f473-1f3fb.png","sheet_x":21,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F473-1F3FC","non_qualified":null,"image":"1f473-1f3fc.png","sheet_x":21,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F473-1F3FD","non_qualified":null,"image":"1f473-1f3fd.png","sheet_x":21,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F473-1F3FE","non_qualified":null,"image":"1f473-1f3fe.png","sheet_x":21,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F473-1F3FF","non_qualified":null,"image":"1f473-1f3ff.png","sheet_x":21,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F473-200D-2642-FE0F","a":"Man with Turban","b":"1F473","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"j":["male","indian","hinduism","arabs"],"k":[21,44]},"flag-ms":{"a":"Montserrat Flag","b":"1F1F2-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,32]},"waxing_crescent_moon":{"a":"Waxing Crescent Moon Symbol","b":"1F312","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,10]},"up":{"a":"Squared Up with Exclamation Mark","b":"1F199","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","above","high"],"k":[0,29]},"first_quarter_moon":{"a":"First Quarter Moon Symbol","b":"1F313","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,11]},"flag-mt":{"a":"Malta Flag","b":"1F1F2-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,33]},"man-wearing-turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB-200D-2642-FE0F","non_qualified":"1F473-1F3FB-200D-2642","image":"1f473-1f3fb-200d-2642-fe0f.png","sheet_x":21,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F473-1F3FC-200D-2642-FE0F","non_qualified":"1F473-1F3FC-200D-2642","image":"1f473-1f3fc-200d-2642-fe0f.png","sheet_x":21,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F473-1F3FD-200D-2642-FE0F","non_qualified":"1F473-1F3FD-200D-2642","image":"1f473-1f3fd-200d-2642-fe0f.png","sheet_x":21,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F473-1F3FE-200D-2642-FE0F","non_qualified":"1F473-1F3FE-200D-2642","image":"1f473-1f3fe-200d-2642-fe0f.png","sheet_x":21,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F473-1F3FF-200D-2642-FE0F","non_qualified":"1F473-1F3FF-200D-2642","image":"1f473-1f3ff-200d-2642-fe0f.png","sheet_x":21,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F473","a":"Man Wearing Turban","b":"1F473-200D-2642-FE0F","c":"1F473-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[21,38]},"moon":{"a":"Waxing Gibbous Moon Symbol","b":"1F314","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[6,12],"n":["waxing_gibbous_moon"]},"woman-wearing-turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB-200D-2640-FE0F","non_qualified":"1F473-1F3FB-200D-2640","image":"1f473-1f3fb-200d-2640-fe0f.png","sheet_x":21,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F473-1F3FC-200D-2640-FE0F","non_qualified":"1F473-1F3FC-200D-2640","image":"1f473-1f3fc-200d-2640-fe0f.png","sheet_x":21,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F473-1F3FD-200D-2640-FE0F","non_qualified":"1F473-1F3FD-200D-2640","image":"1f473-1f3fd-200d-2640-fe0f.png","sheet_x":21,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F473-1F3FE-200D-2640-FE0F","non_qualified":"1F473-1F3FE-200D-2640","image":"1f473-1f3fe-200d-2640-fe0f.png","sheet_x":21,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F473-1F3FF-200D-2640-FE0F","non_qualified":"1F473-1F3FF-200D-2640","image":"1f473-1f3ff-200d-2640-fe0f.png","sheet_x":21,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Wearing Turban","b":"1F473-200D-2640-FE0F","c":"1F473-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[21,32]},"vs":{"a":"Squared Vs","b":"1F19A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["words","orange-square"],"k":[0,30]},"flag-mu":{"a":"Mauritius Flag","b":"1F1F2-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,34]},"man_with_gua_pi_mao":{"skin_variations":{"1F3FB":{"unified":"1F472-1F3FB","non_qualified":null,"image":"1f472-1f3fb.png","sheet_x":21,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F472-1F3FC","non_qualified":null,"image":"1f472-1f3fc.png","sheet_x":21,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F472-1F3FD","non_qualified":null,"image":"1f472-1f3fd.png","sheet_x":21,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F472-1F3FE","non_qualified":null,"image":"1f472-1f3fe.png","sheet_x":21,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F472-1F3FF","non_qualified":null,"image":"1f472-1f3ff.png","sheet_x":21,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Man with Gua Pi Mao","b":"1F472","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["male","boy","chinese"],"k":[21,26]},"koko":{"a":"Squared Katakana Koko","b":"1F201","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue-square","here","katakana","japanese","destination"],"k":[5,29]},"full_moon":{"a":"Full Moon Symbol","b":"1F315","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","yellow","twilight","planet","space","night","evening","sleep"],"k":[6,13]},"flag-mv":{"a":"Maldives Flag","b":"1F1F2-1F1FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,35]},"person_with_headscarf":{"skin_variations":{"1F3FB":{"unified":"1F9D5-1F3FB","non_qualified":null,"image":"1f9d5-1f3fb.png","sheet_x":43,"sheet_y":23,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F9D5-1F3FC","non_qualified":null,"image":"1f9d5-1f3fc.png","sheet_x":43,"sheet_y":24,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F9D5-1F3FD","non_qualified":null,"image":"1f9d5-1f3fd.png","sheet_x":43,"sheet_y":25,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F9D5-1F3FE","non_qualified":null,"image":"1f9d5-1f3fe.png","sheet_x":43,"sheet_y":26,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F9D5-1F3FF","non_qualified":null,"image":"1f9d5-1f3ff.png","sheet_x":43,"sheet_y":27,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Person with Headscarf","b":"1F9D5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[43,22],"o":10},"waning_gibbous_moon":{"a":"Waning Gibbous Moon Symbol","b":"1F316","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],"k":[6,14]},"sa":{"a":"Squared Katakana Sa","b":"1F202-FE0F","c":"1F202","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","blue-square","katakana"],"k":[5,30]},"flag-mw":{"a":"Malawi Flag","b":"1F1F2-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,36]},"last_quarter_moon":{"a":"Last Quarter Moon Symbol","b":"1F317","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,15]},"u6708":{"a":"Squared Cjk Unified Ideograph-6708","b":"1F237-FE0F","c":"1F237","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["chinese","month","moon","japanese","orange-square","kanji"],"k":[5,38]},"bearded_person":{"skin_variations":{"1F3FB":{"unified":"1F9D4-1F3FB","non_qualified":null,"image":"1f9d4-1f3fb.png","sheet_x":43,"sheet_y":17,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F9D4-1F3FC","non_qualified":null,"image":"1f9d4-1f3fc.png","sheet_x":43,"sheet_y":18,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F9D4-1F3FD","non_qualified":null,"image":"1f9d4-1f3fd.png","sheet_x":43,"sheet_y":19,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F9D4-1F3FE","non_qualified":null,"image":"1f9d4-1f3fe.png","sheet_x":43,"sheet_y":20,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F9D4-1F3FF","non_qualified":null,"image":"1f9d4-1f3ff.png","sheet_x":43,"sheet_y":21,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Bearded Person","b":"1F9D4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["person","bewhiskered"],"k":[43,16],"o":10},"flag-mx":{"a":"Mexico Flag","b":"1F1F2-1F1FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,37]},"u6709":{"a":"Squared Cjk Unified Ideograph-6709","b":"1F236","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["orange-square","chinese","have","kanji"],"k":[5,37]},"person_with_blond_hair":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB","non_qualified":null,"image":"1f471-1f3fb.png","sheet_x":21,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F471-1F3FC","non_qualified":null,"image":"1f471-1f3fc.png","sheet_x":21,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F471-1F3FD","non_qualified":null,"image":"1f471-1f3fd.png","sheet_x":21,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F471-1F3FE","non_qualified":null,"image":"1f471-1f3fe.png","sheet_x":21,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F471-1F3FF","non_qualified":null,"image":"1f471-1f3ff.png","sheet_x":21,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F471-200D-2642-FE0F","a":"Person with Blond Hair","b":"1F471","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[21,20]},"waning_crescent_moon":{"a":"Waning Crescent Moon Symbol","b":"1F318","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,16]},"flag-my":{"a":"Malaysia Flag","b":"1F1F2-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,38]},"u6307":{"a":"Squared Cjk Unified Ideograph-6307","b":"1F22F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["chinese","point","green-square","kanji"],"k":[5,32],"o":5},"blond-haired-man":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB-200D-2642-FE0F","non_qualified":"1F471-1F3FB-200D-2642","image":"1f471-1f3fb-200d-2642-fe0f.png","sheet_x":21,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F471-1F3FC-200D-2642-FE0F","non_qualified":"1F471-1F3FC-200D-2642","image":"1f471-1f3fc-200d-2642-fe0f.png","sheet_x":21,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F471-1F3FD-200D-2642-FE0F","non_qualified":"1F471-1F3FD-200D-2642","image":"1f471-1f3fd-200d-2642-fe0f.png","sheet_x":21,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F471-1F3FE-200D-2642-FE0F","non_qualified":"1F471-1F3FE-200D-2642","image":"1f471-1f3fe-200d-2642-fe0f.png","sheet_x":21,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F471-1F3FF-200D-2642-FE0F","non_qualified":"1F471-1F3FF-200D-2642","image":"1f471-1f3ff-200d-2642-fe0f.png","sheet_x":21,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F471","a":"Blond Haired Man","b":"1F471-200D-2642-FE0F","c":"1F471-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[21,14]},"crescent_moon":{"a":"Crescent Moon","b":"1F319","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["night","sleep","sky","evening","magic"],"k":[6,17]},"flag-mz":{"a":"Mozambique Flag","b":"1F1F2-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,39]},"new_moon_with_face":{"a":"New Moon with Face","b":"1F31A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,18]},"flag-na":{"a":"Namibia Flag","b":"1F1F3-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,40]},"blond-haired-woman":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB-200D-2640-FE0F","non_qualified":"1F471-1F3FB-200D-2640","image":"1f471-1f3fb-200d-2640-fe0f.png","sheet_x":21,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F471-1F3FC-200D-2640-FE0F","non_qualified":"1F471-1F3FC-200D-2640","image":"1f471-1f3fc-200d-2640-fe0f.png","sheet_x":21,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F471-1F3FD-200D-2640-FE0F","non_qualified":"1F471-1F3FD-200D-2640","image":"1f471-1f3fd-200d-2640-fe0f.png","sheet_x":21,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F471-1F3FE-200D-2640-FE0F","non_qualified":"1F471-1F3FE-200D-2640","image":"1f471-1f3fe-200d-2640-fe0f.png","sheet_x":21,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F471-1F3FF-200D-2640-FE0F","non_qualified":"1F471-1F3FF-200D-2640","image":"1f471-1f3ff-200d-2640-fe0f.png","sheet_x":21,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Blond Haired Woman","b":"1F471-200D-2640-FE0F","c":"1F471-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[21,8]},"ideograph_advantage":{"a":"Circled Ideograph Advantage","b":"1F250","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["chinese","kanji","obtain","get","circle"],"k":[5,42]},"first_quarter_moon_with_face":{"a":"First Quarter Moon with Face","b":"1F31B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,19]},"man_in_tuxedo":{"skin_variations":{"1F3FB":{"unified":"1F935-1F3FB","non_qualified":null,"image":"1f935-1f3fb.png","sheet_x":39,"sheet_y":35,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F935-1F3FC","non_qualified":null,"image":"1f935-1f3fc.png","sheet_x":39,"sheet_y":36,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F935-1F3FD","non_qualified":null,"image":"1f935-1f3fd.png","sheet_x":39,"sheet_y":37,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F935-1F3FE","non_qualified":null,"image":"1f935-1f3fe.png","sheet_x":39,"sheet_y":38,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F935-1F3FF","non_qualified":null,"image":"1f935-1f3ff.png","sheet_x":39,"sheet_y":39,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Man in Tuxedo","b":"1F935","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["couple","marriage","wedding","groom"],"k":[39,34],"o":9},"flag-nc":{"a":"New Caledonia Flag","b":"1F1F3-1F1E8","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[3,41]},"u5272":{"a":"Squared Cjk Unified Ideograph-5272","b":"1F239","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["cut","divide","chinese","kanji","pink-square"],"k":[5,40]},"flag-ne":{"a":"Niger Flag","b":"1F1F3-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,42]},"last_quarter_moon_with_face":{"a":"Last Quarter Moon with Face","b":"1F31C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,20]},"u7121":{"a":"Squared Cjk Unified Ideograph-7121","b":"1F21A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nothing","chinese","kanji","japanese","orange-square"],"k":[5,31],"o":5},"bride_with_veil":{"skin_variations":{"1F3FB":{"unified":"1F470-1F3FB","non_qualified":null,"image":"1f470-1f3fb.png","sheet_x":21,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F470-1F3FC","non_qualified":null,"image":"1f470-1f3fc.png","sheet_x":21,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F470-1F3FD","non_qualified":null,"image":"1f470-1f3fd.png","sheet_x":21,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F470-1F3FE","non_qualified":null,"image":"1f470-1f3fe.png","sheet_x":21,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F470-1F3FF","non_qualified":null,"image":"1f470-1f3ff.png","sheet_x":21,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Bride with Veil","b":"1F470","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["couple","marriage","wedding","woman","bride"],"k":[21,2]},"u7981":{"a":"Squared Cjk Unified Ideograph-7981","b":"1F232","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["kanji","japanese","chinese","forbidden","limit","restricted","red-square"],"k":[5,33]},"pregnant_woman":{"skin_variations":{"1F3FB":{"unified":"1F930-1F3FB","non_qualified":null,"image":"1f930-1f3fb.png","sheet_x":39,"sheet_y":5,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F930-1F3FC","non_qualified":null,"image":"1f930-1f3fc.png","sheet_x":39,"sheet_y":6,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F930-1F3FD","non_qualified":null,"image":"1f930-1f3fd.png","sheet_x":39,"sheet_y":7,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F930-1F3FE","non_qualified":null,"image":"1f930-1f3fe.png","sheet_x":39,"sheet_y":8,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F930-1F3FF","non_qualified":null,"image":"1f930-1f3ff.png","sheet_x":39,"sheet_y":9,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Pregnant Woman","b":"1F930","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["baby"],"k":[39,4],"o":9},"thermometer":{"a":"Thermometer","b":"1F321-FE0F","c":"1F321","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["weather","temperature","hot","cold"],"k":[6,25],"o":7},"flag-nf":{"a":"Norfolk Island Flag","b":"1F1F3-1F1EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,43]},"sunny":{"a":"Black Sun with Rays","b":"2600-FE0F","c":"2600","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["weather","nature","brightness","summer","beach","spring"],"k":[47,16],"o":1},"accept":{"a":"Circled Ideograph Accept","b":"1F251","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["ok","good","chinese","kanji","agree","yes","orange-circle"],"k":[5,43]},"flag-ng":{"a":"Nigeria Flag","b":"1F1F3-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,44]},"breast-feeding":{"skin_variations":{"1F3FB":{"unified":"1F931-1F3FB","non_qualified":null,"image":"1f931-1f3fb.png","sheet_x":39,"sheet_y":11,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F931-1F3FC","non_qualified":null,"image":"1f931-1f3fc.png","sheet_x":39,"sheet_y":12,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F931-1F3FD","non_qualified":null,"image":"1f931-1f3fd.png","sheet_x":39,"sheet_y":13,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F931-1F3FE","non_qualified":null,"image":"1f931-1f3fe.png","sheet_x":39,"sheet_y":14,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F931-1F3FF","non_qualified":null,"image":"1f931-1f3ff.png","sheet_x":39,"sheet_y":15,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Breast-Feeding","b":"1F931","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[39,10],"o":10},"full_moon_with_face":{"a":"Full Moon with Face","b":"1F31D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[6,21]},"flag-ni":{"a":"Nicaragua Flag","b":"1F1F3-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,45]},"u7533":{"a":"Squared Cjk Unified Ideograph-7533","b":"1F238","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["chinese","japanese","kanji","orange-square"],"k":[5,39]},"angel":{"skin_variations":{"1F3FB":{"unified":"1F47C-1F3FB","non_qualified":null,"image":"1f47c-1f3fb.png","sheet_x":22,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F47C-1F3FC","non_qualified":null,"image":"1f47c-1f3fc.png","sheet_x":22,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F47C-1F3FD","non_qualified":null,"image":"1f47c-1f3fd.png","sheet_x":22,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F47C-1F3FE","non_qualified":null,"image":"1f47c-1f3fe.png","sheet_x":22,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F47C-1F3FF","non_qualified":null,"image":"1f47c-1f3ff.png","sheet_x":22,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Baby Angel","b":"1F47C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["heaven","wings","halo"],"k":[22,43]},"sun_with_face":{"a":"Sun with Face","b":"1F31E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","morning","sky"],"k":[6,22]},"santa":{"skin_variations":{"1F3FB":{"unified":"1F385-1F3FB","non_qualified":null,"image":"1f385-1f3fb.png","sheet_x":8,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F385-1F3FC","non_qualified":null,"image":"1f385-1f3fc.png","sheet_x":8,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F385-1F3FD","non_qualified":null,"image":"1f385-1f3fd.png","sheet_x":8,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F385-1F3FE","non_qualified":null,"image":"1f385-1f3fe.png","sheet_x":8,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F385-1F3FF","non_qualified":null,"image":"1f385-1f3ff.png","sheet_x":8,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Father Christmas","b":"1F385","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["festival","man","male","xmas","father christmas"],"k":[8,19]},"u5408":{"a":"Squared Cjk Unified Ideograph-5408","b":"1F234","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","chinese","join","kanji","red-square"],"k":[5,35]},"flag-nl":{"a":"Netherlands Flag","b":"1F1F3-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,46]},"mrs_claus":{"skin_variations":{"1F3FB":{"unified":"1F936-1F3FB","non_qualified":null,"image":"1f936-1f3fb.png","sheet_x":39,"sheet_y":41,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F936-1F3FC","non_qualified":null,"image":"1f936-1f3fc.png","sheet_x":39,"sheet_y":42,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F936-1F3FD","non_qualified":null,"image":"1f936-1f3fd.png","sheet_x":39,"sheet_y":43,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F936-1F3FE","non_qualified":null,"image":"1f936-1f3fe.png","sheet_x":39,"sheet_y":44,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F936-1F3FF","non_qualified":null,"image":"1f936-1f3ff.png","sheet_x":39,"sheet_y":45,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Mother Christmas","b":"1F936","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["woman","female","xmas","mother christmas"],"k":[39,40],"n":["mother_christmas"],"o":9},"u7a7a":{"a":"Squared Cjk Unified Ideograph-7a7a","b":"1F233","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["kanji","japanese","chinese","empty","sky","blue-square"],"k":[5,34]},"star":{"a":"White Medium Star","b":"2B50","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["night","yellow"],"k":[50,22],"o":5},"flag-no":{"a":"Norway Flag","b":"1F1F3-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,47]},"mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB","non_qualified":null,"image":"1f9d9-1f3fb.png","sheet_x":44,"sheet_y":43,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D9-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D9-1F3FC","non_qualified":null,"image":"1f9d9-1f3fc.png","sheet_x":44,"sheet_y":44,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D9-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D9-1F3FD","non_qualified":null,"image":"1f9d9-1f3fd.png","sheet_x":44,"sheet_y":45,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D9-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D9-1F3FE","non_qualified":null,"image":"1f9d9-1f3fe.png","sheet_x":44,"sheet_y":46,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D9-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D9-1F3FF","non_qualified":null,"image":"1f9d9-1f3ff.png","sheet_x":44,"sheet_y":47,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D9-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D9-200D-2640-FE0F","a":"Mage","b":"1F9D9","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,42],"o":10},"star2":{"a":"Glowing Star","b":"1F31F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["night","sparkle","awesome","good","magic"],"k":[6,23]},"flag-np":{"a":"Nepal Flag","b":"1F1F3-1F1F5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,48]},"congratulations":{"a":"Circled Ideograph Congratulation","b":"3297-FE0F","c":"3297","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["chinese","kanji","japanese","red-circle"],"k":[50,26],"o":1},"flag-nr":{"a":"Nauru Flag","b":"1F1F3-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,49]},"stars":{"a":"Shooting Star","b":"1F320","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["night","photo"],"k":[6,24]},"female_mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB-200D-2640-FE0F","non_qualified":"1F9D9-1F3FB-200D-2640","image":"1f9d9-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":31,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D9-1F3FB"},"1F3FC":{"unified":"1F9D9-1F3FC-200D-2640-FE0F","non_qualified":"1F9D9-1F3FC-200D-2640","image":"1f9d9-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":32,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D9-1F3FC"},"1F3FD":{"unified":"1F9D9-1F3FD-200D-2640-FE0F","non_qualified":"1F9D9-1F3FD-200D-2640","image":"1f9d9-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":33,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D9-1F3FD"},"1F3FE":{"unified":"1F9D9-1F3FE-200D-2640-FE0F","non_qualified":"1F9D9-1F3FE-200D-2640","image":"1f9d9-1f3fe-200d-2640-fe0f.png","sheet_x":44,"sheet_y":34,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D9-1F3FE"},"1F3FF":{"unified":"1F9D9-1F3FF-200D-2640-FE0F","non_qualified":"1F9D9-1F3FF-200D-2640","image":"1f9d9-1f3ff-200d-2640-fe0f.png","sheet_x":44,"sheet_y":35,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D9-1F3FF"}},"obsoletes":"1F9D9","a":"Female Mage","b":"1F9D9-200D-2640-FE0F","c":"1F9D9-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,30],"o":10},"secret":{"a":"Circled Ideograph Secret","b":"3299-FE0F","c":"3299","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["privacy","chinese","sshh","kanji","red-circle"],"k":[50,27],"o":1},"flag-nu":{"a":"Niue Flag","b":"1F1F3-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,50]},"u55b6":{"a":"Squared Cjk Unified Ideograph-55b6","b":"1F23A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["japanese","opening hours","orange-square"],"k":[5,41]},"male_mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB-200D-2642-FE0F","non_qualified":"1F9D9-1F3FB-200D-2642","image":"1f9d9-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":37,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9D9-1F3FC-200D-2642-FE0F","non_qualified":"1F9D9-1F3FC-200D-2642","image":"1f9d9-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":38,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9D9-1F3FD-200D-2642-FE0F","non_qualified":"1F9D9-1F3FD-200D-2642","image":"1f9d9-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":39,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9D9-1F3FE-200D-2642-FE0F","non_qualified":"1F9D9-1F3FE-200D-2642","image":"1f9d9-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":40,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9D9-1F3FF-200D-2642-FE0F","non_qualified":"1F9D9-1F3FF-200D-2642","image":"1f9d9-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":41,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Male Mage","b":"1F9D9-200D-2642-FE0F","c":"1F9D9-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,36],"o":10},"cloud":{"a":"Cloud","b":"2601-FE0F","c":"2601","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["weather","sky"],"k":[47,17],"o":1},"flag-nz":{"a":"New Zealand Flag","b":"1F1F3-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[3,51]},"partly_sunny":{"a":"Sun Behind Cloud","b":"26C5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["weather","nature","cloudy","morning","fall","spring"],"k":[48,29],"o":5},"fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB","non_qualified":null,"image":"1f9da-1f3fb.png","sheet_x":45,"sheet_y":9,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DA-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9DA-1F3FC","non_qualified":null,"image":"1f9da-1f3fc.png","sheet_x":45,"sheet_y":10,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DA-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9DA-1F3FD","non_qualified":null,"image":"1f9da-1f3fd.png","sheet_x":45,"sheet_y":11,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DA-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9DA-1F3FE","non_qualified":null,"image":"1f9da-1f3fe.png","sheet_x":45,"sheet_y":12,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DA-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9DA-1F3FF","non_qualified":null,"image":"1f9da-1f3ff.png","sheet_x":45,"sheet_y":13,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DA-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9DA-200D-2640-FE0F","a":"Fairy","b":"1F9DA","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,8],"o":10},"u6e80":{"a":"Squared Cjk Unified Ideograph-6e80","b":"1F235","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["full","chinese","japanese","red-square","kanji"],"k":[5,36]},"black_small_square":{"a":"Black Small Square","b":"25AA-FE0F","c":"25AA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","icon"],"k":[47,8],"o":1},"thunder_cloud_and_rain":{"a":"Thunder Cloud and Rain","b":"26C8-FE0F","c":"26C8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[48,30],"o":5},"female_fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB-200D-2640-FE0F","non_qualified":"1F9DA-1F3FB-200D-2640","image":"1f9da-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":49,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DA-1F3FB"},"1F3FC":{"unified":"1F9DA-1F3FC-200D-2640-FE0F","non_qualified":"1F9DA-1F3FC-200D-2640","image":"1f9da-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":50,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DA-1F3FC"},"1F3FD":{"unified":"1F9DA-1F3FD-200D-2640-FE0F","non_qualified":"1F9DA-1F3FD-200D-2640","image":"1f9da-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":51,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DA-1F3FD"},"1F3FE":{"unified":"1F9DA-1F3FE-200D-2640-FE0F","non_qualified":"1F9DA-1F3FE-200D-2640","image":"1f9da-1f3fe-200d-2640-fe0f.png","sheet_x":45,"sheet_y":0,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DA-1F3FE"},"1F3FF":{"unified":"1F9DA-1F3FF-200D-2640-FE0F","non_qualified":"1F9DA-1F3FF-200D-2640","image":"1f9da-1f3ff-200d-2640-fe0f.png","sheet_x":45,"sheet_y":1,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DA-1F3FF"}},"obsoletes":"1F9DA","a":"Female Fairy","b":"1F9DA-200D-2640-FE0F","c":"1F9DA-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,48],"o":10},"flag-om":{"a":"Oman Flag","b":"1F1F4-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,0]},"white_small_square":{"a":"White Small Square","b":"25AB-FE0F","c":"25AB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","icon"],"k":[47,9],"o":1},"flag-pa":{"a":"Panama Flag","b":"1F1F5-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,1]},"mostly_sunny":{"a":"Mostly Sunny","b":"1F324-FE0F","c":"1F324","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,26],"n":["sun_small_cloud"],"o":7},"male_fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB-200D-2642-FE0F","non_qualified":"1F9DA-1F3FB-200D-2642","image":"1f9da-1f3fb-200d-2642-fe0f.png","sheet_x":45,"sheet_y":3,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9DA-1F3FC-200D-2642-FE0F","non_qualified":"1F9DA-1F3FC-200D-2642","image":"1f9da-1f3fc-200d-2642-fe0f.png","sheet_x":45,"sheet_y":4,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9DA-1F3FD-200D-2642-FE0F","non_qualified":"1F9DA-1F3FD-200D-2642","image":"1f9da-1f3fd-200d-2642-fe0f.png","sheet_x":45,"sheet_y":5,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9DA-1F3FE-200D-2642-FE0F","non_qualified":"1F9DA-1F3FE-200D-2642","image":"1f9da-1f3fe-200d-2642-fe0f.png","sheet_x":45,"sheet_y":6,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9DA-1F3FF-200D-2642-FE0F","non_qualified":"1F9DA-1F3FF-200D-2642","image":"1f9da-1f3ff-200d-2642-fe0f.png","sheet_x":45,"sheet_y":7,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Male Fairy","b":"1F9DA-200D-2642-FE0F","c":"1F9DA-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,2],"o":10},"barely_sunny":{"a":"Barely Sunny","b":"1F325-FE0F","c":"1F325","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,27],"n":["sun_behind_cloud"],"o":7},"white_medium_square":{"a":"White Medium Square","b":"25FB-FE0F","c":"25FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","stone","icon"],"k":[47,12],"o":3},"flag-pe":{"a":"Peru Flag","b":"1F1F5-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,2]},"vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB","non_qualified":null,"image":"1f9db-1f3fb.png","sheet_x":45,"sheet_y":27,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DB-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9DB-1F3FC","non_qualified":null,"image":"1f9db-1f3fc.png","sheet_x":45,"sheet_y":28,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DB-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9DB-1F3FD","non_qualified":null,"image":"1f9db-1f3fd.png","sheet_x":45,"sheet_y":29,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DB-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9DB-1F3FE","non_qualified":null,"image":"1f9db-1f3fe.png","sheet_x":45,"sheet_y":30,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DB-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9DB-1F3FF","non_qualified":null,"image":"1f9db-1f3ff.png","sheet_x":45,"sheet_y":31,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoleted_by":"1F9DB-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9DB-200D-2640-FE0F","a":"Vampire","b":"1F9DB","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,26],"o":10},"female_vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB-200D-2640-FE0F","non_qualified":"1F9DB-1F3FB-200D-2640","image":"1f9db-1f3fb-200d-2640-fe0f.png","sheet_x":45,"sheet_y":15,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DB-1F3FB"},"1F3FC":{"unified":"1F9DB-1F3FC-200D-2640-FE0F","non_qualified":"1F9DB-1F3FC-200D-2640","image":"1f9db-1f3fc-200d-2640-fe0f.png","sheet_x":45,"sheet_y":16,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DB-1F3FC"},"1F3FD":{"unified":"1F9DB-1F3FD-200D-2640-FE0F","non_qualified":"1F9DB-1F3FD-200D-2640","image":"1f9db-1f3fd-200d-2640-fe0f.png","sheet_x":45,"sheet_y":17,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DB-1F3FD"},"1F3FE":{"unified":"1F9DB-1F3FE-200D-2640-FE0F","non_qualified":"1F9DB-1F3FE-200D-2640","image":"1f9db-1f3fe-200d-2640-fe0f.png","sheet_x":45,"sheet_y":18,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DB-1F3FE"},"1F3FF":{"unified":"1F9DB-1F3FF-200D-2640-FE0F","non_qualified":"1F9DB-1F3FF-200D-2640","image":"1f9db-1f3ff-200d-2640-fe0f.png","sheet_x":45,"sheet_y":19,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DB-1F3FF"}},"obsoletes":"1F9DB","a":"Female Vampire","b":"1F9DB-200D-2640-FE0F","c":"1F9DB-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,14],"o":10},"partly_sunny_rain":{"a":"Partly Sunny Rain","b":"1F326-FE0F","c":"1F326","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,28],"n":["sun_behind_rain_cloud"],"o":7},"flag-pf":{"a":"French Polynesia Flag","b":"1F1F5-1F1EB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,3]},"black_medium_square":{"a":"Black Medium Square","b":"25FC-FE0F","c":"25FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","button","icon"],"k":[47,13],"o":3},"white_medium_small_square":{"a":"White Medium Small Square","b":"25FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","stone","icon","button"],"k":[47,14],"o":3},"rain_cloud":{"a":"Rain Cloud","b":"1F327-FE0F","c":"1F327","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,29],"o":7},"flag-pg":{"a":"Papua New Guinea Flag","b":"1F1F5-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,4]},"male_vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB-200D-2642-FE0F","non_qualified":"1F9DB-1F3FB-200D-2642","image":"1f9db-1f3fb-200d-2642-fe0f.png","sheet_x":45,"sheet_y":21,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9DB-1F3FC-200D-2642-FE0F","non_qualified":"1F9DB-1F3FC-200D-2642","image":"1f9db-1f3fc-200d-2642-fe0f.png","sheet_x":45,"sheet_y":22,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9DB-1F3FD-200D-2642-FE0F","non_qualified":"1F9DB-1F3FD-200D-2642","image":"1f9db-1f3fd-200d-2642-fe0f.png","sheet_x":45,"sheet_y":23,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9DB-1F3FE-200D-2642-FE0F","non_qualified":"1F9DB-1F3FE-200D-2642","image":"1f9db-1f3fe-200d-2642-fe0f.png","sheet_x":45,"sheet_y":24,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9DB-1F3FF-200D-2642-FE0F","non_qualified":"1F9DB-1F3FF-200D-2642","image":"1f9db-1f3ff-200d-2642-fe0f.png","sheet_x":45,"sheet_y":25,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Male Vampire","b":"1F9DB-200D-2642-FE0F","c":"1F9DB-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,20],"o":10},"flag-ph":{"a":"Philippines Flag","b":"1F1F5-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,5]},"merperson":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB","non_qualified":null,"image":"1f9dc-1f3fb.png","sheet_x":45,"sheet_y":45,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DC-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9DC-1F3FC","non_qualified":null,"image":"1f9dc-1f3fc.png","sheet_x":45,"sheet_y":46,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DC-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9DC-1F3FD","non_qualified":null,"image":"1f9dc-1f3fd.png","sheet_x":45,"sheet_y":47,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DC-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9DC-1F3FE","non_qualified":null,"image":"1f9dc-1f3fe.png","sheet_x":45,"sheet_y":48,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DC-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9DC-1F3FF","non_qualified":null,"image":"1f9dc-1f3ff.png","sheet_x":45,"sheet_y":49,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DC-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9DC-200D-2642-FE0F","a":"Merperson","b":"1F9DC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,44],"o":10},"black_medium_small_square":{"a":"Black Medium Small Square","b":"25FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["icon","shape","button"],"k":[47,15],"o":3},"snow_cloud":{"a":"Snow Cloud","b":"1F328-FE0F","c":"1F328","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,30],"o":7},"lightning":{"a":"Lightning","b":"1F329-FE0F","c":"1F329","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,31],"n":["lightning_cloud"],"o":7},"black_large_square":{"a":"Black Large Square","b":"2B1B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","icon","button"],"k":[50,20],"o":5},"mermaid":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB-200D-2640-FE0F","non_qualified":"1F9DC-1F3FB-200D-2640","image":"1f9dc-1f3fb-200d-2640-fe0f.png","sheet_x":45,"sheet_y":33,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9DC-1F3FC-200D-2640-FE0F","non_qualified":"1F9DC-1F3FC-200D-2640","image":"1f9dc-1f3fc-200d-2640-fe0f.png","sheet_x":45,"sheet_y":34,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9DC-1F3FD-200D-2640-FE0F","non_qualified":"1F9DC-1F3FD-200D-2640","image":"1f9dc-1f3fd-200d-2640-fe0f.png","sheet_x":45,"sheet_y":35,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9DC-1F3FE-200D-2640-FE0F","non_qualified":"1F9DC-1F3FE-200D-2640","image":"1f9dc-1f3fe-200d-2640-fe0f.png","sheet_x":45,"sheet_y":36,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9DC-1F3FF-200D-2640-FE0F","non_qualified":"1F9DC-1F3FF-200D-2640","image":"1f9dc-1f3ff-200d-2640-fe0f.png","sheet_x":45,"sheet_y":37,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Mermaid","b":"1F9DC-200D-2640-FE0F","c":"1F9DC-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["woman","female","merwoman","ariel"],"k":[45,32],"o":10},"flag-pk":{"a":"Pakistan Flag","b":"1F1F5-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,6]},"merman":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB-200D-2642-FE0F","non_qualified":"1F9DC-1F3FB-200D-2642","image":"1f9dc-1f3fb-200d-2642-fe0f.png","sheet_x":45,"sheet_y":39,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DC-1F3FB"},"1F3FC":{"unified":"1F9DC-1F3FC-200D-2642-FE0F","non_qualified":"1F9DC-1F3FC-200D-2642","image":"1f9dc-1f3fc-200d-2642-fe0f.png","sheet_x":45,"sheet_y":40,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DC-1F3FC"},"1F3FD":{"unified":"1F9DC-1F3FD-200D-2642-FE0F","non_qualified":"1F9DC-1F3FD-200D-2642","image":"1f9dc-1f3fd-200d-2642-fe0f.png","sheet_x":45,"sheet_y":41,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DC-1F3FD"},"1F3FE":{"unified":"1F9DC-1F3FE-200D-2642-FE0F","non_qualified":"1F9DC-1F3FE-200D-2642","image":"1f9dc-1f3fe-200d-2642-fe0f.png","sheet_x":45,"sheet_y":42,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DC-1F3FE"},"1F3FF":{"unified":"1F9DC-1F3FF-200D-2642-FE0F","non_qualified":"1F9DC-1F3FF-200D-2642","image":"1f9dc-1f3ff-200d-2642-fe0f.png","sheet_x":45,"sheet_y":43,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DC-1F3FF"}},"obsoletes":"1F9DC","a":"Merman","b":"1F9DC-200D-2642-FE0F","c":"1F9DC-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["man","male","triton"],"k":[45,38],"o":10},"white_large_square":{"a":"White Large Square","b":"2B1C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","icon","stone","button"],"k":[50,21],"o":5},"tornado":{"a":"Tornado","b":"1F32A-FE0F","c":"1F32A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["weather","cyclone","twister"],"k":[6,32],"n":["tornado_cloud"],"o":7},"flag-pl":{"a":"Poland Flag","b":"1F1F5-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,7]},"elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB","non_qualified":null,"image":"1f9dd-1f3fb.png","sheet_x":46,"sheet_y":11,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DD-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9DD-1F3FC","non_qualified":null,"image":"1f9dd-1f3fc.png","sheet_x":46,"sheet_y":12,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DD-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9DD-1F3FD","non_qualified":null,"image":"1f9dd-1f3fd.png","sheet_x":46,"sheet_y":13,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DD-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9DD-1F3FE","non_qualified":null,"image":"1f9dd-1f3fe.png","sheet_x":46,"sheet_y":14,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DD-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9DD-1F3FF","non_qualified":null,"image":"1f9dd-1f3ff.png","sheet_x":46,"sheet_y":15,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9DD-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9DD-200D-2642-FE0F","a":"Elf","b":"1F9DD","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,10],"o":10},"fog":{"a":"Fog","b":"1F32B-FE0F","c":"1F32B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["weather"],"k":[6,33],"o":7},"large_orange_diamond":{"a":"Large Orange Diamond","b":"1F536","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","jewel","gem"],"k":[28,4]},"flag-pm":{"a":"St. Pierre & Miquelon Flag","b":"1F1F5-1F1F2","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[4,8]},"flag-pn":{"a":"Pitcairn Islands Flag","b":"1F1F5-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,9]},"wind_blowing_face":{"a":"Wind Blowing Face","b":"1F32C-FE0F","c":"1F32C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[6,34],"o":7},"female_elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB-200D-2640-FE0F","non_qualified":"1F9DD-1F3FB-200D-2640","image":"1f9dd-1f3fb-200d-2640-fe0f.png","sheet_x":45,"sheet_y":51,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9DD-1F3FC-200D-2640-FE0F","non_qualified":"1F9DD-1F3FC-200D-2640","image":"1f9dd-1f3fc-200d-2640-fe0f.png","sheet_x":46,"sheet_y":0,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9DD-1F3FD-200D-2640-FE0F","non_qualified":"1F9DD-1F3FD-200D-2640","image":"1f9dd-1f3fd-200d-2640-fe0f.png","sheet_x":46,"sheet_y":1,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9DD-1F3FE-200D-2640-FE0F","non_qualified":"1F9DD-1F3FE-200D-2640","image":"1f9dd-1f3fe-200d-2640-fe0f.png","sheet_x":46,"sheet_y":2,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9DD-1F3FF-200D-2640-FE0F","non_qualified":"1F9DD-1F3FF-200D-2640","image":"1f9dd-1f3ff-200d-2640-fe0f.png","sheet_x":46,"sheet_y":3,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Female Elf","b":"1F9DD-200D-2640-FE0F","c":"1F9DD-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[45,50],"o":10},"large_blue_diamond":{"a":"Large Blue Diamond","b":"1F537","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","jewel","gem"],"k":[28,5]},"male_elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB-200D-2642-FE0F","non_qualified":"1F9DD-1F3FB-200D-2642","image":"1f9dd-1f3fb-200d-2642-fe0f.png","sheet_x":46,"sheet_y":5,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DD-1F3FB"},"1F3FC":{"unified":"1F9DD-1F3FC-200D-2642-FE0F","non_qualified":"1F9DD-1F3FC-200D-2642","image":"1f9dd-1f3fc-200d-2642-fe0f.png","sheet_x":46,"sheet_y":6,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DD-1F3FC"},"1F3FD":{"unified":"1F9DD-1F3FD-200D-2642-FE0F","non_qualified":"1F9DD-1F3FD-200D-2642","image":"1f9dd-1f3fd-200d-2642-fe0f.png","sheet_x":46,"sheet_y":7,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DD-1F3FD"},"1F3FE":{"unified":"1F9DD-1F3FE-200D-2642-FE0F","non_qualified":"1F9DD-1F3FE-200D-2642","image":"1f9dd-1f3fe-200d-2642-fe0f.png","sheet_x":46,"sheet_y":8,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DD-1F3FE"},"1F3FF":{"unified":"1F9DD-1F3FF-200D-2642-FE0F","non_qualified":"1F9DD-1F3FF-200D-2642","image":"1f9dd-1f3ff-200d-2642-fe0f.png","sheet_x":46,"sheet_y":9,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9DD-1F3FF"}},"obsoletes":"1F9DD","a":"Male Elf","b":"1F9DD-200D-2642-FE0F","c":"1F9DD-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,4],"o":10},"small_orange_diamond":{"a":"Small Orange Diamond","b":"1F538","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","jewel","gem"],"k":[28,6]},"flag-pr":{"a":"Puerto Rico Flag","b":"1F1F5-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,10]},"cyclone":{"a":"Cyclone","b":"1F300","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],"k":[5,44]},"rainbow":{"a":"Rainbow","b":"1F308","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["nature","happy","unicorn_face","photo","sky","spring"],"k":[6,0]},"small_blue_diamond":{"a":"Small Blue Diamond","b":"1F539","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","jewel","gem"],"k":[28,7]},"genie":{"obsoleted_by":"1F9DE-200D-2642-FE0F","a":"Genie","b":"1F9DE","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,18],"o":10},"flag-ps":{"a":"Palestinian Territories Flag","b":"1F1F5-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,11]},"small_red_triangle":{"a":"Up-Pointing Red Triangle","b":"1F53A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","direction","up","top"],"k":[28,8]},"closed_umbrella":{"a":"Closed Umbrella","b":"1F302","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["weather","rain","drizzle"],"k":[5,46]},"female_genie":{"a":"Female Genie","b":"1F9DE-200D-2640-FE0F","c":"1F9DE-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,16],"o":10},"flag-pt":{"a":"Portugal Flag","b":"1F1F5-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,12]},"flag-pw":{"a":"Palau Flag","b":"1F1F5-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,13]},"small_red_triangle_down":{"a":"Down-Pointing Red Triangle","b":"1F53B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","direction","bottom"],"k":[28,9]},"umbrella":{"a":"Umbrella","b":"2602-FE0F","c":"2602","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["rainy","weather","spring"],"k":[47,18],"o":1},"male_genie":{"obsoletes":"1F9DE","a":"Male Genie","b":"1F9DE-200D-2642-FE0F","c":"1F9DE-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,17],"o":10},"zombie":{"obsoleted_by":"1F9DF-200D-2642-FE0F","a":"Zombie","b":"1F9DF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,21],"o":10},"flag-py":{"a":"Paraguay Flag","b":"1F1F5-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,14]},"diamond_shape_with_a_dot_inside":{"a":"Diamond Shape with a Dot Inside","b":"1F4A0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["jewel","blue","gem","crystal","fancy"],"k":[25,6]},"umbrella_with_rain_drops":{"a":"Umbrella with Rain Drops","b":"2614","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[47,23],"o":4},"radio_button":{"a":"Radio Button","b":"1F518","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["input","old","music","circle"],"k":[27,26]},"female_zombie":{"a":"Female Zombie","b":"1F9DF-200D-2640-FE0F","c":"1F9DF-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,19],"o":10},"flag-qa":{"a":"Qatar Flag","b":"1F1F6-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,15]},"umbrella_on_ground":{"a":"Umbrella on Ground","b":"26F1-FE0F","c":"26F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[48,39],"o":5},"black_square_button":{"a":"Black Square Button","b":"1F532","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","input","frame"],"k":[28,0]},"zap":{"a":"High Voltage Sign","b":"26A1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["thunder","weather","lightning bolt","fast"],"k":[48,21],"o":4},"male_zombie":{"obsoletes":"1F9DF","a":"Male Zombie","b":"1F9DF-200D-2642-FE0F","c":"1F9DF-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,20],"o":10},"flag-re":{"a":"Réunion Flag","b":"1F1F7-1F1EA","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[4,16]},"flag-ro":{"a":"Romania Flag","b":"1F1F7-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,17]},"snowflake":{"a":"Snowflake","b":"2744-FE0F","c":"2744","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["winter","season","cold","weather","christmas","xmas"],"k":[49,51],"o":1},"white_square_button":{"a":"White Square Button","b":"1F533","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","input"],"k":[28,1]},"person_frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB","non_qualified":null,"image":"1f64d-1f3fb.png","sheet_x":33,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F64D-1F3FC","non_qualified":null,"image":"1f64d-1f3fc.png","sheet_x":33,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F64D-1F3FD","non_qualified":null,"image":"1f64d-1f3fd.png","sheet_x":33,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F64D-1F3FE","non_qualified":null,"image":"1f64d-1f3fe.png","sheet_x":33,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F64D-1F3FF","non_qualified":null,"image":"1f64d-1f3ff.png","sheet_x":33,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F64D-200D-2640-FE0F","a":"Person Frowning","b":"1F64D","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[33,30]},"flag-rs":{"a":"Serbia Flag","b":"1F1F7-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,18]},"man-frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB-200D-2642-FE0F","non_qualified":"1F64D-1F3FB-200D-2642","image":"1f64d-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F64D-1F3FC-200D-2642-FE0F","non_qualified":"1F64D-1F3FC-200D-2642","image":"1f64d-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F64D-1F3FD-200D-2642-FE0F","non_qualified":"1F64D-1F3FD-200D-2642","image":"1f64d-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F64D-1F3FE-200D-2642-FE0F","non_qualified":"1F64D-1F3FE-200D-2642","image":"1f64d-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F64D-1F3FF-200D-2642-FE0F","non_qualified":"1F64D-1F3FF-200D-2642","image":"1f64d-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Frowning","b":"1F64D-200D-2642-FE0F","c":"1F64D-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[33,24]},"white_circle":{"a":"Medium White Circle","b":"26AA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","round"],"k":[48,22],"o":4},"snowman":{"a":"Snowman","b":"2603-FE0F","c":"2603","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["winter","season","cold","weather","christmas","xmas","frozen","without_snow"],"k":[47,19],"o":1},"snowman_without_snow":{"a":"Snowman Without Snow","b":"26C4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[48,28],"o":5},"ru":{"a":"Russia Flag","b":"1F1F7-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["russian","federation","flag","nation","country","banner"],"k":[4,19],"n":["flag-ru"]},"black_circle":{"a":"Medium Black Circle","b":"26AB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","button","round"],"k":[48,23],"o":4},"woman-frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB-200D-2640-FE0F","non_qualified":"1F64D-1F3FB-200D-2640","image":"1f64d-1f3fb-200d-2640-fe0f.png","sheet_x":33,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F64D-1F3FC-200D-2640-FE0F","non_qualified":"1F64D-1F3FC-200D-2640","image":"1f64d-1f3fc-200d-2640-fe0f.png","sheet_x":33,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F64D-1F3FD-200D-2640-FE0F","non_qualified":"1F64D-1F3FD-200D-2640","image":"1f64d-1f3fd-200d-2640-fe0f.png","sheet_x":33,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F64D-1F3FE-200D-2640-FE0F","non_qualified":"1F64D-1F3FE-200D-2640","image":"1f64d-1f3fe-200d-2640-fe0f.png","sheet_x":33,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F64D-1F3FF-200D-2640-FE0F","non_qualified":"1F64D-1F3FF-200D-2640","image":"1f64d-1f3ff-200d-2640-fe0f.png","sheet_x":33,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F64D","a":"Woman Frowning","b":"1F64D-200D-2640-FE0F","c":"1F64D-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[33,18]},"flag-rw":{"a":"Rwanda Flag","b":"1F1F7-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,20]},"comet":{"a":"Comet","b":"2604-FE0F","c":"2604","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["space"],"k":[47,20],"o":1},"person_with_pouting_face":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB","non_qualified":null,"image":"1f64e-1f3fb.png","sheet_x":33,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F64E-1F3FC","non_qualified":null,"image":"1f64e-1f3fc.png","sheet_x":33,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F64E-1F3FD","non_qualified":null,"image":"1f64e-1f3fd.png","sheet_x":33,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F64E-1F3FE","non_qualified":null,"image":"1f64e-1f3fe.png","sheet_x":34,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F64E-1F3FF","non_qualified":null,"image":"1f64e-1f3ff.png","sheet_x":34,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F64E-200D-2640-FE0F","a":"Person with Pouting Face","b":"1F64E","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[33,48]},"red_circle":{"a":"Large Red Circle","b":"1F534","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","error","danger"],"k":[28,2]},"large_blue_circle":{"a":"Large Blue Circle","b":"1F535","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shape","icon","button"],"k":[28,3]},"man-pouting":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB-200D-2642-FE0F","non_qualified":"1F64E-1F3FB-200D-2642","image":"1f64e-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F64E-1F3FC-200D-2642-FE0F","non_qualified":"1F64E-1F3FC-200D-2642","image":"1f64e-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F64E-1F3FD-200D-2642-FE0F","non_qualified":"1F64E-1F3FD-200D-2642","image":"1f64e-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F64E-1F3FE-200D-2642-FE0F","non_qualified":"1F64E-1F3FE-200D-2642","image":"1f64e-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F64E-1F3FF-200D-2642-FE0F","non_qualified":"1F64E-1F3FF-200D-2642","image":"1f64e-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Pouting","b":"1F64E-200D-2642-FE0F","c":"1F64E-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[33,42]},"flag-sa":{"a":"Saudi Arabia Flag","b":"1F1F8-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,21]},"fire":{"a":"Fire","b":"1F525","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["hot","cook","flame"],"k":[27,39]},"woman-pouting":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB-200D-2640-FE0F","non_qualified":"1F64E-1F3FB-200D-2640","image":"1f64e-1f3fb-200d-2640-fe0f.png","sheet_x":33,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F64E-1F3FC-200D-2640-FE0F","non_qualified":"1F64E-1F3FC-200D-2640","image":"1f64e-1f3fc-200d-2640-fe0f.png","sheet_x":33,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F64E-1F3FD-200D-2640-FE0F","non_qualified":"1F64E-1F3FD-200D-2640","image":"1f64e-1f3fd-200d-2640-fe0f.png","sheet_x":33,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F64E-1F3FE-200D-2640-FE0F","non_qualified":"1F64E-1F3FE-200D-2640","image":"1f64e-1f3fe-200d-2640-fe0f.png","sheet_x":33,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F64E-1F3FF-200D-2640-FE0F","non_qualified":"1F64E-1F3FF-200D-2640","image":"1f64e-1f3ff-200d-2640-fe0f.png","sheet_x":33,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F64E","a":"Woman Pouting","b":"1F64E-200D-2640-FE0F","c":"1F64E-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[33,36]},"flag-sb":{"a":"Solomon Islands Flag","b":"1F1F8-1F1E7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,22]},"droplet":{"a":"Droplet","b":"1F4A7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["water","drip","faucet","spring"],"k":[25,13]},"no_good":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB","non_qualified":null,"image":"1f645-1f3fb.png","sheet_x":32,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F645-1F3FC","non_qualified":null,"image":"1f645-1f3fc.png","sheet_x":32,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F645-1F3FD","non_qualified":null,"image":"1f645-1f3fd.png","sheet_x":32,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F645-1F3FE","non_qualified":null,"image":"1f645-1f3fe.png","sheet_x":32,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F645-1F3FF","non_qualified":null,"image":"1f645-1f3ff.png","sheet_x":32,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F645-200D-2640-FE0F","a":"Face with No Good Gesture","b":"1F645","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[32,1]},"flag-sc":{"a":"Seychelles Flag","b":"1F1F8-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,23]},"ocean":{"a":"Water Wave","b":"1F30A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sea","water","wave","nature","tsunami","disaster"],"k":[6,2]},"man-gesturing-no":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB-200D-2642-FE0F","non_qualified":"1F645-1F3FB-200D-2642","image":"1f645-1f3fb-200d-2642-fe0f.png","sheet_x":31,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F645-1F3FC-200D-2642-FE0F","non_qualified":"1F645-1F3FC-200D-2642","image":"1f645-1f3fc-200d-2642-fe0f.png","sheet_x":31,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F645-1F3FD-200D-2642-FE0F","non_qualified":"1F645-1F3FD-200D-2642","image":"1f645-1f3fd-200d-2642-fe0f.png","sheet_x":31,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F645-1F3FE-200D-2642-FE0F","non_qualified":"1F645-1F3FE-200D-2642","image":"1f645-1f3fe-200d-2642-fe0f.png","sheet_x":31,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F645-1F3FF-200D-2642-FE0F","non_qualified":"1F645-1F3FF-200D-2642","image":"1f645-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Gesturing No","b":"1F645-200D-2642-FE0F","c":"1F645-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[31,47]},"flag-sd":{"a":"Sudan Flag","b":"1F1F8-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,24]},"woman-gesturing-no":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB-200D-2640-FE0F","non_qualified":"1F645-1F3FB-200D-2640","image":"1f645-1f3fb-200d-2640-fe0f.png","sheet_x":31,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F645-1F3FC-200D-2640-FE0F","non_qualified":"1F645-1F3FC-200D-2640","image":"1f645-1f3fc-200d-2640-fe0f.png","sheet_x":31,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F645-1F3FD-200D-2640-FE0F","non_qualified":"1F645-1F3FD-200D-2640","image":"1f645-1f3fd-200d-2640-fe0f.png","sheet_x":31,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F645-1F3FE-200D-2640-FE0F","non_qualified":"1F645-1F3FE-200D-2640","image":"1f645-1f3fe-200d-2640-fe0f.png","sheet_x":31,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F645-1F3FF-200D-2640-FE0F","non_qualified":"1F645-1F3FF-200D-2640","image":"1f645-1f3ff-200d-2640-fe0f.png","sheet_x":31,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F645","a":"Woman Gesturing No","b":"1F645-200D-2640-FE0F","c":"1F645-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[31,41]},"flag-se":{"a":"Sweden Flag","b":"1F1F8-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,25]},"flag-sg":{"a":"Singapore Flag","b":"1F1F8-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,26]},"ok_woman":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB","non_qualified":null,"image":"1f646-1f3fb.png","sheet_x":32,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F646-1F3FC","non_qualified":null,"image":"1f646-1f3fc.png","sheet_x":32,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F646-1F3FD","non_qualified":null,"image":"1f646-1f3fd.png","sheet_x":32,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F646-1F3FE","non_qualified":null,"image":"1f646-1f3fe.png","sheet_x":32,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F646-1F3FF","non_qualified":null,"image":"1f646-1f3ff.png","sheet_x":32,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F646-200D-2640-FE0F","a":"Face with Ok Gesture","b":"1F646","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"j":["women","girl","female","pink","human","woman"],"k":[32,19]},"flag-sh":{"a":"St. Helena Flag","b":"1F1F8-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,27]},"man-gesturing-ok":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB-200D-2642-FE0F","non_qualified":"1F646-1F3FB-200D-2642","image":"1f646-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F646-1F3FC-200D-2642-FE0F","non_qualified":"1F646-1F3FC-200D-2642","image":"1f646-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F646-1F3FD-200D-2642-FE0F","non_qualified":"1F646-1F3FD-200D-2642","image":"1f646-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F646-1F3FE-200D-2642-FE0F","non_qualified":"1F646-1F3FE-200D-2642","image":"1f646-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F646-1F3FF-200D-2642-FE0F","non_qualified":"1F646-1F3FF-200D-2642","image":"1f646-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Gesturing Ok","b":"1F646-200D-2642-FE0F","c":"1F646-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[32,13]},"flag-si":{"a":"Slovenia Flag","b":"1F1F8-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,28]},"woman-gesturing-ok":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB-200D-2640-FE0F","non_qualified":"1F646-1F3FB-200D-2640","image":"1f646-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F646-1F3FC-200D-2640-FE0F","non_qualified":"1F646-1F3FC-200D-2640","image":"1f646-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F646-1F3FD-200D-2640-FE0F","non_qualified":"1F646-1F3FD-200D-2640","image":"1f646-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F646-1F3FE-200D-2640-FE0F","non_qualified":"1F646-1F3FE-200D-2640","image":"1f646-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F646-1F3FF-200D-2640-FE0F","non_qualified":"1F646-1F3FF-200D-2640","image":"1f646-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F646","a":"Woman Gesturing Ok","b":"1F646-200D-2640-FE0F","c":"1F646-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[32,7]},"information_desk_person":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB","non_qualified":null,"image":"1f481-1f3fb.png","sheet_x":23,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F481-1F3FC","non_qualified":null,"image":"1f481-1f3fc.png","sheet_x":23,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F481-1F3FD","non_qualified":null,"image":"1f481-1f3fd.png","sheet_x":23,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F481-1F3FE","non_qualified":null,"image":"1f481-1f3fe.png","sheet_x":23,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F481-1F3FF","non_qualified":null,"image":"1f481-1f3ff.png","sheet_x":23,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F481-200D-2640-FE0F","a":"Information Desk Person","b":"1F481","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[23,13]},"flag-sj":{"a":"Svalbard & Jan Mayen Flag","b":"1F1F8-1F1EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,29]},"man-tipping-hand":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB-200D-2642-FE0F","non_qualified":"1F481-1F3FB-200D-2642","image":"1f481-1f3fb-200d-2642-fe0f.png","sheet_x":23,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F481-1F3FC-200D-2642-FE0F","non_qualified":"1F481-1F3FC-200D-2642","image":"1f481-1f3fc-200d-2642-fe0f.png","sheet_x":23,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F481-1F3FD-200D-2642-FE0F","non_qualified":"1F481-1F3FD-200D-2642","image":"1f481-1f3fd-200d-2642-fe0f.png","sheet_x":23,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F481-1F3FE-200D-2642-FE0F","non_qualified":"1F481-1F3FE-200D-2642","image":"1f481-1f3fe-200d-2642-fe0f.png","sheet_x":23,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F481-1F3FF-200D-2642-FE0F","non_qualified":"1F481-1F3FF-200D-2642","image":"1f481-1f3ff-200d-2642-fe0f.png","sheet_x":23,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Tipping Hand","b":"1F481-200D-2642-FE0F","c":"1F481-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[23,7]},"flag-sk":{"a":"Slovakia Flag","b":"1F1F8-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,30]},"flag-sl":{"a":"Sierra Leone Flag","b":"1F1F8-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,31]},"woman-tipping-hand":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB-200D-2640-FE0F","non_qualified":"1F481-1F3FB-200D-2640","image":"1f481-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F481-1F3FC-200D-2640-FE0F","non_qualified":"1F481-1F3FC-200D-2640","image":"1f481-1f3fc-200d-2640-fe0f.png","sheet_x":23,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F481-1F3FD-200D-2640-FE0F","non_qualified":"1F481-1F3FD-200D-2640","image":"1f481-1f3fd-200d-2640-fe0f.png","sheet_x":23,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F481-1F3FE-200D-2640-FE0F","non_qualified":"1F481-1F3FE-200D-2640","image":"1f481-1f3fe-200d-2640-fe0f.png","sheet_x":23,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F481-1F3FF-200D-2640-FE0F","non_qualified":"1F481-1F3FF-200D-2640","image":"1f481-1f3ff-200d-2640-fe0f.png","sheet_x":23,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F481","a":"Woman Tipping Hand","b":"1F481-200D-2640-FE0F","c":"1F481-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[23,1]},"flag-sm":{"a":"San Marino Flag","b":"1F1F8-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,32]},"raising_hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB","non_qualified":null,"image":"1f64b-1f3fb.png","sheet_x":33,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F64B-1F3FC","non_qualified":null,"image":"1f64b-1f3fc.png","sheet_x":33,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F64B-1F3FD","non_qualified":null,"image":"1f64b-1f3fd.png","sheet_x":33,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F64B-1F3FE","non_qualified":null,"image":"1f64b-1f3fe.png","sheet_x":33,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F64B-1F3FF","non_qualified":null,"image":"1f64b-1f3ff.png","sheet_x":33,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F64B-200D-2640-FE0F","a":"Happy Person Raising One Hand","b":"1F64B","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[33,6]},"flag-sn":{"a":"Senegal Flag","b":"1F1F8-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,33]},"man-raising-hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB-200D-2642-FE0F","non_qualified":"1F64B-1F3FB-200D-2642","image":"1f64b-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F64B-1F3FC-200D-2642-FE0F","non_qualified":"1F64B-1F3FC-200D-2642","image":"1f64b-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F64B-1F3FD-200D-2642-FE0F","non_qualified":"1F64B-1F3FD-200D-2642","image":"1f64b-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F64B-1F3FE-200D-2642-FE0F","non_qualified":"1F64B-1F3FE-200D-2642","image":"1f64b-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F64B-1F3FF-200D-2642-FE0F","non_qualified":"1F64B-1F3FF-200D-2642","image":"1f64b-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Raising Hand","b":"1F64B-200D-2642-FE0F","c":"1F64B-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[33,0]},"flag-so":{"a":"Somalia Flag","b":"1F1F8-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,34]},"woman-raising-hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB-200D-2640-FE0F","non_qualified":"1F64B-1F3FB-200D-2640","image":"1f64b-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F64B-1F3FC-200D-2640-FE0F","non_qualified":"1F64B-1F3FC-200D-2640","image":"1f64b-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F64B-1F3FD-200D-2640-FE0F","non_qualified":"1F64B-1F3FD-200D-2640","image":"1f64b-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F64B-1F3FE-200D-2640-FE0F","non_qualified":"1F64B-1F3FE-200D-2640","image":"1f64b-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F64B-1F3FF-200D-2640-FE0F","non_qualified":"1F64B-1F3FF-200D-2640","image":"1f64b-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F64B","a":"Woman Raising Hand","b":"1F64B-200D-2640-FE0F","c":"1F64B-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[32,46]},"flag-sr":{"a":"Suriname Flag","b":"1F1F8-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,35]},"bow":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB","non_qualified":null,"image":"1f647-1f3fb.png","sheet_x":32,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F647-1F3FC","non_qualified":null,"image":"1f647-1f3fc.png","sheet_x":32,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F647-1F3FD","non_qualified":null,"image":"1f647-1f3fd.png","sheet_x":32,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F647-1F3FE","non_qualified":null,"image":"1f647-1f3fe.png","sheet_x":32,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F647-1F3FF","non_qualified":null,"image":"1f647-1f3ff.png","sheet_x":32,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F647-200D-2642-FE0F","a":"Person Bowing Deeply","b":"1F647","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[32,37]},"man-bowing":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB-200D-2642-FE0F","non_qualified":"1F647-1F3FB-200D-2642","image":"1f647-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F647-1F3FC-200D-2642-FE0F","non_qualified":"1F647-1F3FC-200D-2642","image":"1f647-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F647-1F3FD-200D-2642-FE0F","non_qualified":"1F647-1F3FD-200D-2642","image":"1f647-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F647-1F3FE-200D-2642-FE0F","non_qualified":"1F647-1F3FE-200D-2642","image":"1f647-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F647-1F3FF-200D-2642-FE0F","non_qualified":"1F647-1F3FF-200D-2642","image":"1f647-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F647","a":"Man Bowing","b":"1F647-200D-2642-FE0F","c":"1F647-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[32,31]},"flag-ss":{"a":"South Sudan Flag","b":"1F1F8-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,36]},"woman-bowing":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB-200D-2640-FE0F","non_qualified":"1F647-1F3FB-200D-2640","image":"1f647-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F647-1F3FC-200D-2640-FE0F","non_qualified":"1F647-1F3FC-200D-2640","image":"1f647-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F647-1F3FD-200D-2640-FE0F","non_qualified":"1F647-1F3FD-200D-2640","image":"1f647-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F647-1F3FE-200D-2640-FE0F","non_qualified":"1F647-1F3FE-200D-2640","image":"1f647-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F647-1F3FF-200D-2640-FE0F","non_qualified":"1F647-1F3FF-200D-2640","image":"1f647-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Bowing","b":"1F647-200D-2640-FE0F","c":"1F647-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[32,25]},"flag-st":{"a":"São Tomé & Príncipe Flag","b":"1F1F8-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,37]},"face_palm":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB","non_qualified":null,"image":"1f926-1f3fb.png","sheet_x":38,"sheet_y":42,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F926-1F3FC","non_qualified":null,"image":"1f926-1f3fc.png","sheet_x":38,"sheet_y":43,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F926-1F3FD","non_qualified":null,"image":"1f926-1f3fd.png","sheet_x":38,"sheet_y":44,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F926-1F3FE","non_qualified":null,"image":"1f926-1f3fe.png","sheet_x":38,"sheet_y":45,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F926-1F3FF","non_qualified":null,"image":"1f926-1f3ff.png","sheet_x":38,"sheet_y":46,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Face Palm","b":"1F926","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[38,41],"o":9},"flag-sv":{"a":"El Salvador Flag","b":"1F1F8-1F1FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,38]},"man-facepalming":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB-200D-2642-FE0F","non_qualified":"1F926-1F3FB-200D-2642","image":"1f926-1f3fb-200d-2642-fe0f.png","sheet_x":38,"sheet_y":36,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F926-1F3FC-200D-2642-FE0F","non_qualified":"1F926-1F3FC-200D-2642","image":"1f926-1f3fc-200d-2642-fe0f.png","sheet_x":38,"sheet_y":37,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F926-1F3FD-200D-2642-FE0F","non_qualified":"1F926-1F3FD-200D-2642","image":"1f926-1f3fd-200d-2642-fe0f.png","sheet_x":38,"sheet_y":38,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F926-1F3FE-200D-2642-FE0F","non_qualified":"1F926-1F3FE-200D-2642","image":"1f926-1f3fe-200d-2642-fe0f.png","sheet_x":38,"sheet_y":39,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F926-1F3FF-200D-2642-FE0F","non_qualified":"1F926-1F3FF-200D-2642","image":"1f926-1f3ff-200d-2642-fe0f.png","sheet_x":38,"sheet_y":40,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Facepalming","b":"1F926-200D-2642-FE0F","c":"1F926-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,35],"o":9},"flag-sx":{"a":"Sint Maarten Flag","b":"1F1F8-1F1FD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,39]},"flag-sy":{"a":"Syria Flag","b":"1F1F8-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,40]},"woman-facepalming":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB-200D-2640-FE0F","non_qualified":"1F926-1F3FB-200D-2640","image":"1f926-1f3fb-200d-2640-fe0f.png","sheet_x":38,"sheet_y":30,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F926-1F3FC-200D-2640-FE0F","non_qualified":"1F926-1F3FC-200D-2640","image":"1f926-1f3fc-200d-2640-fe0f.png","sheet_x":38,"sheet_y":31,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F926-1F3FD-200D-2640-FE0F","non_qualified":"1F926-1F3FD-200D-2640","image":"1f926-1f3fd-200d-2640-fe0f.png","sheet_x":38,"sheet_y":32,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F926-1F3FE-200D-2640-FE0F","non_qualified":"1F926-1F3FE-200D-2640","image":"1f926-1f3fe-200d-2640-fe0f.png","sheet_x":38,"sheet_y":33,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F926-1F3FF-200D-2640-FE0F","non_qualified":"1F926-1F3FF-200D-2640","image":"1f926-1f3ff-200d-2640-fe0f.png","sheet_x":38,"sheet_y":34,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Facepalming","b":"1F926-200D-2640-FE0F","c":"1F926-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,29],"o":9},"shrug":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB","non_qualified":null,"image":"1f937-1f3fb.png","sheet_x":40,"sheet_y":7,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F937-1F3FC","non_qualified":null,"image":"1f937-1f3fc.png","sheet_x":40,"sheet_y":8,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F937-1F3FD","non_qualified":null,"image":"1f937-1f3fd.png","sheet_x":40,"sheet_y":9,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F937-1F3FE","non_qualified":null,"image":"1f937-1f3fe.png","sheet_x":40,"sheet_y":10,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F937-1F3FF","non_qualified":null,"image":"1f937-1f3ff.png","sheet_x":40,"sheet_y":11,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Shrug","b":"1F937","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[40,6],"o":9},"flag-sz":{"a":"Swaziland Flag","b":"1F1F8-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,41]},"flag-ta":{"a":"Tristan Da Cunha Flag","b":"1F1F9-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,42]},"man-shrugging":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB-200D-2642-FE0F","non_qualified":"1F937-1F3FB-200D-2642","image":"1f937-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":1,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F937-1F3FC-200D-2642-FE0F","non_qualified":"1F937-1F3FC-200D-2642","image":"1f937-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":2,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F937-1F3FD-200D-2642-FE0F","non_qualified":"1F937-1F3FD-200D-2642","image":"1f937-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":3,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F937-1F3FE-200D-2642-FE0F","non_qualified":"1F937-1F3FE-200D-2642","image":"1f937-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":4,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F937-1F3FF-200D-2642-FE0F","non_qualified":"1F937-1F3FF-200D-2642","image":"1f937-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":5,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Shrugging","b":"1F937-200D-2642-FE0F","c":"1F937-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,0],"o":9},"woman-shrugging":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB-200D-2640-FE0F","non_qualified":"1F937-1F3FB-200D-2640","image":"1f937-1f3fb-200d-2640-fe0f.png","sheet_x":39,"sheet_y":47,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F937-1F3FC-200D-2640-FE0F","non_qualified":"1F937-1F3FC-200D-2640","image":"1f937-1f3fc-200d-2640-fe0f.png","sheet_x":39,"sheet_y":48,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F937-1F3FD-200D-2640-FE0F","non_qualified":"1F937-1F3FD-200D-2640","image":"1f937-1f3fd-200d-2640-fe0f.png","sheet_x":39,"sheet_y":49,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F937-1F3FE-200D-2640-FE0F","non_qualified":"1F937-1F3FE-200D-2640","image":"1f937-1f3fe-200d-2640-fe0f.png","sheet_x":39,"sheet_y":50,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F937-1F3FF-200D-2640-FE0F","non_qualified":"1F937-1F3FF-200D-2640","image":"1f937-1f3ff-200d-2640-fe0f.png","sheet_x":39,"sheet_y":51,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Shrugging","b":"1F937-200D-2640-FE0F","c":"1F937-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[39,46],"o":9},"flag-tc":{"a":"Turks & Caicos Islands Flag","b":"1F1F9-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,43]},"massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB","non_qualified":null,"image":"1f486-1f3fb.png","sheet_x":24,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F486-1F3FC","non_qualified":null,"image":"1f486-1f3fc.png","sheet_x":24,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F486-1F3FD","non_qualified":null,"image":"1f486-1f3fd.png","sheet_x":24,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F486-1F3FE","non_qualified":null,"image":"1f486-1f3fe.png","sheet_x":24,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F486-1F3FF","non_qualified":null,"image":"1f486-1f3ff.png","sheet_x":24,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F486-200D-2640-FE0F","a":"Face Massage","b":"1F486","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[24,10]},"flag-td":{"a":"Chad Flag","b":"1F1F9-1F1E9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,44]},"man-getting-massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB-200D-2642-FE0F","non_qualified":"1F486-1F3FB-200D-2642","image":"1f486-1f3fb-200d-2642-fe0f.png","sheet_x":24,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F486-1F3FC-200D-2642-FE0F","non_qualified":"1F486-1F3FC-200D-2642","image":"1f486-1f3fc-200d-2642-fe0f.png","sheet_x":24,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F486-1F3FD-200D-2642-FE0F","non_qualified":"1F486-1F3FD-200D-2642","image":"1f486-1f3fd-200d-2642-fe0f.png","sheet_x":24,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F486-1F3FE-200D-2642-FE0F","non_qualified":"1F486-1F3FE-200D-2642","image":"1f486-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F486-1F3FF-200D-2642-FE0F","non_qualified":"1F486-1F3FF-200D-2642","image":"1f486-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Getting Massage","b":"1F486-200D-2642-FE0F","c":"1F486-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[24,4]},"flag-tf":{"a":"French Southern Territories Flag","b":"1F1F9-1F1EB","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[4,45]},"woman-getting-massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB-200D-2640-FE0F","non_qualified":"1F486-1F3FB-200D-2640","image":"1f486-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F486-1F3FC-200D-2640-FE0F","non_qualified":"1F486-1F3FC-200D-2640","image":"1f486-1f3fc-200d-2640-fe0f.png","sheet_x":24,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F486-1F3FD-200D-2640-FE0F","non_qualified":"1F486-1F3FD-200D-2640","image":"1f486-1f3fd-200d-2640-fe0f.png","sheet_x":24,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F486-1F3FE-200D-2640-FE0F","non_qualified":"1F486-1F3FE-200D-2640","image":"1f486-1f3fe-200d-2640-fe0f.png","sheet_x":24,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F486-1F3FF-200D-2640-FE0F","non_qualified":"1F486-1F3FF-200D-2640","image":"1f486-1f3ff-200d-2640-fe0f.png","sheet_x":24,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F486","a":"Woman Getting Massage","b":"1F486-200D-2640-FE0F","c":"1F486-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[23,50]},"flag-tg":{"a":"Togo Flag","b":"1F1F9-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,46]},"haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB","non_qualified":null,"image":"1f487-1f3fb.png","sheet_x":24,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F487-1F3FC","non_qualified":null,"image":"1f487-1f3fc.png","sheet_x":24,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F487-1F3FD","non_qualified":null,"image":"1f487-1f3fd.png","sheet_x":24,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F487-1F3FE","non_qualified":null,"image":"1f487-1f3fe.png","sheet_x":24,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F487-1F3FF","non_qualified":null,"image":"1f487-1f3ff.png","sheet_x":24,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F487-200D-2640-FE0F","a":"Haircut","b":"1F487","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[24,28]},"flag-th":{"a":"Thailand Flag","b":"1F1F9-1F1ED","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,47]},"man-getting-haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB-200D-2642-FE0F","non_qualified":"1F487-1F3FB-200D-2642","image":"1f487-1f3fb-200d-2642-fe0f.png","sheet_x":24,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F487-1F3FC-200D-2642-FE0F","non_qualified":"1F487-1F3FC-200D-2642","image":"1f487-1f3fc-200d-2642-fe0f.png","sheet_x":24,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F487-1F3FD-200D-2642-FE0F","non_qualified":"1F487-1F3FD-200D-2642","image":"1f487-1f3fd-200d-2642-fe0f.png","sheet_x":24,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F487-1F3FE-200D-2642-FE0F","non_qualified":"1F487-1F3FE-200D-2642","image":"1f487-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F487-1F3FF-200D-2642-FE0F","non_qualified":"1F487-1F3FF-200D-2642","image":"1f487-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Getting Haircut","b":"1F487-200D-2642-FE0F","c":"1F487-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[24,22]},"flag-tj":{"a":"Tajikistan Flag","b":"1F1F9-1F1EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,48]},"flag-tk":{"a":"Tokelau Flag","b":"1F1F9-1F1F0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,49]},"woman-getting-haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB-200D-2640-FE0F","non_qualified":"1F487-1F3FB-200D-2640","image":"1f487-1f3fb-200d-2640-fe0f.png","sheet_x":24,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F487-1F3FC-200D-2640-FE0F","non_qualified":"1F487-1F3FC-200D-2640","image":"1f487-1f3fc-200d-2640-fe0f.png","sheet_x":24,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F487-1F3FD-200D-2640-FE0F","non_qualified":"1F487-1F3FD-200D-2640","image":"1f487-1f3fd-200d-2640-fe0f.png","sheet_x":24,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F487-1F3FE-200D-2640-FE0F","non_qualified":"1F487-1F3FE-200D-2640","image":"1f487-1f3fe-200d-2640-fe0f.png","sheet_x":24,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F487-1F3FF-200D-2640-FE0F","non_qualified":"1F487-1F3FF-200D-2640","image":"1f487-1f3ff-200d-2640-fe0f.png","sheet_x":24,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F487","a":"Woman Getting Haircut","b":"1F487-200D-2640-FE0F","c":"1F487-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[24,16]},"walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB","non_qualified":null,"image":"1f6b6-1f3fb.png","sheet_x":36,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F6B6-1F3FC","non_qualified":null,"image":"1f6b6-1f3fc.png","sheet_x":36,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F6B6-1F3FD","non_qualified":null,"image":"1f6b6-1f3fd.png","sheet_x":36,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F6B6-1F3FE","non_qualified":null,"image":"1f6b6-1f3fe.png","sheet_x":36,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F6B6-1F3FF","non_qualified":null,"image":"1f6b6-1f3ff.png","sheet_x":36,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F6B6-200D-2642-FE0F","a":"Pedestrian","b":"1F6B6","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[36,21]},"flag-tl":{"a":"Timor-Leste Flag","b":"1F1F9-1F1F1","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,50]},"man-walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB-200D-2642-FE0F","non_qualified":"1F6B6-1F3FB-200D-2642","image":"1f6b6-1f3fb-200d-2642-fe0f.png","sheet_x":36,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6B6-1F3FC-200D-2642-FE0F","non_qualified":"1F6B6-1F3FC-200D-2642","image":"1f6b6-1f3fc-200d-2642-fe0f.png","sheet_x":36,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6B6-1F3FD-200D-2642-FE0F","non_qualified":"1F6B6-1F3FD-200D-2642","image":"1f6b6-1f3fd-200d-2642-fe0f.png","sheet_x":36,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6B6-1F3FE-200D-2642-FE0F","non_qualified":"1F6B6-1F3FE-200D-2642","image":"1f6b6-1f3fe-200d-2642-fe0f.png","sheet_x":36,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6B6-1F3FF-200D-2642-FE0F","non_qualified":"1F6B6-1F3FF-200D-2642","image":"1f6b6-1f3ff-200d-2642-fe0f.png","sheet_x":36,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F6B6","a":"Man Walking","b":"1F6B6-200D-2642-FE0F","c":"1F6B6-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[36,15]},"flag-tm":{"a":"Turkmenistan Flag","b":"1F1F9-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[4,51]},"woman-walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB-200D-2640-FE0F","non_qualified":"1F6B6-1F3FB-200D-2640","image":"1f6b6-1f3fb-200d-2640-fe0f.png","sheet_x":36,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6B6-1F3FC-200D-2640-FE0F","non_qualified":"1F6B6-1F3FC-200D-2640","image":"1f6b6-1f3fc-200d-2640-fe0f.png","sheet_x":36,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6B6-1F3FD-200D-2640-FE0F","non_qualified":"1F6B6-1F3FD-200D-2640","image":"1f6b6-1f3fd-200d-2640-fe0f.png","sheet_x":36,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6B6-1F3FE-200D-2640-FE0F","non_qualified":"1F6B6-1F3FE-200D-2640","image":"1f6b6-1f3fe-200d-2640-fe0f.png","sheet_x":36,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6B6-1F3FF-200D-2640-FE0F","non_qualified":"1F6B6-1F3FF-200D-2640","image":"1f6b6-1f3ff-200d-2640-fe0f.png","sheet_x":36,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Walking","b":"1F6B6-200D-2640-FE0F","c":"1F6B6-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[36,9]},"flag-tn":{"a":"Tunisia Flag","b":"1F1F9-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,0]},"runner":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB","non_qualified":null,"image":"1f3c3-1f3fb.png","sheet_x":9,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F3C3-1F3FC","non_qualified":null,"image":"1f3c3-1f3fc.png","sheet_x":9,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F3C3-1F3FD","non_qualified":null,"image":"1f3c3-1f3fd.png","sheet_x":9,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F3C3-1F3FE","non_qualified":null,"image":"1f3c3-1f3fe.png","sheet_x":9,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F3C3-1F3FF","non_qualified":null,"image":"1f3c3-1f3ff.png","sheet_x":9,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F3C3-200D-2642-FE0F","a":"Runner","b":"1F3C3","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[9,46],"n":["running"]},"flag-to":{"a":"Tonga Flag","b":"1F1F9-1F1F4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,1]},"man-running":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB-200D-2642-FE0F","non_qualified":"1F3C3-1F3FB-200D-2642","image":"1f3c3-1f3fb-200d-2642-fe0f.png","sheet_x":9,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3C3-1F3FC-200D-2642-FE0F","non_qualified":"1F3C3-1F3FC-200D-2642","image":"1f3c3-1f3fc-200d-2642-fe0f.png","sheet_x":9,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3C3-1F3FD-200D-2642-FE0F","non_qualified":"1F3C3-1F3FD-200D-2642","image":"1f3c3-1f3fd-200d-2642-fe0f.png","sheet_x":9,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3C3-1F3FE-200D-2642-FE0F","non_qualified":"1F3C3-1F3FE-200D-2642","image":"1f3c3-1f3fe-200d-2642-fe0f.png","sheet_x":9,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3C3-1F3FF-200D-2642-FE0F","non_qualified":"1F3C3-1F3FF-200D-2642","image":"1f3c3-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F3C3","a":"Man Running","b":"1F3C3-200D-2642-FE0F","c":"1F3C3-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[9,40]},"flag-tr":{"a":"Turkey Flag","b":"1F1F9-1F1F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,2]},"flag-tt":{"a":"Trinidad & Tobago Flag","b":"1F1F9-1F1F9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,3]},"woman-running":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB-200D-2640-FE0F","non_qualified":"1F3C3-1F3FB-200D-2640","image":"1f3c3-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3C3-1F3FC-200D-2640-FE0F","non_qualified":"1F3C3-1F3FC-200D-2640","image":"1f3c3-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3C3-1F3FD-200D-2640-FE0F","non_qualified":"1F3C3-1F3FD-200D-2640","image":"1f3c3-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3C3-1F3FE-200D-2640-FE0F","non_qualified":"1F3C3-1F3FE-200D-2640","image":"1f3c3-1f3fe-200d-2640-fe0f.png","sheet_x":9,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3C3-1F3FF-200D-2640-FE0F","non_qualified":"1F3C3-1F3FF-200D-2640","image":"1f3c3-1f3ff-200d-2640-fe0f.png","sheet_x":9,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Running","b":"1F3C3-200D-2640-FE0F","c":"1F3C3-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[9,34]},"flag-tv":{"a":"Tuvalu Flag","b":"1F1F9-1F1FB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,4]},"dancer":{"skin_variations":{"1F3FB":{"unified":"1F483-1F3FB","non_qualified":null,"image":"1f483-1f3fb.png","sheet_x":23,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F483-1F3FC","non_qualified":null,"image":"1f483-1f3fc.png","sheet_x":23,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F483-1F3FD","non_qualified":null,"image":"1f483-1f3fd.png","sheet_x":23,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F483-1F3FE","non_qualified":null,"image":"1f483-1f3fe.png","sheet_x":23,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F483-1F3FF","non_qualified":null,"image":"1f483-1f3ff.png","sheet_x":23,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Dancer","b":"1F483","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["female","girl","woman","fun"],"k":[23,37]},"flag-tw":{"a":"Taiwan Flag","b":"1F1F9-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,5]},"man_dancing":{"skin_variations":{"1F3FB":{"unified":"1F57A-1F3FB","non_qualified":null,"image":"1f57a-1f3fb.png","sheet_x":29,"sheet_y":22,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F57A-1F3FC","non_qualified":null,"image":"1f57a-1f3fc.png","sheet_x":29,"sheet_y":23,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F57A-1F3FD","non_qualified":null,"image":"1f57a-1f3fd.png","sheet_x":29,"sheet_y":24,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F57A-1F3FE","non_qualified":null,"image":"1f57a-1f3fe.png","sheet_x":29,"sheet_y":25,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F57A-1F3FF","non_qualified":null,"image":"1f57a-1f3ff.png","sheet_x":29,"sheet_y":26,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Man Dancing","b":"1F57A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["male","boy","fun","dancer"],"k":[29,21],"o":9},"dancers":{"obsoleted_by":"1F46F-200D-2640-FE0F","a":"Woman with Bunny Ears","b":"1F46F","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[21,1]},"flag-tz":{"a":"Tanzania Flag","b":"1F1F9-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,6]},"flag-ua":{"a":"Ukraine Flag","b":"1F1FA-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,7]},"man-with-bunny-ears-partying":{"a":"Man with Bunny Ears Partying","b":"1F46F-200D-2642-FE0F","c":"1F46F-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[21,0]},"woman-with-bunny-ears-partying":{"obsoletes":"1F46F","a":"Woman with Bunny Ears Partying","b":"1F46F-200D-2640-FE0F","c":"1F46F-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,51]},"flag-ug":{"a":"Uganda Flag","b":"1F1FA-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,8]},"flag-um":{"a":"U.s. Outlying Islands Flag","b":"1F1FA-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,9]},"person_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB","non_qualified":null,"image":"1f9d6-1f3fb.png","sheet_x":43,"sheet_y":41,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D6-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9D6-1F3FC","non_qualified":null,"image":"1f9d6-1f3fc.png","sheet_x":43,"sheet_y":42,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D6-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9D6-1F3FD","non_qualified":null,"image":"1f9d6-1f3fd.png","sheet_x":43,"sheet_y":43,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D6-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9D6-1F3FE","non_qualified":null,"image":"1f9d6-1f3fe.png","sheet_x":43,"sheet_y":44,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D6-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9D6-1F3FF","non_qualified":null,"image":"1f9d6-1f3ff.png","sheet_x":43,"sheet_y":45,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D6-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9D6-200D-2642-FE0F","a":"Person in Steamy Room","b":"1F9D6","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[43,40],"o":10},"woman_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB-200D-2640-FE0F","non_qualified":"1F9D6-1F3FB-200D-2640","image":"1f9d6-1f3fb-200d-2640-fe0f.png","sheet_x":43,"sheet_y":29,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9D6-1F3FC-200D-2640-FE0F","non_qualified":"1F9D6-1F3FC-200D-2640","image":"1f9d6-1f3fc-200d-2640-fe0f.png","sheet_x":43,"sheet_y":30,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9D6-1F3FD-200D-2640-FE0F","non_qualified":"1F9D6-1F3FD-200D-2640","image":"1f9d6-1f3fd-200d-2640-fe0f.png","sheet_x":43,"sheet_y":31,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9D6-1F3FE-200D-2640-FE0F","non_qualified":"1F9D6-1F3FE-200D-2640","image":"1f9d6-1f3fe-200d-2640-fe0f.png","sheet_x":43,"sheet_y":32,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9D6-1F3FF-200D-2640-FE0F","non_qualified":"1F9D6-1F3FF-200D-2640","image":"1f9d6-1f3ff-200d-2640-fe0f.png","sheet_x":43,"sheet_y":33,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman in Steamy Room","b":"1F9D6-200D-2640-FE0F","c":"1F9D6-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["female","woman","spa","steamroom","sauna"],"k":[43,28],"o":10},"flag-un":{"a":"United Nations Flag","b":"1F1FA-1F1F3","d":false,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[5,10]},"us":{"a":"United States Flag","b":"1F1FA-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["united","states","america","flag","nation","country","banner"],"k":[5,11],"n":["flag-us"]},"man_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB-200D-2642-FE0F","non_qualified":"1F9D6-1F3FB-200D-2642","image":"1f9d6-1f3fb-200d-2642-fe0f.png","sheet_x":43,"sheet_y":35,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D6-1F3FB"},"1F3FC":{"unified":"1F9D6-1F3FC-200D-2642-FE0F","non_qualified":"1F9D6-1F3FC-200D-2642","image":"1f9d6-1f3fc-200d-2642-fe0f.png","sheet_x":43,"sheet_y":36,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D6-1F3FC"},"1F3FD":{"unified":"1F9D6-1F3FD-200D-2642-FE0F","non_qualified":"1F9D6-1F3FD-200D-2642","image":"1f9d6-1f3fd-200d-2642-fe0f.png","sheet_x":43,"sheet_y":37,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D6-1F3FD"},"1F3FE":{"unified":"1F9D6-1F3FE-200D-2642-FE0F","non_qualified":"1F9D6-1F3FE-200D-2642","image":"1f9d6-1f3fe-200d-2642-fe0f.png","sheet_x":43,"sheet_y":38,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D6-1F3FE"},"1F3FF":{"unified":"1F9D6-1F3FF-200D-2642-FE0F","non_qualified":"1F9D6-1F3FF-200D-2642","image":"1f9d6-1f3ff-200d-2642-fe0f.png","sheet_x":43,"sheet_y":39,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D6-1F3FF"}},"obsoletes":"1F9D6","a":"Man in Steamy Room","b":"1F9D6-200D-2642-FE0F","c":"1F9D6-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["male","man","spa","steamroom","sauna"],"k":[43,34],"o":10},"person_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB","non_qualified":null,"image":"1f9d7-1f3fb.png","sheet_x":44,"sheet_y":7,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D7-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D7-1F3FC","non_qualified":null,"image":"1f9d7-1f3fc.png","sheet_x":44,"sheet_y":8,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D7-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D7-1F3FD","non_qualified":null,"image":"1f9d7-1f3fd.png","sheet_x":44,"sheet_y":9,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D7-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D7-1F3FE","non_qualified":null,"image":"1f9d7-1f3fe.png","sheet_x":44,"sheet_y":10,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D7-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D7-1F3FF","non_qualified":null,"image":"1f9d7-1f3ff.png","sheet_x":44,"sheet_y":11,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D7-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D7-200D-2640-FE0F","a":"Person Climbing","b":"1F9D7","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,6],"o":10},"flag-uy":{"a":"Uruguay Flag","b":"1F1FA-1F1FE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,12]},"woman_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB-200D-2640-FE0F","non_qualified":"1F9D7-1F3FB-200D-2640","image":"1f9d7-1f3fb-200d-2640-fe0f.png","sheet_x":43,"sheet_y":47,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D7-1F3FB"},"1F3FC":{"unified":"1F9D7-1F3FC-200D-2640-FE0F","non_qualified":"1F9D7-1F3FC-200D-2640","image":"1f9d7-1f3fc-200d-2640-fe0f.png","sheet_x":43,"sheet_y":48,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D7-1F3FC"},"1F3FD":{"unified":"1F9D7-1F3FD-200D-2640-FE0F","non_qualified":"1F9D7-1F3FD-200D-2640","image":"1f9d7-1f3fd-200d-2640-fe0f.png","sheet_x":43,"sheet_y":49,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D7-1F3FD"},"1F3FE":{"unified":"1F9D7-1F3FE-200D-2640-FE0F","non_qualified":"1F9D7-1F3FE-200D-2640","image":"1f9d7-1f3fe-200d-2640-fe0f.png","sheet_x":43,"sheet_y":50,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D7-1F3FE"},"1F3FF":{"unified":"1F9D7-1F3FF-200D-2640-FE0F","non_qualified":"1F9D7-1F3FF-200D-2640","image":"1f9d7-1f3ff-200d-2640-fe0f.png","sheet_x":43,"sheet_y":51,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D7-1F3FF"}},"obsoletes":"1F9D7","a":"Woman Climbing","b":"1F9D7-200D-2640-FE0F","c":"1F9D7-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[43,46],"o":10},"flag-uz":{"a":"Uzbekistan Flag","b":"1F1FA-1F1FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,13]},"man_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB-200D-2642-FE0F","non_qualified":"1F9D7-1F3FB-200D-2642","image":"1f9d7-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":1,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9D7-1F3FC-200D-2642-FE0F","non_qualified":"1F9D7-1F3FC-200D-2642","image":"1f9d7-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":2,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9D7-1F3FD-200D-2642-FE0F","non_qualified":"1F9D7-1F3FD-200D-2642","image":"1f9d7-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":3,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9D7-1F3FE-200D-2642-FE0F","non_qualified":"1F9D7-1F3FE-200D-2642","image":"1f9d7-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":4,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9D7-1F3FF-200D-2642-FE0F","non_qualified":"1F9D7-1F3FF-200D-2642","image":"1f9d7-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":5,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Climbing","b":"1F9D7-200D-2642-FE0F","c":"1F9D7-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,0],"o":10},"flag-va":{"a":"Vatican City Flag","b":"1F1FB-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,14]},"person_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB","non_qualified":null,"image":"1f9d8-1f3fb.png","sheet_x":44,"sheet_y":25,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D8-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D8-1F3FC","non_qualified":null,"image":"1f9d8-1f3fc.png","sheet_x":44,"sheet_y":26,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D8-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D8-1F3FD","non_qualified":null,"image":"1f9d8-1f3fd.png","sheet_x":44,"sheet_y":27,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D8-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D8-1F3FE","non_qualified":null,"image":"1f9d8-1f3fe.png","sheet_x":44,"sheet_y":28,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D8-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D8-1F3FF","non_qualified":null,"image":"1f9d8-1f3ff.png","sheet_x":44,"sheet_y":29,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false,"obsoleted_by":"1F9D8-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D8-200D-2640-FE0F","a":"Person in Lotus Position","b":"1F9D8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[44,24],"o":10},"flag-vc":{"a":"St. Vincent & Grenadines Flag","b":"1F1FB-1F1E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,15]},"flag-ve":{"a":"Venezuela Flag","b":"1F1FB-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,16]},"woman_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB-200D-2640-FE0F","non_qualified":"1F9D8-1F3FB-200D-2640","image":"1f9d8-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":13,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D8-1F3FB"},"1F3FC":{"unified":"1F9D8-1F3FC-200D-2640-FE0F","non_qualified":"1F9D8-1F3FC-200D-2640","image":"1f9d8-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":14,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D8-1F3FC"},"1F3FD":{"unified":"1F9D8-1F3FD-200D-2640-FE0F","non_qualified":"1F9D8-1F3FD-200D-2640","image":"1f9d8-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":15,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D8-1F3FD"},"1F3FE":{"unified":"1F9D8-1F3FE-200D-2640-FE0F","non_qualified":"1F9D8-1F3FE-200D-2640","image":"1f9d8-1f3fe-200d-2640-fe0f.png","sheet_x":44,"sheet_y":16,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D8-1F3FE"},"1F3FF":{"unified":"1F9D8-1F3FF-200D-2640-FE0F","non_qualified":"1F9D8-1F3FF-200D-2640","image":"1f9d8-1f3ff-200d-2640-fe0f.png","sheet_x":44,"sheet_y":17,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false,"obsoletes":"1F9D8-1F3FF"}},"obsoletes":"1F9D8","a":"Woman in Lotus Position","b":"1F9D8-200D-2640-FE0F","c":"1F9D8-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["woman","female","meditation","yoga","serenity","zen","mindfulness"],"k":[44,12],"o":10},"man_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB-200D-2642-FE0F","non_qualified":"1F9D8-1F3FB-200D-2642","image":"1f9d8-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":19,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F9D8-1F3FC-200D-2642-FE0F","non_qualified":"1F9D8-1F3FC-200D-2642","image":"1f9d8-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":20,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F9D8-1F3FD-200D-2642-FE0F","non_qualified":"1F9D8-1F3FD-200D-2642","image":"1f9d8-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":21,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F9D8-1F3FE-200D-2642-FE0F","non_qualified":"1F9D8-1F3FE-200D-2642","image":"1f9d8-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":22,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F9D8-1F3FF-200D-2642-FE0F","non_qualified":"1F9D8-1F3FF-200D-2642","image":"1f9d8-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":23,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man in Lotus Position","b":"1F9D8-200D-2642-FE0F","c":"1F9D8-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["man","male","meditation","yoga","serenity","zen","mindfulness"],"k":[44,18],"o":10},"flag-vg":{"a":"British Virgin Islands Flag","b":"1F1FB-1F1EC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,17]},"flag-vi":{"a":"U.s. Virgin Islands Flag","b":"1F1FB-1F1EE","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,18]},"bath":{"skin_variations":{"1F3FB":{"unified":"1F6C0-1F3FB","non_qualified":null,"image":"1f6c0-1f3fb.png","sheet_x":36,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F6C0-1F3FC","non_qualified":null,"image":"1f6c0-1f3fc.png","sheet_x":36,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F6C0-1F3FD","non_qualified":null,"image":"1f6c0-1f3fd.png","sheet_x":36,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F6C0-1F3FE","non_qualified":null,"image":"1f6c0-1f3fe.png","sheet_x":36,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F6C0-1F3FF","non_qualified":null,"image":"1f6c0-1f3ff.png","sheet_x":36,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Bath","b":"1F6C0","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["clean","shower","bathroom"],"k":[36,36]},"sleeping_accommodation":{"skin_variations":{"1F3FB":{"unified":"1F6CC-1F3FB","non_qualified":null,"image":"1f6cc-1f3fb.png","sheet_x":36,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F6CC-1F3FC","non_qualified":null,"image":"1f6cc-1f3fc.png","sheet_x":36,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F6CC-1F3FD","non_qualified":null,"image":"1f6cc-1f3fd.png","sheet_x":36,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F6CC-1F3FE","non_qualified":null,"image":"1f6cc-1f3fe.png","sheet_x":37,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F6CC-1F3FF","non_qualified":null,"image":"1f6cc-1f3ff.png","sheet_x":37,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Sleeping Accommodation","b":"1F6CC","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[36,48],"o":7},"flag-vn":{"a":"Vietnam Flag","b":"1F1FB-1F1F3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,19]},"man_in_business_suit_levitating":{"skin_variations":{"1F3FB":{"unified":"1F574-1F3FB","non_qualified":null,"image":"1f574-1f3fb.png","sheet_x":28,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F574-1F3FC","non_qualified":null,"image":"1f574-1f3fc.png","sheet_x":28,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F574-1F3FD","non_qualified":null,"image":"1f574-1f3fd.png","sheet_x":28,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F574-1F3FE","non_qualified":null,"image":"1f574-1f3fe.png","sheet_x":28,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F574-1F3FF","non_qualified":null,"image":"1f574-1f3ff.png","sheet_x":28,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Man in Business Suit Levitating","b":"1F574-FE0F","c":"1F574","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[28,45],"o":7},"flag-vu":{"a":"Vanuatu Flag","b":"1F1FB-1F1FA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,20]},"flag-wf":{"a":"Wallis & Futuna Flag","b":"1F1FC-1F1EB","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[5,21]},"speaking_head_in_silhouette":{"a":"Speaking Head in Silhouette","b":"1F5E3-FE0F","c":"1F5E3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[30,14],"o":7},"bust_in_silhouette":{"a":"Bust in Silhouette","b":"1F464","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["user","person","human"],"k":[15,40]},"flag-ws":{"a":"Samoa Flag","b":"1F1FC-1F1F8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,22]},"busts_in_silhouette":{"a":"Busts in Silhouette","b":"1F465","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["user","person","human","group","team"],"k":[15,41]},"flag-xk":{"a":"Kosovo Flag","b":"1F1FD-1F1F0","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[5,23]},"fencer":{"a":"Fencer","b":"1F93A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,48],"o":9},"flag-ye":{"a":"Yemen Flag","b":"1F1FE-1F1EA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,24]},"flag-yt":{"a":"Mayotte Flag","b":"1F1FE-1F1F9","d":true,"e":false,"f":true,"g":true,"h":true,"i":true,"k":[5,25]},"horse_racing":{"skin_variations":{"1F3FB":{"unified":"1F3C7-1F3FB","non_qualified":null,"image":"1f3c7-1f3fb.png","sheet_x":10,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F3C7-1F3FC","non_qualified":null,"image":"1f3c7-1f3fc.png","sheet_x":10,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F3C7-1F3FD","non_qualified":null,"image":"1f3c7-1f3fd.png","sheet_x":10,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F3C7-1F3FE","non_qualified":null,"image":"1f3c7-1f3fe.png","sheet_x":10,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F3C7-1F3FF","non_qualified":null,"image":"1f3c7-1f3ff.png","sheet_x":10,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Horse Racing","b":"1F3C7","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["animal","betting","competition","gambling","luck"],"k":[10,20]},"flag-za":{"a":"South Africa Flag","b":"1F1FF-1F1E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,26]},"skier":{"a":"Skier","b":"26F7-FE0F","c":"26F7","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports","winter","snow"],"k":[48,44],"o":5},"flag-zm":{"a":"Zambia Flag","b":"1F1FF-1F1F2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,27]},"snowboarder":{"skin_variations":{"1F3FB":{"unified":"1F3C2-1F3FB","non_qualified":null,"image":"1f3c2-1f3fb.png","sheet_x":9,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F3C2-1F3FC","non_qualified":null,"image":"1f3c2-1f3fc.png","sheet_x":9,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F3C2-1F3FD","non_qualified":null,"image":"1f3c2-1f3fd.png","sheet_x":9,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F3C2-1F3FE","non_qualified":null,"image":"1f3c2-1f3fe.png","sheet_x":9,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F3C2-1F3FF","non_qualified":null,"image":"1f3c2-1f3ff.png","sheet_x":9,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Snowboarder","b":"1F3C2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sports","winter"],"k":[9,28]},"golfer":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB","non_qualified":null,"image":"1f3cc-1f3fb.png","sheet_x":11,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CC-1F3FC","non_qualified":null,"image":"1f3cc-1f3fc.png","sheet_x":11,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CC-1F3FD","non_qualified":null,"image":"1f3cc-1f3fd.png","sheet_x":11,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CC-1F3FE","non_qualified":null,"image":"1f3cc-1f3fe.png","sheet_x":11,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CC-1F3FF","non_qualified":null,"image":"1f3cc-1f3ff.png","sheet_x":11,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoleted_by":"1F3CC-FE0F-200D-2642-FE0F","a":"Golfer","b":"1F3CC-FE0F","c":"1F3CC","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[11,24],"o":7},"flag-zw":{"a":"Zimbabwe Flag","b":"1F1FF-1F1FC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[5,28]},"man-golfing":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB-200D-2642-FE0F","non_qualified":"1F3CC-1F3FB-200D-2642","image":"1f3cc-1f3fb-200d-2642-fe0f.png","sheet_x":11,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CC-1F3FC-200D-2642-FE0F","non_qualified":"1F3CC-1F3FC-200D-2642","image":"1f3cc-1f3fc-200d-2642-fe0f.png","sheet_x":11,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CC-1F3FD-200D-2642-FE0F","non_qualified":"1F3CC-1F3FD-200D-2642","image":"1f3cc-1f3fd-200d-2642-fe0f.png","sheet_x":11,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CC-1F3FE-200D-2642-FE0F","non_qualified":"1F3CC-1F3FE-200D-2642","image":"1f3cc-1f3fe-200d-2642-fe0f.png","sheet_x":11,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CC-1F3FF-200D-2642-FE0F","non_qualified":"1F3CC-1F3FF-200D-2642","image":"1f3cc-1f3ff-200d-2642-fe0f.png","sheet_x":11,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F3CC-FE0F","a":"Man Golfing","b":"1F3CC-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[11,18],"o":7},"flag-england":{"a":"England Flag","b":"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[12,16],"o":7},"woman-golfing":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB-200D-2640-FE0F","non_qualified":"1F3CC-1F3FB-200D-2640","image":"1f3cc-1f3fb-200d-2640-fe0f.png","sheet_x":11,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CC-1F3FC-200D-2640-FE0F","non_qualified":"1F3CC-1F3FC-200D-2640","image":"1f3cc-1f3fc-200d-2640-fe0f.png","sheet_x":11,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CC-1F3FD-200D-2640-FE0F","non_qualified":"1F3CC-1F3FD-200D-2640","image":"1f3cc-1f3fd-200d-2640-fe0f.png","sheet_x":11,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CC-1F3FE-200D-2640-FE0F","non_qualified":"1F3CC-1F3FE-200D-2640","image":"1f3cc-1f3fe-200d-2640-fe0f.png","sheet_x":11,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CC-1F3FF-200D-2640-FE0F","non_qualified":"1F3CC-1F3FF-200D-2640","image":"1f3cc-1f3ff-200d-2640-fe0f.png","sheet_x":11,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Golfing","b":"1F3CC-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[11,12],"o":7},"flag-scotland":{"a":"Scotland Flag","b":"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[12,17],"o":7},"flag-wales":{"a":"Wales Flag","b":"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[12,18],"o":7},"surfer":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB","non_qualified":null,"image":"1f3c4-1f3fb.png","sheet_x":10,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F3C4-1F3FC","non_qualified":null,"image":"1f3c4-1f3fc.png","sheet_x":10,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F3C4-1F3FD","non_qualified":null,"image":"1f3c4-1f3fd.png","sheet_x":10,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F3C4-1F3FE","non_qualified":null,"image":"1f3c4-1f3fe.png","sheet_x":10,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F3C4-1F3FF","non_qualified":null,"image":"1f3c4-1f3ff.png","sheet_x":10,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F3C4-200D-2642-FE0F","a":"Surfer","b":"1F3C4","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[10,12]},"man-surfing":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB-200D-2642-FE0F","non_qualified":"1F3C4-1F3FB-200D-2642","image":"1f3c4-1f3fb-200d-2642-fe0f.png","sheet_x":10,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3C4-1F3FC-200D-2642-FE0F","non_qualified":"1F3C4-1F3FC-200D-2642","image":"1f3c4-1f3fc-200d-2642-fe0f.png","sheet_x":10,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3C4-1F3FD-200D-2642-FE0F","non_qualified":"1F3C4-1F3FD-200D-2642","image":"1f3c4-1f3fd-200d-2642-fe0f.png","sheet_x":10,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3C4-1F3FE-200D-2642-FE0F","non_qualified":"1F3C4-1F3FE-200D-2642","image":"1f3c4-1f3fe-200d-2642-fe0f.png","sheet_x":10,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3C4-1F3FF-200D-2642-FE0F","non_qualified":"1F3C4-1F3FF-200D-2642","image":"1f3c4-1f3ff-200d-2642-fe0f.png","sheet_x":10,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F3C4","a":"Man Surfing","b":"1F3C4-200D-2642-FE0F","c":"1F3C4-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[10,6]},"woman-surfing":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB-200D-2640-FE0F","non_qualified":"1F3C4-1F3FB-200D-2640","image":"1f3c4-1f3fb-200d-2640-fe0f.png","sheet_x":10,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3C4-1F3FC-200D-2640-FE0F","non_qualified":"1F3C4-1F3FC-200D-2640","image":"1f3c4-1f3fc-200d-2640-fe0f.png","sheet_x":10,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3C4-1F3FD-200D-2640-FE0F","non_qualified":"1F3C4-1F3FD-200D-2640","image":"1f3c4-1f3fd-200d-2640-fe0f.png","sheet_x":10,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3C4-1F3FE-200D-2640-FE0F","non_qualified":"1F3C4-1F3FE-200D-2640","image":"1f3c4-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3C4-1F3FF-200D-2640-FE0F","non_qualified":"1F3C4-1F3FF-200D-2640","image":"1f3c4-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Surfing","b":"1F3C4-200D-2640-FE0F","c":"1F3C4-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[10,0]},"rowboat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB","non_qualified":null,"image":"1f6a3-1f3fb.png","sheet_x":35,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6A3-1F3FC","non_qualified":null,"image":"1f6a3-1f3fc.png","sheet_x":35,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6A3-1F3FD","non_qualified":null,"image":"1f6a3-1f3fd.png","sheet_x":35,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6A3-1F3FE","non_qualified":null,"image":"1f6a3-1f3fe.png","sheet_x":35,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6A3-1F3FF","non_qualified":null,"image":"1f6a3-1f3ff.png","sheet_x":35,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoleted_by":"1F6A3-200D-2642-FE0F","a":"Rowboat","b":"1F6A3","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[35,3]},"man-rowing-boat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB-200D-2642-FE0F","non_qualified":"1F6A3-1F3FB-200D-2642","image":"1f6a3-1f3fb-200d-2642-fe0f.png","sheet_x":34,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6A3-1F3FC-200D-2642-FE0F","non_qualified":"1F6A3-1F3FC-200D-2642","image":"1f6a3-1f3fc-200d-2642-fe0f.png","sheet_x":34,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6A3-1F3FD-200D-2642-FE0F","non_qualified":"1F6A3-1F3FD-200D-2642","image":"1f6a3-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6A3-1F3FE-200D-2642-FE0F","non_qualified":"1F6A3-1F3FE-200D-2642","image":"1f6a3-1f3fe-200d-2642-fe0f.png","sheet_x":35,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6A3-1F3FF-200D-2642-FE0F","non_qualified":"1F6A3-1F3FF-200D-2642","image":"1f6a3-1f3ff-200d-2642-fe0f.png","sheet_x":35,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F6A3","a":"Man Rowing Boat","b":"1F6A3-200D-2642-FE0F","c":"1F6A3-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[34,49]},"woman-rowing-boat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB-200D-2640-FE0F","non_qualified":"1F6A3-1F3FB-200D-2640","image":"1f6a3-1f3fb-200d-2640-fe0f.png","sheet_x":34,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6A3-1F3FC-200D-2640-FE0F","non_qualified":"1F6A3-1F3FC-200D-2640","image":"1f6a3-1f3fc-200d-2640-fe0f.png","sheet_x":34,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6A3-1F3FD-200D-2640-FE0F","non_qualified":"1F6A3-1F3FD-200D-2640","image":"1f6a3-1f3fd-200d-2640-fe0f.png","sheet_x":34,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6A3-1F3FE-200D-2640-FE0F","non_qualified":"1F6A3-1F3FE-200D-2640","image":"1f6a3-1f3fe-200d-2640-fe0f.png","sheet_x":34,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6A3-1F3FF-200D-2640-FE0F","non_qualified":"1F6A3-1F3FF-200D-2640","image":"1f6a3-1f3ff-200d-2640-fe0f.png","sheet_x":34,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Rowing Boat","b":"1F6A3-200D-2640-FE0F","c":"1F6A3-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[34,43]},"swimmer":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB","non_qualified":null,"image":"1f3ca-1f3fb.png","sheet_x":10,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F3CA-1F3FC","non_qualified":null,"image":"1f3ca-1f3fc.png","sheet_x":10,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F3CA-1F3FD","non_qualified":null,"image":"1f3ca-1f3fd.png","sheet_x":10,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F3CA-1F3FE","non_qualified":null,"image":"1f3ca-1f3fe.png","sheet_x":10,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F3CA-1F3FF","non_qualified":null,"image":"1f3ca-1f3ff.png","sheet_x":10,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F3CA-200D-2642-FE0F","a":"Swimmer","b":"1F3CA","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[10,40]},"man-swimming":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB-200D-2642-FE0F","non_qualified":"1F3CA-1F3FB-200D-2642","image":"1f3ca-1f3fb-200d-2642-fe0f.png","sheet_x":10,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CA-1F3FC-200D-2642-FE0F","non_qualified":"1F3CA-1F3FC-200D-2642","image":"1f3ca-1f3fc-200d-2642-fe0f.png","sheet_x":10,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CA-1F3FD-200D-2642-FE0F","non_qualified":"1F3CA-1F3FD-200D-2642","image":"1f3ca-1f3fd-200d-2642-fe0f.png","sheet_x":10,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CA-1F3FE-200D-2642-FE0F","non_qualified":"1F3CA-1F3FE-200D-2642","image":"1f3ca-1f3fe-200d-2642-fe0f.png","sheet_x":10,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CA-1F3FF-200D-2642-FE0F","non_qualified":"1F3CA-1F3FF-200D-2642","image":"1f3ca-1f3ff-200d-2642-fe0f.png","sheet_x":10,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F3CA","a":"Man Swimming","b":"1F3CA-200D-2642-FE0F","c":"1F3CA-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[10,34]},"woman-swimming":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB-200D-2640-FE0F","non_qualified":"1F3CA-1F3FB-200D-2640","image":"1f3ca-1f3fb-200d-2640-fe0f.png","sheet_x":10,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CA-1F3FC-200D-2640-FE0F","non_qualified":"1F3CA-1F3FC-200D-2640","image":"1f3ca-1f3fc-200d-2640-fe0f.png","sheet_x":10,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CA-1F3FD-200D-2640-FE0F","non_qualified":"1F3CA-1F3FD-200D-2640","image":"1f3ca-1f3fd-200d-2640-fe0f.png","sheet_x":10,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CA-1F3FE-200D-2640-FE0F","non_qualified":"1F3CA-1F3FE-200D-2640","image":"1f3ca-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CA-1F3FF-200D-2640-FE0F","non_qualified":"1F3CA-1F3FF-200D-2640","image":"1f3ca-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Swimming","b":"1F3CA-200D-2640-FE0F","c":"1F3CA-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[10,28]},"person_with_ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB","non_qualified":null,"image":"26f9-1f3fb.png","sheet_x":49,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"26F9-1F3FC","non_qualified":null,"image":"26f9-1f3fc.png","sheet_x":49,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"26F9-1F3FD","non_qualified":null,"image":"26f9-1f3fd.png","sheet_x":49,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"26F9-1F3FE","non_qualified":null,"image":"26f9-1f3fe.png","sheet_x":49,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"26F9-1F3FF","non_qualified":null,"image":"26f9-1f3ff.png","sheet_x":49,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoleted_by":"26F9-FE0F-200D-2642-FE0F","a":"Person with Ball","b":"26F9-FE0F","c":"26F9","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[49,6],"o":5},"man-bouncing-ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB-200D-2642-FE0F","non_qualified":"26F9-1F3FB-200D-2642","image":"26f9-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"26F9-1F3FC-200D-2642-FE0F","non_qualified":"26F9-1F3FC-200D-2642","image":"26f9-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"26F9-1F3FD-200D-2642-FE0F","non_qualified":"26F9-1F3FD-200D-2642","image":"26f9-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"26F9-1F3FE-200D-2642-FE0F","non_qualified":"26F9-1F3FE-200D-2642","image":"26f9-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"26F9-1F3FF-200D-2642-FE0F","non_qualified":"26F9-1F3FF-200D-2642","image":"26f9-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"26F9-FE0F","a":"Man Bouncing Ball","b":"26F9-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[49,0],"o":5},"woman-bouncing-ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB-200D-2640-FE0F","non_qualified":"26F9-1F3FB-200D-2640","image":"26f9-1f3fb-200d-2640-fe0f.png","sheet_x":48,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"26F9-1F3FC-200D-2640-FE0F","non_qualified":"26F9-1F3FC-200D-2640","image":"26f9-1f3fc-200d-2640-fe0f.png","sheet_x":48,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"26F9-1F3FD-200D-2640-FE0F","non_qualified":"26F9-1F3FD-200D-2640","image":"26f9-1f3fd-200d-2640-fe0f.png","sheet_x":48,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"26F9-1F3FE-200D-2640-FE0F","non_qualified":"26F9-1F3FE-200D-2640","image":"26f9-1f3fe-200d-2640-fe0f.png","sheet_x":48,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"26F9-1F3FF-200D-2640-FE0F","non_qualified":"26F9-1F3FF-200D-2640","image":"26f9-1f3ff-200d-2640-fe0f.png","sheet_x":48,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Bouncing Ball","b":"26F9-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[48,46],"o":5},"weight_lifter":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB","non_qualified":null,"image":"1f3cb-1f3fb.png","sheet_x":11,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CB-1F3FC","non_qualified":null,"image":"1f3cb-1f3fc.png","sheet_x":11,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CB-1F3FD","non_qualified":null,"image":"1f3cb-1f3fd.png","sheet_x":11,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CB-1F3FE","non_qualified":null,"image":"1f3cb-1f3fe.png","sheet_x":11,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CB-1F3FF","non_qualified":null,"image":"1f3cb-1f3ff.png","sheet_x":11,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoleted_by":"1F3CB-FE0F-200D-2642-FE0F","a":"Weight Lifter","b":"1F3CB-FE0F","c":"1F3CB","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[11,6],"o":7},"man-lifting-weights":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB-200D-2642-FE0F","non_qualified":"1F3CB-1F3FB-200D-2642","image":"1f3cb-1f3fb-200d-2642-fe0f.png","sheet_x":11,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CB-1F3FC-200D-2642-FE0F","non_qualified":"1F3CB-1F3FC-200D-2642","image":"1f3cb-1f3fc-200d-2642-fe0f.png","sheet_x":11,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CB-1F3FD-200D-2642-FE0F","non_qualified":"1F3CB-1F3FD-200D-2642","image":"1f3cb-1f3fd-200d-2642-fe0f.png","sheet_x":11,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CB-1F3FE-200D-2642-FE0F","non_qualified":"1F3CB-1F3FE-200D-2642","image":"1f3cb-1f3fe-200d-2642-fe0f.png","sheet_x":11,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CB-1F3FF-200D-2642-FE0F","non_qualified":"1F3CB-1F3FF-200D-2642","image":"1f3cb-1f3ff-200d-2642-fe0f.png","sheet_x":11,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F3CB-FE0F","a":"Man Lifting Weights","b":"1F3CB-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[11,0],"o":7},"woman-lifting-weights":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB-200D-2640-FE0F","non_qualified":"1F3CB-1F3FB-200D-2640","image":"1f3cb-1f3fb-200d-2640-fe0f.png","sheet_x":10,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F3CB-1F3FC-200D-2640-FE0F","non_qualified":"1F3CB-1F3FC-200D-2640","image":"1f3cb-1f3fc-200d-2640-fe0f.png","sheet_x":10,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F3CB-1F3FD-200D-2640-FE0F","non_qualified":"1F3CB-1F3FD-200D-2640","image":"1f3cb-1f3fd-200d-2640-fe0f.png","sheet_x":10,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F3CB-1F3FE-200D-2640-FE0F","non_qualified":"1F3CB-1F3FE-200D-2640","image":"1f3cb-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F3CB-1F3FF-200D-2640-FE0F","non_qualified":"1F3CB-1F3FF-200D-2640","image":"1f3cb-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Lifting Weights","b":"1F3CB-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[10,46],"o":7},"bicyclist":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB","non_qualified":null,"image":"1f6b4-1f3fb.png","sheet_x":35,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F6B4-1F3FC","non_qualified":null,"image":"1f6b4-1f3fc.png","sheet_x":35,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F6B4-1F3FD","non_qualified":null,"image":"1f6b4-1f3fd.png","sheet_x":35,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F6B4-1F3FE","non_qualified":null,"image":"1f6b4-1f3fe.png","sheet_x":35,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F6B4-1F3FF","non_qualified":null,"image":"1f6b4-1f3ff.png","sheet_x":35,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F6B4-200D-2642-FE0F","a":"Bicyclist","b":"1F6B4","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[35,37]},"man-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB-200D-2642-FE0F","non_qualified":"1F6B4-1F3FB-200D-2642","image":"1f6b4-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6B4-1F3FC-200D-2642-FE0F","non_qualified":"1F6B4-1F3FC-200D-2642","image":"1f6b4-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6B4-1F3FD-200D-2642-FE0F","non_qualified":"1F6B4-1F3FD-200D-2642","image":"1f6b4-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6B4-1F3FE-200D-2642-FE0F","non_qualified":"1F6B4-1F3FE-200D-2642","image":"1f6b4-1f3fe-200d-2642-fe0f.png","sheet_x":35,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6B4-1F3FF-200D-2642-FE0F","non_qualified":"1F6B4-1F3FF-200D-2642","image":"1f6b4-1f3ff-200d-2642-fe0f.png","sheet_x":35,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F6B4","a":"Man Biking","b":"1F6B4-200D-2642-FE0F","c":"1F6B4-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[35,31]},"woman-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB-200D-2640-FE0F","non_qualified":"1F6B4-1F3FB-200D-2640","image":"1f6b4-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6B4-1F3FC-200D-2640-FE0F","non_qualified":"1F6B4-1F3FC-200D-2640","image":"1f6b4-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6B4-1F3FD-200D-2640-FE0F","non_qualified":"1F6B4-1F3FD-200D-2640","image":"1f6b4-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6B4-1F3FE-200D-2640-FE0F","non_qualified":"1F6B4-1F3FE-200D-2640","image":"1f6b4-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6B4-1F3FF-200D-2640-FE0F","non_qualified":"1F6B4-1F3FF-200D-2640","image":"1f6b4-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Biking","b":"1F6B4-200D-2640-FE0F","c":"1F6B4-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[35,25]},"mountain_bicyclist":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB","non_qualified":null,"image":"1f6b5-1f3fb.png","sheet_x":36,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FC":{"unified":"1F6B5-1F3FC","non_qualified":null,"image":"1f6b5-1f3fc.png","sheet_x":36,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FD":{"unified":"1F6B5-1F3FD","non_qualified":null,"image":"1f6b5-1f3fd.png","sheet_x":36,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FE":{"unified":"1F6B5-1F3FE","non_qualified":null,"image":"1f6b5-1f3fe.png","sheet_x":36,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true},"1F3FF":{"unified":"1F6B5-1F3FF","non_qualified":null,"image":"1f6b5-1f3ff.png","sheet_x":36,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":true}},"obsoleted_by":"1F6B5-200D-2642-FE0F","a":"Mountain Bicyclist","b":"1F6B5","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[36,3]},"man-mountain-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB-200D-2642-FE0F","non_qualified":"1F6B5-1F3FB-200D-2642","image":"1f6b5-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6B5-1F3FC-200D-2642-FE0F","non_qualified":"1F6B5-1F3FC-200D-2642","image":"1f6b5-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6B5-1F3FD-200D-2642-FE0F","non_qualified":"1F6B5-1F3FD-200D-2642","image":"1f6b5-1f3fd-200d-2642-fe0f.png","sheet_x":36,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6B5-1F3FE-200D-2642-FE0F","non_qualified":"1F6B5-1F3FE-200D-2642","image":"1f6b5-1f3fe-200d-2642-fe0f.png","sheet_x":36,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6B5-1F3FF-200D-2642-FE0F","non_qualified":"1F6B5-1F3FF-200D-2642","image":"1f6b5-1f3ff-200d-2642-fe0f.png","sheet_x":36,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"obsoletes":"1F6B5","a":"Man Mountain Biking","b":"1F6B5-200D-2642-FE0F","c":"1F6B5-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[35,49]},"woman-mountain-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB-200D-2640-FE0F","non_qualified":"1F6B5-1F3FB-200D-2640","image":"1f6b5-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F6B5-1F3FC-200D-2640-FE0F","non_qualified":"1F6B5-1F3FC-200D-2640","image":"1f6b5-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F6B5-1F3FD-200D-2640-FE0F","non_qualified":"1F6B5-1F3FD-200D-2640","image":"1f6b5-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F6B5-1F3FE-200D-2640-FE0F","non_qualified":"1F6B5-1F3FE-200D-2640","image":"1f6b5-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F6B5-1F3FF-200D-2640-FE0F","non_qualified":"1F6B5-1F3FF-200D-2640","image":"1f6b5-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Mountain Biking","b":"1F6B5-200D-2640-FE0F","c":"1F6B5-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[35,43]},"racing_car":{"a":"Racing Car","b":"1F3CE-FE0F","c":"1F3CE","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["sports","race","fast","formula","f1"],"k":[11,31],"o":7},"racing_motorcycle":{"a":"Racing Motorcycle","b":"1F3CD-FE0F","c":"1F3CD","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[11,30],"o":7},"person_doing_cartwheel":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB","non_qualified":null,"image":"1f938-1f3fb.png","sheet_x":40,"sheet_y":25,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F938-1F3FC","non_qualified":null,"image":"1f938-1f3fc.png","sheet_x":40,"sheet_y":26,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F938-1F3FD","non_qualified":null,"image":"1f938-1f3fd.png","sheet_x":40,"sheet_y":27,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F938-1F3FE","non_qualified":null,"image":"1f938-1f3fe.png","sheet_x":40,"sheet_y":28,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F938-1F3FF","non_qualified":null,"image":"1f938-1f3ff.png","sheet_x":40,"sheet_y":29,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Person Doing Cartwheel","b":"1F938","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[40,24],"o":9},"man-cartwheeling":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB-200D-2642-FE0F","non_qualified":"1F938-1F3FB-200D-2642","image":"1f938-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":19,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F938-1F3FC-200D-2642-FE0F","non_qualified":"1F938-1F3FC-200D-2642","image":"1f938-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":20,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F938-1F3FD-200D-2642-FE0F","non_qualified":"1F938-1F3FD-200D-2642","image":"1f938-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":21,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F938-1F3FE-200D-2642-FE0F","non_qualified":"1F938-1F3FE-200D-2642","image":"1f938-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":22,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F938-1F3FF-200D-2642-FE0F","non_qualified":"1F938-1F3FF-200D-2642","image":"1f938-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":23,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Cartwheeling","b":"1F938-200D-2642-FE0F","c":"1F938-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,18],"o":9},"woman-cartwheeling":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB-200D-2640-FE0F","non_qualified":"1F938-1F3FB-200D-2640","image":"1f938-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":13,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F938-1F3FC-200D-2640-FE0F","non_qualified":"1F938-1F3FC-200D-2640","image":"1f938-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":14,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F938-1F3FD-200D-2640-FE0F","non_qualified":"1F938-1F3FD-200D-2640","image":"1f938-1f3fd-200d-2640-fe0f.png","sheet_x":40,"sheet_y":15,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F938-1F3FE-200D-2640-FE0F","non_qualified":"1F938-1F3FE-200D-2640","image":"1f938-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":16,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F938-1F3FF-200D-2640-FE0F","non_qualified":"1F938-1F3FF-200D-2640","image":"1f938-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":17,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Cartwheeling","b":"1F938-200D-2640-FE0F","c":"1F938-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,12],"o":9},"wrestlers":{"a":"Wrestlers","b":"1F93C","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[40,51],"o":9},"man-wrestling":{"a":"Man Wrestling","b":"1F93C-200D-2642-FE0F","c":"1F93C-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,50],"o":9},"woman-wrestling":{"a":"Woman Wrestling","b":"1F93C-200D-2640-FE0F","c":"1F93C-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,49],"o":9},"water_polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB","non_qualified":null,"image":"1f93d-1f3fb.png","sheet_x":41,"sheet_y":13,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F93D-1F3FC","non_qualified":null,"image":"1f93d-1f3fc.png","sheet_x":41,"sheet_y":14,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F93D-1F3FD","non_qualified":null,"image":"1f93d-1f3fd.png","sheet_x":41,"sheet_y":15,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F93D-1F3FE","non_qualified":null,"image":"1f93d-1f3fe.png","sheet_x":41,"sheet_y":16,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F93D-1F3FF","non_qualified":null,"image":"1f93d-1f3ff.png","sheet_x":41,"sheet_y":17,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Water Polo","b":"1F93D","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[41,12],"o":9},"man-playing-water-polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB-200D-2642-FE0F","non_qualified":"1F93D-1F3FB-200D-2642","image":"1f93d-1f3fb-200d-2642-fe0f.png","sheet_x":41,"sheet_y":7,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F93D-1F3FC-200D-2642-FE0F","non_qualified":"1F93D-1F3FC-200D-2642","image":"1f93d-1f3fc-200d-2642-fe0f.png","sheet_x":41,"sheet_y":8,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F93D-1F3FD-200D-2642-FE0F","non_qualified":"1F93D-1F3FD-200D-2642","image":"1f93d-1f3fd-200d-2642-fe0f.png","sheet_x":41,"sheet_y":9,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F93D-1F3FE-200D-2642-FE0F","non_qualified":"1F93D-1F3FE-200D-2642","image":"1f93d-1f3fe-200d-2642-fe0f.png","sheet_x":41,"sheet_y":10,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F93D-1F3FF-200D-2642-FE0F","non_qualified":"1F93D-1F3FF-200D-2642","image":"1f93d-1f3ff-200d-2642-fe0f.png","sheet_x":41,"sheet_y":11,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Playing Water Polo","b":"1F93D-200D-2642-FE0F","c":"1F93D-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,6],"o":9},"woman-playing-water-polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB-200D-2640-FE0F","non_qualified":"1F93D-1F3FB-200D-2640","image":"1f93d-1f3fb-200d-2640-fe0f.png","sheet_x":41,"sheet_y":1,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F93D-1F3FC-200D-2640-FE0F","non_qualified":"1F93D-1F3FC-200D-2640","image":"1f93d-1f3fc-200d-2640-fe0f.png","sheet_x":41,"sheet_y":2,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F93D-1F3FD-200D-2640-FE0F","non_qualified":"1F93D-1F3FD-200D-2640","image":"1f93d-1f3fd-200d-2640-fe0f.png","sheet_x":41,"sheet_y":3,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F93D-1F3FE-200D-2640-FE0F","non_qualified":"1F93D-1F3FE-200D-2640","image":"1f93d-1f3fe-200d-2640-fe0f.png","sheet_x":41,"sheet_y":4,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F93D-1F3FF-200D-2640-FE0F","non_qualified":"1F93D-1F3FF-200D-2640","image":"1f93d-1f3ff-200d-2640-fe0f.png","sheet_x":41,"sheet_y":5,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Playing Water Polo","b":"1F93D-200D-2640-FE0F","c":"1F93D-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,0],"o":9},"handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB","non_qualified":null,"image":"1f93e-1f3fb.png","sheet_x":41,"sheet_y":31,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F93E-1F3FC","non_qualified":null,"image":"1f93e-1f3fc.png","sheet_x":41,"sheet_y":32,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F93E-1F3FD","non_qualified":null,"image":"1f93e-1f3fd.png","sheet_x":41,"sheet_y":33,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F93E-1F3FE","non_qualified":null,"image":"1f93e-1f3fe.png","sheet_x":41,"sheet_y":34,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F93E-1F3FF","non_qualified":null,"image":"1f93e-1f3ff.png","sheet_x":41,"sheet_y":35,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Handball","b":"1F93E","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[41,30],"o":9},"man-playing-handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB-200D-2642-FE0F","non_qualified":"1F93E-1F3FB-200D-2642","image":"1f93e-1f3fb-200d-2642-fe0f.png","sheet_x":41,"sheet_y":25,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F93E-1F3FC-200D-2642-FE0F","non_qualified":"1F93E-1F3FC-200D-2642","image":"1f93e-1f3fc-200d-2642-fe0f.png","sheet_x":41,"sheet_y":26,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F93E-1F3FD-200D-2642-FE0F","non_qualified":"1F93E-1F3FD-200D-2642","image":"1f93e-1f3fd-200d-2642-fe0f.png","sheet_x":41,"sheet_y":27,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F93E-1F3FE-200D-2642-FE0F","non_qualified":"1F93E-1F3FE-200D-2642","image":"1f93e-1f3fe-200d-2642-fe0f.png","sheet_x":41,"sheet_y":28,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F93E-1F3FF-200D-2642-FE0F","non_qualified":"1F93E-1F3FF-200D-2642","image":"1f93e-1f3ff-200d-2642-fe0f.png","sheet_x":41,"sheet_y":29,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Playing Handball","b":"1F93E-200D-2642-FE0F","c":"1F93E-200D-2642","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,24],"o":9},"woman-playing-handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB-200D-2640-FE0F","non_qualified":"1F93E-1F3FB-200D-2640","image":"1f93e-1f3fb-200d-2640-fe0f.png","sheet_x":41,"sheet_y":19,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F93E-1F3FC-200D-2640-FE0F","non_qualified":"1F93E-1F3FC-200D-2640","image":"1f93e-1f3fc-200d-2640-fe0f.png","sheet_x":41,"sheet_y":20,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F93E-1F3FD-200D-2640-FE0F","non_qualified":"1F93E-1F3FD-200D-2640","image":"1f93e-1f3fd-200d-2640-fe0f.png","sheet_x":41,"sheet_y":21,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F93E-1F3FE-200D-2640-FE0F","non_qualified":"1F93E-1F3FE-200D-2640","image":"1f93e-1f3fe-200d-2640-fe0f.png","sheet_x":41,"sheet_y":22,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F93E-1F3FF-200D-2640-FE0F","non_qualified":"1F93E-1F3FF-200D-2640","image":"1f93e-1f3ff-200d-2640-fe0f.png","sheet_x":41,"sheet_y":23,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Playing Handball","b":"1F93E-200D-2640-FE0F","c":"1F93E-200D-2640","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[41,18],"o":9},"juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB","non_qualified":null,"image":"1f939-1f3fb.png","sheet_x":40,"sheet_y":43,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F939-1F3FC","non_qualified":null,"image":"1f939-1f3fc.png","sheet_x":40,"sheet_y":44,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F939-1F3FD","non_qualified":null,"image":"1f939-1f3fd.png","sheet_x":40,"sheet_y":45,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F939-1F3FE","non_qualified":null,"image":"1f939-1f3fe.png","sheet_x":40,"sheet_y":46,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F939-1F3FF","non_qualified":null,"image":"1f939-1f3ff.png","sheet_x":40,"sheet_y":47,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Juggling","b":"1F939","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[40,42],"o":9},"man-juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB-200D-2642-FE0F","non_qualified":"1F939-1F3FB-200D-2642","image":"1f939-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":37,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F939-1F3FC-200D-2642-FE0F","non_qualified":"1F939-1F3FC-200D-2642","image":"1f939-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":38,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F939-1F3FD-200D-2642-FE0F","non_qualified":"1F939-1F3FD-200D-2642","image":"1f939-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":39,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F939-1F3FE-200D-2642-FE0F","non_qualified":"1F939-1F3FE-200D-2642","image":"1f939-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":40,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F939-1F3FF-200D-2642-FE0F","non_qualified":"1F939-1F3FF-200D-2642","image":"1f939-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":41,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Man Juggling","b":"1F939-200D-2642-FE0F","c":"1F939-200D-2642","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[40,36],"o":9},"woman-juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB-200D-2640-FE0F","non_qualified":"1F939-1F3FB-200D-2640","image":"1f939-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":31,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FC":{"unified":"1F939-1F3FC-200D-2640-FE0F","non_qualified":"1F939-1F3FC-200D-2640","image":"1f939-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":32,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FD":{"unified":"1F939-1F3FD-200D-2640-FE0F","non_qualified":"1F939-1F3FD-200D-2640","image":"1f939-1f3fd-200d-2640-fe0f.png","sheet_x":40,"sheet_y":33,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FE":{"unified":"1F939-1F3FE-200D-2640-FE0F","non_qualified":"1F939-1F3FE-200D-2640","image":"1f939-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":34,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false},"1F3FF":{"unified":"1F939-1F3FF-200D-2640-FE0F","non_qualified":"1F939-1F3FF-200D-2640","image":"1f939-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":35,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":false,"has_img_messenger":false}},"a":"Woman Juggling","b":"1F939-200D-2640-FE0F","c":"1F939-200D-2640","d":true,"e":true,"f":true,"g":true,"h":false,"i":false,"k":[40,30],"o":9},"couple":{"a":"Man and Woman Holding Hands","b":"1F46B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["pair","people","human","love","date","dating","like","affection","valentines","marriage"],"k":[20,30],"n":["man_and_woman_holding_hands"]},"two_men_holding_hands":{"a":"Two Men Holding Hands","b":"1F46C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["pair","couple","love","like","bromance","friendship","people","human"],"k":[20,31]},"two_women_holding_hands":{"a":"Two Women Holding Hands","b":"1F46D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["pair","friendship","couple","love","like","female","people","human"],"k":[20,32]},"couplekiss":{"obsoleted_by":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","a":"Kiss","b":"1F48F","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[24,41]},"woman-kiss-man":{"obsoletes":"1F48F","a":"Woman Kiss Man","b":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","c":"1F469-200D-2764-200D-1F48B-200D-1F468","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,21]},"man-kiss-man":{"a":"Man Kiss Man","b":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468","c":"1F468-200D-2764-200D-1F48B-200D-1F468","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[18,10]},"woman-kiss-woman":{"a":"Woman Kiss Woman","b":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469","c":"1F469-200D-2764-200D-1F48B-200D-1F469","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[20,22]},"couple_with_heart":{"obsoleted_by":"1F469-200D-2764-FE0F-200D-1F468","a":"Couple with Heart","b":"1F491","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[24,43]},"woman-heart-man":{"obsoletes":"1F491","a":"Woman Heart Man","b":"1F469-200D-2764-FE0F-200D-1F468","c":"1F469-200D-2764-200D-1F468","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[20,19]},"man-heart-man":{"a":"Man Heart Man","b":"1F468-200D-2764-FE0F-200D-1F468","c":"1F468-200D-2764-200D-1F468","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[18,9]},"woman-heart-woman":{"a":"Woman Heart Woman","b":"1F469-200D-2764-FE0F-200D-1F469","c":"1F469-200D-2764-200D-1F469","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[20,20]},"family":{"obsoleted_by":"1F468-200D-1F469-200D-1F466","a":"Family","b":"1F46A","d":true,"e":true,"f":true,"g":true,"h":false,"i":true,"k":[20,29],"n":["man-woman-boy"]},"man-woman-boy":{"obsoletes":"1F46A","a":"Man Woman Boy","b":"1F468-200D-1F469-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,2],"n":["family"]},"man-woman-girl":{"a":"Man Woman Girl","b":"1F468-200D-1F469-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,4]},"man-woman-girl-boy":{"a":"Man Woman Girl Boy","b":"1F468-200D-1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,5]},"man-woman-boy-boy":{"a":"Man Woman Boy Boy","b":"1F468-200D-1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,3]},"man-woman-girl-girl":{"a":"Man Woman Girl Girl","b":"1F468-200D-1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,6]},"man-man-boy":{"a":"Man Man Boy","b":"1F468-200D-1F468-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[16,49]},"man-man-girl":{"a":"Man Man Girl","b":"1F468-200D-1F468-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[16,51]},"man-man-girl-boy":{"a":"Man Man Girl Boy","b":"1F468-200D-1F468-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,0]},"man-man-boy-boy":{"a":"Man Man Boy Boy","b":"1F468-200D-1F468-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[16,50]},"man-man-girl-girl":{"a":"Man Man Girl Girl","b":"1F468-200D-1F468-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[17,1]},"woman-woman-boy":{"a":"Woman Woman Boy","b":"1F469-200D-1F469-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[19,12]},"woman-woman-girl":{"a":"Woman Woman Girl","b":"1F469-200D-1F469-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[19,14]},"woman-woman-girl-boy":{"a":"Woman Woman Girl Boy","b":"1F469-200D-1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[19,15]},"woman-woman-boy-boy":{"a":"Woman Woman Boy Boy","b":"1F469-200D-1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[19,13]},"woman-woman-girl-girl":{"a":"Woman Woman Girl Girl","b":"1F469-200D-1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[19,16]},"man-boy":{"a":"Man Boy","b":"1F468-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,45]},"man-boy-boy":{"a":"Man Boy Boy","b":"1F468-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,44]},"man-girl":{"a":"Man Girl","b":"1F468-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,48]},"man-girl-boy":{"a":"Man Girl Boy","b":"1F468-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,46]},"man-girl-girl":{"a":"Man Girl Girl","b":"1F468-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[16,47]},"woman-boy":{"a":"Woman Boy","b":"1F469-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,8]},"woman-boy-boy":{"a":"Woman Boy Boy","b":"1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,7]},"woman-girl":{"a":"Woman Girl","b":"1F469-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,11]},"woman-girl-boy":{"a":"Woman Girl Boy","b":"1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,9]},"woman-girl-girl":{"a":"Woman Girl Girl","b":"1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[19,10]},"selfie":{"skin_variations":{"1F3FB":{"unified":"1F933-1F3FB","non_qualified":null,"image":"1f933-1f3fb.png","sheet_x":39,"sheet_y":23,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F933-1F3FC","non_qualified":null,"image":"1f933-1f3fc.png","sheet_x":39,"sheet_y":24,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F933-1F3FD","non_qualified":null,"image":"1f933-1f3fd.png","sheet_x":39,"sheet_y":25,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F933-1F3FE","non_qualified":null,"image":"1f933-1f3fe.png","sheet_x":39,"sheet_y":26,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F933-1F3FF","non_qualified":null,"image":"1f933-1f3ff.png","sheet_x":39,"sheet_y":27,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Selfie","b":"1F933","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["camera","phone"],"k":[39,22],"o":9},"muscle":{"skin_variations":{"1F3FB":{"unified":"1F4AA-1F3FB","non_qualified":null,"image":"1f4aa-1f3fb.png","sheet_x":25,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F4AA-1F3FC","non_qualified":null,"image":"1f4aa-1f3fc.png","sheet_x":25,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F4AA-1F3FD","non_qualified":null,"image":"1f4aa-1f3fd.png","sheet_x":25,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F4AA-1F3FE","non_qualified":null,"image":"1f4aa-1f3fe.png","sheet_x":25,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F4AA-1F3FF","non_qualified":null,"image":"1f4aa-1f3ff.png","sheet_x":25,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Flexed Biceps","b":"1F4AA","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["arm","flex","hand","summer","strong","biceps"],"k":[25,16]},"point_left":{"skin_variations":{"1F3FB":{"unified":"1F448-1F3FB","non_qualified":null,"image":"1f448-1f3fb.png","sheet_x":14,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F448-1F3FC","non_qualified":null,"image":"1f448-1f3fc.png","sheet_x":14,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F448-1F3FD","non_qualified":null,"image":"1f448-1f3fd.png","sheet_x":14,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F448-1F3FE","non_qualified":null,"image":"1f448-1f3fe.png","sheet_x":14,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F448-1F3FF","non_qualified":null,"image":"1f448-1f3ff.png","sheet_x":14,"sheet_y":24,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"White Left Pointing Backhand Index","b":"1F448","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["direction","fingers","hand","left"],"k":[14,19]},"point_right":{"skin_variations":{"1F3FB":{"unified":"1F449-1F3FB","non_qualified":null,"image":"1f449-1f3fb.png","sheet_x":14,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F449-1F3FC","non_qualified":null,"image":"1f449-1f3fc.png","sheet_x":14,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F449-1F3FD","non_qualified":null,"image":"1f449-1f3fd.png","sheet_x":14,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F449-1F3FE","non_qualified":null,"image":"1f449-1f3fe.png","sheet_x":14,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F449-1F3FF","non_qualified":null,"image":"1f449-1f3ff.png","sheet_x":14,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"White Right Pointing Backhand Index","b":"1F449","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","hand","direction","right"],"k":[14,25]},"point_up":{"skin_variations":{"1F3FB":{"unified":"261D-1F3FB","non_qualified":null,"image":"261d-1f3fb.png","sheet_x":47,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"261D-1F3FC","non_qualified":null,"image":"261d-1f3fc.png","sheet_x":47,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"261D-1F3FD","non_qualified":null,"image":"261d-1f3fd.png","sheet_x":47,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"261D-1F3FE","non_qualified":null,"image":"261d-1f3fe.png","sheet_x":47,"sheet_y":30,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"261D-1F3FF","non_qualified":null,"image":"261d-1f3ff.png","sheet_x":47,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"White Up Pointing Index","b":"261D-FE0F","c":"261D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["hand","fingers","direction","up"],"k":[47,26],"o":1},"point_up_2":{"skin_variations":{"1F3FB":{"unified":"1F446-1F3FB","non_qualified":null,"image":"1f446-1f3fb.png","sheet_x":14,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F446-1F3FC","non_qualified":null,"image":"1f446-1f3fc.png","sheet_x":14,"sheet_y":9,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F446-1F3FD","non_qualified":null,"image":"1f446-1f3fd.png","sheet_x":14,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F446-1F3FE","non_qualified":null,"image":"1f446-1f3fe.png","sheet_x":14,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F446-1F3FF","non_qualified":null,"image":"1f446-1f3ff.png","sheet_x":14,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"White Up Pointing Backhand Index","b":"1F446","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","hand","direction","up"],"k":[14,7]},"middle_finger":{"skin_variations":{"1F3FB":{"unified":"1F595-1F3FB","non_qualified":null,"image":"1f595-1f3fb.png","sheet_x":29,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F595-1F3FC","non_qualified":null,"image":"1f595-1f3fc.png","sheet_x":29,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F595-1F3FD","non_qualified":null,"image":"1f595-1f3fd.png","sheet_x":29,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F595-1F3FE","non_qualified":null,"image":"1f595-1f3fe.png","sheet_x":29,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F595-1F3FF","non_qualified":null,"image":"1f595-1f3ff.png","sheet_x":29,"sheet_y":43,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Reversed Hand with Middle Finger Extended","b":"1F595","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,38],"n":["reversed_hand_with_middle_finger_extended"],"o":7},"point_down":{"skin_variations":{"1F3FB":{"unified":"1F447-1F3FB","non_qualified":null,"image":"1f447-1f3fb.png","sheet_x":14,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F447-1F3FC","non_qualified":null,"image":"1f447-1f3fc.png","sheet_x":14,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F447-1F3FD","non_qualified":null,"image":"1f447-1f3fd.png","sheet_x":14,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F447-1F3FE","non_qualified":null,"image":"1f447-1f3fe.png","sheet_x":14,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F447-1F3FF","non_qualified":null,"image":"1f447-1f3ff.png","sheet_x":14,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"White Down Pointing Backhand Index","b":"1F447","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","hand","direction","down"],"k":[14,13]},"v":{"skin_variations":{"1F3FB":{"unified":"270C-1F3FB","non_qualified":null,"image":"270c-1f3fb.png","sheet_x":49,"sheet_y":31,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"270C-1F3FC","non_qualified":null,"image":"270c-1f3fc.png","sheet_x":49,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"270C-1F3FD","non_qualified":null,"image":"270c-1f3fd.png","sheet_x":49,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"270C-1F3FE","non_qualified":null,"image":"270c-1f3fe.png","sheet_x":49,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"270C-1F3FF","non_qualified":null,"image":"270c-1f3ff.png","sheet_x":49,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Victory Hand","b":"270C-FE0F","c":"270C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","ohyeah","hand","peace","victory","two"],"k":[49,30],"o":1},"crossed_fingers":{"skin_variations":{"1F3FB":{"unified":"1F91E-1F3FB","non_qualified":null,"image":"1f91e-1f3fb.png","sheet_x":38,"sheet_y":12,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F91E-1F3FC","non_qualified":null,"image":"1f91e-1f3fc.png","sheet_x":38,"sheet_y":13,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F91E-1F3FD","non_qualified":null,"image":"1f91e-1f3fd.png","sheet_x":38,"sheet_y":14,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F91E-1F3FE","non_qualified":null,"image":"1f91e-1f3fe.png","sheet_x":38,"sheet_y":15,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F91E-1F3FF","non_qualified":null,"image":"1f91e-1f3ff.png","sheet_x":38,"sheet_y":16,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Hand with Index and Middle Fingers Crossed","b":"1F91E","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["good","lucky"],"k":[38,11],"n":["hand_with_index_and_middle_fingers_crossed"],"o":9},"spock-hand":{"skin_variations":{"1F3FB":{"unified":"1F596-1F3FB","non_qualified":null,"image":"1f596-1f3fb.png","sheet_x":29,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F596-1F3FC","non_qualified":null,"image":"1f596-1f3fc.png","sheet_x":29,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F596-1F3FD","non_qualified":null,"image":"1f596-1f3fd.png","sheet_x":29,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F596-1F3FE","non_qualified":null,"image":"1f596-1f3fe.png","sheet_x":29,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F596-1F3FF","non_qualified":null,"image":"1f596-1f3ff.png","sheet_x":29,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Raised Hand with Part Between Middle and Ring Fingers","b":"1F596","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[29,44],"o":7},"the_horns":{"skin_variations":{"1F3FB":{"unified":"1F918-1F3FB","non_qualified":null,"image":"1f918-1f3fb.png","sheet_x":37,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F918-1F3FC","non_qualified":null,"image":"1f918-1f3fc.png","sheet_x":37,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F918-1F3FD","non_qualified":null,"image":"1f918-1f3fd.png","sheet_x":37,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F918-1F3FE","non_qualified":null,"image":"1f918-1f3fe.png","sheet_x":37,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F918-1F3FF","non_qualified":null,"image":"1f918-1f3ff.png","sheet_x":37,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Sign of the Horns","b":"1F918","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,32],"n":["sign_of_the_horns"],"o":8},"call_me_hand":{"skin_variations":{"1F3FB":{"unified":"1F919-1F3FB","non_qualified":null,"image":"1f919-1f3fb.png","sheet_x":37,"sheet_y":39,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F919-1F3FC","non_qualified":null,"image":"1f919-1f3fc.png","sheet_x":37,"sheet_y":40,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F919-1F3FD","non_qualified":null,"image":"1f919-1f3fd.png","sheet_x":37,"sheet_y":41,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F919-1F3FE","non_qualified":null,"image":"1f919-1f3fe.png","sheet_x":37,"sheet_y":42,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F919-1F3FF","non_qualified":null,"image":"1f919-1f3ff.png","sheet_x":37,"sheet_y":43,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Call Me Hand","b":"1F919","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["hands","gesture"],"k":[37,38],"o":9},"raised_hand_with_fingers_splayed":{"skin_variations":{"1F3FB":{"unified":"1F590-1F3FB","non_qualified":null,"image":"1f590-1f3fb.png","sheet_x":29,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F590-1F3FC","non_qualified":null,"image":"1f590-1f3fc.png","sheet_x":29,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F590-1F3FD","non_qualified":null,"image":"1f590-1f3fd.png","sheet_x":29,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F590-1F3FE","non_qualified":null,"image":"1f590-1f3fe.png","sheet_x":29,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F590-1F3FF","non_qualified":null,"image":"1f590-1f3ff.png","sheet_x":29,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Raised Hand with Fingers Splayed","b":"1F590-FE0F","c":"1F590","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["hand","fingers","palm"],"k":[29,32],"o":7},"hand":{"skin_variations":{"1F3FB":{"unified":"270B-1F3FB","non_qualified":null,"image":"270b-1f3fb.png","sheet_x":49,"sheet_y":25,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"270B-1F3FC","non_qualified":null,"image":"270b-1f3fc.png","sheet_x":49,"sheet_y":26,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"270B-1F3FD","non_qualified":null,"image":"270b-1f3fd.png","sheet_x":49,"sheet_y":27,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"270B-1F3FE","non_qualified":null,"image":"270b-1f3fe.png","sheet_x":49,"sheet_y":28,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"270B-1F3FF","non_qualified":null,"image":"270b-1f3ff.png","sheet_x":49,"sheet_y":29,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Raised Hand","b":"270B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[49,24],"n":["raised_hand"]},"ok_hand":{"skin_variations":{"1F3FB":{"unified":"1F44C-1F3FB","non_qualified":null,"image":"1f44c-1f3fb.png","sheet_x":14,"sheet_y":44,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F44C-1F3FC","non_qualified":null,"image":"1f44c-1f3fc.png","sheet_x":14,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F44C-1F3FD","non_qualified":null,"image":"1f44c-1f3fd.png","sheet_x":14,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F44C-1F3FE","non_qualified":null,"image":"1f44c-1f3fe.png","sheet_x":14,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F44C-1F3FF","non_qualified":null,"image":"1f44c-1f3ff.png","sheet_x":14,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Ok Hand Sign","b":"1F44C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","limbs","perfect","ok","okay"],"k":[14,43]},"+1":{"skin_variations":{"1F3FB":{"unified":"1F44D-1F3FB","non_qualified":null,"image":"1f44d-1f3fb.png","sheet_x":14,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F44D-1F3FC","non_qualified":null,"image":"1f44d-1f3fc.png","sheet_x":14,"sheet_y":51,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F44D-1F3FD","non_qualified":null,"image":"1f44d-1f3fd.png","sheet_x":15,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F44D-1F3FE","non_qualified":null,"image":"1f44d-1f3fe.png","sheet_x":15,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F44D-1F3FF","non_qualified":null,"image":"1f44d-1f3ff.png","sheet_x":15,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Thumbs Up Sign","b":"1F44D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"k":[14,49],"n":["thumbsup"]},"-1":{"skin_variations":{"1F3FB":{"unified":"1F44E-1F3FB","non_qualified":null,"image":"1f44e-1f3fb.png","sheet_x":15,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F44E-1F3FC","non_qualified":null,"image":"1f44e-1f3fc.png","sheet_x":15,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F44E-1F3FD","non_qualified":null,"image":"1f44e-1f3fd.png","sheet_x":15,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F44E-1F3FE","non_qualified":null,"image":"1f44e-1f3fe.png","sheet_x":15,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F44E-1F3FF","non_qualified":null,"image":"1f44e-1f3ff.png","sheet_x":15,"sheet_y":8,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Thumbs Down Sign","b":"1F44E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["thumbsdown","no","dislike","hand"],"k":[15,3],"n":["thumbsdown"]},"fist":{"skin_variations":{"1F3FB":{"unified":"270A-1F3FB","non_qualified":null,"image":"270a-1f3fb.png","sheet_x":49,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"270A-1F3FC","non_qualified":null,"image":"270a-1f3fc.png","sheet_x":49,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"270A-1F3FD","non_qualified":null,"image":"270a-1f3fd.png","sheet_x":49,"sheet_y":21,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"270A-1F3FE","non_qualified":null,"image":"270a-1f3fe.png","sheet_x":49,"sheet_y":22,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"270A-1F3FF","non_qualified":null,"image":"270a-1f3ff.png","sheet_x":49,"sheet_y":23,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Raised Fist","b":"270A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","hand","grasp"],"k":[49,18]},"facepunch":{"skin_variations":{"1F3FB":{"unified":"1F44A-1F3FB","non_qualified":null,"image":"1f44a-1f3fb.png","sheet_x":14,"sheet_y":32,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F44A-1F3FC","non_qualified":null,"image":"1f44a-1f3fc.png","sheet_x":14,"sheet_y":33,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F44A-1F3FD","non_qualified":null,"image":"1f44a-1f3fd.png","sheet_x":14,"sheet_y":34,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F44A-1F3FE","non_qualified":null,"image":"1f44a-1f3fe.png","sheet_x":14,"sheet_y":35,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F44A-1F3FF","non_qualified":null,"image":"1f44a-1f3ff.png","sheet_x":14,"sheet_y":36,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Fisted Hand Sign","b":"1F44A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["angry","violence","fist","hit","attack","hand"],"k":[14,31],"n":["punch"]},"left-facing_fist":{"skin_variations":{"1F3FB":{"unified":"1F91B-1F3FB","non_qualified":null,"image":"1f91b-1f3fb.png","sheet_x":37,"sheet_y":51,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F91B-1F3FC","non_qualified":null,"image":"1f91b-1f3fc.png","sheet_x":38,"sheet_y":0,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F91B-1F3FD","non_qualified":null,"image":"1f91b-1f3fd.png","sheet_x":38,"sheet_y":1,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F91B-1F3FE","non_qualified":null,"image":"1f91b-1f3fe.png","sheet_x":38,"sheet_y":2,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F91B-1F3FF","non_qualified":null,"image":"1f91b-1f3ff.png","sheet_x":38,"sheet_y":3,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Left-Facing Fist","b":"1F91B","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,50],"o":9},"right-facing_fist":{"skin_variations":{"1F3FB":{"unified":"1F91C-1F3FB","non_qualified":null,"image":"1f91c-1f3fb.png","sheet_x":38,"sheet_y":5,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F91C-1F3FC","non_qualified":null,"image":"1f91c-1f3fc.png","sheet_x":38,"sheet_y":6,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F91C-1F3FD","non_qualified":null,"image":"1f91c-1f3fd.png","sheet_x":38,"sheet_y":7,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F91C-1F3FE","non_qualified":null,"image":"1f91c-1f3fe.png","sheet_x":38,"sheet_y":8,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F91C-1F3FF","non_qualified":null,"image":"1f91c-1f3ff.png","sheet_x":38,"sheet_y":9,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Right-Facing Fist","b":"1F91C","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,4],"o":9},"raised_back_of_hand":{"skin_variations":{"1F3FB":{"unified":"1F91A-1F3FB","non_qualified":null,"image":"1f91a-1f3fb.png","sheet_x":37,"sheet_y":45,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F91A-1F3FC","non_qualified":null,"image":"1f91a-1f3fc.png","sheet_x":37,"sheet_y":46,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F91A-1F3FD","non_qualified":null,"image":"1f91a-1f3fd.png","sheet_x":37,"sheet_y":47,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F91A-1F3FE","non_qualified":null,"image":"1f91a-1f3fe.png","sheet_x":37,"sheet_y":48,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F91A-1F3FF","non_qualified":null,"image":"1f91a-1f3ff.png","sheet_x":37,"sheet_y":49,"added_in":"9.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Raised Back of Hand","b":"1F91A","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["fingers","raised","backhand"],"k":[37,44],"o":9},"wave":{"skin_variations":{"1F3FB":{"unified":"1F44B-1F3FB","non_qualified":null,"image":"1f44b-1f3fb.png","sheet_x":14,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F44B-1F3FC","non_qualified":null,"image":"1f44b-1f3fc.png","sheet_x":14,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F44B-1F3FD","non_qualified":null,"image":"1f44b-1f3fd.png","sheet_x":14,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F44B-1F3FE","non_qualified":null,"image":"1f44b-1f3fe.png","sheet_x":14,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F44B-1F3FF","non_qualified":null,"image":"1f44b-1f3ff.png","sheet_x":14,"sheet_y":42,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Waving Hand Sign","b":"1F44B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["hands","gesture","goodbye","solong","farewell","hello","hi","palm"],"k":[14,37]},"i_love_you_hand_sign":{"skin_variations":{"1F3FB":{"unified":"1F91F-1F3FB","non_qualified":null,"image":"1f91f-1f3fb.png","sheet_x":38,"sheet_y":18,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F91F-1F3FC","non_qualified":null,"image":"1f91f-1f3fc.png","sheet_x":38,"sheet_y":19,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F91F-1F3FD","non_qualified":null,"image":"1f91f-1f3fd.png","sheet_x":38,"sheet_y":20,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F91F-1F3FE","non_qualified":null,"image":"1f91f-1f3fe.png","sheet_x":38,"sheet_y":21,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F91F-1F3FF","non_qualified":null,"image":"1f91f-1f3ff.png","sheet_x":38,"sheet_y":22,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"I Love You Hand Sign","b":"1F91F","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[38,17],"o":10},"writing_hand":{"skin_variations":{"1F3FB":{"unified":"270D-1F3FB","non_qualified":null,"image":"270d-1f3fb.png","sheet_x":49,"sheet_y":37,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"270D-1F3FC","non_qualified":null,"image":"270d-1f3fc.png","sheet_x":49,"sheet_y":38,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"270D-1F3FD","non_qualified":null,"image":"270d-1f3fd.png","sheet_x":49,"sheet_y":39,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"270D-1F3FE","non_qualified":null,"image":"270d-1f3fe.png","sheet_x":49,"sheet_y":40,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"270D-1F3FF","non_qualified":null,"image":"270d-1f3ff.png","sheet_x":49,"sheet_y":41,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Writing Hand","b":"270D-FE0F","c":"270D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["lower_left_ballpoint_pen","stationery","write","compose"],"k":[49,36],"o":1},"clap":{"skin_variations":{"1F3FB":{"unified":"1F44F-1F3FB","non_qualified":null,"image":"1f44f-1f3fb.png","sheet_x":15,"sheet_y":10,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F44F-1F3FC","non_qualified":null,"image":"1f44f-1f3fc.png","sheet_x":15,"sheet_y":11,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F44F-1F3FD","non_qualified":null,"image":"1f44f-1f3fd.png","sheet_x":15,"sheet_y":12,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F44F-1F3FE","non_qualified":null,"image":"1f44f-1f3fe.png","sheet_x":15,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F44F-1F3FF","non_qualified":null,"image":"1f44f-1f3ff.png","sheet_x":15,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Clapping Hands Sign","b":"1F44F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["hands","praise","applause","congrats","yay"],"k":[15,9]},"open_hands":{"skin_variations":{"1F3FB":{"unified":"1F450-1F3FB","non_qualified":null,"image":"1f450-1f3fb.png","sheet_x":15,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F450-1F3FC","non_qualified":null,"image":"1f450-1f3fc.png","sheet_x":15,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F450-1F3FD","non_qualified":null,"image":"1f450-1f3fd.png","sheet_x":15,"sheet_y":18,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F450-1F3FE","non_qualified":null,"image":"1f450-1f3fe.png","sheet_x":15,"sheet_y":19,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F450-1F3FF","non_qualified":null,"image":"1f450-1f3ff.png","sheet_x":15,"sheet_y":20,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Open Hands Sign","b":"1F450","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fingers","butterfly","hands","open"],"k":[15,15]},"raised_hands":{"skin_variations":{"1F3FB":{"unified":"1F64C-1F3FB","non_qualified":null,"image":"1f64c-1f3fb.png","sheet_x":33,"sheet_y":13,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F64C-1F3FC","non_qualified":null,"image":"1f64c-1f3fc.png","sheet_x":33,"sheet_y":14,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F64C-1F3FD","non_qualified":null,"image":"1f64c-1f3fd.png","sheet_x":33,"sheet_y":15,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F64C-1F3FE","non_qualified":null,"image":"1f64c-1f3fe.png","sheet_x":33,"sheet_y":16,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F64C-1F3FF","non_qualified":null,"image":"1f64c-1f3ff.png","sheet_x":33,"sheet_y":17,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Person Raising Both Hands in Celebration","b":"1F64C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["gesture","hooray","yea","celebration","hands"],"k":[33,12]},"palms_up_together":{"skin_variations":{"1F3FB":{"unified":"1F932-1F3FB","non_qualified":null,"image":"1f932-1f3fb.png","sheet_x":39,"sheet_y":17,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FC":{"unified":"1F932-1F3FC","non_qualified":null,"image":"1f932-1f3fc.png","sheet_x":39,"sheet_y":18,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FD":{"unified":"1F932-1F3FD","non_qualified":null,"image":"1f932-1f3fd.png","sheet_x":39,"sheet_y":19,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FE":{"unified":"1F932-1F3FE","non_qualified":null,"image":"1f932-1f3fe.png","sheet_x":39,"sheet_y":20,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false},"1F3FF":{"unified":"1F932-1F3FF","non_qualified":null,"image":"1f932-1f3ff.png","sheet_x":39,"sheet_y":21,"added_in":"10.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":false}},"a":"Palms Up Together","b":"1F932","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[39,16],"o":10},"pray":{"skin_variations":{"1F3FB":{"unified":"1F64F-1F3FB","non_qualified":null,"image":"1f64f-1f3fb.png","sheet_x":34,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F64F-1F3FC","non_qualified":null,"image":"1f64f-1f3fc.png","sheet_x":34,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F64F-1F3FD","non_qualified":null,"image":"1f64f-1f3fd.png","sheet_x":34,"sheet_y":5,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F64F-1F3FE","non_qualified":null,"image":"1f64f-1f3fe.png","sheet_x":34,"sheet_y":6,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F64F-1F3FF","non_qualified":null,"image":"1f64f-1f3ff.png","sheet_x":34,"sheet_y":7,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Person with Folded Hands","b":"1F64F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["please","hope","wish","namaste","highfive"],"k":[34,2]},"handshake":{"a":"Handshake","b":"1F91D","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["agreement","shake"],"k":[38,10],"o":9},"nail_care":{"skin_variations":{"1F3FB":{"unified":"1F485-1F3FB","non_qualified":null,"image":"1f485-1f3fb.png","sheet_x":23,"sheet_y":45,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F485-1F3FC","non_qualified":null,"image":"1f485-1f3fc.png","sheet_x":23,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F485-1F3FD","non_qualified":null,"image":"1f485-1f3fd.png","sheet_x":23,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F485-1F3FE","non_qualified":null,"image":"1f485-1f3fe.png","sheet_x":23,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F485-1F3FF","non_qualified":null,"image":"1f485-1f3ff.png","sheet_x":23,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Nail Polish","b":"1F485","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["beauty","manicure","finger","fashion","nail"],"k":[23,44]},"ear":{"skin_variations":{"1F3FB":{"unified":"1F442-1F3FB","non_qualified":null,"image":"1f442-1f3fb.png","sheet_x":13,"sheet_y":46,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F442-1F3FC","non_qualified":null,"image":"1f442-1f3fc.png","sheet_x":13,"sheet_y":47,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F442-1F3FD","non_qualified":null,"image":"1f442-1f3fd.png","sheet_x":13,"sheet_y":48,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F442-1F3FE","non_qualified":null,"image":"1f442-1f3fe.png","sheet_x":13,"sheet_y":49,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F442-1F3FF","non_qualified":null,"image":"1f442-1f3ff.png","sheet_x":13,"sheet_y":50,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Ear","b":"1F442","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","hear","sound","listen"],"k":[13,45]},"nose":{"skin_variations":{"1F3FB":{"unified":"1F443-1F3FB","non_qualified":null,"image":"1f443-1f3fb.png","sheet_x":14,"sheet_y":0,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FC":{"unified":"1F443-1F3FC","non_qualified":null,"image":"1f443-1f3fc.png","sheet_x":14,"sheet_y":1,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FD":{"unified":"1F443-1F3FD","non_qualified":null,"image":"1f443-1f3fd.png","sheet_x":14,"sheet_y":2,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FE":{"unified":"1F443-1F3FE","non_qualified":null,"image":"1f443-1f3fe.png","sheet_x":14,"sheet_y":3,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true},"1F3FF":{"unified":"1F443-1F3FF","non_qualified":null,"image":"1f443-1f3ff.png","sheet_x":14,"sheet_y":4,"added_in":"8.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"has_img_facebook":true,"has_img_messenger":true}},"a":"Nose","b":"1F443","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["smell","sniff"],"k":[13,51]},"footprints":{"a":"Footprints","b":"1F463","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["feet","tracking","walking","beach"],"k":[15,39]},"eyes":{"a":"Eyes","b":"1F440","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["look","watch","stalk","peek","see"],"k":[13,42]},"eye":{"a":"Eye","b":"1F441-FE0F","c":"1F441","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","look","see","watch","stare"],"k":[13,44],"o":7},"eye-in-speech-bubble":{"a":"Eye in Speech Bubble","b":"1F441-FE0F-200D-1F5E8-FE0F","d":true,"e":true,"f":false,"g":true,"h":false,"i":false,"k":[13,43],"o":7},"brain":{"a":"Brain","b":"1F9E0","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["smart","intelligent"],"k":[46,22],"o":10},"tongue":{"a":"Tongue","b":"1F445","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mouth","playful"],"k":[14,6]},"lips":{"a":"Mouth","b":"1F444","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["mouth","kiss"],"k":[14,5]},"kiss":{"a":"Kiss Mark","b":"1F48B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["face","lips","love","like","affection","valentines"],"k":[24,37]},"cupid":{"a":"Heart with Arrow","b":"1F498","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","heart","affection","valentines"],"k":[24,50]},"heart":{"a":"Heavy Black Heart","b":"2764-FE0F","c":"2764","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","valentines"],"k":[50,8],"l":["<3"],"m":"<3","o":1},"heartbeat":{"a":"Beating Heart","b":"1F493","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines","pink","heart"],"k":[24,45]},"broken_heart":{"a":"Broken Heart","b":"1F494","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sad","sorry","break","heart","heartbreak"],"k":[24,46],"l":["</3"],"m":"</3"},"two_hearts":{"a":"Two Hearts","b":"1F495","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines","heart"],"k":[24,47]},"sparkling_heart":{"a":"Sparkling Heart","b":"1F496","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines"],"k":[24,48]},"heartpulse":{"a":"Growing Heart","b":"1F497","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["like","love","affection","valentines","pink"],"k":[24,49]},"blue_heart":{"a":"Blue Heart","b":"1F499","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines"],"k":[24,51],"m":"<3"},"green_heart":{"a":"Green Heart","b":"1F49A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines"],"k":[25,0],"m":"<3"},"yellow_heart":{"a":"Yellow Heart","b":"1F49B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines"],"k":[25,1],"m":"<3"},"orange_heart":{"a":"Orange Heart","b":"1F9E1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["love","like","affection","valentines"],"k":[46,23],"o":10},"purple_heart":{"a":"Purple Heart","b":"1F49C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines"],"k":[25,2],"m":"<3"},"black_heart":{"a":"Black Heart","b":"1F5A4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["evil"],"k":[29,50],"o":9},"gift_heart":{"a":"Heart with Ribbon","b":"1F49D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","valentines"],"k":[25,3]},"revolving_hearts":{"a":"Revolving Hearts","b":"1F49E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["love","like","affection","valentines"],"k":[25,4]},"heart_decoration":{"a":"Heart Decoration","b":"1F49F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["purple-square","love","like"],"k":[25,5]},"heavy_heart_exclamation_mark_ornament":{"a":"Heavy Heart Exclamation Mark Ornament","b":"2763-FE0F","c":"2763","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[50,7],"o":1},"love_letter":{"a":"Love Letter","b":"1F48C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["email","like","affection","envelope","valentines"],"k":[24,38]},"zzz":{"a":"Sleeping Symbol","b":"1F4A4","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["sleepy","tired","dream"],"k":[25,10]},"anger":{"a":"Anger Symbol","b":"1F4A2","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["angry","mad"],"k":[25,8]},"bomb":{"a":"Bomb","b":"1F4A3","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["boom","explode","explosion","terrorism"],"k":[25,9]},"boom":{"a":"Collision Symbol","b":"1F4A5","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bomb","explode","explosion","collision","blown"],"k":[25,11],"n":["collision"]},"sweat_drops":{"a":"Splashing Sweat Symbol","b":"1F4A6","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["water","drip","oops"],"k":[25,12]},"dash":{"a":"Dash Symbol","b":"1F4A8","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["wind","air","fast","shoo","fart","smoke","puff"],"k":[25,14]},"dizzy":{"a":"Dizzy Symbol","b":"1F4AB","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["star","sparkle","shoot","magic"],"k":[25,22]},"speech_balloon":{"a":"Speech Balloon","b":"1F4AC","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bubble","words","message","talk","chatting"],"k":[25,23]},"left_speech_bubble":{"a":"Left Speech Bubble","b":"1F5E8-FE0F","c":"1F5E8","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["words","message","talk","chatting"],"k":[30,15],"o":7},"right_anger_bubble":{"a":"Right Anger Bubble","b":"1F5EF-FE0F","c":"1F5EF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["caption","speech","thinking","mad"],"k":[30,16],"o":7},"thought_balloon":{"a":"Thought Balloon","b":"1F4AD","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bubble","cloud","speech","thinking","dream"],"k":[25,24]},"hole":{"a":"Hole","b":"1F573-FE0F","c":"1F573","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["embarrassing"],"k":[28,44],"o":7},"eyeglasses":{"a":"Eyeglasses","b":"1F453","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","accessories","eyesight","nerdy","dork","geek"],"k":[15,23]},"dark_sunglasses":{"a":"Dark Sunglasses","b":"1F576-FE0F","c":"1F576","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["face","cool","accessories"],"k":[29,17],"o":7},"necktie":{"a":"Necktie","b":"1F454","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shirt","suitup","formal","fashion","cloth","business"],"k":[15,24]},"shirt":{"a":"T-Shirt","b":"1F455","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"k":[15,25],"n":["tshirt"]},"jeans":{"a":"Jeans","b":"1F456","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","shopping"],"k":[15,26]},"scarf":{"a":"Scarf","b":"1F9E3","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["neck","winter","clothes"],"k":[46,25],"o":10},"gloves":{"a":"Gloves","b":"1F9E4","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["hands","winter","clothes"],"k":[46,26],"o":10},"coat":{"a":"Coat","b":"1F9E5","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["jacket"],"k":[46,27],"o":10},"socks":{"a":"Socks","b":"1F9E6","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["stockings","clothes"],"k":[46,28],"o":10},"dress":{"a":"Dress","b":"1F457","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["clothes","fashion","shopping"],"k":[15,27]},"kimono":{"a":"Kimono","b":"1F458","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["dress","fashion","women","female","japanese"],"k":[15,28]},"bikini":{"a":"Bikini","b":"1F459","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["swimming","female","woman","girl","fashion","beach","summer"],"k":[15,29]},"womans_clothes":{"a":"Womans Clothes","b":"1F45A","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","shopping_bags","female"],"k":[15,30]},"purse":{"a":"Purse","b":"1F45B","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","accessories","money","sales","shopping"],"k":[15,31]},"handbag":{"a":"Handbag","b":"1F45C","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","accessory","accessories","shopping"],"k":[15,32]},"pouch":{"a":"Pouch","b":"1F45D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["bag","accessories","shopping"],"k":[15,33]},"shopping_bags":{"a":"Shopping Bags","b":"1F6CD-FE0F","c":"1F6CD","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[37,2],"o":7},"school_satchel":{"a":"School Satchel","b":"1F392","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["student","education","bag","backpack"],"k":[8,37]},"mans_shoe":{"a":"Mans Shoe","b":"1F45E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","male"],"k":[15,34],"n":["shoe"]},"athletic_shoe":{"a":"Athletic Shoe","b":"1F45F","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shoes","sports","sneakers"],"k":[15,35]},"high_heel":{"a":"High-Heeled Shoe","b":"1F460","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","shoes","female","pumps","stiletto"],"k":[15,36]},"sandal":{"a":"Womans Sandal","b":"1F461","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shoes","fashion","flip flops"],"k":[15,37]},"boot":{"a":"Womans Boots","b":"1F462","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["shoes","fashion"],"k":[15,38]},"crown":{"a":"Crown","b":"1F451","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["king","kod","leader","royalty","lord"],"k":[15,21]},"womans_hat":{"a":"Womans Hat","b":"1F452","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["fashion","accessories","female","lady","spring"],"k":[15,22]},"tophat":{"a":"Top Hat","b":"1F3A9","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["magic","gentleman","classy","circus"],"k":[9,3]},"mortar_board":{"a":"Graduation Cap","b":"1F393","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["school","college","degree","university","graduation","cap","hat","legal","learn","education"],"k":[8,38]},"billed_cap":{"a":"Billed Cap","b":"1F9E2","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[46,24],"o":10},"helmet_with_white_cross":{"a":"Helmet with White Cross","b":"26D1-FE0F","c":"26D1","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"k":[48,33],"o":5},"prayer_beads":{"a":"Prayer Beads","b":"1F4FF","d":true,"e":true,"f":true,"g":true,"h":true,"i":false,"j":["dhikr","religious"],"k":[27,1],"o":8},"lipstick":{"a":"Lipstick","b":"1F484","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["female","girl","fashion","woman"],"k":[23,43]},"ring":{"a":"Ring","b":"1F48D","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],"k":[24,39]},"gem":{"a":"Gem Stone","b":"1F48E","d":true,"e":true,"f":true,"g":true,"h":true,"i":true,"j":["blue","ruby","diamond","jewelry"],"k":[24,40]}},"aliases":{"satisfied":"laughing","grinning_face_with_star_eyes":"star-struck","face_with_one_eyebrow_raised":"face_with_raised_eyebrow","telephone":"phone","cooking":"fried_egg","paw_prints":"feet","flag-cn":"cn","lantern":"izakaya_lantern","shocked_face_with_exploding_head":"exploding_head","open_book":"book","flag-de":"de","grinning_face_with_one_large_and_one_small_eye":"zany_face","serious_face_with_symbols_covering_mouth":"face_with_symbols_on_mouth","flipper":"dolphin","face_with_open_mouth_vomiting":"face_vomiting","flag-es":"es","face_with_finger_covering_closed_lips":"shushing_face","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"face_with_hand_over_mouth","flag-fr":"fr","honeybee":"bee","red_car":"car","envelope":"email","uk":"gb","flag-gb":"gb","poop":"hankey","shit":"hankey","staff_of_aesculapius":"medical_symbol","knife":"hocho","sailboat":"boat","pencil":"memo","flag-it":"it","flag-jp":"jp","heavy_exclamation_mark":"exclamation","flag-kr":"kr","waxing_gibbous_moon":"moon","mother_christmas":"mrs_claus","sun_small_cloud":"mostly_sunny","sun_behind_cloud":"barely_sunny","sun_behind_rain_cloud":"partly_sunny_rain","lightning_cloud":"lightning","tornado_cloud":"tornado","flag-ru":"ru","running":"runner","flag-us":"us","man_and_woman_holding_hands":"couple","man-woman-boy":"family","family":"man-woman-boy","reversed_hand_with_middle_finger_extended":"middle_finger","hand_with_index_and_middle_fingers_crossed":"crossed_fingers","sign_of_the_horns":"the_horns","raised_hand":"hand","thumbsup":"+1","thumbsdown":"-1","punch":"facepunch","collision":"boom","tshirt":"shirt","shoe":"mans_shoe"}};

/***/ }),

/***/ "./node_modules/emoji-mart-vue-fast/dist/emoji-mart.js":
/*!*************************************************************!*\
  !*** ./node_modules/emoji-mart-vue-fast/dist/emoji-mart.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! ../data/all.json */ "./node_modules/emoji-mart-vue-fast/data/all.json"), __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")) : undefined;
}(window, function (e, t) {
  return function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var r = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }

    return i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
      return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i(i.s = 18);
  }([function (e, t, i) {
    var n = i(9);

    e.exports = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable;
        }))), r.forEach(function (t) {
          n(e, t, i[t]);
        });
      }

      return e;
    };
  }, function (e, t, i) {
    var n = i(5),
        r = {
      name: "a",
      unified: "b",
      non_qualified: "c",
      has_img_apple: "d",
      has_img_google: "e",
      has_img_twitter: "f",
      has_img_emojione: "g",
      has_img_facebook: "h",
      has_img_messenger: "i",
      keywords: "j",
      sheet: "k",
      emoticons: "l",
      text: "m",
      short_names: "n",
      added_in: "o"
    },
        o = function (e) {
      var t = [],
          i = function (e, i) {
        e && (Array.isArray(e) ? e : [e]).forEach(function (e) {
          (i ? e.split(/[-|_|\s]+/) : [e]).forEach(function (e) {
            e = e.toLowerCase(), -1 == t.indexOf(e) && t.push(e);
          });
        });
      };

      return i(e.short_names, !0), i(e.name, !0), i(e.keywords, !1), i(e.emoticons, !1), t.join(",");
    };

    e.exports = {
      buildSearch: o,
      compress: function (e) {
        for (var t in e.short_names = e.short_names.filter(function (t) {
          return t !== e.short_name;
        }), delete e.short_name, e.sheet = [e.sheet_x, e.sheet_y], delete e.sheet_x, delete e.sheet_y, e.added_in = parseInt(e.added_in), 6 === e.added_in && delete e.added_in, r) e[r[t]] = e[t], delete e[t];

        for (var i in e) {
          var n = e[i];
          Array.isArray(n) && !n.length ? delete e[i] : "string" != typeof n || n.length ? null === n && delete e[i] : delete e[i];
        }
      },
      uncompress: function (e) {
        if (!e.compressed) return e;

        for (var t in e.compressed = !1, e.emojis) {
          var i = e.emojis[t];

          for (var s in r) i[s] = i[r[s]], delete i[r[s]];

          i.short_names || (i.short_names = []), i.short_names.unshift(t), i.sheet_x = i.sheet[0], i.sheet_y = i.sheet[1], delete i.sheet, i.text || (i.text = ""), i.added_in || (i.added_in = 6), i.added_in = i.added_in.toFixed(1), i.search = o(i);
        }

        return e = function e(t) {
          var i = Object.getOwnPropertyNames(t),
              r = !0,
              o = !1,
              s = void 0;

          try {
            for (var a, l = i[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
              var c = a.value,
                  u = t[c];
              t[c] = u && "object" === n(u) ? e(u) : u;
            }
          } catch (e) {
            o = !0, s = e;
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (o) throw s;
            }
          }

          return Object.freeze(t);
        }(e);
      }
    };
  }, function (t, i) {
    t.exports = e;
  }, function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (e, t) {
    function i(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    e.exports = function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    };
  }, function (e, t) {
    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function n(t) {
      return "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? e.exports = n = function (e) {
        return i(e);
      } : e.exports = n = function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : i(e);
      }, n(t);
    }

    e.exports = n;
  }, function (e, t, i) {
    "use strict";

    (function (e) {
      i.d(t, "a", function () {
        return $;
      }), i.d(t, "b", function () {
        return P;
      });
      i(8);
      var n = {
        itemsLimit: 1e3
      };
      var r = void 0;

      function o() {
        o.init || (o.init = !0, r = -1 !== function () {
          var e = window.navigator.userAgent,
              t = e.indexOf("MSIE ");
          if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);

          if (e.indexOf("Trident/") > 0) {
            var i = e.indexOf("rv:");
            return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
          }

          var n = e.indexOf("Edge/");
          return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
        }());
      }

      var s = {
        render: function () {
          var e = this.$createElement;
          return (this._self._c || e)("div", {
            staticClass: "resize-observer",
            attrs: {
              tabindex: "-1"
            }
          });
        },
        staticRenderFns: [],
        _scopeId: "data-v-b329ee4c",
        name: "resize-observer",
        methods: {
          compareAndNotify: function () {
            this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight || (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify"));
          },
          addResizeHandlers: function () {
            this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
          },
          removeResizeHandlers: function () {
            this._resizeObject && this._resizeObject.onload && (!r && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
          }
        },
        mounted: function () {
          var e = this;
          o(), this.$nextTick(function () {
            e._w = e.$el.offsetWidth, e._h = e.$el.offsetHeight;
          });
          var t = document.createElement("object");
          this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", r && this.$el.appendChild(t), t.data = "about:blank", r || this.$el.appendChild(t);
        },
        beforeDestroy: function () {
          this.removeResizeHandlers();
        }
      };
      var a = {
        version: "0.4.5",
        install: function (e) {
          e.component("resize-observer", s), e.component("ResizeObserver", s);
        }
      },
          l = null;
      "undefined" != typeof window ? l = window.Vue : void 0 !== e && (l = e.Vue), l && l.use(a);

      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          u = (function () {
        function e(e) {
          this.value = e;
        }

        function t(t) {
          var i, n;

          function r(i, n) {
            try {
              var s = t[i](n),
                  a = s.value;
              a instanceof e ? Promise.resolve(a.value).then(function (e) {
                r("next", e);
              }, function (e) {
                r("throw", e);
              }) : o(s.done ? "return" : "normal", s.value);
            } catch (e) {
              o("throw", e);
            }
          }

          function o(e, t) {
            switch (e) {
              case "return":
                i.resolve({
                  value: t,
                  done: !0
                });
                break;

              case "throw":
                i.reject(t);
                break;

              default:
                i.resolve({
                  value: t,
                  done: !1
                });
            }

            (i = i.next) ? r(i.key, i.arg) : n = null;
          }

          this._invoke = function (e, t) {
            return new Promise(function (o, s) {
              var a = {
                key: e,
                arg: t,
                resolve: o,
                reject: s,
                next: null
              };
              n ? n = n.next = a : (i = n = a, r(e, t));
            });
          }, "function" != typeof t.return && (this.return = void 0);
        }

        "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function () {
          return this;
        }), t.prototype.next = function (e) {
          return this._invoke("next", e);
        }, t.prototype.throw = function (e) {
          return this._invoke("throw", e);
        }, t.prototype.return = function (e) {
          return this._invoke("return", e);
        };
      }(), function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }),
          d = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      }(),
          h = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];

          return i;
        }

        return Array.from(e);
      };

      var m = function () {
        function e(t, i, n) {
          u(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, n);
        }

        return d(e, [{
          key: "createObserver",
          value: function (e, t) {
            var i,
                n,
                r,
                o,
                s,
                a,
                l,
                c = this;
            (this.observer && this.destroyObserver(), this.frozen) || (this.options = "function" == typeof (i = e) ? {
              callback: i
            } : i, this.callback = this.options.callback, this.callback && this.options.throttle && (this.callback = (n = this.callback, r = this.options.throttle, o = void 0, s = void 0, a = void 0, (l = function (e) {
              for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) i[l - 1] = arguments[l];

              a = i, o && e === s || (s = e, clearTimeout(o), o = setTimeout(function () {
                n.apply(void 0, [e].concat(h(a))), o = 0;
              }, r));
            })._clear = function () {
              clearTimeout(o);
            }, l)), this.oldResult = void 0, this.observer = new IntersectionObserver(function (e) {
              var t = e[0];

              if (c.callback) {
                var i = t.isIntersecting && t.intersectionRatio >= c.threshold;
                if (i === c.oldResult) return;
                c.oldResult = i, c.callback(i, t), i && c.options.once && (c.frozen = !0, c.destroyObserver());
              }
            }, this.options.intersection), t.context.$nextTick(function () {
              c.observer.observe(c.el);
            }));
          }
        }, {
          key: "destroyObserver",
          value: function () {
            this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
          }
        }, {
          key: "threshold",
          get: function () {
            return this.options.intersection && this.options.intersection.threshold || 0;
          }
        }]), e;
      }();

      function f(e, t, i) {
        var n = t.value;
        if ("undefined" == typeof IntersectionObserver) console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else {
          var r = new m(e, n, i);
          e._vue_visibilityState = r;
        }
      }

      var v = {
        bind: f,
        update: function (e, t, i) {
          var n = t.value;

          if (!function e(t, i) {
            if (t === i) return !0;

            if ("object" === (void 0 === t ? "undefined" : c(t))) {
              for (var n in t) if (!e(t[n], i[n])) return !1;

              return !0;
            }

            return !1;
          }(n, t.oldValue)) {
            var r = e._vue_visibilityState;
            r ? r.createObserver(n, i) : f(e, {
              value: n
            }, i);
          }
        },
        unbind: function (e) {
          var t = e._vue_visibilityState;
          t && (t.destroyObserver(), delete e._vue_visibilityState);
        }
      };
      var p = {
        version: "0.4.3",
        install: function (e) {
          e.directive("observe-visibility", v);
        }
      },
          y = null;
      "undefined" != typeof window ? y = window.Vue : void 0 !== e && (y = e.Vue), y && y.use(p);
      var g = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

      var _,
          j = (function (e) {
        var t, i;
        t = g, i = function () {
          var e = /(auto|scroll)/,
              t = function (e, i) {
            return null === e.parentNode ? i : t(e.parentNode, i.concat([e]));
          },
              i = function (e, t) {
            return getComputedStyle(e, null).getPropertyValue(t);
          },
              n = function (t) {
            return e.test(function (e) {
              return i(e, "overflow") + i(e, "overflow-y") + i(e, "overflow-x");
            }(t));
          };

          return function (e) {
            if (e instanceof HTMLElement || e instanceof SVGElement) {
              for (var i = t(e.parentNode, []), r = 0; r < i.length; r += 1) if (n(i[r])) return i[r];

              return document.scrollingElement || document.documentElement;
            }
          };
        }, e.exports ? e.exports = i() : t.Scrollparent = i();
      }(_ = {
        exports: {}
      }, _.exports), _.exports),
          b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          w = (function () {
        function e(e) {
          this.value = e;
        }

        function t(t) {
          var i, n;

          function r(i, n) {
            try {
              var s = t[i](n),
                  a = s.value;
              a instanceof e ? Promise.resolve(a.value).then(function (e) {
                r("next", e);
              }, function (e) {
                r("throw", e);
              }) : o(s.done ? "return" : "normal", s.value);
            } catch (e) {
              o("throw", e);
            }
          }

          function o(e, t) {
            switch (e) {
              case "return":
                i.resolve({
                  value: t,
                  done: !0
                });
                break;

              case "throw":
                i.reject(t);
                break;

              default:
                i.resolve({
                  value: t,
                  done: !1
                });
            }

            (i = i.next) ? r(i.key, i.arg) : n = null;
          }

          this._invoke = function (e, t) {
            return new Promise(function (o, s) {
              var a = {
                key: e,
                arg: t,
                resolve: o,
                reject: s,
                next: null
              };
              n ? n = n.next = a : (i = n = a, r(e, t));
            });
          }, "function" != typeof t.return && (this.return = void 0);
        }

        "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function () {
          return this;
        }), t.prototype.next = function (e) {
          return this._invoke("next", e);
        }, t.prototype.throw = function (e) {
          return this._invoke("throw", e);
        }, t.prototype.return = function (e) {
          return this._invoke("return", e);
        };
      }(), function (e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }),
          S = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }

        return e;
      },
          k = {
        items: {
          type: Array,
          required: !0
        },
        keyField: {
          type: String,
          default: "id"
        },
        direction: {
          type: String,
          default: "vertical",
          validator: function (e) {
            return ["vertical", "horizontal"].includes(e);
          }
        }
      };

      function x() {
        return this.items.length && "object" !== b(this.items[0]);
      }

      var C = !1;

      if ("undefined" != typeof window) {
        C = !1;

        try {
          var z = Object.defineProperty({}, "passive", {
            get: function () {
              C = !0;
            }
          });
          window.addEventListener("test", null, z);
        } catch (e) {}
      }

      var E = 0,
          O = {
        render: function () {
          var e = this,
              t = e.$createElement,
              i = e._self._c || t;
          return i("div", {
            directives: [{
              name: "observe-visibility",
              rawName: "v-observe-visibility",
              value: e.handleVisibilityChange,
              expression: "handleVisibilityChange"
            }],
            staticClass: "vue-recycle-scroller",
            class: w({
              ready: e.ready,
              "page-mode": e.pageMode
            }, "direction-" + e.direction, !0),
            on: {
              "&scroll": function (t) {
                return e.handleScroll(t);
              }
            }
          }, [e.$slots.before ? i("div", {
            staticClass: "vue-recycle-scroller__slot"
          }, [e._t("before")], 2) : e._e(), e._v(" "), i("div", {
            ref: "wrapper",
            staticClass: "vue-recycle-scroller__item-wrapper",
            style: w({}, "vertical" === e.direction ? "minHeight" : "minWidth", e.totalSize + "px")
          }, e._l(e.pool, function (t) {
            return i("div", {
              key: t.nr.id,
              staticClass: "vue-recycle-scroller__item-view",
              class: {
                hover: e.hoverKey === t.nr.key
              },
              style: e.ready ? {
                transform: "translate" + ("vertical" === e.direction ? "Y" : "X") + "(" + t.position + "px)"
              } : null,
              on: {
                mouseenter: function (i) {
                  e.hoverKey = t.nr.key;
                },
                mouseleave: function (t) {
                  e.hoverKey = null;
                }
              }
            }, [e._t("default", null, {
              item: t.item,
              index: t.nr.index,
              active: t.nr.used
            })], 2);
          }), 0), e._v(" "), e.$slots.after ? i("div", {
            staticClass: "vue-recycle-scroller__slot"
          }, [e._t("after")], 2) : e._e(), e._v(" "), i("ResizeObserver", {
            on: {
              notify: e.handleResize
            }
          })], 1);
        },
        staticRenderFns: [],
        name: "RecycleScroller",
        components: {
          ResizeObserver: s
        },
        directives: {
          ObserveVisibility: v
        },
        props: S({}, k, {
          itemSize: {
            type: Number,
            default: null
          },
          minItemSize: {
            type: [Number, String],
            default: null
          },
          sizeField: {
            type: String,
            default: "size"
          },
          typeField: {
            type: String,
            default: "type"
          },
          buffer: {
            type: Number,
            default: 200
          },
          pageMode: {
            type: Boolean,
            default: !1
          },
          prerender: {
            type: Number,
            default: 0
          },
          emitUpdate: {
            type: Boolean,
            default: !1
          }
        }),
        data: function () {
          return {
            pool: [],
            totalSize: 0,
            ready: !1,
            hoverKey: null
          };
        },
        computed: {
          sizes: function () {
            if (null === this.itemSize) {
              for (var e = {
                "-1": {
                  accumulator: 0
                }
              }, t = this.items, i = this.sizeField, n = this.minItemSize, r = 0, o = void 0, s = 0, a = t.length; s < a; s++) r += o = t[s][i] || n, e[s] = {
                accumulator: r,
                size: o
              };

              return e;
            }

            return [];
          },
          simpleArray: x
        },
        watch: {
          items: function () {
            this.updateVisibleItems(!0);
          },
          pageMode: function () {
            this.applyPageMode(), this.updateVisibleItems(!1);
          },
          sizes: {
            handler: function () {
              this.updateVisibleItems(!1);
            },
            deep: !0
          }
        },
        created: function () {
          this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = new Map(), this.$_unusedViews = new Map(), this.$_scrollDirty = !1, this.$isServer && this.updateVisibleItems(!1);
        },
        mounted: function () {
          var e = this;
          this.applyPageMode(), this.$nextTick(function () {
            e.updateVisibleItems(!0), e.ready = !0;
          });
        },
        beforeDestroy: function () {
          this.removeListeners();
        },
        methods: {
          addView: function (e, t, i, n, r) {
            var o = {
              item: i,
              position: 0
            },
                s = {
              id: E++,
              index: t,
              used: !0,
              key: n,
              type: r
            };
            return Object.defineProperty(o, "nr", {
              configurable: !1,
              value: s
            }), e.push(o), o;
          },
          unuseView: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = this.$_unusedViews,
                n = e.nr.type,
                r = i.get(n);
            r || (r = [], i.set(n, r)), r.push(e), t || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
          },
          handleResize: function () {
            this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
          },
          handleScroll: function (e) {
            var t = this;
            this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(function () {
              t.$_scrollDirty = !1, t.updateVisibleItems(!1).continuous || (clearTimeout(t.$_refreshTimout), t.$_refreshTimout = setTimeout(t.handleScroll, 100));
            }));
          },
          handleVisibilityChange: function (e, t) {
            var i = this;
            this.ready && (e || 0 !== t.boundingClientRect.width || 0 !== t.boundingClientRect.height ? (this.$emit("visible"), requestAnimationFrame(function () {
              i.updateVisibleItems(!1);
            })) : this.$emit("hidden"));
          },
          updateVisibleItems: function (e) {
            var t = this.itemSize,
                i = this.typeField,
                r = this.simpleArray ? null : this.keyField,
                o = this.items,
                s = o.length,
                a = this.sizes,
                l = this.$_views,
                c = this.$_unusedViews,
                u = this.pool,
                d = void 0,
                h = void 0,
                m = void 0;
            if (s) {
              if (this.$isServer) d = 0, h = this.prerender, m = null;else {
                var f = this.getScroll(),
                    v = this.buffer;

                if (f.start -= v, f.end += v, null === t) {
                  var p = 0,
                      y = s - 1,
                      g = ~~(s / 2),
                      _ = void 0;

                  do {
                    _ = g, a[g].accumulator < f.start ? p = g : g < s - 1 && a[g + 1].accumulator > f.start && (y = g), g = ~~((p + y) / 2);
                  } while (g !== _);

                  for (g < 0 && (g = 0), d = g, m = a[s - 1].accumulator, h = g; h < s && a[h].accumulator < f.end; h++);

                  -1 === h ? h = o.length - 1 : ++h > s && (h = s);
                } else (d = ~~(f.start / t)) < 0 && (d = 0), (h = Math.ceil(f.end / t)) > s && (h = s), m = s * t;
              }
            } else d = h = m = 0;
            h - d > n.itemsLimit && this.itemsLimitError(), this.totalSize = m;
            var j = void 0,
                b = d <= this.$_endIndex && h >= this.$_startIndex,
                w = void 0;

            if (this.$_continuous !== b) {
              if (b) {
                l.clear(), c.clear();

                for (var S = 0, k = u.length; S < k; S++) j = u[S], this.unuseView(j);
              }

              this.$_continuous = b;
            } else if (b) for (var x = 0, C = u.length; x < C; x++) (j = u[x]).nr.used && (e && (j.nr.index = o.findIndex(function (e) {
              return r ? e[r] === j.item[r] : e === j.item;
            })), (-1 === j.nr.index || j.nr.index < d || j.nr.index >= h) && this.unuseView(j));

            b || (w = new Map());

            for (var z = void 0, E = void 0, O = void 0, $ = void 0, P = d; P < h; P++) {
              z = o[P];
              var M = r ? z[r] : z;
              j = l.get(M), t || a[P].size ? (j ? (j.nr.used = !0, j.item = z) : (E = z[i], b ? (O = c.get(E)) && O.length ? ((j = O.pop()).item = z, j.nr.used = !0, j.nr.index = P, j.nr.key = M, j.nr.type = E) : j = this.addView(u, P, z, M, E) : (O = c.get(E), $ = w.get(E) || 0, O && $ < O.length ? ((j = O[$]).item = z, j.nr.used = !0, j.nr.index = P, j.nr.key = M, j.nr.type = E, w.set(E, $ + 1)) : (j = this.addView(u, P, z, M, E), this.unuseView(j, !0)), $++), l.set(M, j)), j.position = null === t ? a[P - 1].accumulator : P * t) : j && this.unuseView(j);
            }

            return this.$_startIndex = d, this.$_endIndex = h, this.emitUpdate && this.$emit("update", d, h), {
              continuous: b
            };
          },
          getListenerTarget: function () {
            var e = j(this.$el);
            return !window.document || e !== window.document.documentElement && e !== window.document.body || (e = window), e;
          },
          getScroll: function () {
            var e = this.$el,
                t = "vertical" === this.direction,
                i = void 0;

            if (this.pageMode) {
              var n = e.getBoundingClientRect(),
                  r = t ? n.height : n.width,
                  o = -(t ? n.top : n.left),
                  s = t ? window.innerHeight : window.innerWidth;
              o < 0 && (s += o, o = 0), o + s > r && (s = r - o), i = {
                start: o,
                end: o + s
              };
            } else i = t ? {
              start: e.scrollTop,
              end: e.scrollTop + e.clientHeight
            } : {
              start: e.scrollLeft,
              end: e.scrollLeft + e.clientWidth
            };

            return i;
          },
          applyPageMode: function () {
            this.pageMode ? this.addListeners() : this.removeListeners();
          },
          addListeners: function () {
            this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, !!C && {
              passive: !0
            }), this.listenerTarget.addEventListener("resize", this.handleResize);
          },
          removeListeners: function () {
            this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
          },
          scrollToItem: function (e) {
            var t = void 0;
            t = null === this.itemSize ? e > 0 ? this.sizes[e - 1].accumulator : 0 : e * this.itemSize, this.scrollToPosition(t);
          },
          scrollToPosition: function (e) {
            "vertical" === this.direction ? this.$el.scrollTop = e : this.$el.scrollLeft = e;
          },
          itemsLimitError: function () {
            var e = this;
            throw setTimeout(function () {
              console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", e.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
          }
        }
      },
          $ = {
        render: function () {
          var e = this,
              t = e.$createElement,
              i = e._self._c || t;
          return i("RecycleScroller", e._g(e._b({
            ref: "scroller",
            attrs: {
              items: e.itemsWithSize,
              "min-item-size": e.minItemSize,
              direction: e.direction,
              "key-field": "id"
            },
            on: {
              resize: e.onScrollerResize,
              visible: e.onScrollerVisible
            },
            scopedSlots: e._u([{
              key: "default",
              fn: function (t) {
                var i = t.item,
                    n = t.index,
                    r = t.active;
                return [e._t("default", null, null, {
                  item: i.item,
                  index: n,
                  active: r,
                  itemWithSize: i
                })];
              }
            }])
          }, "RecycleScroller", e.$attrs, !1), e.listeners), [i("template", {
            slot: "before"
          }, [e._t("before")], 2), e._v(" "), i("template", {
            slot: "after"
          }, [e._t("after")], 2)], 2);
        },
        staticRenderFns: [],
        name: "DynamicScroller",
        components: {
          RecycleScroller: O
        },
        inheritAttrs: !1,
        provide: function () {
          return {
            vscrollData: this.vscrollData,
            vscrollParent: this
          };
        },
        props: S({}, k, {
          minItemSize: {
            type: [Number, String],
            required: !0
          }
        }),
        data: function () {
          return {
            vscrollData: {
              active: !0,
              sizes: {},
              validSizes: {},
              keyField: this.keyField,
              simpleArray: !1
            }
          };
        },
        computed: {
          simpleArray: x,
          itemsWithSize: function () {
            for (var e = [], t = this.items, i = this.keyField, n = this.simpleArray, r = this.vscrollData.sizes, o = 0; o < t.length; o++) {
              var s = t[o],
                  a = n ? o : s[i],
                  l = r[a];
              void 0 !== l || this.$_undefinedMap[a] || (this.$_undefinedSizes++, this.$_undefinedMap[a] = !0, l = 0), e.push({
                item: s,
                id: a,
                size: l
              });
            }

            return e;
          },
          listeners: function () {
            var e = {};

            for (var t in this.$listeners) "resize" !== t && "visible" !== t && (e[t] = this.$listeners[t]);

            return e;
          }
        },
        watch: {
          items: function () {
            this.forceUpdate(!1);
          },
          simpleArray: {
            handler: function (e) {
              this.vscrollData.simpleArray = e;
            },
            immediate: !0
          },
          direction: function (e) {
            this.forceUpdate(!0);
          }
        },
        created: function () {
          this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {};
        },
        activated: function () {
          this.vscrollData.active = !0;
        },
        deactivated: function () {
          this.vscrollData.active = !1;
        },
        methods: {
          onScrollerResize: function () {
            this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
          },
          onScrollerVisible: function () {
            this.$emit("vscroll:update", {
              force: !1
            }), this.$emit("visible");
          },
          forceUpdate: function () {
            (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] || this.simpleArray) && (this.vscrollData.validSizes = {}), this.$emit("vscroll:update", {
              force: !0
            });
          },
          scrollToItem: function (e) {
            var t = this.$refs.scroller;
            t && t.scrollToItem(e);
          },
          getItemSize: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                i = this.simpleArray ? null != t ? t : this.items.indexOf(e) : e[this.keyField];
            return this.vscrollData.sizes[i] || 0;
          },
          scrollToBottom: function () {
            var e = this;

            if (!this.$_scrollingToBottom) {
              this.$_scrollingToBottom = !0;
              var t = this.$el;
              this.$nextTick(function () {
                requestAnimationFrame(function i() {
                  t.scrollTop = t.scrollHeight, 0 === e.$_undefinedSizes ? e.$_scrollingToBottom = !1 : requestAnimationFrame(i);
                });
              });
            }
          }
        }
      },
          P = {
        name: "DynamicScrollerItem",
        inject: ["vscrollData", "vscrollParent"],
        props: {
          item: {
            required: !0
          },
          watchData: {
            type: Boolean,
            default: !1
          },
          active: {
            type: Boolean,
            required: !0
          },
          index: {
            type: Number,
            default: void 0
          },
          sizeDependencies: {
            type: [Array, Object],
            default: null
          },
          emitResize: {
            type: Boolean,
            default: !1
          },
          tag: {
            type: String,
            default: "div"
          }
        },
        computed: {
          id: function () {
            return this.vscrollData.simpleArray ? this.index : this.item[this.vscrollData.keyField];
          },
          size: function () {
            return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
          }
        },
        watch: {
          watchData: "updateWatchData",
          id: function () {
            this.size || this.onDataUpdate();
          },
          active: function (e) {
            e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
          }
        },
        created: function () {
          var e = this;

          if (!this.$isServer) {
            this.$_forceNextVScrollUpdate = null, this.updateWatchData();

            var t = function (t) {
              e.$watch(function () {
                return e.sizeDependencies[t];
              }, e.onDataUpdate);
            };

            for (var i in this.sizeDependencies) t(i);

            this.vscrollParent.$on("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$on("vscroll:update-size", this.onVscrollUpdateSize);
          }
        },
        mounted: function () {
          this.vscrollData.active && this.updateSize();
        },
        beforeDestroy: function () {
          this.vscrollParent.$off("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$off("vscroll:update-size", this.onVscrollUpdateSize);
        },
        methods: {
          updateSize: function () {
            this.active && this.vscrollData.active ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.active && this.vscrollData.active && this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
          },
          getBounds: function () {
            return this.$el.getBoundingClientRect();
          },
          updateWatchData: function () {
            var e = this;
            this.watchData ? this.$_watchData = this.$watch("data", function () {
              e.onDataUpdate();
            }, {
              deep: !0
            }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
          },
          onVscrollUpdate: function (e) {
            var t = e.force;
            !this.active && t && (this.$_pendingVScrollUpdate = this.id), this.$_forceNextVScrollUpdate !== this.id && !t && this.size || this.updateSize();
          },
          onDataUpdate: function () {
            this.updateSize();
          },
          computeSize: function (e) {
            var t = this;
            this.$nextTick(function () {
              if (t.id === e) {
                var i = t.getBounds(),
                    n = Math.round("vertical" === t.vscrollParent.direction ? i.height : i.width);
                n && t.size !== n && (t.vscrollParent.$_undefinedMap[e] && (t.vscrollParent.$_undefinedSizes--, t.vscrollParent.$_undefinedMap[e] = void 0), t.$set(t.vscrollData.sizes, t.id, n), t.$set(t.vscrollData.validSizes, t.id, !0), t.emitResize && t.$emit("resize", t.id));
              }

              t.$_pendingSizeUpdate = null;
            });
          }
        },
        render: function (e) {
          return e(this.tag, this.$slots.default);
        }
      };
      var M = {
        version: "1.0.0-rc.2",
        install: function (e, t) {
          var i = Object.assign({}, {
            installComponents: !0,
            componentsPrefix: ""
          }, t);

          for (var r in i) void 0 !== i[r] && (n[r] = i[r]);

          i.installComponents && function (e, t) {
            e.component(t + "recycle-scroller", O), e.component(t + "RecycleScroller", O), e.component(t + "dynamic-scroller", $), e.component(t + "DynamicScroller", $), e.component(t + "dynamic-scroller-item", P), e.component(t + "DynamicScrollerItem", P);
          }(e, i.componentsPrefix);
        }
      },
          A = null;
      "undefined" != typeof window ? A = window.Vue : void 0 !== e && (A = e.Vue), A && A.use(M);
    }).call(this, i(14));
  }, function (e, t, i) {
    var n = i(10),
        r = i(11),
        o = i(12);

    e.exports = function (e) {
      return n(e) || r(e) || o();
    };
  }, function (e, i) {
    e.exports = t;
  }, function (e, t) {
    e.exports = function (e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    };
  }, function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];

        return i;
      }
    };
  }, function (e, t) {
    e.exports = function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    };
  }, function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  }, function (e, t) {
    "undefined" != typeof window && function () {
      for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];

      window.requestAnimationFrame || (window.requestAnimationFrame = function (t, i) {
        var n = new Date().getTime(),
            r = Math.max(0, 16 - (n - e)),
            o = window.setTimeout(function () {
          t(n + r);
        }, r);
        return e = n + r, o;
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e);
      });
    }();
  }, function (e, t) {
    var i;

    i = function () {
      return this;
    }();

    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (i = window);
    }

    e.exports = i;
  }, function (e, t, i) {
    var n = i(16);
    "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
    (0, i(19).default)("04618570", n, !0, {});
  }, function (e, t, i) {
    (e.exports = i(17)(!1)).push([e.i, ".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:-ms-flexbox;display:flex}.vue-recycle-scroller__slot{-ms-flex:auto 0 0px;flex:auto 0 0}.vue-recycle-scroller__item-wrapper{-ms-flex:1;flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}", ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var i = function (e, t) {
            var i = e[1] || "",
                n = e[3];
            if (!n) return i;

            if (t && "function" == typeof btoa) {
              var r = (s = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                  o = n.sources.map(function (e) {
                return "/*# sourceURL=" + n.sourceRoot + e + " */";
              });
              return [i].concat(o).concat([r]).join("\n");
            }

            var s;
            return [i].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + i + "}" : i;
        }).join("");
      }, t.i = function (e, i) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var n = {}, r = 0; r < this.length; r++) {
          var o = this[r][0];
          "number" == typeof o && (n[o] = !0);
        }

        for (r = 0; r < e.length; r++) {
          var s = e[r];
          "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), t.push(s));
        }
      }, t;
    };
  }, function (e, t, i) {
    "use strict";

    i.r(t);
    var n,
        r,
        o = "emoji-mart",
        s = JSON,
        a = "undefined" != typeof window && "localStorage" in window;

    function l(e, t) {
      if (r) r(e, t);else {
        if (!a) return;

        try {
          window.localStorage["".concat(o, ".").concat(e)] = s.stringify(t);
        } catch (e) {}
      }
    }

    var c,
        u,
        d = {
      update: function (e) {
        for (var t in e) l(t, e[t]);
      },
      set: l,
      get: function (e) {
        if (n) return n(e);

        if (a) {
          try {
            var t = window.localStorage["".concat(o, ".").concat(e)];
          } catch (e) {
            return;
          }

          return t ? JSON.parse(t) : void 0;
        }
      },
      setNamespace: function (e) {
        o = e;
      },
      setHandlers: function (e) {
        e || (e = {}), n = e.getter, r = e.setter;
      }
    },
        h = i(1),
        m = ["+1", "grinning", "kissing_heart", "heart_eyes", "laughing", "stuck_out_tongue_winking_eye", "sweat_smile", "joy", "scream", "disappointed", "unamused", "weary", "sob", "sunglasses", "heart", "poop"],
        f = {};

    function v() {
      u = !0, c = d.get("frequently");
    }

    var p = {
      add: function (e) {
        u || v();
        var t = e.id;
        c || (c = f), c[t] || (c[t] = 0), c[t] += 1, d.set("last", t), d.set("frequently", c);
      },
      get: function (e) {
        if (u || v(), !c) {
          f = {};

          for (var t = [], i = Math.min(e, m.length), n = 0; n < i; n++) f[m[n]] = i - n, t.push(m[n]);

          return t;
        }

        var r = e,
            o = [];

        for (var s in c) c.hasOwnProperty(s) && o.push(s);

        var a = o.sort(function (e, t) {
          return c[e] - c[t];
        }).reverse().slice(0, r),
            l = d.get("last");
        return l && -1 == a.indexOf(l) && (a.pop(), a.push(l)), a;
      }
    },
        y = {
      activity: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"/></svg>',
      custom: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="translate(2.000000, 1.000000)"><rect id="Rectangle" x="8" y="0" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect></g></svg>',
      flags: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"/></svg>',
      foods: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"/></svg>',
      nature: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"/><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"/></svg>',
      objects: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"/><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"/></svg>',
      people: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"/></svg>',
      places: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"/><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"/></svg>',
      recent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/></svg>',
      symbols: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"/></svg>'
    };

    function g(e, t, i, n, r, o, s, a) {
      var l,
          c = "function" == typeof e ? e.options : e;
      if (t && (c.render = t, c.staticRenderFns = i, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = "data-v-" + o), s ? (l = function (e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s);
      }, c._ssrRegister = l) : r && (l = a ? function () {
        r.call(this, this.$root.$options.shadowRoot);
      } : r), l) if (c.functional) {
        c._injectStyles = l;
        var u = c.render;

        c.render = function (e, t) {
          return l.call(t), u(e, t);
        };
      } else {
        var d = c.beforeCreate;
        c.beforeCreate = d ? [].concat(d, l) : [l];
      }
      return {
        exports: e,
        options: c
      };
    }

    var _ = g({
      props: {
        i18n: {
          type: Object,
          required: !0
        },
        color: {
          type: String
        },
        categories: {
          type: Array,
          required: !0
        },
        activeCategory: {
          type: Object,
          default: function () {
            return {};
          }
        }
      },
      created: function () {
        this.svgs = y;
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return i("div", {
        staticClass: "emoji-mart-anchors"
      }, e._l(e.categories, function (t) {
        return i("span", {
          key: t.id,
          class: {
            "emoji-mart-anchor": !0,
            "emoji-mart-anchor-selected": t.id == e.activeCategory.id
          },
          style: {
            color: t.id == e.activeCategory.id ? e.color : ""
          },
          attrs: {
            "data-title": e.i18n.categories[t.id]
          },
          on: {
            click: function (i) {
              return e.$emit("click", t);
            }
          }
        }, [i("div", {
          domProps: {
            innerHTML: e._s(e.svgs[t.id])
          }
        }), e._v(" "), i("span", {
          staticClass: "emoji-mart-anchor-bar",
          style: {
            backgroundColor: e.color
          }
        })]);
      }), 0);
    }, [], !1, null, null, null).exports,
        j = i(3),
        b = i.n(j),
        w = i(4),
        S = i.n(w),
        k = i(5),
        x = i.n(k),
        C = String.fromCodePoint || function () {
      var e,
          t,
          i = [],
          n = -1,
          r = arguments.length;
      if (!r) return "";

      for (var o = ""; ++n < r;) {
        var s = Number(arguments[n]);
        if (!isFinite(s) || s < 0 || s > 1114111 || Math.floor(s) != s) throw RangeError("Invalid code point: " + s);
        s <= 65535 ? i.push(s) : (e = 55296 + ((s -= 65536) >> 10), t = s % 1024 + 56320, i.push(e, t)), (n + 1 === r || i.length > 16384) && (o += String.fromCharCode.apply(null, i), i.length = 0);
      }

      return o;
    };

    function z(e) {
      var t = e.split("-").map(function (e) {
        return "0x".concat(e);
      });
      return C.apply(null, t);
    }

    function E(e) {
      return e.reduce(function (e, t) {
        return -1 === e.indexOf(t) && e.push(t), e;
      }, []);
    }

    var O = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,
        $ = ["1F3FA", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"],
        P = function () {
      function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = i.emojisToShowFilter,
            r = i.include,
            o = i.exclude,
            s = i.custom,
            a = i.recent,
            l = i.recentLength,
            c = void 0 === l ? 20 : l;
        b()(this, e), this._data = Object(h.uncompress)(t), this._emojisFilter = n || null, this._include = r || null, this._exclude = o || null, this._custom = s || [], this._recent = a || p.get(c), this._emojis = {}, this._nativeEmojis = {}, this._emoticons = {}, this._categories = [], this._recentCategory = {
          id: "recent",
          name: "Recent",
          emojis: []
        }, this._customCategory = {
          id: "custom",
          name: "Custom",
          emojis: []
        }, this._searchIndex = {}, this.buildIndex(), Object.freeze(this);
      }

      return S()(e, [{
        key: "buildIndex",
        value: function () {
          var e = this;

          if (this._data.categories.forEach(function (t) {
            if (e.isCategoryNeeded(t)) {
              var i = {
                id: t.id,
                name: t.name,
                emojis: []
              };
              t.emojis.forEach(function (t) {
                var n = e.addEmoji(t);
                n && i.emojis.push(n);
              }), i.emojis.length && e._categories.push(i);
            }
          }), this.isCategoryNeeded("custom")) {
            if (this._custom.length > 0) {
              var t = !0,
                  i = !1,
                  n = void 0;

              try {
                for (var r, o = this._custom[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                  var s = r.value;
                  this.addCustomEmoji(s);
                }
              } catch (e) {
                i = !0, n = e;
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (i) throw n;
                }
              }
            }

            this._customCategory.emojis.length && this._categories.push(this._customCategory);
          }

          this.isCategoryNeeded("recent") && (this._recent.length && this._recent.map(function (t) {
            var i = !0,
                n = !1,
                r = void 0;

            try {
              for (var o, s = e._customCategory.emojis[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                var a = o.value;
                if (a.id === t) return void e._recentCategory.emojis.push(a);
              }
            } catch (e) {
              n = !0, r = e;
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (n) throw r;
              }
            }

            e.hasEmoji(t) && e._recentCategory.emojis.push(e.emoji(t));
          }), this._recentCategory.emojis.length && this._categories.unshift(this._recentCategory));
        }
      }, {
        key: "findEmoji",
        value: function (e, t) {
          var i = e.match(O);

          if (i && (e = i[1], i[2] && (t = parseInt(i[2], 10))), this._data.aliases.hasOwnProperty(e) && (e = this._data.aliases[e]), this._emojis.hasOwnProperty(e)) {
            var n = this._emojis[e];
            return t ? n.getSkin(t) : n;
          }

          return this._nativeEmojis.hasOwnProperty(e) ? this._nativeEmojis[e] : null;
        }
      }, {
        key: "categories",
        value: function () {
          return this._categories;
        }
      }, {
        key: "emoji",
        value: function (e) {
          this._data.aliases.hasOwnProperty(e) && (e = this._data.aliases[e]);
          var t = this._emojis[e];
          if (!t) throw new Error("Can not find emoji by id: " + e);
          return t;
        }
      }, {
        key: "hasEmoji",
        value: function (e) {
          return this._data.aliases.hasOwnProperty(e) && (e = this._data.aliases[e]), !!this._emojis[e];
        }
      }, {
        key: "nativeEmoji",
        value: function (e) {
          return this._nativeEmojis.hasOwnProperty(e) ? this._nativeEmojis[e] : null;
        }
      }, {
        key: "search",
        value: function (e, t) {
          var i = this;
          if (t || (t = 75), !e.length) return null;
          if ("-" == e || "-1" == e) return [this.emoji("-1")];
          var n,
              r = e.toLowerCase().split(/[\s|,|\-|_]+/);
          r.length > 2 && (r = [r[0], r[1]]);
          var o = null;
          return (o = (n = r.map(function (e) {
            for (var t = i._emojis, n = i._searchIndex, r = 0, o = 0; o < e.length; o++) {
              var s = e[o];
              r++, n[s] || (n[s] = {}), (n = n[s]).results || function () {
                var i = {};

                for (var o in n.results = [], n.emojis = {}, t) {
                  var s = t[o],
                      a = s._data.search,
                      l = e.substr(0, r),
                      c = a.indexOf(l);

                  if (-1 != c) {
                    var u = c + 1;
                    l == o && (u = 0), n.results.push(s), n.emojis[o] = s, i[o] = u;
                  }
                }

                n.results.sort(function (e, t) {
                  return i[e.id] - i[t.id];
                });
              }(), t = n.emojis;
            }

            return n.results;
          }).filter(function (e) {
            return e;
          })).length > 1 ? function (e, t) {
            var i = E(e),
                n = E(t);
            return i.filter(function (e) {
              return n.indexOf(e) >= 0;
            });
          }.apply(null, n) : n.length ? n[0] : []) && o.length > t && (o = o.slice(0, t)), o;
        }
      }, {
        key: "addCustomEmoji",
        value: function (e) {
          var t = Object.assign({}, e, {
            id: e.short_names[0],
            custom: !0
          });
          t.search || (t.search = Object(h.buildSearch)(t));
          var i = new M(t);
          return this._emojis[i.id] = i, this._customCategory.emojis.push(i), i;
        }
      }, {
        key: "addEmoji",
        value: function (e) {
          var t = this,
              i = this._data.emojis[e];
          if (!this.isEmojiNeeded(i)) return !1;
          var n = new M(i);
          if (this._emojis[e] = n, n.native && (this._nativeEmojis[n.native] = n), n._skins) for (var r in n._skins) {
            var o = n._skins[r];
            o.native && (this._nativeEmojis[o.native] = o);
          }
          return n.emoticons && n.emoticons.forEach(function (i) {
            t._emoticons[i] || (t._emoticons[i] = e);
          }), n;
        }
      }, {
        key: "isCategoryNeeded",
        value: function (e) {
          var t = !this._include || !this._include.length || this._include.indexOf(e.id) > -1,
              i = !(!this._exclude || !this._exclude.length) && this._exclude.indexOf(e.id) > -1;
          return !(!t || i);
        }
      }, {
        key: "isEmojiNeeded",
        value: function (e) {
          return !this._emojisFilter || this._emojisFilter(e);
        }
      }]), e;
    }(),
        M = function () {
      function e(t) {
        if (b()(this, e), this._data = Object.assign({}, t), this._skins = null, this._data.skin_variations) for (var i in this._skins = [], $) {
          var n = $[i],
              r = this._data.skin_variations[n],
              o = Object.assign({}, t);

          for (var s in r) o[s] = r[s];

          delete o.skin_variations, this._skins.push(new e(o));
        }

        for (var a in this._sanitized = function (e) {
          var t = e.name,
              i = e.short_names,
              n = e.skin_tone,
              r = e.skin_variations,
              o = e.emoticons,
              s = e.unified,
              a = e.custom,
              l = e.imageUrl,
              c = e.id || i[0],
              u = ":".concat(c, ":");
          if (a) return {
            id: c,
            name: t,
            colons: u,
            emoticons: o,
            custom: a,
            imageUrl: l
          };
          n && (u += ":skin-tone-".concat(n, ":"));
          return {
            id: c,
            name: t,
            colons: u,
            emoticons: o,
            unified: s.toLowerCase(),
            skin: n || (r ? 1 : null),
            native: z(s)
          };
        }(this._data), this._sanitized) this[a] = this._sanitized[a];

        this.short_names = this._data.short_names, this.short_name = this._data.short_names[0], Object.freeze(this);
      }

      return S()(e, [{
        key: "getSkin",
        value: function (e) {
          return e && "native" != e && this._skins ? this._skins[e - 1] : this;
        }
      }, {
        key: "getPosition",
        value: function () {
          var e = Math.round(100 / 51 * this._data.sheet_x * 100) / 100,
              t = Math.round(100 / 51 * this._data.sheet_y * 100) / 100;
          return "".concat(e, "% ").concat(t, "%");
        }
      }]), e;
    }(),
        A = function () {
      function e(t, i, n, r, o, s, a) {
        b()(this, e), this._emoji = t, this._native = r, this._skin = i, this._set = n, this._fallback = o, this.canRender = this._canRender(), this.cssClass = this._cssClass(), this.cssStyle = this._cssStyle(a), this.content = this._content(), this.title = !0 === s ? t.short_name : null, Object.freeze(this);
      }

      return S()(e, [{
        key: "getEmoji",
        value: function () {
          return this._emoji.getSkin(this._skin);
        }
      }, {
        key: "_canRender",
        value: function () {
          return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
        }
      }, {
        key: "_cssClass",
        value: function () {
          return ["emoji-set-" + this._set, "emoji-type-" + this._emojiType()];
        }
      }, {
        key: "_cssStyle",
        value: function (e) {
          var t = {};
          return this._isCustom() && (t = {
            backgroundImage: "url(" + this.getEmoji()._data.imageUrl + ")",
            backgroundSize: "100%"
          }), this._hasEmoji() && !this._isNative() && (t = {
            backgroundPosition: this.getEmoji().getPosition()
          }), e && (t = this._isNative() ? Object.assign(t, {
            fontSize: Math.round(.8 * e * 10) / 10 + "px"
          }) : Object.assign(t, {
            width: e + "px",
            height: e + "px"
          })), t;
        }
      }, {
        key: "_content",
        value: function () {
          return this._isCustom() ? "" : this._isNative() ? this.getEmoji().native : this._hasEmoji() ? "" : this._fallback ? this._fallback(this.getEmoji()) : null;
        }
      }, {
        key: "_isNative",
        value: function () {
          return this._native;
        }
      }, {
        key: "_isCustom",
        value: function () {
          return this.getEmoji().custom;
        }
      }, {
        key: "_hasEmoji",
        value: function () {
          return this.getEmoji()._data && this.getEmoji()._data["has_img_" + this._set];
        }
      }, {
        key: "_emojiType",
        value: function () {
          return this._isCustom() ? "custom" : this._isNative() ? "native" : this._hasEmoji() ? "image" : "fallback";
        }
      }]), e;
    }();

    var T = i(0),
        I = i.n(T),
        D = {
      native: {
        type: Boolean,
        default: !1
      },
      tooltip: {
        type: Boolean,
        default: !1
      },
      fallback: {
        type: Function
      },
      skin: {
        type: Number,
        default: 1
      },
      set: {
        type: String,
        default: "apple"
      },
      emoji: {
        type: [String, Object],
        required: !0
      }
    },
        V = {
      perLine: {
        type: Number,
        default: 9
      },
      maxSearchResults: {
        type: Number,
        default: 75
      },
      emojiSize: {
        type: Number,
        default: 24
      },
      title: {
        type: String,
        default: "Emoji Mart™"
      },
      emoji: {
        type: String,
        default: "department_store"
      },
      color: {
        type: String,
        default: "#ae65c5"
      },
      set: {
        type: String,
        default: "apple"
      },
      skin: {
        type: Number,
        default: null
      },
      defaultSkin: {
        type: Number,
        default: 1
      },
      native: {
        type: Boolean,
        default: !1
      },
      emojiTooltip: {
        type: Boolean,
        default: !1
      },
      autoFocus: {
        type: Boolean,
        default: !1
      },
      i18n: {
        type: Object,
        default: function () {
          return {};
        }
      },
      showPreview: {
        type: Boolean,
        default: !0
      },
      showSearch: {
        type: Boolean,
        default: !0
      },
      showCategories: {
        type: Boolean,
        default: !0
      },
      showSkinTones: {
        type: Boolean,
        default: !0
      },
      infiniteScroll: {
        type: Boolean,
        default: !0
      },
      pickerStyles: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
        N = g({
      props: I()({}, D, {
        data: {
          type: Object,
          required: !0
        }
      }),
      computed: {
        view: function () {
          return new A(this.emojiObject, this.skin, this.set, this.native, this.fallback);
        },
        sanitizedData: function () {
          return this.emojiObject._sanitized;
        },
        title: function () {
          return this.tooltip ? this.emojiObject.short_name : null;
        },
        emojiObject: function () {
          return "string" == typeof this.emoji ? this.data.emoji(this.emoji) : this.emoji;
        }
      },
      created: function () {},
      methods: {
        onClick: function () {
          this.$emit("click", this.emojiObject);
        },
        onMouseEnter: function () {
          this.$emit("mouseenter", this.emojiObject);
        },
        onMouseLeave: function () {
          this.$emit("mouseleave", this.emojiObject);
        }
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return e.view.canRender ? i("span", {
        staticClass: "emoji-mart-emoji",
        attrs: {
          title: e.view.title,
          "data-title": e.title
        },
        on: {
          mouseenter: e.onMouseEnter,
          mouseleave: e.onMouseLeave,
          click: e.onClick
        }
      }, [i("span", {
        class: e.view.cssClass,
        style: e.view.cssStyle
      }, [e._v(e._s(e.view.content))])]) : e._e();
    }, [], !1, null, null, null).exports,
        R = g({
      props: {
        data: {
          type: Object,
          required: !0
        },
        i18n: {
          type: Object,
          required: !0
        },
        id: {
          type: String,
          required: !0
        },
        name: {
          type: String,
          required: !0
        },
        emojis: {
          type: Array
        },
        emojiProps: {
          type: Object,
          required: !0
        }
      },
      computed: {
        isVisible: function () {
          return !!this.emojis;
        },
        isSearch: function () {
          return "Search" == this.name;
        },
        hasResults: function () {
          return this.emojis.length > 0;
        },
        emojiObjects: function () {
          var e = this;
          return this.emojis.map(function (t) {
            return {
              emojiObject: t,
              emojiView: new A(t, e.emojiProps.skin, e.emojiProps.set, e.emojiProps.native, e.emojiProps.fallback, e.emojiProps.emojiTooltip, e.emojiProps.emojiSize)
            };
          });
        }
      },
      components: {
        NimbleEmoji: N
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return e.isVisible && (e.isSearch || e.hasResults) ? i("div", {
        class: {
          "emoji-mart-category": !0,
          "emoji-mart-no-results": !e.hasResults
        }
      }, [i("div", {
        staticClass: "emoji-mart-category-label"
      }, [i("span", [e._v(e._s(e.i18n.categories[e.id]))])]), e._v(" "), e._l(e.emojiObjects, function (t) {
        var n = t.emojiObject,
            r = t.emojiView;
        return [r.canRender ? i("span", {
          staticClass: "emoji-mart-emoji",
          attrs: {
            "data-title": n.short_name,
            title: r.title
          },
          on: {
            mouseenter: function (t) {
              e.emojiProps.onEnter(r.getEmoji());
            },
            mouseleave: function (t) {
              e.emojiProps.onLeave(r.getEmoji());
            },
            click: function (t) {
              e.emojiProps.onClick(r.getEmoji());
            }
          }
        }, [i("span", {
          class: r.cssClass,
          style: r.cssStyle
        }, [e._v(e._s(r.content))])]) : e._e()];
      }), e._v(" "), e.hasResults ? e._e() : i("div", [i("nimble-emoji", {
        attrs: {
          data: e.data,
          emoji: "sleuth_or_spy",
          native: e.emojiProps.native,
          skin: e.emojiProps.skin,
          set: e.emojiProps.set
        }
      }), e._v(" "), i("div", {
        staticClass: "emoji-mart-no-results-label"
      }, [e._v(e._s(e.i18n.notfound))])], 1)], 2) : e._e();
    }, [], !1, null, null, null).exports,
        F = g({
      props: {
        skin: {
          type: Number,
          required: !0
        }
      },
      data: function () {
        return {
          opened: !1
        };
      },
      methods: {
        onClick: function (e) {
          this.opened && e != this.skin && this.$emit("change", e), this.opened = !this.opened;
        }
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return i("div", {
        class: {
          "emoji-mart-skin-swatches": !0,
          "emoji-mart-skin-swatches-opened": e.opened
        }
      }, e._l(6, function (t) {
        return i("span", {
          key: t,
          class: {
            "emoji-mart-skin-swatch": !0,
            "emoji-mart-skin-swatch-selected": e.skin == t
          }
        }, [i("span", {
          class: "emoji-mart-skin emoji-mart-skin-tone-" + t,
          on: {
            click: function (i) {
              return e.onClick(t);
            }
          }
        })]);
      }), 0);
    }, [], !1, null, null, null).exports,
        L = g({
      props: {
        data: {
          type: Object,
          required: !0
        },
        title: {
          type: String,
          required: !0
        },
        emoji: {
          type: [String, Object]
        },
        idleEmoji: {
          type: [String, Object],
          required: !0
        },
        showSkinTones: {
          type: Boolean,
          default: !0
        },
        emojiProps: {
          type: Object,
          required: !0
        },
        skinProps: {
          type: Object,
          required: !0
        },
        onSkinChange: {
          type: Function,
          required: !0
        }
      },
      computed: {
        emojiData: function () {
          return this.emoji ? this.emoji : {};
        },
        emojiShortNames: function () {
          return this.emojiData.short_names;
        },
        emojiEmoticons: function () {
          return this.emojiData.emoticons;
        }
      },
      components: {
        NimbleEmoji: N,
        Skins: F
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return i("div", {
        staticClass: "emoji-mart-preview"
      }, [e.emoji ? [i("div", {
        staticClass: "emoji-mart-preview-emoji"
      }, [i("nimble-emoji", {
        attrs: {
          data: e.data,
          emoji: e.emoji,
          native: e.emojiProps.native,
          skin: e.emojiProps.skin,
          set: e.emojiProps.set
        }
      })], 1), e._v(" "), i("div", {
        staticClass: "emoji-mart-preview-data"
      }, [i("div", {
        staticClass: "emoji-mart-preview-name"
      }, [e._v(e._s(e.emoji.name))]), e._v(" "), i("div", {
        staticClass: "emoji-mart-preview-shortnames"
      }, e._l(e.emojiShortNames, function (t) {
        return i("span", {
          key: t,
          staticClass: "emoji-mart-preview-shortname"
        }, [e._v(":" + e._s(t) + ":")]);
      }), 0), e._v(" "), i("div", {
        staticClass: "emoji-mart-preview-emoticons"
      }, e._l(e.emojiEmoticons, function (t) {
        return i("span", {
          key: t,
          staticClass: "emoji-mart-preview-emoticon"
        }, [e._v(e._s(t))]);
      }), 0)])] : [i("div", {
        staticClass: "emoji-mart-preview-emoji"
      }, [i("nimble-emoji", {
        attrs: {
          data: e.data,
          emoji: e.idleEmoji,
          native: e.emojiProps.native,
          skin: e.emojiProps.skin,
          set: e.emojiProps.set
        }
      })], 1), e._v(" "), i("div", {
        staticClass: "emoji-mart-preview-data"
      }, [i("span", {
        staticClass: "emoji-mart-title-label"
      }, [e._v(e._s(e.title))])]), e._v(" "), e.showSkinTones ? i("div", {
        staticClass: "emoji-mart-preview-skins"
      }, [i("skins", {
        attrs: {
          skin: e.skinProps.skin
        },
        on: {
          change: function (t) {
            return e.onSkinChange(t);
          }
        }
      })], 1) : e._e()]], 2);
    }, [], !1, null, null, null).exports,
        U = g({
      props: {
        data: {
          type: Object,
          required: !0
        },
        i18n: {
          type: Object,
          required: !0
        },
        autoFocus: {
          type: Boolean,
          default: !1
        },
        onSearch: {
          type: Function,
          required: !0
        }
      },
      data: function () {
        return {
          value: ""
        };
      },
      computed: {
        emojiIndex: function () {
          return this.data;
        }
      },
      watch: {
        value: function () {
          this.$emit("search", this.value);
        }
      },
      methods: {
        clear: function () {
          this.value = "";
        }
      },
      mounted: function () {
        var e = this.$el.querySelector("input");
        this.autoFocus && e.focus();
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return i("div", {
        staticClass: "emoji-mart-search"
      }, [i("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.value,
          expression: "value"
        }],
        attrs: {
          type: "text",
          placeholder: e.i18n.search
        },
        domProps: {
          value: e.value
        },
        on: {
          input: function (t) {
            t.target.composing || (e.value = t.target.value);
          }
        }
      })]);
    }, [], !1, null, null, null).exports,
        q = i(2),
        B = i.n(q),
        H = g({
      functional: !0,
      props: I()({}, D, {
        data: {
          type: Object,
          default: function () {
            return new P(B.a);
          }
        }
      }),
      render: function (e, t) {
        var i = t.data,
            n = t.props,
            r = t.children;
        return e(N, I()({}, i, {
          props: n
        }), r);
      }
    }, void 0, void 0, !1, null, null, null).exports,
        W = i(7),
        J = i.n(W),
        K = (i(13), i(6)),
        G = (i(15), {
      search: "Search",
      notfound: "No Emoji Found",
      categories: {
        search: "Search Results",
        recent: "Frequently Used",
        people: "Smileys & People",
        nature: "Animals & Nature",
        foods: "Food & Drink",
        activity: "Activity",
        places: "Travel & Places",
        objects: "Objects",
        symbols: "Symbols",
        flags: "Flags",
        custom: "Custom"
      }
    }),
        X = g({
      props: I()({}, V, {
        data: {
          type: Object,
          required: !0
        }
      }),
      data: function () {
        return {
          activeSkin: this.skin || d.get("skin") || this.defaultSkin,
          activeCategory: null,
          previewEmoji: null,
          searchEmojis: null
        };
      },
      computed: {
        customStyles: function () {
          return I()({
            width: this.calculateWidth + "px"
          }, this.pickerStyles);
        },
        emojiProps: function () {
          return {
            native: this.native,
            skin: this.activeSkin,
            set: this.set,
            emojiTooltip: this.emojiTooltip,
            emojiSize: this.emojiSize,
            onEnter: this.onEmojiEnter.bind(this),
            onLeave: this.onEmojiLeave.bind(this),
            onClick: this.onEmojiClick.bind(this)
          };
        },
        skinProps: function () {
          return {
            skin: this.activeSkin
          };
        },
        calculateWidth: function () {
          return this.perLine * (this.emojiSize + 12) + 12 + 2 + function () {
            if ("undefined" == typeof document) return 0;
            var e = document.createElement("div");
            e.style.width = "100px", e.style.height = "100px", e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e);
            var t = e.offsetWidth - e.clientWidth;
            return document.body.removeChild(e), t;
          }();
        },
        scrollerCategories: function () {
          var e = this,
              t = 0;
          return this.categories.map(function (i) {
            return {
              id: t++,
              category: i,
              show: !e.searchEmojis && (e.infiniteScroll || i == e.activeCategory),
              mergedI18n: e.mergedI18n,
              data: e.data,
              emojisLength: i.emojis.length,
              emojiProps: e.emojiProps
            };
          });
        },
        mergedI18n: function () {
          return Object.freeze(function e(t, i) {
            var n = {};

            for (var r in t) {
              var o = t[r],
                  s = o;
              i.hasOwnProperty(r) && (s = i[r]), "object" === x()(s) && (s = e(o, s)), n[r] = s;
            }

            return n;
          }(G, this.i18n));
        },
        idleEmoji: function () {
          return this.data.emoji(this.emoji);
        }
      },
      created: function () {
        var e;
        this.categories = [], (e = this.categories).push.apply(e, J()(this.data.categories())), this.categories = this.categories.filter(function (e) {
          return e.emojis.length > 0;
        }), this.categories[0].first = !0, Object.freeze(this.categories), this.activeCategory = this.categories[0], this.skipScrollUpdate = !1;
      },
      methods: {
        onScrollUpdate: function (e, t) {
          this.skipScrollUpdate ? this.skipScrollUpdate = !1 : this.activeCategory = this.categories[t - 1];
        },
        onAnchorClick: function (e) {
          var t = this.categories.indexOf(e);
          this.$refs.dynScroller.scrollToItem(t), this.activeCategory = this.categories[t], this.skipScrollUpdate = !0;
        },
        onSearch: function (e) {
          var t = this.data.search(e, this.maxSearchResults);
          this.searchEmojis = t;
        },
        onEmojiEnter: function (e) {
          this.previewEmoji = e;
        },
        onEmojiLeave: function (e) {
          this.previewEmoji = null;
        },
        onEmojiClick: function (e) {
          this.$emit("select", e), p.add(e);
        },
        onSkinChange: function (e) {
          this.activeSkin = e, d.update({
            skin: e
          }), this.$emit("skin-change", e);
        }
      },
      components: {
        Anchors: _,
        Category: R,
        Preview: L,
        Search: U,
        DynamicScroller: K.a,
        DynamicScrollerItem: K.b
      }
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;
      return i("div", {
        staticClass: "emoji-mart",
        style: e.customStyles
      }, [e.showCategories ? i("div", {
        staticClass: "emoji-mart-bar emoji-mart-bar-anchors"
      }, [i("anchors", {
        attrs: {
          data: e.data,
          i18n: e.mergedI18n,
          color: e.color,
          categories: e.categories,
          "active-category": e.activeCategory
        },
        on: {
          click: e.onAnchorClick
        }
      })], 1) : e._e(), e._v(" "), e._t("searchTemplate", [e.showSearch ? i("search", {
        ref: "search",
        attrs: {
          data: e.data,
          i18n: e.mergedI18n,
          "auto-focus": e.autoFocus,
          "on-search": e.onSearch
        },
        on: {
          search: e.onSearch
        }
      }) : e._e()], {
        data: e.data,
        i18n: e.i18n,
        autoFocus: e.autoFocus,
        onSearch: e.onSearch
      }), e._v(" "), i("category", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.searchEmojis,
          expression: "searchEmojis"
        }],
        staticClass: "emoji-mart-search-results",
        attrs: {
          data: e.data,
          i18n: e.mergedI18n,
          id: "search",
          name: "Search",
          emojis: e.searchEmojis,
          "emoji-props": e.emojiProps
        }
      }), e._v(" "), i("DynamicScroller", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.searchEmojis,
          expression: "!searchEmojis"
        }],
        ref: "dynScroller",
        staticClass: "scroller",
        attrs: {
          items: e.scrollerCategories,
          "min-item-size": 60,
          "emit-update": !0
        },
        on: {
          update: e.onScrollUpdate
        },
        scopedSlots: e._u([{
          key: "default",
          fn: function (e) {
            var t = e.item,
                n = e.active,
                r = e.index;
            return [i("DynamicScrollerItem", {
              attrs: {
                item: t,
                active: n,
                "data-index": r
              }
            }, [i("category", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: t.show,
                expression: "item.show"
              }],
              key: t.category.id,
              ref: "categories",
              attrs: {
                data: t.data,
                i18n: t.mergedI18n,
                id: t.category.id,
                name: t.category.name,
                emojis: t.category.emojis,
                "emoji-props": t.emojiProps
              }
            })], 1)];
          }
        }])
      }), e._v(" "), e._t("previewTemplate", [e.showPreview ? i("div", {
        staticClass: "emoji-mart-bar emoji-mart-bar-preview"
      }, [i("preview", {
        attrs: {
          data: e.data,
          title: e.title,
          emoji: e.previewEmoji,
          "idle-emoji": e.idleEmoji,
          "show-skin-tones": e.showSkinTones,
          "emoji-props": e.emojiProps,
          "skin-props": e.skinProps,
          "on-skin-change": e.onSkinChange
        }
      })], 1) : e._e()], {
        data: e.data,
        title: e.title,
        emoji: e.previewEmoji,
        idleEmoji: e.idleEmoji,
        showSkinTones: e.showSkinTones,
        emojiProps: e.emojiProps,
        skinProps: e.skinProps,
        onSkinChange: e.onSkinChange
      })], 2);
    }, [], !1, null, null, null).exports,
        Y = new P(B.a),
        Q = g({
      functional: !0,
      props: I()({}, V, {
        data: {
          type: Object,
          default: function () {
            return Y;
          }
        }
      }),
      render: function (e, t) {
        var i = t.data,
            n = t.props,
            r = t.children;
        return e(X, I()({}, i, {
          props: n
        }), r);
      }
    }, void 0, void 0, !1, null, null, null).exports;
    i.d(t, "Picker", function () {
      return Q;
    }), i.d(t, "NimblePicker", function () {
      return X;
    }), i.d(t, "Emoji", function () {
      return H;
    }), i.d(t, "NimbleEmoji", function () {
      return N;
    }), i.d(t, "Anchors", function () {
      return _;
    }), i.d(t, "Preview", function () {
      return L;
    }), i.d(t, "Search", function () {
      return U;
    }), i.d(t, "Category", function () {
      return R;
    }), i.d(t, "Skins", function () {
      return F;
    }), i.d(t, "EmojiIndex", function () {
      return P;
    }), i.d(t, "EmojiView", function () {
      return A;
    }), i.d(t, "EmojiData", function () {
      return M;
    }), i.d(t, "sanitize", function () {}), i.d(t, "uncompress", function () {
      return h.uncompress;
    }), i.d(t, "store", function () {
      return d;
    }), i.d(t, "frequently", function () {
      return p;
    });
  }, function (e, t, i) {
    "use strict";

    function n(e, t) {
      for (var i = [], n = {}, r = 0; r < t.length; r++) {
        var o = t[r],
            s = o[0],
            a = {
          id: e + ":" + r,
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        n[s] ? n[s].parts.push(a) : i.push(n[s] = {
          id: s,
          parts: [a]
        });
      }

      return i;
    }

    i.r(t), i.d(t, "default", function () {
      return f;
    });
    var r = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

    var o = {},
        s = r && (document.head || document.getElementsByTagName("head")[0]),
        a = null,
        l = 0,
        c = !1,
        u = function () {},
        d = null,
        h = "data-vue-ssr-id",
        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function f(e, t, i, r) {
      c = i, d = r || {};
      var s = n(e, t);
      return v(s), function (t) {
        for (var i = [], r = 0; r < s.length; r++) {
          var a = s[r];
          (l = o[a.id]).refs--, i.push(l);
        }

        t ? v(s = n(e, t)) : s = [];

        for (r = 0; r < i.length; r++) {
          var l;

          if (0 === (l = i[r]).refs) {
            for (var c = 0; c < l.parts.length; c++) l.parts[c]();

            delete o[l.id];
          }
        }
      };
    }

    function v(e) {
      for (var t = 0; t < e.length; t++) {
        var i = e[t],
            n = o[i.id];

        if (n) {
          n.refs++;

          for (var r = 0; r < n.parts.length; r++) n.parts[r](i.parts[r]);

          for (; r < i.parts.length; r++) n.parts.push(y(i.parts[r]));

          n.parts.length > i.parts.length && (n.parts.length = i.parts.length);
        } else {
          var s = [];

          for (r = 0; r < i.parts.length; r++) s.push(y(i.parts[r]));

          o[i.id] = {
            id: i.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p() {
      var e = document.createElement("style");
      return e.type = "text/css", s.appendChild(e), e;
    }

    function y(e) {
      var t,
          i,
          n = document.querySelector("style[" + h + '~="' + e.id + '"]');

      if (n) {
        if (c) return u;
        n.parentNode.removeChild(n);
      }

      if (m) {
        var r = l++;
        n = a || (a = p()), t = j.bind(null, n, r, !1), i = j.bind(null, n, r, !0);
      } else n = p(), t = function (e, t) {
        var i = t.css,
            n = t.media,
            r = t.sourceMap;
        n && e.setAttribute("media", n);
        d.ssrId && e.setAttribute(h, t.id);
        r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        if (e.styleSheet) e.styleSheet.cssText = i;else {
          for (; e.firstChild;) e.removeChild(e.firstChild);

          e.appendChild(document.createTextNode(i));
        }
      }.bind(null, n), i = function () {
        n.parentNode.removeChild(n);
      };

      return t(e), function (n) {
        if (n) {
          if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
          t(e = n);
        } else i();
      };
    }

    var g,
        _ = (g = [], function (e, t) {
      return g[e] = t, g.filter(Boolean).join("\n");
    });

    function j(e, t, i, n) {
      var r = i ? "" : n.css;
      if (e.styleSheet) e.styleSheet.cssText = _(t, r);else {
        var o = document.createTextNode(r),
            s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
      }
    }
  }]);
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=template&id=381730fa&scoped=true&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=381730fa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("button", { on: { click: _vm.toggleVisible } }, [
        _vm._v("Show / hide the picker")
      ]),
      _vm._v(" "),
      _c("button", {
        domProps: { innerHTML: _vm._s(_vm.smile) },
        on: { click: _vm.toggleVisible }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _vm._l(
          [
            "native",
            "apple",
            "google",
            "twitter",
            "emojione",
            "messenger",
            "facebook"
          ],
          function(set) {
            return [
              _c(
                "button",
                {
                  key: set,
                  attrs: { disabled: _vm.activeSet == set },
                  on: {
                    click: function($event) {
                      _vm.activeSet = set
                    }
                  }
                },
                [_vm._v("\n        " + _vm._s(set) + "\n      ")]
              )
            ]
          }
        )
      ],
      2
    ),
    _vm._v(" "),
    _vm.isVisible
      ? _c(
          "div",
          { staticClass: "row" },
          [
            _c("nimble-picker", {
              attrs: {
                data: _vm.index,
                set: _vm.activeSet,
                native: _vm.native,
                custom: _vm.custom,
                emoji: _vm.emoji,
                emojiTooltip: true,
                title: _vm.title
              }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "row" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("div", [_vm._v("Custom Search And Preview Templates Example")]),
        _vm._v(" "),
        _c("Picker", {
          attrs: { native: true },
          scopedSlots: _vm._u([
            {
              key: "searchTemplate",
              fn: function(slotProps) {
                return [
                  _c("input", {
                    attrs: { type: "text", placeholder: slotProps.i18n.search },
                    on: {
                      input: function($event) {
                        return slotProps.onSearch($event.target.value)
                      }
                    }
                  })
                ]
              }
            },
            {
              key: "previewTemplate",
              fn: function(slotProps) {
                return [
                  _c("div", { staticClass: "emoji-mart-preview" }, [
                    _c(
                      "div",
                      { staticClass: "emoji-mart-preview-emoji" },
                      [
                        _c("NimbleEmoji", {
                          attrs: {
                            data: slotProps.data,
                            emoji: slotProps.emoji
                              ? slotProps.emoji
                              : "point_up",
                            native: slotProps.emojiProps.native,
                            skin: slotProps.emojiProps.skin,
                            set: slotProps.emojiProps.set
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "emoji-mart-preview-data" }, [
                      _c("div", { staticClass: "emoji-mart-preview-name" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              slotProps.emoji
                                ? "~" + slotProps.emoji.name + "~"
                                : "Choose..."
                            ) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "emoji-mart-preview-shortnames" },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                slotProps.emoji ? slotProps.emoji.colons : ""
                              ) +
                              "\n            "
                          )
                        ]
                      )
                    ])
                  ])
                ]
              }
            }
          ])
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("div", [_vm._v("Filtered picker example")]),
        _vm._v(" "),
        _c("NimblePicker", {
          attrs: {
            native: true,
            emoji: "flag-tf",
            emojiSize: 18,
            data: _vm.indexFiltered
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("h1", [_vm._v("Emoji Mart Vue 🏬")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row-small" }, [
      _c("iframe", {
        attrs: {
          src:
            "https://ghbtns.com/github-btn.html?user=jm-david&repo=emoji-mart-vue&type=star&count=true",
          frameBorder: "0",
          scrolling: "0",
          width: "90px",
          height: "20px"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&id=381730fa&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("50bf6d20", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = '__proto__' in {}; // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set =
  /*@__PURE__*/
  function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.10';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps =
/*#__PURE__*/
Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecesarry `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ __webpack_exports__["default"] = (Vue);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
});