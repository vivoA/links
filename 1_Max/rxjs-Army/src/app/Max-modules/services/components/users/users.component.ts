import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  activeUsers=[
    "ahmed",
    "ali",
    "mohamed"
 ]

 
 deActiveUsers=[
    "saly",
    "soha",
    "sara"
]


  constructor() { }

  ngOnInit(): void {

  }


  setToActiveFun(i:any){
    this.activeUsers.push(this.deActiveUsers[i])
    this.deActiveUsers.splice(i, 1)
  }
  

  setToDeActiveFun(i:any){
    this.deActiveUsers.push(this.activeUsers[i])
    this.activeUsers.splice(i,1)
  }

}
