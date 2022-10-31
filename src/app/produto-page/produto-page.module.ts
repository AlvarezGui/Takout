import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoPagePageRoutingModule } from './produto-page-routing.module';

import { ProdutoPagePage } from './produto-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPagePageRoutingModule
  ],
  declarations: [ProdutoPagePage]
})
export class ProdutoPagePageModule {}
