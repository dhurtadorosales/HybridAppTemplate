import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { UserNewPage } from '../user-new/user-new';
import { AliasListPage } from '../alias/alias-list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    usersPage : any = UsersPage;
    aliasListPage : any = AliasListPage;
    userNew : any = UserNewPage;

    constructor(public navCtrl: NavController) {

    }

}
