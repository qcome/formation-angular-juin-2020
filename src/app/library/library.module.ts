import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [NavInlineComponent, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavInlineComponent, BtnComponent]
})
export class LibraryModule { }
