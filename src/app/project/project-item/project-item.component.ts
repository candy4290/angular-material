import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { cc } from '../../anims/card.anim';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cc
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item: any;
  @Output() Invite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  onInvite() {
    this.Invite.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDeleteClick() {
    this.onDelete.emit();
  }
}
