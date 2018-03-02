import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserNewPage } from './user-new';

@NgModule({
  declarations: [
    UserNewPage,
  ],
  imports: [
    IonicPageModule.forChild(UserNewPage),
  ],
})
export class UsersPageModule {}
