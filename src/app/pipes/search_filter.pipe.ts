import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchValue: string) {
    if (!items) return [];
    if (!searchValue) return items;

    searchValue = searchValue.toLowerCase();
    return items.filter(item => {
      return item.toLowerCase().includes(searchValue);
    })
  }

}