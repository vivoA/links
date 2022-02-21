import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThrottleTimeRoutingModule } from './throttle-time-routing.module';
import { ThrottleComponent } from './components/throttle/throttle.component';


@NgModule({
  declarations: [
    ThrottleComponent
  ],
  imports: [
    CommonModule,
    ThrottleTimeRoutingModule
  ]
})
export class ThrottleTimeModule { }
