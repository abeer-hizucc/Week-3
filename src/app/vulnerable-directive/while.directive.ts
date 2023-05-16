// import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

// @Directive({
//     selector: '[appWhile]'
// })
// export class WhileDirective{
    
//    @Input() set appWhile([initialValue,finalValue,increment]:[any,any,any]){
//     let i=initialValue;
//     while(i<=finalValue){
//         this.vcRef.createEmbeddedView(this.tempRef,{$implicit:i});
//         i+=increment;
//     }
//    }
//    constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef){}


// }
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWhile]'
})
export class WhileDirective {
  @Input('appWhile') myWhileParams!: [number, number, number];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    const [initialValue, finalValue, increment] = this.myWhileParams;
    for (let i = initialValue; i <= finalValue; i += increment) {
      this.viewContainer.createEmbeddedView(this.templateRef, {$implicit:i});
    }
  }
}
