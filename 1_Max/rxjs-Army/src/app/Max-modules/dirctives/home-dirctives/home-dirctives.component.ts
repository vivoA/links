import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dirctives',
  templateUrl: './home-dirctives.component.html',
  styleUrls: ['./home-dirctives.component.scss']
})
export class HomeDirctivesComponent implements OnInit {
  items=[0,1,2,3,4,5,6,7,8,9,10,11]
  products=[0,1,2,3,4,5,6,7,8,9,10,11]
  value=10
  constructor() { }

  ngOnInit(): void {
  }

}
