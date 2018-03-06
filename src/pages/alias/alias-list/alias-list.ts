import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import { Alias } from '../../../models/alias.model';
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
    loading: any;

    /**
     *
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {AlertController} alertCtrl
     * @param {LoadingController} loadingCtrl
     * @param {AliasProvider} _aliasProvider
     * @param {ToastProvider} _toastProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private _aliasProvider: AliasProvider,
        private _toastProvider: ToastProvider
    ) {
        this.loading = this.loadingCtrl.create({
            content: 'message.loading',
            dismissOnPageChange: true
        });
        this.aliasEditPage = AliasEditPage;
        this.loading.present();
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
                    if (response.length == 0) {
                        this._toastProvider.presentToast('message.alias.empty');
                    }
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
                    //this.getAliasAll();
                    this.refreshPage();
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

    /**
     *
     * @param alias
     */
    showConfirm(alias) {
        let alert = this.alertCtrl.create({
            title: 'message.alias.delete.confirm.title',
            message: 'message.alias.delete.confirm.question',
            buttons: [
                {
                    text: 'alert.cancel',
                    role: 'cancel',
                    handler: () => {
                        //this.getAliasAll();
                    }
                },
                {
                    text: 'alert.confirm',
                    handler: () => {
                        this.deleteAlias(alias);
                    }
                }
            ]
        });

        alert.present();
    }

    /**
     *
     */
    refreshPage() {
        this.getAliasAll();
    }

    /**
     *
     * @param refresher
     */
    doRefresh(refresher) {
        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

}
