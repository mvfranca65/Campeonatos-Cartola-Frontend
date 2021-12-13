import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'tab-dashboard',
        loadChildren: () => import('../tab-dashboard/tab-dashboard.module').then(m => m.TabDashboardPageModule)
      },
      {
        path: 'tab-ligas',
        loadChildren: () => import('../tab-leagues/tab-leagues.module').then(m => m.TabLeaguesPageModule)
      },
      {
        path: 'tab-notificacoes',
        loadChildren: () => import('../tab-notifications/tab-notifications.module').then(m => m.TabNotificationsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/tab-dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tab-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
