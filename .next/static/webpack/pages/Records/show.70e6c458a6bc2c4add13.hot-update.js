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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_record__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/record */ "./ethereum/record.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");










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
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h1", {
          children: "Your details are here!!"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
          columns: 2,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
              raised: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "red",
                ribbon: true,
                children: "Overview"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
                children: "Name and profile image"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
                children: this.props.NameAndImage[0]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Image"], {
                src: this.props.NameAndImage[1]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                as: "a",
                color: "blue",
                ribbon: true,
                children: "Details"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
                children: "your details"
              })]
            })
          })
        })]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var accounts, currentRecord, NameAndImage, details, prescriptionlength, reportLength, prescriptions, i, prescriptionlink, reports, reportLink;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                currentRecord = Object(_ethereum_record__WEBPACK_IMPORTED_MODULE_12__["default"])(props.query.address);
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
                  _context.next = 26;
                  break;
                }

                _context.next = 21;
                return currentRecord.methods.getPrescription(i).call({
                  from: accounts[0]
                });

              case 21:
                prescriptionlink = _context.sent;
                prescriptions.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: prescriptionlink,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("a", {
                    children: ["prescription+", i + 1]
                  })
                }));

              case 23:
                i++;
                _context.next = 18;
                break;

              case 26:
                reports = [];
                i = 0;

              case 28:
                if (!(i < reportLength)) {
                  _context.next = 36;
                  break;
                }

                _context.next = 31;
                return currentRecord.methods.getReport(i).call({
                  from: accounts[0]
                });

              case 31:
                reportLink = _context.sent;
                reports.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: reportLink,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("a", {
                    children: ["report+", i + 1]
                  })
                }));

              case 33:
                i++;
                _context.next = 28;
                break;

              case 36:
                return _context.abrupt("return", {
                  NameAndImage: NameAndImage,
                  details: details,
                  accounts: accounts,
                  reports: reports,
                  prescriptions: prescriptions
                });

              case 37:
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
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9zaG93LmpzIl0sIm5hbWVzIjpbInJlY29yZFNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJOYW1lQW5kSW1hZ2UiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImN1cnJlbnRSZWNvcmQiLCJyZWNvcmQiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0TmFtZWFuZEFkZHJlc3MiLCJjYWxsIiwiZnJvbSIsImdldERldGFpbHMiLCJkZXRhaWxzIiwiZ2V0UHJlc2NyaXB0aW9uTGVuZ3RoIiwicHJlc2NyaXB0aW9ubGVuZ3RoIiwiZ2V0UmVwb3J0TGVuZ3RoIiwicmVwb3J0TGVuZ3RoIiwicHJlc2NyaXB0aW9ucyIsImkiLCJnZXRQcmVzY3JpcHRpb24iLCJwcmVzY3JpcHRpb25saW5rIiwicHVzaCIsInJlcG9ydHMiLCJnZXRSZXBvcnQiLCJyZXBvcnRMaW5rIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7OzZCQXdDSztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUNBLDBCQUNFLCtEQUFDLDJEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLFVBREYsZUFFRSw4REFBQyx1REFBRDtBQUFNLGlCQUFPLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLHVEQUFELENBQU0sTUFBTjtBQUFBLG1DQUNFLCtEQUFDLDBEQUFEO0FBQVMsb0JBQU0sTUFBZjtBQUFBLHNDQUNFLDhEQUFDLHdEQUFEO0FBQU8sa0JBQUUsRUFBQyxHQUFWO0FBQWMscUJBQUssRUFBQyxLQUFwQjtBQUEwQixzQkFBTSxNQUFoQztBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFBLDBCQUFLLEtBQUtBLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QixDQUF4QjtBQUFMLGdCQUxGLGVBTUUsOERBQUMsd0RBQUQ7QUFBTyxtQkFBRyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsWUFBWCxDQUF3QixDQUF4QjtBQUFaLGdCQU5GLGVBT0UsOERBQUMsd0RBQUQ7QUFBTyxrQkFBRSxFQUFDLEdBQVY7QUFBYyxxQkFBSyxFQUFDLE1BQXBCO0FBQTJCLHNCQUFNLE1BQWpDO0FBQUE7QUFBQSxnQkFQRixlQVVFO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBREY7QUFERixVQUZGO0FBQUEsUUFERjtBQXFCRDs7OzsrTkE5RDRCRCxLOzs7Ozs7O3VCQUNKRSx1REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWpCQyx3QjtBQUNBQyw2QixHQUFnQkMsaUVBQU0sQ0FBQ1AsS0FBSyxDQUFDUSxLQUFOLENBQVlDLE9BQWIsQzs7dUJBQ0RILGFBQWEsQ0FBQ0ksT0FBZCxDQUN4QkMsaUJBRHdCLEdBRXhCQyxJQUZ3QixDQUVuQjtBQUFFQyxzQkFBSSxFQUFFUixRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGbUIsQzs7O0FBQXJCSiw0Qjs7dUJBR2dCSyxhQUFhLENBQUNJLE9BQWQsQ0FDbkJJLFVBRG1CLEdBRW5CRixJQUZtQixDQUVkO0FBQUVDLHNCQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGlCQUZjLEM7OztBQUFoQlUsdUI7O3VCQUcyQlQsYUFBYSxDQUFDSSxPQUFkLENBQzlCTSxxQkFEOEIsR0FFOUJKLElBRjhCLENBRXpCO0FBQUVDLHNCQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGlCQUZ5QixDOzs7QUFBM0JZLGtDOzt1QkFHcUJYLGFBQWEsQ0FBQ0ksT0FBZCxDQUN4QlEsZUFEd0IsR0FFeEJOLElBRndCLENBRW5CO0FBQUVDLHNCQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGlCQUZtQixDOzs7QUFBckJjLDRCO0FBR0FDLDZCLEdBQWdCLEU7QUFDYkMsaUIsR0FBSSxDOzs7c0JBQUdBLENBQUMsR0FBR0osa0I7Ozs7Ozt1QkFDYVgsYUFBYSxDQUFDSSxPQUFkLENBQzVCWSxlQUQ0QixDQUNaRCxDQURZLEVBRTVCVCxJQUY0QixDQUV2QjtBQUFFQyxzQkFBSSxFQUFFUixRQUFRLENBQUMsQ0FBRDtBQUFoQixpQkFGdUIsQzs7O0FBQXpCa0IsZ0M7QUFHTkgsNkJBQWEsQ0FBQ0ksSUFBZCxlQUNFLDhEQUFDLGdEQUFEO0FBQU0sc0JBQUksRUFBRUQsZ0JBQVo7QUFBQSx5Q0FDRTtBQUFBLGdEQUFpQkYsQ0FBQyxHQUFHLENBQXJCO0FBQUE7QUFERixrQkFERjs7O0FBSnNDQSxpQkFBQyxFOzs7OztBQVVuQ0ksdUIsR0FBVSxFO0FBQ1BKLGlCLEdBQUksQzs7O3NCQUFHQSxDQUFDLEdBQUdGLFk7Ozs7Ozt1QkFDT2IsYUFBYSxDQUFDSSxPQUFkLENBQ3RCZ0IsU0FEc0IsQ0FDWkwsQ0FEWSxFQUV0QlQsSUFGc0IsQ0FFakI7QUFBRUMsc0JBQUksRUFBRVIsUUFBUSxDQUFDLENBQUQ7QUFBaEIsaUJBRmlCLEM7OztBQUFuQnNCLDBCO0FBR05GLHVCQUFPLENBQUNELElBQVIsZUFDRSw4REFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUVHLFVBQVo7QUFBQSx5Q0FDRTtBQUFBLDBDQUFXTixDQUFDLEdBQUcsQ0FBZjtBQUFBO0FBREYsa0JBREY7OztBQUpnQ0EsaUJBQUMsRTs7Ozs7aURBVTVCO0FBQUVwQiw4QkFBWSxFQUFaQSxZQUFGO0FBQWdCYyx5QkFBTyxFQUFQQSxPQUFoQjtBQUF5QlYsMEJBQVEsRUFBUkEsUUFBekI7QUFBbUNvQix5QkFBTyxFQUFQQSxPQUFuQztBQUE0Q0wsK0JBQWEsRUFBYkE7QUFBNUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0Q2NRLCtDOztBQWtFVi9CLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1JlY29yZHMvc2hvdy43MGU2YzQ1OGE2YmMyYzRhZGQxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdyaWQsIFNlZ21lbnQsIExhYmVsLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgcmVjb3JkIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9yZWNvcmRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuXHJcbmNsYXNzIHJlY29yZFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRSZWNvcmQgPSByZWNvcmQocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBOYW1lQW5kSW1hZ2UgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldE5hbWVhbmRBZGRyZXNzKClcclxuICAgICAgLmNhbGwoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBhd2FpdCBjdXJyZW50UmVjb3JkLm1ldGhvZHNcclxuICAgICAgLmdldERldGFpbHMoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcHJlc2NyaXB0aW9ubGVuZ3RoID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXRQcmVzY3JpcHRpb25MZW5ndGgoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcmVwb3J0TGVuZ3RoID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgIC5nZXRSZXBvcnRMZW5ndGgoKVxyXG4gICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgcHJlc2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVzY3JpcHRpb25sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcmVzY3JpcHRpb25saW5rID0gYXdhaXQgY3VycmVudFJlY29yZC5tZXRob2RzXHJcbiAgICAgICAgLmdldFByZXNjcmlwdGlvbihpKVxyXG4gICAgICAgIC5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIHByZXNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICA8TGluayBocmVmPXtwcmVzY3JpcHRpb25saW5rfT5cclxuICAgICAgICAgIDxhPnByZXNjcmlwdGlvbit7aSArIDF9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcG9ydHMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVwb3J0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVwb3J0TGluayA9IGF3YWl0IGN1cnJlbnRSZWNvcmQubWV0aG9kc1xyXG4gICAgICAgIC5nZXRSZXBvcnQoaSlcclxuICAgICAgICAuY2FsbCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICByZXBvcnRzLnB1c2goXHJcbiAgICAgICAgPExpbmsgaHJlZj17cmVwb3J0TGlua30+XHJcbiAgICAgICAgICA8YT5yZXBvcnQre2kgKyAxfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBOYW1lQW5kSW1hZ2UsIGRldGFpbHMsIGFjY291bnRzLCByZXBvcnRzLCBwcmVzY3JpcHRpb25zIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+WW91ciBkZXRhaWxzIGFyZSBoZXJlISE8L2gxPlxyXG4gICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8U2VnbWVudCByYWlzZWQ+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGFzPVwiYVwiIGNvbG9yPVwicmVkXCIgcmliYm9uPlxyXG4gICAgICAgICAgICAgICAgT3ZlcnZpZXdcclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5hbWUgYW5kIHByb2ZpbGUgaW1hZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLk5hbWVBbmRJbWFnZVswXX08L2gzPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMucHJvcHMuTmFtZUFuZEltYWdlWzFdfSAvPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBhcz1cImFcIiBjb2xvcj1cImJsdWVcIiByaWJib24+XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8c3Bhbj55b3VyIGRldGFpbHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNvcmRTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9