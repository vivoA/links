import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor() { }
  
  //for rxjs angular army
  getRxjsLinks(){
    const rxjsLinks=[
      {
        name:"throttle",
        link:"throttle"
      }, 
      {
        name:"subject",
        link:"subject"
      }
    ]
    return rxjsLinks
  }

  //for maximilan course 
  getMaxLinks(){
    const rxjsLinks=[
      {
        name:"directives",
        link:"directives"
      },
      {
        name:"users-service",
        link:"users-service"
      }
    ]
    return rxjsLinks
  }
}
