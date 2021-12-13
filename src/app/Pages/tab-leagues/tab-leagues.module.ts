import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabLeaguesPageRoutingModule } from './tab-leagues-routing.module';

import { TabLeaguesPage } from './tab-leagues.page';
import { LeagueListModule } from 'src/app/Components/league-list/league-list.module';
import { ChampionshipListModule } from 'src/app/Components/championship-list/championship-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabLeaguesPageRoutingModule,
    LeagueListModule,
    ChampionshipListModule
  ],
  declarations: [TabLeaguesPage]
})
export class TabLeaguesPageModule {}
