import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { UiComponent } from './components/ui/ui.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
  ]
})
export class UiModule { }
