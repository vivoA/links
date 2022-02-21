import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterItems=<any>[]
  constructor() { }
  ngOnInit(): void {}

  clickFilter(){
    const fruits=from(["Apple", "Banana", "old-Banana", "old-Apple", "old-Apple"])
    fruits.pipe(
      filter(x => x==="Apple" || x==="Banana")
    ).subscribe(res=>{
      this.filterItems.push(res)
    })
  }

}
