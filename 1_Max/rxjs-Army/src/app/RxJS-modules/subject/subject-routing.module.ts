import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout.service';
import { SubjectComponent } from './components/subject/subject.component';
const routes: Routes = [
  layout.childRoutes([
    {
      path:"",
      component:SubjectComponent,
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
