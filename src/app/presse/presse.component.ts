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
    {journal: 'Nice Matin', date: '12 Janvier 2020', image: 'nicematin_12janvier2020.jpg', alt: 'A Antibes, l\'Alternative ouvre son local de campagne'},
    {journal: 'Nice Matin', date: '08 Janvier 2020', image: 'nicematin_08janvier2020.jpg', alt: 'Cécile Dumas appelle les élus à soutenir financièrement les grévistes'},
    {journal: 'Nice Matin', date: '17 Décembre 2019', image: 'nicematin_20dec_programme.jpg', alt: 'Les volontés d\'Arnaud Delcasse pour Antibes'},
    {journal: 'Nice Matin', date: '28 Novembre 2019', image: 'nicematin_28nov_tetedeliste.jpg', alt: 'Arnaud Delcasse veut être le visage de la gauche unie'},
  ];

  ngOnInit() {
  }

}
