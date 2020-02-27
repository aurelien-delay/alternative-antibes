import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ContactInfo } from '../contactinfo';
import { ListecandidatsService } from '../listecandidats.service'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  constructor(private apiService: ApiService, private listecandidatsService: ListecandidatsService) {}
  candidats: Array<Object>;

  ngOnInit() {
    this.candidats = this.listecandidatsService.getTetesDeListe();
  }
}
