import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './ts/app.component';
import { ProductsComponent } from "./ts/products.component";
import { CampaignsComponent } from "./ts/campaigns.component";
import { ServicesComponent } from "./ts/services.component";
import { BrandsComponent } from "./ts/brands.component";
import { AboutUsComponent } from "./ts/about-us.component";
import { SliderComponent } from './ts/slider.component';
import { ProductDetailComponent } from './ts/product-detail.component';
import { ProductListComponent } from './ts/product-list.component';

import { routing } from "./ts/app.routing";
import { ProductsService } from "./ts/products.service";

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule],
  declarations: [
      AppComponent,
      ProductsComponent,
      CampaignsComponent,
      ServicesComponent,
      BrandsComponent,
      AboutUsComponent,
      SliderComponent,
      ProductDetailComponent,
      ProductListComponent
  ],
  providers: [ ProductsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
