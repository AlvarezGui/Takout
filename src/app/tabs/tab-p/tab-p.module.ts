import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPPageRoutingModule } from './tab-p-routing.module';

import { TabPPage } from './tab-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPPageRoutingModule
  ],
  declarations: [TabPPage]
})
export class TabPPageModule {}
