webpackHotUpdate_N_E("pages/all",{

/***/ "./pages/all.js":
/*!**********************!*\
  !*** ./pages/all.js ***!
  \**********************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_record__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ethereum/record */ "./ethereum/record.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var recordIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(recordIndex, _Component);

  var _super = _createSuper(recordIndex);

  function recordIndex() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, recordIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      items: []
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(recordIndex, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var accounts, items, i, recordInstance, eachRecord;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                items = [];
                console.log(this.props.records.length);
                i = 0;

              case 6:
                if (!(i < this.props.records.length)) {
                  _context.next = 16;
                  break;
                }

                recordInstance = Object(_ethereum_record__WEBPACK_IMPORTED_MODULE_15__["default"])(this.props.records[i]);
                console.log(recordInstance.options.address);
                _context.next = 11;
                return recordInstance.methods.getNameandAddress().call({
                  from: accounts[0]
                });

              case 11:
                eachRecord = _context.sent;
                items.push({
                  image: eachRecord[1],
                  header: eachRecord[0],
                  description: eachRecord[2],
                  fluid: true,
                  extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_16__["Link"], {
                    route: "/Records/".concat(this.props.records[i]),
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("a", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
                        name: "user"
                      }), "View"]
                    })
                  })
                });

              case 13:
                i++;
                _context.next = 6;
                break;

              case 16:
                this.setState({
                  items: items
                });

              case 17:
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
    key: "renderRecords",
    value: function renderRecords() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Group, {
        items: this.state.items,
        itemsPerRow: 2
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_16__["Link"], {
          route: "/doctors",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
              content: "Create record",
              floated: "right",
              icon: "add circle",
              primary: true
            })
          })
        }), this.renderRecords()]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var records;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getDeployedRecords().call();

              case 2:
                records = _context2.sent;
                return _context2.abrupt("return", {
                  records: records
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return recordIndex;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (recordIndex);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxsLmpzIl0sIm5hbWVzIjpbInJlY29yZEluZGV4IiwiaXRlbXMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInJlY29yZHMiLCJsZW5ndGgiLCJpIiwicmVjb3JkSW5zdGFuY2UiLCJSZWNvcmQiLCJvcHRpb25zIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXROYW1lYW5kQWRkcmVzcyIsImNhbGwiLCJmcm9tIiwiZWFjaFJlY29yZCIsInB1c2giLCJpbWFnZSIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJleHRyYSIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXJSZWNvcmRzIiwiZmFjdG9yeSIsImdldERlcGxveWVkUmVjb3JkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsV0FBSyxFQUFFO0FBREQsSzs7Ozs7Ozs7Ozs7Ozs7O3VCQVFpQkMsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkMsd0I7QUFDQUoscUIsR0FBUSxFO0FBQ2RLLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLE1BQS9CO0FBQ1NDLGlCLEdBQUksQzs7O3NCQUFHQSxDQUFDLEdBQUcsS0FBS0gsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxNOzs7OztBQUMvQkUsOEIsR0FBaUJDLGlFQUFNLENBQUMsS0FBS0wsS0FBTCxDQUFXQyxPQUFYLENBQW1CRSxDQUFuQixDQUFELEM7QUFDN0JMLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUssY0FBYyxDQUFDRSxPQUFmLENBQXVCQyxPQUFuQzs7dUJBQ3lCSCxjQUFjLENBQUNJLE9BQWYsQ0FDdEJDLGlCQURzQixHQUV0QkMsSUFGc0IsQ0FFakI7QUFBRUMsc0JBQUksRUFBRWQsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRmlCLEM7OztBQUFuQmUsMEI7QUFHTm5CLHFCQUFLLENBQUNvQixJQUFOLENBQVc7QUFDVEMsdUJBQUssRUFBRUYsVUFBVSxDQUFDLENBQUQsQ0FEUjtBQUVURyx3QkFBTSxFQUFFSCxVQUFVLENBQUMsQ0FBRCxDQUZUO0FBR1RJLDZCQUFXLEVBQUVKLFVBQVUsQ0FBQyxDQUFELENBSGQ7QUFJVEssdUJBQUssRUFBRSxJQUpFO0FBS1RDLHVCQUFLLGVBQ0gsOERBQUMsNkNBQUQ7QUFBTSx5QkFBSyxxQkFBYyxLQUFLbEIsS0FBTCxDQUFXQyxPQUFYLENBQW1CRSxDQUFuQixDQUFkLENBQVg7QUFBQSwyQ0FDRTtBQUFBLDhDQUNFLDhEQUFDLHVEQUFEO0FBQU0sNEJBQUksRUFBQztBQUFYLHdCQURGO0FBQUE7QUFERjtBQU5PLGlCQUFYOzs7QUFONkNBLGlCQUFDLEU7Ozs7O0FBcUJoRCxxQkFBS2dCLFFBQUwsQ0FBYztBQUFFMUIsdUJBQUssRUFBTEE7QUFBRixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUVjO0FBQ2QsMEJBQU8sOERBQUMsdURBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFLEtBQUsyQixLQUFMLENBQVczQixLQUE5QjtBQUFxQyxtQkFBVyxFQUFFO0FBQWxELFFBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQ0UsK0RBQUMsMkRBQUQ7QUFBQSxnQ0FDRSw4REFBQyw2Q0FBRDtBQUFNLGVBQUssRUFBQyxVQUFaO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRSw4REFBQyx5REFBRDtBQUNFLHFCQUFPLEVBQUMsZUFEVjtBQUVFLHFCQUFPLEVBQUMsT0FGVjtBQUdFLGtCQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFPO0FBSlQ7QUFERjtBQURGLFVBREYsRUFZRyxLQUFLNEIsYUFBTCxFQVpIO0FBQUEsUUFERjtBQWdCRDs7Ozs7Ozs7Ozs7dUJBbkR1QkMsMERBQU8sQ0FBQ2QsT0FBUixDQUFnQmUsa0JBQWhCLEdBQXFDYixJQUFyQyxFOzs7QUFBaEJULHVCO2tEQUNDO0FBQUVBLHlCQUFPLEVBQVBBO0FBQUYsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFOZXVCLGdEOztBQTJEWGhDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FsbC5hYTkwZTJhZmUwZDBkOTE5YWJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IFJlY29yZCBmcm9tIFwiLi4vZXRoZXJldW0vcmVjb3JkXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmNsYXNzIHJlY29yZEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICB9O1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkUmVjb3JkcygpLmNhbGwoKTtcclxuICAgIHJldHVybiB7IHJlY29yZHMgfTtcclxuICB9XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5yZWNvcmRzLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZWNvcmRJbnN0YW5jZSA9IFJlY29yZCh0aGlzLnByb3BzLnJlY29yZHNbaV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZWNvcmRJbnN0YW5jZS5vcHRpb25zLmFkZHJlc3MpO1xyXG4gICAgICBjb25zdCBlYWNoUmVjb3JkID0gYXdhaXQgcmVjb3JkSW5zdGFuY2UubWV0aG9kc1xyXG4gICAgICAgIC5nZXROYW1lYW5kQWRkcmVzcygpXHJcbiAgICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgaW1hZ2U6IGVhY2hSZWNvcmRbMV0sXHJcbiAgICAgICAgaGVhZGVyOiBlYWNoUmVjb3JkWzBdLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlYWNoUmVjb3JkWzJdLFxyXG4gICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgIGV4dHJhOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9SZWNvcmRzLyR7dGhpcy5wcm9wcy5yZWNvcmRzW2ldfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgVmlld1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXMgfSk7XHJcbiAgfVxyXG4gIHJlbmRlclJlY29yZHMoKSB7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IGl0ZW1zUGVyUm93PXsyfSAvPjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPExpbmsgcm91dGU9XCIvZG9jdG9yc1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIHJlY29yZFwiXHJcbiAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAge3RoaXMucmVuZGVyUmVjb3JkcygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==