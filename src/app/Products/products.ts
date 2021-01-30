import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { Product } from '../../_models/product';
import { ProductService } from '../../_services/product.service';

@Component(
    { selector: 'app-product', 
    templateUrl: './products.html', 
    providers: [ProductService, DecimalPipe] 
})
export class Products implements OnInit {
    products$: Product[] = [];

    constructor(public service: ProductService) {
    }
    
    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.service.getAllProducts()
            .subscribe((result) => {
                this.products$ = JSON.parse(result).Products;
            });
    }
}
