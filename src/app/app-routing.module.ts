import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import {VendorCreateComponent} from './VendorCreate/VendorCreate.component';
import { InventoryComponent} from './inventory/inventory.component';
import {InventoryCreateComponent} from './InventoryCreate/InventoryCreate.Component';
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
{path: 'product', component: InventoryComponent},
{path: 'create', component:VendorCreateComponent},
{path: 'edit/:vendorId', component: VendorCreateComponent},
{path: 'editinventory/:id', component: InventoryCreateComponent},
{path: 'editinventory', component: InventoryCreateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
