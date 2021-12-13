import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./Components/login/login.module').then(module => module.LoginModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./Components/login3/login3.module').then( m => m.Login3PageModule)
  // }
  {
    path: '',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'tab-dashboard',
    loadChildren: () => import('./Pages/tab-dashboard/tab-dashboard.module').then( m => m.TabDashboardPageModule)
  },
  {
    path: 'tab-leagues',
    loadChildren: () => import('./Pages/tab-leagues/tab-leagues.module').then( m => m.TabLeaguesPageModule)
  },
  {
    path: 'tab-notifications',
    loadChildren: () => import('./Pages/tab-notifications/tab-notifications.module').then( m => m.TabNotificationsPageModule)
  },
  {
    path: 'create-new-championship',
    loadChildren: () => import('./Pages/create-new-championship/create-new-championship.module').then( m => m.CreateNewChampionshipPageModule)
  }
  // {
  //   path: 'tab-dashboard',
  //   loadChildren: () => import('./Pages/tabs/tab-dashboard/tab-dashboard.module').then( m => m.TabDashboardPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
