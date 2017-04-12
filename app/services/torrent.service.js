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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/timeInterval");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/mergeMap");
var http_1 = require("@angular/http");
var TorrentService = (function () {
    function TorrentService(http) {
        this.http = http;
        this.torrentListURL = 'http://192.168.1.5/sandbox.php';
        this.torrentAddURL = 'http://192.168.1.5/add.php';
    }
    TorrentService.prototype.getTorrents = function () {
        var _this = this;
        return Observable_1.Observable.timer(0, 500).flatMap(function () {
            return _this.http.get(_this.torrentListURL).map(_this.extractData).catch(_this.handleError);
        });
    };
    TorrentService.prototype.addTorrent = function (url) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.torrentAddURL, "url=" + url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TorrentService.prototype.extractData = function (res) {
        return res.json();
    };
    TorrentService.prototype.handleError = function (error) {
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
    TorrentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TorrentService);
    return TorrentService;
}());
exports.TorrentService = TorrentService;
//# sourceMappingURL=torrent.service.js.map