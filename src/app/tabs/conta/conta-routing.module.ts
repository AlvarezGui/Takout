import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaPage } from './conta.page';

const routes: Routes = [
  {
    path: '',
    component: ContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaPageRoutingModule {}
