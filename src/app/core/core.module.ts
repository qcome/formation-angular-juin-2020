import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    TextModule,
    LibraryModule
  ],
  exports: [HeaderComponent, NavComponent, FooterComponent]
})
export class CoreModule { }
