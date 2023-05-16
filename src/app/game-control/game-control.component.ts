import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
   @Output() intervalFired = new EventEmitter<number>();
   private interval!:number;
    count =0;
   start(){
    let count =0;
      this.interval = <any>setInterval(() => {
        this.intervalFired.emit(this.count++);
        this.count++;
      }, 1000);
   }
   stop() {
    clearInterval(this.interval);
  }
}
