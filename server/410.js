"use strict";
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 22410:
/*!************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/orders/orders.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersComponent: () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 32403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/cookie.helper */ 26546);
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/enums */ 85866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/urls */ 14753);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _shared_utils_day_id_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/day-id-pipe */ 76488);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 21099);














const _forTrack0 = ($index, $item) => $item["id"];
function OrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 4)(2, "div", 4)(3, "div", 4)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Temporary");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "DeliveryFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "PaymentFailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Giveup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function OrdersComponent_Conditional_5_For_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r1["deliveryStreet2"], ", ");
  }
}
function OrdersComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "hf-card", 5)(1, "div", 6)(2, "div", 7)(3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, OrdersComponent_Conditional_5_For_2_Conditional_5_Template, 2, 0, "label", 9)(6, OrdersComponent_Conditional_5_For_2_Conditional_6_Template, 2, 0)(7, OrdersComponent_Conditional_5_For_2_Conditional_7_Template, 2, 0)(8, OrdersComponent_Conditional_5_For_2_Conditional_8_Template, 2, 0)(9, OrdersComponent_Conditional_5_For_2_Conditional_9_Template, 2, 0)(10, OrdersComponent_Conditional_5_For_2_Conditional_10_Template, 2, 0)(11, OrdersComponent_Conditional_5_For_2_Conditional_11_Template, 2, 0)(12, OrdersComponent_Conditional_5_For_2_Conditional_12_Template, 2, 0)(13, OrdersComponent_Conditional_5_For_2_Conditional_13_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Deliver By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "dayIdFormatted");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 11)(32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Deliver To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, OrdersComponent_Conditional_5_For_2_Conditional_36_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.toOrderDetails + order_r1["id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Order #", order_r1["id"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](5, order_r1["status"] === ctx_r1.orderStatus.Unknown ? 5 : order_r1["status"] === ctx_r1.orderStatus.Temporary ? 6 : order_r1["status"] === ctx_r1.orderStatus.Pending ? 7 : order_r1["status"] === ctx_r1.orderStatus.Scheduled ? 8 : order_r1["status"] === ctx_r1.orderStatus.Delivered ? 9 : order_r1["status"] === ctx_r1.orderStatus.Canceled ? 10 : order_r1["status"] === ctx_r1.orderStatus.DeliveryFailed ? 11 : order_r1["status"] === ctx_r1.orderStatus.PaymentFailed ? 12 : order_r1["status"] === ctx_r1.orderStatus.Giveup ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r1["company"]["companyDBA"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", order_r1["name"], " (", order_r1["amount"], "gal) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](24, 13, order_r1["oilOrderParameters"]["placedOrder"]["orderTotal"], "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](30, 18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 16, order_r1["deliveryDay"]), "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r1["deliveryStreet1"], ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](36, order_r1["deliveryStreet2"] ? 36 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", order_r1["deliveryCity"], ", ", order_r1["deliveryState"], ", ", order_r1["deliveryZIP"], " ");
  }
}
function OrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, OrdersComponent_Conditional_5_For_2_Template, 39, 21, "hf-card", 5, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r1.ordersApiData);
  }
}
function OrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Your orders will appear on this page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class OrdersComponent {
  constructor(http, cookie) {
    this.http = http;
    this.cookie = cookie;
    this.toOrderDetails = `/${_shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__.URLS.ORDER_DETAILS}/`;
    this.orderStatus = _shared_models_enums__WEBPACK_IMPORTED_MODULE_2__.OrderStatus;
    this.isOrdersLoaded = false;
  }
  ngOnInit() {
    this.callOrderDetailsApi();
  }
  callOrderDetailsApi() {
    const ordersApi = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}customer/order/all?userId=${this.cookie.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.Cookie.USER_ID)}`;
    let header = {
      'Content-Type': 'application/json',
      'X-Api-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_key,
      'DAVOS-IsMobile': 'false',
      Authorization: `Bearer ${this.cookie.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_6__.Cookie.AUTH_TOKEN)}`
    };
    this.ordersApiSubscription = this.http.get(ordersApi, {
      headers: header
    }).subscribe(res => {
      this.ordersApiData = res;
      this.isOrdersLoaded = true;
    });
  }
  ngOnDestroy() {
    if (this.ordersApiSubscription) {
      this.ordersApiSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function OrdersComponent_Factory(t) {
    return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_1__.CookieHelper));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: OrdersComponent,
    selectors: [["app-orders"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 2,
    consts: [[1, "orders-container"], [1, "header-wrapper"], [1, "heading", "hf-heading-3", "hf-secondary-text-color", "hf-dark-font"], [1, "content-wrapper"], [1, "skeleton-box", 2, "width", "100%", "height", "200px"], [2, "cursor", "pointer", 3, "routerLink"], [1, "order-wrapper"], [1, "order-header"], [1, "hf-body-1", "hf-secondary-text-color", "hf-dark-font"], [1, "hf-label", "hf-label-error"], [1, "order-details", "hf-body-2"], [1, "detail"], [1, "hf-secondary-text-color"], [1, "hf-label", "hf-label-warning"], [1, "hf-label", "hf-label-success"], [1, "hf-label", "hf-label-info"], [1, "hf-body-1", "hf-secondary-text-color", 2, "text-align", "center"]],
    template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, OrdersComponent_Conditional_4_Template, 5, 0, "div", 3)(5, OrdersComponent_Conditional_5_Template, 3, 0, "div", 3)(6, OrdersComponent_Conditional_6_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](4, !ctx.isOrdersLoaded ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](5, ctx.ordersApiData && ctx.ordersApiData.length !== 0 ? 5 : 6);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _monorepo_ui__WEBPACK_IMPORTED_MODULE_4__.HfCardComponent, _shared_utils_day_id_pipe__WEBPACK_IMPORTED_MODULE_5__.dayIdFormatted],
    styles: [".orders-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  text-align: center;\n}\n\n.order-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.order-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vYXBwcy9oZWF0ZmxlZXQvc2VjdXJlL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcnMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBtYXJnaW46IDQwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcmRlci13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLm9yZGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCIub3JkZXJzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbjogNDBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcmRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ub3JkZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLm9yZGVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }),

/***/ 76488:
/*!*******************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/utils/day-id-pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayIdFormatted: () => (/* binding */ dayIdFormatted)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class dayIdFormatted {
  transform(value) {
    let separated = [];
    if (!isNaN(Number(value)) && value.length === 8) {
      const regex = /(.{4})(.{2})(.{2})/;
      const match = value.match(regex);
      if (match) {
        separated = match.slice(1);
      }
      const dateInUtc = Date.UTC(Number(separated[0]), Number(separated[1]) - 1, Number(separated[2]));
      const date = new Date(dateInUtc).toLocaleDateString('en-US');
      return date;
    }
    return value;
  }
  static #_ = this.ɵfac = function dayIdFormatted_Factory(t) {
    return new (t || dayIdFormatted)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "dayIdFormatted",
    type: dayIdFormatted,
    pure: true,
    standalone: true
  });
}

/***/ })

};
;
//# sourceMappingURL=410.js.map