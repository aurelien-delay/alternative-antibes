import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendacontentService {

  constructor() { }

  public initContent() {
    let content = [
      {type: "L"},
      {type: "M", date: new Date("09JAN20"), heure: "à 11h",        lieu: ["Place Garibaldi", "à Nice"]},
      {type: "T", date: new Date("10JAN20"), heure: "à 8h",         lieu: ["Ecole des Semboules"]},
      {type: "T", date: new Date("10JAN20"), heure: "à 16h30",      lieu: ["Ecole Guynemer"]},
      {type: "I", date: new Date("11JAN20"), heure: "à 11h",        lieu: ["10 rue Pasteur", "à Antibes"]},
      {type: "V", date: new Date("31JAN20"), heure: "de 18h",       lieu: [],                         type1: "Fin des inscriptions sur les listes électorales"},
      {type: "V", date: new Date("15MAR20"), heure: "de 8h à 20h",  lieu: ["votre bureau de vote"],     type1: "1er tour"},
      {type: "V", date: new Date("22MAR20"), heure: "de 8h à 20h",  lieu: ["votre bureau de vote"],     type1: "2eme tour"},
    ];
    // type: permanence P, espace rencontre L, manif M, tractage T, reunion publique R, inauguration I, vote V
    let output = [];
    content.forEach(element => {
      console.log("element", element);
      // formatte la date
      if (element.date) {
        const options1 = { weekday: "long", month: "long", day: "numeric" };
        element['datestr'] = element.date.toLocaleDateString("fr-FR", options1);
      }
      // full texte pour chaque type
      if (element.type === "L") {
        // trouver le prochain lundi
        element['datestr'] = "Tous les Lundi";
        element['heure'] = "de 8h30 à 11h";
        element['type1'] = "Espace Rencontre";
        element['type2'] = "avec les acteurs de la ville";
        element['lieu'] = ["Local de campagne", " 10 rue Pasteur"];
      }
      else if (element.type === "M") {
        element['type1'] = "Manifestation";
        element['type2'] = "contre la réforme des retraites";
      }
      else if (element.type === "T") {
        element['type1'] = "On vient à";
        element['type2'] = "votre rencontre";
      }
      else if (element.type === "R") {
        element['type1'] = "Réunion publique";
        element['type2'] = "";
      }
      else if (element.type === "I") {
        element['type1'] = "Inauguration de notre";
        element['type2'] = "local de campagne";
      }
      /*
      else if (element.type === "P") {
        var nextmonday = new Date();
        nextmonday.setDate(nextmonday.getDate() + (1 + 7 - nextmonday.getDay()) % 7);
        const options = { weekday: "long", month: "long", day: "numeric" };
        // element.date1 = "Lundi " + nextmonday.getDay() + " " + nextmonday.getMonth()
        element.datestr = nextmonday.toLocaleDateString("fr-FR", options);
        element.heure = "de 8h30 à 11h";
      }
      */
    });

    // TODO : ajouter les permanences
    return content;
  }
}
