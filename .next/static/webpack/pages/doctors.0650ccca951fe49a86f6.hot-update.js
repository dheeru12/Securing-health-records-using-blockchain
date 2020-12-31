webpackHotUpdate_N_E("pages/doctors",{

/***/ "./pages/doctors.js":
/*!**************************!*\
  !*** ./pages/doctors.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var doctor = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(doctor, _Component);

  var _super = _createSuper(doctor);

  function doctor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, doctor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      accounts: [],
      items: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderDoctors", function () {
      console.log(_this.state.items.imageHash);
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
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Group, {
        items: items
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(doctor, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var accounts, docs, items, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getDoctors().call({
                  from: accounts[0]
                });

              case 5:
                docs = _context.sent;
                items = [];
                i = 0;

              case 8:
                if (!(i < docs.length)) {
                  _context.next = 17;
                  break;
                }

                _context.t0 = items;
                _context.next = 12;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__["default"].methods.docs(docs[i]).call();

              case 12:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

              case 14:
                i++;
                _context.next = 8;
                break;

              case 17:
                this.setState({
                  items: items
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("h3", {
          children: "Select your doctors"
        }), this.renderDoctors()]
      });
    }
  }]);

  return doctor;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdG9ycy5qcyJdLCJuYW1lcyI6WyJkb2N0b3IiLCJhY2NvdW50cyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiaW1hZ2VIYXNoIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREb2N0b3JzIiwiY2FsbCIsImZyb20iLCJkb2NzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzZXRTdGF0ZSIsInJlbmRlckRvY3RvcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFO0FBRkQsSzs7d05BY1EsWUFBTTtBQUNwQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxLQUFYLENBQWlCSSxTQUE3QjtBQUNBLFVBQU1KLEtBQUssR0FBRyxDQUNaO0FBQ0VLLGNBQU0sRUFBRSx3QkFEVjtBQUVFQyxtQkFBVyxFQUNULGtGQUhKO0FBSUVDLFlBQUksRUFBRTtBQUpSLE9BRFksRUFPWjtBQUNFRixjQUFNLEVBQUUsc0JBRFY7QUFFRUMsbUJBQVcsRUFDVCxnRkFISjtBQUlFQyxZQUFJLEVBQUU7QUFKUixPQVBZLEVBYVo7QUFDRUYsY0FBTSxFQUFFLHVCQURWO0FBRUVDLG1CQUFXLEVBQ1QsMkZBSEo7QUFJRUMsWUFBSSxFQUFFO0FBSlIsT0FiWSxDQUFkO0FBb0JBLDBCQUFPLDhEQUFDLHVEQUFELENBQU0sS0FBTjtBQUFZLGFBQUssRUFBRVA7QUFBbkIsUUFBUDtBQUNELEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFoQ3dCUSx1REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWpCWCx3Qjs7dUJBQ2FZLDBEQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFVBQWhCLEdBQTZCQyxJQUE3QixDQUFrQztBQUFFQyxzQkFBSSxFQUFFaEIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBQWxDLEM7OztBQUFiaUIsb0I7QUFFQWhCLHFCLEdBQVEsRTtBQUNMaUIsaUIsR0FBSSxDOzs7c0JBQUdBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNOzs7Ozs4QkFDdkJsQixLOzt1QkFBaUJXLDBEQUFPLENBQUNDLE9BQVIsQ0FBZ0JJLElBQWhCLENBQXFCQSxJQUFJLENBQUNDLENBQUQsQ0FBekIsRUFBOEJILElBQTlCLEU7Ozs7OzRCQUFYSyxJOzs7QUFEeUJGLGlCQUFDLEU7Ozs7O0FBR2xDLHFCQUFLRyxRQUFMLENBQWM7QUFBRXBCLHVCQUFLLEVBQUxBO0FBQUYsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkEwQk87QUFDUCwwQkFDRSwrREFBQywyREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQSxVQURGLEVBRUcsS0FBS3FCLGFBQUwsRUFGSDtBQUFBLFFBREY7QUFNRDs7OztFQTlDa0JDLGdEOztBQWlETnhCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3RvcnMuMDY1MGNjY2E5NTFmZTQ5YTg2ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEljb24sIEltYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBkb2N0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWNjb3VudHM6IFtdLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gIH07XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERvY3RvcnMoKS5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpdGVtcy5wdXNoKGF3YWl0IGZhY3RvcnkubWV0aG9kcy5kb2NzKGRvY3NbaV0pLmNhbGwoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXMgfSk7XHJcbiAgfVxyXG4gIHJlbmRlckRvY3RvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zLmltYWdlSGFzaCk7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogXCJQcm9qZWN0IFJlcG9ydCAtIEFwcmlsXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkxldmVyYWdlIGFnaWxlIGZyYW1ld29ya3MgdG8gcHJvdmlkZSBhIHJvYnVzdCBzeW5vcHNpcyBmb3IgaGlnaCBsZXZlbCBvdmVydmlld3MuXCIsXHJcbiAgICAgICAgbWV0YTogXCJST0k6IDMwJVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBcIlByb2plY3QgUmVwb3J0IC0gTWF5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiUk9JOiAzNCVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogXCJQcm9qZWN0IFJlcG9ydCAtIEp1bmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQ2FwaXRhbGlzZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC5cIixcclxuICAgICAgICBtZXRhOiBcIlJPSTogMjclXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5TZWxlY3QgeW91ciBkb2N0b3JzPC9oMz5cclxuICAgICAgICB7dGhpcy5yZW5kZXJEb2N0b3JzKCl9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvY3RvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==