import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute,ParamMap } from '@angular/router';

import { Order } from '../order.model';
//import { AuthData } from '../../login/auth.model';
import { OrderService } from '../order.service';
//import { Authservice } from  '../../login/auth.service';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy{
  status = '';
  private order: Order;
  orders: Order [] = [];
  private orderSub: Subscription;
  vendorId: string;
  /*private correctanswer = 0;
  private wronganswer = 0;*/
  constructor(
    public orderService: OrderService,
    //private authService: Authservice, 
    public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has("VendorId")) {
          this.vendorId = paramMap.get("VendorId");
          console.log(this.vendorId);
        }
      });
    this.orderService.getOrders(this.vendorId);
    //this.userId = this.authService.getUserid();
    this.orderSub = this.orderService.getOrderUpdateListener()
    .subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
  ngOnDestroy(){
  //this.questionSub.unsubscribe();
  }
  statussaved(order: Order) {
    alert("status changed to "+order.orderStatus);
    this.orderService.updateOrder(order);
  }
}
