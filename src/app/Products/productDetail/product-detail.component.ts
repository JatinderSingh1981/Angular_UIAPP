import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService } from '../../alert/alert.service';
import { ProductMaster } from '../../_models/productMaster';
import { ProductDetail } from '../../_models/productDetail';
import { ProductService } from '../../_services/product.service';

@Component(
    {
        selector: 'app-productDetail',
        templateUrl: './product-detail.component.html',
        providers: [ProductService, DecimalPipe]
    })
export class ProductDetailComponent implements OnInit {
    product: ProductMaster;
    isEditing: boolean = false;
    constructor(public routes: ActivatedRoute, public service: ProductService) {
    }

    ngOnInit(): void {
        this.routes.params.subscribe(parameters => {
            const id = parameters['id'];
            this.getProduct(id);
        });
    }

    getProduct(id: number) {
        this.service.getProduct(id)
            .subscribe((result) => {
                this.product = result.product;
            });
    }

    getPropertyValue(prod: ProductDetail) {
        //First of all check for propertyTypeId\propertyType, if it is value 4\Dropdown, which means dropdown
        //then look for look up source
        //then search that enumeration and filter and return value
        if (prod.propertyTypeId == 4)
            return prod.lookUpSource;
        else
            return prod.propertyValue;
    }
}
