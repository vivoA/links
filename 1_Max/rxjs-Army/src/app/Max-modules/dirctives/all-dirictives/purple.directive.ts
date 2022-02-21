import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[purpleDirective]'
})
export class PurpleDirective {

  constructor(private element:ElementRef) { }
 
  ngOnInit(){
    this.element.nativeElement.style.color='purple'
  }
}
