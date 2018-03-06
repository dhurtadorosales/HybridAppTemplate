import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from '../config/global';

@Injectable()
export class AliasProvider {

    public url: string;

    /**
     * @param {Http} _http
     */
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
        this.getAll();
    }

    /**
     * @returns {Observable<any>}
     */
    getAll() {
        return this
            ._http.get(this.url + '/alias/all')
            .map(response => response.json());
    }

    /**
     * @param alias
     * @returns {Observable<any>}
     */
    newAlias(alias) {
        let json = JSON.stringify(alias);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});

        return this
            ._http.post(this.url + '/alias/new', params, {headers: headers})
            .map(response => response.json());
    }

    /**
     *
     * @param alias
     * @param id
     * @returns {Observable<any>}
     */
    editAlias(alias, id) {
        let json = JSON.stringify(alias);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});

        return this
            ._http.post(this.url + '/alias/edit/' + id, params, {headers: headers})
            .map(response => response.json());
    }

    deleteAlias(alias, id) {
        let json = JSON.stringify(alias);
        let params = '';
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});

        return this
            ._http.post(this.url + '/alias/delete/' + id, params, {headers: headers})
            .map(response => response.json());
    }

    search(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
    }
}