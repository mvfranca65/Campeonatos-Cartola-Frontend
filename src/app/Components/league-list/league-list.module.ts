import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueListComponent } from './league-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LeagueListComponent],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    RouterModule
  ],
  exports: [LeagueListComponent]
})
export class LeagueListModule { }