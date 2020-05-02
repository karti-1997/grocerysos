import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {OrderService} from './order.service';
import {Order} from './order.model';
import {Inventory} from '../Product/product.model';
import {Product} from './product.model';
import {SigninPageComponent} from '../signin-page/signin-page.component';
import { ProductService } from '../Product/product.service';
@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.scss']
})
export class OrdercomponentComponent implements OnInit {

  constructor(public route: ActivatedRoute, public orderservice: OrderService,public dialog: MatDialog,public router:Router) { }
  Itemcategorylist=[];
  selecteditemcategory='';
  vendorId:string;
  quantity;
  list=[];
  customer:string;
  haveordered:boolean;
  inventories: Inventory[] = [];
  private inventoriesSub: Subscription;
  //product: Product;
  cart=[];
  amount=0;
  status='';
  
  order: Order;
  ngOnInit(): void {
    this.orderservice.getcategories();
    this.inventoriesSub = this.orderservice.getcategoriesUpdateListener()
      .subscribe((categories: string[]) => {
      this.Itemcategorylist = categories;
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("VendorId")) {
        this.vendorId = paramMap.get("VendorId");
        this.orderservice.getvendorInventory(this.vendorId);
       this.inventoriesSub = this.orderservice.getInventoryUpdateListener()
       .subscribe((inventories: Inventory[]) => {
      this.inventories = inventories;
    });
     } 
    });
  }
  selectedcategory(item: string){
    this.selecteditemcategory=item;
    this.orderservice.getinventorycategories(item);
    this.inventoriesSub = this.orderservice.getInventoryUpdateListener()
    .subscribe((inventories: Inventory[]) => {
   this.inventories = inventories;
 });  
}
  onitemadded(sitem,quantity){
    const product : Product ={
      productId: sitem.id,
      //productId: sitem.productId,
      MRP: sitem.MRP,
      cost: (sitem.MRP*quantity),
      quantity: quantity,
      productName: sitem.productName,
      unit:sitem.unit
    }
    console.log(product);
    this.cart.push(product);
    console.log("I am cart"+this.cart);
    this.amount=this.amount+product.cost;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SigninPageComponent, {
      width: '300px',
      data: {haveordered:this.haveordered}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.customer=result.data;
      console.log(this.customer);
    });
  }

  submitted(){
    
    const order ={
      id : null,
      vendorId:this.vendorId,
      customerId:'123456',
      products:this.cart,
      amount: this.amount,
      orderStatus:'Pending'
    }
    if(order.products.length>0){
      if(this.customer)
      {
        this.orderservice.submitorder(order);
        alert("your order has been submitted successfully");
      }
      else{
        alert("Please login to your account");
        this.openDialog();
      }
    }
    else
      alert("your Cart is empty");
  }
}
