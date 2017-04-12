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
var common_1 = require("@angular/common");
var TimeAgoPipe = (function () {
    function TimeAgoPipe() {
        this.maxPeriod = 365 * 24 * 60 * 60 * 1000;
        this.afterMaxDateFormat = 'medium';
    }
    TimeAgoPipe.prototype.transform = function (value) {
        console.log(value);
        var diff = new Date().getTime() - new Date(value).getTime();
        if (diff > this.maxPeriod) {
            'fa';
            var datePipe = new common_1.DatePipe('fa');
            return datePipe.transform(value, this.afterMaxDateFormat);
        }
        var period = {
            ثانیه: 1000,
            دقیقه: 60 * 1000,
            ساعت: 60 * 60 * 1000,
            روز: 24 * 60 * 60 * 1000,
            هفته: 7 * 24 * 60 * 1000 * 60,
            ماه: 30 * 24 * 60 * 1000 * 60,
            سال: 365 * 24 * 60 * 1000 * 60
        }, i, j;
        for (i in period) {
            if (diff < period[i]) {
                return this.makeupStr(j || 'ثانیه', Math.round(diff / (period[j] || 1000)));
            }
            j = i;
        }
        return this.makeupStr(i, Math.round(diff / period[i]));
    };
    TimeAgoPipe.prototype.makeupStr = function (unit, n) {
        return n + ' ' + unit + ' قبل';
    };
    TimeAgoPipe = __decorate([
        core_1.Pipe({
            name: 'timeago',
        }), 
        __metadata('design:paramtypes', [])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=timeago.filter.js.map