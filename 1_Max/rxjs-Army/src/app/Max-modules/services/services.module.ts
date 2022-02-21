import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { UsersComponent } from './components/users/users.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { DeActiveUsersComponent } from './components/de-active-users/de-active-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    ActiveUsersComponent,
    DeActiveUsersComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
