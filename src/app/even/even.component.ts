import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
@Input()
number!: number;
get isEven(){
  console.log(this.number);
  return this.number % 2 !== 0;
}
}
