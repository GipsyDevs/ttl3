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
    toleechSettings.prototype.login = function (data) {
        if (data != null)
            localStorage.setItem("userinfo", JSON.stringify(data));
        this.userLoggedInSourece.next(true);
    };
    toleechSettings.prototype.checkLogin = function () {
        if (this.userLoggedInSourece.getValue())
            return true;
        try {
            console.log("Getting info...");
            if (JSON.parse(localStorage.getItem("userinfo")).status == true) {
                this.userLoggedInSourece.next(true);
                return true;
            }
        }
        catch (error) {
            return false;
        }
        return false;
    };
    toleechSettings.prototype.logout = function () {
        this.userLoggedInSourece.next(false);
        try {
            localStorage.removeItem("userinfo");
        }
        finally {
        }
    };
    return toleechSettings;
}());
exports.toleechSettings = toleechSettings;
//# sourceMappingURL=toleech.global.js.map