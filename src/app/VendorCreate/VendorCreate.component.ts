import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-vendor-create',
  templateUrl: './VendorCreate.component.html',
  styleUrls: ['./VendorCreate.component.scss']
})
export class VendorCreateComponent implements OnInit {
  vendorname = '';
  vendorchainname = '';
  vendorowner = '';
  vendoraddress = '';
  whatsappnumber = '';
  contactnumber = '';
  email='';
  Paymentmethod='';
  private mode = "edit";
  private vendorId: string;
  constructor(public route: ActivatedRoute) { }
  vendor=[];
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("vendorId")) {
        this.mode = "edit";
        this.vendorId = paramMap.get("vendorId");
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
  onAddVendor(form: NgForm) {
    if (form.invalid) {
      return ;
    }
    if (this.mode === "create") {
      /*this.postsService.addPost(
        this.form.value.title,
        this.user,
        this.form.value.image
      );*/
      alert('Vendor Created');
      console.log(form.value.vendorname,form.value.vendorchainname,
      form.value.vendorowner,form.value.vendoraddress,form.value.whatsappnumber,
      form.value.contactnumber,form.value.email,form.value.Paymentmethod);
    } else {
      /*this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );*/
      alert('Vendor updated');
      console.log(form.value.vendorname,form.value.vendorchainname,
      form.value.vendorowner,form.value.vendoraddress,form.value.whatsappnumber,
      form.value.contactnumber,form.value.email,form.value.Paymentmethod);
    }
    form.resetForm();
  }  
   
  }
