import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html'
})
export class QueuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService ) {}

  ionViewDidLoad() {
  }

  queueLevel(value: number) {
    if(value > 10) return 'safe';
    if(value >= 0) return 'warn';
    return 'late';
  }

  reserveQueue(item) {
    this.dataService.crawlItem(item.id - 1, function(response) {
      let id = item.id - 1;
      for(let i = 0; i < response.length; i++) {
        this.dataService.department[id][response[i].$key] = response[i].$value;
      }
      let totalQueue = this.dataService.department[id].totalQueue;
      this.dataService.department[id].yourQueue = totalQueue + 1;
      this.dataService.updateItem(id, { totalQueue: totalQueue + 1 });
    }.bind(this));
  }

}
