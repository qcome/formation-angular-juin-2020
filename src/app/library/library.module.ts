import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavInlineComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavInlineComponent]
})
export class LibraryModule { }
