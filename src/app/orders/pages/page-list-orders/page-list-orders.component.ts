import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  //public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.collection$ = this.os.collection
    /*this.os.collection.subscribe((col) => {
      this.collection = col;
    });*/
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  changeState(item: Order, e) {
    console.log(item);
    console.log(e);
    this.os.changeState(item, e.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

}
