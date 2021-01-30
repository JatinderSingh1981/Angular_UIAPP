import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { ProductMaster } from '../../_models/productMaster';
import { ProductService } from '../../_services/product.service';

@Component(
    { selector: 'app-product', 
    templateUrl: './productlist.component.html', 
    providers: [ProductService, DecimalPipe] 
})
export class ProductList implements OnInit {
    products$: ProductMaster[] = [];

    constructor(public service: ProductService) {
    }
    
    ngOnInit(): void {
        this.getProductList();
    }

    getProductList() {
        this.service.getProductList()
            .subscribe((result) => {
                this.products$ = result.productList;
            });
    }
}
