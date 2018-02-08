import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @Output() onChangeTitle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit();
  }

  onMoveAllClick() {
    this.moveAll.emit();
  }

  onDeleteClick() {
    this.onDelete.emit();
  }

  onChangeListTitleClick() {
    this.onChangeTitle.emit();
  }
}
