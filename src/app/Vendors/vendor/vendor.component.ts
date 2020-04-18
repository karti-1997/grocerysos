import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Vendor } from '../vendor.model';
import { VendorsService } from '../vendor.service';
import {listData} from '../../shared/vendor';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
    private vendor: Vendor;
    vendors: Vendor [] = [];
    private vendorSub: Subscription;
    list: Vendor[] =[];
    //list = listData.reverse();
    @ViewChild('searchbar') searchbar: ElementRef;
    searchText = '';
  
    toggleSearch: boolean = false;
    constructor(public vendorsService: VendorsService,) { }
    ngOnInit(): void {
      this.vendorsService.getVendors();
      this.vendorSub = this.vendorsService.getVendorUpdateListener()
      .subscribe((vendors: Vendor[]) => {
      this.vendors = vendors;
      this.list=vendors;
      console.log(this.vendors);
    });
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
