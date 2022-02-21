import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsFruitsRoutingModule } from './rxjs-fruits-routing.module';
import { FruitsComponent } from './fruits/fruits.component';
import { DistinctComponent } from './components/distinct/distinct.component';
import { TakeComponent } from './components/take/take.component';
import { FilterComponent } from './components/filter/filter.component';
import { PipeComponent } from './components/pipe/pipe.component';


@NgModule({
  declarations: [
    FruitsComponent,
    DistinctComponent,
    TakeComponent,
    FilterComponent,
    PipeComponent
  ],
  imports: [
    CommonModule,
    RxjsFruitsRoutingModule
  ]
})
export class RxjsFruitsModule { }
