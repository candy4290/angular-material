import { ProjectListComponent } from './project-list/project-list.component';
import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Route[] = [
    { path: '', component: ProjectListComponent }
    // { path: '', redirectTo: 'project', pathMatch: 'full'}
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(routes);
