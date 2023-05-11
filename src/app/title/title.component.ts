import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() name: string = '';

  constructor() {
    console.log('constructor -' + this.name);
  }

  ngOnChanges(): void {
    console.log('onChanges -' + this.name);
  }

  ngOnInit(): void {
    console.log('onInit -' + this.name);
  }
}
