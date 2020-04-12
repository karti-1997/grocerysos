import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-inventory-create',
  templateUrl: './InventoryCreate.component.html',
  styleUrls: ['./InventoryCreate.component.scss']
})
export class InventoryCreateComponent implements OnInit {
    
  itemname = '';
  itemcategory = '';
  itembrand = '';
  itemdescription = '';
  unit = '';
  itemprice = '';
  private mode = "edit";
  private vendorId: string;
  constructor(public route: ActivatedRoute) { }
  vendor=[];
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.vendorId = paramMap.get("id");
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
        this.vendorId = null;
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
      /*this.postsService.addPost(
        this.form.value.title,
        this.user,
        this.form.value.image
      );*/
      alert('Inventory Created');
      console.log(form.value.itemname,form.value.itemcategory,form.value.itembrand,
      form.value.itemdescription,form.value.unit,form.value.itemprice);
    } else {
      /*this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );*/
      alert('Inventory updated');
      console.log(form.value.itemname,form.value.itemcategory,form.value.itembrand,
        form.value.itemdescription,form.value.unit,form.value.itemprice);
    }
    form.resetForm();
  }  
}
