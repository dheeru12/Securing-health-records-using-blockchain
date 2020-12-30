webpackHotUpdate_N_E("pages/Records/new",{

/***/ "./pages/Records/new.js":
/*!******************************!*\
  !*** ./pages/Records/new.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_build_healthrecord_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ethereum/build/healthrecord.json */ "./ethereum/build/healthrecord.json");
var _ethereum_build_healthrecord_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../ethereum/build/healthrecord.json */ "./ethereum/build/healthrecord.json", 1);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 //ipfs requirements

var ipfsClient = __webpack_require__(/*! ipfs-http-client */ "./node_modules/ipfs-http-client/src/index.js");

var ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
});

var newRecord = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(newRecord, _Component);

  var _super = _createSuper(newRecord);

  function newRecord() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, newRecord);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      name: "",
      buffer: null,
      account: null,
      recordhash: null,
      errorMessage: "",
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "captureFile", function (event) {
      event.preventDefault();
      var file = event.target.files[0];
      var reader = new window.FileReader();
      reader.readAsArrayBuffer(file);

      reader.onloadend = function () {
        _this.setState({
          buffer: Buffer(reader.result)
        });

        console.log("buffer", _this.state.buffer);
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var accounts, records, record, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ""
                });

                _context.prev = 2;
                _context.next = 5;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.getAccounts();

              case 5:
                accounts = _context.sent;

                _this.setState({
                  account: accounts[0]
                });

                console.log("submitting to ipfs ", accounts);
                _context.next = 10;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_13__["default"].methods.createRecord().send({
                  from: _this.state.account,
                  gas: "1000000"
                });

              case 10:
                _context.next = 12;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getDeployedRecords().call({
                  from: _this.state.account
                });

              case 12:
                records = _context.sent;
                _context.next = 15;
                return new _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.Contract(JSON.parse(_ethereum_build_healthrecord_json__WEBPACK_IMPORTED_MODULE_15__["interface"]), records[0]);

              case 15:
                record = _context.sent;
                _context.next = 18;
                return ipfs.add(_this.state.buffer);

              case 18:
                result = _context.sent;

                _this.setState({
                  loading: false
                });

                console.log(result.path);
                _routes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute("/");
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 24]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(newRecord, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return window.ethereum.enable();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("label", {
              children: "name"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
              placeholder: "enter your name",
              value: this.state.name,
              onChange: function onChange(event) {
                _this2.setState({
                  name: event.target.value
                });
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("label", {
              children: "files"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("input", {
              type: "file",
              onChange: this.captureFile
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
            error: true,
            header: "Oops!!",
            content: this.state.errorMessage
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            loading: this.state.loading,
            primary: true,
            type: "submit",
            children: "Create"
          })]
        })
      });
    }
  }]);

  return newRecord;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (newRecord);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9uZXcuanMiXSwibmFtZXMiOlsiaXBmc0NsaWVudCIsInJlcXVpcmUiLCJpcGZzIiwiaG9zdCIsInBvcnQiLCJwcm90b2NvbCIsIm5ld1JlY29yZCIsIm5hbWUiLCJidWZmZXIiLCJhY2NvdW50IiwicmVjb3JkaGFzaCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwic2V0U3RhdGUiLCJCdWZmZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImZhY3RvcnkiLCJtZXRob2RzIiwiY3JlYXRlUmVjb3JkIiwic2VuZCIsImZyb20iLCJnYXMiLCJnZXREZXBsb3llZFJlY29yZHMiLCJjYWxsIiwicmVjb3JkcyIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaGVhbHRocmVjb3JkIiwicmVjb3JkIiwiYWRkIiwicGF0aCIsIlJvdXRlciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJldGhlcmV1bSIsImVuYWJsZSIsIm9uU3VibWl0IiwidmFsdWUiLCJjYXB0dXJlRmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxzRUFBRCxDQUExQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdGLFVBQVUsQ0FBQztBQUN0QkcsTUFBSSxFQUFFLGdCQURnQjtBQUV0QkMsTUFBSSxFQUFFLElBRmdCO0FBR3RCQyxVQUFRLEVBQUU7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LCtCQUNFLCtEQUFDLHVEQUFEO0FBQU0sa0JBQVEsRUFBRSxLQUFLQyxRQUFyQjtBQUErQixlQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUsxQixLQUFMLENBQVdqQixZQUFuRDtBQUFBLGtDQUNFLCtEQUFDLHVEQUFELENBQU0sS0FBTjtBQUFBLG9DQUNFO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFDRSx5QkFBVyxFQUFDLGlCQURkO0FBRUUsbUJBQUssRUFBRSxLQUFLaUIsS0FBTCxDQUFXckIsSUFGcEI7QUFHRSxzQkFBUSxFQUFFLGtCQUFDTSxLQUFELEVBQVc7QUFDbkIsc0JBQUksQ0FBQ1UsUUFBTCxDQUFjO0FBQUVoQixzQkFBSSxFQUFFTSxLQUFLLENBQUNHLE1BQU4sQ0FBYXVDO0FBQXJCLGlCQUFkO0FBQ0Q7QUFMSCxjQUZGO0FBQUEsWUFERixlQVdFLCtEQUFDLHVEQUFELENBQU0sS0FBTjtBQUFBLG9DQUNFO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQVEsRUFBRSxLQUFLQztBQUFsQyxjQUZGO0FBQUEsWUFYRixlQWVFLDhEQUFDLDBEQUFEO0FBQVMsaUJBQUssTUFBZDtBQUFlLGtCQUFNLEVBQUMsUUFBdEI7QUFBK0IsbUJBQU8sRUFBRSxLQUFLNUIsS0FBTCxDQUFXakI7QUFBbkQsWUFmRixlQWdCRSw4REFBQyx5REFBRDtBQUFRLG1CQUFPLEVBQUUsS0FBS2lCLEtBQUwsQ0FBV2hCLE9BQTVCO0FBQXFDLG1CQUFPLE1BQTVDO0FBQTZDLGdCQUFJLEVBQUMsUUFBbEQ7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFERixRQURGO0FBd0JEOzs7O0VBN0VxQjZDLGdEOztBQWdGVG5ELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1JlY29yZHMvbmV3LjFiOWE3Yjk1MWE2YWFkNDNmZGYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVGYWN0b3J5IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IGhlYWx0aHJlY29yZCBmcm9tIFwiLi4vLi4vZXRoZXJldW0vYnVpbGQvaGVhbHRocmVjb3JkLmpzb25cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuLy9pcGZzIHJlcXVpcmVtZW50c1xyXG5jb25zdCBpcGZzQ2xpZW50ID0gcmVxdWlyZShcImlwZnMtaHR0cC1jbGllbnRcIik7XHJcblxyXG5jb25zdCBpcGZzID0gaXBmc0NsaWVudCh7XHJcbiAgaG9zdDogXCJpcGZzLmluZnVyYS5pb1wiLFxyXG4gIHBvcnQ6IDUwMDEsXHJcbiAgcHJvdG9jb2w6IFwiaHR0cHNcIixcclxufSk7XHJcblxyXG5jbGFzcyBuZXdSZWNvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGJ1ZmZlcjogbnVsbCxcclxuICAgIGFjY291bnQ6IG51bGwsXHJcbiAgICByZWNvcmRoYXNoOiBudWxsLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICBjYXB0dXJlRmlsZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgd2luZG93LkZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBidWZmZXI6IEJ1ZmZlcihyZWFkZXIucmVzdWx0KSB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJidWZmZXJcIiwgdGhpcy5zdGF0ZS5idWZmZXIpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0aW5nIHRvIGlwZnMgXCIsIGFjY291bnRzKTtcclxuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgLmNyZWF0ZVJlY29yZCgpXHJcbiAgICAgICAgLnNlbmQoeyBmcm9tOiB0aGlzLnN0YXRlLmFjY291bnQsIGdhczogXCIxMDAwMDAwXCIgfSk7XHJcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcclxuICAgICAgICAuZ2V0RGVwbG95ZWRSZWNvcmRzKClcclxuICAgICAgICAuY2FsbCh7IGZyb206IHRoaXMuc3RhdGUuYWNjb3VudCB9KTtcclxuICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgIEpTT04ucGFyc2UoaGVhbHRocmVjb3JkLmludGVyZmFjZSksXHJcbiAgICAgICAgcmVjb3Jkc1swXVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpcGZzLmFkZCh0aGlzLnN0YXRlLmJ1ZmZlcik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LnBhdGgpO1xyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKFwiL1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5idWZmZXIpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+bmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+ZmlsZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5jYXB0dXJlRmlsZX0gLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnkgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UmVjb3JkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9