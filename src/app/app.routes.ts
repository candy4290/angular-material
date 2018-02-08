import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const loginRoutes: Route[] = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'project', loadChildren: './project/project.module#ProjectModule'},
    { path: 'tasklist', loadChildren: './task/task.module#TaskModule'},
    // { path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
    { path: '', redirectTo: 'tasklist', pathMatch: 'full' },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(loginRoutes);
