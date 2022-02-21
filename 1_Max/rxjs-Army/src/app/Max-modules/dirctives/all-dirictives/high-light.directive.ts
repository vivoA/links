import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[HighLightGreen]'
})
export class HighLightDirective {

  constructor(private element:ElementRef) { }
  
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor='green'
  }
}
