"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[795],{

/***/ 3795:
/*!******************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/confirm-address/confirm-address.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmAddressComponent: () => (/* binding */ ConfirmAddressComponent)
/* harmony export */ });
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/order-details-bar/order-details-bar.component */ 1921);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/urls */ 308);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/shared.service */ 2939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);











const ConfirmAddressComponent_Defer_8_DepsFn = () => [__webpack_require__.e(/*! import() */ 493).then(__webpack_require__.bind(__webpack_require__, /*! ../../shared/components/address/address.component */ 2493)).then(m => m.AddressComponent)];
function ConfirmAddressComponent_Defer_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-address", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showSelectButton", true);
  }
}
class ConfirmAddressComponent {
  constructor(router, toastService, storeService, sharedService, appService) {
    this.router = router;
    this.toastService = toastService;
    this.storeService = storeService;
    this.sharedService = sharedService;
    this.appService = appService;
    this.isAddressAvailable = false;
  }
  ngOnInit() {
    if (this.appService.isBrowserRendering) {
      this.storeService.getValueFromStore('orderParams', orderParams => {
        this.orderParams = orderParams;
      });
    }
    this.selectedAddress = this.sharedService.selectedAddress$.subscribe(address => {
      if (Object.keys(address).length !== 0) {
        this.isAddressAvailable = true;
      } else {
        this.isAddressAvailable = false;
      }
    });
  }
  navigateToPaymentPage() {
    if (this.isAddressAvailable) {
      this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.PAYMENT]);
    } else {
      this.toastService.toastMessage.next({
        title: `Address Not Saved`,
        msg: `You’ve picked a ${this.orderParams['zipCode']} deal, but don’t have a saved address there.`,
        type: 'error'
      });
    }
  }
  ngOnDestroy() {
    if (this.selectedAddress) {
      this.selectedAddress.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function ConfirmAddressComponent_Factory(t) {
    return new (t || ConfirmAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ConfirmAddressComponent,
    selectors: [["app-confirm-address"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 5,
    consts: [[1, "confirm-address-container"], [1, "order-details-bar-wrapper"], [3, "cardStyle"], [1, "card-content"], [1, "hf-heading-4", "hf-dark-font", "hf-secondary-text-color"], ["type", "button", 3, "click", "buttonStyle", "buttonSize", "labelText"], [3, "showSelectButton"]],
    template: function ConfirmAddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-order-details-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "hf-card", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Delivery Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ConfirmAddressComponent_Defer_7_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefer"](8, 7, ConfirmAddressComponent_Defer_8_DepsFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "hf-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmAddressComponent_Template_hf_button_click_10_listener() {
          return ctx.navigateToPaymentPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardStyle", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdeferWhen"](ctx.appService.isBrowserRendering);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "medium")("labelText", "NEXT");
      }
    },
    dependencies: [_monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent, _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_1__.OrderDetailsBarComponent],
    styles: [".confirm-address-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 620px;\n  margin: auto;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL2NvbmZpcm0tYWRkcmVzcy9jb25maXJtLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vYXBwcy9oZWF0ZmxlZXQvc2VjdXJlL3NyYy9hcHAvcGFnZXMvY29uZmlybS1hZGRyZXNzL2NvbmZpcm0tYWRkcmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtLWFkZHJlc3MtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG59IiwiLmNvbmZpcm0tYWRkcmVzcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNDBweDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=795.js.map