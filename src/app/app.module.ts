import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';

import { AppComponent } from './app.component';
import { LateralComponent } from './lateral/lateral.component';
import { PresseComponent } from './presse/presse.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammeComponent } from './programme/programme.component';
import { BandeaucontactComponent } from './bandeaucontact/bandeaucontact.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralComponent,
    PresseComponent,
    AteliersComponent,
    AccueilComponent,
    ContactComponent,
    ProgrammeComponent,
    BandeaucontactComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: Window, useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
