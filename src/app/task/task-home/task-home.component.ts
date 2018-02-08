import { slideToRight } from './../../anims/router.anim';
import { NewTaskListComponent } from './../new-task-list/new-task-list.component';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state: any;
  lists = [
    {
      id: 1,
      name: '待办',
      oreder: 1,
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatar1'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二：完成老板布置的ppt作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      order: 2,
      tasks: [
        {
          id: 1,
          desc: '任务三：项目代码评审',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务四：制定项目计划',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '赵六',
            avatar: 'avatar4'
          },
          dueDate: new Date()
        }
      ]
    },
  ];
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewTaskDialog() {
    this.dialog.open(NewTaskListComponent, {data: {title: '新增列表名称'}});
  }

  // 打开新增task的dialog
  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task: any) {
    this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表', content: '确定删除该任务列表吗？'}});
    dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }

  launchChangeTitleDialog() {
    this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称'}});
  }

  handleMove(srcData: any, list: any) {
    console.log(srcData);
    console.log(list);
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }

}
