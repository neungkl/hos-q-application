import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Department page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-department',
  templateUrl: 'department.html'
})
export class DepartmentPage {

  public departmentList = [
    { name: 'คลินิกตรวจสุขภาพทั่วไป', selected: false },
    { name: 'คลินิกโรคเฉพาะทาง', selected: true },
    { name: 'คลินิกทันตกรรม', selected: false },
    { name: 'คลินิกกายภาพบำบัด', selected: false },
    { name: 'คลินิกตรวจสุขภาพทั่วไป', selected: true },
    { name: 'คลินิกตรวจสุขภาพทั่วไป', selected: false },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentPage');
  }

}
