import { Routes } from '@angular/router';
import { TelaAbordagemComponent } from './tela-abordagem/tela-abordagem.component';
import { TelaAgendarComponent } from './tela-agendar/tela-agendar.component';
import { TelaFaqComponent } from './tela-faq/tela-faq.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaSobreMimComponent } from './tela-sobre-mim/tela-sobre-mim.component';

export const routes: Routes = [
    { path: 'home', component: TelaPrincipalComponent },
    { path: 'SobreMim', component: TelaSobreMimComponent },
    { path: 'Agendar', component: TelaAgendarComponent },
    { path: 'Abordagem', component: TelaAbordagemComponent },
    { path: 'FAQ', component: TelaFaqComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];
