import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    produtos: string[] = []
    menuType: string = '';

    constructor() {
        this.produtos = ['mouse', 'teclado', 'cabo', 'fonte']
    }

    adicionar(): void {
        this.produtos.push('novo')
    }

    remover(index: number): void {
        this.produtos.splice(index, 1)
    }
}
