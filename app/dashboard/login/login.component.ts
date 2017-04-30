import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {toleechSettings} from "../../globals/toleech.global";

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    loginUser(event) {
        console.log(toleechSettings.toleechAuth)
        toleechSettings.toleechAuth = true;
        console.log(event);
        console.log("LogedIn!")
    }
}
