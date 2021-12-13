import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabLeaguesPage } from '../tab-leagues/tab-leagues.page';

@Component({
  selector: 'app-championship-list-page',
  templateUrl: './championship-list-page.page.html',
  styleUrls: ['./championship-list-page.page.scss'],
})
export class ChampionshipListPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  active: boolean = true;
  closed: boolean = false;

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    ev.detail.value == "active" ? this.showActive() : this.showClosed();
  }

  showActive() {
    this.closed = false;
    this.active = true;
  }

  showClosed() {
    this.active = false;
    this.closed = true;
  }

  back() {
    this.navCtrl.back();
  }

}
