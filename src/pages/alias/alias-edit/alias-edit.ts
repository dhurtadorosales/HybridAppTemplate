import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AliasProvider } from '../../../providers/alias.provider';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'page-alias-edit',
    templateUrl: 'alias-edit.html',
})
export class AliasEditPage {

    constructor(
        public navCtrl: NavController,
        private formBuilder: FormBuilder,
        private _aliasProvider: AliasProvider,
    ) {
    }

    editAlias() {
        /*this._aliasProvider
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
            );*/
    }

}
