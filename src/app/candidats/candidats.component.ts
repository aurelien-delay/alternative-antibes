import { Component, OnInit } from '@angular/core';
import { ListecandidatsService } from '../listecandidats.service'

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {

  constructor(private listecandidatsService: ListecandidatsService) { }
  candidats: Array<Object>;

  ngOnInit() {
    this.candidats = this.listecandidatsService.getCandidats();
  }

}
