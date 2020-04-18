import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.storeName.toLowerCase().includes(searchText) || it.lname.toLowerCase().includes(searchText)|| it.fname.toLowerCase().includes(searchText)
      ||it.address[0].country.toLowerCase().includes(searchText)||it.address[0].city.toLowerCase().includes(searchText) ;
    });
   }
}