import { CopyTaskComponent } from './copy-task/copy-task.component';
import { SharedModule } from './../shared/shared.module';
import { taskRouting } from './task.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    taskRouting
  ],
  declarations: [NewTaskListComponent, TaskHomeComponent,
    TaskHeaderComponent, TaskListComponent, TaskItemComponent, NewTaskComponent, CopyTaskComponent],
  entryComponents: [NewTaskComponent, CopyTaskComponent, ConfirmDialogComponent, NewTaskListComponent]
})
export class TaskModule { }
