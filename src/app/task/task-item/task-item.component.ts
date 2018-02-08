import { itemAnim } from './../../anims/item.anim';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item: any;
  @Output() taskClick = new EventEmitter<void>();
  avatar: any;
  widerPriority = 'in';
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner.avatar;
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    // click事件不再继续向上传播
    ev.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in';
  }

}
