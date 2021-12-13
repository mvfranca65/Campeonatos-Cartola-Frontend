import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-new-championship',
  templateUrl: './create-new-championship.page.html',
  styleUrls: ['./create-new-championship.page.scss'],
})
export class CreateNewChampionshipPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

}
