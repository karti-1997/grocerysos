import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './Vendors/vendor/vendor.component';
import {VendorCreateComponent} from './Vendors/VendorCreate/VendorCreate.component';
import { InventoryComponent} from './Product/inventory/inventory.component';
import {InventoryCreateComponent} from './Product/InventoryCreate/InventoryCreate.Component';
const routes: Routes = [{
  path: '',
  component: VendorComponent,
  /*children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]*/
},
{path: 'product/:VendorId', component: InventoryComponent},
{path: 'create', component:VendorCreateComponent},
{path: 'create/:VendorId', component: VendorCreateComponent},
{path: 'editinventory/:itemid', component: InventoryCreateComponent},
{path: 'editinventory/:VendorId', component: InventoryCreateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
