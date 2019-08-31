import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(value: any, arg: any): any {
    const resultInvoices = [];
    for (let item of value) {
      if (item.description.indexOf(arg) > -1) {
        resultInvoices.push(item);
      };
    };
    return resultInvoices;
  }

}
