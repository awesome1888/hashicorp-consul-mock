(function(e, a) {
  for (var i in a) e[i] = a[i];
})(
  exports,
  /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode,
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key),
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = './src/index.js'),
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './src/api/kv.js':
        /*!***********************!*\
  !*** ./src/api/kv.js ***!
  \***********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(logger) {/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/util */ \"./src/lib/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  const cluster = process.env.CLUSTER_NAME || 'dc1';\n  [`/ui/${cluster}/kv/`, '/v1/kv/'].forEach(root => {\n    app.get(`${root}*`, Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__[\"wrapError\"])(async (req, res) => {\n      let path = decodeURIComponent(req.path.substr(root.length));\n\n      if (path[path.length - 1] === '/') {\n        path = path.substr(0, path.length - 1);\n      }\n\n      const env = process.env[path];\n\n      if (typeof env !== 'undefined') {\n        logger.info(`Requested: ${path}, sent: ${env}`);\n        res.setHeader('Content-Type', 'application/json');\n        res.status(200);\n        res.send(JSON.stringify([{\n          LockIndex: 0,\n          Key: path,\n          Flags: 0,\n          Value: env,\n          CreateIndex: 999999,\n          ModifyIndex: 999999\n        }]));\n      } else {\n        logger.info(`Requested: ${path}, but nothing found`);\n        res.status(404).send('not found');\n      }\n    }));\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/lib/logger.js */ \"./src/lib/logger.js\")))\n\n//# sourceURL=webpack:///./src/api/kv.js?",
          );

          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! no exports provided */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application */ "./src/lib/application.js");\n\n\n_lib_application__WEBPACK_IMPORTED_MODULE_1__["default"].make().then(app => app.launch());\n\n//# sourceURL=webpack:///./src/index.js?',
          );

          /***/
        },

      /***/ './src/lib/application.js':
        /*!********************************!*\
  !*** ./src/lib/application.js ***!
  \********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(_, logger) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Application; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_kv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/kv */ \"./src/api/kv.js\");\n\n\n\n\nclass Application {\n  static async make() {\n    // logger.info('Initializing the application');\n    const instance = new this();\n    const app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    instance.attachErrorHandler(app);\n    const hostname = process.env.HOST || 'localhost';\n    const port = process.env.PORT || 8500;\n    app.set('host', hostname);\n    app.set('port', port); // // increase the default parse depth of a query string and disable allowPrototypes\n    // app.set('query parser', query => {\n    //   return qs.parse(query, { allowPrototypes: false, depth: 10 });\n    // });\n\n    const corsSettings = process.env.CORS || '';\n    const origins = _.isne(corsSettings) ? corsSettings.split(',').map(x => x.trim()) : [];\n\n    if (_.iane(origins)) {\n      app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()({\n        origin: (origin, cb) => {\n          // allow requests with no origin, like mobile apps or curl requests\n          if (!origin || _.contains(origins, origin)) {\n            return cb(null, true);\n          }\n\n          return cb(new Error(), false); // todo: throw 403\n        }\n      }));\n    }\n\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()()); // // turn on JSON parser for REST services\n\n    app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json()); // // turn on URL-encoded parser for REST services\n    // app.use(\n    //   express.urlencoded({\n    //     extended: true,\n    //   }),\n    // );\n    // write the middleware here\n    // app.all('*', (req, res, next) => {\n    //     // console.dir(req);\n    //     console.dir('========');\n    //     console.dir(req.method);\n    //     console.dir(req.path);\n    //     console.dir(req.query);\n    //     console.dir(req.body);\n    //     next();\n    // });\n\n    Object(_api_kv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\n    instance._express = app; // logger.info('Application initialized');\n\n    return instance;\n  }\n\n  attachErrorHandler(app) {\n    // catching async unhandled rejections\n    process.on('unhandledRejection', err => {\n      logger.error('Unhandled rejection', err);\n    }).on('uncaughtException', err => {\n      logger.error('Uncaught exception', err);\n    }); // catching normal unhandled exceptions\n\n    app.use((err, req, res, next) => {\n      logger.error('Unhandled exception', err);\n      res.send('Nasty error'); // todo: explain here\n    });\n  }\n\n  async listen() {\n    const port = this._express.get('port');\n\n    const hostname = this._express.get('host');\n\n    return new Promise(resolve => {\n      this._server = this._express.listen({\n        port\n      }, () => {\n        logger.info(`🚀 Consul mock is ready at http://${hostname}:${port}`, !false);\n        resolve();\n      });\n    });\n  }\n\n  async launch() {\n    await this.listen();\n  }\n\n  async shutdown() {\n    if (this._server) {\n      return new Promise(resolve => {\n        this._server.close(resolve);\n      });\n    }\n  }\n\n  getExpress() {\n    return this._express;\n  }\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/lib/lodash.js */ \"./src/lib/lodash.js\"), __webpack_require__(/*! ./src/lib/logger.js */ \"./src/lib/logger.js\")))\n\n//# sourceURL=webpack:///./src/lib/application.js?",
          );

          /***/
        },

      /***/ './src/lib/lodash.js':
        /*!***************************!*\
  !*** ./src/lib/lodash.js ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            'const isArrayLike = __webpack_require__(/*! lodash.isarraylike */ "lodash.isarraylike");\n\nconst isString = __webpack_require__(/*! lodash.isstring */ "lodash.isstring");\n\nconst isObject = __webpack_require__(/*! lodash.isobject */ "lodash.isobject");\n\nconst random = __webpack_require__(/*! lodash.random */ "lodash.random"); // const isNumber = require(\'lodash.isnumber\');\n// const isFunction = require(\'lodash.isfunction\');\n// const union = require(\'lodash.union\');\n// const intersection = require(\'lodash.intersection\');\n\n\nconst get = __webpack_require__(/*! lodash.get */ "lodash.get");\n\nconst cloneDeep = __webpack_require__(/*! lodash.clonedeep */ "lodash.clonedeep"); // const deepFreeze = require(\'deep-freeze-node\');\n// const isEqual = require(\'lodash.isequal\');\n\n\nmodule.exports = {\n  isArray: isArrayLike,\n  isObject,\n  random,\n  // contains: (where, what) => {\n  //   if (!isArrayLike(where)) {\n  //     return false;\n  //   }\n  //\n  //   return where.indexOf(what) >= 0;\n  // },\n  // forEach: (obj, fn) => {\n  //   Object.keys(obj).forEach((k) => {\n  //     fn(obj[k], k);\n  //   });\n  // },\n  // isEqual,\n  // isNumber,\n  // isFunction,\n  cloneDeep,\n  get,\n  // deepFreeze,\n  // union,\n  // intersection,\n  iane: arg => {\n    return isArrayLike(arg) && arg.length > 0;\n  },\n  ione: arg => {\n    return isObject(arg) && Object.keys(arg).length > 0;\n  },\n  isne: arg => {\n    return isString(arg) && arg.length > 0;\n  }\n};\n\n//# sourceURL=webpack:///./src/lib/lodash.js?',
          );

          /***/
        },

      /***/ './src/lib/logger.js':
        /*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          eval(
            "module.exports = {\n  debug: message => {\n    if (true) {\n      console.log(message);\n      return;\n    }\n\n    console.log(JSON.stringify({\n      level: 'DEBUG',\n      message\n    }));\n  },\n  info: message => {\n    if (true) {\n      console.log(message);\n      return;\n    }\n\n    console.log(JSON.stringify({\n      level: 'INFO',\n      message\n    }));\n  },\n  warn: message => {\n    if (true) {\n      console.log(message);\n      return;\n    }\n\n    console.log(JSON.stringify({\n      level: 'WARNING',\n      message\n    }));\n  },\n  error: (message, error) => {\n    console.dir(message);\n\n    if (true) {\n      console.log(message);\n      console.dir(error);\n      return;\n    }\n\n    if (error instanceof Error) {\n      const stack = error.stack.split('\\n');\n      stack.shift();\n      error = {\n        message: error.message,\n        // ;)))\n        stack: stack.join('\\n')\n      };\n    }\n\n    console.log(JSON.stringify({\n      level: 'ERROR',\n      message,\n      error\n    }));\n  }\n};\n\n//# sourceURL=webpack:///./src/lib/logger.js?",
          );

          /***/
        },

      /***/ './src/lib/util.js':
        /*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
        /*! exports provided: wrapError */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapError", function() { return wrapError; });\nconst wrapError = fn => async (req, res, next) => {\n  try {\n    await fn(req, res, next);\n  } catch (e) {\n    next(e);\n  }\n};\n\n//# sourceURL=webpack:///./src/lib/util.js?',
          );

          /***/
        },

      /***/ '@babel/polyfill':
        /*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("@babel/polyfill");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?',
          );

          /***/
        },

      /***/ cors:
        /*!***********************!*\
  !*** external "cors" ***!
  \***********************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("cors");\n\n//# sourceURL=webpack:///external_%22cors%22?',
          );

          /***/
        },

      /***/ express:
        /*!**************************!*\
  !*** external "express" ***!
  \**************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?',
          );

          /***/
        },

      /***/ helmet:
        /*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("helmet");\n\n//# sourceURL=webpack:///external_%22helmet%22?',
          );

          /***/
        },

      /***/ 'lodash.clonedeep':
        /*!***********************************!*\
  !*** external "lodash.clonedeep" ***!
  \***********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("lodash.clonedeep");\n\n//# sourceURL=webpack:///external_%22lodash.clonedeep%22?',
          );

          /***/
        },

      /***/ 'lodash.get':
        /*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("lodash.get");\n\n//# sourceURL=webpack:///external_%22lodash.get%22?',
          );

          /***/
        },

      /***/ 'lodash.isarraylike':
        /*!*************************************!*\
  !*** external "lodash.isarraylike" ***!
  \*************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("lodash.isarraylike");\n\n//# sourceURL=webpack:///external_%22lodash.isarraylike%22?',
          );

          /***/
        },

      /***/ 'lodash.isobject':
        /*!**********************************!*\
  !*** external "lodash.isobject" ***!
  \**********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("lodash.isobject");\n\n//# sourceURL=webpack:///external_%22lodash.isobject%22?',
          );

          /***/
        },

      /***/ 'lodash.isstring':
        /*!**********************************!*\
  !*** external "lodash.isstring" ***!
  \**********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("lodash.isstring");\n\n//# sourceURL=webpack:///external_%22lodash.isstring%22?',
          );

          /***/
        },

      /***/ 'lodash.random':
        /*!********************************!*\
  !*** external "lodash.random" ***!
  \********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("lodash.random");\n\n//# sourceURL=webpack:///external_%22lodash.random%22?',
          );

          /***/
        },

      /******/
    },
  ),
);
