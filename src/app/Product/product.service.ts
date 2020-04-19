import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Inventory } from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
constructor(private http: HttpClient, private router: Router) {}
private inventories: Inventory[] = [];
  private inventoriesUpdated = new Subject<Inventory[]>();
addinventory(vendorId:string,productName: string,productBrand:string,productCategory:string,stockCnt:number,Description:string,unit:string,MRP:number){
    const inventoryData:Inventory={id:null,vendorId:vendorId,productId:"123456",productName:productName,productBrand:productBrand,productCategory:productCategory,stockCnt:stockCnt,Description:Description,unit:unit,MRP:MRP }
    this.http
      .post<{ message: string; inventory:Inventory }>(
        "http://localhost:3000/api/inventory",inventoryData)
      .subscribe(responseData => {
        const inventory: Inventory = {
          id: responseData.inventory.id,
          vendorId:vendorId,
          productId:"123456",
          productName: productName,
          productCategory: productCategory,
          productBrand:productBrand,
          stockCnt:stockCnt,
          unit:unit,
          Description:Description,
          MRP:MRP
        };
        this.inventories.push(inventory);
        this.inventoriesUpdated.next([...this.inventories]);
        this.router.navigate(['/product/'+vendorId]);
      });
}
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

getPostUpdateListener() {
  return this.inventoriesUpdated.asObservable();
}

getinventory(id: string){
  return {...this.inventories.find(q => q.id === id)};
}

/*getPost(id: string) {
  return this.http.get<{ _id: string, title: string, content: string, imagePath: string }>(
    "http://localhost:3000/api/posts/" + id
  );
}*/

updatePost(itemId:string,vendorId:string,productName: string,productBrand:string,productCategory:string,stockCnt:number,Description:string,unit:string,MRP:number) {
  const inventoryData:Inventory={id:itemId,vendorId:vendorId,productId:"123456",productName:productName,productBrand:productBrand,productCategory:productCategory,stockCnt:stockCnt,Description:Description,unit:unit,MRP:MRP }
  this.http
    .put("http://localhost:3000/api/inventory/" + inventoryData.id, inventoryData)
    .subscribe(response => {
      const updatedInventories = [...this.inventories];
      const oldInventoryIndex = updatedInventories.findIndex(p => p.id === itemId);
      const inventory: Inventory = {
          id: itemId,
          vendorId:vendorId,
          productId:"123456",
          productName: productName,
          productCategory: productCategory,
          productBrand:productBrand,
          stockCnt:stockCnt,
          unit:unit,
          Description:Description,
          MRP:MRP
      };
      updatedInventories[oldInventoryIndex] = inventory;
      this.inventories = updatedInventories;
      this.inventoriesUpdated.next([...this.inventories]);
      //this.router.navigate(["/list",post.content]);
      this.router.navigate(['/product/'+vendorId]);
    });
}



}