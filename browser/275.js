"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[275],{

/***/ 7275:
/*!**************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/fuel-additive/fuel-additive.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuelAdditiveComponent: () => (/* binding */ FuelAdditiveComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/urls */ 308);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/order-details-bar/order-details-bar.component */ 1921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);













function FuelAdditiveComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](benefit_r1);
  }
}
function FuelAdditiveComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const benefit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](benefit_r2);
  }
}
function FuelAdditiveComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 12);
  }
}
function FuelAdditiveComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "p", 17)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Super+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Additive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 19)(8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Super+ Additive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 22)(13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "hf-price", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 26)(19, "hf-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelAdditiveComponent_Conditional_19_Template_hf_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.isAdditive(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("amount", ctx_r3.fuelAdditivePerGallonPrice)("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 3, ctx_r3.fuelAdditiveTotalPrice, "1.2-2"), "");
  }
}
function FuelAdditiveComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 12);
  }
}
function FuelAdditiveComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "p", 28)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Additive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 22)(8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hf-price", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 26)(14, "hf-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelAdditiveComponent_Conditional_21_Template_hf_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.isAdditive(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("amount", ctx_r3.regularPerGallonPrice)("isFontBold", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 3, ctx_r3.regularTotalPrice, "1.2-2"), "");
  }
}
class FuelAdditiveComponent {
  constructor(http, storeService, router, authService, appService) {
    this.http = http;
    this.storeService = storeService;
    this.router = router;
    this.authService = authService;
    this.appService = appService;
    this.benefits = ["Boost efficiency", "Cut heating costs", "Reduce soot by 50%", "Dissolve sludge", "Clean filters & nozzles", "Prevent jelling", "Prohibit bacteria", "Eliminate water"];
  }
  ngOnInit() {
    if (this.appService.isBrowserRendering) {
      this.storeService.getValueFromStore('orderParams', orderParams => {
        this.orderParams = orderParams;
        this.callGetProviderOilApi();
      });
    }
  }
  callGetProviderOilApi() {
    const getProviderOilApiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}customer/offer/get-provider-oil`;
    const body = {
      "zip": this.orderParams['zipCode'],
      "amount": this.orderParams['quantity'],
      "orderType": Number(this.orderParams['orderType']),
      "payWithCash": this.orderParams['mode'] == 1 ? true : false,
      "day": this.orderParams['dayId'],
      "companyId": this.orderParams['companyId'],
      "isFlashSale": this.orderParams['isFlashSale'] == null ? false : true,
      "heatFleetFlashSaleId": this.orderParams['heatFleetFlashSaleId']
    };
    this.http.post(getProviderOilApiUrl, body).subscribe({
      next: res => {
        this.getProviderOilApiData = res;
        this.regularPerGallonPrice = this.getProviderOilApiData['provider']['price'];
        this.regularTotalPrice = this.getProviderOilApiData['provider']['calculatedPrice'];
        this.fuelAdditivePerGallonPrice = this.getProviderOilApiData['provider']['premiumFuelAdditivePrice'] + this.getProviderOilApiData['provider']['price'];
        this.fuelAdditiveTotalPrice = Number(this.fuelAdditivePerGallonPrice * Number(this.orderParams['quantity']));
        if (this.getProviderOilApiData['provider']['isFlatFee']) {
          this.fuelAdditiveTotalPrice += this.getProviderOilApiData['provider']['flatFee'];
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }
  isAdditive(isAdditive) {
    this.storeService.getValueFromStore('orderParams', orderParams => {
      let orderParamsUpdate = {
        ...orderParams
      };
      orderParamsUpdate['fuel-additive'] = isAdditive;
      if (isAdditive) {
        orderParamsUpdate['price'] = this.fuelAdditivePerGallonPrice;
        orderParamsUpdate['calculatedPrice'] = this.fuelAdditiveTotalPrice;
      } else {
        orderParamsUpdate['price'] = this.regularPerGallonPrice;
        orderParamsUpdate['calculatedPrice'] = this.regularTotalPrice;
      }
      this.storeService.addValueToStore('orderParams', orderParamsUpdate);
      if (this.authService.isUserLoggedIn) {
        this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__.URLS.CONFIRM_ADDRESS]);
      } else {
        this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_3__.URLS.ORDER_LOGIN]);
      }
    });
  }
  static #_ = this.ɵfac = function FuelAdditiveComponent_Factory(t) {
    return new (t || FuelAdditiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FuelAdditiveComponent,
    selectors: [["app-fuel-additive"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 3,
    consts: [[1, "order-details-bar-wrapper"], [1, "fuel-additive-container"], [1, "modified-oil-treatment-card", 3, "cardStyle"], [1, "text-row"], [1, "super-plus-column"], [1, "hf-heading-4", "hf-main-color"], [1, "hf-body-3", 2, "margin-top", "6px"], [1, "benefits-column", "hf-secondary-text-color"], [1, "left-column"], [1, "list-items"], [1, "right-column"], [1, "button-row"], [1, "skeleton-box", 2, "width", "100%", "height", "50px"], ["src", "assets/icons/check-icon.svg", "alt", "check icon"], [1, "hf-body-3"], [1, "oil-type-wrapper"], [1, "text-wrapper"], [1, "hf-dark-font", "hf-dark-grey-text-color", "hide-mobile"], [1, "block"], [1, "hf-dark-font", "show-mobile"], [1, "block", "hf-dark-grey-text-color"], [1, "block", "hf-success-text-color", "recommended-txt"], [1, "payment-amount"], [1, "block", "hf-dark-font", "hf-heading-6", "hf-dark-grey-text-color"], ["prefixSize", "12px", "prefixHeight", "16px", "fontSize", "20px", "fontHeight", "24px", "suffixHeight", "14px", "suffixSize", "8px", 3, "amount", "isFontBold"], [1, "block", "hf-body-3"], [1, "button-wrapper"], ["type", "button", "buttonSize", "medium", "labelText", "SELECT", 1, "modified-select-button", 3, "click"], [1, "hf-dark-font", "hf-dark-grey-text-color"]],
    template: function FuelAdditiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-order-details-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "hf-card", 2)(4, "div", 3)(5, "div", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Super+ Additive");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Would you like to add Super+ fuel additive to your order?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](12, FuelAdditiveComponent_For_13_Template, 4, 1, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](15, FuelAdditiveComponent_For_16_Template, 4, 1, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, FuelAdditiveComponent_Conditional_18_Template, 1, 0, "div", 12)(19, FuelAdditiveComponent_Conditional_19_Template, 20, 6)(20, FuelAdditiveComponent_Conditional_20_Template, 1, 0, "div", 12)(21, FuelAdditiveComponent_Conditional_21_Template, 15, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardStyle", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.benefits.slice(0, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.benefits.slice(4, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](18, !ctx.fuelAdditivePerGallonPrice ? 18 : 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](20, !ctx.regularPerGallonPrice ? 20 : 21);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfButtonComponent, _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_4__.OrderDetailsBarComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfPriceComponent],
    styles: [".order-details-bar-wrapper[_ngcontent-%COMP%], .fuel-additive-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 630px;\n  margin: auto;\n  padding: 0px 10px;\n}\n\n.order-details-bar-wrapper[_ngcontent-%COMP%] {\n  padding: 30px 10px;\n}\n\n  .modified-oil-treatment-card .hf-card {\n  padding: 16px !important;\n}\n\n.text-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.super-plus-column[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.benefits-column[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 16px;\n}\n\n.left-column[_ngcontent-%COMP%], .right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.list-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.list-items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18.5px;\n  width: 16px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.button-row[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  gap: 16px;\n}\n\n.oil-type-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #F5F9FD;\n  border: 1px solid #EAECF0;\n  border-radius: var(--hf-radius-size);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  gap: 10px;\n}\n\n.text-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.payment-amount[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.show-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n  .modified-select-button .hf-button {\n  padding: 12px 24px !important;\n}\n\n@media screen and (max-width: 610px) {\n  .text-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .super-plus-column[_ngcontent-%COMP%] {\n    width: 228px;\n  }\n  .button-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .benefits-column[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: start;\n  }\n  .show-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 375px) {\n  .recommended-txt[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL2Z1ZWwtYWRkaXRpdmUvZnVlbC1hZGRpdGl2ZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9wYWdlcy9mdWVsLWFkZGl0aXZlL2Z1ZWwtYWRkaXRpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRGdGQTtFQUNFLHdCQUFBO0FDN0VGOztBRGdGQTtFQUNFLGFBQUE7QUM3RUY7O0FEZ0ZBO0VBQ0UsVUFBQTtBQzdFRjs7QURnRkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FDN0VGOztBRGdGQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDN0VGOztBRGdGQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FDN0VGO0FEK0VFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUM3RUo7O0FEaUZBO0VBQ0UsY0FBQTtBQzlFRjs7QURpRkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDOUVGOztBRGlGQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQzlFRjs7QURpRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQzlFRjs7QURpRkE7RUFDRSxpQkFBQTtBQzlFRjs7QURpRkE7RUFDRSxhQUFBO0FDOUVGOztBRGlGQTtFQUNFLDZCQUFBO0FDOUVGOztBRGlGQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VDOUVGO0VEaUZBO0lBQ0UsWUFBQTtFQy9FRjtFRGtGQTtJQUNFLHNCQUFBO0VDaEZGO0VEbUZBO0lBQ0UsV0FBQTtJQUNBLHNCQUFBO0VDakZGO0VEb0ZBO0lBQ0UsY0FBQTtFQ2xGRjtFRHFGQTtJQUNFLGFBQUE7RUNuRkY7QUFDRjtBRHNGQTtFQUNFO0lBQ0UsZUFBQTtFQ3BGRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbHMtYmFyLXdyYXBwZXIsXHJcbi5mdWVsLWFkZGl0aXZlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzLWJhci13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbn1cclxuXHJcbi8vIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICBnYXA6IDI0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC50b3Age1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZ2FwOiAxNnB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5zdHJ1Y3Rpb24ge1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zdXBlclBsdXNUcmVhdG1lbnQge1xyXG4vLyAgIGNvbG9yOiB2YXIoLS1oZi1tYWluLWNvbG9yKTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbnRlbnQtd3JhcHBlciB7XHJcbi8vICAgZGlzcGxheTogZ3JpZDtcclxuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4vLyB9XHJcblxyXG4vLyAuZmVhdHVyZS1saW5lIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgaGVpZ2h0OiAyNXB4O1xyXG4vLyAgIGdhcDogN3B4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmVhdHVyZS1saW5lIGltZyB7XHJcbi8vICAgd2lkdGg6IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hY3Rpb24tYnRuLWNvbnRhaW5lciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBnYXA6IDQwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hY3Rpb24tYnRuLXdyYXBwZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBnYXA6IDRweDtcclxuLy8gfVxyXG5cclxuLy8gLmhlYXRpbmctb2lsLXRyZWF0bWVudC1jb250YWluZXIge1xyXG4vLyAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmhpZ2hsaWdodC1ncmVlbiB7XHJcbi8vICAgY29sb3I6IHZhcigtLWhmLXN1Y2Nlc3MtdGV4dCk7XHJcbi8vIH1cclxuXHJcbi8vIC5idG4tdGV4dC13cmFwcGVyIHtcclxuLy8gICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gfVxyXG5cclxuLy8gLnN1cGVycGx1cy1idXR0b24ge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLnN0YXJ0LW9uLXN1cGVycGx1cyB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogLTJweDtcclxuLy8gICBsZWZ0OiAtNXB4O1xyXG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbi8vICAgd2lkdGg6IDE4cHg7XHJcbi8vICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggMDtcclxuLy8gfVxyXG5cclxuLy8gLnN0YXJ0LW9uLXN1cGVycGx1cyBpbWcge1xyXG4vLyAgIHdpZHRoOiAxNHB4O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm1vZGlmaWVkLW9pbC10cmVhdG1lbnQtY2FyZCAuaGYtY2FyZCB7XHJcbiAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zdXBlci1wbHVzLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmJlbmVmaXRzLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbHVtbixcclxuLnJpZ2h0LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4ubGlzdC1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDZweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTguNXB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm9pbC10eXBlLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY5RkQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0VBRUNGMDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZi1yYWRpdXMtc2l6ZSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4OiAxO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnRleHQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnBheW1lbnQtYW1vdW50IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNob3ctbW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGlmaWVkLXNlbGVjdC1idXR0b24gLmhmLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgLnRleHQtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuc3VwZXItcGx1cy1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDIyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5iZW5lZml0cy1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLnNob3ctbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmhpZGUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIC5yZWNvbW1lbmRlZC10eHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufSIsIi5vcmRlci1kZXRhaWxzLWJhci13cmFwcGVyLFxuLmZ1ZWwtYWRkaXRpdmUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5vcmRlci1kZXRhaWxzLWJhci13cmFwcGVyIHtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1vZGlmaWVkLW9pbC10cmVhdG1lbnQtY2FyZCAuaGYtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1cGVyLXBsdXMtY29sdW1uIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmJlbmVmaXRzLWNvbHVtbiB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTZweDtcbn1cblxuLmxlZnQtY29sdW1uLFxuLnJpZ2h0LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXG4ubGlzdC1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xufVxuLmxpc3QtaXRlbXMgaW1nIHtcbiAgaGVpZ2h0OiAxOC41cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG5cbi5vaWwtdHlwZS13cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY5RkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQUVDRjA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLXJhZGl1cy1zaXplKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4OiAxO1xuICBnYXA6IDEwcHg7XG59XG5cbi50ZXh0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnBheW1lbnQtYW1vdW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaG93LW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubW9kaWZpZWQtc2VsZWN0LWJ1dHRvbiAuaGYtYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gIC50ZXh0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbiAgLnN1cGVyLXBsdXMtY29sdW1uIHtcbiAgICB3aWR0aDogMjI4cHg7XG4gIH1cbiAgLmJ1dHRvbi1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmJlbmVmaXRzLWNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgfVxuICAuc2hvdy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oaWRlLW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnJlY29tbWVuZGVkLXR4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=275.js.map