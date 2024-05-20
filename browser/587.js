"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[587],{

/***/ 587:
/*!********************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/home/home.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/app.static */ 7231);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/urls */ 308);
/* harmony import */ var _monorepo_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @monorepo/common-component */ 595);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cookie.helper */ 3915);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-editor */ 1813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7470);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1817);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/shared.service */ 2939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);























const HomePageComponent_Conditional_33_Defer_1_DepsFn = () => [__webpack_require__.e(/*! import() */ 493).then(__webpack_require__.bind(__webpack_require__, /*! ../../shared/components/address/address.component */ 2493)).then(m => m.AddressComponent)];
const _c0 = a0 => ({
  "ios-onload-view-adjustment": a0
});
const _c1 = a0 => ({
  "selected": a0
});
function HomePageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.ctaText, " ");
  }
}
function HomePageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusIn", function HomePageComponent_Conditional_15_Template_hf_input_focusIn_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.zipFocus());
    })("focusOut", function HomePageComponent_Conditional_15_Template_hf_input_focusOut_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.zipBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx_r0.zip)("descriptionType", ctx_r0.zipMT)("inputDescription", ctx_r0.zipIM);
  }
}
function HomePageComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r0.selectedAddress.billingStreet1, " ", ctx_r0.selectedAddress.deliveryZIP, "");
  }
}
function HomePageComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.zip.value);
  }
}
function HomePageComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomePageComponent_Conditional_16_Template_hf_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.openAddressModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomePageComponent_Conditional_16_Conditional_1_Template, 2, 2, "p", 26)(2, HomePageComponent_Conditional_16_Conditional_2_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Deliver To")("inputType", "custom")("inputDescription", ctx_r0.zipIM)("descriptionType", ctx_r0.zipMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, ctx_r0.selectedAddress["billingStreet1"] ? 1 : 2);
  }
}
function HomePageComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Contracts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "No Commitments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "No Gimmicks.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomePageComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Price compare 372 oil companies and save big.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomePageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "lib-capitolcityoil-howitworks");
  }
}
function HomePageComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "lib-secure-howitworks");
  }
}
function HomePageComponent_Conditional_33_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-address", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showSelectButton", true)("showAllSelectButton", true);
  }
}
function HomePageComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HomePageComponent_Conditional_33_Defer_0_Template, 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefer"](1, 0, HomePageComponent_Conditional_33_Defer_1_DepsFn);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdeferWhen"](ctx_r0.appService.isBrowserRendering);
  }
}
class HomePageComponent {
  constructor(http, router, toastService, cookieHelper, appService, storeService, authService, sharedService) {
    this.http = http;
    this.router = router;
    this.toastService = toastService;
    this.cookieHelper = cookieHelper;
    this.appService = appService;
    this.storeService = storeService;
    this.authService = authService;
    this.sharedService = sharedService;
    this.ctaText = "Find today's best local oil prices per gallon, instantly";
    this.backgroundImage = 'https://media-cdn.heatingoilfinder.com/oil-price/1ly-ny-T-1-Patchogue-Heating_Oil_Truck-Brick_House.jpg';
    this.backgroundImageAlt = 'Photo of a truck delivering heating oil';
    this.townZip = '';
    this.quantity = '100 gal';
    this.chatBotScript = null;
    this.searchButtonDisabled = false;
    this.searchDefaultText = 'QUOTE';
    this.searchButtonText = this.searchDefaultText;
    this.isCompanyApp = _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_0__.isCompanyApp;
    this.isHeatingOil = true;
    this.selectedAddress = {};
    this.showAddressModal = false;
    this.zipSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [ngx_editor__WEBPACK_IMPORTED_MODULE_10__.Validators.required(), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.maxLengthRestriction)(5), ngx_editor__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(5)]),
      qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [ngx_editor__WEBPACK_IMPORTED_MODULE_10__.Validators.required(), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.quantityInputValidator)(), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.minMaxQuantityValidator)(0, 2000)])
    });
    this.zipIM = 'Invalid Zip Code';
    this.zipMT = '';
    this.qtyIM = 'Invalid Quantity';
    this.qtyMT = '';
  }
  get zip() {
    return this.zipSearchForm.get('zip');
  }
  get qty() {
    return this.zipSearchForm.get('qty');
  }
  ngOnInit() {
    let zipCode = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.Cookie.ZIP_CODE);
    let gallons = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.Cookie.GALLONS);
    if (zipCode !== '') {
      this.townZip = zipCode;
    }
    if (gallons !== '') {
      this.quantity = gallons;
    }
    this.zip.setValue(this.townZip);
    this.qty.setValue(this.quantity);
    if (_shared_utils_app_static__WEBPACK_IMPORTED_MODULE_0__.isCompanyApp) {
      this.ctaText = _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_0__.appStaticText.title;
    }
    if (this.authService.isUserLoggedIn) {
      this.getUserAddress();
    }
  }
  getUserAddress() {
    this.getAddressSubscription = this.sharedService.selectedAddress$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(address => {
      this.selectedAddress = address;
      if (address['deliveryZIP']) {
        this.zip.setValue(address['deliveryZIP']);
      }
      this.showAddressModal = false;
    });
  }
  // addChatBot() {
  //   let hiddenDiv: any = document.querySelector('div[style="visibility: hidden;"]');
  //   if (hiddenDiv) {
  //     hiddenDiv.style.visibility = "visible";
  //   } else {
  //     this.chatBotScript = this.renderer.createElement('script');
  //     this.chatBotScript.id = 'ze-snippet';
  //     this.chatBotScript.src = 'https://media-cdn.heatfleet.com/Js/zendesk.js?key=95ced1dc-8526-48ee-9406-2ea8f48046bf';
  //     this.renderer.appendChild(document.head, this.chatBotScript);
  //   }
  // }
  changeTypeOfOil(isHeatingOil) {
    if (this.isHeatingOil === isHeatingOil) return;
    this.isHeatingOil = !this.isHeatingOil;
  }
  zipSearchFormSubmit() {
    if (this.zipSearchForm.invalid) {
      // zip
      if (this.zip.invalid && this.zip.errors) {
        this.zipMT = 'error';
        if (this.zip.errors['required']) {
          this.zipIM = 'Required';
        }
        if (this.zip.errors['minlength']) {
          this.zipIM = 'Zip must be 5-digit code.';
        }
        let isZipValid = this.zip.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.zipIM = '';
            this.zipMT = '';
            isZipValid.unsubscribe();
          }
        });
      }
      // qty
      if (this.qty.invalid && this.qty.errors) {
        this.qtyMT = 'error';
        if (this.qty.errors['required']) {
          this.qtyIM = 'Required';
        }
        if (this.qty.errors['minMax']) {
          this.qtyIM = `Maximum quantity: ${this.qty.errors['minMax']['max']}`;
        }
        let isQtyValid = this.qty.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.qtyIM = '';
            this.qtyMT = '';
            isQtyValid.unsubscribe();
          }
        });
      }
    } else {
      // console.log('submit valid');
      this.callZipCodeCheckApi();
    }
  }
  callZipCodeCheckApi() {
    let quantity = Number(this.qty['value'].replace(/[^0-9]/g, ''));
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/offer/zipcodecheck?zipCode=${this.zip['value']}`;
    this.searchButtonDisabled = true;
    this.searchButtonText = '...';
    this.zipCodeCheckApiSubscription = this.http.get(url).subscribe({
      next: res => {
        if (res) {
          console.log(res);
          if (res['zipCodeExists'] == false) {
            this.toastService.toastMessage.next({
              title: 'Invalid ZIP Code',
              msg: 'Please enter the ZIP code for the delivery location where you would like a heating oil price quote.',
              type: 'error'
            });
          } else if (quantity < res['minimumQuantity']) {
            this.toastService.toastMessage.next({
              title: 'Invalid Quantity',
              msg: `Please enter a valid quantity. The minimum quantity for this city is ${res['minimumQuantity']}`,
              type: 'error'
            });
          } else {
            this.router.navigate([`/${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__.URLS.OIL_PROVIDER_SELECTOR}/${this.zip['value']}/0/0/4/${quantity}`]);
          }
        }
        this.searchButtonDisabled = false;
        this.searchButtonText = this.searchDefaultText;
      },
      error: err => {
        console.log(err);
        this.searchButtonDisabled = false;
        this.searchButtonText = this.searchDefaultText;
      }
    });
  }
  qtyBlur() {
    if (this.qty['value'] === '') {
      this.qty.setValue(this.qtyPerviousValue);
    } else {
      this.qty.setValue(this.qty['value'] + ' gal');
    }
  }
  qtyFocus() {
    if (this.qty['value']) {
      this.qtyPerviousValue = this.qty['value'];
    }
    this.qty.setValue('');
  }
  zipBlur() {
    if (!this.zip['value']) {
      this.zip.setValue(this.zipPerviousValue);
    }
  }
  zipFocus() {
    this.zipPerviousValue = this.zip['value'];
    this.zip.setValue(null);
  }
  openAddressModal() {
    this.showAddressModal = true;
  }
  closeAddressModal(isClosed) {
    if (isClosed) {
      this.showAddressModal = false;
    }
  }
  ngOnDestroy() {
    if (this.zipCodeCheckApiSubscription) {
      this.zipCodeCheckApiSubscription.unsubscribe();
    }
    // let hiddenDiv: any = document.querySelector('div[style="visibility: visible;"]');
    // if (hiddenDiv) {
    //   hiddenDiv.style.visibility = "hidden";
    // }
  }
  static #_ = this.ɵfac = function HomePageComponent_Factory(t) {
    return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_5__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: HomePageComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 25,
    consts: [[1, "hero-section"], [1, "onload-view", 3, "ngClass"], [1, "hero-img", 3, "src", "alt", "title"], [1, "hero-main"], [1, "type-of-oil"], [1, "oil-option", "heating-oil", "hf-dark-font", 3, "click", "ngClass"], [1, "oil-option", "propane", "hf-dark-font", 3, "click", "ngClass"], [1, "hero-main-content"], [1, "h1-heading", "hf-heading-3", "hf-dark-font"], [1, "input-wrapper", 3, "ngSubmit", "formGroup"], [1, "row-1"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", "inputLabel", "Delivery ZIP", "inputType", "number", "inputPlaceholder", "Enter ZIP", 3, "inputValue", "descriptionType", "inputDescription"], [1, "row-2"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/quantity.svg", "inputLabel", "Quantity", "inputType", "tel", "inputPlaceholder", "Enter Quantity", 3, "focusIn", "focusOut", "inputValue", "descriptionType", "inputDescription"], [1, "submit-btn"], ["type", "submit", "buttonSize", "large", 1, "search-btn", 3, "labelText", "isDisabled"], [1, "commitment"], [1, "commitment-content"], [1, "commitment-text-wrapper"], [1, "commitment-arrow-down"], [1, "left", "hf-primary-bg"], [1, "right", "hf-primary-bg"], [3, "modelClosed", "showModel", "modelSize"], [1, "address-modal"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", "inputLabel", "Delivery ZIP", "inputType", "number", "inputPlaceholder", "Enter ZIP", 3, "focusIn", "focusOut", "inputValue", "descriptionType", "inputDescription"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", 3, "click", "inputLabel", "inputType", "inputDescription", "descriptionType"], [1, "hf-heading-7", "hf-dark-grey-text-color", "hf-ellipsis"], [1, "hf-heading-7", "hf-dark-grey-text-color"], [1, "hf-dark-font", "hf-heading-3"], [3, "showSelectButton", "showAllSelectButton"]],
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3)(5, "hf-card")(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomePageComponent_Template_div_click_7_listener() {
          return ctx.changeTypeOfOil(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Heating Oil");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomePageComponent_Template_div_click_9_listener() {
          return ctx.changeTypeOfOil(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Propane");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, HomePageComponent_Conditional_12_Template, 2, 1, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function HomePageComponent_Template_form_ngSubmit_13_listener() {
          return ctx.zipSearchFormSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, HomePageComponent_Conditional_15_Template, 1, 3, "hf-input", 11)(16, HomePageComponent_Conditional_16_Template, 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 12)(18, "hf-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusIn", function HomePageComponent_Template_hf_input_focusIn_18_listener() {
          return ctx.qtyFocus();
        })("focusOut", function HomePageComponent_Template_hf_input_focusOut_18_listener() {
          return ctx.qtyBlur();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "hf-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, HomePageComponent_Conditional_24_Template, 8, 0)(25, HomePageComponent_Conditional_25_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "div", 20)(28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, HomePageComponent_Conditional_29_Template, 1, 0, "lib-capitolcityoil-howitworks")(30, HomePageComponent_Conditional_30_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "hf-model", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelClosed", function HomePageComponent_Template_hf_model_modelClosed_31_listener($event) {
          return ctx.closeAddressModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, HomePageComponent_Conditional_33_Template, 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c0, ctx.appService.isIosApp));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", "assets/images/home_img.webp", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx.backgroundImageAlt)("title", ctx.backgroundImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c1, ctx.isHeatingOil));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c1, !ctx.isHeatingOil));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](12, ctx.ctaText !== "" ? 12 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.zipSearchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](15, !ctx.authService.isUserLoggedIn ? 15 : 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.qty)("descriptionType", ctx.qtyMT)("inputDescription", ctx.qtyIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelText", ctx.searchButtonText)("isDisabled", ctx.searchButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](24, ctx.isCompanyApp ? 24 : 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](29, ctx.isCompanyApp ? 29 : 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showModel", ctx.showAddressModal)("modelSize", "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](33, ctx.authService.isUserLoggedIn ? 33 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfButtonComponent, _monorepo_common_component__WEBPACK_IMPORTED_MODULE_4__.CapitolcityoilHowitworksComponent, _monorepo_common_component__WEBPACK_IMPORTED_MODULE_4__.SecureHowitworksComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfModelComponent],
    styles: [".input-wrapper hf-input .hf-input {\n  border: none;\n}\n  .input-wrapper hf-input .hf-input img {\n  min-width: 30px;\n  height: 30px;\n}\n\n  .hero-main .hf-card.hf-primary-card {\n  background: transparent;\n  padding: 0px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: none;\n}\n\n  .search-btn .hf-button {\n  padding: 11px 15px !important;\n}\n\n.onload-view[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 500px;\n  height: calc(100vh - 110px - 64px);\n}\n\n.ios-onload-view-adjustment[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 64px - var(--status-bar-height));\n}\n\n.type-of-oil[_ngcontent-%COMP%] {\n  height: 35px;\n  display: flex;\n  align-items: center;\n}\n\n.oil-option[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.selected[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.commitment[_ngcontent-%COMP%] {\n  background: var(--hf-main-color);\n  height: 110px;\n  position: relative;\n  overflow: hidden;\n}\n\n.commitment-content[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n}\n.commitment-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.commitment-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.commitment-arrow-down[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 30px;\n  display: flex;\n}\n\n.commitment-arrow-down[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .commitment-arrow-down[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.commitment-arrow-down[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  border-top-right-radius: 50px;\n  transform: skew(52deg, 0) translate(-20px, 1px);\n}\n\n.commitment-arrow-down[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  border-top-left-radius: 50px;\n  transform: skew(-52deg, 0) translate(20px, 1px);\n}\n\n.hero-main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.h1-heading[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.hero-main-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  width: 80vw;\n  padding: 14px;\n  max-width: 500px;\n}\n\n.hero-main-content[_ngcontent-%COMP%], .input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.row-2[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n@media (max-width: 500px) {\n  .commitment-text-wrapper[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNBRjs7QURHQTtFQUNFLDZEQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7QUNBSjtBREdFO0VBQ0UscUJBQUE7QUNESjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBRE1BOztFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsNkJBQUE7RUFDQSwrQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsNEJBQUE7RUFDQSwrQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0UsZ0JBQUE7RUNIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5pbnB1dC13cmFwcGVyIGhmLWlucHV0IC5oZi1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5oZXJvLW1haW4gLmhmLWNhcmQuaGYtcHJpbWFyeS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zZWFyY2gtYnRuIC5oZi1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDExcHggMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub25sb2FkLXZpZXcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCAtIDY0cHgpOyAvL3JlbW92ZSAtIDg1cHggZm9yIGltZyB0YWtpbmcgZnVsbFxyXG59XHJcblxyXG4uaW9zLW9ubG9hZC12aWV3LWFkanVzdG1lbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4IC0gNjRweCAtIHZhcigtLXN0YXR1cy1iYXItaGVpZ2h0KSk7XHJcbn1cclxuXHJcbi50eXBlLW9mLW9pbCB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm9pbC1vcHRpb24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLmhlcm8taW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jb21taXRtZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1tYWluLWNvbG9yKTtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29tbWl0bWVudC1jb250ZW50IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbW1pdG1lbnQtYXJyb3ctZG93biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5jb21taXRtZW50LWFycm93LWRvd24gLmxlZnQsXHJcbi5jb21taXRtZW50LWFycm93LWRvd24gLnJpZ2h0IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uY29tbWl0bWVudC1hcnJvdy1kb3duIC5sZWZ0IHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICB0cmFuc2Zvcm06IHNrZXcoNTJkZWcsIDApIHRyYW5zbGF0ZSgtMjBweCwgMXB4KTtcclxufVxyXG5cclxuLmNvbW1pdG1lbnQtYXJyb3ctZG93biAucmlnaHQge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC01MmRlZywgMCkgdHJhbnNsYXRlKDIwcHgsIDFweCk7XHJcbn1cclxuXHJcbi5oZXJvLW1haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG59XHJcblxyXG4uaDEtaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1tYWluLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICB3aWR0aDogODB2dztcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5oZXJvLW1haW4tY29udGVudCxcclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5yb3ctMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb21taXRtZW50LXRleHQtd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4vLyBpbnB1dCB7XHJcbi8vICAgICBjb2xvcjogIzY2NjY2NjtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGRkZGQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuLy8gICAgIGhlaWdodDogNDhweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dDpmb2N1cyB7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b24ge1xyXG4vLyAgICAgbWluLXdpZHRoOiA4NXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctZGVmYXVsdCk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4vLyAgICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDA7XHJcbi8vICAgICBmb250LXNpemU6IDE5cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHM7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbjpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbjpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1idXR0b24tcHJpbWFyeS1iZy1ob3Zlcik7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbjphY3RpdmUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYnV0dG9uLXByaW1hcnktYmctaG92ZXIpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcclxuLy8gfVxyXG5cclxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBwIHtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG5cclxuLy8gdWwge1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVyby1zZWN0aW9uIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjlmZDtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8taW1nIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5oZXJvLW1haW4ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgcGFkZGluZzogMjJweCAwcHggMjJweCAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5oZXJvLWxlZnQsXHJcbi8vIC5oZXJvLXJpZ2h0IHtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAuaGVyby1sZWZ0IHtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8tcmlnaHQge1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8tbGVmdC1tYWluLFxyXG4vLyAuaGVyby1yaWdodC1tYWluIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjMDAwMDAwMjY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4vLyAgICAgcGFkZGluZzogMjVweCAyMHB4IDI1cHggMjBweDtcclxuLy8gICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5oZXJvLWxlZnQtbWFpbiB7XHJcbi8vICAgICB3aWR0aDogNDcwcHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVyby1yaWdodC1tYWluIHtcclxuLy8gICAgIHdpZHRoOiAzMTVweDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVyby1sZWZ0LXRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDBweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVyby1yaWdodC10aXRsZSB7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8tYnVsbGV0LXBvaW50IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8tYnVsbGV0LXBvaW50IGltZyB7XHJcbi8vICAgICBoZWlnaHQ6IDE5cHg7XHJcbi8vICAgICBhc3BlY3QtcmF0aW86IDEvMTtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDFweDtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8tYnVsbGV0LXBvaW50IHAge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmhlcm8tYnVsbGV0LXBvaW50Omxhc3QtY2hpbGQgcCB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wYXlwYWwtc2hvcnQtbG9nbyB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLnppcC1jb2RlLXNlYXJjaCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcclxuLy8gfVxyXG5cclxuLy8gLmRlbGl2ZXJ5LWlucHV0LFxyXG4vLyAucXVhbnRpdHktaW5wdXQge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU3ZTg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICB3aWR0aDogNTAlO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAycHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDExNnB4O1xyXG4vLyB9XHJcblxyXG4vLyAucXVhbnRpdHktaW5wdXQge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmlucHV0LWljb24ge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZGVsaXZlcnktaW5wdXQge1xyXG5cclxuLy8gICAgIC5pbnB1dC1pY29uIHtcclxuLy8gICAgICAgICBpbWcge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnF1YW50aXR5LWlucHV0IHtcclxuLy8gICAgIC5pbnB1dC1pY29uIHtcclxuLy8gICAgICAgICBpbWcge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmlucHV0IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyB9XHJcblxyXG4vLyAuaW5wdXQgcCxcclxuLy8gLmlucHV0IGxhYmVsIHtcclxuLy8gICAgIGNvbG9yOiAjNTM1NTU2O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5wdXQgaW5wdXQge1xyXG4vLyAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4vLyAgICAgY29sb3I6ICMwMDA7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBoZWlnaHQ6IDI2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5hZGQtcXVhbnRpdHkge1xyXG4vLyAgICAgd2lkdGg6IDMwJTtcclxuLy8gfVxyXG5cclxuLy8gLnNlYXJjaC1idXR0b24ge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG5cclxuLy8gICAgIGJ1dHRvbiB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgbWFyZ2luOiAxM3B4IDEycHggMTNweCAwcHg7XHJcbi8vICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW1nIHtcclxuLy8gICAgICAgICB3aWR0aDogMjVweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuc2VhcmNoLWljb24ge1xyXG4vLyAgICAgd2lkdGg6IDI1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb21wYW55LWxvZ29zIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ28ge1xyXG4vLyAgICAgZmxleDogMTtcclxuLy8gICAgIG1pbi13aWR0aDogMjUlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cclxuLy8gICAgIC5oZXJvLW1haW4ge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaGVyby1sZWZ0LW1haW4ge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4vLyAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmhlcm8tcmlnaHQtbWFpbiB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4vLyAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmlucHV0LWljb24ge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHJcbi8vICAgICAuaGVyby1sZWZ0LFxyXG4vLyAgICAgLmhlcm8tcmlnaHQge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5oZXJvLWxlZnQtbWFpbiB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5oZXJvLXJpZ2h0LW1haW4ge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cclxuLy8gICAgIC5oZXJvLXJpZ2h0IHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuLy8gICAgIC5oZXJvLWltZyB7XHJcbi8vICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5oZXJvLWxlZnQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4vLyAgICAgLmhlcm8tbGVmdCB7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaGVyby1yaWdodCB7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5oZXJvLWxlZnQtbWFpbiB7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNzVweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaGVyby1yaWdodC1tYWluIHtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3NXB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG5cclxuLy8gICAgIC50b3Atc2VyY2gtYmFyLW1haW4ge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuemlwLWNvZGUtc2VhcmNoIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnNlYXJjaC1idXR0b24ge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmxhc3QtaXRlbSB7XHJcbi8vICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRvcC1zZXJjaC1iYXIge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGdhcDogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLnNlYXJjaC1ib3gtbG9nbyB7XHJcbi8vICAgICB3aWR0aDogMTMwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDc1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC50b3Atc2VyY2gtYmFyLWltZyB7XHJcbi8vICAgICB3aWR0aDogMTMwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDc1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC50b3Atc2VyY2gtYmFyLW1haW4ge1xyXG4vLyAgICAgaGVpZ2h0OiA5MHB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiA3NjBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjMDAwMDAwMjY7XHJcbi8vIH1cclxuXHJcbi8vIC5jb21wYW55LWFwcC16aXAge1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5jb21wYW55LWFwcC1zZWFyY2gge1xyXG4vLyAgICAgd2lkdGg6IDI1JTtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4vLyAgICAgLnRvcC1zZXJjaC1iYXIge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4vLyAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnRvcC1zZXJjaC1iYXItbWFpbiB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweCAyMHB4IDIwcHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnRvcC1zZXJjaC1iYXItaW1nIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogNjVweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuY29tcGFueS1hcHAtemlwIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnNlYXJjaC1ib3gtbG9nbyB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIHRvcDogLTMwcHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmNvbXBhbnktYXBwLXNlYXJjaCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiIsIjo6bmctZGVlcCAuaW5wdXQtd3JhcHBlciBoZi1pbnB1dCAuaGYtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG46Om5nLWRlZXAgLmlucHV0LXdyYXBwZXIgaGYtaW5wdXQgLmhmLWlucHV0IGltZyB7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLmhlcm8tbWFpbiAuaGYtY2FyZC5oZi1wcmltYXJ5LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuc2VhcmNoLWJ0biAuaGYtYnV0dG9uIHtcbiAgcGFkZGluZzogMTFweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vbmxvYWQtdmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCAtIDY0cHgpO1xufVxuXG4uaW9zLW9ubG9hZC12aWV3LWFkanVzdG1lbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCAtIDY0cHggLSB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCkpO1xufVxuXG4udHlwZS1vZi1vaWwge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vaWwtb3B0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmhlcm8taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb21taXRtZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtbWFpbi1jb2xvcik7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbW1pdG1lbnQtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbn1cbi5jb21taXRtZW50LWNvbnRlbnQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb21taXRtZW50LWNvbnRlbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbW1pdG1lbnQtYXJyb3ctZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29tbWl0bWVudC1hcnJvdy1kb3duIC5sZWZ0LFxuLmNvbW1pdG1lbnQtYXJyb3ctZG93biAucmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jb21taXRtZW50LWFycm93LWRvd24gLmxlZnQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgdHJhbnNmb3JtOiBza2V3KDUyZGVnLCAwKSB0cmFuc2xhdGUoLTIwcHgsIDFweCk7XG59XG5cbi5jb21taXRtZW50LWFycm93LWRvd24gLnJpZ2h0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgdHJhbnNmb3JtOiBza2V3KC01MmRlZywgMCkgdHJhbnNsYXRlKDIwcHgsIDFweCk7XG59XG5cbi5oZXJvLW1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbn1cblxuLmgxLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvLW1haW4tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgd2lkdGg6IDgwdnc7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5oZXJvLW1haW4tY29udGVudCxcbi5pbnB1dC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucm93LTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29tbWl0bWVudC10ZXh0LXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 8537:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEvent: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 3255);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 8830);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 1530);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8067);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}

/***/ }),

/***/ 4876:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 9397);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 5602);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 4861:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 2136:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 4861);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 4876);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => duration$, config);
}

/***/ }),

/***/ 9103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 2083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 19:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 19);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 5152:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 8113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 5602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 9315:
/*!******************************************************************!*\
  !*** ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   rectToClientRect: () => (/* reexport safe */ _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/utils */ 3483);



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSideAxis)(placement);
  const alignmentAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignmentAxis)(placement);
  const alignLength = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAxisLength)(alignmentAxis);
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reference, floating, config) {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(floating);
    let rects = yield platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = yield fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? yield platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  });
  return function computePosition(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
function detectOverflow(_x4, _x5) {
  return _detectOverflow.apply(this, arguments);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
function _detectOverflow() {
  _detectOverflow = (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
    const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getPaddingObject)(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)(yield platform.getClippingRect({
      element: ((_await$platform$isEle = yield platform.isElement == null ? void 0 : platform.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating);
    const offsetScale = (yield platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? (yield platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
  return _detectOverflow.apply(this, arguments);
}
const arrow = options => ({
  name: 'arrow',
  options,
  fn(state) {
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        x,
        y,
        placement,
        rects,
        platform,
        elements,
        middlewareData
      } = state;
      // Since `element` is required, we don't Partial<> the type.
      const {
        element,
        padding = 0
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getPaddingObject)(padding);
      const coords = {
        x,
        y
      };
      const axis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignmentAxis)(placement);
      const length = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAxisLength)(axis);
      const arrowDimensions = yield platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element);
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (!clientSize || !(yield platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. To ensure `shift()` continues to take action,
      // a single reset is performed when this is true.
      const shouldAddOffset = !middlewareData.arrow && (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset - alignmentOffset,
          ...(shouldAddOffset && {
            alignmentOffset
          })
        },
        reset: shouldAddOffset
      };
    })();
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement) === alignment), ...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement) !== alignment)] : allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement) === alignment || (autoAlignment ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getOppositeAlignmentPlacement)(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        const {
          rects,
          middlewareData,
          placement,
          platform,
          elements
        } = state;
        const {
          crossAxis = false,
          alignment,
          allowedPlacements = _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.placements,
          autoAlignment = true,
          ...detectOverflowOptions
        } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
        const placements$1 = alignment !== undefined || allowedPlacements === _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        const currentPlacement = placements$1[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        const alignmentSides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignmentSides)(currentPlacement, rects, yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));

        // Make `computeCoords` start from the right place.
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements$1[0]
            }
          };
        }
        const currentOverflows = [overflow[(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
        const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
          placement: currentPlacement,
          overflows: currentOverflows
        }];
        const nextPlacement = placements$1[currentIndex + 1];

        // There are more placements to check.
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        const placementsSortedByMostSpace = allOverflows.map(d => {
          const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(d.placement);
          return [d.placement, alignment && crossAxis ?
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
          // Check only the mainAxis.
          d.overflows[0], d.overflows];
        }).sort((a, b) => a[1] - b[1]);
        const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(d[0]) ? 2 : 3).every(v => v <= 0));
        const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      })();
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);

        // If a reset by the arrow was caused due to an alignment offset being
        // added, we should skip any logic now since `flip()` has already done its
        // work.
        // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement);
        const isBasePlacement = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(initialPlacement) === initialPlacement;
        const rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getOppositePlacement)(initialPlacement)] : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getExpandedPlacements)(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignmentSides)(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement) {
                    resetPlacement = placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      })();
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          rects
        } = state;
        const {
          strategy = 'referenceHidden',
          ...detectOverflowOptions
        } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
        switch (strategy) {
          case 'referenceHidden':
            {
              const overflow = yield detectOverflow(state, {
                ...detectOverflowOptions,
                elementContext: 'reference'
              });
              const offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
          case 'escaped':
            {
              const overflow = yield detectOverflow(state, {
                ...detectOverflowOptions,
                altBoundary: true
              });
              const offsets = getSideOffsets(overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: offsets,
                  escaped: isAnySideFullyClipped(offsets)
                }
              };
            }
          default:
            {
              return {};
            }
        }
      })();
    }
  };
};
function getBoundingRect(rects) {
  const minX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(...rects.map(rect => rect.left));
  const minY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(...rects.map(rect => rect.top));
  const maxX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(...rects.map(rect => rect.right));
  const maxY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          placement,
          elements,
          rects,
          platform,
          strategy
        } = state;
        // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
        // ClientRect's bounds, despite the event listener being triggered. A
        // padding of 2 seems to handle this issue.
        const {
          padding = 2,
          x,
          y
        } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
        const nativeClientRects = Array.from((yield platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)(getBoundingRect(nativeClientRects));
        const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getPaddingObject)(padding);
        function getBoundingClientRect() {
          // There are two rects and they are disjoined.
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            // Find the first rect in which the point is fully inside.
            return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
          }

          // There are 2 or more connected rects.
          if (clientRects.length >= 2) {
            if ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSideAxis)(placement) === 'y') {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement) === 'top';
              const top = firstRect.top;
              const bottom = lastRect.bottom;
              const left = isTop ? firstRect.left : lastRect.left;
              const right = isTop ? firstRect.right : lastRect.right;
              const width = right - left;
              const height = bottom - top;
              return {
                top,
                bottom,
                left,
                right,
                width,
                height,
                x: left,
                y: top
              };
            }
            const isLeftSide = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement) === 'left';
            const maxRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(...clientRects.map(rect => rect.right));
            const minLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(...clientRects.map(rect => rect.left));
            const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = yield platform.getElementRects({
          reference: {
            getBoundingClientRect
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      })();
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
function convertValueToCoords(_x6, _x7) {
  return _convertValueToCoords.apply(this, arguments);
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
function _convertValueToCoords() {
  _convertValueToCoords = (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
    const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement);
    const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement);
    const isVertical = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSideAxis)(placement) === 'y';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
  return _convertValueToCoords.apply(this, arguments);
}
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);

        // If the placement is the same and the arrow caused an alignment offset
        // then we don't need to change the positioning coordinates.
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      })();
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                y
              } = _ref;
              return {
                x,
                y
              };
            }
          },
          ...detectOverflowOptions
        } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
        const coords = {
          x,
          y
        };
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSideAxis)((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement));
        const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getOppositeAxis)(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      })();
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSideAxis)(placement);
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    fn(state) {
      return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          placement,
          rects,
          platform,
          elements
        } = state;
        const {
          apply = () => {},
          ...detectOverflowOptions
        } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options, state);
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSide)(placement);
        const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getAlignment)(placement);
        const isYAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getSideAxis)(placement) === 'y';
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          availableWidth = alignment || noShift ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          availableHeight = alignment || noShift ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(overflow.left, 0);
          const xMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(overflow.right, 0);
          const yMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(overflow.top, 0);
          const yMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(overflow.top, overflow.bottom));
          }
        }
        yield apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = yield platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      })();
    }
  };
};


/***/ }),

/***/ 7925:
/*!****************************************************************!*\
  !*** ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   autoUpdate: () => (/* binding */ autoUpdate),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   platform: () => (/* binding */ platform),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/utils */ 3483);
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @floating-ui/core */ 9315);
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/utils/dom */ 5533);





function getCssDimensions(element) {
  const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.round)(width) !== offsetWidth || (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(domElement)) {
    return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.round)(rect.width) : rect.width) / width;
  let y = ($ ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.round)(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /*#__PURE__*/(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(0);
function getVisualOffsets(element) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(domElement);
    const offsetWin = offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(offsetParent) ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.rectToClientRect)({
    width,
    height,
    x,
    y
  });
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(1);
  const offsets = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(0);
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeScroll)(offsetParent);
    }
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(element)).left + (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeScroll)(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(element);
  const scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeScroll)(element);
  const body = element.ownerDocument.body;
  const width = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(body).direction === 'rtl') {
    x += (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(element);
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(element) ? getScale(element) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(element));
  } else if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(element);
  if (parentNode === stopNode || !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(parentNode) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors)(element, [], false).filter(el => (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(el) && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeName)(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(element).position === 'fixed';
  let currentNode = elementIsFixed ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(currentNode) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isLastTraversableNode)(currentNode)) {
    const computedStyle = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(currentNode);
    const currentNodeIsContaining = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(rect.top, accRect.top);
    accRect.right = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.createCoords)(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(element) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWindow)(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(element)) {
    let svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(element);
    while (svgOffsetParent && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isLastTraversableNode)(svgOffsetParent)) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isTableElement)(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isContainingBlock)(offsetParent)) {
    return win;
  }
  return offsetParent || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getContainingBlock)(element) || win;
}
const getElementRects = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = yield getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, yield getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  });
  return function getElementRects(_x) {
    return _ref2.apply(this, arguments);
  };
}();
function isRTL(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getComputedStyle)(element).direction === 'rtl';
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.floor)(top);
    const insetRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.floor)(root.clientWidth - (left + width));
    const insetBottom = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.floor)(root.clientHeight - (top + height));
    const insetLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.floor)(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(0, (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.min)(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors)(referenceEl) : []), ...(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors)(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const detectOverflow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.detectOverflow;

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_3__.computePosition)(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};


/***/ }),

/***/ 5533:
/*!************************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getContainingBlock: () => (/* binding */ getContainingBlock),
/* harmony export */   getDocumentElement: () => (/* binding */ getDocumentElement),
/* harmony export */   getNearestOverflowAncestor: () => (/* binding */ getNearestOverflowAncestor),
/* harmony export */   getNodeName: () => (/* binding */ getNodeName),
/* harmony export */   getNodeScroll: () => (/* binding */ getNodeScroll),
/* harmony export */   getOverflowAncestors: () => (/* binding */ getOverflowAncestors),
/* harmony export */   getParentNode: () => (/* binding */ getParentNode),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   isContainingBlock: () => (/* binding */ isContainingBlock),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isLastTraversableNode: () => (/* binding */ isLastTraversableNode),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isOverflowElement: () => (/* binding */ isOverflowElement),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   isTableElement: () => (/* binding */ isTableElement),
/* harmony export */   isWebKit: () => (/* binding */ isWebKit)
/* harmony export */ });
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}


/***/ }),

/***/ 3483:
/*!********************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignments: () => (/* binding */ alignments),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   createCoords: () => (/* binding */ createCoords),
/* harmony export */   evaluate: () => (/* binding */ evaluate),
/* harmony export */   expandPaddingObject: () => (/* binding */ expandPaddingObject),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   getAlignment: () => (/* binding */ getAlignment),
/* harmony export */   getAlignmentAxis: () => (/* binding */ getAlignmentAxis),
/* harmony export */   getAlignmentSides: () => (/* binding */ getAlignmentSides),
/* harmony export */   getAxisLength: () => (/* binding */ getAxisLength),
/* harmony export */   getExpandedPlacements: () => (/* binding */ getExpandedPlacements),
/* harmony export */   getOppositeAlignmentPlacement: () => (/* binding */ getOppositeAlignmentPlacement),
/* harmony export */   getOppositeAxis: () => (/* binding */ getOppositeAxis),
/* harmony export */   getOppositeAxisPlacements: () => (/* binding */ getOppositeAxisPlacements),
/* harmony export */   getOppositePlacement: () => (/* binding */ getOppositePlacement),
/* harmony export */   getPaddingObject: () => (/* binding */ getPaddingObject),
/* harmony export */   getSide: () => (/* binding */ getSide),
/* harmony export */   getSideAxis: () => (/* binding */ getSideAxis),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   placements: () => (/* binding */ placements),
/* harmony export */   rectToClientRect: () => (/* binding */ rectToClientRect),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   sides: () => (/* binding */ sides)
/* harmony export */ });
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}


/***/ }),

/***/ 9976:
/*!******************************************************************!*\
  !*** ./node_modules/ngx-editor/fesm2022/ngx-editor-commands.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyMark: () => (/* binding */ applyMark),
/* harmony export */   removeLink: () => (/* binding */ removeLink),
/* harmony export */   removeMark: () => (/* binding */ removeMark)
/* harmony export */ });
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ 7195);
/* harmony import */ var ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-editor/helpers */ 2665);


const removeLink = () => {
  return (state, dispatch) => {
    const {
      doc,
      selection,
      tr,
      schema
    } = state;
    const {
      $head: {
        pos
      },
      from,
      to
    } = selection;
    const linkMark = schema.marks['link'];
    // if the cursor is on the link without any selection
    if (from === to) {
      const $pos = doc.resolve(pos);
      const linkStart = pos - $pos.textOffset;
      const linkEnd = linkStart + $pos.parent.child($pos.index()).nodeSize;
      tr.removeMark(linkStart, linkEnd, linkMark);
    } else {
      tr.removeMark(from, to, linkMark);
    }
    if (!tr.docChanged) {
      return false;
    }
    dispatch?.(tr);
    return true;
  };
};

// Ref: https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js
const applyMark = (type, attrs = {}) => {
  return (state, dispatch) => {
    const {
      tr,
      selection
    } = state;
    const {
      empty,
      ranges,
      $from,
      $to
    } = selection;
    if (empty && selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection) {
      const {
        $cursor
      } = selection;
      if (!$cursor || !(0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_1__.markApplies)(state.doc, ranges, type)) {
        return false;
      }
      tr.addStoredMark(type.create(attrs));
      if (!tr.storedMarksSet) {
        return false;
      }
      dispatch?.(tr);
    } else {
      tr.addMark($from.pos, $to.pos, type.create(attrs));
      if (!tr.docChanged) {
        return false;
      }
      dispatch?.(tr.scrollIntoView());
    }
    return true;
  };
};
const removeMark = type => {
  return (state, dispatch) => {
    const {
      tr,
      selection,
      storedMarks,
      doc
    } = state;
    const {
      empty,
      ranges
    } = selection;
    if (empty && selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection) {
      const {
        $cursor
      } = selection;
      if (!$cursor || !(0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_1__.markApplies)(state.doc, ranges, type)) {
        return false;
      }
      if (type.isInSet(storedMarks || $cursor.marks())) {
        tr.removeStoredMark(type);
        dispatch?.(tr);
        return true;
      }
    } else {
      for (const range of ranges) {
        const {
          $from,
          $to
        } = range;
        const hasMark = doc.rangeHasMark($from.pos, $to.pos, type);
        if (hasMark) {
          tr.removeMark($from.pos, $to.pos, type);
        }
      }
      if (!tr.docChanged) {
        return false;
      }
      dispatch?.(tr.scrollIntoView());
    }
    return false;
  };
};

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2665:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-editor/fesm2022/ngx-editor-helpers.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canInsert: () => (/* binding */ canInsert),
/* harmony export */   getSelectionMarks: () => (/* binding */ getSelectionMarks),
/* harmony export */   getSelectionNodes: () => (/* binding */ getSelectionNodes),
/* harmony export */   isMarkActive: () => (/* binding */ isMarkActive),
/* harmony export */   isNodeActive: () => (/* binding */ isNodeActive),
/* harmony export */   markApplies: () => (/* binding */ markApplies),
/* harmony export */   markInputRule: () => (/* binding */ markInputRule)
/* harmony export */ });
/* harmony import */ var prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-inputrules */ 559);

const isMarkActive = (state, type) => {
  const {
    from,
    $from,
    to,
    empty
  } = state.selection;
  if (empty) {
    return Boolean(type.isInSet(state.storedMarks || $from.marks()));
  }
  return state.doc.rangeHasMark(from, to, type);
};
const findNodeType = (type, $from) => {
  for (let i = $from.depth; i > 0; i -= 1) {
    if ($from.node(i).type === type) {
      return $from.node(i).type;
    }
  }
  return null;
};
const isNodeActive = (state, type, attrs = {}) => {
  const {
    selection
  } = state;
  const {
    $from,
    to
  } = selection;
  const node = findNodeType(type, $from);
  if (!Object.entries(attrs).length || !node) {
    return Boolean(node);
  }
  return to <= $from.end() && $from.parent.hasMarkup(type, attrs);
};
const getSelectionMarks = state => {
  let marks = [];
  const {
    selection,
    storedMarks
  } = state;
  const {
    from,
    to,
    empty,
    $from
  } = selection;
  if (empty) {
    marks = storedMarks || $from.marks();
  } else {
    state.doc.nodesBetween(from, to, node => {
      marks = [...marks, ...node.marks];
    });
  }
  return marks;
};
const getSelectionNodes = state => {
  const nodes = [];
  const {
    selection: {
      from,
      to
    }
  } = state;
  state.doc.nodesBetween(from, to, node => {
    nodes.push(node);
  });
  return nodes;
};

// Ref: https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js
const markApplies = (doc, ranges, type) => {
  for (const range of ranges) {
    const {
      $from,
      $to
    } = range;
    let canApply = $from.depth === 0 ? doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, node => {
      if (canApply) {
        return false;
      }
      canApply = node.inlineContent && node.type.allowsMarkType(type);
      return true;
    });
    if (canApply) {
      return true;
    }
  }
  return false;
};
const markInputRule = (regexp, markType, attrs) => {
  return new prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_0__.InputRule(regexp, (state, match, start, end) => {
    const {
      tr
    } = state;
    const from = start;
    let to = end;
    const [fullMatch,, content] = match;
    const noOfStartSpaces = fullMatch.search(/\S/);
    if (content) {
      const textStart = start + fullMatch.indexOf(content);
      const textEnd = textStart + content.length;
      if (textEnd < end) {
        tr.delete(textEnd, end);
      }
      if (textStart > start) {
        tr.delete(start + noOfStartSpaces, textStart);
      }
      to = start + content.length + noOfStartSpaces;
    }
    tr.addMark(from, to, markType.create(attrs));
    tr.removeStoredMark(markType);
    return tr;
  });
};
const canInsert = (state, nodeType) => {
  const {
    $from
  } = state.selection;
  for (let d = $from.depth; d >= 0; d -= 1) {
    const index = $from.index(d);
    if ($from.node(d).canReplaceWith(index, index, nodeType)) {
      return true;
    }
  }
  return false;
};

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1147:
/*!****************************************************************!*\
  !*** ./node_modules/ngx-editor/fesm2022/ngx-editor-schema.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   marks: () => (/* binding */ marks),
/* harmony export */   nodes: () => (/* binding */ nodes),
/* harmony export */   schema: () => (/* binding */ schema)
/* harmony export */ });
/* harmony import */ var prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-schema-list */ 4778);
/* harmony import */ var ngx_editor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-editor/utils */ 2325);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-model */ 6375);




// :: MarkSpec A link. Has `href` and `title` attributes. `title`
// defaults to the empty string. Rendered and parsed as an `<a>`
// element.
const link = {
  attrs: {
    href: {},
    title: {
      default: null
    },
    target: {
      default: '_blank'
    }
  },
  inclusive: false,
  parseDOM: [{
    tag: 'a[href]',
    getAttrs(dom) {
      return {
        href: dom.getAttribute('href'),
        title: dom.getAttribute('title'),
        target: dom.getAttribute('target')
      };
    }
  }],
  toDOM(node) {
    const {
      href,
      title,
      target
    } = node.attrs;
    return ['a', {
      href,
      title,
      target
    }, 0];
  }
};
// :: MarkSpec An emphasis mark. Rendered as an `<em>` element.
// Has parse rules that also match `<i>` and `font-style: italic`.
const em = {
  parseDOM: [{
    tag: 'i'
  }, {
    tag: 'em'
  }, {
    style: 'font-style=italic'
  }],
  toDOM() {
    return ['em', 0];
  }
};
// :: MarkSpec A strong mark. Rendered as `<strong>`, parse rules
// also match `<b>` and `font-weight: bold`.
const strong = {
  parseDOM: [{
    tag: 'strong'
  },
  // This works around a Google Docs misbehavior where
  // pasted content will be inexplicably wrapped in `<b>`
  // tags with a font-weight normal.
  {
    tag: 'b',
    getAttrs: dom => {
      return dom.style.fontWeight !== 'normal' && null;
    }
  }, {
    style: 'font-weight',
    getAttrs: value => {
      return /^(?:bold(?:er)?|[5-9]\d{2,})$/.test(value) && null;
    }
  }],
  toDOM() {
    return ['strong', 0];
  }
};
// :: MarkSpec Code font mark. Represented as a `<code>` element.
const code = {
  parseDOM: [{
    tag: 'code'
  }],
  toDOM() {
    return ['code', 0];
  }
};
// :: MarkSpec An underline mark. Rendered as an `<u>` element.
// Has parse rules that also match `text-decoration: underline`.
const u = {
  parseDOM: [{
    tag: 'u'
  }, {
    style: 'text-decoration=underline',
    consuming: false
  }],
  toDOM() {
    return ['u', 0];
  }
};
// :: MarkSpec An underline mark. Rendered as an `<s>` element.
// Has parse rules that also match `strike`, `del` tag and css property `text-decoration: line-through`.
const s = {
  parseDOM: [{
    tag: 's'
  }, {
    tag: 'strike'
  }, {
    style: 'text-decoration=line-through'
  }],
  toDOM() {
    return ['s', 0];
  }
};
const textColor = {
  attrs: {
    color: {
      default: null
    }
  },
  parseDOM: [{
    style: 'color',
    getAttrs: value => {
      return {
        color: value
      };
    }
  }],
  toDOM(mark) {
    const {
      color
    } = mark.attrs;
    return ['span', {
      style: `color:${color};`
    }, 0];
  }
};
const textBackgroundColor = {
  attrs: {
    backgroundColor: {
      default: null
    }
  },
  parseDOM: [{
    style: 'background-color',
    getAttrs: value => {
      return {
        backgroundColor: value
      };
    }
  }],
  toDOM(mark) {
    const {
      backgroundColor
    } = mark.attrs;
    return ['span', {
      style: `background-color:${backgroundColor};`
    }, 0];
  }
};
const sup = {
  attrs: {},
  parseDOM: [{
    tag: 'sup'
  }, {
    style: 'vertical-align=super'
  }],
  toDOM() {
    return ['sup', 0];
  }
};
const sub = {
  attrs: {},
  parseDOM: [{
    tag: 'sub'
  }, {
    style: 'vertical-align=sub'
  }],
  toDOM() {
    return ['sub', 0];
  }
};
const marks = {
  link,
  em,
  strong,
  code,
  u,
  s,
  text_color: textColor,
  text_background_color: textBackgroundColor,
  sup,
  sub
};
const doc = {
  content: 'block+'
};
// :: NodeSpec The text node.
const text = {
  group: 'inline'
};
// :: NodeSpec A plain paragraph textblock. Represented in the DOM
// as a `<p>` element.
const paragraph = {
  content: 'inline*',
  group: 'block',
  attrs: {
    align: {
      default: null
    },
    indent: {
      default: null
    }
  },
  parseDOM: [{
    tag: 'p',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }],
  toDOM(node) {
    const {
      align,
      indent
    } = node.attrs;
    const styles = {
      textAlign: align !== 'left' ? align : null,
      marginLeft: indent !== null ? `${indent * 40}px` : null
    };
    const style = (0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_0__.toStyleString)(styles) || null;
    const attrs = {
      style,
      'data-indent': indent ?? null
    };
    return ['p', attrs, 0];
  }
};
// :: NodeSpec A blockquote (`<blockquote>`) wrapping one or more blocks.
const blockquote = {
  content: 'block+',
  group: 'block',
  defining: true,
  attrs: {
    indent: {
      default: null
    }
  },
  parseDOM: [{
    tag: 'blockquote',
    getAttrs(dom) {
      const indent = dom.getAttribute('data-indent') || null;
      return {
        indent: parseInt(indent, 10) || null
      };
    }
  }],
  toDOM(node) {
    const {
      indent
    } = node.attrs;
    const styles = {
      marginLeft: indent !== null ? `${indent * 40}px` : null
    };
    const style = (0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_0__.toStyleString)(styles) || null;
    const attrs = {
      style,
      'data-indent': indent ?? null
    };
    return ['blockquote', attrs, 0];
  }
};
// :: NodeSpec A horizontal rule (`<hr>`).
const horizontalRule = {
  group: 'block',
  parseDOM: [{
    tag: 'hr'
  }],
  toDOM() {
    return ['hr'];
  }
};
// :: NodeSpec A heading textblock, with a `level` attribute that
// should hold the number 1 to 6. Parsed and serialized as `<h1>` to
// `<h6>` elements.
const heading = {
  attrs: {
    level: {
      default: 1
    },
    align: {
      default: null
    },
    indent: {
      default: null
    }
  },
  content: 'inline*',
  group: 'block',
  defining: true,
  parseDOM: [{
    tag: 'h1',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        level: 1,
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }, {
    tag: 'h2',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        level: 2,
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }, {
    tag: 'h3',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        level: 3,
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }, {
    tag: 'h4',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        level: 4,
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }, {
    tag: 'h5',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        level: 5,
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }, {
    tag: 'h6',
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute('align') || textAlign || null;
      const indent = dom.getAttribute('data-indent') || null;
      return {
        level: 6,
        align,
        indent: parseInt(indent, 10) || null
      };
    }
  }],
  toDOM(node) {
    const {
      level,
      align,
      indent
    } = node.attrs;
    const styles = {
      textAlign: align !== 'left' ? align : null,
      marginLeft: indent !== null ? `${indent * 40}px` : null
    };
    const style = (0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_0__.toStyleString)(styles) || null;
    const attrs = {
      style,
      'data-indent': indent ?? null
    };
    return [`h${level}`, attrs, 0];
  }
};
// :: NodeSpec A code listing. Disallows marks or non-text inline
// nodes by default. Represented as a `<pre>` element with a
// `<code>` element inside of it.
const codeBlock = {
  content: 'text*',
  marks: '',
  group: 'block',
  code: true,
  defining: true,
  parseDOM: [{
    tag: 'pre',
    preserveWhitespace: 'full'
  }],
  toDOM() {
    return ['pre', ['code', 0]];
  }
};
// :: NodeSpec A hard line break, represented in the DOM as `<br>`.
const hardBreak = {
  inline: true,
  group: 'inline',
  selectable: false,
  parseDOM: [{
    tag: 'br'
  }],
  toDOM() {
    return ['br'];
  }
};
// :: NodeSpec An inline image (`<img>`) node. Supports `src`,
// `alt`, and `href` attributes. The latter two default to the empty
// string.
const image = {
  inline: true,
  attrs: {
    src: {},
    alt: {
      default: null
    },
    title: {
      default: null
    },
    width: {
      default: null
    }
  },
  group: 'inline',
  draggable: true,
  parseDOM: [{
    tag: 'img[src]',
    getAttrs(dom) {
      return {
        src: dom.getAttribute('src'),
        title: dom.getAttribute('title'),
        alt: dom.getAttribute('alt'),
        width: dom.getAttribute('width')
      };
    }
  }],
  toDOM(node) {
    const {
      src,
      alt,
      title,
      width
    } = node.attrs;
    return ['img', {
      src,
      alt,
      title,
      width
    }];
  }
};
const listItem = {
  ...prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__.listItem,
  content: 'paragraph block*'
};
const orderedList = {
  ...prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__.orderedList,
  content: 'list_item+',
  group: 'block'
};
const bulletList = {
  ...prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__.bulletList,
  content: 'list_item+',
  group: 'block'
};
const nodes = {
  doc,
  text,
  paragraph,
  blockquote,
  horizontal_rule: horizontalRule,
  heading,
  hard_break: hardBreak,
  code_block: codeBlock,
  image,
  list_item: listItem,
  ordered_list: orderedList,
  bullet_list: bulletList
};
const schema = new prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Schema({
  marks,
  nodes
});

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2325:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-editor/fesm2022/ngx-editor-utils.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorError: () => (/* binding */ NgxEditorError),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   toStyleString: () => (/* binding */ toStyleString),
/* harmony export */   uniq: () => (/* binding */ uniq)
/* harmony export */ });
const isNil = val => {
  return typeof val === 'undefined' || val === null;
};
const camelToDashed = str => {
  return str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
};
const cleanObject = obj => {
  const cleanObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop]) {
      cleanObj[prop] = obj[prop];
    }
  });
  return cleanObj;
};
const toStyleString = obj => {
  const styles = cleanObject(obj);
  return Object.entries(styles).map(([k, v]) => `${camelToDashed(k)}:${v}`).join(';');
};
class NgxEditorError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
const uniq = () => {
  const timeStamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `${timeStamp}${random}`;
};
const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1813:
/*!*********************************************************!*\
  !*** ./node_modules/ngx-editor/fesm2022/ngx-editor.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_TOOLBAR: () => (/* binding */ DEFAULT_TOOLBAR),
/* harmony export */   Editor: () => (/* binding */ Editor),
/* harmony export */   FloatingMenuComponent: () => (/* binding */ FloatingMenuComponent),
/* harmony export */   ImageViewComponent: () => (/* binding */ ImageViewComponent),
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent),
/* harmony export */   NGX_EDITOR_CONFIG_TOKEN: () => (/* binding */ NGX_EDITOR_CONFIG_TOKEN),
/* harmony export */   NgxEditorComponent: () => (/* binding */ NgxEditorComponent),
/* harmony export */   NgxEditorModule: () => (/* binding */ NgxEditorModule),
/* harmony export */   NgxEditorService: () => (/* binding */ NgxEditorService),
/* harmony export */   TOOLBAR_FULL: () => (/* binding */ TOOLBAR_FULL),
/* harmony export */   TOOLBAR_MINIMAL: () => (/* binding */ TOOLBAR_MINIMAL),
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   emptyDoc: () => (/* binding */ emptyDoc),
/* harmony export */   getKeyboardShortcuts: () => (/* binding */ getKeyboardShortcuts),
/* harmony export */   marks: () => (/* reexport safe */ ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.marks),
/* harmony export */   nodes: () => (/* reexport safe */ ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.nodes),
/* harmony export */   parseContent: () => (/* binding */ parseContent),
/* harmony export */   provideMyServiceOptions: () => (/* binding */ provideMyServiceOptions),
/* harmony export */   schema: () => (/* reexport safe */ ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema),
/* harmony export */   toDoc: () => (/* binding */ toDoc),
/* harmony export */   toHTML: () => (/* binding */ toHTML)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 2551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 8473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 2136);
/* harmony import */ var ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor/utils */ 2325);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-state */ 7195);
/* harmony import */ var prosemirror_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prosemirror-view */ 2677);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prosemirror-model */ 6375);
/* harmony import */ var ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-editor/schema */ 1147);
/* harmony import */ var prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prosemirror-commands */ 7400);
/* harmony import */ var ngx_editor_commands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-editor/commands */ 9976);
/* harmony import */ var ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-editor/helpers */ 2665);
/* harmony import */ var prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prosemirror-schema-list */ 4778);
/* harmony import */ var prosemirror_history__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prosemirror-history */ 76);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @floating-ui/dom */ 7925);
/* harmony import */ var prosemirror_keymap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prosemirror-keymap */ 879);
/* harmony import */ var prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prosemirror-inputrules */ 559);
























const _c0 = ["imgEl"];
const _c1 = a0 => ({
  "NgxEditor__Resizer--Active": a0
});
function ImageViewComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageViewComponent_span_1_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.startResizing($event, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageViewComponent_span_1_Template_span_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.startResizing($event, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageViewComponent_span_1_Template_span_mousedown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.startResizing($event, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageViewComponent_span_1_Template_span_mousedown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.startResizing($event, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c2 = ["ngxEditor"];
const _c3 = ["*"];
function LinkComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, (ctx_r1.href.errors == null ? null : ctx_r1.href.errors["pattern"]) && ctx_r1.getLabel("enterValidUrl")), " ");
  }
}
function LinkComponent_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.text.errors == null ? null : ctx_r1.text.errors["required"]) && "This is required", " ");
  }
}
function LinkComponent_div_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx_r1.getLabel("openInNewTab")), " ");
  }
}
function LinkComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LinkComponent_div_4_Template_form_ngSubmit_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.insertLink($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LinkComponent_div_4_div_8_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LinkComponent_div_4_div_15_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LinkComponent_div_4_div_16_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", ctx_r1.getId("link-popup-url"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, ctx_r1.getLabel("url")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r1.getId("link-popup-url"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.href.touched && ctx_r1.href.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", ctx_r1.getId("link-popup-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 14, ctx_r1.getLabel("text")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r1.getId("link-popup-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.text.touched && ctx_r1.text.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.options.showOpenInNewTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 16, ctx_r1.getLabel("insert")));
  }
}
const _c4 = (a0, a1) => ({
  "NgxEditor__Dropdown--Active": a0,
  "NgxEditor--Disabled": a1
});
function DropdownComponent_div_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function DropdownComponent_div_4_button_1_Template_button_mousedown_0_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDropdownItemMouseClick($event, item_r2));
    })("keydown.enter", function DropdownComponent_div_4_button_1_Template_button_keydown_enter_0_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDropdownItemKeydown($event, item_r2));
    })("keydown.space", function DropdownComponent_div_4_button_1_Template_button_keydown_space_0_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDropdownItemKeydown($event, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c4, item_r2 === ctx_r2.activeItem, ctx_r2.disabledItems.includes(item_r2)))("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r2.getName(item_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", item_r2 === ctx_r2.activeItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, ctx_r2.getName(item_r2)), " ");
  }
}
function DropdownComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DropdownComponent_div_4_button_1_Template, 4, 11, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.items)("ngForTrackBy", ctx_r2.trackByIndex);
  }
}
function ImageComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, (ctx_r1.src.errors == null ? null : ctx_r1.src.errors["pattern"]) && ctx_r1.getLabel("enterValidUrl")), " ");
  }
}
function ImageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ImageComponent_div_4_Template_form_ngSubmit_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.insertLink($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ImageComponent_div_4_div_8_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4)(16, "div", 5)(17, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", ctx_r1.getId("image-popup-url"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 13, ctx_r1.getLabel("url")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r1.getId("image-popup-url"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.src.touched && ctx_r1.src.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", ctx_r1.getId("image-popup-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 15, ctx_r1.getLabel("altText")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r1.getId("image-popup-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", ctx_r1.getId("image-popup-title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 17, ctx_r1.getLabel("title")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r1.getId("image-popup-title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.form.valid || !ctx_r1.form.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 19, ctx_r1.getLabel("insert")));
  }
}
const _c5 = (a0, a1) => ({
  backgroundColor: a0,
  color: a1
});
const _c6 = a0 => ({
  "NgxEditor__Color--Active": a0
});
function ColorPickerComponent_div_4_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ColorPickerComponent_div_4_div_1_button_1_Template_button_mousedown_0_listener($event) {
      const color_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onColorSelectMouseClick($event, color_r3));
    })("keydown.enter", function ColorPickerComponent_div_4_div_1_button_1_Template_button_keydown_enter_0_listener() {
      const color_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onColorSelectKeydown(color_r3));
    })("keydown.space", function ColorPickerComponent_div_4_div_1_button_1_Template_button_keydown_space_0_listener() {
      const color_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onColorSelectKeydown(color_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c5, color_r3, ctx_r3.getContrastYIQ(color_r3)))("title", color_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c6, ctx_r3.activeColors.includes(color_r3)));
  }
}
function ColorPickerComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ColorPickerComponent_div_4_div_1_button_1_Template, 1, 8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colorGroup_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", colorGroup_r5)("ngForTrackBy", ctx_r3.trackByIndex);
  }
}
function ColorPickerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ColorPickerComponent_div_4_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ColorPickerComponent_div_4_Template_button_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRemoveMouseClick($event));
    })("keydown.enter", function ColorPickerComponent_div_4_Template_button_keydown_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRemoveKeydown());
    })("keydown.space", function ColorPickerComponent_div_4_Template_button_keydown_space_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRemoveKeydown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.presets)("ngForTrackBy", ctx_r3.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r3.getLabel("remove")), " ");
  }
}
const _c7 = (a0, a1) => ({
  "NgxEditor--Disabled": a0,
  "NgxEditor__MenuBar--Reverse": a1
});
function MenuComponent_ng_container_1_ng_container_1_ngx_toggle_command_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-toggle-command", 7);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.iconContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("toolbarItem", item_r1);
  }
}
function MenuComponent_ng_container_1_ng_container_1_ngx_insert_command_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-insert-command", 7);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.iconContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("toolbarItem", item_r1);
  }
}
function MenuComponent_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngx-link", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.iconContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.getLinkOptions(item_r1));
  }
}
function MenuComponent_ng_container_1_ng_container_1_ngx_image_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-image");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.iconContainerClass);
  }
}
function MenuComponent_ng_container_1_ng_container_1_ng_container_5_ngx_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-dropdown", 10);
  }
  if (rf & 2) {
    const dropdownItem_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.dropdownContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("group", dropdownItem_r3.key)("items", dropdownItem_r3.value);
  }
}
function MenuComponent_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_ng_container_1_ng_container_1_ng_container_5_ngx_dropdown_1_Template, 1, 4, "ngx-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r1.getDropdownItems(item_r1)))("ngForTrackBy", ctx_r1.trackByIndex);
  }
}
function MenuComponent_ng_container_1_ng_container_1_ngx_color_picker_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-color-picker", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.iconContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("presets", ctx_r1.presets);
  }
}
function MenuComponent_ng_container_1_ng_container_1_ngx_color_picker_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-color-picker", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.iconContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("presets", ctx_r1.presets);
  }
}
function MenuComponent_ng_container_1_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.seperatorClass);
  }
}
function MenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_ng_container_1_ng_container_1_ngx_toggle_command_1_Template, 1, 3, "ngx-toggle-command", 3)(2, MenuComponent_ng_container_1_ng_container_1_ngx_insert_command_2_Template, 1, 3, "ngx-insert-command", 3)(3, MenuComponent_ng_container_1_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 2)(4, MenuComponent_ng_container_1_ng_container_1_ngx_image_4_Template, 1, 2, "ngx-image", 4)(5, MenuComponent_ng_container_1_ng_container_1_ng_container_5_Template, 3, 4, "ng-container", 2)(6, MenuComponent_ng_container_1_ng_container_1_ngx_color_picker_6_Template, 1, 3, "ngx-color-picker", 5)(7, MenuComponent_ng_container_1_ng_container_1_ngx_color_picker_7_Template, 1, 3, "ngx-color-picker", 6)(8, MenuComponent_ng_container_1_ng_container_1_div_8_Template, 1, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const lastItem_r4 = ctx.last;
    const lastToolbarItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.toggleCommands.includes(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.insertCommands.includes(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isLinkItem(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1 === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isDropDown(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1 === "text_color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1 === "background_color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", lastItem_r4 && !lastToolbarItem_r5);
  }
}
function MenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_ng_container_1_ng_container_1_Template, 9, 8, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const toolbarItem_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", toolbarItem_r6)("ngForTrackBy", ctx_r1.trackByIndex);
  }
}
function MenuComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customMenuRef);
  }
}
const _c8 = (a0, a1) => ({
  "NgxBubbleMenu__Icon--Active": a0,
  "NgxEditor--Disabled": a1
});
function BubbleComponent_ng_container_0_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function BubbleComponent_ng_container_0_ng_container_1_button_1_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onClick($event, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c8, ctx_r2.activeItems.includes(item_r2), !ctx_r2.execulableItems.includes(item_r2)))("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r2.getTitle(item_r2)))("innerHTML", ctx_r2.getIcon(item_r2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function BubbleComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
  }
}
function BubbleComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BubbleComponent_ng_container_0_ng_container_1_button_1_Template, 2, 8, "button", 1)(2, BubbleComponent_ng_container_0_ng_container_1_div_2_Template, 1, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const lastItem_r4 = ctx.last;
    const lastToolbarItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.toggleCommands.includes(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", lastItem_r4 && !lastToolbarItem_r5);
  }
}
function BubbleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BubbleComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const toolbarItem_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", toolbarItem_r6)("ngForTrackBy", ctx_r2.trackByIndex);
  }
}
function FloatingMenuComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngx-bubble", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx_r0.editor);
  }
}
const editablePlugin = (editable = true) => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('editable'),
    state: {
      init() {
        return editable;
      },
      apply(tr, previousVal) {
        return tr.getMeta('UPDATE_EDITABLE') ?? previousVal;
      }
    },
    props: {
      editable(state) {
        return this.getState(state);
      },
      attributes(state) {
        const isEnabled = this.getState(state);
        if (isEnabled) {
          return null;
        }
        return {
          class: 'NgxEditor__Content--Disabled'
        };
      }
    }
  });
};
const PLACEHOLDER_CLASSNAME = 'NgxEditor__Placeholder';
const placeholderPlugin = text => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('placeholder'),
    state: {
      init() {
        return text ?? '';
      },
      apply(tr, previousVal) {
        const placeholder = tr.getMeta('UPDATE_PLACEHOLDER') ?? previousVal;
        return placeholder;
      }
    },
    props: {
      decorations(state) {
        const {
          doc
        } = state;
        const {
          textContent,
          childCount
        } = doc;
        const placeholder = this.getState(state);
        if (!placeholder || childCount > 1) {
          return prosemirror_view__WEBPACK_IMPORTED_MODULE_4__.DecorationSet.empty;
        }
        const decorations = [];
        const decorate = (node, pos) => {
          if (node.type.isBlock && node.childCount === 0 && textContent.length === 0) {
            const from = pos;
            const to = pos + node.nodeSize;
            const placeholderNode = prosemirror_view__WEBPACK_IMPORTED_MODULE_4__.Decoration.node(from, to, {
              'class': PLACEHOLDER_CLASSNAME,
              'data-placeholder': placeholder,
              'data-align': node.attrs['align'] ?? null
            });
            decorations.push(placeholderNode);
          }
          return false;
        };
        doc.descendants(decorate);
        return prosemirror_view__WEBPACK_IMPORTED_MODULE_4__.DecorationSet.create(doc, decorations);
      }
    }
  });
};
const attributesPlugin = (attributes = {}) => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('attributes'),
    props: {
      attributes
    }
  });
};
const focusPlugin = cb => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('focus'),
    props: {
      handleDOMEvents: {
        focus: () => {
          cb();
          return false;
        }
      }
    }
  });
};
const blurPlugin = cb => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('blur'),
    props: {
      handleDOMEvents: {
        blur: () => {
          cb();
          return false;
        }
      }
    }
  });
};
class ImageViewComponent {
  constructor() {
    this.alt = '';
    this.title = '';
    this.outerWidth = '';
    this.selected = false;
    this.imageResize = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  startResizing(e, direction) {
    e.preventDefault();
    this.resizeImage(e, direction);
  }
  resizeImage(evt, direction) {
    const startX = evt.pageX;
    const startWidth = this.imgEl.nativeElement.clientWidth;
    const isLeftResize = direction === 'left';
    const {
      width
    } = window.getComputedStyle(this.view.dom);
    const editorWidth = parseInt(width, 10);
    const onMouseMove = e => {
      const currentX = e.pageX;
      const diffInPx = currentX - startX;
      const computedWidth = isLeftResize ? startWidth - diffInPx : startWidth + diffInPx;
      // prevent image overflow the editor
      // prevent resizng below 20px
      if (computedWidth > editorWidth || computedWidth < 20) {
        return;
      }
      this.outerWidth = `${computedWidth}px`;
    };
    const onMouseUp = e => {
      e.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      this.imageResize.emit();
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
  static #_ = this.ɵfac = function ImageViewComponent_Factory(t) {
    return new (t || ImageViewComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImageViewComponent,
    selectors: [["ngx-image-view"]],
    viewQuery: function ImageViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgEl = _t.first);
      }
    },
    inputs: {
      src: "src",
      alt: "alt",
      title: "title",
      outerWidth: "outerWidth",
      selected: "selected",
      view: "view"
    },
    outputs: {
      imageResize: "imageResize"
    },
    decls: 4,
    vars: 9,
    consts: [["imgEl", ""], [1, "NgxEditor__ImageWrapper", 3, "ngClass"], ["class", "NgxEditor__ResizeHandle", 4, "ngIf"], [3, "src", "alt", "title"], [1, "NgxEditor__ResizeHandle"], [1, "NgxEditor__ResizeHandle--TL", 3, "mousedown"], [1, "NgxEditor__ResizeHandle--TR", 3, "mousedown"], [1, "NgxEditor__ResizeHandle--BL", 3, "mousedown"], [1, "NgxEditor__ResizeHandle--BR", 3, "mousedown"]],
    template: function ImageViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImageViewComponent_span_1_Template, 5, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.outerWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx.selected));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.alt)("title", ctx.title);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}img[_ngcontent-%COMP%]{width:100%;height:100%}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]{position:relative;display:inline-block;line-height:0;padding:2px}.NgxEditor__ImageWrapper.NgxEditor__Resizer--Active[_ngcontent-%COMP%]{padding:1px;border:1px solid #1a73e8}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--TL[_ngcontent-%COMP%], .NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--BL[_ngcontent-%COMP%], .NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--TR[_ngcontent-%COMP%], .NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--BR[_ngcontent-%COMP%]{position:absolute;width:7px;height:7px;background-color:#1a73e8;border:1px solid white}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--BR[_ngcontent-%COMP%]{bottom:-5px;right:-5px;cursor:se-resize}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--TR[_ngcontent-%COMP%]{top:-5px;right:-5px;cursor:ne-resize}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--TL[_ngcontent-%COMP%]{top:-5px;left:-5px;cursor:nw-resize}.NgxEditor__ImageWrapper[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle[_ngcontent-%COMP%]   .NgxEditor__ResizeHandle--BL[_ngcontent-%COMP%]{bottom:-5px;left:-5px;cursor:sw-resize}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImageViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-image-view',
      template: "<span class=\"NgxEditor__ImageWrapper\" [ngClass]=\"{ 'NgxEditor__Resizer--Active': selected }\" [style.width]=\"outerWidth\">\n  <span class=\"NgxEditor__ResizeHandle\" *ngIf=\"selected\">\n    <span class=\"NgxEditor__ResizeHandle--TL\" (mousedown)=\"startResizing($event, 'left')\"></span>\n    <span class=\"NgxEditor__ResizeHandle--TR\" (mousedown)=\"startResizing($event, 'right')\"></span>\n    <span class=\"NgxEditor__ResizeHandle--BL\" (mousedown)=\"startResizing($event, 'left')\"></span>\n    <span class=\"NgxEditor__ResizeHandle--BR\" (mousedown)=\"startResizing($event, 'right')\"></span>\n  </span>\n  <img [src]=\"src\" [alt]=\"alt\" [title]=\"title\" #imgEl />\n</span>\n",
      styles: ["*,*:before,*:after{box-sizing:border-box}img{width:100%;height:100%}.NgxEditor__ImageWrapper{position:relative;display:inline-block;line-height:0;padding:2px}.NgxEditor__ImageWrapper.NgxEditor__Resizer--Active{padding:1px;border:1px solid #1a73e8}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle{position:absolute;height:100%;width:100%}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TL,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BL,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TR,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BR{position:absolute;width:7px;height:7px;background-color:#1a73e8;border:1px solid white}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BR{bottom:-5px;right:-5px;cursor:se-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TR{top:-5px;right:-5px;cursor:ne-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TL{top:-5px;left:-5px;cursor:nw-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BL{bottom:-5px;left:-5px;cursor:sw-resize}\n"]
    }]
  }], null, {
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    outerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    imgEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['imgEl', {
        static: true
      }]
    }]
  });
})();
class ImageRezieView {
  constructor(node, view, getPos, injector) {
    this.updating = false;
    this.handleResize = () => {
      if (this.updating) {
        return;
      }
      const {
        state,
        dispatch
      } = this.view;
      const {
        tr
      } = state;
      const transaction = tr.setNodeMarkup(this.getPos(), undefined, {
        ...this.node.attrs,
        width: this.imageComponentRef.instance.outerWidth
      });
      const resolvedPos = transaction.doc.resolve(this.getPos());
      const newSelection = new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection(resolvedPos);
      transaction.setSelection(newSelection);
      dispatch(transaction);
    };
    this.applicationRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef);
    // create component ref
    this.imageComponentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.createComponent)(ImageViewComponent, {
      environmentInjector: this.applicationRef.injector
    });
    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(this.imageComponentRef.hostView);
    this.setNodeAttributes(node.attrs);
    this.imageComponentRef.instance.view = view;
    this.dom = this.imageComponentRef.location.nativeElement;
    this.view = view;
    this.node = node;
    this.getPos = getPos;
    this.resizeSubscription = this.imageComponentRef.instance.imageResize.subscribe(() => {
      this.handleResize();
    });
  }
  computeChanges(prevAttrs, newAttrs) {
    return JSON.stringify(prevAttrs) === JSON.stringify(newAttrs);
  }
  setNodeAttributes(attrs) {
    this.imageComponentRef.instance.src = attrs['src'];
    this.imageComponentRef.instance.alt = attrs['alt'];
    this.imageComponentRef.instance.title = attrs['title'];
    this.imageComponentRef.instance.outerWidth = attrs['width'];
  }
  update(node) {
    if (node.type !== this.node.type) {
      return false;
    }
    this.node = node;
    const changed = this.computeChanges(this.node.attrs, node.attrs);
    if (changed) {
      this.updating = true;
      this.setNodeAttributes(node.attrs);
      this.updating = false;
    }
    return true;
  }
  ignoreMutation() {
    return true;
  }
  selectNode() {
    this.imageComponentRef.instance.selected = true;
  }
  deselectNode() {
    this.imageComponentRef.instance.selected = false;
  }
  destroy() {
    this.resizeSubscription.unsubscribe();
    this.applicationRef.detachView(this.imageComponentRef.hostView);
  }
}
const imageResizePlugin = injector => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('image-resize'),
    props: {
      nodeViews: {
        image: (node, view, getPos) => {
          return new ImageRezieView(node, view, getPos, injector);
        }
      }
    }
  });
};
const HTTP_LINK_REGEX = /(?:https?:\/\/)?[\w-]+(?:\.[\w-]+)+\.?(?:\d+)?(?:\/\S*)?$/;
const linkify = fragment => {
  const linkified = [];
  fragment.forEach(child => {
    if (child.isText) {
      const text = child.text;
      let pos = 0;
      const match = HTTP_LINK_REGEX.exec(text);
      if (match) {
        const start = match.index;
        const end = start + match[0].length;
        const {
          link
        } = child.type.schema.marks;
        if (start > 0) {
          linkified.push(child.cut(pos, start));
        }
        const urlText = text.slice(start, end);
        linkified.push(child.cut(start, end).mark(link.create({
          href: urlText
        }).addToSet(child.marks)));
        pos = end;
      }
      if (pos < text.length) {
        linkified.push(child.cut(pos));
      }
    } else {
      linkified.push(child.copy(linkify(child.content)));
    }
  });
  return prosemirror_model__WEBPACK_IMPORTED_MODULE_6__.Fragment.fromArray(linkified);
};
const linkifyPlugin = () => {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
    key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.PluginKey('linkify'),
    props: {
      transformPasted: slice => {
        return new prosemirror_model__WEBPACK_IMPORTED_MODULE_6__.Slice(linkify(slice.content), slice.openStart, slice.openEnd);
      }
    }
  });
};
const isString = value => {
  return typeof value === 'string';
};
const getTrustedTypes = () => {
  return window.trustedTypes;
};
const isTrustedHtml = value => {
  return getTrustedTypes()?.isHTML(value) ?? false;
};
const isHtml = value => {
  return isString(value) || isTrustedHtml(value);
};
const emptyDoc = {
  type: 'doc',
  content: [{
    type: 'paragraph'
  }]
};
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
const toHTML = (json, inputSchema) => {
  const schema$1 = inputSchema ?? ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema;
  const contentNode = schema$1.nodeFromJSON(json);
  const html = prosemirror_model__WEBPACK_IMPORTED_MODULE_6__.DOMSerializer.fromSchema(schema$1).serializeFragment(contentNode.content);
  const div = document.createElement('div');
  div.appendChild(html);
  return div.innerHTML;
};
const toDoc = (html, inputSchema, options) => {
  const schema$1 = inputSchema ?? ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema;
  const el = document.createElement('div');
  el.innerHTML = html;
  return prosemirror_model__WEBPACK_IMPORTED_MODULE_6__.DOMParser.fromSchema(schema$1).parse(el, options).toJSON();
};
const parseContent = (value, schema, options) => {
  if (!value) {
    return schema.nodeFromJSON(emptyDoc);
  }
  if (!isHtml(value)) {
    return schema.nodeFromJSON(value);
  }
  const docJson = toDoc(value, schema, options);
  return schema.nodeFromJSON(docJson);
};
class NgxEditorComponent {
  constructor(renderer, injector, elementRef) {
    this.renderer = renderer;
    this.injector = injector;
    this.elementRef = elementRef;
    this.placeholder = 'Type Here...';
    this.focusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.focusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.onChange = () => {};
    this.onTouched = () => {};
  }
  writeValue(value) {
    if (!this.outputFormat && isHtml(value)) {
      this.outputFormat = 'html';
    }
    this.editor.setContent(value ?? emptyDoc);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.setMeta('UPDATE_EDITABLE', !isDisabled);
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
  handleChange(jsonDoc) {
    if (this.outputFormat === 'html') {
      const html = toHTML(jsonDoc, this.editor.schema);
      this.onChange(html);
      return;
    }
    this.onChange(jsonDoc);
  }
  setMeta(key, value) {
    const {
      dispatch,
      state: {
        tr
      }
    } = this.editor.view;
    dispatch(tr.setMeta(key, value));
  }
  setPlaceholder(placeholder) {
    this.setMeta('UPDATE_PLACEHOLDER', placeholder);
  }
  registerPlugins() {
    this.editor.registerPlugin(editablePlugin());
    this.editor.registerPlugin(placeholderPlugin(this.placeholder));
    this.editor.registerPlugin(attributesPlugin({
      class: 'NgxEditor__Content'
    }));
    this.editor.registerPlugin(focusPlugin(() => {
      this.focusIn.emit();
    }));
    this.editor.registerPlugin(blurPlugin(() => {
      this.focusOut.emit();
      this.onTouched();
    }));
    if (this.editor.features.resizeImage) {
      this.editor.registerPlugin(imageResizePlugin(this.injector));
    }
    if (this.editor.features.linkOnPaste) {
      this.editor.registerPlugin(linkifyPlugin());
    }
  }
  ngOnInit() {
    if (!this.editor) {
      throw new ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.NgxEditorError('Required editor instance for initializing editor component');
    }
    this.registerPlugins();
    this.renderer.appendChild(this.ngxEditor.nativeElement, this.editor.view.dom);
    this.editor.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe)).subscribe(jsonDoc => {
      this.handleChange(jsonDoc);
    });
  }
  ngOnChanges(changes) {
    if (changes['placeholder'] && !changes['placeholder'].isFirstChange()) {
      this.setPlaceholder(changes['placeholder'].currentValue);
    }
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  static #_ = this.ɵfac = function NgxEditorComponent_Factory(t) {
    return new (t || NgxEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NgxEditorComponent,
    selectors: [["ngx-editor"]],
    viewQuery: function NgxEditorComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngxEditor = _t.first);
      }
    },
    inputs: {
      editor: "editor",
      outputFormat: "outputFormat",
      placeholder: "placeholder"
    },
    outputs: {
      focusOut: "focusOut",
      focusIn: "focusIn"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => NgxEditorComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c3,
    decls: 3,
    vars: 0,
    consts: [["ngxEditor", ""], [1, "NgxEditor"]],
    template: function NgxEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    styles: [":root{--ngx-editor-border-radius: 4px;--ngx-editor-background-color: #fff;--ngx-editor-text-color: #000;--ngx-editor-placeholder-color: #6c757d;--ngx-editor-border-color: rgba(0, 0, 0, .2);--ngx-editor-wrapper-border-color: rgba(0, 0, 0, .2);--ngx-editor-menubar-bg-color: #fff;--ngx-editor-menubar-padding: 3px;--ngx-editor-menubar-height: 30px;--ngx-editor-blockquote-color: #ddd;--ngx-editor-blockquote-border-width: 3px;--ngx-editor-icon-size: 30px;--ngx-editor-popup-bg-color: #fff;--ngx-editor-popup-border-radius: 4px;--ngx-editor-popup-shadow: rgba(60, 64, 67, .15) 0px 2px 6px 2px;--ngx-editor-menu-item-border-radius: 2px;--ngx-editor-menu-item-active-color: #1a73e8;--ngx-editor-menu-item-hover-bg-color: #f1f1f1;--ngx-editor-menu-item-active-bg-color: #e8f0fe;--ngx-editor-seperator-color: #ccc;--ngx-editor-bubble-bg-color: #000;--ngx-editor-bubble-text-color: #fff;--ngx-editor-bubble-item-hover-color: #636262;--ngx-editor-bubble-seperator-color: #fff;--ngx-editor-focus-ring-color: #5e9ed6;--ngx-editor-error-color: red;--ngx-editor-click-pointer: default}.NgxEditor{background:var(--ngx-editor-background-color);color:var(--ngx-editor-text-color);background-clip:padding-box;border-radius:var(--ngx-editor-border-radius);border:1px solid var(--ngx-editor-border-color);position:relative}.NgxEditor--Disabled{opacity:.5!important;pointer-events:none!important}.NgxEditor__Placeholder:before{color:var(--ngx-editor-placeholder-color);opacity:1;-webkit-user-select:none;user-select:none;position:absolute;cursor:text;content:attr(data-placeholder)}.NgxEditor__Placeholder[data-align=right]:before{position:relative}.NgxEditor__Content{padding:8px;white-space:pre-wrap;outline:none;font-variant-ligatures:none;font-feature-settings:\"liga\" 0}.NgxEditor__Content p{margin:0 0 10px}.NgxEditor__Content blockquote{padding-left:16px;border-left:var(--ngx-editor-blockquote-border-width) solid var(--ngx-editor-blockquote-color);margin-left:0;margin-right:0}.NgxEditor__Content--Disabled{-webkit-user-select:none;user-select:none;pointer-events:none}.NgxEditor__Wrapper{border:1px solid var(--ngx-editor-wrapper-border-color);border-radius:var(--ngx-editor-border-radius)}.NgxEditor__Wrapper .NgxEditor__MenuBar{border-top-left-radius:var(--ngx-editor-border-radius);border-top-right-radius:var(--ngx-editor-border-radius);border-bottom:1px solid var(--ngx-editor-border-color)}.NgxEditor__Wrapper .NgxEditor{border-top-left-radius:0;border-top-right-radius:0;border:none}.NgxEditor__MenuBar{display:flex;flex-wrap:wrap;padding:var(--ngx-editor-menubar-padding);background-color:var(--ngx-editor-menubar-bg-color);gap:.25rem .1rem}.NgxEditor__MenuBar button:not(:disabled),.NgxEditor__MenuBar [role=button]:not(:disabled){cursor:var(--ngx-editor-click-pointer, default)}.NgxEditor__MenuItem{display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}.NgxEditor__MenuItem.NgxEditor__MenuItem--IconContainer{display:flex;align-items:center;justify-content:center}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;border-radius:var(--ngx-editor-menu-item-border-radius)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon+.NgxEditor__MenuItem--Icon{margin-left:2px}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuItem.NgxEditor__MenuItem--Text{padding:0 5px}.NgxEditor__MenuItem.NgxEditor__MenuItem--Active,.NgxEditor__MenuItem .NgxEditor__MenuItem--Active{background-color:var(--ngx-editor-menu-item-active-bg-color);color:var(--ngx-editor-menu-item-active-color)}.NgxEditor__Dropdown{min-width:64px;position:relative;display:flex;align-items:center;flex-shrink:0}.NgxEditor__Dropdown:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text{all:unset;appearance:none;display:flex;align-items:center;justify-content:center;padding:0 5px;height:100%;width:100%}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:after{display:inline-block;content:\"\";margin-left:24px;vertical-align:4px;border-top:4px solid;border-right:4px solid transparent;border-bottom:0;border-left:4px solid transparent}.NgxEditor__Dropdown .NgxEditor__Dropdown--DropdownMenu{position:absolute;left:0;box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;width:100%;top:calc(var(--ngx-editor-menubar-height) + 2px);display:flex;flex-direction:column}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item{all:unset;appearance:none;padding:8px;white-space:nowrap;color:inherit}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Selected,.NgxEditor__Dropdown .NgxEditor__Dropdown--Open{color:var(--ngx-editor-menu-item-active-color);background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active{background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--DropdownMenu{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--Text:after{transform:rotate(180deg)}.NgxEditor__MenuBar--Reverse .NgxEditor__Popup{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__Popup{position:absolute;top:calc(var(--ngx-editor-menubar-height) + 2px);box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;min-width:192px;padding:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup{margin-bottom:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup label{margin-bottom:3px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=text],.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=url]{padding:2px 4px}.NgxEditor__Popup .NgxEditor__Popup--Col{display:flex;flex-direction:column;position:relative}.NgxEditor__Popup .NgxEditor__Popup--Label{font-size:85%}.NgxEditor__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}.NgxEditor__HelpText{font-size:80%}.NgxEditor__HelpText.NgxEditor__HelpText--Error{color:var(--ngx-editor-error-color)}\n"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-editor',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => NgxEditorComponent),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      template: "<div class=\"NgxEditor\" #ngxEditor>\n  <ng-content></ng-content>\n</div>\n",
      styles: [":root{--ngx-editor-border-radius: 4px;--ngx-editor-background-color: #fff;--ngx-editor-text-color: #000;--ngx-editor-placeholder-color: #6c757d;--ngx-editor-border-color: rgba(0, 0, 0, .2);--ngx-editor-wrapper-border-color: rgba(0, 0, 0, .2);--ngx-editor-menubar-bg-color: #fff;--ngx-editor-menubar-padding: 3px;--ngx-editor-menubar-height: 30px;--ngx-editor-blockquote-color: #ddd;--ngx-editor-blockquote-border-width: 3px;--ngx-editor-icon-size: 30px;--ngx-editor-popup-bg-color: #fff;--ngx-editor-popup-border-radius: 4px;--ngx-editor-popup-shadow: rgba(60, 64, 67, .15) 0px 2px 6px 2px;--ngx-editor-menu-item-border-radius: 2px;--ngx-editor-menu-item-active-color: #1a73e8;--ngx-editor-menu-item-hover-bg-color: #f1f1f1;--ngx-editor-menu-item-active-bg-color: #e8f0fe;--ngx-editor-seperator-color: #ccc;--ngx-editor-bubble-bg-color: #000;--ngx-editor-bubble-text-color: #fff;--ngx-editor-bubble-item-hover-color: #636262;--ngx-editor-bubble-seperator-color: #fff;--ngx-editor-focus-ring-color: #5e9ed6;--ngx-editor-error-color: red;--ngx-editor-click-pointer: default}.NgxEditor{background:var(--ngx-editor-background-color);color:var(--ngx-editor-text-color);background-clip:padding-box;border-radius:var(--ngx-editor-border-radius);border:1px solid var(--ngx-editor-border-color);position:relative}.NgxEditor--Disabled{opacity:.5!important;pointer-events:none!important}.NgxEditor__Placeholder:before{color:var(--ngx-editor-placeholder-color);opacity:1;-webkit-user-select:none;user-select:none;position:absolute;cursor:text;content:attr(data-placeholder)}.NgxEditor__Placeholder[data-align=right]:before{position:relative}.NgxEditor__Content{padding:8px;white-space:pre-wrap;outline:none;font-variant-ligatures:none;font-feature-settings:\"liga\" 0}.NgxEditor__Content p{margin:0 0 10px}.NgxEditor__Content blockquote{padding-left:16px;border-left:var(--ngx-editor-blockquote-border-width) solid var(--ngx-editor-blockquote-color);margin-left:0;margin-right:0}.NgxEditor__Content--Disabled{-webkit-user-select:none;user-select:none;pointer-events:none}.NgxEditor__Wrapper{border:1px solid var(--ngx-editor-wrapper-border-color);border-radius:var(--ngx-editor-border-radius)}.NgxEditor__Wrapper .NgxEditor__MenuBar{border-top-left-radius:var(--ngx-editor-border-radius);border-top-right-radius:var(--ngx-editor-border-radius);border-bottom:1px solid var(--ngx-editor-border-color)}.NgxEditor__Wrapper .NgxEditor{border-top-left-radius:0;border-top-right-radius:0;border:none}.NgxEditor__MenuBar{display:flex;flex-wrap:wrap;padding:var(--ngx-editor-menubar-padding);background-color:var(--ngx-editor-menubar-bg-color);gap:.25rem .1rem}.NgxEditor__MenuBar button:not(:disabled),.NgxEditor__MenuBar [role=button]:not(:disabled){cursor:var(--ngx-editor-click-pointer, default)}.NgxEditor__MenuItem{display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}.NgxEditor__MenuItem.NgxEditor__MenuItem--IconContainer{display:flex;align-items:center;justify-content:center}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;border-radius:var(--ngx-editor-menu-item-border-radius)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon+.NgxEditor__MenuItem--Icon{margin-left:2px}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuItem.NgxEditor__MenuItem--Text{padding:0 5px}.NgxEditor__MenuItem.NgxEditor__MenuItem--Active,.NgxEditor__MenuItem .NgxEditor__MenuItem--Active{background-color:var(--ngx-editor-menu-item-active-bg-color);color:var(--ngx-editor-menu-item-active-color)}.NgxEditor__Dropdown{min-width:64px;position:relative;display:flex;align-items:center;flex-shrink:0}.NgxEditor__Dropdown:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text{all:unset;appearance:none;display:flex;align-items:center;justify-content:center;padding:0 5px;height:100%;width:100%}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:after{display:inline-block;content:\"\";margin-left:24px;vertical-align:4px;border-top:4px solid;border-right:4px solid transparent;border-bottom:0;border-left:4px solid transparent}.NgxEditor__Dropdown .NgxEditor__Dropdown--DropdownMenu{position:absolute;left:0;box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;width:100%;top:calc(var(--ngx-editor-menubar-height) + 2px);display:flex;flex-direction:column}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item{all:unset;appearance:none;padding:8px;white-space:nowrap;color:inherit}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Selected,.NgxEditor__Dropdown .NgxEditor__Dropdown--Open{color:var(--ngx-editor-menu-item-active-color);background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active{background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--DropdownMenu{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--Text:after{transform:rotate(180deg)}.NgxEditor__MenuBar--Reverse .NgxEditor__Popup{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__Popup{position:absolute;top:calc(var(--ngx-editor-menubar-height) + 2px);box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;min-width:192px;padding:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup{margin-bottom:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup label{margin-bottom:3px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=text],.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=url]{padding:2px 4px}.NgxEditor__Popup .NgxEditor__Popup--Col{display:flex;flex-direction:column;position:relative}.NgxEditor__Popup .NgxEditor__Popup--Label{font-size:85%}.NgxEditor__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}.NgxEditor__HelpText{font-size:80%}.NgxEditor__HelpText.NgxEditor__HelpText--Error{color:var(--ngx-editor-error-color)}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }], {
    ngxEditor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['ngxEditor', {
        static: true
      }]
    }],
    editor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    outputFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    focusOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    focusIn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();
class MenuService {
  constructor() {
    this.customMenuRefChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  setCustomMenuRef(c) {
    this.customMenuRefChange.next(c);
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class Mark {
  constructor(name) {
    this.name = name;
  }
  apply() {
    return (state, dispatch) => {
      const {
        schema
      } = state;
      const type = schema.marks[this.name];
      if (!type) {
        return false;
      }
      return (0,ngx_editor_commands__WEBPACK_IMPORTED_MODULE_11__.applyMark)(type)(state, dispatch);
    };
  }
  toggle() {
    return (state, dispatch) => {
      const {
        schema
      } = state;
      const type = schema.marks[this.name];
      if (!type) {
        return false;
      }
      return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.toggleMark)(type)(state, dispatch);
    };
  }
  isActive(state) {
    const {
      schema
    } = state;
    const type = schema.marks[this.name];
    if (!type) {
      return false;
    }
    return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.isMarkActive)(state, type);
  }
  canExecute(state) {
    return this.toggle()(state);
  }
}
class Blockqote {
  toggle() {
    return (state, dispatch) => {
      const {
        schema
      } = state;
      const type = schema.nodes['blockquote'];
      if (!type) {
        return false;
      }
      if (this.isActive(state)) {
        return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.lift)(state, dispatch);
      }
      return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.wrapIn)(type)(state, dispatch);
    };
  }
  isActive(state) {
    const {
      schema
    } = state;
    const type = schema.nodes['blockquote'];
    if (!type) {
      return false;
    }
    return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.isNodeActive)(state, type);
  }
  canExecute(state) {
    return this.toggle()(state);
  }
}
class HorizontalRule {
  insert() {
    return (state, dispatch) => {
      const {
        schema,
        tr
      } = state;
      const type = schema.nodes['horizontal_rule'];
      if (!type) {
        return false;
      }
      dispatch(tr.replaceSelectionWith(type.create()).scrollIntoView());
      return true;
    };
  }
  canExecute(state) {
    return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.canInsert)(state, state.schema.nodes['horizontal_rule']);
  }
}
class ListItem {
  constructor(isBulletList = false) {
    this.isBulletList = false;
    this.isBulletList = isBulletList;
  }
  getType(schema) {
    return this.isBulletList ? schema.nodes['bullet_list'] : schema.nodes['ordered_list'];
  }
  toggle() {
    return (state, dispatch) => {
      const {
        schema
      } = state;
      const type = this.getType(schema);
      if (!type) {
        return false;
      }
      if (this.isActive(state)) {
        return (0,prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__.liftListItem)(schema.nodes['list_item'])(state, dispatch);
      }
      return (0,prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__.wrapInList)(type)(state, dispatch);
    };
  }
  isActive(state) {
    const {
      schema
    } = state;
    const type = this.getType(schema);
    if (!type) {
      return false;
    }
    return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.isNodeActive)(state, type);
  }
  canExecute(state) {
    return this.toggle()(state);
  }
}
class Heading {
  constructor(level) {
    this.level = level;
  }
  apply() {
    return (state, dispatch) => {
      const {
        schema
      } = state;
      const type = schema.nodes['heading'];
      if (!type) {
        return false;
      }
      return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.setBlockType)(type)(state, dispatch);
    };
  }
  toggle() {
    return (state, dispatch) => {
      const {
        schema,
        selection,
        doc
      } = state;
      const type = schema.nodes['heading'];
      if (!type) {
        return false;
      }
      const nodePos = selection.$from.before(1);
      const node = doc.nodeAt(nodePos);
      const attrs = node?.attrs ?? {};
      if (this.isActive(state)) {
        return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.setBlockType)(schema.nodes['paragraph'], attrs)(state, dispatch);
      }
      return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.setBlockType)(type, {
        ...attrs,
        level: this.level
      })(state, dispatch);
    };
  }
  isActive(state) {
    const {
      schema
    } = state;
    const nodesInSelection = (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.getSelectionNodes)(state);
    const type = schema.nodes['heading'];
    if (!type) {
      return false;
    }
    const supportedNodes = [type, schema.nodes['text'], schema.nodes['blockquote']];
    // heading is a text node
    // don't mark as active when it has more nodes
    const nodes = nodesInSelection.filter(node => {
      return supportedNodes.includes(node.type);
    });
    const acitveNode = nodes.find(node => {
      return node.attrs['level'] === this.level;
    });
    return Boolean(acitveNode);
  }
  canExecute(state) {
    return this.toggle()(state);
  }
}
class TextAlign {
  constructor(align) {
    this.align = align;
  }
  toggle() {
    return (state, dispatch) => {
      const {
        doc,
        selection,
        tr,
        schema
      } = state;
      const {
        from,
        to
      } = selection;
      let applicable = false;
      doc.nodesBetween(from, to, (node, pos) => {
        const nodeType = node.type;
        if ([schema.nodes['paragraph'], schema.nodes['heading']].includes(nodeType)) {
          applicable = true;
          const align = node.attrs['align'] === this.align ? null : this.align;
          tr.setNodeMarkup(pos, nodeType, {
            ...node.attrs,
            align
          });
        }
        return true;
      });
      if (!applicable) {
        return false;
      }
      if (tr.docChanged) {
        dispatch?.(tr);
      }
      return true;
    };
  }
  isActive(state) {
    const nodes = (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.getSelectionNodes)(state);
    const active = nodes.find(node => {
      return node.attrs['align'] === this.align;
    });
    return Boolean(active);
  }
  canExecute(state) {
    return this.toggle()(state);
  }
}
const defaultOptions = {
  strict: true
};
let Link$1 = class Link {
  update(attrs) {
    return (state, dispatch) => {
      const {
        schema,
        selection
      } = state;
      const type = schema.marks['link'];
      if (!type) {
        return false;
      }
      if (selection.empty) {
        return false;
      }
      return (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.toggleMark)(type, attrs)(state, dispatch);
    };
  }
  insert(text, attrs) {
    return (state, dispatch) => {
      const {
        schema,
        tr
      } = state;
      const type = schema.marks['link'];
      if (!type) {
        return false;
      }
      const linkAttrs = {
        href: attrs.href,
        title: attrs.title ?? text,
        target: attrs.target ?? '_blank'
      };
      const node = schema.text(text, [schema.marks['link'].create(linkAttrs)]);
      tr.replaceSelectionWith(node, false).scrollIntoView();
      if (tr.docChanged) {
        dispatch?.(tr);
        return true;
      }
      return false;
    };
  }
  isActive(state, options = defaultOptions) {
    if (options.strict) {
      return true;
    }
    const {
      schema
    } = state;
    const type = schema.marks['link'];
    if (!type) {
      return false;
    }
    return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.isMarkActive)(state, type);
  }
  remove(state, dispatch) {
    return (0,ngx_editor_commands__WEBPACK_IMPORTED_MODULE_11__.removeLink)()(state, dispatch);
  }
  canExecute(state) {
    const testAttrs = {
      href: ''
    };
    return this.insert('Exec', testAttrs)(state) || this.update(testAttrs)(state);
  }
};
let Image$1 = class Image {
  insert(src, attrs) {
    return (state, dispatch) => {
      const {
        schema,
        tr,
        selection
      } = state;
      const type = schema.nodes['image'];
      if (!type) {
        return false;
      }
      const imageAttrs = {
        width: null,
        src,
        ...attrs
      };
      if (!imageAttrs.width && selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection && selection.node.type === type) {
        imageAttrs.width = selection.node.attrs['width'];
      }
      tr.replaceSelectionWith(type.createAndFill(imageAttrs));
      const resolvedPos = tr.doc.resolve(tr.selection.anchor - tr.selection.$anchor.nodeBefore.nodeSize);
      tr.setSelection(new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection(resolvedPos)).scrollIntoView();
      if (tr.docChanged) {
        dispatch?.(tr);
        return true;
      }
      return false;
    };
  }
  isActive(state) {
    const {
      selection
    } = state;
    if (selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection) {
      return selection.node.type.name === 'image';
    }
    return false;
  }
};
let TextColor$1 = class TextColor {
  constructor(name, attrName = 'color') {
    this.name = name;
    this.attrName = attrName;
  }
  apply(attrs) {
    return (state, dispatch) => {
      const {
        schema,
        selection,
        doc
      } = state;
      const type = schema.marks[this.name];
      if (!type) {
        return false;
      }
      const {
        from,
        to,
        empty
      } = selection;
      if (!empty && from + 1 === to) {
        const node = doc.nodeAt(from);
        if (node?.isAtom && !node.isText && node.isLeaf) {
          // An atomic node (e.g. Image) is selected.
          return false;
        }
      }
      return (0,ngx_editor_commands__WEBPACK_IMPORTED_MODULE_11__.applyMark)(type, attrs)(state, dispatch);
    };
  }
  isActive(state) {
    const {
      schema
    } = state;
    const type = schema.marks[this.name];
    if (!type) {
      return false;
    }
    return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.isMarkActive)(state, type);
  }
  getActiveColors(state) {
    if (!this.isActive(state)) {
      return [];
    }
    const {
      schema
    } = state;
    const marks = (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.getSelectionMarks)(state);
    const colors = marks.filter(mark => mark.type === schema.marks[this.name]).map(mark => {
      return mark.attrs[this.attrName];
    }).filter(Boolean);
    return colors;
  }
  remove() {
    return (state, dispatch) => {
      const {
        schema
      } = state;
      const type = schema.marks[this.name];
      if (!type) {
        return false;
      }
      return (0,ngx_editor_commands__WEBPACK_IMPORTED_MODULE_11__.removeMark)(type)(state, dispatch);
    };
  }
  canExecute(state) {
    const attrs = this.name === 'text_color' ? {
      color: ''
    } : {
      backgroundColor: ''
    };
    return this.apply(attrs)(state);
  }
};
const SAFE_MARKS = ['link'];
class FormatClear {
  insert() {
    return (state, dispatch) => {
      const {
        tr
      } = state;
      const {
        ranges,
        empty
      } = tr.selection;
      if (empty) {
        return true;
      }
      Object.entries(state.schema.marks).forEach(([markType, mark]) => {
        if (SAFE_MARKS.includes(markType)) {
          return;
        }
        ranges.forEach(range => {
          tr.removeMark(range.$from.pos, range.$to.pos, mark);
        });
      });
      dispatch(tr);
      return true;
    };
  }
  canExecute() {
    return true;
  }
}
const indentNodeTypes = ['paragraph', 'heading', 'blockquote'];
const minIndent = 0;
const maxIndent = 10;
const udpateIndentLevel = (tr, pos, method) => {
  const node = tr.doc.nodeAt(pos);
  if (!node) {
    return false;
  }
  const nodeIndent = node.attrs['indent'] ?? 0;
  const newIndent = (0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.clamp)(nodeIndent + (method === 'increase' ? 1 : -1), minIndent, maxIndent);
  if (newIndent === nodeIndent || newIndent < minIndent || newIndent > maxIndent) {
    return false;
  }
  const attrs = {
    ...node.attrs,
    indent: newIndent
  };
  tr.setNodeMarkup(pos, node.type, attrs);
  return true;
};
class Indent {
  constructor(method) {
    this.method = 'increase';
    this.method = method;
  }
  insert() {
    return (state, dispatch) => {
      const {
        tr,
        doc
      } = state;
      const {
        from,
        to
      } = tr.selection;
      let applicable = false;
      doc.nodesBetween(from, to, (node, pos) => {
        const nodeType = node.type;
        if (indentNodeTypes.includes(nodeType.name)) {
          applicable = udpateIndentLevel(tr, pos, this.method);
          return false;
        } else if (node.type.name.includes('list')) {
          return false;
        }
        return true;
      });
      if (!applicable) {
        return false;
      }
      if (tr.docChanged) {
        dispatch?.(tr);
      }
      return true;
    };
  }
  canExecute(state) {
    return this.insert()(state);
  }
}
class History {
  constructor(mode) {
    this.mode = 'undo';
    this.mode = mode;
  }
  insert() {
    return (state, dispatch) => {
      if (this.mode === 'undo') {
        return (0,prosemirror_history__WEBPACK_IMPORTED_MODULE_15__.undo)(state, dispatch);
      }
      return (0,prosemirror_history__WEBPACK_IMPORTED_MODULE_15__.redo)(state, dispatch);
    };
  }
  canExecute(state) {
    return this.insert()(state);
  }
}
const STRONG = new Mark('strong');
const EM = new Mark('em');
const CODE = new Mark('code');
const UNDERLINE = new Mark('u');
const STRIKE = new Mark('s');
const BLOCKQUOTE = new Blockqote();
const HORIZONTAL_RULE = new HorizontalRule();
const FORMAT_CLEAR = new FormatClear();
const UL = new ListItem(true);
const OL = new ListItem(false);
const H1 = new Heading(1);
const H2 = new Heading(2);
const H3 = new Heading(3);
const H4 = new Heading(4);
const H5 = new Heading(5);
const H6 = new Heading(6);
const ALIGN_LEFT = new TextAlign('left');
const ALIGN_CENTER = new TextAlign('center');
const ALIGN_RIGHT = new TextAlign('right');
const ALIGN_JUSTIFY = new TextAlign('justify');
const LINK = new Link$1();
const IMAGE = new Image$1();
const TEXT_COLOR = new TextColor$1('text_color', 'color');
const TEXT_BACKGROUND_COLOR = new TextColor$1('text_background_color', 'backgroundColor');
const INDENT = new Indent('increase');
const OUTDENT = new Indent('decrease');
const SUPERSCRIPT = new Mark('sup');
const SUBSCRIPT = new Mark('sub');
const UNDO = new History('undo');
const REDO = new History('redo');
const ToggleCommands = {
  bold: STRONG,
  italic: EM,
  code: CODE,
  underline: UNDERLINE,
  strike: STRIKE,
  blockquote: BLOCKQUOTE,
  bullet_list: UL,
  ordered_list: OL,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  align_left: ALIGN_LEFT,
  align_center: ALIGN_CENTER,
  align_right: ALIGN_RIGHT,
  align_justify: ALIGN_JUSTIFY,
  superscript: SUPERSCRIPT,
  subscript: SUBSCRIPT
};
const InsertCommands = {
  horizontal_rule: HORIZONTAL_RULE,
  format_clear: FORMAT_CLEAR,
  indent: INDENT,
  outdent: OUTDENT,
  undo: UNDO,
  redo: REDO
};
const Link = LINK;
const Image = IMAGE;
const TextColor = TEXT_COLOR;
const TextBackgroundColor = TEXT_BACKGROUND_COLOR;
const defaults = {
  // menu
  bold: 'Bold',
  italic: 'Italic',
  code: 'Code',
  underline: 'Underline',
  strike: 'Strike',
  blockquote: 'Blockquote',
  bullet_list: 'Bullet List',
  ordered_list: 'Ordered List',
  heading: 'Heading',
  h1: 'Header 1',
  h2: 'Header 2',
  h3: 'Header 3',
  h4: 'Header 4',
  h5: 'Header 5',
  h6: 'Header 6',
  align_left: 'Left Align',
  align_center: 'Center Align',
  align_right: 'Right Align',
  align_justify: 'Justify',
  text_color: 'Text Color',
  background_color: 'Background Color',
  horizontal_rule: 'Horizontal rule',
  format_clear: 'Clear Formatting',
  insertLink: 'Insert Link',
  removeLink: 'Remove Link',
  insertImage: 'Insert Image',
  indent: 'Increase Indent',
  outdent: 'Decrease Indent',
  superscript: 'Superscript',
  subscript: 'Subscript',
  undo: 'Undo',
  redo: 'Redo',
  // pupups, forms, others...
  url: 'URL',
  text: 'Text',
  openInNewTab: 'Open in new tab',
  insert: 'Insert',
  altText: 'Alt Text',
  title: 'Title',
  remove: 'Remove',
  enterValidUrl: 'Please enter a valid URL'
};
class Locals {
  constructor(newLocals = {}) {
    this.locals = defaults;
    this.get = key => {
      const value = this.locals[key];
      if (value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.isObservable)(value) ? value : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(value);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)('');
    };
    this.locals = {
      ...defaults,
      ...newLocals
    };
  }
}
var bold = `
  <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
`;
var italic = `
  <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
`;
var code = `
<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
`;
var underline = `
<path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>
`;
var strike = `
<path d="M6.85,7.08C6.85,4.37,9.45,3,12.24,3c1.64,0,3,0.49,3.9,1.28c0.77,0.65,1.46,1.73,1.46,3.24h-3.01 c0-0.31-0.05-0.59-0.15-0.85c-0.29-0.86-1.2-1.28-2.25-1.28c-1.86,0-2.34,1.02-2.34,1.7c0,0.48,0.25,0.88,0.74,1.21 C10.97,8.55,11.36,8.78,12,9H7.39C7.18,8.66,6.85,8.11,6.85,7.08z M21,12v-2H3v2h9.62c1.15,0.45,1.96,0.75,1.96,1.97 c0,1-0.81,1.67-2.28,1.67c-1.54,0-2.93-0.54-2.93-2.51H6.4c0,0.55,0.08,1.13,0.24,1.58c0.81,2.29,3.29,3.3,5.67,3.3 c2.27,0,5.3-0.89,5.3-4.05c0-0.3-0.01-1.16-0.48-1.94H21V12z"/>
`;
var orderedList = `
<path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
`;
var bulletList = `
<path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
`;
var quote = `
<path d="M0 0h24v24H0z" fill="none"/><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
`;
var link = `
<path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
`;
var unlink = `
<path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"/>
`;
var image = `
<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
`;
var alignLeft = `
<path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
`;
var alignCenter = `
<path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>
`;
var alignRight = `
<path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
`;
var alignJustify = `
<path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
`;
var textColor = `
<path d="M2,20h20v4H2V20z M5.49,17h2.42l1.27-3.58h5.65L16.09,17h2.42L13.25,3h-2.5L5.49,17z M9.91,11.39l2.03-5.79h0.12l2.03,5.79 H9.91z"/>
`;
var colorFill = `
<path d="M16.56,8.94L7.62,0L6.21,1.41l2.38,2.38L3.44,8.94c-0.59,0.59-0.59,1.54,0,2.12l5.5,5.5C9.23,16.85,9.62,17,10,17 s0.77-0.15,1.06-0.44l5.5-5.5C17.15,10.48,17.15,9.53,16.56,8.94z M5.21,10L10,5.21L14.79,10H5.21z M19,11.5c0,0-2,2.17-2,3.5 c0,1.1,0.9,2,2,2s2-0.9,2-2C21,13.67,19,11.5,19,11.5z M2,20h20v4H2V20z"/>
`;
var horizontalRule = `
  <g>
    <rect fill="none" fill-rule="evenodd" height="24" width="24"/>
    <rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/>
  </g>
`;
var formatClear = `
<path d="M0 0h24v24H0z" fill="none"/><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/>
`;
var indent = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>';
var outdent = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>';
var superscript = '<g><rect fill="none" height="20" width="20"/><path d="M17,6l-1,0v1h2v1l-3,0V6c0-0.55,0.45-1,1-1l1,0l0-1h-2V3l2,0c0.55,0,1,0.45,1,1v1C18,5.55,17.55,6,17,6z M5.63,16h1.9 l2.43-3.87h0.08L12.47,16h1.9l-3.32-5.2l3.1-4.8h-1.91l-2.19,3.56H9.96L7.75,6h-1.9l3.09,4.8L5.63,16z"/></g>';
var subscript = '<g><rect fill="none" height="20" width="20"/><path d="M17,15l-1,0v1h2v1h-3v-2c0-0.55,0.45-1,1-1l1,0l0-1h-2v-1l2,0c0.55,0,1,0.45,1,1v1C18,14.55,17.55,15,17,15z M5.63,14h1.9 l2.43-3.87h0.08L12.47,14h1.9l-3.32-5.2l3.1-4.8h-1.91l-2.19,3.56H9.96L7.75,4h-1.9l3.09,4.8L5.63,14z"/></g>';
var undo = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>';
var redo = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>';

/* eslint-disable @typescript-eslint/naming-convention */
// Icons source: https://material.io/
const DEFAULT_ICON_HEIGHT = 20;
const DEFAULT_ICON_WIDTH = 20;
const DEFAULT_ICON_FILL = 'currentColor';
const icons = {
  bold,
  italic,
  code,
  underline,
  strike,
  ordered_list: orderedList,
  bullet_list: bulletList,
  blockquote: quote,
  link,
  unlink,
  image,
  align_left: alignLeft,
  align_center: alignCenter,
  align_right: alignRight,
  align_justify: alignJustify,
  text_color: textColor,
  color_fill: colorFill,
  horizontal_rule: horizontalRule,
  format_clear: formatClear,
  indent,
  outdent,
  superscript,
  subscript,
  undo,
  redo,
  path: '<path></path>'
};
class Icon {
  static get(name, fill = DEFAULT_ICON_FILL) {
    const fullPath = icons[name];
    if (fullPath && (fullPath.includes('<path') || fullPath.includes('<g'))) {
      return `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill=${fill}
          height=${DEFAULT_ICON_HEIGHT}
          width=${DEFAULT_ICON_WIDTH}
        >
          ${fullPath}
        </svg>
      `;
    }
    return fullPath;
  }
}
class NgxEditorServiceConfig {
  constructor() {
    this.locals = {};
    this.icons = {};
  }
  static #_ = this.ɵfac = function NgxEditorServiceConfig_Factory(t) {
    return new (t || NgxEditorServiceConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NgxEditorServiceConfig,
    factory: NgxEditorServiceConfig.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEditorServiceConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class NgxEditorService {
  constructor(config) {
    this.config = config;
  }
  get locals() {
    return new Locals(this.config.locals);
  }
  getIcon(icon) {
    return this.config.icons[icon] ? this.config.icons[icon] : Icon.get(icon);
  }
  static #_ = this.ɵfac = function NgxEditorService_Factory(t) {
    return new (t || NgxEditorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NgxEditorServiceConfig, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NgxEditorService,
    factory: NgxEditorService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEditorService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: NgxEditorServiceConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }], null);
})();
const provideMyServiceOptions = config => {
  return {
    locals: config.locals ?? {},
    icons: config.icons ?? {}
  };
};
class SanitizeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (isTrustedHtml(value)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static #_ = this.ɵfac = function SanitizeHtmlPipe_Factory(t) {
    return new (t || SanitizeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
    name: "sanitizeHtml",
    type: SanitizeHtmlPipe,
    pure: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SanitizeHtmlPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
    args: [{
      name: 'sanitizeHtml'
    }]
  }], () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.DomSanitizer
  }], null);
})();
class ToggleCommandComponent {
  get name() {
    return this.toolbarItem;
  }
  constructor(ngxeService, menuService) {
    this.ngxeService = ngxeService;
    this.menuService = menuService;
    this.isActive = false;
    this.disabled = false;
    this.update = view => {
      const {
        state
      } = view;
      const command = ToggleCommands[this.name];
      this.isActive = command.isActive(state);
      this.disabled = !command.canExecute(state);
    };
  }
  toggle() {
    const {
      state,
      dispatch
    } = this.editorView;
    const command = ToggleCommands[this.name];
    command.toggle()(state, dispatch);
  }
  onMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.toggle();
  }
  onKeydown() {
    this.toggle();
  }
  getTitle(name) {
    return this.ngxeService.locals.get(name);
  }
  ngOnInit() {
    this.html = this.ngxeService.getIcon(this.name);
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function ToggleCommandComponent_Factory(t) {
    return new (t || ToggleCommandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ToggleCommandComponent,
    selectors: [["ngx-toggle-command"]],
    inputs: {
      toolbarItem: "toolbarItem"
    },
    decls: 4,
    vars: 14,
    consts: [["type", "button", 1, "NgxEditor__MenuItem--Icon", 3, "mousedown", "keydown.enter", "keydown.space", "disabled", "innerHTML", "title", "ariaLabel"]],
    template: function ToggleCommandComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "sanitizeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ToggleCommandComponent_Template_button_mousedown_0_listener($event) {
          return ctx.onMouseClick($event);
        })("keydown.enter", function ToggleCommandComponent_Template_button_keydown_enter_0_listener() {
          return ctx.onKeydown();
        })("keydown.space", function ToggleCommandComponent_Template_button_keydown_space_0_listener() {
          return ctx.onKeydown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("NgxEditor__MenuItem--Active", ctx.isActive)("NgxEditor--Disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 8, ctx.html), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 10, ctx.getTitle(ctx.name)))("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 12, ctx.getTitle(ctx.name)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, SanitizeHtmlPipe]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ToggleCommandComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-toggle-command',
      template: "<button\n  type=\"button\"\n  class=\"NgxEditor__MenuItem--Icon\"\n  [class.NgxEditor__MenuItem--Active]=\"isActive\"\n  [class.NgxEditor--Disabled]=\"disabled\"\n  [disabled]=\"disabled\"\n  [innerHTML]=\"html | sanitizeHtml\"\n  (mousedown)=\"onMouseClick($event)\"\n  (keydown.enter)=\"onKeydown()\"\n  (keydown.space)=\"onKeydown()\"\n  [title]=\"getTitle(name) | async\"\n  [ariaLabel]=\"getTitle(name) | async\"\n></button>\n"
    }]
  }], () => [{
    type: NgxEditorService
  }, {
    type: MenuService
  }], {
    toolbarItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class InsertCommandComponent {
  get name() {
    return this.toolbarItem;
  }
  constructor(ngxeService, menuService) {
    this.ngxeService = ngxeService;
    this.menuService = menuService;
    this.disabled = false;
    this.update = view => {
      const {
        state
      } = view;
      const command = InsertCommands[this.name];
      this.disabled = !command.canExecute(state);
    };
  }
  onMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.insert();
  }
  onKeydown() {
    this.insert();
  }
  insert() {
    const {
      state,
      dispatch
    } = this.editorView;
    const command = InsertCommands[this.name];
    command.insert()(state, dispatch);
  }
  getTitle(name) {
    return this.ngxeService.locals.get(name);
  }
  ngOnInit() {
    this.html = this.ngxeService.getIcon(this.name);
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function InsertCommandComponent_Factory(t) {
    return new (t || InsertCommandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InsertCommandComponent,
    selectors: [["ngx-insert-command"]],
    inputs: {
      toolbarItem: "toolbarItem"
    },
    decls: 4,
    vars: 12,
    consts: [[1, "NgxEditor__MenuItem--Icon", 3, "mousedown", "keydown.enter", "keydown.space", "disabled", "innerHTML", "title", "ariaLabel"]],
    template: function InsertCommandComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "sanitizeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function InsertCommandComponent_Template_button_mousedown_0_listener($event) {
          return ctx.onMouseClick($event);
        })("keydown.enter", function InsertCommandComponent_Template_button_keydown_enter_0_listener() {
          return ctx.onKeydown();
        })("keydown.space", function InsertCommandComponent_Template_button_keydown_space_0_listener() {
          return ctx.onKeydown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("NgxEditor--Disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 6, ctx.html), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 8, ctx.getTitle(ctx.name)))("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, ctx.getTitle(ctx.name)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, SanitizeHtmlPipe]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InsertCommandComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-insert-command',
      template: "<button\n  class=\"NgxEditor__MenuItem--Icon\"\n  [disabled]=\"disabled\"\n  [class.NgxEditor--Disabled]=\"disabled\"\n  [innerHTML]=\"html | sanitizeHtml\"\n  (mousedown)=\"onMouseClick($event)\"\n  (keydown.enter)=\"onKeydown()\"\n  (keydown.space)=\"onKeydown()\"\n  [title]=\"getTitle(name) | async\"\n  [ariaLabel]=\"getTitle(name) | async\"\n></button>\n"
    }]
  }], () => [{
    type: NgxEditorService
  }, {
    type: MenuService
  }], {
    toolbarItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
const DEFAULT_LINK_OPTIONS = {
  showOpenInNewTab: true
};
class LinkComponent {
  constructor(el, ngxeService, menuService) {
    this.el = el;
    this.ngxeService = ngxeService;
    this.menuService = menuService;
    this.options = DEFAULT_LINK_OPTIONS;
    this.showPopup = false;
    this.isActive = false;
    this.canExecute = true;
    this.componentId = (0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.uniq)();
    this.setText = () => {
      const {
        state: {
          selection,
          doc
        }
      } = this.editorView;
      const {
        empty,
        from,
        to
      } = selection;
      const selectedText = !empty ? doc.textBetween(from, to) : '';
      if (selectedText) {
        this.text.patchValue(selectedText);
        this.text.disable();
      }
    };
    this.update = view => {
      const {
        state
      } = view;
      this.isActive = Link.isActive(state, {
        strict: false
      });
      this.canExecute = Link.canExecute(state);
    };
  }
  get icon() {
    return this.ngxeService.getIcon(this.isActive ? 'unlink' : 'link');
  }
  get title() {
    return this.ngxeService.locals.get(this.isActive ? 'removeLink' : 'insertLink');
  }
  get href() {
    return this.form.get('href');
  }
  get text() {
    return this.form.get('text');
  }
  onDocumentClick(e) {
    if (!this.el.nativeElement.contains(e.target) && this.showPopup) {
      this.hidePopup();
    }
  }
  getId(name) {
    return `${name}-${this.componentId}`;
  }
  getLabel(key) {
    return this.ngxeService.locals.get(key);
  }
  hidePopup() {
    this.showPopup = false;
    this.form.reset({
      href: '',
      text: '',
      openInNewTab: true
    });
    this.text.enable();
  }
  togglePopup() {
    const {
      state,
      dispatch
    } = this.editorView;
    if (this.isActive) {
      Link.remove(state, dispatch);
      return;
    }
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      this.setText();
    }
  }
  onTogglePopupMouseClick(e) {
    if (e.button !== 0) {
      return;
    }
    this.togglePopup();
  }
  onTogglePopupKeydown() {
    this.togglePopup();
  }
  insertLink(e) {
    e.preventDefault();
    const {
      text,
      href,
      openInNewTab
    } = this.form.getRawValue();
    const {
      dispatch,
      state
    } = this.editorView;
    const {
      selection
    } = state;
    let target;
    if (this.options.showOpenInNewTab) {
      target = openInNewTab ? '_blank' : '_self';
    }
    const attrs = {
      title: href,
      href,
      target
    };
    if (selection.empty) {
      Link.insert(text, attrs)(state, dispatch);
      this.editorView.focus();
    } else {
      Link.update(attrs)(state, dispatch);
    }
    this.hidePopup();
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      href: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.menuService.editor.linkValidationPattern)]),
      text: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      openInNewTab: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(true)
    });
    this.updateSubscription = this.menuService.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function LinkComponent_Factory(t) {
    return new (t || LinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LinkComponent,
    selectors: [["ngx-link"]],
    hostBindings: function LinkComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function LinkComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      options: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "options", "options", value => ({
        ...DEFAULT_LINK_OPTIONS,
        ...value
      })]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputTransformsFeature"]],
    decls: 5,
    vars: 16,
    consts: [["type", "button", "aria-haspopup", "dialog", 1, "NgxEditor__MenuItem--Icon", 3, "mousedown", "keydown.enter", "keydown.space", "disabled", "innerHTML", "title", "ariaLabel", "ariaExpanded"], ["class", "NgxEditor__Popup", 4, "ngIf"], [1, "NgxEditor__Popup"], [1, "NgxEditor__Popup--Form", 3, "ngSubmit", "formGroup"], [1, "NgxEditor__Popup--FormGroup"], [1, "NgxEditor__Popup--Col"], [1, "NgxEditor__Popup--Label", 3, "htmlFor"], ["type", "href", "formControlName", "href", "autocomplete", "off", 3, "id"], ["class", "NgxEditor__HelpText NgxEditor__HelpText--Error", 4, "ngIf"], ["type", "text", "formControlName", "text", "autocomplete", "off", 3, "id"], ["class", "NgxEditor__Popup--FormGroup", 4, "ngIf"], ["type", "submit", 3, "disabled"], [1, "NgxEditor__HelpText", "NgxEditor__HelpText--Error"], ["type", "checkbox", "formControlName", "openInNewTab"]],
    template: function LinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "sanitizeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function LinkComponent_Template_button_mousedown_0_listener($event) {
          return ctx.onTogglePopupMouseClick($event);
        })("keydown.enter", function LinkComponent_Template_button_keydown_enter_0_listener() {
          return ctx.onTogglePopupKeydown();
        })("keydown.space", function LinkComponent_Template_button_keydown_space_0_listener() {
          return ctx.onTogglePopupKeydown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LinkComponent_div_4_Template, 20, 18, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("NgxEditor__MenuItem--Active", ctx.isActive || ctx.showPopup)("NgxEditor--Disabled", !ctx.canExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.canExecute)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 10, ctx.icon), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 12, ctx.title))("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 14, ctx.title))("ariaExpanded", ctx.showPopup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, SanitizeHtmlPipe]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LinkComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-link',
      template: "<button\n  type=\"button\"\n  class=\"NgxEditor__MenuItem--Icon\"\n  [class.NgxEditor__MenuItem--Active]=\"isActive || showPopup\"\n  [class.NgxEditor--Disabled]=\"!canExecute\"\n  [disabled]=\"!canExecute\"\n  [innerHTML]=\"icon | sanitizeHtml\"\n  (mousedown)=\"onTogglePopupMouseClick($event)\"\n  (keydown.enter)=\"onTogglePopupKeydown()\"\n  (keydown.space)=\"onTogglePopupKeydown()\"\n  [title]=\"title | async\"\n  [ariaLabel]=\"title | async\"\n  aria-haspopup=\"dialog\"\n  [ariaExpanded]=\"showPopup\"\n></button>\n\n<!-- popup -->\n<div *ngIf=\"showPopup\" class=\"NgxEditor__Popup\">\n  <form class=\"NgxEditor__Popup--Form\" [formGroup]=\"form\" (ngSubmit)=\"insertLink($event)\">\n    <div class=\"NgxEditor__Popup--FormGroup\">\n      <div class=\"NgxEditor__Popup--Col\">\n        <label class=\"NgxEditor__Popup--Label\" [htmlFor]=\"getId('link-popup-url')\">{{ getLabel('url') | async }}</label>\n        <input type=\"href\" [id]=\"getId('link-popup-url')\" formControlName=\"href\" autocomplete=\"off\" />\n        <div *ngIf=\"href.touched && href.invalid\" class=\"NgxEditor__HelpText NgxEditor__HelpText--Error\">\n          {{ href.errors?.['pattern'] && getLabel('enterValidUrl') | async }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"NgxEditor__Popup--FormGroup\">\n      <div class=\"NgxEditor__Popup--Col\">\n        <label class=\"NgxEditor__Popup--Label\" [htmlFor]=\"getId('link-popup-label')\">{{\n          getLabel('text') | async\n        }}</label>\n        <input type=\"text\" [id]=\"getId('link-popup-label')\" formControlName=\"text\" autocomplete=\"off\" />\n        <div *ngIf=\"text.touched && text.invalid\" class=\"NgxEditor__HelpText NgxEditor__HelpText--Error\">\n          {{ text.errors?.['required'] && 'This is required' }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"NgxEditor__Popup--FormGroup\" *ngIf=\"this.options.showOpenInNewTab\">\n      <div class=\"NgxEditor__Popup--Col\">\n        <label>\n          <input type=\"checkbox\" formControlName=\"openInNewTab\" />\n          {{ getLabel('openInNewTab') | async }}\n        </label>\n      </div>\n    </div>\n\n    <button type=\"submit\" [disabled]=\"!form.valid\">{{ getLabel('insert') | async }}</button>\n  </form>\n</div>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: NgxEditorService
  }, {
    type: MenuService
  }], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: value => ({
          ...DEFAULT_LINK_OPTIONS,
          ...value
        })
      }]
    }],
    onDocumentClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mousedown', ['$event']]
    }]
  });
})();
class DropdownComponent {
  constructor(ngxeService, menuService, el) {
    this.ngxeService = ngxeService;
    this.menuService = menuService;
    this.el = el;
    this.isDropdownOpen = false;
    this.disabledItems = [];
    this.update = view => {
      const {
        state
      } = view;
      this.disabledItems = [];
      const activeItems = [];
      this.items.forEach(item => {
        const command = ToggleCommands[item];
        const isActive = command.isActive(state);
        if (isActive) {
          activeItems.push(item);
        }
        if (!command.canExecute(state)) {
          this.disabledItems.push(item);
        }
      });
      if (activeItems.length === 1) {
        [this.activeItem] = activeItems;
      } else {
        this.activeItem = null;
      }
    };
  }
  get isSelected() {
    return Boolean(this.activeItem || this.isDropdownOpen);
  }
  get isDropdownDisabled() {
    return this.disabledItems.length === this.items.length;
  }
  onDocumentClick(target) {
    if (!this.el.nativeElement.contains(target) && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }
  getName(key) {
    return this.ngxeService.locals.get(key);
  }
  getIsDropdownActive(item) {
    return this.activeItem === item;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onToggleDropdownMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.toggleDropdown();
  }
  onToggleDropdownKeydown() {
    this.toggleDropdown();
  }
  trackByIndex(index) {
    return index;
  }
  selectItem(item) {
    const command = ToggleCommands[item];
    const {
      state,
      dispatch
    } = this.editorView;
    command.toggle()(state, dispatch);
    this.isDropdownOpen = false;
  }
  onDropdownItemMouseClick(e, item) {
    e.preventDefault();
    // consider only left click
    if (e.button !== 0) {
      return;
    }
    this.selectItem(item);
  }
  onDropdownItemKeydown(event, item) {
    const e = event;
    e.preventDefault();
    this.selectItem(item);
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function DropdownComponent_Factory(t) {
    return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DropdownComponent,
    selectors: [["ngx-dropdown"]],
    hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function DropdownComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocumentClick($event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      group: "group",
      items: "items"
    },
    decls: 5,
    vars: 13,
    consts: [["type", "button", "aria-haspopup", "listbox", 1, "NgxEditor__Dropdown--Text", 3, "mousedown", "keydown.enter", "keydown.space", "disabled", "ariaLabel", "ariaExpanded"], ["class", "NgxEditor__Dropdown--DropdownMenu", "role", "listbox", 4, "ngIf"], ["role", "listbox", 1, "NgxEditor__Dropdown--DropdownMenu"], ["type", "button", "class", "NgxEditor__Dropdown--Item", "role", "option", 3, "ngClass", "ariaLabel", "mousedown", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "role", "option", 1, "NgxEditor__Dropdown--Item", 3, "mousedown", "keydown.enter", "keydown.space", "ngClass", "ariaLabel"]],
    template: function DropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function DropdownComponent_Template_button_mousedown_0_listener($event) {
          return ctx.onToggleDropdownMouseClick($event);
        })("keydown.enter", function DropdownComponent_Template_button_keydown_enter_0_listener() {
          return ctx.onToggleDropdownKeydown();
        })("keydown.space", function DropdownComponent_Template_button_keydown_space_0_listener() {
          return ctx.onToggleDropdownKeydown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DropdownComponent_div_4_Template, 2, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("NgxEditor__Dropdown--Selected", ctx.isSelected)("NgxEditor--Disabled", ctx.isDropdownDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isDropdownDisabled)("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 9, ctx.getName(ctx.activeItem || ctx.group)))("ariaExpanded", ctx.isDropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 11, ctx.getName(ctx.activeItem || ctx.group)), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDropdownOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DropdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-dropdown',
      template: "<button\n  type=\"button\"\n  class=\"NgxEditor__Dropdown--Text\"\n  [class.NgxEditor__Dropdown--Selected]=\"isSelected\"\n  [disabled]=\"isDropdownDisabled\"\n  [class.NgxEditor--Disabled]=\"isDropdownDisabled\"\n  (mousedown)=\"onToggleDropdownMouseClick($event)\"\n  (keydown.enter)=\"onToggleDropdownKeydown()\"\n  (keydown.space)=\"onToggleDropdownKeydown()\"\n  [ariaLabel]=\"getName(activeItem || group) | async\"\n  aria-haspopup=\"listbox\"\n  [ariaExpanded]=\"isDropdownOpen\"\n>\n  {{ getName(activeItem || group) | async }}\n</button>\n\n<div class=\"NgxEditor__Dropdown--DropdownMenu\" *ngIf=\"isDropdownOpen\" role=\"listbox\">\n  <button\n    type=\"button\"\n    class=\"NgxEditor__Dropdown--Item\"\n    *ngFor=\"let item of items; trackBy: trackByIndex\"\n    (mousedown)=\"onDropdownItemMouseClick($event, item)\"\n    (keydown.enter)=\"onDropdownItemKeydown($event, item)\"\n    (keydown.space)=\"onDropdownItemKeydown($event, item)\"\n    [ngClass]=\"{\n      'NgxEditor__Dropdown--Active': item === activeItem,\n      'NgxEditor--Disabled': disabledItems.includes(item)\n    }\"\n    [ariaLabel]=\"getName(item) | async\"\n    role=\"option\"\n    [attr.aria-selected]=\"item === activeItem\"\n  >\n    {{ getName(item) | async }}\n  </button>\n</div>\n"
    }]
  }], () => [{
    type: NgxEditorService
  }, {
    type: MenuService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }], {
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onDocumentClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mousedown', ['$event.target']]
    }]
  });
})();
class ImageComponent {
  constructor(el, ngxeService, menuService) {
    this.el = el;
    this.ngxeService = ngxeService;
    this.menuService = menuService;
    this.showPopup = false;
    this.isActive = false;
    this.componentId = (0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.uniq)();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      src: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/??([^#\n\r]*)?#?([^\n\r]*)')]),
      alt: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('')
    });
    this.update = view => {
      const {
        state
      } = view;
      this.isActive = Image.isActive(state);
    };
  }
  get icon() {
    return this.ngxeService.getIcon('image');
  }
  get src() {
    return this.form.get('src');
  }
  onDocumentClick(e) {
    if (!this.el.nativeElement.contains(e.target) && this.showPopup) {
      this.hideForm();
    }
  }
  getId(name) {
    return `${name}-${this.componentId}`;
  }
  getLabel(key) {
    return this.ngxeService.locals.get(key);
  }
  hideForm() {
    this.showPopup = false;
    this.form.reset({
      src: '',
      alt: '',
      title: ''
    });
  }
  togglePopup() {
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      this.fillForm();
    }
  }
  onTogglePopupMouseClick(e) {
    if (e.button !== 0) {
      return;
    }
    this.togglePopup();
  }
  onTogglePopupKeydown() {
    this.togglePopup();
  }
  fillForm() {
    const {
      state
    } = this.editorView;
    const {
      selection
    } = state;
    if (selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection && this.isActive) {
      const {
        src,
        alt = '',
        title = ''
      } = selection.node.attrs;
      this.form.setValue({
        src,
        alt,
        title
      });
    }
  }
  insertLink(e) {
    e.preventDefault();
    const {
      src,
      alt,
      title
    } = this.form.getRawValue();
    const {
      dispatch,
      state
    } = this.editorView;
    const attrs = {
      alt,
      title
    };
    Image.insert(src, attrs)(state, dispatch);
    this.editorView.focus();
    this.hideForm();
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function ImageComponent_Factory(t) {
    return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImageComponent,
    selectors: [["ngx-image"]],
    hostBindings: function ImageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    decls: 5,
    vars: 13,
    consts: [["type", "button", "aria-haspopup", "dialog", 1, "NgxEditor__MenuItem--Icon", 3, "mousedown", "keydown.enter", "keydown.space", "innerHTML", "title", "ariaLabel", "ariaExpanded"], ["class", "NgxEditor__Popup", 4, "ngIf"], [1, "NgxEditor__Popup"], [1, "NgxEditor__Popup--Form", 3, "ngSubmit", "formGroup"], [1, "NgxEditor__Popup--FormGroup"], [1, "NgxEditor__Popup--Col"], [1, "NgxEditor__Popup--Label", 3, "htmlFor"], ["type", "href", "formControlName", "src", "autocomplete", "off", 3, "id"], ["class", "NgxEditor__HelpText NgxEditor__HelpText--Error", 4, "ngIf"], ["type", "text", "formControlName", "alt", "autocomplete", "off", 3, "id"], ["type", "text", "formControlName", "title", "autocomplete", "off", 3, "id"], ["type", "submit", 3, "disabled"], [1, "NgxEditor__HelpText", "NgxEditor__HelpText--Error"]],
    template: function ImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "sanitizeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageComponent_Template_button_mousedown_0_listener($event) {
          return ctx.onTogglePopupMouseClick($event);
        })("keydown.enter", function ImageComponent_Template_button_keydown_enter_0_listener() {
          return ctx.onTogglePopupKeydown();
        })("keydown.space", function ImageComponent_Template_button_keydown_space_0_listener() {
          return ctx.onTogglePopupKeydown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ImageComponent_div_4_Template, 24, 21, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("NgxEditor__MenuItem--Active", ctx.isActive || ctx.showPopup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 7, ctx.icon), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, ctx.getLabel("insertImage")))("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 11, ctx.getLabel("insertImage")))("ariaExpanded", ctx.showPopup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, SanitizeHtmlPipe]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImageComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-image',
      template: "<button\n  type=\"button\"\n  class=\"NgxEditor__MenuItem--Icon\"\n  [class.NgxEditor__MenuItem--Active]=\"isActive || showPopup\"\n  [innerHTML]=\"icon | sanitizeHtml\"\n  (mousedown)=\"onTogglePopupMouseClick($event)\"\n  (keydown.enter)=\"onTogglePopupKeydown()\"\n  (keydown.space)=\"onTogglePopupKeydown()\"\n  [title]=\"getLabel('insertImage') | async\"\n  [ariaLabel]=\"getLabel('insertImage') | async\"\n  aria-haspopup=\"dialog\"\n  [ariaExpanded]=\"showPopup\"\n></button>\n\n<!-- popup -->\n<div *ngIf=\"showPopup\" class=\"NgxEditor__Popup\">\n  <form class=\"NgxEditor__Popup--Form\" [formGroup]=\"form\" (ngSubmit)=\"insertLink($event)\">\n    <div class=\"NgxEditor__Popup--FormGroup\">\n      <div class=\"NgxEditor__Popup--Col\">\n        <label class=\"NgxEditor__Popup--Label\" [htmlFor]=\"getId('image-popup-url')\">{{\n          getLabel('url') | async\n        }}</label>\n        <input type=\"href\" [id]=\"getId('image-popup-url')\" formControlName=\"src\" autocomplete=\"off\" />\n        <div *ngIf=\"src.touched && src.invalid\" class=\"NgxEditor__HelpText NgxEditor__HelpText--Error\">\n          {{ src.errors?.['pattern'] && getLabel('enterValidUrl') | async }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"NgxEditor__Popup--FormGroup\">\n      <div class=\"NgxEditor__Popup--Col\">\n        <label class=\"NgxEditor__Popup--Label\" [htmlFor]=\"getId('image-popup-label')\">{{\n          getLabel('altText') | async\n        }}</label>\n        <input type=\"text\" [id]=\"getId('image-popup-label')\" formControlName=\"alt\" autocomplete=\"off\" />\n      </div>\n    </div>\n\n    <div class=\"NgxEditor__Popup--FormGroup\">\n      <div class=\"NgxEditor__Popup--Col\">\n        <label class=\"NgxEditor__Popup--Label\" [htmlFor]=\"getId('image-popup-title')\">{{\n          getLabel('title') | async\n        }}</label>\n        <input type=\"text\" [id]=\"getId('image-popup-title')\" formControlName=\"title\" autocomplete=\"off\" />\n      </div>\n    </div>\n\n    <button type=\"submit\" [disabled]=\"!form.valid || !form.dirty\">{{ getLabel('insert') | async }}</button>\n  </form>\n</div>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: NgxEditorService
  }, {
    type: MenuService
  }], {
    onDocumentClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mousedown', ['$event']]
    }]
  });
})();
class ColorPickerComponent {
  constructor(el, menuService, ngxeService) {
    this.el = el;
    this.menuService = menuService;
    this.ngxeService = ngxeService;
    this.showPopup = false;
    this.isActive = false;
    this.activeColors = [];
    this.canExecute = true;
    this.update = view => {
      const {
        state
      } = view;
      this.canExecute = this.command.canExecute(state);
      this.isActive = this.command.isActive(state);
      this.activeColors = [];
      if (this.isActive) {
        this.activeColors = this.command.getActiveColors(state);
      }
    };
  }
  get title() {
    return this.getLabel(this.type === 'text_color' ? 'text_color' : 'background_color');
  }
  get icon() {
    return this.ngxeService.getIcon(this.type === 'text_color' ? 'text_color' : 'color_fill');
  }
  get command() {
    return this.type === 'text_color' ? TextColor : TextBackgroundColor;
  }
  getContrastYIQ(hexcolor) {
    const color = hexcolor.replace('#', '');
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }
  onDocumentClick(e) {
    if (!this.el.nativeElement.contains(e.target) && this.showPopup) {
      this.hidePopup();
    }
  }
  hidePopup() {
    this.showPopup = false;
  }
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  onTogglePopupMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.togglePopup();
  }
  onTogglePopupKeydown() {
    this.togglePopup();
  }
  remove() {
    const {
      state,
      dispatch
    } = this.editorView;
    this.command.remove()(state, dispatch);
    this.hidePopup();
  }
  onRemoveMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    e.preventDefault();
    this.remove();
  }
  onRemoveKeydown() {
    this.remove();
  }
  trackByIndex(index) {
    return index;
  }
  selectColor(color) {
    const {
      state,
      dispatch
    } = this.editorView;
    if (this.type === 'text_color') {
      const attrs = {
        color
      };
      this.command.apply(attrs)(state, dispatch);
    } else {
      const attrs = {
        backgroundColor: color
      };
      this.command.apply(attrs)(state, dispatch);
    }
    if (!this.editorView.hasFocus()) {
      this.editorView.focus();
    }
    this.hidePopup();
  }
  onColorSelectMouseClick(e, color) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.selectColor(color);
  }
  onColorSelectKeydown(color) {
    this.selectColor(color);
  }
  getLabel(key) {
    return this.ngxeService.locals.get(key);
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function ColorPickerComponent_Factory(t) {
    return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ColorPickerComponent,
    selectors: [["ngx-color-picker"]],
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ColorPickerComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      presets: "presets",
      type: "type"
    },
    decls: 5,
    vars: 15,
    consts: [["type", "button", 1, "NgxEditor__MenuItem--Icon", 3, "mousedown", "keydown.enter", "keydown.space", "disabled", "innerHTML", "title", "ariaLabel"], ["class", "NgxEditor__Popup", 4, "ngIf"], [1, "NgxEditor__Popup"], ["class", "NgxEditor__ColorContainer", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "NgxEditor__MenuItem--Button", 3, "mousedown", "keydown.enter", "keydown.space", "disabled"], [1, "NgxEditor__ColorContainer"], ["class", "NgxEditor__Color", 3, "ngStyle", "title", "ngClass", "mousedown", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "NgxEditor__Color", 3, "mousedown", "keydown.enter", "keydown.space", "ngStyle", "title", "ngClass"]],
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "sanitizeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ColorPickerComponent_Template_button_mousedown_0_listener($event) {
          return ctx.onTogglePopupMouseClick($event);
        })("keydown.enter", function ColorPickerComponent_Template_button_keydown_enter_0_listener() {
          return ctx.onTogglePopupKeydown();
        })("keydown.space", function ColorPickerComponent_Template_button_keydown_space_0_listener() {
          return ctx.onTogglePopupKeydown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ColorPickerComponent_div_4_Template, 5, 6, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("NgxEditor__MenuItem--Active", ctx.isActive || ctx.showPopup)("NgxEditor--Disabled", !ctx.canExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.canExecute)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 9, ctx.icon), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 11, ctx.title))("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 13, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, SanitizeHtmlPipe],
    styles: ["@charset \"UTF-8\";.NgxEditor__Popup[_ngcontent-%COMP%]{width:230px}.NgxEditor__ColorContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.NgxEditor__ColorContainer[_ngcontent-%COMP%] + .NgxEditor__ColorContainer[_ngcontent-%COMP%]{margin-top:5px}.NgxEditor__Color[_ngcontent-%COMP%]{border:none;outline:none;border-radius:6px;width:24px;height:24px;flex-shrink:0}.NgxEditor__Color[_ngcontent-%COMP%]:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color);outline-offset:1px}.NgxEditor__Color--Active[_ngcontent-%COMP%]:after{content:\"\\2714\";font-size:90%}.NgxEditor__MenuItem--Button[_ngcontent-%COMP%]{margin-top:5px}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorPickerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-color-picker',
      template: "<button\n  type=\"button\"\n  class=\"NgxEditor__MenuItem--Icon\"\n  [class.NgxEditor__MenuItem--Active]=\"isActive || showPopup\"\n  [class.NgxEditor--Disabled]=\"!canExecute\"\n  [disabled]=\"!canExecute\"\n  [innerHTML]=\"icon | sanitizeHtml\"\n  (mousedown)=\"onTogglePopupMouseClick($event)\"\n  (keydown.enter)=\"onTogglePopupKeydown()\"\n  (keydown.space)=\"onTogglePopupKeydown()\"\n  [title]=\"title | async\"\n  [ariaLabel]=\"title | async\"\n></button>\n\n<div *ngIf=\"showPopup\" class=\"NgxEditor__Popup\">\n  <div *ngFor=\"let colorGroup of presets; trackBy: trackByIndex\" class=\"NgxEditor__ColorContainer\">\n    <button\n      class=\"NgxEditor__Color\"\n      *ngFor=\"let color of colorGroup; trackBy: trackByIndex\"\n      [ngStyle]=\"{ backgroundColor: color, color: getContrastYIQ(color) }\"\n      [title]=\"color\"\n      (mousedown)=\"onColorSelectMouseClick($event, color)\"\n      (keydown.enter)=\"onColorSelectKeydown(color)\"\n      (keydown.space)=\"onColorSelectKeydown(color)\"\n      [ngClass]=\"{ 'NgxEditor__Color--Active': activeColors.includes(color) }\"\n    ></button>\n  </div>\n\n  <button\n    class=\"NgxEditor__MenuItem--Button\"\n    (mousedown)=\"onRemoveMouseClick($event)\"\n    (keydown.enter)=\"onRemoveKeydown()\"\n    (keydown.space)=\"onRemoveKeydown()\"\n    [disabled]=\"!isActive\"\n  >\n    {{ getLabel('remove') | async }}\n  </button>\n</div>\n",
      styles: ["@charset \"UTF-8\";.NgxEditor__Popup{width:230px}.NgxEditor__ColorContainer{display:flex;justify-content:space-between}.NgxEditor__ColorContainer+.NgxEditor__ColorContainer{margin-top:5px}.NgxEditor__Color{border:none;outline:none;border-radius:6px;width:24px;height:24px;flex-shrink:0}.NgxEditor__Color:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color);outline-offset:1px}.NgxEditor__Color--Active:after{content:\"\\2714\";font-size:90%}.NgxEditor__MenuItem--Button{margin-top:5px}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: MenuService
  }, {
    type: NgxEditorService
  }], {
    presets: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onDocumentClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mousedown', ['$event']]
    }]
  });
})();
const DEFAULT_TOOLBAR = [['bold', 'italic'], ['code', 'blockquote'], ['underline', 'strike'], ['ordered_list', 'bullet_list'], [{
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
}], ['link', 'image'], ['text_color', 'background_color'], ['align_left', 'align_center', 'align_right', 'align_justify'], ['format_clear']];
const TOOLBAR_MINIMAL = [['bold', 'italic'], [{
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
}], ['link', 'image'], ['text_color', 'background_color']];
const TOOLBAR_FULL = [['bold', 'italic'], ['code', 'blockquote'], ['underline', 'strike'], ['ordered_list', 'bullet_list'], [{
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
}], ['link', 'image'], ['text_color', 'background_color'], ['align_left', 'align_center', 'align_right', 'align_justify'], ['horizontal_rule', 'format_clear', 'indent', 'outdent'], ['superscript', 'subscript'], ['undo', 'redo']];
const DEFAULT_COLOR_PRESETS = ['#b60205', '#d93f0b', '#fbca04', '#0e8a16', '#006b75', '#1d76db', '#0052cc', '#5319e7', '#e99695', '#f9d0c4', '#fef2c0', '#c2e0c6', '#bfdadc', '#c5def5', '#bfd4f2', '#d4c5f9'];
class MenuComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.toolbar = TOOLBAR_MINIMAL;
    this.colorPresets = DEFAULT_COLOR_PRESETS;
    this.disabled = false;
    this.customMenuRef = null;
    this.dropdownPlacement = 'bottom';
    this.toggleCommands = ['bold', 'italic', 'underline', 'strike', 'code', 'blockquote', 'ordered_list', 'bullet_list', 'align_left', 'align_center', 'align_right', 'align_justify', 'superscript', 'subscript'];
    this.insertCommands = ['horizontal_rule', 'format_clear', 'indent', 'outdent', 'undo', 'redo'];
    this.iconContainerClass = ['NgxEditor__MenuItem', 'NgxEditor__MenuItem--IconContainer'];
    this.dropdownContainerClass = ['NgxEditor__Dropdown'];
    this.seperatorClass = ['NgxEditor__Seperator'];
  }
  get presets() {
    const col = 8;
    const colors = [];
    this.colorPresets.forEach((color, index) => {
      const row = Math.floor(index / col);
      if (!colors[row]) {
        colors.push([]);
      }
      colors[row].push(color);
    });
    return colors;
  }
  trackByIndex(index) {
    return index;
  }
  isDropDown(item) {
    if (item?.heading) {
      return true;
    }
    return false;
  }
  getDropdownItems(item) {
    return item;
  }
  isLinkItem(item) {
    if (item === 'link') {
      return true;
    }
    // NOTE: it is not sufficient to check for a `link` property
    // as String.prototype.link is a valid (although deprecated) method
    return typeof item === 'object' && typeof item?.link === 'object';
  }
  isLinkWithOptions(item) {
    // NOTE: it is not sufficient to check for a `link` property
    // as String.prototype.link is a valid (although deprecated) method
    return typeof item === 'object' && typeof item?.link === 'object';
  }
  getLinkOptions(item) {
    return item?.link;
  }
  ngOnInit() {
    if (!this.editor) {
      throw new ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.NgxEditorError('Required editor instance to initialize menu component');
    }
    this.menuService.editor = this.editor;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MenuService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["ngx-editor-menu"]],
    inputs: {
      toolbar: "toolbar",
      colorPresets: "colorPresets",
      disabled: "disabled",
      editor: "editor",
      customMenuRef: "customMenuRef",
      dropdownPlacement: "dropdownPlacement"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MenuService])],
    decls: 3,
    vars: 7,
    consts: [[1, "NgxEditor__MenuBar", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "toolbarItem", "class", 4, "ngIf"], [3, "class", 4, "ngIf"], ["type", "text_color", 3, "class", "presets", 4, "ngIf"], ["type", "background_color", 3, "class", "presets", 4, "ngIf"], [3, "toolbarItem"], [3, "options"], [3, "class", "group", "items", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "group", "items"], ["type", "text_color", 3, "presets"], ["type", "background_color", 3, "presets"], [3, "ngTemplateOutlet"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 2, 2, "ng-container", 1)(2, MenuComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c7, ctx.disabled, ctx.dropdownPlacement === "top"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.toolbar)("ngForTrackBy", ctx.trackByIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customMenuRef);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, ToggleCommandComponent, InsertCommandComponent, LinkComponent, DropdownComponent, ImageComponent, ColorPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-editor-menu',
      providers: [MenuService],
      template: "<div\n  class=\"NgxEditor__MenuBar\"\n  [ngClass]=\"{ 'NgxEditor--Disabled': disabled, 'NgxEditor__MenuBar--Reverse': dropdownPlacement === 'top' }\"\n>\n  <ng-container *ngFor=\"let toolbarItem of toolbar; let lastToolbarItem = last; trackBy: trackByIndex\">\n    <ng-container *ngFor=\"let item of toolbarItem; let lastItem = last; trackBy: trackByIndex\">\n      <!-- toggle icons -->\n      <ngx-toggle-command [toolbarItem]=\"item\" [class]=\"iconContainerClass\" *ngIf=\"toggleCommands.includes(item)\">\n      </ngx-toggle-command>\n\n      <ngx-insert-command [toolbarItem]=\"item\" [class]=\"iconContainerClass\" *ngIf=\"insertCommands.includes(item)\">\n      </ngx-insert-command>\n\n      <!-- link -->\n      <ng-container *ngIf=\"isLinkItem(item)\">\n        <ngx-link [class]=\"iconContainerClass\" [options]=\"getLinkOptions(item)\"></ngx-link>\n      </ng-container>\n\n      <!-- image -->\n      <ngx-image [class]=\"iconContainerClass\" *ngIf=\"item === 'image'\"> </ngx-image>\n\n      <!-- dropdown -->\n      <ng-container *ngIf=\"isDropDown(item)\">\n        <ngx-dropdown\n          *ngFor=\"let dropdownItem of getDropdownItems(item) | keyvalue; trackBy: trackByIndex\"\n          [class]=\"dropdownContainerClass\"\n          [group]=\"dropdownItem.key\"\n          [items]=\"dropdownItem.value\"\n        >\n        </ngx-dropdown>\n      </ng-container>\n\n      <!-- text color picker -->\n      <ngx-color-picker\n        [class]=\"iconContainerClass\"\n        *ngIf=\"item === 'text_color'\"\n        type=\"text_color\"\n        [presets]=\"presets\"\n      >\n      </ngx-color-picker>\n      <!-- background color picker -->\n      <ngx-color-picker\n        [class]=\"iconContainerClass\"\n        *ngIf=\"item === 'background_color'\"\n        type=\"background_color\"\n        [presets]=\"presets\"\n      >\n      </ngx-color-picker>\n\n      <!-- seperator -->\n      <div [class]=\"seperatorClass\" *ngIf=\"lastItem && !lastToolbarItem\"></div>\n    </ng-container>\n  </ng-container>\n\n  <!-- custom menu -->\n  <ng-container *ngIf=\"customMenuRef\">\n    <ng-container [ngTemplateOutlet]=\"customMenuRef\"></ng-container>\n  </ng-container>\n</div>\n"
    }]
  }], () => [{
    type: MenuService
  }], {
    toolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    colorPresets: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    editor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customMenuRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dropdownPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class BubbleComponent {
  constructor(sanitizeHTML, ngxeService) {
    this.sanitizeHTML = sanitizeHTML;
    this.ngxeService = ngxeService;
    this.execulableItems = [];
    this.activeItems = [];
    this.toolbar = [['bold', 'italic', 'underline', 'strike'], ['ordered_list', 'bullet_list', 'blockquote', 'code'], ['align_left', 'align_center', 'align_right', 'align_justify']];
    this.toggleCommands = ['bold', 'italic', 'underline', 'strike', 'ordered_list', 'bullet_list', 'blockquote', 'code', 'align_left', 'align_center', 'align_right', 'align_justify'];
  }
  get view() {
    return this.editor.view;
  }
  getIcon(name) {
    return this.sanitizeHTML.transform(this.ngxeService.getIcon(name));
  }
  getTitle(name) {
    return this.ngxeService.locals.get(name);
  }
  trackByIndex(index) {
    return index;
  }
  onClick(e, commandName) {
    e.preventDefault();
    e.stopPropagation();
    if (e.button !== 0) {
      return;
    }
    const {
      state,
      dispatch
    } = this.view;
    const command = ToggleCommands[commandName];
    command.toggle()(state, dispatch);
  }
  update(view) {
    this.activeItems = [];
    this.execulableItems = [];
    const {
      state
    } = view;
    this.toggleCommands.forEach(toolbarItem => {
      const command = ToggleCommands[toolbarItem];
      const isActive = command.isActive(state);
      if (isActive) {
        this.activeItems.push(toolbarItem);
      }
      const canExecute = command.canExecute(state);
      if (canExecute) {
        this.execulableItems.push(toolbarItem);
      }
    });
  }
  ngOnInit() {
    this.updateSubscription = this.editor.update.subscribe(view => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function BubbleComponent_Factory(t) {
    return new (t || BubbleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](SanitizeHtmlPipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgxEditorService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BubbleComponent,
    selectors: [["ngx-bubble"]],
    inputs: {
      editor: "editor"
    },
    decls: 1,
    vars: 2,
    consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "class", "NgxBubbleMenu__Icon", 3, "ngClass", "title", "innerHTML", "mousedown", 4, "ngIf"], ["class", "NgxBubbleMenu__Seperator", 4, "ngIf"], ["type", "button", 1, "NgxBubbleMenu__Icon", 3, "mousedown", "ngClass", "title", "innerHTML"], [1, "NgxBubbleMenu__Seperator"]],
    template: function BubbleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BubbleComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.toolbar)("ngForTrackBy", ctx.trackByIndex);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}[_nghost-%COMP%]{display:flex;flex-wrap:wrap;background-color:var(--ngx-editor-bubble-bg-color);color:var(--ngx-editor-bubble-text-color);padding:5px;border-radius:4px}.NgxBubbleMenu__Icon[_ngcontent-%COMP%]{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;border-radius:var(--ngx-editor-menu-item-border-radius);display:flex;align-items:center;justify-content:center;color:#fff}.NgxBubbleMenu__Icon[_ngcontent-%COMP%]:hover{background-color:var(--ngx-editor-bubble-item-hover-color)}.NgxBubbleMenu__Icon[_ngcontent-%COMP%] + .NgxBubbleMenu__Icon[_ngcontent-%COMP%]{margin-left:5px}.NgxBubbleMenu__Icon.NgxBubbleMenu__Icon--Active[_ngcontent-%COMP%]{background-color:var(--ngx-editor-bubble-text-color);color:var(--ngx-editor-bubble-bg-color)}.NgxBubbleMenu__Seperator[_ngcontent-%COMP%]{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BubbleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-bubble',
      template: "<ng-container *ngFor=\"let toolbarItem of toolbar; let lastToolbarItem = last; trackBy: trackByIndex\">\n  <ng-container *ngFor=\"let item of toolbarItem; let lastItem = last; trackBy: trackByIndex\">\n    <button\n      type=\"button\"\n      class=\"NgxBubbleMenu__Icon\"\n      *ngIf=\"toggleCommands.includes(item)\"\n      [ngClass]=\"{\n        'NgxBubbleMenu__Icon--Active': this.activeItems.includes(item),\n        'NgxEditor--Disabled': !this.execulableItems.includes(item)\n      }\"\n      (mousedown)=\"onClick($event, item)\"\n      [title]=\"getTitle(item) | async\"\n      [innerHTML]=\"getIcon(item)\"\n    ></button>\n    <div class=\"NgxBubbleMenu__Seperator\" *ngIf=\"lastItem && !lastToolbarItem\"></div>\n  </ng-container>\n</ng-container>\n",
      styles: ["*,*:before,*:after{box-sizing:border-box}:host{display:flex;flex-wrap:wrap;background-color:var(--ngx-editor-bubble-bg-color);color:var(--ngx-editor-bubble-text-color);padding:5px;border-radius:4px}.NgxBubbleMenu__Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;border-radius:var(--ngx-editor-menu-item-border-radius);display:flex;align-items:center;justify-content:center;color:#fff}.NgxBubbleMenu__Icon:hover{background-color:var(--ngx-editor-bubble-item-hover-color)}.NgxBubbleMenu__Icon+.NgxBubbleMenu__Icon{margin-left:5px}.NgxBubbleMenu__Icon.NgxBubbleMenu__Icon--Active{background-color:var(--ngx-editor-bubble-text-color);color:var(--ngx-editor-bubble-bg-color)}.NgxBubbleMenu__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}\n"]
    }]
  }], () => [{
    type: SanitizeHtmlPipe
  }, {
    type: NgxEditorService
  }], {
    editor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class FloatingMenuComponent {
  constructor(el) {
    this.el = el;
    this.autoPlace = false;
    this.posLeft = 0;
    this.posTop = 0;
    this.showMenu = false;
    this.dragging = false;
  }
  get display() {
    return {
      visibility: this.showMenu ? 'visible' : 'hidden',
      opacity: this.showMenu ? '1' : '0',
      top: `${this.posTop}px`,
      left: `${this.posLeft}px`
    };
  }
  get view() {
    return this.editor.view;
  }
  onMouseDown(e) {
    const target = e.target;
    if (this.el.nativeElement.contains(target) && target.nodeName !== 'INPUT') {
      e.preventDefault();
      return;
    }
    this.dragging = true;
  }
  onKeyDown(e) {
    const target = e.target;
    if (target.nodeName === 'INPUT') {
      return;
    }
    this.dragging = true;
    this.hide();
  }
  onMouseUp(e) {
    const target = e.target;
    if (this.el.nativeElement.contains(target) || target.nodeName === 'INPUT') {
      e.preventDefault();
      return;
    }
    this.dragging = false;
    this.useUpdate();
  }
  onKeyUp(e) {
    const target = e.target;
    if (target.nodeName === 'INPUT') {
      return;
    }
    this.dragging = false;
    this.useUpdate();
  }
  useUpdate() {
    if (!this.view) {
      return;
    }
    this.update(this.view);
  }
  hide() {
    this.showMenu = false;
  }
  show() {
    this.showMenu = true;
  }
  calculateBubblePosition(view) {
    var _this = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        state: {
          selection
        }
      } = view;
      const {
        from,
        to
      } = selection;
      const start = view.coordsAtPos(from);
      const end = view.coordsAtPos(to);
      const selectionElement = {
        getBoundingClientRect() {
          if (selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection) {
            const node = view.nodeDOM(from);
            return node.getBoundingClientRect();
          }
          const {
            top,
            left
          } = start;
          const {
            bottom,
            right
          } = end;
          return {
            x: left,
            y: top,
            top,
            bottom,
            left,
            right,
            width: right - left,
            height: bottom - top
          };
        }
      };
      // the floating bubble itself
      const bubbleEl = _this.el.nativeElement;
      const {
        x: left,
        y: top
      } = yield (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_19__.computePosition)(selectionElement, bubbleEl, {
        placement: 'top',
        middleware: [(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_19__.offset)(5), _this.autoPlace && (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_19__.autoPlacement)({
          boundary: view.dom,
          padding: 5,
          allowedPlacements: ['top', 'bottom']
        }), {
          // prevent overflow on right and left side
          // since only top and bottom placements are allowed
          // autoplacement can't handle overflows on the right and left
          name: 'overflowMiddleware',
          fn(middlewareArgs) {
            return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const overflow = yield (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_19__.detectOverflow)(middlewareArgs, {
                boundary: view.dom,
                padding: 5
              });
              // overflows left
              if (overflow.left > 0) {
                return {
                  x: middlewareArgs.x + overflow.left
                };
              }
              // overflows right
              if (overflow.right > 0) {
                return {
                  x: middlewareArgs.x - overflow.right
                };
              }
              return {};
            })();
          }
        }].filter(Boolean)
      });
      return {
        left,
        top
      };
    })();
  }
  canShowMenu(view) {
    const {
      state
    } = view;
    const {
      selection
    } = state;
    const {
      empty
    } = selection;
    if (selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.NodeSelection) {
      if (selection.node.type.name === 'image') {
        return false;
      }
    }
    const hasFocus = this.view.hasFocus();
    if (!hasFocus || empty || this.dragging) {
      this.hide();
      return false;
    }
    return true;
  }
  update(view) {
    const canShowMenu = this.canShowMenu(view);
    if (!canShowMenu) {
      this.hide();
      return;
    }
    this.calculateBubblePosition(this.view).then(({
      top,
      left
    }) => {
      if (!this.canShowMenu) {
        this.hide();
        return;
      }
      this.posLeft = left;
      this.posTop = top;
      this.show();
    });
  }
  ngOnInit() {
    if (!this.editor) {
      throw new ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.NgxEditorError('Required editor instance to initialize floating menu component');
    }
    this.updateSubscription = this.editor.update.subscribe(view => {
      this.update(view);
    });
    this.resizeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.throttleTime)(500, rxjs__WEBPACK_IMPORTED_MODULE_22__.asyncScheduler, {
      leading: true,
      trailing: true
    })).subscribe(() => {
      this.useUpdate();
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }
  static #_ = this.ɵfac = function FloatingMenuComponent_Factory(t) {
    return new (t || FloatingMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FloatingMenuComponent,
    selectors: [["ngx-editor-floating-menu"]],
    hostVars: 2,
    hostBindings: function FloatingMenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function FloatingMenuComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("keydown", function FloatingMenuComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("mouseup", function FloatingMenuComponent_mouseup_HostBindingHandler($event) {
          return ctx.onMouseUp($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("keyup", function FloatingMenuComponent_keyup_HostBindingHandler($event) {
          return ctx.onKeyUp($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.display);
      }
    },
    inputs: {
      editor: "editor",
      autoPlace: "autoPlace"
    },
    ngContentSelectors: _c3,
    decls: 4,
    vars: 1,
    consts: [["ref", ""], [4, "ngIf"], [3, "editor"]],
    template: function FloatingMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FloatingMenuComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        const ref_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ref_r2.children.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, BubbleComponent],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}[_nghost-%COMP%]{position:absolute;z-index:20;margin-bottom:5px;visibility:hidden;opacity:0}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FloatingMenuComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ngx-editor-floating-menu',
      template: "<div #ref>\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf=\"ref.children.length === 0\">\n  <ngx-bubble [editor]=\"editor\"></ngx-bubble>\n</ng-container>\n",
      styles: ["*,*:before,*:after{box-sizing:border-box}:host{position:absolute;z-index:20;margin-bottom:5px;visibility:hidden;opacity:0}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }], {
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['style']
    }],
    editor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    autoPlace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mousedown', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:keydown', ['$event']]
    }],
    onMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mouseup', ['$event']]
    }],
    onKeyUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:keyup', ['$event']]
    }]
  });
})();
class MenuModule {
  static #_ = this.ɵfac = function MenuModule_Factory(t) {
    return new (t || MenuModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MenuModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [SanitizeHtmlPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule],
      declarations: [
      // pipes
      SanitizeHtmlPipe,
      // components
      MenuComponent, ToggleCommandComponent, InsertCommandComponent, LinkComponent, DropdownComponent, ImageComponent, ColorPickerComponent, FloatingMenuComponent, BubbleComponent],
      providers: [SanitizeHtmlPipe],
      exports: [MenuComponent, FloatingMenuComponent]
    }]
  }], null, null);
})();
const NGX_EDITOR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('NgxEditorConfig');
const defaultConfig = {
  locals: defaults,
  icons
};
class NgxEditorModule {
  static forRoot(config = defaultConfig) {
    return {
      ngModule: NgxEditorModule,
      providers: [{
        provide: NGX_EDITOR_CONFIG_TOKEN,
        useValue: config
      }, {
        provide: NgxEditorServiceConfig,
        useFactory: provideMyServiceOptions,
        deps: [NGX_EDITOR_CONFIG_TOKEN]
      }]
    };
  }
  static forChild(config = defaultConfig) {
    return {
      ngModule: NgxEditorModule,
      providers: [{
        provide: NGX_EDITOR_CONFIG_TOKEN,
        useValue: config
      }, {
        provide: NgxEditorServiceConfig,
        useFactory: provideMyServiceOptions,
        deps: [NGX_EDITOR_CONFIG_TOKEN]
      }, NgxEditorService]
    };
  }
  static #_ = this.ɵfac = function NgxEditorModule_Factory(t) {
    return new (t || NgxEditorModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NgxEditorModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, MenuModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, MenuModule],
      providers: [],
      declarations: [NgxEditorComponent, ImageViewComponent],
      exports: [NgxEditorComponent, MenuComponent, FloatingMenuComponent]
    }]
  }], null, null);
})();
const isEmptyInputValue = value => {
  // we don't check for string here so it also works with arrays
  return value === null || value.length === 0;
};
const hasValidLength = value => {
  // non-strict comparison is intentional, to check for both `null` and `undefined` values
  return value !== null && typeof value.length === 'number';
};
const isDocEmpty = doc => {
  if (!doc) {
    return true;
  }
  const {
    childCount,
    firstChild
  } = doc;
  return Boolean(childCount === 1 && firstChild?.isTextblock && firstChild.content.size === 0);
};
// @dynamic
class Validators {
  static required(userSchema) {
    return control => {
      const schema$1 = userSchema || ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema;
      const doc = parseContent(control.value, schema$1);
      const isEmpty = isDocEmpty(doc);
      if (!isEmpty) {
        return null;
      }
      return {
        required: true
      };
    };
  }
  static maxLength(maxLength, userSchema) {
    return control => {
      const schema$1 = userSchema || ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema;
      const doc = parseContent(control.value, schema$1);
      const value = doc.textContent;
      if (hasValidLength(value) && value.length > maxLength) {
        return {
          maxlength: {
            requiredLength: maxLength,
            actualLength: value.length
          }
        };
      }
      return null;
    };
  }
  static minLength(minLength, userSchema) {
    return control => {
      const schema$1 = userSchema || ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema;
      const doc = parseContent(control.value, schema$1);
      const value = doc.textContent;
      if (isEmptyInputValue(value) || !hasValidLength(value)) {
        // don't validate empty values to allow optional controls
        // don't validate values without `length` property
        return null;
      }
      if (value.length < minLength) {
        return {
          minlength: {
            requiredLength: minLength,
            actualLength: value.length
          }
        };
      }
      return null;
    };
  }
}
const execMark = (name, toggle = false) => {
  return (state, dispatch) => {
    const command = new Mark(name);
    if (!toggle) {
      return command.apply()(state, dispatch);
    }
    return command.toggle()(state, dispatch);
  };
};
class EditorCommands {
  constructor(view) {
    this.applyTrx = tr => {
      this.state = this.state.apply(tr ?? this.tr);
      this.tr = this.state.tr;
      this.tr.setMeta('APPLIED_TRX', true);
    };
    this.dispatch = tr => {
      this.applyTrx(tr);
    };
    if (!view) {
      throw new ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.NgxEditorError('Required view to initialize commands.');
    }
    this.view = view;
    this.state = view.state;
    this.tr = this.view.state.tr;
  }
  exec() {
    // No changes applied
    if (!this.tr.getMeta('APPLIED_TRX')) {
      return false;
    }
    const forceEmit = !this.view.state.doc.eq(this.state.doc);
    this.view.updateState(this.state);
    const tr = this.tr.setMeta('FORCE_EMIT', forceEmit);
    this.view.dispatch(tr);
    return true;
  }
  focus(position = 'end') {
    const selection = position === 'start' ? prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Selection.atStart(this.state.doc) : prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Selection.atEnd(this.state.doc);
    this.tr.setSelection(selection);
    this.applyTrx();
    this.view.focus();
    return this;
  }
  scrollIntoView() {
    this.tr.scrollIntoView();
    this.applyTrx();
    return this;
  }
  insertText(text) {
    this.tr.insertText(text);
    this.applyTrx();
    return this;
  }
  insertNewLine() {
    const newLineCommands = [prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.newlineInCode, prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.createParagraphNear, prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.liftEmptyBlock, prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.splitBlock];
    (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.chainCommands)(...newLineCommands)(this.state, this.dispatch);
    return this;
  }
  applyMark(name) {
    execMark(name, false)(this.state, this.dispatch);
    return this;
  }
  toggleMark(name) {
    execMark(name, true)(this.state, this.dispatch);
    return this;
  }
  bold() {
    execMark('strong')(this.state, this.dispatch);
    return this;
  }
  toggleBold() {
    execMark('strong', true)(this.state, this.dispatch);
    return this;
  }
  italics() {
    execMark('em')(this.state, this.dispatch);
    return this;
  }
  toggleItalics() {
    execMark('em', true)(this.state, this.dispatch);
    return this;
  }
  underline() {
    execMark('u')(this.state, this.dispatch);
    return this;
  }
  toggleUnderline() {
    execMark('u', true)(this.state, this.dispatch);
    return this;
  }
  strike() {
    execMark('s')(this.state, this.dispatch);
    return this;
  }
  toggleStrike() {
    execMark('s', true)(this.state, this.dispatch);
    return this;
  }
  code() {
    execMark('code')(this.state, this.dispatch);
    return this;
  }
  toggleCode() {
    execMark('code', true)(this.state, this.dispatch);
    return this;
  }
  superscript() {
    execMark('sup')(this.state, this.dispatch);
    return this;
  }
  subscript() {
    execMark('sub')(this.state, this.dispatch);
    return this;
  }
  toggleOrderedList() {
    const command = new ListItem(false);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  toggleBulletList() {
    const command = new ListItem(true);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  toggleHeading(level) {
    const command = new Heading(level);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  insertLink(text, attrs) {
    const command = new Link$1();
    command.insert(text, attrs)(this.state, this.dispatch);
    return this;
  }
  updateLink(attrs) {
    const command = new Link$1();
    command.update(attrs)(this.state, this.dispatch);
    return this;
  }
  insertImage(src, attrs = {}) {
    const command = new Image$1();
    command.insert(src, attrs)(this.state, this.dispatch);
    return this;
  }
  textColor(color) {
    const command = new TextColor$1('text_color');
    command.apply({
      color
    })(this.state, this.dispatch);
    return this;
  }
  backgroundColor(color) {
    const command = new TextColor$1('text_background_color');
    command.apply({
      backgroundColor: color
    })(this.state, this.dispatch);
    return this;
  }
  removeTextColor() {
    const command = new TextColor$1('text_color');
    command.remove()(this.state, this.dispatch);
    return this;
  }
  removeBackgroundColor() {
    const command = new TextColor$1('text_background_color');
    command.remove()(this.state, this.dispatch);
    return this;
  }
  align(p) {
    const command = new TextAlign(p);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  insertHTML(html) {
    const {
      selection,
      schema,
      tr
    } = this.state;
    const {
      from,
      to
    } = selection;
    const element = document.createElement('div');
    element.innerHTML = isString(html) ? html.trim() : html;
    const slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_6__.DOMParser.fromSchema(schema).parseSlice(element);
    const transaction = tr.replaceRange(from, to, slice);
    this.applyTrx(transaction);
    return this;
  }
  indent() {
    const command = new Indent('increase');
    command.insert()(this.state, this.dispatch);
    return this;
  }
  outdent() {
    const command = new Indent('decrease');
    command.insert()(this.state, this.dispatch);
    return this;
  }
}
const isMacOs = typeof navigator !== 'undefined' ? /Mac/.test(navigator.platform) : false;
// Input rules ref: https://github.com/ProseMirror/prosemirror-example-setup/
// : (NodeType) → InputRule
// Given a blockquote node type, returns an input rule that turns `"> "`
// at the start of a textblock into a blockquote.
const blockQuoteRule = nodeType => {
  return (0,prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.wrappingInputRule)(/^\s*>\s$/, nodeType);
};
// : (NodeType) → InputRule
// Given a list node type, returns an input rule that turns a number
// followed by a dot at the start of a textblock into an ordered list.
const orderedListRule = nodeType => {
  return (0,prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.wrappingInputRule)(/^(?:\d+)\.\s$/, nodeType, match => ({
    order: Number(match[1])
  }), (match, node) => node.childCount + node.attrs['order'] === Number(match[1]));
};
// : (NodeType) → InputRule
// Given a list node type, returns an input rule that turns a bullet
// (dash, plush, or asterisk) at the start of a textblock into a
// bullet list.
const bulletListRule = nodeType => {
  return (0,prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.wrappingInputRule)(/^\s*(?:[-+*])\s$/, nodeType);
};
// : (NodeType) → InputRule
// Given a code block node type, returns an input rule that turns a
// textblock starting with three backticks into a code block.
const codeBlockRule = nodeType => {
  return (0,prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.textblockTypeInputRule)(/^```$/, nodeType);
};
// : (NodeType, number) → InputRule
// Given a node type and a maximum level, creates an input rule that
// turns up to that number of `#` characters followed by a space at
// the start of a textblock into a heading whose level corresponds to
// the number of `#` signs.
const headingRule = (nodeType, maxLevel) => {
  return (0,prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.textblockTypeInputRule)(new RegExp(`^(#{1,${maxLevel}})\\s$`), nodeType, match => ({
    level: match[1].length
  }));
};
// : (MarkType) → InputRule
// Wraps matching text with bold mark
const boldRule = markType => {
  // eslint-disable-next-line prefer-named-capture-group
  return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.markInputRule)(/(?:^|\s)(?:(\*\*|__)(?:([^*_]+))(\*\*|__))$/, markType);
};
// : (MarkType) → InputRule
// Wraps matching text with em mark
const emRule = markType => {
  // eslint-disable-next-line prefer-named-capture-group
  return (0,ngx_editor_helpers__WEBPACK_IMPORTED_MODULE_13__.markInputRule)(/(?:^|\s)(?:(\*|_)(?:([^*_]+))(\*|_))$/, markType);
};
// : (Schema) → Plugin
// A set of input rules for creating the basic block quotes, lists,
// code blocks, and heading.
const buildInputRules = schema => {
  const rules = prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.smartQuotes.concat(prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.ellipsis, prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.emDash);
  rules.push(boldRule(schema.marks['strong']));
  rules.push(emRule(schema.marks['em']));
  rules.push(blockQuoteRule(schema.nodes['blockquote']));
  rules.push(orderedListRule(schema.nodes['ordered_list']));
  rules.push(bulletListRule(schema.nodes['bullet_list']));
  rules.push(codeBlockRule(schema.nodes['code_block']));
  rules.push(headingRule(schema.nodes['heading'], 6));
  return (0,prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_23__.inputRules)({
    rules
  });
};
const getKeyboardShortcuts = (schema, options) => {
  const historyKeyMap = {};
  historyKeyMap['Mod-z'] = prosemirror_history__WEBPACK_IMPORTED_MODULE_15__.undo;
  if (isMacOs) {
    historyKeyMap['Shift-Mod-z'] = prosemirror_history__WEBPACK_IMPORTED_MODULE_15__.redo;
  } else {
    historyKeyMap['Mod-y'] = prosemirror_history__WEBPACK_IMPORTED_MODULE_15__.redo;
  }
  const plugins = [(0,prosemirror_keymap__WEBPACK_IMPORTED_MODULE_24__.keymap)({
    'Mod-b': (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.toggleMark)(schema.marks['strong']),
    'Mod-i': (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.toggleMark)(schema.marks['em']),
    'Mod-u': (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.toggleMark)(schema.marks['u']),
    'Mod-`': (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.toggleMark)(schema.marks['code'])
  }), (0,prosemirror_keymap__WEBPACK_IMPORTED_MODULE_24__.keymap)({
    'Enter': (0,prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__.splitListItem)(schema.nodes['list_item']),
    'Shift-Enter': (0,prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.chainCommands)(prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.exitCode, (state, dispatch) => {
      const {
        tr
      } = state;
      const br = schema.nodes['hard_break'];
      dispatch(tr.replaceSelectionWith(br.create()).scrollIntoView());
      return true;
    }),
    'Mod-[': (0,prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__.liftListItem)(schema.nodes['list_item']),
    'Mod-]': (0,prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__.sinkListItem)(schema.nodes['list_item']),
    'Tab': (0,prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_14__.sinkListItem)(schema.nodes['list_item'])
  }), (0,prosemirror_keymap__WEBPACK_IMPORTED_MODULE_24__.keymap)(prosemirror_commands__WEBPACK_IMPORTED_MODULE_12__.baseKeymap)];
  if (options.history) {
    plugins.push((0,prosemirror_keymap__WEBPACK_IMPORTED_MODULE_24__.keymap)(historyKeyMap));
  }
  return plugins;
};
const getDefaultPlugins = (schema, options) => {
  const plugins = [];
  if (options.keyboardShortcuts) {
    plugins.push(...getKeyboardShortcuts(schema, {
      history: options.history
    }));
  }
  if (options.history) {
    plugins.push((0,prosemirror_history__WEBPACK_IMPORTED_MODULE_15__.history)());
  }
  if (options.inputRules) {
    plugins.push(buildInputRules(schema));
  }
  return plugins;
};
const defaultFeatures = {
  linkOnPaste: true,
  resizeImage: true
};
const DEFAULT_OPTIONS = {
  content: null,
  history: true,
  keyboardShortcuts: true,
  inputRules: true,
  schema: ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema,
  plugins: [],
  nodeViews: {},
  attributes: {},
  features: defaultFeatures,
  handleScrollToSelection: null,
  linkValidationPattern: '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/??([^#\n\r]*)?#?([^\n\r]*)|(mailto:.*[@].*)'
};
class Editor {
  constructor(options = DEFAULT_OPTIONS) {
    this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.updateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options
    };
    this.createEditor();
  }
  get valueChanges() {
    return this.valueChangesSubject.asObservable();
  }
  get update() {
    return this.updateSubject.asObservable();
  }
  get schema() {
    return this.options.schema || ngx_editor_schema__WEBPACK_IMPORTED_MODULE_1__.schema;
  }
  get linkValidationPattern() {
    return this.options.linkValidationPattern;
  }
  get commands() {
    return new EditorCommands(this.view);
  }
  get features() {
    return {
      ...defaultFeatures,
      ...this.options.features
    };
  }
  handleTransactions(tr) {
    const state = this.view.state.apply(tr);
    this.view.updateState(state);
    this.updateSubject.next(this.view);
    if (!tr.docChanged && !tr.getMeta('FORCE_EMIT')) {
      return;
    }
    const json = state.doc.toJSON();
    this.valueChangesSubject.next(json);
  }
  createEditor() {
    const {
      options,
      schema
    } = this;
    const {
      content = null,
      nodeViews
    } = options;
    const {
      history = true,
      keyboardShortcuts = true,
      inputRules = true
    } = options;
    const doc = parseContent(content, schema, options.parseOptions);
    const plugins = options.plugins ?? [];
    const attributes = options.attributes ?? {};
    const defaultPlugins = getDefaultPlugins(schema, {
      history,
      keyboardShortcuts,
      inputRules
    });
    this.view = new prosemirror_view__WEBPACK_IMPORTED_MODULE_4__.EditorView(null, {
      state: prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
        doc,
        schema,
        plugins: [...defaultPlugins, ...plugins]
      }),
      nodeViews,
      dispatchTransaction: this.handleTransactions.bind(this),
      attributes,
      handleScrollToSelection: options.handleScrollToSelection
    });
  }
  setContent(content) {
    if ((0,ngx_editor_utils__WEBPACK_IMPORTED_MODULE_8__.isNil)(content)) {
      return;
    }
    const {
      state
    } = this.view;
    const {
      tr,
      doc
    } = state;
    const newDoc = parseContent(content, this.schema, this.options.parseOptions);
    tr.replaceWith(0, state.doc.content.size, newDoc);
    // don't emit if both content is same
    if (doc.eq(tr.doc)) {
      return;
    }
    if (!tr.docChanged) {
      return;
    }
    this.view.dispatch(tr);
  }
  registerPlugin(plugin) {
    const {
      state
    } = this.view;
    const plugins = [...state.plugins, plugin];
    const newState = state.reconfigure({
      plugins
    });
    this.view.updateState(newState);
  }
  destroy() {
    this.view.destroy();
  }
}

/*
 * Public API Surface of ngx-editor
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4460:
/*!***********************************************!*\
  !*** ./node_modules/orderedmap/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
  this.content = content;
}
OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function (key) {
    for (var i = 0; i < this.content.length; i += 2) if (this.content[i] === key) return i;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function (key) {
    var found = this.find(key);
    return found == -1 ? undefined : this.content[found + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function (key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key),
      content = self.content.slice();
    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }
    return new OrderedMap(content);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function (key) {
    var found = this.find(key);
    if (found == -1) return this;
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function (key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function (key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function (place, key, value) {
    var without = this.remove(key),
      content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function (f) {
    for (var i = 0; i < this.content.length; i += 2) f(this.content[i], this.content[i + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function (map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(map.content.concat(this.subtract(map).content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function (map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(this.subtract(map).content.concat(map.content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function (map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2) result = result.remove(map.content[i]);
    return result;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function () {
    var result = {};
    this.forEach(function (key, value) {
      result[key] = value;
    });
    return result;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};

// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function (value) {
  if (value instanceof OrderedMap) return value;
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderedMap);

/***/ }),

/***/ 7400:
/*!*********************************************************!*\
  !*** ./node_modules/prosemirror-commands/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoJoin: () => (/* binding */ autoJoin),
/* harmony export */   baseKeymap: () => (/* binding */ baseKeymap),
/* harmony export */   chainCommands: () => (/* binding */ chainCommands),
/* harmony export */   createParagraphNear: () => (/* binding */ createParagraphNear),
/* harmony export */   deleteSelection: () => (/* binding */ deleteSelection),
/* harmony export */   exitCode: () => (/* binding */ exitCode),
/* harmony export */   joinBackward: () => (/* binding */ joinBackward),
/* harmony export */   joinDown: () => (/* binding */ joinDown),
/* harmony export */   joinForward: () => (/* binding */ joinForward),
/* harmony export */   joinTextblockBackward: () => (/* binding */ joinTextblockBackward),
/* harmony export */   joinTextblockForward: () => (/* binding */ joinTextblockForward),
/* harmony export */   joinUp: () => (/* binding */ joinUp),
/* harmony export */   lift: () => (/* binding */ lift),
/* harmony export */   liftEmptyBlock: () => (/* binding */ liftEmptyBlock),
/* harmony export */   macBaseKeymap: () => (/* binding */ macBaseKeymap),
/* harmony export */   newlineInCode: () => (/* binding */ newlineInCode),
/* harmony export */   pcBaseKeymap: () => (/* binding */ pcBaseKeymap),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   selectNodeBackward: () => (/* binding */ selectNodeBackward),
/* harmony export */   selectNodeForward: () => (/* binding */ selectNodeForward),
/* harmony export */   selectParentNode: () => (/* binding */ selectParentNode),
/* harmony export */   selectTextblockEnd: () => (/* binding */ selectTextblockEnd),
/* harmony export */   selectTextblockStart: () => (/* binding */ selectTextblockStart),
/* harmony export */   setBlockType: () => (/* binding */ setBlockType),
/* harmony export */   splitBlock: () => (/* binding */ splitBlock),
/* harmony export */   splitBlockAs: () => (/* binding */ splitBlockAs),
/* harmony export */   splitBlockKeepMarks: () => (/* binding */ splitBlockKeepMarks),
/* harmony export */   toggleMark: () => (/* binding */ toggleMark),
/* harmony export */   wrapIn: () => (/* binding */ wrapIn)
/* harmony export */ });
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-transform */ 2576);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-model */ 6375);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ 7195);




/**
Delete the selection, if there is one.
*/
const deleteSelection = (state, dispatch) => {
  if (state.selection.empty) return false;
  if (dispatch) dispatch(state.tr.deleteSelection().scrollIntoView());
  return true;
};
function atBlockStart(state, view) {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0)) return null;
  return $cursor;
}
/**
If the selection is empty and at the start of a textblock, try to
reduce the distance between that block and the one before it—if
there's a block directly before it that can be joined, join them.
If not, try to move the selected block closer to the next one in
the document structure by lifting it out of its parent or moving it
into a parent of the previous block. Will use the view for accurate
(bidi-aware) start-of-textblock detection if given.
*/
const joinBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  // If there is no node before this, try to lift
  if (!$cut) {
    let range = $cursor.blockRange(),
      target = range && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.liftTarget)(range);
    if (target == null) return false;
    if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  let before = $cut.nodeBefore;
  // Apply the joining algorithm
  if (!before.type.spec.isolating && deleteBarrier(state, $cut, dispatch)) return true;
  // If the node below has no content and the node above is
  // selectable, delete the node below and select the one above.
  if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(before))) {
    let delStep = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.replaceStep)(state.doc, $cursor.before(), $cursor.after(), prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Slice.empty);
    if (delStep && delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        let tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(before, "end") ? prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  // If the node before is an atom, delete it
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
    return true;
  }
  return false;
};
/**
A more limited form of [`joinBackward`]($commands.joinBackward)
that only tries to join the current textblock to the one before
it, if the cursor is at the start of a textblock.
*/
const joinTextblockBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
/**
A more limited form of [`joinForward`]($commands.joinForward)
that only tries to join the current textblock to the one after
it, if the cursor is at the end of a textblock.
*/
const joinTextblockForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
function joinTextblocksAround(state, $cut, dispatch) {
  let before = $cut.nodeBefore,
    beforeText = before,
    beforePos = $cut.pos - 1;
  for (; !beforeText.isTextblock; beforePos--) {
    if (beforeText.type.spec.isolating) return false;
    let child = beforeText.lastChild;
    if (!child) return false;
    beforeText = child;
  }
  let after = $cut.nodeAfter,
    afterText = after,
    afterPos = $cut.pos + 1;
  for (; !afterText.isTextblock; afterPos++) {
    if (afterText.type.spec.isolating) return false;
    let child = afterText.firstChild;
    if (!child) return false;
    afterText = child;
  }
  let step = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.replaceStep)(state.doc, beforePos, afterPos, prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Slice.empty);
  if (!step || step.from != beforePos || step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.ReplaceStep && step.slice.size >= afterPos - beforePos) return false;
  if (dispatch) {
    let tr = state.tr.step(step);
    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection.create(tr.doc, beforePos));
    dispatch(tr.scrollIntoView());
  }
  return true;
}
function textblockAt(node, side, only = false) {
  for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
    if (scan.isTextblock) return true;
    if (only && scan.childCount != 1) return false;
  }
  return false;
}
/**
When the selection is empty and at the start of a textblock, select
the node before that textblock, if possible. This is intended to be
bound to keys like backspace, after
[`joinBackward`](https://prosemirror.net/docs/ref/#commands.joinBackward) or other deleting
commands, as a fall-back behavior when the schema doesn't allow
deletion at the selected point.
*/
const selectNodeBackward = (state, dispatch, view) => {
  let {
      $head,
      empty
    } = state.selection,
    $cut = $head;
  if (!empty) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0) return false;
    $cut = findCutBefore($head);
  }
  let node = $cut && $cut.nodeBefore;
  if (!node || !prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
  return true;
};
function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    if ($pos.index(i) > 0) return $pos.doc.resolve($pos.before(i + 1));
    if ($pos.node(i).type.spec.isolating) break;
  }
  return null;
}
function atBlockEnd(state, view) {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size)) return null;
  return $cursor;
}
/**
If the selection is empty and the cursor is at the end of a
textblock, try to reduce or remove the boundary between that block
and the one after it, either by joining them or by moving the other
block closer to this one in the tree structure. Will use the view
for accurate start-of-textblock detection if given.
*/
const joinForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  // If there is no node after this, there's nothing to do
  if (!$cut) return false;
  let after = $cut.nodeAfter;
  // Try the joining algorithm
  if (deleteBarrier(state, $cut, dispatch)) return true;
  // If the node above has no content and the node below is
  // selectable, delete the node above and select the one below.
  if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(after))) {
    let delStep = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.replaceStep)(state.doc, $cursor.before(), $cursor.after(), prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Slice.empty);
    if (delStep && delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        let tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(after, "start") ? prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  // If the next node is an atom, delete it
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
    return true;
  }
  return false;
};
/**
When the selection is empty and at the end of a textblock, select
the node coming after that textblock, if possible. This is intended
to be bound to keys like delete, after
[`joinForward`](https://prosemirror.net/docs/ref/#commands.joinForward) and similar deleting
commands, to provide a fall-back behavior when the schema doesn't
allow deletion at the selected point.
*/
const selectNodeForward = (state, dispatch, view) => {
  let {
      $head,
      empty
    } = state.selection,
    $cut = $head;
  if (!empty) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size) return false;
    $cut = findCutAfter($head);
  }
  let node = $cut && $cut.nodeAfter;
  if (!node || !prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
  return true;
};
function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    let parent = $pos.node(i);
    if ($pos.index(i) + 1 < parent.childCount) return $pos.doc.resolve($pos.after(i + 1));
    if (parent.type.spec.isolating) break;
  }
  return null;
}
/**
Join the selected block or, if there is a text selection, the
closest ancestor block of the selection that can be joined, with
the sibling above it.
*/
const joinUp = (state, dispatch) => {
  let sel = state.selection,
    nodeSel = sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection,
    point;
  if (nodeSel) {
    if (sel.node.isTextblock || !(0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canJoin)(state.doc, sel.from)) return false;
    point = sel.from;
  } else {
    point = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.joinPoint)(state.doc, sel.from, -1);
    if (point == null) return false;
  }
  if (dispatch) {
    let tr = state.tr.join(point);
    if (nodeSel) tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(tr.doc, point - state.doc.resolve(point).nodeBefore.nodeSize));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
/**
Join the selected block, or the closest ancestor of the selection
that can be joined, with the sibling after it.
*/
const joinDown = (state, dispatch) => {
  let sel = state.selection,
    point;
  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection) {
    if (sel.node.isTextblock || !(0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canJoin)(state.doc, sel.to)) return false;
    point = sel.to;
  } else {
    point = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.joinPoint)(state.doc, sel.to, 1);
    if (point == null) return false;
  }
  if (dispatch) dispatch(state.tr.join(point).scrollIntoView());
  return true;
};
/**
Lift the selected block, or the closest ancestor block of the
selection that can be lifted, out of its parent node.
*/
const lift = (state, dispatch) => {
  let {
    $from,
    $to
  } = state.selection;
  let range = $from.blockRange($to),
    target = range && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.liftTarget)(range);
  if (target == null) return false;
  if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
/**
If the selection is in a node whose type has a truthy
[`code`](https://prosemirror.net/docs/ref/#model.NodeSpec.code) property in its spec, replace the
selection with a newline character.
*/
const newlineInCode = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  if (dispatch) dispatch(state.tr.insertText("\n").scrollIntoView());
  return true;
};
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i++) {
    let {
      type
    } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) return type;
  }
  return null;
}
/**
When the selection is in a node with a truthy
[`code`](https://prosemirror.net/docs/ref/#model.NodeSpec.code) property in its spec, create a
default block after the code block, and move the cursor there.
*/
const exitCode = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  let above = $head.node(-1),
    after = $head.indexAfter(-1),
    type = defaultBlockAt(above.contentMatchAt(after));
  if (!type || !above.canReplaceWith(after, after, type)) return false;
  if (dispatch) {
    let pos = $head.after(),
      tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
/**
If a block node is selected, create an empty paragraph before (if
it is its parent's first child) or after it.
*/
const createParagraphNear = (state, dispatch) => {
  let sel = state.selection,
    {
      $from,
      $to
    } = sel;
  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.AllSelection || $from.parent.inlineContent || $to.parent.inlineContent) return false;
  let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock) return false;
  if (dispatch) {
    let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    let tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
/**
If the cursor is in an empty textblock that can be lifted, lift the
block.
*/
const liftEmptyBlock = (state, dispatch) => {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || $cursor.parent.content.size) return false;
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let before = $cursor.before();
    if ((0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canSplit)(state.doc, before)) {
      if (dispatch) dispatch(state.tr.split(before).scrollIntoView());
      return true;
    }
  }
  let range = $cursor.blockRange(),
    target = range && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.liftTarget)(range);
  if (target == null) return false;
  if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
/**
Create a variant of [`splitBlock`](https://prosemirror.net/docs/ref/#commands.splitBlock) that uses
a custom function to determine the type of the newly split off block.
*/
function splitBlockAs(splitNode) {
  return (state, dispatch) => {
    let {
      $from,
      $to
    } = state.selection;
    if (state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection && state.selection.node.isBlock) {
      if (!$from.parentOffset || !(0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canSplit)(state.doc, $from.pos)) return false;
      if (dispatch) dispatch(state.tr.split($from.pos).scrollIntoView());
      return true;
    }
    if (!$from.parent.isBlock) return false;
    if (dispatch) {
      let atEnd = $to.parentOffset == $to.parent.content.size;
      let tr = state.tr;
      if (state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection || state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.AllSelection) tr.deleteSelection();
      let deflt = $from.depth == 0 ? null : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
      let splitType = splitNode && splitNode($to.parent, atEnd);
      let types = splitType ? [splitType] : atEnd && deflt ? [{
        type: deflt
      }] : undefined;
      let can = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canSplit)(tr.doc, tr.mapping.map($from.pos), 1, types);
      if (!types && !can && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canSplit)(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{
        type: deflt
      }] : undefined)) {
        if (deflt) types = [{
          type: deflt
        }];
        can = true;
      }
      if (can) {
        tr.split(tr.mapping.map($from.pos), 1, types);
        if (!atEnd && !$from.parentOffset && $from.parent.type != deflt) {
          let first = tr.mapping.map($from.before()),
            $first = tr.doc.resolve(first);
          if (deflt && $from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
}
/**
Split the parent block of the selection. If the selection is a text
selection, also delete its content.
*/
const splitBlock = splitBlockAs();
/**
Acts like [`splitBlock`](https://prosemirror.net/docs/ref/#commands.splitBlock), but without
resetting the set of active marks at the cursor.
*/
const splitBlockKeepMarks = (state, dispatch) => {
  return splitBlock(state, dispatch && (tr => {
    let marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
    if (marks) tr.ensureMarks(marks);
    dispatch(tr);
  }));
};
/**
Move the selection to the node wrapping the current selection, if
any. (Will not select the document node.)
*/
const selectParentNode = (state, dispatch) => {
  let {
      $from,
      to
    } = state.selection,
    pos;
  let same = $from.sharedDepth(to);
  if (same == 0) return false;
  pos = $from.before(same);
  if (dispatch) dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(state.doc, pos)));
  return true;
};
/**
Select the whole document.
*/
const selectAll = (state, dispatch) => {
  if (dispatch) dispatch(state.tr.setSelection(new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.AllSelection(state.doc)));
  return true;
};
function joinMaybeClear(state, $pos, dispatch) {
  let before = $pos.nodeBefore,
    after = $pos.nodeAfter,
    index = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type)) return false;
  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
    return true;
  }
  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canJoin)(state.doc, $pos.pos))) return false;
  if (dispatch) dispatch(state.tr.clearIncompatible($pos.pos, before.type, before.contentMatchAt(before.childCount)).join($pos.pos).scrollIntoView());
  return true;
}
function deleteBarrier(state, $cut, dispatch) {
  let before = $cut.nodeBefore,
    after = $cut.nodeAfter,
    conn,
    match;
  if (before.type.spec.isolating || after.type.spec.isolating) return false;
  if (joinMaybeClear(state, $cut, dispatch)) return true;
  let canDelAfter = $cut.parent.canReplace($cut.index(), $cut.index() + 1);
  if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      let end = $cut.pos + after.nodeSize,
        wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Fragment.empty;
      for (let i = conn.length - 1; i >= 0; i--) wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Fragment.from(conn[i].create(null, wrap));
      wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Fragment.from(before.copy(wrap));
      let tr = state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Slice(wrap, 1, 0), conn.length, true));
      let joinAt = end + 2 * conn.length;
      if ((0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canJoin)(tr.doc, joinAt)) tr.join(joinAt);
      dispatch(tr.scrollIntoView());
    }
    return true;
  }
  let selAfter = prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.findFrom($cut, 1);
  let range = selAfter && selAfter.$from.blockRange(selAfter.$to),
    target = range && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.liftTarget)(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
    let at = before,
      wrap = [];
    for (;;) {
      wrap.push(at);
      if (at.isTextblock) break;
      at = at.lastChild;
    }
    let afterText = after,
      afterDepth = 1;
    for (; !afterText.isTextblock; afterText = afterText.firstChild) afterDepth++;
    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch) {
        let end = prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Fragment.empty;
        for (let i = wrap.length - 1; i >= 0; i--) end = prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Fragment.from(wrap[i].copy(end));
        let tr = state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.ReplaceAroundStep($cut.pos - wrap.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new prosemirror_model__WEBPACK_IMPORTED_MODULE_2__.Slice(end, wrap.length, 0), 0, true));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function selectTextblockSide(side) {
  return function (state, dispatch) {
    let sel = state.selection,
      $pos = side < 0 ? sel.$from : sel.$to;
    let depth = $pos.depth;
    while ($pos.node(depth).isInline) {
      if (!depth) return false;
      depth--;
    }
    if (!$pos.node(depth).isTextblock) return false;
    if (dispatch) dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection.create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
    return true;
  };
}
/**
Moves the cursor to the start of current text block.
*/
const selectTextblockStart = selectTextblockSide(-1);
/**
Moves the cursor to the end of current text block.
*/
const selectTextblockEnd = selectTextblockSide(1);
// Parameterized commands
/**
Wrap the selection in a node of the given type with the given
attributes.
*/
function wrapIn(nodeType, attrs = null) {
  return function (state, dispatch) {
    let {
      $from,
      $to
    } = state.selection;
    let range = $from.blockRange($to),
      wrapping = range && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.findWrapping)(range, nodeType, attrs);
    if (!wrapping) return false;
    if (dispatch) dispatch(state.tr.wrap(range, wrapping).scrollIntoView());
    return true;
  };
}
/**
Returns a command that tries to set the selected textblocks to the
given node type with the given attributes.
*/
function setBlockType(nodeType, attrs = null) {
  return function (state, dispatch) {
    let applicable = false;
    for (let i = 0; i < state.selection.ranges.length && !applicable; i++) {
      let {
        $from: {
          pos: from
        },
        $to: {
          pos: to
        }
      } = state.selection.ranges[i];
      state.doc.nodesBetween(from, to, (node, pos) => {
        if (applicable) return false;
        if (!node.isTextblock || node.hasMarkup(nodeType, attrs)) return;
        if (node.type == nodeType) {
          applicable = true;
        } else {
          let $pos = state.doc.resolve(pos),
            index = $pos.index();
          applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
        }
      });
    }
    if (!applicable) return false;
    if (dispatch) {
      let tr = state.tr;
      for (let i = 0; i < state.selection.ranges.length; i++) {
        let {
          $from: {
            pos: from
          },
          $to: {
            pos: to
          }
        } = state.selection.ranges[i];
        tr.setBlockType(from, to, nodeType, attrs);
      }
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
}
function markApplies(doc, ranges, type) {
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    let can = $from.depth == 0 ? doc.inlineContent && doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, node => {
      if (can) return false;
      can = node.inlineContent && node.type.allowsMarkType(type);
    });
    if (can) return true;
  }
  return false;
}
/**
Create a command function that toggles the given mark with the
given attributes. Will return `false` when the current selection
doesn't support that mark. This will remove the mark if any marks
of that type exist in the selection, or add it otherwise. If the
selection is empty, this applies to the [stored
marks](https://prosemirror.net/docs/ref/#state.EditorState.storedMarks) instead of a range of the
document.
*/
function toggleMark(markType, attrs = null) {
  return function (state, dispatch) {
    let {
      empty,
      $cursor,
      ranges
    } = state.selection;
    if (empty && !$cursor || !markApplies(state.doc, ranges, markType)) return false;
    if (dispatch) {
      if ($cursor) {
        if (markType.isInSet(state.storedMarks || $cursor.marks())) dispatch(state.tr.removeStoredMark(markType));else dispatch(state.tr.addStoredMark(markType.create(attrs)));
      } else {
        let has = false,
          tr = state.tr;
        for (let i = 0; !has && i < ranges.length; i++) {
          let {
            $from,
            $to
          } = ranges[i];
          has = state.doc.rangeHasMark($from.pos, $to.pos, markType);
        }
        for (let i = 0; i < ranges.length; i++) {
          let {
            $from,
            $to
          } = ranges[i];
          if (has) {
            tr.removeMark($from.pos, $to.pos, markType);
          } else {
            let from = $from.pos,
              to = $to.pos,
              start = $from.nodeAfter,
              end = $to.nodeBefore;
            let spaceStart = start && start.isText ? /^\s*/.exec(start.text)[0].length : 0;
            let spaceEnd = end && end.isText ? /\s*$/.exec(end.text)[0].length : 0;
            if (from + spaceStart < to) {
              from += spaceStart;
              to -= spaceEnd;
            }
            tr.addMark(from, to, markType.create(attrs));
          }
        }
        dispatch(tr.scrollIntoView());
      }
    }
    return true;
  };
}
function wrapDispatchForJoin(dispatch, isJoinable) {
  return tr => {
    if (!tr.isGeneric) return dispatch(tr);
    let ranges = [];
    for (let i = 0; i < tr.mapping.maps.length; i++) {
      let map = tr.mapping.maps[i];
      for (let j = 0; j < ranges.length; j++) ranges[j] = map.map(ranges[j]);
      map.forEach((_s, _e, from, to) => ranges.push(from, to));
    }
    // Figure out which joinable points exist inside those ranges,
    // by checking all node boundaries in their parent nodes.
    let joinable = [];
    for (let i = 0; i < ranges.length; i += 2) {
      let from = ranges[i],
        to = ranges[i + 1];
      let $from = tr.doc.resolve(from),
        depth = $from.sharedDepth(to),
        parent = $from.node(depth);
      for (let index = $from.indexAfter(depth), pos = $from.after(depth + 1); pos <= to; ++index) {
        let after = parent.maybeChild(index);
        if (!after) break;
        if (index && joinable.indexOf(pos) == -1) {
          let before = parent.child(index - 1);
          if (before.type == after.type && isJoinable(before, after)) joinable.push(pos);
        }
        pos += after.nodeSize;
      }
    }
    // Join the joinable points
    joinable.sort((a, b) => a - b);
    for (let i = joinable.length - 1; i >= 0; i--) {
      if ((0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.canJoin)(tr.doc, joinable[i])) tr.join(joinable[i]);
    }
    dispatch(tr);
  };
}
/**
Wrap a command so that, when it produces a transform that causes
two joinable nodes to end up next to each other, those are joined.
Nodes are considered joinable when they are of the same type and
when the `isJoinable` predicate returns true for them or, if an
array of strings was passed, if their node type name is in that
array.
*/
function autoJoin(command, isJoinable) {
  let canJoin = Array.isArray(isJoinable) ? node => isJoinable.indexOf(node.type.name) > -1 : isJoinable;
  return (state, dispatch, view) => command(state, dispatch && wrapDispatchForJoin(dispatch, canJoin), view);
}
/**
Combine a number of command functions into a single function (which
calls them one by one until one returns true).
*/
function chainCommands(...commands) {
  return function (state, dispatch, view) {
    for (let i = 0; i < commands.length; i++) if (commands[i](state, dispatch, view)) return true;
    return false;
  };
}
let backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
let del = chainCommands(deleteSelection, joinForward, selectNodeForward);
/**
A basic keymap containing bindings not specific to any schema.
Binds the following keys (when multiple commands are listed, they
are chained with [`chainCommands`](https://prosemirror.net/docs/ref/#commands.chainCommands)):

* **Enter** to `newlineInCode`, `createParagraphNear`, `liftEmptyBlock`, `splitBlock`
* **Mod-Enter** to `exitCode`
* **Backspace** and **Mod-Backspace** to `deleteSelection`, `joinBackward`, `selectNodeBackward`
* **Delete** and **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
* **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
* **Mod-a** to `selectAll`
*/
const pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Shift-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};
/**
A copy of `pcBaseKeymap` that also binds **Ctrl-h** like Backspace,
**Ctrl-d** like Delete, **Alt-Backspace** like Ctrl-Backspace, and
**Ctrl-Alt-Backspace**, **Alt-Delete**, and **Alt-d** like
Ctrl-Delete.
*/
const macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"],
  "Ctrl-a": selectTextblockStart,
  "Ctrl-e": selectTextblockEnd
};
for (let key in pcBaseKeymap) macBaseKeymap[key] = pcBaseKeymap[key];
const mac = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
// @ts-ignore
: typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;
/**
Depending on the detected platform, this will hold
[`pcBasekeymap`](https://prosemirror.net/docs/ref/#commands.pcBaseKeymap) or
[`macBaseKeymap`](https://prosemirror.net/docs/ref/#commands.macBaseKeymap).
*/
const baseKeymap = mac ? macBaseKeymap : pcBaseKeymap;


/***/ }),

/***/ 76:
/*!********************************************************!*\
  !*** ./node_modules/prosemirror-history/dist/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeHistory: () => (/* binding */ closeHistory),
/* harmony export */   history: () => (/* binding */ history),
/* harmony export */   redo: () => (/* binding */ redo),
/* harmony export */   redoDepth: () => (/* binding */ redoDepth),
/* harmony export */   redoNoScroll: () => (/* binding */ redoNoScroll),
/* harmony export */   undo: () => (/* binding */ undo),
/* harmony export */   undoDepth: () => (/* binding */ undoDepth),
/* harmony export */   undoNoScroll: () => (/* binding */ undoNoScroll)
/* harmony export */ });
/* harmony import */ var rope_sequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rope-sequence */ 1173);
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ 2576);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ 7195);




// ProseMirror's history isn't simply a way to roll back to a previous
// state, because ProseMirror supports applying changes without adding
// them to the history (for example during collaboration).
//
// To this end, each 'Branch' (one for the undo history and one for
// the redo history) keeps an array of 'Items', which can optionally
// hold a step (an actual undoable change), and always hold a position
// map (which is needed to move changes below them to apply to the
// current document).
//
// An item that has both a step and a selection bookmark is the start
// of an 'event' — a group of changes that will be undone or redone at
// once. (It stores only the bookmark, since that way we don't have to
// provide a document until the selection is actually applied, which
// is useful when compressing.)
// Used to schedule history compression
const max_empty_items = 500;
class Branch {
  constructor(items, eventCount) {
    this.items = items;
    this.eventCount = eventCount;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(state, preserveItems) {
    if (this.eventCount == 0) return null;
    let end = this.items.length;
    for (;; end--) {
      let next = this.items.get(end - 1);
      if (next.selection) {
        --end;
        break;
      }
    }
    let remap, mapFrom;
    if (preserveItems) {
      remap = this.remapping(end, this.items.length);
      mapFrom = remap.maps.length;
    }
    let transform = state.tr;
    let selection, remaining;
    let addAfter = [],
      addBefore = [];
    this.items.forEach((item, i) => {
      if (!item.step) {
        if (!remap) {
          remap = this.remapping(end, i + 1);
          mapFrom = remap.maps.length;
        }
        mapFrom--;
        addBefore.push(item);
        return;
      }
      if (remap) {
        addBefore.push(new Item(item.map));
        let step = item.step.map(remap.slice(mapFrom)),
          map;
        if (step && transform.maybeStep(step).doc) {
          map = transform.mapping.maps[transform.mapping.maps.length - 1];
          addAfter.push(new Item(map, undefined, undefined, addAfter.length + addBefore.length));
        }
        mapFrom--;
        if (map) remap.appendMap(map, mapFrom);
      } else {
        transform.maybeStep(item.step);
      }
      if (item.selection) {
        selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
        remaining = new Branch(this.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this.eventCount - 1);
        return false;
      }
    }, this.items.length, 0);
    return {
      remaining: remaining,
      transform,
      selection: selection
    };
  }
  // Create a new branch with the given transform added.
  addTransform(transform, selection, histOptions, preserveItems) {
    let newItems = [],
      eventCount = this.eventCount;
    let oldItems = this.items,
      lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
    for (let i = 0; i < transform.steps.length; i++) {
      let step = transform.steps[i].invert(transform.docs[i]);
      let item = new Item(transform.mapping.maps[i], step, selection),
        merged;
      if (merged = lastItem && lastItem.merge(item)) {
        item = merged;
        if (i) newItems.pop();else oldItems = oldItems.slice(0, oldItems.length - 1);
      }
      newItems.push(item);
      if (selection) {
        eventCount++;
        selection = undefined;
      }
      if (!preserveItems) lastItem = item;
    }
    let overflow = eventCount - histOptions.depth;
    if (overflow > DEPTH_OVERFLOW) {
      oldItems = cutOffEvents(oldItems, overflow);
      eventCount -= overflow;
    }
    return new Branch(oldItems.append(newItems), eventCount);
  }
  remapping(from, to) {
    let maps = new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.Mapping();
    this.items.forEach((item, i) => {
      let mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from ? maps.maps.length - item.mirrorOffset : undefined;
      maps.appendMap(item.map, mirrorPos);
    }, from, to);
    return maps;
  }
  addMaps(array) {
    if (this.eventCount == 0) return this;
    return new Branch(this.items.append(array.map(map => new Item(map))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(rebasedTransform, rebasedCount) {
    if (!this.eventCount) return this;
    let rebasedItems = [],
      start = Math.max(0, this.items.length - rebasedCount);
    let mapping = rebasedTransform.mapping;
    let newUntil = rebasedTransform.steps.length;
    let eventCount = this.eventCount;
    this.items.forEach(item => {
      if (item.selection) eventCount--;
    }, start);
    let iRebased = rebasedCount;
    this.items.forEach(item => {
      let pos = mapping.getMirror(--iRebased);
      if (pos == null) return;
      newUntil = Math.min(newUntil, pos);
      let map = mapping.maps[pos];
      if (item.step) {
        let step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
        let selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
        if (selection) eventCount++;
        rebasedItems.push(new Item(map, step, selection));
      } else {
        rebasedItems.push(new Item(map));
      }
    }, start);
    let newMaps = [];
    for (let i = rebasedCount; i < newUntil; i++) newMaps.push(new Item(mapping.maps[i]));
    let items = this.items.slice(0, start).append(newMaps).append(rebasedItems);
    let branch = new Branch(items, eventCount);
    if (branch.emptyItemCount() > max_empty_items) branch = branch.compress(this.items.length - rebasedItems.length);
    return branch;
  }
  emptyItemCount() {
    let count = 0;
    this.items.forEach(item => {
      if (!item.step) count++;
    });
    return count;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(upto = this.items.length) {
    let remap = this.remapping(0, upto),
      mapFrom = remap.maps.length;
    let items = [],
      events = 0;
    this.items.forEach((item, i) => {
      if (i >= upto) {
        items.push(item);
        if (item.selection) events++;
      } else if (item.step) {
        let step = item.step.map(remap.slice(mapFrom)),
          map = step && step.getMap();
        mapFrom--;
        if (map) remap.appendMap(map, mapFrom);
        if (step) {
          let selection = item.selection && item.selection.map(remap.slice(mapFrom));
          if (selection) events++;
          let newItem = new Item(map.invert(), step, selection),
            merged,
            last = items.length - 1;
          if (merged = items.length && items[last].merge(newItem)) items[last] = merged;else items.push(newItem);
        }
      } else if (item.map) {
        mapFrom--;
      }
    }, this.items.length, 0);
    return new Branch(rope_sequence__WEBPACK_IMPORTED_MODULE_0__["default"].from(items.reverse()), events);
  }
}
Branch.empty = new Branch(rope_sequence__WEBPACK_IMPORTED_MODULE_0__["default"].empty, 0);
function cutOffEvents(items, n) {
  let cutPoint;
  items.forEach((item, i) => {
    if (item.selection && n-- == 0) {
      cutPoint = i;
      return false;
    }
  });
  return items.slice(cutPoint);
}
class Item {
  constructor(
  // The (forward) step map for this item.
  map,
  // The inverted step
  step,
  // If this is non-null, this item is the start of a group, and
  // this selection is the starting selection for the group (the one
  // that was active before the first step was applied)
  selection,
  // If this item is the inverse of a previous mapping on the stack,
  // this points at the inverse's offset
  mirrorOffset) {
    this.map = map;
    this.step = step;
    this.selection = selection;
    this.mirrorOffset = mirrorOffset;
  }
  merge(other) {
    if (this.step && other.step && !other.selection) {
      let step = other.step.merge(this.step);
      if (step) return new Item(step.getMap().invert(), step, this.selection);
    }
  }
}
// The value of the state field that tracks undo/redo history for that
// state. Will be stored in the plugin state when the history plugin
// is active.
class HistoryState {
  constructor(done, undone, prevRanges, prevTime, prevComposition) {
    this.done = done;
    this.undone = undone;
    this.prevRanges = prevRanges;
    this.prevTime = prevTime;
    this.prevComposition = prevComposition;
  }
}
const DEPTH_OVERFLOW = 20;
// Record a transformation in undo history.
function applyTransaction(history, state, tr, options) {
  let historyTr = tr.getMeta(historyKey),
    rebased;
  if (historyTr) return historyTr.historyState;
  if (tr.getMeta(closeHistoryKey)) history = new HistoryState(history.done, history.undone, null, 0, -1);
  let appended = tr.getMeta("appendedTransaction");
  if (tr.steps.length == 0) {
    return history;
  } else if (appended && appended.getMeta(historyKey)) {
    if (appended.getMeta(historyKey).redo) return new HistoryState(history.done.addTransform(tr, undefined, options, mustPreserveItems(state)), history.undone, rangesFor(tr.mapping.maps[tr.steps.length - 1]), history.prevTime, history.prevComposition);else return new HistoryState(history.done, history.undone.addTransform(tr, undefined, options, mustPreserveItems(state)), null, history.prevTime, history.prevComposition);
  } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
    // Group transforms that occur in quick succession into one event.
    let composition = tr.getMeta("composition");
    let newGroup = history.prevTime == 0 || !appended && history.prevComposition != composition && (history.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history.prevRanges));
    let prevRanges = appended ? mapRanges(history.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps[tr.steps.length - 1]);
    return new HistoryState(history.done.addTransform(tr, newGroup ? state.selection.getBookmark() : undefined, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time, composition == null ? history.prevComposition : composition);
  } else if (rebased = tr.getMeta("rebased")) {
    // Used by the collab module to tell the history that some of its
    // content has been rebased.
    return new HistoryState(history.done.rebased(tr, rebased), history.undone.rebased(tr, rebased), mapRanges(history.prevRanges, tr.mapping), history.prevTime, history.prevComposition);
  } else {
    return new HistoryState(history.done.addMaps(tr.mapping.maps), history.undone.addMaps(tr.mapping.maps), mapRanges(history.prevRanges, tr.mapping), history.prevTime, history.prevComposition);
  }
}
function isAdjacentTo(transform, prevRanges) {
  if (!prevRanges) return false;
  if (!transform.docChanged) return true;
  let adjacent = false;
  transform.mapping.maps[0].forEach((start, end) => {
    for (let i = 0; i < prevRanges.length; i += 2) if (start <= prevRanges[i + 1] && end >= prevRanges[i]) adjacent = true;
  });
  return adjacent;
}
function rangesFor(map) {
  let result = [];
  map.forEach((_from, _to, from, to) => result.push(from, to));
  return result;
}
function mapRanges(ranges, mapping) {
  if (!ranges) return null;
  let result = [];
  for (let i = 0; i < ranges.length; i += 2) {
    let from = mapping.map(ranges[i], 1),
      to = mapping.map(ranges[i + 1], -1);
    if (from <= to) result.push(from, to);
  }
  return result;
}
// Apply the latest event from one branch to the document and shift the event
// onto the other branch.
function histTransaction(history, state, redo) {
  let preserveItems = mustPreserveItems(state);
  let histOptions = historyKey.get(state).spec.config;
  let pop = (redo ? history.undone : history.done).popEvent(state, preserveItems);
  if (!pop) return null;
  let selection = pop.selection.resolve(pop.transform.doc);
  let added = (redo ? history.done : history.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems);
  let newHist = new HistoryState(redo ? added : pop.remaining, redo ? pop.remaining : added, null, 0, -1);
  return pop.transform.setSelection(selection).setMeta(historyKey, {
    redo,
    historyState: newHist
  });
}
let cachedPreserveItems = false,
  cachedPreserveItemsPlugins = null;
// Check whether any plugin in the given state has a
// `historyPreserveItems` property in its spec, in which case we must
// preserve steps exactly as they came in, so that they can be
// rebased.
function mustPreserveItems(state) {
  let plugins = state.plugins;
  if (cachedPreserveItemsPlugins != plugins) {
    cachedPreserveItems = false;
    cachedPreserveItemsPlugins = plugins;
    for (let i = 0; i < plugins.length; i++) if (plugins[i].spec.historyPreserveItems) {
      cachedPreserveItems = true;
      break;
    }
  }
  return cachedPreserveItems;
}
/**
Set a flag on the given transaction that will prevent further steps
from being appended to an existing history event (so that they
require a separate undo command to undo).
*/
function closeHistory(tr) {
  return tr.setMeta(closeHistoryKey, true);
}
const historyKey = new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.PluginKey("history");
const closeHistoryKey = new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.PluginKey("closeHistory");
/**
Returns a plugin that enables the undo history for an editor. The
plugin will track undo and redo stacks, which can be used with the
[`undo`](https://prosemirror.net/docs/ref/#history.undo) and [`redo`](https://prosemirror.net/docs/ref/#history.redo) commands.

You can set an `"addToHistory"` [metadata
property](https://prosemirror.net/docs/ref/#state.Transaction.setMeta) of `false` on a transaction
to prevent it from being rolled back by undo.
*/
function history(config = {}) {
  config = {
    depth: config.depth || 100,
    newGroupDelay: config.newGroupDelay || 500
  };
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.Plugin({
    key: historyKey,
    state: {
      init() {
        return new HistoryState(Branch.empty, Branch.empty, null, 0, -1);
      },
      apply(tr, hist, state) {
        return applyTransaction(hist, state, tr, config);
      }
    },
    config,
    props: {
      handleDOMEvents: {
        beforeinput(view, e) {
          let inputType = e.inputType;
          let command = inputType == "historyUndo" ? undo : inputType == "historyRedo" ? redo : null;
          if (!command) return false;
          e.preventDefault();
          return command(view.state, view.dispatch);
        }
      }
    }
  });
}
function buildCommand(redo, scroll) {
  return (state, dispatch) => {
    let hist = historyKey.getState(state);
    if (!hist || (redo ? hist.undone : hist.done).eventCount == 0) return false;
    if (dispatch) {
      let tr = histTransaction(hist, state, redo);
      if (tr) dispatch(scroll ? tr.scrollIntoView() : tr);
    }
    return true;
  };
}
/**
A command function that undoes the last change, if any.
*/
const undo = buildCommand(false, true);
/**
A command function that redoes the last undone change, if any.
*/
const redo = buildCommand(true, true);
/**
A command function that undoes the last change. Don't scroll the
selection into view.
*/
const undoNoScroll = buildCommand(false, false);
/**
A command function that redoes the last undone change. Don't
scroll the selection into view.
*/
const redoNoScroll = buildCommand(true, false);
/**
The amount of undoable events available in a given state.
*/
function undoDepth(state) {
  let hist = historyKey.getState(state);
  return hist ? hist.done.eventCount : 0;
}
/**
The amount of redoable events available in a given editor state.
*/
function redoDepth(state) {
  let hist = historyKey.getState(state);
  return hist ? hist.undone.eventCount : 0;
}


/***/ }),

/***/ 559:
/*!***********************************************************!*\
  !*** ./node_modules/prosemirror-inputrules/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputRule: () => (/* binding */ InputRule),
/* harmony export */   closeDoubleQuote: () => (/* binding */ closeDoubleQuote),
/* harmony export */   closeSingleQuote: () => (/* binding */ closeSingleQuote),
/* harmony export */   ellipsis: () => (/* binding */ ellipsis),
/* harmony export */   emDash: () => (/* binding */ emDash),
/* harmony export */   inputRules: () => (/* binding */ inputRules),
/* harmony export */   openDoubleQuote: () => (/* binding */ openDoubleQuote),
/* harmony export */   openSingleQuote: () => (/* binding */ openSingleQuote),
/* harmony export */   smartQuotes: () => (/* binding */ smartQuotes),
/* harmony export */   textblockTypeInputRule: () => (/* binding */ textblockTypeInputRule),
/* harmony export */   undoInputRule: () => (/* binding */ undoInputRule),
/* harmony export */   wrappingInputRule: () => (/* binding */ wrappingInputRule)
/* harmony export */ });
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ 7195);
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ 2576);



/**
Input rules are regular expressions describing a piece of text
that, when typed, causes something to happen. This might be
changing two dashes into an emdash, wrapping a paragraph starting
with `"> "` into a blockquote, or something entirely different.
*/
class InputRule {
  // :: (RegExp, union<string, (state: EditorState, match: [string], start: number, end: number) → ?Transaction>)
  /**
  Create an input rule. The rule applies when the user typed
  something and the text directly in front of the cursor matches
  `match`, which should end with `$`.
  
  The `handler` can be a string, in which case the matched text, or
  the first matched group in the regexp, is replaced by that
  string.
  
  Or a it can be a function, which will be called with the match
  array produced by
  [`RegExp.exec`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec),
  as well as the start and end of the matched range, and which can
  return a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) that describes the
  rule's effect, or null to indicate the input was not handled.
  */
  constructor(
  /**
  @internal
  */
  match, handler, options = {}) {
    this.match = match;
    this.match = match;
    this.handler = typeof handler == "string" ? stringHandler(handler) : handler;
    this.undoable = options.undoable !== false;
    this.inCode = options.inCode || false;
  }
}
function stringHandler(string) {
  return function (state, match, start, end) {
    let insert = string;
    if (match[1]) {
      let offset = match[0].lastIndexOf(match[1]);
      insert += match[0].slice(offset + match[1].length);
      start += offset;
      let cutOff = start - end;
      if (cutOff > 0) {
        insert = match[0].slice(offset - cutOff, offset) + insert;
        start = end;
      }
    }
    return state.tr.insertText(insert, start, end);
  };
}
const MAX_MATCH = 500;
/**
Create an input rules plugin. When enabled, it will cause text
input that matches any of the given rules to trigger the rule's
action.
*/
function inputRules({
  rules
}) {
  let plugin = new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({
    state: {
      init() {
        return null;
      },
      apply(tr, prev) {
        let stored = tr.getMeta(this);
        if (stored) return stored;
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from, to, text) {
        return run(view, from, to, text, rules, plugin);
      },
      handleDOMEvents: {
        compositionend: view => {
          setTimeout(() => {
            let {
              $cursor
            } = view.state.selection;
            if ($cursor) run(view, $cursor.pos, $cursor.pos, "", rules, plugin);
          });
        }
      }
    },
    isInputRules: true
  });
  return plugin;
}
function run(view, from, to, text, rules, plugin) {
  if (view.composing) return false;
  let state = view.state,
    $from = state.doc.resolve(from);
  let textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, "\ufffc") + text;
  for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    if ($from.parent.type.spec.code) {
      if (!rule.inCode) continue;
    } else if (rule.inCode === "only") {
      continue;
    }
    let match = rule.match.exec(textBefore);
    let tr = match && rule.handler(state, match, from - (match[0].length - text.length), to);
    if (!tr) continue;
    if (rule.undoable) tr.setMeta(plugin, {
      transform: tr,
      from,
      to,
      text
    });
    view.dispatch(tr);
    return true;
  }
  return false;
}
/**
This is a command that will undo an input rule, if applying such a
rule was the last thing that the user did.
*/
const undoInputRule = (state, dispatch) => {
  let plugins = state.plugins;
  for (let i = 0; i < plugins.length; i++) {
    let plugin = plugins[i],
      undoable;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        let tr = state.tr,
          toUndo = undoable.transform;
        for (let j = toUndo.steps.length - 1; j >= 0; j--) tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        if (undoable.text) {
          let marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr.delete(undoable.from, undoable.to);
        }
        dispatch(tr);
      }
      return true;
    }
  }
  return false;
};

/**
Converts double dashes to an emdash.
*/
const emDash = new InputRule(/--$/, "—");
/**
Converts three dots to an ellipsis character.
*/
const ellipsis = new InputRule(/\.\.\.$/, "…");
/**
“Smart” opening double quotes.
*/
const openDoubleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“");
/**
“Smart” closing double quotes.
*/
const closeDoubleQuote = new InputRule(/"$/, "”");
/**
“Smart” opening single quotes.
*/
const openSingleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘");
/**
“Smart” closing single quotes.
*/
const closeSingleQuote = new InputRule(/'$/, "’");
/**
Smart-quote related input rules.
*/
const smartQuotes = [openDoubleQuote, closeDoubleQuote, openSingleQuote, closeSingleQuote];

/**
Build an input rule for automatically wrapping a textblock when a
given string is typed. The `regexp` argument is
directly passed through to the `InputRule` constructor. You'll
probably want the regexp to start with `^`, so that the pattern can
only occur at the start of a textblock.

`nodeType` is the type of node to wrap in. If it needs attributes,
you can either pass them directly, or pass a function that will
compute them from the regular expression match.

By default, if there's a node with the same type above the newly
wrapped node, the rule will try to [join](https://prosemirror.net/docs/ref/#transform.Transform.join) those
two nodes. You can pass a join predicate, which takes a regular
expression match and the node before the wrapped node, and can
return a boolean to indicate whether a join should happen.
*/
function wrappingInputRule(regexp, nodeType, getAttrs = null, joinPredicate) {
  return new InputRule(regexp, (state, match, start, end) => {
    let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    let tr = state.tr.delete(start, end);
    let $start = tr.doc.resolve(start),
      range = $start.blockRange(),
      wrapping = range && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.findWrapping)(range, nodeType, attrs);
    if (!wrapping) return null;
    tr.wrap(range, wrapping);
    let before = tr.doc.resolve(start - 1).nodeBefore;
    if (before && before.type == nodeType && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canJoin)(tr.doc, start - 1) && (!joinPredicate || joinPredicate(match, before))) tr.join(start - 1);
    return tr;
  });
}
/**
Build an input rule that changes the type of a textblock when the
matched text is typed into it. You'll usually want to start your
regexp with `^` to that it is only matched at the start of a
textblock. The optional `getAttrs` parameter can be used to compute
the new node's attributes, and works the same as in the
`wrappingInputRule` function.
*/
function textblockTypeInputRule(regexp, nodeType, getAttrs = null) {
  return new InputRule(regexp, (state, match, start, end) => {
    let $start = state.doc.resolve(start);
    let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType)) return null;
    return state.tr.delete(start, end).setBlockType(start, start, nodeType, attrs);
  });
}


/***/ }),

/***/ 879:
/*!*******************************************************!*\
  !*** ./node_modules/prosemirror-keymap/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keydownHandler: () => (/* binding */ keydownHandler),
/* harmony export */   keymap: () => (/* binding */ keymap)
/* harmony export */ });
/* harmony import */ var w3c_keyname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! w3c-keyname */ 1500);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ 7195);


const mac = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;
function normalizeKeyName(name) {
  let parts = name.split(/-(?!$)/),
    result = parts[parts.length - 1];
  if (result == "Space") result = " ";
  let alt, ctrl, shift, meta;
  for (let i = 0; i < parts.length - 1; i++) {
    let mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;else if (/^a(lt)?$/i.test(mod)) alt = true;else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;else if (/^s(hift)?$/i.test(mod)) shift = true;else if (/^mod$/i.test(mod)) {
      if (mac) meta = true;else ctrl = true;
    } else throw new Error("Unrecognized modifier name: " + mod);
  }
  if (alt) result = "Alt-" + result;
  if (ctrl) result = "Ctrl-" + result;
  if (meta) result = "Meta-" + result;
  if (shift) result = "Shift-" + result;
  return result;
}
function normalize(map) {
  let copy = Object.create(null);
  for (let prop in map) copy[normalizeKeyName(prop)] = map[prop];
  return copy;
}
function modifiers(name, event, shift = true) {
  if (event.altKey) name = "Alt-" + name;
  if (event.ctrlKey) name = "Ctrl-" + name;
  if (event.metaKey) name = "Meta-" + name;
  if (shift && event.shiftKey) name = "Shift-" + name;
  return name;
}
/**
Create a keymap plugin for the given set of bindings.

Bindings should map key names to [command](https://prosemirror.net/docs/ref/#commands)-style
functions, which will be called with `(EditorState, dispatch,
EditorView)` arguments, and should return true when they've handled
the key. Note that the view argument isn't part of the command
protocol, but can be used as an escape hatch if a binding needs to
directly interact with the UI.

Key names may be strings like `"Shift-Ctrl-Enter"`—a key
identifier prefixed with zero or more modifiers. Key identifiers
are based on the strings that can appear in
[`KeyEvent.key`](https:developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).
Use lowercase letters to refer to letter keys (or uppercase letters
if you want shift to be held). You may use `"Space"` as an alias
for the `" "` name.

Modifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or
`a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or
`Meta-`) are recognized. For characters that are created by holding
shift, the `Shift-` prefix is implied, and should not be added
explicitly.

You can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on
other platforms.

You can add multiple keymap plugins to an editor. The order in
which they appear determines their precedence (the ones early in
the array get to dispatch first).
*/
function keymap(bindings) {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
    props: {
      handleKeyDown: keydownHandler(bindings)
    }
  });
}
/**
Given a set of bindings (using the same format as
[`keymap`](https://prosemirror.net/docs/ref/#keymap.keymap)), return a [keydown
handler](https://prosemirror.net/docs/ref/#view.EditorProps.handleKeyDown) that handles them.
*/
function keydownHandler(bindings) {
  let map = normalize(bindings);
  return function (view, event) {
    let name = (0,w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.keyName)(event),
      baseName,
      direct = map[modifiers(name, event)];
    if (direct && direct(view.state, view.dispatch, view)) return true;
    // A character key
    if (name.length == 1 && name != " ") {
      if (event.shiftKey) {
        // In case the name was already modified by shift, try looking
        // it up without its shift modifier
        let noShift = map[modifiers(name, event, false)];
        if (noShift && noShift(view.state, view.dispatch, view)) return true;
      }
      if ((event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.base[event.keyCode]) && baseName != name) {
        // Try falling back to the keyCode when there's a modifier
        // active or the character produced isn't ASCII, and our table
        // produces a different name from the the keyCode. See #668,
        // #1060
        let fromCode = map[modifiers(baseName, event)];
        if (fromCode && fromCode(view.state, view.dispatch, view)) return true;
      }
    }
    return false;
  };
}


/***/ }),

/***/ 6375:
/*!******************************************************!*\
  !*** ./node_modules/prosemirror-model/dist/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentMatch: () => (/* binding */ ContentMatch),
/* harmony export */   DOMParser: () => (/* binding */ DOMParser),
/* harmony export */   DOMSerializer: () => (/* binding */ DOMSerializer),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   Mark: () => (/* binding */ Mark),
/* harmony export */   MarkType: () => (/* binding */ MarkType),
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   NodeRange: () => (/* binding */ NodeRange),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   ReplaceError: () => (/* binding */ ReplaceError),
/* harmony export */   ResolvedPos: () => (/* binding */ ResolvedPos),
/* harmony export */   Schema: () => (/* binding */ Schema),
/* harmony export */   Slice: () => (/* binding */ Slice)
/* harmony export */ });
/* harmony import */ var orderedmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orderedmap */ 4460);

function findDiffStart(a, b, pos) {
  for (let i = 0;; i++) {
    if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
    let childA = a.child(i),
      childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB)) return pos;
    if (childA.isText && childA.text != childB.text) {
      for (let j = 0; childA.text[j] == childB.text[j]; j++) pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) return inner;
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (let iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0) return iA == iB ? null : {
      a: posA,
      b: posB
    };
    let childA = a.child(--iA),
      childB = b.child(--iB),
      size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB)) return {
      a: posA,
      b: posB
    };
    if (childA.isText && childA.text != childB.text) {
      let same = 0,
        minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return {
        a: posA,
        b: posB
      };
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) return inner;
    }
    posA -= size;
    posB -= size;
  }
}

/**
A fragment represents a node's collection of child nodes.

Like nodes, fragments are persistent data structures, and you
should not mutate them or their content. Rather, you create new
instances whenever needed. The API tries to make this easy.
*/
class Fragment {
  /**
  @internal
  */
  constructor(
  /**
  @internal
  */
  content, size) {
    this.content = content;
    this.size = size || 0;
    if (size == null) for (let i = 0; i < content.length; i++) this.size += content[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(from, to, f, nodeStart = 0, parent) {
    for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i],
        end = pos + child.nodeSize;
      if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
        let start = pos + 1;
        child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
      }
      pos = end;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(f) {
    this.nodesBetween(0, this.size, f);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(from, to, blockSeparator, leafText) {
    let text = "",
      first = true;
    this.nodesBetween(from, to, (node, pos) => {
      let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
      if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
        if (first) first = false;else text += blockSeparator;
      }
      text += nodeText;
    }, 0);
    return text;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(other) {
    if (!other.size) return this;
    if (!this.size) return other;
    let last = this.lastChild,
      first = other.firstChild,
      content = this.content.slice(),
      i = 0;
    if (last.isText && last.sameMarkup(first)) {
      content[content.length - 1] = last.withText(last.text + first.text);
      i = 1;
    }
    for (; i < other.content.length; i++) content.push(other.content[i]);
    return new Fragment(content, this.size + other.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(from, to = this.size) {
    if (from == 0 && to == this.size) return this;
    let result = [],
      size = 0;
    if (to > from) for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i],
        end = pos + child.nodeSize;
      if (end > from) {
        if (pos < from || end > to) {
          if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
        }
        result.push(child);
        size += child.nodeSize;
      }
      pos = end;
    }
    return new Fragment(result, size);
  }
  /**
  @internal
  */
  cutByIndex(from, to) {
    if (from == to) return Fragment.empty;
    if (from == 0 && to == this.content.length) return this;
    return new Fragment(this.content.slice(from, to));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(index, node) {
    let current = this.content[index];
    if (current == node) return this;
    let copy = this.content.slice();
    let size = this.size + node.nodeSize - current.nodeSize;
    copy[index] = node;
    return new Fragment(copy, size);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(node) {
    return new Fragment([node].concat(this.content), this.size + node.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(node) {
    return new Fragment(this.content.concat(node), this.size + node.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(other) {
    if (this.content.length != other.content.length) return false;
    for (let i = 0; i < this.content.length; i++) if (!this.content[i].eq(other.content[i])) return false;
    return true;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(index) {
    let found = this.content[index];
    if (!found) throw new RangeError("Index " + index + " out of range for " + this);
    return found;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content[index] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    for (let i = 0, p = 0; i < this.content.length; i++) {
      let child = this.content[i];
      f(child, p, i);
      p += child.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(other, pos = 0) {
    return findDiffStart(this, other, pos);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(other, pos = this.size, otherPos = other.size) {
    return findDiffEnd(this, other, pos, otherPos);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(pos, round = -1) {
    if (pos == 0) return retIndex(0, pos);
    if (pos == this.size) return retIndex(this.content.length, pos);
    if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
    for (let i = 0, curPos = 0;; i++) {
      let cur = this.child(i),
        end = curPos + cur.nodeSize;
      if (end >= pos) {
        if (end == pos || round > 0) return retIndex(i + 1, end);
        return retIndex(i, curPos);
      }
      curPos = end;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map(n => n.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(schema, value) {
    if (!value) return Fragment.empty;
    if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
    return new Fragment(value.map(schema.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(array) {
    if (!array.length) return Fragment.empty;
    let joined,
      size = 0;
    for (let i = 0; i < array.length; i++) {
      let node = array[i];
      size += node.nodeSize;
      if (i && node.isText && array[i - 1].sameMarkup(node)) {
        if (!joined) joined = array.slice(0, i);
        joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
      } else if (joined) {
        joined.push(node);
      }
    }
    return new Fragment(joined || array, size);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(nodes) {
    if (!nodes) return Fragment.empty;
    if (nodes instanceof Fragment) return nodes;
    if (Array.isArray(nodes)) return this.fromArray(nodes);
    if (nodes.attrs) return new Fragment([nodes], nodes.nodeSize);
    throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
/**
An empty fragment. Intended to be reused whenever a node doesn't
contain anything (rather than allocating a new empty fragment for
each leaf node).
*/
Fragment.empty = new Fragment([], 0);
const found = {
  index: 0,
  offset: 0
};
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found;
}
function compareDeep(a, b) {
  if (a === b) return true;
  if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
  let array = Array.isArray(a);
  if (Array.isArray(b) != array) return false;
  if (array) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!compareDeep(a[i], b[i])) return false;
  } else {
    for (let p in a) if (!(p in b) || !compareDeep(a[p], b[p])) return false;
    for (let p in b) if (!(p in a)) return false;
  }
  return true;
}

/**
A mark is a piece of information that can be attached to a node,
such as it being emphasized, in code font, or a link. It has a
type and optionally a set of attributes that provide further
information (such as the target of the link). Marks are created
through a `Schema`, which controls which types exist and which
attributes they have.
*/
class Mark {
  /**
  @internal
  */
  constructor(
  /**
  The type of this mark.
  */
  type,
  /**
  The attributes associated with this mark.
  */
  attrs) {
    this.type = type;
    this.attrs = attrs;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(set) {
    let copy,
      placed = false;
    for (let i = 0; i < set.length; i++) {
      let other = set[i];
      if (this.eq(other)) return set;
      if (this.type.excludes(other.type)) {
        if (!copy) copy = set.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy) copy = set.slice(0, i);
          copy.push(this);
          placed = true;
        }
        if (copy) copy.push(other);
      }
    }
    if (!copy) copy = set.slice();
    if (!placed) copy.push(this);
    return copy;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
    return set;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return true;
    return false;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(other) {
    return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(schema, json) {
    if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
    let type = schema.marks[json.type];
    if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
    return type.create(json.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(a, b) {
    if (a == b) return true;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
    return true;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(marks) {
    if (!marks || Array.isArray(marks) && marks.length == 0) return Mark.none;
    if (marks instanceof Mark) return [marks];
    let copy = marks.slice();
    copy.sort((a, b) => a.type.rank - b.type.rank);
    return copy;
  }
}
/**
The empty set of marks.
*/
Mark.none = [];

/**
Error type raised by [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) when
given an invalid replacement.
*/
class ReplaceError extends Error {}
/*
ReplaceError = function(this: any, message: string) {
  let err = Error.call(this, message)
  ;(err as any).__proto__ = ReplaceError.prototype
  return err
} as any

ReplaceError.prototype = Object.create(Error.prototype)
ReplaceError.prototype.constructor = ReplaceError
ReplaceError.prototype.name = "ReplaceError"
*/
/**
A slice represents a piece cut out of a larger document. It
stores not only a fragment, but also the depth up to which nodes on
both side are ‘open’ (cut through).
*/
class Slice {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(
  /**
  The slice's content.
  */
  content,
  /**
  The open depth at the start of the fragment.
  */
  openStart,
  /**
  The open depth at the end.
  */
  openEnd) {
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(pos, fragment) {
    let content = insertInto(this.content, pos + this.openStart, fragment);
    return content && new Slice(content, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(from, to) {
    return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(other) {
    return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size) return null;
    let json = {
      content: this.content.toJSON()
    };
    if (this.openStart > 0) json.openStart = this.openStart;
    if (this.openEnd > 0) json.openEnd = this.openEnd;
    return json;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json) return Slice.empty;
    let openStart = json.openStart || 0,
      openEnd = json.openEnd || 0;
    if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
    return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(fragment, openIsolating = true) {
    let openStart = 0,
      openEnd = 0;
    for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) openStart++;
    for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild) openEnd++;
    return new Slice(fragment, openStart, openEnd);
  }
}
/**
The empty slice.
*/
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
  let {
      index,
      offset
    } = content.findIndex(from),
    child = content.maybeChild(index);
  let {
    index: indexTo,
    offset: offsetTo
  } = content.findIndex(to);
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
    return content.cut(0, from).append(content.cut(to));
  }
  if (index != indexTo) throw new RangeError("Removing non-flat range");
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, parent) {
  let {
      index,
      offset
    } = content.findIndex(dist),
    child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  let inner = insertInto(child.content, dist - offset - 1, insert);
  return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
  if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
  let index = $from.index(depth),
    node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    let inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    // Simple, flat case
    let parent = $from.parent,
      content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    let {
      start,
      end
    } = prepareSliceForReplace(slice, $from);
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}
function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
  let node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  let last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);else target.push(child);
}
function addRange($start, $end, depth, target) {
  let node = ($end || $start).node(depth);
  let startIndex = 0,
    endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (let i = startIndex; i < endIndex; i++) addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  let content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  let content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    let type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
  let extra = $along.depth - slice.openStart,
    parent = $along.node(extra);
  let node = parent.copy(slice.content);
  for (let i = extra - 1; i >= 0; i--) node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
}

/**
You can [_resolve_](https://prosemirror.net/docs/ref/#model.Node.resolve) a position to get more
information about it. Objects of this class represent such a
resolved position, providing various pieces of context
information, and some helper methods.

Throughout this interface, methods that take an optional `depth`
parameter will interpret undefined as `this.depth` and negative
numbers as `this.depth + value`.
*/
class ResolvedPos {
  /**
  @internal
  */
  constructor(
  /**
  The position that was resolved.
  */
  pos,
  /**
  @internal
  */
  path,
  /**
  The offset this position has into its parent node.
  */
  parentOffset) {
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(val) {
    if (val == null) return this.depth;
    if (val < 0) return this.depth + val;
    return val;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(depth) {
    return this.path[this.resolveDepth(depth) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(depth) {
    return this.path[this.resolveDepth(depth) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(depth) {
    depth = this.resolveDepth(depth);
    return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(depth) {
    depth = this.resolveDepth(depth);
    return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(depth) {
    depth = this.resolveDepth(depth);
    return this.start(depth) + this.node(depth).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position before the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position after the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let parent = this.parent,
      index = this.index(this.depth);
    if (index == parent.childCount) return null;
    let dOff = this.pos - this.path[this.path.length - 1],
      child = parent.child(index);
    return dOff ? parent.child(index).cut(dOff) : child;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let index = this.index(this.depth);
    let dOff = this.pos - this.path[this.path.length - 1];
    if (dOff) return this.parent.child(index).cut(0, dOff);
    return index == 0 ? null : this.parent.child(index - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(index, depth) {
    depth = this.resolveDepth(depth);
    let node = this.path[depth * 3],
      pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    for (let i = 0; i < index; i++) pos += node.child(i).nodeSize;
    return pos;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let parent = this.parent,
      index = this.index();
    // In an empty parent, return the empty array
    if (parent.content.size == 0) return Mark.none;
    // When inside a text node, just return the text node's marks
    if (this.textOffset) return parent.child(index).marks;
    let main = parent.maybeChild(index - 1),
      other = parent.maybeChild(index);
    // If the `after` flag is true of there is no node before, make
    // the node after this position the main reference.
    if (!main) {
      let tmp = main;
      main = other;
      other = tmp;
    }
    // Use all marks in the main node, except those that have
    // `inclusive` set to false and are not present in the other node.
    let marks = main.marks;
    for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross($end) {
    let after = this.parent.maybeChild(this.index());
    if (!after || !after.isInline) return null;
    let marks = after.marks,
      next = $end.parent.maybeChild($end.index());
    for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(pos) {
    for (let depth = this.depth; depth > 0; depth--) if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(other = this, pred) {
    if (other.pos < this.pos) return other.blockRange(this);
    for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(other) {
    return this.pos - this.parentOffset == other.pos - other.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(other) {
    return other.pos > this.pos ? other : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(other) {
    return other.pos < this.pos ? other : this;
  }
  /**
  @internal
  */
  toString() {
    let str = "";
    for (let i = 1; i <= this.depth; i++) str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
    return str + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(doc, pos) {
    if (!(pos >= 0 && pos <= doc.content.size)) throw new RangeError("Position " + pos + " out of range");
    let path = [];
    let start = 0,
      parentOffset = pos;
    for (let node = doc;;) {
      let {
        index,
        offset
      } = node.content.findIndex(parentOffset);
      let rem = parentOffset - offset;
      path.push(node, index, start + offset);
      if (!rem) break;
      node = node.child(index);
      if (node.isText) break;
      parentOffset = rem - 1;
      start += offset + 1;
    }
    return new ResolvedPos(pos, path, parentOffset);
  }
  /**
  @internal
  */
  static resolveCached(doc, pos) {
    for (let i = 0; i < resolveCache.length; i++) {
      let cached = resolveCache[i];
      if (cached.pos == pos && cached.doc == doc) return cached;
    }
    let result = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc, pos);
    resolveCachePos = (resolveCachePos + 1) % resolveCacheSize;
    return result;
  }
}
let resolveCache = [],
  resolveCachePos = 0,
  resolveCacheSize = 12;
/**
Represents a flat range of content, i.e. one that starts and
ends in the same node.
*/
class NodeRange {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(
  /**
  A resolved position along the start of the content. May have a
  `depth` greater than this object's `depth` property, since
  these are the positions that were used to compute the range,
  not re-resolved positions directly at its boundaries.
  */
  $from,
  /**
  A position along the end of the content. See
  caveat for [`$from`](https://prosemirror.net/docs/ref/#model.NodeRange.$from).
  */
  $to,
  /**
  The depth of the node that this range points into.
  */
  depth) {
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const emptyAttrs = Object.create(null);
/**
This class represents a node in the tree that makes up a
ProseMirror document. So a document is an instance of `Node`, with
children that are also instances of `Node`.

Nodes are persistent data structures. Instead of changing them, you
create new ones with the content you want. Old ones keep pointing
at the old document shape. This is made cheaper by sharing
structure between the old and new data as much as possible, which a
tree shape like this (without back pointers) makes easy.

**Do not** directly mutate the properties of a `Node` object. See
[the guide](/docs/guide/#doc) for more information.
*/
class Node {
  /**
  @internal
  */
  constructor(
  /**
  The type of node that this is.
  */
  type,
  /**
  An object mapping attribute names to values. The kind of
  attributes allowed and required are
  [determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.
  */
  attrs,
  // A fragment holding the node's children.
  content,
  /**
  The marks (things like whether it is emphasized or part of a
  link) applied to this node.
  */
  marks = Mark.none) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.content = content || Fragment.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(index) {
    return this.content.child(index);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content.maybeChild(index);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    this.content.forEach(f);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(from, to, f, startPos = 0) {
    this.content.nodesBetween(from, to, f, startPos, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(f) {
    this.nodesBetween(0, this.content.size, f);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(from, to, blockSeparator, leafText) {
    return this.content.textBetween(from, to, blockSeparator, leafText);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(other) {
    return this == other || this.sameMarkup(other) && this.content.eq(other.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(other) {
    return this.hasMarkup(other.type, other.attrs, other.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(type, attrs, marks) {
    return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(content = null) {
    if (content == this.content) return this;
    return new Node(this.type, this.attrs, content, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(marks) {
    return marks == this.marks ? this : new Node(this.type, this.attrs, this.content, marks);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(from, to = this.content.size) {
    if (from == 0 && to == this.content.size) return this;
    return this.copy(this.content.cut(from, to));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(from, to = this.content.size, includeParents = false) {
    if (from == to) return Slice.empty;
    let $from = this.resolve(from),
      $to = this.resolve(to);
    let depth = includeParents ? 0 : $from.sharedDepth(to);
    let start = $from.start(depth),
      node = $from.node(depth);
    let content = node.content.cut($from.pos - start, $to.pos - start);
    return new Slice(content, $from.depth - depth, $to.depth - depth);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(from, to, slice) {
    return replace(this.resolve(from), this.resolve(to), slice);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(pos) {
    for (let node = this;;) {
      let {
        index,
        offset
      } = node.content.findIndex(pos);
      node = node.maybeChild(index);
      if (!node) return null;
      if (offset == pos || node.isText) return node;
      pos -= offset + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(pos) {
    let {
      index,
      offset
    } = this.content.findIndex(pos);
    return {
      node: this.content.maybeChild(index),
      index,
      offset
    };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(pos) {
    if (pos == 0) return {
      node: null,
      index: 0,
      offset: 0
    };
    let {
      index,
      offset
    } = this.content.findIndex(pos);
    if (offset < pos) return {
      node: this.content.child(index),
      index,
      offset
    };
    let node = this.content.child(index - 1);
    return {
      node,
      index: index - 1,
      offset: offset - node.nodeSize
    };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(pos) {
    return ResolvedPos.resolveCached(this, pos);
  }
  /**
  @internal
  */
  resolveNoCache(pos) {
    return ResolvedPos.resolve(this, pos);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(from, to, type) {
    let found = false;
    if (to > from) this.nodesBetween(from, to, node => {
      if (type.isInSet(node.marks)) found = true;
      return !found;
    });
    return found;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    let name = this.type.name;
    if (this.content.size) name += "(" + this.content.toStringInner() + ")";
    return wrapMarks(this.marks, name);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(index) {
    let match = this.type.contentMatch.matchFragment(this.content, 0, index);
    if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
    return match;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
    let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
    let two = one && one.matchFragment(this.content, to);
    if (!two || !two.validEnd) return false;
    for (let i = start; i < end; i++) if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
    return true;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(from, to, type, marks) {
    if (marks && !this.type.allowsMarks(marks)) return false;
    let start = this.contentMatchAt(from).matchType(type);
    let end = start && start.matchFragment(this.content, to);
    return end ? end.validEnd : false;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(other) {
    if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);else return this.type.compatibleContent(other.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let copy = Mark.none;
    for (let i = 0; i < this.marks.length; i++) copy = this.marks[i].addToSet(copy);
    if (!Mark.sameSet(copy, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(m => m.type.name)}`);
    this.content.forEach(node => node.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    if (this.content.size) obj.content = this.content.toJSON();
    if (this.marks.length) obj.marks = this.marks.map(n => n.toJSON());
    return obj;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json) throw new RangeError("Invalid input for Node.fromJSON");
    let marks = null;
    if (json.marks) {
      if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
      marks = json.marks.map(schema.markFromJSON);
    }
    if (json.type == "text") {
      if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
      return schema.text(json.text, marks);
    }
    let content = Fragment.fromJSON(schema, json.content);
    return schema.nodeType(json.type).create(json.attrs, content, marks);
  }
}
Node.prototype.text = undefined;
class TextNode extends Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks) {
    super(type, attrs, null, marks);
    if (!content) throw new RangeError("Empty text nodes are not allowed");
    this.text = content;
  }
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    return wrapMarks(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(from, to) {
    return this.text.slice(from, to);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(marks) {
    return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
  }
  withText(text) {
    if (text == this.text) return this;
    return new TextNode(this.type, this.attrs, text, this.marks);
  }
  cut(from = 0, to = this.text.length) {
    if (from == 0 && to == this.text.length) return this;
    return this.withText(this.text.slice(from, to));
  }
  eq(other) {
    return this.sameMarkup(other) && this.text == other.text;
  }
  toJSON() {
    let base = super.toJSON();
    base.text = this.text;
    return base;
  }
}
function wrapMarks(marks, str) {
  for (let i = marks.length - 1; i >= 0; i--) str = marks[i].type.name + "(" + str + ")";
  return str;
}

/**
Instances of this class represent a match state of a node type's
[content expression](https://prosemirror.net/docs/ref/#model.NodeSpec.content), and can be used to
find out whether further content matches here, and whether a given
position is a valid end of the node.
*/
class ContentMatch {
  /**
  @internal
  */
  constructor(
  /**
  True when this match state represents a valid end of the node.
  */
  validEnd) {
    this.validEnd = validEnd;
    /**
    @internal
    */
    this.next = [];
    /**
    @internal
    */
    this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(string, nodeTypes) {
    let stream = new TokenStream(string, nodeTypes);
    if (stream.next == null) return ContentMatch.empty;
    let expr = parseExpr(stream);
    if (stream.next) stream.err("Unexpected trailing text");
    let match = dfa(nfa(expr));
    checkForDeadEnds(match, stream);
    return match;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(type) {
    for (let i = 0; i < this.next.length; i++) if (this.next[i].type == type) return this.next[i].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(frag, start = 0, end = frag.childCount) {
    let cur = this;
    for (let i = start; cur && i < end; i++) cur = cur.matchType(frag.child(i).type);
    return cur;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let i = 0; i < this.next.length; i++) {
      let {
        type
      } = this.next[i];
      if (!(type.isText || type.hasRequiredAttrs())) return type;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(other) {
    for (let i = 0; i < this.next.length; i++) for (let j = 0; j < other.next.length; j++) if (this.next[i].type == other.next[j].type) return true;
    return false;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(after, toEnd = false, startIndex = 0) {
    let seen = [this];
    function search(match, types) {
      let finished = match.matchFragment(after, startIndex);
      if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map(tp => tp.createAndFill()));
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
          seen.push(next);
          let found = search(next, types.concat(type));
          if (found) return found;
        }
      }
      return null;
    }
    return search(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(target) {
    for (let i = 0; i < this.wrapCache.length; i += 2) if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
    let computed = this.computeWrapping(target);
    this.wrapCache.push(target, computed);
    return computed;
  }
  /**
  @internal
  */
  computeWrapping(target) {
    let seen = Object.create(null),
      active = [{
        match: this,
        type: null,
        via: null
      }];
    while (active.length) {
      let current = active.shift(),
        match = current.match;
      if (match.matchType(target)) {
        let result = [];
        for (let obj = current; obj.type; obj = obj.via) result.push(obj.type);
        return result.reverse();
      }
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
          active.push({
            match: type.contentMatch,
            type,
            via: current
          });
          seen[type.name] = true;
        }
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(n) {
    if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
    return this.next[n];
  }
  /**
  @internal
  */
  toString() {
    let seen = [];
    function scan(m) {
      seen.push(m);
      for (let i = 0; i < m.next.length; i++) if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
    }
    scan(this);
    return seen.map((m, i) => {
      let out = i + (m.validEnd ? "*" : " ") + " ";
      for (let i = 0; i < m.next.length; i++) out += (i ? ", " : "") + m.next[i].type.name + "->" + seen.indexOf(m.next[i].next);
      return out;
    }).join("\n");
  }
}
/**
@internal
*/
ContentMatch.empty = new ContentMatch(true);
class TokenStream {
  constructor(string, nodeTypes) {
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
    if (this.tokens[0] == "") this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(tok) {
    return this.next == tok && (this.pos++ || true);
  }
  err(str) {
    throw new SyntaxError(str + " (in content expression '" + this.string + "')");
  }
}
function parseExpr(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : {
    type: "choice",
    exprs
  };
}
function parseExprSeq(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : {
    type: "seq",
    exprs
  };
}
function parseExprSubscript(stream) {
  let expr = parseExprAtom(stream);
  for (;;) {
    if (stream.eat("+")) expr = {
      type: "plus",
      expr
    };else if (stream.eat("*")) expr = {
      type: "star",
      expr
    };else if (stream.eat("?")) expr = {
      type: "opt",
      expr
    };else if (stream.eat("{")) expr = parseExprRange(stream, expr);else break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
  let result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  let min = parseNum(stream),
    max = min;
  if (stream.eat(",")) {
    if (stream.next != "}") max = parseNum(stream);else max = -1;
  }
  if (!stream.eat("}")) stream.err("Unclosed braced range");
  return {
    type: "range",
    min,
    max,
    expr
  };
}
function resolveName(stream, name) {
  let types = stream.nodeTypes,
    type = types[name];
  if (type) return [type];
  let result = [];
  for (let typeName in types) {
    let type = types[typeName];
    if (type.groups.indexOf(name) > -1) result.push(type);
  }
  if (result.length == 0) stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    let expr = parseExpr(stream);
    if (!stream.eat(")")) stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    let exprs = resolveName(stream, stream.next).map(type => {
      if (stream.inline == null) stream.inline = type.isInline;else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
      return {
        type: "name",
        value: type
      };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {
      type: "choice",
      exprs
    };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
/**
Construct an NFA from an expression as returned by the parser. The
NFA is represented as an array of states, which are themselves
arrays of edges, which are `{term, to}` objects. The first state is
the entry state and the last node is the success state.

Note that unlike typical NFAs, the edge ordering in this one is
significant, in that it is used to contruct filler content when
necessary.
*/
function nfa(expr) {
  let nfa = [[]];
  connect(compile(expr, 0), node());
  return nfa;
  function node() {
    return nfa.push([]) - 1;
  }
  function edge(from, to, term) {
    let edge = {
      term,
      to
    };
    nfa[from].push(edge);
    return edge;
  }
  function connect(edges, to) {
    edges.forEach(edge => edge.to = to);
  }
  function compile(expr, from) {
    if (expr.type == "choice") {
      return expr.exprs.reduce((out, expr) => out.concat(compile(expr, from)), []);
    } else if (expr.type == "seq") {
      for (let i = 0;; i++) {
        let next = compile(expr.exprs[i], from);
        if (i == expr.exprs.length - 1) return next;
        connect(next, from = node());
      }
    } else if (expr.type == "star") {
      let loop = node();
      edge(from, loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)];
    } else if (expr.type == "plus") {
      let loop = node();
      connect(compile(expr.expr, from), loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)];
    } else if (expr.type == "opt") {
      return [edge(from)].concat(compile(expr.expr, from));
    } else if (expr.type == "range") {
      let cur = from;
      for (let i = 0; i < expr.min; i++) {
        let next = node();
        connect(compile(expr.expr, cur), next);
        cur = next;
      }
      if (expr.max == -1) {
        connect(compile(expr.expr, cur), cur);
      } else {
        for (let i = expr.min; i < expr.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr.type == "name") {
      return [edge(from, undefined, expr.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nullFrom(nfa, node) {
  let result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node) {
    let edges = nfa[node];
    if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
    result.push(node);
    for (let i = 0; i < edges.length; i++) {
      let {
        term,
        to
      } = edges[i];
      if (!term && result.indexOf(to) == -1) scan(to);
    }
  }
}
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(nfa) {
  let labeled = Object.create(null);
  return explore(nullFrom(nfa, 0));
  function explore(states) {
    let out = [];
    states.forEach(node => {
      nfa[node].forEach(({
        term,
        to
      }) => {
        if (!term) return;
        let set;
        for (let i = 0; i < out.length; i++) if (out[i][0] == term) set = out[i][1];
        nullFrom(nfa, to).forEach(node => {
          if (!set) out.push([term, set = []]);
          if (set.indexOf(node) == -1) set.push(node);
        });
      });
    });
    let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
    for (let i = 0; i < out.length; i++) {
      let states = out[i][1].sort(cmp);
      state.next.push({
        type: out[i][0],
        next: labeled[states.join(",")] || explore(states)
      });
    }
    return state;
  }
}
function checkForDeadEnds(match, stream) {
  for (let i = 0, work = [match]; i < work.length; i++) {
    let state = work[i],
      dead = !state.validEnd,
      nodes = [];
    for (let j = 0; j < state.next.length; j++) {
      let {
        type,
        next
      } = state.next[j];
      nodes.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
      if (work.indexOf(next) == -1) work.push(next);
    }
    if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}

// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(attrs) {
  let defaults = Object.create(null);
  for (let attrName in attrs) {
    let attr = attrs[attrName];
    if (!attr.hasDefault) return null;
    defaults[attrName] = attr.default;
  }
  return defaults;
}
function computeAttrs(attrs, value) {
  let built = Object.create(null);
  for (let name in attrs) {
    let given = value && value[name];
    if (given === undefined) {
      let attr = attrs[name];
      if (attr.hasDefault) given = attr.default;else throw new RangeError("No value supplied for attribute " + name);
    }
    built[name] = given;
  }
  return built;
}
function initAttrs(attrs) {
  let result = Object.create(null);
  if (attrs) for (let name in attrs) result[name] = new Attribute(attrs[name]);
  return result;
}
/**
Node types are objects allocated once per `Schema` and used to
[tag](https://prosemirror.net/docs/ref/#model.Node.type) `Node` instances. They contain information
about the node type, such as its name and what kind of node it
represents.
*/
class NodeType {
  /**
  @internal
  */
  constructor(
  /**
  The name the node type has in this schema.
  */
  name,
  /**
  A link back to the `Schema` the node type belongs to.
  */
  schema,
  /**
  The spec that this type is based on
  */
  spec) {
    this.name = name;
    this.schema = schema;
    this.spec = spec;
    /**
    The set of marks allowed in this node. `null` means all marks
    are allowed.
    */
    this.markSet = null;
    this.groups = spec.group ? spec.group.split(" ") : [];
    this.attrs = initAttrs(spec.attrs);
    this.defaultAttrs = defaultAttrs(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(spec.inline || name == "text");
    this.isText = name == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == ContentMatch.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let n in this.attrs) if (this.attrs[n].isRequired) return true;
    return false;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(other) {
    return this == other || this.contentMatch.compatible(other.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(attrs) {
    if (!attrs && this.defaultAttrs) return this.defaultAttrs;else return computeAttrs(this.attrs, attrs);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(attrs = null, content, marks) {
    if (this.isText) throw new Error("NodeType.create can't construct text nodes");
    return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(attrs = null, content, marks) {
    content = Fragment.from(content);
    this.checkContent(content);
    return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(attrs = null, content, marks) {
    attrs = this.computeAttrs(attrs);
    content = Fragment.from(content);
    if (content.size) {
      let before = this.contentMatch.fillBefore(content);
      if (!before) return null;
      content = before.append(content);
    }
    let matched = this.contentMatch.matchFragment(content);
    let after = matched && matched.fillBefore(Fragment.empty, true);
    if (!after) return null;
    return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(content) {
    let result = this.contentMatch.matchFragment(content);
    if (!result || !result.validEnd) return false;
    for (let i = 0; i < content.childCount; i++) if (!this.allowsMarks(content.child(i).marks)) return false;
    return true;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(content) {
    if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(markType) {
    return this.markSet == null || this.markSet.indexOf(markType) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(marks) {
    if (this.markSet == null) return true;
    for (let i = 0; i < marks.length; i++) if (!this.allowsMarkType(marks[i].type)) return false;
    return true;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(marks) {
    if (this.markSet == null) return marks;
    let copy;
    for (let i = 0; i < marks.length; i++) {
      if (!this.allowsMarkType(marks[i].type)) {
        if (!copy) copy = marks.slice(0, i);
      } else if (copy) {
        copy.push(marks[i]);
      }
    }
    return !copy ? marks : copy.length ? copy : Mark.none;
  }
  /**
  @internal
  */
  static compile(nodes, schema) {
    let result = Object.create(null);
    nodes.forEach((name, spec) => result[name] = new NodeType(name, schema, spec));
    let topType = schema.spec.topNode || "doc";
    if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
    if (!result.text) throw new RangeError("Every schema needs a 'text' type");
    for (let _ in result.text.attrs) throw new RangeError("The text node type should not have attributes");
    return result;
  }
}
// Attribute descriptors
class Attribute {
  constructor(options) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
    this.default = options.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
// Marks
/**
Like nodes, marks (which are associated with nodes to signify
things like emphasis or being part of a link) are
[tagged](https://prosemirror.net/docs/ref/#model.Mark.type) with type objects, which are
instantiated once per `Schema`.
*/
class MarkType {
  /**
  @internal
  */
  constructor(
  /**
  The name of the mark type.
  */
  name,
  /**
  @internal
  */
  rank,
  /**
  The schema that this mark type instance is part of.
  */
  schema,
  /**
  The spec on which the type is based.
  */
  spec) {
    this.name = name;
    this.rank = rank;
    this.schema = schema;
    this.spec = spec;
    this.attrs = initAttrs(spec.attrs);
    this.excluded = null;
    let defaults = defaultAttrs(this.attrs);
    this.instance = defaults ? new Mark(this, defaults) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(attrs = null) {
    if (!attrs && this.instance) return this.instance;
    return new Mark(this, computeAttrs(this.attrs, attrs));
  }
  /**
  @internal
  */
  static compile(marks, schema) {
    let result = Object.create(null),
      rank = 0;
    marks.forEach((name, spec) => result[name] = new MarkType(name, rank++, schema, spec));
    return result;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(set) {
    for (var i = 0; i < set.length; i++) if (set[i].type == this) {
      set = set.slice(0, i).concat(set.slice(i + 1));
      i--;
    }
    return set;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (set[i].type == this) return set[i];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(other) {
    return this.excluded.indexOf(other) > -1;
  }
}
/**
A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark
type](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may
occur in conforming documents, and provides functionality for
creating and deserializing such documents.

When given, the type parameters provide the names of the nodes and
marks in this schema.
*/
class Schema {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(spec) {
    /**
    The [linebreak
    replacement](https://prosemirror.net/docs/ref/#model.NodeSpec.linebreakReplacement) node defined
    in this schema, if any.
    */
    this.linebreakReplacement = null;
    /**
    An object for storing whatever values modules may want to
    compute and cache per schema. (If you want to store something
    in it, try to use property names unlikely to clash.)
    */
    this.cached = Object.create(null);
    let instanceSpec = this.spec = {};
    for (let prop in spec) instanceSpec[prop] = spec[prop];
    instanceSpec.nodes = orderedmap__WEBPACK_IMPORTED_MODULE_0__["default"].from(spec.nodes), instanceSpec.marks = orderedmap__WEBPACK_IMPORTED_MODULE_0__["default"].from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
    this.marks = MarkType.compile(this.spec.marks, this);
    let contentExprCache = Object.create(null);
    for (let prop in this.nodes) {
      if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
      let type = this.nodes[prop],
        contentExpr = type.spec.content || "",
        markExpr = type.spec.marks;
      type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
      type.inlineContent = type.contentMatch.inlineContent;
      if (type.spec.linebreakReplacement) {
        if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
        if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = type;
      }
      type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
    }
    for (let prop in this.marks) {
      let type = this.marks[prop],
        excl = type.spec.excludes;
      type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this);
    this.markFromJSON = this.markFromJSON.bind(this);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(type, attrs = null, content, marks) {
    if (typeof type == "string") type = this.nodeType(type);else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
    return type.createChecked(attrs, content, marks);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(text, marks) {
    let type = this.nodes.text;
    return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(type, attrs) {
    if (typeof type == "string") type = this.marks[type];
    return type.create(attrs);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(json) {
    return Node.fromJSON(this, json);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(json) {
    return Mark.fromJSON(this, json);
  }
  /**
  @internal
  */
  nodeType(name) {
    let found = this.nodes[name];
    if (!found) throw new RangeError("Unknown node type: " + name);
    return found;
  }
}
function gatherMarks(schema, marks) {
  let found = [];
  for (let i = 0; i < marks.length; i++) {
    let name = marks[i],
      mark = schema.marks[name],
      ok = mark;
    if (mark) {
      found.push(mark);
    } else {
      for (let prop in schema.marks) {
        let mark = schema.marks[prop];
        if (name == "_" || mark.spec.group && mark.spec.group.split(" ").indexOf(name) > -1) found.push(ok = mark);
      }
    }
    if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
  }
  return found;
}
function isTagRule(rule) {
  return rule.tag != null;
}
function isStyleRule(rule) {
  return rule.style != null;
}
/**
A DOM parser represents a strategy for parsing DOM content into a
ProseMirror document conforming to a given schema. Its behavior is
defined by an array of [rules](https://prosemirror.net/docs/ref/#model.ParseRule).
*/
class DOMParser {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(
  /**
  The schema into which the parser parses.
  */
  schema,
  /**
  The set of [parse rules](https://prosemirror.net/docs/ref/#model.ParseRule) that the parser
  uses, in order of precedence.
  */
  rules) {
    this.schema = schema;
    this.rules = rules;
    /**
    @internal
    */
    this.tags = [];
    /**
    @internal
    */
    this.styles = [];
    rules.forEach(rule => {
      if (isTagRule(rule)) this.tags.push(rule);else if (isStyleRule(rule)) this.styles.push(rule);
    });
    // Only normalize list elements when lists in the schema can't directly contain themselves
    this.normalizeLists = !this.tags.some(r => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
      let node = schema.nodes[r.node];
      return node.contentMatch.matchType(node);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(dom, options = {}) {
    let context = new ParseContext(this, options, false);
    context.addAll(dom, options.from, options.to);
    return context.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(dom, options = {}) {
    let context = new ParseContext(this, options, true);
    context.addAll(dom, options.from, options.to);
    return Slice.maxOpen(context.finish());
  }
  /**
  @internal
  */
  matchTag(dom, context, after) {
    for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
      let rule = this.tags[i];
      if (matches(dom, rule.tag) && (rule.namespace === undefined || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
        if (rule.getAttrs) {
          let result = rule.getAttrs(dom);
          if (result === false) continue;
          rule.attrs = result || undefined;
        }
        return rule;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(prop, value, context, after) {
    for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
      let rule = this.styles[i],
        style = rule.style;
      if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) ||
      // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
      if (rule.getAttrs) {
        let result = rule.getAttrs(value);
        if (result === false) continue;
        rule.attrs = result || undefined;
      }
      return rule;
    }
  }
  /**
  @internal
  */
  static schemaRules(schema) {
    let result = [];
    function insert(rule) {
      let priority = rule.priority == null ? 50 : rule.priority,
        i = 0;
      for (; i < result.length; i++) {
        let next = result[i],
          nextPriority = next.priority == null ? 50 : next.priority;
        if (nextPriority < priority) break;
      }
      result.splice(i, 0, rule);
    }
    for (let name in schema.marks) {
      let rules = schema.marks[name].spec.parseDOM;
      if (rules) rules.forEach(rule => {
        insert(rule = copy(rule));
        if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
      });
    }
    for (let name in schema.nodes) {
      let rules = schema.nodes[name].spec.parseDOM;
      if (rules) rules.forEach(rule => {
        insert(rule = copy(rule));
        if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
      });
    }
    return result;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(schema) {
    return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
  }
}
const blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
const ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
const listTags = {
  ol: true,
  ul: true
};
// Using a bitfield for node context options
const OPT_PRESERVE_WS = 1,
  OPT_PRESERVE_WS_FULL = 2,
  OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
  if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
class NodeContext {
  constructor(type, attrs,
  // Marks applied to this node itself
  marks,
  // Marks that can't apply here, but will be used in children if possible
  pendingMarks, solid, match, options) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.pendingMarks = pendingMarks;
    this.solid = solid;
    this.options = options;
    this.content = [];
    // Marks applied to the node's children
    this.activeMarks = Mark.none;
    // Nested Marks with same type
    this.stashMarks = [];
    this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  }
  findWrapping(node) {
    if (!this.match) {
      if (!this.type) return [];
      let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
      if (fill) {
        this.match = this.type.contentMatch.matchFragment(fill);
      } else {
        let start = this.type.contentMatch,
          wrap;
        if (wrap = start.findWrapping(node.type)) {
          this.match = start;
          return wrap;
        } else {
          return null;
        }
      }
    }
    return this.match.findWrapping(node.type);
  }
  finish(openEnd) {
    if (!(this.options & OPT_PRESERVE_WS)) {
      // Strip trailing whitespace
      let last = this.content[this.content.length - 1],
        m;
      if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
        let text = last;
        if (last.text.length == m[0].length) this.content.pop();else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
      }
    }
    let content = Fragment.from(this.content);
    if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
    return this.type ? this.type.create(this.attrs, content, this.marks) : content;
  }
  popFromStashMark(mark) {
    for (let i = this.stashMarks.length - 1; i >= 0; i--) if (mark.eq(this.stashMarks[i])) return this.stashMarks.splice(i, 1)[0];
  }
  applyPending(nextType) {
    for (let i = 0, pending = this.pendingMarks; i < pending.length; i++) {
      let mark = pending[i];
      if ((this.type ? this.type.allowsMarkType(mark.type) : markMayApply(mark.type, nextType)) && !mark.isInSet(this.activeMarks)) {
        this.activeMarks = mark.addToSet(this.activeMarks);
        this.pendingMarks = mark.removeFromSet(this.pendingMarks);
      }
    }
  }
  inlineContext(node) {
    if (this.type) return this.type.inlineContent;
    if (this.content.length) return this.content[0].isInline;
    return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
  }
}
class ParseContext {
  constructor(
  // The parser we are using.
  parser,
  // The options passed to this parse.
  options, isOpen) {
    this.parser = parser;
    this.options = options;
    this.isOpen = isOpen;
    this.open = 0;
    let topNode = options.topNode,
      topContext;
    let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
    if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);else if (isOpen) topContext = new NodeContext(null, null, Mark.none, Mark.none, true, null, topOptions);else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, Mark.none, true, null, topOptions);
    this.nodes = [topContext];
    this.find = options.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(dom) {
    if (dom.nodeType == 3) this.addTextNode(dom);else if (dom.nodeType == 1) this.addElement(dom);
  }
  withStyleRules(dom, f) {
    let style = dom.getAttribute("style");
    if (!style) return f();
    let marks = this.readStyles(parseStyles(style));
    if (!marks) return; // A style with ignore: true
    let [addMarks, removeMarks] = marks,
      top = this.top;
    for (let i = 0; i < removeMarks.length; i++) this.removePendingMark(removeMarks[i], top);
    for (let i = 0; i < addMarks.length; i++) this.addPendingMark(addMarks[i]);
    f();
    for (let i = 0; i < addMarks.length; i++) this.removePendingMark(addMarks[i], top);
    for (let i = 0; i < removeMarks.length; i++) this.addPendingMark(removeMarks[i]);
  }
  addTextNode(dom) {
    let value = dom.nodeValue;
    let top = this.top;
    if (top.options & OPT_PRESERVE_WS_FULL || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
      if (!(top.options & OPT_PRESERVE_WS)) {
        value = value.replace(/[ \t\r\n\u000c]+/g, " ");
        // If this starts with whitespace, and there is no node before it, or
        // a hard break, or a text node that ends with whitespace, strip the
        // leading space.
        if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
          let nodeBefore = top.content[top.content.length - 1];
          let domNodeBefore = dom.previousSibling;
          if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == 'BR' || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
        }
      } else if (!(top.options & OPT_PRESERVE_WS_FULL)) {
        value = value.replace(/\r?\n|\r/g, " ");
      } else {
        value = value.replace(/\r\n?/g, "\n");
      }
      if (value) this.insertNode(this.parser.schema.text(value));
      this.findInText(dom);
    } else {
      this.findInside(dom);
    }
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(dom, matchAfter) {
    let name = dom.nodeName.toLowerCase(),
      ruleID;
    if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
    let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
    if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
      this.findInside(dom);
      this.ignoreFallback(dom);
    } else if (!rule || rule.skip || rule.closeParent) {
      if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);else if (rule && rule.skip.nodeType) dom = rule.skip;
      let sync,
        top = this.top,
        oldNeedsBlock = this.needsBlock;
      if (blockTags.hasOwnProperty(name)) {
        if (top.content.length && top.content[0].isInline && this.open) {
          this.open--;
          top = this.top;
        }
        sync = true;
        if (!top.type) this.needsBlock = true;
      } else if (!dom.firstChild) {
        this.leafFallback(dom);
        return;
      }
      if (rule && rule.skip) this.addAll(dom);else this.withStyleRules(dom, () => this.addAll(dom));
      if (sync) this.sync(top);
      this.needsBlock = oldNeedsBlock;
    } else {
      this.withStyleRules(dom, () => {
        this.addElementByRule(dom, rule, rule.consuming === false ? ruleID : undefined);
      });
    }
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(dom) {
    if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"));
  }
  // Called for ignored nodes
  ignoreFallback(dom) {
    // Ignored BR nodes should at least create an inline context
    if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(styles) {
    let add = Mark.none,
      remove = Mark.none;
    for (let i = 0; i < styles.length; i += 2) {
      for (let after = undefined;;) {
        let rule = this.parser.matchStyle(styles[i], styles[i + 1], this, after);
        if (!rule) break;
        if (rule.ignore) return null;
        if (rule.clearMark) {
          this.top.pendingMarks.concat(this.top.activeMarks).forEach(m => {
            if (rule.clearMark(m)) remove = m.addToSet(remove);
          });
        } else {
          add = this.parser.schema.marks[rule.mark].create(rule.attrs).addToSet(add);
        }
        if (rule.consuming === false) after = rule;else break;
      }
    }
    return [add, remove];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(dom, rule, continueAfter) {
    let sync, nodeType, mark;
    if (rule.node) {
      nodeType = this.parser.schema.nodes[rule.node];
      if (!nodeType.isLeaf) {
        sync = this.enter(nodeType, rule.attrs || null, rule.preserveWhitespace);
      } else if (!this.insertNode(nodeType.create(rule.attrs))) {
        this.leafFallback(dom);
      }
    } else {
      let markType = this.parser.schema.marks[rule.mark];
      mark = markType.create(rule.attrs);
      this.addPendingMark(mark);
    }
    let startIn = this.top;
    if (nodeType && nodeType.isLeaf) {
      this.findInside(dom);
    } else if (continueAfter) {
      this.addElement(dom, continueAfter);
    } else if (rule.getContent) {
      this.findInside(dom);
      rule.getContent(dom, this.parser.schema).forEach(node => this.insertNode(node));
    } else {
      let contentDOM = dom;
      if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);else if (rule.contentElement) contentDOM = rule.contentElement;
      this.findAround(dom, contentDOM, true);
      this.addAll(contentDOM);
    }
    if (sync && this.sync(startIn)) this.open--;
    if (mark) this.removePendingMark(mark, startIn);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(parent, startIndex, endIndex) {
    let index = startIndex || 0;
    for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
      this.findAtPoint(parent, index);
      this.addDOM(dom);
    }
    this.findAtPoint(parent, index);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(node) {
    let route, sync;
    for (let depth = this.open; depth >= 0; depth--) {
      let cx = this.nodes[depth];
      let found = cx.findWrapping(node);
      if (found && (!route || route.length > found.length)) {
        route = found;
        sync = cx;
        if (!found.length) break;
      }
      if (cx.solid) break;
    }
    if (!route) return false;
    this.sync(sync);
    for (let i = 0; i < route.length; i++) this.enterInner(route[i], null, false);
    return true;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(node) {
    if (node.isInline && this.needsBlock && !this.top.type) {
      let block = this.textblockFromContext();
      if (block) this.enterInner(block);
    }
    if (this.findPlace(node)) {
      this.closeExtra();
      let top = this.top;
      top.applyPending(node.type);
      if (top.match) top.match = top.match.matchType(node.type);
      let marks = top.activeMarks;
      for (let i = 0; i < node.marks.length; i++) if (!top.type || top.type.allowsMarkType(node.marks[i].type)) marks = node.marks[i].addToSet(marks);
      top.content.push(node.mark(marks));
      return true;
    }
    return false;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(type, attrs, preserveWS) {
    let ok = this.findPlace(type.create(attrs));
    if (ok) this.enterInner(type, attrs, true, preserveWS);
    return ok;
  }
  // Open a node of the given type
  enterInner(type, attrs = null, solid = false, preserveWS) {
    this.closeExtra();
    let top = this.top;
    top.applyPending(type);
    top.match = top.match && top.match.matchType(type);
    let options = wsOptionsFor(type, preserveWS, top.options);
    if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
    this.nodes.push(new NodeContext(type, attrs, top.activeMarks, top.pendingMarks, solid, null, options));
    this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(openEnd = false) {
    let i = this.nodes.length - 1;
    if (i > this.open) {
      for (; i > this.open; i--) this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(to) {
    for (let i = this.open; i >= 0; i--) if (this.nodes[i] == to) {
      this.open = i;
      return true;
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let pos = 0;
    for (let i = this.open; i >= 0; i--) {
      let content = this.nodes[i].content;
      for (let j = content.length - 1; j >= 0; j--) pos += content[j].nodeSize;
      if (i) pos++;
    }
    return pos;
  }
  findAtPoint(parent, offset) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
    }
  }
  findInside(parent) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
    }
  }
  findAround(parent, content, before) {
    if (parent != content && this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        let pos = content.compareDocumentPosition(this.find[i].node);
        if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
      }
    }
  }
  findInText(textNode) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
    }
  }
  // Determines whether the given context string matches this context.
  matchesContext(context) {
    if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
    let parts = context.split("/");
    let option = this.options.context;
    let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
    let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
    let match = (i, depth) => {
      for (; i >= 0; i--) {
        let part = parts[i];
        if (part == "") {
          if (i == parts.length - 1 || i == 0) continue;
          for (; depth >= minDepth; depth--) if (match(i - 1, depth)) return true;
          return false;
        } else {
          let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
          if (!next || next.name != part && next.groups.indexOf(part) == -1) return false;
          depth--;
        }
      }
      return true;
    };
    return match(parts.length - 1, this.open);
  }
  textblockFromContext() {
    let $context = this.options.context;
    if ($context) for (let d = $context.depth; d >= 0; d--) {
      let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
      if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
    }
    for (let name in this.parser.schema.nodes) {
      let type = this.parser.schema.nodes[name];
      if (type.isTextblock && type.defaultAttrs) return type;
    }
  }
  addPendingMark(mark) {
    let found = findSameMarkInSet(mark, this.top.pendingMarks);
    if (found) this.top.stashMarks.push(found);
    this.top.pendingMarks = mark.addToSet(this.top.pendingMarks);
  }
  removePendingMark(mark, upto) {
    for (let depth = this.open; depth >= 0; depth--) {
      let level = this.nodes[depth];
      let found = level.pendingMarks.lastIndexOf(mark);
      if (found > -1) {
        level.pendingMarks = mark.removeFromSet(level.pendingMarks);
      } else {
        level.activeMarks = mark.removeFromSet(level.activeMarks);
        let stashMark = level.popFromStashMark(mark);
        if (stashMark && level.type && level.type.allowsMarkType(stashMark.type)) level.activeMarks = stashMark.addToSet(level.activeMarks);
      }
      if (level == upto) break;
    }
  }
}
// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(dom) {
  for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}
// Apply a CSS selector.
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
// Tokenize a style attribute into property/value pairs.
function parseStyles(style) {
  let re = /\s*([\w-]+)\s*:\s*([^;]+)/g,
    m,
    result = [];
  while (m = re.exec(style)) result.push(m[1], m[2].trim());
  return result;
}
function copy(obj) {
  let copy = {};
  for (let prop in obj) copy[prop] = obj[prop];
  return copy;
}
// Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.
function markMayApply(markType, nodeType) {
  let nodes = nodeType.schema.nodes;
  for (let name in nodes) {
    let parent = nodes[name];
    if (!parent.allowsMarkType(markType)) continue;
    let seen = [],
      scan = match => {
        seen.push(match);
        for (let i = 0; i < match.edgeCount; i++) {
          let {
            type,
            next
          } = match.edge(i);
          if (type == nodeType) return true;
          if (seen.indexOf(next) < 0 && scan(next)) return true;
        }
      };
    if (scan(parent.contentMatch)) return true;
  }
}
function findSameMarkInSet(mark, set) {
  for (let i = 0; i < set.length; i++) {
    if (mark.eq(set[i])) return set[i];
  }
}

/**
A DOM serializer knows how to convert ProseMirror nodes and
marks of various types to DOM nodes.
*/
class DOMSerializer {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(
  /**
  The node serialization functions.
  */
  nodes,
  /**
  The mark serialization functions.
  */
  marks) {
    this.nodes = nodes;
    this.marks = marks;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(fragment, options = {}, target) {
    if (!target) target = doc(options).createDocumentFragment();
    let top = target,
      active = [];
    fragment.forEach(node => {
      if (active.length || node.marks.length) {
        let keep = 0,
          rendered = 0;
        while (keep < active.length && rendered < node.marks.length) {
          let next = node.marks[rendered];
          if (!this.marks[next.type.name]) {
            rendered++;
            continue;
          }
          if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
          keep++;
          rendered++;
        }
        while (keep < active.length) top = active.pop()[1];
        while (rendered < node.marks.length) {
          let add = node.marks[rendered++];
          let markDOM = this.serializeMark(add, node.isInline, options);
          if (markDOM) {
            active.push([add, top]);
            top.appendChild(markDOM.dom);
            top = markDOM.contentDOM || markDOM.dom;
          }
        }
      }
      top.appendChild(this.serializeNodeInner(node, options));
    });
    return target;
  }
  /**
  @internal
  */
  serializeNodeInner(node, options) {
    let {
      dom,
      contentDOM
    } = DOMSerializer.renderSpec(doc(options), this.nodes[node.type.name](node));
    if (contentDOM) {
      if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(node.content, options, contentDOM);
    }
    return dom;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(node, options = {}) {
    let dom = this.serializeNodeInner(node, options);
    for (let i = node.marks.length - 1; i >= 0; i--) {
      let wrap = this.serializeMark(node.marks[i], node.isInline, options);
      if (wrap) {
        (wrap.contentDOM || wrap.dom).appendChild(dom);
        dom = wrap.dom;
      }
    }
    return dom;
  }
  /**
  @internal
  */
  serializeMark(mark, inline, options = {}) {
    let toDOM = this.marks[mark.type.name];
    return toDOM && DOMSerializer.renderSpec(doc(options), toDOM(mark, inline));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(doc, structure, xmlNS = null) {
    if (typeof structure == "string") return {
      dom: doc.createTextNode(structure)
    };
    if (structure.nodeType != null) return {
      dom: structure
    };
    if (structure.dom && structure.dom.nodeType != null) return structure;
    let tagName = structure[0],
      space = tagName.indexOf(" ");
    if (space > 0) {
      xmlNS = tagName.slice(0, space);
      tagName = tagName.slice(space + 1);
    }
    let contentDOM;
    let dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName);
    let attrs = structure[1],
      start = 1;
    if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
      start = 2;
      for (let name in attrs) if (attrs[name] != null) {
        let space = name.indexOf(" ");
        if (space > 0) dom.setAttributeNS(name.slice(0, space), name.slice(space + 1), attrs[name]);else dom.setAttribute(name, attrs[name]);
      }
    }
    for (let i = start; i < structure.length; i++) {
      let child = structure[i];
      if (child === 0) {
        if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
        return {
          dom,
          contentDOM: dom
        };
      } else {
        let {
          dom: inner,
          contentDOM: innerContent
        } = DOMSerializer.renderSpec(doc, child, xmlNS);
        dom.appendChild(inner);
        if (innerContent) {
          if (contentDOM) throw new RangeError("Multiple content holes");
          contentDOM = innerContent;
        }
      }
    }
    return {
      dom,
      contentDOM
    };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(schema) {
    return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(schema) {
    let result = gatherToDOM(schema.nodes);
    if (!result.text) result.text = node => node.text;
    return result;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(schema) {
    return gatherToDOM(schema.marks);
  }
}
function gatherToDOM(obj) {
  let result = {};
  for (let name in obj) {
    let toDOM = obj[name].spec.toDOM;
    if (toDOM) result[name] = toDOM;
  }
  return result;
}
function doc(options) {
  return options.document || window.document;
}


/***/ }),

/***/ 4778:
/*!************************************************************!*\
  !*** ./node_modules/prosemirror-schema-list/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListNodes: () => (/* binding */ addListNodes),
/* harmony export */   bulletList: () => (/* binding */ bulletList),
/* harmony export */   liftListItem: () => (/* binding */ liftListItem),
/* harmony export */   listItem: () => (/* binding */ listItem),
/* harmony export */   orderedList: () => (/* binding */ orderedList),
/* harmony export */   sinkListItem: () => (/* binding */ sinkListItem),
/* harmony export */   splitListItem: () => (/* binding */ splitListItem),
/* harmony export */   wrapInList: () => (/* binding */ wrapInList)
/* harmony export */ });
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ 2576);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ 6375);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ 7195);



const olDOM = ["ol", 0],
  ulDOM = ["ul", 0],
  liDOM = ["li", 0];
/**
An ordered list [node spec](https://prosemirror.net/docs/ref/#model.NodeSpec). Has a single
attribute, `order`, which determines the number at which the list
starts counting, and defaults to 1. Represented as an `<ol>`
element.
*/
const orderedList = {
  attrs: {
    order: {
      default: 1
    }
  },
  parseDOM: [{
    tag: "ol",
    getAttrs(dom) {
      return {
        order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1
      };
    }
  }],
  toDOM(node) {
    return node.attrs.order == 1 ? olDOM : ["ol", {
      start: node.attrs.order
    }, 0];
  }
};
/**
A bullet list node spec, represented in the DOM as `<ul>`.
*/
const bulletList = {
  parseDOM: [{
    tag: "ul"
  }],
  toDOM() {
    return ulDOM;
  }
};
/**
A list item (`<li>`) spec.
*/
const listItem = {
  parseDOM: [{
    tag: "li"
  }],
  toDOM() {
    return liDOM;
  },
  defining: true
};
function add(obj, props) {
  let copy = {};
  for (let prop in obj) copy[prop] = obj[prop];
  for (let prop in props) copy[prop] = props[prop];
  return copy;
}
/**
Convenience function for adding list-related node types to a map
specifying the nodes for a schema. Adds
[`orderedList`](https://prosemirror.net/docs/ref/#schema-list.orderedList) as `"ordered_list"`,
[`bulletList`](https://prosemirror.net/docs/ref/#schema-list.bulletList) as `"bullet_list"`, and
[`listItem`](https://prosemirror.net/docs/ref/#schema-list.listItem) as `"list_item"`.

`itemContent` determines the content expression for the list items.
If you want the commands defined in this module to apply to your
list structure, it should have a shape like `"paragraph block*"` or
`"paragraph (ordered_list | bullet_list)*"`. `listGroup` can be
given to assign a group name to the list node types, for example
`"block"`.
*/
function addListNodes(nodes, itemContent, listGroup) {
  return nodes.append({
    ordered_list: add(orderedList, {
      content: "list_item+",
      group: listGroup
    }),
    bullet_list: add(bulletList, {
      content: "list_item+",
      group: listGroup
    }),
    list_item: add(listItem, {
      content: itemContent
    })
  });
}
/**
Returns a command function that wraps the selection in a list with
the given type an attributes. If `dispatch` is null, only return a
value to indicate whether this is possible, but don't actually
perform the change.
*/
function wrapInList(listType, attrs = null) {
  return function (state, dispatch) {
    let {
      $from,
      $to
    } = state.selection;
    let range = $from.blockRange($to),
      doJoin = false,
      outerRange = range;
    if (!range) return false;
    // This is at the top of an existing list item
    if (range.depth >= 2 && $from.node(range.depth - 1).type.compatibleContent(listType) && range.startIndex == 0) {
      // Don't do anything if this is the top of the list
      if ($from.index(range.depth - 1) == 0) return false;
      let $insert = state.doc.resolve(range.start - 2);
      outerRange = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.NodeRange($insert, $insert, range.depth);
      if (range.endIndex < range.parent.childCount) range = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.NodeRange($from, state.doc.resolve($to.end(range.depth)), range.depth);
      doJoin = true;
    }
    let wrap = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.findWrapping)(outerRange, listType, attrs, range);
    if (!wrap) return false;
    if (dispatch) dispatch(doWrapInList(state.tr, range, wrap, doJoin, listType).scrollIntoView());
    return true;
  };
}
function doWrapInList(tr, range, wrappers, joinBefore, listType) {
  let content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--) content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(range.start - (joinBefore ? 2 : 0), range.end, range.start, range.end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(content, 0, 0), wrappers.length, true));
  let found = 0;
  for (let i = 0; i < wrappers.length; i++) if (wrappers[i].type == listType) found = i + 1;
  let splitDepth = wrappers.length - found;
  let splitPos = range.start + wrappers.length - (joinBefore ? 2 : 0),
    parent = range.parent;
  for (let i = range.startIndex, e = range.endIndex, first = true; i < e; i++, first = false) {
    if (!first && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canSplit)(tr.doc, splitPos, splitDepth)) {
      tr.split(splitPos, splitDepth);
      splitPos += 2 * splitDepth;
    }
    splitPos += parent.child(i).nodeSize;
  }
  return tr;
}
/**
Build a command that splits a non-empty textblock at the top level
of a list item by also splitting that list item.
*/
function splitListItem(itemType, itemAttrs) {
  return function (state, dispatch) {
    let {
      $from,
      $to,
      node
    } = state.selection;
    if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) return false;
    let grandParent = $from.node(-1);
    if (grandParent.type != itemType) return false;
    if ($from.parent.content.size == 0 && $from.node(-1).childCount == $from.indexAfter(-1)) {
      // In an empty block. If this is a nested list, the wrapping
      // list item should be split. Otherwise, bail out and let next
      // command handle lifting.
      if ($from.depth == 3 || $from.node(-3).type != itemType || $from.index(-2) != $from.node(-2).childCount - 1) return false;
      if (dispatch) {
        let wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;
        let depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
        // Build a fragment containing empty versions of the structure
        // from the outer list item to the parent node of the cursor
        for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d--) wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from($from.node(d).copy(wrap));
        let depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
        // Add a second list item with an empty default start node
        wrap = wrap.append(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(itemType.createAndFill()));
        let start = $from.before($from.depth - (depthBefore - 1));
        let tr = state.tr.replace(start, $from.after(-depthAfter), new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(wrap, 4 - depthBefore, 0));
        let sel = -1;
        tr.doc.nodesBetween(start, tr.doc.content.size, (node, pos) => {
          if (sel > -1) return false;
          if (node.isTextblock && node.content.size == 0) sel = pos + 1;
        });
        if (sel > -1) tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.Selection.near(tr.doc.resolve(sel)));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
    let nextType = $to.pos == $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
    let tr = state.tr.delete($from.pos, $to.pos);
    let types = nextType ? [itemAttrs ? {
      type: itemType,
      attrs: itemAttrs
    } : null, {
      type: nextType
    }] : undefined;
    if (!(0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canSplit)(tr.doc, $from.pos, 2, types)) return false;
    if (dispatch) dispatch(tr.split($from.pos, 2, types).scrollIntoView());
    return true;
  };
}
/**
Create a command to lift the list item around the selection up into
a wrapping list.
*/
function liftListItem(itemType) {
  return function (state, dispatch) {
    let {
      $from,
      $to
    } = state.selection;
    let range = $from.blockRange($to, node => node.childCount > 0 && node.firstChild.type == itemType);
    if (!range) return false;
    if (!dispatch) return true;
    if ($from.node(range.depth - 1).type == itemType)
      // Inside a parent list
      return liftToOuterList(state, dispatch, itemType, range);else
      // Outer list node
      return liftOutOfList(state, dispatch, range);
  };
}
function liftToOuterList(state, dispatch, itemType, range) {
  let tr = state.tr,
    end = range.end,
    endOfList = range.$to.end(range.depth);
  if (end < endOfList) {
    // There are siblings after the lifted items, which must become
    // children of the last item
    tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(end - 1, endOfList, end, endOfList, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(itemType.create(null, range.parent.copy())), 1, 0), 1, true));
    range = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.NodeRange(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);
  }
  const target = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.liftTarget)(range);
  if (target == null) return false;
  tr.lift(range, target);
  let after = tr.mapping.map(end, -1) - 1;
  if ((0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canJoin)(tr.doc, after)) tr.join(after);
  dispatch(tr.scrollIntoView());
  return true;
}
function liftOutOfList(state, dispatch, range) {
  let tr = state.tr,
    list = range.parent;
  // Merge the list items into a single big item
  for (let pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {
    pos -= list.child(i).nodeSize;
    tr.delete(pos - 1, pos + 1);
  }
  let $start = tr.doc.resolve(range.start),
    item = $start.nodeAfter;
  if (tr.mapping.map(range.end) != range.start + $start.nodeAfter.nodeSize) return false;
  let atStart = range.startIndex == 0,
    atEnd = range.endIndex == list.childCount;
  let parent = $start.node(-1),
    indexBefore = $start.index(-1);
  if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(list)))) return false;
  let start = $start.pos,
    end = start + item.nodeSize;
  // Strip off the surrounding list. At the sides where we're not at
  // the end of the list, the existing list is closed. At sides where
  // this is the end, it is overwritten to its end.
  tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice((atStart ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(list.copy(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty))).append(atEnd ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(list.copy(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
  dispatch(tr.scrollIntoView());
  return true;
}
/**
Create a command to sink the list item around the selection down
into an inner list.
*/
function sinkListItem(itemType) {
  return function (state, dispatch) {
    let {
      $from,
      $to
    } = state.selection;
    let range = $from.blockRange($to, node => node.childCount > 0 && node.firstChild.type == itemType);
    if (!range) return false;
    let startIndex = range.startIndex;
    if (startIndex == 0) return false;
    let parent = range.parent,
      nodeBefore = parent.child(startIndex - 1);
    if (nodeBefore.type != itemType) return false;
    if (dispatch) {
      let nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
      let inner = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(nestedBefore ? itemType.create() : null);
      let slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(itemType.create(null, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
      let before = range.start,
        after = range.end;
      dispatch(state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after, before, after, slice, 1, true)).scrollIntoView());
    }
    return true;
  };
}


/***/ }),

/***/ 7195:
/*!******************************************************!*\
  !*** ./node_modules/prosemirror-state/dist/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllSelection: () => (/* binding */ AllSelection),
/* harmony export */   EditorState: () => (/* binding */ EditorState),
/* harmony export */   NodeSelection: () => (/* binding */ NodeSelection),
/* harmony export */   Plugin: () => (/* binding */ Plugin),
/* harmony export */   PluginKey: () => (/* binding */ PluginKey),
/* harmony export */   Selection: () => (/* binding */ Selection),
/* harmony export */   SelectionRange: () => (/* binding */ SelectionRange),
/* harmony export */   TextSelection: () => (/* binding */ TextSelection),
/* harmony export */   Transaction: () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ 6375);
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ 2576);


const classesById = Object.create(null);
/**
Superclass for editor selections. Every selection type should
extend this. Should not be instantiated directly.
*/
class Selection {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(
  /**
  The resolved anchor of the selection (the side that stays in
  place when the selection is modified).
  */
  $anchor,
  /**
  The resolved head of the selection (the side that moves when
  the selection is modified).
  */
  $head, ranges) {
    this.$anchor = $anchor;
    this.$head = $head;
    this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
    return true;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(tr, content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
    // Put the new selection at the position after the inserted
    // content. When that ended in an inline node, search backwards,
    // to get the position after that node. If not, search forward.
    let lastNode = content.content.lastChild,
      lastParent = null;
    for (let i = 0; i < content.openEnd; i++) {
      lastParent = lastNode;
      lastNode = lastNode.lastChild;
    }
    let mapFrom = tr.steps.length,
      ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
          $from,
          $to
        } = ranges[i],
        mapping = tr.mapping.slice(mapFrom);
      tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty : content);
      if (i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(tr, node) {
    let mapFrom = tr.steps.length,
      ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
          $from,
          $to
        } = ranges[i],
        mapping = tr.mapping.slice(mapFrom);
      let from = mapping.map($from.pos),
        to = mapping.map($to.pos);
      if (i) {
        tr.deleteRange(from, to);
      } else {
        tr.replaceRangeWith(from, to, node);
        selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
      }
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom($pos, dir, textOnly = false) {
    let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
    if (inner) return inner;
    for (let depth = $pos.depth - 1; depth >= 0; depth--) {
      let found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
      if (found) return found;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near($pos, bias = 1) {
    return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(doc) {
    return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(doc) {
    return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(doc, json) {
    if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
    let cls = classesById[json.type];
    if (!cls) throw new RangeError(`No selection type ${json.type} defined`);
    return cls.fromJSON(doc, json);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(id, selectionClass) {
    if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
    classesById[id] = selectionClass;
    selectionClass.prototype.jsonID = id;
    return selectionClass;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return TextSelection.between(this.$anchor, this.$head).getBookmark();
  }
}
Selection.prototype.visible = true;
/**
Represents a selected range in a document.
*/
class SelectionRange {
  /**
  Create a range.
  */
  constructor(
  /**
  The lower bound of the range.
  */
  $from,
  /**
  The upper bound of the range.
  */
  $to) {
    this.$from = $from;
    this.$to = $to;
  }
}
let warnedAboutTextSelection = false;
function checkTextSelection($pos) {
  if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
    warnedAboutTextSelection = true;
    console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
  }
}
/**
A text selection represents a classical editor selection, with a
head (the moving side) and anchor (immobile side), both of which
point into textblock nodes. It can be empty (a regular cursor
position).
*/
class TextSelection extends Selection {
  /**
  Construct a text selection between the given points.
  */
  constructor($anchor, $head = $anchor) {
    checkTextSelection($anchor);
    checkTextSelection($head);
    super($anchor, $head);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(doc, mapping) {
    let $head = doc.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent) return Selection.near($head);
    let $anchor = doc.resolve(mapping.map(this.anchor));
    return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
  }
  replace(tr, content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
    super.replace(tr, content);
    if (content == prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
      let marks = this.$from.marksAcross(this.$to);
      if (marks) tr.ensureMarks(marks);
    }
  }
  eq(other) {
    return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
  }
  getBookmark() {
    return new TextBookmark(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: "text",
      anchor: this.anchor,
      head: this.head
    };
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(doc, anchor, head = anchor) {
    let $anchor = doc.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between($anchor, $head, bias) {
    let dPos = $anchor.pos - $head.pos;
    if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;
    if (!$head.parent.inlineContent) {
      let found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
      if (found) $head = found.$head;else return Selection.near($head, bias);
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
        if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
      }
    }
    return new TextSelection($anchor, $head);
  }
}
Selection.jsonID("text", TextSelection);
class TextBookmark {
  constructor(anchor, head) {
    this.anchor = anchor;
    this.head = head;
  }
  map(mapping) {
    return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
  }
  resolve(doc) {
    return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
  }
}
/**
A node selection is a selection that points at a single node. All
nodes marked [selectable](https://prosemirror.net/docs/ref/#model.NodeSpec.selectable) can be the
target of a node selection. In such a selection, `from` and `to`
point directly before and after the selected node, `anchor` equals
`from`, and `head` equals `to`..
*/
class NodeSelection extends Selection {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor($pos) {
    let node = $pos.nodeAfter;
    let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    super($pos, $end);
    this.node = node;
  }
  map(doc, mapping) {
    let {
      deleted,
      pos
    } = mapping.mapResult(this.anchor);
    let $pos = doc.resolve(pos);
    if (deleted) return Selection.near($pos);
    return new NodeSelection($pos);
  }
  content() {
    return new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(this.node), 0, 0);
  }
  eq(other) {
    return other instanceof NodeSelection && other.anchor == this.anchor;
  }
  toJSON() {
    return {
      type: "node",
      anchor: this.anchor
    };
  }
  getBookmark() {
    return new NodeBookmark(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new NodeSelection(doc.resolve(json.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(doc, from) {
    return new NodeSelection(doc.resolve(from));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(node) {
    return !node.isText && node.type.spec.selectable !== false;
  }
}
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
class NodeBookmark {
  constructor(anchor) {
    this.anchor = anchor;
  }
  map(mapping) {
    let {
      deleted,
      pos
    } = mapping.mapResult(this.anchor);
    return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
  }
  resolve(doc) {
    let $pos = doc.resolve(this.anchor),
      node = $pos.nodeAfter;
    if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
    return Selection.near($pos);
  }
}
/**
A selection type that represents selecting the whole document
(which can not necessarily be expressed with a text selection, when
there are for example leaf block nodes at the start or end of the
document).
*/
class AllSelection extends Selection {
  /**
  Create an all-selection over the given document.
  */
  constructor(doc) {
    super(doc.resolve(0), doc.resolve(doc.content.size));
  }
  replace(tr, content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
    if (content == prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
      tr.delete(0, tr.doc.content.size);
      let sel = Selection.atStart(tr.doc);
      if (!sel.eq(tr.selection)) tr.setSelection(sel);
    } else {
      super.replace(tr, content);
    }
  }
  toJSON() {
    return {
      type: "all"
    };
  }
  /**
  @internal
  */
  static fromJSON(doc) {
    return new AllSelection(doc);
  }
  map(doc) {
    return new AllSelection(doc);
  }
  eq(other) {
    return other instanceof AllSelection;
  }
  getBookmark() {
    return AllBookmark;
  }
}
Selection.jsonID("all", AllSelection);
const AllBookmark = {
  map() {
    return this;
  },
  resolve(doc) {
    return new AllSelection(doc);
  }
};
// FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function findSelectionIn(doc, node, pos, index, dir, text = false) {
  if (node.inlineContent) return TextSelection.create(doc, pos);
  for (let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    let child = node.child(i);
    if (!child.isAtom) {
      let inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
      if (inner) return inner;
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
    }
    pos += child.nodeSize * dir;
  }
  return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
  let last = tr.steps.length - 1;
  if (last < startLen) return;
  let step = tr.steps[last];
  if (!(step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceStep || step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep)) return;
  let map = tr.mapping.maps[last],
    end;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end == null) end = newTo;
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
const UPDATED_SEL = 1,
  UPDATED_MARKS = 2,
  UPDATED_SCROLL = 4;
/**
An editor state transaction, which can be applied to a state to
create an updated state. Use
[`EditorState.tr`](https://prosemirror.net/docs/ref/#state.EditorState.tr) to create an instance.

Transactions track changes to the document (they are a subclass of
[`Transform`](https://prosemirror.net/docs/ref/#transform.Transform)), but also other state changes,
like selection updates and adjustments of the set of [stored
marks](https://prosemirror.net/docs/ref/#state.EditorState.storedMarks). In addition, you can store
metadata properties in a transaction, which are extra pieces of
information that client code or plugins can use to describe what a
transaction represents, so that they can update their [own
state](https://prosemirror.net/docs/ref/#state.StateField) accordingly.

The [editor view](https://prosemirror.net/docs/ref/#view.EditorView) uses a few metadata
properties: it will attach a property `"pointer"` with the value
`true` to selection transactions directly caused by mouse or touch
input, a `"composition"` property holding an ID identifying the
composition that caused it to transactions caused by composed DOM
input, and a `"uiEvent"` property of that may be `"paste"`,
`"cut"`, or `"drop"`.
*/
class Transaction extends prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.Transform {
  /**
  @internal
  */
  constructor(state) {
    super(state.doc);
    // The step count for which the current selection is valid.
    this.curSelectionFor = 0;
    // Bitfield to track which aspects of the state were updated by
    // this transaction.
    this.updated = 0;
    // Object used to store metadata properties for the transaction.
    this.meta = Object.create(null);
    this.time = Date.now();
    this.curSelection = state.selection;
    this.storedMarks = state.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(selection) {
    if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
    this.curSelection = selection;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
    this.storedMarks = null;
    return this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & UPDATED_SEL) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(marks) {
    this.storedMarks = marks;
    this.updated |= UPDATED_MARKS;
    return this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(marks) {
    if (!prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks)) this.setStoredMarks(marks);
    return this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(mark) {
    return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(mark) {
    return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & UPDATED_MARKS) > 0;
  }
  /**
  @internal
  */
  addStep(step, doc) {
    super.addStep(step, doc);
    this.updated = this.updated & ~UPDATED_MARKS;
    this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(time) {
    this.time = time;
    return this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(slice) {
    this.selection.replace(this, slice);
    return this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(node, inheritMarks = true) {
    let selection = this.selection;
    if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Mark.none));
    selection.replaceWith(this, node);
    return this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    this.selection.replace(this);
    return this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(text, from, to) {
    let schema = this.doc.type.schema;
    if (from == null) {
      if (!text) return this.deleteSelection();
      return this.replaceSelectionWith(schema.text(text), true);
    } else {
      if (to == null) to = from;
      to = to == null ? from : to;
      if (!text) return this.deleteRange(from, to);
      let marks = this.storedMarks;
      if (!marks) {
        let $from = this.doc.resolve(from);
        marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
      }
      this.replaceRangeWith(from, to, schema.text(text, marks));
      if (!this.selection.empty) this.setSelection(Selection.near(this.selection.$to));
      return this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(key, value) {
    this.meta[typeof key == "string" ? key : key.key] = value;
    return this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(key) {
    return this.meta[typeof key == "string" ? key : key.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let _ in this.meta) return false;
    return true;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    this.updated |= UPDATED_SCROLL;
    return this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & UPDATED_SCROLL) > 0;
  }
}
function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}
class FieldDesc {
  constructor(name, desc, self) {
    this.name = name;
    this.init = bind(desc.init, self);
    this.apply = bind(desc.apply, self);
  }
}
const baseFields = [new FieldDesc("doc", {
  init(config) {
    return config.doc || config.schema.topNodeType.createAndFill();
  },
  apply(tr) {
    return tr.doc;
  }
}), new FieldDesc("selection", {
  init(config, instance) {
    return config.selection || Selection.atStart(instance.doc);
  },
  apply(tr) {
    return tr.selection;
  }
}), new FieldDesc("storedMarks", {
  init(config) {
    return config.storedMarks || null;
  },
  apply(tr, _marks, _old, state) {
    return state.selection.$cursor ? tr.storedMarks : null;
  }
}), new FieldDesc("scrollToSelection", {
  init() {
    return 0;
  },
  apply(tr, prev) {
    return tr.scrolledIntoView ? prev + 1 : prev;
  }
})];
// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
class Configuration {
  constructor(schema, plugins) {
    this.schema = schema;
    this.plugins = [];
    this.pluginsByKey = Object.create(null);
    this.fields = baseFields.slice();
    if (plugins) plugins.forEach(plugin => {
      if (this.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
      this.plugins.push(plugin);
      this.pluginsByKey[plugin.key] = plugin;
      if (plugin.spec.state) this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
    });
  }
}
/**
The state of a ProseMirror editor is represented by an object of
this type. A state is a persistent data structure—it isn't
updated, but rather a new state value is computed from an old one
using the [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) method.

A state holds a number of built-in fields, and plugins can
[define](https://prosemirror.net/docs/ref/#state.PluginSpec.state) additional fields.
*/
class EditorState {
  /**
  @internal
  */
  constructor(
  /**
  @internal
  */
  config) {
    this.config = config;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(tr) {
    return this.applyTransaction(tr).state;
  }
  /**
  @internal
  */
  filterTransaction(tr, ignore = -1) {
    for (let i = 0; i < this.config.plugins.length; i++) if (i != ignore) {
      let plugin = this.config.plugins[i];
      if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
    }
    return true;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(rootTr) {
    if (!this.filterTransaction(rootTr)) return {
      state: this,
      transactions: []
    };
    let trs = [rootTr],
      newState = this.applyInner(rootTr),
      seen = null;
    // This loop repeatedly gives plugins a chance to respond to
    // transactions as new transactions are added, making sure to only
    // pass the transactions the plugin did not see before.
    for (;;) {
      let haveNew = false;
      for (let i = 0; i < this.config.plugins.length; i++) {
        let plugin = this.config.plugins[i];
        if (plugin.spec.appendTransaction) {
          let n = seen ? seen[i].n : 0,
            oldState = seen ? seen[i].state : this;
          let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
          if (tr && newState.filterTransaction(tr, i)) {
            tr.setMeta("appendedTransaction", rootTr);
            if (!seen) {
              seen = [];
              for (let j = 0; j < this.config.plugins.length; j++) seen.push(j < i ? {
                state: newState,
                n: trs.length
              } : {
                state: this,
                n: 0
              });
            }
            trs.push(tr);
            newState = newState.applyInner(tr);
            haveNew = true;
          }
          if (seen) seen[i] = {
            state: newState,
            n: trs.length
          };
        }
      }
      if (!haveNew) return {
        state: newState,
        transactions: trs
      };
    }
  }
  /**
  @internal
  */
  applyInner(tr) {
    if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
    let newInstance = new EditorState(this.config),
      fields = this.config.fields;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
    }
    return newInstance;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Transaction(this);
  }
  /**
  Create a new state.
  */
  static create(config) {
    let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
    let instance = new EditorState($config);
    for (let i = 0; i < $config.fields.length; i++) instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
    return instance;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(config) {
    let $config = new Configuration(this.schema, config.plugins);
    let fields = $config.fields,
      instance = new EditorState($config);
    for (let i = 0; i < fields.length; i++) {
      let name = fields[i].name;
      instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
    }
    return instance;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(pluginFields) {
    let result = {
      doc: this.doc.toJSON(),
      selection: this.selection.toJSON()
    };
    if (this.storedMarks) result.storedMarks = this.storedMarks.map(m => m.toJSON());
    if (pluginFields && typeof pluginFields == 'object') for (let prop in pluginFields) {
      if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
      let plugin = pluginFields[prop],
        state = plugin.spec.state;
      if (state && state.toJSON) result[prop] = state.toJSON.call(plugin, this[plugin.key]);
    }
    return result;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(config, json, pluginFields) {
    if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!config.schema) throw new RangeError("Required config field 'schema' missing");
    let $config = new Configuration(config.schema, config.plugins);
    let instance = new EditorState($config);
    $config.fields.forEach(field => {
      if (field.name == "doc") {
        instance.doc = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Node.fromJSON(config.schema, json.doc);
      } else if (field.name == "selection") {
        instance.selection = Selection.fromJSON(instance.doc, json.selection);
      } else if (field.name == "storedMarks") {
        if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
      } else {
        if (pluginFields) for (let prop in pluginFields) {
          let plugin = pluginFields[prop],
            state = plugin.spec.state;
          if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
            instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
            return;
          }
        }
        instance[field.name] = field.init(config, instance);
      }
    });
    return instance;
  }
}
function bindProps(obj, self, target) {
  for (let prop in obj) {
    let val = obj[prop];
    if (val instanceof Function) val = val.bind(self);else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
    target[prop] = val;
  }
  return target;
}
/**
Plugins bundle functionality that can be added to an editor.
They are part of the [editor state](https://prosemirror.net/docs/ref/#state.EditorState) and
may influence that state and the view that contains it.
*/
class Plugin {
  /**
  Create a plugin.
  */
  constructor(
  /**
  The plugin's [spec object](https://prosemirror.net/docs/ref/#state.PluginSpec).
  */
  spec) {
    this.spec = spec;
    /**
    The [props](https://prosemirror.net/docs/ref/#view.EditorProps) exported by this plugin.
    */
    this.props = {};
    if (spec.props) bindProps(spec.props, this, this.props);
    this.key = spec.key ? spec.key.key : createKey("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
}
const keys = Object.create(null);
function createKey(name) {
  if (name in keys) return name + "$" + ++keys[name];
  keys[name] = 0;
  return name + "$";
}
/**
A key is used to [tag](https://prosemirror.net/docs/ref/#state.PluginSpec.key) plugins in a way
that makes it possible to find them, given an editor state.
Assigning a key does mean only one plugin of that type can be
active in a state.
*/
class PluginKey {
  /**
  Create a plugin key.
  */
  constructor(name = "key") {
    this.key = createKey(name);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(state) {
    return state.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
}


/***/ }),

/***/ 2576:
/*!**********************************************************!*\
  !*** ./node_modules/prosemirror-transform/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMarkStep: () => (/* binding */ AddMarkStep),
/* harmony export */   AddNodeMarkStep: () => (/* binding */ AddNodeMarkStep),
/* harmony export */   AttrStep: () => (/* binding */ AttrStep),
/* harmony export */   DocAttrStep: () => (/* binding */ DocAttrStep),
/* harmony export */   MapResult: () => (/* binding */ MapResult),
/* harmony export */   Mapping: () => (/* binding */ Mapping),
/* harmony export */   RemoveMarkStep: () => (/* binding */ RemoveMarkStep),
/* harmony export */   RemoveNodeMarkStep: () => (/* binding */ RemoveNodeMarkStep),
/* harmony export */   ReplaceAroundStep: () => (/* binding */ ReplaceAroundStep),
/* harmony export */   ReplaceStep: () => (/* binding */ ReplaceStep),
/* harmony export */   Step: () => (/* binding */ Step),
/* harmony export */   StepMap: () => (/* binding */ StepMap),
/* harmony export */   StepResult: () => (/* binding */ StepResult),
/* harmony export */   Transform: () => (/* binding */ Transform),
/* harmony export */   TransformError: () => (/* binding */ TransformError),
/* harmony export */   canJoin: () => (/* binding */ canJoin),
/* harmony export */   canSplit: () => (/* binding */ canSplit),
/* harmony export */   dropPoint: () => (/* binding */ dropPoint),
/* harmony export */   findWrapping: () => (/* binding */ findWrapping),
/* harmony export */   insertPoint: () => (/* binding */ insertPoint),
/* harmony export */   joinPoint: () => (/* binding */ joinPoint),
/* harmony export */   liftTarget: () => (/* binding */ liftTarget),
/* harmony export */   replaceStep: () => (/* binding */ replaceStep)
/* harmony export */ });
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ 6375);


// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.
const lower16 = 0xffff;
const factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
  return index + offset * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
const DEL_BEFORE = 1,
  DEL_AFTER = 2,
  DEL_ACROSS = 4,
  DEL_SIDE = 8;
/**
An object representing a mapped position with extra
information.
*/
class MapResult {
  /**
  @internal
  */
  constructor(
  /**
  The mapped version of the position.
  */
  pos,
  /**
  @internal
  */
  delInfo,
  /**
  @internal
  */
  recover) {
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & DEL_SIDE) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & DEL_ACROSS) > 0;
  }
}
/**
A map describing the deletions and insertions made by a step, which
can be used to find the correspondence between positions in the
pre-step version of a document and the same position in the
post-step version.
*/
class StepMap {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(
  /**
  @internal
  */
  ranges,
  /**
  @internal
  */
  inverted = false) {
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && StepMap.empty) return StepMap.empty;
  }
  /**
  @internal
  */
  recover(value) {
    let diff = 0,
      index = recoverIndex(value);
    if (!this.inverted) for (let i = 0; i < index; i++) diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[index * 3] + diff + recoverOffset(value);
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  map(pos, assoc = 1) {
    return this._map(pos, assoc, true);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let diff = 0,
      oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex],
        end = start + oldSize;
      if (pos <= end) {
        let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
        let result = start + diff + (side < 0 ? 0 : newSize);
        if (simple) return result;
        let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
        let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
        if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
        return new MapResult(result, del, recover);
      }
      diff += newSize - oldSize;
    }
    return simple ? pos + diff : new MapResult(pos + diff, 0, null);
  }
  /**
  @internal
  */
  touches(pos, recover) {
    let diff = 0,
      index = recoverIndex(recover);
    let oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex],
        end = start + oldSize;
      if (pos <= end && i == index * 3) return true;
      diff += this.ranges[i + newIndex] - oldSize;
    }
    return false;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(f) {
    let oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i],
        oldStart = start - (this.inverted ? diff : 0),
        newStart = start + (this.inverted ? 0 : diff);
      let oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex];
      f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
      diff += newSize - oldSize;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new StepMap(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(n) {
    return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
  }
}
/**
A StepMap that contains no changed ranges.
*/
StepMap.empty = new StepMap([]);
/**
A mapping represents a pipeline of zero or more [step
maps](https://prosemirror.net/docs/ref/#transform.StepMap). It has special provisions for losslessly
handling mapping positions through a series of steps in which some
steps are inverted versions of earlier steps. (This comes up when
‘[rebasing](/docs/guide/#transform.rebasing)’ steps for
collaboration or history management.)
*/
class Mapping {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(
  /**
  The step maps in this mapping.
  */
  maps = [],
  /**
  @internal
  */
  mirror,
  /**
  The starting position in the `maps` array, used when `map` or
  `mapResult` is called.
  */
  from = 0,
  /**
  The end position in the `maps` array.
  */
  to = maps.length) {
    this.maps = maps;
    this.mirror = mirror;
    this.from = from;
    this.to = to;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(from = 0, to = this.maps.length) {
    return new Mapping(this.maps, this.mirror, from, to);
  }
  /**
  @internal
  */
  copy() {
    return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(map, mirrors) {
    this.to = this.maps.push(map);
    if (mirrors != null) this.setMirror(this.maps.length - 1, mirrors);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(mapping) {
    for (let i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : undefined);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(n) {
    if (this.mirror) for (let i = 0; i < this.mirror.length; i++) if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
  }
  /**
  @internal
  */
  setMirror(n, m) {
    if (!this.mirror) this.mirror = [];
    this.mirror.push(n, m);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(mapping) {
    for (let i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : undefined);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let inverse = new Mapping();
    inverse.appendMappingInverted(this);
    return inverse;
  }
  /**
  Map a position through this mapping.
  */
  map(pos, assoc = 1) {
    if (this.mirror) return this._map(pos, assoc, true);
    for (let i = this.from; i < this.to; i++) pos = this.maps[i].map(pos, assoc);
    return pos;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let delInfo = 0;
    for (let i = this.from; i < this.to; i++) {
      let map = this.maps[i],
        result = map.mapResult(pos, assoc);
      if (result.recover != null) {
        let corr = this.getMirror(i);
        if (corr != null && corr > i && corr < this.to) {
          i = corr;
          pos = this.maps[corr].recover(result.recover);
          continue;
        }
      }
      delInfo |= result.delInfo;
      pos = result.pos;
    }
    return simple ? pos : new MapResult(pos, delInfo, null);
  }
}
const stepsByID = Object.create(null);
/**
A step object represents an atomic change. It generally applies
only to the document it was created for, since the positions
stored in it will only make sense for that document.

New steps are defined by creating classes that extend `Step`,
overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
methods, and registering your class with a unique
JSON-serialization identifier using
[`Step.jsonID`](https://prosemirror.net/docs/ref/#transform.Step^jsonID).
*/
class Step {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return StepMap.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(other) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(schema, json) {
    if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
    let type = stepsByID[json.stepType];
    if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
    return type.fromJSON(schema, json);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(id, stepClass) {
    if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
    stepsByID[id] = stepClass;
    stepClass.prototype.jsonID = id;
    return stepClass;
  }
}
/**
The result of [applying](https://prosemirror.net/docs/ref/#transform.Step.apply) a step. Contains either a
new document or a failure value.
*/
class StepResult {
  /**
  @internal
  */
  constructor(
  /**
  The transformed document, if successful.
  */
  doc,
  /**
  The failure message, if unsuccessful.
  */
  failed) {
    this.doc = doc;
    this.failed = failed;
  }
  /**
  Create a successful step result.
  */
  static ok(doc) {
    return new StepResult(doc, null);
  }
  /**
  Create a failed step result.
  */
  static fail(message) {
    return new StepResult(null, message);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(doc, from, to, slice) {
    try {
      return StepResult.ok(doc.replace(from, to, slice));
    } catch (e) {
      if (e instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.ReplaceError) return StepResult.fail(e.message);
      throw e;
    }
  }
}
function mapFragment(fragment, f, parent) {
  let mapped = [];
  for (let i = 0; i < fragment.childCount; i++) {
    let child = fragment.child(i);
    if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline) child = f(child, parent, i);
    mapped.push(child);
  }
  return prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.fromArray(mapped);
}
/**
Add a mark to all inline content between two positions.
*/
class AddMarkStep extends Step {
  /**
  Create a mark step.
  */
  constructor(
  /**
  The start of the marked range.
  */
  from,
  /**
  The end of the marked range.
  */
  to,
  /**
  The mark to add.
  */
  mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to),
      $from = doc.resolve(this.from);
    let parent = $from.node($from.sharedDepth(this.to));
    let slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(mapFragment(oldSlice.content, (node, parent) => {
      if (!node.isAtom || !parent.type.allowsMarkType(this.mark.type)) return node;
      return node.mark(this.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) return null;
    return new AddMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
}
Step.jsonID("addMark", AddMarkStep);
/**
Remove a mark from all inline content between two positions.
*/
class RemoveMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(
  /**
  The start of the unmarked range.
  */
  from,
  /**
  The end of the unmarked range.
  */
  to,
  /**
  The mark to remove.
  */
  mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to);
    let slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(mapFragment(oldSlice.content, node => {
      return node.mark(this.mark.removeFromSet(node.marks));
    }, doc), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) return null;
    return new RemoveMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
}
Step.jsonID("removeMark", RemoveMarkStep);
/**
Add a mark to a specific node.
*/
class AddNodeMarkStep extends Step {
  /**
  Create a node mark step.
  */
  constructor(
  /**
  The position of the target node.
  */
  pos,
  /**
  The mark to add.
  */
  mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (node) {
      let newSet = this.mark.addToSet(node.marks);
      if (newSet.length == node.marks.length) {
        for (let i = 0; i < node.marks.length; i++) if (!node.marks[i].isInSet(newSet)) return new AddNodeMarkStep(this.pos, node.marks[i]);
        return new AddNodeMarkStep(this.pos, this.mark);
      }
    }
    return new RemoveNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new AddNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "addNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
}
Step.jsonID("addNodeMark", AddNodeMarkStep);
/**
Remove a mark from a specific node.
*/
class RemoveNodeMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(
  /**
  The position of the target node.
  */
  pos,
  /**
  The mark to remove.
  */
  mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node || !this.mark.isInSet(node.marks)) return this;
    return new AddNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new RemoveNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
}
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);

/**
Replace a part of the document with a slice of new content.
*/
class ReplaceStep extends Step {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(
  /**
  The start position of the replaced range.
  */
  from,
  /**
  The end position of the replaced range.
  */
  to,
  /**
  The slice to insert.
  */
  slice,
  /**
  @internal
  */
  structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
    return StepResult.fromReplace(doc, this.from, this.to, this.slice);
  }
  getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  }
  invert(doc) {
    return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deletedAcross && to.deletedAcross) return null;
    return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice);
  }
  merge(other) {
    if (!(other instanceof ReplaceStep) || other.structure || this.structure) return null;
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      let slice = this.slice.size + other.slice.size == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      let slice = this.slice.size + other.slice.size == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new ReplaceStep(other.from, this.to, slice, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let json = {
      stepType: "replace",
      from: this.from,
      to: this.to
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ReplaceStep(json.from, json.to, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.fromJSON(schema, json.slice), !!json.structure);
  }
}
Step.jsonID("replace", ReplaceStep);
/**
Replace a part of the document with a slice of content, but
preserve a range of the replaced content by moving it into the
slice.
*/
class ReplaceAroundStep extends Step {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(
  /**
  The start position of the replaced range.
  */
  from,
  /**
  The end position of the replaced range.
  */
  to,
  /**
  The start of preserved range.
  */
  gapFrom,
  /**
  The end of preserved range.
  */
  gapTo,
  /**
  The slice to insert.
  */
  slice,
  /**
  The position in the slice where the preserved range should be
  inserted.
  */
  insert,
  /**
  @internal
  */
  structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
    let gap = doc.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
    let inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted) return StepResult.fail("Content does not fit in gap");
    return StepResult.fromReplace(doc, this.from, this.to, inserted);
  }
  getMap() {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
  }
  invert(doc) {
    let gap = this.gapTo - this.gapFrom;
    return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
    let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
    if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
    return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
  }
}
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
  let $from = doc.resolve(from),
    dist = to - from,
    depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    let next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function addMark(tr, from, to, mark) {
  let removed = [],
    added = [];
  let removing, adding;
  tr.doc.nodesBetween(from, to, (node, pos, parent) => {
    if (!node.isInline) return;
    let marks = node.marks;
    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      let start = Math.max(pos, from),
        end = Math.min(pos + node.nodeSize, to);
      let newSet = mark.addToSet(marks);
      for (let i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
        }
      }
      if (adding && adding.to == start) adding.to = end;else added.push(adding = new AddMarkStep(start, end, mark));
    }
  });
  removed.forEach(s => tr.step(s));
  added.forEach(s => tr.step(s));
}
function removeMark(tr, from, to, mark) {
  let matched = [],
    step = 0;
  tr.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isInline) return;
    step++;
    let toRemove = null;
    if (mark instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.MarkType) {
      let set = node.marks,
        found;
      while (found = mark.isInSet(set)) {
        (toRemove || (toRemove = [])).push(found);
        set = found.removeFromSet(set);
      }
    } else if (mark) {
      if (mark.isInSet(node.marks)) toRemove = [mark];
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      let end = Math.min(pos + node.nodeSize, to);
      for (let i = 0; i < toRemove.length; i++) {
        let style = toRemove[i],
          found;
        for (let j = 0; j < matched.length; j++) {
          let m = matched[j];
          if (m.step == step - 1 && style.eq(matched[j].style)) found = m;
        }
        if (found) {
          found.to = end;
          found.step = step;
        } else {
          matched.push({
            style,
            from: Math.max(pos, from),
            to: end,
            step
          });
        }
      }
    }
  });
  matched.forEach(m => tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
  let node = tr.doc.nodeAt(pos);
  let replSteps = [],
    cur = pos + 1;
  for (let i = 0; i < node.childCount; i++) {
    let child = node.child(i),
      end = cur + child.nodeSize;
    let allowed = match.matchType(child.type);
    if (!allowed) {
      replSteps.push(new ReplaceStep(cur, end, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty));
    } else {
      match = allowed;
      for (let j = 0; j < child.marks.length; j++) if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
      if (clearNewlines && child.isText && parentType.whitespace != "pre") {
        let m,
          newline = /\r?\n|\r/g,
          slice;
        while (m = newline.exec(child.text)) {
          if (!slice) slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
          replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
        }
      }
    }
    cur = end;
  }
  if (!match.validEnd) {
    let fill = match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty, true);
    tr.replace(cur, cur, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(fill, 0, 0));
  }
  for (let i = replSteps.length - 1; i >= 0; i--) tr.step(replSteps[i]);
}
function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
/**
Try to find a target depth to which the content in the given range
can be lifted. Will not go across
[isolating](https://prosemirror.net/docs/ref/#model.NodeSpec.isolating) parent nodes.
*/
function liftTarget(range) {
  let parent = range.parent;
  let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (let depth = range.depth;; --depth) {
    let node = range.$from.node(depth);
    let index = range.$from.index(depth),
      endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
  }
  return null;
}
function lift(tr, range, target) {
  let {
    $from,
    $to,
    depth
  } = range;
  let gapStart = $from.before(depth + 1),
    gapEnd = $to.after(depth + 1);
  let start = gapStart,
    end = gapEnd;
  let before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty,
    openStart = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $from.index(d) > 0) {
    splitting = true;
    before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from($from.node(d).copy(before));
    openStart++;
  } else {
    start--;
  }
  let after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty,
    openEnd = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $to.after(d + 1) < $to.end(d)) {
    splitting = true;
    after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from($to.node(d).copy(after));
    openEnd++;
  } else {
    end++;
  }
  tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
}
/**
Try to find a valid way to wrap the content in the given range in a
node of the given type. May introduce extra nodes around and inside
the wrapper node, if necessary. Returns null if no valid wrapping
could be found. When `innerRange` is given, that range's content is
used as the content to fit into the wrapping, instead of the
content of `range`.
*/
function findWrapping(range, nodeType, attrs = null, innerRange = range) {
  let around = findWrappingOutside(range, nodeType);
  let inner = around && findWrappingInside(innerRange, nodeType);
  if (!inner) return null;
  return around.map(withAttrs).concat({
    type: nodeType,
    attrs
  }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return {
    type,
    attrs: null
  };
}
function findWrappingOutside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let around = parent.contentMatchAt(startIndex).findWrapping(type);
  if (!around) return null;
  let outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let inner = parent.child(startIndex);
  let inside = type.contentMatch.findWrapping(inner.type);
  if (!inside) return null;
  let lastType = inside.length ? inside[inside.length - 1] : type;
  let innerMatch = lastType.contentMatch;
  for (let i = startIndex; innerMatch && i < endIndex; i++) innerMatch = innerMatch.matchType(parent.child(i).type);
  if (!innerMatch || !innerMatch.validEnd) return null;
  return inside;
}
function wrap(tr, range, wrappers) {
  let content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--) {
    if (content.size) {
      let match = wrappers[i].type.contentMatch.matchFragment(content);
      if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  }
  let start = range.start,
    end = range.end;
  tr.step(new ReplaceAroundStep(start, end, start, end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from, to, type, attrs) {
  if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
  let mapFrom = tr.steps.length;
  tr.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isTextblock && !node.hasMarkup(type, attrs) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
      let convertNewlines = null;
      if (type.schema.linebreakReplacement) {
        let pre = type.whitespace == "pre",
          supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
      }
      // Ensure all markup that isn't allowed in the new node type is cleared
      if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
      clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, undefined, convertNewlines === null);
      let mapping = tr.mapping.slice(mapFrom);
      let startM = mapping.map(pos, 1),
        endM = mapping.map(pos + node.nodeSize, 1);
      tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(type.create(attrs, null, node.marks)), 0, 0), 1, true));
      if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
      return false;
    }
  });
}
function replaceNewlines(tr, node, pos, mapFrom) {
  node.forEach((child, offset) => {
    if (child.isText) {
      let m,
        newline = /\r?\n|\r/g;
      while (m = newline.exec(child.text)) {
        let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
        tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
  node.forEach((child, offset) => {
    if (child.type == child.type.schema.linebreakReplacement) {
      let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
      tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
    }
  });
}
function canChangeType(doc, pos, type) {
  let $pos = doc.resolve(pos),
    index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type);
}
/**
Change the type, attributes, and/or marks of the node at `pos`.
When `type` isn't given, the existing node type is preserved,
*/
function setNodeMarkup(tr, pos, type, attrs, marks) {
  let node = tr.doc.nodeAt(pos);
  if (!node) throw new RangeError("No node at given position");
  if (!type) type = node.type;
  let newNode = type.create(attrs, null, marks || node.marks);
  if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
  if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
  tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(newNode), 0, 0), 1, true));
}
/**
Check whether splitting at the given position is allowed.
*/
function canSplit(doc, pos, depth = 1, typesAfter) {
  let $pos = doc.resolve(pos),
    base = $pos.depth - depth;
  let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
  for (let d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    let node = $pos.node(d),
      index = $pos.index(d);
    if (node.type.spec.isolating) return false;
    let rest = node.content.cutByIndex(index, node.childCount);
    let overrideChild = typesAfter && typesAfter[i + 1];
    if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
    let after = typesAfter && typesAfter[i] || node;
    if (!node.canReplace(index + 1, node.childCount) || !after.type.validContent(rest)) return false;
  }
  let index = $pos.indexAfter(base);
  let baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
  let $pos = tr.doc.resolve(pos),
    before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty,
    after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;
  for (let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from($pos.node(d).copy(before));
    let typeAfter = typesAfter && typesAfter[i];
    after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  tr.step(new ReplaceStep(pos, pos, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(before.append(after), depth, depth), true));
}
/**
Test whether the blocks before and after a given position can be
joined.
*/
function canJoin(doc, pos) {
  let $pos = doc.resolve(pos),
    index = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function joinable(a, b) {
  return !!(a && b && !a.isLeaf && a.canAppend(b));
}
/**
Find an ancestor of the given position that can be joined to the
block before (or after if `dir` is positive). Returns the joinable
point, if any.
*/
function joinPoint(doc, pos, dir = -1) {
  let $pos = doc.resolve(pos);
  for (let d = $pos.depth;; d--) {
    let before,
      after,
      index = $pos.index(d);
    if (d == $pos.depth) {
      before = $pos.nodeBefore;
      after = $pos.nodeAfter;
    } else if (dir > 0) {
      before = $pos.node(d + 1);
      index++;
      after = $pos.node(d).maybeChild(index);
    } else {
      before = $pos.node(d).maybeChild(index - 1);
      after = $pos.node(d + 1);
    }
    if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
    if (d == 0) break;
    pos = dir < 0 ? $pos.before(d) : $pos.after(d);
  }
}
function join(tr, pos, depth) {
  let step = new ReplaceStep(pos - depth, pos + depth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty, true);
  tr.step(step);
}
/**
Try to find a point where a node of the given type can be inserted
near `pos`, by searching up the node hierarchy when `pos` itself
isn't a valid place but is at the start or end of a node. Return
null if no position was found.
*/
function insertPoint(doc, pos, nodeType) {
  let $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
  if ($pos.parentOffset == 0) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.index(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
    if (index > 0) return null;
  }
  if ($pos.parentOffset == $pos.parent.content.size) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.indexAfter(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
    if (index < $pos.node(d).childCount) return null;
  }
  return null;
}
/**
Finds a position at or around the given position where the given
slice can be inserted. Will look at parent nodes' nearest boundary
and try there, even if the original position wasn't directly at the
start or end of that node. Returns null when no position was found.
*/
function dropPoint(doc, pos, slice) {
  let $pos = doc.resolve(pos);
  if (!slice.content.size) return pos;
  let content = slice.content;
  for (let i = 0; i < slice.openStart; i++) content = content.firstChild.content;
  for (let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (let d = $pos.depth; d >= 0; d--) {
      let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      let parent = $pos.node(d),
        fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
    }
  }
  return null;
}

/**
‘Fit’ a slice into a given position in the document, producing a
[step](https://prosemirror.net/docs/ref/#transform.Step) that inserts it. Will return null if
there's no meaningful way to insert the slice here, or inserting it
would be a no-op (an empty slice over an empty range).
*/
function replaceStep(doc, from, to = from, slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
  if (from == to && !slice.size) return null;
  let $from = doc.resolve(from),
    $to = doc.resolve(to);
  // Optimization -- avoid work if it's obvious that it's not needed.
  if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
  return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
// Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// This class tracks the state of the placement progress in the
// following properties:
//
//  - `frontier` holds a stack of `{type, match}` objects that
//    represent the open side of the replacement. It starts at
//    `$from`, then moves forward as content is placed, and is finally
//    reconciled with `$to`.
//
//  - `unplaced` is a slice that represents the content that hasn't
//    been placed yet.
//
//  - `placed` is a fragment of placed content. Its open-start value
//    is implicit in `$from`, and its open-end value in `frontier`.
class Fitter {
  constructor($from, $to, unplaced) {
    this.$from = $from;
    this.$to = $to;
    this.unplaced = unplaced;
    this.frontier = [];
    this.placed = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;
    for (let i = 0; i <= $from.depth; i++) {
      let node = $from.node(i);
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt($from.indexAfter(i))
      });
    }
    for (let i = $from.depth; i > 0; i--) this.placed = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from($from.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    // As long as there's unplaced content, try to place some of it.
    // If that fails, either increase the open score of the unplaced
    // slice, or drop nodes from it, and then try again.
    while (this.unplaced.size) {
      let fit = this.findFittable();
      if (fit) this.placeNodes(fit);else this.openMore() || this.dropNode();
    }
    // When there's inline content directly after the frontier _and_
    // directly after `this.$to`, we must generate a `ReplaceAround`
    // step that pulls that content into the node after the frontier.
    // That means the fitting must be done to the end of the textblock
    // node after `this.$to`, not `this.$to` itself.
    let moveInline = this.mustMoveInline(),
      placedSize = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from,
      $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
    if (!$to) return null;
    // If closing to `$to` succeeded, create a step
    let content = this.placed,
      openStart = $from.depth,
      openEnd = $to.depth;
    while (openStart && openEnd && content.childCount == 1) {
      // Normalize by dropping open parent nodes
      content = content.firstChild.content;
      openStart--;
      openEnd--;
    }
    let slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(content, openStart, openEnd);
    if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
    if (slice.size || $from.pos != this.$to.pos)
      // Don't generate no-op steps
      return new ReplaceStep($from.pos, $to.pos, slice);
    return null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let startDepth = this.unplaced.openStart;
    for (let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
      let node = cur.firstChild;
      if (cur.childCount > 1) openEnd = 0;
      if (node.type.spec.isolating && openEnd <= d) {
        startDepth = d;
        break;
      }
      cur = node.content;
    }
    // Only try wrapping nodes (pass 2) after finding a place without
    // wrapping failed.
    for (let pass = 1; pass <= 2; pass++) {
      for (let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
        let fragment,
          parent = null;
        if (sliceDepth) {
          parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
          fragment = parent.content;
        } else {
          fragment = this.unplaced.content;
        }
        let first = fragment.firstChild;
        for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
          let {
              type,
              match
            } = this.frontier[frontierDepth],
            wrap,
            inject = null;
          // In pass 1, if the next node matches, or there is no next
          // node but the parents look compatible, we've found a
          // place.
          if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(first), false)) : parent && type.compatibleContent(parent.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            inject
          };
          // In pass 2, look for a set of wrapping nodes that make
          // `first` fit here.
          else if (pass == 2 && first && (wrap = match.findWrapping(first.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            wrap
          };
          // Don't continue looking further up if the parent node
          // would fit here.
          if (parent && match.matchType(parent.type)) break;
        }
      }
    }
  }
  openMore() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (!inner.childCount || inner.firstChild.isLeaf) return false;
    this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
    return true;
  }
  dropNode() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (inner.childCount <= 1 && openStart > 0) {
      let openAtEnd = content.size - openStart <= openStart + inner.size;
      this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
    } else {
      this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
    }
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({
    sliceDepth,
    frontierDepth,
    parent,
    inject,
    wrap
  }) {
    while (this.depth > frontierDepth) this.closeFrontierNode();
    if (wrap) for (let i = 0; i < wrap.length; i++) this.openFrontierNode(wrap[i]);
    let slice = this.unplaced,
      fragment = parent ? parent.content : slice.content;
    let openStart = slice.openStart - sliceDepth;
    let taken = 0,
      add = [];
    let {
      match,
      type
    } = this.frontier[frontierDepth];
    if (inject) {
      for (let i = 0; i < inject.childCount; i++) add.push(inject.child(i));
      match = match.matchFragment(inject);
    }
    // Computes the amount of (end) open nodes at the end of the
    // fragment. When 0, the parent is open, but no more. When
    // negative, nothing is open.
    let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
    // Scan over the fragment, fitting as many child nodes as
    // possible.
    while (taken < fragment.childCount) {
      let next = fragment.child(taken),
        matches = match.matchType(next.type);
      if (!matches) break;
      taken++;
      if (taken > 1 || openStart == 0 || next.content.size) {
        // Drop empty open nodes
        match = matches;
        add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
      }
    }
    let toEnd = taken == fragment.childCount;
    if (!toEnd) openEndCount = -1;
    this.placed = addToFragment(this.placed, frontierDepth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(add));
    this.frontier[frontierDepth].match = match;
    // If the parent types match, and the entire node was moved, and
    // it's not open, close this frontier node right away.
    if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
    // Add new frontier nodes for any open nodes at the end.
    for (let i = 0, cur = fragment; i < openEndCount; i++) {
      let node = cur.lastChild;
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt(node.childCount)
      });
      cur = node.content;
    }
    // Update `this.unplaced`. Drop the entire node from which we
    // placed it we got to its end, otherwise just drop the placed
    // nodes.
    this.unplaced = !toEnd ? new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let top = this.frontier[this.depth],
      level;
    if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
    let {
        depth
      } = this.$to,
      after = this.$to.after(depth);
    while (depth > 1 && after == this.$to.end(--depth)) ++after;
    return after;
  }
  findCloseLevel($to) {
    scan: for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
      let {
        match,
        type
      } = this.frontier[i];
      let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
      let fit = contentAfterFits($to, i, type, match, dropInner);
      if (!fit) continue;
      for (let d = i - 1; d >= 0; d--) {
        let {
          match,
          type
        } = this.frontier[d];
        let matches = contentAfterFits($to, d, type, match, true);
        if (!matches || matches.childCount) continue scan;
      }
      return {
        depth: i,
        fit,
        move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
      };
    }
  }
  close($to) {
    let close = this.findCloseLevel($to);
    if (!close) return null;
    while (this.depth > close.depth) this.closeFrontierNode();
    if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
    $to = close.move;
    for (let d = close.depth + 1; d <= $to.depth; d++) {
      let node = $to.node(d),
        add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
      this.openFrontierNode(node.type, node.attrs, add);
    }
    return $to;
  }
  openFrontierNode(type, attrs = null, content) {
    let top = this.frontier[this.depth];
    top.match = top.match.matchType(type);
    this.placed = addToFragment(this.placed, this.depth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(type.create(attrs, content)));
    this.frontier.push({
      type,
      match: type.contentMatch
    });
  }
  closeFrontierNode() {
    let open = this.frontier.pop();
    let add = open.match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty, true);
    if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
  }
}
function dropFromFragment(fragment, depth, count) {
  if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
  if (depth == 0) return fragment.append(content);
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
  for (let i = 0; i < depth; i++) fragment = fragment.firstChild.content;
  return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0) return node;
  let frag = node.content;
  if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty, true));
  }
  return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
  let node = $to.node(depth),
    index = open ? $to.indexAfter(depth) : $to.index(depth);
  if (index == node.childCount && !type.compatibleContent(node.type)) return null;
  let fit = match.fillBefore(node.content, true, index);
  return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
  for (let i = start; i < fragment.childCount; i++) if (!type.allowsMarks(fragment.child(i).marks)) return true;
  return false;
}
function definesContent(type) {
  return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from, to, slice) {
  if (!slice.size) return tr.deleteRange(from, to);
  let $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
  let targetDepths = coveredDepths($from, tr.doc.resolve(to));
  // Can't replace the whole document, so remove 0 if it's present
  if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
  // Negative numbers represent not expansion over the whole node at
  // that depth, but replacing from $from.before(-D) to $to.pos.
  let preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  // This loop picks a preferred target depth, if one of the covering
  // depths is not outside of a defining node, and adds negative
  // depths for any depth that has $from at its start and does not
  // cross a defining node.
  for (let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    let spec = $from.node(d).type.spec;
    if (spec.defining || spec.definingAsContext || spec.isolating) break;
    if (targetDepths.indexOf(d) > -1) preferredTarget = d;else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
  }
  // Try to fit each possible depth of the slice into each possible
  // target depth, starting with the preferred depths.
  let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  let leftNodes = [],
    preferredDepth = slice.openStart;
  for (let content = slice.content, i = 0;; i++) {
    let node = content.firstChild;
    leftNodes.push(node);
    if (i == slice.openStart) break;
    content = node.content;
  }
  // Back up preferredDepth to cover defining textblocks directly
  // above it, possibly skipping a non-defining textblock.
  for (let d = preferredDepth - 1; d >= 0; d--) {
    let leftNode = leftNodes[d],
      def = definesContent(leftNode.type);
    if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;else if (def || !leftNode.type.isTextblock) break;
  }
  for (let j = slice.openStart; j >= 0; j--) {
    let openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    let insert = leftNodes[openDepth];
    if (!insert) continue;
    for (let i = 0; i < targetDepths.length; i++) {
      // Loop over possible expansion levels, starting with the
      // preferred one
      let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length],
        expand = true;
      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }
      let parent = $from.node(targetDepth - 1),
        index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
    }
  }
  let startSteps = tr.steps.length;
  for (let i = targetDepths.length - 1; i >= 0; i--) {
    tr.replace(from, to, slice);
    if (tr.steps.length > startSteps) break;
    let depth = targetDepths[i];
    if (depth < 0) continue;
    from = $from.before(depth);
    to = $to.after(depth);
  }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    let first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    let match = parent.contentMatchAt(0);
    let start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty, true));
  }
  return fragment;
}
function replaceRangeWith(tr, from, to, node) {
  if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
    let point = insertPoint(tr.doc, from, node.type);
    if (point != null) from = to = point;
  }
  tr.replaceRange(from, to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(node), 0, 0));
}
function deleteRange(tr, from, to) {
  let $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  let covered = coveredDepths($from, $to);
  for (let i = 0; i < covered.length; i++) {
    let depth = covered[i],
      last = i == covered.length - 1;
    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
  }
  for (let d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d) return tr.delete($from.before(d), to);
  }
  tr.delete(from, to);
}
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths($from, $to) {
  let result = [],
    minDepth = Math.min($from.depth, $to.depth);
  for (let d = minDepth; d >= 0; d--) {
    let start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
    if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
  }
  return result;
}

/**
Update an attribute in a specific node.
*/
class AttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(
  /**
  The position of the target node.
  */
  pos,
  /**
  The attribute to set.
  */
  attr,
  // The attribute's new value.
  value) {
    super();
    this.pos = pos;
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at attribute step's position");
    let attrs = Object.create(null);
    for (let name in node.attrs) attrs[name] = node.attrs[name];
    attrs[this.attr] = this.value;
    let updated = node.type.create(attrs, null, node.marks);
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new AttrStep(pos.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new AttrStep(json.pos, json.attr, json.value);
  }
}
Step.jsonID("attr", AttrStep);
/**
Update an attribute in the doc node.
*/
class DocAttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(
  /**
  The attribute to set.
  */
  attr,
  // The attribute's new value.
  value) {
    super();
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let attrs = Object.create(null);
    for (let name in doc.attrs) attrs[name] = doc.attrs[name];
    attrs[this.attr] = this.value;
    let updated = doc.type.create(attrs, doc.content, doc.marks);
    return StepResult.ok(updated);
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new DocAttrStep(this.attr, doc.attrs[this.attr]);
  }
  map(mapping) {
    return this;
  }
  toJSON() {
    return {
      stepType: "docAttr",
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new DocAttrStep(json.attr, json.value);
  }
}
Step.jsonID("docAttr", DocAttrStep);

/**
@internal
*/
let TransformError = class extends Error {};
TransformError = function TransformError(message) {
  let err = Error.call(this, message);
  err.__proto__ = TransformError.prototype;
  return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
/**
Abstraction to build up and track an array of
[steps](https://prosemirror.net/docs/ref/#transform.Step) representing a document transformation.

Most transforming methods return the `Transform` object itself, so
that they can be chained.
*/
class Transform {
  /**
  Create a transform that starts with the given document.
  */
  constructor(
  /**
  The current document (the result of applying the steps in the
  transform).
  */
  doc) {
    this.doc = doc;
    /**
    The steps in this transform.
    */
    this.steps = [];
    /**
    The documents before each of the steps.
    */
    this.docs = [];
    /**
    A mapping with the maps for each of the steps in this transform.
    */
    this.mapping = new Mapping();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(step) {
    let result = this.maybeStep(step);
    if (result.failed) throw new TransformError(result.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(step) {
    let result = step.apply(this.doc);
    if (!result.failed) this.addStep(step, result.doc);
    return result;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(step, doc) {
    this.docs.push(this.doc);
    this.steps.push(step);
    this.mapping.appendMap(step.getMap());
    this.doc = doc;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(from, to = from, slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty) {
    let step = replaceStep(this.doc, from, to, slice);
    if (step) this.step(step);
    return this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(from, to, content) {
    return this.replace(from, to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(content), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(from, to) {
    return this.replace(from, to, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(pos, content) {
    return this.replaceWith(pos, pos, content);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(from, to, slice) {
    replaceRange(this, from, to, slice);
    return this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(from, to, node) {
    replaceRangeWith(this, from, to, node);
    return this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(from, to) {
    deleteRange(this, from, to);
    return this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(range, target) {
    lift(this, range, target);
    return this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(pos, depth = 1) {
    join(this, pos, depth);
    return this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(range, wrappers) {
    wrap(this, range, wrappers);
    return this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(from, to = from, type, attrs = null) {
    setBlockType(this, from, to, type, attrs);
    return this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(pos, type, attrs = null, marks) {
    setNodeMarkup(this, pos, type, attrs, marks);
    return this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(pos, attr, value) {
    this.step(new AttrStep(pos, attr, value));
    return this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(attr, value) {
    this.step(new DocAttrStep(attr, value));
    return this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(pos, mark) {
    this.step(new AddNodeMarkStep(pos, mark));
    return this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(pos, mark) {
    if (!(mark instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Mark)) {
      let node = this.doc.nodeAt(pos);
      if (!node) throw new RangeError("No node at position " + pos);
      mark = mark.isInSet(node.marks);
      if (!mark) return this;
    }
    this.step(new RemoveNodeMarkStep(pos, mark));
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(pos, depth = 1, typesAfter) {
    split(this, pos, depth, typesAfter);
    return this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(from, to, mark) {
    addMark(this, from, to, mark);
    return this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(from, to, mark) {
    removeMark(this, from, to, mark);
    return this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(pos, parentType, match) {
    clearIncompatible(this, pos, parentType, match);
    return this;
  }
}


/***/ }),

/***/ 2677:
/*!*****************************************************!*\
  !*** ./node_modules/prosemirror-view/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Decoration: () => (/* binding */ Decoration),
/* harmony export */   DecorationSet: () => (/* binding */ DecorationSet),
/* harmony export */   EditorView: () => (/* binding */ EditorView),
/* harmony export */   __endComposition: () => (/* binding */ __endComposition),
/* harmony export */   __parseFromClipboard: () => (/* binding */ __parseFromClipboard),
/* harmony export */   __serializeForClipboard: () => (/* binding */ __serializeForClipboard)
/* harmony export */ });
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ 7195);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ 6375);
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-transform */ 2576);



const domIndex = function (node) {
  for (var index = 0;; index++) {
    node = node.previousSibling;
    if (!node) return index;
  }
};
const parentNode = function (node) {
  let parent = node.assignedSlot || node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
let reusedRange = null;
// Note that this will always return the same range, because DOM range
// objects are every expensive, and keep slowing down subsequent DOM
// updates, for some reason.
const textRange = function (node, from, to) {
  let range = reusedRange || (reusedRange = document.createRange());
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from || 0);
  return range;
};
const clearReusedRange = function () {
  reusedRange = null;
};
// Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)
const isEquivalentPosition = function (node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
};
const atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node, off, targetNode, targetOff, dir) {
  for (;;) {
    if (node == targetNode && off == targetOff) return true;
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      let parent = node.parentNode;
      if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false") return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      node = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (node.contentEditable == "false") return false;
      off = dir < 0 ? nodeSize(node) : 0;
    } else {
      return false;
    }
  }
}
function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function textNodeBefore$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset) return node;
    if (node.nodeType == 1 && offset > 0) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset - 1];
      offset = nodeSize(node);
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node);
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function textNodeAfter$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset < node.nodeValue.length) return node;
    if (node.nodeType == 1 && offset < node.childNodes.length) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset];
      offset = 0;
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node) + 1;
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function isOnEdge(node, offset, parent) {
  for (let atStart = offset == 0, atEnd = offset == nodeSize(node); atStart || atEnd;) {
    if (node == parent) return true;
    let index = domIndex(node);
    node = node.parentNode;
    if (!node) return false;
    atStart = atStart && index == 0;
    atEnd = atEnd && index == nodeSize(node);
  }
}
function hasBlockDesc(dom) {
  let desc;
  for (let cur = dom; cur; cur = cur.parentNode) if (desc = cur.pmViewDesc) break;
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
// Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
// (isCollapsed inappropriately returns true in shadow dom)
const selectionCollapsed = function (domSel) {
  return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
};
function keyEvent(keyCode, key) {
  let event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function deepActiveElement(doc) {
  let elt = doc.activeElement;
  while (elt && elt.shadowRoot) elt = elt.shadowRoot.activeElement;
  return elt;
}
function caretFromPoint(doc, x, y) {
  if (doc.caretPositionFromPoint) {
    try {
      // Firefox throws for this call in hard-to-predict circumstances (#994)
      let pos = doc.caretPositionFromPoint(x, y);
      if (pos) return {
        node: pos.offsetNode,
        offset: pos.offset
      };
    } catch (_) {}
  }
  if (doc.caretRangeFromPoint) {
    let range = doc.caretRangeFromPoint(x, y);
    if (range) return {
      node: range.startContainer,
      offset: range.startOffset
    };
  }
}
const nav = typeof navigator != "undefined" ? navigator : null;
const doc = typeof document != "undefined" ? document : null;
const agent = nav && nav.userAgent || "";
const ie_edge = /Edge\/(\d+)/.exec(agent);
const ie_upto10 = /MSIE \d/.exec(agent);
const ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
const ie = !!(ie_upto10 || ie_11up || ie_edge);
const ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
const gecko = !ie && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
const _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
const chrome = !!_chrome;
const chrome_version = _chrome ? +_chrome[1] : 0;
const safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
// Is true for both iOS and iPadOS for convenience
const ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
const mac = ios || (nav ? /Mac/.test(nav.platform) : false);
const windows = nav ? /Win/.test(nav.platform) : false;
const android = /Android \d/.test(agent);
const webkit = !!doc && "webkitFontSmoothing" in doc.documentElement.style;
const webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(doc) {
  let vp = doc.defaultView && doc.defaultView.visualViewport;
  if (vp) return {
    left: 0,
    right: vp.width,
    top: 0,
    bottom: vp.height
  };
  return {
    left: 0,
    right: doc.documentElement.clientWidth,
    top: 0,
    bottom: doc.documentElement.clientHeight
  };
}
function getSide(value, side) {
  return typeof value == "number" ? value : value[side];
}
function clientRect(node) {
  let rect = node.getBoundingClientRect();
  // Adjust for elements with style "transform: scale()"
  let scaleX = rect.width / node.offsetWidth || 1;
  let scaleY = rect.height / node.offsetHeight || 1;
  // Make sure scrollbar width isn't included in the rectangle
  return {
    left: rect.left,
    right: rect.left + node.clientWidth * scaleX,
    top: rect.top,
    bottom: rect.top + node.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect, startDOM) {
  let scrollThreshold = view.someProp("scrollThreshold") || 0,
    scrollMargin = view.someProp("scrollMargin") || 5;
  let doc = view.dom.ownerDocument;
  for (let parent = startDOM || view.dom;; parent = parentNode(parent)) {
    if (!parent) break;
    if (parent.nodeType != 1) continue;
    let elt = parent;
    let atTop = elt == doc.body;
    let bounding = atTop ? windowRect(doc) : clientRect(elt);
    let moveX = 0,
      moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top")) moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom")) moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    if (rect.left < bounding.left + getSide(scrollThreshold, "left")) moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));else if (rect.right > bounding.right - getSide(scrollThreshold, "right")) moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
    if (moveX || moveY) {
      if (atTop) {
        doc.defaultView.scrollBy(moveX, moveY);
      } else {
        let startX = elt.scrollLeft,
          startY = elt.scrollTop;
        if (moveY) elt.scrollTop += moveY;
        if (moveX) elt.scrollLeft += moveX;
        let dX = elt.scrollLeft - startX,
          dY = elt.scrollTop - startY;
        rect = {
          left: rect.left - dX,
          top: rect.top - dY,
          right: rect.right - dX,
          bottom: rect.bottom - dY
        };
      }
    }
    if (atTop || /^(fixed|sticky)$/.test(getComputedStyle(parent).position)) break;
  }
}
// Store the scroll position of the editor's parent nodes, along with
// the top position of an element near the top of the editor, which
// will be used to make sure the visible viewport remains stable even
// when the size of the content above changes.
function storeScrollPos(view) {
  let rect = view.dom.getBoundingClientRect(),
    startY = Math.max(0, rect.top);
  let refDOM, refTop;
  for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
    let dom = view.root.elementFromPoint(x, y);
    if (!dom || dom == view.dom || !view.dom.contains(dom)) continue;
    let localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return {
    refDOM: refDOM,
    refTop: refTop,
    stack: scrollStack(view.dom)
  };
}
function scrollStack(dom) {
  let stack = [],
    doc = dom.ownerDocument;
  for (let cur = dom; cur; cur = parentNode(cur)) {
    stack.push({
      dom: cur,
      top: cur.scrollTop,
      left: cur.scrollLeft
    });
    if (dom == doc) break;
  }
  return stack;
}
// Reset the scroll position of the editor's parent nodes to that what
// it was before, when storeScrollPos was called.
function resetScrollPos({
  refDOM,
  refTop,
  stack
}) {
  let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (let i = 0; i < stack.length; i++) {
    let {
      dom,
      top,
      left
    } = stack[i];
    if (dom.scrollTop != top + dTop) dom.scrollTop = top + dTop;
    if (dom.scrollLeft != left) dom.scrollLeft = left;
  }
}
let preventScrollSupported = null;
// Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.
function focusPreventScroll(dom) {
  if (dom.setActive) return dom.setActive(); // in IE
  if (preventScrollSupported) return dom.focus(preventScrollSupported);
  let stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = {
        preventScroll: true
      };
      return true;
    }
  } : undefined);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node, coords) {
  let closest,
    dxClosest = 2e8,
    coordsClosest,
    offset = 0;
  let rowBot = coords.top,
    rowTop = coords.top;
  let firstBelow, coordsBelow;
  for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    let rects;
    if (child.nodeType == 1) rects = child.getClientRects();else if (child.nodeType == 3) rects = textRange(child).getClientRects();else continue;
    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {
            left: rect.right < coords.left ? rect.right : rect.left,
            top: coords.top
          } : coords;
          if (child.nodeType == 1 && dx) offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          continue;
        }
      } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
        firstBelow = child;
        coordsBelow = {
          left: Math.max(rect.left, Math.min(rect.right, coords.left)),
          top: rect.top
        };
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom)) offset = childIndex + 1;
    }
  }
  if (!closest && firstBelow) {
    closest = firstBelow;
    coordsClosest = coordsBelow;
    dxClosest = 0;
  }
  if (closest && closest.nodeType == 3) return findOffsetInText(closest, coordsClosest);
  if (!closest || dxClosest && closest.nodeType == 1) return {
    node,
    offset
  };
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node, coords) {
  let len = node.nodeValue.length;
  let range = document.createRange();
  for (let i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    let rect = singleRect(range, 1);
    if (rect.top == rect.bottom) continue;
    if (inRect(coords, rect)) return {
      node,
      offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)
    };
  }
  return {
    node,
    offset: 0
  };
}
function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
}
function targetKludge(dom, coords) {
  let parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left) return parent;
  return dom;
}
function posFromElement(view, elt, coords) {
  let {
      node,
      offset
    } = findOffsetInNode(elt, coords),
    bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    let rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset, bias);
}
function posFromCaret(view, node, offset, coords) {
  // Browser (in caretPosition/RangeFromPoint) will agressively
  // normalize towards nearby inline nodes. Since we are interested in
  // positions between block nodes too, we first walk up the hierarchy
  // of nodes to see if there are block nodes that the coordinates
  // fall outside of. If so, we take the position before/after that
  // block. If not, we call `posFromDOM` on the raw node/offset.
  let outsideBlock = -1;
  for (let cur = node, sawBlock = false;;) {
    if (cur == view.dom) break;
    let desc = view.docView.nearestDesc(cur, true);
    if (!desc) return null;
    if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent && !sawBlock || !desc.contentDOM)) {
      let rect = desc.dom.getBoundingClientRect();
      if (desc.node.isBlock && desc.parent && !sawBlock) {
        sawBlock = true;
        if (rect.left > coords.left || rect.top > coords.top) outsideBlock = desc.posBefore;else if (rect.right < coords.left || rect.bottom < coords.top) outsideBlock = desc.posAfter;
      }
      if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
        // If we are inside a leaf, return the side of the leaf closer to the coords
        let before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
        return before ? desc.posBefore : desc.posAfter;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outsideBlock > -1 ? outsideBlock : view.docView.posFromDOM(node, offset, -1);
}
function elementFromPoint(element, coords, box) {
  let len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI;;) {
      let child = element.childNodes[i];
      if (child.nodeType == 1) {
        let rects = child.getClientRects();
        for (let j = 0; j < rects.length; j++) {
          let rect = rects[j];
          if (inRect(coords, rect)) return elementFromPoint(child, coords, rect);
        }
      }
      if ((i = (i + 1) % len) == startI) break;
    }
  }
  return element;
}
// Given an x,y position on the editor, get the position in the document.
function posAtCoords(view, coords) {
  let doc = view.dom.ownerDocument,
    node,
    offset = 0;
  let caret = caretFromPoint(doc, coords.left, coords.top);
  if (caret) ({
    node,
    offset
  } = caret);
  let elt = (view.root.elementFromPoint ? view.root : doc).elementFromPoint(coords.left, coords.top);
  let pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    let box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) return null;
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) return null;
  }
  // Safari's caretRangeFromPoint returns nonsense when on a draggable element
  if (safari) {
    for (let p = elt; node && p; p = parentNode(p)) if (p.draggable) node = undefined;
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (gecko && node.nodeType == 1) {
      // Firefox will sometimes return offsets into <input> nodes, which
      // have no actual children, from caretPositionFromPoint (#953)
      offset = Math.min(offset, node.childNodes.length);
      // It'll also move the returned position before image nodes,
      // even if those are behind it.
      if (offset < node.childNodes.length) {
        let next = node.childNodes[offset],
          box;
        if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top) offset++;
      }
    }
    let prev;
    // When clicking above the right side of an uneditable node, Chrome will report a cursor position after that node.
    if (webkit && offset && node.nodeType == 1 && (prev = node.childNodes[offset - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top) offset--;
    // Suspiciously specific kludge to work around caret*FromPoint
    // never returning a position at the end of the document
    if (node == view.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom) pos = view.state.doc.content.size;
    // Ignore positions directly after a BR, since caret*FromPoint
    // 'round up' positions that would be more accurately placed
    // before the BR node.
    else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR") pos = posFromCaret(view, node, offset, coords);
  }
  if (pos == null) pos = posFromElement(view, elt, coords);
  let desc = view.docView.nearestDesc(elt, true);
  return {
    pos,
    inside: desc ? desc.posAtStart - desc.border : -1
  };
}
function nonZero(rect) {
  return rect.top < rect.bottom || rect.left < rect.right;
}
function singleRect(target, bias) {
  let rects = target.getClientRects();
  if (rects.length) {
    let first = rects[bias < 0 ? 0 : rects.length - 1];
    if (nonZero(first)) return first;
  }
  return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
}
const BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
// Given a position in the document model, get a bounding box of the
// character at that position, relative to the window.
function coordsAtPos(view, pos, side) {
  let {
    node,
    offset,
    atom
  } = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
  let supportEmptyRange = webkit || gecko;
  if (node.nodeType == 3) {
    // These browsers support querying empty text ranges. Prefer that in
    // bidi context or when at the end of a node.
    if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset : offset == node.nodeValue.length))) {
      let rect = singleRect(textRange(node, offset, offset), side);
      // Firefox returns bad results (the position before the space)
      // when querying a position directly after line-broken
      // whitespace. Detect this situation and and kludge around it
      if (gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
        let rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
        if (rectBefore.top == rect.top) {
          let rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
          if (rectAfter.top != rect.top) return flattenV(rectAfter, rectAfter.left < rectBefore.left);
        }
      }
      return rect;
    } else {
      let from = offset,
        to = offset,
        takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset == node.nodeValue.length) {
        from--;
        takeSide = 1;
      } else if (side < 0) {
        from--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node, from, to), takeSide), takeSide < 0);
    }
  }
  let $dom = view.state.doc.resolve(pos - (atom || 0));
  // Return a horizontal line in block context
  if (!$dom.parent.inlineContent) {
    if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
      let before = node.childNodes[offset - 1];
      if (before.nodeType == 1) return flattenH(before.getBoundingClientRect(), false);
    }
    if (atom == null && offset < nodeSize(node)) {
      let after = node.childNodes[offset];
      if (after.nodeType == 1) return flattenH(after.getBoundingClientRect(), true);
    }
    return flattenH(node.getBoundingClientRect(), side >= 0);
  }
  // Inline, not in text node (this is not Bidi-safe)
  if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
    let before = node.childNodes[offset - 1];
    let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1))
    // BR nodes tend to only return the rectangle before them.
    // Only use them if they are the last element in their parent
    : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
    if (target) return flattenV(singleRect(target, 1), false);
  }
  if (atom == null && offset < nodeSize(node)) {
    let after = node.childNodes[offset];
    while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords) after = after.nextSibling;
    let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
    if (target) return flattenV(singleRect(target, -1), true);
  }
  // All else failed, just try to get a rectangle for the target node
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
}
function flattenV(rect, left) {
  if (rect.width == 0) return rect;
  let x = left ? rect.left : rect.right;
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: x,
    right: x
  };
}
function flattenH(rect, top) {
  if (rect.height == 0) return rect;
  let y = top ? rect.top : rect.bottom;
  return {
    top: y,
    bottom: y,
    left: rect.left,
    right: rect.right
  };
}
function withFlushedState(view, state, f) {
  let viewState = view.state,
    active = view.root.activeElement;
  if (viewState != state) view.updateState(state);
  if (active != view.dom) view.focus();
  try {
    return f();
  } finally {
    if (viewState != state) view.updateState(viewState);
    if (active != view.dom && active) active.focus();
  }
}
// Whether vertical position motion in a given direction
// from a position would leave a text block.
function endOfTextblockVertical(view, state, dir) {
  let sel = state.selection;
  let $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state, () => {
    let {
      node: dom
    } = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
    for (;;) {
      let nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) break;
      if (nearest.node.isBlock) {
        dom = nearest.contentDOM || nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    let coords = coordsAtPos(view, $pos.pos, 1);
    for (let child = dom.firstChild; child; child = child.nextSibling) {
      let boxes;
      if (child.nodeType == 1) boxes = child.getClientRects();else if (child.nodeType == 3) boxes = textRange(child, 0, child.nodeValue.length).getClientRects();else continue;
      for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2)) return false;
      }
    }
    return true;
  });
}
const maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state, dir) {
  let {
    $head
  } = state.selection;
  if (!$head.parent.isTextblock) return false;
  let offset = $head.parentOffset,
    atStart = !offset,
    atEnd = offset == $head.parent.content.size;
  let sel = view.domSelection();
  // If the textblock is all LTR, or the browser doesn't support
  // Selection.modify (Edge), fall back to a primitive approach
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify) return dir == "left" || dir == "backward" ? atStart : atEnd;
  return withFlushedState(view, state, () => {
    // This is a huge hack, but appears to be the best we can
    // currently do: use `Selection.modify` to move the selection by
    // one character, and see if that moves the cursor out of the
    // textblock (or doesn't move it at all, when at the start/end of
    // the document).
    let {
      focusNode: oldNode,
      focusOffset: oldOff,
      anchorNode,
      anchorOffset
    } = view.domSelectionRange();
    let oldBidiLevel = sel.caretBidiLevel // Only for Firefox
    ;
    sel.modify("move", dir, "character");
    let parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    let {
      focusNode: newNode,
      focusOffset: newOff
    } = view.domSelectionRange();
    let result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
    // Restore the previous selection
    try {
      sel.collapse(anchorNode, anchorOffset);
      if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend) sel.extend(oldNode, oldOff);
    } catch (_) {}
    if (oldBidiLevel != null) sel.caretBidiLevel = oldBidiLevel;
    return result;
  });
}
let cachedState = null;
let cachedDir = null;
let cachedResult = false;
function endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir) return cachedResult;
  cachedState = state;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
}

// View descriptions are data structures that describe the DOM that is
// used to represent the editor's content. They are used for:
//
// - Incremental redrawing when the document changes
//
// - Figuring out what part of the document a given DOM position
//   corresponds to
//
// - Wiring in custom implementations of the editing interface for a
//   given node
//
// They form a doubly-linked mutable tree, starting at `view.docView`.
const NOT_DIRTY = 0,
  CHILD_DIRTY = 1,
  CONTENT_DIRTY = 2,
  NODE_DIRTY = 3;
// Superclass for the various kinds of descriptions. Defines their
// basic structure and shared methods.
class ViewDesc {
  constructor(parent, children, dom,
  // This is the node that holds the child views. It may be null for
  // descs that don't have children.
  contentDOM) {
    this.parent = parent;
    this.children = children;
    this.dom = dom;
    this.contentDOM = contentDOM;
    this.dirty = NOT_DIRTY;
    // An expando property on the DOM node provides a link back to its
    // description.
    dom.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(widget) {
    return false;
  }
  matchesMark(mark) {
    return false;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return false;
  }
  matchesHack(nodeName) {
    return false;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(event) {
    return false;
  }
  // The size of the content represented by this desc.
  get size() {
    let size = 0;
    for (let i = 0; i < this.children.length; i++) size += this.children[i].size;
    return size;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = undefined;
    if (this.dom.pmViewDesc == this) this.dom.pmViewDesc = undefined;
    for (let i = 0; i < this.children.length; i++) this.children[i].destroy();
  }
  posBeforeChild(child) {
    for (let i = 0, pos = this.posAtStart;; i++) {
      let cur = this.children[i];
      if (cur == child) return pos;
      pos += cur.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(dom, offset, bias) {
    // If the DOM position is in the content, use the child desc after
    // it to figure out a position.
    if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
      if (bias < 0) {
        let domBefore, desc;
        if (dom == this.contentDOM) {
          domBefore = dom.childNodes[offset - 1];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domBefore = dom.previousSibling;
        }
        while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) domBefore = domBefore.previousSibling;
        return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
      } else {
        let domAfter, desc;
        if (dom == this.contentDOM) {
          domAfter = dom.childNodes[offset];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domAfter = dom.nextSibling;
        }
        while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this)) domAfter = domAfter.nextSibling;
        return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
      }
    }
    // Otherwise, use various heuristics, falling back on the bias
    // parameter, to determine whether to return the position at the
    // start or at the end of this view desc.
    let atEnd;
    if (dom == this.dom && this.contentDOM) {
      atEnd = offset > domIndex(this.contentDOM);
    } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
    } else if (this.dom.firstChild) {
      if (offset == 0) for (let search = dom;; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = false;
          break;
        }
        if (search.previousSibling) break;
      }
      if (atEnd == null && offset == dom.childNodes.length) for (let search = dom;; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = true;
          break;
        }
        if (search.nextSibling) break;
      }
    }
    return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(dom, onlyNodes = false) {
    for (let first = true, cur = dom; cur; cur = cur.parentNode) {
      let desc = this.getDesc(cur),
        nodeDOM;
      if (desc && (!onlyNodes || desc.node)) {
        // If dom is outside of this desc's nodeDOM, don't count it.
        if (first && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom)) first = false;else return desc;
      }
    }
  }
  getDesc(dom) {
    let desc = dom.pmViewDesc;
    for (let cur = desc; cur; cur = cur.parent) if (cur == this) return desc;
  }
  posFromDOM(dom, offset, bias) {
    for (let scan = dom; scan; scan = scan.parentNode) {
      let desc = this.getDesc(scan);
      if (desc) return desc.localPosFromDOM(dom, offset, bias);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(pos) {
    for (let i = 0, offset = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (offset == pos && end != offset) {
        while (!child.border && child.children.length) child = child.children[0];
        return child;
      }
      if (pos < end) return child.descAt(pos - offset - child.border);
      offset = end;
    }
  }
  domFromPos(pos, side) {
    if (!this.contentDOM) return {
      node: this.dom,
      offset: 0,
      atom: pos + 1
    };
    // First find the position in the child array
    let i = 0,
      offset = 0;
    for (let curPos = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = curPos + child.size;
      if (end > pos || child instanceof TrailingHackViewDesc) {
        offset = pos - curPos;
        break;
      }
      curPos = end;
    }
    // If this points into the middle of a child, call through
    if (offset) return this.children[i].domFromPos(offset - this.children[i].border, side);
    // Go back if there were any zero-length widgets with side >= 0 before this point
    for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {}
    // Scan towards the first useable node
    if (side <= 0) {
      let prev,
        enter = true;
      for (;; i--, enter = false) {
        prev = i ? this.children[i - 1] : null;
        if (!prev || prev.dom.parentNode == this.contentDOM) break;
      }
      if (prev && side && enter && !prev.border && !prev.domAtom) return prev.domFromPos(prev.size, side);
      return {
        node: this.contentDOM,
        offset: prev ? domIndex(prev.dom) + 1 : 0
      };
    } else {
      let next,
        enter = true;
      for (;; i++, enter = false) {
        next = i < this.children.length ? this.children[i] : null;
        if (!next || next.dom.parentNode == this.contentDOM) break;
      }
      if (next && enter && !next.border && !next.domAtom) return next.domFromPos(0, side);
      return {
        node: this.contentDOM,
        offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length
      };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(from, to, base = 0) {
    if (this.children.length == 0) return {
      node: this.contentDOM,
      from,
      to,
      fromOffset: 0,
      toOffset: this.contentDOM.childNodes.length
    };
    let fromOffset = -1,
      toOffset = -1;
    for (let offset = base, i = 0;; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (fromOffset == -1 && from <= end) {
        let childBase = offset + child.border;
        // FIXME maybe descend mark views to parse a narrower range?
        if (from >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM)) return child.parseRange(from, to, childBase);
        from = offset;
        for (let j = i; j > 0; j--) {
          let prev = this.children[j - 1];
          if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
            fromOffset = domIndex(prev.dom) + 1;
            break;
          }
          from -= prev.size;
        }
        if (fromOffset == -1) fromOffset = 0;
      }
      if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
        to = end;
        for (let j = i + 1; j < this.children.length; j++) {
          let next = this.children[j];
          if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
            toOffset = domIndex(next.dom);
            break;
          }
          to += next.size;
        }
        if (toOffset == -1) toOffset = this.contentDOM.childNodes.length;
        break;
      }
      offset = end;
    }
    return {
      node: this.contentDOM,
      from,
      to,
      fromOffset,
      toOffset
    };
  }
  emptyChildAt(side) {
    if (this.border || !this.contentDOM || !this.children.length) return false;
    let child = this.children[side < 0 ? 0 : this.children.length - 1];
    return child.size == 0 || child.emptyChildAt(side);
  }
  domAfterPos(pos) {
    let {
      node,
      offset
    } = this.domFromPos(pos, 0);
    if (node.nodeType != 1 || offset == node.childNodes.length) throw new RangeError("No node after pos " + pos);
    return node.childNodes[offset];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(anchor, head, root, force = false) {
    // If the selection falls entirely in a child, give it to that child
    let from = Math.min(anchor, head),
      to = Math.max(anchor, head);
    for (let i = 0, offset = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (from > offset && to < end) return child.setSelection(anchor - offset - child.border, head - offset - child.border, root, force);
      offset = end;
    }
    let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
    let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
    let domSel = root.getSelection();
    let brKludge = false;
    // On Firefox, using Selection.collapse to put the cursor after a
    // BR node for some reason doesn't always work (#1073). On Safari,
    // the cursor sometimes inexplicable visually lags behind its
    // reported position in such situations (#1092).
    if ((gecko || safari) && anchor == head) {
      let {
        node,
        offset
      } = anchorDOM;
      if (node.nodeType == 3) {
        brKludge = !!(offset && node.nodeValue[offset - 1] == "\n");
        // Issue #1128
        if (brKludge && offset == node.nodeValue.length) {
          for (let scan = node, after; scan; scan = scan.parentNode) {
            if (after = scan.nextSibling) {
              if (after.nodeName == "BR") anchorDOM = headDOM = {
                node: after.parentNode,
                offset: domIndex(after) + 1
              };
              break;
            }
            let desc = scan.pmViewDesc;
            if (desc && desc.node && desc.node.isBlock) break;
          }
        }
      } else {
        let prev = node.childNodes[offset - 1];
        brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
      }
    }
    // Firefox can act strangely when the selection is in front of an
    // uneditable node. See #1163 and https://bugzilla.mozilla.org/show_bug.cgi?id=1709536
    if (gecko && domSel.focusNode && domSel.focusNode != headDOM.node && domSel.focusNode.nodeType == 1) {
      let after = domSel.focusNode.childNodes[domSel.focusOffset];
      if (after && after.contentEditable == "false") force = true;
    }
    if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, domSel.focusNode, domSel.focusOffset)) return;
    // Selection.extend can be used to create an 'inverted' selection
    // (one where the focus is before the anchor), but not all
    // browsers support it yet.
    let domSelExtended = false;
    if ((domSel.extend || anchor == head) && !brKludge) {
      domSel.collapse(anchorDOM.node, anchorDOM.offset);
      try {
        if (anchor != head) domSel.extend(headDOM.node, headDOM.offset);
        domSelExtended = true;
      } catch (_) {
        // In some cases with Chrome the selection is empty after calling
        // collapse, even when it should be valid. This appears to be a bug, but
        // it is difficult to isolate. If this happens fallback to the old path
        // without using extend.
        // Similarly, this could crash on Safari if the editor is hidden, and
        // there was no selection.
      }
    }
    if (!domSelExtended) {
      if (anchor > head) {
        let tmp = anchorDOM;
        anchorDOM = headDOM;
        headDOM = tmp;
      }
      let range = document.createRange();
      range.setEnd(headDOM.node, headDOM.offset);
      range.setStart(anchorDOM.node, anchorDOM.offset);
      domSel.removeAllRanges();
      domSel.addRange(range);
    }
  }
  ignoreMutation(mutation) {
    return !this.contentDOM && mutation.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(from, to) {
    for (let offset = 0, i = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (offset == end ? from <= end && to >= offset : from < end && to > offset) {
        let startInside = offset + child.border,
          endInside = end - child.border;
        if (from >= startInside && to <= endInside) {
          this.dirty = from == offset || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
          if (from == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM)) child.dirty = NODE_DIRTY;else child.markDirty(from - startInside, to - startInside);
          return;
        } else {
          child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
        }
      }
      offset = end;
    }
    this.dirty = CONTENT_DIRTY;
  }
  markParentsDirty() {
    let level = 1;
    for (let node = this.parent; node; node = node.parent, level++) {
      let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
      if (node.dirty < dirty) node.dirty = dirty;
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  isText(text) {
    return false;
  }
}
// A widget desc represents a widget decoration, which is a DOM node
// drawn between the document nodes.
class WidgetViewDesc extends ViewDesc {
  constructor(parent, widget, view, pos) {
    let self,
      dom = widget.type.toDOM;
    if (typeof dom == "function") dom = dom(view, () => {
      if (!self) return pos;
      if (self.parent) return self.parent.posBeforeChild(self);
    });
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        let wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = "false";
      dom.classList.add("ProseMirror-widget");
    }
    super(parent, [], dom, null);
    this.widget = widget;
    this.widget = widget;
    self = this;
  }
  matchesWidget(widget) {
    return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
  }
  parseRule() {
    return {
      ignore: true
    };
  }
  stopEvent(event) {
    let stop = this.widget.spec.stopEvent;
    return stop ? stop(event) : false;
  }
  ignoreMutation(mutation) {
    return mutation.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get side() {
    return this.widget.type.side;
  }
}
class CompositionViewDesc extends ViewDesc {
  constructor(parent, dom, textDOM, text) {
    super(parent, [], dom, null);
    this.textDOM = textDOM;
    this.text = text;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(dom, offset) {
    if (dom != this.textDOM) return this.posAtStart + (offset ? this.size : 0);
    return this.posAtStart + offset;
  }
  domFromPos(pos) {
    return {
      node: this.textDOM,
      offset: pos
    };
  }
  ignoreMutation(mut) {
    return mut.type === 'characterData' && mut.target.nodeValue == mut.oldValue;
  }
}
// A mark desc represents a mark. May have multiple children,
// depending on how the mark is split. Note that marks are drawn using
// a fixed nesting order, for simplicity and predictability, so in
// some cases they will be split more often than would appear
// necessary.
class MarkViewDesc extends ViewDesc {
  constructor(parent, mark, dom, contentDOM) {
    super(parent, [], dom, contentDOM);
    this.mark = mark;
  }
  static create(parent, mark, inline, view) {
    let custom = view.nodeViews[mark.type.name];
    let spec = custom && custom(mark, view, inline);
    if (!spec || !spec.dom) spec = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline));
    return new MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom);
  }
  parseRule() {
    if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView) return null;
    return {
      mark: this.mark.type.name,
      attrs: this.mark.attrs,
      contentElement: this.contentDOM
    };
  }
  matchesMark(mark) {
    return this.dirty != NODE_DIRTY && this.mark.eq(mark);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    // Move dirty info to nearest node view
    if (this.dirty != NOT_DIRTY) {
      let parent = this.parent;
      while (!parent.node) parent = parent.parent;
      if (parent.dirty < this.dirty) parent.dirty = this.dirty;
      this.dirty = NOT_DIRTY;
    }
  }
  slice(from, to, view) {
    let copy = MarkViewDesc.create(this.parent, this.mark, true, view);
    let nodes = this.children,
      size = this.size;
    if (to < size) nodes = replaceNodes(nodes, to, size, view);
    if (from > 0) nodes = replaceNodes(nodes, 0, from, view);
    for (let i = 0; i < nodes.length; i++) nodes[i].parent = copy;
    copy.children = nodes;
    return copy;
  }
}
// Node view descs are the main, most common type of view desc, and
// correspond to an actual node in the document. Unlike mark descs,
// they populate their child array themselves.
class NodeViewDesc extends ViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    super(parent, [], dom, contentDOM);
    this.node = node;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    this.nodeDOM = nodeDOM;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(parent, node, outerDeco, innerDeco, view, pos) {
    let custom = view.nodeViews[node.type.name],
      descObj;
    let spec = custom && custom(node, view, () => {
      // (This is a function that allows the custom view to find its
      // own position)
      if (!descObj) return pos;
      if (descObj.parent) return descObj.parent.posBeforeChild(descObj);
    }, outerDeco, innerDeco);
    let dom = spec && spec.dom,
      contentDOM = spec && spec.contentDOM;
    if (node.isText) {
      if (!dom) dom = document.createTextNode(node.text);else if (dom.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
    } else if (!dom) {
      ({
        dom,
        contentDOM
      } = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.DOMSerializer.renderSpec(document, node.type.spec.toDOM(node)));
    }
    if (!contentDOM && !node.isText && dom.nodeName != "BR") {
      // Chrome gets confused by <br contenteditable=false>
      if (!dom.hasAttribute("contenteditable")) dom.contentEditable = "false";
      if (node.type.spec.draggable) dom.draggable = true;
    }
    let nodeDOM = dom;
    dom = applyOuterDeco(dom, outerDeco, node);
    if (spec) return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);else if (node.isText) return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);else return new NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
  }
  parseRule() {
    // Experimental kludge to allow opt-in re-parsing of nodes
    if (this.node.type.spec.reparseInView) return null;
    // FIXME the assumption that this can always return the current
    // attrs means that if the user somehow manages to change the
    // attrs in the dom, that won't be picked up. Not entirely sure
    // whether this is a problem
    let rule = {
      node: this.node.type.name,
      attrs: this.node.attrs
    };
    if (this.node.type.whitespace == "pre") rule.preserveWhitespace = "full";
    if (!this.contentDOM) {
      rule.getContent = () => this.node.content;
    } else if (!this.contentLost) {
      rule.contentElement = this.contentDOM;
    } else {
      // Chrome likes to randomly recreate parent nodes when
      // backspacing things. When that happens, this tries to find the
      // new parent.
      for (let i = this.children.length - 1; i >= 0; i--) {
        let child = this.children[i];
        if (this.dom.contains(child.dom.parentNode)) {
          rule.contentElement = child.dom.parentNode;
          break;
        }
      }
      if (!rule.contentElement) rule.getContent = () => prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;
    }
    return rule;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(view, pos) {
    let inline = this.node.inlineContent,
      off = pos;
    let composition = view.composing ? this.localCompositionInfo(view, pos) : null;
    let localComposition = composition && composition.pos > -1 ? composition : null;
    let compositionInChild = composition && composition.pos < 0;
    let updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view);
    iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
      if (widget.spec.marks) updater.syncToMarks(widget.spec.marks, inline, view);else if (widget.type.side >= 0 && !insideNode) updater.syncToMarks(i == this.node.childCount ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Mark.none : this.node.child(i).marks, inline, view);
      // If the next node is a desc matching this widget, reuse it,
      // otherwise insert the widget as a new view desc.
      updater.placeWidget(widget, view, off);
    }, (child, outerDeco, innerDeco, i) => {
      // Make sure the wrapping mark descs match the node's marks.
      updater.syncToMarks(child.marks, inline, view);
      // Try several strategies for drawing this node
      let compIndex;
      if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view)) ;else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i, off)) ;else {
        // Add it as a new view
        updater.addNode(child, outerDeco, innerDeco, view, off);
      }
      off += child.nodeSize;
    });
    // Drop all remaining descs after the current position.
    updater.syncToMarks([], inline, view);
    if (this.node.isTextblock) updater.addTextblockHacks();
    updater.destroyRest();
    // Sync the DOM if anything changed
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      // May have to protect focused DOM from being changed if a composition is active
      if (localComposition) this.protectLocalComposition(view, localComposition);
      renderDescs(this.contentDOM, this.children, view);
      if (ios) iosHacks(this.dom);
    }
  }
  localCompositionInfo(view, pos) {
    // Only do something if both the selection and a focused text node
    // are inside of this node
    let {
      from,
      to
    } = view.state.selection;
    if (!(view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection) || from < pos || to > pos + this.node.content.size) return null;
    let textNode = view.input.compositionNode;
    if (!textNode || !this.dom.contains(textNode.parentNode)) return null;
    if (this.node.inlineContent) {
      // Find the text in the focused node in the node, stop if it's not
      // there (may have been modified through other means, in which
      // case it should overwritten)
      let text = textNode.nodeValue;
      let textPos = findTextInFragment(this.node.content, text, from - pos, to - pos);
      return textPos < 0 ? null : {
        node: textNode,
        pos: textPos,
        text
      };
    } else {
      return {
        node: textNode,
        pos: -1,
        text: ""
      };
    }
  }
  protectLocalComposition(view, {
    node,
    pos,
    text
  }) {
    // The node is already part of a local view desc, leave it there
    if (this.getDesc(node)) return;
    // Create a composition view for the orphaned nodes
    let topNode = node;
    for (;; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM) break;
      while (topNode.previousSibling) topNode.parentNode.removeChild(topNode.previousSibling);
      while (topNode.nextSibling) topNode.parentNode.removeChild(topNode.nextSibling);
      if (topNode.pmViewDesc) topNode.pmViewDesc = undefined;
    }
    let desc = new CompositionViewDesc(this, topNode, node, text);
    view.input.compositionNodes.push(desc);
    // Patch up this.children to contain the composition view
    this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node)) return false;
    this.updateInner(node, outerDeco, innerDeco, view);
    return true;
  }
  updateInner(node, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node;
    this.innerDeco = innerDeco;
    if (this.contentDOM) this.updateChildren(view, this.posAtStart);
    this.dirty = NOT_DIRTY;
  }
  updateOuterDeco(outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco)) return;
    let needsWrap = this.nodeDOM.nodeType != 1;
    let oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = undefined;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  }
  // Mark this node as being the selected node.
  selectNode() {
    if (this.nodeDOM.nodeType == 1) this.nodeDOM.classList.add("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) this.dom.draggable = true;
  }
  // Remove selected node marking from this node.
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) this.nodeDOM.classList.remove("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
// Create a view desc for the top-level document node, to be exported
// and used by the view class.
function docViewDesc(doc, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc);
  let docView = new NodeViewDesc(undefined, doc, outerDeco, innerDeco, dom, dom, dom, view, 0);
  if (docView.contentDOM) docView.updateChildren(view, 0);
  return docView;
}
class TextViewDesc extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
  }
  parseRule() {
    let skip = this.nodeDOM.parentNode;
    while (skip && skip != this.dom && !skip.pmIsDeco) skip = skip.parentNode;
    return {
      skip: skip || true
    };
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node)) return false;
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = node.text;
      if (view.trackWrites == this.nodeDOM) view.trackWrites = null;
    }
    this.node = node;
    this.dirty = NOT_DIRTY;
    return true;
  }
  inParent() {
    let parentDOM = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode) if (n == parentDOM) return true;
    return false;
  }
  domFromPos(pos) {
    return {
      node: this.nodeDOM,
      offset: pos
    };
  }
  localPosFromDOM(dom, offset, bias) {
    if (dom == this.nodeDOM) return this.posAtStart + Math.min(offset, this.node.text.length);
    return super.localPosFromDOM(dom, offset, bias);
  }
  ignoreMutation(mutation) {
    return mutation.type != "characterData" && mutation.type != "selection";
  }
  slice(from, to, view) {
    let node = this.node.cut(from, to),
      dom = document.createTextNode(node.text);
    return new TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dom != this.nodeDOM && (from == 0 || to == this.nodeDOM.nodeValue.length)) this.dirty = NODE_DIRTY;
  }
  get domAtom() {
    return false;
  }
  isText(text) {
    return this.node.text == text;
  }
}
// A dummy desc used to tag trailing BR or IMG nodes created to work
// around contentEditable terribleness.
class TrailingHackViewDesc extends ViewDesc {
  parseRule() {
    return {
      ignore: true
    };
  }
  matchesHack(nodeName) {
    return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
// A separate subclass is used for customized node views, so that the
// extra checks only have to be made for nodes that are actually
// customized.
class CustomNodeViewDesc extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    this.spec = spec;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY) return false;
    if (this.spec.update) {
      let result = this.spec.update(node, outerDeco, innerDeco);
      if (result) this.updateInner(node, outerDeco, innerDeco, view);
      return result;
    } else if (!this.contentDOM && !node.isLeaf) {
      return false;
    } else {
      return super.update(node, outerDeco, innerDeco, view);
    }
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(anchor, head, root, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, root) : super.setSelection(anchor, head, root, force);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
  stopEvent(event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
}
// Sync the content of the given DOM node with the nodes associated
// with the given array of view descs, recursing into mark descs
// because this should sync the subtree for a whole node at a time.
function renderDescs(parentDOM, descs, view) {
  let dom = parentDOM.firstChild,
    written = false;
  for (let i = 0; i < descs.length; i++) {
    let desc = descs[i],
      childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      let pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM) view.trackWrites = null;
}
const OuterDecoLevel = function (nodeName) {
  if (nodeName) this.nodeName = nodeName;
};
OuterDecoLevel.prototype = Object.create(null);
const noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0) return noDeco;
  let top = needsWrap ? noDeco[0] : new OuterDecoLevel(),
    result = [top];
  for (let i = 0; i < outerDeco.length; i++) {
    let attrs = outerDeco[i].type.attrs;
    if (!attrs) continue;
    if (attrs.nodeName) result.push(top = new OuterDecoLevel(attrs.nodeName));
    for (let name in attrs) {
      let val = attrs[name];
      if (val == null) continue;
      if (needsWrap && result.length == 1) result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
      if (name == "class") top.class = (top.class ? top.class + " " : "") + val;else if (name == "style") top.style = (top.style ? top.style + ";" : "") + val;else if (name != "nodeName") top[name] = val;
    }
  }
  return result;
}
function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  // Shortcut for trivial case
  if (prevComputed == noDeco && curComputed == noDeco) return nodeDOM;
  let curDOM = nodeDOM;
  for (let i = 0; i < curComputed.length; i++) {
    let deco = curComputed[i],
      prev = prevComputed[i];
    if (i) {
      let parent;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (let name in prev) if (name != "class" && name != "style" && name != "nodeName" && !(name in cur)) dom.removeAttribute(name);
  for (let name in cur) if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name]) dom.setAttribute(name, cur[name]);
  if (prev.class != cur.class) {
    let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
    let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < prevList.length; i++) if (curList.indexOf(prevList[i]) == -1) dom.classList.remove(prevList[i]);
    for (let i = 0; i < curList.length; i++) if (prevList.indexOf(curList[i]) == -1) dom.classList.add(curList[i]);
    if (dom.classList.length == 0) dom.removeAttribute("class");
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        m;
      while (m = prop.exec(prev.style)) dom.style.removeProperty(m[1]);
    }
    if (cur.style) dom.style.cssText += cur.style;
  }
}
function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) if (!a[i].type.eq(b[i].type)) return false;
  return true;
}
// Remove a DOM node and return its next sibling.
function rm(dom) {
  let next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
// Helper class for incrementally updating a tree of mark descs and
// the widget and node descs inside of them.
class ViewTreeUpdater {
  constructor(top, lock, view) {
    this.lock = lock;
    this.view = view;
    // Index into `this.top`'s child array, represents the current
    // update position.
    this.index = 0;
    // When entering a mark, the current top and index are pushed
    // onto this.
    this.stack = [];
    // Tracks whether anything was changed
    this.changed = false;
    this.top = top;
    this.preMatch = preMatch(top.node.content, top);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(start, end) {
    if (start == end) return;
    for (let i = start; i < end; i++) this.top.children[i].destroy();
    this.top.children.splice(start, end - start);
    this.changed = true;
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(marks, inline, view) {
    let keep = 0,
      depth = this.stack.length >> 1;
    let maxKeep = Math.min(depth, marks.length);
    while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false) keep++;
    while (keep < depth) {
      this.destroyRest();
      this.top.dirty = NOT_DIRTY;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      depth--;
    }
    while (depth < marks.length) {
      this.stack.push(this.top, this.index + 1);
      let found = -1;
      for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
        let next = this.top.children[i];
        if (next.matchesMark(marks[depth]) && !this.isLocked(next.dom)) {
          found = i;
          break;
        }
      }
      if (found > -1) {
        if (found > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, found);
        }
        this.top = this.top.children[this.index];
      } else {
        let markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
        this.top.children.splice(this.index, 0, markDesc);
        this.top = markDesc;
        this.changed = true;
      }
      this.index = 0;
      depth++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(node, outerDeco, innerDeco, index) {
    let found = -1,
      targetDesc;
    if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
      found = this.top.children.indexOf(targetDesc, this.index);
    } else {
      for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
        let child = this.top.children[i];
        if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
          found = i;
          break;
        }
      }
    }
    if (found < 0) return false;
    this.destroyBetween(this.index, found);
    this.index++;
    return true;
  }
  updateNodeAt(node, outerDeco, innerDeco, index, view) {
    let child = this.top.children[index];
    if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM) child.dirty = CONTENT_DIRTY;
    if (!child.update(node, outerDeco, innerDeco, view)) return false;
    this.destroyBetween(this.index, index);
    this.index++;
    return true;
  }
  findIndexWithChild(domNode) {
    for (;;) {
      let parent = domNode.parentNode;
      if (!parent) return -1;
      if (parent == this.top.contentDOM) {
        let desc = domNode.pmViewDesc;
        if (desc) for (let i = this.index; i < this.top.children.length; i++) {
          if (this.top.children[i] == desc) return i;
        }
        return -1;
      }
      domNode = parent;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(node, outerDeco, innerDeco, view, index, pos) {
    for (let i = this.index; i < this.top.children.length; i++) {
      let next = this.top.children[i];
      if (next instanceof NodeViewDesc) {
        let preMatch = this.preMatch.matched.get(next);
        if (preMatch != null && preMatch != index) return false;
        let nextDOM = next.dom,
          updated;
        // Can't update if nextDOM is or contains this.lock, except if
        // it's a text node whose content already matches the new text
        // and whose decorations match the new ones.
        let locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
        if (!locked && next.update(node, outerDeco, innerDeco, view)) {
          this.destroyBetween(this.index, i);
          if (next.dom != nextDOM) this.changed = true;
          this.index++;
          return true;
        } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view, pos))) {
          this.top.children[this.index] = updated;
          if (updated.contentDOM) {
            updated.dirty = CONTENT_DIRTY;
            updated.updateChildren(view, pos + 1);
            updated.dirty = NOT_DIRTY;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(next, node, outerDeco, innerDeco, view, pos) {
    if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content)) return null;
    let wrapper = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (wrapper.contentDOM) {
      wrapper.children = next.children;
      next.children = [];
      for (let ch of wrapper.children) ch.parent = wrapper;
    }
    next.destroy();
    return wrapper;
  }
  // Insert the node as a newly created node desc.
  addNode(node, outerDeco, innerDeco, view, pos) {
    let desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (desc.contentDOM) desc.updateChildren(view, pos + 1);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
  placeWidget(widget, view, pos) {
    let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
      this.index++;
    } else {
      let desc = new WidgetViewDesc(this.top, widget, view, pos);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let lastChild = this.top.children[this.index - 1],
      parent = this.top;
    while (lastChild instanceof MarkViewDesc) {
      parent = lastChild;
      lastChild = parent.children[parent.children.length - 1];
    }
    if (!lastChild ||
    // Empty textblock
    !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
      // Avoid bugs in Safari's cursor drawing (#1165) and Chrome's mouse selection (#1152)
      if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false") this.addHackNode("IMG", parent);
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(nodeName, parent) {
    if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
      this.index++;
    } else {
      let dom = document.createElement(nodeName);
      if (nodeName == "IMG") {
        dom.className = "ProseMirror-separator";
        dom.alt = "";
      }
      if (nodeName == "BR") dom.className = "ProseMirror-trailingBreak";
      let hack = new TrailingHackViewDesc(this.top, [], dom, null);
      if (parent != this.top) parent.children.push(hack);else parent.children.splice(this.index++, 0, hack);
      this.changed = true;
    }
  }
  isLocked(node) {
    return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
  }
}
// Iterate from the end of the fragment and array of descs to find
// directly matching ones, in order to avoid overeagerly reusing those
// for other nodes. Returns the fragment index of the first node that
// is part of the sequence of matched nodes at the end of the
// fragment.
function preMatch(frag, parentDesc) {
  let curDesc = parentDesc,
    descI = curDesc.children.length;
  let fI = frag.childCount,
    matched = new Map(),
    matches = [];
  outer: while (fI > 0) {
    let desc;
    for (;;) {
      if (descI) {
        let next = curDesc.children[descI - 1];
        if (next instanceof MarkViewDesc) {
          curDesc = next;
          descI = next.children.length;
        } else {
          desc = next;
          descI--;
          break;
        }
      } else if (curDesc == parentDesc) {
        break outer;
      } else {
        // FIXME
        descI = curDesc.parent.children.indexOf(curDesc);
        curDesc = curDesc.parent;
      }
    }
    let node = desc.node;
    if (!node) continue;
    if (node != frag.child(fI - 1)) break;
    --fI;
    matched.set(desc, fI);
    matches.push(desc);
  }
  return {
    index: fI,
    matched,
    matches: matches.reverse()
  };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
// This function abstracts iterating over the nodes and decorations in
// a fragment. Calls `onNode` for each node, with its local and child
// decorations. Splits text nodes when there is a decoration starting
// or ending inside of them. Calls `onWidget` for each widget.
function iterDeco(parent, deco, onWidget, onNode) {
  let locals = deco.locals(parent),
    offset = 0;
  // Simple, cheap variant for when there are no local decorations
  if (locals.length == 0) {
    for (let i = 0; i < parent.childCount; i++) {
      let child = parent.child(i);
      onNode(child, locals, deco.forChild(offset, child), i);
      offset += child.nodeSize;
    }
    return;
  }
  let decoIndex = 0,
    active = [],
    restNode = null;
  for (let parentIndex = 0;;) {
    let widget, widgets;
    while (decoIndex < locals.length && locals[decoIndex].to == offset) {
      let next = locals[decoIndex++];
      if (next.widget) {
        if (!widget) widget = next;else (widgets || (widgets = [widget])).push(next);
      }
    }
    if (widget) {
      if (widgets) {
        widgets.sort(compareSide);
        for (let i = 0; i < widgets.length; i++) onWidget(widgets[i], parentIndex, !!restNode);
      } else {
        onWidget(widget, parentIndex, !!restNode);
      }
    }
    let child, index;
    if (restNode) {
      index = -1;
      child = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index = parentIndex;
      child = parent.child(parentIndex++);
    } else {
      break;
    }
    for (let i = 0; i < active.length; i++) if (active[i].to <= offset) active.splice(i--, 1);
    while (decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset) active.push(locals[decoIndex++]);
    let end = offset + child.nodeSize;
    if (child.isText) {
      let cutAt = end;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt) cutAt = locals[decoIndex].from;
      for (let i = 0; i < active.length; i++) if (active[i].to < cutAt) cutAt = active[i].to;
      if (cutAt < end) {
        restNode = child.cut(cutAt - offset);
        child = child.cut(0, cutAt - offset);
        end = cutAt;
        index = -1;
      }
    } else {
      while (decoIndex < locals.length && locals[decoIndex].to < end) decoIndex++;
    }
    let outerDeco = child.isInline && !child.isLeaf ? active.filter(d => !d.inline) : active.slice();
    onNode(child, outerDeco, deco.forChild(offset, child), index);
    offset = end;
  }
}
// List markers in Mobile Safari will mysteriously disappear
// sometimes. This works around that.
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    let oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
// Find a piece of text in an inline fragment, overlapping from-to
function findTextInFragment(frag, text, from, to) {
  for (let i = 0, pos = 0; i < frag.childCount && pos <= to;) {
    let child = frag.child(i++),
      childStart = pos;
    pos += child.nodeSize;
    if (!child.isText) continue;
    let str = child.text;
    while (i < frag.childCount) {
      let next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText) break;
      str += next.text;
    }
    if (pos >= from) {
      if (pos >= to && str.slice(to - text.length - childStart, to - childStart) == text) return to - text.length;
      let found = childStart < to ? str.lastIndexOf(text, to - childStart - 1) : -1;
      if (found >= 0 && found + text.length + childStart >= from) return childStart + found;
      if (from == to && str.length >= to + text.length - childStart && str.slice(to - childStart, to - childStart + text.length) == text) return to;
    }
  }
  return -1;
}
// Replace range from-to in an array of view descs with replacement
// (may be null to just delete). This goes very much against the grain
// of the rest of this code, which tends to create nodes with the
// right shape in one go, rather than messing with them after
// creation, but is necessary in the composition hack.
function replaceNodes(nodes, from, to, view, replacement) {
  let result = [];
  for (let i = 0, off = 0; i < nodes.length; i++) {
    let child = nodes[i],
      start = off,
      end = off += child.size;
    if (start >= to || end <= from) {
      result.push(child);
    } else {
      if (start < from) result.push(child.slice(0, from - start, view));
      if (replacement) {
        result.push(replacement);
        replacement = undefined;
      }
      if (end > to) result.push(child.slice(to - start, child.size, view));
    }
  }
  return result;
}
function selectionFromDOM(view, origin = null) {
  let domSel = view.domSelectionRange(),
    doc = view.state.doc;
  if (!domSel.focusNode) return null;
  let nearestDesc = view.docView.nearestDesc(domSel.focusNode),
    inWidget = nearestDesc && nearestDesc.size == 0;
  let head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
  if (head < 0) return null;
  let $head = doc.resolve(head),
    $anchor,
    selection;
  if (selectionCollapsed(domSel)) {
    $anchor = $head;
    while (nearestDesc && !nearestDesc.node) nearestDesc = nearestDesc.parent;
    let nearestDescNode = nearestDesc.node;
    if (nearestDesc && nearestDescNode.isAtom && prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
      let pos = nearestDesc.posBefore;
      selection = new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection(head == pos ? $head : doc.resolve(pos));
    }
  } else {
    let anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
    if (anchor < 0) return null;
    $anchor = doc.resolve(anchor);
  }
  if (!selection) {
    let bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view, force = false) {
  let sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view)) return;
  // The delayed drag selection causes issues with Cell Selections
  // in Safari. And the drag selection delay is to workarond issues
  // which only present in Chrome.
  if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
    let domSel = view.domSelectionRange(),
      curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.input.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    let {
        anchor,
        head
      } = sel,
      resetEditableFrom,
      resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection)) {
      if (!sel.$from.parent.inlineContent) resetEditableFrom = temporarilyEditableNear(view, sel.from);
      if (!sel.empty && !sel.$from.parent.inlineContent) resetEditableTo = temporarilyEditableNear(view, sel.to);
    }
    view.docView.setSelection(anchor, head, view.root, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) resetEditable(resetEditableFrom);
      if (resetEditableTo) resetEditable(resetEditableTo);
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) removeClassOnSelectionChange(view);
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
// Kludge to work around Webkit not allowing a selection to start/end
// between non-editable block nodes. We briefly make something
// editable, set the selection, then set it uneditable again.
const brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  let {
    node,
    offset
  } = view.docView.domFromPos(pos, 0);
  let after = offset < node.childNodes.length ? node.childNodes[offset] : null;
  let before = offset ? node.childNodes[offset - 1] : null;
  if (safari && after && after.contentEditable == "false") return setEditable(after);
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after) return setEditable(after);else if (before) return setEditable(before);
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  let doc = view.dom.ownerDocument;
  doc.removeEventListener("selectionchange", view.input.hideSelectionGuard);
  let domSel = view.domSelectionRange();
  let node = domSel.anchorNode,
    offset = domSel.anchorOffset;
  doc.addEventListener("selectionchange", view.input.hideSelectionGuard = () => {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
      doc.removeEventListener("selectionchange", view.input.hideSelectionGuard);
      setTimeout(() => {
        if (!editorOwnsSelection(view) || view.state.selection.visible) view.dom.classList.remove("ProseMirror-hideselection");
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  let domSel = view.domSelection(),
    range = document.createRange();
  let node = view.cursorWrapper.dom,
    img = node.nodeName == "IMG";
  if (img) range.setEnd(node.parentNode, domIndex(node) + 1);else range.setEnd(node, 0);
  range.collapse(false);
  domSel.removeAllRanges();
  domSel.addRange(range);
  // Kludge to kill 'control selection' in IE11 when selecting an
  // invisible cursor wrapper, since that would result in those weird
  // resize handles and a selection that considers the absolutely
  // positioned wrapper, rather than the root editable node, the
  // focused element.
  if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection) {
    let desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) desc.selectNode();
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
// Clear all DOM statefulness of the last node selection.
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent) view.lastSelectedViewDesc.deselectNode();
    view.lastSelectedViewDesc = undefined;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", f => f(view, $anchor, $head)) || prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && !view.hasFocus()) return false;
  return hasSelection(view);
}
function hasSelection(view) {
  let sel = view.domSelectionRange();
  if (!sel.anchorNode) return false;
  try {
    // Firefox will raise 'permission denied' errors when accessing
    // properties of `sel.anchorNode` when it's in a generated CSS
    // element.
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  let anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  let domSel = view.domSelectionRange();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state, dir) {
  let {
    $anchor,
    $head
  } = state.selection;
  let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  let $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.findFrom($start, dir);
}
function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection) {
    if (mods.indexOf("s") > -1) {
      let {
          $head
        } = sel,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!node || node.isText || !node.isLeaf) return false;
      let $newHead = view.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
      return apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection(sel.$anchor, $newHead));
    } else if (!sel.empty) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
      let next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection) return apply(view, next);
      return false;
    } else if (!(mac && mods.indexOf("m") > -1)) {
      let $head = sel.$head,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter,
        desc;
      if (!node || node.isText) return false;
      let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
      if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) return false;
      if (prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(node)) {
        return apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head));
      } else if (webkit) {
        // Chrome and Safari will introduce extra pointless cursor
        // positions around inline uneditable nodes, so we have to
        // take over and move the cursor past them (#937)
        return apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection && sel.node.isInline) {
    return apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    let next = moveSelectionBlock(view.state, dir);
    if (next) return apply(view, next);
    return false;
  }
}
function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function isIgnorable(dom, dir) {
  let desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodes(view, dir) {
  return dir < 0 ? skipIgnoredNodesBefore(view) : skipIgnoredNodesAfter(view);
}
// Make sure the cursor isn't directly after one or more ignored
// nodes, which will confuse the browser's cursor motion logic.
function skipIgnoredNodesBefore(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  let moveNode,
    moveOffset,
    force = false;
  // Gecko will do odd things when the selection is directly in front
  // of a non-editable node, so in that case, move it into the next
  // node if possible. Issue prosemirror/prosemirror#832.
  if (gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset], -1)) force = true;
  for (;;) {
    if (offset > 0) {
      if (node.nodeType != 1) {
        break;
      } else {
        let before = node.childNodes[offset - 1];
        if (isIgnorable(before, -1)) {
          moveNode = node;
          moveOffset = --offset;
        } else if (before.nodeType == 3) {
          node = before;
          offset = node.nodeValue.length;
        } else break;
      }
    } else if (isBlockNode(node)) {
      break;
    } else {
      let prev = node.previousSibling;
      while (prev && isIgnorable(prev, -1)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = 0;
      } else {
        node = prev;
        offset = nodeLen(node);
      }
    }
  }
  if (force) setSelFocus(view, node, offset);else if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
// Make sure the cursor isn't directly before one or more ignored
// nodes.
function skipIgnoredNodesAfter(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  let len = nodeLen(node);
  let moveNode, moveOffset;
  for (;;) {
    if (offset < len) {
      if (node.nodeType != 1) break;
      let after = node.childNodes[offset];
      if (isIgnorable(after, 1)) {
        moveNode = node;
        moveOffset = ++offset;
      } else break;
    } else if (isBlockNode(node)) {
      break;
    } else {
      let next = node.nextSibling;
      while (next && isIgnorable(next, 1)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = len = 0;
      } else {
        node = next;
        offset = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function isBlockNode(dom) {
  let desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function textNodeAfter(node, offset) {
  while (node && offset == node.childNodes.length && !hasBlockDesc(node)) {
    offset = domIndex(node) + 1;
    node = node.parentNode;
  }
  while (node && offset < node.childNodes.length) {
    let next = node.childNodes[offset];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = 0;
  }
}
function textNodeBefore(node, offset) {
  while (node && !offset && !hasBlockDesc(node)) {
    offset = domIndex(node);
    node = node.parentNode;
  }
  while (node && offset) {
    let next = node.childNodes[offset - 1];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = node.childNodes.length;
  }
}
function setSelFocus(view, node, offset) {
  if (node.nodeType != 3) {
    let before, after;
    if (after = textNodeAfter(node, offset)) {
      node = after;
      offset = 0;
    } else if (before = textNodeBefore(node, offset)) {
      node = before;
      offset = before.nodeValue.length;
    }
  }
  let sel = view.domSelection();
  if (selectionCollapsed(sel)) {
    let range = document.createRange();
    range.setEnd(node, offset);
    range.setStart(node, offset);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset);
  }
  view.domObserver.setCurSelection();
  let {
    state
  } = view;
  // If no state update ends up happening, reset the selection.
  setTimeout(() => {
    if (view.state == state) selectionToDOM(view);
  }, 50);
}
function findDirection(view, pos) {
  let $pos = view.state.doc.resolve(pos);
  if (!(chrome || windows) && $pos.parent.inlineContent) {
    let coords = view.coordsAtPos(pos);
    if (pos > $pos.start()) {
      let before = view.coordsAtPos(pos - 1);
      let mid = (before.top + before.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1) return before.left < coords.left ? "ltr" : "rtl";
    }
    if (pos < $pos.end()) {
      let after = view.coordsAtPos(pos + 1);
      let mid = (after.top + after.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(after.left - coords.left) > 1) return after.left > coords.left ? "ltr" : "rtl";
    }
  }
  let computed = getComputedStyle(view.dom).direction;
  return computed == "rtl" ? "rtl" : "ltr";
}
// Check whether vertical selection motion would involve node
// selections. If so, apply it (if not, the result is left to the
// browser)
function selectVertically(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection && !sel.empty || mods.indexOf("s") > -1) return false;
  if (mac && mods.indexOf("m") > -1) return false;
  let {
    $from,
    $to
  } = sel;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    let next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection) return apply(view, next);
  }
  if (!$from.parent.inlineContent) {
    let side = dir < 0 ? $from : $to;
    let beyond = sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.AllSelection ? prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.near(side, dir) : prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.findFrom(side, dir);
    return beyond ? apply(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection)) return true;
  let {
    $head,
    $anchor,
    empty
  } = view.state.selection;
  if (!$head.sameParent($anchor)) return true;
  if (!empty) return false;
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) return true;
  let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    let tr = view.state.tr;
    if (dir < 0) tr.delete($head.pos - nextNode.nodeSize, $head.pos);else tr.delete($head.pos, $head.pos + nextNode.nodeSize);
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node, state) {
  view.domObserver.stop();
  node.contentEditable = state;
  view.domObserver.start();
}
// Issue #867 / #1090 / https://bugs.chromium.org/p/chromium/issues/detail?id=903821
// In which Safari (and at some point in the past, Chrome) does really
// wrong things when the down arrow is pressed when the cursor is
// directly at the start of a textblock and has an uneditable node
// after it
function safariDownArrowBug(view) {
  if (!safari || view.state.selection.$head.parentOffset > 0) return false;
  let {
    focusNode,
    focusOffset
  } = view.domSelectionRange();
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    let child = focusNode.firstChild;
    switchEditable(view, child, "true");
    setTimeout(() => switchEditable(view, child, "false"), 20);
  }
  return false;
}
// A backdrop key mapping used to make sure we always suppress keys
// that have a dangerous default effect, even if the commands they are
// bound to return false, and to make sure that cursor-motion keys
// find a cursor (as opposed to a node selection) when pressed. For
// cursor-motion keys, the code in the handlers also takes care of
// block selections.
function getMods(event) {
  let result = "";
  if (event.ctrlKey) result += "c";
  if (event.metaKey) result += "m";
  if (event.altKey) result += "a";
  if (event.shiftKey) result += "s";
  return result;
}
function captureKeyDown(view, event) {
  let code = event.keyCode,
    mods = getMods(event);
  if (code == 8 || mac && code == 72 && mods == "c") {
    // Backspace, Ctrl-h on Mac
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodes(view, -1);
  } else if (code == 46 && !event.shiftKey || mac && code == 68 && mods == "c") {
    // Delete, Ctrl-d on Mac
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodes(view, 1);
  } else if (code == 13 || code == 27) {
    // Enter, Esc
    return true;
  } else if (code == 37 || mac && code == 66 && mods == "c") {
    // Left arrow, Ctrl-b on Mac
    let dir = code == 37 ? findDirection(view, view.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 39 || mac && code == 70 && mods == "c") {
    // Right arrow, Ctrl-f on Mac
    let dir = code == 39 ? findDirection(view, view.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 38 || mac && code == 80 && mods == "c") {
    // Up arrow, Ctrl-p on Mac
    return selectVertically(view, -1, mods) || skipIgnoredNodes(view, -1);
  } else if (code == 40 || mac && code == 78 && mods == "c") {
    // Down arrow, Ctrl-n on Mac
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodes(view, 1);
  } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
    // Mod-[biyz]
    return true;
  }
  return false;
}
function serializeForClipboard(view, slice) {
  view.someProp("transformCopied", f => {
    slice = f(slice, view);
  });
  let context = [],
    {
      content,
      openStart,
      openEnd
    } = slice;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    let node = content.firstChild;
    context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
    content = node.content;
  }
  let serializer = view.someProp("clipboardSerializer") || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.DOMSerializer.fromSchema(view.state.schema);
  let doc = detachedDoc(),
    wrap = doc.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content, {
    document: doc
  }));
  let firstChild = wrap.firstChild,
    needsWrap,
    wrappers = 0;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (let i = needsWrap.length - 1; i >= 0; i--) {
      let wrapper = doc.createElement(needsWrap[i]);
      while (wrap.firstChild) wrapper.appendChild(wrap.firstChild);
      wrap.appendChild(wrapper);
      wrappers++;
    }
    firstChild = wrap.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1) firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
  let text = view.someProp("clipboardTextSerializer", f => f(slice, view)) || slice.content.textBetween(0, slice.content.size, "\n\n");
  return {
    dom: wrap,
    text,
    slice
  };
}
// Read a slice of content from the clipboard (or drop data).
function parseFromClipboard(view, text, html, plainText, $context) {
  let inCode = $context.parent.type.spec.code;
  let dom, slice;
  if (!html && !text) return null;
  let asText = text && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", f => {
      text = f(text, inCode || plainText, view);
    });
    if (inCode) return text ? new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(view.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty;
    let parsed = view.someProp("clipboardTextParser", f => f(text, $context, plainText, view));
    if (parsed) {
      slice = parsed;
    } else {
      let marks = $context.marks();
      let {
          schema
        } = view.state,
        serializer = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.DOMSerializer.fromSchema(schema);
      dom = document.createElement("div");
      text.split(/(?:\r\n?|\n)+/).forEach(block => {
        let p = dom.appendChild(document.createElement("p"));
        if (block) p.appendChild(serializer.serializeNode(schema.text(block, marks)));
      });
    }
  } else {
    view.someProp("transformPastedHTML", f => {
      html = f(html, view);
    });
    dom = readHTML(html);
    if (webkit) restoreReplacedSpaces(dom);
  }
  let contextNode = dom && dom.querySelector("[data-pm-slice]");
  let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
  if (sliceData && sliceData[3]) for (let i = +sliceData[3]; i > 0; i--) {
    let child = dom.firstChild;
    while (child && child.nodeType != 1) child = child.nextSibling;
    if (!child) break;
    dom = child;
  }
  if (!slice) {
    let parser = view.someProp("clipboardParser") || view.someProp("domParser") || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.DOMParser.fromSchema(view.state.schema);
    slice = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode(dom) {
        if (dom.nodeName == "BR" && !dom.nextSibling && dom.parentNode && !inlineParents.test(dom.parentNode.nodeName)) return {
          ignore: true
        };
        return null;
      }
    });
  }
  if (sliceData) {
    slice = addContext(closeSlice(slice, +sliceData[1], +sliceData[2]), sliceData[4]);
  } else {
    // HTML wasn't created by ProseMirror. Make sure top-level siblings are coherent
    slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.maxOpen(normalizeSiblings(slice.content, $context), true);
    if (slice.openStart || slice.openEnd) {
      let openStart = 0,
        openEnd = 0;
      for (let node = slice.content.firstChild; openStart < slice.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {}
      for (let node = slice.content.lastChild; openEnd < slice.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {}
      slice = closeSlice(slice, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", f => {
    slice = f(slice, view);
  });
  return slice;
}
const inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
// Takes a slice parsed with parseSlice, which means there hasn't been
// any content-expression checking done on the top nodes, tries to
// find a parent node in the current context that might fit the nodes,
// and if successful, rebuilds the slice so that it fits into that parent.
//
// This addresses the problem that Transform.replace expects a
// coherent slice, and will fail to place a set of siblings that don't
// fit anywhere in the schema.
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) return fragment;
  for (let d = $context.depth; d >= 0; d--) {
    let parent = $context.node(d);
    let match = parent.contentMatchAt($context.index(d));
    let lastWrap,
      result = [];
    fragment.forEach(node => {
      if (!result) return;
      let wrap = match.findWrapping(node.type),
        inLast;
      if (!wrap) return result = null;
      if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) {
        result[result.length - 1] = inLast;
      } else {
        if (result.length) result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
        let wrapped = withWrappers(node, wrap);
        result.push(wrapped);
        match = match.matchType(wrapped.type);
        lastWrap = wrap;
      }
    });
    if (result) return prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(result);
  }
  return fragment;
}
function withWrappers(node, wrap, from = 0) {
  for (let i = wrap.length - 1; i >= from; i--) node = wrap[i].create(null, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(node));
  return node;
}
// Used to group adjacent nodes wrapped in similar parents by
// normalizeSiblings into the same parent node
function addToSibling(wrap, lastWrap, node, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    let inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner) return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    let match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1])) return sibling.copy(sibling.content.append(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(withWrappers(node, wrap, depth + 1))));
  }
}
function closeRight(node, depth) {
  if (depth == 0) return node;
  let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  let fill = node.contentMatchAt(node.childCount).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty, true);
  return node.copy(fragment.append(fill));
}
function closeRange(fragment, side, from, to, depth, openEnd) {
  let node = side < 0 ? fragment.firstChild : fragment.lastChild,
    inner = node.content;
  if (fragment.childCount > 1) openEnd = 0;
  if (depth < to - 1) inner = closeRange(inner, side, from, to, depth + 1, openEnd);
  if (depth >= from) inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty, true));
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
}
function closeSlice(slice, openStart, openEnd) {
  if (openStart < slice.openStart) slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd);
  if (openEnd < slice.openEnd) slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd);
  return slice;
}
// Trick from jQuery -- some elements must be wrapped in other
// elements for innerHTML to work. I.e. if you do `div.innerHTML =
// "<td>..</td>"` the table cells are ignored.
const wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
function readHTML(html) {
  let metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas) html = html.slice(metas[0].length);
  let elt = detachedDoc().createElement("div");
  let firstTag = /<([a-z][^>\s]+)/i.exec(html),
    wrap;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) html = wrap.map(n => "<" + n + ">").join("") + html + wrap.map(n => "</" + n + ">").reverse().join("");
  elt.innerHTML = html;
  if (wrap) for (let i = 0; i < wrap.length; i++) elt = elt.querySelector(wrap[i]) || elt;
  return elt;
}
// Webkit browsers do some hard-to-predict replacement of regular
// spaces with non-breaking spaces when putting content on the
// clipboard. This tries to convert such non-breaking spaces (which
// will be wrapped in a plain span on Chrome, a span with class
// Apple-converted-space on Safari) back to regular spaces.
function restoreReplacedSpaces(dom) {
  let nodes = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.childNodes.length == 1 && node.textContent == "\u00a0" && node.parentNode) node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
  }
}
function addContext(slice, context) {
  if (!slice.size) return slice;
  let schema = slice.content.firstChild.type.schema,
    array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice;
  }
  let {
    content,
    openStart,
    openEnd
  } = slice;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    let type = schema.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) break;
    content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(type.create(array[i + 1], content));
    openStart++;
    openEnd++;
  }
  return new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(content, openStart, openEnd);
}

// A collection of DOM events that occur within the editor, and callback functions
// to invoke when the event fires.
const handlers = {};
const editHandlers = {};
const passiveHandlers = {
  touchstart: true,
  touchmove: true
};
class InputState {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: ""
    };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastAndroidDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -2e8;
    this.compositionID = 1;
    // Set to a composition ID when there are pending changes at compositionend
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = Object.create(null);
    this.hideSelectionGuard = null;
  }
}
function initInput(view) {
  for (let event in handlers) {
    let handler = handlers[event];
    view.dom.addEventListener(event, view.input.eventHandlers[event] = event => {
      if (eventBelongsToView(view, event) && !runCustomHandler(view, event) && (view.editable || !(event.type in editHandlers))) handler(view, event);
    }, passiveHandlers[event] ? {
      passive: true
    } : undefined);
  }
  // On Safari, for reasons beyond my understanding, adding an input
  // event handler makes an issue where the composition vanishes when
  // you press enter go away.
  if (safari) view.dom.addEventListener("input", () => null);
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.input.lastSelectionOrigin = origin;
  view.input.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (let type in view.input.eventHandlers) view.dom.removeEventListener(type, view.input.eventHandlers[type]);
  clearTimeout(view.input.composingTimeout);
  clearTimeout(view.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", currentHandlers => {
    for (let type in currentHandlers) if (!view.input.eventHandlers[type]) view.dom.addEventListener(type, view.input.eventHandlers[type] = event => runCustomHandler(view, event));
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", handlers => {
    let handler = handlers[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles) return true;
  if (event.defaultPrevented) return false;
  for (let node = event.target; node != view.dom; node = node.parentNode) if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event)) return false;
  return true;
}
function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers))) handlers[event.type](view, event);
}
editHandlers.keydown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) return;
  view.input.lastKeyCode = event.keyCode;
  view.input.lastKeyCodeTime = Date.now();
  // Suppress enter key events on Chrome Android, because those tend
  // to be part of a confused sequence of composition events fired,
  // and handling them eagerly tends to corrupt the input.
  if (android && chrome && event.keyCode == 13) return;
  if (event.keyCode != 229) view.domObserver.forceFlush();
  // On iOS, if we preventDefault enter key presses, the virtual
  // keyboard gets confused. So the hack here is to set a flag that
  // makes the DOM change code recognize that what just happens should
  // be replaced by whatever the Enter key handlers do.
  if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    let now = Date.now();
    view.input.lastIOSEnter = now;
    view.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
      if (view.input.lastIOSEnter == now) {
        view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")));
        view.input.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", f => f(view, event)) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = (view, event) => {
  if (event.keyCode == 16) view.input.shiftKey = false;
};
editHandlers.keypress = (view, _event) => {
  let event = _event;
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey) return;
  if (view.someProp("handleKeyPress", f => f(view, event))) {
    event.preventDefault();
    return;
  }
  let sel = view.state.selection;
  if (!(sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection) || !sel.$from.sameParent(sel.$to)) {
    let text = String.fromCharCode(event.charCode);
    if (!/[\r\n]/.test(text) && !view.someProp("handleTextInput", f => f(view, sel.$from.pos, sel.$to.pos, text))) view.dispatch(view.state.tr.insertText(text).scrollIntoView());
    event.preventDefault();
  }
};
function eventCoords(event) {
  return {
    left: event.clientX,
    top: event.clientY
  };
}
function isNear(event, click) {
  let dx = click.x - event.clientX,
    dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    if (view.someProp(propName, f => i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false))) return true;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused) view.focus();
  let tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") tr.setMeta("pointer", true);
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside),
    node = $pos.nodeAfter;
  if (node && node.isAtom && prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(node)) {
    updateSelection(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1) return false;
  let sel = view.state.selection,
    selectedNode,
    selectAt;
  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection) selectedNode = sel.node;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos) selectAt = $pos.before(sel.$from.depth);else selectAt = $pos.before(i);
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", f => f(view, pos, event)) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", f => f(view, pos, event));
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", f => f(view, pos, event)) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0) return false;
  let doc = view.state.doc;
  if (inside == -1) {
    if (doc.inlineContent) {
      updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection.create(doc, 0, doc.content.size), "pointer");
      return true;
    }
    return false;
  }
  let $pos = doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    let nodePos = $pos.before(i);
    if (node.inlineContent) updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection.create(doc, nodePos + 1, nodePos + 1 + node.content.size), "pointer");else if (prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(node)) updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(doc, nodePos), "pointer");else continue;
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
const selectNodeModifier = mac ? "metaKey" : "ctrlKey";
handlers.mousedown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.shiftKey;
  let flushed = forceDOMFlush(view);
  let now = Date.now(),
    type = "singleClick";
  if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier]) {
    if (view.input.lastClick.type == "singleClick") type = "doubleClick";else if (view.input.lastClick.type == "doubleClick") type = "tripleClick";
  }
  view.input.lastClick = {
    time: now,
    x: event.clientX,
    y: event.clientY,
    type
  };
  let pos = view.posAtCoords(eventCoords(event));
  if (!pos) return;
  if (type == "singleClick") {
    if (view.input.mouseDown) view.input.mouseDown.done();
    view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
class MouseDown {
  constructor(view, pos, event, flushed) {
    this.view = view;
    this.pos = pos;
    this.event = event;
    this.flushed = flushed;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = view.state.doc;
    this.selectNode = !!event[selectNodeModifier];
    this.allowDefault = event.shiftKey;
    let targetNode, targetPos;
    if (pos.inside > -1) {
      targetNode = view.state.doc.nodeAt(pos.inside);
      targetPos = pos.inside;
    } else {
      let $pos = view.state.doc.resolve(pos.pos);
      targetNode = $pos.parent;
      targetPos = $pos.depth ? $pos.before() : 0;
    }
    const target = flushed ? null : event.target;
    const targetDesc = target ? view.docView.nearestDesc(target, true) : null;
    this.target = targetDesc ? targetDesc.dom : null;
    let {
      selection
    } = view.state;
    if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection && selection.from <= targetPos && selection.to > targetPos) this.mightDrag = {
      node: targetNode,
      pos: targetPos,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
    };
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.draggable = true;
      if (this.mightDrag.setUneditable) setTimeout(() => {
        if (this.view.input.mouseDown == this) this.target.setAttribute("contentEditable", "false");
      }, 20);
      this.view.domObserver.start();
    }
    view.root.addEventListener("mouseup", this.up = this.up.bind(this));
    view.root.addEventListener("mousemove", this.move = this.move.bind(this));
    setSelectionOrigin(view, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.removeAttribute("draggable");
      if (this.mightDrag.setUneditable) this.target.removeAttribute("contentEditable");
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync) setTimeout(() => selectionToDOM(this.view));
    this.view.input.mouseDown = null;
  }
  up(event) {
    this.done();
    if (!this.view.dom.contains(event.target)) return;
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc) pos = this.view.posAtCoords(eventCoords(event));
    this.updateAllowDefault(event);
    if (this.allowDefault || !pos) {
      setSelectionOrigin(this.view, "pointer");
    } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
      event.preventDefault();
    } else if (event.button == 0 && (this.flushed ||
    // Safari ignores clicks on draggable elements
    safari && this.mightDrag && !this.mightDrag.node.isAtom ||
    // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    chrome && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
      updateSelection(this.view, prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
      event.preventDefault();
    } else {
      setSelectionOrigin(this.view, "pointer");
    }
  }
  move(event) {
    this.updateAllowDefault(event);
    setSelectionOrigin(this.view, "pointer");
    if (event.buttons == 0) this.done();
  }
  updateAllowDefault(event) {
    if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4)) this.allowDefault = true;
  }
}
handlers.touchstart = view => {
  view.input.lastTouch = Date.now();
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.touchmove = view => {
  view.input.lastTouch = Date.now();
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = view => forceDOMFlush(view);
function inOrNearComposition(view, event) {
  if (view.composing) return true;
  // See https://www.stum.de/2016/06/24/handling-ime-events-in-javascript/.
  // On Japanese input method editors (IMEs), the Enter key is used to confirm character
  // selection. On Safari, when Enter is pressed, compositionend and keydown events are
  // emitted. The keydown event triggers newline insertion, which we don't want.
  // This method returns true if the keydown event should be ignored.
  // We only ignore it once, as pressing Enter a second time *should* insert a newline.
  // Furthermore, the keydown event timestamp must be close to the compositionEndedAt timestamp.
  // This guards against the case where compositionend is triggered without the keyboard
  // (e.g. character confirmation may be done with the mouse), and keydown is triggered
  // afterwards- we wouldn't want to ignore the keydown event in this case.
  if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
    view.input.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
// Drop active composition after 5 seconds of inactivity on Android
const timeoutComposition = android ? 5000 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = view => {
  if (!view.composing) {
    view.domObserver.flush();
    let {
        state
      } = view,
      $pos = state.selection.$from;
    if (state.selection.empty && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some(m => m.type.spec.inclusive === false))) {
      // Need to wrap the cursor in mark nodes different from the ones in the DOM context
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view);
      // In firefox, if the cursor is after but outside a marked node,
      // the inserted text won't inherit the marks. So this moves it
      // inside if necessary.
      if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        let sel = view.domSelectionRange();
        for (let node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0;) {
          let before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
          if (!before) break;
          if (before.nodeType == 3) {
            view.domSelection().collapse(before, before.nodeValue.length);
            break;
          } else {
            node = before;
            offset = -1;
          }
        }
      }
    }
    view.input.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = (view, event) => {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = event.timeStamp;
    view.input.compositionPendingChanges = view.domObserver.pendingRecords().length ? view.input.compositionID : 0;
    view.input.compositionNode = null;
    if (view.input.compositionPendingChanges) Promise.resolve().then(() => view.domObserver.flush());
    view.input.compositionID++;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.input.composingTimeout);
  if (delay > -1) view.input.composingTimeout = setTimeout(() => endComposition(view), delay);
}
function clearComposition(view) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.input.compositionNodes.length > 0) view.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(view) {
  let sel = view.domSelectionRange();
  if (!sel.focusNode) return null;
  let textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
  let textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
  if (textBefore && textAfter && textBefore != textAfter) {
    let descAfter = textAfter.pmViewDesc;
    if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
      return textAfter;
    } else if (view.input.compositionNode == textAfter) {
      let descBefore = textBefore.pmViewDesc;
      if (!(!descBefore || !descBefore.isText(textBefore.nodeValue))) return textAfter;
    }
  }
  return textBefore || textAfter;
}
function timestampFromCustomEvent() {
  let event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
/**
@internal
*/
function endComposition(view, forceUpdate = false) {
  if (android && view.domObserver.flushingSoon >= 0) return;
  view.domObserver.forceFlush();
  clearComposition(view);
  if (forceUpdate || view.docView && view.docView.dirty) {
    let sel = selectionFromDOM(view);
    if (sel && !sel.eq(view.state.selection)) view.dispatch(view.state.tr.setSelection(sel));else view.updateState(view.state);
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  // The extra wrapper is somehow necessary on IE/Edge to prevent the
  // content from being mangled when it is put onto the clipboard
  if (!view.dom.parentNode) return;
  let wrap = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let sel = getSelection(),
    range = document.createRange();
  range.selectNodeContents(dom);
  // Done because IE will fire a selectionchange moving the selection
  // to its start when removeAllRanges is called and the editor still
  // has focus (which will mess up the editor's selection state).
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(() => {
    if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    view.focus();
  }, 50);
}
// This is very crude, but unfortunately both these browsers _pretend_
// that they have a clipboard API—all the objects and methods are
// there, they just don't work, and they are hard to test.
const brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = (view, _event) => {
  let event = _event;
  let sel = view.state.selection,
    cut = event.type == "cut";
  if (sel.empty) return;
  // IE and Edge's clipboard interface is completely broken
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let slice = sel.content(),
    {
      dom,
      text
    } = serializeForClipboard(view, slice);
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text);
  } else {
    captureCopy(view, dom);
  }
  if (cut) view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(slice) {
  return slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1 ? slice.content.firstChild : null;
}
function capturePaste(view, event) {
  if (!view.dom.parentNode) return;
  let plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
  let target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText) target.contentEditable = "true";
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  setTimeout(() => {
    view.focus();
    if (target.parentNode) target.parentNode.removeChild(target);
    if (plainText) doPaste(view, target.value, null, plain, event);else doPaste(view, target.textContent, target.innerHTML, plain, event);
  }, 50);
}
function doPaste(view, text, html, preferPlain, event) {
  let slice = parseFromClipboard(view, text, html, preferPlain, view.state.selection.$from);
  if (view.someProp("handlePaste", f => f(view, event, slice || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty))) return true;
  if (!slice) return false;
  let singleNode = sliceSingleNode(slice);
  let tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, preferPlain) : view.state.tr.replaceSelection(slice);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function getText(clipboardData) {
  let text = clipboardData.getData("text/plain") || clipboardData.getData("Text");
  if (text) return text;
  let uris = clipboardData.getData("text/uri-list");
  return uris ? uris.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = (view, _event) => {
  let event = _event;
  // Handling paste from JavaScript during composition is very poorly
  // handled by browsers, so as a dodgy but preferable kludge, we just
  // let the browser do its native thing there, except on Android,
  // where the editor is almost always composing.
  if (view.composing && !android) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  if (data && doPaste(view, getText(data), data.getData("text/html"), plain, event)) event.preventDefault();else capturePaste(view, event);
};
class Dragging {
  constructor(slice, move, node) {
    this.slice = slice;
    this.move = move;
    this.node = node;
  }
}
const dragCopyModifier = mac ? "altKey" : "ctrlKey";
handlers.dragstart = (view, _event) => {
  let event = _event;
  let mouseDown = view.input.mouseDown;
  if (mouseDown) mouseDown.done();
  if (!event.dataTransfer) return;
  let sel = view.state.selection;
  let pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
  let node;
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection ? sel.to - 1 : sel.to)) ;else if (mouseDown && mouseDown.mightDrag) {
    node = prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos);
  } else if (event.target && event.target.nodeType == 1) {
    let desc = view.docView.nearestDesc(event.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView) node = prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(view.state.doc, desc.posBefore);
  }
  let draggedSlice = (node || view.state.selection).content();
  let {
    dom,
    text,
    slice
  } = serializeForClipboard(view, draggedSlice);
  event.dataTransfer.clearData();
  event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  // See https://github.com/ProseMirror/prosemirror/issues/1156
  event.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI) event.dataTransfer.setData("text/plain", text);
  view.dragging = new Dragging(slice, !event[dragCopyModifier], node);
};
handlers.dragend = view => {
  let dragging = view.dragging;
  window.setTimeout(() => {
    if (view.dragging == dragging) view.dragging = null;
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = (_, e) => e.preventDefault();
editHandlers.drop = (view, _event) => {
  let event = _event;
  let dragging = view.dragging;
  view.dragging = null;
  if (!event.dataTransfer) return;
  let eventPos = view.posAtCoords(eventCoords(event));
  if (!eventPos) return;
  let $mouse = view.state.doc.resolve(eventPos.pos);
  let slice = dragging && dragging.slice;
  if (slice) {
    view.someProp("transformPasted", f => {
      slice = f(slice, view);
    });
  } else {
    slice = parseFromClipboard(view, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
  }
  let move = !!(dragging && !event[dragCopyModifier]);
  if (view.someProp("handleDrop", f => f(view, event, slice || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice.empty, move))) {
    event.preventDefault();
    return;
  }
  if (!slice) return;
  event.preventDefault();
  let insertPos = slice ? (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_2__.dropPoint)(view.state.doc, $mouse.pos, slice) : $mouse.pos;
  if (insertPos == null) insertPos = $mouse.pos;
  let tr = view.state.tr;
  if (move) {
    let {
      node
    } = dragging;
    if (node) node.replace(tr);else tr.deleteSelection();
  }
  let pos = tr.mapping.map(insertPos);
  let isNode = slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1;
  let beforeInsert = tr.doc;
  if (isNode) tr.replaceRangeWith(pos, pos, slice.content.firstChild);else tr.replaceRange(pos, pos, slice);
  if (tr.doc.eq(beforeInsert)) return;
  let $pos = tr.doc.resolve(pos);
  if (isNode && prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.isSelectable(slice.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild)) {
    tr.setSelection(new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection($pos));
  } else {
    let end = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end = newTo);
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = view => {
  view.input.lastFocus = Date.now();
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(() => {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelectionRange())) selectionToDOM(view);
    }, 20);
  }
};
handlers.blur = (view, _event) => {
  let event = _event;
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (event.relatedTarget && view.dom.contains(event.relatedTarget)) view.domObserver.currentSelection.clear();
    view.focused = false;
  }
};
handlers.beforeinput = (view, _event) => {
  let event = _event;
  // We should probably do more with beforeinput events, but support
  // is so spotty that I'm still waiting to see where they are going.
  // Very specific hack to deal with backspace sometimes failing on
  // Chrome Android when after an uneditable node.
  if (chrome && android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    let {
      domChangeCount
    } = view.input;
    setTimeout(() => {
      if (view.input.domChangeCount != domChangeCount) return; // Event already had some effect
      // This bug tends to close the virtual keyboard, so we refocus
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", f => f(view, keyEvent(8, "Backspace")))) return;
      let {
        $cursor
      } = view.state.selection;
      // Crude approximation of backspace behavior when no command handled it
      if ($cursor && $cursor.pos > 0) view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
    }, 50);
  }
};
// Make sure all handlers get registered
for (let prop in editHandlers) handlers[prop] = editHandlers[prop];
function compareObjs(a, b) {
  if (a == b) return true;
  for (let p in a) if (a[p] !== b[p]) return false;
  for (let p in b) if (!(p in a)) return false;
  return true;
}
class WidgetType {
  constructor(toDOM, spec) {
    this.toDOM = toDOM;
    this.spec = spec || noSpec;
    this.side = this.spec.side || 0;
  }
  map(mapping, span, offset, oldOffset) {
    let {
      pos,
      deleted
    } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
    return deleted ? null : new Decoration(pos - offset, pos - offset, this);
  }
  valid() {
    return true;
  }
  eq(other) {
    return this == other || other instanceof WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
  }
  destroy(node) {
    if (this.spec.destroy) this.spec.destroy(node);
  }
}
class InlineType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset, oldOffset) {
    let from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
    let to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
    return from >= to ? null : new Decoration(from, to, this);
  }
  valid(_, span) {
    return span.from < span.to;
  }
  eq(other) {
    return this == other || other instanceof InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  static is(span) {
    return span.type instanceof InlineType;
  }
  destroy() {}
}
class NodeType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset, oldOffset) {
    let from = mapping.mapResult(span.from + oldOffset, 1);
    if (from.deleted) return null;
    let to = mapping.mapResult(span.to + oldOffset, -1);
    if (to.deleted || to.pos <= from.pos) return null;
    return new Decoration(from.pos - offset, to.pos - offset, this);
  }
  valid(node, span) {
    let {
        index,
        offset
      } = node.content.findIndex(span.from),
      child;
    return offset == span.from && !(child = node.child(index)).isText && offset + child.nodeSize == span.to;
  }
  eq(other) {
    return this == other || other instanceof NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  destroy() {}
}
/**
Decoration objects can be provided to the view through the
[`decorations` prop](https://prosemirror.net/docs/ref/#view.EditorProps.decorations). They come in
several variants—see the static members of this class for details.
*/
class Decoration {
  /**
  @internal
  */
  constructor(
  /**
  The start position of the decoration.
  */
  from,
  /**
  The end position. Will be the same as `from` for [widget
  decorations](https://prosemirror.net/docs/ref/#view.Decoration^widget).
  */
  to,
  /**
  @internal
  */
  type) {
    this.from = from;
    this.to = to;
    this.type = type;
  }
  /**
  @internal
  */
  copy(from, to) {
    return new Decoration(from, to, this.type);
  }
  /**
  @internal
  */
  eq(other, offset = 0) {
    return this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
  }
  /**
  @internal
  */
  map(mapping, offset, oldOffset) {
    return this.type.map(mapping, this, offset, oldOffset);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(pos, toDOM, spec) {
    return new Decoration(pos, pos, new WidgetType(toDOM, spec));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(from, to, attrs, spec) {
    return new Decoration(from, to, new InlineType(attrs, spec));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(from, to, attrs, spec) {
    return new Decoration(from, to, new NodeType(attrs, spec));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof InlineType;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof WidgetType;
  }
}
const none = [],
  noSpec = {};
/**
A collection of [decorations](https://prosemirror.net/docs/ref/#view.Decoration), organized in such
a way that the drawing algorithm can efficiently use and compare
them. This is a persistent data structure—it is not modified,
updates create a new value.
*/
class DecorationSet {
  /**
  @internal
  */
  constructor(local, children) {
    this.local = local.length ? local : none;
    this.children = children.length ? children : none;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(doc, decorations) {
    return decorations.length ? buildTree(decorations, doc, 0, noSpec) : empty;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(start, end, predicate) {
    let result = [];
    this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
    return result;
  }
  findInner(start, end, result, offset, predicate) {
    for (let i = 0; i < this.local.length; i++) {
      let span = this.local[i];
      if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec))) result.push(span.copy(span.from + offset, span.to + offset));
    }
    for (let i = 0; i < this.children.length; i += 3) {
      if (this.children[i] < end && this.children[i + 1] > start) {
        let childOff = this.children[i] + 1;
        this.children[i + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
      }
    }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(mapping, doc, options) {
    if (this == empty || mapping.maps.length == 0) return this;
    return this.mapInner(mapping, doc, 0, 0, options || noSpec);
  }
  /**
  @internal
  */
  mapInner(mapping, node, offset, oldOffset, options) {
    let newLocal;
    for (let i = 0; i < this.local.length; i++) {
      let mapped = this.local[i].map(mapping, offset, oldOffset);
      if (mapped && mapped.type.valid(node, mapped)) (newLocal || (newLocal = [])).push(mapped);else if (options.onRemove) options.onRemove(this.local[i].spec);
    }
    if (this.children.length) return mapChildren(this.children, newLocal || [], mapping, node, offset, oldOffset, options);else return newLocal ? new DecorationSet(newLocal.sort(byPos), none) : empty;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(doc, decorations) {
    if (!decorations.length) return this;
    if (this == empty) return DecorationSet.create(doc, decorations);
    return this.addInner(doc, decorations, 0);
  }
  addInner(doc, decorations, offset) {
    let children,
      childIndex = 0;
    doc.forEach((childNode, childOffset) => {
      let baseOffset = childOffset + offset,
        found;
      if (!(found = takeSpansForNode(decorations, childNode, baseOffset))) return;
      if (!children) children = this.children.slice();
      while (childIndex < children.length && children[childIndex] < childOffset) childIndex += 3;
      if (children[childIndex] == childOffset) children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found, baseOffset + 1);else children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found, childNode, baseOffset + 1, noSpec));
      childIndex += 3;
    });
    let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
    for (let i = 0; i < local.length; i++) if (!local[i].type.valid(doc, local[i])) local.splice(i--, 1);
    return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(decorations) {
    if (decorations.length == 0 || this == empty) return this;
    return this.removeInner(decorations, 0);
  }
  removeInner(decorations, offset) {
    let children = this.children,
      local = this.local;
    for (let i = 0; i < children.length; i += 3) {
      let found;
      let from = children[i] + offset,
        to = children[i + 1] + offset;
      for (let j = 0, span; j < decorations.length; j++) if (span = decorations[j]) {
        if (span.from > from && span.to < to) {
          decorations[j] = null;
          (found || (found = [])).push(span);
        }
      }
      if (!found) continue;
      if (children == this.children) children = this.children.slice();
      let removed = children[i + 2].removeInner(found, from + 1);
      if (removed != empty) {
        children[i + 2] = removed;
      } else {
        children.splice(i, 3);
        i -= 3;
      }
    }
    if (local.length) for (let i = 0, span; i < decorations.length; i++) if (span = decorations[i]) {
      for (let j = 0; j < local.length; j++) if (local[j].eq(span, offset)) {
        if (local == this.local) local = this.local.slice();
        local.splice(j--, 1);
      }
    }
    if (children == this.children && local == this.local) return this;
    return local.length || children.length ? new DecorationSet(local, children) : empty;
  }
  forChild(offset, node) {
    if (this == empty) return this;
    if (node.isLeaf) return DecorationSet.empty;
    let child, local;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] >= offset) {
      if (this.children[i] == offset) child = this.children[i + 2];
      break;
    }
    let start = offset + 1,
      end = start + node.content.size;
    for (let i = 0; i < this.local.length; i++) {
      let dec = this.local[i];
      if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
        let from = Math.max(start, dec.from) - start,
          to = Math.min(end, dec.to) - start;
        if (from < to) (local || (local = [])).push(dec.copy(from, to));
      }
    }
    if (local) {
      let localSet = new DecorationSet(local.sort(byPos), none);
      return child ? new DecorationGroup([localSet, child]) : localSet;
    }
    return child || empty;
  }
  /**
  @internal
  */
  eq(other) {
    if (this == other) return true;
    if (!(other instanceof DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) return false;
    for (let i = 0; i < this.local.length; i++) if (!this.local[i].eq(other.local[i])) return false;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2])) return false;
    return true;
  }
  /**
  @internal
  */
  locals(node) {
    return removeOverlap(this.localsInner(node));
  }
  /**
  @internal
  */
  localsInner(node) {
    if (this == empty) return none;
    if (node.inlineContent || !this.local.some(InlineType.is)) return this.local;
    let result = [];
    for (let i = 0; i < this.local.length; i++) {
      if (!(this.local[i].type instanceof InlineType)) result.push(this.local[i]);
    }
    return result;
  }
}
/**
The empty set of decorations.
*/
DecorationSet.empty = new DecorationSet([], []);
/**
@internal
*/
DecorationSet.removeOverlap = removeOverlap;
const empty = DecorationSet.empty;
// An abstraction that allows the code dealing with decorations to
// treat multiple DecorationSet objects as if it were a single object
// with (a subset of) the same interface.
class DecorationGroup {
  constructor(members) {
    this.members = members;
  }
  map(mapping, doc) {
    const mappedDecos = this.members.map(member => member.map(mapping, doc, noSpec));
    return DecorationGroup.from(mappedDecos);
  }
  forChild(offset, child) {
    if (child.isLeaf) return DecorationSet.empty;
    let found = [];
    for (let i = 0; i < this.members.length; i++) {
      let result = this.members[i].forChild(offset, child);
      if (result == empty) continue;
      if (result instanceof DecorationGroup) found = found.concat(result.members);else found.push(result);
    }
    return DecorationGroup.from(found);
  }
  eq(other) {
    if (!(other instanceof DecorationGroup) || other.members.length != this.members.length) return false;
    for (let i = 0; i < this.members.length; i++) if (!this.members[i].eq(other.members[i])) return false;
    return true;
  }
  locals(node) {
    let result,
      sorted = true;
    for (let i = 0; i < this.members.length; i++) {
      let locals = this.members[i].localsInner(node);
      if (!locals.length) continue;
      if (!result) {
        result = locals;
      } else {
        if (sorted) {
          result = result.slice();
          sorted = false;
        }
        for (let j = 0; j < locals.length; j++) result.push(locals[j]);
      }
    }
    return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(members) {
    switch (members.length) {
      case 0:
        return empty;
      case 1:
        return members[0];
      default:
        return new DecorationGroup(members.every(m => m instanceof DecorationSet) ? members : members.reduce((r, m) => r.concat(m instanceof DecorationSet ? m : m.members), []));
    }
  }
}
function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
  let children = oldChildren.slice();
  // Mark the children that are directly touched by changes, and
  // move those that are after the changes.
  for (let i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
    let moved = 0;
    mapping.maps[i].forEach((oldStart, oldEnd, newStart, newEnd) => {
      let dSize = newEnd - newStart - (oldEnd - oldStart);
      for (let i = 0; i < children.length; i += 3) {
        let end = children[i + 1];
        if (end < 0 || oldStart > end + baseOffset - moved) continue;
        let start = children[i] + baseOffset - moved;
        if (oldEnd >= start) {
          children[i + 1] = oldStart <= start ? -2 : -1;
        } else if (oldStart >= baseOffset && dSize) {
          children[i] += dSize;
          children[i + 1] += dSize;
        }
      }
      moved += dSize;
    });
    baseOffset = mapping.maps[i].map(baseOffset, -1);
  }
  // Find the child nodes that still correspond to a single node,
  // recursively call mapInner on them and update their positions.
  let mustRebuild = false;
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
    // Touched nodes
    if (children[i + 1] == -2) {
      mustRebuild = true;
      children[i + 1] = -1;
      continue;
    }
    let from = mapping.map(oldChildren[i] + oldOffset),
      fromLocal = from - offset;
    if (fromLocal < 0 || fromLocal >= node.content.size) {
      mustRebuild = true;
      continue;
    }
    // Must read oldChildren because children was tagged with -1
    let to = mapping.map(oldChildren[i + 1] + oldOffset, -1),
      toLocal = to - offset;
    let {
      index,
      offset: childOffset
    } = node.content.findIndex(fromLocal);
    let childNode = node.maybeChild(index);
    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
      let mapped = children[i + 2].mapInner(mapping, childNode, from + 1, oldChildren[i] + oldOffset + 1, options);
      if (mapped != empty) {
        children[i] = fromLocal;
        children[i + 1] = toLocal;
        children[i + 2] = mapped;
      } else {
        children[i + 1] = -2;
        mustRebuild = true;
      }
    } else {
      mustRebuild = true;
    }
  }
  // Remaining children must be collected and rebuilt into the appropriate structure
  if (mustRebuild) {
    let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset, oldOffset, options);
    let built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
      children.splice(i, 3);
      i -= 3;
    }
    for (let i = 0, j = 0; i < built.children.length; i += 3) {
      let from = built.children[i];
      while (j < children.length && children[j] < from) j += 3;
      children.splice(j, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
    }
  }
  return new DecorationSet(newLocal.sort(byPos), children);
}
function moveSpans(spans, offset) {
  if (!offset || !spans.length) return spans;
  let result = [];
  for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    result.push(new Decoration(span.from + offset, span.to + offset, span.type));
  }
  return result;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
  // Gather all decorations from the remaining marked children
  function gather(set, oldOffset) {
    for (let i = 0; i < set.local.length; i++) {
      let mapped = set.local[i].map(mapping, offset, oldOffset);
      if (mapped) decorations.push(mapped);else if (options.onRemove) options.onRemove(set.local[i].spec);
    }
    for (let i = 0; i < set.children.length; i += 3) gather(set.children[i + 2], set.children[i] + oldOffset + 1);
  }
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] == -1) gather(children[i + 2], oldChildren[i] + oldOffset + 1);
  return decorations;
}
function takeSpansForNode(spans, node, offset) {
  if (node.isLeaf) return null;
  let end = offset + node.nodeSize,
    found = null;
  for (let i = 0, span; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset && span.to < end) {
      (found || (found = [])).push(span);
      spans[i] = null;
    }
  }
  return found;
}
function withoutNulls(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) if (array[i] != null) result.push(array[i]);
  return result;
}
// Build up a tree that corresponds to a set of decorations. `offset`
// is a base offset that should be subtracted from the `from` and `to`
// positions in the spans (so that we don't have to allocate new spans
// for recursive calls).
function buildTree(spans, node, offset, options) {
  let children = [],
    hasNulls = false;
  node.forEach((childNode, localStart) => {
    let found = takeSpansForNode(spans, childNode, localStart + offset);
    if (found) {
      hasNulls = true;
      let subtree = buildTree(found, childNode, offset + localStart + 1, options);
      if (subtree != empty) children.push(localStart, localStart + childNode.nodeSize, subtree);
    }
  });
  let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
  for (let i = 0; i < locals.length; i++) if (!locals[i].type.valid(node, locals[i])) {
    if (options.onRemove) options.onRemove(locals[i].spec);
    locals.splice(i--, 1);
  }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty;
}
// Used to sort decorations so that ones with a low start position
// come first, and within a set with the same start position, those
// with an smaller end position come first.
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
// Scan a sorted array of decorations for partially overlapping spans,
// and split those so that only fully overlapping spans are left (to
// make subsequent rendering easier). Will return the input array if
// no partially overlapping spans are found (the common case).
function removeOverlap(spans) {
  let working = spans;
  for (let i = 0; i < working.length - 1; i++) {
    let span = working[i];
    if (span.from != span.to) for (let j = i + 1; j < working.length; j++) {
      let next = working[j];
      if (next.from == span.from) {
        if (next.to != span.to) {
          if (working == spans) working = spans.slice();
          // Followed by a partially overlapping larger span. Split that
          // span.
          working[j] = next.copy(next.from, span.to);
          insertAhead(working, j + 1, next.copy(span.to, next.to));
        }
        continue;
      } else {
        if (next.from < span.to) {
          if (working == spans) working = spans.slice();
          // The end of this one overlaps with a subsequent span. Split
          // this one.
          working[i] = span.copy(span.from, next.from);
          insertAhead(working, j, span.copy(next.from, span.to));
        }
        break;
      }
    }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) i++;
  array.splice(i, 0, deco);
}
// Get the decorations associated with the current props of a view.
function viewDecorations(view) {
  let found = [];
  view.someProp("decorations", f => {
    let result = f(view.state);
    if (result && result != empty) found.push(result);
  });
  if (view.cursorWrapper) found.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  return DecorationGroup.from(found);
}
const observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
// IE11 has very broken mutation observers, so we also listen to DOMCharacterDataModified
const useCharData = ie && ie_version <= 11;
class SelectionState {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(sel) {
    this.anchorNode = sel.anchorNode;
    this.anchorOffset = sel.anchorOffset;
    this.focusNode = sel.focusNode;
    this.focusOffset = sel.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(sel) {
    return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
  }
}
class DOMObserver {
  constructor(view, handleDOMChange) {
    this.view = view;
    this.handleDOMChange = handleDOMChange;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new SelectionState();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.observer = window.MutationObserver && new window.MutationObserver(mutations => {
      for (let i = 0; i < mutations.length; i++) this.queue.push(mutations[i]);
      // IE11 will sometimes (on backspacing out a single character
      // text node after a BR node) call the observer callback
      // before actually updating the DOM, which will cause
      // ProseMirror to miss the change (see #930)
      if (ie && ie_version <= 11 && mutations.some(m => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length)) this.flushSoon();else this.flush();
    });
    if (useCharData) {
      this.onCharData = e => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0) this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1;
      this.flush();
    }, 20);
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, observeOptions);
    }
    if (this.onCharData) this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let take = this.observer.takeRecords();
      if (take.length) {
        for (let i = 0; i < take.length; i++) this.queue.push(take[i]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData) this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (!hasFocusAndSelection(this.view)) return;
    if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
    // Deletions on IE11 fire their events in the wrong order, giving
    // us a selection change event before the DOM changes are
    // reported.
    if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
      let sel = this.view.domSelectionRange();
      // Selection.isCollapsed isn't reliable on IE
      if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) return this.flushSoon();
    }
    this.flush();
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(sel) {
    if (!sel.focusNode) return true;
    let ancestors = new Set(),
      container;
    for (let scan = sel.focusNode; scan; scan = parentNode(scan)) ancestors.add(scan);
    for (let scan = sel.anchorNode; scan; scan = parentNode(scan)) if (ancestors.has(scan)) {
      container = scan;
      break;
    }
    let desc = container && this.view.docView.nearestDesc(container);
    if (desc && desc.ignoreMutation({
      type: "selection",
      target: container.nodeType == 3 ? container.parentNode : container
    })) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer) for (let mut of this.observer.takeRecords()) this.queue.push(mut);
    return this.queue;
  }
  flush() {
    let {
      view
    } = this;
    if (!view.docView || this.flushingSoon > -1) return;
    let mutations = this.pendingRecords();
    if (mutations.length) this.queue = [];
    let sel = view.domSelectionRange();
    let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(view) && !this.ignoreSelectionChange(sel);
    let from = -1,
      to = -1,
      typeOver = false,
      added = [];
    if (view.editable) {
      for (let i = 0; i < mutations.length; i++) {
        let result = this.registerMutation(mutations[i], added);
        if (result) {
          from = from < 0 ? result.from : Math.min(result.from, from);
          to = to < 0 ? result.to : Math.max(result.to, to);
          if (result.typeOver) typeOver = true;
        }
      }
    }
    if (gecko && added.length > 1) {
      let brs = added.filter(n => n.nodeName == "BR");
      if (brs.length == 2) {
        let a = brs[0],
          b = brs[1];
        if (a.parentNode && a.parentNode.parentNode == b.parentNode) b.remove();else a.remove();
      }
    }
    let readSel = null;
    // If it looks like the browser has reset the selection to the
    // start of the document after focus, restore the selection from
    // the state
    if (from < 0 && newSel && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view)) && readSel.eq(prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.near(view.state.doc.resolve(0), 1))) {
      view.input.lastFocus = 0;
      selectionToDOM(view);
      this.currentSelection.set(sel);
      view.scrollToSelection();
    } else if (from > -1 || newSel) {
      if (from > -1) {
        view.docView.markDirty(from, to);
        checkCSS(view);
      }
      this.handleDOMChange(from, to, typeOver, added);
      if (view.docView && view.docView.dirty) view.updateState(view.state);else if (!this.currentSelection.eq(sel)) selectionToDOM(view);
      this.currentSelection.set(sel);
    }
  }
  registerMutation(mut, added) {
    // Ignore mutations inside nodes that were already noted as inserted
    if (added.indexOf(mut.target) > -1) return null;
    let desc = this.view.docView.nearestDesc(mut.target);
    if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" ||
    // Firefox sometimes fires spurious events for null/empty styles
    mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))) return null;
    if (!desc || desc.ignoreMutation(mut)) return null;
    if (mut.type == "childList") {
      for (let i = 0; i < mut.addedNodes.length; i++) added.push(mut.addedNodes[i]);
      if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target)) return {
        from: desc.posBefore,
        to: desc.posAfter
      };
      let prev = mut.previousSibling,
        next = mut.nextSibling;
      if (ie && ie_version <= 11 && mut.addedNodes.length) {
        // IE11 gives us incorrect next/prev siblings for some
        // insertions, so if there are added nodes, recompute those
        for (let i = 0; i < mut.addedNodes.length; i++) {
          let {
            previousSibling,
            nextSibling
          } = mut.addedNodes[i];
          if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) prev = previousSibling;
          if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) next = nextSibling;
        }
      }
      let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
      let from = desc.localPosFromDOM(mut.target, fromOffset, -1);
      let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
      let to = desc.localPosFromDOM(mut.target, toOffset, 1);
      return {
        from,
        to
      };
    } else if (mut.type == "attributes") {
      return {
        from: desc.posAtStart - desc.border,
        to: desc.posAtEnd + desc.border
      };
    } else {
      // "characterData"
      return {
        from: desc.posAtStart,
        to: desc.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: mut.target.nodeValue == mut.oldValue
      };
    }
  }
}
let cssChecked = new WeakMap();
let cssCheckWarned = false;
function checkCSS(view) {
  if (cssChecked.has(view)) return;
  cssChecked.set(view, null);
  if (['normal', 'nowrap', 'pre-line'].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1) {
    view.requiresGeckoHackNode = gecko;
    if (cssCheckWarned) return;
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    cssCheckWarned = true;
  }
}
function rangeToSelectionRange(view, range) {
  let anchorNode = range.startContainer,
    anchorOffset = range.startOffset;
  let focusNode = range.endContainer,
    focusOffset = range.endOffset;
  let currentAnchor = view.domAtPos(view.state.selection.anchor);
  // Since such a range doesn't distinguish between anchor and head,
  // use a heuristic that flips it around if its end matches the
  // current anchor.
  if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset)) [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
  return {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  };
}
// Used to work around a Safari Selection/shadow DOM bug
// Based on https://github.com/codemirror/dev/issues/414 fix
function safariShadowSelectionRange(view, selection) {
  if (selection.getComposedRanges) {
    let range = selection.getComposedRanges(view.root)[0];
    if (range) return rangeToSelectionRange(view, range);
  }
  let found;
  function read(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found = event.getTargetRanges()[0];
  }
  // Because Safari (at least in 2018-2022) doesn't provide regular
  // access to the selection inside a shadowRoot, we have to perform a
  // ridiculous hack to get at it—using `execCommand` to trigger a
  // `beforeInput` event so that we can read the target range from the
  // event.
  view.dom.addEventListener("beforeinput", read, true);
  document.execCommand("indent");
  view.dom.removeEventListener("beforeinput", read, true);
  return found ? rangeToSelectionRange(view, found) : null;
}

// Note that all referencing and parsing is done with the
// start-of-operation selection and document, since that's the one
// that the DOM represents. If any changes came in in the meantime,
// the modification is mapped over those before it is applied, in
// readDOMChange.
function parseBetween(view, from_, to_) {
  let {
    node: parent,
    fromOffset,
    toOffset,
    from,
    to
  } = view.docView.parseRange(from_, to_);
  let domSel = view.domSelectionRange();
  let find;
  let anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{
      node: anchor,
      offset: domSel.anchorOffset
    }];
    if (!selectionCollapsed(domSel)) find.push({
      node: domSel.focusNode,
      offset: domSel.focusOffset
    });
  }
  // Work around issue in Chrome where backspacing sometimes replaces
  // the deleted content with a random BR node (issues #799, #831)
  if (chrome && view.input.lastKeyCode === 8) {
    for (let off = toOffset; off > fromOffset; off--) {
      let node = parent.childNodes[off - 1],
        desc = node.pmViewDesc;
      if (node.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size) break;
    }
  }
  let startDoc = view.state.doc;
  let parser = view.someProp("domParser") || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.DOMParser.fromSchema(view.state.schema);
  let $from = startDoc.resolve(from);
  let sel = null,
    doc = parser.parse(parent, {
      topNode: $from.parent,
      topMatch: $from.parent.contentMatchAt($from.index()),
      topOpen: true,
      from: fromOffset,
      to: toOffset,
      preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
      findPositions: find,
      ruleFromNode,
      context: $from
    });
  if (find && find[0].pos != null) {
    let anchor = find[0].pos,
      head = find[1] && find[1].pos;
    if (head == null) head = anchor;
    sel = {
      anchor: anchor + from,
      head: head + from
    };
  }
  return {
    doc,
    sel,
    from,
    to
  };
}
function ruleFromNode(dom) {
  let desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    // Safari replaces the list item or table cell with a BR
    // directly in the list node (?!) if you delete the last
    // character in a list item or table cell (#708, #862)
    if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip
      };
    } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return {
        ignore: true
      };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return {
      ignore: true
    };
  }
  return null;
}
const isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(view, from, to, typeOver, addedNodes) {
  let compositionID = view.input.compositionPendingChanges || (view.composing ? view.input.compositionID : 0);
  view.input.compositionPendingChanges = 0;
  if (from < 0) {
    let origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
    let newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      if (chrome && android && view.input.lastKeyCode === 13 && Date.now() - 100 < view.input.lastKeyCodeTime && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) return;
      let tr = view.state.tr.setSelection(newSel);
      if (origin == "pointer") tr.setMeta("pointer", true);else if (origin == "key") tr.scrollIntoView();
      if (compositionID) tr.setMeta("composition", compositionID);
      view.dispatch(tr);
    }
    return;
  }
  let $before = view.state.doc.resolve(from);
  let shared = $before.sharedDepth(to);
  from = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  let sel = view.state.selection;
  let parse = parseBetween(view, from, to);
  let doc = view.state.doc,
    compare = doc.slice(parse.from, parse.to);
  let preferredPos, preferredSide;
  // Prefer anchoring to end when Backspace is pressed
  if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.input.lastKeyCode = null;
  let change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some(n => n.nodeType == 1 && !isInline.test(n.nodeName)) && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (!change) {
    if (typeOver && sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
      change = {
        start: sel.from,
        endA: sel.to,
        endB: sel.to
      };
    } else {
      if (parse.sel) {
        let sel = resolveSelection(view, view.state.doc, parse.sel);
        if (sel && !sel.eq(view.state.selection)) {
          let tr = view.state.tr.setSelection(sel);
          if (compositionID) tr.setMeta("composition", compositionID);
          view.dispatch(tr);
        }
      }
      return;
    }
  }
  view.input.domChangeCount++;
  // Handle the case where overwriting a selection by typing matches
  // the start or end of the selected content, creating a change
  // that's smaller than what was actually overwritten.
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse.from) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse.to) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  // IE11 will insert a non-breaking space _ahead_ of the space after
  // the cursor space when adding a space before another space. When
  // that happened, adjust the change to cover the space instead.
  if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \u00a0") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  let $from = parse.doc.resolveNoCache(change.start - parse.from);
  let $to = parse.doc.resolveNoCache(change.endB - parse.from);
  let $fromA = doc.resolve(change.start);
  let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
  let nextSel;
  // If this looks like the effect of pressing Enter (or was recorded
  // as being an iOS enter press), just dispatch an Enter key instead.
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some(n => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse.doc.content.size && !$from.sameParent($to) && (nextSel = prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) && nextSel.head == $to.pos) && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  // Same for backspace
  if (view.state.selection.anchor > change.start && looksLikeBackspace(doc, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", f => f(view, keyEvent(8, "Backspace")))) {
    if (android && chrome) view.domObserver.suppressSelectionUpdates(); // #820
    return;
  }
  // Chrome Android will occasionally, during composition, delete the
  // entire composition and then immediately insert it again. This is
  // used to detect that situation.
  if (chrome && android && change.endB == change.start) view.input.lastAndroidDelete = Date.now();
  // This tries to detect Android virtual keyboard
  // enter-and-pick-suggestion action. That sometimes (see issue
  // #1059) first fires a DOM mutation, before moving the selection to
  // the newly created block. And then, because ProseMirror cleans up
  // the DOM selection, it gives up moving the selection entirely,
  // leaving the cursor in the wrong place. When that happens, we drop
  // the new paragraph from the initial change, and fire a simulated
  // enter key afterwards.
  if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse.doc.resolveNoCache(change.endB - parse.from);
    setTimeout(() => {
      view.someProp("handleKeyDown", function (f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  let chFrom = change.start,
    chTo = change.endA;
  let tr, storedMarks, markChange;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      // Deletion
      // IE11 sometimes weirdly moves the DOM selection around after
      // backspacing out the first element in a textblock
      if (ie && ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(() => selectionToDOM(view), 20);
      }
      tr = view.state.tr.delete(chFrom, chTo);
      storedMarks = doc.resolve(change.start).marksAcross(doc.resolve(change.endA));
    } else if (
    // Adding or removing a mark
    change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))) {
      tr = view.state.tr;
      if (markChange.type == "add") tr.addMark(chFrom, chTo, markChange.mark);else tr.removeMark(chFrom, chTo, markChange.mark);
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      // Both positions in the same text node -- simply insert text
      let text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      if (view.someProp("handleTextInput", f => f(view, chFrom, chTo, text))) return;
      tr = view.state.tr.insertText(text, chFrom, chTo);
    }
  }
  if (!tr) tr = view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
  if (parse.sel) {
    let sel = resolveSelection(view, tr.doc, parse.sel);
    // Chrome Android will sometimes, during composition, report the
    // selection in the wrong place. If it looks like that is
    // happening, don't update the selection.
    // Edge just doesn't move the cursor forward when you start typing
    // in an empty block or between br nodes.
    if (sel && !(chrome && android && view.composing && sel.empty && (change.start != change.endB || view.input.lastAndroidDelete < Date.now() - 100) && (sel.head == chFrom || sel.head == tr.mapping.map(chTo) - 1) || ie && sel.empty && sel.head == chFrom)) tr.setSelection(sel);
  }
  if (storedMarks) tr.ensureMarks(storedMarks);
  if (compositionID) tr.setMeta("composition", compositionID);
  view.dispatch(tr.scrollIntoView());
}
function resolveSelection(view, doc, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc.content.size) return null;
  return selectionBetween(view, doc.resolve(parsedSel.anchor), doc.resolve(parsedSel.head));
}
// Given two same-length, non-empty fragments of inline content,
// determine whether the first could be created from the second by
// removing or adding a single mark type.
function isMarkChange(cur, prev) {
  let curMarks = cur.firstChild.marks,
    prevMarks = prev.firstChild.marks;
  let added = curMarks,
    removed = prevMarks,
    type,
    mark,
    update;
  for (let i = 0; i < prevMarks.length; i++) added = prevMarks[i].removeFromSet(added);
  for (let i = 0; i < curMarks.length; i++) removed = curMarks[i].removeFromSet(removed);
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = node => node.mark(mark.addToSet(node.marks));
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = node => node.mark(mark.removeFromSet(node.marks));
  } else {
    return null;
  }
  let updated = [];
  for (let i = 0; i < prev.childCount; i++) updated.push(update(prev.child(i)));
  if (prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(updated).eq(cur)) return {
    mark,
    type
  };
}
function looksLikeBackspace(old, start, end, $newStart, $newEnd) {
  if (
  // The content must have shrunk
  end - start <= $newEnd.pos - $newStart.pos ||
  // newEnd must point directly at or after the end of the block that newStart points into
  skipClosingAndOpening($newStart, true, false) < $newEnd.pos) return false;
  let $start = old.resolve(start);
  // Handle the case where, rather than joining blocks, the change just removed an entire block
  if (!$newStart.parent.isTextblock) {
    let after = $start.nodeAfter;
    return after != null && end == start + after.nodeSize;
  }
  // Start must be at the end of a block
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) return false;
  let $next = old.resolve(skipClosingAndOpening($start, true, true));
  // The next textblock must start before end and end near it
  if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end) return false;
  // The fragments after the join point must match
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  let depth = $pos.depth,
    end = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end++;
    fromEnd = false;
  }
  if (mayOpen) {
    let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end++;
    }
  }
  return end;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  let start = a.findDiffStart(b, pos);
  if (start == null) return null;
  let {
    a: endA,
    b: endB
  } = a.findDiffEnd(b, pos + a.size, pos + b.size);
  if (preferredSide == "end") {
    let adjust = Math.max(0, start - Math.min(endA, endB));
    preferredPos -= endA + adjust - start;
  }
  if (endA < start && a.size < b.size) {
    let move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
    start -= move;
    if (start && start < b.size && isSurrogatePair(b.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endB = start + (endB - endA);
    endA = start;
  } else if (endB < start) {
    let move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
    start -= move;
    if (start && start < a.size && isSurrogatePair(a.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endA = start + (endA - endB);
    endB = start;
  }
  return {
    start,
    endA,
    endB
  };
}
function isSurrogatePair(str) {
  if (str.length != 2) return false;
  let a = str.charCodeAt(0),
    b = str.charCodeAt(1);
  return a >= 0xDC00 && a <= 0xDFFF && b >= 0xD800 && b <= 0xDBFF;
}

/**
@internal
*/
const __serializeForClipboard = serializeForClipboard;
/**
@internal
*/
const __parseFromClipboard = parseFromClipboard;
/**
@internal
*/
const __endComposition = endComposition;
/**
An editor view manages the DOM structure that represents an
editable document. Its state and behavior are determined by its
[props](https://prosemirror.net/docs/ref/#view.DirectEditorProps).
*/
class EditorView {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(place, props) {
    this._root = null;
    /**
    @internal
    */
    this.focused = false;
    /**
    Kludge used to work around a Chrome bug @internal
    */
    this.trackWrites = null;
    this.mounted = false;
    /**
    @internal
    */
    this.markCursor = null;
    /**
    @internal
    */
    this.cursorWrapper = null;
    /**
    @internal
    */
    this.lastSelectedViewDesc = undefined;
    /**
    @internal
    */
    this.input = new InputState();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    /**
    Holds `true` when a hack node is needed in Firefox to prevent the
    [space is eaten issue](https://github.com/ProseMirror/prosemirror/issues/651)
    @internal
    */
    this.requiresGeckoHackNode = false;
    /**
    When editor content is being dragged, this object contains
    information about the dragged slice and whether it is being
    copied or moved. At any other time, it is null.
    */
    this.dragging = null;
    this._props = props;
    this.state = props.state;
    this.directPlugins = props.plugins || [];
    this.directPlugins.forEach(checkStateComponent);
    this.dispatch = this.dispatch.bind(this);
    this.dom = place && place.mount || document.createElement("div");
    if (place) {
      if (place.appendChild) place.appendChild(this.dom);else if (typeof place == "function") place(this.dom);else if (place.mount) this.mounted = true;
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    this.nodeViews = buildNodeViews(this);
    this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
    this.domObserver = new DOMObserver(this, (from, to, typeOver, added) => readDOMChange(this, from, to, typeOver, added));
    this.domObserver.start();
    initInput(this);
    this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let prev = this._props;
      this._props = {};
      for (let name in prev) this._props[name] = prev[name];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(props) {
    if (props.handleDOMEvents != this._props.handleDOMEvents) ensureListeners(this);
    let prevProps = this._props;
    this._props = props;
    if (props.plugins) {
      props.plugins.forEach(checkStateComponent);
      this.directPlugins = props.plugins;
    }
    this.updateStateInner(props.state, prevProps);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(props) {
    let updated = {};
    for (let name in this._props) updated[name] = this._props[name];
    updated.state = this.state;
    for (let name in props) updated[name] = props[name];
    this.update(updated);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(state) {
    this.updateStateInner(state, this._props);
  }
  updateStateInner(state, prevProps) {
    var _a;
    let prev = this.state,
      redraw = false,
      updateSel = false;
    // When stored marks are added, stop composition, so that they can
    // be displayed.
    if (state.storedMarks && this.composing) {
      clearComposition(this);
      updateSel = true;
    }
    this.state = state;
    let pluginsChanged = prev.plugins != state.plugins || this._props.plugins != prevProps.plugins;
    if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
      let nodeViews = buildNodeViews(this);
      if (changedNodeViews(nodeViews, this.nodeViews)) {
        this.nodeViews = nodeViews;
        redraw = true;
      }
    }
    if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
      ensureListeners(this);
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    let innerDeco = viewDecorations(this),
      outerDeco = computeDocDeco(this);
    let scroll = prev.plugins != state.plugins && !prev.doc.eq(state.doc) ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
    let updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
    if (updateDoc || !state.selection.eq(prev.selection)) updateSel = true;
    let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
    if (updateSel) {
      this.domObserver.stop();
      // Work around an issue in Chrome, IE, and Edge where changing
      // the DOM around an active selection puts it into a broken
      // state where the thing the user sees differs from the
      // selection reported by the Selection object (#710, #973,
      // #1011, #1013, #1035).
      let forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
      if (updateDoc) {
        // If the node that the selection points into is written to,
        // Chrome sometimes starts misreporting the selection, so this
        // tracks that and forces a selection reset when our update
        // did write to the node.
        let chromeKludge = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
        if (this.composing) this.input.compositionNode = findCompositionNode(this);
        if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
          this.docView.updateOuterDeco(outerDeco);
          this.docView.destroy();
          this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
        }
        if (chromeKludge && !this.trackWrites) forceSelUpdate = true;
      }
      // Work around for an issue where an update arriving right between
      // a DOM selection change and the "selectionchange" event for it
      // can cause a spurious DOM selection update, disrupting mouse
      // drag selection.
      if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
        selectionToDOM(this, forceSelUpdate);
      } else {
        syncNodeSelection(this, state.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(prev);
    if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state.doc)) this.updateDraggedNode(this.dragging, prev);
    if (scroll == "reset") {
      this.dom.scrollTop = 0;
    } else if (scroll == "to selection") {
      this.scrollToSelection();
    } else if (oldScrollPos) {
      resetScrollPos(oldScrollPos);
    }
  }
  /**
  @internal
  */
  scrollToSelection() {
    let startDOM = this.domSelectionRange().focusNode;
    if (this.someProp("handleScrollToSelection", f => f(this))) ;else if (this.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection) {
      let target = this.docView.domAfterPos(this.state.selection.from);
      if (target.nodeType == 1) scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
    } else {
      scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
    }
  }
  destroyPluginViews() {
    let view;
    while (view = this.pluginViews.pop()) if (view.destroy) view.destroy();
  }
  updatePluginViews(prevState) {
    if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let i = 0; i < this.directPlugins.length; i++) {
        let plugin = this.directPlugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
      for (let i = 0; i < this.state.plugins.length; i++) {
        let plugin = this.state.plugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
    } else {
      for (let i = 0; i < this.pluginViews.length; i++) {
        let pluginView = this.pluginViews[i];
        if (pluginView.update) pluginView.update(this, prevState);
      }
    }
  }
  updateDraggedNode(dragging, prev) {
    let sel = dragging.node,
      found = -1;
    if (this.state.doc.nodeAt(sel.from) == sel.node) {
      found = sel.from;
    } else {
      let movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
      let moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
      if (moved == sel.node) found = movedPos;
    }
    this.dragging = new Dragging(dragging.slice, dragging.move, found < 0 ? undefined : prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.NodeSelection.create(this.state.doc, found));
  }
  someProp(propName, f) {
    let prop = this._props && this._props[propName],
      value;
    if (prop != null && (value = f ? f(prop) : prop)) return value;
    for (let i = 0; i < this.directPlugins.length; i++) {
      let prop = this.directPlugins[i].props[propName];
      if (prop != null && (value = f ? f(prop) : prop)) return value;
    }
    let plugins = this.state.plugins;
    if (plugins) for (let i = 0; i < plugins.length; i++) {
      let prop = plugins[i].props[propName];
      if (prop != null && (value = f ? f(prop) : prop)) return value;
    }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    // Work around IE not handling focus correctly if resize handles are shown.
    // If the cursor is inside an element with resize handles, activeElement
    // will be that element instead of this.dom.
    if (ie) {
      // If activeElement is within this.dom, and there are no other elements
      // setting `contenteditable` to false in between, treat it as focused.
      let node = this.root.activeElement;
      if (node == this.dom) return true;
      if (!node || !this.dom.contains(node)) return false;
      while (node && this.dom != node && this.dom.contains(node)) {
        if (node.contentEditable == 'false') return false;
        node = node.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop();
    if (this.editable) focusPreventScroll(this.dom);
    selectionToDOM(this);
    this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let cached = this._root;
    if (cached == null) for (let search = this.dom.parentNode; search; search = search.parentNode) {
      if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
        if (!search.getSelection) Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
        return this._root = search;
      }
    }
    return cached || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(coords) {
    return posAtCoords(this, coords);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(pos, side = 1) {
    return coordsAtPos(this, pos, side);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(pos, side = 0) {
    return this.docView.domFromPos(pos, side);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(pos) {
    let desc = this.docView.descAt(pos);
    return desc ? desc.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(node, offset, bias = -1) {
    let pos = this.docView.posFromDOM(node, offset, bias);
    if (pos == null) throw new RangeError("DOM position not inside the editor");
    return pos;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(dir, state) {
    return endOfTextblock(this, state || this.state, dir);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(html, event) {
    return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(text, event) {
    return doPaste(this, text, null, true, event || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    if (!this.docView) return;
    destroyInput(this);
    this.destroyPluginViews();
    if (this.mounted) {
      this.docView.update(this.state.doc, [], viewDecorations(this), this);
      this.dom.textContent = "";
    } else if (this.dom.parentNode) {
      this.dom.parentNode.removeChild(this.dom);
    }
    this.docView.destroy();
    this.docView = null;
    clearReusedRange();
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(event) {
    return dispatchEvent(this, event);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(tr) {
    let dispatchTransaction = this._props.dispatchTransaction;
    if (dispatchTransaction) dispatchTransaction.call(this, tr);else this.updateState(this.state.apply(tr));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let sel = this.domSelection();
    return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function computeDocDeco(view) {
  let attrs = Object.create(null);
  attrs.class = "ProseMirror";
  attrs.contenteditable = String(view.editable);
  view.someProp("attributes", value => {
    if (typeof value == "function") value = value(view.state);
    if (value) for (let attr in value) {
      if (attr == "class") attrs.class += " " + value[attr];else if (attr == "style") attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName") attrs[attr] = String(value[attr]);
    }
  });
  if (!attrs.translate) attrs.translate = "no";
  return [Decoration.node(0, view.state.doc.content.size, attrs)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    let dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    dom.setAttribute("alt", "");
    view.cursorWrapper = {
      dom,
      deco: Decoration.widget(view.state.selection.head, dom, {
        raw: true,
        marks: view.markCursor
      })
    };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", value => value(view.state) === false);
}
function selectionContextChanged(sel1, sel2) {
  let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  let result = Object.create(null);
  function add(obj) {
    for (let prop in obj) if (!Object.prototype.hasOwnProperty.call(result, prop)) result[prop] = obj[prop];
  }
  view.someProp("nodeViews", add);
  view.someProp("markViews", add);
  return result;
}
function changedNodeViews(a, b) {
  let nA = 0,
    nB = 0;
  for (let prop in a) {
    if (a[prop] != b[prop]) return true;
    nA++;
  }
  for (let _ in b) nB++;
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
}


/***/ }),

/***/ 1173:
/*!**************************************************!*\
  !*** ./node_modules/rope-sequence/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GOOD_LEAF_SIZE = 200;

// :: class<T> A rope sequence is a persistent sequence data structure
// that supports appending, prepending, and slicing without doing a
// full copy. It is represented as a mostly-balanced tree.
var RopeSequence = function RopeSequence() {};
RopeSequence.prototype.append = function append(other) {
  if (!other.length) {
    return this;
  }
  other = RopeSequence.from(other);
  return !this.length && other || other.length < GOOD_LEAF_SIZE && this.leafAppend(other) || this.length < GOOD_LEAF_SIZE && other.leafPrepend(this) || this.appendInner(other);
};

// :: (union<[T], RopeSequence<T>>) → RopeSequence<T>
// Prepend an array or other rope to this one, returning a new rope.
RopeSequence.prototype.prepend = function prepend(other) {
  if (!other.length) {
    return this;
  }
  return RopeSequence.from(other).append(this);
};
RopeSequence.prototype.appendInner = function appendInner(other) {
  return new Append(this, other);
};

// :: (?number, ?number) → RopeSequence<T>
// Create a rope repesenting a sub-sequence of this rope.
RopeSequence.prototype.slice = function slice(from, to) {
  if (from === void 0) from = 0;
  if (to === void 0) to = this.length;
  if (from >= to) {
    return RopeSequence.empty;
  }
  return this.sliceInner(Math.max(0, from), Math.min(this.length, to));
};

// :: (number) → T
// Retrieve the element at the given position from this rope.
RopeSequence.prototype.get = function get(i) {
  if (i < 0 || i >= this.length) {
    return undefined;
  }
  return this.getInner(i);
};

// :: ((element: T, index: number) → ?bool, ?number, ?number)
// Call the given function for each element between the given
// indices. This tends to be more efficient than looping over the
// indices and calling `get`, because it doesn't have to descend the
// tree for every element.
RopeSequence.prototype.forEach = function forEach(f, from, to) {
  if (from === void 0) from = 0;
  if (to === void 0) to = this.length;
  if (from <= to) {
    this.forEachInner(f, from, to, 0);
  } else {
    this.forEachInvertedInner(f, from, to, 0);
  }
};

// :: ((element: T, index: number) → U, ?number, ?number) → [U]
// Map the given functions over the elements of the rope, producing
// a flat array.
RopeSequence.prototype.map = function map(f, from, to) {
  if (from === void 0) from = 0;
  if (to === void 0) to = this.length;
  var result = [];
  this.forEach(function (elt, i) {
    return result.push(f(elt, i));
  }, from, to);
  return result;
};

// :: (?union<[T], RopeSequence<T>>) → RopeSequence<T>
// Create a rope representing the given array, or return the rope
// itself if a rope was given.
RopeSequence.from = function from(values) {
  if (values instanceof RopeSequence) {
    return values;
  }
  return values && values.length ? new Leaf(values) : RopeSequence.empty;
};
var Leaf = /*@__PURE__*/function (RopeSequence) {
  function Leaf(values) {
    RopeSequence.call(this);
    this.values = values;
  }
  if (RopeSequence) Leaf.__proto__ = RopeSequence;
  Leaf.prototype = Object.create(RopeSequence && RopeSequence.prototype);
  Leaf.prototype.constructor = Leaf;
  var prototypeAccessors = {
    length: {
      configurable: true
    },
    depth: {
      configurable: true
    }
  };
  Leaf.prototype.flatten = function flatten() {
    return this.values;
  };
  Leaf.prototype.sliceInner = function sliceInner(from, to) {
    if (from == 0 && to == this.length) {
      return this;
    }
    return new Leaf(this.values.slice(from, to));
  };
  Leaf.prototype.getInner = function getInner(i) {
    return this.values[i];
  };
  Leaf.prototype.forEachInner = function forEachInner(f, from, to, start) {
    for (var i = from; i < to; i++) {
      if (f(this.values[i], start + i) === false) {
        return false;
      }
    }
  };
  Leaf.prototype.forEachInvertedInner = function forEachInvertedInner(f, from, to, start) {
    for (var i = from - 1; i >= to; i--) {
      if (f(this.values[i], start + i) === false) {
        return false;
      }
    }
  };
  Leaf.prototype.leafAppend = function leafAppend(other) {
    if (this.length + other.length <= GOOD_LEAF_SIZE) {
      return new Leaf(this.values.concat(other.flatten()));
    }
  };
  Leaf.prototype.leafPrepend = function leafPrepend(other) {
    if (this.length + other.length <= GOOD_LEAF_SIZE) {
      return new Leaf(other.flatten().concat(this.values));
    }
  };
  prototypeAccessors.length.get = function () {
    return this.values.length;
  };
  prototypeAccessors.depth.get = function () {
    return 0;
  };
  Object.defineProperties(Leaf.prototype, prototypeAccessors);
  return Leaf;
}(RopeSequence);

// :: RopeSequence
// The empty rope sequence.
RopeSequence.empty = new Leaf([]);
var Append = /*@__PURE__*/function (RopeSequence) {
  function Append(left, right) {
    RopeSequence.call(this);
    this.left = left;
    this.right = right;
    this.length = left.length + right.length;
    this.depth = Math.max(left.depth, right.depth) + 1;
  }
  if (RopeSequence) Append.__proto__ = RopeSequence;
  Append.prototype = Object.create(RopeSequence && RopeSequence.prototype);
  Append.prototype.constructor = Append;
  Append.prototype.flatten = function flatten() {
    return this.left.flatten().concat(this.right.flatten());
  };
  Append.prototype.getInner = function getInner(i) {
    return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
  };
  Append.prototype.forEachInner = function forEachInner(f, from, to, start) {
    var leftLen = this.left.length;
    if (from < leftLen && this.left.forEachInner(f, from, Math.min(to, leftLen), start) === false) {
      return false;
    }
    if (to > leftLen && this.right.forEachInner(f, Math.max(from - leftLen, 0), Math.min(this.length, to) - leftLen, start + leftLen) === false) {
      return false;
    }
  };
  Append.prototype.forEachInvertedInner = function forEachInvertedInner(f, from, to, start) {
    var leftLen = this.left.length;
    if (from > leftLen && this.right.forEachInvertedInner(f, from - leftLen, Math.max(to, leftLen) - leftLen, start + leftLen) === false) {
      return false;
    }
    if (to < leftLen && this.left.forEachInvertedInner(f, Math.min(from, leftLen), to, start) === false) {
      return false;
    }
  };
  Append.prototype.sliceInner = function sliceInner(from, to) {
    if (from == 0 && to == this.length) {
      return this;
    }
    var leftLen = this.left.length;
    if (to <= leftLen) {
      return this.left.slice(from, to);
    }
    if (from >= leftLen) {
      return this.right.slice(from - leftLen, to - leftLen);
    }
    return this.left.slice(from, leftLen).append(this.right.slice(0, to - leftLen));
  };
  Append.prototype.leafAppend = function leafAppend(other) {
    var inner = this.right.leafAppend(other);
    if (inner) {
      return new Append(this.left, inner);
    }
  };
  Append.prototype.leafPrepend = function leafPrepend(other) {
    var inner = this.left.leafPrepend(other);
    if (inner) {
      return new Append(inner, this.right);
    }
  };
  Append.prototype.appendInner = function appendInner(other) {
    if (this.left.depth >= Math.max(this.right.depth, other.depth) + 1) {
      return new Append(this.left, new Append(this.right, other));
    }
    return new Append(this, other);
  };
  return Append;
}(RopeSequence);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RopeSequence);

/***/ }),

/***/ 1500:
/*!*******************************************!*\
  !*** ./node_modules/w3c-keyname/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   keyName: () => (/* binding */ keyName),
/* harmony export */   shift: () => (/* binding */ shift)
/* harmony export */ });
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: "\""
};
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);

// Fill in the digit keys
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);

// The function keys
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i;

// And the alphabetic keys
for (var i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}

// For each code that doesn't have a shift-equivalent, copy the base name
for (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];
function keyName(event) {
  // On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.
  // On IE, shift effect is never included in `.key`.
  var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";
  var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
  // Edge sometimes produces wrong names (Issue #3)
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name;
}

/***/ })

}]);
//# sourceMappingURL=587.js.map