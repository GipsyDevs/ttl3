/**
 * Created by pedram on 4/15/2017.
 */
'use strict';
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var toleechSettings = (function () {
    function toleechSettings() {
        this.userLoggedInSourece = new BehaviorSubject_1.BehaviorSubject(false);
        this.userLoggedIn$ = this.userLoggedInSourece.asObservable();
    }
    toleechSettings.prototype.login = function () {
        this.userLoggedInSourece.next(true);
    };
    toleechSettings.prototype.checkLogin = function () {
        return this.userLoggedInSourece.getValue();
    };
    return toleechSettings;
}());
exports.toleechSettings = toleechSettings;
//# sourceMappingURL=toleech.global.js.map