import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Subscription } from 'rxjs';
import {InventorylistData} from '../../shared/inventory';
import { ActivatedRoute, ParamMap } from "@angular/router";


import { Inventory } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  //list = InventorylistData.reverse();
  inventories: Inventory[] = [];
  list: Inventory[]=[];
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';
  vendorId='';
  toggleSearch: boolean = false;
  private inventoriesSub: Subscription;
  constructor(public route: ActivatedRoute, public productservice: ProductService) { }
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("VendorId")) {
        this.vendorId = paramMap.get("VendorId");
        this.productservice.getvendorInventory(this.vendorId);
       this.inventoriesSub = this.productservice.getPostUpdateListener()
       .subscribe((inventories: Inventory[]) => {
      this.inventories = inventories;
      this.list = inventories.reverse();
    });
    //this.postsService.getuserPosts(this.userid);
     } 
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
