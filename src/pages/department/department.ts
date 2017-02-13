import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'page-department',
  templateUrl: 'department.html'
})
export class DepartmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public departmentService: DepartmentService ) {}

  ionViewDidLoad() {
  }

  updateSelected(item) {
    console.log(item);
  }
}
