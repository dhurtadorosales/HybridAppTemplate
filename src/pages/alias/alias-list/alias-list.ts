import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alias} from '../../../models/alias.model';
import { AliasProvider } from '../../../providers/alias.provider';
import { AliasEditPage } from '../alias-edit/alias-edit';

@Component({
    selector: 'page-alias-list',
    templateUrl: 'alias-list.html',
    providers: [
        AliasProvider
    ]
})
export class AliasListPage {

    alias: Alias;
    aliasEditPage: any;

    /**
     *
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {AliasProvider} _aliasProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _aliasProvider: AliasProvider,
    ) {
        this.aliasEditPage = AliasEditPage;
        this.getAliasAll();
    }

    /**
     *
     */
    getAliasAll() {
        this._aliasProvider.getAliasAll().subscribe(
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

    deleteAlias() {
        alert("hola");
    }

}
