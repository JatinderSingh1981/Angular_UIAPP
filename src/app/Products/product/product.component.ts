import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductMaster } from '../../_models/productMaster';


@Component(
    {
        selector: 'app-product',
        templateUrl: './product.component.html'
    })
export class Product implements OnInit {
    product?: ProductMaster;
    viewDetails: boolean = false;

    @Input()
    set selectedProduct(selected: ProductMaster) {
        this.product = selected;
    }
    //get selectedProduct(): ProductMaster { return this.product; }

    @Input()
    set showDetails(show: boolean) {
        this.viewDetails = show;
    }
    constructor() {
    }

    ngOnInit(): void {
    }
}
