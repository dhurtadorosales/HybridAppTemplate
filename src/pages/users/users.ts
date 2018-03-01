import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "../../providers/user.provider";
import { User } from "../../models/user.model";

@Component({
    selector: 'page-users',
    templateUrl: 'users.html',
    providers: [
        UserProvider
    ]
})
export class UsersPage {

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
                    console.log(response);
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
