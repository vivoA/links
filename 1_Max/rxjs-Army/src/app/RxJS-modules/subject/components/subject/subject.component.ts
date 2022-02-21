import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Random numbers with Observable
    const obs=new Observable(x => x.next(Math.random()))
    //two different data
    //uni cast 
    //just one data
    obs.subscribe(res => {console.log(res)})
    obs.subscribe(res => {console.log(res)})


    //Random numbers with Subject
    const Sub=new Subject()
      Sub.subscribe(res => {console.log(res);
      Sub.next(Math.random())
    })
  }

  

}
