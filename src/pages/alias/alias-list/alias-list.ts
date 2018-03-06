import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alias} from '../../../models/alias.model';
import { AliasProvider } from '../../../providers/alias.provider';
import { AliasEditPage } from '../alias-edit/alias-edit';
import { ToastProvider } from '../../../providers/toast.provider';

@Component({
    selector: 'page-alias-list',
    templateUrl: 'alias-list.html',
    providers: [
        AliasProvider,
        ToastProvider
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
     * @param {ToastProvider} _toastProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _aliasProvider: AliasProvider,
        private _toastProvider: ToastProvider
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
                    this._toastProvider.presentToast('message.alias.get_all.error');
                }
            },
            error => {
                this._toastProvider.presentToast(error);
            }
        );
    }

    /**
     * @param alias
     */
    deleteAlias(alias) {
        this._aliasProvider.deleteAlias(alias)
            .subscribe(
            response => {
                if (!response.error) {
                    this.getAliasAll();
                    this._toastProvider.presentToast('message.alias.delete.success');
                }
                else {
                    this._toastProvider.presentToast('message.alias.delete.error');
                }
            },
            error => {
                this._toastProvider.presentToast(error);
            }
        );
    }

}
