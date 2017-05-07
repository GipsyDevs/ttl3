import {Component, OnInit} from "@angular/core";
import {PlatformLocation} from "@angular/common";
import {toleechSettings} from "./globals/toleech.global";

declare var $: any;

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    public login: boolean = false;

    ngOnInit() {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }

    constructor(location: PlatformLocation, private toleechlocal: toleechSettings) {
        toleechlocal.checkLogin();
        toleechlocal.userLoggedIn$.subscribe(
            eventlogin => {
                console.log(this.login);
                console.log(`login ${eventlogin} occured!`);
                this.login = eventlogin;
            });
        location.onPopState(() => {
            // $('.sidebar-wrapper .nav-container div').removeClass('.moving-tab');
            // $.getScript('../assets/js/material-dashboard-angular.js');
            console.log('pressed back!');

        });


    }


}
