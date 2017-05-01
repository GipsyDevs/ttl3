import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {toleechSettings} from "../../globals/toleech.global";
import { Login } from './login.interface';
import {Router} from "@angular/router";
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    public loginForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor(private router: Router,public toleechlocal: toleechSettings,private _fb: FormBuilder,private toasterService: ToasterService) {
    }

    ngOnInit() {

        // the short way
        this.loginForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        });
    }

    login(model: Login, isValid: boolean) {
        if(isValid) {
            this.submitted = true; // set form submit to true
            this.router.navigate(['/table']);

            // check if model is valid
            // if valid, call API to save customer
            console.log(model, isValid);
            this.toleechlocal.login();
            console.log(event);
            console.log("LogedIn!")
        }else{
            this.toasterService.pop('error', 'خطا', 'نام کاربری یا رمز عبور اشتباه است!');
        }
    }
}
