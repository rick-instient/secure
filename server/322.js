"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 78322:
/*!**********************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/order-login/order-login.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderLoginComponent: () => (/* binding */ OrderLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/shared.service */ 53936);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 32403);
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/enums */ 85866);
/* harmony import */ var _monorepo_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @monorepo/auth */ 80275);
/* harmony import */ var _shared_components_order_details_bar_order_details_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/order-details-bar/order-details-bar.component */ 85144);
/* harmony import */ var _shared_utils_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/urls */ 14753);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 21099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 61504);







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

/***/ 85144:
/*!**********************************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/components/order-details-bar/order-details-bar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderDetailsBarComponent: () => (/* binding */ OrderDetailsBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 61504);








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

/***/ 83835:
/*!**********************************************!*\
  !*** ./libs/auth/src/auth/auth.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 21099);










function AuthComponent_Conditional_0_ng_template_4_Template(rf, ctx) {}
function AuthComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "hf-card")(2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AuthComponent_Conditional_0_ng_template_4_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const loginTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", loginTemplate_r1);
  }
}
function AuthComponent_Conditional_1_ng_template_0_Template(rf, ctx) {}
function AuthComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const loginTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", loginTemplate_r1);
  }
}
function AuthComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "hf-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function AuthComponent_ng_template_2_Conditional_0_Template_hf_input_keyup_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.isEmailValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "hf-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_ng_template_2_Conditional_0_Template_hf_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.isEmailValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputValue", ctx_r2.emailControl)("descriptionType", ctx_r2.emailMT)("inputDescription", ctx_r2.emailIM);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelText", ctx_r2.emailButtonLabel)("isDisabled", ctx_r2.isEmailButtonDisabled);
  }
}
function AuthComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter your password for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "hf-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function AuthComponent_ng_template_2_Conditional_1_Template_hf_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.isPasswordValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "hf-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_ng_template_2_Conditional_1_Template_hf_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.isPasswordValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "hf-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_ng_template_2_Conditional_1_Template_hf_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r2.templateActiveSection = ctx_r2.template.OTP;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.callSendOtpApi(ctx_r2.emailControl.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.emailControl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputValue", ctx_r2.passwordControl)("isPassword", true)("descriptionType", ctx_r2.passwordMT)("inputDescription", ctx_r2.passwordIM);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelText", ctx_r2.loginButtonLabel)("isDisabled", ctx_r2.isLoginButtonDisabled);
  }
}
function AuthComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "We just emailed a OTP code to");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15)(7, "hf-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function AuthComponent_ng_template_2_Conditional_2_Template_hf_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.isOtpValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "hf-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_ng_template_2_Conditional_2_Template_hf_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.isOtpValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_ng_template_2_Conditional_2_Template_p_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.callSendOtpApi(ctx_r2.emailControl.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Resend Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "hf-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_ng_template_2_Conditional_2_Template_hf_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.templateActiveSection = ctx_r2.template.EMAIL);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.authService.userEmail, " It will be valid for 10 minutes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputValue", ctx_r2.otpControl)("descriptionType", ctx_r2.otpMT)("inputDescription", ctx_r2.otpIM);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelText", ctx_r2.otpButtonLabel)("isDisabled", ctx_r2.isOtpButtonDisabled);
  }
}
function AuthComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthComponent_ng_template_2_Conditional_0_Template, 4, 5, "div", 4)(1, AuthComponent_ng_template_2_Conditional_1_Template, 12, 7, "div", 5)(2, AuthComponent_ng_template_2_Conditional_2_Template, 12, 6, "div", 6);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r2.templateActiveSection === ctx_r2.template.EMAIL ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r2.templateActiveSection === ctx_r2.template.PASSWORD ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx_r2.templateActiveSection === ctx_r2.template.OTP ? 2 : -1);
  }
}
var Template;
(function (Template) {
  Template[Template["EMAIL"] = 0] = "EMAIL";
  Template[Template["PASSWORD"] = 1] = "PASSWORD";
  Template[Template["OTP"] = 2] = "OTP";
})(Template || (Template = {}));
class AuthComponent {
  constructor(http, toastService, authService) {
    this.http = http;
    this.toastService = toastService;
    this.authService = authService;
    this.template = Template;
    this.templateActiveSection = this.template.EMAIL;
    this.emailButtonLabel = 'Continue with email';
    this.isEmailButtonDisabled = false;
    this.loginButtonLabel = 'LOGIN';
    this.isLoginButtonDisabled = false;
    this.otpButtonLabel = 'VERIFY';
    this.isOtpButtonDisabled = false;
    this.modelAuth = false;
    this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.authService.emailKey), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.noWhitespaceValidator)()]);
    this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
    this.otpControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.maxLengthRestriction)(6)]);
    this.emailIM = '';
    this.emailMT = '';
    this.passwordIM = '';
    this.passwordMT = '';
    this.otpIM = '';
    this.otpMT = '';
  }
  ngOnInit() {
    if (!this.authService.isSetAuthCalled) {
      console.error('Auth service not set, Please set auth service on app component');
    } else {
      this.checkEmailInfo();
    }
  }
  checkEmailInfo() {
    this.emailInfo = this.authService.checkEmailInfo$.subscribe(res => {
      if (res.email != '') {
        this.emailControl.setValue(res.email);
        this.isEmailValid();
      }
    });
  }
  isEmailValid() {
    if (this.emailControl.invalid) {
      this.emailMT = "error";
      if (this.emailControl?.errors['required']) {
        this.emailIM = "Email is required";
      }
      if (this.emailControl?.errors['pattern']) {
        this.emailIM = "Invalid email";
      }
      const validEmail = this.emailControl.statusChanges.subscribe(status => {
        if (status === 'VALID') {
          this.emailIM = '';
          this.emailMT = '';
          validEmail.unsubscribe();
        }
      });
    } else {
      this.callEmailValidationApi(this.emailControl.value);
    }
  }
  isPasswordValid() {
    if (this.passwordControl.invalid) {
      this.passwordMT = "error";
      if (this.passwordControl?.errors['required']) {
        this.passwordIM = "Password is required";
      }
      const validPassword = this.passwordControl.statusChanges.subscribe(status => {
        if (status === 'VALID') {
          this.passwordIM = '';
          this.passwordMT = '';
          validPassword.unsubscribe();
        }
      });
    } else {
      this.callloginApi('login');
    }
  }
  isOtpValid() {
    if (this.otpControl.invalid) {
      this.otpMT = "error";
      if (this.otpControl?.errors['required']) {
        this.otpIM = "Otp is required";
      }
      if (this.otpControl?.errors['maxlength']) {
        this.otpIM = "Invalid otp, otp should be 6 digits";
      }
      const validOtp = this.otpControl.statusChanges.subscribe(status => {
        if (status === 'VALID') {
          this.otpIM = '';
          this.otpMT = '';
          validOtp.unsubscribe();
        }
      });
    } else {
      this.callloginApi('login-with-otp');
    }
  }
  callloginApi(mode) {
    this.isLoginButtonDisabled = true;
    this.loginButtonLabel = 'LOGGING IN...';
    this.otpButtonLabel = 'VERIFYING...';
    this.isOtpButtonDisabled = true;
    const loginApiUrl = `${this.authService.apiUrl}authenticate/${mode}?api-version=${this.authService.apiVersion}`;
    let body = {};
    if (mode === 'login') {
      body = {
        "username": this.authService.getEncryptedValue(this.emailControl.value),
        "password": this.authService.getEncryptedValue(this.passwordControl.value)
      };
    } else {
      body = {
        "username": this.emailControl.value,
        "password": this.passwordControl.value
      };
    }
    this.loginApiSubscription = this.http.post(loginApiUrl, body).subscribe({
      next: res => {
        this.authService.isLoginDone.next({
          isLoginDone: true,
          loginResponse: res
        });
        this.isLoginButtonDisabled = false;
        this.loginButtonLabel = 'LOGIN';
      },
      error: err => {
        console.log(err);
        this.authService.isLoginDone.next({
          isLoginDone: false,
          loginResponse: null
        });
        this.isLoginButtonDisabled = false;
        this.loginButtonLabel = 'LOGIN';
      }
    });
  }
  callEmailValidationApi(email) {
    this.emailButtonLabel = 'Checking...';
    this.isEmailButtonDisabled = true;
    const emailValidationApiUrl = `${this.authService.apiUrl}Authenticate/check-auto-password-email?api-version=${this.authService.apiVersion}`;
    const payload = {
      "Email": email
    };
    this.emailValidationApiSubscription = this.http.post(emailValidationApiUrl, payload).subscribe({
      next: res => {
        if (!res['isEmailValid']) {
          this.emailMT = "error";
          this.emailIM = "Invalid email, try other email";
          this.validEmail = this.emailControl.statusChanges.subscribe(status => {
            if (status === 'VALID') {
              this.emailIM = '';
              this.emailMT = '';
              this.validEmail.unsubscribe();
            }
          });
          this.authService.checkEmailInfo.next({
            email: '',
            isVaild: false
          });
        } else {
          this.authService.checkEmailInfo.next({
            email: '',
            isVaild: true
          });
          if (!res['isOtpLogin']) {
            this.templateActiveSection = this.template.PASSWORD;
          } else {
            this.templateActiveSection = this.template.OTP;
            this.callSendOtpApi(this.emailControl.value);
          }
        }
        this.emailButtonLabel = 'Continue with email';
        this.isEmailButtonDisabled = false;
      },
      error: err => {
        this.authService.checkEmailInfo.next({
          email: '',
          isVaild: false
        });
        console.log(err);
        this.emailButtonLabel = 'Continue with email';
        this.isEmailButtonDisabled = false;
      }
    });
  }
  callSendOtpApi(email) {
    // https://dev-api.heatfleet.com/api/Authenticate/send-otp?api-version=
    const sendOtpApiUrl = `${this.authService.apiUrl}Authenticate/send-otp?api-version=${this.authService.apiVersion}`;
    let payload = {
      "Email": email
    };
    this.sendOtpApiSubscription = this.http.post(sendOtpApiUrl, payload).subscribe({
      next: () => {
        this.toastService.toastMessage.next({
          title: 'Success',
          msg: 'OTP sent successfully',
          type: 'success'
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
  ngOnDestroy() {
    if (this.emailValidationApiSubscription) {
      this.emailValidationApiSubscription.unsubscribe();
    }
    if (this.loginApiSubscription) {
      this.loginApiSubscription.unsubscribe();
    }
    if (this.sendOtpApiSubscription) {
      this.sendOtpApiSubscription.unsubscribe();
    }
    if (this.emailInfo) {
      this.emailInfo.unsubscribe();
    }
    if (this.validEmail) {
      this.validEmail.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AuthComponent_Factory(t) {
    return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuthComponent,
    selectors: [["lib-login"]],
    inputs: {
      modelAuth: "modelAuth"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 1,
    consts: [["loginTemplate", ""], [1, "login-container"], [1, "hf-heading-3", "hf-dark-font", 2, "margin-bottom", "20px"], [3, "ngTemplateOutlet"], [1, "template1"], [1, "template2"], [1, "template3"], ["inputType", "email", "inputLabel", "E-mail Address", "inputPlaceholder", "Enter Email Here", 3, "keyup.enter", "inputValue", "descriptionType", "inputDescription"], ["hidden", "", "type", "password"], ["buttonSize", "large", 3, "click", "labelText", "isDisabled"], [1, "instructions"], ["hidden", "", "type", "email"], ["inputType", "password", "inputLabel", "Password", "inputPlaceholder", "Enter Password Here", 3, "keyup.enter", "inputValue", "isPassword", "descriptionType", "inputDescription"], [1, "text-align-center"], ["buttonStyle", "secondary", "labelText", "E-MAIL ME A CODE", "buttonSize", "large", 3, "click"], [1, "otp-action"], ["inputType", "number", "inputLabel", "OTP Code", "inputPlaceholder", "Enter OTP Code Here", 3, "keyup.enter", "inputValue", "descriptionType", "inputDescription"], [1, "text-align-center", 2, "cursor", "pointer", 3, "click"], ["buttonStyle", "secondary", "labelText", "BACK TO SIGN-IN", "buttonSize", "large", 3, "click"]],
    template: function AuthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthComponent_Conditional_0_Template, 5, 1, "div", 1)(1, AuthComponent_Conditional_1_Template, 1, 1)(2, AuthComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, !ctx.modelAuth ? 0 : 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfButtonComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__.HfCardComponent],
    styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto;\n  margin-top: 80px;\n}\n\n.template1[_ngcontent-%COMP%], .template2[_ngcontent-%COMP%], .template3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.otp-action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYXV0aC9zcmMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vY2FwYWNpdG9yJTIwb2lsL21vbm9yZXBvL2xpYnMvYXV0aC9zcmMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTs7O0VBR0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4udGVtcGxhdGUxLFxyXG4udGVtcGxhdGUyLFxyXG4udGVtcGxhdGUzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ub3RwLWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4vLyBVdGlscyBjbGFzc1xyXG4udGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLnRlbXBsYXRlMSxcbi50ZW1wbGF0ZTIsXG4udGVtcGxhdGUzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ub3RwLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 80275:
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* reexport safe */ _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent)
/* harmony export */ });
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.component */ 83835);


/***/ })

};
;
//# sourceMappingURL=322.js.map