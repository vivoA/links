import { Component, OnInit } from '@angular/core';
import { DashService } from '../services/dash.service';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.scss']
})
export class HomeDashComponent implements OnInit {
  rxjsLinks=<any> []
  maxLinks=<any> []
  constructor(private dashService:DashService) { }

  ngOnInit(): void {
    this.getRxjsLinks()
    this.getMaxLinks()
  }

  getRxjsLinks(){
    this.rxjsLinks=this.dashService.getRxjsLinks()
  }

  //get maximilan links
  getMaxLinks(){
    this.maxLinks=this.dashService.getMaxLinks()
  }

}
