import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AliasProvider } from '../../../providers/alias.provider';
import { FormBuilder } from '@angular/forms';
import { Alias } from '../../../models/alias.model';

@Component({
    selector: 'page-alias-edit',
    templateUrl: 'alias-edit.html',
})
export class AliasEditPage {

    alias: Alias;
    statusAlias: any;

    /**
     *
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {FormBuilder} formBuilder
     * @param {AliasProvider} _aliasProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private formBuilder: FormBuilder,
        private _aliasProvider: AliasProvider,
    ) {
        this.alias = new Alias(
            this.navParams.data.alias.id,
            this.navParams.data.alias.name,
            this.navParams.data.alias.origin,
            this.navParams.data.alias.user
        );
    }

    /**
     *
     */
    editAlias() {
        this._aliasProvider
            .editAlias(this.alias)
            .subscribe(
            response => {
                this.statusAlias = response.status;
                if (this.statusAlias != 'success') {
                    this.statusAlias = 'error';
                } else {
                    this.alias = response.data;
                }
            },
            error => {
                alert(<any>error);
            }
        );
    }

}
