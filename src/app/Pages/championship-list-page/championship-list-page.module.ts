import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionshipListPagePageRoutingModule } from './championship-list-page-routing.module';

import { ChampionshipListPagePage } from './championship-list-page.page';
import { ChampionshipListModule } from 'src/app/Components/championship-list/championship-list.module';
import { CreateNewChampionshipPageModule } from '../create-new-championship/create-new-championship.module';
import { NewChampionshipModule } from 'src/app/Components/new-championship/new-championship.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipListPagePageRoutingModule,
    ChampionshipListModule,
    CreateNewChampionshipPageModule,
    NewChampionshipModule
  ],
  declarations: [ChampionshipListPagePage],
  exports: [ChampionshipListPagePage]
})
export class ChampionshipListPagePageModule {}
