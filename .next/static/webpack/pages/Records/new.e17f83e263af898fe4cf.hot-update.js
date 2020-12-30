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
                _context.next = 3;
                return window.ethereum.enable();

              case 3:
                _this.setState({
                  loading: true,
                  errorMessage: ""
                });

                _context.prev = 4;
                _context.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.getAccounts();

              case 7:
                accounts = _context.sent;

                _this.setState({
                  account: accounts[0]
                });

                console.log("submitting to ipfs ", accounts);
                _context.next = 12;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_13__["default"].methods.createRecord().send({
                  from: _this.state.account,
                  gas: "1000000"
                });

              case 12:
                _context.next = 14;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getDeployedRecords().call({
                  from: _this.state.account
                });

              case 14:
                records = _context.sent;
                _context.next = 17;
                return new _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.Contract(JSON.parse(_ethereum_build_healthrecord_json__WEBPACK_IMPORTED_MODULE_15__["interface"]), records[0]);

              case 17:
                record = _context.sent;
                _context.next = 20;
                return ipfs.add(_this.state.buffer);

              case 20:
                result = _context.sent;

                _this.setState({
                  loading: false
                });

                console.log(result.path);
                _routes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute("/");
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](4);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 26]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVjb3Jkcy9uZXcuanMiXSwibmFtZXMiOlsiaXBmc0NsaWVudCIsInJlcXVpcmUiLCJpcGZzIiwiaG9zdCIsInBvcnQiLCJwcm90b2NvbCIsIm5ld1JlY29yZCIsIm5hbWUiLCJidWZmZXIiLCJhY2NvdW50IiwicmVjb3JkaGFzaCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwic2V0U3RhdGUiLCJCdWZmZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJldGhlcmV1bSIsImVuYWJsZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJjcmVhdGVSZWNvcmQiLCJzZW5kIiwiZnJvbSIsImdhcyIsImdldERlcGxveWVkUmVjb3JkcyIsImNhbGwiLCJyZWNvcmRzIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJoZWFsdGhyZWNvcmQiLCJyZWNvcmQiLCJhZGQiLCJwYXRoIiwiUm91dGVyIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uU3VibWl0IiwidmFsdWUiLCJjYXB0dXJlRmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxzRUFBRCxDQUExQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdGLFVBQVUsQ0FBQztBQUN0QkcsTUFBSSxFQUFFLGdCQURnQjtBQUV0QkMsTUFBSSxFQUFFLElBRmdCO0FBR3RCQyxVQUFRLEVBQUU7QUFIWSxDQUFELENBQXZCOztJQU1NQyxTOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLFVBQUksRUFBRSxFQURBO0FBRU5DLFlBQU0sRUFBRSxJQUZGO0FBR05DLGFBQU8sRUFBRSxJQUhIO0FBSU5DLGdCQUFVLEVBQUUsSUFKTjtBQUtOQyxrQkFBWSxFQUFFLEVBTFI7QUFNTkMsYUFBTyxFQUFFO0FBTkgsSzs7c05BV00sVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQWI7QUFDQSxVQUFNQyxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxVQUFYLEVBQWY7QUFDQUYsWUFBTSxDQUFDRyxpQkFBUCxDQUF5Qk4sSUFBekI7O0FBQ0FHLFlBQU0sQ0FBQ0ksU0FBUCxHQUFtQixZQUFNO0FBQ3ZCLGNBQUtDLFFBQUwsQ0FBYztBQUFFZixnQkFBTSxFQUFFZ0IsTUFBTSxDQUFDTixNQUFNLENBQUNPLE1BQVI7QUFBaEIsU0FBZDs7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQixNQUFLQyxLQUFMLENBQVdwQixNQUFqQztBQUNELE9BSEQ7QUFJRCxLOzs7a01BRVUsaUJBQU9LLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RBLHFCQUFLLENBQUNDLGNBQU47QUFEUztBQUFBLHVCQUVISyxNQUFNLENBQUNVLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBRkc7O0FBQUE7QUFHVCxzQkFBS1AsUUFBTCxDQUFjO0FBQUVYLHlCQUFPLEVBQUUsSUFBWDtBQUFpQkQsOEJBQVksRUFBRTtBQUEvQixpQkFBZDs7QUFIUztBQUFBO0FBQUEsdUJBS2dCb0IsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBTGhCOztBQUFBO0FBS0RDLHdCQUxDOztBQU1QLHNCQUFLWCxRQUFMLENBQWM7QUFBRWQseUJBQU8sRUFBRXlCLFFBQVEsQ0FBQyxDQUFEO0FBQW5CLGlCQUFkOztBQUNBUix1QkFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNPLFFBQW5DO0FBUE87QUFBQSx1QkFRREMsMERBQU8sQ0FBQ0MsT0FBUixDQUNIQyxZQURHLEdBRUhDLElBRkcsQ0FFRTtBQUFFQyxzQkFBSSxFQUFFLE1BQUtYLEtBQUwsQ0FBV25CLE9BQW5CO0FBQTRCK0IscUJBQUcsRUFBRTtBQUFqQyxpQkFGRixDQVJDOztBQUFBO0FBQUE7QUFBQSx1QkFXZUwsMERBQU8sQ0FBQ0MsT0FBUixDQUNuQkssa0JBRG1CLEdBRW5CQyxJQUZtQixDQUVkO0FBQUVILHNCQUFJLEVBQUUsTUFBS1gsS0FBTCxDQUFXbkI7QUFBbkIsaUJBRmMsQ0FYZjs7QUFBQTtBQVdEa0MsdUJBWEM7QUFBQTtBQUFBLHVCQWNjLElBQUlaLHVEQUFJLENBQUNDLEdBQUwsQ0FBU1ksUUFBYixDQUNuQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLCtEQUFZLGFBQXZCLENBRG1CLEVBRW5CSixPQUFPLENBQUMsQ0FBRCxDQUZZLENBZGQ7O0FBQUE7QUFjREssc0JBZEM7QUFBQTtBQUFBLHVCQWtCYzlDLElBQUksQ0FBQytDLEdBQUwsQ0FBUyxNQUFLckIsS0FBTCxDQUFXcEIsTUFBcEIsQ0FsQmQ7O0FBQUE7QUFrQkRpQixzQkFsQkM7O0FBbUJQLHNCQUFLRixRQUFMLENBQWM7QUFBRVgseUJBQU8sRUFBRTtBQUFYLGlCQUFkOztBQUNBYyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ3lCLElBQW5CO0FBQ0FDLCtEQUFNLENBQUNDLFNBQVAsQ0FBaUIsR0FBakI7QUFyQk87QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBdUJQLHNCQUFLN0IsUUFBTCxDQUFjO0FBQUVaLDhCQUFZLEVBQUUsWUFBSTBDO0FBQXBCLGlCQUFkOztBQXZCTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBNEJGO0FBQUE7O0FBQ1AsMEJBQ0UsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSwrREFBQyx1REFBRDtBQUFNLGtCQUFRLEVBQUUsS0FBS0MsUUFBckI7QUFBK0IsZUFBSyxFQUFFLENBQUMsQ0FBQyxLQUFLMUIsS0FBTCxDQUFXakIsWUFBbkQ7QUFBQSxrQ0FDRSwrREFBQyx1REFBRCxDQUFNLEtBQU47QUFBQSxvQ0FDRTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHdEQUFEO0FBQ0UseUJBQVcsRUFBQyxpQkFEZDtBQUVFLG1CQUFLLEVBQUUsS0FBS2lCLEtBQUwsQ0FBV3JCLElBRnBCO0FBR0Usc0JBQVEsRUFBRSxrQkFBQ00sS0FBRCxFQUFXO0FBQ25CLHNCQUFJLENBQUNVLFFBQUwsQ0FBYztBQUFFaEIsc0JBQUksRUFBRU0sS0FBSyxDQUFDRyxNQUFOLENBQWF1QztBQUFyQixpQkFBZDtBQUNEO0FBTEgsY0FGRjtBQUFBLFlBREYsZUFXRSwrREFBQyx1REFBRCxDQUFNLEtBQU47QUFBQSxvQ0FDRTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLHNCQUFRLEVBQUUsS0FBS0M7QUFBbEMsY0FGRjtBQUFBLFlBWEYsZUFlRSw4REFBQywwREFBRDtBQUFTLGlCQUFLLE1BQWQ7QUFBZSxrQkFBTSxFQUFDLFFBQXRCO0FBQStCLG1CQUFPLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV2pCO0FBQW5ELFlBZkYsZUFnQkUsOERBQUMseURBQUQ7QUFBUSxtQkFBTyxFQUFFLEtBQUtpQixLQUFMLENBQVdoQixPQUE1QjtBQUFxQyxtQkFBTyxNQUE1QztBQUE2QyxnQkFBSSxFQUFDLFFBQWxEO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBREYsUUFERjtBQXdCRDs7OztFQTVFcUI2QyxnRDs7QUErRVRuRCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZWNvcmRzL25ldy5lMTdmODNlMjYzYWY4OThmZTRjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlRmFjdG9yeSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBoZWFsdGhyZWNvcmQgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2J1aWxkL2hlYWx0aHJlY29yZC5qc29uXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbi8vaXBmcyByZXF1aXJlbWVudHNcclxuY29uc3QgaXBmc0NsaWVudCA9IHJlcXVpcmUoXCJpcGZzLWh0dHAtY2xpZW50XCIpO1xyXG5cclxuY29uc3QgaXBmcyA9IGlwZnNDbGllbnQoe1xyXG4gIGhvc3Q6IFwiaXBmcy5pbmZ1cmEuaW9cIixcclxuICBwb3J0OiA1MDAxLFxyXG4gIHByb3RvY29sOiBcImh0dHBzXCIsXHJcbn0pO1xyXG5cclxuY2xhc3MgbmV3UmVjb3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBidWZmZXI6IG51bGwsXHJcbiAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgcmVjb3JkaGFzaDogbnVsbCxcclxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge31cclxuXHJcbiAgY2FwdHVyZUZpbGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnVmZmVyOiBCdWZmZXIocmVhZGVyLnJlc3VsdCkgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVmZmVyXCIsIHRoaXMuc3RhdGUuYnVmZmVyKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0dGluZyB0byBpcGZzIFwiLCBhY2NvdW50cyk7XHJcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xyXG4gICAgICAgIC5jcmVhdGVSZWNvcmQoKVxyXG4gICAgICAgIC5zZW5kKHsgZnJvbTogdGhpcy5zdGF0ZS5hY2NvdW50LCBnYXM6IFwiMTAwMDAwMFwiIH0pO1xyXG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgLmdldERlcGxveWVkUmVjb3JkcygpXHJcbiAgICAgICAgLmNhbGwoeyBmcm9tOiB0aGlzLnN0YXRlLmFjY291bnQgfSk7XHJcbiAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICBKU09OLnBhcnNlKGhlYWx0aHJlY29yZC5pbnRlcmZhY2UpLFxyXG4gICAgICAgIHJlY29yZHNbMF1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaXBmcy5hZGQodGhpcy5zdGF0ZS5idWZmZXIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5wYXRoKTtcclxuICAgICAgUm91dGVyLnB1c2hSb3V0ZShcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnVmZmVyKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPmZpbGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuY2FwdHVyZUZpbGV9IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzISFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1JlY29yZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==