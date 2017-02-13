import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { QueuePage } from '../pages/queue/queue';
import { DepartmentPage } from '../pages/department/department';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SettingsPage,
    AccountPage,
    QueuePage,
    DepartmentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AccountPage,
    SettingsPage,
    QueuePage,
    DepartmentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
