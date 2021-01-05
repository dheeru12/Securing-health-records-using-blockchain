module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
});

const HomepageHeading = ({
  mobile
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  text: true,
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css",
    integrity: "sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    as: "h1",
    content: "MEDBLOCK",
    inverted: true,
    style: {
      fontSize: mobile ? "2em" : "4em",
      fontWeight: "normal",
      marginBottom: 0,
      marginTop: mobile ? "1.5em" : "3em"
    }
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    as: "h2",
    content: "Maintain your health records safely with the help of blockchain",
    inverted: true,
    style: {
      fontSize: mobile ? "1.5em" : "1.7em",
      fontWeight: "normal",
      marginTop: mobile ? "0.5em" : "1.5em"
    }
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "/all",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      primary: true,
      size: "huge",
      children: ["Get Started", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        name: "right arrow"
      })]
    })
  })]
});

HomepageHeading.propTypes = {
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "hideFixedMenu", () => this.setState({
      fixed: false
    }));

    _defineProperty(this, "showFixedMenu", () => this.setState({
      fixed: true
    }));
  }

  render() {
    const {
      children
    } = this.props;
    const {
      fixed
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Media, {
      greaterThan: "mobile",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Visibility"], {
        once: false,
        onBottomPassed: this.showFixedMenu,
        onBottomPassedReverse: this.hideFixedMenu,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
          inverted: true,
          textAlign: "center",
          style: {
            minHeight: 700,
            padding: "1em 0em"
          },
          vertical: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
            fixed: fixed ? "top" : null,
            inverted: !fixed,
            pointing: !fixed,
            secondary: !fixed,
            size: "large",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                route: "/",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                  as: "a",
                  children: "Home"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                route: "/all",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                  as: "a",
                  children: "Records"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                route: "/doctors",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                  as: "a",
                  children: "Doctors"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                route: "/",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                  as: "a",
                  children: "About"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Menu, {
                position: "right",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  route: "/doctors",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                      as: "a",
                      inverted: !fixed,
                      children: "Create"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  route: "/newdoc",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                      as: "a",
                      inverted: !fixed,
                      primary: fixed,
                      children: "Register Doc"
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(HomepageHeading, {})]
        })
      }), children]
    });
  }

}

DesktopContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

const ResponsiveContainer = ({
  children
}) =>
/*#__PURE__*/

/* Heads up!
 * For large applications it may not be best option to put all page into these containers at
 * they will be rendered twice for SSR.
 */
Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MediaContextProvider, {
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DesktopContainer, {
    children: children
  })
});

ResponsiveContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

const HomepageLayout = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ResponsiveContainer, {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: {
      padding: "8em 0em"
    },
    vertical: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      stackable: true,
      verticalAlign: "middle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
          width: 8,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
            as: "h3",
            style: {
              fontSize: "2em"
            },
            children: "We secure your health records using blockchain technology."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            style: {
              fontSize: "1.33em"
            },
            children: "Blockchain can transform the way a patient\u2019s electronic health records are stored and shared. It can provide a safer, more transparent, and traceable underpinning system for health information exchange. The technology has the potential to connect multiple data management systems working in silos and provide what could be a connected and interoperable electronic health record system."
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
          floated: "right",
          width: 6,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
            bordered: true,
            rounded: true,
            size: "large",
            src: "https://bafybeie724i7v2re4kdzktcfn35ymwgyep6y4lpckz2rpn4ctpcjfbidnm.ipfs.infura-ipfs.io/"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
          textAlign: "center",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            href: "https://blockgeni.com/electronic-health-records-ehr-on-blockchain/",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                size: "huge",
                children: "Read More"
              })
            })
          })
        })
      })]
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: {
      padding: "8em 0em"
    },
    vertical: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      text: true,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
        as: "h3",
        style: {
          fontSize: "2em"
        },
        children: "Breaking The Grid, Blockchain the future!!"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        style: {
          fontSize: "1.33em"
        },
        children: "We live in an era where technology plays a crucial role in our day-to-day activity. For instance, you check the internet, connect to online stores to buy groceries and watch your favorite show on Netflix. All of these are not possible without the inclusion of technology. The numbers are already strong when it comes to blockchain. In 2019, the worldwide spending on blockchain technology is $2.7 billion. It has already disrupted the finance sector and continues to grow in the right direction. Another great statistic is the valuation of blockchain in the food and agriculture market \u2014 which is valued at 41.9m USD."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        as: "a",
        size: "large",
        children: "Read More"
      })]
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      padding: "5em 0em"
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        divided: true,
        inverted: true,
        stackable: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
            width: 3,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
              inverted: true,
              as: "h4",
              content: "About"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], {
              link: true,
              inverted: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "Sitemap"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "Contact Us"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "Religious Ceremonies"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "Gazebo Plans"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
            width: 3,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
              inverted: true,
              as: "h4",
              content: "Services"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], {
              link: true,
              inverted: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "Banana Pre-Order"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "DNA FAQ"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "How To Access"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                as: "a",
                children: "Favorite X-Men"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
            width: 7,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
              as: "h4",
              inverted: true,
              children: "Footer Header"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: "Extra space for a call to action inside the footer that could help re-engage users."
            })]
          })]
        })
      })
    })
  })]
});

/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add("/doctors/:address", "/Records/new").add("/Records/:address/:docaddress", "/Records/add").add("/Records/:address", "/Records/show");
module.exports = routes;

/***/ }),

/***/ "@artsy/fresnel":
/*!*********************************!*\
  !*** external "@artsy/fresnel" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@artsy/fresnel");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsImNyZWF0ZU1lZGlhIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJjb21wdXRlciIsIkhvbWVwYWdlSGVhZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJEZXNrdG9wQ29udGFpbmVyIiwiQ29tcG9uZW50Iiwic2V0U3RhdGUiLCJmaXhlZCIsInJlbmRlciIsImNoaWxkcmVuIiwicHJvcHMiLCJzdGF0ZSIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwibWluSGVpZ2h0IiwicGFkZGluZyIsIm5vZGUiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiSG9tZXBhZ2VMYXlvdXQiLCJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBRUEsTUFBTTtBQUFFQSxzQkFBRjtBQUF3QkM7QUFBeEIsSUFBa0NDLGtFQUFXLENBQUM7QUFDbERDLGFBQVcsRUFBRTtBQUNYQyxVQUFNLEVBQUUsQ0FERztBQUVYQyxVQUFNLEVBQUUsR0FGRztBQUdYQyxZQUFRLEVBQUU7QUFIQztBQURxQyxDQUFELENBQW5EOztBQU9BLE1BQU1DLGVBQWUsR0FBRyxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxrQkFDdEIsK0RBQUMsMkRBQUQ7QUFBVyxNQUFJLE1BQWY7QUFBQSwwQkFDRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLDJFQUZQO0FBR0UsYUFBUyxFQUFDLGlHQUhaO0FBSUUsZUFBVyxFQUFDO0FBSmQsSUFERixlQVFFLDhEQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLFlBQVEsTUFIVjtBQUlFLFNBQUssRUFBRTtBQUNMSSxjQUFRLEVBQUVKLE1BQU0sR0FBRyxLQUFILEdBQVcsS0FEdEI7QUFFTEssZ0JBQVUsRUFBRSxRQUZQO0FBR0xDLGtCQUFZLEVBQUUsQ0FIVDtBQUlMQyxlQUFTLEVBQUVQLE1BQU0sR0FBRyxPQUFILEdBQWE7QUFKekI7QUFKVCxJQVJGLGVBbUJFLDhEQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxXQUFPLEVBQUMsaUVBRlY7QUFHRSxZQUFRLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFDTEksY0FBUSxFQUFFSixNQUFNLEdBQUcsT0FBSCxHQUFhLE9BRHhCO0FBRUxLLGdCQUFVLEVBQUUsUUFGUDtBQUdMRSxlQUFTLEVBQUVQLE1BQU0sR0FBRyxPQUFILEdBQWE7QUFIekI7QUFKVCxJQW5CRixlQTZCRSw4REFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQUEsMkJBQ0UsK0RBQUMsd0RBQUQ7QUFBUSxhQUFPLE1BQWY7QUFBZ0IsVUFBSSxFQUFDLE1BQXJCO0FBQUEsNkNBRUUsOERBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxRQUZGO0FBQUE7QUFERixJQTdCRjtBQUFBLEVBREY7O0FBdUNBRyxlQUFlLENBQUNLLFNBQWhCLEdBQTRCO0FBQzFCUixRQUFNLEVBQUVTLGlEQUFTLENBQUNDO0FBRFEsQ0FBNUI7O0FBR0EsTUFBTUMsZ0JBQU4sU0FBK0JDLCtDQUEvQixDQUF5QztBQUFBO0FBQUE7O0FBQUEsbUNBQy9CLEVBRCtCOztBQUFBLDJDQUd2QixNQUFNLEtBQUtDLFFBQUwsQ0FBYztBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFkLENBSGlCOztBQUFBLDJDQUl2QixNQUFNLEtBQUtELFFBQUwsQ0FBYztBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFkLENBSmlCO0FBQUE7O0FBTXZDQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDO0FBQUYsUUFBZSxLQUFLQyxLQUExQjtBQUNBLFVBQU07QUFBRUg7QUFBRixRQUFZLEtBQUtJLEtBQXZCO0FBRUEsd0JBQ0UsK0RBQUMsS0FBRDtBQUFPLGlCQUFXLEVBQUMsUUFBbkI7QUFBQSw4QkFDRSw4REFBQyw0REFBRDtBQUNFLFlBQUksRUFBRSxLQURSO0FBRUUsc0JBQWMsRUFBRSxLQUFLQyxhQUZ2QjtBQUdFLDZCQUFxQixFQUFFLEtBQUtDLGFBSDlCO0FBQUEsK0JBS0UsK0RBQUMseURBQUQ7QUFDRSxrQkFBUSxNQURWO0FBRUUsbUJBQVMsRUFBQyxRQUZaO0FBR0UsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUUsR0FBYjtBQUFrQkMsbUJBQU8sRUFBRTtBQUEzQixXQUhUO0FBSUUsa0JBQVEsTUFKVjtBQUFBLGtDQU1FLDhEQUFDLHNEQUFEO0FBQ0UsaUJBQUssRUFBRVIsS0FBSyxHQUFHLEtBQUgsR0FBVyxJQUR6QjtBQUVFLG9CQUFRLEVBQUUsQ0FBQ0EsS0FGYjtBQUdFLG9CQUFRLEVBQUUsQ0FBQ0EsS0FIYjtBQUlFLHFCQUFTLEVBQUUsQ0FBQ0EsS0FKZDtBQUtFLGdCQUFJLEVBQUMsT0FMUDtBQUFBLG1DQU9FLCtEQUFDLDJEQUFEO0FBQUEsc0NBQ0UsOERBQUMsNENBQUQ7QUFBTSxxQkFBSyxFQUFDLEdBQVo7QUFBQSx1Q0FDRSw4REFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxvQkFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBREYsZ0JBREYsZUFJRSw4REFBQyw0Q0FBRDtBQUFNLHFCQUFLLEVBQUMsTUFBWjtBQUFBLHVDQUNFLDhEQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLG9CQUFFLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFERixnQkFKRixlQU9FLDhEQUFDLDRDQUFEO0FBQU0scUJBQUssRUFBQyxVQUFaO0FBQUEsdUNBQ0UsOERBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsb0JBQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQURGLGdCQVBGLGVBVUUsOERBQUMsNENBQUQ7QUFBTSxxQkFBSyxFQUFDLEdBQVo7QUFBQSx1Q0FDRSw4REFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxvQkFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBREYsZ0JBVkYsZUFhRSwrREFBQyxzREFBRCxDQUFNLElBQU47QUFBVyx3QkFBUSxFQUFDLE9BQXBCO0FBQUEsd0NBQ0UsOERBQUMsNENBQUQ7QUFBTSx1QkFBSyxFQUFDLFVBQVo7QUFBQSx5Q0FDRSw4REFBQyxzREFBRCxDQUFNLElBQU47QUFBQSwyQ0FDRSw4REFBQyx3REFBRDtBQUFRLHdCQUFFLEVBQUMsR0FBWDtBQUFlLDhCQUFRLEVBQUUsQ0FBQ0EsS0FBMUI7QUFBQTtBQUFBO0FBREY7QUFERixrQkFERixlQVFFLDhEQUFDLDRDQUFEO0FBQU0sdUJBQUssRUFBQyxTQUFaO0FBQUEseUNBQ0UsOERBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEsMkNBQ0UsOERBQUMsd0RBQUQ7QUFBUSx3QkFBRSxFQUFDLEdBQVg7QUFBZSw4QkFBUSxFQUFFLENBQUNBLEtBQTFCO0FBQWlDLDZCQUFPLEVBQUVBLEtBQTFDO0FBQUE7QUFBQTtBQURGO0FBREYsa0JBUkY7QUFBQSxnQkFiRjtBQUFBO0FBUEYsWUFORixlQTRDRSw4REFBQyxlQUFELEtBNUNGO0FBQUE7QUFMRixRQURGLEVBc0RHRSxRQXRESDtBQUFBLE1BREY7QUEwREQ7O0FBcEVzQzs7QUF1RXpDTCxnQkFBZ0IsQ0FBQ0gsU0FBakIsR0FBNkI7QUFDM0JRLFVBQVEsRUFBRVAsaURBQVMsQ0FBQ2M7QUFETyxDQUE3Qjs7QUFJQSxNQUFNQyxtQkFBbUIsR0FBRyxDQUFDO0FBQUVSO0FBQUYsQ0FBRDtBQUFBOztBQUMxQjtBQUNGO0FBQ0E7QUFDQTtBQUNFLDhEQUFDLG9CQUFEO0FBQUEseUJBQ0UsOERBQUMsZ0JBQUQ7QUFBQSxjQUFtQkE7QUFBbkI7QUFERixFQUxGOztBQVVBUSxtQkFBbUIsQ0FBQ2hCLFNBQXBCLEdBQWdDO0FBQzlCUSxVQUFRLEVBQUVQLGlEQUFTLENBQUNjO0FBRFUsQ0FBaEM7O0FBSUEsTUFBTUUsY0FBYyxHQUFHLG1CQUNyQiwrREFBQyxtQkFBRDtBQUFBLDBCQUNFLDhEQUFDLHlEQUFEO0FBQVMsU0FBSyxFQUFFO0FBQUVILGFBQU8sRUFBRTtBQUFYLEtBQWhCO0FBQXdDLFlBQVEsTUFBaEQ7QUFBQSwyQkFDRSwrREFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLE1BQXpCO0FBQTBCLG1CQUFhLEVBQUMsUUFBeEM7QUFBQSw4QkFDRSwrREFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSxnQ0FDRSwrREFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxlQUFLLEVBQUUsQ0FBcEI7QUFBQSxrQ0FDRSw4REFBQyx3REFBRDtBQUFRLGNBQUUsRUFBQyxJQUFYO0FBQWdCLGlCQUFLLEVBQUU7QUFBRWxCLHNCQUFRLEVBQUU7QUFBWixhQUF2QjtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUcsaUJBQUssRUFBRTtBQUFFQSxzQkFBUSxFQUFFO0FBQVosYUFBVjtBQUFBO0FBQUEsWUFKRjtBQUFBLFVBREYsZUFlRSw4REFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxpQkFBTyxFQUFDLE9BQXJCO0FBQTZCLGVBQUssRUFBRSxDQUFwQztBQUFBLGlDQUNFLDhEQUFDLHVEQUFEO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLG1CQUFPLE1BRlQ7QUFHRSxnQkFBSSxFQUFDLE9BSFA7QUFJRSxlQUFHLEVBQUM7QUFKTjtBQURGLFVBZkY7QUFBQSxRQURGLGVBeUJFLDhEQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBLCtCQUNFLDhEQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLG1CQUFTLEVBQUMsUUFBdkI7QUFBQSxpQ0FDRSw4REFBQyw0Q0FBRDtBQUFNLGdCQUFJLEVBQUMsb0VBQVg7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFLDhEQUFDLHdEQUFEO0FBQVEsb0JBQUksRUFBQyxNQUFiO0FBQUE7QUFBQTtBQURGO0FBREY7QUFERjtBQURGLFFBekJGO0FBQUE7QUFERixJQURGLGVBdUNFLDhEQUFDLHlEQUFEO0FBQVMsU0FBSyxFQUFFO0FBQUVrQixhQUFPLEVBQUU7QUFBWCxLQUFoQjtBQUF3QyxZQUFRLE1BQWhEO0FBQUEsMkJBQ0UsK0RBQUMsMkRBQUQ7QUFBVyxVQUFJLE1BQWY7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFRLFVBQUUsRUFBQyxJQUFYO0FBQWdCLGFBQUssRUFBRTtBQUFFbEIsa0JBQVEsRUFBRTtBQUFaLFNBQXZCO0FBQUE7QUFBQSxRQURGLGVBSUU7QUFBRyxhQUFLLEVBQUU7QUFBRUEsa0JBQVEsRUFBRTtBQUFaLFNBQVY7QUFBQTtBQUFBLFFBSkYsZUFnQkUsOERBQUMsd0RBQUQ7QUFBUSxVQUFFLEVBQUMsR0FBWDtBQUFlLFlBQUksRUFBQyxPQUFwQjtBQUFBO0FBQUEsUUFoQkY7QUFBQTtBQURGLElBdkNGLGVBOERFLDhEQUFDLHlEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFrQixZQUFRLE1BQTFCO0FBQTJCLFNBQUssRUFBRTtBQUFFa0IsYUFBTyxFQUFFO0FBQVgsS0FBbEM7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDZCQUNFLDhEQUFDLHNEQUFEO0FBQU0sZUFBTyxNQUFiO0FBQWMsZ0JBQVEsTUFBdEI7QUFBdUIsaUJBQVMsTUFBaEM7QUFBQSwrQkFDRSwrREFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSxrQ0FDRSwrREFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxpQkFBSyxFQUFFLENBQXBCO0FBQUEsb0NBQ0UsOERBQUMsd0RBQUQ7QUFBUSxzQkFBUSxNQUFoQjtBQUFpQixnQkFBRSxFQUFDLElBQXBCO0FBQXlCLHFCQUFPLEVBQUM7QUFBakMsY0FERixlQUVFLCtEQUFDLHNEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLHNCQUFRLE1BQW5CO0FBQUEsc0NBQ0UsOERBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsa0JBQUUsRUFBQyxHQUFkO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGtCQUFFLEVBQUMsR0FBZDtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxrQkFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBLGdCQUhGLGVBSUUsOERBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsa0JBQUUsRUFBQyxHQUFkO0FBQUE7QUFBQSxnQkFKRjtBQUFBLGNBRkY7QUFBQSxZQURGLGVBVUUsK0RBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsaUJBQUssRUFBRSxDQUFwQjtBQUFBLG9DQUNFLDhEQUFDLHdEQUFEO0FBQVEsc0JBQVEsTUFBaEI7QUFBaUIsZ0JBQUUsRUFBQyxJQUFwQjtBQUF5QixxQkFBTyxFQUFDO0FBQWpDLGNBREYsZUFFRSwrREFBQyxzREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxzQkFBUSxNQUFuQjtBQUFBLHNDQUNFLDhEQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGtCQUFFLEVBQUMsR0FBZDtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxrQkFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBLGdCQUZGLGVBR0UsOERBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsa0JBQUUsRUFBQyxHQUFkO0FBQUE7QUFBQSxnQkFIRixlQUlFLDhEQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGtCQUFFLEVBQUMsR0FBZDtBQUFBO0FBQUEsZ0JBSkY7QUFBQSxjQUZGO0FBQUEsWUFWRixlQW1CRSwrREFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxpQkFBSyxFQUFFLENBQXBCO0FBQUEsb0NBQ0UsOERBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBZ0Isc0JBQVEsTUFBeEI7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBO0FBQUEsY0FKRjtBQUFBLFlBbkJGO0FBQUE7QUFERjtBQURGO0FBREYsSUE5REY7QUFBQSxFQURGOztBQXFHZUcsNkVBQWYsRTs7Ozs7Ozs7Ozs7QUNoUUEsTUFBTUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZjs7QUFFQUQsTUFBTSxDQUNIRSxHQURILENBQ08sbUJBRFAsRUFDNEIsY0FENUIsRUFFR0EsR0FGSCxDQUVPLCtCQUZQLEVBRXdDLGNBRnhDLEVBR0dBLEdBSEgsQ0FHTyxtQkFIUCxFQUc0QixlQUg1QjtBQUtBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDUEEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tIFwiQGFydHN5L2ZyZXNuZWxcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRlcixcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIExpc3QsXHJcbiAgTWVudSxcclxuICBTZWdtZW50LFxyXG4gIFZpc2liaWxpdHksXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICBtb2JpbGU6IDAsXHJcbiAgICB0YWJsZXQ6IDc2OCxcclxuICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gIH0sXHJcbn0pO1xyXG5jb25zdCBIb21lcGFnZUhlYWRpbmcgPSAoeyBtb2JpbGUgfSkgPT4gKFxyXG4gIDxDb250YWluZXIgdGV4dD5cclxuICAgIDxsaW5rXHJcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi40LjEvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgIGludGVncml0eT1cInNoYTUxMi04YkhUQzczZ2taN3JaN3ZwcVVRVGhVRGhxY05GeVlpMnhnRGdQREhjK0dYVkdIWHEreFBqeW54SW9wQUxtT1Bxem85SlpqMGs2T3FxZXdkR08zRXNyUT09XCJcclxuICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgLz5cclxuXHJcbiAgICA8SGVhZGVyXHJcbiAgICAgIGFzPVwiaDFcIlxyXG4gICAgICBjb250ZW50PVwiTUVEQkxPQ0tcIlxyXG4gICAgICBpbnZlcnRlZFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyBcIjJlbVwiIDogXCI0ZW1cIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/IFwiMS41ZW1cIiA6IFwiM2VtXCIsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPEhlYWRlclxyXG4gICAgICBhcz1cImgyXCJcclxuICAgICAgY29udGVudD1cIk1haW50YWluIHlvdXIgaGVhbHRoIHJlY29yZHMgc2FmZWx5IHdpdGggdGhlIGhlbHAgb2YgYmxvY2tjaGFpblwiXHJcbiAgICAgIGludmVydGVkXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/IFwiMS41ZW1cIiA6IFwiMS43ZW1cIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gXCIwLjVlbVwiIDogXCIxLjVlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxMaW5rIHJvdXRlPVwiL2FsbFwiPlxyXG4gICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT1cImh1Z2VcIj5cclxuICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgIDxJY29uIG5hbWU9XCJyaWdodCBhcnJvd1wiIC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuSG9tZXBhZ2VIZWFkaW5nLnByb3BUeXBlcyA9IHtcclxuICBtb2JpbGU6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9O1xyXG5cclxuICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KTtcclxuICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWVkaWEgZ3JlYXRlclRoYW49XCJtb2JpbGVcIj5cclxuICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxyXG4gICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiA3MDAsIHBhZGRpbmc6IFwiMWVtIDBlbVwiIH19XHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgZml4ZWQ9e2ZpeGVkID8gXCJ0b3BcIiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBwb2ludGluZz17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeT17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9XCJhXCI+SG9tZTwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9XCJhXCI+UmVjb3JkczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvZG9jdG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiPkRvY3RvcnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiYVwiPkFib3V0PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvZG9jdG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPVwiYVwiIGludmVydGVkPXshZml4ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL25ld2RvY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPVwiYVwiIGludmVydGVkPXshZml4ZWR9IHByaW1hcnk9e2ZpeGVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXIgRG9jXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyAvPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eT5cclxuXHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L01lZGlhPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkRlc2t0b3BDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcbmNvbnN0IFJlc3BvbnNpdmVDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgLyogSGVhZHMgdXAhXHJcbiAgICogRm9yIGxhcmdlIGFwcGxpY2F0aW9ucyBpdCBtYXkgbm90IGJlIGJlc3Qgb3B0aW9uIHRvIHB1dCBhbGwgcGFnZSBpbnRvIHRoZXNlIGNvbnRhaW5lcnMgYXRcclxuICAgKiB0aGV5IHdpbGwgYmUgcmVuZGVyZWQgdHdpY2UgZm9yIFNTUi5cclxuICAgKi9cclxuICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8RGVza3RvcENvbnRhaW5lcj57Y2hpbGRyZW59PC9EZXNrdG9wQ29udGFpbmVyPlxyXG4gIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbik7XHJcblxyXG5SZXNwb25zaXZlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCBIb21lcGFnZUxheW91dCA9ICgpID0+IChcclxuICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6IFwiOGVtIDBlbVwiIH19IHZlcnRpY2FsPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDNcIiBzdHlsZT17eyBmb250U2l6ZTogXCIyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBXZSBzZWN1cmUgeW91ciBoZWFsdGggcmVjb3JkcyB1c2luZyBibG9ja2NoYWluIHRlY2hub2xvZ3kuXHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjMzZW1cIiB9fT5cclxuICAgICAgICAgICAgICBCbG9ja2NoYWluIGNhbiB0cmFuc2Zvcm0gdGhlIHdheSBhIHBhdGllbnTigJlzIGVsZWN0cm9uaWMgaGVhbHRoXHJcbiAgICAgICAgICAgICAgcmVjb3JkcyBhcmUgc3RvcmVkIGFuZCBzaGFyZWQuIEl0IGNhbiBwcm92aWRlIGEgc2FmZXIsIG1vcmVcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCwgYW5kIHRyYWNlYWJsZSB1bmRlcnBpbm5pbmcgc3lzdGVtIGZvciBoZWFsdGhcclxuICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBleGNoYW5nZS4gVGhlIHRlY2hub2xvZ3kgaGFzIHRoZSBwb3RlbnRpYWwgdG8gY29ubmVjdFxyXG4gICAgICAgICAgICAgIG11bHRpcGxlIGRhdGEgbWFuYWdlbWVudCBzeXN0ZW1zIHdvcmtpbmcgaW4gc2lsb3MgYW5kIHByb3ZpZGUgd2hhdFxyXG4gICAgICAgICAgICAgIGNvdWxkIGJlIGEgY29ubmVjdGVkIGFuZCBpbnRlcm9wZXJhYmxlIGVsZWN0cm9uaWMgaGVhbHRoIHJlY29yZFxyXG4gICAgICAgICAgICAgIHN5c3RlbS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwicmlnaHRcIiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgcm91bmRlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9iYWZ5YmVpZTcyNGk3djJyZTRrZHprdGNmbjM1eW13Z3llcDZ5NGxwY2t6MnJwbjRjdHBjamZiaWRubS5pcGZzLmluZnVyYS1pcGZzLmlvL1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9ibG9ja2dlbmkuY29tL2VsZWN0cm9uaWMtaGVhbHRoLXJlY29yZHMtZWhyLW9uLWJsb2NrY2hhaW4vXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJodWdlXCI+UmVhZCBNb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjhlbSAwZW1cIiB9fSB2ZXJ0aWNhbD5cclxuICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgQnJlYWtpbmcgVGhlIEdyaWQsIEJsb2NrY2hhaW4gdGhlIGZ1dHVyZSEhXHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4zM2VtXCIgfX0+XHJcbiAgICAgICAgICBXZSBsaXZlIGluIGFuIGVyYSB3aGVyZSB0ZWNobm9sb2d5IHBsYXlzIGEgY3J1Y2lhbCByb2xlIGluIG91clxyXG4gICAgICAgICAgZGF5LXRvLWRheSBhY3Rpdml0eS4gRm9yIGluc3RhbmNlLCB5b3UgY2hlY2sgdGhlIGludGVybmV0LCBjb25uZWN0IHRvXHJcbiAgICAgICAgICBvbmxpbmUgc3RvcmVzIHRvIGJ1eSBncm9jZXJpZXMgYW5kIHdhdGNoIHlvdXIgZmF2b3JpdGUgc2hvdyBvblxyXG4gICAgICAgICAgTmV0ZmxpeC4gQWxsIG9mIHRoZXNlIGFyZSBub3QgcG9zc2libGUgd2l0aG91dCB0aGUgaW5jbHVzaW9uIG9mXHJcbiAgICAgICAgICB0ZWNobm9sb2d5LiBUaGUgbnVtYmVycyBhcmUgYWxyZWFkeSBzdHJvbmcgd2hlbiBpdCBjb21lcyB0b1xyXG4gICAgICAgICAgYmxvY2tjaGFpbi4gSW4gMjAxOSwgdGhlIHdvcmxkd2lkZSBzcGVuZGluZyBvbiBibG9ja2NoYWluIHRlY2hub2xvZ3lcclxuICAgICAgICAgIGlzICQyLjcgYmlsbGlvbi4gSXQgaGFzIGFscmVhZHkgZGlzcnVwdGVkIHRoZSBmaW5hbmNlIHNlY3RvciBhbmRcclxuICAgICAgICAgIGNvbnRpbnVlcyB0byBncm93IGluIHRoZSByaWdodCBkaXJlY3Rpb24uIEFub3RoZXIgZ3JlYXQgc3RhdGlzdGljIGlzXHJcbiAgICAgICAgICB0aGUgdmFsdWF0aW9uIG9mIGJsb2NrY2hhaW4gaW4gdGhlIGZvb2QgYW5kIGFncmljdWx0dXJlIG1hcmtldCDigJQgd2hpY2hcclxuICAgICAgICAgIGlzIHZhbHVlZCBhdCA0MS45bSBVU0QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYXM9XCJhXCIgc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgPFNlZ21lbnQgaW52ZXJ0ZWQgdmVydGljYWwgc3R5bGU9e3sgcGFkZGluZzogXCI1ZW0gMGVtXCIgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgZGl2aWRlZCBpbnZlcnRlZCBzdGFja2FibGU+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz1cImg0XCIgY29udGVudD1cIkFib3V0XCIgLz5cclxuICAgICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz1cImFcIj5TaXRlbWFwPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPVwiYVwiPkNvbnRhY3QgVXM8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9XCJhXCI+UmVsaWdpb3VzIENlcmVtb25pZXM8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9XCJhXCI+R2F6ZWJvIFBsYW5zPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9XCJoNFwiIGNvbnRlbnQ9XCJTZXJ2aWNlc1wiIC8+XHJcbiAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9XCJhXCI+QmFuYW5hIFByZS1PcmRlcjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz1cImFcIj5ETkEgRkFRPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPVwiYVwiPkhvdyBUbyBBY2Nlc3M8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9XCJhXCI+RmF2b3JpdGUgWC1NZW48L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICBGb290ZXIgSGVhZGVyXHJcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBFeHRyYSBzcGFjZSBmb3IgYSBjYWxsIHRvIGFjdGlvbiBpbnNpZGUgdGhlIGZvb3RlciB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgICAgICBoZWxwIHJlLWVuZ2FnZSB1c2Vycy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1NlZ21lbnQ+XHJcbiAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2VMYXlvdXQ7XHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKSgpO1xyXG5cclxucm91dGVzXHJcbiAgLmFkZChcIi9kb2N0b3JzLzphZGRyZXNzXCIsIFwiL1JlY29yZHMvbmV3XCIpXHJcbiAgLmFkZChcIi9SZWNvcmRzLzphZGRyZXNzLzpkb2NhZGRyZXNzXCIsIFwiL1JlY29yZHMvYWRkXCIpXHJcbiAgLmFkZChcIi9SZWNvcmRzLzphZGRyZXNzXCIsIFwiL1JlY29yZHMvc2hvd1wiKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXJ0c3kvZnJlc25lbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=