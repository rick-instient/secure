"use strict";
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 49278:
/*!******************************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/oil-provider-selector/oil-provider-selector.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OilProviderSelectorComponent: () => (/* binding */ OilProviderSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 32403);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/urls */ 14753);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/cookie.helper */ 26546);
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/enums */ 85866);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/shared.service */ 53936);
/* harmony import */ var _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/app.static */ 52386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 21099);






















const OilProviderSelectorComponent_Conditional_20_Defer_1_DepsFn = () => [__webpack_require__.e(/*! import() */ 700).then(__webpack_require__.bind(__webpack_require__, /*! ../../shared/components/address/address.component */ 80700)).then(m => m.AddressComponent)];
function OilProviderSelectorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusIn", function OilProviderSelectorComponent_Conditional_4_Template_hf_input_focusIn_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.zipFocus());
    })("focusOut", function OilProviderSelectorComponent_Conditional_4_Template_hf_input_focusOut_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.zipBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Delivery ZIP")("inputType", "number")("inputValue", ctx_r1.zip)("inputPlaceholder", "Enter ZIP")("inputDescription", ctx_r1.zipIM)("descriptionType", ctx_r1.zipMT);
  }
}
function OilProviderSelectorComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.selectedAddress.billingStreet1, " ", ctx_r1.selectedAddress.deliveryZIP, " ");
  }
}
function OilProviderSelectorComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.zip.value);
  }
}
function OilProviderSelectorComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_5_Template_hf_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openAddressModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OilProviderSelectorComponent_Conditional_5_Conditional_1_Template, 2, 2, "p", 19)(2, OilProviderSelectorComponent_Conditional_5_Conditional_2_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Deliver To")("inputType", "custom")("inputDescription", ctx_r1.zipIM)("descriptionType", ctx_r1.zipMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, ctx_r1.selectedAddress["billingStreet1"] ? 1 : 2);
  }
}
function OilProviderSelectorComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Certified");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.townName, " Deals ");
  }
}
function OilProviderSelectorComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Sorry, ", ctx_r1.companyName, " hasn't added this ZIP code to the service area yet! Subscribe below and we'll send you an e-mail when we come to your neighborhood!");
  }
}
function OilProviderSelectorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OilProviderSelectorComponent_Conditional_11_Conditional_1_Template, 4, 1, "div", 21)(2, OilProviderSelectorComponent_Conditional_11_Conditional_2_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "hf-card", 22)(4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 24)(7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "hf-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 27)(10, "hf-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_11_Template_hf_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.validateSubscribeDealsAlertFrom());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, !ctx_r1.appService.isApp ? 1 : 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Sign up for ", ctx_r1.townName, " deal alerts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Email")("inputPlaceholder", "Enter Email Address")("inputType", "email")("inputValue", ctx_r1.email)("inputDescription", ctx_r1.emailIM)("descriptionType", ctx_r1.emailMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "large")("labelText", ctx_r1.subscribeButtonText)("isDisabled", ctx_r1.subscribeButtonDisabled);
  }
}
function OilProviderSelectorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 31)(1, "div", 32)(2, "div", 32)(3, "div", 32);
  }
}
function OilProviderSelectorComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Certified");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.townName, " Deals ");
  }
}
function OilProviderSelectorComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-card", 22)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "source", 41)(13, "source", 42)(14, "source", 43)(15, "source", 44)(16, "source", 45)(17, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 47)(19, "hf-card", 22)(20, "div", 48)(21, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Credit or Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 50)(24, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "hf-price", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "hf-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_14_Conditional_3_Template_hf_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addItemToCart(ctx_r1.flashSaleProvider, ctx_r1.paymentMode.CREDIT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "hf-card", 22)(31, "div", 48)(32, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Pay In 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 50)(37, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "hf-price", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "hf-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_14_Conditional_3_Template_hf_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addItemToCart(ctx_r1.flashSaleProvider, ctx_r1.paymentMode.PAYPAL));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.flashSaleProvider.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.flashSaleProvider.city, ", ", ctx_r1.flashSaleProvider.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Deliver by ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 33, ctx_r1.flashSaleProvider.firstDay, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", ctx_r1.flashSaleProvider.truckUrl, "?tr=w-", 225 * ctx_r1.devicePixelRatio, " 225w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", ctx_r1.flashSaleProvider.truckUrl, "?tr=w-", 350 * ctx_r1.devicePixelRatio, " 350w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", ctx_r1.flashSaleProvider.truckUrl, "?tr=w-", 500 * ctx_r1.devicePixelRatio, " 500w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", ctx_r1.flashSaleProvider.truckUrl, "?tr=w-", 700 * ctx_r1.devicePixelRatio, " 700w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", ctx_r1.flashSaleProvider.truckUrl, "?tr=w-", 900 * ctx_r1.devicePixelRatio, " 900w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", ctx_r1.flashSaleProvider.truckUrl, "?tr=w-", 1200 * ctx_r1.devicePixelRatio, " 1200w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("alt", ctx_r1.flashSaleProvider.truckAltTag)("title", ctx_r1.flashSaleProvider.truckTitleTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", ctx_r1.flashSaleProvider.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](28, 36, ctx_r1.flashSaleProvider.calculatedPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", ctx_r1.flashSaleProvider.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("4 x $", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](41, 39, ctx_r1.flashSaleProvider.calculatedPrice / 4, "1.2-2"), "");
  }
}
function OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-card", 22)(1, "div", 48)(2, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Cash or Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 50)(5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "hf-price", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "hf-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Conditional_30_Template_hf_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const provider_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addItemToCart(provider_r7, ctx_r1.paymentMode.CASH));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const provider_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", (provider_r7.price - provider_r7.cashDiscount).toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 4, provider_r7.calculatedPrice - provider_r7.cashDiscount * ctx_r1.getQuantityWithOutGal(), "1.2-2"), "");
  }
}
function OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-card", 22)(1, "div", 36)(2, "div", 37)(3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "source", 41)(12, "source", 42)(13, "source", 43)(14, "source", 44)(15, "source", 45)(16, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 47)(18, "div", 59)(19, "hf-card", 22)(20, "div", 48)(21, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Credit or Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 50)(24, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "hf-price", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "hf-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Template_hf_button_click_29_listener() {
      const provider_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addItemToCart(provider_r7, ctx_r1.paymentMode.CREDIT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Conditional_30_Template, 11, 7, "hf-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "hf-card", 22)(32, "div", 48)(33, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Pay In 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 50)(38, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "hf-price", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "hf-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Template_hf_button_click_43_listener() {
      const provider_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addItemToCart(provider_r7, ctx_r1.paymentMode.PAYPAL));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const provider_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](provider_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", provider_r7.city, ", ", provider_r7.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Deliver by ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 34, provider_r7.firstDay, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r7.truckUrl, "?tr=w-", 225 * ctx_r1.devicePixelRatio, " 225w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r7.truckUrl, "?tr=w-", 350 * ctx_r1.devicePixelRatio, " 350w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r7.truckUrl, "?tr=w-", 500 * ctx_r1.devicePixelRatio, " 500w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r7.truckUrl, "?tr=w-", 700 * ctx_r1.devicePixelRatio, " 700w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r7.truckUrl, "?tr=w-", 900 * ctx_r1.devicePixelRatio, " 900w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r7.truckUrl, "?tr=w-", 1200 * ctx_r1.devicePixelRatio, " 1200w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("alt", provider_r7.truckAltTag)("title", provider_r7.truckTitleTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", provider_r7.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](28, 37, provider_r7.calculatedPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](30, provider_r7.isPayWithCash ? 30 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", provider_r7.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("4 x $", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](42, 40, provider_r7.calculatedPrice / 4, "1.2-2"), "");
  }
}
function OilProviderSelectorComponent_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](0, OilProviderSelectorComponent_Conditional_14_Conditional_4_For_1_Template, 44, 43, "hf-card", 22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.activeOilProviders);
  }
}
function OilProviderSelectorComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OilProviderSelectorComponent_Conditional_14_Conditional_1_Template, 4, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, OilProviderSelectorComponent_Conditional_14_Conditional_3_Template, 43, 42, "hf-card", 22)(4, OilProviderSelectorComponent_Conditional_14_Conditional_4_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, !ctx_r1.isCompanyApp ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](3, ctx_r1.flashSaleProvider ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, ctx_r1.activeOilProviders.length !== 0 ? 4 : -1);
  }
}
function OilProviderSelectorComponent_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-card", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_15_For_6_Template_hf_card_click_0_listener() {
      const provider_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openCallModal(provider_r10, provider_r10.name, provider_r10.contactPhone));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 65)(2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "source", 41)(4, "source", 42)(5, "source", 43)(6, "source", 44)(7, "source", 45)(8, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 67)(10, "div", 37)(11, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 69)(16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "hf-price", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const provider_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r10.profileTruckUrl, "?tr=w-", 225 * ctx_r1.devicePixelRatio, " 225w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r10.profileTruckUrl, "?tr=w-", 350 * ctx_r1.devicePixelRatio, " 350w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r10.profileTruckUrl, "?tr=w-", 500 * ctx_r1.devicePixelRatio, " 500w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r10.profileTruckUrl, "?tr=w-", 700 * ctx_r1.devicePixelRatio, " 700w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r10.profileTruckUrl, "?tr=w-", 900 * ctx_r1.devicePixelRatio, " 900w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("srcset", "", provider_r10.profileTruckUrl, "?tr=w-", 1200 * ctx_r1.devicePixelRatio, " 1200w");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("alt", provider_r10.profileAltTag)("title", provider_r10.profileTitleTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](provider_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", provider_r10.city, ", ", provider_r10.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", provider_r10.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](20, 27, provider_r10.calculatedPrice, "1.2-2"), "");
  }
}
function OilProviderSelectorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 61)(2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](5, OilProviderSelectorComponent_Conditional_15_For_6_Template, 23, 30, "hf-card", 63, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("More ", ctx_r1.townName, " Oil Prices");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.licensedOilProviders);
  }
}
function OilProviderSelectorComponent_Conditional_16_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 77);
  }
  if (rf & 2) {
    const provider_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", provider_r12.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", provider_r12.logoAltTag);
  }
}
function OilProviderSelectorComponent_Conditional_16_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const provider_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](2, 1, provider_r12.name, 0, 1), " ");
  }
}
function OilProviderSelectorComponent_Conditional_16_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-card", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_16_For_8_Template_hf_card_click_0_listener() {
      const provider_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openCallModal(provider_r12, provider_r12.name, provider_r12.contactPhone));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 74)(2, "div", 75)(3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OilProviderSelectorComponent_Conditional_16_For_8_Conditional_4_Template, 1, 2, "img", 77)(5, OilProviderSelectorComponent_Conditional_16_For_8_Conditional_5_Template, 3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 78)(7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const provider_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, provider_r12.logoUrl ? 4 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](provider_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", provider_r12.city, ", ", provider_r12.state, "");
  }
}
function OilProviderSelectorComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 61)(2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Do not offer service/maintenance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](7, OilProviderSelectorComponent_Conditional_16_For_8_Template, 13, 5, "hf-card", 63, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("More Discount Oil Companies Serving ", ctx_r1.townName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.nonLicensedDiscountOilProviders);
  }
}
function OilProviderSelectorComponent_Conditional_17_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 77);
  }
  if (rf & 2) {
    const provider_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", provider_r14.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", provider_r14.logoAltTag);
  }
}
function OilProviderSelectorComponent_Conditional_17_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const provider_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](2, 1, provider_r14.name, 0, 1), " ");
  }
}
function OilProviderSelectorComponent_Conditional_17_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-card", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OilProviderSelectorComponent_Conditional_17_For_8_Template_hf_card_click_0_listener() {
      const provider_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openCallModal(provider_r14, provider_r14.name, provider_r14.contactPhone));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 74)(2, "div", 75)(3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OilProviderSelectorComponent_Conditional_17_For_8_Conditional_4_Template, 1, 2, "img", 77)(5, OilProviderSelectorComponent_Conditional_17_For_8_Conditional_5_Template, 3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 78)(7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const provider_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, provider_r14.logoUrl ? 4 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](provider_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", provider_r14.city, ", ", provider_r14.state, "");
  }
}
function OilProviderSelectorComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 61)(2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Offer heating oil & service/maintenance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](7, OilProviderSelectorComponent_Conditional_17_For_8_Template, 13, 5, "hf-card", 63, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("More Full Service Oil Companies Serving ", ctx_r1.townName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.nonLicensedFullServiceProviders);
  }
}
function OilProviderSelectorComponent_Conditional_20_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-address", 80);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showSelectButton", true)("showAllSelectButton", true);
  }
}
function OilProviderSelectorComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, OilProviderSelectorComponent_Conditional_20_Defer_0_Template, 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefer"](1, 0, OilProviderSelectorComponent_Conditional_20_Defer_1_DepsFn);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdeferWhen"](ctx_r1.appService.isBrowserRendering);
  }
}
class OilProviderSelectorComponent {
  get zip() {
    return this.zipQuantitySearchForm.get('zip');
  }
  get quantity() {
    return this.zipQuantitySearchForm.get('quantity');
  }
  get email() {
    return this.subscribeDealsForm.get('email');
  }
  constructor(route, router, http, toastService, appService, storeService, authService, cookieHelper, sharedService) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.toastService = toastService;
    this.appService = appService;
    this.storeService = storeService;
    this.authService = authService;
    this.cookieHelper = cookieHelper;
    this.sharedService = sharedService;
    this.oilProviders = [];
    this.activeOilProviders = [];
    this.licensedOilProviders = [];
    this.nonLicensedDiscountOilProviders = [];
    this.nonLicensedFullServiceProviders = [];
    this.showBulkOrderModal = false;
    this.subscribeButtonText = 'SUBSCRIBE';
    this.subscribeButtonDisabled = false;
    this.searchButtonText = 'SEARCH';
    this.searchButtonDisabled = false;
    this.showAddressModal = false;
    this.selectedAddress = {};
    this.showCallModal = false;
    this.callCompanyName = '';
    this.callCompanyNumber = '';
    this.paymentMode = _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PaymentMode;
    this.companyId = _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_7__.appSettings.companyId;
    this.companyName = _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_7__.appSettings.companyName;
    this.isCompanyApp = _shared_utils_app_static__WEBPACK_IMPORTED_MODULE_7__.isCompanyApp;
    this.noCompniesFound = false;
    this.zipQuantitySearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.maxLengthRestriction)(5)]),
      quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.quantityInputValidator)(), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.minMaxQuantityValidator)(0, 2000)])
    });
    this.zipIM = 'Invalid Zip Code';
    this.zipMT = '';
    this.quantityIM = 'Invalid Quantity';
    this.quantityMT = '';
    this.subscribeDealsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.sharedService.emailKey)])
    });
    this.emailIM = 'Invalid Email Address';
    this.emailMT = '';
  }
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.pageParams = params;
      this.zip.setValue(this.pageParams['zipCode']);
      this.quantity.setValue(`${this.pageParams['quantity']} gal`);
      let orderParams = {
        ...this.pageParams
      };
      this.storeService.addValueToStore('orderParams', orderParams);
    });
    this.devicePixelRatio = this.appService.devicePixelRatio;
    if (this.authService.isUserLoggedIn) {
      this.getUserAddress();
    } else {
      this.validateZipQuantitySearchForm();
    }
  }
  getUserAddress() {
    this.getAddressSubscription = this.sharedService.selectedAddress$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(address => {
      this.selectedAddress = address;
      if (address['deliveryZIP']) {
        this.zip.setValue(address['deliveryZIP']);
      }
      this.showAddressModal = false;
      this.validateZipQuantitySearchForm();
    });
  }
  validateZipQuantitySearchForm() {
    if (this.zipQuantitySearchForm.invalid) {
      if (this.zip.invalid) {
        this.zip.markAsTouched({
          onlySelf: true
        });
        this.zipMT = 'error';
        if (this.zip.errors?.['required']) {
          this.zipIM = 'Zip is required';
        } else if (this.zip.errors?.['minlength']) {
          this.zipIM = 'Zip must be 5-digit code.';
        }
        let vaildZip = this.zip.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.zipMT = '';
            this.zipIM = '';
            vaildZip.unsubscribe();
          }
        });
      }
      if (this.quantity.invalid) {
        this.quantity.markAsTouched({
          onlySelf: true
        });
        this.quantityMT = 'error';
        if (this.quantity.errors?.['required']) {
          this.quantityIM = 'Quantity is required';
        } else if (this.quantity.errors?.['minMax']) {
          this.quantityIM = `Maximum quantity is: ${this.quantity.errors['minMax']['max']} Gallons`;
          this.showBulkOrderModal = true;
        }
        let vaildQuantity = this.quantity.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.quantityMT = '';
            this.quantityIM = '';
            vaildQuantity.unsubscribe();
          }
        });
      }
      return;
    }
    this.callZipCodeCheckApi();
  }
  callZipCodeCheckApi() {
    this.searchButtonText = 'SEARCH';
    this.searchButtonDisabled = true;
    const zipCodeCheckApiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}customer/offer/zipcodecheck?zipCode=${this.zip.value}&ipAddress=undefined&isAgent=false`;
    this.zipCodeCheckApiSubscription = this.http.get(zipCodeCheckApiUrl).subscribe({
      next: response => {
        if (response['zipCodeExists']) {
          this.cookieHelper.setZipCode(this.zip.value);
          this.cookieHelper.setGallons(this.quantity.value);
          this.zipCodeCheckApiData = response;
          this.townName = this.zipCodeCheckApiData['city'];
          this.minimumQuantity = this.zipCodeCheckApiData['minimumQuantity'];
          if (this.getQuantityWithOutGal() < this.minimumQuantity) {
            this.quantityMT = 'error';
            this.quantityIM = `The minimum quantity for ${this.townName} is ${this.minimumQuantity} gallons. Please enter a quantity of at least that size.`;
            let validQuantity = this.quantity.valueChanges.subscribe(value => {
              if (value >= this.minimumQuantity) {
                this.quantityMT = '';
                this.quantityIM = '';
                validQuantity.unsubscribe();
              }
            });
            this.searchButtonText = 'SEARCH';
            this.searchButtonDisabled = false;
            return;
          }
          this.validationThenSubmit();
        } else {
          this.searchButtonText = 'SEARCH';
          this.searchButtonDisabled = false;
          this.toastService.toastMessage.next({
            title: `Invalid ZIP Code`,
            msg: 'Please enter a valid ZIP code.',
            type: 'error'
          });
        }
      },
      error: err => {
        this.searchButtonText = 'SEARCH';
        this.searchButtonDisabled = false;
        console.log(err);
      }
    });
  }
  validationThenSubmit() {
    if (this.getQuantityWithOutGal() > 0 && this.getQuantityWithOutGal() <= 2000) {
      this.updateRouteParams(this.zip.value, this.getQuantityWithOutGal());
    } else {
      if (this.getQuantityWithOutGal() > 2000) {
        this.showBulkOrderModal = true;
      }
      this.updateRouteParams(this.zip.value, '100');
    }
    this.callGetProviderOilApi();
  }
  callGetProviderOilApi() {
    let getProviderOilApiUrl;
    if (!this.isCompanyApp) {
      getProviderOilApiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}customer/offer/get-providers-oil`;
    } else {
      getProviderOilApiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}customer/offer/get-provider-by-id?companyId=${this.companyId}&zip=${this.zip.value}&amount=${this.getQuantityWithOutGal()}`;
    }
    const body = {
      "zip": this.zip.value,
      "amount": this.getQuantityWithOutGal(),
      "orderType": Number(this.pageParams['orderType']),
      "ipAddress": null,
      "isAgent": false
    };
    this.getProviderOilApiSubscription = this.http.post(getProviderOilApiUrl, body).subscribe({
      next: res => {
        if (res) {
          if (!this.isCompanyApp) {
            this.getProviderOilApiData = res;
            this.oilProviders = this.getProviderOilApiData['providers'];
            this.flashSaleProvider = this.getProviderOilApiData['flashSaleProvider'];
            if (this.flashSaleProvider) {
              this.flashSaleInit();
            }
            this.activeOilProviders = this.oilProviders.filter(provider => provider.status === _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PriceStatus.Active);
            this.licensedOilProviders = this.oilProviders.filter(provider => provider.status === _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PriceStatus.Licensed);
            this.nonLicensedDiscountOilProviders = this.oilProviders.filter(provider => provider.status != _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PriceStatus.Active && provider.status != _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PriceStatus.Licensed && !provider.isFullService);
            this.nonLicensedFullServiceProviders = this.oilProviders.filter(provider => provider.status != _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PriceStatus.Active && provider.status != _shared_models_enums__WEBPACK_IMPORTED_MODULE_5__.PriceStatus.Licensed && provider.isFullService);
          } else {
            let tempData = [res];
            this.activeOilProviders = tempData;
          }
          this.noCompniesFound = false;
        } else {
          this.activeOilProviders = [];
          this.noCompniesFound = true;
        }
      },
      error: err => {
        console.log(err);
        this.noCompniesFound = true;
      },
      complete: () => {
        this.searchButtonText = 'SEARCH';
        this.searchButtonDisabled = false;
      }
    });
  }
  flashSaleInit() {
    this.flashSaleProvider['name'] = "Flash Deal";
    this.flashSaleProvider['truckUrl'] = "https://media-cdn.heatfleet.com/default-truck-image-01.jpg";
    this.flashSaleProvider['truckTitleTag'] = 'Flash Deal best price Cash Heating Oil truck';
    this.flashSaleProvider['truckAltTag'] = 'Photo of Flash Deal truck adjacent to best heating oil price';
  }
  updateRouteParams(zipCode, quantity, tankSize = this.pageParams['tankSize'], customerType = this.pageParams['customerType'], orderType = this.pageParams['orderType']) {
    const currentParams = {
      ...this.route.snapshot.params
    };
    currentParams['zipCode'] = zipCode;
    currentParams['quantity'] = quantity;
    currentParams['tankSize'] = tankSize;
    currentParams['customerType'] = customerType;
    currentParams['orderType'] = orderType;
    const newUrl = `/${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.OIL_PROVIDER_SELECTOR}/${Object.values(currentParams).join('/')}`;
    this.router.navigate([newUrl], {
      relativeTo: this.route
    });
  }
  addItemToCart(companyData, mode) {
    let orderParams = {
      ...this.pageParams
    };
    orderParams['name'] = companyData['name'];
    orderParams['companyId'] = companyData['companyId'];
    orderParams['logoUrl'] = companyData['logoUrl'];
    orderParams['logoAltTag'] = companyData['logoAltTag'];
    orderParams['dayId'] = companyData['dayId'];
    orderParams['firstDay'] = companyData['firstDay'].slice(3);
    if (mode === this.paymentMode.CASH) {
      orderParams['price'] = companyData['price'] - companyData['cashDiscount'];
      orderParams['calculatedPrice'] = companyData['calculatedPrice'] - companyData['cashDiscount'] * orderParams['quantity'];
    } else {
      orderParams['price'] = companyData['price'];
      orderParams['calculatedPrice'] = companyData['calculatedPrice'];
    }
    orderParams['isFlatFee'] = companyData['isFlatFee'];
    orderParams['flatFee'] = companyData['flatFee'];
    orderParams['heatFleetFlashSaleId'] = companyData['heatFleetFlashSaleId'];
    orderParams['isFlashSale'] = companyData['flashDiscount'];
    orderParams['fuel-additive'] = false;
    orderParams['city'] = this.zipCodeCheckApiData['city'];
    orderParams['state'] = this.zipCodeCheckApiData['state'];
    orderParams['county'] = this.zipCodeCheckApiData['county'];
    orderParams['fips'] = this.zipCodeCheckApiData['fips'];
    orderParams['mode'] = mode;
    this.storeService.addValueToStore('orderParams', orderParams);
    if (companyData['enablePremiumFuelAdditive']) {
      this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.FUEL_ADDITIVE]);
    } else {
      if (this.authService.isUserLoggedIn) {
        this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.CONFIRM_ADDRESS]);
      } else {
        this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ORDER_LOGIN]);
      }
    }
  }
  getQuantityWithOutGal() {
    return this.quantity.value.replaceAll(' gal', '');
  }
  zipFocus() {
    this.previousZip = this.zip['value'];
    this.zip.setValue(null);
  }
  zipBlur() {
    if (!this.zip['value']) {
      this.zip.setValue(this.previousZip);
    }
  }
  quantityFocus() {
    if (this.quantity['value']) {
      this.previousQuantity = this.quantity['value'];
    }
    this.quantity.setValue('');
  }
  quantityBlur() {
    if (this.quantity['value'] === '') {
      this.quantity.setValue(this.previousQuantity);
    } else {
      this.quantity.setValue(this.quantity['value'] + ' gal');
    }
  }
  openAddressModal() {
    this.showAddressModal = true;
  }
  closeAddressModal(isClosed) {
    if (isClosed) {
      this.showAddressModal = false;
    }
  }
  openCallModal(data, companyName, phoneNumber) {
    this.callCompanyName = companyName;
    this.callCompanyNumber = phoneNumber;
    this.showCallModal = true;
    // https://demo.heatfleet.com/heating_oil/e0i-b9t-Shipley_Energy_Company-York-PA.html
    // /heating_oil/e0i-b9t-Shipley_Energy_Company-York-PA.html
    // companyHash - townHash - name - townName - state
    // window.location.href = (`${environment.client_url}heating_oil/${data['townHash']}-${data['companyHash']}-${data['name'].replaceAll(' ', '_')}-${data['townName'].replaceAll(' ', '_')}-${data['state']}.html`);
  }
  validateSubscribeDealsAlertFrom() {
    if (this.subscribeDealsForm.invalid) {
      if (this.email.invalid) {
        this.email.markAsTouched({
          onlySelf: true
        });
        this.emailMT = 'error';
        if (this.email.errors?.['required']) {
          this.emailIM = 'Email is required';
        } else if (this.email.errors?.['pattern']) {
          this.emailIM = 'Invalid Email Address';
        }
        let vaildEmail = this.email.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.emailIM = '';
            this.emailMT = '';
            vaildEmail.unsubscribe();
          }
        });
      }
      return;
    }
    this.subscribeDealsAlert();
  }
  subscribeDealsAlert() {
    this.subscribeButtonText = '...';
    this.subscribeButtonDisabled = true;
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}customer/offer/savecontactdata`;
    let data = {
      name: '',
      ownerType: '',
      contactVia: '',
      phoneNumber: '',
      question: '',
      email: this.email.value
    };
    this.http.post(url, data).subscribe(response => {
      if (response == true) {
        this.subscribeDealsForm.reset();
        this.subscribeButtonText = 'SUBSCRIBE';
        this.subscribeButtonDisabled = false;
        this.toastService.toastMessage.next({
          title: `Thank You for subscribing.`,
          msg: '',
          type: 'success'
        });
      }
    });
  }
  closeCallModal(isClosed) {
    if (isClosed) {
      this.callCompanyName = '';
      this.callCompanyNumber = '';
      this.showCallModal = false;
      this.showBulkOrderModal = false;
    }
  }
  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
    if (this.zipCodeCheckApiSubscription) {
      this.zipCodeCheckApiSubscription.unsubscribe();
    }
    if (this.getProviderOilApiSubscription) {
      this.getProviderOilApiSubscription.unsubscribe();
    }
    if (this.getAddressSubscription) {
      this.getAddressSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function OilProviderSelectorComponent_Factory(t) {
    return new (t || OilProviderSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_4__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: OilProviderSelectorComponent,
    selectors: [["app-oil-provider-selector"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 33,
    vars: 25,
    consts: [[1, "oil-provider-selector-wrapper"], [1, "search-bar"], [3, "ngSubmit", "formGroup"], [1, "form-wrapper-left"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", 1, "modified-zip-input", 3, "inputLabel", "inputType", "inputValue", "inputPlaceholder", "inputDescription", "descriptionType"], [1, "form-wrapper-right"], [1, "input-wrapper"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/quantity.svg", 3, "focusIn", "focusOut", "inputLabel", "inputType", "inputValue", "inputPlaceholder", "inputDescription", "descriptionType"], [1, "btn-wrapper"], ["iconStyle", "iconleft", "iconUrl", "/assets/icons/search.svg", "type", "submit", "buttonSize", "medium", 3, "labelText", "isDisabled"], [1, "subscribe-deals-alert"], [1, "deals-container"], [3, "modelClosed", "showModel", "modelSize"], [1, "address-modal"], [1, "call-modal"], [1, "hf-heading-5", "hf-dark-font"], [1, "hf-body-1"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", 1, "modified-zip-input", 3, "focusIn", "focusOut", "inputLabel", "inputType", "inputValue", "inputPlaceholder", "inputDescription", "descriptionType"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", 3, "click", "inputLabel", "inputType", "inputDescription", "descriptionType"], [1, "hf-heading-7", "hf-dark-grey-text-color", "hf-ellipsis"], [1, "hf-heading-7", "hf-dark-grey-text-color"], [1, "hf-heading-5", "hf-dark-font", "hf-dark-grey-text-color", "deal-heading"], [3, "cardStyle"], [1, "hf-body-1", "hf-dark-grey-text-color", 2, "margin-bottom", "15px"], [1, "deals-from-wrapper"], [1, "deals-input-wrapper"], [3, "inputLabel", "inputPlaceholder", "inputType", "inputValue", "inputDescription", "descriptionType"], [1, "deals-button-wrapper"], ["type", "button", 3, "click", "buttonStyle", "buttonSize", "labelText", "isDisabled"], [1, "hf-main-color", "hf-dark-font"], [1, "hf-body-1", "deal-heading", 2, "margin-bottom", "20px"], [1, "skeleton-box", 2, "width", "60%", "height", "25px", "margin-bottom", "15px"], [1, "skeleton-box", 2, "width", "100%", "height", "200px", "margin-bottom", "15px"], [1, "hf-heading-6", "hf-dark-font", "hf-dark-grey-text-color", "deal-heading"], [1, "deals-cards"], [1, "deal-card"], [1, "company-name-delivery-row"], [1, "company-column"], [1, "block", "hf-heading-4", "hf-dark-font", "hf-dark-grey-text-color"], [1, "block", "hf-body-3", "hf-dark-grey-text-color"], [1, "delivery-date-column", "hf-body-3", "hf-dark-font", "hf-green-text-color"], ["media", "(max-width: 225px)", 3, "srcset"], ["media", "(max-width: 350px)", 3, "srcset"], ["media", "(max-width: 500px)", 3, "srcset"], ["media", "(max-width: 700px)", 3, "srcset"], ["media", "(max-width: 900px)", 3, "srcset"], [1, "big-truck-img", 3, "srcset", "alt", "title"], [1, "payment-methods-contanier", "hf-dark-grey-text-color"], [1, "payment-column"], [1, "payment-title", "hf-body-2", "hf-dark-font"], [1, "select-button-wrapper"], [1, "payment-amount"], ["prefixSize", "12px", "prefixHeight", "16px", "fontSize", "20px", "fontHeight", "24px", "suffixHeight", "14px", "suffixSize", "8px", 3, "amount", "isFontBold"], [1, "block", "hf-body-3"], ["type", "button", "buttonSize", "small", "labelText", "SELECT", 1, "next-button", 3, "click"], [1, "payment-title", "paypal-title", "hf-body-2", "hf-dark-font"], ["src", "/assets/icons/paypal-pay-later.svg", "alt", "paypal-paylater-logo", "loading", "lazy"], [1, "block", "hf-body-3", 2, "text-wrap", "nowrap"], [1, "block"], [1, "payment-row"], [1, "payment-title", "hf-body-2", "hf-dark-font", "paypal-title"], [1, "deal-heading", "hf-dark-grey-text-color"], [1, "hf-heading-7", "hf-dark-font", 2, "line-height", "21.6px", "height", "auto"], [2, "cursor", "pointer", 3, "cardStyle"], [2, "cursor", "pointer", 3, "click", "cardStyle"], [1, "licensed-deal-card", "hf-dark-grey-text-color"], [1, "small-truck-img", 3, "srcset", "alt", "title"], [1, "company-name-price-row"], [1, "block", "hf-heading-6", "hf-dark-font"], [1, "licensed-payment-column"], [1, "block", "hf-body-4"], [1, "company-arrow"], ["src", "/assets/icons/right-arrow.svg", "alt", "right arrow icon", "title", "right arrow to open", "loading", "lazy"], [1, "hf-body-3", 2, "line-height", "20px"], [1, "more-discount-company"], [1, "company-row"], [1, "company-logo-wrapper"], ["loading", "lazy", 1, "company-logo", 3, "src", "alt"], [1, "company-deatils", "hf-dark-grey-text-color"], [1, "default-logo", "hf-dark-font"], [3, "showSelectButton", "showAllSelectButton"]],
    template: function OilProviderSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function OilProviderSelectorComponent_Template_form_ngSubmit_2_listener() {
          return ctx.validateZipQuantitySearchForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OilProviderSelectorComponent_Conditional_4_Template, 1, 6, "hf-input", 4)(5, OilProviderSelectorComponent_Conditional_5_Template, 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "hf-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusIn", function OilProviderSelectorComponent_Template_hf_input_focusIn_8_listener() {
          return ctx.quantityFocus();
        })("focusOut", function OilProviderSelectorComponent_Template_hf_input_focusOut_8_listener() {
          return ctx.quantityBlur();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "hf-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, OilProviderSelectorComponent_Conditional_11_Template, 11, 13, "div", 10)(12, OilProviderSelectorComponent_Conditional_12_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, OilProviderSelectorComponent_Conditional_14_Template, 5, 3, "div")(15, OilProviderSelectorComponent_Conditional_15_Template, 7, 1, "div")(16, OilProviderSelectorComponent_Conditional_16_Template, 9, 1, "div")(17, OilProviderSelectorComponent_Conditional_17_Template, 9, 1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "hf-model", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelClosed", function OilProviderSelectorComponent_Template_hf_model_modelClosed_18_listener($event) {
          return ctx.closeAddressModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, OilProviderSelectorComponent_Conditional_20_Template, 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "hf-model", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelClosed", function OilProviderSelectorComponent_Template_hf_model_modelClosed_21_listener($event) {
          return ctx.closeCallModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 14)(23, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Bulk Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Please call our bulk order desk at (203) 291 \u2013 0777 to arrange a custom discount.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "hf-model", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelClosed", function OilProviderSelectorComponent_Template_hf_model_modelClosed_27_listener($event) {
          return ctx.closeCallModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 14)(29, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.zipQuantitySearchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, !ctx.authService.isUserLoggedIn ? 4 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Quantity")("inputType", "text")("inputValue", ctx.quantity)("inputPlaceholder", "Enter Quantity")("inputDescription", ctx.quantityIM)("descriptionType", ctx.quantityMT);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelText", ctx.searchButtonText)("isDisabled", ctx.searchButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](11, ctx.noCompniesFound ? 11 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](12, ctx.searchButtonDisabled ? 12 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](14, ctx.activeOilProviders.length !== 0 || ctx.flashSaleProvider ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](15, ctx.licensedOilProviders.length !== 0 ? 15 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](16, ctx.nonLicensedDiscountOilProviders.length !== 0 ? 16 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](17, ctx.nonLicensedFullServiceProviders.length !== 0 ? 17 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showModel", ctx.showAddressModal)("modelSize", "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](20, ctx.authService.isUserLoggedIn ? 20 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showModel", ctx.showBulkOrderModal)("modelSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showModel", ctx.showCallModal)("modelSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.callCompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Call to place an order: ", ctx.callCompanyNumber, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfButtonComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfModelComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfPriceComponent],
    styles: [".oil-provider-selector-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 620px;\n  margin: auto;\n  padding: 30px 10px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.form-wrapper-left[_ngcontent-%COMP%] {\n  width: 290px;\n}\n\n.form-wrapper-right[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.btn-wrapper[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.deals-from-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.deals-input-wrapper[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.deals-button-wrapper[_ngcontent-%COMP%] {\n  width: 135px;\n}\n\n.deal-heading[_ngcontent-%COMP%] {\n  margin: 0px 0px 8px 16px;\n}\n\n.deals-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.deal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.deals-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.company-name-delivery-row[_ngcontent-%COMP%], .company-name-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 5px;\n}\n\n.delivery-date-column[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n\n.big-truck-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1125/482;\n}\n\nspan.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.payment-methods-contanier[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.payment-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.payment-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n}\n\n.payment-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.next-button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.paypal-title[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.paypal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n\n.paypal-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 63px;\n}\n\n.payment-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n}\n\n.payment-amount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.select-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n\n.licensed-deal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.small-truck-img[_ngcontent-%COMP%] {\n  height: 94px;\n  width: auto;\n}\n\n.licensed-payment-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n}\n\n.more-discount-company[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.company-arrow[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.company-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.company-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n}\n\n.company-logo-wrapper[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.default-logo[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-color: var(--hf-grey-bg);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n}\n\n.company-logo[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.company-deatils[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.call-modal[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 70px 0px 100px 0px;\n}\n\n.show-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hide-mobile[_ngcontent-%COMP%] {\n  display: block;\n}\n\n  hf-price {\n  color: var(--hf-dark-grey-text);\n}\n\n@media screen and (max-width: 600px) {\n  .search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .form-wrapper-left[_ngcontent-%COMP%], .form-wrapper-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .input-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .payment-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL29pbC1wcm92aWRlci1zZWxlY3Rvci9vaWwtcHJvdmlkZXItc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vYXBwcy9oZWF0ZmxlZXQvc2VjdXJlL3NyYy9hcHAvcGFnZXMvb2lsLXByb3ZpZGVyLXNlbGVjdG9yL29pbC1wcm92aWRlci1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTs7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBRUk7SUFDSSxzQkFBQTtJQUNBLFNBQUE7RUNBTjtFREdFOztJQUVJLFdBQUE7RUNETjtFRElFO0lBQ0ksV0FBQTtFQ0ZOO0VES0U7SUFDSSxzQkFBQTtFQ0hOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIub2lsLXByb3ZpZGVyLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXItbGVmdCB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXItcmlnaHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5kZWFscy1mcm9tLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGVhbHMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5kZWFscy1idXR0b24td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbn1cclxuXHJcbi5kZWFsLWhlYWRpbmcge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweCAxNnB4O1xyXG59XHJcblxyXG4uZGVhbHMtY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5kZWFsLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5kZWFscy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDQwcHg7XHJcbn1cclxuXHJcbi5jb21wYW55LW5hbWUtZGVsaXZlcnktcm93LFxyXG4uY29tcGFueS1uYW1lLXByaWNlLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5kZWxpdmVyeS1kYXRlLWNvbHVtbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5iaWctdHJ1Y2staW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxMTI1LzQ4MjtcclxufVxyXG5cclxuc3Bhbi5ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBheW1lbnQtbWV0aG9kcy1jb250YW5pZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXltZW50LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4ucGF5cGFsLXRpdGxlIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnBheXBhbC10aXRsZSBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLnBheXBhbC10aXRsZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDYzcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWFtb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBheW1lbnQtYW1vdW50IHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3QtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuLmxpY2Vuc2VkLWRlYWwtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnB4O1xyXG59XHJcblxyXG4uc21hbGwtdHJ1Y2staW1nIHtcclxuICAgIGhlaWdodDogOTRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubGljZW5zZWQtcGF5bWVudC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5tb3JlLWRpc2NvdW50LWNvbXBhbnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29tcGFueS1hcnJvdyB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmNvbXBhbnktYXJyb3cgaW1nIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uY29tcGFueS1sb2dvLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGVmYXVsdC1sb2dvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtZ3JleS1iZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1sb2dvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1kZWF0aWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5jYWxsLW1vZGFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNzBweCAwcHggMTAwcHggMHB4O1xyXG59XHJcblxyXG4uc2hvdy1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhpZGUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46Om5nLWRlZXAgaGYtcHJpY2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWRhcmstZ3JleS10ZXh0KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuc2VhcmNoLWJhciBmb3JtIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS13cmFwcGVyLWxlZnQsXHJcbiAgICAuZm9ybS13cmFwcGVyLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBheW1lbnQtcm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59IiwiLm9pbC1wcm92aWRlci1zZWxlY3Rvci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZWFyY2gtYmFyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbn1cblxuLmZvcm0td3JhcHBlci1sZWZ0IHtcbiAgd2lkdGg6IDI5MHB4O1xufVxuXG4uZm9ybS13cmFwcGVyLXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG59XG5cbi5idG4td3JhcHBlciB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmRlYWxzLWZyb20td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVhbHMtaW5wdXQtd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmRlYWxzLWJ1dHRvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEzNXB4O1xufVxuXG4uZGVhbC1oZWFkaW5nIHtcbiAgbWFyZ2luOiAwcHggMHB4IDhweCAxNnB4O1xufVxuXG4uZGVhbHMtY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5kZWFsLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5kZWFscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDQwcHg7XG59XG5cbi5jb21wYW55LW5hbWUtZGVsaXZlcnktcm93LFxuLmNvbXBhbnktbmFtZS1wcmljZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNXB4O1xufVxuXG4uZGVsaXZlcnktZGF0ZS1jb2x1bW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJpZy10cnVjay1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxMTI1LzQ4Mjtcbn1cblxuc3Bhbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGF5bWVudC1tZXRob2RzLWNvbnRhbmllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnBheW1lbnQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGF5bWVudC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wYXltZW50LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5leHQtYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5wYXlwYWwtdGl0bGUge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wYXlwYWwtdGl0bGUgcCB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnBheXBhbC10aXRsZSBpbWcge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA2M3B4O1xufVxuXG4ucGF5bWVudC1hbW91bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYXltZW50LWFtb3VudCBwIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zZWxlY3QtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ubGljZW5zZWQtZGVhbC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5zbWFsbC10cnVjay1pbWcge1xuICBoZWlnaHQ6IDk0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubGljZW5zZWQtcGF5bWVudC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLm1vcmUtZGlzY291bnQtY29tcGFueSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbXBhbnktYXJyb3cge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uY29tcGFueS1hcnJvdyBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uY29tcGFueS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5jb21wYW55LWxvZ28td3JhcHBlciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVmYXVsdC1sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtZ3JleS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jb21wYW55LWRlYXRpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbn1cblxuLmNhbGwtbW9kYWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNzBweCAwcHggMTAwcHggMHB4O1xufVxuXG4uc2hvdy1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZS1tb2JpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIGhmLXByaWNlIHtcbiAgY29sb3I6IHZhcigtLWhmLWRhcmstZ3JleS10ZXh0KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlYXJjaC1iYXIgZm9ybSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbiAgLmZvcm0td3JhcHBlci1sZWZ0LFxuICAuZm9ybS13cmFwcGVyLXJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW5wdXQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBheW1lbnQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 85866:
/*!**************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/models/enums.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerTaxType: () => (/* binding */ CustomerTaxType),
/* harmony export */   OrderStatus: () => (/* binding */ OrderStatus),
/* harmony export */   PaymentMode: () => (/* binding */ PaymentMode),
/* harmony export */   PriceStatus: () => (/* binding */ PriceStatus),
/* harmony export */   ServiceType: () => (/* binding */ ServiceType)
/* harmony export */ });
var OrderStatus;
(function (OrderStatus) {
  OrderStatus[OrderStatus["Unknown"] = 0] = "Unknown";
  OrderStatus[OrderStatus["Temporary"] = 1] = "Temporary";
  OrderStatus[OrderStatus["Pending"] = 2] = "Pending";
  OrderStatus[OrderStatus["Scheduled"] = 3] = "Scheduled";
  OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
  OrderStatus[OrderStatus["Canceled"] = 5] = "Canceled";
  OrderStatus[OrderStatus["DeliveryFailed"] = 6] = "DeliveryFailed";
  OrderStatus[OrderStatus["PaymentFailed"] = 7] = "PaymentFailed";
  OrderStatus[OrderStatus["Giveup"] = 8] = "Giveup";
})(OrderStatus || (OrderStatus = {}));
var PriceStatus;
(function (PriceStatus) {
  PriceStatus[PriceStatus["Active"] = 0] = "Active";
  PriceStatus[PriceStatus["Call"] = 1] = "Call";
  PriceStatus[PriceStatus["Licensed"] = 2] = "Licensed";
  PriceStatus[PriceStatus["Estimated"] = 3] = "Estimated";
})(PriceStatus || (PriceStatus = {}));
var CustomerTaxType;
(function (CustomerTaxType) {
  CustomerTaxType[CustomerTaxType["Residential"] = 1] = "Residential";
  CustomerTaxType[CustomerTaxType["Commercial"] = 2] = "Commercial";
})(CustomerTaxType || (CustomerTaxType = {}));
var ServiceType;
(function (ServiceType) {
  ServiceType[ServiceType["Unknown"] = 0] = "Unknown";
  ServiceType[ServiceType["TuneUp"] = 1] = "TuneUp";
  ServiceType[ServiceType["ServiceCall"] = 2] = "ServiceCall";
  ServiceType[ServiceType["OneYearContract"] = 3] = "OneYearContract";
  ServiceType[ServiceType["OilDelivery"] = 4] = "OilDelivery";
  ServiceType[ServiceType["All"] = 5] = "All";
})(ServiceType || (ServiceType = {}));
var PaymentMode;
(function (PaymentMode) {
  PaymentMode[PaymentMode["CREDIT"] = 0] = "CREDIT";
  PaymentMode[PaymentMode["CASH"] = 1] = "CASH";
  PaymentMode[PaymentMode["PAYPAL"] = 2] = "PAYPAL";
})(PaymentMode || (PaymentMode = {}));

/***/ })

};
;
//# sourceMappingURL=278.js.map