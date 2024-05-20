"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[219],{

/***/ 2219:
/*!**********************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/order-login/order-login.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderLoginComponent: () => (/* binding */ OrderLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/shared.service */ 2939);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/enums */ 5279);
/* harmony import */ var _monorepo_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @monorepo/auth */ 9394);
/* harmony import */ var _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/order-details-bar/order-details-bar.component */ 1921);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/urls */ 308);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);







// eslint-disable-next-line @nx/enforce-module-boundaries












function OrderLoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "hf-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function OrderLoginComponent_Conditional_18_Template_hf_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openTaxExemptModel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Tax Exempt")("inputValue", ctx_r1.taxExempt);
  }
}
function OrderLoginComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx_r1.orderParams["city"], ", ", ctx_r1.orderParams["state"], " ", ctx_r1.orderParams["zipCode"], "");
  }
}
function OrderLoginComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
class OrderLoginComponent {
  get base64() {
    return this.orderLoginForm.get('base64');
  }
  get firstName() {
    return this.orderLoginForm.get('firstName');
  }
  get lastName() {
    return this.orderLoginForm.get('lastName');
  }
  get residence() {
    return this.orderLoginForm.get('residence');
  }
  get taxExempt() {
    return this.orderLoginForm.get('taxExempt');
  }
  get address() {
    return this.orderLoginForm.get('address');
  }
  get email() {
    return this.orderLoginForm.get('email');
  }
  get confirmEmail() {
    return this.orderLoginForm.get('confirmEmail');
  }
  get phoneNumber() {
    return this.orderLoginForm.get('phoneNumber');
  }
  get password() {
    return this.orderLoginForm.get('password');
  }
  get confirmPassword() {
    return this.orderLoginForm.get('confirmPassword');
  }
  constructor(sharedService, http, storeService, toastService, authService, router, appService) {
    this.sharedService = sharedService;
    this.http = http;
    this.storeService = storeService;
    this.toastService = toastService;
    this.authService = authService;
    this.router = router;
    this.appService = appService;
    this.showSignInModal = false;
    this.showTaxExemptModel = false;
    this.encryptedEmail = '';
    this.encryptedPassword = '';
    this.nextButtonDisable = false;
    this.nextButtonText = 'NEXT';
    this.orderLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      residence: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
      taxExempt: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
      base64: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.sharedService.emailKey)]),
      confirmEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(14), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.sharedService.phoneNumberKey)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('')
    }, {
      validators: [(0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.compareValidator)('email', 'confirmEmail', 'emailNotMatch')]
    });
    this.firstNameIM = '';
    this.firstNameMT = '';
    this.lastNameIM = '';
    this.lastNameMT = '';
    this.addressIM = '';
    this.addressMT = '';
    this.emailIM = '';
    this.emailMT = '';
    this.confirmEmailIM = '';
    this.confirmEmailMT = '';
    this.phoneNumberIM = '';
    this.phoneNumberMT = '';
    this.passwordIM = '';
    this.passwordMT = '';
    this.confirmPasswordIM = '';
    this.confirmPasswordMT = '';
  }
  ngOnInit() {
    this.residence.setValue(true);
    if (this.appService.isBrowserRendering) {
      this.storeService.getValueFromStore('orderParams', orderParams => {
        this.orderParams = orderParams;
      });
    }
  }
  checkIfEmailAlreadyExist() {
    this.authService.checkEmailInfo.next({
      email: this.email.value,
      isVaild: false
    });
    this.emailInfo = this.authService.checkEmailInfo$.subscribe(res => {
      if (res.isVaild) {
        this.showSignInModal = true;
        this.getLoginInfo();
      }
    });
  }
  getLoginInfo() {
    this.loginInfo = this.authService.isLoginDone$.subscribe(res => {
      if (res.isLoginDone) {
        if (!this.appService.isApp) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.is_local) {
            this.authService.processLoginResponse(res.loginResponse, '.heatfleet.com');
          } else {
            this.authService.processLoginResponse(res.loginResponse);
          }
        } else {
          const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expires in 7 days
          const expires = expirationDate.toUTCString();
          this.authService.processLoginResponse(res.loginResponse, 'localhost', '/', expires);
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
        this.closeSignInModal(true);
        this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_7__.URLS.CONFIRM_ADDRESS]);
      }
    });
  }
  openSignInModal() {
    this.showSignInModal = true;
    this.getLoginInfo();
  }
  closeSignInModal(isClosed) {
    if (isClosed) {
      this.showSignInModal = false;
      if (this.emailInfo) {
        this.emailInfo.unsubscribe();
      }
      if (this.loginInfo) {
        this.loginInfo.unsubscribe();
      }
    }
  }
  validateOrderLoginForm() {
    if (this.password.value != '') {
      this.password.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]);
      this.orderLoginForm.addValidators([(0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.compareValidator)('password', 'confirmPassword', 'passwordNotMatch')]);
    } else {
      this.passwordMT = '';
      this.passwordIM = '';
      this.confirmPasswordMT = '';
      this.confirmPasswordIM = '';
      this.password.clearValidators();
      this.orderLoginForm.clearValidators();
      this.orderLoginForm.addValidators([(0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.compareValidator)('email', 'confirmEmail', 'emailNotMatch')]);
    }
    this.password.updateValueAndValidity();
    this.orderLoginForm.updateValueAndValidity();
    if (this.orderLoginForm.invalid) {
      this.nextButtonDisable = false;
      this.nextButtonText = 'NEXT';
      if (this.firstName.invalid) {
        this.firstNameMT = "error";
        if (this.firstName?.errors['required']) {
          this.firstNameIM = "First name is required";
        }
        const validFirstName = this.firstName.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.firstNameIM = '';
            this.firstNameMT = '';
            validFirstName.unsubscribe();
          }
        });
      }
      if (this.lastName.invalid) {
        this.lastNameMT = "error";
        if (this.lastName?.errors['required']) {
          this.lastNameIM = "Last name is required";
        }
        const validLastName = this.lastName.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.lastNameIM = '';
            this.lastNameMT = '';
            validLastName.unsubscribe();
          }
        });
      }
      if (this.address.invalid) {
        this.addressMT = "error";
        if (this.address?.errors['required']) {
          this.addressIM = "Address is required";
        }
        const validAddress = this.address.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.addressIM = '';
            this.addressMT = '';
            validAddress.unsubscribe();
          }
        });
      }
      if (this.email.invalid) {
        this.emailMT = "error";
        if (this.email?.errors['required']) {
          this.emailIM = "Email is required";
        }
        if (this.email?.errors['pattern']) {
          this.emailIM = "Invalid email";
        }
        const validEmail = this.email.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.emailIM = '';
            this.emailMT = '';
            validEmail.unsubscribe();
          }
        });
      }
      if (this.phoneNumber.invalid) {
        this.phoneNumberMT = "error";
        if (this.phoneNumber?.errors['required']) {
          this.phoneNumberIM = "Phone number is required";
        }
        if (this.phoneNumber?.errors['pattern']) {
          this.phoneNumberIM = "Invalid phone number";
        }
        if (this.phoneNumber?.errors['minlength']) {
          this.phoneNumberIM = "Phone Number length should be 10";
        }
        if (this.phoneNumber?.errors['maxlength']) {
          this.phoneNumberIM = "Phone Number length should be 10";
        }
        const validPhoneNumber = this.phoneNumber.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.phoneNumberIM = '';
            this.phoneNumberMT = '';
            validPhoneNumber.unsubscribe();
          }
        });
      }
      if (this.password.invalid) {
        this.passwordMT = "error";
        if (this.password?.errors['minlength']) {
          this.passwordIM = "Password length should be atleast 8-20 characters";
        }
        if (this.password?.errors['pattern']) {
          this.passwordIM = "Password length should be atleast 8-20 characters and 1-uppercase, 1-lowercase, 1-special character";
        }
        const validPassword = this.password.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.passwordIM = '';
            this.passwordMT = '';
            validPassword.unsubscribe();
          }
        });
      }
      if (this.orderLoginForm.errors?.['emailNotMatch']) {
        this.confirmEmailMT = "error";
        this.confirmEmailIM = "Email not match";
        const matchEmail = this.orderLoginForm.statusChanges.subscribe(() => {
          if (!this.orderLoginForm.errors?.['emailNotMatch']) {
            this.confirmEmailMT = '';
            this.confirmEmailIM = '';
            matchEmail.unsubscribe();
          }
        });
      }
      if (this.orderLoginForm.errors?.['passwordNotMatch']) {
        this.confirmPasswordMT = "error";
        this.confirmPasswordIM = "Password not match";
        const matchPassword = this.orderLoginForm.statusChanges.subscribe(() => {
          if (!this.orderLoginForm.errors?.['passwordNotMatch']) {
            this.confirmPasswordMT = '';
            this.confirmPasswordIM = '';
            matchPassword.unsubscribe();
          }
        });
      }
      return;
    }
    this.callRegisterCustomerApi();
  }
  callRegisterCustomerApi() {
    this.nextButtonDisable = true;
    this.nextButtonText = 'Processing Wait...';
    const registerCustomerApi = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api_url}Authenticate/register/customer?api-version=${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api_version}`;
    this.encryptedEmail = this.sharedService.getEncryptedValue(this.email.value);
    this.encryptedPassword = this.sharedService.getEncryptedValue(this.password.value ? this.password.value : this.authService.generateRandomPassword());
    let customerTaxType = this.residence.value ? _shared_models_enums__WEBPACK_IMPORTED_MODULE_4__.CustomerTaxType.Residential : _shared_models_enums__WEBPACK_IMPORTED_MODULE_4__.CustomerTaxType.Commercial;
    let taxExempt = this.taxExempt.value ? true : false;
    let payload = {
      "email": this.encryptedEmail,
      "password": this.encryptedPassword,
      "phoneNumber": this.phoneNumber.value,
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "deliveryStreet1": this.address.value,
      "deliveryCity": this.orderParams['city'],
      "deliveryCounty": this.orderParams['county'],
      "deliveryFips": this.orderParams['fips'],
      "deliveryState": this.orderParams['state'],
      "deliveryZIP": this.orderParams['zipCode'],
      "AutoPassword": this.password.value ? false : true,
      "oilTaxexempt": taxExempt,
      "deliveryStreet2": "",
      "customerTaxType": customerTaxType
    };
    if (this.taxExempt.value) {
      payload['base64'] = this.base64.value;
    }
    this.callRegisterCustomerApiSubscription = this.http.post(registerCustomerApi, payload).subscribe({
      next: res => {
        let orderParamsUpdate = {
          ...this.orderParams,
          deliveryId: res['deliveryId']
        };
        this.storeService.addValueToStore('orderParams', orderParamsUpdate);
        this.nextButtonText = 'Redirecting...';
        this.loginCustomer();
      },
      error: err => {
        console.log(err);
        this.nextButtonDisable = false;
        this.nextButtonText = 'NEXT';
        if (err.error.errors) {
          err.error.errors.map(error => {
            if (error['fieldName'] === "Email") {
              this.toastService.toastMessage.next({
                title: 'Email is already taken',
                msg: error['errorMessage'],
                type: 'error'
              });
            }
          });
        }
      }
    });
  }
  loginCustomer() {
    const loginApiUrl = `${this.authService.apiUrl}authenticate/login?api-version=${this.authService.apiVersion}`;
    const payload = {
      "username": this.encryptedEmail,
      "password": this.encryptedPassword
    };
    this.loginApiSubscription = this.http.post(loginApiUrl, payload).subscribe({
      next: res => {
        this.authService.isLoginDone.next({
          isLoginDone: true,
          loginResponse: res
        });
        if (!this.appService.isApp) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.is_local) {
            this.authService.processLoginResponse(res, '.heatfleet.com');
          } else {
            this.authService.processLoginResponse(res);
          }
        } else {
          const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expires in 7 days
          const expires = expirationDate.toUTCString();
          this.authService.processLoginResponse(res, 'localhost', '/', expires);
        }
        this.router.navigate([_shared_utils_urls__WEBPACK_IMPORTED_MODULE_7__.URLS.CONFIRM_ADDRESS]);
      },
      error: err => {
        this.nextButtonDisable = false;
        this.nextButtonText = 'NEXT';
        console.log(err);
        this.authService.isLoginDone.next({
          isLoginDone: false,
          loginResponse: null
        });
      }
    });
  }
  // Tax Exempt Modal
  openTaxExemptModel() {
    if (this.taxExempt.value) {
      this.fileUrl = undefined;
      this.showTaxExemptModel = true;
    }
  }
  closeTaxExemptModel(isClosed) {
    if (isClosed) {
      this.showTaxExemptModel = false;
      if (!this.fileUrl || this.fileUrl.split(',')[1] === '') {
        this.taxExempt.setValue(false);
      }
    }
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    const allowTypes = ['image/png', 'image/jpeg', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (file && allowTypes.includes(file['type'])) {
      if (file['size'] > 0 && file['size'] <= 2000000) {
        this.convertToBase64(file);
      } else {
        this.toastService.toastMessage.next({
          title: 'Size error',
          msg: 'file size should be below 2mb',
          type: 'error'
        });
      }
    } else {
      this.toastService.toastMessage.next({
        title: 'This format is not supported',
        msg: '.pdf, .jpeg, .png, .docx are only supported format',
        type: 'error'
      });
    }
  }
  convertToBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileUrl = reader.result;
    };
  }
  modalTaxExemptSubmit(fileUrl) {
    if (fileUrl && fileUrl.split(',')[1] && fileUrl.split(',')[1] !== '') {
      this.taxExempt.setValue(true);
      this.base64.setValue(this.fileUrl.split(',')[1]);
      this.showTaxExemptModel = false;
    } else {
      this.toastService.toastMessage.next({
        title: 'Select a File',
        msg: 'Please select a file before submitting',
        type: 'error'
      });
    }
  }
  ngOnDestroy() {
    if (this.callRegisterCustomerApiSubscription) {
      this.callRegisterCustomerApiSubscription.unsubscribe();
    }
    if (this.emailInfo) {
      this.emailInfo.unsubscribe();
    }
    if (this.loginInfo) {
      this.loginInfo.unsubscribe();
    }
    if (this.loginApiSubscription) {
      this.loginApiSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function OrderLoginComponent_Factory(t) {
    return new (t || OrderLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.AppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: OrderLoginComponent,
    selectors: [["app-order-login"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 44,
    vars: 41,
    consts: [[1, "order-login-container"], [1, "heading"], [1, "hf-heading-4", "hf-dark-font", "hf-secondary-text-color"], [1, "sign-in-btn"], ["labelText", "SIGN IN", "buttonSize", "small", 3, "click"], [1, "content-wrapper"], [3, "formGroup"], [1, "username", "username-inputs-wrapper"], ["inputLabel", "First Name", 3, "inputValue", "descriptionType", "inputDescription"], ["inputLabel", "Last Name", 3, "inputValue", "descriptionType", "inputDescription"], [1, "address"], [1, "sub-heading-container"], [1, "sub-heading", "hf-dark-font", "hf-body-1", "hf-secondary-text-color"], [1, "checkbox-container"], ["inputId", "TaxExempt", 3, "inputLabel", "inputValue"], ["inputId", "Residence", 3, "inputLabel", "inputValue"], ["inputLabel", "Street", 2, "margin-bottom", "12px", 3, "inputValue", "descriptionType", "inputDescription"], [2, "padding-left", "8px"], [1, "contact"], [1, "contact-inputs-wrapper"], ["inputType", "email", "inputLabel", "Email", 3, "focusOut", "inputValue", "descriptionType", "inputDescription"], ["inputType", "email", "inputLabel", "Confirm Email", 3, "inputValue", "descriptionType", "inputDescription"], ["inputType", "text", "inputLabel", "Phone Number", "phoneNumberFormatter", "", 3, "inputValue", "descriptionType", "inputDescription"], [1, "optional"], [1, "optional-inputs-wrapper"], ["inputType", "password", 3, "inputLabel", "isPassword", "inputValue", "descriptionType", "inputDescription"], [1, "next-btn"], ["type", "button", "buttonSize", "large", 3, "click", "labelText", "isDisabled"], ["modelTitle", "Sign In", 3, "modelClosed", "showModel", "modelSize"], [3, "modelAuth"], ["modelTitle", "Tax Exempt", 3, "modelClosed", "showModel", "modelSize"], [1, "modal-container"], ["type", "file", 3, "change"], ["alt", "Uploaded file", "width", "100%", "height", "300px", 2, "object-fit", "scale-down", 3, "src"], ["labelText", "SUBMIT", "buttonSize", "medium", 3, "click"], ["inputId", "TaxExempt", 3, "change", "inputLabel", "inputValue"]],
    template: function OrderLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-order-details-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "hf-card")(3, "div", 1)(4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Deliver To");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3)(7, "hf-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrderLoginComponent_Template_hf_button_click_7_listener() {
          return ctx.openSignInModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "form", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "hf-input", 8)(12, "hf-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, OrderLoginComponent_Conditional_18_Template, 1, 2, "hf-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "hf-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "hf-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, OrderLoginComponent_Conditional_21_Template, 2, 3, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 18)(23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 19)(26, "hf-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusOut", function OrderLoginComponent_Template_hf_input_focusOut_26_listener() {
          return ctx.checkIfEmailAlreadyExist();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "hf-input", 21)(28, "hf-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 23)(30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Password (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "hf-input", 25)(34, "hf-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 26)(36, "hf-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrderLoginComponent_Template_hf_button_click_36_listener() {
          return ctx.validateOrderLoginForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "hf-model", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelClosed", function OrderLoginComponent_Template_hf_model_modelClosed_37_listener($event) {
          return ctx.closeSignInModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "lib-login", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "hf-model", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelClosed", function OrderLoginComponent_Template_hf_model_modelClosed_39_listener($event) {
          return ctx.closeTaxExemptModel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 31)(41, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function OrderLoginComponent_Template_input_change_41_listener($event) {
          return ctx.onFileSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, OrderLoginComponent_Conditional_42_Template, 1, 1, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "hf-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrderLoginComponent_Template_hf_button_click_43_listener() {
          return ctx.modalTaxExemptSubmit(ctx.fileUrl);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.orderLoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.firstName)("descriptionType", ctx.firstNameMT)("inputDescription", ctx.firstNameIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.lastName)("descriptionType", ctx.lastNameMT)("inputDescription", ctx.lastNameIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](18, !ctx.residence.value ? 18 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Residence")("inputValue", ctx.residence);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.address)("descriptionType", ctx.addressMT)("inputDescription", ctx.addressIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](21, ctx.orderParams ? 21 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.email)("descriptionType", ctx.emailMT)("inputDescription", ctx.emailIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.confirmEmail)("descriptionType", ctx.confirmEmailMT)("inputDescription", ctx.confirmEmailIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputValue", ctx.phoneNumber)("descriptionType", ctx.phoneNumberMT)("inputDescription", ctx.phoneNumberIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Password")("isPassword", true)("inputValue", ctx.password)("descriptionType", ctx.passwordMT)("inputDescription", ctx.passwordIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputLabel", "Confirm Password")("isPassword", true)("inputValue", ctx.confirmPassword)("descriptionType", ctx.confirmPasswordMT)("inputDescription", ctx.confirmPasswordIM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelText", ctx.nextButtonText)("isDisabled", ctx.nextButtonDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showModel", ctx.showSignInModal)("modelSize", "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("modelAuth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showModel", ctx.showTaxExemptModel)("modelSize", "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](42, ctx.fileUrl ? 42 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_6__.OrderDetailsBarComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfButtonComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfCheckboxComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfModelComponent, _monorepo_auth__WEBPACK_IMPORTED_MODULE_5__.AuthComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberFormatterDirective],
    styles: [".order-login-container[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  width: 100%;\n  padding: 0 10px;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 14px;\n  background-color: #F5F9FD;\n  border: var(--hf-card-tertiary-border-width) solid var(--hf-card-tertiary-border);\n  border-radius: var(--hf-card-primary-border-radius);\n}\n\n.order-login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.sub-heading[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.sub-heading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.username-inputs-wrapper[_ngcontent-%COMP%], .contact-inputs-wrapper[_ngcontent-%COMP%], .optional-inputs-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 20px;\n  row-gap: 10px;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n@media screen and (max-width: 500px) {\n  .contact-inputs-wrapper[_ngcontent-%COMP%], .optional-inputs-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL29yZGVyLWxvZ2luL29yZGVyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vY2FwYWNpdG9yJTIwb2lsL21vbm9yZXBvL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL29yZGVyLWxvZ2luL29yZGVyLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTs7O0VBR0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0U7O0lBRUUsMEJBQUE7RUNDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY5RkQ7XHJcbiAgYm9yZGVyOiB2YXIoLS1oZi1jYXJkLXRlcnRpYXJ5LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhmLWNhcmQtcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLm9yZGVyLWxvZ2luLWNvbnRhaW5lciBmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMnB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWItaGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkaW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi51c2VybmFtZS1pbnB1dHMtd3JhcHBlcixcclxuLmNvbnRhY3QtaW5wdXRzLXdyYXBwZXIsXHJcbi5vcHRpb25hbC1pbnB1dHMtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgcm93LWdhcDogMTBweDtcclxufVxyXG5cclxuLm5leHQtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb250YWN0LWlucHV0cy13cmFwcGVyLFxyXG4gIC5vcHRpb25hbC1pbnB1dHMtd3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn0iLCIub3JkZXItbG9naW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY5RkQ7XG4gIGJvcmRlcjogdmFyKC0taGYtY2FyZC10ZXJ0aWFyeS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWhmLWNhcmQtdGVydGlhcnktYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGYtY2FyZC1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xufVxuXG4ub3JkZXItbG9naW4tY29udGFpbmVyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIycHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc3ViLWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc3ViLWhlYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udXNlcm5hbWUtaW5wdXRzLXdyYXBwZXIsXG4uY29udGFjdC1pbnB1dHMtd3JhcHBlcixcbi5vcHRpb25hbC1pbnB1dHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIHJvdy1nYXA6IDEwcHg7XG59XG5cbi5uZXh0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWN0LWlucHV0cy13cmFwcGVyLFxuICAub3B0aW9uYWwtaW5wdXRzLXdyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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

/***/ })

}]);
//# sourceMappingURL=219.js.map