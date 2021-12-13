import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewChampionshipPageRoutingModule } from './create-new-championship-routing.module';

import { CreateNewChampionshipPage } from './create-new-championship.page';
import { NewChampionshipModule } from 'src/app/Components/new-championship/new-championship.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewChampionshipPageRoutingModule,
    NewChampionshipModule
  ],
  declarations: [CreateNewChampionshipPage],
  exports: [CreateNewChampionshipPage]
})
export class CreateNewChampionshipPageModule {}
