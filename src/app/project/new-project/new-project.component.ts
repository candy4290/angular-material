import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {
  title = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<NewProjectComponent>,
  private oc: OverlayContainer) { }

  ngOnInit() {
    this.title = this.data.title;
    if (this.data.dark) {
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    }else {
      this.oc.getContainerElement().classList.remove('myapp-dark-theme');
    }
    // this.oc.getContainerElement().classList.add('myapp-dark-theme');
  }

  onClick() {
    this.dialogRef.close('hhh');
  }

}
