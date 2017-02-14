import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'page-department',
  templateUrl: 'department.html',

})
export class DepartmentPage {

  constructor(private navCtrl: NavController, public navParams: NavParams, public departmentService: DepartmentService ) {}

  ionViewDidLoad() {
  }

  updateSelected(item) {
    console.log(item);
  }

  viewQueuePage() {
    console.log(this.navCtrl)
    this.navCtrl.parent.select(0);
  }
}
