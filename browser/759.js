"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[759],{

/***/ 8759:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/web.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferencesWeb: () => (/* binding */ PreferencesWeb)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 4070);


class PreferencesWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super(...arguments);
    this.group = 'CapacitorStorage';
  }
  configure({
    group
  }) {
    var _this = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof group === 'string') {
        _this.group = group;
      }
    })();
  }
  get(options) {
    var _this2 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = _this2.impl.getItem(_this2.applyPrefix(options.key));
      return {
        value
      };
    })();
  }
  set(options) {
    var _this3 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.impl.setItem(_this3.applyPrefix(options.key), options.value);
    })();
  }
  remove(options) {
    var _this4 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.impl.removeItem(_this4.applyPrefix(options.key));
    })();
  }
  keys() {
    var _this5 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const keys = _this5.rawKeys().map(k => k.substring(_this5.prefix.length));
      return {
        keys
      };
    })();
  }
  clear() {
    var _this6 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const key of _this6.rawKeys()) {
        _this6.impl.removeItem(key);
      }
    })();
  }
  migrate() {
    var _this7 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      const migrated = [];
      const existing = [];
      const oldprefix = '_cap_';
      const keys = Object.keys(_this7.impl).filter(k => k.indexOf(oldprefix) === 0);
      for (const oldkey of keys) {
        const key = oldkey.substring(oldprefix.length);
        const value = (_a = _this7.impl.getItem(oldkey)) !== null && _a !== void 0 ? _a : '';
        const {
          value: currentValue
        } = yield _this7.get({
          key
        });
        if (typeof currentValue === 'string') {
          existing.push(key);
        } else {
          yield _this7.set({
            key,
            value
          });
          migrated.push(key);
        }
      }
      return {
        migrated,
        existing
      };
    })();
  }
  removeOld() {
    var _this8 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const oldprefix = '_cap_';
      const keys = Object.keys(_this8.impl).filter(k => k.indexOf(oldprefix) === 0);
      for (const oldkey of keys) {
        _this8.impl.removeItem(oldkey);
      }
    })();
  }
  get impl() {
    return window.localStorage;
  }
  get prefix() {
    return this.group === 'NativeStorage' ? '' : `${this.group}.`;
  }
  rawKeys() {
    return Object.keys(this.impl).filter(k => k.indexOf(this.prefix) === 0);
  }
  applyPrefix(key) {
    return this.prefix + key;
  }
}

/***/ })

}]);
//# sourceMappingURL=759.js.map