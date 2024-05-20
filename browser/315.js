"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[315],{

/***/ 3315:
/*!**************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/payment/payment.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/order-details-bar/order-details-bar.component */ 1921);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/cookie.helper */ 3915);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/enums */ 5279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/order-invoice/order-invoice.component */ 1245);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/urls */ 308);
/* harmony import */ var _paypal_paypal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @paypal/paypal-js */ 4546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);





















function PaymentComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 19)(2, "img", 20)(3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_Conditional_2_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "hf-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 26)(5, "hf-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "hf-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "hf-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputDescription", ctx_r1.cardNumberIM)("descriptionType", ctx_r1.cardNumberMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputDescription", ctx_r1.cardExpireyIM)("descriptionType", ctx_r1.cardExpireyMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputDescription", ctx_r1.cardCvvIM)("descriptionType", ctx_r1.cardCvvMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputValue", ctx_r1.cardHolderName)("inputDescription", ctx_r1.cardHolderNameIM)("descriptionType", ctx_r1.cardHolderNameMT);
  }
}
function PaymentComponent_Conditional_2_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Initializing payment gateway...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, PaymentComponent_Conditional_2_Conditional_17_Conditional_0_Template, 10, 9, "div", 22)(1, PaymentComponent_Conditional_2_Conditional_17_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, !ctx_r1.cardPaymentInit ? 0 : 1);
  }
}
function PaymentComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "We will transmit your order to the provider, who will call you to confirm delivery time and payment instructions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Split your payment into manageable installments with PayPal Pay Later. Enjoy your purchase now and pay over time!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "hf-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "hf-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "hf-input", 38)(8, "hf-input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputValue", ctx_r1.billingAdress)("descriptionType", ctx_r1.billingAdressMT)("inputDescription", ctx_r1.billingAdressIM);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputValue", ctx_r1.billingCity)("descriptionType", ctx_r1.billingCityMT)("inputDescription", ctx_r1.billingCityIM);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputValue", ctx_r1.billingState)("descriptionType", ctx_r1.billingStateMT)("inputDescription", ctx_r1.billingStateIM);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputValue", ctx_r1.billingZip)("descriptionType", ctx_r1.billingZipMT)("inputDescription", ctx_r1.billingZipIM);
  }
}
function PaymentComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "hf-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PaymentComponent_Conditional_2_Conditional_21_Template_hf_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.validatePayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "medium")("labelText", ctx_r1.paymentButtonLabel)("isDisabled", ctx_r1.isPaymentButtonDisabled);
  }
}
function PaymentComponent_Conditional_2_Conditional_22_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Initializing payment gateway...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_Conditional_2_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, PaymentComponent_Conditional_2_Conditional_22_Conditional_0_Conditional_0_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 41);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, !ctx_r1.isPaypalLoaded ? 0 : -1);
  }
}
function PaymentComponent_Conditional_2_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Payment gateway not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, PaymentComponent_Conditional_2_Conditional_22_Conditional_0_Template, 2, 1, "div", 41)(1, PaymentComponent_Conditional_2_Conditional_22_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, ctx_r1.isPayPalAvailable ? 0 : 1);
  }
}
function PaymentComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "hf-card", 1)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "hf-card", 6)(5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-order-invoice", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "hf-card", 1)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, PaymentComponent_Conditional_2_Conditional_14_Template, 4, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "hf-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, PaymentComponent_Conditional_2_Conditional_17_Template, 2, 1)(18, PaymentComponent_Conditional_2_Conditional_18_Template, 2, 0)(19, PaymentComponent_Conditional_2_Conditional_19_Template, 2, 0)(20, PaymentComponent_Conditional_2_Conditional_20_Template, 9, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, PaymentComponent_Conditional_2_Conditional_21_Template, 1, 4, "hf-button", 16)(22, PaymentComponent_Conditional_2_Conditional_22_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "By clicking Pay & Confirm, you confirm that you have read, understand, and agree to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PaymentComponent_Conditional_2_Template_span_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openTermsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardStyle", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardStyle", "secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("oilOrder", ctx_r1.invoiceData)("data", ctx_r1.orderData);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.paymentTypeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](14, ctx_r1.paymentType.value === "card" ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputId", "billing address")("inputValue", ctx_r1.isBillingAdressSame)("inputLabel", "Billing same as delivery address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](17, ctx_r1.paymentType.value === "card" ? 17 : ctx_r1.paymentType.value === "cash" ? 18 : ctx_r1.paymentType.value === "paypal" ? 19 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](20, ctx_r1.showAddressCard ? 20 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](21, ctx_r1.paymentType.value !== "paypal" ? 21 : 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.orderParams["name"], " Terms.");
  }
}
function PaymentComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "hf-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PaymentComponent_Conditional_5_Template_hf_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeTermsModal(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r1.companyDetails["termsOfDelivery"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "medium")("labelText", "CLOSE");
  }
}
function PaymentComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class PaymentComponent {
  get isBillingAdressSame() {
    return this.billingForm.get('isBillingAdressSame');
  }
  get billingAdress() {
    return this.billingForm.get('billingAdress');
  }
  get billingCity() {
    return this.billingForm.get('billingCity');
  }
  get billingState() {
    return this.billingForm.get('billingState');
  }
  get billingZip() {
    return this.billingForm.get('billingZip');
  }
  get cardHolderName() {
    return this.paymentForm.get('cardHolderName');
  }
  constructor(http, storeService, cookieHelper, renderer, router, toastService, appService, zone) {
    this.http = http;
    this.storeService = storeService;
    this.cookieHelper = cookieHelper;
    this.renderer = renderer;
    this.router = router;
    this.toastService = toastService;
    this.appService = appService;
    this.zone = zone;
    this.paymentType = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('');
    this.showAddressCard = false;
    this.paymentMode = _shared_models_enums__WEBPACK_IMPORTED_MODULE_6__.PaymentMode;
    this.cardPaymentInit = true;
    this.showTermsModal = false;
    this.cardLoaded = false;
    this.paymentButtonLabel = 'Pay & Confirm';
    this.isPaymentButtonDisabled = false;
    this.paymentTypeLabel = 'Credit Card';
    this.isPaypalLoaded = false;
    this.isPayPalAvailable = true;
    this.billingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      isBillingAdressSame: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(true),
      billingAdress: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3)]),
      billingCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      billingState: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      billingZip: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(5), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.maxLengthRestriction)(5)])
    });
    this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      cardHolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
    });
    this.cardNumberIM = 'Invalid Card Number';
    this.cardNumberMT = '';
    this.cardExpireyIM = 'Invalid Expiry Date';
    this.cardExpireyMT = '';
    this.cardCvvIM = 'Invalid CVV';
    this.cardCvvMT = '';
    this.cardHolderNameIM = 'Invalid Card Holder Name';
    this.cardHolderNameMT = '';
    this.billingAdressIM = '';
    this.billingAdressMT = '';
    this.billingCityIM = '';
    this.billingCityMT = '';
    this.billingStateIM = '';
    this.billingStateMT = '';
    this.billingZipIM = '';
    this.billingZipMT = '';
  }
  ngOnInit() {
    if (this.appService.isBrowserRendering) {
      this.selectPaymentType();
    }
    this.openBillingAdress();
  }
  selectPaymentType() {
    this.storeService.getValueFromStore('orderParams', orderParams => {
      this.orderParams = orderParams;
      if (this.orderParams['mode'] == this.paymentMode.CASH) {
        this.paymentTypeLabel = 'Cash On Delivery';
        this.paymentType.setValue('cash');
      } else if (this.orderParams['mode'] == this.paymentMode.PAYPAL) {
        this.paymentTypeLabel = 'PayPal';
        this.paymentType.setValue('paypal');
      } else {
        this.paymentTypeLabel = 'Credit Card';
        this.paymentType.setValue('card');
      }
      this.callSummaryApi();
    });
  }
  callSummaryApi() {
    let body = {
      isZipChanged: false,
      isMultipleFips: false,
      isDealAvailable: true,
      isFlashSale: false,
      isFlatDeliveryFee: this.orderParams['isFlatFee'],
      flatDeliveryFee: this.orderParams['flatFee'],
      isFuelAdditive: this.orderParams['fuel-additive'],
      serviceName: '',
      companyId: this.orderParams['companyId'],
      companyName: this.orderParams['name'],
      price: this.orderParams['price'],
      customerType: 0,
      deliveryDay: this.orderParams['dayId'],
      isTermsAccepted: false,
      isUpsale: false,
      orderType: _shared_models_enums__WEBPACK_IMPORTED_MODULE_6__.ServiceType.OilDelivery,
      payWithCash: this.orderParams['mode'] == this.paymentMode.CASH ? true : false,
      serviceId: -1,
      tankSize: 275,
      userId: parseInt(this.cookieHelper.getUserID()),
      zipCode: this.orderParams['zipCode'],
      city: this.orderParams['city'],
      county: this.orderParams['county'],
      fipsCode: this.orderParams['fips'],
      state: this.orderParams['state'],
      amount: parseInt(this.orderParams['quantity']),
      token: '',
      heatFleetFlashSaleId: this.orderParams['heatFleetFlashSaleId'],
      deliveryId: parseInt(this.orderParams['addressId']),
      SupportUserName: null,
      CallCompanyId: null,
      ReferredBy: null,
      isCompanyWebsiteUrl: null
    };
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.api_url}customer/order/summary`;
    this.http.post(url, body).subscribe({
      next: response => {
        this.orderSummaryData = response;
        this.orderData = response;
        this.invoiceData = response['oilOrderParameters']['placedOrder'];
        if (this.orderParams['mode'] == this.paymentMode.CREDIT) {
          this.addCollectionJS('https://secure.networkmerchants.com/token/Collect.js', () => {
            this.configureCollectionJs();
            this.cardPaymentInit = false;
          });
        } else if (this.orderParams['mode'] == this.paymentMode.PAYPAL) {
          this.payPalInit();
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }
  payPalInit() {
    var _this = this;
    return (0,C_Users_priya_OneDrive_Desktop_instient_capacitor_oil_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.paypal = yield (0,_paypal_paypal_js__WEBPACK_IMPORTED_MODULE_9__.loadScript)({
          clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.paypal_client_id,
          currency: 'USD',
          components: ["buttons", "marks", "messages"]
        });
        _this.zone.run(() => {
          _this.isPaypalLoaded = true;
        });
        _this.paypal.Buttons({
          fundingSource: _this.paypal.FUNDING.PAYLATER,
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: _this.orderSummaryData['price'].toFixed(2)
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              _this.verifyPayment(details, 'paypal');
            });
          },
          onError: err => {
            console.log(err);
            _this.toastService.toastMessage.next({
              title: `Payment Failed`,
              msg: 'Please try another time',
              type: 'error'
            });
          }
        }).render("#paypal-button").catch(error => {
          _this.isPayPalAvailable = false;
          console.error("failed to render the PayPal Buttons", error);
        });
      } catch (error) {
        console.error("failed to load the PayPal JS SDK script", error);
      }
    })();
  }
  addCollectionJS(url, callback) {
    const script = this.renderer.createElement('script');
    script.src = url;
    script.setAttribute('data-variant', 'inline');
    script.setAttribute('data-tokenization-key', '24x5CN-Y34yun-9cy3V7-t5MAZ2');
    this.renderer.appendChild(document.head, script);
    script.onload = callback;
  }
  configureCollectionJs() {
    window.CollectJS.configure({
      variant: 'inline',
      price: this.orderSummaryData['price'].toFixed(3),
      styleSniffer: true,
      currency: 'USD',
      country: 'US',
      customCss: {
        'border-style': 'none',
        'background-color': 'transparent',
        'font-size': '18px',
        'font-weight': '500'
      },
      callback: response => {
        this.verifyPayment(response, 'nmi');
      },
      fields: {
        ccnumber: {
          selector: '#ccnumber'
        },
        ccexp: {
          selector: '#ccexp'
        },
        cvv: {
          selector: '#cvv'
        }
      },
      validationCallback: (field, status, message) => {
        if (field == 'ccnumber') {
          this.validateCCNumber(status, message);
        }
        if (field == 'ccexp') {
          this.validateCCExp(status, message);
        }
        if (field == 'cvv') {
          this.validateCVV(status, message);
        }
      },
      fieldsAvailableCallback: () => {
        this.cardLoaded = true;
      }
    });
  }
  validateCCNumber(status, message) {
    this.zone.run(() => {
      if (!status) {
        this.cardNumberMT = 'error';
        this.cardNumberIM = message;
        this.paymentButtonLabel = 'Pay & Confirm';
        this.isPaymentButtonDisabled = false;
      } else {
        this.cardNumberMT = '';
        this.cardNumberIM = '';
      }
    });
  }
  validateCCExp(status, message) {
    this.zone.run(() => {
      if (!status) {
        this.cardExpireyMT = 'error';
        this.cardExpireyIM = message;
        this.paymentButtonLabel = 'Pay & Confirm';
        this.isPaymentButtonDisabled = false;
      } else {
        this.cardExpireyMT = '';
        this.cardExpireyIM = '';
      }
    });
  }
  validateCVV(status, message) {
    this.zone.run(() => {
      if (!status) {
        this.cardCvvMT = 'error';
        this.cardCvvIM = message;
        this.paymentButtonLabel = 'Pay & Confirm';
        this.isPaymentButtonDisabled = false;
      } else {
        this.cardCvvMT = '';
        this.cardCvvIM = '';
      }
    });
  }
  openBillingAdress() {
    this.isBillingAdressSame.valueChanges.subscribe(value => {
      this.showAddressCard = !value;
    });
  }
  validatePayment() {
    if (!this.isBillingAdressSame.value) {
      if (this.billingForm.invalid) {
        if (this.billingAdress.invalid) {
          this.billingAdressMT = "error";
          if (this.billingAdress?.errors['required']) {
            this.billingAdressIM = "Address is required";
          } else if (this.billingAdress?.errors['minlength']) {
            this.billingAdressIM = "Address is too short";
          }
          const validBillingAdress = this.billingAdress.statusChanges.subscribe(status => {
            if (status === 'VALID') {
              this.billingAdressIM = '';
              this.billingAdressMT = '';
              validBillingAdress.unsubscribe();
            }
          });
        }
        if (this.billingCity.invalid) {
          this.billingCityMT = "error";
          if (this.billingCity?.errors['required']) {
            this.billingCityIM = "City is required";
          }
          const validBillingCity = this.billingCity.statusChanges.subscribe(status => {
            if (status === 'VALID') {
              this.billingCityMT = '';
              validBillingCity.unsubscribe();
            }
          });
        }
        if (this.billingState.invalid) {
          this.billingStateMT = "error";
          if (this.billingState?.errors['required']) {
            this.billingStateIM = "State is required";
          }
          const validBillingState = this.billingState.statusChanges.subscribe(status => {
            if (status === 'VALID') {
              this.billingStateMT = '';
              validBillingState.unsubscribe();
            }
          });
        }
        if (this.billingZip.invalid) {
          this.billingZipMT = "error";
          if (this.billingZip?.errors['required']) {
            this.billingZipIM = "Zip is required";
          } else if (this.billingZip?.errors['minlength']) {
            this.billingZipIM = "Zip is too short";
          }
          const validBillingZip = this.billingZip.statusChanges.subscribe(status => {
            if (status === 'VALID') {
              this.billingZipMT = '';
              validBillingZip.unsubscribe();
            }
          });
        }
        return;
      }
    }
    if (this.paymentType.value === "card") {
      if (this.paymentForm.invalid) {
        if (this.cardHolderName.invalid) {
          this.cardHolderNameMT = "error";
          if (this.cardHolderName?.errors['required']) {
            this.cardHolderNameIM = "Card holder name is required";
          }
          const validCardHolderName = this.cardHolderName.statusChanges.subscribe(status => {
            if (status === 'VALID') {
              this.cardHolderNameMT = '';
              this.cardHolderNameIM = '';
              validCardHolderName.unsubscribe();
            }
          });
        }
        return;
      }
    }
    this.makePayment();
  }
  makePayment() {
    this.zone.run(() => {
      if (this.cardNumberMT === '' && this.cardExpireyMT === '' && this.cardCvvMT === '' && this.cardHolderNameMT === '') {
        this.paymentButtonLabel = 'Processing...';
        this.isPaymentButtonDisabled = true;
      }
    });
    if (this.orderParams['mode'] != this.paymentMode.CASH && this.cardHolderNameMT === '') {
      window.CollectJS.startPaymentRequest();
    } else {
      this.verifyPayment({
        token: ''
      }, 'cash');
    }
  }
  verifyPayment(res, paymentType) {
    this.zone.run(() => {
      this.paymentButtonLabel = 'Processing...';
      this.isPaymentButtonDisabled = true;
    });
    let body = {
      isZipChanged: false,
      isMultipleFips: false,
      isDealAvailable: true,
      isFlashSale: false,
      isFlatDeliveryFee: this.orderParams['isFlatFee'],
      flatDeliveryFee: this.orderParams['flatFee'],
      isFuelAdditive: this.orderParams['fuel-additive'],
      serviceName: '',
      companyId: this.orderParams['companyId'],
      companyName: this.orderParams['name'],
      price: this.orderParams['calculatedPrice'],
      customerType: 0,
      deliveryDay: this.orderParams['dayId'],
      isTermsAccepted: false,
      isUpsale: false,
      orderType: _shared_models_enums__WEBPACK_IMPORTED_MODULE_6__.ServiceType.OilDelivery,
      payWithCash: false,
      serviceId: -1,
      tankSize: 275,
      userId: parseInt(this.cookieHelper.getUserID()),
      zipCode: this.orderParams['zipCode'],
      city: this.orderParams['city'],
      county: this.orderParams['county'],
      fipsCode: this.orderParams['fips'],
      state: this.orderParams['state'],
      amount: parseInt(this.orderParams['quantity']),
      token: null,
      heatFleetFlashSaleId: this.orderParams['heatFleetFlashSaleId'],
      deliveryId: parseInt(this.orderParams['addressId']),
      BillingAddressSameAsDeliveryAddress: this.isBillingAdressSame.value,
      BillingStreet1: this.orderParams['street1'],
      BillingCity: this.orderParams['city'],
      BillingState: this.orderParams['state'],
      BillingZIP: this.orderParams['zipCode'],
      BillingCounty: this.orderParams['county'],
      BillingFIPS: this.orderParams['fips'],
      SupportUserName: null,
      CallCompanyId: null,
      ReferredBy: null,
      isCompanyWebsiteUrl: null
    };
    if (!this.isBillingAdressSame.value) {
      body.BillingStreet1 = this.billingAdress.value;
      body.BillingCity = this.billingCity.value;
      body.BillingState = this.billingState.value;
      body.BillingZIP = this.billingZip.value;
    }
    if (paymentType === 'cash') {
      body.payWithCash = true;
    } else if (paymentType === 'paypal') {
      body.token = res['id'];
      body['paymentType'] = "Paypal";
      body['paymentSuccess'] = res.purchase_units[0].payments.captures[0].status;
      body['paymentCaptureId'] = res.purchase_units[0].payments.captures[0].id;
      body['payPalResponse'] = JSON.stringify(res);
    } else if (paymentType === 'nmi') {
      body.token = res['token'];
    }
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.api_url}customer/order/place`;
    this.http.post(url, body).subscribe({
      next: response => {
        this.zone.run(() => {
          if (response['isError']) {
            this.toastService.toastMessage.next({
              title: `Payment Failed`,
              msg: `${response['errorMessage']} Please try other credit card or debit card`,
              type: 'error'
            });
          } else {
            this.orderParams['orderId'] = response['id'];
            this.storeService.addValueToStore('orderParams', this.orderParams);
            this.toastService.toastMessage.next({
              title: `Payment Success`,
              msg: 'Order placed successfully',
              type: 'success'
            });
            this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_8__.URLS.DELIVERY_DETAILS]);
          }
          this.paymentButtonLabel = 'Pay & Confirm';
          this.isPaymentButtonDisabled = false;
        });
      },
      error: error => {
        this.zone.run(() => {
          this.paymentButtonLabel = 'Pay & Confirm';
          this.isPaymentButtonDisabled = false;
          this.toastService.toastMessage.next({
            title: `Payment Failed`,
            msg: 'Something went wrong, Please contact support',
            type: 'error'
          });
          console.log(error);
        });
      }
    });
  }
  openTermsModal() {
    if (!this.showTermsModal) {
      this.showTermsModal = true;
      if (!this.companyDetails) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.api_url}customer/offer/get-companydetails?companyId=${this.orderParams['companyId']}`;
        this.http.get(url).subscribe({
          next: response => {
            this.companyDetails = response;
          }
        });
      }
    }
  }
  closeTermsModal(isClosed) {
    if (isClosed) {
      this.showTermsModal = false;
    }
  }
  selectPaypalPaymentType() {
    this.paymentType.setValue('paypal');
  }
  static #_ = this.ɵfac = function PaymentComponent_Factory(t) {
    return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_4__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: PaymentComponent,
    selectors: [["app-payment"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 5,
    consts: [[1, "payment-container"], [3, "cardStyle"], [3, "modelClosed", "showModel", "modelSize", "modelTitle"], [1, "terms-modal"], [1, "payment-card"], [1, "hf-heading-4", "hf-dark-grey-text-color", "hf-dark-font"], [1, "invoice-card", 3, "cardStyle"], [1, "hf-body-2", "hf-dark-grey-text-color", "hf-dark-font", 2, "padding-left", "16px"], [1, "order-invoice", 3, "oilOrder", "data"], [1, "payment-section"], [1, "payment-header"], [1, "payment-title"], [1, "hf-body-1", "hf-dark-grey-text-color", "hf-dark-font"], [1, "payment-icons"], [3, "inputId", "inputValue", "inputLabel"], [1, "billing-deatils"], ["type", "button", 3, "buttonStyle", "buttonSize", "labelText", "isDisabled"], [1, "company-terms", "hf-body-2", 2, "text-align", "center"], [3, "click"], ["src", "assets/images/amex.png", "alt", "amex card icon", "title", "amex card icon"], ["src", "assets/images/visa.png", "alt", "visa card icon", "title", "visa card icon"], ["src", "assets/images/master.png", "alt", "master card icon", "title", "master card icon"], [1, "payment-details"], [1, "card-deatils"], ["inputLabel", "Card Number", "inputType", "custom", 3, "inputDescription", "descriptionType"], ["id", "ccnumber", 2, "height", "24px"], [1, "card-secret"], ["inputLabel", "MM/YY", "inputType", "custom", 3, "inputDescription", "descriptionType"], ["id", "ccexp", 2, "height", "24px"], ["inputLabel", "CVV", "inputType", "custom", 3, "inputDescription", "descriptionType"], ["id", "cvv", 2, "height", "24px"], ["inputLabel", "Cardholder Name", "inputType", "text", 3, "inputValue", "inputDescription", "descriptionType"], [1, "hf-body-2", "hf-dark-grey-text-color", 2, "text-align", "center"], [1, "hf-body-2", "hf-dark-grey-text-color"], ["inputLabel", "Address", "inputType", "text", 3, "inputValue", "descriptionType", "inputDescription"], [1, "billing-info"], ["inputLabel", "City", "inputType", "text", 3, "inputValue", "descriptionType", "inputDescription"], [1, "billing-zip"], ["inputLabel", "State", "inputType", "text", 3, "inputValue", "descriptionType", "inputDescription"], ["inputLabel", "ZIP", "inputType", "text", 3, "inputValue", "descriptionType", "inputDescription"], ["type", "button", 3, "click", "buttonStyle", "buttonSize", "labelText", "isDisabled"], ["id", "paypal-button"], [1, "hf-body-1", 3, "innerHTML"], ["type", "button", 2, "margin-top", "20px", 3, "click", "buttonStyle", "buttonSize", "labelText"], [1, "hf-body-1"]],
    template: function PaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-order-details-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, PaymentComponent_Conditional_2_Template, 27, 14, "hf-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "hf-model", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("modelClosed", function PaymentComponent_Template_hf_model_modelClosed_3_listener($event) {
          return ctx.closeTermsModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, PaymentComponent_Conditional_5_Template, 2, 4)(6, PaymentComponent_Conditional_6_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](2, ctx.appService.isBrowserRendering && ctx.orderParams ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showModel", ctx.showTermsModal)("modelSize", "medium")("modelTitle", "Company terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](5, ctx.companyDetails ? 5 : 6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_1__.OrderDetailsBarComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfButtonComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCheckboxComponent, _shared_components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_7__.OrderInvoiceComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfModelComponent],
    styles: [".payment-container[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 620px;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.payment-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.payment-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.payment-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.payment-title[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.payment-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.payment-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 12px;\n  width: auto;\n}\n\n.payment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.card-deatils[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.card-secret[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  gap: 16px;\n}\n\n.billing-deatils[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.billing-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.billing-zip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n  .invoice-card .hf-secondary-card {\n  padding-right: 0px !important;\n  padding-left: 0px !important;\n}\n\n  .order-invoice table {\n  padding-right: 16px !important;\n  padding-left: 16px !important;\n}\n\n  .order-invoice .grand-total {\n  padding-right: 16px !important;\n  padding-left: 16px !important;\n}\n\n.company-terms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 600px) {\n  .payment-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card-deatils[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card-secret[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .billing-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBRUk7SUFDSSxzQkFBQTtFQ0FOO0VER0U7SUFDSSxzQkFBQTtFQ0ROO0VESUU7SUFDSSxXQUFBO0VDRk47RURLRTtJQUNJLHNCQUFBO0VDSE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDYyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDQwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLnBheW1lbnQtaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxufVxyXG5cclxuLnBheW1lbnQtaWNvbnMgaW1nIHtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ucGF5bWVudC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC1kZWF0aWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLXNlY3JldCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuLmJpbGxpbmctZGVhdGlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuLmJpbGxpbmctaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uYmlsbGluZy16aXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5pbnZvaWNlLWNhcmQgLmhmLXNlY29uZGFyeS1jYXJkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5vcmRlci1pbnZvaWNlIHRhYmxlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm9yZGVyLWludm9pY2UgLmdyYW5kLXRvdGFsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tcGFueS10ZXJtcyBzcGFuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAgIC5wYXltZW50LWhlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZWF0aWxzIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXNlY3JldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpbGxpbmctaW5mbyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSIsIi5wYXltZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA2MjBweDtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDQwcHg7XG59XG5cbi5wYXltZW50LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wYXltZW50LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wYXltZW50LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5wYXltZW50LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5wYXltZW50LWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5wYXltZW50LWljb25zIGltZyB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5wYXltZW50LWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5jYXJkLWRlYXRpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG5cbi5jYXJkLXNlY3JldCB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbn1cblxuLmJpbGxpbmctZGVhdGlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmJpbGxpbmctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbn1cblxuLmJpbGxpbmctemlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xufVxuXG46Om5nLWRlZXAgLmludm9pY2UtY2FyZCAuaGYtc2Vjb25kYXJ5LWNhcmQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5vcmRlci1pbnZvaWNlIHRhYmxlIHtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5vcmRlci1pbnZvaWNlIC5ncmFuZC10b3RhbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wYW55LXRlcm1zIHNwYW4ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wYXltZW50LWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY2FyZC1kZWF0aWxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jYXJkLXNlY3JldCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJpbGxpbmctaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4546:
/*!**************************************************************!*\
  !*** ./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCustomScript: () => (/* binding */ loadCustomScript),
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/*!
 * paypal-js v8.0.5 (2024-04-16T22:14:11.318Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function findScript(url, attributes) {
  var currentScript = document.querySelector("script[src=\"".concat(url, "\"]"));
  if (currentScript === null) return null;
  var nextScript = createScriptElement(url, attributes);
  // ignore the data-uid-auto attribute that gets auto-assigned to every script tag
  var currentScriptClone = currentScript.cloneNode();
  delete currentScriptClone.dataset.uidAuto;
  // check if the new script has the same number of data attributes
  if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }
  var isExactMatch = true;
  // check if the data attribute values are the same
  Object.keys(currentScriptClone.dataset).forEach(function (key) {
    if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
  var url = _a.url,
    attributes = _a.attributes,
    onSuccess = _a.onSuccess,
    onError = _a.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
  var sdkBaseUrl = "https://www.paypal.com/sdk/js";
  if (options.sdkBaseUrl) {
    sdkBaseUrl = options.sdkBaseUrl;
    delete options.sdkBaseUrl;
  }
  var optionsWithStringIndex = options;
  var _a = Object.keys(optionsWithStringIndex).filter(function (key) {
      return typeof optionsWithStringIndex[key] !== "undefined" && optionsWithStringIndex[key] !== null && optionsWithStringIndex[key] !== "";
    }).reduce(function (accumulator, key) {
      var value = optionsWithStringIndex[key].toString();
      key = camelCaseToKebabCase(key);
      if (key.substring(0, 4) === "data" || key === "crossorigin") {
        accumulator.attributes[key] = value;
      } else {
        accumulator.queryParams[key] = value;
      }
      return accumulator;
    }, {
      queryParams: {},
      attributes: {}
    }),
    queryParams = _a.queryParams,
    attributes = _a.attributes;
  if (queryParams["merchant-id"] && queryParams["merchant-id"].indexOf(",") !== -1) {
    attributes["data-merchant-id"] = queryParams["merchant-id"];
    queryParams["merchant-id"] = "*";
  }
  return {
    url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
    attributes: attributes
  };
}
function camelCaseToKebabCase(str) {
  var replacer = function (match, indexOfMatch) {
    return (indexOfMatch ? "-" : "") + match.toLowerCase();
  };
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function (key) {
    if (queryString.length !== 0) queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}
function createScriptElement(url, attributes) {
  if (attributes === void 0) {
    attributes = {};
  }
  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function (key) {
    newScript.setAttribute(key, attributes[key]);
    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}

/**
 * Load the Paypal JS SDK script asynchronously.
 *
 * @param {Object} options - used to configure query parameters and data attributes for the JS SDK.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<Object>} paypalObject - reference to the global window PayPal object.
 */
function loadScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  // resolve with null when running in Node or Deno
  if (typeof document === "undefined") return PromisePonyfill.resolve(null);
  var _a = processOptions(options),
    url = _a.url,
    attributes = _a.attributes;
  var namespace = attributes["data-namespace"] || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace);
  if (!attributes["data-js-sdk-library"]) {
    attributes["data-js-sdk-library"] = "paypal-js";
  }
  // resolve with the existing global paypal namespace when a script with the same params already exists
  if (findScript(url, attributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }
  return loadCustomScript({
    url: url,
    attributes: attributes
  }, PromisePonyfill).then(function () {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);
    if (newWindowNamespace) {
      return newWindowNamespace;
    }
    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
/**
 * Load a custom script asynchronously.
 *
 * @param {Object} options - used to set the script url and attributes.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<void>} returns a promise to indicate if the script was successfully loaded.
 */
function loadCustomScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  var url = options.url,
    attributes = options.attributes;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }
  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }
  return new PromisePonyfill(function (resolve, reject) {
    // resolve with undefined when running in Node or Deno
    if (typeof document === "undefined") return resolve();
    insertScriptElement({
      url: url,
      attributes: attributes,
      onSuccess: function () {
        return resolve();
      },
      onError: function () {
        var defaultError = new Error("The script \"".concat(url, "\" failed to load. Check the HTTP status code and response body in DevTools to learn more."));
        return reject(defaultError);
      }
    });
  });
}
function getPayPalWindowNamespace(namespace) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return window[namespace];
}
function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }
  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}

// replaced with the package.json version at build time
var version = "8.0.5";


/***/ })

}]);
//# sourceMappingURL=315.js.map