import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { GLOBAL } from '../config/global';
import { AlertController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserProvider {

    url: string;
    identity: string;
    token: string;

    /**
     *
     * @param {Http} _http
     * @param {AlertController} alertCtrl
     * @param {Platform} platform
     * @param {Storage} storage
     */
    constructor(
        private _http: Http,
        private alertCtrl: AlertController,
        private platform: Platform,
        private storage: Storage
    ) {
        this.url = GLOBAL.url;
        //this.chargeStorage();
    }

    /**
     * @returns {Observable<any>}
     */
    getUsersAll() {
        return this
            ._http.get(this.url + '/user/all')
            .map(response => response.json());
    }

    /**
     *
     * @param user
     * @returns {Observable<any>}
     */
    signIn(user) {
        if (user.username === null || user.password === null) {
            return Observable.throw('message.insert.credentials');
        } else {
            let json = JSON.stringify(user);
            let params = "json=" + json;
            let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

            return this
                ._http.post(this.url + '/login', params, {headers: headers})
                .map(
                    response => response.json()
                );
        }
    }

    updateUser(userToUpdate) {
    }

    deleteUser(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
    }

    searchUser(id) {
        return this
            ._http.get(this.url)
            .map(res => res.json());
    }
}