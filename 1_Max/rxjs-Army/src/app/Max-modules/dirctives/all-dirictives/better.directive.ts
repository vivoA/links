import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[redDirective]'
})
export class BetterDirective implements OnInit {

  constructor(private eleRef:ElementRef, private reander:Renderer2)  { }
  
  ngOnInit(){
    this.reander.setStyle(this.eleRef.nativeElement, 'background', 'red' )
  }
}
