import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'inventoryfilter'
})

export class FilterPipes implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
  searchText = searchText.toLowerCase();
  console.log(searchText);
  return items.filter( it => {
        return it.Itemname.toLowerCase().includes(searchText) || it.itemcategory.toLowerCase().includes(searchText) ;
      });
     }
  }
  