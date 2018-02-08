import { DragDropService } from './drag-drop.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDirective } from './drag-drop/drop.directive';
import { DragDirective } from './drag-drop/drag.directive';

@NgModule({
  imports: [
    // CommonModule
  ],
  declarations: [DropDirective, DragDirective],
  exports: [
    DropDirective, DragDirective
  ],
  providers: [DragDropService]
})
export class DirectiveModule { }
