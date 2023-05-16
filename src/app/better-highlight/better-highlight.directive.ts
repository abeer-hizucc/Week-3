import { Directive,Renderer2,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef ,private renderer:Renderer2) { }
ngOnInit(){
this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
//this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
this.renderer.setStyle(this.elementRef.nativeElement,'padding','10px');
this.renderer.setStyle(this.elementRef.nativeElement,'margin-top','20px');
}
}
