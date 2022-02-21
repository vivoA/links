import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  @Input() users:any;
  @Output() setToDeActive= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  setToDeActiveFun(i:any){
    this.setToDeActive.emit(i)
  }
}
