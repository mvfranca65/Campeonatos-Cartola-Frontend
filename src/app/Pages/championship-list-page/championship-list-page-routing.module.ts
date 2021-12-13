import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipListPagePage } from './championship-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipListPagePage
  }, 
  {
    path: 'new',
    loadChildren: () => import('./../create-new-championship/create-new-championship.module').then(m => m.CreateNewChampionshipPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipListPagePageRoutingModule {}
