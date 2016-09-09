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
        path: 'about-us',
        component: AboutUsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
