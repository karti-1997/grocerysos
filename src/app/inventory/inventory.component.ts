import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {InventorylistData} from '../shared/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  list = InventorylistData.reverse();
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';
  
  toggleSearch: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
}
