import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "../../providers/user.provider";
import { User } from "../../models/user.model";

@Component({
    selector: 'page-user-list',
    templateUrl: 'user-list.html',
    providers: [
        UserProvider
    ]
})
export class UserListPage {

    public users : User;

    constructor(
        public navCtrl: NavController,
        private _userProvider: UserProvider,
    ) {
        this._userProvider.getAll();
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._userProvider.getAll().subscribe(
            response => {
                if (!response.error) {
                    this.users = response;
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
