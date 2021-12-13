import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipService } from 'src/app/Service/championship/championship.service';

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.scss'],
})
export class ChampionshipListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private championshipService: ChampionshipService) { }

  championships: any;

  ngOnInit() {    
    this.championshipService.getListChampionship(this.route.snapshot.params.id).subscribe(response => {
      this.championships = response;
    });
  }

}
