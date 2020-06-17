import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { SharedModule } from '../shared/shared.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [NavInlineComponent, BtnComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TextModule
  ],
  exports: [NavInlineComponent, BtnComponent]
})
export class LibraryModule { }
