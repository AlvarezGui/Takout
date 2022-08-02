import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaSenhaPage } from './nova-senha.page';

const routes: Routes = [
  {
    path: '',
    component: NovaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaSenhaPageRoutingModule {}
