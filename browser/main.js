(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[792],{

/***/ 6080:
/*!********************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/app.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 6732);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _monorepo_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/common-component */ 595);
/* harmony import */ var capacitor_plugin_safe_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! capacitor-plugin-safe-area */ 654);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/app */ 9326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);












class AppComponent {
  constructor(authService, appService, storeService, meta) {
    this.authService = authService;
    this.appService = appService;
    this.storeService = storeService;
    this.meta = meta;
    if (this.appService.isBrowserRendering) {
      this.storeService.initStore();
    }
  }
  ngOnInit() {
    this.appService.setPlatform();
    this.authService.setAuth(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_version, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cryptojs_key, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cryptojs_iv);
    if (this.appService.isIosApp) {
      capacitor_plugin_safe_area__WEBPACK_IMPORTED_MODULE_4__.SafeArea.getStatusBarHeight().then(({
        statusBarHeight
      }) => {
        document.documentElement.style.setProperty('--status-bar-height', `${statusBarHeight}px`);
      });
    }
    _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.addListener('backButton', data => {
      if (data.canGoBack) {
        window.history.back();
      } else {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.exitApp();
      }
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow'
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Meta));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet")(1, "hf-toast")(2, "lib-app-download-popup");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfToastComponent, _monorepo_common_component__WEBPACK_IMPORTED_MODULE_3__.HeatfleetAppDownloadPopupComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3269:
/*!*****************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/app.config.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 793);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _shared_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/interceptors/interceptor */ 5040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);






const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes), {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__.PathLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
    useClass: _shared_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_1__.ApiInterceptor,
    multi: true
  }, (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.provideClientHydration)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.withFetch)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.withInterceptorsFromDi)()), (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.provideClientHydration)((0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.withHttpTransferCacheOptions)({
    includePostRequests: true
  }))]
};

/***/ }),

/***/ 793:
/*!*****************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/app.routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ 999).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/master.routes */ 8999)).then(mod => mod.routes)
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ 387).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/not-found/not-found.component */ 9387)).then(c => c.NotFoundComponent)
}];

/***/ }),

/***/ 5040:
/*!**************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/interceptors/interceptor.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiInterceptor: () => (/* binding */ ApiInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/urls */ 308);
/* harmony import */ var _services_cookie_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cookie.helper */ 3915);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);












class ApiInterceptor {
  constructor(router, toastService, cookieHelper) {
    this.router = router;
    this.toastService = toastService;
    this.cookieHelper = cookieHelper;
  }
  intercept(req, next) {
    const commonHeaders = {
      'Content-Type': 'application/json',
      'X-Api-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_key,
      'DAVOS-IsMobile': 'false'
    };
    // Add API key to headers
    let modifiedReq = req.clone({
      setHeaders: commonHeaders
    });
    // Exclude certain URLs // This means that certain URLs will have Authorization headers
    const includesUrls = ['customer/order/delivery-details', 'customer/order/get?orderId', 'customer/order/place', 'customer/order/summary', 'customer/order/delivery-address', 'customer/order/delete-address', 'customer/account/settings', 'account/changepassword', 'customer/account/settings']; // Add URLs to includesUrls
    if (includesUrls.some(url => req.url.includes(url))) {
      modifiedReq = req.clone({
        setHeaders: {
          ...commonHeaders,
          'Authorization': 'Bearer ' + this.cookieHelper.getAuthToken()
        }
      });
    }
    // Handle response
    return next.handle(modifiedReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      if (error.status === 401 || error.status === 403) {
        if (error.error && error.error.detail) {
          this.toastService.toastMessage.next({
            title: 'Authentication Error',
            msg: error.error.detail,
            type: 'error'
          });
        } else {
          this.toastService.toastMessage.next({
            title: 'Authentication Error',
            msg: 'Please login again.',
            type: 'error'
          });
        }
        this.cookieHelper.clearCookie();
        this.router.navigate([_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.LOGIN]);
      } else {
        if (error.error && error.error.detail) {
          if (error.error.errors && error.error.errors.length > 0 && error.error.errors[0]['errorMessage']) {
            this.toastService.toastMessage.next({
              title: error.error.detail,
              msg: error.error.errors[0]['errorMessage'],
              type: 'error'
            });
          } else {
            this.toastService.toastMessage.next({
              title: 'Error',
              msg: error.error.detail,
              type: 'error'
            });
          }
        } else {
          this.toastService.toastMessage.next({
            title: 'Server Error',
            msg: 'Something bad happened; please try again later.',
            type: 'error'
          });
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  static #_ = this.ɵfac = function ApiInterceptor_Factory(t) {
    return new (t || ApiInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_3__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_cookie_helper__WEBPACK_IMPORTED_MODULE_2__.CookieHelper));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ApiInterceptor,
    factory: ApiInterceptor.ɵfac
  });
}

/***/ }),

/***/ 3915:
/*!************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/services/cookie.helper.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieHelper: () => (/* binding */ CookieHelper)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4751);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class CookieHelper {
  constructor(cookieService, appService) {
    this.cookieService = cookieService;
    this.appService = appService;
  }
  getAuthToken() {
    return this.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.AUTH_TOKEN);
  }
  getUserRole() {
    return this.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.USER_ROLE);
  }
  getCompanyID() {
    return this.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.COMPANY_ID);
  }
  getUserID() {
    return this.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.USER_ID);
  }
  getUserEmail() {
    return this.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.USER_EMAIL);
  }
  verifyAuthToken(token) {
    try {
      let decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
      if (decoded.hasOwnProperty("UserId")) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  setZipCode(zipCode) {
    if (!this.appService.isApp) {
      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.is_local) {
        this.setCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.ZIP_CODE, zipCode, '.heatfleet.com', '/');
      } else {
        this.setCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.ZIP_CODE, zipCode);
      }
    } else {
      const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      const expires = expirationDate.toUTCString();
      this.setCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.ZIP_CODE, zipCode, 'localhost', '/', expires);
    }
  }
  setGallons(gallons) {
    if (!this.appService.isApp) {
      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.is_local) {
        this.setCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.GALLONS, gallons, '.heatfleet.com', '/');
      } else {
        this.setCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.GALLONS, gallons);
      }
    } else {
      const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      const expires = expirationDate.toUTCString();
      this.setCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.GALLONS, gallons, 'localhost', '/', expires);
    }
  }
  setCookie(name, value, domain, path, expires) {
    return this.cookieService.set(name, value, domain, path, expires);
  }
  getCookie(name) {
    return this.cookieService.get(name);
  }
  clearCookie() {
    return this.cookieService.deleteAll();
  }
  static #_ = this.ɵfac = function CookieHelper_Factory(t) {
    return new (t || CookieHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AppService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CookieHelper,
    factory: CookieHelper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 308:
/*!************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/utils/urls.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   URLS: () => (/* binding */ URLS)
/* harmony export */ });
var URLS;
(function (URLS) {
  URLS["ROOT"] = "";
  URLS["LOGIN"] = "sign-in";
  URLS["USER_ACCOUNT"] = "account";
  URLS["ORDER_LOGIN"] = "order-login";
  URLS["CONFIRM_ADDRESS"] = "confirm-address";
  URLS["PAYMENT"] = "payment";
  URLS["ORDERS"] = "orders";
  URLS["ORDER_DETAILS"] = "order-details";
  URLS["OIL_PROVIDER_SELECTOR"] = "oil-select-provider";
  URLS["FUEL_ADDITIVE"] = "fuel-additive";
  URLS["DELIVERY_DETAILS"] = "delivery-details";
})(URLS || (URLS = {}));

/***/ }),

/***/ 6732:
/*!***************************************************************!*\
  !*** ./apps/heatfleet/secure/src/environments/environment.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const local = {
  is_local: true,
  api_url: 'https://dev-api.heatfleet.com/api/',
  api_version: '1.0',
  api_key: 'oiwe43raiasdl4kha6sdf123',
  vendor_url: 'https://dev-vendor.heatfleet.com/',
  client_url: 'https://dev.heatfleet.com/',
  secure_url: 'https://dev-secure.heatfleet.com/',
  paypal_client_id: 'AcFQTHo45inLdsXIgxTqiPRQiHyHJWynxvJTnSjJWVuMc6eyuNTP_edPjghjHAhC2gK8dbPjhACWwdIx',
  cryptojs_key: "LpckS4LLOta7PPb+2kk5Oq1xcPeEYpjz4ENKjtN2+R0=",
  cryptojs_iv: "IoZgQvJHbo/etR0xU0lwfQ==",
  hof_api_url: "https://dev-api.heatingoilfinder.com/api/"
};
const dev = {
  is_local: false,
  api_url: 'https://dev-api.heatfleet.com/api/',
  api_version: '1.0',
  api_key: 'oiwe43raiasdl4kha6sdf123',
  vendor_url: 'https://dev-vendor.heatfleet.com/',
  client_url: 'https://dev.heatfleet.com/',
  secure_url: 'https://dev-secure.heatfleet.com/',
  paypal_client_id: 'AcFQTHo45inLdsXIgxTqiPRQiHyHJWynxvJTnSjJWVuMc6eyuNTP_edPjghjHAhC2gK8dbPjhACWwdIx',
  cryptojs_key: "LpckS4LLOta7PPb+2kk5Oq1xcPeEYpjz4ENKjtN2+R0=",
  cryptojs_iv: "IoZgQvJHbo/etR0xU0lwfQ==",
  hof_api_url: "https://dev-api.heatingoilfinder.com/api/"
};
const uat = {
  is_local: false,
  api_url: 'https://demo-api.heatfleet.com/api/',
  api_version: '1.0',
  api_key: 'oiwe43raiasdl4kha6sdf123',
  vendor_url: 'https://demo-vendor.heatfleet.com/',
  client_url: 'https://demo.heatfleet.com/',
  secure_url: 'https://demo-secure.heatfleet.com/',
  paypal_client_id: 'AcFQTHo45inLdsXIgxTqiPRQiHyHJWynxvJTnSjJWVuMc6eyuNTP_edPjghjHAhC2gK8dbPjhACWwdIx',
  cryptojs_key: "LpckS4LLOta7PPb+2kk5Oq1xcPeEYpjz4ENKjtN2+R0=",
  cryptojs_iv: "IoZgQvJHbo/etR0xU0lwfQ==",
  hof_api_url: "https://demo-api.heatingoilfinder.com/api/"
};
const main = {
  is_local: false,
  api_url: 'https://api.heatfleet.com/api/',
  api_version: '1.0',
  api_key: 'oiwe43raiasdl4kha6sdf123',
  vendor_url: 'https://vendor.heatfleet.com/',
  client_url: 'https://heatfleet.com/',
  secure_url: 'https://secure.heatfleet.com/',
  paypal_client_id: 'AVd9gVKUYrf1BAU0M2gRAebZcl4IH7G_FZ4_HsW_YGD1WXHagnH7J5EGvS7GS2KNY680njuGYmEH7rAR',
  cryptojs_key: "LpckS4LLOta7PPb+2kk5Oq1xcPeEYpjz4ENKjtN2+R0=",
  cryptojs_iv: "IoZgQvJHbo/etR0xU0lwfQ==",
  hof_api_url: "https://api.heatingoilfinder.com/api/"
};
const environment = local;

/***/ }),

/***/ 1729:
/*!*******************************************!*\
  !*** ./apps/heatfleet/secure/src/main.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 3269);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6080);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 595:
/*!********************************************!*\
  !*** ./libs/common-component/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapitolcityoilHowitworksComponent: () => (/* reexport safe */ _lib_capitolcityoil_howitworks_capitolcityoil_howitworks_component__WEBPACK_IMPORTED_MODULE_3__.CapitolcityoilHowitworksComponent),
/* harmony export */   HeatfleetAppDownloadPopupComponent: () => (/* reexport safe */ _lib_app_download_popup_app_download_popup_component__WEBPACK_IMPORTED_MODULE_1__.HeatfleetAppDownloadPopupComponent),
/* harmony export */   HeatfleetHeaderComponent: () => (/* reexport safe */ _lib_heatfleet_header_heatfleet_header_component__WEBPACK_IMPORTED_MODULE_0__.HeatfleetHeaderComponent),
/* harmony export */   SecureHowitworksComponent: () => (/* reexport safe */ _lib_secure_howitworks_secure_howitworks_component__WEBPACK_IMPORTED_MODULE_4__.SecureHowitworksComponent),
/* harmony export */   SmarttouchenergyHowitworksComponent: () => (/* reexport safe */ _lib_smarttouchenergy_howitworks_smarttouchenergy_howitworks_component__WEBPACK_IMPORTED_MODULE_2__.SmarttouchenergyHowitworksComponent)
/* harmony export */ });
/* harmony import */ var _lib_heatfleet_header_heatfleet_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/heatfleet-header/heatfleet-header.component */ 6087);
/* harmony import */ var _lib_app_download_popup_app_download_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/app-download-popup/app-download-popup.component */ 4797);
/* harmony import */ var _lib_smarttouchenergy_howitworks_smarttouchenergy_howitworks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/smarttouchenergy-howitworks/smarttouchenergy-howitworks.component */ 709);
/* harmony import */ var _lib_capitolcityoil_howitworks_capitolcityoil_howitworks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/capitolcityoil-howitworks/capitolcityoil-howitworks.component */ 1209);
/* harmony import */ var _lib_secure_howitworks_secure_howitworks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/secure-howitworks/secure-howitworks.component */ 9165);






/***/ }),

/***/ 4797:
/*!******************************************************************************************!*\
  !*** ./libs/common-component/src/lib/app-download-popup/app-download-popup.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatfleetAppDownloadPopupComponent: () => (/* binding */ HeatfleetAppDownloadPopupComponent)
/* harmony export */ });
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class HeatfleetAppDownloadPopupComponent {
  constructor(appService, cookieService) {
    this.appService = appService;
    this.cookieService = cookieService;
    this.showModel = true;
  }
  ngOnInit() {
    this.showModel = false;
    // let popup = this.cookieService.get(Cookie.APP_POPUP);
    // if (popup == '') {
    //   this.showModel = true;
    //   this.cookieService.set(Cookie.APP_POPUP, 'true');
    // }
  }
  openAppLink(platform) {
    if (platform == 'apple') {
      window.open('https://apps.apple.com/us/app/heat-fleet/id6479750613', '_blank');
    } else if (platform == 'android') {
      window.open('https://play.google.com/store/apps/details?id=com.heatfleet.homeowner', '_blank');
    }
  }
  closeModel(isClosed) {
    if (isClosed) {
      this.showModel = false;
      this.cookieService.set(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.APP_POPUP, 'true');
    }
  }
  static #_ = this.ɵfac = function HeatfleetAppDownloadPopupComponent_Factory(t) {
    return new (t || HeatfleetAppDownloadPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.CookieService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeatfleetAppDownloadPopupComponent,
    selectors: [["lib-app-download-popup"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 2,
    consts: [[3, "modelClosed", "showModel", "modelSize"], [1, "app-banner", 2, "margin-bottom", "20px", 3, "click"], [1, "hf-heading-3", "hf-dark-font"], ["src", "assets/app-store.svg", "alt", "App store image", "srcset", "App store image"], [1, "app-banner", 3, "click"], ["src", "assets/google-play.svg", "alt", "Google play image", "srcset", "Google play image"]],
    template: function HeatfleetAppDownloadPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "hf-model", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modelClosed", function HeatfleetAppDownloadPopupComponent_Template_hf_model_modelClosed_0_listener($event) {
          return ctx.closeModel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetAppDownloadPopupComponent_Template_div_click_1_listener() {
          return ctx.openAppLink("apple");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Download Heat Fleet Ios App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetAppDownloadPopupComponent_Template_div_click_5_listener() {
          return ctx.openAppLink("android");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Download Heat Fleet Android App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showModel", ctx.showModel)("modelSize", "large");
      }
    },
    dependencies: [_monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfModelComponent],
    styles: [".app-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n\n.app-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.app-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL2FwcC1kb3dubG9hZC1wb3B1cC9hcHAtZG93bmxvYWQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy9jb21tb24tY29tcG9uZW50L3NyYy9saWIvYXBwLWRvd25sb2FkLXBvcHVwL2FwcC1kb3dubG9hZC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFwcC1iYW5uZXIgaDIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmFwcC1iYW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn0iLCIuYXBwLWJhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLWJhbm5lciBoMiB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5hcHAtYmFubmVyIGltZyB7XG4gIHdpZHRoOiA0MCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4767:
/*!**************************************************************************************************************************!*\
  !*** ./libs/common-component/src/lib/capitolcityoil-howitworks/capitolcityoil-footer/capitolcityoil-footer.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapitolcityoilFooterComponent: () => (/* binding */ CapitolcityoilFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class CapitolcityoilFooterComponent {
  static #_ = this.ɵfac = function CapitolcityoilFooterComponent_Factory(t) {
    return new (t || CapitolcityoilFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CapitolcityoilFooterComponent,
    selectors: [["lib-capitolcityoil-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 0,
    consts: [[1, "footer-container"], [1, "content-wrapper"], ["src", "assets/capitolcityoil/footer/footer-company-logo.svg", "alt", "logo", 1, "company-logo"], [1, "info"], [1, "contact"], [1, "contact-item"], ["src", "assets/capitolcityoil/footer/phone-icon.svg", "alt", "phone icon", 1, "contact-type-icons"], ["src", "assets/capitolcityoil/footer/mail-icon.svg", "alt", "mail icon", 1, "contact-type-icons"], ["src", "assets/capitolcityoil/footer/text-message-icon.svg", "alt", "text icon", 1, "contact-type-icons"], [1, "terms"], [1, "font-size-14px"]],
    template: function CapitolcityoilFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2220 Gettysburg Road");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Camp Hill, PA 17011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HIC PA141364 | PA006911");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact our Customer Care team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(717) 896 - 1417");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "info@CapitalCityOil.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(717) 737 - 4188");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9)(26, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A92022 Capitol City Oil. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Privacy Policy. Terms & Conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".content-wrapper[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  padding: 37px 32px 32px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.terms[_ngcontent-%COMP%] {\n  background: #CF2028;\n  color: white;\n  min-height: 34px;\n  text-align: center;\n  padding: 10px 30px;\n}\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 42px;\n}\n\n.contact-type-icons[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  aspect-ratio: 1/1;\n}\n\n.company-logo[_ngcontent-%COMP%] {\n  width: 152px;\n  aspect-ratio: 76/21;\n}\n\n.font-size-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL2NhcGl0b2xjaXR5b2lsLWhvd2l0d29ya3MvY2FwaXRvbGNpdHlvaWwtZm9vdGVyL2NhcGl0b2xjaXR5b2lsLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL2NvbW1vbi1jb21wb25lbnQvc3JjL2xpYi9jYXBpdG9sY2l0eW9pbC1ob3dpdHdvcmtzL2NhcGl0b2xjaXR5b2lsLWZvb3Rlci9jYXBpdG9sY2l0eW9pbC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUYiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMzdweCAzMnB4IDMycHggMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4udGVybXMge1xyXG4gIGJhY2tncm91bmQ6ICNDRjIwMjg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4uY29udGFjdC10eXBlLWljb25zIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcbn1cclxuXHJcbi5jb21wYW55LWxvZ28ge1xyXG4gIHdpZHRoOiAxNTJweDtcclxuICBhc3BlY3QtcmF0aW86IDc2LzIxO1xyXG59XHJcblxyXG4uZm9udC1zaXplLTE0cHgge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iLCIuY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMzdweCAzMnB4IDMycHggMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4udGVybXMge1xuICBiYWNrZ3JvdW5kOiAjQ0YyMDI4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuLnRlcm1zIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG4uY29udGFjdC10eXBlLWljb25zIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICB3aWR0aDogMTUycHg7XG4gIGFzcGVjdC1yYXRpbzogNzYvMjE7XG59XG5cbi5mb250LXNpemUtMTRweCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1209:
/*!********************************************************************************************************!*\
  !*** ./libs/common-component/src/lib/capitolcityoil-howitworks/capitolcityoil-howitworks.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapitolcityoilHowitworksComponent: () => (/* binding */ CapitolcityoilHowitworksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _capitolcityoil_footer_capitolcityoil_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitolcityoil-footer/capitolcityoil-footer.component */ 4767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);








class CapitolcityoilHowitworksComponent {
  constructor(http, toastService) {
    this.http = http;
    this.toastService = toastService;
    this.emailKey = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.emailApiUrl = `https://demo-api.heatfleet.com/api/customer/offer/savecontactdata`;
    this.emailAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.emailKey), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
    this.emailAddressIM = '';
    this.emailAddressMT = '';
  }
  getEmailSubscribe() {
    if (this.emailAddress.valid) {
      this.http.post(this.emailApiUrl, {
        'email': this.emailAddress.value
      }).subscribe(data => {
        if (data) {
          console.log(data);
          this.toastService.toastMessage.next({
            title: 'Subscription done',
            msg: 'Thank You for subscribing.',
            type: 'success'
          });
          this.emailAddress.setValue(null);
        }
      });
    } else {
      if (this.emailAddress.invalid && this.emailAddress.errors) {
        this.emailAddressMT = 'error';
        if (this.emailAddress.errors['required']) {
          this.emailAddressIM = 'Email is required';
        }
        if (this.emailAddress.errors['pattern']) {
          this.emailAddressIM = 'Enter valid email';
        }
        this.isValidEmailSubscription = this.emailAddress.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.emailAddressIM = '';
            this.emailAddressMT = '';
            this.isValidEmailSubscription.unsubscribe();
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.isValidEmailSubscription) {
      this.isValidEmailSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function CapitolcityoilHowitworksComponent_Factory(t) {
    return new (t || CapitolcityoilHowitworksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CapitolcityoilHowitworksComponent,
    selectors: [["lib-capitolcityoil-howitworks"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 44,
    vars: 3,
    consts: [[1, "capitolcityoil-container", "hf-primary-bg"], [1, "info-part-1"], [1, "info-part-1-content"], [1, "info-part-1-content-img"], ["src", "assets/capitolcityoil/logo.svg", "alt", "logo"], [1, "font-size-12px"], [1, "info-part-1-highlight", "hf-dark-font"], ["src", "assets/capitolcityoil/bank.svg", "alt", "saving-logo"], [1, "how-it-works", "text-color-main", "hf-secondary-bg"], [1, "hf-dark-font"], [1, "how-it-works-content"], [1, "how-it-works-card"], ["src", "assets/capitolcityoil/Check Price Icon 1saving.svg", "alt", "how-it-works-1", 1, "how-it-works-img-1"], [1, "hf-dark-font", "hf-heading-3"], ["src", "assets/capitolcityoil/arrow-right.svg", "alt", "arrow right icon"], ["src", "assets/capitolcityoil/check price mobile icon.svg", "alt", "how-it-works-2", 1, "how-it-works-img-2"], ["src", "https://media-cdn.heatfleet.com/heating-oil/capitolcityoil/delivery.png", "alt", "how-it-works-3", 1, "how-it-works-img-3"], [1, "deal-alerts", "hf-white-text-color"], [1, "deal-alerts-title", "hf-dark-font"], ["src", "assets/capitolcityoil/price-pin.png", "alt", "truck", 1, "truck-img"], [1, "subscribe-wrapper"], ["inputLabel", "E-Mail Address", "inputPlaceholder", "name@gmail.com", 3, "inputValue", "descriptionType", "inputDescription"], ["buttonSize", "large", "labelText", "SUBSCRIBE", 3, "click"]],
    template: function CapitolcityoilHowitworksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Capitol City Oil has provided the greater Harrisburg community with affordable, reliable will-call heating oil delivery for two decades and counting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "If you find a competitor delivering heating oil at a lower price us, we\u2019ll beat that price by 2\u00A2, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "GUARANTEED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " How it Works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Check today\u2019s price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Place your order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Receive your delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17)(34, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Deal Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Subscribe to deal alerts and well send promotion announcements directly to your inbox.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "hf-input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div")(42, "hf-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CapitolcityoilHowitworksComponent_Template_hf_button_click_42_listener() {
          return ctx.getEmailSubscribe();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "lib-capitolcityoil-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputValue", ctx.emailAddress)("descriptionType", ctx.emailAddressMT)("inputDescription", ctx.emailAddressIM);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent, _capitolcityoil_footer_capitolcityoil_footer_component__WEBPACK_IMPORTED_MODULE_1__.CapitolcityoilFooterComponent],
    styles: [".font-size-12px[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.text-color-main[_ngcontent-%COMP%] {\n  color: var(--hf-main-color);\n}\n\n.info-part-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  padding: 20px;\n}\n\n.info-part-1-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  align-items: center;\n}\n\n.info-part-1-highlight[_ngcontent-%COMP%] {\n  color: #CF2028;\n}\n\n.how-it-works[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  gap: 10px;\n}\n\n.how-it-works-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 75px;\n  gap: 10px;\n}\n\n.how-it-works-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 8px;\n}\n\n.how-it-works-img-2[_ngcontent-%COMP%] {\n  width: 71px;\n  height: 52px;\n}\n\n.how-it-works-img-3[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 52px;\n}\n\n.deal-alerts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  margin: 20px;\n  padding: 16px;\n  background-color: #CF2028;\n  border-radius: 10px;\n}\n\n.deal-alerts-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.subscribe-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.truck-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1000/791;\n}\n\n  .subscribe-wrapper .hf-input {\n  border-radius: var(--hf-input-border-radius) 0 0 var(--hf-input-border-radius);\n}\n\n  .subscribe-wrapper .hf-button {\n  height: 48px;\n  border-radius: 0 var(--hf-input-border-radius) var(--hf-input-border-radius) 0;\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-60%);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL2NhcGl0b2xjaXR5b2lsLWhvd2l0d29ya3MvY2FwaXRvbGNpdHlvaWwtaG93aXR3b3Jrcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL2NvbW1vbi1jb21wb25lbnQvc3JjL2xpYi9jYXBpdG9sY2l0eW9pbC1ob3dpdHdvcmtzL2NhcGl0b2xjaXR5b2lsLWhvd2l0d29ya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FEb0VBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ2pFRjs7QURvRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDakVGOztBRG9FQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ2pFRjs7QURvRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pFRjs7QURvRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pFRjs7QURvRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2pFRjs7QURvRUE7RUFDRSxlQUFBO0FDakVGOztBRG9FQTtFQUNFLGFBQUE7QUNqRUY7O0FEb0VBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FDakVGOztBRG9FQTtFQUNFLDhFQUFBO0FDakVGOztBRG9FQTtFQUNFLFlBQUE7RUFDQSw4RUFBQTtBQ2pFRjs7QUQwRUE7RUFDRTtJQUNFLHdCQUFBO0VDdkVGO0VEMEVBO0lBQ0UsMkJBQUE7RUN4RUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LXNpemUtMTJweCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udGV4dC1jb2xvci1tYWluIHtcclxuICBjb2xvcjogdmFyKC0taGYtbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5pbmZvLXBhcnQtMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLXBhcnQtMS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1wYXJ0LTEtaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogI0NGMjAyODtcclxufVxyXG5cclxuXHJcbi8vIGRlc2lnbiAxXHJcbi8vIC5ob3ctaXQtd29ya3Mge1xyXG4vLyAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4vLyAgIG1hcmdpbjogYXV0bztcclxuLy8gICBwYWRkaW5nOiA0MHB4IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5ob3ctaXQtd29ya3MtY29udGVudC13cmFwcGVyIHtcclxuLy8gICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgIHJvdy1nYXA6IDMwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ob3ctaXQtd29ya3MtY29udGVudC13cmFwcGVyIHtcclxuLy8gICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkIHtcclxuLy8gICBwYWRkaW5nOiAwIDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ob3ctaXQtd29ya3MtaW1nIHtcclxuLy8gICB3aWR0aDogMTgwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zdWItaGVhZGluZyB7XHJcbi8vICAgcGFkZGluZzogMjBweCAwIDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LWFsaWduLWNlbnRlciB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyBkZXNpZ24gMlxyXG4vLyAuaG93LWl0LXdvcmtzIHtcclxuLy8gICB3aWR0aDogMTAwdnc7XHJcbi8vICAgcGFkZGluZzogMjRweDtcclxuLy8gICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbi8vIH1cclxuXHJcbi8vIC5ob3ctaXQtd29ya3MtY29udGVudCB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGdhcDogMjRweDtcclxuLy8gICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbi8vICAgYW5pbWF0aW9uOiBzY3JvbGwgMjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4vLyAgIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbi8vIH1cclxuXHJcbi8vIC5ob3ctaXQtd29ya3MtY2FyZCB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgZ2FwOiA4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ob3ctaXQtd29ya3MtaW1nIHtcclxuLy8gICB3aWR0aDogMTM5cHg7XHJcbi8vIH1cclxuXHJcbi8vIGRlc2lnbiAzXHJcbi5ob3ctaXQtd29ya3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNzVweDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5ob3ctaXQtd29ya3MtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmhvdy1pdC13b3Jrcy1pbWctMiB7XHJcbiAgd2lkdGg6IDcxcHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWltZy0zIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi5kZWFsLWFsZXJ0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YyMDI4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kZWFsLWFsZXJ0cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50cnVjay1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFzcGVjdC1yYXRpbzogMTAwMC83OTE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3Vic2NyaWJlLXdyYXBwZXIgLmhmLWlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0taGYtaW5wdXQtYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3Vic2NyaWJlLXdyYXBwZXIgLmhmLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0taGYtaW5wdXQtYm9yZGVyLXJhZGl1cykgdmFyKC0taGYtaW5wdXQtYm9yZGVyLXJhZGl1cykgMDtcclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4vLyAgIC5ob3ctaXQtd29ya3MtY29udGVudC13cmFwcGVyIHtcclxuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuLy8gICB9XHJcbi8vIH1cclxuQGtleWZyYW1lcyBzY3JvbGwge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MCUpO1xyXG4gIH1cclxufVxyXG4iLCIuZm9udC1zaXplLTEycHgge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50ZXh0LWNvbG9yLW1haW4ge1xuICBjb2xvcjogdmFyKC0taGYtbWFpbi1jb2xvcik7XG59XG5cbi5pbmZvLXBhcnQtMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXBhcnQtMS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mby1wYXJ0LTEtaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNDRjIwMjg7XG59XG5cbi5ob3ctaXQtd29ya3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5ob3ctaXQtd29ya3MtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzVweDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaG93LWl0LXdvcmtzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uaG93LWl0LXdvcmtzLWltZy0yIHtcbiAgd2lkdGg6IDcxcHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuLmhvdy1pdC13b3Jrcy1pbWctMyB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5cbi5kZWFsLWFsZXJ0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRjIwMjg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kZWFsLWFsZXJ0cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnN1YnNjcmliZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRydWNrLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEwMDAvNzkxO1xufVxuXG46Om5nLWRlZXAgLnN1YnNjcmliZS13cmFwcGVyIC5oZi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKTtcbn1cblxuOjpuZy1kZWVwIC5zdWJzY3JpYmUtd3JhcHBlciAuaGYtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIDA7XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwJSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6087:
/*!**************************************************************************************!*\
  !*** ./libs/common-component/src/lib/heatfleet-header/heatfleet-header.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatfleetHeaderComponent: () => (/* binding */ HeatfleetHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);








const _c0 = a0 => ({
  "hide-menu": a0
});
function HeatfleetHeaderComponent_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_1_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.heatfleetHeaderService.iconLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_1_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.heatfleetHeaderService.fullLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeatfleetHeaderComponent_Conditional_1_Conditional_1_Conditional_0_Template, 2, 1, "div", 12)(1, HeatfleetHeaderComponent_Conditional_1_Conditional_1_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r2.appService.isApp ? 0 : 1);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.HOME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.heatfleetHeaderService.fullLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.pageMenuRedirect("heating_oil"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Heating Oil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_6_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.pageMenuRedirect("oil_companies"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Oil Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_6_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.pageMenuRedirect("heating_oil_prices"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Heating Oil Prices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_6_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.pageMenuRedirect("oil_delivery"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Oil Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Heating Oil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Oil Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Heating Oil Prices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Oil Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.HEATING_OIL);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.OIL_COMPANIES);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.HEATING_OIL_PRICES);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.OIL_DELIVERY);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_3_Template_p_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.heatfleetHeaderService.togglePageMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "HEATING OIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 17)(4, "hf-card", 9)(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_6_Template, 8, 0)(7, HeatfleetHeaderComponent_Conditional_1_Conditional_3_Conditional_7_Template, 8, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, !ctx_r2.heatfleetHeaderService.isPageMenuOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](6, ctx_r2.heatfleetHeaderService.isSecure ? 6 : 7);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_4_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.heatfleetHeaderService.nameLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.HOME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.heatfleetHeaderService.nameLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeatfleetHeaderComponent_Conditional_1_Conditional_4_Conditional_1_Template, 2, 1, "div", 22)(2, HeatfleetHeaderComponent_Conditional_1_Conditional_4_Conditional_2_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r2.heatfleetHeaderService.isSecure ? 1 : 2);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_7_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hf-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelText", "LOGIN")("buttonType", "standard")("buttonStyle", "primary")("buttonSize", "small")("routerLink", ctx_r2.urls.LOGIN);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_7_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("about"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ABOUT US");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeatfleetHeaderComponent_Conditional_1_Conditional_7_Conditional_0_Conditional_3_Template, 2, 5, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, !ctx_r2.authService.isUserLoggedIn ? 3 : -1);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeatfleetHeaderComponent_Conditional_1_Conditional_7_Conditional_0_Template, 4, 1);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, !ctx_r2.appService.isApp ? 0 : -1);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "hf-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_8_Conditional_3_Template_hf_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.secureRedirect("login"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelText", "LOGIN")("buttonType", "standard")("buttonStyle", "primary")("buttonSize", "small");
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ABOUT US");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeatfleetHeaderComponent_Conditional_1_Conditional_8_Conditional_3_Template, 2, 4, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.PAGE_ABOUT_US);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, !ctx_r2.authService.isUserLoggedIn ? 3 : -1);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.LOGIN);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_1_Conditional_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_1_Conditional_0_Template, 2, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, !ctx_r2.appService.isApp ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.ORDERS);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.USER_ACCOUNT);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("about"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_2_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("faq"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_2_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("contact"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_2_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.seoRedirect("news"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_0_Template, 2, 1, "a", 30)(1, HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_1_Template, 5, 3)(2, HeatfleetHeaderComponent_Conditional_1_Conditional_14_Conditional_2_Template, 8, 0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, !ctx_r2.authService.isUserLoggedIn ? 0 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, !ctx_r2.appService.isApp ? 2 : -1);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_0_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.secureRedirect("login"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_1_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.secureRedirect("orders"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_1_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.secureRedirect("account"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.HOME);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_0_Template, 2, 0, "p", 31)(1, HeatfleetHeaderComponent_Conditional_1_Conditional_15_Conditional_1_Template, 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, !ctx_r2.authService.isUserLoggedIn ? 0 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.PAGE_ABOUT_US);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.PAGE_FAQS);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.PAGE_CONTACT);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.urls.PAGE_NEWS);
  }
}
function HeatfleetHeaderComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "hf-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Conditional_16_Template_hf_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelText", "LOGOUT")("buttonType", "standard")("buttonStyle", "primary")("buttonSize", "small");
  }
}
function HeatfleetHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeatfleetHeaderComponent_Conditional_1_Conditional_1_Template, 2, 1)(2, HeatfleetHeaderComponent_Conditional_1_Conditional_2_Template, 2, 2)(3, HeatfleetHeaderComponent_Conditional_1_Conditional_3_Template, 8, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeatfleetHeaderComponent_Conditional_1_Conditional_4_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeatfleetHeaderComponent_Conditional_1_Conditional_7_Template, 1, 1)(8, HeatfleetHeaderComponent_Conditional_1_Conditional_8_Template, 4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeatfleetHeaderComponent_Conditional_1_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.heatfleetHeaderService.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "hf-card", 9)(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeatfleetHeaderComponent_Conditional_1_Conditional_14_Template, 3, 2)(15, HeatfleetHeaderComponent_Conditional_1_Conditional_15_Template, 10, 5)(16, HeatfleetHeaderComponent_Conditional_1_Conditional_16_Template, 1, 4, "hf-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r2.heatfleetHeaderService.isSecure ? 1 : 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, !ctx_r2.appService.isApp ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx_r2.appService.isApp ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](7, ctx_r2.heatfleetHeaderService.isSecure ? 7 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, !ctx_r2.heatfleetHeaderService.isMenuOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx_r2.heatfleetHeaderService.isSecure ? 14 : 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](16, ctx_r2.authService.isUserLoggedIn ? 16 : -1);
  }
}
class HeatfleetHeaderComponent {
  constructor(heatfleetHeaderService, cookieService, authService, appService, router) {
    this.heatfleetHeaderService = heatfleetHeaderService;
    this.cookieService = cookieService;
    this.authService = authService;
    this.appService = appService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.heatfleetHeaderService.isIntialized) {
      console.error('Heatfleet header service is not initialized at master component.');
    } else {
      this.urls = this.heatfleetHeaderService.urls;
      this.authService.checkUserIsLoggedIn();
    }
  }
  pageMenuRedirect(page) {
    if (page === 'heating_oil') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}heating_oil.html`;
    } else if (page === 'oil_companies') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}oil_companies.html`;
    } else if (page === 'heating_oil_prices') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}heating_oil_prices.html`;
    } else if (page === 'oil_delivery') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}oil_delivery.html`;
    }
  }
  seoRedirect(page) {
    if (page === 'home') {
      if (!this.appService.isApp) {
        window.location.href = `${this.heatfleetHeaderService.clientUrl}`;
      } else {
        this.router.navigate([this.urls.ROOT]);
      }
    } else if (page === 'about') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}about-us.html`;
    } else if (page === 'contact') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}contact.html`;
    } else if (page === 'faq') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}faqs.html`;
    } else if (page === 'news') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}news`;
    }
  }
  secureRedirect(page) {
    if (page === 'login') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}sign-in`;
    } else if (page === 'orders') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}orders`;
    } else if (page === 'account') {
      window.location.href = `${this.heatfleetHeaderService.clientUrl}account`;
    }
  }
  logOut() {
    this.authService.isUserLoggedIn = false;
    if (window.location.hostname != "localhost") {
      this.cookieService.deleteAll('.heatfleet.com', '/');
    } else {
      this.cookieService.deleteAll('localhost', '/');
    }
    if (!this.appService.isApp) {
      const zipCode = this.cookieService.get(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.ZIP_CODE);
      let gallons = this.cookieService.get(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.GALLONS);
      if (gallons == '') {
        gallons = '100';
      }
      if (zipCode !== '') {
        this.router.navigate([`oil-select-provider/${zipCode}/0/0/4/${gallons}`]);
      } else {
        window.location.href = this.heatfleetHeaderService.clientUrl;
      }
    } else {
      this.router.navigate(['']);
    }
  }
  static #_ = this.ɵfac = function HeatfleetHeaderComponent_Factory(t) {
    return new (t || HeatfleetHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.HeatfleetHeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeatfleetHeaderComponent,
    selectors: [["lib-heatfleet-header"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "header", "item-border"], [1, "left-menu"], [1, "page-type"], [1, "middle-menu"], [1, "right-menu"], [1, "button-wrapper"], [1, "hamburger", 3, "click"], ["src", "/assets/hamburger.svg", "alt", "hamburger menu icon"], [1, "menu", 2, "top", "64px", "right", "0px", 3, "ngClass"], [1, "modified-card", 3, "cardStyle"], [1, "menu-items"], [3, "labelText", "buttonType", "buttonStyle", "buttonSize"], [1, "logo"], [1, "logo", 3, "click"], ["alt", "heatfleet logo", "title", "HeatFleet Logo", 3, "src"], [1, "logo", "web-page-logo", 3, "routerLink"], [3, "click"], [1, "menu", 2, "top", "40px", 3, "ngClass"], [1, "menu-item", "special", 3, "click"], [1, "menu-item", 3, "click"], ["routerLinkActive", "active", 1, "menu-item", "special", 3, "routerLink"], ["routerLinkActive", "active", 1, "menu-item", 3, "routerLink"], [1, "name-logo"], [1, "name-logo", 3, "click"], [1, "name-logo", 3, "routerLink"], [1, "about", 3, "click"], [1, "login"], [1, "modified-login-button", 3, "labelText", "buttonType", "buttonStyle", "buttonSize", "routerLink"], [1, "about", 3, "routerLink"], [1, "modified-login-button", 3, "click", "labelText", "buttonType", "buttonStyle", "buttonSize"], ["routerLinkActive", "active", 1, "menu-item", "item-border", 3, "routerLink"], [1, "menu-item", "item-border"], [1, "menu-item", "item-border", 3, "click"], [3, "click", "labelText", "buttonType", "buttonStyle", "buttonSize"]],
    template: function HeatfleetHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeatfleetHeaderComponent_Conditional_1_Template, 17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx.heatfleetHeaderService.isIntialized ? 1 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent],
    styles: ["p[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\np[_ngcontent-%COMP%]:hover {\n  color: var(--hf-default-anchor-hover-color);\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n  width: 100%;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  background: var(--hf-primary-bg);\n}\n\n.left-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 20px;\n}\n\n.logo[_ngcontent-%COMP%], .name-logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.web-page-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 152.7px;\n}\n\n.name-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 160px;\n  height: 24px;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hamburger[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 24px;\n  cursor: pointer;\n}\n\n.menu[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  min-width: 200px;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.menu-items[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.hide-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.right-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 20px;\n}\n.button-wrapper[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-width: 100px;\n}\n.button-wrapper[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-decoration: none;\n  color: var(--hf-default-anchor-color);\n  cursor: pointer;\n  padding: 10px 30px;\n}\n\n.special[_ngcontent-%COMP%] {\n  padding: 10px 15px !important;\n  color: var(--hf-default-anchor-hover-color) !important;\n  font-weight: bold !important;\n  font-family: var(--font-family-bold) !important;\n}\n\n.item-border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  color: var(--hf-default-anchor-hover-color) !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--hf-default-anchor-hover-color) !important;\n}\n\n  .modified-card .hf-card {\n  padding: 0px !important;\n}\n\n  .modified-login-button .hf-button {\n  font-size: 20px;\n}\n\n.page-type[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 700px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n  .button-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL2hlYXRmbGVldC1oZWFkZXIvaGVhdGZsZWV0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL2NvbW1vbi1jb21wb25lbnQvc3JjL2xpYi9oZWF0ZmxlZXQtaGVhZGVyL2hlYXRmbGVldC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBOztFQUVJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7QUNBUjs7QURJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksNkJBQUE7RUFDQSxzREFBQTtFQUNBLDRCQUFBO0VBQ0EsK0NBQUE7QUNESjs7QURJQTtFQUNJLGtDQUFBO0FDREo7O0FESUE7RUFDSSxzREFBQTtBQ0RKOztBRElBO0VBQ0ksc0RBQUE7QUNESjs7QURJQTtFQUNJLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksa0JBQUE7RUNETjtFRElFO0lBQ0ksWUFBQTtFQ0ZOO0VES0U7SUFDSSxhQUFBO0VDSE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnA6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWRlZmF1bHQtYW5jaG9yLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1wcmltYXJ5LWJnKTtcclxufVxyXG5cclxuLmxlZnQtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dvLFxyXG4ubmFtZS1sb2dvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi53ZWItcGFnZS1sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogMTUyLjdweDtcclxufVxyXG5cclxuLm5hbWUtbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmhhbWJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIGltZyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubWVudS1pdGVtcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhpZGUtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmlnaHQtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgIC5hYm91dCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWRlZmF1bHQtYW5jaG9yLWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxufVxyXG5cclxuLnNwZWNpYWwge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtZGVmYXVsdC1hbmNob3ItaG92ZXItY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJvbGQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubWVudS1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1kZWZhdWx0LWFuY2hvci1ob3Zlci1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtZGVmYXVsdC1hbmNob3ItaG92ZXItY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kaWZpZWQtY2FyZCAuaGYtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RpZmllZC1sb2dpbi1idXR0b24gLmhmLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXR5cGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iLCJwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxucDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1oZi1kZWZhdWx0LWFuY2hvci1ob3Zlci1jb2xvcik7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhmLXByaW1hcnktYmcpO1xufVxuXG4ubGVmdC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubG9nbyxcbi5uYW1lLWxvZ28ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi53ZWItcGFnZS1sb2dvIGltZyB7XG4gIHdpZHRoOiAxNTIuN3B4O1xufVxuXG4ubmFtZS1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGFtYnVyZ2VyIGltZyB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUge1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5tZW51LWl0ZW1zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhpZGUtbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yaWdodC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuLmJ1dHRvbi13cmFwcGVyIC5hYm91dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi5idXR0b24td3JhcHBlciAubG9naW4ge1xuICB3aWR0aDogOTBweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taGYtZGVmYXVsdC1hbmNob3ItY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLnNwZWNpYWwge1xuICBwYWRkaW5nOiAxMHB4IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWhmLWRlZmF1bHQtYW5jaG9yLWhvdmVyLWNvbG9yKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYm9sZCkgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1oZi1kZWZhdWx0LWFuY2hvci1ob3Zlci1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1oZi1kZWZhdWx0LWFuY2hvci1ob3Zlci1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tb2RpZmllZC1jYXJkIC5oZi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubW9kaWZpZWQtbG9naW4tYnV0dG9uIC5oZi1idXR0b24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYWdlLXR5cGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG4gIC5sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3703:
/*!************************************************************************************************************!*\
  !*** ./libs/common-component/src/lib/secure-howitworks/email-subscription/email-subscription.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailSubscriptionComponent: () => (/* binding */ EmailSubscriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);







class EmailSubscriptionComponent {
  constructor(http, toastService) {
    this.http = http;
    this.toastService = toastService;
    this.emailKey = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.emailApiUrl = `https://demo-api.heatfleet.com/api/customer/offer/savecontactdata`;
    this.emailAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(this.emailKey), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
    this.emailAddressIM = '';
    this.emailAddressMT = '';
  }
  getEmailSubscribe() {
    if (this.emailAddress.valid) {
      this.http.post(this.emailApiUrl, {
        'email': this.emailAddress.value
      }).subscribe(data => {
        if (data) {
          console.log(data);
          this.toastService.toastMessage.next({
            title: 'Subscription done',
            msg: 'Thank You for subscribing.',
            type: 'success'
          });
          this.emailAddress.setValue(null);
        }
      });
    } else {
      if (this.emailAddress.invalid && this.emailAddress.errors) {
        this.emailAddressMT = 'error';
        if (this.emailAddress.errors['required']) {
          this.emailAddressIM = 'Email is required';
        }
        if (this.emailAddress.errors['pattern']) {
          this.emailAddressIM = 'Enter valid email';
        }
        this.isValidEmailSubscription = this.emailAddress.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.emailAddressIM = '';
            this.emailAddressMT = '';
            this.isValidEmailSubscription.unsubscribe();
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.isValidEmailSubscription) {
      this.isValidEmailSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function EmailSubscriptionComponent_Factory(t) {
    return new (t || EmailSubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EmailSubscriptionComponent,
    selectors: [["lib-email-subscription"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 3,
    consts: [[1, "price-alert-container"], [1, "price-alerts", "hf-secondary-bg"], [1, "price-alerts-title", "hf-dark-font"], [1, "font-size-12px"], ["src", "assets/secure-homeowners/price-pin.png", "alt", "truck", 1, "truck-img"], [1, "subscribe-wrapper"], ["inputLabel", "E-Mail Address", "inputPlaceholder", "dave@gmail.com", 3, "inputValue", "descriptionType", "inputDescription"], ["buttonSize", "large", "labelText", "SUBSCRIBE", 3, "click"]],
    template: function EmailSubscriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Price Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Subscribe to price alerts and well send promotion announcements directly to your inbox.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hf-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "hf-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailSubscriptionComponent_Template_hf_button_click_10_listener() {
          return ctx.getEmailSubscribe();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputValue", ctx.emailAddress)("descriptionType", ctx.emailAddressMT)("inputDescription", ctx.emailAddressIM);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent],
    styles: [".price-alert-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.price-alerts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 10px;\n}\n\n.price-alerts-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.subscribe-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.truck-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 324/139;\n}\n\n.font-size-12px[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n  .subscribe-wrapper .hf-input {\n  border-radius: var(--hf-input-border-radius) 0 0 var(--hf-input-border-radius);\n}\n\n  .subscribe-wrapper .hf-button {\n  height: 48px;\n  border-radius: 0 var(--hf-input-border-radius) var(--hf-input-border-radius) 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL3NlY3VyZS1ob3dpdHdvcmtzL2VtYWlsLXN1YnNjcmlwdGlvbi9lbWFpbC1zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy9jb21tb24tY29tcG9uZW50L3NyYy9saWIvc2VjdXJlLWhvd2l0d29ya3MvZW1haWwtc3Vic2NyaXB0aW9uL2VtYWlsLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw4RUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLDhFQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2UtYWxlcnQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucHJpY2UtYWxlcnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucHJpY2UtYWxlcnRzLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRydWNrLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYXNwZWN0LXJhdGlvOiAzMjQvMTM5O1xyXG59XHJcblxyXG4uZm9udC1zaXplLTEycHgge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdWJzY3JpYmUtd3JhcHBlciAuaGYtaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdWJzY3JpYmUtd3JhcHBlciAuaGYtYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKSB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKSAwO1xyXG59XHJcbiIsIi5wcmljZS1hbGVydC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJpY2UtYWxlcnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJpY2UtYWxlcnRzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3Vic2NyaWJlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udHJ1Y2staW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMzI0LzEzOTtcbn1cblxuLmZvbnQtc2l6ZS0xMnB4IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLnN1YnNjcmliZS13cmFwcGVyIC5oZi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKTtcbn1cblxuOjpuZy1kZWVwIC5zdWJzY3JpYmUtd3JhcHBlciAuaGYtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIHZhcigtLWhmLWlucHV0LWJvcmRlci1yYWRpdXMpIDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8253:
/*!************************************************************************************************!*\
  !*** ./libs/common-component/src/lib/secure-howitworks/how-it-works/how-it-works.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowItWorksComponent: () => (/* binding */ HowItWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class HowItWorksComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  static #_ = this.ɵfac = function HowItWorksComponent_Factory(t) {
    return new (t || HowItWorksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HowItWorksComponent,
    selectors: [["lib-how-it-works"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 55,
    vars: 0,
    consts: [[1, "how-it-works", "text-color-main"], [1, "how-it-works-content"], [1, "hf-main-color"], [1, "hf-dark-font"], ["src", "assets/secure-homeowners/arrow-right.svg", "alt", "arrow right icon"], [1, "how-it-works-card"], ["src", "https://media-cdn.heatingoilfinder.com/Dollar.png", "alt", "how-it-works-1", 1, "how-it-works-img"], [1, "hf-dark-font", "hf-heading-3", "hf-main-color"], [1, "font-size-12px", "hf-main-color"], ["src", "https://media-cdn.heatingoilfinder.com/Flash-Sale.png", "alt", "how-it-works-2", 1, "how-it-works-img"], ["src", "https://media-cdn.heatingoilfinder.com/Paypal.png", "alt", "how-it-works-3", 1, "how-it-works-img"]],
    template: function HowItWorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Why homeowners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "choose Heat Fleet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Check today\u2019s price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter your ZIP code and order quantity for a real-time quote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Flash Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save even more when you let Heat Fleet pick your provider. Provider revealed in confirmation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u201CPay-In-4\u201D Interest-Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "With PayPal \u201CPay-In-4,\u201D pay for your order in 4 interest-free payments to help you manage your finances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1)(29, "h3", 2)(30, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Why homeowners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "choose Heat Fleet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Check today\u2019s price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Enter your ZIP code and order quantity for a real-time quote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Flash Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Save even more when you let Heat Fleet pick your provider. Provider revealed in confirmation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u201CPay-In-4\u201D Interest-Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "With PayPal \u201CPay-In-4,\u201D pay for your order in 4 interest-free payments to help you manage your finances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".how-it-works[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 24px;\n  overflow: hidden;\n  background: #F5F5F5;\n  display: flex;\n  gap: 24px;\n}\n\n.how-it-works-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  animation: _ngcontent-%COMP%_scroll 15s ease-in-out infinite;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.how-it-works-card[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 230px;\n  align-items: center;\n  gap: 8px;\n  min-width: 200px;\n}\n\n.how-it-works-img[_ngcontent-%COMP%] {\n  width: 139px;\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(calc(-100% - 24px));\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL3NlY3VyZS1ob3dpdHdvcmtzL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy9jb21tb24tY29tcG9uZW50L3NyYy9saWIvc2VjdXJlLWhvd2l0d29ya3MvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSx3QkFBQTtFQ0NGO0VERUE7SUFDRSx5Q0FBQTtFQ0FGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG93LWl0LXdvcmtzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5ob3ctaXQtd29ya3MtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxuICBhbmltYXRpb246IHNjcm9sbCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5ob3ctaXQtd29ya3MtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmhvdy1pdC13b3Jrcy1pbWcge1xyXG4gIHdpZHRoOiAxMzlweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY3JvbGwge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgLSAyNHB4KSk7XHJcbiAgfVxyXG59XHJcbiIsIi5ob3ctaXQtd29ya3Mge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjRweDtcbn1cblxuLmhvdy1pdC13b3Jrcy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xuICBhbmltYXRpb246IHNjcm9sbCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaG93LWl0LXdvcmtzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmhvdy1pdC13b3Jrcy1pbWcge1xuICB3aWR0aDogMTM5cHg7XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSAtIDI0cHgpKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5805:
/*!**************************************************************************************!*\
  !*** ./libs/common-component/src/lib/secure-howitworks/message/message.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageComponent: () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class MessageComponent {
  static #_ = this.ɵfac = function MessageComponent_Factory(t) {
    return new (t || MessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MessageComponent,
    selectors: [["lib-message"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 0,
    consts: [[1, "message-wrapper"], [1, "message-row"], [1, "display-center"], ["src", "assets/secure-homeowners/secure-hf-logo.svg", "alt", "heatfleet-logo", 1, "hf-logo"], [1, "content-wrapper"], [1, "list-wrapper"], [1, "hf-dark-font", "hf-dark-grey-text-color"], [1, "list-item"], ["src", "assets/secure-homeowners/success-check.svg", "alt", "success-check", 1, "check-img"], [1, "font-size-14px", "hf-dark-grey-text-color"], [1, "font-size-12px"], ["src", "assets/secure-homeowners/kx-EMA-Heating-OIl-Logo.svg", "alt", "ema-logo", 1, "ema-logo"]],
    template: function MessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Let Heat Fleet do the searching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Trusted local providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "On-time delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quality Oil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Secure ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1)(25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Heat Fleet is a proud member of national and regional trade associations such as the Energy Marketers of America. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  padding: 20px;\n}\n\n.message-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 28px;\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.check-img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.ema-logo[_ngcontent-%COMP%] {\n  width: 109px;\n  aspect-ratio: 22/15;\n}\n\n.hf-logo[_ngcontent-%COMP%] {\n  width: 84px;\n  aspect-ratio: 85/74;\n}\n\n.font-size-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.font-size-12px[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.display-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL3NlY3VyZS1ob3dpdHdvcmtzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL2NvbW1vbi1jb21wb25lbnQvc3JjL2xpYi9zZWN1cmUtaG93aXR3b3Jrcy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUYiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjhweDtcclxufVxyXG5cclxuLmxpc3Qtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uY2hlY2staW1nIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5lbWEtbG9nbyB7XHJcbiAgd2lkdGg6IDEwOXB4O1xyXG4gIGFzcGVjdC1yYXRpbzogMjIvMTU7XHJcbn1cclxuXHJcbi5oZi1sb2dvIHtcclxuICB3aWR0aDogODRweDtcclxuICBhc3BlY3QtcmF0aW86IDg1Lzc0O1xyXG59XHJcblxyXG4uZm9udC1zaXplLTE0cHgge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZvbnQtc2l6ZS0xMnB4IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsIi5tZXNzYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tZXNzYWdlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI4cHg7XG59XG5cbi5saXN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uY2hlY2staW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmVtYS1sb2dvIHtcbiAgd2lkdGg6IDEwOXB4O1xuICBhc3BlY3QtcmF0aW86IDIyLzE1O1xufVxuXG4uaGYtbG9nbyB7XG4gIHdpZHRoOiA4NHB4O1xuICBhc3BlY3QtcmF0aW86IDg1Lzc0O1xufVxuXG4uZm9udC1zaXplLTE0cHgge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb250LXNpemUtMTJweCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpc3BsYXktY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9165:
/*!****************************************************************************************!*\
  !*** ./libs/common-component/src/lib/secure-howitworks/secure-howitworks.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureHowitworksComponent: () => (/* binding */ SecureHowitworksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _email_subscription_email_subscription_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-subscription/email-subscription.component */ 3703);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/message.component */ 5805);
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ 8253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class SecureHowitworksComponent {
  static #_ = this.ɵfac = function SecureHowitworksComponent_Factory(t) {
    return new (t || SecureHowitworksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SecureHowitworksComponent,
    selectors: [["lib-secure-howitworks"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    consts: [[1, "secure-container", "hf-primary-bg"]],
    template: function SecureHowitworksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "lib-message")(2, "lib-how-it-works")(3, "lib-email-subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _email_subscription_email_subscription_component__WEBPACK_IMPORTED_MODULE_0__.EmailSubscriptionComponent, _message_message_component__WEBPACK_IMPORTED_MODULE_1__.MessageComponent, _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_2__.HowItWorksComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 709:
/*!************************************************************************************************************!*\
  !*** ./libs/common-component/src/lib/smarttouchenergy-howitworks/smarttouchenergy-howitworks.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmarttouchenergyHowitworksComponent: () => (/* binding */ SmarttouchenergyHowitworksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class SmarttouchenergyHowitworksComponent {
  static #_ = this.ɵfac = function SmarttouchenergyHowitworksComponent_Factory(t) {
    return new (t || SmarttouchenergyHowitworksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SmarttouchenergyHowitworksComponent,
    selectors: [["lib-smarttouchenergy-howitworks"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 52,
    vars: 0,
    consts: [[1, "how-it-works-container"], [1, "how-it-works", "hf-white-text-color", "hf-body-1"], [1, "text-align-center", "hf-heading-3"], [1, "how-it-works-content-wrapper", "text-align-center"], [1, "card", "enter-zip"], ["src", "https://media-cdn.heatingoilfinder.com/how-it-works-1.jpg", "alt", "how-it-works-1", 1, "how-it-works-img"], [1, "hf-heading-5"], [1, "card", "choose_delivery_options"], ["src", "https://media-cdn.heatingoilfinder.com/how-it-works-2.jpg", "alt", "how-it-works-2", 1, "how-it-works-img"], [1, "card", "place_order"], ["src", "https://media-cdn.heatingoilfinder.com/how-it-works-3.jpg", "alt", "how-it-works-3", 1, "how-it-works-img"], [1, "why-choose-hf-container"], [1, "why-choose-hf", "hf-white-text-color", "hf-body-1"], [1, "why-choose-hf-content-wrapper", "text-align-center"], [1, "card", "easy-ordering"], ["src", "assets/color-wand-sharp.svg", "alt", "color-wand-sharp", 1, "why-choose-hf-img"], [1, "card", "quick-delivery"], ["src", "assets/time-sharp.svg", "alt", "time-sharp", 1, "why-choose-hf-img"], [1, "card", "reliable-service"], ["src", "assets/ribbon-sharp.svg", "alt", "ribbon-sharp", 1, "why-choose-hf-img"], [1, "card", "save-money"], ["src", "assets/cash-sharp.svg", "alt", "cash-sharp", 1, "why-choose-hf-img"]],
    template: function SmarttouchenergyHowitworksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 1. Enter your zip code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Check for service availability and view the best pricing from the most reputable dealers in your area. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 2. Choose delivery options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Choose from our One Time or Automatic delivery options, as well as high quality equipment service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 3. Place your order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Securely place your order and our trusted dealer in your area will make the heating oil delivery within 3 business days*. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div", 12)(25, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Why choose Smart Touch Energy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Easy ordering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Check local heating oil prices and order from the comfort of your home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Quick delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Enjoy quick heating oil delivery from a local home heating oil company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Reliable service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Trust our reliable home heating oil delivery and service from reputable local dealers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Save money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Online efficiency allows you to buy oil at our everyday low prices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".how-it-works-container[_ngcontent-%COMP%] {\n  background-color: var(--hf-main-color);\n}\n\n.why-choose-hf-container[_ngcontent-%COMP%] {\n  background-color: var(--hf-success-bg);\n}\n\n.how-it-works[_ngcontent-%COMP%], .why-choose-hf[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: auto;\n  padding: 40px 0;\n}\n\n.how-it-works-content-wrapper[_ngcontent-%COMP%], .why-choose-hf-content-wrapper[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  row-gap: 30px;\n}\n\n.how-it-works-content-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.why-choose-hf-content-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n\n.how-it-works-img[_ngcontent-%COMP%] {\n  width: 180px;\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n}\n\n.why-choose-hf-img[_ngcontent-%COMP%] {\n  width: 42px;\n  aspect-ratio: 1/1;\n  fill: white;\n}\n\n.hf-heading-5[_ngcontent-%COMP%] {\n  padding: 20px 0 10px;\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (max-width: 767px) {\n  .how-it-works-content-wrapper[_ngcontent-%COMP%], .why-choose-hf-content-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29tbW9uLWNvbXBvbmVudC9zcmMvbGliL3NtYXJ0dG91Y2hlbmVyZ3ktaG93aXR3b3Jrcy9zbWFydHRvdWNoZW5lcmd5LWhvd2l0d29ya3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy9jb21tb24tY29tcG9uZW50L3NyYy9saWIvc21hcnR0b3VjaGVuZXJneS1ob3dpdHdvcmtzL3NtYXJ0dG91Y2hlbmVyZ3ktaG93aXR3b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBOztFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFFRTs7SUFFRSwyQkFBQTtFQ0FGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG93LWl0LXdvcmtzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi53aHktY2hvb3NlLWhmLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VjY2Vzcy1iZyk7XHJcbn1cclxuXHJcbi5ob3ctaXQtd29ya3MsXHJcbi53aHktY2hvb3NlLWhmIHtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWNvbnRlbnQtd3JhcHBlcixcclxuLndoeS1jaG9vc2UtaGYtY29udGVudC13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHJvdy1nYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5ob3ctaXQtd29ya3MtY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbn1cclxuXHJcbi53aHktY2hvb3NlLWhmLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWltZyB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLndoeS1jaG9vc2UtaGYtaW1nIHtcclxuICB3aWR0aDogNDJweDtcclxuICBhc3BlY3QtcmF0aW86IDEvMTtcclxuICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuLmhmLWhlYWRpbmctNSB7XHJcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLmhvdy1pdC13b3Jrcy1jb250ZW50LXdyYXBwZXIsXHJcbiAgLndoeS1jaG9vc2UtaGYtY29udGVudC13cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLmhvdy1pdC13b3Jrcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1tYWluLWNvbG9yKTtcbn1cblxuLndoeS1jaG9vc2UtaGYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VjY2Vzcy1iZyk7XG59XG5cbi5ob3ctaXQtd29ya3MsXG4ud2h5LWNob29zZS1oZiB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cblxuLmhvdy1pdC13b3Jrcy1jb250ZW50LXdyYXBwZXIsXG4ud2h5LWNob29zZS1oZi1jb250ZW50LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uaG93LWl0LXdvcmtzLWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG5cbi53aHktY2hvb3NlLWhmLWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaG93LWl0LXdvcmtzLWltZyB7XG4gIHdpZHRoOiAxODBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLndoeS1jaG9vc2UtaGYtaW1nIHtcbiAgd2lkdGg6IDQycHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLmhmLWhlYWRpbmctNSB7XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xufVxuXG4udGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaG93LWl0LXdvcmtzLWNvbnRlbnQtd3JhcHBlcixcbiAgLndoeS1jaG9vc2UtaGYtY29udGVudC13cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8837:
/*!*****************************************************************!*\
  !*** ./libs/ui/src/components/hf-button/hf-button.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfButtonComponent: () => (/* binding */ HfButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = ["*"];
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({
  "hf-button-large hf-button-text-extralarge": a0,
  "hf-button-large hf-button-text-large": a1,
  "hf-button-medium hf-button-text-medium": a2,
  "hf-button-small hf-button-text-small": a3,
  "hf-button-extrasmall hf-button-text-extrasmall": a4,
  "hf-button-primary": a5,
  "hf-button-primary-click": a6,
  "hf-button-secondary": a7,
  "hf-button-secondary-click": a8,
  "hf-button-tertiary": a9,
  "hf-button-tertiary-click": a10,
  "hf-custom-padding": a11,
  "hf-icononly": a12,
  "hf-danger-button": a13
});
function HfButtonComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.gtmId)("src", ctx_r0.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.iconAlt)("title", ctx_r0.iconTitle);
  }
}
function HfButtonComponent_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.gtmId)("src", ctx_r0.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.iconAlt)("title", ctx_r0.iconTitle);
  }
}
function HfButtonComponent_Conditional_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.gtmId)("src", ctx_r0.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.iconAlt)("title", ctx_r0.iconTitle);
  }
}
function HfButtonComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HfButtonComponent_Conditional_1_Conditional_1_Conditional_0_Template, 1, 4, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HfButtonComponent_Conditional_1_Conditional_1_Conditional_3_Template, 1, 4, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r0.iconStyle === "iconleft" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.gtmId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.labelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, ctx_r0.iconStyle === "iconright" ? 3 : -1);
  }
}
function HfButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HfButtonComponent_Conditional_1_Conditional_0_Template, 1, 4, "img", 1)(1, HfButtonComponent_Conditional_1_Conditional_1_Template, 4, 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r0.buttonType === "icononly" ? 0 : 1);
  }
}
function HfButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class HfButtonComponent {
  constructor() {
    this.type = 'button';
    this.buttonLabelType = 'text';
    this.labelText = 'Button';
    this.buttonType = 'standard';
    this.buttonStyle = 'primary';
    this.buttonSize = 'extralarge';
    this.iconUrl = '';
    this.iconAlt = '';
    this.iconTitle = '';
    this.iconStyle = 'noicon';
    this.gtmId = '';
    this.isDisabled = false;
    this.colorTheme = 'info';
    this.isClicked = false;
  }
  static #_ = this.ɵfac = function HfButtonComponent_Factory(t) {
    return new (t || HfButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfButtonComponent,
    selectors: [["hf-button"]],
    inputs: {
      type: "type",
      buttonLabelType: "buttonLabelType",
      labelText: "labelText",
      buttonType: "buttonType",
      buttonStyle: "buttonStyle",
      buttonSize: "buttonSize",
      iconUrl: "iconUrl",
      iconAlt: "iconAlt",
      iconTitle: "iconTitle",
      iconStyle: "iconStyle",
      gtmId: "gtmId",
      isDisabled: "isDisabled",
      colorTheme: "colorTheme"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 20,
    consts: [[1, "hf-button", 3, "click", "type", "id", "disabled", "ngClass"], [3, "id", "src", "alt", "title"], [1, "iconleft", 3, "id", "src", "alt", "title"], [1, "hf-dark-font", 3, "id"], [1, "iconright", 3, "id", "src", "alt", "title"]],
    template: function HfButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HfButtonComponent_Template_button_click_0_listener() {
          return ctx.isClicked = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfButtonComponent_Conditional_1_Template, 2, 1)(2, HfButtonComponent_Conditional_2_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("id", ctx.gtmId)("disabled", ctx.isDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](5, _c1, [ctx.buttonSize === "extralarge", ctx.buttonSize === "large", ctx.buttonSize === "medium", ctx.buttonSize === "small", ctx.buttonSize === "extrasmall", ctx.buttonStyle === "primary", ctx.isClicked === true && ctx.buttonStyle === "primary", ctx.buttonStyle === "secondary", ctx.isClicked === true && ctx.buttonStyle === "secondary", ctx.buttonStyle === "tertiary", ctx.isClicked === true && ctx.buttonStyle === "tertiary", ctx.buttonLabelType === "custom", ctx.buttonType === "icononly", ctx.colorTheme === "danger"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.buttonLabelType === "text" ? 1 : 2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".hf-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  width: 100%;\n  border-radius: var(--hf-button-border-radius);\n  cursor: pointer;\n}\n\n.iconleft[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.iconright[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.hf-custom-padding[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\n.hf-button-extralarge.hf-button-primary[_ngcontent-%COMP%] {\n  padding: 20px 32px;\n}\n.hf-button-extralarge.hf-button-primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-large.hf-button-primary[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n}\n.hf-button-large.hf-button-primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-medium.hf-button-primary[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n}\n.hf-button-medium.hf-button-primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-small.hf-button-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n}\n.hf-button-small.hf-button-primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-extrasmall.hf-button-primary[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n}\n.hf-button-extrasmall.hf-button-primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-extralarge.hf-button-secondary[_ngcontent-%COMP%] {\n  padding: 19px 32px;\n}\n.hf-button-extralarge.hf-button-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-large.hf-button-secondary[_ngcontent-%COMP%] {\n  padding: 15px 32px;\n}\n.hf-button-large.hf-button-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-medium.hf-button-secondary[_ngcontent-%COMP%] {\n  padding: 13px 32px;\n}\n.hf-button-medium.hf-button-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-small.hf-button-secondary[_ngcontent-%COMP%] {\n  padding: 11px 24px;\n}\n.hf-button-small.hf-button-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-extrasmall.hf-button-secondary[_ngcontent-%COMP%] {\n  padding: 7px 24px;\n}\n.hf-button-extrasmall.hf-button-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-extralarge.hf-icononly[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.hf-button-extralarge.hf-icononly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-large.hf-icononly[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.hf-button-large.hf-icononly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-medium.hf-icononly[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.hf-button-medium.hf-icononly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-small.hf-icononly[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.hf-button-small.hf-icononly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-button-extrasmall.hf-icononly[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.hf-button-extrasmall.hf-icononly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-button-primary[_ngcontent-%COMP%] {\n  background-color: var(--hf-button-primary-bg-default);\n  color: var(--hf-button-primary-text-default);\n  border: none;\n}\n\n.hf-button-primary[_ngcontent-%COMP%]:hover {\n  background-color: var(--hf-button-primary-bg-hover);\n  color: var(--hf-button-primary-text-hover);\n  border: none;\n}\n\n.hf-button-primary[_ngcontent-%COMP%]:focus {\n  background-color: var(--hf-button-primary-bg-focused);\n  color: var(--hf-button-primary-text-focused);\n  outline: var(--hf-button-border-width) solid var(--hf-button-primary-stroke-focused);\n}\n\n.hf-button-primary[_ngcontent-%COMP%]:active {\n  background-color: var(--hf-button-primary-bg-active);\n  color: var(--hf-button-primary-text-active);\n  border: none;\n}\n\n.hf-button-primary[_ngcontent-%COMP%]:disabled {\n  background-color: var(--hf-button-primary-bg-disable);\n  color: var(--hf-button-primary-text-disable);\n  border: none;\n  cursor: not-allowed;\n}\n\n.hf-button-secondary[_ngcontent-%COMP%] {\n  background-color: var(--hf-button-secondary-bg-default);\n  color: var(--hf-button-secondary-text-default);\n  border: var(--hf-button-border-width) solid var(--hf-button-secondary-stroke-default);\n}\n\n.hf-button-secondary[_ngcontent-%COMP%]:focus {\n  background-color: var(--hf-button-secondary-bg-focused);\n  color: var(--hf-button-secondary-text-focused);\n  border: var(--hf-button-border-width) solid var(--hf-button-secondary-stroke-focused);\n}\n\n.hf-button-secondary[_ngcontent-%COMP%]:active {\n  background-color: var(--hf-button-secondary-bg-active);\n  color: var(--hf-button-secondary-text-active);\n  border: var(--hf-button-border-width) solid var(--hf-button-secondary-stroke-active);\n}\n\n.hf-button-secondary[_ngcontent-%COMP%]:disabled {\n  background-color: var(--hf-button-secondary-bg-disable);\n  color: var(--hf-button-secondary-text-disable);\n  border: 0px;\n  cursor: not-allowed;\n}\n\n.hf-button-secondary[_ngcontent-%COMP%]:hover {\n  background-color: var(--hf-button-secondary-bg-hover);\n  color: var(--hf-button-secondary-text-hover);\n  border: var(--hf-button-border-width) solid var(--hf-button-secondary-stroke-hover);\n}\n\n.hf-button-tertiary[_ngcontent-%COMP%] {\n  background-color: var(--hf-button-tertiary-bg-default);\n  color: var(--hf-button-tertiary-text-default);\n  border: 0px;\n}\n\n.hf-button-tertiary[_ngcontent-%COMP%]:hover {\n  background-color: var(--hf-button-tertiary-bg-hover);\n  color: var(--hf-button-tertiary-text-hover);\n  border: 0px;\n}\n\n.hf-button-tertiary[_ngcontent-%COMP%]:active {\n  background-color: var(--hf-button-tertiary-bg-active);\n  color: var(--hf-button-tertiary-text-active);\n  border: 0px;\n}\n\n.hf-button-tertiary[_ngcontent-%COMP%]:focus {\n  background-color: var(--hf-button-tertiary-bg-focused);\n  color: var(--hf-button-tertiary-text-focused);\n  outline: var(--hf-button-border-width) solid var(--hf-button-tertiary-stroke-focused);\n}\n\n.hf-button-tertiary[_ngcontent-%COMP%]:disabled {\n  background-color: var(--hf-button-tertiary-bg-disable);\n  color: var(--hf-button-tertiary-text-disable);\n  border: 0px;\n  cursor: not-allowed;\n}\n\n.hf-danger-button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--hf-danger-button-color);\n  border: var(--hf-button-border-width) solid var(--hf-danger-button-color);\n}\n\n.hf-danger-button[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n  color: var(--hf-danger-button-color);\n  border: var(--hf-button-border-width) solid var(--hf-danger-button-color);\n}\n\n.hf-danger-button[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: var(--hf-danger-button-color);\n  border: var(--hf-button-border-width) solid var(--hf-danger-button-color);\n}\n\n.hf-danger-button[_ngcontent-%COMP%]:disabled {\n  background-color: transparent;\n  color: var(--hf-danger-button-color);\n  border: 0px;\n  cursor: not-allowed;\n}\n\n.hf-danger-button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: var(--hf-danger-button-color);\n  border: var(--hf-button-border-width) solid var(--hf-danger-button-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtYnV0dG9uL2hmLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL3VpL3NyYy9jb21wb25lbnRzL2hmLWJ1dHRvbi9oZi1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RSOztBREtBO0VBQ0ksa0JBQUE7QUNGSjtBRElJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGUjs7QURNQTtFQUNJLGlCQUFBO0FDSEo7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSFI7O0FET0E7RUFDSSxrQkFBQTtBQ0pKO0FETUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0pSOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRE9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNMUjs7QURTQTtFQUNJLGtCQUFBO0FDTko7QURRSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTlI7O0FEVUE7RUFDSSxrQkFBQTtBQ1BKO0FEU0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRFdBO0VBQ0ksaUJBQUE7QUNSSjtBRFVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNSUjs7QURZQTtFQUNJLGFBQUE7QUNUSjtBRFdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNUUjs7QURhQTtFQUNJLGFBQUE7QUNWSjtBRFlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNWUjs7QURjQTtFQUNJLGFBQUE7QUNYSjtBRGFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNYUjs7QURlQTtFQUNJLFlBQUE7QUNaSjtBRGNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNaUjs7QURnQkE7RUFDSSxZQUFBO0FDYko7QURlSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDYlI7O0FEaUJBO0VBQ0kscURBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkE7RUFDSSxtREFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQ2RKOztBRGlCQTtFQUNJLHFEQUFBO0VBQ0EsNENBQUE7RUFDQSxvRkFBQTtBQ2RKOztBRGlCQTtFQUNJLG9EQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FDZEo7O0FEaUJBO0VBQ0kscURBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2RKOztBRHVCQTtFQUNJLHVEQUFBO0VBQ0EsOENBQUE7RUFDQSxxRkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSx1REFBQTtFQUNBLDhDQUFBO0VBQ0EscUZBQUE7QUNwQko7O0FEdUJBO0VBQ0ksc0RBQUE7RUFDQSw2Q0FBQTtFQUNBLG9GQUFBO0FDcEJKOztBRHVCQTtFQUNJLHVEQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNwQko7O0FEdUJBO0VBQ0kscURBQUE7RUFDQSw0Q0FBQTtFQUNBLG1GQUFBO0FDcEJKOztBRDRCQTtFQUNJLHNEQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0FDekJKOztBRDRCQTtFQUNJLG9EQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0FDekJKOztBRDRCQTtFQUNJLHFEQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0FDekJKOztBRDRCQTtFQUNJLHNEQUFBO0VBQ0EsNkNBQUE7RUFDQSxxRkFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxzREFBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDekJKOztBRGtDQTtFQUNJLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5RUFBQTtBQy9CSjs7QURrQ0E7RUFDSSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUVBQUE7QUMvQko7O0FEa0NBO0VBQ0ksNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlFQUFBO0FDL0JKOztBRGtDQTtFQUNJLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUMvQko7O0FEa0NBO0VBQ0ksNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlFQUFBO0FDL0JKIiwic291cmNlc0NvbnRlbnQiOlsiLmhmLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGYtYnV0dG9uLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbmxlZnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5pY29ucmlnaHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmhmLWN1c3RvbS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uaGYtYnV0dG9uLWV4dHJhbGFyZ2UuaGYtYnV0dG9uLXByaW1hcnkge1xyXG4gICAgcGFkZGluZzogMjBweCAzMnB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGYtYnV0dG9uLWxhcmdlLmhmLWJ1dHRvbi1wcmltYXJ5IHtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhmLWJ1dHRvbi1tZWRpdW0uaGYtYnV0dG9uLXByaW1hcnkge1xyXG4gICAgcGFkZGluZzogMTRweCAzMnB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGYtYnV0dG9uLXNtYWxsLmhmLWJ1dHRvbi1wcmltYXJ5IHtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhmLWJ1dHRvbi1leHRyYXNtYWxsLmhmLWJ1dHRvbi1wcmltYXJ5IHtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGYtYnV0dG9uLWV4dHJhbGFyZ2UuaGYtYnV0dG9uLXNlY29uZGFyeSB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDMycHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZi1idXR0b24tbGFyZ2UuaGYtYnV0dG9uLXNlY29uZGFyeSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZi1idXR0b24tbWVkaXVtLmhmLWJ1dHRvbi1zZWNvbmRhcnkge1xyXG4gICAgcGFkZGluZzogMTNweCAzMnB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGYtYnV0dG9uLXNtYWxsLmhmLWJ1dHRvbi1zZWNvbmRhcnkge1xyXG4gICAgcGFkZGluZzogMTFweCAyNHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGYtYnV0dG9uLWV4dHJhc21hbGwuaGYtYnV0dG9uLXNlY29uZGFyeSB7XHJcbiAgICBwYWRkaW5nOiA3cHggMjRweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhmLWJ1dHRvbi1leHRyYWxhcmdlLmhmLWljb25vbmx5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZi1idXR0b24tbGFyZ2UuaGYtaWNvbm9ubHkge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhmLWJ1dHRvbi1tZWRpdW0uaGYtaWNvbm9ubHkge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhmLWJ1dHRvbi1zbWFsbC5oZi1pY29ub25seSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZi1idXR0b24tZXh0cmFzbWFsbC5oZi1pY29ub25seSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZi1idXR0b24tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tcHJpbWFyeS1iZy1kZWZhdWx0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tcHJpbWFyeS10ZXh0LWRlZmF1bHQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaGYtYnV0dG9uLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctaG92ZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtaG92ZXIpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaGYtYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctZm9jdXNlZCk7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktdGV4dC1mb2N1c2VkKTtcclxuICAgIG91dGxpbmU6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXN0cm9rZS1mb2N1c2VkKTtcclxufVxyXG5cclxuLmhmLWJ1dHRvbi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tcHJpbWFyeS1iZy1hY3RpdmUpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtYWN0aXZlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhmLWJ1dHRvbi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LWJnLWRpc2FibGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtZGlzYWJsZSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vLyAuaGYtYnV0dG9uLXByaW1hcnktY2xpY2sge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctY2xpY2spO1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtY2xpY2spO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcblxyXG4uaGYtYnV0dG9uLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LWJnLWRlZmF1bHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1kZWZhdWx0KTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1zdHJva2UtZGVmYXVsdCk7XHJcbn1cclxuXHJcbi5oZi1idXR0b24tc2Vjb25kYXJ5OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktYmctZm9jdXNlZCk7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS10ZXh0LWZvY3VzZWQpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1oZi1idXR0b24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LXN0cm9rZS1mb2N1c2VkKTtcclxufVxyXG5cclxuLmhmLWJ1dHRvbi1zZWNvbmRhcnk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktYmctYWN0aXZlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LXRleHQtYWN0aXZlKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1zdHJva2UtYWN0aXZlKTtcclxufVxyXG5cclxuLmhmLWJ1dHRvbi1zZWNvbmRhcnk6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1iZy1kaXNhYmxlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LXRleHQtZGlzYWJsZSk7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5oZi1idXR0b24tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktYmctaG92ZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1ob3Zlcik7XHJcbiAgICBib3JkZXI6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktc3Ryb2tlLWhvdmVyKTtcclxufVxyXG5cclxuLy8gLmhmLWJ1dHRvbi1zZWNvbmRhcnktY2xpY2sge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1iZy1jbGljayk7XHJcbi8vICAgICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS10ZXh0LWNsaWNrKTtcclxuLy8gfVxyXG5cclxuLmhmLWJ1dHRvbi10ZXJ0aWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktYmctZGVmYXVsdCk7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LXRleHQtZGVmYXVsdCk7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmhmLWJ1dHRvbi10ZXJ0aWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktYmctaG92ZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS10ZXh0LWhvdmVyKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4uaGYtYnV0dG9uLXRlcnRpYXJ5OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktYmctYWN0aXZlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktdGV4dC1hY3RpdmUpO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi5oZi1idXR0b24tdGVydGlhcnk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LWJnLWZvY3VzZWQpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS10ZXh0LWZvY3VzZWQpO1xyXG4gICAgb3V0bGluZTogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LXN0cm9rZS1mb2N1c2VkKTtcclxufVxyXG5cclxuLmhmLWJ1dHRvbi10ZXJ0aWFyeTpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktYmctZGlzYWJsZSk7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LXRleHQtZGlzYWJsZSk7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi8vIC5oZi1idXR0b24tdGVydGlhcnktY2xpY2sge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LWJnLWNsaWNrKTtcclxuLy8gICAgIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktdGV4dC1jbGljayk7XHJcbi8vICAgICBib3JkZXI6IDBweDtcclxuLy8gfVxyXG5cclxuLmhmLWRhbmdlci1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXI6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWRhbmdlci1idXR0b24tY29sb3IpO1xyXG59XHJcblxyXG4uaGYtZGFuZ2VyLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1kYW5nZXItYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5oZi1kYW5nZXItYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1kYW5nZXItYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5oZi1kYW5nZXItYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWRhbmdlci1idXR0b24tY29sb3IpO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uaGYtZGFuZ2VyLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1kYW5nZXItYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XHJcbn0iLCIuaGYtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1idXR0b24tYm9yZGVyLXJhZGl1cyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5pY29ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaGYtY3VzdG9tLXBhZGRpbmcge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLmhmLWJ1dHRvbi1leHRyYWxhcmdlLmhmLWJ1dHRvbi1wcmltYXJ5IHtcbiAgcGFkZGluZzogMjBweCAzMnB4O1xufVxuLmhmLWJ1dHRvbi1leHRyYWxhcmdlLmhmLWJ1dHRvbi1wcmltYXJ5IGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5oZi1idXR0b24tbGFyZ2UuaGYtYnV0dG9uLXByaW1hcnkge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG59XG4uaGYtYnV0dG9uLWxhcmdlLmhmLWJ1dHRvbi1wcmltYXJ5IGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5oZi1idXR0b24tbWVkaXVtLmhmLWJ1dHRvbi1wcmltYXJ5IHtcbiAgcGFkZGluZzogMTRweCAzMnB4O1xufVxuLmhmLWJ1dHRvbi1tZWRpdW0uaGYtYnV0dG9uLXByaW1hcnkgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmhmLWJ1dHRvbi1zbWFsbC5oZi1idXR0b24tcHJpbWFyeSB7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbi5oZi1idXR0b24tc21hbGwuaGYtYnV0dG9uLXByaW1hcnkgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmhmLWJ1dHRvbi1leHRyYXNtYWxsLmhmLWJ1dHRvbi1wcmltYXJ5IHtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG59XG4uaGYtYnV0dG9uLWV4dHJhc21hbGwuaGYtYnV0dG9uLXByaW1hcnkgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmhmLWJ1dHRvbi1leHRyYWxhcmdlLmhmLWJ1dHRvbi1zZWNvbmRhcnkge1xuICBwYWRkaW5nOiAxOXB4IDMycHg7XG59XG4uaGYtYnV0dG9uLWV4dHJhbGFyZ2UuaGYtYnV0dG9uLXNlY29uZGFyeSBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaGYtYnV0dG9uLWxhcmdlLmhmLWJ1dHRvbi1zZWNvbmRhcnkge1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG59XG4uaGYtYnV0dG9uLWxhcmdlLmhmLWJ1dHRvbi1zZWNvbmRhcnkgaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmhmLWJ1dHRvbi1tZWRpdW0uaGYtYnV0dG9uLXNlY29uZGFyeSB7XG4gIHBhZGRpbmc6IDEzcHggMzJweDtcbn1cbi5oZi1idXR0b24tbWVkaXVtLmhmLWJ1dHRvbi1zZWNvbmRhcnkgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmhmLWJ1dHRvbi1zbWFsbC5oZi1idXR0b24tc2Vjb25kYXJ5IHtcbiAgcGFkZGluZzogMTFweCAyNHB4O1xufVxuLmhmLWJ1dHRvbi1zbWFsbC5oZi1idXR0b24tc2Vjb25kYXJ5IGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5oZi1idXR0b24tZXh0cmFzbWFsbC5oZi1idXR0b24tc2Vjb25kYXJ5IHtcbiAgcGFkZGluZzogN3B4IDI0cHg7XG59XG4uaGYtYnV0dG9uLWV4dHJhc21hbGwuaGYtYnV0dG9uLXNlY29uZGFyeSBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uaGYtYnV0dG9uLWV4dHJhbGFyZ2UuaGYtaWNvbm9ubHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmhmLWJ1dHRvbi1leHRyYWxhcmdlLmhmLWljb25vbmx5IGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5oZi1idXR0b24tbGFyZ2UuaGYtaWNvbm9ubHkge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmhmLWJ1dHRvbi1sYXJnZS5oZi1pY29ub25seSBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaGYtYnV0dG9uLW1lZGl1bS5oZi1pY29ub25seSB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uaGYtYnV0dG9uLW1lZGl1bS5oZi1pY29ub25seSBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaGYtYnV0dG9uLXNtYWxsLmhmLWljb25vbmx5IHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmhmLWJ1dHRvbi1zbWFsbC5oZi1pY29ub25seSBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaGYtYnV0dG9uLWV4dHJhc21hbGwuaGYtaWNvbm9ubHkge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uaGYtYnV0dG9uLWV4dHJhc21hbGwuaGYtaWNvbm9ubHkgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmhmLWJ1dHRvbi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctZGVmYXVsdCk7XG4gIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tcHJpbWFyeS10ZXh0LWRlZmF1bHQpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZi1idXR0b24tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LWJnLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtaG92ZXIpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZi1idXR0b24tcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LWJnLWZvY3VzZWQpO1xuICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktdGV4dC1mb2N1c2VkKTtcbiAgb3V0bGluZTogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtYnV0dG9uLXByaW1hcnktc3Ryb2tlLWZvY3VzZWQpO1xufVxuXG4uaGYtYnV0dG9uLXByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctYWN0aXZlKTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtYWN0aXZlKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaGYtYnV0dG9uLXByaW1hcnk6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tcHJpbWFyeS1iZy1kaXNhYmxlKTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1wcmltYXJ5LXRleHQtZGlzYWJsZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmhmLWJ1dHRvbi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LWJnLWRlZmF1bHQpO1xuICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS10ZXh0LWRlZmF1bHQpO1xuICBib3JkZXI6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktc3Ryb2tlLWRlZmF1bHQpO1xufVxuXG4uaGYtYnV0dG9uLXNlY29uZGFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktYmctZm9jdXNlZCk7XG4gIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LXRleHQtZm9jdXNlZCk7XG4gIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1zdHJva2UtZm9jdXNlZCk7XG59XG5cbi5oZi1idXR0b24tc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktYmctYWN0aXZlKTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1hY3RpdmUpO1xuICBib3JkZXI6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktc3Ryb2tlLWFjdGl2ZSk7XG59XG5cbi5oZi1idXR0b24tc2Vjb25kYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1iZy1kaXNhYmxlKTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1kaXNhYmxlKTtcbiAgYm9yZGVyOiAwcHg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5oZi1idXR0b24tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXNlY29uZGFyeS1iZy1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tc2Vjb25kYXJ5LXRleHQtaG92ZXIpO1xuICBib3JkZXI6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWJ1dHRvbi1zZWNvbmRhcnktc3Ryb2tlLWhvdmVyKTtcbn1cblxuLmhmLWJ1dHRvbi10ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS1iZy1kZWZhdWx0KTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS10ZXh0LWRlZmF1bHQpO1xuICBib3JkZXI6IDBweDtcbn1cblxuLmhmLWJ1dHRvbi10ZXJ0aWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS1iZy1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktdGV4dC1ob3Zlcik7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uaGYtYnV0dG9uLXRlcnRpYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS1iZy1hY3RpdmUpO1xuICBjb2xvcjogdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LXRleHQtYWN0aXZlKTtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5oZi1idXR0b24tdGVydGlhcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktYmctZm9jdXNlZCk7XG4gIGNvbG9yOiB2YXIoLS1oZi1idXR0b24tdGVydGlhcnktdGV4dC1mb2N1c2VkKTtcbiAgb3V0bGluZTogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtYnV0dG9uLXRlcnRpYXJ5LXN0cm9rZS1mb2N1c2VkKTtcbn1cblxuLmhmLWJ1dHRvbi10ZXJ0aWFyeTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS1iZy1kaXNhYmxlKTtcbiAgY29sb3I6IHZhcigtLWhmLWJ1dHRvbi10ZXJ0aWFyeS10ZXh0LWRpc2FibGUpO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmhmLWRhbmdlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWhmLWRhbmdlci1idXR0b24tY29sb3IpO1xuICBib3JkZXI6IHZhcigtLWhmLWJ1dHRvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWRhbmdlci1idXR0b24tY29sb3IpO1xufVxuXG4uaGYtZGFuZ2VyLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XG4gIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XG59XG5cbi5oZi1kYW5nZXItYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XG4gIGJvcmRlcjogdmFyKC0taGYtYnV0dG9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtZGFuZ2VyLWJ1dHRvbi1jb2xvcik7XG59XG5cbi5oZi1kYW5nZXItYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1oZi1kYW5nZXItYnV0dG9uLWNvbG9yKTtcbiAgYm9yZGVyOiAwcHg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5oZi1kYW5nZXItYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1oZi1kYW5nZXItYnV0dG9uLWNvbG9yKTtcbiAgYm9yZGVyOiB2YXIoLS1oZi1idXR0b24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1kYW5nZXItYnV0dG9uLWNvbG9yKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 429:
/*!*************************************************************!*\
  !*** ./libs/ui/src/components/hf-card/hf-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfCardComponent: () => (/* binding */ HfCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = ["*"];
const _c1 = (a0, a1, a2) => ({
  "hf-primary-card": a0,
  "hf-secondary-card": a1,
  "hf-tertiary-card": a2
});
const _c2 = a0 => ({
  "hf-margin-top": a0
});
const _c3 = (a0, a1, a2, a3, a4) => ({
  "hf-card-title-extralarge": a0,
  "hf-card-title-large": a1,
  "hf-card-title-medium": a2,
  "hf-card-title-small": a3,
  "hf-card-title-extrasmall": a4
});
function HfCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c3, ctx_r0.cardTitleSize === "extralarge", ctx_r0.cardTitleSize === "large", ctx_r0.cardTitleSize === "medium", ctx_r0.cardTitleSize === "small", ctx_r0.cardTitleSize === "extrasmall"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardTitle);
  }
}
class HfCardComponent {
  constructor() {
    this.cardStyle = 'primary';
    this.cardTitleSize = 'large';
    this.cardTitle = '';
  }
  static #_ = this.ɵfac = function HfCardComponent_Factory(t) {
    return new (t || HfCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfCardComponent,
    selectors: [["hf-card"]],
    inputs: {
      cardStyle: "cardStyle",
      cardTitleSize: "cardTitleSize",
      cardTitle: "cardTitle"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 9,
    consts: [[1, "hf-card", 3, "ngClass"], [1, "card-title", "hf-dark-font", 3, "ngClass"], [1, "hf-card-content", 3, "ngClass"]],
    template: function HfCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfCardComponent_Conditional_1_Template, 2, 8, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx.cardStyle === "primary", ctx.cardStyle === "secondary", ctx.cardStyle === "tertiary"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.cardTitle !== "" ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.cardTitle !== ""));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".hf-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.hf-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.hf-margin-top[_ngcontent-%COMP%] {\n  margin-top: var(--hf-card-space-between-elements);\n}\n\n.hf-primary-card[_ngcontent-%COMP%] {\n  padding: var(--hf-card-primary-top-padding) var(--hf-card-primary-right-padding) var(--hf-card-primary-bottom-padding) var(--hf-card-primary-left-padding);\n  background-color: var(--hf-card-primary-bg);\n  border: var(--hf-card-primary-border-width) solid var(--hf-card-primary-border);\n  border-radius: var(--hf-card-primary-border-radius);\n}\n\n.hf-primary-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: var(--hf-card-primary-title);\n}\n\n.hf-secondary-card[_ngcontent-%COMP%] {\n  padding: var(--hf-card-primary-top-padding) var(--hf-card-primary-right-padding) var(--hf-card-primary-bottom-padding) var(--hf-card-primary-left-padding);\n  background-color: var(--hf-card-secondary-bg);\n  border: var(--hf-card-secondary-border-width) solid var(--hf-card-secondary-border);\n  border-radius: var(--hf-card-secondary-border-radius);\n}\n\n.hf-secondary-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: var(--hf-card-secondary-title);\n}\n\n.hf-tertiary-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--hf-card-tertiary-top-padding) var(--hf-card-tertiary-right-padding) var(--hf-card-tertiary-bottom-padding) var(--hf-card-tertiary-left-padding);\n  background-color: var(--hf-card-tertiary-bg);\n  border: var(--hf-card-tertiary-border-width) solid var(--hf-card-tertiary-border);\n  border-radius: var(--hf-card-tertiary-border-radius);\n}\n\n@media screen and (max-width: 600px) {\n  .hf-tertiary-card[_ngcontent-%COMP%] {\n    padding: var(--hf-card-tertiary-mobile-top-padding) var(--hf-card-tertiary-mobile-right-padding) var(--hf-card-tertiary-mobile-bottom-padding) var(--hf-card-tertiary-mobile-left-padding);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtY2FyZC9oZi1jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vY2FwYWNpdG9yJTIwb2lsL21vbm9yZXBvL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtY2FyZC9oZi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0FDQ0o7O0FERUE7RUFDSSwwSkFBQTtFQUNBLDJDQUFBO0VBQ0EsK0VBQUE7RUFDQSxtREFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLDBKQUFBO0VBQ0EsNkNBQUE7RUFDQSxtRkFBQTtFQUNBLHFEQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLDhKQUFBO0VBQ0EsNENBQUE7RUFDQSxpRkFBQTtFQUNBLG9EQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLDBMQUFBO0VDQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oZi1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGYtY2FyZC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmhmLW1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGYtY2FyZC1zcGFjZS1iZXR3ZWVuLWVsZW1lbnRzKTtcclxufVxyXG5cclxuLmhmLXByaW1hcnktY2FyZCB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktdG9wLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1yaWdodC1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1sZWZ0LXBhZGRpbmcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtY2FyZC1wcmltYXJ5LWJnKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtY2FyZC1wcmltYXJ5LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2FyZC1wcmltYXJ5LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbi5oZi1wcmltYXJ5LWNhcmQgLmNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWNhcmQtcHJpbWFyeS10aXRsZSk7XHJcbn1cclxuXHJcbi5oZi1zZWNvbmRhcnktY2FyZCB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktdG9wLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1yaWdodC1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1sZWZ0LXBhZGRpbmcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtY2FyZC1zZWNvbmRhcnktYmcpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1oZi1jYXJkLXNlY29uZGFyeS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNhcmQtc2Vjb25kYXJ5LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1jYXJkLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLmhmLXNlY29uZGFyeS1jYXJkIC5jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1jYXJkLXNlY29uZGFyeS10aXRsZSk7XHJcbn1cclxuXHJcbi5oZi10ZXJ0aWFyeS1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS10b3AtcGFkZGluZykgdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1yaWdodC1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWJvdHRvbS1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWxlZnQtcGFkZGluZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWJnKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNhcmQtdGVydGlhcnktYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWNhcmQtdGVydGlhcnktYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaGYtdGVydGlhcnktY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1tb2JpbGUtdG9wLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtdGVydGlhcnktbW9iaWxlLXJpZ2h0LXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtdGVydGlhcnktbW9iaWxlLWJvdHRvbS1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LW1vYmlsZS1sZWZ0LXBhZGRpbmcpO1xyXG4gICAgfVxyXG59IiwiLmhmLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhmLWNhcmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uaGYtbWFyZ2luLXRvcCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLWhmLWNhcmQtc3BhY2UtYmV0d2Vlbi1lbGVtZW50cyk7XG59XG5cbi5oZi1wcmltYXJ5LWNhcmQge1xuICBwYWRkaW5nOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktdG9wLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1yaWdodC1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1sZWZ0LXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktYmcpO1xuICBib3JkZXI6IHZhcigtLWhmLWNhcmQtcHJpbWFyeS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNhcmQtcHJpbWFyeS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5oZi1wcmltYXJ5LWNhcmQgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taGYtY2FyZC1wcmltYXJ5LXRpdGxlKTtcbn1cblxuLmhmLXNlY29uZGFyeS1jYXJkIHtcbiAgcGFkZGluZzogdmFyKC0taGYtY2FyZC1wcmltYXJ5LXRvcC1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXByaW1hcnktcmlnaHQtcGFkZGluZykgdmFyKC0taGYtY2FyZC1wcmltYXJ5LWJvdHRvbS1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXByaW1hcnktbGVmdC1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtY2FyZC1zZWNvbmRhcnktYmcpO1xuICBib3JkZXI6IHZhcigtLWhmLWNhcmQtc2Vjb25kYXJ5LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2FyZC1zZWNvbmRhcnktYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGYtY2FyZC1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5oZi1zZWNvbmRhcnktY2FyZCAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1oZi1jYXJkLXNlY29uZGFyeS10aXRsZSk7XG59XG5cbi5oZi10ZXJ0aWFyeS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLWhmLWNhcmQtdGVydGlhcnktdG9wLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtdGVydGlhcnktcmlnaHQtcGFkZGluZykgdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1ib3R0b20tcGFkZGluZykgdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1sZWZ0LXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWJnKTtcbiAgYm9yZGVyOiB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWJvcmRlci1yYWRpdXMpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGYtdGVydGlhcnktY2FyZCB7XG4gICAgcGFkZGluZzogdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1tb2JpbGUtdG9wLXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtdGVydGlhcnktbW9iaWxlLXJpZ2h0LXBhZGRpbmcpIHZhcigtLWhmLWNhcmQtdGVydGlhcnktbW9iaWxlLWJvdHRvbS1wYWRkaW5nKSB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LW1vYmlsZS1sZWZ0LXBhZGRpbmcpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 573:
/*!*********************************************************************!*\
  !*** ./libs/ui/src/components/hf-checkbox/hf-checkbox.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfCheckboxComponent: () => (/* binding */ HfCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = a0 => ({
  "hf-checkbox-label-disabled": a0
});
class HfCheckboxComponent {
  constructor() {
    this.inputValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('');
    this.inputLabel = '';
    this.inputId = 'defaultId';
    this.disabled = false;
  }
  ngOnInit() {
    if (this.disabled) {
      this.inputValue.disable();
    }
  }
  static #_ = this.ɵfac = function HfCheckboxComponent_Factory(t) {
    return new (t || HfCheckboxComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HfCheckboxComponent,
    selectors: [["hf-checkbox"]],
    inputs: {
      inputValue: "inputValue",
      inputLabel: "inputLabel",
      inputId: "inputId",
      disabled: "disabled"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 7,
    consts: [[1, "hf-checkbox"], ["type", "checkbox", 1, "hf-checkbox-input", 3, "id", "formControl"], [1, "hf-checkbox-label", 3, "for", "ngClass"]],
    template: function HfCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("formControl", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", ctx.inputId)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inputLabel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
    styles: ["@charset \"UTF-8\";\n.hf-checkbox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n  border: var(--hf-checkbox-border-width) solid var(--hf-checkbox-border-default);\n  border-radius: var(--hf-checkbox-border-radius);\n  cursor: pointer;\n  position: relative;\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:hover {\n  border: var(--hf-checkbox-border-width) solid var(--hf-checkbox-border-hover);\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:focus {\n  border: var(--hf-checkbox-border-width) solid var(--hf-checkbox-border-focused);\n  outline: var(--hf-checkbox-border-width) solid var(--hf-checkbox-stroke-focused);\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:disabled {\n  background-color: var(--hf-checkbox-bg-disable);\n  border: none;\n  outline: none;\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:checked::before {\n  content: \"\u2714\";\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-size: 12px;\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--hf-checkbox-bg-default);\n  border: none;\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:checked:hover {\n  background-color: var(--hf-checkbox-bg-hover);\n  border: none;\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:checked:focus {\n  background-color: var(--hf-checkbox-bg-hover);\n  border: none;\n  outline: var(--hf-checkbox-border-width) solid var(--hf-checkbox-stroke-focused);\n}\n\n.hf-checkbox-input[_ngcontent-%COMP%]:checked:disabled {\n  background-color: var(--hf-checkbox-bg-checked-disabled);\n  border: none;\n  outline: none;\n}\n\n.hf-checkbox-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  white-space: nowrap;\n}\n\n.hf-checkbox-label-disabled[_ngcontent-%COMP%] {\n  color: var(--hf-checkbox-label-disabled);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL3VpL3NyYy9jb21wb25lbnRzL2hmLWNoZWNrYm94L2hmLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbGlicy91aS9zcmMvY29tcG9uZW50cy9oZi1jaGVja2JveC9oZi1jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QURFSjs7QUNDQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrRUFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERUo7O0FDQ0E7RUFDSSw2RUFBQTtBREVKOztBQ0NBO0VBQ0ksK0VBQUE7RUFDQSxnRkFBQTtBREVKOztBQ0NBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBREVKOztBQ0NBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURFSjs7QUNDQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtBREVKOztBQ0NBO0VBQ0ksNkNBQUE7RUFDQSxZQUFBO0FERUo7O0FDQ0E7RUFDSSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxnRkFBQTtBREVKOztBQ0NBO0VBQ0ksd0RBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBREVKOztBQ0NBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURFSjs7QUNDQTtFQUNJLHdDQUFBO0FERUoiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGYtY2hlY2tib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uaGYtY2hlY2tib3gtaW5wdXQge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlcjogdmFyKC0taGYtY2hlY2tib3gtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1jaGVja2JveC1ib3JkZXItZGVmYXVsdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci1yYWRpdXMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhmLWNoZWNrYm94LWlucHV0OmhvdmVyIHtcbiAgYm9yZGVyOiB2YXIoLS1oZi1jaGVja2JveC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci1ob3Zlcik7XG59XG5cbi5oZi1jaGVja2JveC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogdmFyKC0taGYtY2hlY2tib3gtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1jaGVja2JveC1ib3JkZXItZm9jdXNlZCk7XG4gIG91dGxpbmU6IHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2hlY2tib3gtc3Ryb2tlLWZvY3VzZWQpO1xufVxuXG4uaGYtY2hlY2tib3gtaW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jaGVja2JveC1iZy1kaXNhYmxlKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGYtY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLDosKcwpRcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGYtY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWNoZWNrYm94LWJnLWRlZmF1bHQpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZi1jaGVja2JveC1pbnB1dDpjaGVja2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtY2hlY2tib3gtYmctaG92ZXIpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZi1jaGVja2JveC1pbnB1dDpjaGVja2VkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtY2hlY2tib3gtYmctaG92ZXIpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2hlY2tib3gtc3Ryb2tlLWZvY3VzZWQpO1xufVxuXG4uaGYtY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWNoZWNrYm94LWJnLWNoZWNrZWQtZGlzYWJsZWQpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZi1jaGVja2JveC1sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhmLWNoZWNrYm94LWxhYmVsLWRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWhmLWNoZWNrYm94LWxhYmVsLWRpc2FibGVkKTtcbn0iLCIuaGYtY2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmhmLWNoZWNrYm94LWlucHV0IHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgYm9yZGVyOiB2YXIoLS1oZi1jaGVja2JveC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci1kZWZhdWx0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci1yYWRpdXMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGYtY2hlY2tib3gtaW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiB2YXIoLS1oZi1jaGVja2JveC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci1ob3Zlcik7XHJcbn1cclxuXHJcbi5oZi1jaGVja2JveC1pbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2hlY2tib3gtYm9yZGVyLWZvY3VzZWQpO1xyXG4gICAgb3V0bGluZTogdmFyKC0taGYtY2hlY2tib3gtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1jaGVja2JveC1zdHJva2UtZm9jdXNlZCk7XHJcbn1cclxuXHJcbi5oZi1jaGVja2JveC1pbnB1dDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jaGVja2JveC1iZy1kaXNhYmxlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZi1jaGVja2JveC1pbnB1dDpjaGVja2VkOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ8OiwpzClCc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5oZi1jaGVja2JveC1pbnB1dDpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWNoZWNrYm94LWJnLWRlZmF1bHQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaGYtY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jaGVja2JveC1iZy1ob3Zlcik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5oZi1jaGVja2JveC1pbnB1dDpjaGVja2VkOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWNoZWNrYm94LWJnLWhvdmVyKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IHZhcigtLWhmLWNoZWNrYm94LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2hlY2tib3gtc3Ryb2tlLWZvY3VzZWQpO1xyXG59XHJcblxyXG4uaGYtY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1jaGVja2JveC1iZy1jaGVja2VkLWRpc2FibGVkKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZi1jaGVja2JveC1sYWJlbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmhmLWNoZWNrYm94LWxhYmVsLWRpc2FibGVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oZi1jaGVja2JveC1sYWJlbC1kaXNhYmxlZCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5277:
/*!***************************************************************!*\
  !*** ./libs/ui/src/components/hf-input/hf-input.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfInputComponent: () => (/* binding */ HfInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);





const _c0 = ["*"];
function HfInputComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.iconAlt)("title", ctx_r0.iconTitle);
  }
}
function HfInputComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.iconWord);
  }
}
function HfInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfInputComponent_Conditional_1_Conditional_1_Template, 1, 3, "img", 7)(2, HfInputComponent_Conditional_1_Conditional_2_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r0.iconUrl !== "" ? 1 : 2);
  }
}
function HfInputComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.inputLabel);
  }
}
function HfInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.inputPlaceholder)("formControl", ctx_r0.inputValue)("rows", ctx_r0.rows);
  }
}
function HfInputComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function HfInputComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function HfInputComponent_Conditional_6_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onFocusOut($event));
    })("focus", function HfInputComponent_Conditional_6_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onFocusIn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.inputType)("placeholder", ctx_r0.inputPlaceholder)("formControl", ctx_r0.inputValue);
  }
}
function HfInputComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
  }
}
function HfInputComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
  }
}
function HfInputComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HfInputComponent_Conditional_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfInputComponent_Conditional_7_Conditional_1_Template, 1, 0, "img", 11)(2, HfInputComponent_Conditional_7_Conditional_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r0.isShowPassword ? 1 : 2);
  }
}
function HfInputComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.iconAlt)("title", ctx_r0.iconTitle);
  }
}
function HfInputComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.iconWord);
  }
}
function HfInputComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfInputComponent_Conditional_8_Conditional_1_Template, 1, 3, "img", 7)(2, HfInputComponent_Conditional_8_Conditional_2_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r0.iconUrl !== "" ? 1 : 2);
  }
}
function HfInputComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
  }
}
function HfInputComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
  }
}
function HfInputComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
  }
}
function HfInputComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
  }
}
function HfInputComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfInputComponent_Conditional_9_Conditional_1_Template, 1, 0, "img", 13)(2, HfInputComponent_Conditional_9_Conditional_2_Template, 1, 0)(3, HfInputComponent_Conditional_9_Conditional_3_Template, 1, 0)(4, HfInputComponent_Conditional_9_Conditional_4_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r0.descriptionType === "error" ? 1 : ctx_r0.descriptionType === "warning" ? 2 : ctx_r0.descriptionType === "loading" ? 3 : ctx_r0.descriptionType === "success" ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.inputDescription);
  }
}
class HfInputComponent {
  constructor() {
    this.inputValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    this.inputStyle = 'noicon';
    this.inputLabel = '';
    this.inputType = 'text';
    this.inputPlaceholder = '';
    this.iconUrl = '';
    this.iconAlt = '';
    this.iconTitle = '';
    this.iconWord = 'D';
    this.isPassword = false;
    this.inputDescription = '';
    this.descriptionType = '';
    this.rows = 5;
    this.isDisabled = false;
    this.focusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isShowPassword = false;
  }
  ngOnChanges(changes) {
    if (changes['isDisabled'] && this.inputValue) {
      if (changes['isDisabled'].currentValue) {
        this.inputValue.disable();
      } else {
        this.inputValue.enable();
      }
    }
  }
  showPassword() {
    this.isShowPassword = !this.isShowPassword;
    if (this.isShowPassword) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
  onFocusOut($event) {
    this.focusOut.emit($event);
  }
  onFocusIn($event) {
    this.focusIn.emit($event);
  }
  static #_ = this.ɵfac = function HfInputComponent_Factory(t) {
    return new (t || HfInputComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfInputComponent,
    selectors: [["hf-input"]],
    inputs: {
      inputValue: "inputValue",
      inputStyle: "inputStyle",
      inputLabel: "inputLabel",
      inputType: "inputType",
      inputPlaceholder: "inputPlaceholder",
      iconUrl: "iconUrl",
      iconAlt: "iconAlt",
      iconTitle: "iconTitle",
      iconWord: "iconWord",
      isPassword: "isPassword",
      inputDescription: "inputDescription",
      descriptionType: "descriptionType",
      rows: "rows",
      isDisabled: "isDisabled"
    },
    outputs: {
      focusOut: "focusOut",
      focusIn: "focusIn"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 10,
    vars: 6,
    consts: [[1, "hf-input"], [2, "width", "24px", "height", "24px"], [1, "hf-input-content"], [1, "hf-input-title", "hf-input-title-text"], [1, "hf-input-value", "hf-input-value-text", 3, "placeholder", "formControl", "rows"], [1, "hf-password-icon"], [1, "hf-message"], [3, "src", "alt", "title"], [1, "hf-default-logo", "hf-dark-font"], [1, "hf-input-value", "hf-input-value-text", 3, "blur", "focus", "type", "placeholder", "formControl"], [1, "hf-password-icon", 3, "click"], ["src", "/assets/icons/open-eye.svg", "alt", "hide password icon", "title", "hide password icon"], ["src", "/assets/icons/close-eye.svg", "alt", "show password icon", "title", "show password icon"], ["src", "/assets/icons/error.svg", "alt", "error message icon", "title", "error message icon"], [1, "hf-input-description-text"], ["src", "/assets/icons/warning.svg", "alt", "warning message icon", "title", "warning message icon"], ["src", "/assets/icons/loader.svg", "alt", "loader message icon", "title", "loader message icon"], ["src", "/assets/icons/success.svg", "alt", "success message icon", "title", "success message icon"]],
    template: function HfInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfInputComponent_Conditional_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HfInputComponent_Conditional_3_Template, 2, 1, "label", 3)(4, HfInputComponent_Conditional_4_Template, 1, 3, "textarea", 4)(5, HfInputComponent_Conditional_5_Template, 1, 0)(6, HfInputComponent_Conditional_6_Template, 1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HfInputComponent_Conditional_7_Template, 3, 1, "div", 5)(8, HfInputComponent_Conditional_8_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HfInputComponent_Conditional_9_Template, 7, 2, "div", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.inputStyle === "iconleft" ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, ctx.inputLabel !== "" ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx.inputType === "textarea" ? 4 : ctx.inputType === "custom" ? 5 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, ctx.isPassword ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx.inputStyle === "iconright" ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, ctx.descriptionType !== "" ? 9 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: ["input[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  appearance: none;\n  margin: 0;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: var(--hf-input-placeholder);\n}\n\n.hf-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--hf-input-top-padding) var(--hf-input-right-padding) var(--hf-input-bottom-padding) var(--hf-input-left-padding);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: var(--hf-input-icon-spacing);\n  background-color: var(--hf-input-bg);\n  border: var(--hf-input-border-width) solid var(--hf-input-border);\n  border-radius: var(--hf-input-border-radius);\n}\n\n.hf-input[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-password-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-password-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-input-title[_ngcontent-%COMP%] {\n  color: var(--hf-input-title);\n}\n\n.hf-input-value[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--hf-input-value);\n}\n\n.hf-input-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.hf-message[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 5px;\n}\n\n.hf-default-logo[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  background-color: var(--hf-grey-bg);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtaW5wdXQvaGYtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy91aS9zcmMvY29tcG9uZW50cy9oZi1pbnB1dC9oZi1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFnQkksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBOztFQUdJLGdCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSw4SEFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlFQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuaW5wdXRbdHlwZT1cInVybFwiXSxcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXHJcbmlucHV0W3R5cGU9XCJtb250aFwiXSxcclxuaW5wdXRbdHlwZT1cIndlZWtcIl0sXHJcbmlucHV0W3R5cGU9XCJjb2xvclwiXSxcclxudGV4dGFyZWEge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtaW5wdXQtcGxhY2Vob2xkZXIpO1xyXG59XHJcblxyXG4uaGYtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1oZi1pbnB1dC10b3AtcGFkZGluZykgdmFyKC0taGYtaW5wdXQtcmlnaHQtcGFkZGluZykgdmFyKC0taGYtaW5wdXQtYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLWlucHV0LWxlZnQtcGFkZGluZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGdhcDogdmFyKC0taGYtaW5wdXQtaWNvbi1zcGFjaW5nKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWlucHV0LWJnKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtaW5wdXQtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1pbnB1dC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGYtaW5wdXQtYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbi5oZi1pbnB1dCBpbWcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5oZi1wYXNzd29yZC1pY29uIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaGYtcGFzc3dvcmQtaWNvbiBpbWcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5oZi1pbnB1dC10aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtaW5wdXQtdGl0bGUpO1xyXG59XHJcblxyXG4uaGYtaW5wdXQtdmFsdWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtaW5wdXQtdmFsdWUpO1xyXG59XHJcblxyXG4uaGYtaW5wdXQtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZi1tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLmhmLWRlZmF1bHQtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWdyZXktYmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSIsImlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPW51bWJlcl0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT1kYXRlXSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxcbmlucHV0W3R5cGU9bW9udGhdLFxuaW5wdXRbdHlwZT13ZWVrXSxcbmlucHV0W3R5cGU9Y29sb3JdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1oZi1pbnB1dC1wbGFjZWhvbGRlcik7XG59XG5cbi5oZi1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1oZi1pbnB1dC10b3AtcGFkZGluZykgdmFyKC0taGYtaW5wdXQtcmlnaHQtcGFkZGluZykgdmFyKC0taGYtaW5wdXQtYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLWlucHV0LWxlZnQtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiB2YXIoLS1oZi1pbnB1dC1pY29uLXNwYWNpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1pbnB1dC1iZyk7XG4gIGJvcmRlcjogdmFyKC0taGYtaW5wdXQtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1pbnB1dC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1pbnB1dC1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmhmLWlucHV0IGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5oZi1wYXNzd29yZC1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmhmLXBhc3N3b3JkLWljb24gaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmhmLWlucHV0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWhmLWlucHV0LXRpdGxlKTtcbn1cblxuLmhmLWlucHV0LXZhbHVlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1oZi1pbnB1dC12YWx1ZSk7XG59XG5cbi5oZi1pbnB1dC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhmLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNXB4O1xufVxuXG4uaGYtZGVmYXVsdC1sb2dvIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtZ3JleS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2567:
/*!***************************************************************!*\
  !*** ./libs/ui/src/components/hf-model/hf-model.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfModelComponent: () => (/* binding */ HfModelComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




const _c0 = ["*"];
const _c1 = (a0, a1, a2, a3, a4) => ({
  "hf-model-extralarge": a0,
  "hf-model-large": a1,
  "hf-model-medium": a2,
  "hf-model-small": a3,
  "hf-model-extrasmall": a4
});
const _c2 = (a0, a1, a2, a3, a4) => ({
  "hf-model-title-extralarge": a0,
  "hf-model-title-large": a1,
  "hf-model-title-medium": a2,
  "hf-model-title-small": a3,
  "hf-model-title-extrasmall": a4
});
function HfModelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HfModelComponent_Conditional_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeModel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HfModelComponent_Conditional_0_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeModel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](3, _c1, ctx_r1.modelSize === "extralarge", ctx_r1.modelSize === "large", ctx_r1.modelSize === "medium", ctx_r1.modelSize === "small", ctx_r1.modelSize === "extrasmall"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](9, _c2, ctx_r1.modelSize === "extralarge", ctx_r1.modelSize === "large", ctx_r1.modelSize === "medium", ctx_r1.modelSize === "small", ctx_r1.modelSize === "extrasmall"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.modelTitle);
  }
}
class HfModelComponent {
  constructor() {
    this.showModel = false;
    this.modelSize = 'extrasmall';
    this.modelTitle = '';
    this.modelClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes['showModel'] && changes['showModel'].currentValue === true) {
      this.body = document.getElementsByTagName('body')[0];
      this.body.classList.add('hf-disable-scroll');
      this.modelClosed.emit(false);
    } else {
      if (this.body && this.body.classList) {
        this.body.classList.remove('hf-disable-scroll');
      }
    }
  }
  closeModel() {
    this.showModel = false;
    this.body.classList.remove('hf-disable-scroll');
    this.modelClosed.emit(true);
  }
  static #_ = this.ɵfac = function HfModelComponent_Factory(t) {
    return new (t || HfModelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfModelComponent,
    selectors: [["hf-model"]],
    inputs: {
      showModel: "showModel",
      modelSize: "modelSize",
      modelTitle: "modelTitle"
    },
    outputs: {
      modelClosed: "modelClosed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [[1, "hf-model-outline"], [1, "model-close-mask", 3, "click"], [1, "hf-model", 3, "ngClass"], [1, "hf-model-title", 3, "ngClass"], [1, "hf-dark-font"], ["src", "/assets/icons/model-close.svg", "alt", "Model close icon", "title", "Model close icon", 2, "cursor", "pointer", 3, "click"], [1, "hf-model-content"]],
    template: function HfModelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HfModelComponent_Conditional_0_Template, 9, 15, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx.showModel ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  width: 0px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  width: 0px;\n}\n\n.hf-model-outline[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  -webkit-backdrop-filter: blur(var(--hf-model-backdrop-size));\n          backdrop-filter: blur(var(--hf-model-backdrop-size));\n  padding: 10px;\n}\n\n.hf-model[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: var(--hf-model-bg);\n  border-radius: var(--hf-model-border-radius);\n  border: var(--hf-model-border-width) solid var(--hf-model-border);\n  padding: var(--hf-model-top-padding) var(--hf-model-right-padding) var(--hf-model-bottom-padding) var(--hf-model-left-padding);\n}\n\n.model-close-mask[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: -1;\n}\n\n.hf-model-extralarge[_ngcontent-%COMP%] {\n  max-width: 700px;\n  max-height: 700px;\n}\n\n.hf-model-large[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 600px;\n}\n\n.hf-model-medium[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 500px;\n}\n\n.hf-model-small[_ngcontent-%COMP%] {\n  max-width: 400px;\n  max-height: 400px;\n}\n\n.hf-model-extrasmall[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n}\n\n.hf-model-title[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\n.hf-model-title-extralarge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.hf-model-title-large[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n\n.hf-model-title-medium[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.hf-model-title-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.hf-model-title-extrasmall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.hf-model-content[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtbW9kZWwvaGYtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy91aS9zcmMvY29tcG9uZW50cy9oZi1tb2RlbC9oZi1tb2RlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpRUFBQTtFQUNBLDhIQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi5oZi1tb2RlbC1vdXRsaW5lIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1oZi1tb2RlbC1iYWNrZHJvcC1zaXplKSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaGYtbW9kZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLW1vZGVsLWJnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLW1vZGVsLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1oZi1tb2RlbC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLW1vZGVsLWJvcmRlcik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1oZi1tb2RlbC10b3AtcGFkZGluZykgdmFyKC0taGYtbW9kZWwtcmlnaHQtcGFkZGluZykgdmFyKC0taGYtbW9kZWwtYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLW1vZGVsLWxlZnQtcGFkZGluZyk7XHJcbn1cclxuXHJcbi5tb2RlbC1jbG9zZS1tYXNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmhmLW1vZGVsLWV4dHJhbGFyZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4uaGYtbW9kZWwtbGFyZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uaGYtbW9kZWwtbWVkaXVtIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmhmLW1vZGVsLXNtYWxsIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmhmLW1vZGVsLWV4dHJhc21hbGwge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaGYtbW9kZWwtdGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5oZi1tb2RlbC10aXRsZS1leHRyYWxhcmdlIGltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLmhmLW1vZGVsLXRpdGxlLWxhcmdlIGltZyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmhmLW1vZGVsLXRpdGxlLW1lZGl1bSBpbWcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5oZi1tb2RlbC10aXRsZS1zbWFsbCBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZi1tb2RlbC10aXRsZS1leHRyYXNtYWxsIGltZyB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmhmLW1vZGVsLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59IiwiOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICB3aWR0aDogMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgd2lkdGg6IDBweDtcbn1cblxuLmhmLW1vZGVsLW91dGxpbmUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0taGYtbW9kZWwtYmFja2Ryb3Atc2l6ZSkpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGYtbW9kZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLW1vZGVsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGYtbW9kZWwtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlcjogdmFyKC0taGYtbW9kZWwtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1tb2RlbC1ib3JkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1oZi1tb2RlbC10b3AtcGFkZGluZykgdmFyKC0taGYtbW9kZWwtcmlnaHQtcGFkZGluZykgdmFyKC0taGYtbW9kZWwtYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLW1vZGVsLWxlZnQtcGFkZGluZyk7XG59XG5cbi5tb2RlbC1jbG9zZS1tYXNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmhmLW1vZGVsLWV4dHJhbGFyZ2Uge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbn1cblxuLmhmLW1vZGVsLWxhcmdlIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG59XG5cbi5oZi1tb2RlbC1tZWRpdW0ge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmhmLW1vZGVsLXNtYWxsIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbi5oZi1tb2RlbC1leHRyYXNtYWxsIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5oZi1tb2RlbC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5oZi1tb2RlbC10aXRsZS1leHRyYWxhcmdlIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5oZi1tb2RlbC10aXRsZS1sYXJnZSBpbWcge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uaGYtbW9kZWwtdGl0bGUtbWVkaXVtIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5oZi1tb2RlbC10aXRsZS1zbWFsbCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaGYtbW9kZWwtdGl0bGUtZXh0cmFzbWFsbCBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uaGYtbW9kZWwtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3213:
/*!*******************************************************************************!*\
  !*** ./libs/ui/src/components/hf-pipe-location/hf-pipe-location.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfPipeLocationComponent: () => (/* binding */ HfPipeLocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _hf_radio_hf_radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hf-radio/hf-radio.component */ 5259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = a0 => ({
  border: a0
});
function HfPipeLocationComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Front of the house ");
  }
}
function HfPipeLocationComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class HfPipeLocationComponent {
  constructor() {
    this.inputValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    this.imgUrl = '';
  }
  static #_ = this.ɵfac = function HfPipeLocationComponent_Factory(t) {
    return new (t || HfPipeLocationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HfPipeLocationComponent,
    selectors: [["hf-pipe-location"]],
    inputs: {
      inputValue: "inputValue",
      imgUrl: "imgUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 20,
    consts: [[1, "house-location"], [1, "top"], [1, "horizontal"], [1, "radio-mini-container"], ["inputName", "tankLocation", "radioSize", "medium", 3, "radioValue", "inputValue"], [1, "middle"], [1, "left"], [1, "vertical"], [1, "center", 3, "ngClass"], [1, "right"], [1, "bottom"], [3, "src"]],
    template: function HfPipeLocationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HfPipeLocationComponent_Conditional_15_Template, 1, 0)(16, HfPipeLocationComponent_Conditional_16_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "div", 7)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10)(24, "div", 2)(25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hf-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 4)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 5)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 3)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 2)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.imgUrl === "" ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](15, ctx.imgUrl === "" ? 15 : 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 1)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 8)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 6)("inputValue", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("radioValue", 7)("inputValue", ctx.inputValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _hf_radio_hf_radio_component__WEBPACK_IMPORTED_MODULE_0__.HfRadioComponent],
    styles: [".house-location[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 250px;\n  min-height: 150px;\n  margin: auto;\n  display: grid;\n  grid-template-rows: 28px 1fr 28px;\n  gap: 2px;\n}\n\n.middle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28px 1fr 28px;\n  gap: 2px;\n}\n\n.middle[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  \n\n  display: flex;\n  align-items: center;\n}\n\n.middle[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.middle[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.middle[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.horizontal[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding: 0 2px;\n}\n\n.vertical[_ngcontent-%COMP%] {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: auto;\n  padding: 2px 0;\n}\n\n.radio-mini-container[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 28px;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: var(--hf-card-primary-border-width) solid var(--hf-card-primary-border);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtcGlwZS1sb2NhdGlvbi9oZi1waXBlLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vY2FwYWNpdG9yJTIwb2lsL21vbm9yZXBvL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtcGlwZS1sb2NhdGlvbi9oZi1waXBlLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSwrRUFBQTtBQ0FGIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdXNlLWxvY2F0aW9uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4IDFmciAyOHB4O1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjhweCAxZnIgMjhweDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLm1pZGRsZSAubGVmdCB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWlkZGxlIC5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGUgLnJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMnB4O1xyXG59XHJcblxyXG4udmVydGljYWwge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcblxyXG4ucmFkaW8tbWluaS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm9yZGVyKTtcclxufVxyXG4iLCIuaG91c2UtbG9jYXRpb24ge1xuICB3aWR0aDogNTAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI4cHggMWZyIDI4cHg7XG4gIGdhcDogMnB4O1xufVxuXG4ubWlkZGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOHB4IDFmciAyOHB4O1xuICBnYXA6IDJweDtcbn1cblxuLm1pZGRsZSAubGVmdCB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWlkZGxlIC5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1pZGRsZSAuY2VudGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWlkZGxlIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4udmVydGljYWwge1xuICBoZWlnaHQ6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4ucmFkaW8tbWluaS1jb250YWluZXIge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1oZi1jYXJkLXByaW1hcnktYm9yZGVyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9407:
/*!***************************************************************!*\
  !*** ./libs/ui/src/components/hf-price/hf-price.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfPriceComponent: () => (/* binding */ HfPriceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




const _c0 = a0 => ({
  "hf-dark-font": a0
});
class HfPriceComponent {
  constructor() {
    this.amount = '1.002';
    this.prefixSize = '12px';
    this.prefixHeight = '16px';
    this.isPrefixBold = false;
    this.fontSize = '18px';
    this.fontHeight = '22px';
    this.isFontBold = true;
    this.suffixSize = '12px';
    this.suffixHeight = '16px';
    this.isSuffixBold = false;
  }
  ngOnInit() {
    this.initPrefixSuffix();
  }
  ngOnChanges(changes) {
    if (changes['amount']) {
      this.initPrefixSuffix();
    }
  }
  initPrefixSuffix() {
    let priceNumber = Number(this.amount).toFixed(3);
    let priceString = priceNumber.toString();
    this.prefixAmount = priceString.slice(0, -1);
    this.suffixAmount = priceString.slice(-1);
  }
  static #_ = this.ɵfac = function HfPriceComponent_Factory(t) {
    return new (t || HfPriceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfPriceComponent,
    selectors: [["hf-price"]],
    inputs: {
      amount: "amount",
      prefixSize: "prefixSize",
      prefixHeight: "prefixHeight",
      isPrefixBold: "isPrefixBold",
      fontSize: "fontSize",
      fontHeight: "fontHeight",
      isFontBold: "isFontBold",
      suffixSize: "suffixSize",
      suffixHeight: "suffixHeight",
      isSuffixBold: "isSuffixBold"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 23,
    consts: [[1, "hf-price"], [3, "ngClass"]],
    template: function HfPriceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.prefixSize)("line-height", ctx.prefixHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isPrefixBold));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.fontSize)("line-height", ctx.fontHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.isFontBold));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prefixAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.suffixSize)("line-height", ctx.suffixHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.isSuffixBold));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.suffixAmount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".hf-price[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtcHJpY2UvaGYtcHJpY2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy91aS9zcmMvY29tcG9uZW50cy9oZi1wcmljZS9oZi1wcmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmhmLXByaWNlIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59IiwiLmhmLXByaWNlIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5259:
/*!***************************************************************!*\
  !*** ./libs/ui/src/components/hf-radio/hf-radio.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfRadioComponent: () => (/* binding */ HfRadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = (a0, a1, a2, a3, a4) => ({
  "hf-radio-label-large": a0,
  "hf-radio-label-medium": a1,
  "hf-radio-label-small": a2,
  "cursor-not-allowed hf-radio-label-disabled": a3,
  "cursor-pointer": a4
});
const _c1 = (a0, a1, a2) => ({
  "hf-radio-input-large": a0,
  "hf-radio-input-medium": a1,
  "hf-radio-input-small": a2
});
function HfRadioComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, ctx_r0.radioSize == "large", ctx_r0.radioSize == "medium", ctx_r0.radioSize == "small"))("name", ctx_r0.inputName)("value", ctx_r0.radioValue)("formControl", ctx_r0.inputValue);
  }
}
function HfRadioComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx_r0.radioSize == "large", ctx_r0.radioSize == "medium", ctx_r0.radioSize == "small"))("name", ctx_r0.inputName)("value", ctx_r0.radioValue);
  }
}
class HfRadioComponent {
  constructor() {
    this.inputValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    this.inputName = '';
    this.radioValue = '';
    // @Input() inputId: string = '';
    this.isDisabled = false;
    this.radioSize = 'large';
  }
  static #_ = this.ɵfac = function HfRadioComponent_Factory(t) {
    return new (t || HfRadioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfRadioComponent,
    selectors: [["hf-radio"]],
    inputs: {
      inputValue: "inputValue",
      inputLabel: "inputLabel",
      inputName: "inputName",
      radioValue: "radioValue",
      isDisabled: "isDisabled",
      radioSize: "radioSize"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 9,
    consts: [[1, "hf-radio"], [1, "hf-radio-label", 3, "ngClass"], ["type", "radio", 1, "hf-radio-input", 3, "ngClass", "name", "value", "formControl"], ["type", "radio", "disabled", "", 1, "hf-radio-input", 3, "ngClass", "name", "value"]],
    template: function HfRadioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HfRadioComponent_Conditional_2_Template, 1, 8, "input", 2)(3, HfRadioComponent_Conditional_3_Template, 1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](3, _c0, ctx.radioSize == "large", ctx.radioSize == "medium", ctx.radioSize == "small", ctx.isDisabled, !ctx.isDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, !ctx.isDisabled ? 2 : 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.inputLabel, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: [".hf-radio[_ngcontent-%COMP%] {\n  margin: var(--hf-radio-container-margin);\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cursor-not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.hf-radio-input[_ngcontent-%COMP%] {\n  appearance: none;\n  background-color: var(--hf-radio-bg);\n  position: relative;\n  \n\n  border: var(--hf-radio-border-size) solid var(--hf-radio-border);\n  border-radius: var(--hf-radio-border-radius);\n}\n\n.hf-radio-input-large[_ngcontent-%COMP%] {\n  min-width: var(--hf-radio-size-large);\n  height: var(--hf-radio-size-large);\n}\n\n.hf-radio-input-medium[_ngcontent-%COMP%] {\n  min-width: var(--hf-radio-size-medium);\n  height: var(--hf-radio-size-medium);\n}\n\n.hf-radio-input-small[_ngcontent-%COMP%] {\n  min-width: var(--hf-radio-size-small);\n  height: var(--hf-radio-size-small);\n}\n\n.hf-radio-input[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  width: 45%;\n  height: 45%;\n  border-radius: 50%;\n  background-color: var(--hf-radio-inner-circle-checked);\n  transition: transform 0.2s ease;\n}\n\n.hf-radio-input[_ngcontent-%COMP%]:hover {\n  border: var(--hf-radio-border-size) solid var(--hf-radio-border-hover);\n}\n\n.hf-radio-input[_ngcontent-%COMP%]:checked {\n  border: var(--hf-radio-border-size) solid var(--hf-radio-border-checked);\n}\n\n.hf-radio-input[_ngcontent-%COMP%]:checked::before {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.hf-radio-input[_ngcontent-%COMP%]:focus {\n  outline: var(--hf-radio-outline-size-focus) solid var(--hf-radio-focus);\n}\n\n.hf-radio-input[_ngcontent-%COMP%]:disabled::before {\n  background-color: var(--hf-radio-inner-circle-disabled-checked);\n}\n\n.hf-radio-input[_ngcontent-%COMP%]:disabled {\n  border: none;\n  background-color: var(--hf-radio-bg-disabled);\n}\n\n.hf-radio-label-disabled[_ngcontent-%COMP%] {\n  color: var(--hf-radio-text-disabled);\n}\n\n.hf-radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--hf-radio-and-label-gap);\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtcmFkaW8vaGYtcmFkaW8uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy91aS9zcmMvY29tcG9uZW50cy9oZi1yYWRpby9oZi1yYWRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHdDQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBRUksZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnRUFBQTtFQUNBLDRDQUFBO0FDREo7O0FESUE7RUFDSSxxQ0FBQTtFQUNBLGtDQUFBO0FDREo7O0FESUE7RUFDSSxzQ0FBQTtFQUNBLG1DQUFBO0FDREo7O0FESUE7RUFDSSxxQ0FBQTtFQUNBLGtDQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLHNEQUFBO0VBQ0EsK0JBQUE7QUNGSjs7QURLQTtFQUNJLHNFQUFBO0FDRko7O0FES0E7RUFDSSx3RUFBQTtBQ0ZKOztBREtBO0VBQ0kseUNBQUE7QUNGSjs7QURNQTtFQUNJLHVFQUFBO0FDSEo7O0FETUE7RUFDSSwrREFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLDZDQUFBO0FDSEo7O0FETUE7RUFDSSxvQ0FBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FDSEoiLCJzb3VyY2VzQ29udGVudCI6WyIuaGYtcmFkaW8ge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IHZhcigtLWhmLXJhZGlvLWNvbnRhaW5lci1tYXJnaW4pO1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3Vyc29yLW5vdC1hbGxvd2VkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5oZi1yYWRpby1pbnB1dCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtcmFkaW8tYmcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogRW5zdXJlIHByb3BlciBwb3NpdGlvbmluZyBvZiBwc2V1ZG8tZWxlbWVudCAqL1xyXG4gICAgYm9yZGVyOiB2YXIoLS1oZi1yYWRpby1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0taGYtcmFkaW8tYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xyXG59XHJcblxyXG4uaGYtcmFkaW8taW5wdXQtbGFyZ2Uge1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1oZi1yYWRpby1zaXplLWxhcmdlKTtcclxuICAgIGhlaWdodDogdmFyKC0taGYtcmFkaW8tc2l6ZS1sYXJnZSk7XHJcbn1cclxuXHJcbi5oZi1yYWRpby1pbnB1dC1tZWRpdW0ge1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1oZi1yYWRpby1zaXplLW1lZGl1bSk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhmLXJhZGlvLXNpemUtbWVkaXVtKTtcclxufVxyXG5cclxuLmhmLXJhZGlvLWlucHV0LXNtYWxsIHtcclxuICAgIG1pbi13aWR0aDogdmFyKC0taGYtcmFkaW8tc2l6ZS1zbWFsbCk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhmLXJhZGlvLXNpemUtc21hbGwpO1xyXG59XHJcblxyXG4uaGYtcmFkaW8taW5wdXQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIC8vIGFzcGVjdC1yYXRpbzogMS8xO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtcmFkaW8taW5uZXItY2lyY2xlLWNoZWNrZWQpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmhmLXJhZGlvLWlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtcmFkaW8tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWhmLXJhZGlvLWJvcmRlci1ob3Zlcik7XHJcbn1cclxuXHJcbi5oZi1yYWRpby1pbnB1dDpjaGVja2VkIHtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtcmFkaW8tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWhmLXJhZGlvLWJvcmRlci1jaGVja2VkKTtcclxufVxyXG5cclxuLmhmLXJhZGlvLWlucHV0OmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuICAgIDtcclxufVxyXG5cclxuLmhmLXJhZGlvLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IHZhcigtLWhmLXJhZGlvLW91dGxpbmUtc2l6ZS1mb2N1cykgc29saWQgdmFyKC0taGYtcmFkaW8tZm9jdXMpO1xyXG59XHJcblxyXG4uaGYtcmFkaW8taW5wdXQ6ZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1yYWRpby1pbm5lci1jaXJjbGUtZGlzYWJsZWQtY2hlY2tlZCk7XHJcbn1cclxuXHJcbi5oZi1yYWRpby1pbnB1dDpkaXNhYmxlZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1yYWRpby1iZy1kaXNhYmxlZCk7XHJcbn1cclxuXHJcbi5oZi1yYWRpby1sYWJlbC1kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0taGYtcmFkaW8tdGV4dC1kaXNhYmxlZCk7XHJcbn1cclxuXHJcbi5oZi1yYWRpby1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogdmFyKC0taGYtcmFkaW8tYW5kLWxhYmVsLWdhcCk7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn0iLCIuaGYtcmFkaW8ge1xuICBtYXJnaW46IHZhcigtLWhmLXJhZGlvLWNvbnRhaW5lci1tYXJnaW4pO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXJzb3Itbm90LWFsbG93ZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uaGYtcmFkaW8taW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXJhZGlvLWJnKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBFbnN1cmUgcHJvcGVyIHBvc2l0aW9uaW5nIG9mIHBzZXVkby1lbGVtZW50ICovXG4gIGJvcmRlcjogdmFyKC0taGYtcmFkaW8tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWhmLXJhZGlvLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uaGYtcmFkaW8taW5wdXQtbGFyZ2Uge1xuICBtaW4td2lkdGg6IHZhcigtLWhmLXJhZGlvLXNpemUtbGFyZ2UpO1xuICBoZWlnaHQ6IHZhcigtLWhmLXJhZGlvLXNpemUtbGFyZ2UpO1xufVxuXG4uaGYtcmFkaW8taW5wdXQtbWVkaXVtIHtcbiAgbWluLXdpZHRoOiB2YXIoLS1oZi1yYWRpby1zaXplLW1lZGl1bSk7XG4gIGhlaWdodDogdmFyKC0taGYtcmFkaW8tc2l6ZS1tZWRpdW0pO1xufVxuXG4uaGYtcmFkaW8taW5wdXQtc21hbGwge1xuICBtaW4td2lkdGg6IHZhcigtLWhmLXJhZGlvLXNpemUtc21hbGwpO1xuICBoZWlnaHQ6IHZhcigtLWhmLXJhZGlvLXNpemUtc21hbGwpO1xufVxuXG4uaGYtcmFkaW8taW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogNDUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXJhZGlvLWlubmVyLWNpcmNsZS1jaGVja2VkKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuLmhmLXJhZGlvLWlucHV0OmhvdmVyIHtcbiAgYm9yZGVyOiB2YXIoLS1oZi1yYWRpby1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0taGYtcmFkaW8tYm9yZGVyLWhvdmVyKTtcbn1cblxuLmhmLXJhZGlvLWlucHV0OmNoZWNrZWQge1xuICBib3JkZXI6IHZhcigtLWhmLXJhZGlvLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1oZi1yYWRpby1ib3JkZXItY2hlY2tlZCk7XG59XG5cbi5oZi1yYWRpby1pbnB1dDpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbn1cblxuLmhmLXJhZGlvLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogdmFyKC0taGYtcmFkaW8tb3V0bGluZS1zaXplLWZvY3VzKSBzb2xpZCB2YXIoLS1oZi1yYWRpby1mb2N1cyk7XG59XG5cbi5oZi1yYWRpby1pbnB1dDpkaXNhYmxlZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtcmFkaW8taW5uZXItY2lyY2xlLWRpc2FibGVkLWNoZWNrZWQpO1xufVxuXG4uaGYtcmFkaW8taW5wdXQ6ZGlzYWJsZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXJhZGlvLWJnLWRpc2FibGVkKTtcbn1cblxuLmhmLXJhZGlvLWxhYmVsLWRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWhmLXJhZGlvLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uaGYtcmFkaW8tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLWhmLXJhZGlvLWFuZC1sYWJlbC1nYXApO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9041:
/*!*****************************************************************!*\
  !*** ./libs/ui/src/components/hf-select/hf-select.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfSelectComponent: () => (/* binding */ HfSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




const _c0 = ["*"];
function HfSelectComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
  }
}
function HfSelectComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
  }
}
function HfSelectComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
  }
}
function HfSelectComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
  }
}
function HfSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HfSelectComponent_Conditional_2_Conditional_1_Template, 1, 0, "img", 2)(2, HfSelectComponent_Conditional_2_Conditional_2_Template, 1, 0)(3, HfSelectComponent_Conditional_2_Conditional_3_Template, 1, 0)(4, HfSelectComponent_Conditional_2_Conditional_4_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r0.descriptionType === "error" ? 1 : ctx_r0.descriptionType === "warning" ? 2 : ctx_r0.descriptionType === "loading" ? 3 : ctx_r0.descriptionType === "success" ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectDescription);
  }
}
class HfSelectComponent {
  constructor() {
    this.inputValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    this.selectDescription = '';
    this.descriptionType = '';
  }
  static #_ = this.ɵfac = function HfSelectComponent_Factory(t) {
    return new (t || HfSelectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HfSelectComponent,
    selectors: [["hf-select"]],
    inputs: {
      inputValue: "inputValue",
      selectDescription: "selectDescription",
      descriptionType: "descriptionType"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 2,
    consts: [[2, "width", "100%", 3, "formControl"], [1, "hf-message"], ["src", "lib/assets/icons/error.svg", "alt", "error message icon", "title", "error message icon"], [1, "hf-input-description-text"], ["src", "lib/assets/icons/warning.svg", "alt", "warning message icon", "title", "warning message icon"], ["src", "lib/assets/icons/loader.svg", "alt", "loader message icon", "title", "loader message icon"], ["src", "lib/assets/icons/success.svg", "alt", "success message icon", "title", "success message icon"]],
    template: function HfSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HfSelectComponent_Conditional_2_Template, 7, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.descriptionType !== "" ? 2 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: ["select[_ngcontent-%COMP%] {\n  padding: var(--hf-select-top-padding) var(--hf-select-right-padding) var(--hf-select-bottom-padding) var(--hf-select-left-padding);\n  font-size: var(--hf-select-font-size);\n  border: var(--hf-select-border-width) solid var(--hf-select-border-color);\n  border-radius: var(--hf-select-border-radius);\n  background-color: var(--hf-select-bg);\n  color: var(--hf-select-color);\n  appearance: none;\n  \n\n  -webkit-appearance: none;\n  \n\n  -moz-appearance: none;\n  \n\n  background-image: url('select.svg');\n  background-repeat: no-repeat;\n  background-position: calc(100% - (var(--hf-select-right-padding) - 5px)) center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtc2VsZWN0L2hmLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9saWJzL3VpL3NyYy9jb21wb25lbnRzL2hmLXNlbGVjdC9oZi1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrSUFBQTtFQUNBLHFDQUFBO0VBQ0EseUVBQUE7RUFDQSw2Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0VBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1oZi1zZWxlY3QtdG9wLXBhZGRpbmcpIHZhcigtLWhmLXNlbGVjdC1yaWdodC1wYWRkaW5nKSB2YXIoLS1oZi1zZWxlY3QtYm90dG9tLXBhZGRpbmcpIHZhcigtLWhmLXNlbGVjdC1sZWZ0LXBhZGRpbmcpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZi1zZWxlY3QtZm9udC1zaXplKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGYtc2VsZWN0LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtc2VsZWN0LWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1zZWxlY3QtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1zZWxlY3QtYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWhmLXNlbGVjdC1jb2xvcik7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLyogUmVtb3ZlcyBkZWZhdWx0IGRyb3Bkb3duIGFycm93ICovXHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvKiBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmkgKi9cclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8qIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29ucy9zZWxlY3Quc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gKHZhcigtLWhmLXNlbGVjdC1yaWdodC1wYWRkaW5nKSAtIDVweCkpIGNlbnRlcjtcclxufSIsInNlbGVjdCB7XG4gIHBhZGRpbmc6IHZhcigtLWhmLXNlbGVjdC10b3AtcGFkZGluZykgdmFyKC0taGYtc2VsZWN0LXJpZ2h0LXBhZGRpbmcpIHZhcigtLWhmLXNlbGVjdC1ib3R0b20tcGFkZGluZykgdmFyKC0taGYtc2VsZWN0LWxlZnQtcGFkZGluZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGYtc2VsZWN0LWZvbnQtc2l6ZSk7XG4gIGJvcmRlcjogdmFyKC0taGYtc2VsZWN0LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtc2VsZWN0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLXNlbGVjdC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc2VsZWN0LWJnKTtcbiAgY29sb3I6IHZhcigtLWhmLXNlbGVjdC1jb2xvcik7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIFJlbW92ZXMgZGVmYXVsdCBkcm9wZG93biBhcnJvdyAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSAqL1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9zZWxlY3Quc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAodmFyKC0taGYtc2VsZWN0LXJpZ2h0LXBhZGRpbmcpIC0gNXB4KSkgY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5603:
/*!***************************************************************!*\
  !*** ./libs/ui/src/components/hf-toast/hf-toast.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfToastComponent: () => (/* binding */ HfToastComponent)
/* harmony export */ });
/* harmony import */ var _hf_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hf-toast.service */ 2363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = (a0, a1, a2, a3) => ({
  "hf-toast-error-bg": a0,
  "hf-toast-success-bg": a1,
  "hf-toast-warning-bg": a2,
  "hf-toast-info-bg": a3
});
function HfToastComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 1);
  }
}
function HfToastComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
  }
}
function HfToastComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
  }
}
function HfToastComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
  }
}
function HfToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HfToastComponent_Conditional_0_Conditional_1_Template, 1, 0, "img", 1)(2, HfToastComponent_Conditional_0_Conditional_2_Template, 1, 0)(3, HfToastComponent_Conditional_0_Conditional_3_Template, 1, 0)(4, HfToastComponent_Conditional_0_Conditional_4_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HfToastComponent_Conditional_0_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.hideToast());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](4, _c0, ctx_r1.toastType === "error", ctx_r1.toastType === "success", ctx_r1.toastType === "warning", ctx_r1.toastType === "info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r1.toastType === "error" ? 1 : ctx_r1.toastType === "success" ? 2 : ctx_r1.toastType === "warning" ? 3 : ctx_r1.toastType === "info" ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.toastTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.toastMessage);
  }
}
class HfToastComponent {
  constructor(hfToastService) {
    this.hfToastService = hfToastService;
    this.showToast = false;
    this.toastType = 'info';
  }
  ngOnInit() {
    this.getToastData();
  }
  getToastData() {
    this.toastDataSub = this.hfToastService.toastMessage$.subscribe(data => {
      if (data.title !== '') {
        this.toastTitle = data.title;
        this.toastMessage = data.msg;
        this.toastType = data.type;
        this.showToast = true;
        this.toastTimeOut = setTimeout(() => {
          this.hideToast();
        }, 5000);
      }
    });
  }
  hideToast() {
    this.showToast = false;
  }
  ngOnDestroy() {
    if (this.toastDataSub) {
      this.toastDataSub.unsubscribe();
    }
    clearTimeout(this.toastTimeOut);
  }
  static #_ = this.ɵfac = function HfToastComponent_Factory(t) {
    return new (t || HfToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hf_toast_service__WEBPACK_IMPORTED_MODULE_0__.HfToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HfToastComponent,
    selectors: [["hf-toast"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[1, "hf-toast", 3, "ngClass"], ["src", "/assets/icons/error.svg", "alt", "Toast error icon", "title", "Toast error icon"], [1, "hf-toast-body"], [1, "hf-toast-header"], [1, "hf-toast-title-text"], ["src", "/assets/icons/close-gray.svg", "alt", "Toast close icon", "title", "Toast close icon", 2, "cursor", "pointer", 3, "click"], [1, "hf-toasts-content-text"], ["src", "/assets/icons/success.svg", "alt", "Toast success icon", "title", "Toast success icon"], ["src", "/assets/icons/warning.svg", "alt", "Toast warning icon", "title", "Toast warning icon"], ["src", "/assets/icons/info.svg", "alt", "Toast info icon", "title", "Toast info icon"]],
    template: function HfToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HfToastComponent_Conditional_0_Template, 12, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.showToast ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    styles: [".hf-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: var(--hf-toast-top-padding) var(--hf-toast-right-padding) var(--hf-toast-bottom-padding) var(--hf-toast-left-padding);\n  border-radius: var(--hf-toast-border-radius);\n  gap: 10px;\n  min-width: 250px;\n  max-width: 400px;\n  margin-left: 10px;\n}\n\n.hf-toast-warning-bg[_ngcontent-%COMP%] {\n  background-color: var(--hf-toast-warning-bg);\n}\n\n.hf-toast-error-bg[_ngcontent-%COMP%] {\n  background-color: var(--hf-toast-error-bg);\n}\n\n.hf-toast-success-bg[_ngcontent-%COMP%] {\n  background-color: var(--hf-toast-success-bg);\n}\n\n.hf-toast-info-bg[_ngcontent-%COMP%] {\n  background-color: var(--hf-toast-info-bg);\n}\n\n.hf-toast-body[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.hf-toast-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.hf-toast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.hf-toast-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdWkvc3JjL2NvbXBvbmVudHMvaGYtdG9hc3QvaGYtdG9hc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vbGlicy91aS9zcmMvY29tcG9uZW50cy9oZi10b2FzdC9oZi10b2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEhBQUE7RUFDQSw0Q0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaGYtdG9hc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogdmFyKC0taGYtdG9hc3QtdG9wLXBhZGRpbmcpIHZhcigtLWhmLXRvYXN0LXJpZ2h0LXBhZGRpbmcpIHZhcigtLWhmLXRvYXN0LWJvdHRvbS1wYWRkaW5nKSB2YXIoLS1oZi10b2FzdC1sZWZ0LXBhZGRpbmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGYtdG9hc3QtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaGYtdG9hc3Qtd2FybmluZy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi10b2FzdC13YXJuaW5nLWJnKTtcclxufVxyXG5cclxuLmhmLXRvYXN0LWVycm9yLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXRvYXN0LWVycm9yLWJnKTtcclxufVxyXG5cclxuLmhmLXRvYXN0LXN1Y2Nlc3MtYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtdG9hc3Qtc3VjY2Vzcy1iZyk7XHJcbn1cclxuXHJcbi5oZi10b2FzdC1pbmZvLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXRvYXN0LWluZm8tYmcpO1xyXG59XHJcblxyXG4uaGYtdG9hc3QtYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4uaGYtdG9hc3QtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5oZi10b2FzdCBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZi10b2FzdC1oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59IiwiLmhmLXRvYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogdmFyKC0taGYtdG9hc3QtdG9wLXBhZGRpbmcpIHZhcigtLWhmLXRvYXN0LXJpZ2h0LXBhZGRpbmcpIHZhcigtLWhmLXRvYXN0LWJvdHRvbS1wYWRkaW5nKSB2YXIoLS1oZi10b2FzdC1sZWZ0LXBhZGRpbmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi10b2FzdC1ib3JkZXItcmFkaXVzKTtcbiAgZ2FwOiAxMHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmhmLXRvYXN0LXdhcm5pbmctYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi10b2FzdC13YXJuaW5nLWJnKTtcbn1cblxuLmhmLXRvYXN0LWVycm9yLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtdG9hc3QtZXJyb3ItYmcpO1xufVxuXG4uaGYtdG9hc3Qtc3VjY2Vzcy1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXRvYXN0LXN1Y2Nlc3MtYmcpO1xufVxuXG4uaGYtdG9hc3QtaW5mby1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXRvYXN0LWluZm8tYmcpO1xufVxuXG4uaGYtdG9hc3QtYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uaGYtdG9hc3QtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhmLXRvYXN0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5oZi10b2FzdC1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2363:
/*!*************************************************************!*\
  !*** ./libs/ui/src/components/hf-toast/hf-toast.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfToastService: () => (/* binding */ HfToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class HfToastService {
  constructor() {
    this.toastMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      title: '',
      msg: '',
      type: 'success'
    });
    this.toastMessage$ = this.toastMessage.asObservable();
  }
  static #_ = this.ɵfac = function HfToastService_Factory(t) {
    return new (t || HfToastService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HfToastService,
    factory: HfToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 547:
/*!*********************************************************!*\
  !*** ./libs/ui/src/directives/phone-input.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberFormatterDirective: () => (/* binding */ PhoneNumberFormatterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class PhoneNumberFormatterDirective {
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    this.formatPhoneNumber(this.el.nativeElement.querySelector('input').value);
  }
  onInput(value) {
    this.formatPhoneNumber(value);
  }
  formatPhoneNumber(value = '') {
    value = value.replace(/\D/g, ''); // Remove non-numeric characters
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i === 0 && value !== '') {
        formatted = '(' + value[i];
      } else if (i === 3) {
        formatted += ') ' + value[i];
      } else if (i === 6) {
        formatted += '-' + value[i];
      } else {
        formatted += value[i];
      }
    }
    const maxLength = 14;
    if (formatted.length <= maxLength) {
      this.el.nativeElement.querySelector('input').value = formatted;
    }
  }
  static #_ = this.ɵfac = function PhoneNumberFormatterDirective_Factory(t) {
    return new (t || PhoneNumberFormatterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: PhoneNumberFormatterDirective,
    selectors: [["", "phoneNumberFormatter", ""]],
    hostBindings: function PhoneNumberFormatterDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PhoneNumberFormatterDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event.target.value);
        });
      }
    },
    standalone: true
  });
}

/***/ }),

/***/ 9478:
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HfButtonComponent: () => (/* reexport safe */ _components_hf_button_hf_button_component__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent),
/* harmony export */   HfCardComponent: () => (/* reexport safe */ _components_hf_card_hf_card_component__WEBPACK_IMPORTED_MODULE_1__.HfCardComponent),
/* harmony export */   HfCheckboxComponent: () => (/* reexport safe */ _components_hf_checkbox_hf_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.HfCheckboxComponent),
/* harmony export */   HfInputComponent: () => (/* reexport safe */ _components_hf_input_hf_input_component__WEBPACK_IMPORTED_MODULE_3__.HfInputComponent),
/* harmony export */   HfModelComponent: () => (/* reexport safe */ _components_hf_model_hf_model_component__WEBPACK_IMPORTED_MODULE_4__.HfModelComponent),
/* harmony export */   HfPipeLocationComponent: () => (/* reexport safe */ _components_hf_pipe_location_hf_pipe_location_component__WEBPACK_IMPORTED_MODULE_8__.HfPipeLocationComponent),
/* harmony export */   HfPriceComponent: () => (/* reexport safe */ _components_hf_price_hf_price_component__WEBPACK_IMPORTED_MODULE_9__.HfPriceComponent),
/* harmony export */   HfRadioComponent: () => (/* reexport safe */ _components_hf_radio_hf_radio_component__WEBPACK_IMPORTED_MODULE_5__.HfRadioComponent),
/* harmony export */   HfSelectComponent: () => (/* reexport safe */ _components_hf_select_hf_select_component__WEBPACK_IMPORTED_MODULE_6__.HfSelectComponent),
/* harmony export */   HfToastComponent: () => (/* reexport safe */ _components_hf_toast_hf_toast_component__WEBPACK_IMPORTED_MODULE_7__.HfToastComponent),
/* harmony export */   HfToastService: () => (/* reexport safe */ _components_hf_toast_hf_toast_service__WEBPACK_IMPORTED_MODULE_10__.HfToastService),
/* harmony export */   PhoneNumberFormatterDirective: () => (/* reexport safe */ _directives_phone_input_directive__WEBPACK_IMPORTED_MODULE_11__.PhoneNumberFormatterDirective)
/* harmony export */ });
/* harmony import */ var _components_hf_button_hf_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hf-button/hf-button.component */ 8837);
/* harmony import */ var _components_hf_card_hf_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hf-card/hf-card.component */ 429);
/* harmony import */ var _components_hf_checkbox_hf_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hf-checkbox/hf-checkbox.component */ 573);
/* harmony import */ var _components_hf_input_hf_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hf-input/hf-input.component */ 5277);
/* harmony import */ var _components_hf_model_hf_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hf-model/hf-model.component */ 2567);
/* harmony import */ var _components_hf_radio_hf_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hf-radio/hf-radio.component */ 5259);
/* harmony import */ var _components_hf_select_hf_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hf-select/hf-select.component */ 9041);
/* harmony import */ var _components_hf_toast_hf_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hf-toast/hf-toast.component */ 5603);
/* harmony import */ var _components_hf_pipe_location_hf_pipe_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hf-pipe-location/hf-pipe-location.component */ 3213);
/* harmony import */ var _components_hf_price_hf_price_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hf-price/hf-price.component */ 9407);
/* harmony import */ var _components_hf_toast_hf_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hf-toast/hf-toast.service */ 2363);
/* harmony import */ var _directives_phone_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/phone-input.directive */ 547);
/* harmony import */ var _utils_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/interface */ 4511);
// components










// services

// directives

// utils


/***/ }),

/***/ 4511:
/*!****************************************!*\
  !*** ./libs/ui/src/utils/interface.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7031:
/*!*********************************!*\
  !*** ./libs/utils/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* reexport safe */ _lib_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService),
/* harmony export */   AuthService: () => (/* reexport safe */ _lib_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService),
/* harmony export */   Cookie: () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_5__.Cookie),
/* harmony export */   CookieService: () => (/* reexport safe */ _lib_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService),
/* harmony export */   HeatfleetHeaderService: () => (/* reexport safe */ _lib_heatfleet_header_service__WEBPACK_IMPORTED_MODULE_9__.HeatfleetHeaderService),
/* harmony export */   REQUEST: () => (/* reexport safe */ _lib_express_token__WEBPACK_IMPORTED_MODULE_8__.REQUEST),
/* harmony export */   RESPONSE: () => (/* reexport safe */ _lib_express_token__WEBPACK_IMPORTED_MODULE_8__.RESPONSE),
/* harmony export */   ServerService: () => (/* reexport safe */ _lib_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService),
/* harmony export */   StoreService: () => (/* reexport safe */ _lib_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService),
/* harmony export */   compareValidator: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.compareValidator),
/* harmony export */   confirmPasswordValidator: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.confirmPasswordValidator),
/* harmony export */   decimalPositionAllow: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.decimalPositionAllow),
/* harmony export */   maxLengthRestriction: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.maxLengthRestriction),
/* harmony export */   minMaxQuantityValidator: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.minMaxQuantityValidator),
/* harmony export */   noWhitespaceValidator: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.noWhitespaceValidator),
/* harmony export */   perGallonsPriceValidator: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.perGallonsPriceValidator),
/* harmony export */   quantityInputValidator: () => (/* reexport safe */ _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__.quantityInputValidator)
/* harmony export */ });
/* harmony import */ var _lib_validator_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/validator.function */ 4111);
/* harmony import */ var _lib_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/app.service */ 5197);
/* harmony import */ var _lib_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/server.service */ 4897);
/* harmony import */ var _lib_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/store.service */ 579);
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/auth.service */ 4000);
/* harmony import */ var _lib_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/enum */ 7946);
/* harmony import */ var _lib_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/interface */ 2368);
/* harmony import */ var _lib_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/cookie.service */ 4536);
/* harmony import */ var _lib_express_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/express.token */ 8940);
/* harmony import */ var _lib_heatfleet_header_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/heatfleet-header.service */ 9370);

// services



// auth

// static


// cookie

// Express Req and Res Inject

//HeatFleet specific


/***/ }),

/***/ 5197:
/*!*******************************************!*\
  !*** ./libs/utils/src/lib/app.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);




class AppService {
  constructor(platformId) {
    this.platformId = platformId;
    this.isServerRendering = false;
    this.isBrowserRendering = false;
    this.isIosApp = false;
    this.isAndroidApp = false;
    this.isApp = false;
    this.isWebApp = false;
    this.devicePixelRatio = 1;
  }
  setPlatform() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      this.isServerRendering = true;
      this.isBrowserRendering = false;
      this.devicePixelRatio = 1;
    } else {
      this.isBrowserRendering = true;
      this.isServerRendering = false;
      this.devicePixelRatio = window.devicePixelRatio;
    }
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === 'ios') {
      this.isApp = true;
      this.isIosApp = true;
      this.isAndroidApp = false;
      this.isWebApp = false;
    } else if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === 'android') {
      this.isApp = true;
      this.isIosApp = false;
      this.isAndroidApp = true;
      this.isWebApp = false;
    } else if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === 'web') {
      this.isApp = true;
      this.isIosApp = false;
      this.isAndroidApp = false;
      this.isWebApp = true;
    }
  }
  static #_ = this.ɵfac = function AppService_Factory(t) {
    return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AppService,
    factory: AppService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4000:
/*!********************************************!*\
  !*** ./libs/utils/src/lib/auth.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 5720);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 4751);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ 7031);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class AuthService {
  constructor(cookieService) {
    this.cookieService = cookieService;
    this.isSetAuthCalled = false;
    this.apiUrl = '';
    this.apiVersion = '';
    this.emailKey = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.cryptojsKey = '';
    this.cryptojsIv = '';
    this.isUserLoggedIn = false;
    this.userEmail = '';
    this.checkEmailInfo = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      email: '',
      isVaild: false
    });
    this.checkEmailInfo$ = this.checkEmailInfo.asObservable();
    this.isLoginDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      isLoginDone: false,
      loginResponse: null
    });
    this.isLoginDone$ = this.isLoginDone.asObservable();
  }
  setAuth(apiUrl, apiVersion, cryptojsKey, cryptojsIv) {
    this.isSetAuthCalled = true;
    this.apiUrl = apiUrl;
    this.apiVersion = apiVersion;
    this.cryptojsIv = cryptojsIv;
    this.cryptojsKey = cryptojsKey;
  }
  getEncryptedValue(value) {
    const key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Base64.parse(this.cryptojsKey);
    const iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Base64.parse(this.cryptojsIv);
    const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(value, key, {
      iv: iv,
      mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.CBC,
      padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
    });
    const encryptedString = encrypted.toString();
    return encryptedString;
  }
  setCookie(name, value, domain, path, expires) {
    return this.cookieService.set(name, value, domain, path, expires);
  }
  getCookie(name) {
    return this.cookieService.get(name);
  }
  processLoginResponse(res, domain, path, expires) {
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.AUTH_TOKEN, res.token, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.PRIVACY_CONFIRMED, `${res.privacyConfirmed}`, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.REFRESH_TOKEN, res.refreshToken, domain, path, expires);
    let decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__.jwtDecode)(res.token);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.COMPANY_ID, decoded.CompanyId, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.USER_EMAIL, decoded.Email, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.USER_ID, decoded.UserId, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.USER_ROLE, decoded.Role, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.USER_NAME, decoded.UserName, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.FIRST_NAME, decoded.FirstName, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.LAST_NAME, decoded.LastName, domain, path, expires);
    this.setCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.TOKEN_EXPIRATION, (decoded.exp * 1000).toString(), domain, path, expires);
    this.makeUserCache();
  }
  checkUserIsLoggedIn() {
    try {
      const authToken = this.getCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.AUTH_TOKEN);
      let decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__.jwtDecode)(authToken);
      if (decoded.hasOwnProperty("UserId")) {
        this.isUserLoggedIn = true;
        this.makeUserCache();
      } else {
        this.isUserLoggedIn = false;
      }
    } catch (error) {
      this.isUserLoggedIn = false;
    }
  }
  makeUserCache() {
    this.isUserLoggedIn = true;
    this.userEmail = this.getCookie(___WEBPACK_IMPORTED_MODULE_2__.Cookie.USER_EMAIL);
  }
  generateRandomPassword(length = 8) {
    const Allowed = {
      Uppers: 'QWERTYUIOPASDFGHJKLZXCVBNM',
      Lowers: 'qwertyuiopasdfghjklzxcvbnm',
      Numbers: '1234567890',
      Symbols: '!@#$%^&*'
    };
    const getRandomCharFromString = str => str.charAt(Math.floor(Math.random() * str.length));
    let pwd = '';
    pwd += getRandomCharFromString(Allowed.Uppers);
    pwd += getRandomCharFromString(Allowed.Lowers).repeat(2);
    pwd += getRandomCharFromString(Allowed.Numbers);
    pwd += getRandomCharFromString(Allowed.Symbols);
    for (let i = pwd.length; i < length; i++) pwd += getRandomCharFromString(Object.values(Allowed).join(''));
    return pwd;
  }
  clearUserCache() {
    this.isUserLoggedIn = false;
    this.userEmail = '';
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_2__.CookieService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4536:
/*!**********************************************!*\
  !*** ./libs/utils/src/lib/cookie.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieService: () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _express_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express.token */ 8940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);




class CookieService {
  constructor(response, request, platformId) {
    this.response = response;
    this.request = request;
    this.platformId = platformId;
  }
  get(name) {
    let cookie = '';
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      cookie = this.request?.cookies[name];
      if (cookie) {
        return cookie;
      } else {
        return '';
      }
    } else {
      const cookieName = name + '=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return '';
    }
  }
  set(name, value, domain, path = '/', expires) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      let cookieSettings = {};
      if (domain) {
        cookieSettings['domain'] = domain;
      }
      if (expires) {
        cookieSettings['expires'] = expires;
      }
      this.response?.cookie(name, value, cookieSettings);
    } else {
      let cookieString = `${name}=${value}`;
      if (domain) {
        cookieString += `; domain=${domain}`;
      }
      if (expires) {
        cookieString += `; expires=${expires}`;
      }
      cookieString += `; path=${path}`;
      document.cookie = cookieString;
    }
  }
  deleteAll(domain, path = '/') {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      this.response?.clearCookie();
    } else {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? ";domain=" + domain : "") + ";path=" + path;
      }
    }
  }
  static #_ = this.ɵfac = function CookieService_Factory(t) {
    return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_express_token__WEBPACK_IMPORTED_MODULE_0__.RESPONSE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_express_token__WEBPACK_IMPORTED_MODULE_0__.REQUEST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CookieService,
    factory: CookieService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7946:
/*!************************************!*\
  !*** ./libs/utils/src/lib/enum.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cookie: () => (/* binding */ Cookie)
/* harmony export */ });
var Cookie;
(function (Cookie) {
  Cookie["ZIP_CODE"] = "zip_code";
  Cookie["GALLONS"] = "gallons";
  Cookie["AUTH_TOKEN"] = "auth_token";
  Cookie["PRIVACY_CONFIRMED"] = "privacy_confirmed";
  Cookie["COMPANY_ID"] = "company_id";
  Cookie["USER_NAME"] = "user_name";
  Cookie["FIRST_NAME"] = "first_name";
  Cookie["LAST_NAME"] = "last_name";
  Cookie["USER_EMAIL"] = "user_email";
  Cookie["USER_ID"] = "user_id";
  Cookie["CART"] = "cart";
  Cookie["NAVIGATION_HISTORY"] = "navigation_history";
  Cookie["USER_CITY"] = "user_city";
  Cookie["USER_ROLE"] = "user_role";
  Cookie["TOKEN_EXPIRATION"] = "token_expiration";
  Cookie["REFRESH_TOKEN"] = "refresh_token";
  Cookie["SERVICE_ENABLED"] = "service_enabled";
  Cookie["OIL_DELIVERY_ENABLED"] = "oil_delivery_enabled";
  Cookie["APP_POPUP"] = "app_popup";
})(Cookie || (Cookie = {}));

/***/ }),

/***/ 8940:
/*!*********************************************!*\
  !*** ./libs/utils/src/lib/express.token.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REQUEST: () => (/* binding */ REQUEST),
/* harmony export */   RESPONSE: () => (/* binding */ RESPONSE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

const REQUEST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('REQUEST');
const RESPONSE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('RESPONSE');

/***/ }),

/***/ 9370:
/*!********************************************************!*\
  !*** ./libs/utils/src/lib/heatfleet-header.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatfleetHeaderService: () => (/* binding */ HeatfleetHeaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HeatfleetHeaderService {
  constructor() {
    this.isMenuOpen = false;
    this.isPageMenuOpen = false;
    this.isSecure = false;
    this.clientUrl = '';
    this.isIntialized = false;
    this.fullLogoUrl = '';
    this.iconLogoUrl = '';
    this.nameLogoUrl = '';
  }
  initHeatFleetHeader(project, urls, client_url, full_logo_url, icon_logo_url, name_logo_url) {
    if (project === 'secure') {
      this.isSecure = true;
    } else {
      this.isSecure = false;
    }
    this.urls = urls;
    this.clientUrl = client_url;
    this.isIntialized = true;
    this.fullLogoUrl = full_logo_url;
    this.iconLogoUrl = icon_logo_url;
    this.nameLogoUrl = name_logo_url;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  togglePageMenu() {
    this.isPageMenuOpen = !this.isPageMenuOpen;
  }
  static #_ = this.ɵfac = function HeatfleetHeaderService_Factory(t) {
    return new (t || HeatfleetHeaderService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HeatfleetHeaderService,
    factory: HeatfleetHeaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2368:
/*!*****************************************!*\
  !*** ./libs/utils/src/lib/interface.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4897:
/*!**********************************************!*\
  !*** ./libs/utils/src/lib/server.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerService: () => (/* binding */ ServerService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _express_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express.token */ 8940);




class ServerService {
  constructor(responseContext, requestContext, platformId) {
    this.responseContext = responseContext;
    this.requestContext = requestContext;
    this.platformId = platformId;
    this.isServerRendering = false;
    this.isBrowserRendering = false;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      this._response = this.responseContext;
      this._request = this.requestContext;
    }
  }
  get response() {
    return this._response;
  }
  get request() {
    return this._request;
  }
  static #_ = this.ɵfac = function ServerService_Factory(t) {
    return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_express_token__WEBPACK_IMPORTED_MODULE_0__.RESPONSE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_express_token__WEBPACK_IMPORTED_MODULE_0__.REQUEST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ServerService,
    factory: ServerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 579:
/*!*********************************************!*\
  !*** ./libs/utils/src/lib/store.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreService: () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 6493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class StoreService {
  constructor() {
    // we always have one item in the cart
    // we store the cart in the local storage, android SharedPreferences and UserDefaults on iOS
    // However to deal with async await, we use variable cache for fast data fetching
    this.store = {};
  }
  initStore() {
    var _this = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.store = {};
      const keys = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.keys();
      for (let key of keys['keys']) {
        let value = (yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
          key: key
        })).value;
        if (value) {
          // not null or undefined
          try {
            _this.store[key] = JSON.parse(value);
          } catch (error) {
            _this.store[key] = value;
          }
        }
      }
    })();
  }
  addValueToStore(key, value) {
    var _this2 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.store[key] = value;
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({
        key: key,
        value: JSON.stringify(value)
      });
    })();
  }
  getValueFromStore(key, callback) {
    var _this3 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.store.hasOwnProperty(key)) {
        callback(_this3.store[key]);
      } else {
        const {
          value
        } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
          key
        });
        if (value) {
          try {
            callback(JSON.parse(value));
          } catch (error) {
            callback(value);
          }
        } else {
          callback(null);
        }
      }
    })();
  }
  checkKeyInStore(key, callback) {
    var _this4 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.store.hasOwnProperty(key)) {
        callback(true);
      } else {
        try {
          const keys = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.keys();
          const index = keys['keys'].indexOf(key);
          if (index !== -1) {
            try {
              const {
                value
              } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
                key: keys['keys'][index]
              });
              if (value) {
                try {
                  _this4.store[key] = JSON.parse(value);
                } catch (error) {
                  _this4.store[key] = value;
                }
              } else {
                _this4.store[key] = null;
              }
              callback(true);
            } catch {
              callback(false);
            }
          } else {
            callback(false);
          }
        } catch {
          callback(false);
        }
      }
    })();
  }
  deleteKeyFromStore(key) {
    var _this5 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.store.hasOwnProperty(key)) {
        delete _this5.store[key];
      }
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
        key: key
      });
    })();
  }
  deleteAll() {
    var _this6 = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.store = {};
      const keys = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.keys();
      for (let key of keys['keys']) {
        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
          key: key
        });
      }
    })();
  }
  static #_ = this.ɵfac = function StoreService_Factory(t) {
    return new (t || StoreService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StoreService,
    factory: StoreService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4111:
/*!**************************************************!*\
  !*** ./libs/utils/src/lib/validator.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareValidator: () => (/* binding */ compareValidator),
/* harmony export */   confirmPasswordValidator: () => (/* binding */ confirmPasswordValidator),
/* harmony export */   decimalPositionAllow: () => (/* binding */ decimalPositionAllow),
/* harmony export */   maxLengthRestriction: () => (/* binding */ maxLengthRestriction),
/* harmony export */   minMaxQuantityValidator: () => (/* binding */ minMaxQuantityValidator),
/* harmony export */   noWhitespaceValidator: () => (/* binding */ noWhitespaceValidator),
/* harmony export */   perGallonsPriceValidator: () => (/* binding */ perGallonsPriceValidator),
/* harmony export */   quantityInputValidator: () => (/* binding */ quantityInputValidator)
/* harmony export */ });
function perGallonsPriceValidator(min, max) {
  return control => {
    const isMax = max ? control.value <= max : true;
    if (control.value == min || control.value >= min && isMax && control.value) {
      return null;
    } else {
      return {
        perGallonsPriceValidator: true
      }; // Don't change perGallonsPriceValidator key to somehting else. it can't detect by formControler validators
    }
  };
}
function decimalPositionAllow(decimalPositionAllowed) {
  return control => {
    const numStr = control.value?.toString();
    const match = numStr?.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (match) {
      if (match[1]?.length > decimalPositionAllowed) {
        control.setValue(Number(match.input?.slice(0, -1)));
      }
      return null;
    }
    return null;
  };
}
const confirmPasswordValidator = control => {
  return control.value.newPassword === control.value.cfNewPassword ? null : {
    PasswordNoMatch: true
  };
};
function compareValidator(value, matchValue, errorKey) {
  const errorObject = {};
  errorObject[errorKey] = true;
  return control => {
    return control.get(value)?.value === control.get(matchValue)?.value ? null : errorObject;
  };
}
function maxLengthRestriction(maxLength) {
  return control => {
    const value = control.value;
    if (value && value.length > maxLength) {
      control.setValue(value.slice(0, maxLength)); // Trim the value to maxLength
    }
    return null;
  };
}
function noWhitespaceValidator() {
  return control => {
    const value = control.value;
    if (value && /\s/.test(value)) {
      // return { 'noWhitespace': true };
      control.setValue(value.replace(' ', ''));
    }
    return null;
  };
}
function minMaxQuantityValidator(min, max) {
  return control => {
    let inputString = control.value;
    if (inputString?.slice(-4) === ' gal') {
      inputString = inputString?.slice(0, -4);
    }
    if (inputString >= min && inputString <= max && !isNaN(inputString)) {
      return null;
    }
    return {
      minMax: {
        min: min,
        max: max
      }
    };
  };
}
function quantityInputValidator() {
  return control => {
    let doWeHaveGalInString = control.value?.slice(-4) === ' gal';
    let inputString;
    if (doWeHaveGalInString) {
      inputString = control.value.slice(0, -4);
      // console.log(inputString)
      const containsNonDigit = /[^\d]/.test(inputString);
      // console.log(containsNonDigit);
      if (containsNonDigit) {
        inputString = inputString.replace(/[^\d]/g, '');
        // console.log('containsNonDigit', inputString)
        control.setValue(inputString);
      }
    } else {
      inputString = control.value;
      const containsNonDigit = /[^\d]/.test(inputString);
      if (containsNonDigit && inputString) {
        inputString = inputString.replace(/[^\d]/g, '');
        // console.log('containsNonDigit', inputString)
        control.setValue(inputString);
      }
    }
    return null;
  };
}

/***/ }),

/***/ 477:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(1729)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map