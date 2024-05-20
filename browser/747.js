"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[747],{

/***/ 747:
/*!**************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/order-details/order-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderDetailsComponent: () => (/* binding */ OrderDetailsComponent)
/* harmony export */ });
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/enums */ 5279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/urls */ 308);
/* harmony import */ var _shared_utils_day_id_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/day-id-pipe */ 7415);
/* harmony import */ var _shared_components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/order-invoice/order-invoice.component */ 1245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);













const _c0 = a0 => ["/", a0];
function OrderDetailsComponent_Conditional_0_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Temporary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "DeliveryFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "PaymentFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Giveup");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Transaction ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.orderbyIdApiData["transactionId"]);
  }
}
function OrderDetailsComponent_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "dayIdFormatted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.orderbyIdApiData["scheduledDay"]), "mediumDate"));
  }
}
function OrderDetailsComponent_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderDetailsComponent_Conditional_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.orderbyIdApiData["deliveryStreet2"]);
  }
}
function OrderDetailsComponent_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Delivery Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 1, ctx_r0.orderbyIdApiData["closeDate"], "medium"));
  }
}
function OrderDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "hf-card")(2, "div", 1)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, OrderDetailsComponent_Conditional_0_Case_13_Template, 2, 0)(14, OrderDetailsComponent_Conditional_0_Case_14_Template, 2, 0)(15, OrderDetailsComponent_Conditional_0_Case_15_Template, 2, 0)(16, OrderDetailsComponent_Conditional_0_Case_16_Template, 2, 0)(17, OrderDetailsComponent_Conditional_0_Case_17_Template, 2, 0)(18, OrderDetailsComponent_Conditional_0_Case_18_Template, 2, 0)(19, OrderDetailsComponent_Conditional_0_Case_19_Template, 2, 0)(20, OrderDetailsComponent_Conditional_0_Case_20_Template, 2, 0)(21, OrderDetailsComponent_Conditional_0_Case_21_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, OrderDetailsComponent_Conditional_0_Conditional_22_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 7)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Provider:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div")(27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 7)(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Product / Service:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "app-order-invoice", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 10)(41, "div", 7)(42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Deliver By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "dayIdFormatted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 7)(49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Delivery Scheduled For:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, OrderDetailsComponent_Conditional_0_Conditional_51_Template, 4, 6, "p")(52, OrderDetailsComponent_Conditional_0_Conditional_52_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 7)(54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Delivery Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div")(57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, OrderDetailsComponent_Conditional_0_Conditional_59_Template, 2, 1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 7)(63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Order Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](67, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, OrderDetailsComponent_Conditional_0_Conditional_68_Template, 6, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "hf-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Order Details (#", ctx_r0.orderId, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](13, (tmp_2_0 = ctx_r0.orderbyIdApiData["status"]) === ctx_r0.orderStatus.Unknown ? 13 : tmp_2_0 === ctx_r0.orderStatus.Temporary ? 14 : tmp_2_0 === ctx_r0.orderStatus.Pending ? 15 : tmp_2_0 === ctx_r0.orderStatus.Scheduled ? 16 : tmp_2_0 === ctx_r0.orderStatus.Delivered ? 17 : tmp_2_0 === ctx_r0.orderStatus.Canceled ? 18 : tmp_2_0 === ctx_r0.orderStatus.DeliveryFailed ? 19 : tmp_2_0 === ctx_r0.orderStatus.PaymentFailed ? 20 : tmp_2_0 === ctx_r0.orderStatus.Giveup ? 21 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](22, ctx_r0.orderbyIdApiData["transactionId"] ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.orderbyIdApiData["company"]["companyDBA"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Reg# ", ctx_r0.orderbyIdApiData["company"]["registrationNumber"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.orderbyIdApiData["company"]["contactPhone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.orderbyIdApiData["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("oilOrder", ctx_r0.invoiceOilOrder)("data", ctx_r0.orderbyIdApiData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](47, 21, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 19, ctx_r0.orderbyIdApiData["deliveryDay"]), "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](51, ctx_r0.orderbyIdApiData["scheduledDay"] ? 51 : 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.orderbyIdApiData["deliveryStreet1"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](59, ctx_r0.orderbyIdApiData["deliveryStreet2"] && ctx_r0.orderbyIdApiData["deliveryStreet2"] !== "" ? 59 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", ctx_r0.orderbyIdApiData["deliveryCity"], ", ", ctx_r0.orderbyIdApiData["deliveryState"], " ", ctx_r0.orderbyIdApiData["deliveryZIP"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](67, 24, ctx_r0.orderbyIdApiData["createdAt"], "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](68, ctx_r0.orderbyIdApiData["status"] === ctx_r0.orderStatus.Delivered ? 68 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](27, _c0, ctx_r0.urls.ORDERS));
  }
}
class OrderDetailsComponent {
  constructor(http, route) {
    this.http = http;
    this.route = route;
    this.orderStatus = _shared_models_enums__WEBPACK_IMPORTED_MODULE_2__.OrderStatus;
    this.urls = _shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__.URLS;
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.params['orderId'];
    this.callOrderbyIdApi();
  }
  callOrderbyIdApi() {
    // https://dev-api.heatfleet.com/api/customer/order/get?orderId=54556;
    const orderbyIdApiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/order/get?orderId=${this.orderId}`;
    this.orderbyIdApiSubscription = this.http.get(orderbyIdApiUrl).subscribe({
      next: res => {
        this.orderbyIdApiData = res;
        if (this.orderbyIdApiData['oilOrderParameters']['deliveredOrder']) {
          this.invoiceOilOrder = this.orderbyIdApiData['oilOrderParameters']['deliveredOrder'];
        } else {
          this.invoiceOilOrder = this.orderbyIdApiData['oilOrderParameters']['placedOrder'];
        }
      },
      error: err => console.log(err)
    });
  }
  static #_ = this.ɵfac = function OrderDetailsComponent_Factory(t) {
    return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: OrderDetailsComponent,
    selectors: [["app-order-details"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[1, "order-details-container"], [1, "order-wrapper"], [1, "header"], ["src", "/assets/icons/truck.svg", "alt", "truck-img"], [1, "hf-heading-3", "hf-secondary-text-color"], [1, "content-wrapper"], [1, "details", "hf-secondary-text-color"], [1, "detail-row"], [1, "invoice"], [3, "oilOrder", "data"], [1, "details"], [1, "action-btn"], ["buttonStyle", "secondary", "buttonSize", "large", "labelText", "BACK", 3, "routerLink"]],
    template: function OrderDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, OrderDetailsComponent_Conditional_0_Template, 71, 29, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](0, ctx.orderbyIdApiData ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_utils_day_id_pipe__WEBPACK_IMPORTED_MODULE_4__.dayIdFormatted, _shared_components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_5__.OrderInvoiceComponent],
    styles: [".order-details-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto;\n}\n\n.order-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  aspect-ratio: 1/1;\n  margin-right: 10px;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 0 40px;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 175px 1fr;\n  column-gap: 12px;\n}\n\n.invoice[_ngcontent-%COMP%] {\n  margin: 24px 0;\n  border: 1px solid #E2E2E2;\n  padding: 16px 24px;\n  border-radius: 8px;\n}\n\n@media screen and (max-width: 700px) {\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEV0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0E7RUFDRTtJQUNFLFlBQUE7RUNSRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm9yZGVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciBpbWcge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3NXB4IDFmcjtcclxuICBjb2x1bW4tZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4vLyAuZGV0YWlsLXJvdyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBnYXA6IDEycHg7XHJcblxyXG4vLyAgICYgcDpmaXJzdC1jaGlsZCB7XHJcbi8vICAgICBtaW4td2lkdGg6IDE3NXB4XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4uaW52b2ljZSB7XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMjtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxufSIsIi5vcmRlci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm9yZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuXG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuXG4uZGV0YWlsLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTc1cHggMWZyO1xuICBjb2x1bW4tZ2FwOiAxMnB4O1xufVxuXG4uaW52b2ljZSB7XG4gIG1hcmdpbjogMjRweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=747.js.map