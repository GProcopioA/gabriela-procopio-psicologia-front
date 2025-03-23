import { Component } from '@angular/core';
import { TelaAbordagem1Component } from '../tela-abordagem-1/tela-abordagem-1.component';
import { TelaAbordagem2Component } from '../tela-abordagem-2/tela-abordagem-2.component';
import { TelaAbordagem3Component } from '../tela-abordagem-3/tela-abordagem-3.component';

@Component({
  selector: 'app-tela-abordagem',
  standalone: true,
  imports: [TelaAbordagem1Component, TelaAbordagem2Component, TelaAbordagem3Component],
  templateUrl: './tela-abordagem.component.html',
  styleUrl: './tela-abordagem.component.scss'
})
export class TelaAbordagemComponent {

}
