"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    const closeMenu = ()=>setMenuOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-darkerBg lg:px-10 pb-5 mb-5 lg:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:grid lg:grid-cols-2 lg:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-darkerBg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"lg:hidden text-5xl text-link pr-5 pb-8\",\n                            type: \"button\",\n                            \"aria-label\": \"menu\",\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-link\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-link\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\",\n                                    sizes: \"(100vw, 100vh)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row lg:flex-col lg:justify-end lg:hidden\",\n                    children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-darkerBg h-[80vh] pl-5 lg:pl-0\",\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-12 text-4xl font-sans font-bold py-10 pl-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news?category=\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:flex flex-row lg:flex-col lg:justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-darkerBg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center space-x-10 text-3xl font-sans font-bold pb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBRXhCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxNQUFNRSxZQUFZLElBQU1OLFlBQVk7SUFFcEMscUJBQ0UsOERBQUNPO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFDQ0MsU0FBUyxJQUFNWCxZQUFZLENBQUNEOzRCQUM1QlMsV0FBVTs0QkFDVkksTUFBSzs0QkFDTEMsY0FBVztzQ0FFVmQseUJBQ0MsOERBQUNlO2dDQUFLTixXQUFVOzs7OztxREFFaEIsOERBQUNNO2dDQUFLTixXQUFVOzs7Ozs7Ozs7OztzQ0FHcEIsOERBQUNiLGtEQUFJQTs0QkFBQ29CLE1BQUs7NEJBQUlQLFdBQVU7c0NBQ3ZCLDRFQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ1osbURBQUtBO29DQUNKb0IsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkMsSUFBSTtvQ0FDSlYsV0FBVTtvQ0FDVlcsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNZCw4REFBQ1Y7b0JBQUlELFdBQVU7OEJBQ1pULDBCQUNDLDhEQUFDRixpREFBTUEsQ0FBQ1ksR0FBRzt3QkFDVEQsV0FBVTt3QkFDVlksU0FBUzs0QkFBRWpCLFNBQVM7NEJBQUdDLEdBQUcsQ0FBQzt3QkFBRzt3QkFDOUJpQixTQUFTOzRCQUFFbEIsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRTt3QkFDNUJrQixNQUFNOzRCQUFFbkIsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO2tDQUUzQiw0RUFBQ0s7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDYixrREFBSUE7b0NBQ0hvQixNQUFLO29DQUNMUCxXQUFVO29DQUNWSyxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNsQixrREFBSUE7b0NBQ0hvQixNQUFLO29DQUNMUCxXQUFVO29DQUNWSyxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNsQixrREFBSUE7b0NBQ0hvQixNQUFLO29DQUNMUCxXQUFVO29DQUNWSyxjQUFXOzhDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVFULDhEQUFDSjtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ2Isa0RBQUlBO29DQUNIb0IsTUFBSztvQ0FDTFAsV0FBVTtvQ0FDVkssY0FBVzs4Q0FDWjs7Ozs7OzhDQUdELDhEQUFDbEIsa0RBQUlBO29DQUNIb0IsTUFBSztvQ0FDTFAsV0FBVTtvQ0FDVkssY0FBVzs4Q0FDWjs7Ozs7OzhDQUlELDhEQUFDbEIsa0RBQUlBO29DQUNIb0IsTUFBSztvQ0FDTFAsV0FBVTtvQ0FDVkssY0FBVzs4Q0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0F6R3dCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIG9wZW46IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICAgIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB5OiAtMTAgfSxcbiAgfTtcblxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbihmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWRhcmtlckJnIGxnOnB4LTEwIHBiLTUgbWItNSBsZzptYi0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmdyaWQgbGc6Z3JpZC1jb2xzLTIgbGc6bXgtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gcHgtNSBsZzpweC0wIGxnOmp1c3RpZnktc3RhcnQgbGc6c3BhY2UteS0xMCBiZy1kYXJrZXJCZ1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC01eGwgdGV4dC1saW5rIHByLTUgcGItOFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tYXJyb3ctdXBdIHRleHQtbGlua1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0taGFtYnVyZ2VyLW1lbnVdIHRleHQtbGlua1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYXgtaC1bMjIwcHhdIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjUwcHhdIG1pbi1oLVsyNTBweF0gbGc6bWluLXctWzIwdnddIGxnOm1pbi1oLVsyMHZoXSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5lci1kcmFmdC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzaXplcz1cIigxMDB2dywgMTAwdmgpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBtb2JpbGUgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGxnOmZsZXgtY29sIGxnOmp1c3RpZnktZW5kIGxnOmhpZGRlblwiPlxuICAgICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZzpzdGF0aWMgc3BhY2UteS04IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXggZmxleC1jb2wgei01MCBiZy1kYXJrZXJCZyBoLVs4MHZoXSBwbC01IGxnOnBsLTBcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMTIgdGV4dC00eGwgZm9udC1zYW5zIGZvbnQtYm9sZCBweS0xMCBwbC01XCI+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWltc1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBhaW1zIHBhZ2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE91ciBBaW1zXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL25ld3M/Y2F0ZWdvcnk9XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIG5ld3MgcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGF0ZXN0IE5ld3NcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2V0aW52b2x2ZWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgZ2V0IGludm9sdmVkIHBhZ2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdldCBJbnZvbHZlZFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBkZXNrdG9wIG1lbnUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZmxleC1yb3cgbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtMTAgc3BhY2UteS04IGxnOnNwYWNlLXktMCBsZzppdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy1mdWxsIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgei01MCBiZy1kYXJrZXJCZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEwIHRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgcGItNlwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvYWltc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGFpbXMgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPdXIgQWltc1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgbmV3cyBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExhdGVzdCBOZXdzXG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2V0aW52b2x2ZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWxpbmtcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBnZXQgaW52b2x2ZWQgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXQgSW52b2x2ZWRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJtb3Rpb24iLCJIZWFkZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsInkiLCJjbG9zZWQiLCJjbG9zZU1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImFyaWEtbGFiZWwiLCJzcGFuIiwiaHJlZiIsInNyYyIsImFsdCIsImZpbGwiLCJzaXplcyIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});