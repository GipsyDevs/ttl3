import {Component, OnInit} from "@angular/core";
import {ROUTES} from "../../sidebar/sidebar-routes.config";
import {MenuType} from "../../sidebar/sidebar.metadata";
import {Location, PlatformLocation} from "@angular/common";
import {toleechSettings} from "../../globals/toleech.global";

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    public login: boolean = false;
    private listTitles: any[];
    location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle.menuType !== MenuType.BRAND);
    }

    constructor(location: PlatformLocation, private toleechlocal: toleechSettings) {
        toleechlocal.checkLogin();
        toleechlocal.userLoggedIn$.subscribe(
            eventlogin => {
                console.log(this.login);
                console.log(`login ${eventlogin} occured!`);
                this.login = eventlogin;
            });
    }

    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'داشبرد';
    }
}
