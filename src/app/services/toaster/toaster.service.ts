import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastCtrl: ToastController) { }

  public presentToast(message: string, duration: number = 1500, position: 'top' | 'bottom' | 'middle' = 'top') {
    this.toastCtrl.create({
      message,
      duration,
      position
    }).catch(err => {
      console.log(err);
    });
  }
}
