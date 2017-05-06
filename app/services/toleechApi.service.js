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
/**
 * Created by azimaie2 on 5/3/2017.
 */
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/timeInterval");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/mergeMap");
var http_1 = require("@angular/http");
var toleechApi = (function () {
    function toleechApi(http) {
        this.http = http;
        this.baseUrl = 'http://127.0.0.1:8654/api/';
    }
    toleechApi.prototype.login = function (user, password, recaptcha) {
        return this._requestHelper('login', { user: user, password: password, recaptcha: recaptcha });
    };
    toleechApi.prototype.register = function (user, password, recaptcha) {
        return this._requestHelper('register', { user: user, password: password, recaptcha: recaptcha });
    };
    toleechApi.prototype._requestHelper = function (api, payload) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + api, 'payload=' + JSON.stringify(payload), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    toleechApi.prototype.extractData = function (res) {
        return res.json();
    };
    toleechApi.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    toleechApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], toleechApi);
    return toleechApi;
}());
exports.toleechApi = toleechApi;
//# sourceMappingURL=toleechApi.service.js.map