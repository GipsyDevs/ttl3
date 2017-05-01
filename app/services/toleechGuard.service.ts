import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {toleechSettings} from "../globals/toleech.global";
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private tlsetting: toleechSettings) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.tlsetting.checkLogin())
             return true;
         this.router.navigate(['/login']);
        return false;

    }
}