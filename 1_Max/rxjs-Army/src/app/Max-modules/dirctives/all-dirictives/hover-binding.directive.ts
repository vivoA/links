import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[HoverBinding]'
})
export class HoverBindingDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') backgroundColor:string="transparent";


  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor="purple"
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor="transparent"
  }
}
