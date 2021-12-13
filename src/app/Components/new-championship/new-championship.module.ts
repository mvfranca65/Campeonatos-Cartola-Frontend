import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChampionshipComponent } from './new-championship.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewChampionshipComponent],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [NewChampionshipComponent]
})
export class NewChampionshipModule { }
