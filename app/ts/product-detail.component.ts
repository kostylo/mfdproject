/**
 * Created by Kostylo on 9/10/2016.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Products } from './products';
import { ProductsService } from './products.service';

@Component({
    selector: 'product-detail',
    template: `
<section>
  <div class="p-detail">
     <div class="d-1">
        <img src="{{filterPic}}" alt="">
    </div>
    <div class="d-4">
    <div *ngIf="product" class="d-2">
        <h2>{{product.name}}</h2>
        <img src="{{manNike}}" alt="">
            <button (click)="goBack()">Back</button>
     </div>
     <div class="d-3">
     <img src="{{info}}" alt="">
     </div>
     </div>
  </div>          
</section>`,
    styles: [`
    
    .d-1 { margin-top:30px;}
    
    `]
})

export class ProductDetailComponent implements OnInit{

    product: Products;
    filterPic = 'images/filter.png';
    manNike = 'images/shoes/manNike.jpg';
    info = 'images/info.png';

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute) {}

    goBack(): void {
        window.history.back();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.productsService.getProduct(id)
                .then(product => this.product = product);
        });
    }
}