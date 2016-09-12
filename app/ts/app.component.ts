import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="h-1">
                <label class="brand">BRAND</label><label class="logo">LOGO</label>
            </div>
            <div class="h-2">
                <ul class="h-info">
                    <li>tel: 090-223 44 66</li>    
                    <li>email: help@trendd.com</li>
                </ul>
                <ul class="h-menu">
                    <li id="basket">basket</li>
                    <li id="login"><a>LOGIN</a></li>    
                    <li id="register"><button>REGISTER<span>></span></button></li>
                </ul>
            </div>
        </header>
        <nav>
            <a routerLink="/products" routerLinkActive="active">PRODUCTS</a>
            <a routerLink="/campaigns" routerLinkActive="active">CAMPAIGNS</a>
            <a routerLink="/brands" routerLinkActive="active">BRANDS</a>
            <a routerLink="/services" routerLinkActive="active">SERVICES</a>
            <a routerLink="" routerLinkActive="active">ABOUT US </a>
            <div class="search"><input></div>
        </nav>
        <router-outlet></router-outlet>
        <section class="footer">
            <div class="column"><p>BRAND LOGO</p></div>
            <div class="column">
                <ul class="f-menu">
                    <li>About Us</li>
                    <li>Faq</li>
                    <li>Terms and Conditions</li>
                    <li>Secure Payments</li>
                    <li>Shipping</li>
                    <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
                </ul>
            </div>
            <div class="column">
                <ul class="f2-menu">
                    <li>FB</li>
                    <li>Twit</li>
                    <li>Pin</li>
                </ul>
            </div>
        </section>`
})
export class AppComponent {
}
