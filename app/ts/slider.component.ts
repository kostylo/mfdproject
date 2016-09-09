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
            
            <li *ngFor="let image of images">
                <h2>{{image.title}}</h2>
                <img src="{{image.url}}" alt="">
            </li>   
            
        </ul>
    
    </div>    
`,
    styleUrls: ['app/css/slider.component.css']
})

export class SliderComponent {

   public images = IMAGES;
}

const IMAGES:Image[] = [
    { "title": "We are covered", "url": "images/covered.jpg" },
    { "title": "Generation Gap", "url": "images/generation.jpg" },
    { "title": "Potter Me", "url": "images/potter.jpg" },
    { "title": "Pre-School Kids", "url": "images/preschool.jpg" },
    { "title": "Young Peter Cech", "url": "images/soccer.jpg" }
];