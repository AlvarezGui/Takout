import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaSenhaPageRoutingModule } from './nova-senha-routing.module';

import { NovaSenhaPage } from './nova-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaSenhaPageRoutingModule
  ],
  declarations: [NovaSenhaPage]
})
export class NovaSenhaPageModule {}
