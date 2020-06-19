import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc'
})
export class TtcPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if (value) {
      return value.ca * (1 + value.tva / 100)
    }
    return null;
  }

}
