import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';
import { UserNewPage } from '../user-new/user-new';
import { AliasListPage } from '../alias-list/alias-list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    usersPage : any = UserListPage;
    aliasListPage : any = AliasListPage;
    userNew : any = UserNewPage;

    constructor(public navCtrl: NavController) {

    }

}
