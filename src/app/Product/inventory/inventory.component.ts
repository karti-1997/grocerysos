import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {InventorylistData} from '../../shared/inventory';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  list = InventorylistData.reverse();
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';
  vendorId='';
  toggleSearch: boolean = false;
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("VendorId")) {
        this.vendorId = paramMap.get("VendorId");
        /*this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
            imagePath: postData.imagePath
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            image: this.post.imagePath
          });
        });*/
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
