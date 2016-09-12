/**
 * Created by Kostylo on 9/4/2016.
 */
import { Component } from '@angular/core';

 class Newsletter {
     fullName: string;
     email: string;
     newsType: string;
 }

@Component({
    selector: 'newsletter',
    templateUrl: 'app/html/about-us.component.html',
    styleUrls: ['app/css/about-us.component.css']
})

export class AboutUsComponent {

    model: Newsletter = new Newsletter();

    submitted = false;

    register() {
        this.submitted = true;
    }
}