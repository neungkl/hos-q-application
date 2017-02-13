import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QueuePage } from '../queue/queue';
import { DepartmentPage } from '../department/department';

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabQueue: any = QueuePage;
  tabDepartment: any = DepartmentPage;

  constructor(public navCtrl: NavController) {

  }

}
