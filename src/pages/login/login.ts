import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    email: string = '';
    password: string = '';

    /**
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {ViewController} viewCtrl
     * @param {UserProvider} _user
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private viewCtrl: ViewController,
        private _user: UserProvider
    ) {
    }

    /**
     *
     */
    login(){

    }
}
