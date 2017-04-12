import {Injectable} from "@angular/core";
import {Torrent} from "./torrent";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/timeInterval";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/mergeMap";
import {Headers, Http, RequestOptions, Response} from "@angular/http";

@Injectable()
export class TorrentService {
    private torrentListURL = 'http://192.168.1.5/sandbox.php';
    private torrentAddURL = 'http://192.168.1.5/add.php';

    constructor(private http: Http) {
    }

    getTorrents(): Observable<Torrent[]> {
        return Observable.timer(0, 500).flatMap(() => {

            return this.http.get(this.torrentListURL).map(this.extractData).catch(this.handleError);
        });
    }

    public addTorrent(url: string) {

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.torrentAddURL, "url=" + url, options)
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