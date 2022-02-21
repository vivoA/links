import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  //take
  takeItems=<any>[]
  constructor() { }

  ngOnInit(): void {
  }

  //take function
  take(){
    const fruits=from(["Banana", "Banana", "Banana", "Banana", "x" ,"y"])
    fruits.pipe(
      take(2)
    ).subscribe(res=>{
      this.takeItems.push(res)
    })
  }

}
