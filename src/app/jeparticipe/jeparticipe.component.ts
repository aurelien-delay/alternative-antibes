import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ContactInfo } from '../contactinfo';

@Component({
  selector: 'app-jeparticipe',
  templateUrl: './jeparticipe.component.html',
  styleUrls: ['./jeparticipe.component.scss']
})
export class JeparticipeComponent implements OnInit {

  public badnom = false;
  public badprenom = false;
  public badmail = false;
  public sent = false;
  private isButtonVisible = false;
  private sign = "assets/plus-sign-in-circle.svg";
  @Input() axe: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  switchForm() {
    this.isButtonVisible = !this.isButtonVisible;
    if (this.sign === "assets/plus-sign-in-circle.svg")    this.sign = "assets/plus-sign-in-circle.svg";
    else                                                   this.sign = "assets/minus-sign-in-circle.svg";
  }

  envoyer(form) {
    this.badnom = false;
    this.badprenom = false;
    this.badmail = false;
    if (form.status==="VALID") {
      let envoi = form.value;
      envoi['remarque'] = "envoyé depuis la page programme - section " + this.axe;
      this.apiService.envoyer(envoi).subscribe((contactinfo: ContactInfo)=>{
        console.log("Contact ajouté", contactinfo);
        form.reset();
        this.sent = true;
      });
    }
    else {
      console.log("Nom Prénom et email obligatoires");
      if (!form.value.nom) { this.badnom = true; }
      if (!form.value.prenom) { this.badprenom = true; }
      if (!form.value.email) { this.badmail = true; }
    }
  }

}
