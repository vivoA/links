import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:"",
    loadChildren:()=>import('./home-m/home-m.module').then(
      m=>{ return m.HomeMModule}
    )
  },

  {
    path: 'throttle',
    loadChildren: () => 
    import('./RxJS-modules/throttle-time/throttle-time.module')
      .then((m) => {return m.ThrottleTimeModule;})
  },

  {
    path: 'subject',
    loadChildren: () => 
    import('./RxJS-modules/subject/subject.module')
      .then((m) => {return m.SubjectModule;})
  },


  {
    path:"directives",
    loadChildren:()=> import ('./Max-modules/dirctives/dirctives.module').then(
      m => m.DirctivesModule
    )
  },


  {
    path:"users-service",
    loadChildren:()=> import ('./Max-modules/services/services.module').then(
      m => m.ServicesModule
    )
  },

  {
    path:"fruits",
    loadChildren:()=> import('./rxjs-fruits/rxjs-fruits.module').then(
      m => m.RxjsFruitsModule
    )
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
