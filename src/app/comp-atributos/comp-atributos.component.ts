import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
    estilo: string = 'enable'
    corFundo: string = 'gray'
    corDaFonte: string = 'green'

    trocar(): void {
        this.estilo = this.estilo === 'enable' ? 'disable' : 'enable'
    }
}
