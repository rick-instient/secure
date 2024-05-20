"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[188],{

/***/ 4188:
/*!*****************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/web.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWeb: () => (/* binding */ AppWeb)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 4070);


class AppWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
    this.handleVisibilityChange = () => {
      const data = {
        isActive: document.hidden !== true
      };
      this.notifyListeners('appStateChange', data);
      if (document.hidden) {
        this.notifyListeners('pause', null);
      } else {
        this.notifyListeners('resume', null);
      }
    };
    document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
  }
  exitApp() {
    throw this.unimplemented('Not implemented on web.');
  }
  getInfo() {
    var _this = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this.unimplemented('Not implemented on web.');
    })();
  }
  getLaunchUrl() {
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        url: ''
      };
    })();
  }
  getState() {
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        isActive: document.hidden !== true
      };
    })();
  }
  minimizeApp() {
    var _this2 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this2.unimplemented('Not implemented on web.');
    })();
  }
}

/***/ })

}]);
//# sourceMappingURL=188.js.map