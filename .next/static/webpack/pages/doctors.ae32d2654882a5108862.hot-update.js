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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdG9ycy5qcyJdLCJuYW1lcyI6WyJkb2N0b3IiLCJhY2NvdW50cyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREb2N0b3JzIiwiY2FsbCIsImZyb20iLCJkb2NzIiwiaSIsImxlbmd0aCIsImVhY2hSZWNvcmQiLCJwdXNoIiwiaW1hZ2UiLCJpbWFnZUhhc2giLCJzcGVjaWFsaXR5IiwiZXh0cmEiLCJkb2MiLCJzZXRTdGF0ZSIsInJlbmRlckRvY3RvcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFO0FBRkQsSzs7d05BMkJRLFlBQU07QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtDLEtBQUwsQ0FBV0gsS0FBdkI7QUFDQSxVQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFSSxjQUFNLEVBQUUsd0JBRFY7QUFFRUMsbUJBQVcsRUFDVCxrRkFISjtBQUlFQyxZQUFJLEVBQUU7QUFKUixPQURZLEVBT1o7QUFDRUYsY0FBTSxFQUFFLHNCQURWO0FBRUVDLG1CQUFXLEVBQ1QsZ0ZBSEo7QUFJRUMsWUFBSSxFQUFFO0FBSlIsT0FQWSxFQWFaO0FBQ0VGLGNBQU0sRUFBRSx1QkFEVjtBQUVFQyxtQkFBVyxFQUNULDJGQUhKO0FBSUVDLFlBQUksRUFBRTtBQUpSLE9BYlksQ0FBZDtBQW9CQSwwQkFBTyw4REFBQyx1REFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUVOO0FBQW5CLFFBQVA7QUFDRCxLOzs7Ozs7Ozs7Ozs7Ozs7dUJBN0N3Qk8sdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQlYsd0I7O3VCQUNhVywwREFBTyxDQUFDQyxPQUFSLENBQWdCQyxVQUFoQixHQUE2QkMsSUFBN0IsQ0FBa0M7QUFBRUMsc0JBQUksRUFBRWYsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBQWxDLEM7OztBQUFiZ0Isb0I7QUFDQWYscUIsR0FBUSxFO0FBQ0xnQixpQixHQUFJLEM7OztzQkFBR0EsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE07Ozs7Ozt1QkFDRVAsMERBQU8sQ0FBQ0MsT0FBUixDQUFnQkksSUFBaEIsQ0FBcUJBLElBQUksQ0FBQ0MsQ0FBRCxDQUF6QixFQUE4QkgsSUFBOUIsRTs7O0FBQW5CSywwQjtBQUNObEIscUJBQUssQ0FBQ21CLElBQU4sQ0FBVztBQUNUQyx1QkFBSyxFQUFFRixVQUFVLENBQUNHLFNBRFQ7QUFFVGpCLHdCQUFNLEVBQUVjLFVBQVUsQ0FBQ2IsV0FGVjtBQUdUQSw2QkFBVyxFQUFFYSxVQUFVLENBQUNJLFVBSGY7QUFJVEMsdUJBQUssZUFDSCw4REFBQyw2Q0FBRDtBQUFNLHlCQUFLLG9CQUFhTCxVQUFVLENBQUNNLEdBQXhCLENBQVg7QUFBQSwyQ0FDRTtBQUFBLDhDQUNFLDhEQUFDLHVEQUFEO0FBQU0sNEJBQUksRUFBQztBQUFYLHdCQURGO0FBQUE7QUFERjtBQUxPLGlCQUFYOzs7QUFGK0JSLGlCQUFDLEU7Ozs7O0FBaUJsQyxxQkFBS1MsUUFBTCxDQUFjO0FBQUV6Qix1QkFBSyxFQUFMQTtBQUFGLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBMEJPO0FBQ1AsMEJBQ0UsK0RBQUMsMkRBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUEsVUFERixFQUVHLEtBQUswQixhQUFMLEVBRkg7QUFBQSxRQURGO0FBTUQ7Ozs7RUEzRGtCQyxnRDs7QUE4RE43QixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2N0b3JzLmFlMzJkMjY1NDg4MmE1MTA4ODYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBJY29uLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5cclxuY2xhc3MgZG9jdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjY291bnRzOiBbXSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICB9O1xyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREb2N0b3JzKCkuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlYWNoUmVjb3JkID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmRvY3MoZG9jc1tpXSkuY2FsbCgpO1xyXG4gICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICBpbWFnZTogZWFjaFJlY29yZC5pbWFnZUhhc2gsXHJcbiAgICAgICAgaGVhZGVyOiBlYWNoUmVjb3JkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlYWNoUmVjb3JkLnNwZWNpYWxpdHksXHJcbiAgICAgICAgZXh0cmE6IChcclxuICAgICAgICAgIDxMaW5rIHJvdXRlPXtgZG9jdG9ycy8ke2VhY2hSZWNvcmQuZG9jfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXMgfSk7XHJcbiAgfVxyXG4gIHJlbmRlckRvY3RvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBcIlByb2plY3QgUmVwb3J0IC0gQXByaWxcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiTGV2ZXJhZ2UgYWdpbGUgZnJhbWV3b3JrcyB0byBwcm92aWRlIGEgcm9idXN0IHN5bm9wc2lzIGZvciBoaWdoIGxldmVsIG92ZXJ2aWV3cy5cIixcclxuICAgICAgICBtZXRhOiBcIlJPSTogMzAlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IFwiUHJvamVjdCBSZXBvcnQgLSBNYXlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4gc3Vydml2YWwgc3RyYXRlZ2llcyB0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uXCIsXHJcbiAgICAgICAgbWV0YTogXCJST0k6IDM0JVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBcIlByb2plY3QgUmVwb3J0IC0gSnVuZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJDYXBpdGFsaXNlIG9uIGxvdyBoYW5naW5nIGZydWl0IHRvIGlkZW50aWZ5IGEgYmFsbHBhcmsgdmFsdWUgYWRkZWQgYWN0aXZpdHkgdG8gYmV0YSB0ZXN0LlwiLFxyXG4gICAgICAgIG1ldGE6IFwiUk9JOiAyNyVcIixcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlNlbGVjdCB5b3VyIGRvY3RvcnM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckRvY3RvcnMoKX1cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9jdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9