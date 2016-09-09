import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './ts/app.component';
import { ProductsComponent } from "./ts/products.component";
import { CampaignsComponent } from "./ts/campaigns.component";
import { ServicesComponent } from "./ts/services.component";
import { BrandsComponent } from "./ts/brands.component";
import { AboutUsComponent } from "./ts/about-us.component";

import { routing } from "./ts/app.routing";



@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [
      AppComponent,
      ProductsComponent,
      CampaignsComponent,
      ServicesComponent,
      BrandsComponent,
      AboutUsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
