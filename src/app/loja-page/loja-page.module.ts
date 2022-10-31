import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojaPagePageRoutingModule } from './loja-page-routing.module';

import { LojaPagePage } from './loja-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojaPagePageRoutingModule
  ],
  declarations: [LojaPagePage]
})
export class LojaPagePageModule {}
