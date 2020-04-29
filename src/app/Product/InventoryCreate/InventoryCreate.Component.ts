import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ProductService } from '../product.service';
import { Inventory } from '../product.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-inventory-create',
  templateUrl: './InventoryCreate.component.html',
  styleUrls: ['./InventoryCreate.component.scss']
})
export class InventoryCreateComponent implements OnInit {
    
  productName = '';
  productBrand = '';
  productCategory = '';
  Description = '';
  unit = '';
  MRP: Number;
  stockCnt: Number;
  form: FormGroup;
  invent:Inventory;
  private mode = "edit";
  private vendorId: string;
  private itemId: string;
  constructor(public route: ActivatedRoute,public productservice: ProductService ,public router: Router) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      productName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      productBrand: new FormControl(null, { validators: [Validators.required] }),
      productCategory: new FormControl(null,{ validators:[Validators.required]}),
      unit: new FormControl(null, { validators: [Validators.required] }),
      Description: new FormControl(null,{ validators: [Validators.required]}),
      MRP: new FormControl(null,{ validators: [Validators.required]}),
      stockCnt: new FormControl(null,{ validators: [Validators.required]})
      /*image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })*/
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("itemid") && paramMap.has("VendorId")) {
        this.mode = "edit";
        this.vendorId = paramMap.get("VendorId");
        this.itemId = paramMap.get("itemid");
        this.invent=this.productservice.getinventory(this.itemId);
          this.form.setValue({
            productName: this.invent.productName,
            productBrand: this.invent.productBrand,
            productCategory: this.invent.productCategory,
            unit: this.invent.unit,
            Description: this.invent.Description,
            MRP:this.invent.MRP,
            stockCnt:this.invent.stockCnt
          });
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
  onAddInventory() {
    
    /*if (this.form.invalid) {
      console.log(this.vendorId,this.form.value.productName,this.form.value.productBrand,this.form.value.Stockcnt,
        this.form.value.Description,this.form.value.unit,this.form.value.MRP,this.form.value.Stockcnt);
      return ;
    }*/
    if (this.mode === "create") {
      this.productservice.addinventory(this.vendorId,this.form.value.productName,this.form.value.productBrand,this.form.value.productCategory,this.form.value.stockCnt,
        this.form.value.Description,this.form.value.unit,this.form.value.MRP);
      alert('Inventory Created');
      console.log(this.vendorId,this.form.value.productName,this.form.value.productBrand,this.form.value.stockCnt,
      this.form.value.Description,this.form.value.unit,this.form.value.MRP,this.form.value.stockCnt);
    } else {
      this.productservice.updatePost(this.itemId ,
        this.vendorId,this.form.value.productName,this.form.value.productBrand,this.form.value.productCategory,this.form.value.stockCnt,
        this.form.value.Description,this.form.value.unit,this.form.value.MRP);
      alert('Inventory updated'+ this.form.value.stockCnt);
      console.log(this.vendorId,this.itemId,this.form.value.productName,this.form.value.productBrand,this.form.value.stockCnt,
        this.form.value.Description,this.form.value.unit,this.form.value.MRP,this.form.value.stockCnt);
      //this.router.navigate(['/product/'+this.vendorId]);
    }
    this.form.reset();
  }  
}
