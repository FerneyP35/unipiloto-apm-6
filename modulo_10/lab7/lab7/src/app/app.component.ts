import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {OneSignal} from "@ionic-native/onesignal";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private alertCtrl: AlertController,
              private oneSignal: OneSignal) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushNotifications();
    });
  }

  private pushNotifications() {
    this.oneSignal.startInit('4ed353b7-d425-4c68-9d8a-cfaed29e32d6', '540700318670');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
      .subscribe(jsonData => {
        let alert = this.alertCtrl.create({
          title: jsonData.notification.payload.title,
          subTitle: jsonData.notification.payload.body,
          buttons: ['OK']
        });
        alert.present();
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      });
    this.oneSignal.endInit();
  }
}

