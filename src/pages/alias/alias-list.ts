import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alias} from '../../models/alias.model';
import { AliasProvider } from '../../providers/alias.provider';

@Component({
    selector: 'page-users',
    templateUrl: 'alias-list.html',
    providers: [
        AliasProvider
    ]
})
export class AliasListPage {

    public alias : Alias;

    constructor(
        public navCtrl: NavController,
        private _aliasProvider: AliasProvider,
    ) {
        this._aliasProvider.getAll();
    }

    ngOnInit() {
        this.getAlias();
    }

    getAlias() {
        this._aliasProvider.getAll().subscribe(
            response => {
                if (!response.error) {
                    this.alias = response;
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
