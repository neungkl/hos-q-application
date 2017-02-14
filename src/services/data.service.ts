import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {

  items: FirebaseListObservable<any[]>;
  department: Array<any>;

  constructor(private af: AngularFire) {
    console.log("!!!!!!!");
    this.department = [];
    this.crawlData();
  }

  crawlData() {
    this.af.database.list('/department').subscribe(function(item) {
      for(let i = 0; i< item.length; i++) {
        this.department.push({
          $key: item[i].$key,
          id: i+1,
          name: item[i].name,
          currentQueue: item[i].currentQueue,
          totalQueue: item[i].totalQueue,
          yourQueue: -1,
          selected: false
        })
      }
    }.bind(this));
  }
}
