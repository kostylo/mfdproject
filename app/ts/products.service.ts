import { Injectable } from '@angular/core'; //typescript see the @injectable decorator and emits metadata about our service so angular can inject other dependencies

import { Products } from './products'; // importing class
import { PRODUCTS } from './mock-data';// array of products

@Injectable()
export class ProductsService {

    getProducts(): Promise<Products[]> {
        return Promise.resolve(PRODUCTS);
    }
}