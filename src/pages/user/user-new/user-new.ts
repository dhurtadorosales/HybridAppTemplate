import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "../../../providers/user.provider";
import { User } from '../../../models/user.model';

@Component({
    selector: 'page-user-new',
    templateUrl: 'user-new.html',
    providers: [
        UserProvider
    ]
})
export class UserNewPage {

    public users: User;

    constructor(
        public navCtrl: NavController,
        private _userProvider: UserProvider,
    ) {
        this._userProvider.getUsersAll();
    }

    newUser() {
        this._userProvider.getUsersAll().subscribe(
            response => {
                if (!response.error) {
                    this.users = response.users;
                    console.log(this.users);
                }
                else {
                    alert('Error connection!');
                }
            },
            error => {
                alert(<any>error);
            }
        );
    }

}
