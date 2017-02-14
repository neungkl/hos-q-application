import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DepartmentService } from '../../services/department.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
  providers: [ DataService ]
})
export class QueuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public departmentService: DepartmentService, private _data: DataService ) {}

  ionViewDidLoad() {
  }

  queueLevel(value: number) {
    if(value > 10) return 'safe';
    if(value >= 0) return 'warn';
    return 'late';
  }

}
