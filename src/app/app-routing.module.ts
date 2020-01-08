import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { PresseComponent } from './presse/presse.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammeComponent } from './programme/programme.component';
import { AgendapageComponent } from './agendapage/agendapage.component';
import { PlanveloComponent } from './planvelo/planvelo.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: 'accueil', component: AccueilComponent, },
  { path: 'presse', component: PresseComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'programme', component: ProgrammeComponent, },
  { path: 'agenda', component: AgendapageComponent, },
  { path: 'planvelo', component: PlanveloComponent, },
  { path: '**', redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }