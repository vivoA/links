import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from '../layout/layout.service';
import { HomeDashComponent } from './home-dash/home-dash.component';
const routes: Routes = [
  layout.childRoutes([
    {
      path:"",
      component:HomeDashComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMRoutingModule { }
