import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {

  @Input()
  number!: number;
  get isOdd(){
    console.log(this.number);
    return this.number % 2 !== 1;
  }
}
