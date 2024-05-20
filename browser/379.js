"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[379],{

/***/ 1245:
/*!**************************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/components/order-invoice/order-invoice.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderInvoiceComponent: () => (/* binding */ OrderInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_pipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/pipes */ 9485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




function OrderInvoiceComponent_div_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](", ", ctx_r0.oilOrder["taxCode"], "");
  }
}
function OrderInvoiceComponent_div_0_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Petroleum Business Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.oilOrder["applicablePetroleumBusinessTax"].toFixed(3), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r0.oilOrder["petroleumBusinessTax"].toFixed(2), "");
  }
}
function OrderInvoiceComponent_div_0_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OrderInvoiceComponent_div_0_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total (Cash/Check)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OrderInvoiceComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "table")(2, "tbody")(3, "tr")(4, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Heating Oil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr")(12, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sales Tax ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrderInvoiceComponent_div_0_span_16_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderInvoiceComponent_div_0_tr_21_Template, 7, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OrderInvoiceComponent_div_0_p_24_Template, 2, 0, "p", 8)(25, OrderInvoiceComponent_div_0_p_25_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "numberShort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("(", ctx_r0.data["amount"], " gal, $", (ctx_r0.data["oilOrderParameters"]["originalGalPrice"] - (ctx_r0.data["oilOrderParameters"]["isFlashSaleDiscount"] ? ctx_r0.data["oilOrderParameters"]["flashSaleDiscount"] : 0) - (ctx_r0.data["oilOrderParameters"]["isHeatFleetDiscount"] ? ctx_r0.oilOrder["heatFleetFlashSaleDiscount"] : 0) + (ctx_r0.oilOrder["isFuelAdditive"] ? ctx_r0.oilOrder["fuelAdditivePricePerGallon"] : 0) - (ctx_r0.oilOrder["payWithCash"] ? ctx_r0.data["oilOrderParameters"]["cashDiscount"] : 0)).toFixed(3), "/gal)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r0.oilOrder["orderPreTaxSales"].toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r0.oilOrder["applicableSalesTaxRate"].toFixed(3), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.oilOrder["applicableSalesTaxRate"] !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r0.oilOrder["salesTax"].toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.oilOrder["applicablePetroleumBusinessTax"] !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.oilOrder.payWithCash);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.oilOrder.payWithCash);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 10, ctx_r0.oilOrder["orderTotal"]), "");
  }
}
class OrderInvoiceComponent {
  static #_ = this.ɵfac = function OrderInvoiceComponent_Factory(t) {
    return new (t || OrderInvoiceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderInvoiceComponent,
    selectors: [["app-order-invoice"]],
    inputs: {
      oilOrder: "oilOrder",
      serviceOrder: "serviceOrder",
      data: "data"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "invioce hf-body-3 hf-dark-grey-text-color", 4, "ngIf"], [1, "invioce", "hf-body-3", "hf-dark-grey-text-color"], [1, "width-60"], [1, "inline-block"], [1, "width-20"], [4, "ngIf"], [1, "break-line"], [1, "grand-total"], ["class", "hf-dark-font", 4, "ngIf"], [1, "hf-dark-font"]],
    template: function OrderInvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrderInvoiceComponent_div_0_Template, 29, 12, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.oilOrder && ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _pipes_pipes__WEBPACK_IMPORTED_MODULE_0__.NumberShort],
    styles: [".invioce[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.grand-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.grand-total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.width-60[_ngcontent-%COMP%] {\n  width: 60%;\n  text-align: left;\n}\n\n.width-20[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: right;\n}\n\n.width-20[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: right;\n}\n\n.break-line[_ngcontent-%COMP%] {\n  border-top: 1px solid #EAECF0;\n  margin: 4px 0px 4px 0px;\n}\n\n.space-div[_ngcontent-%COMP%] {\n  display: block;\n  height: 20px;\n}\n\n@media screen and (max-width: 500px) {\n  .width-60[_ngcontent-%COMP%] {\n    width: 52%;\n  }\n  td[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .break-line[_ngcontent-%COMP%] {\n    margin: 0px 0px 10px 0px;\n  }\n  .inline-block[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLWludm9pY2Uvb3JkZXItaW52b2ljZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9vcmRlci1pbnZvaWNlL29yZGVyLWludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VERUE7SUFDRSxvQkFBQTtFQ0FGO0VER0E7SUFDRSx3QkFBQTtFQ0RGO0VESUE7SUFDRSxxQkFBQTtFQ0ZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52aW9jZSB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmFuZC10b3RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmdyYW5kLXRvdGFsIHAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ud2lkdGgtNjAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLndpZHRoLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ud2lkdGgtMjAge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5icmVhay1saW5lIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUNGMDtcclxuICBtYXJnaW46IDRweCAwcHggNHB4IDBweDtcclxufVxyXG5cclxuLnNwYWNlLWRpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC53aWR0aC02MCB7XHJcbiAgICB3aWR0aDogNTIlO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnJlYWstbGluZSB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5saW5lLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn0iLCIuaW52aW9jZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JhbmQtdG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ncmFuZC10b3RhbCBwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi53aWR0aC02MCB7XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi53aWR0aC0yMCB7XG4gIHdpZHRoOiAyMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ud2lkdGgtMjAge1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJyZWFrLWxpbmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUNGMDtcbiAgbWFyZ2luOiA0cHggMHB4IDRweCAwcHg7XG59XG5cbi5zcGFjZS1kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAud2lkdGgtNjAge1xuICAgIHdpZHRoOiA1MiU7XG4gIH1cbiAgdGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5icmVhay1saW5lIHtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XG4gIH1cbiAgLmlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5279:
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

/***/ 9485:
/*!*************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/pipes/pipes.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberShort: () => (/* binding */ NumberShort)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

function toFixedWithoutRounding(number, decimalPlaces) {
  const multiplier = Math.pow(10, decimalPlaces);
  let ans = '' + Math.floor(number * multiplier) / multiplier;
  return ans.split('.').length === 1 ? ans + ".0" : ans;
}
class NumberShort {
  transform(num) {
    if (num === undefined || num === null) {
      return "";
    }
    if (typeof num == "string") {
      num = parseFloat(num.replace(/,/g, ''));
    }
    if (num >= 1000000000) {
      // return (num/1000000000).toFixed(2) + 'B';
      return toFixedWithoutRounding(num / 1000000000, 1) + 'B';
    } else if (num >= 1000000 && num < 1000000000) {
      // return (num/1000000).toFixed(1) + 'M';
      return toFixedWithoutRounding(num / 1000000, 1) + 'M';
    }
    // else if (num >= 1000 && num < 1000000) {
    //   // return (num/1000).toFixed(2) + 'K';
    //   return toFixedWithoutRounding(num/1000, 2) + 'K';
    // } 
    else {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
  static #_ = this.ɵfac = function NumberShort_Factory(t) {
    return new (t || NumberShort)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "numberShort",
    type: NumberShort,
    pure: true,
    standalone: true
  });
}

/***/ })

}]);
//# sourceMappingURL=379.js.map