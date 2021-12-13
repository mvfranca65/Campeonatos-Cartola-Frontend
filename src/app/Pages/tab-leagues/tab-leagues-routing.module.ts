import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabLeaguesPage } from './tab-leagues.page';

export const routes: Routes = [
  {
    path: '',
    component: TabLeaguesPage
  },
  {
    path: 'campeonato/:league/:id',
    loadChildren: () => import('./../../Pages/championship-list-page/championship-list-page.module').then(m => m.ChampionshipListPagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLeaguesPageRoutingModule {}
