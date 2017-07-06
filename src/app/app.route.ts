import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './component/user.component';
import { AboutComponent } from './component/about.component';


const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 