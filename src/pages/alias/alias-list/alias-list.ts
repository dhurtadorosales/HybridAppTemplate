import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, PopoverController} from 'ionic-angular';
import { Alias } from '../../../models/alias.model';
import { AliasProvider } from '../../../providers/alias.provider';
import { AliasEditPage } from '../alias-edit/alias-edit';
import { ToastProvider } from '../../../providers/toast.provider';
import { UserProvider } from '../../../providers/user.provider';

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
    popover: any;
    token: any;

    /**
     *
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {AlertController} alertCtrl
     * @param {LoadingController} loadingCtrl
     * @param {AliasProvider} _aliasProvider
     * @param {ToastProvider} _toastProvider
     * @param {UserProvider} _userProvider
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private _aliasProvider: AliasProvider,
        private _toastProvider: ToastProvider,
        private _userProvider: UserProvider
    ) {
        this._userProvider.getToken();
        this.loading = this.loadingCtrl.create({
            content: 'message.loading',
            dismissOnPageChange: true
        });
        this.aliasEditPage = AliasEditPage;
        this.loading.present();
        //this.getAliasAll();
        this.getAliasByUser('YWU2N2I5NDU3OGRkN2Y0NWEyNzE5MjlkMThhMDYyMmIyODRjZjJjMDJiNmUyMzI2M2IzOWE1Yzg1YTYyNTE1MA', 22);
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
     *
     * @param token
     * @param id
     */
    getAliasByUser(token, id) {
        console.log(localStorage.getItem('token'));
        this._aliasProvider.getAliasByUser(token, id).subscribe(
            response => {
                if (!response.error) {
                    this.alias = response;
                    if (response.length == 0) {
                        this._toastProvider.presentToast('message.alias.empty');
                    }
                } else {
                    this._toastProvider.presentToast('message.alias.get_by_user.error');
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
                        this.refreshPage();
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
