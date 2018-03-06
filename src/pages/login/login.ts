import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider';
import { HomePage } from '../home/home';

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
     * @param {UserProvider} _userProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private viewCtrl: ViewController,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private _userProvider: UserProvider
    ) {
        this.user = {
            'email': '',
            'password': '',
            'getToken': true
        }
        this.homePage = HomePage;
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
                    if (response) {
                        this.identity = response;
                        console.log(response.status);
                        if (this.identity.length <= 1) {
                            this.showError('message.server.error');
                        }
                        if (!this.identity.status) {
                            console.log(response.status);
                            //Save localstorage
                            localStorage.setItem('identity', JSON.stringify(this.identity));
                            //alert(JSON.parse(localStorage.getItem('identity')));
                            //Get token
                            this.user.getToken = null;
                            this._userProvider
                                .signIn(this.user)
                                .subscribe(
                                    response => {
                                        if (response) {
                                            this.token = response;

                                            if (this.identity.length <= 1) {
                                                this.showError('message.server.error');
                                            }
                                            if (!this.identity.status) {
                                                //Save localstorage
                                                localStorage.setItem('token', JSON.stringify(this.token));
                                                //alert(JSON.parse(localStorage.getItem('token')));
                                                this.navCtrl.push('HomePage');
                                            }
                                        } else {
                                            this.showError('message.access.denied');
                                        }
                                    },
                                    error => {
                                        this.showError(error);
                                    });
                        }
                    } else {
                        this.showError('message.access.denied')
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
        this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: 'message.fail',
            subTitle: text,
            buttons: ['OK']
        });

        alert.present(prompt);
    }

}
