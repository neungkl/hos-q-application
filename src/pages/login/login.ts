import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginService } from '../../services/login.service';
import { ManageQueuePage } from '../manage-queue/manage-queue';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService) {}

  ionViewDidLoad() {
  }

  login() {
    console.log(this.user, this.pass);
    if(this.loginService.login(this.user, this.pass)) {
      this.navCtrl.setRoot(ManageQueuePage);
    }
  }

}
