import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirctivesRoutingModule } from './dirctives-routing.module';
import { HomeDirctivesComponent } from './home-dirctives/home-dirctives.component';
import { BetterDirective } from './all-dirictives/better.directive';
import { HighLightDirective } from './all-dirictives/high-light.directive';
import { PurpleDirective } from './all-dirictives/purple.directive';
import { HoverBindingDirective } from './all-dirictives/hover-binding.directive';
import { HoverListenerDirective } from './all-dirictives/hover-listener.directive';


@NgModule({
  declarations: [
    HomeDirctivesComponent,
    BetterDirective,
    HighLightDirective,
    PurpleDirective,
    HoverBindingDirective,
    HoverListenerDirective
  ],
  imports: [
    CommonModule,
    DirctivesRoutingModule
  ]
})
export class DirctivesModule { }
