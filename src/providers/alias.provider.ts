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

    newAlias() {
        alert("hola");
    }

    update(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
    }

    delete(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
    }

    search(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
    }
}