webpackHotUpdate_N_E("pages/Records/show",{

/***/ "./pages/Records/show.js":
/*!*******************************!*\
  !*** ./pages/Records/show.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_record__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/record */ "./ethereum/record.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var recordShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(recordShow, _Component);

  var _super = _createSuper(recordShow);

  function recordShow() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, recordShow);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(recordShow, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h1", {
          children: "Your details are here!!"
        })
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var accounts, currentRecord, NameAndImage, details, prescriptionlength, reportLength, prescriptions, i, reports, reportLink;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                currentRecord = Object(_ethereum_record__WEBPACK_IMPORTED_MODULE_10__["default"])(props.query.address);
                _context.next = 6;
                return currentRecord.methods.getNameandAddress().call({
                  from: accounts[0]
                });

              case 6:
                NameAndImage = _context.sent;
                _context.next = 9;
                return currentRecord.methods.getDetails().call({
                  from: accounts[0]
                });

              case 9:
                details = _context.sent;
                _context.next = 12;
                return currentRecord.methods.getPrescriptionLength().call({
                  from: accounts[0]
                });

              case 12:
                prescriptionlength = _context.sent;
                _context.next = 15;
                return currentRecord.methods.getReportLength().call({
                  from: accounts[0]
                });

              case 15:
                reportLength = _context.sent;
                prescriptions = [];
                i = 0;

              case 18:
                if (!(i < prescriptionlength)) {
                  _context.next = 27;
                  break;
                }

                _context.t0 = prescriptions;
                _context.next = 22;
                return currentRecord.methods.getPrescription(i).call({
                  from: accounts[0]
                });

              case 22:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

              case 24:
                i++;
                _context.next = 18;
                break;

              case 27:
                reports = [];
                i = 0;

              case 29:
                if (!(i < reportLength)) {
                  _context.next = 37;
                  break;
                }

                _context.next = 32;
                return currentRecord.methods.getReport(i).call({
                  from: accounts[0]
                });

              case 32:
                reportLink = _context.sent;
                reports.push();

              case 34:
                i++;
                _context.next = 29;
                break;

              case 37:
                return _context.abrupt("return", {
                  NameAndImage: NameAndImage,
                  details: details,
                  accounts: accounts,
                  reports: reports,
                  prescriptions: prescriptions
                });

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return recordShow;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (recordShow);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9zaG93LmpzIl0sIm5hbWVzIjpbInJlY29yZFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImN1cnJlbnRSZWNvcmQiLCJyZWNvcmQiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0TmFtZWFuZEFkZHJlc3MiLCJjYWxsIiwiZnJvbSIsIk5hbWVBbmRJbWFnZSIsImdldERldGFpbHMiLCJkZXRhaWxzIiwiZ2V0UHJlc2NyaXB0aW9uTGVuZ3RoIiwicHJlc2NyaXB0aW9ubGVuZ3RoIiwiZ2V0UmVwb3J0TGVuZ3RoIiwicmVwb3J0TGVuZ3RoIiwicHJlc2NyaXB0aW9ucyIsImkiLCJnZXRQcmVzY3JpcHRpb24iLCJwdXNoIiwicmVwb3J0cyIsImdldFJlcG9ydCIsInJlcG9ydExpbmsiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7OzZCQWlDSztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUNBLDBCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBREYsUUFERjtBQUtEOzs7OytOQXZDNEJBLEs7Ozs7Ozs7dUJBQ0pDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBakJDLHdCO0FBQ0FDLDZCLEdBQWdCQyxpRUFBTSxDQUFDTixLQUFLLENBQUNPLEtBQU4sQ0FBWUMsT0FBYixDOzt1QkFDREgsYUFBYSxDQUFDSSxPQUFkLENBQ3hCQyxpQkFEd0IsR0FFeEJDLElBRndCLENBRW5CO0FBQUVDLHNCQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGlCQUZtQixDOzs7QUFBckJTLDRCOzt1QkFHZ0JSLGFBQWEsQ0FBQ0ksT0FBZCxDQUNuQkssVUFEbUIsR0FFbkJILElBRm1CLENBRWQ7QUFBRUMsc0JBQUksRUFBRVIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRmMsQzs7O0FBQWhCVyx1Qjs7dUJBRzJCVixhQUFhLENBQUNJLE9BQWQsQ0FDOUJPLHFCQUQ4QixHQUU5QkwsSUFGOEIsQ0FFekI7QUFBRUMsc0JBQUksRUFBRVIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRnlCLEM7OztBQUEzQmEsa0M7O3VCQUdxQlosYUFBYSxDQUFDSSxPQUFkLENBQ3hCUyxlQUR3QixHQUV4QlAsSUFGd0IsQ0FFbkI7QUFBRUMsc0JBQUksRUFBRVIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRm1CLEM7OztBQUFyQmUsNEI7QUFHQUMsNkIsR0FBZ0IsRTtBQUNiQyxpQixHQUFJLEM7OztzQkFBR0EsQ0FBQyxHQUFHSixrQjs7Ozs7OEJBQ2xCRyxhOzt1QkFDUWYsYUFBYSxDQUFDSSxPQUFkLENBQ0hhLGVBREcsQ0FDYUQsQ0FEYixFQUVIVixJQUZHLENBRUU7QUFBRUMsc0JBQUksRUFBRVIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRkYsQzs7Ozs7NEJBRE1tQixJOzs7QUFEd0JGLGlCQUFDLEU7Ozs7O0FBT25DRyx1QixHQUFVLEU7QUFDUEgsaUIsR0FBSSxDOzs7c0JBQUdBLENBQUMsR0FBR0YsWTs7Ozs7O3VCQUNPZCxhQUFhLENBQUNJLE9BQWQsQ0FDdEJnQixTQURzQixDQUNaSixDQURZLEVBRXRCVixJQUZzQixDQUVqQjtBQUFFQyxzQkFBSSxFQUFFUixRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGaUIsQzs7O0FBQW5Cc0IsMEI7QUFHTkYsdUJBQU8sQ0FBQ0QsSUFBUjs7O0FBSmdDRixpQkFBQyxFOzs7OztpREFNNUI7QUFBRVIsOEJBQVksRUFBWkEsWUFBRjtBQUFnQkUseUJBQU8sRUFBUEEsT0FBaEI7QUFBeUJYLDBCQUFRLEVBQVJBLFFBQXpCO0FBQW1Db0IseUJBQU8sRUFBUEEsT0FBbkM7QUFBNENKLCtCQUFhLEVBQWJBO0FBQTVDLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0JjTywrQzs7QUEyQ1Y5Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZWNvcmRzL3Nob3cuOTE2ZDg0Y2MzNWQ0MzJlYmI3YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHJlY29yZCBmcm9tIFwiLi4vLi4vZXRoZXJldW0vcmVjb3JkXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcblxyXG5jbGFzcyByZWNvcmRTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBjdXJyZW50UmVjb3JkID0gcmVjb3JkKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3QgTmFtZUFuZEltYWdlID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXROYW1lYW5kQWRkcmVzcygpXHJcbiAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXREZXRhaWxzKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IHByZXNjcmlwdGlvbmxlbmd0aCA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAuZ2V0UHJlc2NyaXB0aW9uTGVuZ3RoKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IHJlcG9ydExlbmd0aCA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAuZ2V0UmVwb3J0TGVuZ3RoKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IHByZXNjcmlwdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlc2NyaXB0aW9ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcHJlc2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgIGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAgICAgLmdldFByZXNjcmlwdGlvbihpKVxyXG4gICAgICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVwb3J0cyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXBvcnRMZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZXBvcnRMaW5rID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgICAgLmdldFJlcG9ydChpKVxyXG4gICAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIHJlcG9ydHMucHVzaCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgTmFtZUFuZEltYWdlLCBkZXRhaWxzLCBhY2NvdW50cywgcmVwb3J0cywgcHJlc2NyaXB0aW9ucyB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPllvdXIgZGV0YWlscyBhcmUgaGVyZSEhPC9oMT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVjb3JkU2hvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==