import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {listData} from '../../shared/vendor';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
    list = listData.reverse();
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
