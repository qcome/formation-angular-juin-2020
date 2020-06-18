import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule
  ]
})
export class OrdersModule { }
