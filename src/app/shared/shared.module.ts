import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TtcPipe } from './pipes/ttc.pipe';



@NgModule({
  declarations: [ColorDirective, TotalPipe, StateDirective, TtcPipe],
  exports: [ColorDirective, TotalPipe, StateDirective, TtcPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
