import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const taskRoutes: Route[] = [
  { path: '', component: TaskHomeComponent }
];

export const taskRouting: ModuleWithProviders = RouterModule.forChild(taskRoutes);
