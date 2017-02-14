import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-manage-queue',
  templateUrl: 'manage-queue.html'
})
export class ManageQueuePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataService,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
  }

  decreaseQueue(item) {
    let id = item.id - 1;
    let curQueue = this.dataService.department[id].currentQueue;
    if (curQueue > 0) {
      this.dataService.updateItem(id, { currentQueue: curQueue - 1 });
    }
  }

  increaseQueue(item) {
    let id = item.id - 1;
    let curQueue = this.dataService.department[id].currentQueue;
    if (curQueue < this.dataService.department[id].totalQueue) {
      this.dataService.updateItem(id, { currentQueue: curQueue + 1 });
    }
  }

  resetQueue(item) {
    let id = item.id - 1;
    let alert = this.alertCtrl.create({
      title: 'ยืนยันการรีเซ็ต',
      message: 'คุณแน่ใจหรือไม่ที่จะรีเซ็ตคิวนี้ ?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel'
        },
        {
          text: 'รีเซ็ต',
          handler: () => {
            this.dataService.updateItem(id, { currentQueue: 0, totalQueue: 0 });
          }
        }
      ]
    });
    alert.present();
  }

}
