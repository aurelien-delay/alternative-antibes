import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonctionpublique',
  templateUrl: './fonctionpublique.component.html',
  styleUrls: ['./fonctionpublique.component.css']
})
export class FonctionpubliqueComponent implements OnInit {

  constructor() { }
  pdfsrc = "assets/fonction_publique.pdf";

  ngOnInit() {
  }

}
