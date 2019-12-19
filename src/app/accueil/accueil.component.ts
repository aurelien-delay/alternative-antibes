import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ContactInfo } from '../contactinfo';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

  envoyer(form) {
    console.log("form:", form);
    if (form.status==="VALID") {
      this.apiService.envoyer(form.value).subscribe((contactinfo: ContactInfo)=>{
        console.log("Signature ajoutée", contactinfo);
      });
    }
  }

  signataires: any[] = [
    {"prenom": "Jérôme", "nom": "BRACQ", "fonction": "fonctionnaire territorial, militant syndical"},
    {"prenom": "Nora", "nom": "CHOUBANE", "fonction": " Génération.s"},
    {"prenom": "Jean-Pierre", "nom": "COCHART", "fonction": " Génération.s"},
    {"prenom": "Kaïs", "nom": "COURRIER", "fonction": " Génération.s et ancien membre du Parlement Régional de la Jeunesse."},
    {"prenom": "Aurélien", "nom": "DELAY", "fonction": " Parti Communiste Français (PCF)"},
    {"prenom": "Arnaud", "nom": "DELCASSE", "fonction": " Gauche Républicaine et Socialiste (GRS)"},
    {"prenom": "Cécile", "nom": "DUMAS", "fonction": " conseillère municipale d’Antibes Juan-les-Pins PCF"},
    {"prenom": "Denis", "nom": "LA SPESA", "fonction": "syndicaliste Energie, MNLE 06 (Mouvement National de Lutte pour l’Environnement)"},
    {"prenom": "Michèle", "nom": "MURATORE", "fonction": " conseillère municipale d’Antibes Juan-les-Pins – Conseillère communautaire CASA – PS"},
    {"prenom": "Gérard", "nom": "PIEL", "fonction": " MNLE 06 , écrivain"},
    {"prenom": "Rémi", "nom": "QUINTON", "fonction": " Parti Communiste Français (PCF)"},
    {"prenom": "Johann", "nom": "SAMUEL", "fonction": "auteur, traducteur"},
    {"prenom": "Paula", "nom": "TOLEDO", "fonction": " Génération.s, membre de secours populaire"},
  ];

}
