import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h3 mat-dialog-title>{{title}}</h3>
    <div mat-dialog-content>
    {{content}}
    </div>
    <div mat-dialog-actions>
      <button type="button" mat-raised-button color="primary" (click)="onClick()">确定</button>
      <button type="button" mat-button mat-dialog-close>取消</button>
    </div>
  `,
  styles: [

  ]
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
