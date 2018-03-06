import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AliasEditPage } from './alias-edit';

@NgModule({
  declarations: [
    AliasEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AliasEditPage),
  ],
})
export class AliasEditPageModule {}
