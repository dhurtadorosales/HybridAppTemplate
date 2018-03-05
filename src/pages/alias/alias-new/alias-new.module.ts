import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AliasNewPage } from './alias-new';

@NgModule({
  declarations: [
    AliasNewPage,
  ],
  imports: [
    IonicPageModule.forChild(AliasNewPage),
  ],
})
export class AliasPageModule {}
