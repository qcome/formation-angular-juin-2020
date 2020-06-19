import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  public states = Object.values(StateClient);
  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.collection$ = this.os.collection
    /*this.os.collection.subscribe((col) => {
      this.collection = col;
    });*/
    this.headers = [
      'Name',
      'CA HT',
      'TVA',
      'CA TTC',
      'State'
    ];
  }

  changeState(item: Client, e) {
    console.log(item);
    console.log(e);
    this.os.changeState(item, e.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public popup() {
    console.log('popup active');
  }

}
