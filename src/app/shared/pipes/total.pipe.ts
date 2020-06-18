import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any): number {
    console.log(value);
    console.log(args);

    if (value) {
      /*if(args[0]){
        return (value.tjmHt * value.nbJours) * (1 + value.tva/100);
      }
      return value.tjmHt * value.nbJours;*/
      return value.tjmHt * value.nbJours * (1 + (value.tva / 100) * (args[0] ? 1 : 0));
    }
    //this.totalHT(item) + (this.totalHT(item) * item.tva / 100);
    return null;
  }

}
