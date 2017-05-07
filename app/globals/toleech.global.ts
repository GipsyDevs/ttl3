/**
 * Created by pedram on 4/15/2017.
 */


'use strict';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
export class toleechSettings {
    private userLoggedInSourece = new BehaviorSubject<boolean>(false);
    userLoggedIn$ = this.userLoggedInSourece.asObservable();


    login(data) {
        if (data != null)
            localStorage.setItem("userinfo", JSON.stringify(data));
        this.userLoggedInSourece.next(true)
    }

    checkLogin() {
        if (this.userLoggedInSourece.getValue()) return true;
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
    }

    logout() {
        this.userLoggedInSourece.next(false);
        try {
            localStorage.removeItem("userinfo");
        }
    }
}

