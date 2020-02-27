import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assa-escalade',
  templateUrl: './assa-escalade.component.html',
  styleUrls: ['./assa-escalade.component.scss']
})
export class AssaEscaladeComponent implements OnInit {

  constructor() { }
  pdfsrc = "assets/ASSA_escalade.pdf";

  ngOnInit() {
  }

}
