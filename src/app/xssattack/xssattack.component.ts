import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xssattack',
  template: `<input #myInput (input)="updateInputValue(myInput.value)">`,
  styleUrls: ['./xssattack.component.css']
})
export class XSSAttackComponent {
  constructor(private elRef: ElementRef) {}

  updateInputValue(value: string) {
    this.elRef.nativeElement.value = value;
  }
}
