import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';

  isAliveCheckSample: boolean = true;
  isAliveCard: boolean = true;

  disposeCheckSample(): void {
    this.isAliveCheckSample = false;
  }

}
