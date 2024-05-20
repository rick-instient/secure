"use strict";
(self["webpackChunksecure"] = self["webpackChunksecure"] || []).push([[775],{

/***/ 775:
/*!************************************************************************************!*\
  !*** ./apps/heatfleet/secure/src/app/pages/user-account/user-account.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAccountComponent: () => (/* binding */ UserAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/shared.service */ 2939);
/* harmony import */ var _monorepo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/ui */ 9478);
/* harmony import */ var _monorepo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/utils */ 7031);
/* harmony import */ var _shared_services_cookie_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/cookie.helper */ 3915);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 6732);
/* harmony import */ var _shared_components_address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/address/address.component */ 2493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);













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

/***/ })

}]);
//# sourceMappingURL=775.js.map