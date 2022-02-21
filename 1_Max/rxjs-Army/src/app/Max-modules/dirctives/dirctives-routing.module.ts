import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout.service';
import { HomeDirctivesComponent } from './home-dirctives/home-dirctives.component';
const routes: Routes = [
  layout.childRoutes([
    {
      path:"",
      component:HomeDirctivesComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirctivesRoutingModule { }
