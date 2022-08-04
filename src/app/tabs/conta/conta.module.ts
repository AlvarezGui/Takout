import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaPageRoutingModule } from './conta-routing.module';

import { ContaPage } from './conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaPageRoutingModule
  ],
  declarations: [ContaPage]
})
export class ContaPageModule {}
