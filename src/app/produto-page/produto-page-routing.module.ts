import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoPagePage } from './produto-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoPagePageRoutingModule {}
