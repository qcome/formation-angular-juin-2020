import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [ColorDirective, TotalPipe],
  exports: [ColorDirective, TotalPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
