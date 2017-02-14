import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { QueuePage } from '../pages/queue/queue';
import { DepartmentPage } from '../pages/department/department';
import { LoginPage } from '../pages/login/login';
import { ManageQueuePage } from '../pages/manage-queue/manage-queue';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDJcfq9sICacVacAhkysIBHWgKRpBJ1Atc",
  authDomain: "hos-q-24aa5.firebaseapp.com",
  databaseURL: "https://hos-q-24aa5.firebaseio.com",
  storageBucket: "hos-q-24aa5.appspot.com",
  messagingSenderId: "237093806123"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    QueuePage,
    DepartmentPage,
    LoginPage,
    ManageQueuePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    QueuePage,
    DepartmentPage,
    LoginPage,
    ManageQueuePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
