import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html'
})
export class QueuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public departmentService: DepartmentService ) {}

  ionViewDidLoad() {
  }

}
