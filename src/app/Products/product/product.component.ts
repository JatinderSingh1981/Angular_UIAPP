import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ProductMaster, ProductDetail, Enumeration } from '../../_models';
import { ProductService, EnumService } from '../../_services';
import { AlertService } from '../../alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component(
    {
        selector: 'app-product',
        templateUrl: './product.component.html'
    })
export class Product implements OnInit {
    product?: ProductMaster;

    productTypeList?: Enumeration;
    processorTypeList?: Enumeration;
    brandList?: Enumeration;

    viewDetails: boolean = false;
    viewDetailButton: boolean = false;
    isEditing: boolean = false;
    viewBackButton: boolean = false;

    options = {
        autoClose: true,
        keepAfterRouteChange: false
    };

    @Input()
    set selectedProduct(selected: ProductMaster) {
        this.product = selected;
    }
    //get selectedProduct(): ProductMaster { return this.product; }

    @Input()
    set showDetailButton(show: boolean) {
        this.viewDetailButton = show;
        this.showDetails();
    }

    showDetails() {
        this.viewDetails = !this.viewDetailButton;
    }
    setIsEditing(val: boolean) {
        this.isEditing = val;
    }
    showAlertMessage(showSuccessMessage: boolean, message: string) {
        if (showSuccessMessage)
            this.alertService.success(message, this.options);
        else
            this.alertService.error(message, this.options);
    }

    //private cdr: ChangeDetectorRef, 
    constructor(private alertService: AlertService,
        private routes: ActivatedRoute,
        private service: ProductService,
        private enumService: EnumService) {
    }

    ngOnInit(): void {
        this.routes.params.subscribe(parameters => {
            const id = parameters['id'];
            if (id > 0) {

                let getProductType = this.enumService.getProductType();
                let getProcessorType = this.enumService.getProcessorType();
                let getBrand = this.enumService.getBrand();

                //Parallel execution of dropdowns
                forkJoin([getProductType, getProcessorType, getBrand]).subscribe(results => {
                    //then do it sequentially to get the results of the product.
                    //In our case I can do it parallel as well
                    this.service.getProduct(id)
                        .subscribe((prodResult) => {
                            this.productTypeList = results[0].enum;
                            this.processorTypeList = results[1].enum;
                            this.brandList = results[2].enum;

                            this.product = prodResult.product;
                        });
                });
                //this.getProduct(id);
                this.showDetailButton = false;
                this.viewBackButton = true;
                this.setIsEditing(false);
            }
        });
    }

    
    editClicked() {
        this.setIsEditing(true);
    }
    
    addPropertyClicked() {
        if (this.product) {
            var productDetail: ProductDetail = {
                id: 0,
                propertyName: '',
                propertyValue: '',
                lookupPropertyValue: '',
                propertyType: '',
                lookUpSource: '',
                productMasterId: this.product.productMasterId,
                propertyTypeId: 3, //Default this property value to 3 for string

            }
            this.product.productDetails.push(productDetail);
        }

    }

    //Finally, Save everything
    onSubmit() {
        this.updateProduct();
    }

    updateProduct() {
        if (this.product) {
            this.service.editProduct(this.product)
                .subscribe((result) => {
                    this.product = result.product;
                    this.showAlertMessage(result.isSuccess, result.message);
                    this.setIsEditing(!result.isSuccess); 
                });
        }
    }
}
