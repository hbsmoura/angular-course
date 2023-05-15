import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  quantidade: number = 0;

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade = this.quantidade > 0 ? this.quantidade - 1 : 0;
  }

  // checked -> content - view

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  // quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  // após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  // após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

}
