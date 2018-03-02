import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AliasListPage } from './alias-list';

@NgModule({
  declarations: [
    AliasListPage,
  ],
  imports: [
    IonicPageModule.forChild(AliasListPage),
  ],
})
export class AliasListPageModule {}
