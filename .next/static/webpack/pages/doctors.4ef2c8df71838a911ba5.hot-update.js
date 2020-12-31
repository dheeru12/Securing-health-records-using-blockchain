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
      console.log(_this.state.items);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Group, {
        items: _this.state.items
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(doctor, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var accounts, docs, items, i, eachRecord;
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
                  _context.next = 16;
                  break;
                }

                _context.next = 11;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__["default"].methods.docs(docs[i]).call();

              case 11:
                eachRecord = _context.sent;
                items.push({
                  image: eachRecord.imageHash,
                  header: eachRecord.description,
                  description: eachRecord.speciality,
                  extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_15__["Link"], {
                    route: "doctors/".concat(eachRecord.doc),
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])("a", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
                        name: "user"
                      }), "select"]
                    })
                  })
                });

              case 13:
                i++;
                _context.next = 8;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdG9ycy5qcyJdLCJuYW1lcyI6WyJkb2N0b3IiLCJhY2NvdW50cyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREb2N0b3JzIiwiY2FsbCIsImZyb20iLCJkb2NzIiwiaSIsImxlbmd0aCIsImVhY2hSZWNvcmQiLCJwdXNoIiwiaW1hZ2UiLCJpbWFnZUhhc2giLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInNwZWNpYWxpdHkiLCJleHRyYSIsImRvYyIsInNldFN0YXRlIiwicmVuZGVyRG9jdG9ycyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxXQUFLLEVBQUU7QUFGRCxLOzt3TkEyQlEsWUFBTTtBQUNwQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxLQUF2QjtBQUNBLDBCQUFPLDhEQUFDLHVEQUFELENBQU0sS0FBTjtBQUFZLGFBQUssRUFBRSxNQUFLRyxLQUFMLENBQVdIO0FBQTlCLFFBQVA7QUFDRCxLOzs7Ozs7Ozs7Ozs7Ozs7dUJBekJ3QkksdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQlAsd0I7O3VCQUNhUSwwREFBTyxDQUFDQyxPQUFSLENBQWdCQyxVQUFoQixHQUE2QkMsSUFBN0IsQ0FBa0M7QUFBRUMsc0JBQUksRUFBRVosUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBQWxDLEM7OztBQUFiYSxvQjtBQUNBWixxQixHQUFRLEU7QUFDTGEsaUIsR0FBSSxDOzs7c0JBQUdBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNOzs7Ozs7dUJBQ0VQLDBEQUFPLENBQUNDLE9BQVIsQ0FBZ0JJLElBQWhCLENBQXFCQSxJQUFJLENBQUNDLENBQUQsQ0FBekIsRUFBOEJILElBQTlCLEU7OztBQUFuQkssMEI7QUFDTmYscUJBQUssQ0FBQ2dCLElBQU4sQ0FBVztBQUNUQyx1QkFBSyxFQUFFRixVQUFVLENBQUNHLFNBRFQ7QUFFVEMsd0JBQU0sRUFBRUosVUFBVSxDQUFDSyxXQUZWO0FBR1RBLDZCQUFXLEVBQUVMLFVBQVUsQ0FBQ00sVUFIZjtBQUlUQyx1QkFBSyxlQUNILDhEQUFDLDZDQUFEO0FBQU0seUJBQUssb0JBQWFQLFVBQVUsQ0FBQ1EsR0FBeEIsQ0FBWDtBQUFBLDJDQUNFO0FBQUEsOENBQ0UsOERBQUMsdURBQUQ7QUFBTSw0QkFBSSxFQUFDO0FBQVgsd0JBREY7QUFBQTtBQURGO0FBTE8saUJBQVg7OztBQUYrQlYsaUJBQUMsRTs7Ozs7QUFpQmxDLHFCQUFLVyxRQUFMLENBQWM7QUFBRXhCLHVCQUFLLEVBQUxBO0FBQUYsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFNTztBQUNQLDBCQUNFLCtEQUFDLDJEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLFVBREYsRUFFRyxLQUFLeUIsYUFBTCxFQUZIO0FBQUEsUUFERjtBQU1EOzs7O0VBdkNrQkMsZ0Q7O0FBMENONUIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jdG9ycy40ZWYyYzhkZjcxODM4YTkxMWJhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgSWNvbiwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuXHJcbmNsYXNzIGRvY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY2NvdW50czogW10sXHJcbiAgICBpdGVtczogW10sXHJcbiAgfTtcclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RG9jdG9ycygpLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWFjaFJlY29yZCA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5kb2NzKGRvY3NbaV0pLmNhbGwoKTtcclxuICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgaW1hZ2U6IGVhY2hSZWNvcmQuaW1hZ2VIYXNoLFxyXG4gICAgICAgIGhlYWRlcjogZWFjaFJlY29yZC5kZXNjcmlwdGlvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogZWFjaFJlY29yZC5zcGVjaWFsaXR5LFxyXG4gICAgICAgIGV4dHJhOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YGRvY3RvcnMvJHtlYWNoUmVjb3JkLmRvY31gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zIH0pO1xyXG4gIH1cclxuICByZW5kZXJEb2N0b3JzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IC8+O1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+U2VsZWN0IHlvdXIgZG9jdG9yczwvaDM+XHJcbiAgICAgICAge3RoaXMucmVuZGVyRG9jdG9ycygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb2N0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=