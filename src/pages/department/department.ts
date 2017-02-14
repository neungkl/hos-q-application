import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-department',
  templateUrl: 'department.html'
})
export class DepartmentPage {

  constructor(private navCtrl: NavController, public navParams: NavParams, public dataService: DataService ) {}

  ionViewDidLoad() {
  }

  viewQueuePage() {
    this.navCtrl.parent.select(0);
  }
}
