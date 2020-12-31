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
      console.log(_this.state.items[imageHash]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdG9ycy5qcyJdLCJuYW1lcyI6WyJkb2N0b3IiLCJhY2NvdW50cyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiaW1hZ2VIYXNoIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREb2N0b3JzIiwiY2FsbCIsImZyb20iLCJkb2NzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzZXRTdGF0ZSIsInJlbmRlckRvY3RvcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFO0FBRkQsSzs7d05BZVEsWUFBTTtBQUNwQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxLQUFYLENBQWlCSSxTQUFqQixDQUFaO0FBQ0EsVUFBTUosS0FBSyxHQUFHLENBQ1o7QUFDRUssY0FBTSxFQUFFLHdCQURWO0FBRUVDLG1CQUFXLEVBQ1Qsa0ZBSEo7QUFJRUMsWUFBSSxFQUFFO0FBSlIsT0FEWSxFQU9aO0FBQ0VGLGNBQU0sRUFBRSxzQkFEVjtBQUVFQyxtQkFBVyxFQUNULGdGQUhKO0FBSUVDLFlBQUksRUFBRTtBQUpSLE9BUFksRUFhWjtBQUNFRixjQUFNLEVBQUUsdUJBRFY7QUFFRUMsbUJBQVcsRUFDVCwyRkFISjtBQUlFQyxZQUFJLEVBQUU7QUFKUixPQWJZLENBQWQ7QUFvQkEsMEJBQU8sOERBQUMsdURBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFUDtBQUFuQixRQUFQO0FBQ0QsSzs7Ozs7Ozs7Ozs7Ozs7O3VCQWpDd0JRLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBakJYLHdCOzt1QkFDYVksMERBQU8sQ0FBQ0MsT0FBUixDQUFnQkMsVUFBaEIsR0FBNkJDLElBQTdCLENBQWtDO0FBQUVDLHNCQUFJLEVBQUVoQixRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFBbEMsQzs7O0FBQWJpQixvQjtBQUNBaEIscUIsR0FBUSxFO0FBRUxpQixpQixHQUFJLEM7OztzQkFBR0EsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE07Ozs7OzhCQUN2QmxCLEs7O3VCQUFpQlcsMERBQU8sQ0FBQ0MsT0FBUixDQUFnQkksSUFBaEIsQ0FBcUJBLElBQUksQ0FBQ0MsQ0FBRCxDQUF6QixFQUE4QkgsSUFBOUIsRTs7Ozs7NEJBQVhLLEk7OztBQUR5QkYsaUJBQUMsRTs7Ozs7QUFJbEMscUJBQUtHLFFBQUwsQ0FBYztBQUFFcEIsdUJBQUssRUFBTEE7QUFBRixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTBCTztBQUNQLDBCQUNFLCtEQUFDLDJEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLFVBREYsRUFFRyxLQUFLcUIsYUFBTCxFQUZIO0FBQUEsUUFERjtBQU1EOzs7O0VBL0NrQkMsZ0Q7O0FBa0ROeEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jdG9ycy45ZGFmOTIxMmQ2MjlmZmQ2ZDk1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgSWNvbiwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuXHJcbmNsYXNzIGRvY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY2NvdW50czogW10sXHJcbiAgICBpdGVtczogW10sXHJcbiAgfTtcclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RG9jdG9ycygpLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGl0ZW1zLnB1c2goYXdhaXQgZmFjdG9yeS5tZXRob2RzLmRvY3MoZG9jc1tpXSkuY2FsbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXMgfSk7XHJcbiAgfVxyXG4gIHJlbmRlckRvY3RvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zW2ltYWdlSGFzaF0pO1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IFwiUHJvamVjdCBSZXBvcnQgLSBBcHJpbFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJMZXZlcmFnZSBhZ2lsZSBmcmFtZXdvcmtzIHRvIHByb3ZpZGUgYSByb2J1c3Qgc3lub3BzaXMgZm9yIGhpZ2ggbGV2ZWwgb3ZlcnZpZXdzLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiUk9JOiAzMCVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogXCJQcm9qZWN0IFJlcG9ydCAtIE1heVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJCcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiBzdXJ2aXZhbCBzdHJhdGVnaWVzIHRvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi5cIixcclxuICAgICAgICBtZXRhOiBcIlJPSTogMzQlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IFwiUHJvamVjdCBSZXBvcnQgLSBKdW5lXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkNhcGl0YWxpc2Ugb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuXCIsXHJcbiAgICAgICAgbWV0YTogXCJST0k6IDI3JVwiLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+U2VsZWN0IHlvdXIgZG9jdG9yczwvaDM+XHJcbiAgICAgICAge3RoaXMucmVuZGVyRG9jdG9ycygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb2N0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=