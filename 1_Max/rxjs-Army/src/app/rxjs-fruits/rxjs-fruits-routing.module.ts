import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from '../layout/layout.service';
import { FruitsComponent } from './fruits/fruits.component';

const routes: Routes = [
  layout.childRoutes([
    {
      path:"",
      component:FruitsComponent
    }
  ])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsFruitsRoutingModule { }
