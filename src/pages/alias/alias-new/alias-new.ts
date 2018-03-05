import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AliasProvider } from "../../../providers/alias.provider";
import { User } from '../../../models/user.model';

@Component({
    selector: 'page-alias-new',
    templateUrl: 'alias-new.html',
    providers: [
        AliasProvider
    ]
})
export class AliasNewPage {

    public users : User;

    constructor(
        public navCtrl: NavController,
        private _aliasProvider: AliasProvider,
    ) {
    }

    newAlias() {
        /*this._aliasProvider.newAlias().subscribe(
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
        );*/

        this._aliasProvider.newAlias();
    }

}
