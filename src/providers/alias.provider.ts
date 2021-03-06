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
        this.getAliasAll();
    }

    /**
     * @returns {Observable<any>}
     */
    getAliasAll() {
        return this
            ._http.get(this.url + '/alias/all')
            .map(response => response.json());
    }

    /**
     *
     * @param token
     * @param id
     * @returns {Observable<any>}
     */
    getAliasByUser(token, id) {
        let params = 'authorization=' + token;
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});

        return this
            ._http.post(this.url + '/alias/' + id, params, {headers: headers})
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
     * @returns {Observable<any>}
     */
    editAlias(alias) {
        let json = JSON.stringify(alias);
        let params = 'json=' + json;
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});

        return this
            ._http.post(this.url + '/alias/edit/' + alias.id, params, {headers: headers})
            .map(response => response.json());
    }

    /**
     *
     * @param alias
     * @returns {Observable<any>}
     */
    deleteAlias(alias) {
        let params = '';
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});

        return this
            ._http.post(this.url + '/alias/delete/' + alias.id, params, {headers: headers})
            .map(response => response.json());
    }

}