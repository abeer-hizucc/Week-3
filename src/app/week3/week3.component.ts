import { Component,ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-week3',
  templateUrl: './week3.component.html',
  styleUrls: ['./week3.component.css']
})
export class Week3Component {
numbers = [1,2,3,4,5,6,7,8,9,10]
onlyOdd = false;
//oddNumbers = null;
oddNumbers = [1,3,5,7,9];
evenNumbers = [2,4,6,8,10];
constructor(private elRef:ElementRef) { }
numberSelection =''; // 'odd' or 'even'
ngOnInit(){
  this.numberSelection = "Hello There";
  console.log(this.numberSelection);
}
get filteredNumbers(){
  return this.numbers.filter(num =>this.onlyOdd? num % 2 !== 0 : num % 2 === 0);
}
isOddOreven(){
 this.onlyOdd =! this.onlyOdd;
  this.numberSelection = this.onlyOdd ? 'Show Even number' : 'Show odd number'; 
}
updateInputValue(value: string){
this.elRef.nativeElement.value = value;
}
}