import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { VendorsService } from '../vendor.service'

@Component({
  selector: 'app-vendor-create',
  templateUrl: './VendorCreate.component.html',
  styleUrls: ['./VendorCreate.component.scss']
})
export class VendorCreateComponent implements OnInit {
  storename = '';
  vendorchainname = '';
  careof='';
  doorno = '';
  addressline1='';
  City='';
  District='';
  Pincode='';
  Country='';
  whatsappnumber = '';
  contactnumber = '';
  email='';
  deliveryWindow='';
  pickupWindow='';
  address=[];
  contact=[];
  private mode = "edit";
  private vendorId: string;
  constructor(public route: ActivatedRoute, public vendorservice: VendorsService) { }
  vendor=[];
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("VendorId")) {
        this.mode = "edit";
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
    this.address.push({'careOf':form.value.careOf });
    this.address.push({'doorNo': form.value.doorNo});
    this.address.push({'addressLine1': form.value.addressLine1,});
    this.address.push({'city': form.value.city});
    this.address.push({'district':form.value.district});
    this.address.push({'pincode': form.value.pincode});
    this.address.push({'country': form.value.country});
    this.contact.push({'whatsApp':form.value.whatsApp},
        {'mobile':form.value.mobile});
      this.vendorservice.addPost(form.value.storeName,
        form.value.fname,
        form.value.lname,
        this.address,this.contact,form.value.email,'franchiseId',form.value.deliveryWindow,form.value.pickupWindow);
      alert('Vendor Created');
      console.log(form.value.storeName,form.value.fname,
      form.value.lname,this.address,this.contact);
    } else {
      /*this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );*/
      alert('Vendor updated');
      console.log(form.value.storename,form.value.vendorchainname,
        form.value.vendorowner,form.value.careof,form.value.doorno,form.value.addressline1,
        form.value.City,form.value.District,form.value.Pincode,
        form.value.Country,form.value.whatsappnumber,
        form.value.contactnumber,form.value.email,this.address,this.contact);
    }
    form.resetForm();
  }  
  }
