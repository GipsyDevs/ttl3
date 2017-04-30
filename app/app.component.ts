import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Component, OnInit} from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {toleechSettings} from "./globals/toleech.global";

declare var $: any;

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    ngOnInit() {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }

    constructor(location: PlatformLocation) {

        location.onPopState(() => {
            // $('.sidebar-wrapper .nav-container div').removeClass('.moving-tab');
            // $.getScript('../assets/js/material-dashboard-angular.js');
            console.log('pressed back!');

        });

    }

    public isLogin() {
        return false;
    }
}
