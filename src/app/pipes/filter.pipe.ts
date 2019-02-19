import { Pipe, PipeTransform } from '@angular/core';


// For search filtering functionality
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, query: string): any {
    if (query) {
      return value.filter((item: any) => item.name.toLowerCase().includes(query.toLowerCase()));
    }
    return value;
  }

}
