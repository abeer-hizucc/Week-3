import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appVulnerableDirective]'
})
export class VulnerableDirectiveDirective implements OnInit {
  @Input() defaultColor:string = 'black';
  @Input() defaultBackgroundColor:string = 'transparent';
  @Input() highlightColor:string = 'white';
  @Input() highlightBackgroundColor:string = 'mediumpurple';
  @Input()deafultPadding:string = '10px';
  @Input()deafultMargin :string = '20px';
  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultBackgroundColor;
  @HostBinding('style.color') color:string = this.defaultColor;
  @HostBinding('style.padding') padding:string = this.deafultPadding;
  @HostBinding('style.marginTop') marginTop:string = this.deafultMargin;
  constructor( private elementRef:ElementRef) { }
 ngOnInit(): void {
   this.backgroundColor = this.defaultColor;
   this.color = this.highlightColor;
   this.padding = this.deafultPadding;
   this.marginTop = this.deafultMargin;
 }
 @HostListener('mouseenter') mouseover(eventData:Event){
  this.backgroundColor = this.highlightBackgroundColor;
  this.color = this.highlightColor;
 }
 @HostListener('mouseleave') mouseleave(eventData:Event){
  this.backgroundColor = this.defaultBackgroundColor;
  this.color = this.defaultColor;
 }


}
