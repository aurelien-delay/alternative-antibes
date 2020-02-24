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
      {type: "T", date: new Date("13JAN20"), heure: "à 16h30",      lieu: ["Ecole Jean Moulin"]},
      {type: "T", date: new Date("14JAN20"), heure: "à 16h30",      lieu: ["Quartier de la Fontonne"]},
      {type: "T", date: new Date("16JAN20"), heure: "à 8h",         lieu: ["Ecole Laval"]},
      {type: "T", date: new Date("16JAN20"), heure: "à 10h",        lieu: ["Marché Place de Gaulle"]},
      {type: "T", date: new Date("17JAN20"), heure: "à 8h",         lieu: ["Ecole La Tournière"]},
      {type: "T", date: new Date("18JAN20"), heure: "à 10h",        lieu: ["Vieille ville"]},
      {type: "T", date: new Date("20JAN20"), heure: "à 8h",         lieu: ["Ecole Juan-les-Pins Gare"]},
      {type: "T", date: new Date("20JAN20"), heure: "à 16h",        lieu: ["Ecole de la Fontonne"]},
      {type: "T", date: new Date("21JAN20"), heure: "à 8h",         lieu: ["Ecole St-Maymes"]},
      {type: "T", date: new Date("22JAN20"), heure: "à 17h30",      lieu: ["Quartier St-Jean"]},
      {type: "T", date: new Date("23JAN20"), heure: "à 8h",         lieu: ["Ecole Pointeil"]},
      {type: "T", date: new Date("25JAN20"), heure: "à 10h",        lieu: ["Antibes-les-Pins"]},
      {type: "T", date: new Date("27JAN20"), heure: "à 7h",         lieu: ["devant la Poste Jules Grec, et le centre de tri Weisweller"]},
      {type: "T", date: new Date("27JAN20"), heure: "à 18h",        lieu: ["Présence aux voeux pour le personel municipal"]},

      {type: "T", date: new Date("28JAN20"), heure: "à 8h",         lieu: ["Ecole St Claude"]},
      {type: "T", date: new Date("30JAN20"), heure: "à 8h",         lieu: ["Ecole Pont du Lys"]},
      {type: "T", date: new Date("30JAN20"), heure: "à 16h30",      lieu: ["Ecole des Semboules"]},
      {type: "T", date: new Date("31JAN20"), heure: "à 8h",         lieu: ["Ecole Super Antibes"]},
      {type: "T", date: new Date("01FEB20"), heure: "à 14h30",      lieu: ["Vieille ville"]},
      {type: "T", date: new Date("02FEB20"), heure: "à 11h",        lieu: ["Présence sur le bord de mer cyclable"]},
      {type: "T", date: new Date("03FEB20"), heure: "à 8h",         lieu: ["Ecole Paul Arène"]},
      {type: "T", date: new Date("03FEB20"), heure: "à 16h30",      lieu: ["Ecole Boissier"]},
      {type: "R", date: new Date("03FEB20"), heure: "à 19h",        lieu: ["'L'Alternative reçoit' - au local de campagne"]},
      {type: "T", date: new Date("04FEB20"), heure: "à 8h",         lieu: ["Ecole du cap"]},


      {type: "T", date: new Date("04FEB20"), heure: "à 16h",         lieu: ["Ecole Roger Cardi"]},
      {type: "T", date: new Date("05FEB20"), heure: "à 17h30",       lieu: ["Résidence Laval Laeticia"]},
      {type: "T", date: new Date("06FEB20"), heure: "à 17h30",       lieu: ["Résidence Chataignier"]},
      {type: "T", date: new Date("08FEB20"), heure: "à 15h",         lieu: ["Parc Exflora"]},


      {type: "T", date: new Date("10FEB20"), heure: "à 17h30",       lieu: ["Résidence Les Tilleuls"]},
      {type: "T", date: new Date("11FEB20"), heure: "à 17h30",       lieu: ["Résidence St Claude"]},
      {type: "T", date: new Date("13FEB20"), heure: "à 10h30",       lieu: ["Marché De Gaulle"]},
      {type: "T", date: new Date("15FEB20"), heure: "à 15h",         lieu: ["Pré des pêcheurs"]},

      {type: "T", date: new Date("17FEB20"), heure: "à 15h",         lieu: ["devant l'Hopital de la Fontonne"]},
      
      {type: "T", date: new Date("21FEB20"), heure: "à 7h",          lieu: ["devant la Gare"]},
      {type: "T", date: new Date("24FEB20"), heure: "à 17h30",       lieu: ["Résidence St Claude"]},

      {type: "T", date: new Date("26FEB20"), heure: "à 18h",         lieu: ["Débat Nice Matin - aux espaces Fort Carré"]},
      {type: "T", date: new Date("28FEB20"), heure: "à 17h30",       lieu: ["Cité SNCF"]},
      {type: "T", date: new Date("29FEB20"), heure: "à 10h30 et 15h",lieu: ["Vieille ville"]},
      {type: "T", date: new Date("01MAR20"), heure: "à 10h30",       lieu: ["Bord de mer ouvert aux piétons et cyclistes"]},
      {type: "T", date: new Date("02MAR20"), heure: "à 17h30",       lieu: ["Résidence Laval Laeticia"]},
      {type: "T", date: new Date("03MAR20"), heure: "à 17h30",       lieu: ["Résidence Pont du Lys"]},

      {type: "R", date: new Date("04MAR20"), heure: "à 18h30",       lieu: ["au local de campagne - réunion thématique sur le droit des femmes"]},

      {type: "R", date: new Date("08FEB20"), heure: "à 18h",         lieu: ["Aux Semboules - contactez Gérard Piel au 06.08.21.76.99"]},
      {type: "R", date: new Date("12FEB20"), heure: "à 18h30",       lieu: ["au local de campagne - réunion thématique \"Restauration et activité périscolaire\""]},
      {type: "R", date: new Date("19FEB20"), heure: "à 18h30",       lieu: ["au local de campagne - réunion thématique sur le logement"]},

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
