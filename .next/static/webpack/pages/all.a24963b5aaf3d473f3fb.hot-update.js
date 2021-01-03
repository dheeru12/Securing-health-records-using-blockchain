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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxsLmpzIl0sIm5hbWVzIjpbInJlY29yZEluZGV4IiwiaXRlbXMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInJlY29yZHMiLCJsZW5ndGgiLCJpIiwicmVjb3JkSW5zdGFuY2UiLCJSZWNvcmQiLCJvcHRpb25zIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXROYW1lYW5kQWRkcmVzcyIsImNhbGwiLCJmcm9tIiwiZWFjaFJlY29yZCIsInB1c2giLCJpbWFnZSIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJleHRyYSIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXJSZWNvcmRzIiwiZmFjdG9yeSIsImdldERlcGxveWVkUmVjb3JkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsV0FBSyxFQUFFO0FBREQsSzs7Ozs7Ozs7Ozs7Ozs7O3VCQVFpQkMsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkMsd0I7QUFDQUoscUIsR0FBUSxFO0FBQ2RLLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLE1BQS9CO0FBQ1NDLGlCLEdBQUksQzs7O3NCQUFHQSxDQUFDLEdBQUcsS0FBS0gsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxNOzs7OztBQUMvQkUsOEIsR0FBaUJDLGlFQUFNLENBQUMsS0FBS0wsS0FBTCxDQUFXQyxPQUFYLENBQW1CRSxDQUFuQixDQUFELEM7QUFDN0JMLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUssY0FBYyxDQUFDRSxPQUFmLENBQXVCQyxPQUFuQzs7dUJBQ3lCSCxjQUFjLENBQUNJLE9BQWYsQ0FDdEJDLGlCQURzQixHQUV0QkMsSUFGc0IsQ0FFakI7QUFBRUMsc0JBQUksRUFBRWQsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRmlCLEM7OztBQUFuQmUsMEI7QUFHTm5CLHFCQUFLLENBQUNvQixJQUFOLENBQVc7QUFDVEMsdUJBQUssRUFBRUYsVUFBVSxDQUFDLENBQUQsQ0FEUjtBQUVURyx3QkFBTSxFQUFFSCxVQUFVLENBQUMsQ0FBRCxDQUZUO0FBR1RJLDZCQUFXLEVBQUVKLFVBQVUsQ0FBQyxDQUFELENBSGQ7QUFJVEssdUJBQUssRUFBRSxJQUpFO0FBS1RDLHVCQUFLLGVBQ0gsOERBQUMsNkNBQUQ7QUFBTSx5QkFBSyxxQkFBYyxLQUFLbEIsS0FBTCxDQUFXQyxPQUFYLENBQW1CRSxDQUFuQixDQUFkLENBQVg7QUFBQSwyQ0FDRTtBQUFBLDhDQUNFLDhEQUFDLHVEQUFEO0FBQU0sNEJBQUksRUFBQztBQUFYLHdCQURGO0FBQUE7QUFERjtBQU5PLGlCQUFYOzs7QUFONkNBLGlCQUFDLEU7Ozs7O0FBcUJoRCxxQkFBS2dCLFFBQUwsQ0FBYztBQUFFMUIsdUJBQUssRUFBTEE7QUFBRixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUVjO0FBQ2QsMEJBQU8sOERBQUMsdURBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFLEtBQUsyQixLQUFMLENBQVczQixLQUE5QjtBQUFxQyxtQkFBVyxFQUFFO0FBQWxELFFBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQ0UsK0RBQUMsMkRBQUQ7QUFBQSxnQ0FDRSw4REFBQyw2Q0FBRDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UsOERBQUMseURBQUQ7QUFDRSxxQkFBTyxFQUFDLGVBRFY7QUFFRSxxQkFBTyxFQUFDLE9BRlY7QUFHRSxrQkFBSSxFQUFDLFlBSFA7QUFJRSxxQkFBTztBQUpUO0FBREY7QUFERixVQURGLEVBWUcsS0FBSzRCLGFBQUwsRUFaSDtBQUFBLFFBREY7QUFnQkQ7Ozs7Ozs7Ozs7O3VCQW5EdUJDLDBEQUFPLENBQUNkLE9BQVIsQ0FBZ0JlLGtCQUFoQixHQUFxQ2IsSUFBckMsRTs7O0FBQWhCVCx1QjtrREFDQztBQUFFQSx5QkFBTyxFQUFQQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTmV1QixnRDs7QUEyRFhoQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbGwuYTI0OTYzYjVhYWYzZDQ3M2YzZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBSZWNvcmQgZnJvbSBcIi4uL2V0aGVyZXVtL3JlY29yZFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5jbGFzcyByZWNvcmRJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogW10sXHJcbiAgfTtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZFJlY29yZHMoKS5jYWxsKCk7XHJcbiAgICByZXR1cm4geyByZWNvcmRzIH07XHJcbiAgfVxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucmVjb3Jkcy5sZW5ndGgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVjb3JkSW5zdGFuY2UgPSBSZWNvcmQodGhpcy5wcm9wcy5yZWNvcmRzW2ldKTtcclxuICAgICAgY29uc29sZS5sb2cocmVjb3JkSW5zdGFuY2Uub3B0aW9ucy5hZGRyZXNzKTtcclxuICAgICAgY29uc3QgZWFjaFJlY29yZCA9IGF3YWl0IHJlY29yZEluc3RhbmNlLm1ldGhvZHNcclxuICAgICAgICAuZ2V0TmFtZWFuZEFkZHJlc3MoKVxyXG4gICAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIGltYWdlOiBlYWNoUmVjb3JkWzFdLFxyXG4gICAgICAgIGhlYWRlcjogZWFjaFJlY29yZFswXSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZWFjaFJlY29yZFsyXSxcclxuICAgICAgICBmbHVpZDogdHJ1ZSxcclxuICAgICAgICBleHRyYTogKFxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvUmVjb3Jkcy8ke3RoaXMucHJvcHMucmVjb3Jkc1tpXX1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgIFZpZXdcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zIH0pO1xyXG4gIH1cclxuICByZW5kZXJSZWNvcmRzKCkge1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSBpdGVtc1BlclJvdz17Mn0gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIHJlY29yZFwiXHJcbiAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAge3RoaXMucmVuZGVyUmVjb3JkcygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==