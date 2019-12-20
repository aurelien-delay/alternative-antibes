import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-presse',
  templateUrl: './presse.component.html',
  styleUrls: ['./presse.component.scss']
})
export class PresseComponent implements OnInit {
  constructor() { }

  articles: any[] = [
    // {journal: 'Nice Matin', date: '30 aout 2019', image: 'nicematin_30aout2019.jpg', alt: 'Le rassemblement de la Gauche en vert et contre... la droite'},
    {journal: 'Nice Matin', date: '17 Décembre 2019', image: 'nicematin_20dec_programme.jpg', alt: 'Les volontés d\'Arnaud Delcasse pour Antibes'},
    {journal: 'Nice Matin', date: '28 Novembre 2019', image: 'nicematin_28nov_tetedeliste.jpg', alt: 'Arnaud Delcasse veut être le visage de la gauche unie'},
  ];

  ngOnInit() {
  }

}
