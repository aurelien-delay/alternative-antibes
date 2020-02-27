import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListecandidatsService {

  constructor() { }

  public getCandidats() {
    let output = [
      {numero:  1, hasphoto: true, prenom: "Arnaud", nom: "Delcasse", age: 34, role: "tête de liste", profession: "Dirigeant d’une coopérative dans la mobilité durable", phrase: "Notre ville a besoin de prendre      enfin en compte les urgences      environnementales et sociales. Engagés      dans nos vies personnelles respectives      pour plus d’écologie et de solidarité,      nous portons le rassemblement de      toutes celles et ceux qui souhaitent voir      cette alternative l’emporter ..."},
      {numero:  2, hasphoto: true, prenom: "Cécile", nom: "Dumas", age: 53, role: "porte parole", profession: "Enseignante\nConseillère  Municipale sortante", phrase: "Depuis 20 ans que j’ habite Antibes,      je vois les plus grandes richesses et les      plus grandes inégalités. Il est urgent de      rendre Antibes plus facile à vivre pour      la majorité d’entre nous. Engagez-vous      avec nous pour une ville plus juste, plus      écologique, plus démocratique"},      
      {numero:  3, hasphoto: true, prenom: "Karim", nom: "Della Sudda", age: 39, role: "porte parole", profession: "Aide cuisinier cantines bio de Mouans Sartoux", phrase: ""},
      {numero:  4, hasphoto: true, prenom: "Jocelyne", nom: "Sablé", age: 64, profession: "Présidente d’un organisme d’histoire sociale", phrase: ""},
      {numero:  5, hasphoto: true, prenom: "Jérôme", nom: "Bracq", age: 59, profession: "Attaché de conservation du patrimoine, militant syndical", phrase: ""},
      {numero:  6, hasphoto: true, prenom: "Nora", nom: "Choubane", age: 54, role: "porte parole", profession: "Professeure d’Histoire Géographie", phrase: "Antibes Juan-Les-Pins doit adapter      ses services publics à ses habitants,      mener une politique de solidarité plus      efficiente et cohérente notamment      pour l’urgence sociale (SDF, femmes      en danger, familles monoparentales,      réfugiés ...). Je souhaite ardemment la      création d’une Maison de la Solidarité"},
      {numero:  7, hasphoto: true, prenom: "Jacques", nom: "de Montbron", age: 29, profession: "Ingénieur en informatique", phrase: ""},
      {numero:  8, hasphoto: false, prenom: "Florence", nom: "Polonio", age: 54, profession: "Enseignante", phrase: ""},
      {numero:  9, hasphoto: true, prenom: "Rémi", nom: "Quinton", age: 37, profession: "Ingénieur en informatique", phrase: ""},
      {numero: 10, hasphoto: false, prenom: "Clémentine", nom: "Coujard", age: 40, profession: "Consultante innovation", phrase: ""},
      {numero: 11, hasphoto: true, prenom: "Aurelien", nom: "Delay", age: 34, profession: "Ingénieur en informatique", phrase: "Je m'engage pour un projet politique et mûri après des années passés auprès des Antibois·es et Juanais·es, un projet qui n'oublie personne et va permettre à beaucoup de respirer à nouveau."},
      {numero: 12, hasphoto: true, prenom: "Nicole", nom: "Cappa-Piel", age: 65, profession: "Militante pour le droit au logement", phrase: "Pour moi, il est important de voter de s'engager ! Dans notre ville, je croise trop souvent des personnes qui souffrent du mal-logement, de ne pouvoir vivre décemment. Je me sens bien sur cette liste qui a voulu rassembler les citoyen·ne·s qui partagent des valeurs de gauche et écologiques"},
      {numero: 13, hasphoto: false, prenom: "Daniel", nom: "Alati", age: 67, profession: "Militant associatif et politique", phrase: ""},
      {numero: 14, hasphoto: true, prenom: "Michelle", nom: "Jayet", age: 47, profession: "Hotesse de caisse", phrase: "Antiboise de génération, je souhaite pour ma ville qu'elle soit équitable pour tous"},
      {numero: 15, hasphoto: false, prenom: "Marc", nom: "Brucker", age: 63, profession: " Journaliste\nRédacteur en chef adjoint honoraire", phrase: ""},
      {numero: 16, hasphoto: true, prenom: "Houda", nom: "Ben-Youssef", age: 46, profession: " Présidente d’une association de parents d’élèves\nSecrétaire administrative", phrase: "Je suis une militante associative depuis mon adolescence ! Militante auprès de tous et pour Tous ! Pour ma ville, j’ai choisi de m’engager auprès de  l’Alternative Sociale, Citoyenne et Écologique, un vrai rassemblement à  gauche."},
      {numero: 17, hasphoto: true, prenom: "Patrick", nom: "Reyne", age:58, profession: "Militant syndical Envibus", phrase: "J'essaie dans ma vie de me comporter en citoyen responsable et réfléchi. Soucieux de l'avenir et du futur de nos enfants et de l'état dans lequel nous allons leur léguer notre bonne vieille Terre. Je défends aussi l'idée d'une répartition plus égale des richesses, et notamment que des salaires décents et des emplois stables soient la norme."},
      {numero: 18, hasphoto: true, prenom: "Mireille", nom: "Bailly-Maitre", age:67, profession: "Aide à domicile retraitée pour le CCAS d'Antibes", phrase: "Arriver à convaincre le plus de monde à voter pour notre liste."},
      {numero: 19, hasphoto: false, prenom: "Roman", nom: "CZAPSKI", age: 31, profession: "Professeur de Philosophie", phrase: ""},
      {numero: 20, hasphoto: true, prenom: "Gabi", nom: "Samuel", age: 60, profession: "Entrepreneure", phrase: "Juanaise depuis trois décennies je constate les changements qui nous sont imposés et qui transforment nos vies aussi bien globalement que localement. Je m’implique dans cette liste de gauche pour que notre ville garde un visage humain pour les générations futures."},
      {numero: 21, hasphoto: false, prenom: "Bastien", nom: "Bracq", age: 21, profession: "Etudiant", phrase: ""},
      {numero: 22, hasphoto: false, prenom: "Caroline", nom: "Guillet", age: 21, profession: "Consultante", phrase: ""},
      {numero: 23, hasphoto: false, prenom: "Joël", nom: "DENNEULIN", age: 66, profession: "Enseignant retraité", phrase: ""},
      {numero: 24, hasphoto: false, prenom: "Arlette", nom: "Tordo", age: 75, profession: "Secrétaire médicale retraitée", phrase: ""},
      {numero: 25, hasphoto: false, prenom: "Sébastien", nom: "Romero", age: 35, profession: "Infographiste", phrase: ""},
      {numero: 26, hasphoto: false, prenom: "Michelle", nom: "Perrin", age: 72, profession: "Professeure des écoles retraitée", phrase: ""},
      {numero: 27, hasphoto: false, prenom: "Michel", nom: "Astre", age: 66, profession: "Directeur d’école maternelle retraité", phrase: ""},
      {numero: 28, hasphoto: false, prenom: "Julie", nom: "Saccomano", age: 28, profession: "Consultante", phrase: ""},
      {numero: 29, hasphoto: false, prenom: "Alexandre", nom: "Kadar", age: 65, profession: "Animateur radio", phrase: ""},
      {numero: 30, hasphoto: true, prenom: "Natacha", nom: "Prystawski", age:42, profession: "Chargée de mission socio-culturelle", phrase: "Pour donner du sens et de la cohérence à une action sociale et solidaire. Pour l'engagement vers uine transition écologique durable."},
      {numero: 31, hasphoto: false, prenom: "Gérard", nom: "Donato", age: 63, profession: "Agent SNCF retraité", phrase: ""},
      {numero: 32, hasphoto: false, prenom: "Nathalie", nom: "Chapelet", age: 57, profession: "Adjointe administrative", phrase: ""},
      {numero: 33, hasphoto: false, prenom: "Jean-Pierre", nom: "Cochart", age: 71, profession: "Militant associatif dans l’aide à la recherche d’emploi et le logement", phrase: ""},
      {numero: 34, hasphoto: true, prenom: "Claudine", nom: "Pierrat", age: 71, profession: "Enseignante retraitée", phrase: "Pour une ville accessible au plus grand nombre, une ville juste, une ville verte et une ville active."},
      {numero: 35, hasphoto: false, prenom: "Kaïs", nom: "COURRIER", age: 18, profession: "Etudiant et employé commercial", phrase: ""},
      {numero: 36, hasphoto: false, prenom: "Maria", nom: "Gurz", age: 73, profession: "Militante associative dans l’humanitaire", phrase: ""},
      {numero: 37, hasphoto: false, prenom: "Daniel", nom: "Alexandre", age: 80, profession: "Retraité de la fonction publique territoriale", phrase: ""},
      {numero: 38, hasphoto: false, prenom: "Myriam", nom: "Querio", age: 59, profession: "Scénographe", phrase: ""},
      {numero: 39, hasphoto: false, prenom: "Philippe", nom: "Blanchet", age: 60, profession: "Retraité de La Poste", phrase: ""},

      {numero: 40, hasphoto: false, prenom: "Brigitte", nom: "Thébault", age: 80, profession: "Militante depuis les années 60", phrase: "Elue des Français de l'étranger (Algérie) sur une liste Progressiste insistant sur la situation des Français en difficultés pour se loger ou pour régler les frais de scolarités dans les Etablisements Français de l'Etranger       Dès mon retour en France (retraite), j'ai rejoint la section PCF d'Antibes où j'ai milité pour le Droit au Logement en particulier et en procurant l'aide aux familles en difficultés (permanences hebdomadaires depuis 2006)"},
      {numero: 41, hasphoto: false, prenom: "Guy", nom: "Pons", age: 75, profession: "Responsable d’un syndicat de retraités", phrase: ""},
      {numero: 42, hasphoto: true, prenom: "Nicole", nom: "Palmero-Moncho", age: 77, profession: "Militante droit au logement", phrase: "Pour le droit au logement pour tous, pour les 5 000 familles qui attendent un logement social."},
      {numero: 43, hasphoto: false, prenom: "Augustin", nom: "Massoli", age: 76, profession: "Architecte honoraire", phrase: ""},
      {numero: 44, hasphoto: true, prenom: "Josiane", nom: "Traccucci", age:62, profession: "Secrétaire", phrase: "J'ai choisi cette liste pour son honnêteté et son engagement auprès des plus démunis. Plus de justesse pour cette ville."},
      {numero: 45, hasphoto: false, prenom: "Jordan", nom: "Médard", age: 32, profession: "Ingénieur informatique", phrase: ""},
      {numero: 46, hasphoto: false, prenom: "Sarah", nom: "Benbiga", age: 20, profession: "Sans emploi", phrase: ""},
      {numero: 47, hasphoto: true, prenom: "Johannes", nom: "Samuel", age: 60, profession: "Entrepreneur", phrase: "Un autre monde est possible. Cette brutalité qui règne partout, dans le social, dans l'environnemental, n'est pas une fatalité. Le programme de notre liste donne des réponses concrètes."},
      {numero: 48, hasphoto: false, prenom: "Marie-Christine", nom: "Bailly", age: 74, profession: "Retraitée de l’édition", phrase: ""},
      {numero: 49, hasphoto: true, prenom: "Gerard", nom: "Piel", age:70, profession: "Ancien conseiller municipal et régional", phrase: "C'est un bonheur de clôturer avec toutes les générations, des militants de gauche, écologistes, des citoyens, des syndicalistes et des associatifs. Avec elles et eux, votre vote ne sera pas bafoué. Votez utile !"},

    ];
    return output;
  };

  public getTetesDeListe() {
    return this.filterTetedeliste();
  }

  filterTetedeliste() {
    let output = this.getCandidats().filter(candidat => { console.log(candidat.nom, (["Dumas", "Delcasse", "Choubane"].includes(candidat.nom)));  return ["Dumas", "Delcasse", "Della Sudda"].includes(candidat.nom); });
    return output;
  }
}