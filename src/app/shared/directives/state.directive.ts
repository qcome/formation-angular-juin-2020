import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { StateOrder } from '../enums/state-order.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: StateOrder;
  @HostBinding('class') nomClass: string;
  constructor() { }
  ngOnChanges() {
    // console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: StateOrder): string {
    return `state-${state.toLocaleLowerCase()}`;
  }
}

// récupérer item.state
// générer un nom de class (string) à partir de state-(valeur de item.state)
// si item.state vaut OPTION => state-option
// si item.state vaut OPTION => state-option
// si item.state vaut OPTION => state-option
// binder la propriété class du host element td
