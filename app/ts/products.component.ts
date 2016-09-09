/**
 * Created by Kostylo on 9/4/2016.
 */
import { Component }        from '@angular/core';

import { Products }         from './products';

import { ProductsService }  from './products.service';
import { OnInit }           from '@angular/core';

@Component({
    selector: 'my-products',
    templateUrl: 'app/html/products.component.html',
    styleUrls: ['app/css/products.component.css'],
    providers: [ProductsService]
})

export class ProductsComponent implements OnInit{

    products: Products[];
    selectedProduct: Products;
    constructor(private productsService: ProductsService) {}

    getProducts(): void {
       this.productsService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Products): void {
        this.selectedProduct = product;
    }
}