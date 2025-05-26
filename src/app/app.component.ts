import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TelaAbordagemComponent } from './tela-abordagem/tela-abordagem.component';
import { TelaAgendarComponent } from './tela-agendar/tela-agendar.component';
import { TelaFaqComponent } from './tela-faq/tela-faq.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaSobreMimComponent } from './tela-sobre-mim/tela-sobre-mim.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaPrincipalComponent, TelaSobreMimComponent, TelaFaqComponent, TelaAgendarComponent, TelaAbordagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gabi-psicologia';

  constructor(
    private router: Router
) { }
  

  agendar(){

    this.router.navigate(['/agendar'])
  }
}


