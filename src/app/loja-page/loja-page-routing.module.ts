import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaPagePage } from './loja-page.page';

const routes: Routes = [
  {
    path: '',
    component: LojaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaPagePageRoutingModule {}
