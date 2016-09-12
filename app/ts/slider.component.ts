/**
 * Created by Kostylo on 9/9/2016.
 */
import { Component } from '@angular/core';

import { Image } from './image.interface';

@Component({
    selector: 'my-slider',
    template: `
    <div class="carousel">
        <ul class="slides">
            <li *ngFor="let image of images; let index=index">
                <h2>{{image.title}}</h2>
                <img src="{{image.url}}" alt="">
            </li>   
        </ul>
    </div>    
`,
    styleUrls: ['app/css/slider.component.css']
})

export class SliderComponent {

    img = ["images/covered.jpg","images/generation.jpg","images/potter.jpg"];

   public images = IMAGES;
}

const IMAGES:Image[] = [
    { "title": "We are covered", "url": "images/shoes/nikeShow.png" },
    { "title": "Generation Gap", "url": "images/shoes/nikeShow.png" },
    { "title": "New Product",    "url": "images/shoes/nikeShow.png" },
    { "title": "New Design",     "url": "images/shoes/nikeShow.png" },
    { "title": "Buy It Now",     "url": "images/shoes/nikeShow.png" }
];