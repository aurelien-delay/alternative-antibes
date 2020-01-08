import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListecandidatsService {

  constructor() { }

  public getCandidats() {
    let output = [
      {prenom: "Cécile", nom: "Dumas", role: "porte parole", profession: "Enseignante\nConseillère municipale sortante", phrase: "Depuis 20 ans que j’ habite Antibes,      je vois les plus grandes richesses et les      plus grandes inégalités. Il est urgent de      rendre Antibes plus facile à vivre pour      la majorité d’entre nous. Engagez-vous      avec nous pour une ville plus juste, plus      écologique, plus démocratique"},
      {prenom: "Arnaud", nom: "Delcasse", role: "tête de liste", profession: "Dirigeant d’une coopérative dans la mobilité durable", phrase: "Notre ville a besoin de prendre      enfin en compte les urgences      environnementales et sociales. Engagés      dans nos vies personnelles respectives      pour plus d’écologie et de solidarité,      nous portons le rassemblement de      toutes celles et ceux qui souhaitent voir      cette alternative l’emporter ..."},
      {prenom: "Nora", nom: "Choubane", role: "porte parole", profession: "Professeure d’Histoire Géographie", phrase: "Antibes Juan-Les-Pins doit adapter      ses services publics à ses habitants,      mener une politique de solidarité plus      efficiente et cohérente notamment      pour l’urgence sociale (SDF, femmes      en danger, familles monoparentales,      réfugiés ...). Je souhaite ardemment la      création d’une Maison de la Solidarité"},
    ];
    return output;
  };

  public getTetesDeListe() {
    return this.filterTetedeliste();
  }

  filterTetedeliste() {
    let output = this.getCandidats().filter(candidat => { console.log(candidat.nom, (["Dumas", "Delcasse", "Choubane"].includes(candidat.nom)));  return ["Dumas", "Delcasse", "Choubane"].includes(candidat.nom); });
    return output;
  }
}
