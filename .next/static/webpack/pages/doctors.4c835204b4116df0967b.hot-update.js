webpackHotUpdate_N_E("pages/doctors",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/doctors.js":
/*!**************************!*\
  !*** ./pages/doctors.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var doctor = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(doctor, _Component);

  var _super = _createSuper(doctor);

  function doctor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, doctor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderDoctors", function () {
      var items = [{
        header: "Project Report - April",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        meta: "ROI: 30%"
      }, {
        header: "Project Report - May",
        description: "Bring to the table win-win survival strategies to ensure proactive domination.",
        meta: "ROI: 34%"
      }, {
        header: "Project Report - June",
        description: "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
        meta: "ROI: 27%"
      }];
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Group, {
        items: items
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(doctor, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
          children: "Select your doctors"
        }), this.renderDoctors()]
      });
    }
  }]);

  return doctor;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (doctor);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdG9ycy5qcyJdLCJuYW1lcyI6WyJkb2N0b3IiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInJlbmRlckRvY3RvcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O3dOQUNZLFlBQU07QUFDcEIsVUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsY0FBTSxFQUFFLHdCQURWO0FBRUVDLG1CQUFXLEVBQ1Qsa0ZBSEo7QUFJRUMsWUFBSSxFQUFFO0FBSlIsT0FEWSxFQU9aO0FBQ0VGLGNBQU0sRUFBRSxzQkFEVjtBQUVFQyxtQkFBVyxFQUNULGdGQUhKO0FBSUVDLFlBQUksRUFBRTtBQUpSLE9BUFksRUFhWjtBQUNFRixjQUFNLEVBQUUsdUJBRFY7QUFFRUMsbUJBQVcsRUFDVCwyRkFISjtBQUlFQyxZQUFJLEVBQUU7QUFKUixPQWJZLENBQWQ7QUFvQkEsMEJBQU8sOERBQUMsdURBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFSDtBQUFuQixRQUFQO0FBQ0QsSzs7Ozs7Ozs2QkFDUTtBQUNQLDBCQUNFLCtEQUFDLDJEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLFVBREYsRUFFRyxLQUFLSSxhQUFMLEVBRkg7QUFBQSxRQURGO0FBTUQ7Ozs7RUEvQmtCQywrQzs7QUFrQ05OLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3RvcnMuNGM4MzUyMDRiNDExNmRmMDk2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEljb24sIEltYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBkb2N0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlckRvY3RvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogXCJQcm9qZWN0IFJlcG9ydCAtIEFwcmlsXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkxldmVyYWdlIGFnaWxlIGZyYW1ld29ya3MgdG8gcHJvdmlkZSBhIHJvYnVzdCBzeW5vcHNpcyBmb3IgaGlnaCBsZXZlbCBvdmVydmlld3MuXCIsXHJcbiAgICAgICAgbWV0YTogXCJST0k6IDMwJVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBcIlByb2plY3QgUmVwb3J0IC0gTWF5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiUk9JOiAzNCVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogXCJQcm9qZWN0IFJlcG9ydCAtIEp1bmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQ2FwaXRhbGlzZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC5cIixcclxuICAgICAgICBtZXRhOiBcIlJPSTogMjclXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5TZWxlY3QgeW91ciBkb2N0b3JzPC9oMz5cclxuICAgICAgICB7dGhpcy5yZW5kZXJEb2N0b3JzKCl9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvY3RvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==