import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMRoutingModule } from './home-m-routing.module';
import { HomeDashComponent } from './home-dash/home-dash.component';


@NgModule({
  declarations: [
    HomeDashComponent
  ],
  imports: [
    CommonModule,
    HomeMRoutingModule
  ]
})
export class HomeMModule { }
