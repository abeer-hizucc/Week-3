import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'RiyadBhai';
  onIntervalFired(number:number){
    console.log('onIntervalFired: '+number);
  }
}
