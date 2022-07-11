import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';

const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':id', component: DetailsComponent },
    { path: '**', component: ErrorComponent }
];

export const AppRouterWithProvider: any[] =[];
export const AppRouting: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes);