import { Component } from '@angular/core';
import { HomePage } from '../../home/home';
import { UserListPage } from '../../user/user-list/user-list';
import { AliasListPage } from '../../alias/alias-list/alias-list';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1: any;
    tab2: any;
    tab3: any;

    constructor() {
        this.tab1 = HomePage;
        this.tab2 = UserListPage;
        this.tab3 = AliasListPage;
    }

}