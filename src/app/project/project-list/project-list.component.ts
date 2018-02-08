import { slideToRight } from './../../anims/router.anim';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { InviteComponent } from './../invite/invite.component';
import { NewProjectComponent } from './../new-project/new-project.component';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { listAnimm } from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimm],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state: any;
  projects = [
    {
      'id': 1,
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'id': 2,
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/1.jpg'
    }
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目:', dark: true}});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.projects = [...this.projects,
        {id: 3, name: '一个新项目', desc: '这是一个新项目', coverImg: 'assets/img/covers/3.jpg'},
        {id: 4, name: '又一个新项目', desc: '这是又一个新项目', coverImg: 'assets/img/covers/4.jpg'}
      ];
      this.cd.markForCheck();
    });
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    // dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }

  launchUpdateDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: '编辑项目:'}});
  }

  launchConfirmDialog(project: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '确定删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(res => {console.log(res);
    this.projects = this.projects.filter(p => p.id !== project.id);
    this.cd.markForCheck();
    });
  }

}
