/**
 * Created by pedram on 4/15/2017.
 */


'use strict';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
export class toleechSettings {
    private userLoggedInSourece = new BehaviorSubject<boolean>(false);
    userLoggedIn$ = this.userLoggedInSourece.asObservable();


    login() {
        this.userLoggedInSourece.next(true)
    }

    checkLogin() {
        return this.userLoggedInSourece.getValue();
    }

}

