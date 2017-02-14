import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  department: Array<any> = [];

  constructor(private af: AngularFire) {
    this.department = [];

    this.af.database.list('/department').subscribe(function(item) {

      if(this.department.length !== 0) return ;

      for(let i = 0; i< item.length; i++) {
        this.department.push({
          $key: item[i].$key,
          id: i+1,
          name: item[i].name,
          currentQueue: item[i].currentQueue,
          totalQueue: item[i].totalQueue,
          yourQueue: -1,
          selected: true
        })
      }
    }.bind(this));

    Observable.interval(1000).subscribe(this.crawlData.bind(this));
  }

  crawlData() {

    if(this.department.length === 0) return ;

    this.af.database.list('/department').subscribe(function(item) {
      for(let i = 0; i < item.length; i++) {
        this.department[i].name = item[i].name;
        this.department[i].currentQueue = item[i].currentQueue;
        this.department[i].totalQueue = item[i].totalQueue;
      }
    }.bind(this));
  }

  crawlItem(item, callback) {
    this.af.database.list('/department/' + item).subscribe(callback);
  }

  updateItem(item, option) {
    this.af.database.object('/department/' + item).update(option);
  }
}
