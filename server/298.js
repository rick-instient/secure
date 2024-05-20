"use strict";
exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 52298:
/*!************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/user-account/user-account.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAccountComponent: () => (/* binding */ UserAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/shared.service */ 53936);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/cookie.helper */ 26546);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 32403);
/* harmony import */ var _shared_components_address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/address/address.component */ 80700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 21099);













class UserAccountComponent {
  get email() {
    return this.userDetailsForm.get('email');
  }
  get firstName() {
    return this.userDetailsForm.get('firstName');
  }
  get lastName() {
    return this.userDetailsForm.get('lastName');
  }
  get phoneNumber() {
    return this.userDetailsForm.get('phoneNumber');
  }
  get backupPhoneNumber() {
    return this.userDetailsForm.get('backupPhoneNumber');
  }
  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get cfNewPassword() {
    return this.changePasswordForm.get('cfNewPassword');
  }
  constructor(sharedService, cookieHelper, http, toastService) {
    this.sharedService = sharedService;
    this.cookieHelper = cookieHelper;
    this.http = http;
    this.toastService = toastService;
    this.userDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.sharedService.emailKey)]),
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(20)]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(20)]),
      phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(14), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.sharedService.phoneNumberKey)]),
      backupPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [(0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(14), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.sharedService.phoneNumberKey)])
    });
    this.emailIM = 'Invalid Email Address';
    this.emailMT = '';
    this.firstNameIM = 'Invalid First Name';
    this.firstNameMT = '';
    this.lastNameIM = 'Invalid Last Name';
    this.lastNameMT = '';
    this.phoneNumberIM = 'Invalid Phone Number';
    this.phoneNumberMT = '';
    this.backupPhoneNumberIM = 'Invalid Backup Phone Number';
    this.backupPhoneNumberMT = '';
    this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(20), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.noWhitespaceValidator)()]),
      newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(20), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.noWhitespaceValidator)()]),
      cfNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.maxLengthRestriction)(20), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.noWhitespaceValidator)()])
    }, {
      validators: [_monorepo_utils__WEBPACK_IMPORTED_MODULE_2__.confirmPasswordValidator]
    });
    this.oldPasswordInvalidMsg = 'Invalid Old Password';
    this.oldPasswordMsgType = '';
    this.newPasswordInvalidMsg = 'Invalid New Password';
    this.newPasswordMsgType = '';
    this.cfNewPasswordInvalidMsg = 'Invalid Confirm New Password';
    this.cfNewPasswordMsgType = '';
    this.passwordButtonText = 'CHANGE PASSWORD';
    this.isPasswordButtonDisabled = false;
  }
  ngOnInit() {
    this.callUserSettingApi();
  }
  callUserSettingApi() {
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url}customer/account/settings?userId=${this.cookieHelper.getUserID()}`;
    this.http.get(url).subscribe({
      next: response => {
        this.userSettingData = response;
        this.email.setValue(this.userSettingData['email']);
        this.firstName.setValue(this.userSettingData['firstName']);
        this.lastName.setValue(this.userSettingData['lastName']);
        this.phoneNumber.setValue(this.userSettingData['phoneNumber']);
        this.backupPhoneNumber.setValue(this.userSettingData['backupPhoneNumber']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
  validateUserDetailsForm() {
    if (this.userDetailsForm.invalid) {
      if (this.email.invalid) {
        this.email.markAsTouched({
          onlySelf: true
        });
        this.emailMT = 'error';
        if (this.email.errors?.['required']) {
          this.emailIM = 'Email is required';
        } else if (this.email.errors?.['pattern']) {
          this.emailIM = 'Invalid Email Address';
        }
        let vaildEmail = this.email.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.emailIM = '';
            this.emailMT = '';
            vaildEmail.unsubscribe();
          }
        });
      }
      if (this.firstName.invalid) {
        this.firstName.markAsTouched({
          onlySelf: true
        });
        this.firstNameMT = 'error';
        if (this.firstName.errors?.['required']) {
          this.firstNameIM = 'First Name is required';
        } else if (this.firstName.errors?.['minlength']) {
          this.firstNameIM = 'First Name should be atleast 3 characters';
        }
        let vaildFirstName = this.firstName.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.firstNameIM = '';
            this.firstNameMT = '';
            vaildFirstName.unsubscribe();
          }
        });
      }
      if (this.lastName.invalid) {
        this.lastName.markAsTouched({
          onlySelf: true
        });
        this.lastNameMT = 'error';
        if (this.lastName.errors?.['required']) {
          this.lastNameIM = 'First Name is required';
        } else if (this.lastName.errors?.['minlength']) {
          this.lastNameIM = 'Last Name should be atleast 3 characters';
        }
        let vaildLastName = this.lastName.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.lastNameIM = '';
            this.lastNameMT = '';
            vaildLastName.unsubscribe();
          }
        });
      }
      if (this.phoneNumber.invalid) {
        this.phoneNumber.markAsTouched({
          onlySelf: true
        });
        this.phoneNumberMT = 'error';
        if (this.phoneNumber.errors?.['required']) {
          this.phoneNumberIM = 'Phone Number is required';
        } else if (this.phoneNumber.errors?.['pattern']) {
          this.phoneNumberIM = 'Invalid Phone Number';
        }
        let vaildphoneNumber = this.phoneNumber.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.phoneNumberMT = '';
            this.phoneNumberIM = '';
            vaildphoneNumber.unsubscribe();
          }
        });
      }
      if (this.backupPhoneNumber.invalid) {
        this.backupPhoneNumber.markAsTouched({
          onlySelf: true
        });
        this.backupPhoneNumberMT = 'error';
        if (this.backupPhoneNumber.errors?.['pattern']) {
          this.backupPhoneNumberIM = 'Invalid Backup Phone Number';
        }
        let vaildbackupPhoneNumber = this.backupPhoneNumber.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.backupPhoneNumberMT = '';
            this.backupPhoneNumberIM = '';
            vaildbackupPhoneNumber.unsubscribe();
          }
        });
      }
      return;
    }
    this.saveUserSetting();
  }
  saveUserSetting() {
    this.userSettingData['email'] = this.email.value;
    this.userSettingData['firstName'] = this.firstName.value;
    this.userSettingData['lastName'] = this.lastName.value;
    this.userSettingData['phoneNumber'] = this.phoneNumber.value;
    this.userSettingData['backupPhoneNumber'] = this.backupPhoneNumber.value;
    let data = JSON.parse(JSON.stringify(this.userSettingData));
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url}customer/account/settings`;
    this.http.put(url, data).subscribe({
      next: () => {
        this.toastService.toastMessage.next({
          title: 'Success',
          msg: 'User Details Updated Successfully',
          type: 'success'
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }
  validateChangePasswordForm() {
    if (this.changePasswordForm.invalid) {
      if (this.oldPassword.invalid) {
        this.oldPassword.markAsTouched({
          onlySelf: true
        });
        this.oldPasswordMsgType = 'error';
        if (this.oldPassword.errors?.['required']) {
          this.oldPasswordInvalidMsg = 'Old Password is required';
        } else if (this.oldPassword.errors?.['minlength']) {
          this.oldPasswordInvalidMsg = 'Old Password must be at least 8 characters';
        }
        let vaildOldPassword = this.oldPassword.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.oldPasswordInvalidMsg = '';
            this.oldPasswordMsgType = '';
            vaildOldPassword.unsubscribe();
          }
        });
      }
      if (this.newPassword.invalid) {
        this.newPassword.markAsTouched({
          onlySelf: true
        });
        this.newPasswordMsgType = 'error';
        if (this.newPassword.errors?.['required']) {
          this.newPasswordInvalidMsg = 'New Password is required';
        } else if (this.oldPassword.errors?.['minlength']) {
          this.newPasswordInvalidMsg = 'New Password must be at least 8 characters';
        }
        let vaildNewPassword = this.newPassword.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.newPasswordInvalidMsg = '';
            this.newPasswordMsgType = '';
            vaildNewPassword.unsubscribe();
          }
        });
      }
      if (this.cfNewPassword.invalid) {
        this.cfNewPassword.markAsTouched({
          onlySelf: true
        });
        this.cfNewPasswordMsgType = 'error';
        if (this.cfNewPassword.errors?.['required']) {
          this.cfNewPasswordInvalidMsg = 'Confirm New Password is required';
        } else if (this.cfNewPassword.errors?.['minlength']) {
          this.cfNewPasswordInvalidMsg = 'Confirm New Password must be at least 8 characters';
        }
        let vaildCfNewPassword = this.cfNewPassword.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.cfNewPasswordMsgType = '';
            this.cfNewPasswordInvalidMsg = '';
            vaildCfNewPassword.unsubscribe();
          }
        });
      }
      if (this.changePasswordForm.errors?.['PasswordNoMatch']) {
        this.cfNewPasswordMsgType = 'error';
        this.cfNewPasswordInvalidMsg = 'Password does not match';
        let matchNewPassword = this.changePasswordForm.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.cfNewPasswordMsgType = '';
            this.cfNewPasswordInvalidMsg = '';
            matchNewPassword.unsubscribe();
          }
        });
      }
      return;
    }
    this.changePassword();
  }
  changePassword() {
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url}account/changepassword`;
    const data = {
      id: this.cookieHelper.getUserID(),
      oldPassword: this.oldPassword.value,
      password: this.newPassword.value
    };
    this.http.put(url, data).subscribe({
      next: () => {
        this.changePasswordForm.reset();
        this.toastService.toastMessage.next({
          title: `Success`,
          msg: 'Password Changed',
          type: 'success'
        });
      },
      error: error => {
        if (error['error']['errors']['fieldName'] == 'OldPassword') {
          this.toastService.toastMessage.next({
            title: `Invalid Password`,
            msg: `${error['errors']['errorMessage']}`,
            type: 'error'
          });
        }
      }
    });
  }
  static #_ = this.ɵfac = function UserAccountComponent_Factory(t) {
    return new (t || UserAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_3__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: UserAccountComponent,
    selectors: [["app-user-account"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 59,
    consts: [[1, "user-account-container"], [1, "user-account-card", 3, "cardStyle"], [1, "hf-heading-5", "hf-dark-font", 2, "margin-bottom", "15px"], [1, "form-wrapper"], [3, "inputLabel", "inputPlaceholder", "inputType", "inputValue", "inputDescription", "descriptionType"], ["phoneNumberFormatter", "", 3, "inputLabel", "inputType", "inputValue", "inputPlaceholder", "inputDescription", "descriptionType"], ["type", "button", 3, "click", "buttonStyle", "buttonSize", "labelText"], [1, "hf-heading-5", "hf-dark-font", 2, "margin-bottom", "15px", "margin-top", "40px"], [3, "inputLabel", "inputType", "inputPlaceholder", "isPassword", "inputValue", "inputDescription", "descriptionType"], ["type", "submit", 3, "click", "buttonStyle", "buttonSize", "labelText", "isDisabled"]],
    template: function UserAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "hf-card", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "hf-input", 4)(6, "hf-input", 4)(7, "hf-input", 4)(8, "hf-input", 5)(9, "hf-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "hf-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserAccountComponent_Template_hf_button_click_10_listener() {
          return ctx.validateUserDetailsForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Saved Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-address");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "hf-input", 8)(18, "hf-input", 8)(19, "hf-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "hf-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserAccountComponent_Template_hf_button_click_20_listener() {
          return ctx.validateChangePasswordForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cardStyle", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "Email")("inputPlaceholder", "Enter Email Address")("inputType", "email")("inputValue", ctx.email)("inputDescription", ctx.emailIM)("descriptionType", ctx.emailMT);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "First Name")("inputPlaceholder", "Enter Your First Name")("inputType", "text")("inputValue", ctx.firstName)("inputDescription", ctx.firstNameIM)("descriptionType", ctx.firstNameMT);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "Last Name")("inputPlaceholder", "Enter Your Last Name")("inputType", "text")("inputValue", ctx.lastName)("inputDescription", ctx.lastNameIM)("descriptionType", ctx.lastNameMT);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "Contact Phone Number")("inputType", "text")("inputValue", ctx.phoneNumber)("inputPlaceholder", "Enter Your Phone Number")("inputDescription", ctx.phoneNumberIM)("descriptionType", ctx.phoneNumberMT);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "Backup Phone Number")("inputType", "text")("inputValue", ctx.backupPhoneNumber)("inputPlaceholder", "Enter Backup Phone Number")("inputDescription", ctx.backupPhoneNumberIM)("descriptionType", ctx.backupPhoneNumberMT);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "large")("labelText", "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "Old password")("inputType", "password")("inputPlaceholder", "Enter Your Old Password")("isPassword", true)("inputValue", ctx.oldPassword)("inputDescription", ctx.oldPasswordInvalidMsg)("descriptionType", ctx.oldPasswordMsgType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "New password")("inputType", "password")("inputPlaceholder", "Enter Your New Password")("isPassword", true)("inputValue", ctx.newPassword)("inputDescription", ctx.newPasswordInvalidMsg)("descriptionType", ctx.newPasswordMsgType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputLabel", "Confirm new password")("inputType", "password")("inputPlaceholder", "Enter Your New Password")("isPassword", true)("inputValue", ctx.cfNewPassword)("inputDescription", ctx.cfNewPasswordInvalidMsg)("descriptionType", ctx.cfNewPasswordMsgType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "large")("labelText", ctx.passwordButtonText)("isDisabled", ctx.isPasswordButtonDisabled);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_components_address_address_component__WEBPACK_IMPORTED_MODULE_5__.AddressComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.HfButtonComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberFormatterDirective],
    styles: [".user-account-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-account-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin-top: 30px;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3BhZ2VzL3VzZXItYWNjb3VudC91c2VyLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jYXBhY2l0b3IlMjBvaWwvbW9ub3JlcG8vYXBwcy9oZWF0ZmxlZXQvc2VjdXJlL3NyYy9hcHAvcGFnZXMvdXNlci1hY2NvdW50L3VzZXItYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItYWNjb3VudC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWFjY291bnQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59IiwiLnVzZXItYWNjb3VudC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlci1hY2NvdW50LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZvcm0td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 80700:
/*!**************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/shared/components/address/address.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressComponent: () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cookie.helper */ 26546);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 32403);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/ui */ 447);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/utils */ 69484);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared.service */ 53936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 21099);















const _c0 = a0 => ({
  "disabled": a0
});
function AddressComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "hf-card", 2)(1, "div")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No Saved Addresses");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardStyle", "secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Please add an address with zip code ", ctx_r1.orderParams["zipCode"], "");
  }
}
function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "hf-radio", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputLabel", "")("inputValue", ctx_r1.selectedAddressId)("radioValue", address_r4.id)("isDisabled", !ctx_r1.matchZipCode(address_r4))("radioSize", "large");
  }
}
function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](address_r4.deliveryStreet1);
  }
}
function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "hf-card", 2)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Conditional_3_Template, 2, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const address_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectAddress(address_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Conditional_7_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 19)(13, "hf-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template_hf_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const address_r4 = ctx_r4.$implicit;
      const i_r6 = ctx_r4.$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editAddress(address_r4, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "hf-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template_hf_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const address_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openDeleteAddressModal(address_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "hf-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template_hf_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const address_r4 = ctx_r4.$implicit;
      const i_r6 = ctx_r4.$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editAddress(address_r4, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "hf-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template_hf_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const address_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openDeleteAddressModal(address_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const address_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx_r1.showSelectButton && !ctx_r1.matchZipCode(address_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](3, ctx_r1.showSelectButton ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](address_r4.deliveryNickName ? address_r4.deliveryNickName : address_r4.deliveryStreet1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](7, address_r4.deliveryNickName ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", address_r4.deliveryCity, ", ", address_r4.deliveryState, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](address_r4.deliveryZIP);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "extrasmall")("labelText", "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "secondary")("buttonSize", "extrasmall")("labelText", "DELETE")("colorTheme", "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "extrasmall")("labelText", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "secondary")("buttonSize", "extrasmall")("labelText", "")("colorTheme", "danger");
  }
}
function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {}
function AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    const addressFormTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", addressFormTemplate_r7);
  }
}
function AddressComponent_Conditional_2_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_0_Template, 18, 24, "hf-card", 2)(1, AddressComponent_Conditional_2_Conditional_0_For_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const i_r6 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, i_r6 !== ctx_r1.currentEditAddressIndex ? 0 : 1);
  }
}
function AddressComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, AddressComponent_Conditional_2_Conditional_0_For_1_Template, 2, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.userAddresses);
  }
}
function AddressComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddressComponent_Conditional_2_Conditional_0_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, !ctx_r1.isEditAddress || ctx_r1.isEditAddress ? 0 : -1);
  }
}
function AddressComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "hf-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Conditional_3_Conditional_0_Template_hf_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleAddAddressForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "extrasmall")("labelText", "+  ADD A NEW ADDRESS");
  }
}
function AddressComponent_Conditional_3_Conditional_1_ng_template_0_Template(rf, ctx) {}
function AddressComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddressComponent_Conditional_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const addressFormTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", addressFormTemplate_r7);
  }
}
function AddressComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddressComponent_Conditional_3_Conditional_0_Template, 2, 3, "div", 27)(1, AddressComponent_Conditional_3_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, !ctx_r1.showAddAddressForm ? 0 : 1);
  }
}
function AddressComponent_ng_template_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "hf-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddressComponent_ng_template_4_Conditional_10_Template_hf_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTaxExemptModel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputId", "oil tax exempt")("inputValue", ctx_r1.oilTaxexempt)("inputLabel", "Tax Exempt");
  }
}
function AddressComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "hf-card", 2)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hf-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "hf-input", 32)(7, "hf-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "hf-input", 30)(9, "hf-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddressComponent_ng_template_4_Conditional_10_Template, 1, 3, "hf-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 34)(12, "hf-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_ng_template_4_Template_hf_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleAddAddressForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "hf-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_ng_template_4_Template_hf_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.validateAddAddressForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardStyle", "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.addressFormHeaderTxt, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputLabel", "Street")("inputType", "text")("inputValue", ctx_r1.deliveryStreet1)("inputDescription", ctx_r1.deliveryStreet1IM)("descriptionType", ctx_r1.deliveryStreet1MT);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputLabel", "Unit/Apartment")("inputType", "text")("inputValue", ctx_r1.deliveryStreet2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputLabel", "ZIP")("inputType", "number")("inputValue", ctx_r1.deliveryZIP)("inputDescription", ctx_r1.deliveryZIPIM)("descriptionType", ctx_r1.deliveryZIPMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputLabel", "Nickname (optional)")("inputType", "text")("inputValue", ctx_r1.deliveryNickName)("inputDescription", ctx_r1.deliveryNickNameIM)("descriptionType", ctx_r1.deliveryNickNameMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputId", "tax type")("inputValue", ctx_r1.customerTaxType)("inputLabel", "Residence");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](10, !ctx_r1.customerTaxType.value ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "secondary")("buttonSize", "medium")("labelText", "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "medium")("labelText", "SAVE")("isDisabled", ctx_r1.disableSaveButton);
  }
}
function AddressComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
class AddressComponent {
  get deliveryStreet1() {
    return this.addAddressForm.get('deliveryStreet1');
  }
  get deliveryStreet2() {
    return this.addAddressForm.get('deliveryStreet2');
  }
  get deliveryZIP() {
    return this.addAddressForm.get('deliveryZIP');
  }
  get deliveryNickName() {
    return this.addAddressForm.get('deliveryNickName');
  }
  get customerTaxType() {
    return this.addAddressForm.get('customerTaxType');
  }
  get oilTaxexempt() {
    return this.addAddressForm.get('oilTaxexempt');
  }
  get base64() {
    return this.addAddressForm.get('base64');
  }
  constructor(cookieHelper, http, toastService, storeService, sharedService) {
    this.cookieHelper = cookieHelper;
    this.http = http;
    this.toastService = toastService;
    this.storeService = storeService;
    this.sharedService = sharedService;
    this.showSelectButton = false;
    this.showAllSelectButton = false;
    this.userAddresses = [];
    this.isLoadAddress = true;
    this.selectedAddressId = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.showAddAddressForm = false;
    this.addressFormHeaderTxt = 'Add New Address';
    this.isEditAddressForm = false;
    this.showDeleteAddressModal = false;
    this.addressToDelete = {};
    this.isZipCodeExists = false;
    this.disableSaveButton = false;
    this.showNotAddressError = false;
    this.showTaxExemptModel = false;
    this.isEditAddress = false;
    this.currentEditAddressIndex = -1;
    this.addAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      deliveryStreet1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]),
      deliveryStreet2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      deliveryZIP: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), (0,_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.maxLengthRestriction)(5)]),
      deliveryNickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]),
      customerTaxType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true),
      oilTaxexempt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
      base64: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
    this.deliveryStreet1IM = 'Invalid Street';
    this.deliveryStreet1MT = '';
    this.deliveryZIPIM = 'Invalid Zip Code';
    this.deliveryZIPMT = '';
    this.deliveryNickNameIM = 'Invalid Nick Name';
    this.deliveryNickNameMT = '';
  }
  ngOnInit() {
    this.callDeliveryAddressApi();
    this.storeService.getValueFromStore('orderParams', orderParams => {
      this.orderParams = orderParams;
    });
    this.selectAddressIdSubs = this.selectedAddressId.valueChanges.subscribe(() => {
      if (this.showAllSelectButton) {
        let matchingAddress = this.userAddresses.find(address => address['id'] == this.selectedAddressId.value);
        if (matchingAddress) {
          this.showAddAddressForm = false;
          this.isEditAddressForm = false;
          this.showNotAddressError = false;
          this.addressWhichEditting = {};
          this.deliveryZIP.setValue(matchingAddress['deliveryZIP']);
        }
        this.sharedService.selectedAddress.next(matchingAddress);
      }
      this.saveAddressIdOnLocalStorage();
    });
  }
  callDeliveryAddressApi() {
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/order/delivery-address?userId=${this.cookieHelper.getUserID()}`;
    this.http.get(url).subscribe({
      next: response => {
        this.userAddresses = response;
        if (this.userAddresses.length === 0) {
          this.addressFormHeaderTxt = 'Add New Address';
        }
        if (this.showSelectButton) {
          this.selectDefaultAddress();
        }
        this.isLoadAddress = false;
      },
      error: error => {
        console.log('error', error);
      }
    });
  }
  selectDefaultAddress() {
    let deliveryZip = '';
    if (this.orderParams) {
      deliveryZip = this.orderParams['zipCode'];
    } else {
      deliveryZip = this.cookieHelper.getCookie(_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.Cookie.ZIP_CODE);
      if (deliveryZip === '') {
        deliveryZip = '13107';
      }
    }
    let matchingAddress = this.userAddresses.find(address => address.billingZIP == deliveryZip);
    if (matchingAddress) {
      this.selectedAddressId.setValue(matchingAddress['id']);
      this.sharedService.selectedAddress.next(matchingAddress);
    } else {
      this.addressFormHeaderTxt = 'Add New Address';
      this.sharedService.selectedAddress.next({});
      this.deliveryZIP.setValue(deliveryZip);
      this.showAddAddressForm = true;
      this.showNotAddressError = true;
    }
  }
  selectAddress(address) {
    if (this.showSelectButton && this.matchZipCode(address)) {
      this.selectedAddressId.setValue(address.id);
      this.sharedService.selectedAddress.next(address);
    }
  }
  matchZipCode(address) {
    if (this.showAllSelectButton) {
      return true;
    }
    if (address.deliveryZIP == this.orderParams['zipCode']) {
      return true;
    } else {
      return false;
    }
  }
  saveAddressIdOnLocalStorage() {
    this.storeService.getValueFromStore('orderParams', orderParams => {
      let orderParamsUpdate = {
        ...orderParams
      };
      orderParamsUpdate['addressId'] = this.selectedAddressId.value;
      let matchingAddress = this.userAddresses.find(address => address['id'] == this.selectedAddressId.value);
      orderParamsUpdate['street1'] = matchingAddress['billingStreet1'];
      this.storeService.addValueToStore('orderParams', orderParamsUpdate);
    });
  }
  validateAddAddressForm() {
    if (this.addAddressForm.invalid) {
      if (this.deliveryStreet1.invalid) {
        this.deliveryStreet1.markAsTouched({
          onlySelf: true
        });
        this.deliveryStreet1MT = 'error';
        if (this.deliveryStreet1.errors?.['required']) {
          this.deliveryStreet1IM = 'Street is required';
        } else if (this.deliveryStreet1.errors?.['minlength']) {
          this.deliveryStreet1IM = 'Street should be atleast 3 characters';
        }
        let vaildDeliveryStreet1 = this.deliveryStreet1.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.deliveryStreet1IM = '';
            this.deliveryStreet1MT = '';
            vaildDeliveryStreet1.unsubscribe();
          }
        });
      }
      if (this.deliveryZIP.invalid) {
        this.deliveryZIP.markAsTouched({
          onlySelf: true
        });
        this.deliveryZIPMT = 'error';
        if (this.deliveryZIP.errors?.['required']) {
          this.deliveryZIPIM = 'Zip is required';
        } else if (this.deliveryZIP.errors?.['minlength']) {
          this.deliveryZIPIM = 'Zip must be 5-digit code.';
        }
        let vaildZip = this.deliveryZIP.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.deliveryZIPMT = '';
            this.deliveryZIPIM = '';
            vaildZip.unsubscribe();
          }
        });
      }
      if (this.deliveryNickName.invalid) {
        this.deliveryNickName.markAsTouched({
          onlySelf: true
        });
        this.deliveryNickNameMT = 'error';
        if (this.deliveryNickName.errors?.['minlength']) {
          this.deliveryNickNameIM = 'Nick Name should be atleast 3 characters';
        }
        let vaildDeliveryNickName = this.deliveryNickName.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.deliveryNickNameIM = '';
            this.deliveryNickNameMT = '';
            vaildDeliveryNickName.unsubscribe();
          }
        });
      }
      return;
    }
    this.disableSaveButton = true;
    this.checkZipCode();
  }
  editAddress(address, index) {
    this.isEditAddress = true;
    this.currentEditAddressIndex = index;
    this.addressFormHeaderTxt = 'Edit Address';
    this.addressWhichEditting = address;
    this.showAddAddressForm = true;
    this.isEditAddressForm = true;
    this.deliveryStreet1.setValue(address.deliveryStreet1);
    this.deliveryStreet2.setValue(address.deliveryStreet2);
    this.deliveryZIP.setValue(address.deliveryZIP);
    this.deliveryNickName.setValue(address.deliveryNickName);
    this.customerTaxType.setValue(address.customerTaxType == 1 ? true : false);
    this.oilTaxexempt.setValue(address.oilTaxexempt);
    this.base64.setValue(address.base64);
  }
  checkZipCode() {
    const zipCodeCheckApiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/offer/zipcodecheck?zipCode=${this.deliveryZIP.value}&ipAddress=undefined&isAgent=false`;
    this.http.get(zipCodeCheckApiUrl).subscribe({
      next: response => {
        this.isZipCodeExists = response['zipCodeExists'];
        if (this.isZipCodeExists) {
          this.zipCodeCheckApiData = response;
          if (this.isEditAddressForm) {
            this.updateAddress();
          } else {
            this.saveAddress();
          }
        } else {
          this.toastService.toastMessage.next({
            title: `Invalid ZIP Code`,
            msg: 'Please enter a valid ZIP code.',
            type: 'error'
          });
        }
      },
      error: err => {
        this.disableSaveButton = false;
        console.log(err);
      }
    });
  }
  saveAddress() {
    const body = {
      userId: this.cookieHelper.getUserID(),
      deliveryStreet1: this.deliveryStreet1.value,
      deliveryStreet2: this.deliveryStreet2.value,
      deliveryCity: this.zipCodeCheckApiData['city'],
      deliveryState: this.zipCodeCheckApiData['state'],
      deliveryZIP: this.deliveryZIP.value,
      deliveryCounty: this.zipCodeCheckApiData['county'],
      deliveryFips: this.zipCodeCheckApiData['fips'],
      CustomerTaxType: this.customerTaxType ? 1 : 2,
      DeliveryNickName: this.deliveryNickName.value,
      BillingAddressSameAsDeliveryAddress: false,
      // if this.deliveryZIP.value == this.cookie.zipCode then send true vaule (add zipcode in cookie)
      oilTaxexempt: this.oilTaxexempt.value,
      base64: this.base64.value
    };
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/order/delivery-address`;
    this.http.put(url, body).subscribe({
      next: () => {
        this.disableSaveButton = false;
        this.showAddAddressForm = false;
        this.showNotAddressError = false;
        this.toastService.toastMessage.next({
          title: `Success`,
          msg: 'Address Saved',
          type: 'success'
        });
        this.clearAddressForm();
        this.callDeliveryAddressApi();
      },
      error: err => {
        this.disableSaveButton = false;
        console.log(err);
      }
    });
  }
  updateAddress() {
    const body = {
      userId: this.cookieHelper.getUserID(),
      deliveryStreet1: this.deliveryStreet1.value,
      deliveryStreet2: this.deliveryStreet2.value,
      deliveryCity: this.zipCodeCheckApiData['city'],
      deliveryState: this.zipCodeCheckApiData['state'],
      deliveryZIP: this.deliveryZIP.value,
      deliveryCounty: this.zipCodeCheckApiData['county'],
      deliveryFips: this.zipCodeCheckApiData['fips'],
      CustomerTaxType: this.customerTaxType ? 1 : 2,
      DeliveryNickName: this.deliveryNickName.value,
      id: this.addressWhichEditting['id'],
      BillingAddressSameAsDeliveryAddress: this.addressWhichEditting['billingAddressSameAsDeliveryAddress'],
      oilTaxexempt: this.oilTaxexempt.value,
      base64: this.base64.value
    };
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/order/delivery-address`;
    this.http.put(url, body).subscribe({
      next: () => {
        this.showAddAddressForm = false;
        this.isEditAddressForm = false;
        this.showNotAddressError = false;
        this.addressWhichEditting = {};
        this.toastService.toastMessage.next({
          title: `Success`,
          msg: 'Address Updated',
          type: 'success'
        });
        this.clearAddressForm();
        this.callDeliveryAddressApi();
        this.disableSaveButton = false;
      },
      error: err => {
        console.log(err);
        this.disableSaveButton = false;
      }
    });
  }
  toggleAddAddressForm() {
    if (this.isEditAddress) {
      this.isEditAddress = false;
      this.currentEditAddressIndex = -1;
    }
    if (this.showAddAddressForm) {
      this.clearAddressForm();
    }
    if (this.isEditAddressForm) {
      this.isEditAddressForm = false;
      this.addressWhichEditting = {};
    }
    if (this.showSelectButton && !this.showAddAddressForm && !this.isEditAddressForm) {
      this.addressFormHeaderTxt = 'Add New Address';
      if (this.orderParams.hasOwnProperty('zipCode')) {
        this.deliveryZIP.setValue(this.orderParams['zipCode']);
      }
    }
    this.showAddAddressForm = !this.showAddAddressForm;
  }
  clearAddressForm() {
    if (this.isEditAddress) {
      this.isEditAddress = false;
      this.currentEditAddressIndex = -1;
    }
    this.addAddressForm.reset();
    this.customerTaxType.setValue(true);
    this.oilTaxexempt.setValue(false);
  }
  openDeleteAddressModal(address) {
    this.addressToDelete = address;
    this.showDeleteAddressModal = true;
  }
  deleteAddress() {
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}customer/order/delete-address`;
    const body = {
      userId: this.cookieHelper.getUserID(),
      id: this.addressToDelete['id']
    };
    this.http.post(url, body).subscribe({
      next: () => {
        this.showDeleteAddressModal = false;
        this.addressToDelete = {};
        this.toggleAddAddressForm();
        this.callDeliveryAddressApi();
        this.toastService.toastMessage.next({
          title: `Deleted`,
          msg: 'Address Deleted',
          type: 'success'
        });
      },
      error: error => {
        console.log('error', error);
      }
    });
  }
  openTaxExemptModel() {
    if (this.oilTaxexempt.value) {
      this.fileUrl = undefined;
      this.showTaxExemptModel = true;
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
  taxExemptSubmit(fileUrl) {
    if (fileUrl && fileUrl.split(',')[1] && fileUrl.split(',')[1] !== '') {
      this.oilTaxexempt.setValue(true);
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
  closeTaxExemptModel(isClosed) {
    if (isClosed) {
      this.showTaxExemptModel = false;
      if (!this.fileUrl || this.fileUrl.split(',')[1] === '') {
        this.oilTaxexempt.setValue(false);
      }
    }
  }
  modelClosed(isClosed) {
    if (isClosed) {
      this.addressToDelete = {};
      this.showDeleteAddressModal = false;
    }
  }
  ngOnDestroy() {
    if (this.selectAddressIdSubs) {
      this.selectAddressIdSubs.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AddressComponent_Factory(t) {
    return new (t || AddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_cookie_helper__WEBPACK_IMPORTED_MODULE_0__.CookieHelper), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_monorepo_utils__WEBPACK_IMPORTED_MODULE_3__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AddressComponent,
    selectors: [["app-address"]],
    inputs: {
      showSelectButton: "showSelectButton",
      showAllSelectButton: "showAllSelectButton"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 16,
    consts: [["addressFormTemplate", ""], [1, "address-container"], [3, "cardStyle"], [3, "modelClosed", "showModel", "modelSize", "modelTitle"], [1, "hf-body-1"], [2, "margin-top", "15px", "margin-bottom", "15px"], [1, "block"], ["type", "button", 3, "click", "buttonStyle", "buttonSize", "labelText"], ["modelTitle", "Tax Exempt", 3, "modelClosed", "showModel", "modelSize"], [1, "modal-container"], ["type", "file", 3, "change"], ["alt", "Uploaded file", "width", "100%", "height", "300px", 2, "object-fit", "scale-down", 3, "src"], ["labelText", "SUBMIT", "buttonSize", "medium", 3, "click"], [1, "address-wrapper", "hf-secondary-text-color"], [1, "address-content", 3, "ngClass"], [1, "select-wrapper"], [1, "text-wrapper", 2, "cursor", "pointer", 3, "click"], [1, "block", "hf-dark-font", "hf-body-1"], [1, "block", "hf-body-3"], [1, "edit-button-wrapper", "hide-mobile"], ["type", "button", "iconStyle", "iconleft", "iconUrl", "/assets/icons/edit-icon.svg", 3, "click", "buttonStyle", "buttonSize", "labelText"], ["type", "button", "iconStyle", "iconleft", "iconUrl", "/assets/icons/delete-icon.svg", 3, "click", "buttonStyle", "buttonSize", "labelText", "colorTheme"], [1, "edit-button-wrapper", "show-mobile"], ["type", "button", "buttonType", "icononly", "iconUrl", "/assets/icons/edit-icon.svg", 3, "click", "buttonStyle", "buttonSize", "labelText"], ["type", "button", "buttonType", "icononly", "iconUrl", "/assets/icons/delete-icon.svg", 3, "click", "buttonStyle", "buttonSize", "labelText", "colorTheme"], [3, "inputLabel", "inputValue", "radioValue", "isDisabled", "radioSize"], [3, "ngTemplateOutlet"], [1, "add-address-button-wrapper"], [1, "hf-heading-5", "hf-dark-font", "hf-secondary-text-color", 2, "margin-bottom", "24px"], [1, "address-form"], [3, "inputLabel", "inputType", "inputValue", "inputDescription", "descriptionType"], [1, "input-wrapper"], [3, "inputLabel", "inputType", "inputValue"], [3, "inputId", "inputValue", "inputLabel"], [1, "button-wrapper"], ["type", "button", 3, "click", "buttonStyle", "buttonSize", "labelText", "isDisabled"], [3, "change", "inputId", "inputValue", "inputLabel"]],
    template: function AddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddressComponent_Conditional_1_Template, 6, 2, "hf-card", 2)(2, AddressComponent_Conditional_2_Template, 1, 1)(3, AddressComponent_Conditional_3_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddressComponent_ng_template_4_Template, 14, 31, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "hf-model", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("modelClosed", function AddressComponent_Template_hf_model_modelClosed_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.modelClosed($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Are you sure you want to delete this address?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5)(11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "hf-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Template_hf_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.deleteAddress());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "hf-model", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("modelClosed", function AddressComponent_Template_hf_model_modelClosed_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeTaxExemptModel($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9)(20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddressComponent_Template_input_change_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onFileSelected($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddressComponent_Conditional_21_Template, 1, 1, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "hf-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddressComponent_Template_hf_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.taxExemptSubmit(ctx.fileUrl));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](1, ctx.showNotAddressError ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, !ctx.isLoadAddress ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](3, !ctx.isEditAddress ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showModel", ctx.showDeleteAddressModal)("modelSize", "medium")("modelTitle", "Delete Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.addressToDelete["deliveryStreet1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.addressToDelete["deliveryCity"], ", ", ctx.addressToDelete["deliveryState"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.addressToDelete["deliveryZIP"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonStyle", "primary")("buttonSize", "medium")("labelText", "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showModel", ctx.showTaxExemptModel)("modelSize", "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](21, ctx.fileUrl ? 21 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCardComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfInputComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfButtonComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfCheckboxComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfRadioComponent, _monorepo_ui__WEBPACK_IMPORTED_MODULE_2__.HfModelComponent],
    styles: [".address-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.address-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.address-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n.edit-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.edit-button-wrapper[_ngcontent-%COMP%]   hf-button[_ngcontent-%COMP%] {\n  width: 106px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\n.add-address-button-wrapper[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  width: 100%;\n  text-align: left;\n  max-width: 192px;\n}\n\n.button-wrapper[_ngcontent-%COMP%], .checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.address-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.show-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .edit-button-wrapper[_ngcontent-%COMP%]   hf-button[_ngcontent-%COMP%] {\n    width: 32px;\n  }\n  .show-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaGVhdGZsZWV0L3NlY3VyZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NhcGFjaXRvciUyMG9pbC9tb25vcmVwby9hcHBzL2hlYXRmbGVldC9zZWN1cmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFFSTtJQUNJLFdBQUE7RUNBTjtFREdFO0lBQ0ksYUFBQTtFQ0ROO0VESUU7SUFDSSxhQUFBO0VDRk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkcmVzcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLmFkZHJlc3MtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uZWRpdC1idXR0b24td3JhcHBlciBoZi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwNnB4O1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmFkZC1hZGRyZXNzLWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1heC13aWR0aDogMTkycHg7XHJcbn1cclxuXHJcbi5idXR0b24td3JhcHBlcixcclxuLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5zaG93LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuZWRpdC1idXR0b24td3JhcHBlciBoZi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaG93LW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAuaGlkZS1tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIuYWRkcmVzcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYWRkcmVzcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hZGRyZXNzLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZWxlY3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZWRpdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZWRpdC1idXR0b24td3JhcHBlciBoZi1idXR0b24ge1xuICB3aWR0aDogMTA2cHg7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYWRkLWFkZHJlc3MtYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDE5MnB4O1xufVxuXG4uYnV0dG9uLXdyYXBwZXIsXG4uY2hlY2tib3gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmFkZHJlc3MtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLnNob3ctbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5lZGl0LWJ1dHRvbi13cmFwcGVyIGhmLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDMycHg7XG4gIH1cbiAgLnNob3ctbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5oaWRlLW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

};
;
//# sourceMappingURL=298.js.map