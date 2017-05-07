import {Component, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {toleechSettings} from "../../globals/toleech.global";
import {Login} from "./login.interface";
import {Router} from "@angular/router";
import {ToasterService} from "angular2-toaster";
import {toleechApi} from "../../services/toleechApi.service";
import {ReCaptchaComponent} from "angular2-recaptcha";


@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    public loginForm: FormGroup; // our model driven form
    public submitted: boolean = false; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

    constructor(private router: Router, public toleechlocal: toleechSettings, private _fb: FormBuilder, private toasterService: ToasterService, private toleechApi: toleechApi) {
    }

    ngOnInit() {

        // the short way
        this.loginForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        });
    }

    loginCheck() {
        this.captcha.execute();
    }

    loginAction(token, model: Login, isValid: boolean) {
        if (isValid) {
            this.submitted = true;
            this.toleechApi.login(model.name, model.password, token).subscribe(
                data => {
                    console.log(data);
                    if (data.status == true) {
                        this.toleechlocal.login(data);
                        this.router.navigate(['/torrents']);
                    } else {
                        this.submitted = false;
                        this.toasterService.pop('error', 'خطا', 'نام کاربری یا رمز عبور اشتباه است!');
                    }
                },
                error => {
                    this.submitted = false;
                    this.toasterService.pop('error', 'خطا', 'خطایی رخ داده است، اتصال اینترنت خود چک کنید');
                }
            );

            console.log(model, isValid);
        } else {
            console.log("invalidofsky");
            this.toasterService.pop('error', 'خطا', 'نام کاربری یا رمز عبور اشتباه است!');
        }
        this.captcha.reset();
    }
}
