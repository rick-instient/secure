"use strict";
exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 38405:
/*!*****************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/master.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterComponent: () => (/* binding */ MasterComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ 14764);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/shared.service */ 53936);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/urls */ 14753);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/cookie.helper */ 26546);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ 32403);
/* harmony import */ var _monorepo_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @monorepo/common-component */ 45902);
/* harmony import */ var _src_app_shared_utils_app_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/app/shared/utils/app.static */ 52386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37100);
















function MasterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "footer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
class MasterComponent {
  constructor(sharedService, authService, toastService, router, cookieHelper, heatfleetHeaderService, appService) {
    this.sharedService = sharedService;
    this.authService = authService;
    this.toastService = toastService;
    this.router = router;
    this.cookieHelper = cookieHelper;
    this.heatfleetHeaderService = heatfleetHeaderService;
    this.appService = appService;
    this.isCompanyApp = _src_app_shared_utils_app_static__WEBPACK_IMPORTED_MODULE_8__.isCompanyApp;
  }
  ngOnInit() {
    this.heatfleetHeaderService.initHeatFleetHeader('secure', _shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS, _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.client_url, '/assets/icons/logo.svg', '/assets/icons/company-logo.svg', '/assets/icons/company-name-logo.svg');
    if (this.router.url === `/${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.LOGIN}` || this.router.url === _shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.LOGIN) {
      this.loginProcess();
    }
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart) {
        window.scrollTo(0, 0);
        if (this.loginInfo) {
          this.loginInfo.unsubscribe();
        }
        if (event.url === `/${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.LOGIN}` || event.url === _shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.LOGIN) {
          this.loginProcess();
        }
        if (this.heatfleetHeaderService.isMenuOpen) {
          this.heatfleetHeaderService.toggleMenu();
        }
        if (this.heatfleetHeaderService.isPageMenuOpen) {
          this.heatfleetHeaderService.togglePageMenu();
        }
      }
    });
  }
  loginProcess() {
    this.loginInfo = this.authService.isLoginDone$.subscribe(res => {
      if (res.isLoginDone) {
        if (!this.appService.isApp) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.is_local) {
            this.authService.processLoginResponse(res.loginResponse, '.heatfleet.com');
          } else {
            this.authService.processLoginResponse(res.loginResponse);
          }
          const zipCode = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.Cookie.ZIP_CODE);
          let gallons = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.Cookie.GALLONS);
          if (gallons == '') {
            gallons = '100';
          }
          if (zipCode !== '') {
            this.router.navigate([`${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.OIL_PROVIDER_SELECTOR}/${zipCode}/0/0/4/${gallons}`]);
          } else {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.is_local) {
              window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.client_url;
            } else {
              this.router.navigate([`${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.OIL_PROVIDER_SELECTOR}/13107/0/0/4/100`]);
            }
          }
        } else {
          const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expires in 7 days
          const expires = expirationDate.toUTCString();
          this.authService.processLoginResponse(res.loginResponse, 'localhost', '/', expires);
          const zipCode = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.Cookie.ZIP_CODE);
          let gallons = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.Cookie.GALLONS);
          if (gallons == '') {
            gallons = '100';
          }
          if (zipCode !== '') {
            this.router.navigate([`${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.OIL_PROVIDER_SELECTOR}/${zipCode}/0/0/4/${gallons}`]);
          } else {
            this.router.navigate(['/']);
          }
        }
        this.toastService.toastMessage.next({
          title: 'Success',
          msg: 'Login successful',
          type: 'success'
        });
        this.authService.isLoginDone.next({
          isLoginDone: false,
          loginResponse: null
        });
      }
    });
  }
  closeMenu() {
    if (this.heatfleetHeaderService.isMenuOpen) {
      this.heatfleetHeaderService.toggleMenu();
    }
    if (this.heatfleetHeaderService.isPageMenuOpen) {
      this.heatfleetHeaderService.togglePageMenu();
    }
  }
  ngOnDestroy() {
    if (this.loginInfo) {
      this.loginInfo.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function MasterComponent_Factory(t) {
    return new (t || MasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_4__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_5__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.HeatfleetHeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: MasterComponent,
    selectors: [["app-master"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 1,
    consts: [[1, "hf-shadow-1", 2, "position", "sticky", "top", "0", "z-index", "1500"], [1, "hf-secondary-bg", 3, "click"], [2, "flex-grow", "1", "width", "100vw"], [1, "hf-secondary-bg"]],
    template: function MasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "lib-heatfleet-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MasterComponent_Template_main_click_2_listener() {
          return ctx.closeMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MasterComponent_Conditional_5_Template, 2, 0, "footer", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](5, !ctx.isCompanyApp ? 5 : -1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _monorepo_common_component__WEBPACK_IMPORTED_MODULE_7__.HeatfleetHeaderComponent],
    styles: ["main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL21hc3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9wYWdlcy9tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSIsIm1haW4ge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 16066:
/*!**************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/master.routes.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master.component */ 38405);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/urls */ 14753);
/* harmony import */ var _shared_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/guard/login.guard */ 28137);
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guard/auth.guard */ 22978);
/* harmony import */ var _shared_guard_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guard/user.guard */ 7187);
/* harmony import */ var _shared_guard_secure_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/guard/secure.guard */ 40177);







const routes = [{
  path: '',
  component: _master_component__WEBPACK_IMPORTED_MODULE_0__.MasterComponent,
  children: [{
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ROOT,
    // canActivate: mapToCanActivate([HomeGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 114).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.component */ 38114)).then(c => c.HomePageComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.LOGIN,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__.LoginGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 275).then(__webpack_require__.bind(__webpack_require__, /*! @monorepo/auth */ 80275)).then(c => c.AuthComponent)
  }, {
    path: `${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.OIL_PROVIDER_SELECTOR}/:zipCode/:tankSize/:customerType/:orderType/:quantity`,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 278).then(__webpack_require__.bind(__webpack_require__, /*! ./oil-provider-selector/oil-provider-selector.component */ 49278)).then(c => c.OilProviderSelectorComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ORDER_LOGIN,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard, _shared_guard_secure_guard__WEBPACK_IMPORTED_MODULE_5__.SecureGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 322).then(__webpack_require__.bind(__webpack_require__, /*! ./order-login/order-login.component */ 78322)).then(c => c.OrderLoginComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.CONFIRM_ADDRESS,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _shared_guard_secure_guard__WEBPACK_IMPORTED_MODULE_5__.SecureGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 106).then(__webpack_require__.bind(__webpack_require__, /*! ./confirm-address/confirm-address.component */ 84106)).then(c => c.ConfirmAddressComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.USER_ACCOUNT,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 298).then(__webpack_require__.bind(__webpack_require__, /*! ./user-account/user-account.component */ 52298)).then(c => c.UserAccountComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ORDERS,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 410).then(__webpack_require__.bind(__webpack_require__, /*! ./orders/orders.component */ 22410)).then(c => c.OrdersComponent)
  }, {
    path: `${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ORDER_DETAILS}/:orderId`,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 722).then(__webpack_require__.bind(__webpack_require__, /*! ./order-details/order-details.component */ 77722)).then(c => c.OrderDetailsComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.FUEL_ADDITIVE,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard, _shared_guard_secure_guard__WEBPACK_IMPORTED_MODULE_5__.SecureGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 122).then(__webpack_require__.bind(__webpack_require__, /*! ./fuel-additive/fuel-additive.component */ 32122)).then(c => c.FuelAdditiveComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.PAYMENT,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard, _shared_guard_secure_guard__WEBPACK_IMPORTED_MODULE_5__.SecureGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 658).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.component */ 10658)).then(c => c.PaymentComponent)
  }, {
    path: _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.DELIVERY_DETAILS,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.mapToCanActivate)([_shared_guard_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard, _shared_guard_secure_guard__WEBPACK_IMPORTED_MODULE_5__.SecureGuard]),
    loadComponent: () => __webpack_require__.e(/*! import() */ 362).then(__webpack_require__.bind(__webpack_require__, /*! ./delivery-details/delivery-details.component */ 75362)).then(c => c.DeliveryDetailsComponent)
  }]
}];

/***/ }),

/***/ 14764:
/*!************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/components/footer/footer.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);



function FooterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A9 Davos Energy LLC 2024. All rights reserved. CT Online Heating Oil Marketplace Reg#0001286. Contact By using our site/apps, you confirm you've read, understood, and agreed to our Terms and Conditions & Privacy Policy. Fuel orders for heating use only. Per gallon fuel prices reflect tax-exempt delivery. If you specify taxable delivery, taxes are displayed on payment screen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FooterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A9 Davos Energy LLC 2024. All rights reserved. CT Online Heating Oil Marketplace Reg#0001286. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " By using our site/apps, you confirm you've read, understood, and agreed to our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " & ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Privacy Policy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Fuel orders for heating use only. Per gallon fuel prices reflect tax-exempt delivery. If you specify taxable delivery, taxes are displayed on payment screen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class FooterComponent {
  constructor(appService) {
    this.appService = appService;
    this.isApp = false;
  }
  ngOnInit() {
    this.isApp = this.appService.isApp;
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "footer", "hf-primary-bg"], [1, "hf-body-3", 2, "display", "block", "text-align", "center"], ["target", "_blank", "href", "https://heatfleet.com/contact.html"], ["target", "_blank", "href", "https://heatfleet.com/terms-conditions.html"], ["target", "_blank", "href", "https://heatfleet.com/privacy-policy.html"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FooterComponent_Conditional_1_Template, 2, 0, "span", 1)(2, FooterComponent_Conditional_2_Template, 11, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx.isApp ? 1 : 2);
      }
    },
    styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vYXBwcy9oZWF0ZmxlZXQvc2VjdXJlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufSIsIi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 22978:
/*!******************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/guard/auth.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cookie.helper */ 26546);
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/urls */ 14753);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 61504);








class AuthGuard {
  constructor(router, cookieHelper, authService) {
    this.router = router;
    this.cookieHelper = cookieHelper;
    this.authService = authService;
  }
  canActivate() {
    const isLoggin = this.checkIfUserIsLoggedIn();
    if (isLoggin) {
      this.authService.makeUserCache();
    } else {
      this.authService.clearUserCache();
    }
    return isLoggin;
  }
  checkIfUserIsLoggedIn() {
    try {
      const authToken = this.cookieHelper.getAuthToken();
      const verifyAuthToken = this.cookieHelper.verifyAuthToken(authToken);
      if (verifyAuthToken) {
        return true;
      }
      this.router.navigate([_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.LOGIN]);
      return false;
    } catch (error) {
      this.router.navigate([_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.LOGIN]);
      return false;
    }
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28137:
/*!*******************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/guard/login.guard.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginGuard: () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cookie.helper */ 26546);
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/urls */ 14753);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 61504);








class LoginGuard {
  constructor(router, cookieHelper, authService) {
    this.router = router;
    this.cookieHelper = cookieHelper;
    this.authService = authService;
  }
  canActivate() {
    try {
      const authToken = this.cookieHelper.getAuthToken();
      const verifyAuthToken = this.cookieHelper.verifyAuthToken(authToken);
      if (verifyAuthToken) {
        this.router.navigate([_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ROOT]);
        return false;
      }
      this.authService.clearUserCache();
      return true;
    } catch (error) {
      this.authService.clearUserCache();
      return true;
    }
  }
  static #_ = this.ɵfac = function LoginGuard_Factory(t) {
    return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LoginGuard,
    factory: LoginGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 40177:
/*!********************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/guard/secure.guard.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureGuard: () => (/* binding */ SecureGuard)
/* harmony export */ });
/* harmony import */ var _services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cookie.helper */ 26546);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/urls */ 14753);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 32403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 61504);









class SecureGuard {
  constructor(router, cookieHelper, appService, storeService) {
    this.router = router;
    this.cookieHelper = cookieHelper;
    this.appService = appService;
    this.storeService = storeService;
  }
  canActivate() {
    this.storeService.checkKeyInStore('orderParams', orderParams => {
      if (!orderParams) {
        const zipCode = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.ZIP_CODE);
        let gallons = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.Cookie.GALLONS);
        if (gallons == '') {
          gallons = '100';
        }
        if (!this.appService.isApp) {
          if (zipCode !== '') {
            this.router.navigate([`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.OIL_PROVIDER_SELECTOR}/${zipCode}/0/0/4/${gallons}`]);
          } else {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.is_local) {
              window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.client_url;
            } else {
              this.router.navigate([`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.OIL_PROVIDER_SELECTOR}/13107/0/0/4/100`]);
            }
          }
        } else {
          if (zipCode !== '') {
            this.router.navigate([`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.OIL_PROVIDER_SELECTOR}/${zipCode}/0/0/4/${gallons}`]);
          } else {
            this.router.navigate(['/']);
          }
        }
        return false;
      } else {
        return true;
      }
    });
    return true;
  }
  static #_ = this.ɵfac = function SecureGuard_Factory(t) {
    return new (t || SecureGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.StoreService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SecureGuard,
    factory: SecureGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7187:
/*!******************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/guard/user.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserGuard: () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var _services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cookie.helper */ 26546);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);





// just make user caches
class UserGuard {
  constructor(cookieHelper, authService) {
    this.cookieHelper = cookieHelper;
    this.authService = authService;
  }
  canActivate() {
    try {
      const authToken = this.cookieHelper.getAuthToken();
      const verifyAuthToken = this.cookieHelper.verifyAuthToken(authToken);
      if (verifyAuthToken) {
        this.authService.makeUserCache();
        return true;
      }
      this.authService.clearUserCache();
      return true;
    } catch (error) {
      this.authService.clearUserCache();
      return true;
    }
  }
  static #_ = this.ɵfac = function UserGuard_Factory(t) {
    return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: UserGuard,
    factory: UserGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 53936:
/*!*************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/services/shared.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedService: () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 32403);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 81544);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37100);




class SharedService {
  constructor() {
    this.emailKey = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.phoneNumberKey = /^\(\d{3}\) \d{3}-\d{4}$/;
    this.isUserLoggedIn = false;
    this.isMenuOpen = false;
    this.isPageMenuOpen = false;
    this.selectedAddress = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    this.selectedAddress$ = this.selectedAddress.asObservable();
  }
  getEncryptedValue(value) {
    const key = crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Base64.parse(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cryptojs_key);
    const iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Base64.parse(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cryptojs_iv);
    const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(value, key, {
      iv: iv,
      mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__.mode.CBC,
      padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__.pad.Pkcs7
    });
    const encryptedString = encrypted.toString();
    return encryptedString;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  togglePageMenu() {
    this.isPageMenuOpen = !this.isPageMenuOpen;
  }
  static #_ = this.ɵfac = function SharedService_Factory(t) {
    return new (t || SharedService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: SharedService,
    factory: SharedService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 52386:
/*!******************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/utils/app.static.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSettings: () => (/* binding */ appSettings),
/* harmony export */   appStaticText: () => (/* binding */ appStaticText),
/* harmony export */   isCompanyApp: () => (/* binding */ isCompanyApp)
/* harmony export */ });
const isCompanyApp = true;
const appSettings = {
  companyId: '21303',
  companyName: 'Capitol City Oil'
};
const appStaticText = {
  homeButtoTitle: 'CHECK PRICE',
  oilSelectButtoTitle: 'SEARCH',
  companyNumber: '12796',
  title: 'Discount heating oil, delivered.'
};

/***/ })

};
;
//# sourceMappingURL=66.js.map