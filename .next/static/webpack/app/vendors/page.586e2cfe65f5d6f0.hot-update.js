"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/vendors/page",{

/***/ "(app-pages-browser)/./app/vendors/page.tsx":
/*!******************************!*\
  !*** ./app/vendors/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Table */ \"(app-pages-browser)/./app/components/Table/index.tsx\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ \"(app-pages-browser)/./app/constant.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.6.4/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AllVendors = ()=>{\n    _s();\n    const [vendors, setVendors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const url = \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_3__.API_URL, \"/all/vendor\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url).then((res)=>{\n            const data = res.data;\n            console.log(data);\n            if (data.success === true) {\n                setVendors(data.vendors);\n            } else {\n                setVendors([]);\n            }\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: vendors,\n        for_data: \"All Vendors\"\n    }, \"vendors\", false, {\n        fileName: \"/Users/anshumantiwari/Desktop/trip_rider/app/vendors/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AllVendors, \"VuVP/5tgF1IefjnFcjQKh/Solls=\");\n_c = AllVendors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllVendors);\nvar _c;\n$RefreshReg$(_c, \"AllVendors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC92ZW5kb3JzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcyQztBQUNKO0FBQ0Y7QUFDWjtBQUV6QixNQUFNSyxhQUF1Qjs7SUFDekIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFRLEVBQUU7SUFFaEQsTUFBTU8sTUFBTSxHQUFXLE9BQVJMLDhDQUFPQSxFQUFDO0lBRXZCSCxnREFBU0EsQ0FBQztRQUNOSSw2Q0FBS0EsQ0FBQ0ssR0FBRyxDQUFDRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0M7WUFDakIsTUFBTUMsT0FBT0QsSUFBSUMsSUFBSTtZQUVyQkMsUUFBUUMsR0FBRyxDQUFDRjtZQUVaLElBQUlBLEtBQUtHLE9BQU8sS0FBSyxNQUFNO2dCQUN2QlIsV0FBV0ssS0FBS04sT0FBTztZQUMzQixPQUFPO2dCQUNIQyxXQUFXLEVBQUU7WUFDakI7UUFDSixHQUNFUyxLQUFLLENBQUMsQ0FBQ0M7WUFDTEosUUFBUUMsR0FBRyxDQUFDRztRQUNoQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDZix5REFBS0E7UUFBaUJVLE1BQU1OO1FBQVNZLFVBQVU7T0FBcEM7Ozs7O0FBRXBCO0dBekJNYjtLQUFBQTtBQTJCTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdmVuZG9ycy9wYWdlLnRzeD83NzJiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYmxlXCJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmNvbnN0IEFsbFZlbmRvcnM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2ZW5kb3JzLCBzZXRWZW5kb3JzXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcblxuICAgIGNvbnN0IHVybCA9IGAke0FQSV9VUkx9L2FsbC92ZW5kb3JgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc2V0VmVuZG9ycyhkYXRhLnZlbmRvcnMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFZlbmRvcnMoW10pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGUga2V5PXtcInZlbmRvcnNcIn0gZGF0YT17dmVuZG9yc30gZm9yX2RhdGE9e1wiQWxsIFZlbmRvcnNcIn0gLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFZlbmRvcnNcblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhYmxlIiwiQVBJX1VSTCIsImF4aW9zIiwiQWxsVmVuZG9ycyIsInZlbmRvcnMiLCJzZXRWZW5kb3JzIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyIiwiZm9yX2RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/vendors/page.tsx\n"));

/***/ })

});