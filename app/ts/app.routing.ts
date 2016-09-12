/**
 * Created by Kostylo on 9/4/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent }    from './products.component';
import { CampaignsComponent }   from './campaigns.component';
import { BrandsComponent }      from './brands.component';
import { ServicesComponent }    from './services.component';
import { AboutUsComponent }     from './about-us.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'list',
        component: ProductListComponent
    },
    {
        path: 'campaigns',
        component: CampaignsComponent
    },
    {
        path: 'brands',
        component: BrandsComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'contact',
        component: AboutUsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
