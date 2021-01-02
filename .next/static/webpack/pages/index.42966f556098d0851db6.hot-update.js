webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
        itemsPerRow: 6
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          content: "Create record",
          floated: "right",
          icon: "add circle",
          primary: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmVjb3JkSW5kZXgiLCJpdGVtcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicmVjb3JkcyIsImxlbmd0aCIsImkiLCJyZWNvcmRJbnN0YW5jZSIsIlJlY29yZCIsIm9wdGlvbnMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldE5hbWVhbmRBZGRyZXNzIiwiY2FsbCIsImZyb20iLCJlYWNoUmVjb3JkIiwicHVzaCIsImltYWdlIiwiaGVhZGVyIiwiZXh0cmEiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyUmVjb3JkcyIsImZhY3RvcnkiLCJnZXREZXBsb3llZFJlY29yZHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLFdBQUssRUFBRTtBQURELEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFRaUJDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBakJDLHdCO0FBQ0FKLHFCLEdBQVEsRTtBQUNkSyx1QkFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxNQUEvQjtBQUNTQyxpQixHQUFJLEM7OztzQkFBR0EsQ0FBQyxHQUFHLEtBQUtILEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsTTs7Ozs7QUFDL0JFLDhCLEdBQWlCQyxpRUFBTSxDQUFDLEtBQUtMLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkUsQ0FBbkIsQ0FBRCxDO0FBQzdCTCx1QkFBTyxDQUFDQyxHQUFSLENBQVlLLGNBQWMsQ0FBQ0UsT0FBZixDQUF1QkMsT0FBbkM7O3VCQUN5QkgsY0FBYyxDQUFDSSxPQUFmLENBQ3RCQyxpQkFEc0IsR0FFdEJDLElBRnNCLENBRWpCO0FBQUVDLHNCQUFJLEVBQUVkLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGlCQUZpQixDOzs7QUFBbkJlLDBCO0FBR05uQixxQkFBSyxDQUFDb0IsSUFBTixDQUFXO0FBQ1RDLHVCQUFLLEVBQUVGLFVBQVUsQ0FBQyxDQUFELENBRFI7QUFFVEcsd0JBQU0sRUFBRUgsVUFBVSxDQUFDLENBQUQsQ0FGVDtBQUdUSSx1QkFBSyxlQUNILDhEQUFDLDZDQUFEO0FBQU0seUJBQUsscUJBQWMsS0FBS2hCLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkUsQ0FBbkIsQ0FBZCxDQUFYO0FBQUEsMkNBQ0U7QUFBQSw4Q0FDRSw4REFBQyx1REFBRDtBQUFNLDRCQUFJLEVBQUM7QUFBWCx3QkFERjtBQUFBO0FBREY7QUFKTyxpQkFBWDs7O0FBTjZDQSxpQkFBQyxFOzs7OztBQW1CaEQscUJBQUtjLFFBQUwsQ0FBYztBQUFFeEIsdUJBQUssRUFBTEE7QUFBRixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUVjO0FBQ2QsMEJBQU8sOERBQUMsdURBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFLEtBQUt5QixLQUFMLENBQVd6QixLQUE5QjtBQUFxQyxtQkFBVyxFQUFFO0FBQWxELFFBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQ0UsK0RBQUMsMkRBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUNFLGlCQUFPLEVBQUMsZUFEVjtBQUVFLGlCQUFPLEVBQUMsT0FGVjtBQUdFLGNBQUksRUFBQyxZQUhQO0FBSUUsaUJBQU87QUFKVCxVQURGLEVBT0csS0FBSzBCLGFBQUwsRUFQSDtBQUFBLFFBREY7QUFXRDs7Ozs7Ozs7Ozs7dUJBNUN1QkMsMERBQU8sQ0FBQ1osT0FBUixDQUFnQmEsa0JBQWhCLEdBQXFDWCxJQUFyQyxFOzs7QUFBaEJULHVCO2tEQUNDO0FBQUVBLHlCQUFPLEVBQVBBO0FBQUYsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFOZXFCLGdEOztBQW9EWDlCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyOTY2ZjU1NjA5OGQwODUxZGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUmVjb3JkIGZyb20gXCIuLi9ldGhlcmV1bS9yZWNvcmRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuY2xhc3MgcmVjb3JkSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gIH07XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRSZWNvcmRzKCkuY2FsbCgpO1xyXG4gICAgcmV0dXJuIHsgcmVjb3JkcyB9O1xyXG4gIH1cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnJlY29yZHMubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlY29yZEluc3RhbmNlID0gUmVjb3JkKHRoaXMucHJvcHMucmVjb3Jkc1tpXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlY29yZEluc3RhbmNlLm9wdGlvbnMuYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IGVhY2hSZWNvcmQgPSBhd2FpdCByZWNvcmRJbnN0YW5jZS5tZXRob2RzXHJcbiAgICAgICAgLmdldE5hbWVhbmRBZGRyZXNzKClcclxuICAgICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICBpbWFnZTogZWFjaFJlY29yZFsxXSxcclxuICAgICAgICBoZWFkZXI6IGVhY2hSZWNvcmRbMF0sXHJcbiAgICAgICAgZXh0cmE6IChcclxuICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL1JlY29yZHMvJHt0aGlzLnByb3BzLnJlY29yZHNbaV19YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtcyB9KTtcclxuICB9XHJcbiAgcmVuZGVyUmVjb3JkcygpIHtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gaXRlbXNQZXJSb3c9ezZ9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIHJlY29yZFwiXHJcbiAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxyXG4gICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3RoaXMucmVuZGVyUmVjb3JkcygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==