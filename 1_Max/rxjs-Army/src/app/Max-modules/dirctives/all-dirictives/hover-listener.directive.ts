import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HoverListener]'
})
export class HoverListenerDirective {

  constructor(private el:ElementRef, private render:Renderer2) { }
  
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'purple')
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent')
  }

}
