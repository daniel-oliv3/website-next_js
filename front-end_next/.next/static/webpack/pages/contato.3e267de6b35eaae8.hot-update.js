"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contato",{

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Contato() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        subject: '',\n        content: ''\n    }), dataForm = ref[0], setDataForm = ref[1];\n    var onChangeInput = function(e) {\n        return setDataForm(_objectSpread({\n        }, dataForm, _defineProperty({\n        }, e.target.name, e.target.value)));\n    };\n    var sendContact = asc;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n            lineNumber: 20\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 21\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        charSet: \"utf-8\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 22\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"robots\",\n                        content: \"index, follow\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 23\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Site sobre ...\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 24\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"author\",\n                        content: \"Daniel Oliveira\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 25\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 26\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 27\n                        },\n                        __self: this,\n                        children: \"Sapup3 - Contato\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 29\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 29\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 29\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 29\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 29\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 29\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                onSubmit: sendContact,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                    lineNumber: 30\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        placeholder: \"Digite o nome\",\n                        onChange: onChangeInput,\n                        value: dataForm.name,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 31\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 31\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 31\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"Digite o seu e-mail\",\n                        onChange: onChangeInput,\n                        value: dataForm.name,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 32\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 32\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 32\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        name: \"subject\",\n                        placeholder: \"Digite o assunto da mensagem\",\n                        onChange: onChangeInput,\n                        value: dataForm.name,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 34\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 34\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 34\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        name: \"content\",\n                        placeholder: \"Digite o conte\\xfado da mensagem\",\n                        onChange: onChangeInput,\n                        value: dataForm.name,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 35\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 35\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 35\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        type: \"submit\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Daniel_Oliveira\\\\Documents\\\\GitHub\\\\website-next_js\\\\front-end_next\\\\pages\\\\contato.js\",\n                            lineNumber: 37\n                        },\n                        __self: this,\n                        children: \"Enviar\"\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Contato, \"VTPQOKVLerqn8DkT1CBeKqs/PhM=\");\n_c = Contato;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contato);\nvar _c;\n$RefreshReg$(_c, \"Contato\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztrQ0FBQyxDQUFNOzs7Ozs7QUFJNUMsQ0FBQztHQXBDUXJCLE9BQU87S0FBUEEsT0FBTztBQXNDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YXRvLmpzP2RlMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcblxyXG5mdW5jdGlvbiBDb250YXRvKCkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRhRm9ybSwgc2V0RGF0YUZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBjb250ZW50OiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0RGF0YUZvcm0oIHsuLi5kYXRhRm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG5cclxuICAgIGNvbnN0IHNlbmRDb250YWN0ID0gYXNjXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNpdGUgc29icmUgLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRGFuaWVsIE9saXZlaXJhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TYXB1cDMgLSBDb250YXRvPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TWVudSAvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRDb250YWN0fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBub21lXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5uYW1lfS8+PGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gc2V1IGUtbWFpbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSB2YWx1ZT17ZGF0YUZvcm0ubmFtZX0vPjxici8+PGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gYXNzdW50byBkYSBtZW5zYWdlbVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSB2YWx1ZT17ZGF0YUZvcm0ubmFtZX0vPjxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb250ZW50XCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBjb250ZcO6ZG8gZGEgbWVuc2FnZW1cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gdmFsdWU9e2RhdGFGb3JtLm5hbWV9Lz48YnIvPjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGF0bzsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiTWVudSIsIkNvbnRhdG8iLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGFGb3JtIiwic2V0RGF0YUZvcm0iLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZENvbnRhY3QiLCJhc2MiLCJkaXYiLCJtZXRhIiwiY2hhclNldCIsInRpdGxlIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contato.js\n");

/***/ })

});