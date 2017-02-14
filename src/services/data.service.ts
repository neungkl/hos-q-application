import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class DataService {
  public db: any;

  constructor() {
    const fbConf = {
      apiKey: "AIzaSyDJcfq9sICacVacAhkysIBHWgKRpBJ1Atc",
      authDomain: "hos-q-24aa5.firebaseapp.com",
      databaseURL: "https://hos-q-24aa5.firebaseio.com",
      storageBucket: "hos-q-24aa5.appspot.com",
      messagingSenderId: "237093806123"
    };

    firebase.initializeApp(fbConf);

    this.db = firebase.database().ref('/');
    console.log(this.db)
  }
}
