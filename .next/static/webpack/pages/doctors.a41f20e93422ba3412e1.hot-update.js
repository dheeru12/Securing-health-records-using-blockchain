webpackHotUpdate_N_E("pages/doctors",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);



var web3;
var provider;

var enable = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.ethereum.enable();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function enable() {
    return _ref.apply(this, arguments);
  };
}();

if (true) {
  if (typeof window.web3 !== "undefined") {
    provider = window.web3.currentProvider;
    enable();
  }
} else {}

web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(provider);
/* harmony default export */ __webpack_exports__["default"] = (web3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vd2ViMy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwicHJvdmlkZXIiLCJlbmFibGUiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImN1cnJlbnRQcm92aWRlciIsIldlYjMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsSUFBSjtBQUNBLElBQUlDLFFBQUo7O0FBQ0EsSUFBTUMsTUFBTTtBQUFBLDhMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNQQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLE1BQWhCLEVBRE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBTkEsTUFBTTtBQUFBO0FBQUE7QUFBQSxHQUFaOztBQUdBLFVBQW1DO0FBQ2pDLE1BQUksT0FBT0MsTUFBTSxDQUFDSCxJQUFkLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDQyxZQUFRLEdBQUdFLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZSyxlQUF2QjtBQUNBSCxVQUFNO0FBQ1A7QUFDRixDQUxELE1BS08sRUFJTjs7QUFDREYsSUFBSSxHQUFHLElBQUlNLDJDQUFKLENBQVNMLFFBQVQsQ0FBUDtBQUNlRCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2N0b3JzLmE0MWYyMGU5MzQyMmJhMzQxMmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5sZXQgd2ViMztcclxubGV0IHByb3ZpZGVyO1xyXG5jb25zdCBlbmFibGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG59O1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHByb3ZpZGVyID0gd2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyO1xyXG4gICAgZW5hYmxlKCk7XHJcbiAgfVxyXG59IGVsc2Uge1xyXG4gIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIFwiaHR0cHM6Ly9yb3BzdGVuLmluZnVyYS5pby92My8yYWUzMjRmY2IwZDk0NDg2YjZiMDIyZjU1OTQ3NWRjN1wiXHJcbiAgKTtcclxufVxyXG53ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9