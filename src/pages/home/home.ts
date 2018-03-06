import { Component } from '@angular/core';
import { MenuController, NavController} from 'ionic-angular';
import { UserListPage } from '../user/user-list/user-list';
import { UserNewPage } from '../user/user-new/user-new';
import { AliasListPage } from '../alias/alias-list/alias-list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    usersPage: any;
    aliasListPage: any;
    userNewPage: any;

    /**
     *
     * @param {NavController} navCtrl
     * @param {MenuController} menuCtrl
     */
    constructor(public navCtrl: NavController,
                private menuCtrl: MenuController
    ) {
        this.usersPage = UserListPage;
        this.aliasListPage = AliasListPage;
        this.userNewPage = UserNewPage;
    }

    /**
     *
     */
    showMenu(){
        this.menuCtrl.toggle();
    }

}
