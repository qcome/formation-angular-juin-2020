import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`);
  }

  //get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  //set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  //changeState item in collection
  public changeState(item: Client, state: StateClient): Observable<Client> {
    //item.state = state;
    const obj = {...item}; // clone
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }
}
