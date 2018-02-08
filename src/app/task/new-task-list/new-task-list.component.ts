import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Input, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-new-task-list',
    templateUrl: './new-task-list.component.html',
    styleUrls: ['./new-task-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskListComponent implements OnInit {
    title = '';
    constructor(@Inject(MAT_DIALOG_DATA) private data: any,
                private dialogRef: MatDialogRef<NewTaskListComponent>) { }

    ngOnInit() {
        this.title = this.data.title;
    }
}
