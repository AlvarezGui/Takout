import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentosPageRoutingModule } from './pagamentos-routing.module';

import { PagamentosPage } from './pagamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentosPageRoutingModule
  ],
  declarations: [PagamentosPage]
})
export class PagamentosPageModule {}
