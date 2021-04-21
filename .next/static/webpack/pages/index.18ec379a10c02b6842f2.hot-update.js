webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Menu.module.scss */ \"./styles/Menu.module.scss\");\n/* harmony import */ var _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Hamburguer_HamburguerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hamburguer/HamburguerButton */ \"./components/Hamburguer/HamburguerButton.js\");\nvar _jsxFileName = \"/Users/exeibier/Documents/websites/movdi/components/Menu/Menu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Menu(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      menuNav = _useState[0],\n      setMenuNav = _useState[1];\n\n  var changeBackground = function changeBackground() {\n    console.log(window.scrollY);\n\n    if (window.scrollY >= 90) {\n      setMenuNav(true);\n    } else {\n      setMenuNav(false);\n    }\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect = (function () {\n    changeBackground();\n  }, []);\n  window.addEventListener('scroll', changeBackground);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"header\", {\n    className: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"nav\", {\n    className: menuNav ? \"\".concat(_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuNav, \" \").concat(_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.follow) : \"\".concat(_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuNav),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu_toggle_button,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(_Hamburguer_HamburguerButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    click: props.hamburguerClickHandler,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    className: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuLogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/assets/SVG/logo.svg\",\n    alt: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 51\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.spacer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    activeClass: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,\n    to: \"home\",\n    spy: true,\n    smooth: true,\n    offset: -70,\n    duration: 500,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }, \"HOME\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    activeClass: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,\n    to: \"about\",\n    spy: true,\n    smooth: true,\n    offset: -70,\n    duration: 500,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"ACERCA\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    activeClass: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,\n    to: \"categories\",\n    spy: true,\n    smooth: true,\n    offset: -70,\n    duration: 500,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, \"CATEGORIAS\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    activeClass: _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,\n    to: \"clients\",\n    spy: true,\n    smooth: true,\n    offset: -70,\n    duration: 500,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, \"CLIENTES\")))))));\n}\n\n_s(Menu, \"MDFjos98V65JiocLLCzzZ8hEMfc=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L01lbnUuanM/ZmE1YSJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1lbnVOYXYiLCJzZXRNZW51TmF2IiwiY2hhbmdlQmFja2dyb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwibWVudSIsImZvbGxvdyIsIm1lbnVfdG9nZ2xlX2J1dHRvbiIsImhhbWJ1cmd1ZXJDbGlja0hhbmRsZXIiLCJtZW51TG9nbyIsInNwYWNlciIsIm1lbnVJdGVtcyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQW9CO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUdwQixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5COztBQUNBLFFBQUdELE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQixFQUF3QjtBQUN0QkwsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZELE1BRU87QUFDTEEsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLEdBUEQ7O0FBU0FNLDhDQUFLLENBQUNDLFNBQU4sSUFBbUIsWUFBTTtBQUN2Qk4sb0JBQWdCO0FBQ2pCLEdBRmtCLEVBRWhCLEVBRkg7QUFJQUcsUUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsZ0JBQWxDO0FBRUUsU0FDRSxtRUFDRTtBQUFRLGFBQVMsRUFBRVEsK0RBQU0sQ0FBQ0MsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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ImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL01lbnUubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuaW1wb3J0IEhhbWJ1cmd1ZXJCdXR0b24gZnJvbSAnLi4vSGFtYnVyZ3Vlci9IYW1idXJndWVyQnV0dG9uJ1xuXG5mdW5jdGlvbiBNZW51KHByb3BzKXtcbmNvbnN0IFttZW51TmF2LCBzZXRNZW51TmF2XSA9IHVzZVN0YXRlKHRydWUpXG5cbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKVxuICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA5MCl7XG4gICAgc2V0TWVudU5hdih0cnVlKVxuICB9IGVsc2Uge1xuICAgIHNldE1lbnVOYXYoZmFsc2UpXG4gIH1cbn1cblxuUmVhY3QudXNlRWZmZWN0ID0gKCgpID0+IHtcbiAgY2hhbmdlQmFja2dyb3VuZCgpO1xufSwgW10pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlQmFja2dyb3VuZClcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17bWVudU5hdiA/YCR7c3R5bGVzLm1lbnVOYXZ9ICR7c3R5bGVzLmZvbGxvd31gOiBgJHtzdHlsZXMubWVudU5hdn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51X3RvZ2dsZV9idXR0b259PlxuICAgICAgICAgIDxIYW1idXJndWVyQnV0dG9uIGNsaWNrPXtwcm9wcy5oYW1idXJndWVyQ2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9e3N0eWxlcy5tZW51TG9nb30+PGltZyBzcmM9Jy9hc3NldHMvU1ZHL2xvZ28uc3ZnJyBhbHQ9J2xvZ28nIC8+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbXN9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9e3N0eWxlcy5hY3RpdmV9XG4gICAgICAgICAgICAgIHRvPSdob21lJ1xuICAgICAgICAgICAgICBzcHlcbiAgICAgICAgICAgICAgc21vb3RoXG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICA+SE9NRVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPXtzdHlsZXMuYWN0aXZlfVxuICAgICAgICAgICAgICB0bz0nYWJvdXQnXG4gICAgICAgICAgICAgIHNweVxuICAgICAgICAgICAgICBzbW9vdGhcbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgID5BQ0VSQ0FcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9e3N0eWxlcy5hY3RpdmV9XG4gICAgICAgICAgICAgIHRvPSdjYXRlZ29yaWVzJ1xuICAgICAgICAgICAgICBzcHlcbiAgICAgICAgICAgICAgc21vb3RoXG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICA+Q0FURUdPUklBU1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzcz17c3R5bGVzLmFjdGl2ZX1cbiAgICAgICAgICAgICAgdG89J2NsaWVudHMnXG4gICAgICAgICAgICAgIHNweVxuICAgICAgICAgICAgICBzbW9vdGhcbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgID5DTElFTlRFU1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPC8+XG4gIClcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Menu/Menu.js\n");

/***/ })

})