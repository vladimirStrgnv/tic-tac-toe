"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header/header.jsx":
/*!**************************************!*\
  !*** ./components/header/header.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ \"./components/header/logo.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex h-24 items-center px-8 bg-white shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                alt: \"logo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Владимир666\\\\Desktop\\\\tik tak toe\\\\components\\\\header\\\\header.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-px h-8 bg-slate-200 mx-6\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Владимир666\\\\Desktop\\\\tik tak toe\\\\components\\\\header\\\\header.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-44 bg-teal-600 text-white rounded-lg px-5 py-2\",\n                children: \"Играть\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Владимир666\\\\Desktop\\\\tik tak toe\\\\components\\\\header\\\\header.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Владимир666\\\\Desktop\\\\tik tak toe\\\\components\\\\header\\\\header.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDRjtBQUV4QixTQUFTRTtJQUNkLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVOzswQkFDaEIsOERBQUNILG1EQUFLQTtnQkFBQ0ksS0FBS0wsaURBQU9BO2dCQUFFTSxLQUFJOzs7Ozs7MEJBQ3pCLDhEQUFDQztnQkFBSUgsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDSTtnQkFBT0osV0FBVTswQkFBbUQ7Ozs7Ozs7Ozs7OztBQUszRTtLQVZnQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeD9lNzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvU3JjIGZyb20gXCIuL2xvZ28uc3ZnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggaC0yNCBpdGVtcy1jZW50ZXIgcHgtOCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cbiAgICAgIDxJbWFnZSBzcmM9e2xvZ29TcmN9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXB4IGgtOCBiZy1zbGF0ZS0yMDAgbXgtNlwiIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNDQgYmctdGVhbC02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB4LTUgcHktMlwiPlxuICAgICAgICDQmNCz0YDQsNGC0YxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImxvZ29TcmMiLCJJbWFnZSIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImRpdiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/header.jsx\n"));

/***/ })

});