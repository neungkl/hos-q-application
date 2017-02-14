import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ManageQueuePage } from '../pages/manage-queue/manage-queue';

import { DataService } from '../services/data.service';
import { LoginService } from '../services/login.service';

// Import the AF2 Module
import { defaultFirebase, FIREBASE_PROVIDERS } from 'angularfire2';

// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyDJcfq9sICacVacAhkysIBHWgKRpBJ1Atc",
  authDomain: "hos-q-24aa5.firebaseapp.com",
  databaseURL: "https://hos-q-24aa5.firebaseio.com",
  storageBucket: "hos-q-24aa5.appspot.com",
  messagingSenderId: "237093806123"
};


@Component({
  templateUrl: 'app.html',
  providers: [
    LoginService,
    DataService,
    FIREBASE_PROVIDERS,
    defaultFirebase(firebaseConfig)
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
  loginPage = LoginPage;

  pages: Array<{title: string, icon: string, admin: boolean, page: any}>;

  constructor(public platform: Platform, public loginService: LoginService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ระบบคิว', icon: 'logo-buffer', admin: false, page: TabsPage },
      { title: 'จัดการคิว', icon: 'settings', admin: true, page: ManageQueuePage }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
