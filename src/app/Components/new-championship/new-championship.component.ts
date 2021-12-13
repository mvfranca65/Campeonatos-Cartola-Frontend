import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ChampionshipService } from 'src/app/Service/championship/championship.service';

@Component({
  selector: 'app-new-championship',
  templateUrl: './new-championship.component.html',
  styleUrls: ['./new-championship.component.scss'],
})
export class NewChampionshipComponent implements OnInit {

  championshipForm: FormGroup = this.fb.group({});

  constructor(
    private route: ActivatedRoute, 
    private championshipService: ChampionshipService, 
    private navCtrl: NavController,
    private fb: FormBuilder  
  ) { }

  ngOnInit() {
    this.championshipForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  buildBody() {
    const description = this.championshipForm.get('description').value;
    const name = this.championshipForm.get('name').value;
    const { league, id } = this.route.snapshot.params;

    return {
      "description": description,
      "id_league": id,
      "image": "https://img2.gratispng.com/20180627/otp/kisspng-football-player-sport-2018-world-cup-estampa-5b344e684acd43.1788964615301546003064.jpg",
      "name": name,
      "name_league": league,
      "type": "BRASILEIRAO"
    }
  }

  createChampionship() {
    const body = this.buildBody();

    this.championshipService.postNewChampionship(body).subscribe(response => {
      this.back();
    });
  }

  back() {
    this.navCtrl.back();
    //Deve atualizar a lista ao voltar
  }

}
