import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <section class="header">
            <div class="column">BRAND LOGO</div>
            <div class="column">tel | email | login | register</div>
        </section>
        <nav>
            <a routerLink="/products" routerLinkActive="active" class="column">Products</a>
            <a routerLink="/campaigns" routerLinkActive="active" class="column">Campaigns</a>
            <a routerLink="/brands" routerLinkActive="active" class="column">Brands</a>
            <a routerLink="/services" routerLinkActive="active" class="column">Services</a>
            <a routerLink="/about-us" routerLinkActive="active" class="column">About-Us</a>
        </nav>
        <router-outlet></router-outlet>
        <section class="footer">
            <div class="column">BRAND LOGO</div>
            <div class="column">About Us | Faq | Terms and Conditions | Secure Payments | Shipping | Contact</div>
            <div class="column">FB | Twit | Else</div>
        </section>`
})
export class AppComponent {
    title = 'Whats Up';
}
