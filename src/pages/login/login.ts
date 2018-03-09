import { Component } from '@angular/core';
import {
    NavController, NavParams, ViewController, LoadingController, AlertController, Loading,
    Platform
} from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import {AliasListPage} from "../alias/alias-list/alias-list";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [UserProvider]
})
export class LoginPage {

    public user;
    public identity;
    public token;
    public loading;
    public homePage: any;

    /**
     *
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {ViewController} viewCtrl
     * @param {AlertController} alertCtrl
     * @param {LoadingController} loadingCtrl
     * @param {Platform} platform
     * @param {Storage} storage
     * @param {UserProvider} _userProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private viewCtrl: ViewController,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private platform: Platform,
        private storage: Storage,
        private _userProvider: UserProvider
    ) {
        this.user = {
            'username': '',
            'password': ''
        }
        this.homePage = HomePage;
        this.chargeStorage();
    }

    /**
     *
     */
    login(){
        //this.showLoading();
        this._userProvider
            .signIn(this.user)
            .subscribe(
                response => {
                    if (response.error) {
                        this.showError(response.error)
                    } else {
                        this.token = response.access_token;

                        //Save localstorage
                        this.saveStorage();
                        this.navCtrl.push(HomePage);
                    }
                },
                error => {
                    this.showError(error);
                }
            );
    }

    /**
     *
     */
    private saveStorage() {
        if (this.platform.is('cordova')) {
            //Mobile
            this.storage.set('token', this.token);

        } else {
            //Desktop
            if (this.token) {
                localStorage.setItem('token', JSON.stringify(this.token));
            } else {
                localStorage.removeItem('token');
            }

        }
    }

    /**
     *
     */
    logOut(){
        this.token = null;
        this.identity = null;

        //Save localstorage
        this.saveStorage();
    }

    /**
     *
     * @returns {Promise<any>}
     */
    chargeStorage() {
        let promise = new Promise(
            (resolve, reject) => {
                if (this.platform.is('cordova')) {
                    //mobile
                    this.storage
                        .ready()
                        .then(() => {
                            this.storage.get('token')
                                .then(token => {
                                    if (token) {
                                        this.token = token;
                                    }
                                });
                            });
                } else {
                    //desktop
                    if (localStorage.getItem('token')) {
                        //The item exists in localstorage
                        this.token = localStorage.getItem('token');
                    }
                    resolve();
                }
            });

        return promise;
    }

    /**
     *
     */
    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'message.wait',
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    /**
     *
     * @param text
     */
    showError(text) {
        let alert = this.alertCtrl.create({
            title: 'message.fail',
            subTitle: text,
            buttons: ['OK']
        });

        alert.present(prompt);
    }

}
