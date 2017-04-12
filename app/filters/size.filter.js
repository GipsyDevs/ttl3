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
 * Created by Pedram2 on 3/30/2017.
 */
var core_1 = require("@angular/core");
var SizePipe = (function () {
    function SizePipe() {
    }
    SizePipe.prototype.transform = function (bytes, precision) {
        if (precision === void 0) { precision = 1; }
        if (isNaN(parseFloat(bytes.toString())) || !isFinite(bytes))
            return '-';
        if (typeof precision === 'undefined')
            precision = 1;
        var units = ['بایت', 'کیلوبایت', 'مگابایت', 'گیگابایت', 'ترابایت', 'پتابایت'], number = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
    };
    SizePipe = __decorate([
        core_1.Pipe({
            name: 'size',
        }), 
        __metadata('design:paramtypes', [])
    ], SizePipe);
    return SizePipe;
}());
exports.SizePipe = SizePipe;
//# sourceMappingURL=size.filter.js.map