import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { URL_SERVICES } from '../config/url.services';

@Injectable()
export class AliasProvider {

    public url: string;

    constructor(private _http: Http) {
        this.url = URL_SERVICES;
        this.getAll();
    }

    getAll() {
        return this
            ._http.get(this.url + '/api/alias/all')
            .map(res => res.json());
    }

    new(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
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