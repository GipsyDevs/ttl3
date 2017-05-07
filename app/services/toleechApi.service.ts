/**
 * Created by azimaie2 on 5/3/2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/timeInterval";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/mergeMap";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {ToleechUser} from "./ToleechUser";

@Injectable()
export class toleechApi {
    private baseUrl = 'http://127.0.0.1:8654/api/';

    constructor(private http: Http) {
    }

    public login(user: string, password: string, recaptcha: string): Observable<ToleechUser> {
        return this._requestHelper('Login', {user, password, recaptcha})
    }

    public register(user: string, password: string, recaptcha: string): Observable<ToleechUser> {
        return this._requestHelper('Register', {user, password, recaptcha})
    }

    private _requestHelper(api, payload) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.baseUrl + api, 'payload=' + JSON.stringify(payload), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}