import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Inventory } from '../Product/product.model';
import {Order} from '../ordercomponent/order.model';
@Injectable({providedIn: 'root'})
export class OrderService {
constructor(private http: HttpClient, private router: Router) {}
private inventories: Inventory[] = [];
private inventoriesUpdated = new Subject<Inventory[]>();
private categories: string[] = [];
private categoriesUpdated = new Subject<string[]>();
private orders: Order[] = [];
private ordersUpdated = new Subject<Order[]>();
getvendorInventory(vid: string) {
  this.http
    .get<{ message: string; inventories: any }>("http://localhost:3000/api/inventory/"+vid)
    .pipe(
      map(inventoryData => {
        return inventoryData.inventories.map(inventory=> {
          return {
            id: inventory._id,
            vendorId:inventory.vendorId,
            productId:inventory.productId,
            productName: inventory.productName,
            productCategory: inventory.productCategory,
            productBrand:inventory.productBrand,
            stockCnt:inventory.stockCnt,
            unit:inventory.unit,
            Description:inventory.Description,
            MRP:inventory.MRP
          };
        });
      })
    )
    .subscribe(transformedInventories => {
      this.inventories = transformedInventories;
      this.inventoriesUpdated.next([...this.inventories]);
    });
}

getInventoryUpdateListener() {
  return this.inventoriesUpdated.asObservable();
}

getinventorycategories(productCategory: string){
  this.http
    .get<{ message: string; inventories: any }>("http://localhost:3000/api/order/"+productCategory)
    .pipe(
      map(inventoryData => {
        return inventoryData.inventories.map(inventory=> {
          return {
            id: inventory._id,
            vendorId:inventory.vendorId,
            productId:inventory.productId,
            productName: inventory.productName,
            productCategory: inventory.productCategory,
            productBrand:inventory.productBrand,
            stockCnt:inventory.stockCnt,
            unit:inventory.unit,
            Description:inventory.Description,
            MRP:inventory.MRP
          };
        });
      })
    )
    .subscribe(transformedInventories => {
      this.inventories = transformedInventories;
      this.inventoriesUpdated.next([...this.inventories]);
    });
}
getcategories(){
  this.http
    .get<{ message: string; categories: any }>("http://localhost:3000/api/order/")
    .subscribe(transformedInventories => {
      this.categories=transformedInventories.categories;
      this.categoriesUpdated.next([...this.categories]);
    });
}
getcategoriesUpdateListener() {
  return this.categoriesUpdated.asObservable();
}

submitorder(order: Order){
  console.log(order);
  this.http
      .post<{ message: string }>(
        "http://localhost:3000/api/order",order).subscribe(submittedinfo =>{
          console.log(submittedinfo.message);
        })
  //alert("Your order has been submitted successfully");
}

getOrders(vid: string) {
  console.log(vid);
  this.http
    .get<{ message: string; orders: any }>("http://localhost:3000/api/order/fetch/"+vid)
    .pipe(
      map(orderData => {
        return orderData.orders.map(order=> {
          return {
            id: order._id,
            customerId: order.customerId,
            vendorId: order.vendorId,
            products: order.products,
            amount : order.amount,
            orderStatus: order.orderStatus
          };
        });
      })
    )
    .subscribe(fetchedorders => {
      this.orders = fetchedorders.filter(ord=> ord.orderStatus !=='PickedUp')
      this.ordersUpdated.next([...this.orders]);
    });
}

getOrderUpdateListener() {
  return this.ordersUpdated.asObservable();
}

updateOrder(order:Order) {
  this.http
    .put("http://localhost:3000/api/order/" + order.id, order)
    .subscribe(response => {
      if(order.orderStatus=="PickedUp"){
      const ordersUpdated = this.orders.filter(ord => ord.id !== order.id);
      this.orders = ordersUpdated;
      this.ordersUpdated.next([...this.orders]);
      }
      else{
      const ordersUpdated = [...this.orders];
      const oldPostIndex = ordersUpdated.findIndex(p => p.id === order.id);
      const ord: Order = {
            id: order.id,
            customerId: order.customerId,
            vendorId: order.vendorId,
            products: order.products,
            amount : order.amount,
            orderStatus: order.orderStatus
      };
      ordersUpdated[oldPostIndex] = ord;
      this.orders = ordersUpdated;
      this.ordersUpdated.next([...this.orders]);
      //this.router.navigate(["/list",post.content]);
    }
  });
}

}