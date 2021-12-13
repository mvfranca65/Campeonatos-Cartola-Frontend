import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChampionshipListComponent } from './championship-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChampionshipListComponent],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    RouterModule
  ],
  exports: [ChampionshipListComponent]
})
export class ChampionshipListModule { }
