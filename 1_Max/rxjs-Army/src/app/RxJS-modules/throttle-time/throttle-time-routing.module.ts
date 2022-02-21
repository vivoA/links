import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout.service';
import { ThrottleComponent } from './components/throttle/throttle.component';
const routes: Routes = [
  layout.childRoutes([
    {
      path:"",
      component:ThrottleComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThrottleTimeRoutingModule { }
