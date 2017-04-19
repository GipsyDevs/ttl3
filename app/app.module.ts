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

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        HttpModule,
        RouterModule.forRoot([])
    ],
    declarations: [AppComponent, DashboardComponent],
    providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, {
        provide: LOCALE_ID,
        useValue: "fa"
    }, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
