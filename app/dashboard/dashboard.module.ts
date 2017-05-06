import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MODULE_COMPONENTS, MODULE_ROUTES} from "./dashboard.routes";
import {BrowserModule} from "@angular/platform-browser";
import {Http} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToasterModule} from "angular2-toaster";
import {ReCaptchaModule} from "angular2-recaptcha";

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES), BrowserModule, ReactiveFormsModule,FormsModule,ToasterModule,ReCaptchaModule

    ],
    declarations: [MODULE_COMPONENTS]
})

export class DashboardModule {
}
