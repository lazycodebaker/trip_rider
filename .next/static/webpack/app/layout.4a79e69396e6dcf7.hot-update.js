"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6d66f73f3224\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2IyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2ZDY2ZjczZjMyMjRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/CustomLayout.tsx":
/*!******************************!*\
  !*** ./app/CustomLayout.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contants */ \"(app-pages-browser)/./contants.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar */ \"(app-pages-browser)/./app/components/Sidebar/index.tsx\");\n/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Topbar */ \"(app-pages-browser)/./app/components/Topbar/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CustomLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const [isSidebarOpen, setIsSidebarOpen] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-full w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: _contants__WEBPACK_IMPORTED_MODULE_1__.RED_COLOR\n                    },\n                    className: \"lg:w-1/4 md:w-1/3 w-2/3 lg:relative absolute \".concat(isSidebarOpen ? \"left-0\" : \"-left-full\", \" z-50 sm:px-2 px-4 top-0 h-full \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isSidebarOpen: isSidebarOpen,\n                        setIsSidebarOpen: setIsSidebarOpen\n                    }, void 0, false, {\n                        fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: _contants__WEBPACK_IMPORTED_MODULE_1__.RED_COLOR\n                    },\n                    className: \"lg:w-1/4 md:w-1/3 w-2/3 relative  z-50 sm:px-2 px-4 top-0 h-full \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isSidebarOpen: true,\n                        setIsSidebarOpen: ()=>{}\n                    }, void 0, false, {\n                        fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isSidebarOpen: isSidebarOpen,\n                            setIsSidebarOpen: setIsSidebarOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-screen\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/CustomLayout.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLayout, \"7pDpjxpt81vLgIcSls7O8aGkvA4=\");\n_c = CustomLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomLayout);\nvar _c;\n$RefreshReg$(_c, \"CustomLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9DdXN0b21MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdzQztBQUNJO0FBQ0Y7QUFDQTtBQWF4QyxNQUFNSSxlQUFtQztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFFbEQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0oscURBQWMsQ0FBVTtJQUVsRSxxQkFDSSw4REFBQ007UUFBUUMsV0FBVTtrQkFDZiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBRVgsOERBQUNDO29CQUFJQyxPQUFPO3dCQUNSQyxpQkFBaUJiLGdEQUFTQTtvQkFDOUI7b0JBQUdVLFdBQVcsZ0RBQXdGLE9BQXhDSixnQkFBZ0IsV0FBVyxjQUFhOzhCQUNsRyw0RUFBQ0wsMkRBQU9BO3dCQUFDSyxlQUFlQTt3QkFBZUMsa0JBQWtCQTs7Ozs7Ozs7Ozs7OEJBRzdELDhEQUFDSTtvQkFBSUMsT0FBTzt3QkFDUkMsaUJBQWlCYixnREFBU0E7b0JBQzlCO29CQUFHVSxXQUFZOzhCQUNYLDRFQUFDVCwyREFBT0E7d0JBQUNLLGVBQWU7d0JBQU1DLGtCQUFrQixLQUFLOzs7Ozs7Ozs7Ozs4QkFHekQsOERBQUNJO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ1IsMERBQU1BOzRCQUFDSSxlQUFlQTs0QkFBZUMsa0JBQWtCQTs7Ozs7O3NDQUV4RCw4REFBQ0k7NEJBQUlELFdBQVU7c0NBQ1ZMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QjtHQTlCTUQ7S0FBQUE7QUFnQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0N1c3RvbUxheW91dC50c3g/MTdmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiQC9jb250YW50c1wiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL1NpZGViYXJcIlxuaW1wb3J0IFRvcGJhciBmcm9tIFwiLi9jb21wb25lbnRzL1RvcGJhclwiXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgdHlwZSBDaGlsZHJlbiA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlIHwgUmVhY3ROb2RlW11cbn1cblxuZXhwb3J0IHR5cGUgQmFyUHJvcHMgPSB7XG4gICAgaXNTaWRlYmFyT3BlbjogYm9vbGVhblxuICAgIHNldElzU2lkZWJhck9wZW46IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxufVxuXG5cbmNvbnN0IEN1c3RvbUxheW91dDogUmVhY3QuRkM8Q2hpbGRyZW4+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgW2lzU2lkZWJhck9wZW4sIHNldElzU2lkZWJhck9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1mdWxsXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogUkVEX0NPTE9SXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtgbGc6dy0xLzQgbWQ6dy0xLzMgdy0yLzMgbGc6cmVsYXRpdmUgYWJzb2x1dGUgJHtpc1NpZGViYXJPcGVuID8gJ2xlZnQtMCcgOiAnLWxlZnQtZnVsbCd9IHotNTAgc206cHgtMiBweC00IHRvcC0wIGgtZnVsbCBgfT5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgaXNTaWRlYmFyT3Blbj17aXNTaWRlYmFyT3Blbn0gc2V0SXNTaWRlYmFyT3Blbj17c2V0SXNTaWRlYmFyT3Blbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBSRURfQ09MT1JcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2BsZzp3LTEvNCBtZDp3LTEvMyB3LTIvMyByZWxhdGl2ZSAgei01MCBzbTpweC0yIHB4LTQgdG9wLTAgaC1mdWxsIGB9PlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBpc1NpZGViYXJPcGVuPXt0cnVlfSBzZXRJc1NpZGViYXJPcGVuPXsoKT0+e319IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcGJhciBpc1NpZGViYXJPcGVuPXtpc1NpZGViYXJPcGVufSBzZXRJc1NpZGViYXJPcGVuPXtzZXRJc1NpZGViYXJPcGVufSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUxheW91dCJdLCJuYW1lcyI6WyJSRURfQ09MT1IiLCJTaWRlYmFyIiwiVG9wYmFyIiwiUmVhY3QiLCJDdXN0b21MYXlvdXQiLCJjaGlsZHJlbiIsImlzU2lkZWJhck9wZW4iLCJzZXRJc1NpZGViYXJPcGVuIiwidXNlU3RhdGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/CustomLayout.tsx\n"));

/***/ })

});