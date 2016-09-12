/**
 * Created by Kostylo on 9/10/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { ProductsService } from './products.service';

import { Router } from '@angular/router';

@Component({
    selector: 'p-list',
    template: `
    <div class="plist-wrap">
    <ul class="plist">
    <li *ngFor="let product of products"
        (click)="gotoDetail(product)">
        <img src="{{manNike}}" alt="">
        <p>{{product.name}}</p> 
    </li>
    </ul>
</div>


    `,
    styles: [`
    
     .plist {
        list-style-type: none;
        margin-top: 20px;
        width: 100%;
        
     }
     .plist li {
        width: 50%;
        margin: 5px auto;
        cursor: pointer;
        border: thin solid #888888;
        text-align: center;
        background-color: #ffffff;
     }
     
     h2 {
        height: 10%;
        border: 1px solid black;
        text-align: center;
        
     }
     @media screen and (max-width: 700px) {
        .plist {
            width:100%;
            margin: 10px auto;
            padding:0;
        
        }
        
        .plist li {
            max-width:50%;
            margin:auto auto 5px auto;
        
        }
        
        .plist li img {
            max-width: 50%;
        }
     }
   `]
})

export class ProductListComponent implements OnInit {

    manNike = 'images/shoes/manNike.jpg';
    products: Products[];

    constructor(private router: Router,
                private productsService: ProductsService) {
    }

    getProducts(): void {
        this.productsService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    gotoDetail(product: Products): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
        //this.router.navigate(['/detail', this.selectedProduct.id]);
    }
}