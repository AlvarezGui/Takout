import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'pesquisa',
        loadChildren: () => import('./pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('../tabs/conta/conta.module').then( m => m.ContaPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
