import { DragData } from './../drag-drop.service';
import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService } from '../drag-drop.service';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[appDroppable][dropTags][dragEnterClass]'
})
export class DropDirective {
  @Output() dropped = new EventEmitter<DragData>();
  @Input()
  dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$: Observable<any>;
  constructor(private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService) {
    this.data$ = this.service.getDragData().take(1);
    // this.data$ = this.service.getDragData();
  }
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.effectEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.effectEffect', 'none');

        }
      });
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }
}
