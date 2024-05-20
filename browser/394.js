"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[394],{

/***/ 1814:
/*!**********************************************!*\
  !*** ./libs/auth/src/auth/auth.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);










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

/***/ 9394:
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* reexport safe */ _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent)
/* harmony export */ });
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.component */ 1814);


/***/ })

}]);
//# sourceMappingURL=394.js.map