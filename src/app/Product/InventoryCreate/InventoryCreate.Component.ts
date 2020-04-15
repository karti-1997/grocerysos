import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from '../product.service';
import { Inventory } from '../product.model';

@Component({
  selector: 'app-inventory-create',
  templateUrl: './InventoryCreate.component.html',
  styleUrls: ['./InventoryCreate.component.scss']
})
export class InventoryCreateComponent implements OnInit {
    
  productName = '';
  itembrand = '';
  Description = '';
  unit = '';
  itemprice = '';
  Stockcnt='';
  private mode = "edit";
  private vendorId: string;
  constructor(public route: ActivatedRoute,Productservice: ProductService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("itemid")) {
        this.mode = "edit";
        this.vendorId = paramMap.get("itemid");
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
      } else {
        this.mode = "create";
        this.vendorId = paramMap.get("VendorId");
      }
    });
  /*this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has("userId")) {
      this.user = paramMap.get("userId");
    }
  });*/
 }
  onAddInventory(form: NgForm) {
    if (form.invalid) {
      return ;
    }
    if (this.mode === "create") {
      /*this.pService.addPost(
        this.form.value.title,
        this.user,
        this.form.value.image
      );*/
      alert('Inventory Created');
      console.log(form.value.productName,form.value.itembrand,form.value.Stockcnt,
      form.value.Description,form.value.unit,form.value.itemprice);
    } else {
      /*this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );*/
      alert('Inventory updated');
      console.log(form.value.productName,form.value.itembrand,form.value.Stockcnt,
        form.value.Description,form.value.unit,form.value.itemprice);
    }
    form.resetForm();
  }  
}
