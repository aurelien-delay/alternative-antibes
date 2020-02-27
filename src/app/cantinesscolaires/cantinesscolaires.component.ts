import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cantinesscolaires',
  templateUrl: './cantinesscolaires.component.html',
  styleUrls: ['./cantinesscolaires.component.scss']
})
export class CantinesscolairesComponent implements OnInit {

  constructor() { }
  pdfsrc = "assets/alimentation_scolaire.pdf";

  ngOnInit() {
  }

}
