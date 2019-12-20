import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ContactInfo } from '../contactinfo';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private apiService: ApiService) {}
  public sent = false;
  public badnom = false;
  public badprenom = false;

  ngOnInit() {
  }

  envoyer(form) {
    this.badnom = false;
    this.badprenom = false;
    if (form.status==="VALID") {
      this.apiService.envoyer(form.value).subscribe((contactinfo: ContactInfo)=>{
        console.log("Contact ajouté", contactinfo);
        form.reset();
        this.sent = true;
      });
    }
    else {
      console.log("Nom Prénom obligatoires");
      if (!form.value.nom) { this.badnom = true; }
      if (!form.value.prenom) { this.badprenom = true; }
    }
  }

}
