import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { PresseComponent } from './presse/presse.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammeComponent } from './programme/programme.component';
import { AgendapageComponent } from './agendapage/agendapage.component';
import { PlanveloComponent } from './planvelo/planvelo.component';
import { FonctionpubliqueComponent } from './fonctionpublique/fonctionpublique.component';
import { SituationEnvibusComponent } from './situation-envibus/situation-envibus.component';
import { SoutienMouvementSocialComponent } from './soutien-mouvement-social/soutien-mouvement-social.component';
import { CantinesscolairesComponent } from './cantinesscolaires/cantinesscolaires.component';
import { CandidatsComponent } from './candidats/candidats.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: 'accueil', component: AccueilComponent, },
  { path: 'presse', component: PresseComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'programme', component: ProgrammeComponent, },
  { path: 'agenda', component: AgendapageComponent, },
  { path: 'fonctionpublique', component: FonctionpubliqueComponent, },
  { path: 'planvelo', component: PlanveloComponent, },
  { path: 'situation-envibus', component: SituationEnvibusComponent, },
  { path: 'soutien-mouvement-social', component: SoutienMouvementSocialComponent, },
  { path: 'cantines-scolaires', component: CantinesscolairesComponent, },
  { path: 'candidats', component: CandidatsComponent, },
  { path: '**', redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }