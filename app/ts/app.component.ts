import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/products" routerLinkActive="active">Products</a>
            <a routerLink="/campaigns" routerLinkActive="active">Campaigns</a>
            <a routerLink="/brands" routerLinkActive="active">Brands</a>
            <a routerLink="/services" routerLinkActive="active">Services</a>
            <a routerLink="/about-us" routerLinkActive="active">About-Us</a>
        </nav>
        <router-outlet></router-outlet>`
})
export class AppComponent {
    title = 'Whats Up';
}
