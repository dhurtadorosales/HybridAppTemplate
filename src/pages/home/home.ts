import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";
import {UserNewPage} from "../user-new/user-new";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    usersPage : any = UsersPage;
    userNew : any = UserNewPage;

    constructor(public navCtrl: NavController) {

    }

}
