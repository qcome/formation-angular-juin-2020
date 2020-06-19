import { Component, OnInit, Input, Output } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { EventEmitter } from 'protractor';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public initItem = new Order();
  constructor(
    private os: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public add(item: Order) {
    console.log(item);
    this.os.add(item).subscribe((res) => {
      //console.log(res);
      this.router.navigate(['orders']);
    });

  }

}
