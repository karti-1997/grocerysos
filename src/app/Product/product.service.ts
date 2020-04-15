import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Inventory } from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
constructor(private http: HttpClient) {}

addinventory(){

}
}