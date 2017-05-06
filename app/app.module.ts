import {LOCALE_ID, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import {DashboardModule} from "./dashboard/dashboard.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {FooterModule} from "./shared/footer/footer.module";
import {NavbarModule} from "./shared/navbar/navbar.module";

import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./services/toleechGuard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {toleechSettings} from "./globals/toleech.global";
import {ToasterModule} from "angular2-toaster";
import {toleechApi} from "./services/toleechApi.service";
import {ReCaptchaModule} from "angular2-recaptcha";

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        HttpModule,
        ReCaptchaModule,
        ToasterModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
    ],
    declarations: [AppComponent, DashboardComponent],
    providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, {
        provide: LOCALE_ID,
        useValue: "fa"
    }, AuthGuard, toleechSettings,toleechApi],
    bootstrap: [AppComponent]
})
export class AppModule {
}
