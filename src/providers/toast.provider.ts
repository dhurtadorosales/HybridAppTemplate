import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

    /**
     *
     * @param {ToastController} toastCtrl
     */
    constructor(private toastCtrl: ToastController) {
    }

    /**
     * @param message
     */
    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }
}