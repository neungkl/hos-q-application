import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if(this.loginService.login(this.user, this.pass)) {
      
    }
  }

  logout() {
    this.loginService.logout();
  }
}
