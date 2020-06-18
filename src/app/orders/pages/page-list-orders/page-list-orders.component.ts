import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  //public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
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

}
