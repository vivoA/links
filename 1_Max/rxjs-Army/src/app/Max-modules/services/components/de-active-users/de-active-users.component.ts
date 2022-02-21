import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'de-active-users',
  templateUrl: './de-active-users.component.html',
  styleUrls: ['./de-active-users.component.scss']
})
export class DeActiveUsersComponent implements OnInit {

  @Input() users:any;
  @Output() setToActive=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  setToActiveFun(i:any){
    this.setToActive.emit(i)
  }


}
