import {Component, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReCaptchaComponent} from "angular2-recaptcha";
import {Router} from "@angular/router";
import {toleechSettings} from "../../globals/toleech.global";
import {ToasterService} from "angular2-toaster";
import {toleechApi} from "../../services/toleechApi.service";
import {Register} from "./register.interface";

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    public registerForm: FormGroup; // our model driven form
    public submitted: boolean = false; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

    constructor(private router: Router, public toleechlocal: toleechSettings, private _fb: FormBuilder, private toasterService: ToasterService, private toleechApi: toleechApi) {
    }

    ngOnInit() {

        // the short way
        this.registerForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        });
    }

    registerCheck() {
        console.log("Clicked");
        this.captcha.reset();
        this.captcha.execute();
    }

    registerAction(token, model: Register, isValid: boolean) {
        if (isValid) {
            this.submitted = true;
            this.toleechApi.register(model.name, model.password, token).subscribe(
                data => {
                    this.toleechlocal.login();
                    this.router.navigate(['/torrents']);
                },
                error => {
                    this.submitted = false;
                    this.toasterService.pop('error', 'خطا', 'خطایی رخ داده است، اتصال اینترنت خود چک کنید');
                }
            );

            console.log(model, isValid);
        } else {
            this.toasterService.pop('error', 'خطا', 'نام کاربری و رمز عبور را وارد کنید!');
        }
    }

}