"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var toleech_global_1 = require("../../globals/toleech.global");
var router_1 = require("@angular/router");
var angular2_toaster_1 = require("angular2-toaster");
var toleechApi_service_1 = require("../../services/toleechApi.service");
var angular2_recaptcha_1 = require("angular2-recaptcha");
var LoginComponent = (function () {
    function LoginComponent(router, toleechlocal, _fb, toasterService, toleechApi) {
        this.router = router;
        this.toleechlocal = toleechlocal;
        this._fb = _fb;
        this.toasterService = toasterService;
        this.toleechApi = toleechApi;
        this.submitted = false; // keep track on whether form is submitted
        this.events = []; // use later to display form changes
    }
    LoginComponent.prototype.ngOnInit = function () {
        // the short way
        this.loginForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
        });
    };
    LoginComponent.prototype.loginCheck = function () {
        this.captcha.execute();
    };
    LoginComponent.prototype.loginAction = function (token, model, isValid) {
        var _this = this;
        if (isValid) {
            this.submitted = true;
            this.toleechApi.login(model.name, model.password, token).subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.toleechlocal.login(data);
                    _this.router.navigate(['/torrents']);
                }
                else {
                    _this.submitted = false;
                    _this.toasterService.pop('error', 'خطا', 'نام کاربری یا رمز عبور اشتباه است!');
                }
            }, function (error) {
                _this.submitted = false;
                _this.toasterService.pop('error', 'خطا', 'خطایی رخ داده است، اتصال اینترنت خود چک کنید');
            });
            console.log(model, isValid);
        }
        else {
            console.log("invalidofsky");
            this.toasterService.pop('error', 'خطا', 'نام کاربری یا رمز عبور اشتباه است!');
        }
        this.captcha.reset();
    };
    __decorate([
        // use later to display form changes
        core_1.ViewChild(angular2_recaptcha_1.ReCaptchaComponent), 
        __metadata('design:type', angular2_recaptcha_1.ReCaptchaComponent)
    ], LoginComponent.prototype, "captcha", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'icons-cmp',
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, toleech_global_1.toleechSettings, forms_1.FormBuilder, angular2_toaster_1.ToasterService, toleechApi_service_1.toleechApi])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map