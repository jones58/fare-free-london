"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/getinvolved",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-darkerBg lg:px-10 pb-5 mb-5 lg:mb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:grid lg:grid-cols-2 lg:mx-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-darkerBg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setMenuOpen(!menuOpen),\n                                className: \"lg:hidden text-5xl text-link pr-5 pb-8\",\n                                type: \"button\",\n                                \"aria-label\": \"menu\",\n                                children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"icon-[mdi--arrow-up] text-link\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"icon-[mdi--hamburger-menu] text-link\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"max-h-[220px] \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/images/banner-draft.png\",\n                                        alt: \"logo\",\n                                        fill: true,\n                                        className: \"object-contain object-center\",\n                                        sizes: \"(100vw, 100vh)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row lg:flex-col lg:justify-end lg:hidden\",\n                        children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-darkerBg h-[80vh] pl-5 lg:pl-0\",\n                            initial: {\n                                opacity: 0,\n                                y: -20\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            exit: {\n                                opacity: 0,\n                                y: -20\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col space-y-12 text-4xl font-sans font-bold py-10 pl-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/aims\",\n                                        className: \"text-link hover:text-hover active:text-link\",\n                                        \"aria-label\": \"link to the aims page\",\n                                        children: \"Our Aims\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/news?category=\",\n                                        className: \"text-link hover:text-hover active:text-link\",\n                                        \"aria-label\": \"link to the news page\",\n                                        children: \"Latest News\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/getinvolved\",\n                                        className: \"text-link hover:text-hover active:text-link\",\n                                        \"aria-label\": \"link to the get involved page\",\n                                        children: \"Get Involved\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:flex flex-row lg:flex-col lg:justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-darkerBg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center space-x-10 text-3xl font-sans font-bold pb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/aims\",\n                                        className: \"text-link hover:text-hover active:text-link\",\n                                        \"aria-label\": \"link to the aims page\",\n                                        children: \"Our Aims\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/news\",\n                                        className: \"text-link hover:text-hover active:text-link\",\n                                        \"aria-label\": \"link to the news page\",\n                                        children: \"Latest News\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/getinvolved\",\n                                        className: \"text-link hover:text-hover active:text-link\",\n                                        \"aria-label\": \"link to the get involved page\",\n                                        children: \"Get Involved\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"images/desktop.svg\",\n                alt: \"desktop\",\n                className: \"hidden lg:block h-20 w-full object-cover\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBRXhCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQ0NDLFNBQVMsSUFBTVYsWUFBWSxDQUFDRDtnQ0FDNUJRLFdBQVU7Z0NBQ1ZJLE1BQUs7Z0NBQ0xDLGNBQVc7MENBRVZiLHlCQUNDLDhEQUFDYztvQ0FBS04sV0FBVTs7Ozs7eURBRWhCLDhEQUFDTTtvQ0FBS04sV0FBVTs7Ozs7Ozs7Ozs7MENBR3BCLDhEQUFDWixrREFBSUE7Z0NBQUNtQixNQUFLO2dDQUFJUCxXQUFVOzBDQUN2Qiw0RUFBQ0M7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUNYLG1EQUFLQTt3Q0FDSm1CLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLElBQUk7d0NBQ0pWLFdBQVU7d0NBQ1ZXLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTWQsOERBQUNWO3dCQUFJRCxXQUFVO2tDQUNaUiwwQkFDQyw4REFBQ0YsaURBQU1BLENBQUNXLEdBQUc7NEJBQ1RELFdBQVU7NEJBQ1ZZLFNBQVM7Z0NBQUVoQixTQUFTO2dDQUFHQyxHQUFHLENBQUM7NEJBQUc7NEJBQzlCZ0IsU0FBUztnQ0FBRWpCLFNBQVM7Z0NBQUdDLEdBQUc7NEJBQUU7NEJBQzVCaUIsTUFBTTtnQ0FBRWxCLFNBQVM7Z0NBQUdDLEdBQUcsQ0FBQzs0QkFBRztzQ0FFM0IsNEVBQUNJO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ1osa0RBQUlBO3dDQUNIbUIsTUFBSzt3Q0FDTFAsV0FBVTt3Q0FDVkssY0FBVztrREFDWjs7Ozs7O2tEQUdELDhEQUFDakIsa0RBQUlBO3dDQUNIbUIsTUFBSzt3Q0FDTFAsV0FBVTt3Q0FDVkssY0FBVztrREFDWjs7Ozs7O2tEQUdELDhEQUFDakIsa0RBQUlBO3dDQUNIbUIsTUFBSzt3Q0FDTFAsV0FBVTt3Q0FDVkssY0FBVztrREFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRVCw4REFBQ0o7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNaLGtEQUFJQTt3Q0FDSG1CLE1BQUs7d0NBQ0xQLFdBQVU7d0NBQ1ZLLGNBQVc7a0RBQ1o7Ozs7OztrREFHRCw4REFBQ2pCLGtEQUFJQTt3Q0FDSG1CLE1BQUs7d0NBQ0xQLFdBQVU7d0NBQ1ZLLGNBQVc7a0RBQ1o7Ozs7OztrREFJRCw4REFBQ2pCLGtEQUFJQTt3Q0FDSG1CLE1BQUs7d0NBQ0xQLFdBQVU7d0NBQ1ZLLGNBQVc7a0RBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1QsOERBQUNVO2dCQUNDUCxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKVCxXQUFVOzs7Ozs7Ozs7Ozs7QUFJbEI7R0E1R3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIG9wZW46IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICAgIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB5OiAtMTAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctZGFya2VyQmcgbGc6cHgtMTAgcGItNSBtYi01IGxnOm1iLTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtMiBsZzpteC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBweC01IGxnOnB4LTAgbGc6anVzdGlmeS1zdGFydCBsZzpzcGFjZS15LTEwIGJnLWRhcmtlckJnXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiB0ZXh0LTV4bCB0ZXh0LWxpbmsgcHItNSBwYi04XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1hcnJvdy11cF0gdGV4dC1saW5rXCI+PC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1bbWRpLS1oYW1idXJnZXItbWVudV0gdGV4dC1saW5rXCI+PC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1heC1oLVsyMjBweF0gXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVsyNTBweF0gbWluLWgtWzI1MHB4XSBsZzptaW4tdy1bMjB2d10gbGc6bWluLWgtWzIwdmhdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYmFubmVyLWRyYWZ0LnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIHNpemVzPVwiKDEwMHZ3LCAxMDB2aClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIG1vYmlsZSBtZW51ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1lbmQgbGc6aGlkZGVuXCI+XG4gICAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxnOnN0YXRpYyBzcGFjZS15LTgganVzdGlmeS1zdGFydCB3LWZ1bGwgZmxleCBmbGV4LWNvbCB6LTUwIGJnLWRhcmtlckJnIGgtWzgwdmhdIHBsLTUgbGc6cGwtMFwiXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xMiB0ZXh0LTR4bCBmb250LXNhbnMgZm9udC1ib2xkIHB5LTEwIHBsLTVcIj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9haW1zXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGFpbXMgcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgT3VyIEFpbXNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbmV3cz9jYXRlZ29yeT1cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgbmV3cyBwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMYXRlc3QgTmV3c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9nZXRpbnZvbHZlZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBnZXQgaW52b2x2ZWQgcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgR2V0IEludm9sdmVkXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIGRlc2t0b3AgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBmbGV4LXJvdyBsZzpmbGV4LWNvbCBsZzpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC0xMCBzcGFjZS15LTggbGc6c3BhY2UteS0wIGxnOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB6LTUwIGJnLWRhcmtlckJnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtMTAgdGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCBwYi02XCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9haW1zXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgYWltcyBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE91ciBBaW1zXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL25ld3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWxpbmtcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBuZXdzIHBhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGF0ZXN0IE5ld3NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9nZXRpbnZvbHZlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGdldCBpbnZvbHZlZCBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdldCBJbnZvbHZlZFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaW1hZ2VzL2Rlc2t0b3Auc3ZnXCJcbiAgICAgICAgYWx0PVwiZGVza3RvcFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoLTIwIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIm1vdGlvbiIsIkhlYWRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieSIsImNsb3NlZCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJocmVmIiwic3JjIiwiYWx0IiwiZmlsbCIsInNpemVzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});