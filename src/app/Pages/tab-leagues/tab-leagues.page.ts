import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChampionshipListPagePage } from '../championship-list-page/championship-list-page.page';

@Component({
  selector: 'app-tab-leagues',
  templateUrl: './tab-leagues.page.html',
  styleUrls: ['./tab-leagues.page.scss'],
})
export class TabLeaguesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {

  }
  
}
