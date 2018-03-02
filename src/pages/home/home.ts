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

    usersPage : any = UserListPage;
    aliasListPage : any = AliasListPage;
    userNew : any = UserNewPage;

    /**
     * @param {NavController} navCtrl
     */
    constructor(public navCtrl: NavController,
                private menuCtrl: MenuController
    ) {

    }

    /**
     *
     */
    showMenu(){
        this.menuCtrl.toggle();
    }

}
