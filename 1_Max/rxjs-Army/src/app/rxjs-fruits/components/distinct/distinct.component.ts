import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
  //distinct
  distinctItems=<any>[]
  constructor() { }

  ngOnInit(): void {
  }
  
  //distinct function
  distinct(){
    const fruits=from([ "Apple", "Banana", "Apple", "Apple" ])
    fruits.pipe(
      distinct()
      ).subscribe(res=>{
      this.distinctItems.push(res)
    })
  }
  
}
