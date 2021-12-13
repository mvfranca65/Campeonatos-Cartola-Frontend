import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { GloboService } from 'src/app/Service/globo/globo.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent implements OnInit {

  constructor(private globoService: GloboService, public navCtrl: NavController) { }

  leagues: any;

  ngOnInit() {
    this.globoService.getLeagues().subscribe(response => {
      this.leagues = response.ligas;
    });
  }

  // openChampionship(){
  //   this.navCtrl. push(ChampionshipListPagePage, {}, {animate: true} );    
  // }

}
