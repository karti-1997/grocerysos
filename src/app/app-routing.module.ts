import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './Vendors/vendor/vendor.component';
import {VendorCreateComponent} from './Vendors/VendorCreate/VendorCreate.component';
import { InventoryComponent} from './Product/inventory/inventory.component';
import {InventoryCreateComponent} from './Product/InventoryCreate/InventoryCreate.Component';
import {OrdercomponentComponent} from './ordercomponent/ordercomponent.component';
import {SigninPageComponent} from './signin-page/signin-page.component';
import {OrderListComponent} from './ordercomponent/orderlist/orderlist.component';
import { FranchiseComponent } from './franchise/franchise.component';
const routes: Routes = [
{path: '',component: VendorComponent},
{path: 'product/:VendorId', component: InventoryComponent},
{path: 'create', component:VendorCreateComponent},
{path: 'create/:VendorId', component: VendorCreateComponent},
{path: 'editinventory/:VendorId', component: InventoryCreateComponent},
{path: 'editinventory/:VendorId/:itemid', component: InventoryCreateComponent},
{path: 'makeorder/:VendorId', component: OrdercomponentComponent},
{path: 'makeorder/:VendorId/:customerId', component: OrdercomponentComponent},
{path: 'signin', component: SigninPageComponent},
{path: 'orderlist/:VendorId',component: OrderListComponent},
{path: 'createfranchise',component: FranchiseComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
