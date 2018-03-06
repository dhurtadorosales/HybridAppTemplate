import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user.provider';
import { User } from '../../../models/user.model';

@Component({
    selector: 'page-user-list',
    templateUrl: 'user-list.html',
    providers: [
        UserProvider
    ]
})

export class UserListPage {

    public users: User;

    /**
     * @param {NavController} navCtrl
     * @param {UserProvider} _userProvider
     */
    constructor(
        public navCtrl: NavController,
        private _userProvider: UserProvider,
    ) {
        this.getUsers();
    }

    /**
     *
     */
    getUsers() {
        this._userProvider
            .getUsersAll()
            .subscribe(
            response => {
                if (!response.error) {
                    this.users = response;
                }
                else {
                    alert('error.connection');
                }
            },
            error => {
                alert(<any>error);
            }
        );
    }

}
