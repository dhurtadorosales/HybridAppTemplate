import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AliasProvider } from "../../../providers/alias.provider";
import { Alias } from '../../../models/alias.model';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'page-alias-new',
    templateUrl: 'alias-new.html',
    providers: [
        AliasProvider
    ]
})
export class AliasNewPage {

    public alias : Alias;
    public statusAlias;

    /**
     *
     * @param {NavController} navCtrl
     * @param {FormBuilder} formBuilder
     * @param {AliasProvider} _aliasProvider
     */
    constructor(
        public navCtrl: NavController,
        private formBuilder: FormBuilder,
        private _aliasProvider: AliasProvider,
    ) {
        this.alias = new Alias(1, '', '', null);
    }

    /**
     *
     */
    newAlias() {
        this._aliasProvider
            .newAlias(this.alias)
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
