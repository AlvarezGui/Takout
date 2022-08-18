import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPPage } from './tab-p.page';

const routes: Routes = [
  {
    path: '',
    component: TabPPage,
    children: [
      {
        path: 'pedidos',
        loadChildren: () => import('../tab-p/pedidos/pedidos.module').then( m => m.PedidosPageModule)
      },
      {
        path: 'historico',
        loadChildren: () => import('../tab-p/historico/historico.module').then( m => m.HistoricoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPPageRoutingModule {}
