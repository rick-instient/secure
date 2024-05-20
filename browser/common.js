"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[76],{

/***/ 1921:
/*!**********************************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/components/order-details-bar/order-details-bar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderDetailsBarComponent: () => (/* binding */ OrderDetailsBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);








function OrderDetailsBarComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "hf-input", 5)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hf-price", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputLabel", ctx_r1.orderParams.name)("iconUrl", ctx_r1.orderParams.logoUrl)("iconAlt", ctx_r1.orderParams.logoAltTag)("inputType", "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("amount", ctx_r1.orderParams.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 7, ctx_r1.orderParams.calculatedPrice, "1.2-2"), "");
  }
}
function OrderDetailsBarComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "hf-input", 10)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hf-price", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputLabel", ctx_r1.orderParams.name)("iconWord", ctx_r1.orderParams.name.slice(0, 1))("inputType", "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("amount", ctx_r1.orderParams.price.toFixed(3))("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 6, ctx_r1.orderParams.calculatedPrice, "1.2-2"), "");
  }
}
function OrderDetailsBarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "hf-input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderDetailsBarComponent_Conditional_1_Template_hf_input_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goToOilProviderPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "hf-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderDetailsBarComponent_Conditional_1_Template_hf_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goToOilProviderPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OrderDetailsBarComponent_Conditional_1_Conditional_8_Template, 6, 10, "hf-input", 5)(9, OrderDetailsBarComponent_Conditional_1_Conditional_9_Template, 6, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "hf-input", 6)(11, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputLabel", "Delivery ZIP")("inputType", "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.orderParams.zipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputLabel", "Quantity")("inputType", "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.orderParams.quantity, " gal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](8, ctx_r1.orderParams.logoUrl ? 8 : 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputLabel", "Deliver by")("inputType", "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.orderParams.firstDay);
  }
}
function OrderDetailsBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 11)(1, "div", 11);
  }
}
class OrderDetailsBarComponent {
  constructor(storeService, router, appService) {
    this.storeService = storeService;
    this.router = router;
    this.appService = appService;
  }
  ngOnInit() {
    if (this.appService.isBrowserRendering) {
      this.storeService.getValueFromStore('orderParams', orderParams => {
        this.orderParams = orderParams;
      });
    }
  }
  goToOilProviderPage() {
    const url = `/oil-select-provider/${this.orderParams['zipCode']}/0/0/4/${this.orderParams['quantity']}`;
    this.router.navigate([url]);
  }
  static #_ = this.ɵfac = function OrderDetailsBarComponent_Factory(t) {
    return new (t || OrderDetailsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_0__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_0__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OrderDetailsBarComponent,
    selectors: [["app-order-details-bar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "order-details-bar-contanier"], [1, "content-container"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/location.svg", 3, "click", "inputLabel", "inputType"], [1, "hf-heading-7", "hf-dark-grey-text-color", "hf-dark-font"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/quantity.svg", 3, "click", "inputLabel", "inputType"], ["inputStyle", "iconleft", 1, "company-info", 3, "inputLabel", "iconUrl", "iconAlt", "inputType"], ["inputStyle", "iconleft", "iconUrl", "/assets/icons/calender.svg", 3, "inputLabel", "inputType"], [2, "display", "flex", "align-items", "flex-end"], ["prefixSize", "12px", "prefixHeight", "16px", "fontSize", "18px", "fontHeight", "22px", "suffixHeight", "16px", "suffixSize", "12px", 3, "amount", "isFontBold"], [1, "hf-body-4", "hf-dark-grey-text-color", 2, "height", "18px", "padding", "0px 8px"], ["inputStyle", "iconleft", 1, "company-info", 3, "inputLabel", "iconWord", "inputType"], [1, "hf-skeleton-box", "loading-card"]],
    template: function OrderDetailsBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderDetailsBarComponent_Conditional_1_Template, 13, 10)(2, OrderDetailsBarComponent_Conditional_2_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx.orderParams ? 1 : 2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfPriceComponent],
    styles: [".order-details-bar-contanier[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.loading-card[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n  width: 100%;\n  min-height: 60px;\n}\n\n  hf-price {\n  color: var(--hf-dark-grey-text);\n}\n\n.company-info[_ngcontent-%COMP%] {\n  max-width: calc(50% - 10px);\n}\n\n  .company-info .hf-input-title {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLWRldGFpbHMtYmFyL29yZGVyLWRldGFpbHMtYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vY2FwYWNpdG9yJTIwb2lsL21vbm9yZXBvL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLWRldGFpbHMtYmFyL29yZGVyLWRldGFpbHMtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbHMtYmFyLWNvbnRhbmllciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNhcmQge1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgaGYtcHJpY2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWhmLWRhcmstZ3JleS10ZXh0KTtcclxufVxyXG5cclxuLmNvbXBhbnktaW5mbyB7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY29tcGFueS1pbmZvIC5oZi1pbnB1dC10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iLCIub3JkZXItZGV0YWlscy1iYXItY29udGFuaWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubG9hZGluZy1jYXJkIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuOjpuZy1kZWVwIGhmLXByaWNlIHtcbiAgY29sb3I6IHZhcigtLWhmLWRhcmstZ3JleS10ZXh0KTtcbn1cblxuLmNvbXBhbnktaW5mbyB7XG4gIG1heC13aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbn1cblxuOjpuZy1kZWVwIC5jb21wYW55LWluZm8gLmhmLWlucHV0LXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7415:
/*!*******************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/utils/day-id-pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayIdFormatted: () => (/* binding */ dayIdFormatted)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ }),

/***/ 1817:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 1440);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

/***/ }),

/***/ 7470:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skip: () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 1567);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map