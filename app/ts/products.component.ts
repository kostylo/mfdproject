/**
 * Created by Kostylo on 9/4/2016.
 */
import { Component }        from '@angular/core';

import { Products }         from './products';

import { ProductsService }  from './products.service';
import { OnInit }           from '@angular/core';

import { Router }           from '@angular/router';

@Component({
    selector: 'my-products',
    templateUrl: 'app/html/products.component.html',
    styleUrls: ['app/css/products.component.css'],
})

export class ProductsComponent implements OnInit{

    kidPic = 'images/shoes/kid.jpg';
    womanPic = 'images/shoes/woman.png';
    manPic = 'images/shoes/man.png';
    manNike = 'images/shoes/manNike.jpg';

    products: Products[];

    constructor(private productsService: ProductsService,
                private router: Router) {}

    getProducts(): void {
       this.productsService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    gotoDetail(product: Products): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }
}