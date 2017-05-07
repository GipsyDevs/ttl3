import {Component, OnInit} from "@angular/core";
import {ROUTES} from "./sidebar-routes.config";
import {MenuType} from "./sidebar.metadata";
import {toleechSettings} from "../globals/toleech.global";
import {Router} from "@angular/router";

declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {
        $.getScript('../../assets/js/material-dashboard-angular.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    }

    constructor(private router: Router, private toleechlocal: toleechSettings) {
    }

    private logout() {
        console.log("LogOutClicked");
        this.toleechlocal.logout();
        this.router.navigate(['/login']);
    }
}
